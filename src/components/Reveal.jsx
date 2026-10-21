import { useEffect, useRef, useState } from 'react'
// Fade-up once when scrolled into view. Respects reduced motion via CSS.
export default function Reveal({ children, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setOn(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { rootMargin: '0px 0px -10% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <Tag ref={ref} className={`reveal ${on ? 'is-in' : ''} ${className}`} {...rest}>{children}</Tag>
}
