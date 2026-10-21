export default function SectionHead({ n, eyebrow, title }) {
  return (
    <div className="section-head">
      <span className="num">{n}</span>
      <div>
        <span className="label section-head__eyebrow">{eyebrow}</span>
        <h2 className="section-head__title">{title}</h2>
      </div>
      <span className="num num--r" aria-hidden="true">{n}</span>
    </div>
  )
}
