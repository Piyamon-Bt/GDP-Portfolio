import { creative } from '../content/site.js'
import SectionHead from './SectionHead.jsx'
import Media from './Media.jsx'

export default function CreativeWork() {
  return (
    <section className="section" id="creative">
      <div className="container">
        <SectionHead n="03" eyebrow="Creative work" title="3D Models" />
        <div className="grid grid--center">
          {creative.map((c, i) => (
            <div key={i} className="tile-wrap" title={c.caption}>
              <Media item={c} className="tile" placeholder={c.label} />
              <span className="pill pill--accent tile__chip">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
