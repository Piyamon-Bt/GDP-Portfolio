import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Wrap each word of an element in a span so we can stagger them.
function splitWords(el) {
  if (el.dataset.split) return el.querySelectorAll('.w')
  const walk = (node) => {
    if (node.nodeType === 3) {
      const frag = document.createDocumentFragment()
      node.textContent.split(/(\s+)/).forEach((t) => {
        if (!t) return
        if (/^\s+$/.test(t)) { frag.appendChild(document.createTextNode(t)); return }
        const s = document.createElement('span'); s.className = 'w'; s.textContent = t; frag.appendChild(s)
      })
      node.replaceWith(frag)
    } else if (node.nodeType === 1 && !node.classList.contains('script')) {
      ;[...node.childNodes].forEach(walk)
    } else if (node.nodeType === 1) {
      node.classList.add('w')
    }
  }
  ;[...el.childNodes].forEach(walk)
  el.dataset.split = '1'
  return el.querySelectorAll('.w')
}

// Count-up for numbers like "7", "3", "257 THB". Leaves non-numeric ("Lead") alone.
function countUp(el) {
  if (!el.dataset.orig) el.dataset.orig = el.textContent
  const m = el.dataset.orig.match(/^(\d+)(.*)$/)
  if (!m) return
  const end = +m[1], suffix = m[2]
  const o = { v: 0 }
  gsap.to(o, { v: end, duration: 1.2, ease: 'power3.out', onUpdate: () => { el.textContent = Math.round(o.v) + suffix },
    scrollTrigger: { trigger: el, start: 'top 85%', once: true } })
}

export default function useScrollAnimations(scopeRef, deps = []) {
  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(scopeRef)

      if (reduce) { gsap.set(q('[data-anim]'), { clearProps: 'all' }); return }

      // ---------- Hero intro (on load)
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      const title = q('.hero__title')[0]
      if (title) {
        const words = splitWords(title)
        tl.from(q('.hero__top .pill'), { y: -16, opacity: 0, duration: 0.6 })
          .from(words, { yPercent: 110, opacity: 0, rotate: 2, duration: 1, stagger: 0.07 }, 0.1)
          .from(q('.hero__year'), { scale: 0.9, opacity: 0, duration: 0.8 }, 0.6)
          .from(q('.hero__year .sel__h'), { scale: 0, duration: 0.4, stagger: 0.03, ease: 'back.out(3)' }, 0.9)
          .from(q('.hero__character'), { scale: 0.6, opacity: 0, y: 40, duration: 1.1, ease: 'elastic.out(1, 0.6)' }, 0.5)
          .from(q('.hero__bottom .label'), { y: 10, opacity: 0, duration: 0.6, stagger: 0.08 }, 1.0)
          // no scale here: a 3D canvas inside a deco measures its size on mount, and a scaled wrapper would be measured wrong
          .from(q('.deco'), { y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'back.out(2)', onComplete: () => window.dispatchEvent(new Event('resize')) }, 0.8)
      }

      // ---------- Hero scroll: text drifts up and fades, character parallax, decos drift
      gsap.to(q('.hero__title, .hero__year'), { yPercent: -30, opacity: 0.15, ease: 'none',
        scrollTrigger: { trigger: q('.hero'), start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to(q('.hero__character'), { yPercent: 25, ease: 'none',
        scrollTrigger: { trigger: q('.hero'), start: 'top top', end: 'bottom top', scrub: true } })
      q('.deco').forEach((d, i) => {
        gsap.to(d, { yPercent: (i % 2 ? -1 : 1) * (40 + i * 20), rotate: i % 2 ? -30 : 30, ease: 'none',
          scrollTrigger: { trigger: q('.hero'), start: 'top top', end: 'bottom top', scrub: 1 } })
      })

      // ---------- Section titles: word stagger with clip
      q('.section-head__title, .contact__title').forEach((h) => {
        const words = splitWords(h)
        gsap.from(words, { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.06, ease: 'power4.out',
          scrollTrigger: { trigger: h, start: 'top 85%', once: true } })
      })
      q('.section-head .num, .section-head .label').forEach((el) => {
        gsap.from(el, { opacity: 0, x: -10, duration: 0.6, scrollTrigger: { trigger: el, start: 'top 90%', once: true } })
      })

      // ---------- Section divider lines draw in from the left
      q('.section').forEach((s) => {
        gsap.fromTo(s, { '--line-w': '0%' }, { '--line-w': '100%', duration: 1.1, ease: 'power3.inOut',
          scrollTrigger: { trigger: s, start: 'top 95%', once: true } })
      })

      // ---------- Grids: wave stagger (cards, international, creative tiles, stats, languages)
      ;[['.cards', '.card'], ['.intl', '.intl__item'], ['.grid', '.tile-wrap'], ['.stats', '.stat'], ['.langs', '.lang'], ['.illu', '.illu__item']].forEach(([wrap, item]) => {
        q(wrap).forEach((w) => {
          gsap.from(w.querySelectorAll(item), { opacity: 0, y: 40, scale: 0.96, duration: 0.8, ease: 'back.out(1.4)',
            stagger: { each: 0.08, grid: 'auto', from: 'start' },
            scrollTrigger: { trigger: w, start: 'top 80%', once: true } })
        })
      })

      // ---------- Generic fade-up for anything tagged data-anim="up"
      q('[data-anim="up"]').forEach((el) => {
        gsap.from(el, { opacity: 0, y: 24, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } })
      })

      // ---------- Stats count-up
      q('.stat__n').forEach(countUp)

      // ---------- Media parallax inside covers (subtle)
      q('.card__cover img, .intl__photo img, .case__hero img').forEach((img) => {
        gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: 'none',
          scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true } })
      })

      // ---------- Contact: email line scales in, buttons stagger
      gsap.from(q('.contact__email'), { scale: 0.92, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: q('.contact'), start: 'top 70%', once: true } })
      gsap.from(q('.contact__links .btn'), { y: 16, opacity: 0, stagger: 0.08, duration: 0.6,
        scrollTrigger: { trigger: q('.contact'), start: 'top 65%', once: true } })

      // ---------- Case page: reading progress bar + prose sections
      const bar = q('.progress')[0]
      if (bar) gsap.to(bar, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 } })
      q('.prose > section').forEach((s) => {
        gsap.from(s, { opacity: 0, y: 28, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: s, start: 'top 85%', once: true } })
      })
      const ct = q('.case__title')[0]
      if (ct) gsap.from(splitWords(ct), { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.05, ease: 'power4.out' })
      gsap.from(q('.case__one, .case__facts'), { opacity: 0, y: 20, duration: 0.8, stagger: 0.1, delay: 0.3 })
    }, scopeRef)

    // Fonts load after first paint; refresh positions once they are in.
    document.fonts?.ready.then(() => ScrollTrigger.refresh())
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
