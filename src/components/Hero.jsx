import { useState, lazy, Suspense } from 'react'
const ModelViewer = lazy(() => import('./ModelViewer.jsx'))
import { site } from '../content/site.js'
import SelectionFrame from './SelectionFrame.jsx'
import ScriptText from './ScriptText.jsx'

function Character() {
  const [ok, setOk] = useState(true)
  if (site.heroModel) {
    return (
      <div className="hero__character hero__character--3d" aria-hidden="true">
        <Suspense fallback={null}>
          <ModelViewer src={site.heroModel} spin={site.heroModelSpin ?? true} interactive={false} className="mv--hero" rotation={site.heroModelRotation} hide={site.heroModelHide} />
        </Suspense>
      </div>
    )
  }
  // PNG character if the file exists; otherwise nothing (the headline and year stand on their own)
  if (!site.characterSrc || !ok) return null
  return (
    <div className="hero__character" aria-hidden="true">
      <img src={site.characterSrc} alt="" onError={() => setOk(false)} />
    </div>
  )
}

export default function Hero() {
  return (
    <header className="hero">
      <div className="container hero__top">
        <span className="pill">{site.name}</span>
      </div>

      <div className="deco deco--orbs" aria-hidden="true">
        <Suspense fallback={null}>
          <ModelViewer src={site.decoModel} spin interactive={false} className="mv--deco" hideGround={false} />
        </Suspense>
      </div>
      <span className="deco deco--capsule" aria-hidden="true" />
      <span className="deco deco--star" aria-hidden="true"><svg viewBox="0 0 100 100"><path d="M50 2 L58 42 L98 50 L58 58 L50 98 L42 58 L2 50 L42 42 Z"/></svg></span>
      <div className="container hero__stage">
        <h1 className="hero__title">
          {site.titleLine1}<br />
          <ScriptText text={site.titleLine2} />
        </h1>
        <SelectionFrame className="hero__year">{site.year}</SelectionFrame>
        <Character />
      </div>

      <div className="container hero__bottom">
        {site.bottomLabels.map((l) => <span key={l} className="label">{l}</span>)}
      </div>
    </header>
  )
}
