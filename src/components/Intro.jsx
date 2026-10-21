import { site } from '../content/site.js'

export default function Intro() {
  return (
    <section className="section section--flush">
      <div className="container hero__intro">
        <div data-anim="up">
          <p className="hero__lede">{site.lede}</p>
          <div className="hero__cta">
            <a className="btn" href={site.ctaPrimary.href}>{site.ctaPrimary.label}</a>
            {site.ctaSecondary && <a className="btn btn--ghost" href={site.ctaSecondary.href}>{site.ctaSecondary.label}</a>}
          </div>
        </div>
        <div className="stats">
          {site.stats.map((s) => (
            <div className="stat" key={s.t}>
              <span className="stat__n">{s.n}</span>
              <span className="stat__t">{s.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
