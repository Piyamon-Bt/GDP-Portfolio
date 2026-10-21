import { useState } from 'react'
import { illustration } from '../content/site.js'
import SectionHead from './SectionHead.jsx'
import Media from './Media.jsx'

// Layout: the first project is the tall featured card on the left.
// The other projects sit in one column on the right, card on the left and text on the right.
// Clicking any card opens that project's full set in a strip below the layout.

function Card({ pr, open, onToggle }) {
  // Hover shows the cover only (no 2x2 preview). Set PEEK to true to bring the 4-image preview back.
  const PEEK = false
  const peek = PEEK && pr.items.length >= 4 ? pr.items.slice(0, 4) : []
  return (
    <button type="button" className={`stack__card ${peek.length ? 'has-peek' : ''} ${open ? 'is-active' : ''}`} onClick={onToggle} aria-expanded={open} aria-label={`${pr.name}: ${open ? 'hide' : 'show'} all ${pr.items.length} pieces`}>
      <span className="stack__edge stack__edge--2" aria-hidden="true" />
      <span className="stack__edge stack__edge--1" aria-hidden="true" />
      <span className="stack__cover">
        <Media item={{ type: 'image', src: pr.items[0]?.src, alt: pr.items[0]?.alt }} className="stack__img" placeholder={pr.name} />
      </span>
      {peek.length > 0 && (
        <span className="stack__peek" aria-hidden="true">
          {peek.map((it, i) => <Media key={i} item={{ type: 'image', src: it.src, alt: '' }} className="stack__img" placeholder="" />)}
        </span>
      )}
      <span className="stack__count label">{pr.items.length === 1 ? '1 piece' : `${pr.items.length} pieces`}</span>
    </button>
  )
}

function Text({ pr, open }) {
  return (
    <div className="stack__body">
      <h3 className="illu-project__name">{pr.name}</h3>
      {pr.note && <p className="illu-project__note">{pr.note}</p>}
      <div className="illu-project__meta">
        {pr.year && <span className="label">{pr.year}</span>}
        <span className="label">{open ? 'Click card to close' : 'Click card to view all'}</span>
      </div>
    </div>
  )
}

export default function Illustration() {
  const [openIdx, setOpenIdx] = useState(null)
  const [first, ...rest] = illustration.projects
  const toggle = (i) => setOpenIdx((v) => (v === i ? null : i))
  const openPr = openIdx !== null ? illustration.projects[openIdx] : null

  return (
    <section className="section" id="illustration">
      <div className="container">
        <SectionHead n="04" eyebrow="Illustration" title={illustration.title} />
        {illustration.intro && <p className="illu__intro" data-anim="up">{illustration.intro}</p>}

        <div className="illu-layout">
          {first && (
            <article className="stack stack--feature">
              <Card pr={first} open={openIdx === 0} onToggle={() => toggle(0)} />
              <Text pr={first} open={openIdx === 0} />
            </article>
          )}
          <div className="illu-col">
            {rest.map((pr, i) => (
              <article className="stack stack--row" key={i + 1}>
                <Card pr={pr} open={openIdx === i + 1} onToggle={() => toggle(i + 1)} />
                <Text pr={pr} open={openIdx === i + 1} />
              </article>
            ))}
          </div>
        </div>

        {openPr && (
          <div className="stack__all-wrap" key={openIdx}>
            <div className="stack__all-head">
              <span className="label">{openPr.name}: all {openPr.items.length} {openPr.items.length === 1 ? 'piece' : 'pieces'}</span>
              <button type="button" className="btn btn--ghost" onClick={() => setOpenIdx(null)}>Close</button>
            </div>
            <div className={`illu ${openPr.wide ? 'illu--wide' : ''}`}>
              {openPr.items.map((it, i) => (
                <figure className="illu__item" key={i}>
                  <Media item={{ type: 'image', src: it.src, alt: it.alt }} className="illu__img" placeholder={it.alt} />
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
