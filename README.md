# Piyamon Portfolio v2

## Run
npm install
npm run dev

## Deploy
Push to GitHub, import in Vercel (framework: Vite). vercel.json already rewrites all routes to index.html.

## Edit text
- src/content/site.js  : everything on the one-page site
- src/content/cases.js : the three case pages (/work/brandcrew, /work/shopee, /work/silentvoice)

## Drop media into /public (names are already referenced in the content files)
- /public/character.png            transparent PNG of your 3D character, about 2000px tall
- /public/og.png                   1200x630 link preview
- /public/resume.pdf
- /public/work/brandcrew-cover.jpg, brandcrew-office.jpg, brandcrew-cards.jpg, brandcrew-budget.jpg
- /public/work/shopee-cover.jpg
- /public/work/silentvoice-cover.jpg, silentvoice-demo.mp4, silentvoice-htcon.jpg
- /public/intl/india.jpg, japan.jpg, malaysia.jpg
- /public/creative/*  (see creative[] in site.js; rename there if you prefer)

Any missing file shows a labelled grey placeholder instead of breaking the layout.
YouTube ids: put only the id (the part after v=) into the src field.

## 3D models (.glb)
- Put files in /public/models/. Compress first (this is what was done for the 5 you sent):
  npx @gltf-transform/cli optimize in.glb out.glb --compress draco --texture-compress false --join false --palette false --flatten false
- Draco decoder is self-hosted in /public/draco (no CDN dependency).
- In site.js an item is { label:'3D', type:'glb', src:'/models/x.glb', poster:'/creative/x.jpg', rotation:[x,y,z], hide:['ObjectName'], heavy:true }
  rotation: radians, use [-Math.PI/2,0,0] for things modelled lying flat. hide: Blender object names to hide. heavy: load only on click (files over ~2 MB).
  Flat ground planes/backdrops are hidden automatically (hideGround:false to keep them).
- Hero: site.heroModel points to a .glb shown instead of character.png (set to null to use the PNG). Put your character .glb there when ready.
- Viewer: src/components/ModelViewer.jsx (react-three-fiber + drei, procedural studio light, ACES tone mapping, sRGB).
  Materials get roughness capped at 0.45 for the glossy toy look; change in Model() if you prefer the raw export.

## Optional: three.js hero (already wired, see above)
Install: npm i three @react-three/fiber @react-three/drei
Replace <Character /> in src/components/Hero.jsx with a lazy-loaded Canvas. Settings that make colors match Blender:
renderer outputColorSpace = SRGBColorSpace, toneMapping = ACESFilmicToneMapping, <Environment preset="studio" />, <ContactShadows />, <Float />.
Keep the PNG as the poster/fallback so mobile never waits on the .glb.
# GDP-Portfolio
