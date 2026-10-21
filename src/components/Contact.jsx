import { contact } from '../content/site.js'

export default function Contact() {
  return (
    <footer className="section" id="contact">
      <div className="container contact">
        <h2 className="contact__title">Let's <span className="script">talk</span></h2>
        <p className="contact__line" data-anim="up">{contact.line}</p>
        <a className="contact__email" href={`mailto:${contact.email}`}>{contact.email}</a>
        <div className="contact__links">
          {contact.links.map((l) => <a key={l.label} className="btn btn--ghost" href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{l.label}</a>)}
        </div>
      </div>
      <div className="container footer label">
        <span>{contact.footer}</span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}
