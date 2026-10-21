// Design-tool style bounding box: dashed border + 8 solid handles.
// hover=true shows it only on hover/focus.
const POS = [
  ['0%', '0%'], ['50%', '0%'], ['100%', '0%'],
  ['0%', '50%'], ['100%', '50%'],
  ['0%', '100%'], ['50%', '100%'], ['100%', '100%'],
]
export default function SelectionFrame({ children, hover = false, className = '', as: Tag = 'div', ...rest }) {
  return (
    <Tag className={`sel ${hover ? 'sel--hover' : ''} ${className}`} {...rest}>
      {children}
      <span className="sel__box" aria-hidden="true" />
      {POS.map(([l, t], i) => (
        <span key={i} className="sel__h" style={{ left: l, top: t }} aria-hidden="true" />
      ))}
    </Tag>
  )
}
