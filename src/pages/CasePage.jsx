import { useRef } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import useScrollAnimations from '../lib/useScrollAnimations.js'
import { cases } from '../content/cases.js'
import SelectionFrame from '../components/SelectionFrame.jsx'
import Media from '../components/Media.jsx'

function Block({ b }) {
  if (b.p) return <p>{b.p}</p>
  if (b.ul) return <ul>{b.ul.map((x, i) => <li key={i}>{x}</li>)}</ul>
  if (b.ol) return <ol>{b.ol.map((x, i) => <li key={i}>{x}</li>)}</ol>
  if (b.callout) return <div className="callout">{b.callout}</div>
  if (b.credit) return (
    <p className="credit">{b.credit}<a href={b.link.href} target="_blank" rel="noreferrer">{b.link.label}</a>{b.after}</p>
  )
  if (b.team) return (
    <ul className="team">
      {b.team.map((t, i) => (
        <li key={i} className="agent" style={{ '--agent': t.color }}>
          <div className="agent__img"><img src={t.img} alt={t.title} loading="lazy" /></div>
          <div className="agent__body">
            <span className="agent__room label"><i className="agent__dot" aria-hidden="true" />Room {String(i + 1).padStart(2, '0')}</span>
            <h3 className="agent__title">{t.title}</h3>
            <p className="agent__text">{t.text}</p>
          </div>
        </li>
      ))}
    </ul>
  )
  if (b.steps) return (
    <ol className="steps">
      {b.steps.map((st, i) => (
        <li key={i} className="step">
          {st.model
            ? <Media item={{ type: 'glb', src: st.model, poster: st.poster, alt: st.title }} className="step__img step__img--3d" placeholder={st.title} />
            : <Media item={{ type: 'image', src: st.img, alt: st.title }} className="step__img" placeholder={st.title} />}
          <div className="step__body">
            <h3 className="step__title">{st.title}</h3>
            <p className="step__text">{st.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
  if (b.media) return <Media item={{ type: 'image', src: b.media, alt: b.alt }} className="media" placeholder={b.alt || 'Image'} />
  if (b.sources) return (
    <div className="sources">
      <div className="label" style={{ marginBottom: 8 }}>Sources</div>
      {b.sources.map((s) => <div key={s.href}><a href={s.href} target="_blank" rel="noreferrer">{s.label}</a></div>)}
    </div>
  )
  return null
}

export default function CasePage() {
  const { slug } = useParams()
  const c = cases[slug]
  const scope = useRef(null)
  useScrollAnimations(scope, [slug])
  if (!c) return <Navigate to="/" replace />
  return (
    <main className="case" ref={scope}>
      <div className="progress" aria-hidden="true" />
      <div className="container">
        <Link to="/#work" className="case__back label label--ink">
          <svg className="case__back-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5" /><path d="M11 18l-6-6 6-6" /></svg>
          Back to work
        </Link>
        <div className="case__head">
          <div>
            <h1 className="case__title">{c.title}</h1>
            <p className="case__one">{c.one}</p>
          </div>
          <dl className="case__facts">
            {c.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd style={{ margin: 0 }}>{v}</dd></div>)}
          </dl>
        </div>
        <SelectionFrame>
          <Media item={c.hero} className="case__hero" placeholder="Hero video or image" />
        </SelectionFrame>
        <div className="case__body">
          <nav className="case__toc" aria-label="On this page">
            <span className="label">On this page</span>
            {c.sections.map((s) => <a key={s.id} href={`#${s.id}`}>{s.h}</a>)}
          </nav>
          <article className="prose">
            {c.sections.map((s) => (
              <section key={s.id}>
                <h2 id={s.id}>{s.h}</h2>
                <div style={{ display: 'grid', gap: 16, marginTop: 16 }}>
                  {s.blocks.map((b, i) => <Block key={i} b={b} />)}
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </main>
  )
}
