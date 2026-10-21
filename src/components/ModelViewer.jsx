import { Suspense, useEffect, useRef, useState, Component } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useAnimations, Environment, Lightformer, ContactShadows, Center, OrbitControls, Html } from '@react-three/drei'
import * as THREE from 'three'

// Draco decoder, self-hosted in public/draco (copied from three/examples/jsm/libs/draco/gltf).

const DRACO = '/draco/'

function Model({ src, spin = true, glossy = true, rotation = [0, 0, 0], hide = [], hideGround = true }) {
  const group = useRef()
  const { scene, animations } = useGLTF(src, DRACO)
  const { actions } = useAnimations(animations, group)
  const { camera, controls, size } = useThree()

  useEffect(() => {
    // Play every baked animation (e.g. the candle flame)
    Object.values(actions).forEach((a) => a?.reset().fadeIn(0.3).play())
    // Nudge materials toward the glossy toy look of the reference, keep colors as exported
    // Hide helper objects exported from Blender (ground planes, backdrops) by node name
    // three.js strips dots and spaces from node names ("Cube.036" becomes "Cube036"), so match loosely
    const norm = (n) => String(n || '').replace(/[^\w-]/g, '')
    const hideSet = new Set(hide.map(norm))
    scene.traverse((o) => { if (hideSet.has(norm(o.name))) o.visible = false })
    // Fit camera to the visible model: distance from the bounding sphere and the vertical fov.
    const visibleBoxes = () => {
      const list = []
      group.current.updateWorldMatrix(true, true)
      group.current.traverse((o) => {
        if (!o.isMesh || !o.visible) return
        let p = o.parent, vis = true
        while (p) { if (p.visible === false) { vis = false; break } p = p.parent }
        if (!vis) return
        if (!o.geometry.boundingBox) o.geometry.computeBoundingBox()
        list.push({ o, bb: o.geometry.boundingBox.clone().applyMatrix4(o.matrixWorld) })
      })
      return list
    }
    const unionBox = (list) => list.reduce((b, { bb }) => b.union(bb), new THREE.Box3())

    // Blender scenes often ship a ground plane or backdrop. Hide anything that is very flat
    // and nearly as wide as the whole model, so the camera frames the actual object.
    const dropGround = () => {
      if (!hideGround) return
      const list = visibleBoxes()
      if (!list.length) return
      const all = unionBox(list).getSize(new THREE.Vector3())
      const footprint = Math.max(all.x, all.z)
      list.forEach(({ o, bb }) => {
        const sz = bb.getSize(new THREE.Vector3())
        const flat = sz.y < 0.08 * Math.max(sz.x, sz.z)
        const wide = Math.max(sz.x, sz.z) > 0.6 * footprint
        if (flat && wide) o.visible = false
      })
    }

    // Fit camera to the visible model: distance from the bounding sphere and the vertical fov.
    const fit = () => {
      dropGround()
      const box = unionBox(visibleBoxes())
      if (box.isEmpty()) return
      const sphere = box.getBoundingSphere(new THREE.Sphere())
      const fov = THREE.MathUtils.degToRad(camera.fov)
      const aspect = size.width / Math.max(size.height, 1)
      const hfov = 2 * Math.atan(Math.tan(fov / 2) * aspect)
      const dist = (sphere.radius * 1.1) / Math.sin(Math.min(fov, hfov) / 2)
      const dir = new THREE.Vector3(0.55, 0.38, 1).normalize()
      camera.position.copy(dir.multiplyScalar(dist))
      camera.near = dist / 100; camera.far = dist * 100
      camera.lookAt(0, 0, 0); camera.updateProjectionMatrix()
      if (controls) { controls.target.set(0, 0, 0); controls.update() }
    }
    const t = setTimeout(fit, 30)
    scene.traverse((o) => {
      if (!o.isMesh) return
      o.castShadow = true; o.receiveShadow = true
      const mats = Array.isArray(o.material) ? o.material : [o.material]
      mats.forEach((m) => {
        if (!m) return
        // Real glass (KHR_materials_transmission) is invisible over a transparent canvas, because
        // there is nothing behind it to refract. Swap to a tinted, glossy, semi-transparent look.
        if (m.transmission > 0) {
          m.transmission = 0
          m.transparent = true
          m.opacity = 0.95
          m.clearcoat = 1
          m.clearcoatRoughness = 0.05
          m.roughness = Math.min(m.roughness ?? 0.1, 0.12)
          m.envMapIntensity = 1.1
          m.depthWrite = true
        }
        if (glossy && m.isMeshStandardMaterial) {
          m.roughness = Math.min(m.roughness ?? 0.5, 0.45)
          m.envMapIntensity = 0.9
        }
        m.needsUpdate = true
      })
    })
    return () => clearTimeout(t)
  }, [scene, actions, glossy, hide, hideGround, camera, controls, size.width, size.height])

  // spin: true = full rotation, 'swing' = gentle left-right sway so a character keeps facing the viewer
  useFrame(({ clock }, dt) => {
    if (!group.current) return
    if (spin === 'swing') group.current.rotation.y = Math.sin(clock.elapsedTime * 0.6) * 0.55
    else if (spin) group.current.rotation.y += dt * 0.35
  })

  return (
    <group ref={group}>
      <Center>
        <primitive object={scene} rotation={rotation} />
      </Center>
    </group>
  )
}

// Procedural studio lighting: no HDR download, works offline, consistent across models.
function Studio() {
  return (
    <Environment resolution={256} frames={1}>
      <Lightformer intensity={2.2} rotation-x={Math.PI / 2} position={[0, 5, -2]} scale={[10, 10, 1]} />
      <Lightformer intensity={1.2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[12, 2, 1]} />
      <Lightformer intensity={1.2} rotation-y={-Math.PI / 2} position={[6, 1, 1]} scale={[12, 2, 1]} />
      <Lightformer intensity={0.6} form="ring" color="#ffffff" position={[0, 3, 6]} scale={4} />
    </Environment>
  )
}

// If a model fails to load, show the poster instead of taking the page down.
class Guard extends Component {
  constructor(p) { super(p); this.state = { err: null } }
  static getDerivedStateFromError(err) { return { err } }
  render() { return this.state.err ? (this.props.fallback ?? null) : this.props.children }
}

function Loader() {
  return <Html center><span className="label">Loading 3D</span></Html>
}

/**
 * ModelViewer: lazy-mounts the WebGL canvas only when scrolled into view (and, for heavy
 * files, only after a click), so the page never pays for GPU work it is not showing.
 * props: src (glb path), poster (image), heavy (bool: require click), spin (auto-rotate), background (css color or 'transparent')
 */
export default function ModelViewer({ src, poster, heavy = false, spin = true, interactive = true, className = '', label, rotation, hide, hideGround = true }) {
  const [posterOk, setPosterOk] = useState(true)
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [armed, setArmed] = useState(!heavy)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setInView(true); return }
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: '200px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const show = inView && armed

  return (
    <div ref={ref} className={`mv ${className}`}>
      {!show && (
        <button type="button" className="mv__poster" onClick={() => setArmed(true)} aria-label={`Load 3D model ${label || ''}`}>
          {poster && posterOk ? <img src={poster} alt="" loading="lazy" onError={() => setPosterOk(false)} /> : <span className="mv__blank" />}
          {heavy && <span className="pill mv__cta">Load 3D model</span>}
        </button>
      )}
      {show && (
        <Guard fallback={<div className="mv__poster">{poster ? <img src={poster} alt="" /> : <span className="mv__blank" />}</div>}>
        <Canvas
          dpr={[1, 1.75]}
          resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
          shadows
          camera={{ position: [3, 2, 5], fov: 32 }}
          gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.05, outputColorSpace: THREE.SRGBColorSpace }}
          onCreated={({ gl }) => { gl.setClearColor(0x000000, 0) }}
        >
          <ambientLight intensity={0.35} />
          <directionalLight position={[4, 6, 5]} intensity={1.3} castShadow shadow-mapSize={[1024, 1024]} />
          <Suspense fallback={<Loader />}>
            <Studio />
            <Model src={src} spin={spin} rotation={rotation} hide={hide} hideGround={hideGround} />
          </Suspense>
          {interactive && <OrbitControls makeDefault enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 1.9} />}
        </Canvas>
        </Guard>
      )}
      {show && <span className="label mv__hint" aria-hidden="true">Drag to rotate</span>}
    </div>
  )
}

// Warm the cache for small models so the first tile appears instantly.
export function preloadModels(list) { list.forEach((s) => useGLTF.preload(s, DRACO)) }
