import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const specRows = [
  { label: 'Drive System', value: 'Four-wheel independent' },
  { label: 'Power', value: 'Human + Assisted' },
  { label: 'Chassis', value: 'Ultra-lightweight composite' },
  { label: 'Competition', value: 'NASA HERC 2026' },
  { label: 'Division', value: 'RC (Remote-Controlled)' },
  { label: 'Terrain', value: 'Extreme lunar simulation' },
]

export default function RoverSpecs() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [20, -20])

  return (
    <section id="rover" ref={ref} style={{ backgroundColor: 'var(--black)', overflow: 'hidden' }}>
      <div className="container">
        <div className="divider" style={{ marginBottom: '6rem' }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ marginBottom: '5rem' }}
        >
          <span className="eyebrow">[DIAGNOSTICS.ENG // THE ROVER]</span>
          <h2 className="section-title">The Rover.</h2>
        </motion.div>

        <div className="grid-split" style={{ alignItems: 'center' }}>

          {/* Left: rover photo in a fixed-height box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            style={{ position: 'relative' }}
          >
            <motion.div
              style={{ y: imgY, position: 'relative', width: '100%', height: 'clamp(400px, 50vw, 620px)', overflow: 'hidden' }}
            >
              <img
                src="./rover_opt.jpeg"
                alt="Mushak Rover"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  display: 'block',
                }}
              />
              {/* Subtle dark vignette */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(43,42,41,0.5) 100%)' }} />

              {/* Rotating radar reticle overlay */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 3, opacity: 0.3 }}>
                <svg 
                  viewBox="0 0 200 200" 
                  className="spin-anim"
                  style={{ 
                    width: '75%', 
                    height: '75%', 
                    color: 'var(--accent-red)' 
                  }}
                >
                  <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                  <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="12 6 3 6" />
                  <circle cx="100" cy="100" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="100" y1="5" x2="100" y2="195" stroke="currentColor" strokeWidth="0.25" strokeDasharray="5 5" />
                  <line x1="5" y1="100" x2="195" y2="100" stroke="currentColor" strokeWidth="0.25" strokeDasharray="5 5" />
                </svg>
              </div>
            </motion.div>

            {/* HUD corner brackets */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '22px', height: '22px', borderTop: '1.5px solid rgba(227, 30, 36, 0.55)', borderLeft: '1.5px solid rgba(227, 30, 36, 0.55)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 0, right: 0, width: '22px', height: '22px', borderTop: '1.5px solid rgba(227, 30, 36, 0.55)', borderRight: '1.5px solid rgba(227, 30, 36, 0.55)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '22px', height: '22px', borderBottom: '1.5px solid rgba(227, 30, 36, 0.55)', borderLeft: '1.5px solid rgba(227, 30, 36, 0.55)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '22px', height: '22px', borderBottom: '1.5px solid rgba(227, 30, 36, 0.55)', borderRight: '1.5px solid rgba(227, 30, 36, 0.55)', pointerEvents: 'none' }} />

            {/* HUD label bottom-left */}
            <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.2rem', fontFamily: "'Space Grotesk'", fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(255, 252, 225, 0.45)', textTransform: 'uppercase' }}>
              <span style={{ color: 'rgba(227, 30, 36, 0.8)' }}>◈ </span>UNIT-01 · MUSHAK RC
            </div>
          </motion.div>

          {/* Right: description + spec table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.1 }}
          >
            <p style={{ fontSize: '1rem', color: 'rgba(255, 252, 225, 0.5)', lineHeight: 1.85, fontWeight: 300, marginBottom: '3rem' }}>
              Engineered for precision and resilience. The Mushak rover navigates extreme terrain without compromise — built for the demands of NASA HERC and beyond.
            </p>

            {/* Spec table with HUD feel */}
            <div style={{ border: '1px solid var(--border)', position: 'relative' }}>
              {/* HUD header */}
              <div style={{ padding: '0.75rem 1.5rem', borderBottom: '1px solid var(--border)', background: 'rgba(227, 30, 36, 0.06)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ width: '6px', height: '6px', background: 'var(--accent-red)', borderRadius: '50%', display: 'inline-block' }} />
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255, 252, 225, 0.4)', fontFamily: "'Space Grotesk'" }}>System Specifications</span>
              </div>
              {specRows.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  style={{
                    display: 'flex', justifyContent: 'space-between',
                    padding: '0.9rem 1.5rem',
                    borderBottom: i < specRows.length - 1 ? '1px solid var(--border)' : 'none',
                    fontSize: '0.85rem',
                  }}
                >
                  <span style={{ color: 'rgba(255, 252, 225, 0.35)', letterSpacing: '0.03em' }}>{spec.label}</span>
                  <span style={{ color: 'var(--off-white)', fontWeight: 500 }}>{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile fallback: swap columns order on mobile via media is handled by auto-fit */}
      </div>
    </section>
  )
}
