// Renders "and the {AI} that markets them." with {AI} in the outlined script font.
export default function ScriptText({ text }) {
  const parts = text.split(/(\{[^}]+\})/g)
  return parts.map((p, i) =>
    p.startsWith('{') ? <span key={i} className="script">{p.slice(1, -1)}</span> : <span key={i}>{p}</span>
  )
}
