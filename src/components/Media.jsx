import { useState, lazy, Suspense } from 'react'
const ModelViewer = lazy(() => import('./ModelViewer.jsx'))
// One component for image / video / youtube with a labelled placeholder when the file is missing.
export default function Media({ item, className = '', placeholder = 'Media' }) {
  const [broken, setBroken] = useState(false)
  if (!item || !item.src || item.src.startsWith('[') || broken) {
    // Fall back to the poster when a video cannot play (codec not supported, file missing)
    if (item?.poster) return <div className={className}><img src={item.poster} alt={item.alt || ''} /></div>
    return <div className={className}>{placeholder}</div>
  }
  if (item.type === 'glb') {
    return (
      <div className={className}>
        <Suspense fallback={<span className="label">Loading 3D</span>}>
          <ModelViewer src={item.src} poster={item.poster} heavy={!!item.heavy} spin={item.spin !== false} label={item.alt} rotation={item.rotation} hide={item.hide} hideGround={item.hideGround !== false} />
        </Suspense>
      </div>
    )
  }
  if (item.type === 'youtube') {
    return (
      <div className={className}>
        <iframe src={`https://www.youtube-nocookie.com/embed/${item.src}?rel=0`} title={item.alt || 'Video'} loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    )
  }
  if (item.type === 'video') {
    return (
      <div className={className}>
        {item.controls
          ? <video src={item.src} poster={item.poster} controls preload="metadata" playsInline onError={() => setBroken(true)} />
          : <video src={item.src} poster={item.poster} autoPlay muted loop playsInline onError={() => setBroken(true)} />}
      </div>
    )
  }
  return (
    <div className={className}>
      <img src={item.src} alt={item.alt || ''} loading="lazy" onError={() => setBroken(true)} />
    </div>
  )
}
