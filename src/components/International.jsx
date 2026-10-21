import { international } from '../content/site.js'
import SectionHead from './SectionHead.jsx'
import Media from './Media.jsx'

export default function International() {
  return (
    <section className="section" id="international">
      <div className="container">
        <SectionHead n="02" eyebrow="International" title="Three countries, three AI programs" />
        <div className="intl">
          {international.map((it) => (
            <div key={it.country} className="intl__item">
              <Media item={{ type: 'image', src: it.photo, alt: it.title }} className="intl__photo" placeholder={`${it.country} photo`} />
              <div className="intl__meta">
                <span className="pill">{it.country}</span>
                {it.status && <span className="label">{it.status}</span>}
              </div>
              <h3 className="intl__title">{it.title}</h3>
              <p className="intl__where">{it.where}</p>
              <p className="intl__body">{it.body}</p>
              {it.link && !it.link.href.startsWith('[') && (
                <p style={{ marginTop: 12 }}><a href={it.link.href} target="_blank" rel="noreferrer">{it.link.label}</a></p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
