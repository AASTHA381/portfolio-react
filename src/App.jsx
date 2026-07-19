import { useRef, useState, useEffect } from 'react'
import {
  motion, useMotionValue, useSpring, useTransform, useScroll, useInView, animate,
} from 'framer-motion'
import {
  LINKEDIN, EMAIL, GITHUB, RESUME, capabilities, featured, more, experience, certs,
} from './data.js'

/* ---------------- helpers ---------------- */
function Magnetic({ as = 'a', className = '', children, ...props }) {
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 })
  const M = motion[as] || motion.a
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.3)
    y.set((e.clientY - r.top - r.height / 2) * 0.45)
  }
  const onLeave = () => { x.set(0); y.set(0) }
  return (
    <M ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ x, y }} className={className} {...props}>
      {children}
    </M>
  )
}

function Tile({ children }) {
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 })
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 })
  const [glow, setGlow] = useState({ x: '50%', y: '50%', on: false })
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height
    ry.set((px - 0.5) * 8); rx.set((py - 0.5) * -8)
    setGlow({ x: px * 100 + '%', y: py * 100 + '%', on: true })
  }
  const onLeave = () => { rx.set(0); ry.set(0); setGlow((g) => ({ ...g, on: false })) }
  return (
    <motion.div
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 720 }}
      className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-soft hover:shadow-softlg transition-shadow"
    >
      <div
        className="pointer-events-none absolute -inset-40 transition-opacity duration-300"
        style={{
          opacity: glow.on ? 1 : 0,
          background: `radial-gradient(circle at ${glow.x} ${glow.y}, rgba(139,92,246,.16), transparent 55%)`,
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  )
}

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, { duration: 1.1, ease: 'easeOut', onUpdate: (x) => setV(Math.round(x)) })
    return () => controls.stop()
  }, [inView, to])
  return <span ref={ref}>{v.toLocaleString('en-IN')}{suffix}</span>
}

const Reveal = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: [0.2, 0.7, 0.3, 1], delay }}
    className={className}
  >{children}</motion.div>
)

const Eyebrow = ({ children, center }) => (
  <span className={`inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.12em] text-violet-600 ${center ? 'justify-center' : ''}`}>
    <span className="h-[2px] w-6 rounded bg-gradient-to-r from-blue-500 to-violet-500" />{children}
  </span>
)

/* ---------------- sections ---------------- */
function Nav() {
  const [s, setS] = useState(false)
  useEffect(() => {
    const on = () => setS(window.scrollY > 20)
    addEventListener('scroll', on, { passive: true }); return () => removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`sticky top-0 z-50 transition-all ${s ? 'border-b border-slate-100 bg-white/75 backdrop-blur-md shadow-[0_4px_24px_-18px_rgba(15,23,42,.3)]' : 'border-b border-transparent'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 text-[17px] font-extrabold tracking-tight">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />Aastha Saini
        </a>
        <nav className="flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#capabilities" className="hidden hover:text-slate-900 sm:block">Capabilities</a>
          <a href="#work" className="hidden hover:text-slate-900 sm:block">Case Studies</a>
          <a href="#experience" className="hidden hover:text-slate-900 sm:block">Experience</a>
          <a href={RESUME} target="_blank" rel="noreferrer" className="rounded-[10px] bg-slate-900 px-4 py-2 font-semibold text-white hover:brightness-125">Résumé</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  const words = 'Building data-driven marketplaces & scalable products'.split(' ')
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }
  const word = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.3, 1] } } }
  return (
    <section className="relative px-6 pb-24 pt-28">
      <MeshBg />
      <div className="relative mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-4 py-2 text-[13px] font-semibold text-slate-600 shadow-soft backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />Product Manager · Analytics · Data-Driven Products
        </motion.div>
        <motion.h1 variants={container} initial="hidden" animate="show"
          className="max-w-4xl text-[clamp(38px,7vw,76px)] font-black leading-[1.01] tracking-[-0.045em]">
          {words.map((w, i) => (
            <motion.span key={i} variants={word} className={`mr-[0.25em] inline-block ${/data-driven|scalable/.test(w) ? 'grad-text' : ''}`}>{w}</motion.span>
          ))}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-6 max-w-[620px] text-[clamp(16px,2vw,19px)] text-slate-600">
          A product manager with a data & finance analytics background, now driving B2B marketplace products. At{' '}
          <b className="text-slate-900">TradeIndia</b> I authored 136 PRDs and led competitor benchmarking & app audits — and I ship data-driven products 0→1 on the side.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.62, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center gap-2">
          <a href="#work" className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-[15px] font-semibold shadow-soft transition-colors hover:border-transparent hover:text-white">
            <span className="relative z-10">View case studies</span>
            <span className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <Magnetic href={LINKEDIN} target="_blank" rel="noreferrer" className="px-3 py-3.5 text-[15px] font-bold text-slate-900 transition-colors hover:text-violet-600">
            Connect on LinkedIn →
          </Magnetic>
        </motion.div>
      </div>
    </section>
  )
}

function MeshBg() {
  const [t, setT] = useState({ x: 0, y: 0, h: 0 })
  useEffect(() => {
    const on = (e) => setT({ x: (e.clientX / innerWidth - 0.5) * 40, y: (e.clientY / innerHeight - 0.5) * 40, h: (e.clientX / innerWidth) * 40 - 20 })
    addEventListener('mousemove', on); return () => removeEventListener('mousemove', on)
  }, [])
  return (
    <>
      <motion.div aria-hidden className="pointer-events-none fixed -inset-1/4 -z-10"
        animate={{ x: t.x, y: t.y }} transition={{ type: 'spring', stiffness: 40, damping: 20 }}
        style={{
          filter: `blur(30px) hue-rotate(${t.h}deg)`, opacity: 0.7,
          background:
            'radial-gradient(420px 380px at 22% 20%, rgba(59,130,246,.20), transparent 60%),' +
            'radial-gradient(420px 360px at 80% 24%, rgba(139,92,246,.18), transparent 60%),' +
            'radial-gradient(420px 400px at 62% 78%, rgba(52,211,153,.16), transparent 62%)',
        }} />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 opacity-70"
        style={{
          backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '26px 26px',
          WebkitMaskImage: 'radial-gradient(circle at 50% 22%, #000, transparent 72%)',
          maskImage: 'radial-gradient(circle at 50% 22%, #000, transparent 72%)',
        }} />
    </>
  )
}

function Capabilities() {
  return (
    <section id="capabilities" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>Core capabilities</Eyebrow>
          <h2 className="mb-3 mt-3.5 text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.03em]">Where product meets <span className="grad-text">data</span></h2>
          <p className="mb-11 max-w-[600px] text-[16.5px] text-slate-600">Analytical rigour and technical fluency — hover the cards.</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <Tile>
                <div className="mb-3.5 grid h-11 w-11 place-items-center rounded-xl bg-slate-100 text-[21px]">{c.icon}</div>
                <h3 className="text-[16.5px] font-bold tracking-tight">{c.title}</h3>
                <p className="mt-1.5 text-[13.5px] text-slate-600">{c.desc}</p>
              </Tile>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudies() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>Featured work</Eyebrow>
          <h2 className="mb-3 mt-3.5 text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.03em]">Case studies</h2>
          <p className="mb-11 max-w-[600px] text-[16.5px] text-slate-600">Products taken from problem → PRD → design → build → live. Scroll to stack them.</p>
        </Reveal>

        <div className="relative">
          {featured.map((c, i) => (
            <div key={c.n} className="sticky mb-7" style={{ top: 96 + i * 14 }}>
              <motion.article
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
                className="grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-softlg md:grid-cols-2"
              >
                <div className="p-8">
                  <div className="text-xs font-extrabold tracking-[0.12em] text-violet-600">CASE STUDY / {c.n}</div>
                  <h3 className="mb-0.5 mt-2 text-[26px] font-extrabold tracking-[-0.02em]">{c.name}</h3>
                  <div className="mb-3.5 text-[13px] font-semibold text-slate-400">{c.role}</div>
                  <p className="mb-[18px] text-[14.5px] text-slate-600">{c.blurb}</p>
                  <div className="mb-[18px] flex flex-wrap gap-6">
                    {c.kpis.map((k, j) => (
                      <div key={j}>
                        <b className="grad-text block text-[26px] font-black tracking-[-0.02em]"><Counter to={k[0]} suffix={k[1]} /></b>
                        <span className="text-[11px] uppercase tracking-[0.05em] text-slate-400">{k[2]}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mb-[22px] flex flex-wrap gap-[7px]">
                    {c.tags.map((t) => (
                      <span key={t} className="cursor-default rounded-full border border-slate-100 bg-slate-100 px-[11px] py-[5px] text-[11.5px] font-semibold text-slate-600 transition-all hover:-translate-y-px hover:scale-[1.04] hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-500 hover:text-white">{t}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    <a href={c.read} target="_blank" rel="noreferrer" className="rounded-[10px] bg-slate-900 px-[15px] py-[9px] text-[13px] font-semibold text-white hover:brightness-125">Read case study →</a>
                    <a href={c.live} target="_blank" rel="noreferrer" className="rounded-[10px] border border-slate-200 px-[15px] py-[9px] text-[13px] font-semibold text-slate-600 hover:border-violet-500 hover:text-slate-900">Live</a>
                    <a href={c.code} target="_blank" rel="noreferrer" className="rounded-[10px] border border-slate-200 px-[15px] py-[9px] text-[13px] font-semibold text-slate-600 hover:border-violet-500 hover:text-slate-900">Code</a>
                  </div>
                </div>
                <div className="relative min-h-[300px] overflow-hidden bg-slate-100">
                  <img loading="lazy" src={c.img} alt={c.name} className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105" />
                </div>
              </motion.article>
            </div>
          ))}
        </div>

        <Reveal className="mt-12"><Eyebrow>More projects</Eyebrow><h2 className="mt-3 text-[clamp(22px,3vw,30px)] font-extrabold tracking-[-0.02em]">Four more shipped builds</h2></Reveal>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {more.map((m) => (
            <Reveal key={m.name}>
              <a href={m.prd} target="_blank" rel="noreferrer" className="grid grid-cols-[112px_1fr] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-softlg">
                <div className={`overflow-hidden ${m.img ? 'bg-slate-100' : 'grid place-items-center bg-gradient-to-r from-blue-500 to-violet-500 text-[34px]'}`}>
                  {m.img ? <img loading="lazy" src={m.img} alt={m.name} className="h-full w-full object-cover object-top" /> : m.emoji}
                </div>
                <div className="flex flex-col p-3.5">
                  <div className="text-[15px] font-bold tracking-tight">{m.name}</div>
                  <div className="my-0.5 text-[10.5px] font-bold uppercase tracking-[0.05em] text-violet-600">{m.dom}</div>
                  <div className="flex-1 text-[12.5px] text-slate-600">{m.d}</div>
                  <div className="mt-2 text-[12px] font-bold text-violet-600">Read case study →</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.5'] })
  const h = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>Trajectory</Eyebrow>
          <h2 className="mb-3 mt-3.5 text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.03em]">From analytics to product</h2>
          <p className="mb-11 max-w-[600px] text-[16.5px] text-slate-600">A data & finance foundation, deliberately moving into product.</p>
        </Reveal>
        <div ref={ref} className="relative pl-10">
          <div className="absolute left-3 top-1.5 bottom-1.5 w-[3px] overflow-hidden rounded bg-slate-200">
            <motion.div style={{ height: h }} className="absolute inset-x-0 top-0 bg-gradient-to-b from-blue-500 to-violet-500" />
          </div>
          {experience.map((e, i) => (
            <TimelineItem key={i} e={e} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ e }) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.6, margin: '0px 0px -20% 0px' })
  return (
    <div ref={ref} className={`relative pb-9 transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-40'}`}>
      <span className={`absolute -left-[34px] top-[3px] h-4 w-4 rounded-full border-[2.5px] bg-white transition-all ${inView ? 'border-violet-600 !bg-violet-600 shadow-[0_0_0_5px_rgba(139,92,246,.14)]' : 'border-slate-200'}`} />
      <div className="text-xs font-bold tracking-[0.04em] text-violet-600">{e.when}</div>
      <h3 className="mb-0.5 mt-1 text-[18px] font-bold">{e.title}</h3>
      <div className="text-sm text-slate-600">{e.org}</div>
      <p className="mt-1.5 max-w-[560px] text-[13.5px] text-slate-400">{e.points}</p>
    </div>
  )
}

function Marquee() {
  const lane = (arr, cls) => (
    <div className="marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_7%,#000_93%,transparent)]">
      <div className={`flex w-max gap-3.5 ${cls}`}>
        {[...arr, ...arr].map((c, i) => (
          <div key={i} className="flex items-center gap-2.5 whitespace-nowrap rounded-xl border border-slate-100 bg-white px-5 py-3 text-sm font-semibold text-slate-400 shadow-soft grayscale transition-all hover:-translate-y-0.5 hover:text-slate-900 hover:grayscale-0">
            <span className="text-base text-violet-600">◆</span>{c}
          </div>
        ))}
      </div>
    </div>
  )
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-6"><Eyebrow>Credentials</Eyebrow><h2 className="mt-3 text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.03em]">Certifications</h2></Reveal>
      </div>
      <div className="space-y-3.5">
        {lane(certs, 'track-l')}
        {lane([...certs].reverse(), 'track-r')}
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const btnRef = useRef(null)
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL) } catch { /* ignore */ }
    setCopied(true); burst(btnRef.current); setTimeout(() => setCopied(false), 2200)
  }
  return (
    <section className="px-6 py-24 text-center">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow center>Get in touch</Eyebrow>
          <h2 className="mt-3 text-[clamp(34px,6.5vw,68px)] font-black leading-[1.04] tracking-[-0.03em]">Let's <span className="grad-text">build something</span><br />together.</h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[17px] text-slate-600">Open to product roles where I can own problems 0→1.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Magnetic as="button" ref={btnRef}
              onClick={copy}
              className={`inline-flex items-center gap-2.5 rounded-xl border bg-white px-5 py-3.5 text-sm font-semibold shadow-soft transition-colors ${copied ? 'border-emerald-400 text-teal-600' : 'border-slate-200 hover:border-violet-500 hover:text-violet-600'}`}>
              {copied ? '✅ Copied ✓' : '✉️ Copy email'}
            </Magnetic>
            <Magnetic href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold shadow-soft hover:border-violet-500 hover:text-violet-600">in · LinkedIn</Magnetic>
            <Magnetic href={GITHUB} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold shadow-soft hover:border-violet-500 hover:text-violet-600">GitHub</Magnetic>
            <Magnetic href={RESUME} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold shadow-soft hover:border-violet-500 hover:text-violet-600">📄 Résumé</Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function burst(el) {
  if (!el) return
  const cols = ['#3b82f6', '#8b5cf6', '#34d399', '#14b8a6', '#f472b6']
  const r = el.getBoundingClientRect()
  for (let i = 0; i < 38; i++) {
    const p = document.createElement('i')
    p.className = 'confetti-piece'
    p.style.left = r.left + r.width / 2 + 'px'
    p.style.top = r.top + 'px'
    p.style.background = cols[i % cols.length]
    p.style.animationDuration = 1.6 + Math.random() * 1.4 + 's'
    p.style.transform = `translateX(${(Math.random() * 2 - 1) * 120}px)`
    document.body.appendChild(p)
    setTimeout(() => p.remove(), 3200)
  }
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <div id="top" />
      <Hero />
      <Capabilities />
      <CaseStudies />
      <Timeline />
      <Contact />
      <footer className="border-t border-slate-100 py-6 text-[13px] text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2.5 px-6">
          <span>© {new Date().getFullYear()} Aastha Saini · Product Manager</span>
          <span>React · Vite · Tailwind · Framer Motion · <a href="https://github.com/AASTHA381/portfolio-react" className="font-semibold text-violet-600">Source</a></span>
        </div>
      </footer>
    </div>
  )
}
