import { languages } from '../content/site.js'

export default function Languages() {
  return (
    <section className="section" id="languages">
      <div className="container">
        <span className="label" style={{ display: 'block', marginBottom: 24 }}>Languages</span>
        <div className="langs">
          {languages.map((l) => (
            <div key={l.name} className="lang">
              <div className="lang__name">{l.name}</div>
              <p className="lang__lvl">{l.lvl}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
