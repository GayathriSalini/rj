import { useEffect, useRef } from 'react'
import './App.css'
import { pick, routes, variants } from './variants.js'

const clamp = (n) => Math.min(1, Math.max(0, n))

// Design size of the laptop screen; everything scales from this.
const W = 1280
const H = 800

export default function App() {
  const stage = useRef(null)
  const key = pick(location.pathname)
  const variant = variants[key]

  useEffect(() => {
    const root = document.documentElement
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    let s0 = 1
    let s1 = 1

    const fit = () => {
      s0 = Math.min((innerWidth * 0.58) / W, (innerHeight * 0.58) / H)
      s1 = Math.max(innerWidth / W, innerHeight / H)
    }

    const tick = () => {
      const r = stage.current.getBoundingClientRect()
      const p = reduced ? 1 : clamp(-r.top / Math.max(1, r.height - innerHeight))
      const m = variants[key].motion(p)
      const z = reduced ? 1 : m.z
      root.style.setProperty('--lid', reduced ? 1 : m.l)
      root.style.setProperty('--z', z)
      root.style.setProperty('--ang', `${m.ang}deg`)
      root.style.setProperty('--tilt', `${m.tilt ?? 0}deg`)
      root.style.setProperty('--roty', `${m.roty ?? 0}deg`)
      root.style.setProperty('--ty', `${m.ty ?? 0}px`)
      root.style.setProperty('--s', (s0 + (s1 - s0) * z) * (m.sm ?? 1))
      root.style.setProperty('--bezel', 1 - clamp((z - 0.75) / 0.25))
    }

    const onResize = () => { fit(); tick() }
    fit()
    tick()
    addEventListener('scroll', tick, { passive: true })
    addEventListener('resize', onResize)
    return () => {
      removeEventListener('scroll', tick)
      removeEventListener('resize', onResize)
    }
  }, [key])

  return (
    <>
      <section className="stage" ref={stage}>
        <div className="viewport">
          <div className="scene">
            <div className="lid">
              <div className="badge">◈</div>
              <div className="screen">
                <div className="off" />
                <div className="sheen" />
                <div className="page">
                  <header>
                    <span className="mark">◈ nimbus</span>
                    <nav>
                      <a href="#work">Product</a>
                      <a href="#work">Pricing</a>
                      <a href="#work">Docs</a>
                    </nav>
                    <button>Start free</button>
                  </header>
                  <h1>Ship the whole thing.</h1>
                  <p className="sub">
                    One workspace for planning, building and shipping — without the
                    twelve tabs.
                  </p>
                  <div className="cta">
                    <button className="primary">Get started</button>
                    <button className="ghost">Watch demo</button>
                  </div>
                  <div className="glow" />
                </div>
              </div>
            </div>
            <div className="base">
              <div className="shadow" />
              <div className="keys" />
              <div className="pad" />
              <div className="lip" />
            </div>
          </div>
          <p className="hint">scroll</p>
          <nav className="switch">
            {routes.map((r) => (
              <a key={r} href={`/${r}`} className={r === key ? 'on' : ''}>
                {variants[r].label}
              </a>
            ))}
            <span>{variant.note}</span>
          </nav>
        </div>
      </section>

      <main id="work">
        <section className="band">
          <h2>Everything after the fold</h2>
          <p>
            The laptop opened, the screen took over, and the site carries on from
            there.
          </p>
        </section>
        <section className="grid">
          {[
            ['Plan', 'Roadmaps that survive contact with reality.'],
            ['Build', 'Branches, reviews and CI in one timeline.'],
            ['Ship', 'One button, every environment.'],
            ['Measure', 'Usage and errors next to the release that caused them.'],
          ].map(([t, d]) => (
            <article key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </section>
        <footer>
          <span>◈ nimbus</span>
          <span>© 2026</span>
        </footer>
      </main>
    </>
  )
}
