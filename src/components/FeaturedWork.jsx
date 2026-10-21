import { Link } from 'react-router-dom'
import { work, otherBuilds } from '../content/site.js'
import SectionHead from './SectionHead.jsx'
import SelectionFrame from './SelectionFrame.jsx'
import Media from './Media.jsx'

export default function FeaturedWork() {
  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHead n="01" eyebrow="Featured work" title="Two things I made" />
        <div className={`cards ${work.length !== 3 ? 'cards--4' : ''}`}>
          {work.map((w) => (
            <div key={w.slug}>
              <SelectionFrame hover as={Link} to={`/work/${w.slug}`} className="card">
                <Media item={w.coverVideo ? { type: 'video', src: w.coverVideo, poster: w.cover, alt: w.title } : { type: 'image', src: w.cover, alt: w.title }} className="card__cover" placeholder={`${w.title} cover`} />
                <span className="label">{w.label}</span>
                <h3 className="card__title">{w.title}</h3>
                <p className="card__one">{w.one}</p>
                <div className="tags">{w.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
              </SelectionFrame>
            </div>
          ))}
        </div>
        <p className="other" data-anim="up"><strong>Other builds.</strong> {otherBuilds}</p>
      </div>
    </section>
  )
}
