import { experience } from '../content/site.js'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <span className="label" style={{ display: 'block', marginBottom: 24 }}>Experience</span>
        <ul className="xp">
          {experience.map((e, i) => (
            <li key={i} className="xp__row" data-anim="up">
              <span className="xp__when">{e.when}</span>
              <span className="xp__org">{e.org}</span>
              <span className="xp__role">{e.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
