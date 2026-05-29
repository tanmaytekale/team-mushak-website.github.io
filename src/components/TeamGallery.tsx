import { motion } from 'framer-motion'

export default function TeamGallery() {
  return (
    <section id="team" style={{ backgroundColor: 'var(--black)', paddingBottom: '6rem' }}>
      <div className="container">
        <div className="divider" style={{ marginBottom: '6rem' }} />

        <div className="grid-split" style={{ alignItems: 'end', marginBottom: '5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="eyebrow">[CREW.SYS // TEAM MANIFEST]</span>
            <h2 className="section-title">Meet Team<br />Mushak.</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{ color: 'rgba(255, 252, 225, 0.45)', lineHeight: 1.8, fontSize: '1rem', fontWeight: 300 }}
          >
            A collective of brilliant minds representing India on the global stage. Engineers, designers, strategists — united by one mission: to push the boundaries of what a student team can achieve.
          </motion.p>
        </div>
      </div>

      {/* Full-bleed photo with HUD overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
        style={{ width: '100%', overflow: 'hidden', position: 'relative' }}
      >
        <img
          src="/team_opt.jpg"
          alt="Team Mushak"
          style={{ width: '100%', height: 'clamp(420px, 60vw, 820px)', objectFit: 'cover', objectPosition: 'center center', display: 'block' }}
        />
        {/* Gradient overlays */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 55%, rgba(43,42,41,0.7) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(43,42,41,0.3) 0%, transparent 30%, transparent 70%, rgba(43,42,41,0.3) 100%)' }} />

        {/* HUD corner brackets on the photo */}
        {(['top','bottom'] as const).flatMap(v => (['left','right'] as const).map(h => (
          <div key={`${v}-${h}`} style={{
            position: 'absolute', [v]: '2rem', [h]: '2rem',
            width: '28px', height: '28px',
            borderTop: v === 'top' ? '1.5px solid rgba(227, 30, 36, 0.5)' : 'none',
            borderBottom: v === 'bottom' ? '1.5px solid rgba(227, 30, 36, 0.5)' : 'none',
            borderLeft: h === 'left' ? '1.5px solid rgba(227, 30, 36, 0.5)' : 'none',
            borderRight: h === 'right' ? '1.5px solid rgba(227, 30, 36, 0.5)' : 'none',
          }} />
        )))}

        {/* Bottom-left HUD label */}
        <div style={{
          position: 'absolute', bottom: '2.5rem', left: '3rem',
          fontFamily: "'Space Grotesk'", fontSize: '0.65rem', letterSpacing: '0.2em',
          color: 'rgba(255, 252, 225, 0.5)', textTransform: 'uppercase', lineHeight: 1.8,
        }}>
          <div style={{ color: 'rgba(227, 30, 36, 0.8)', marginBottom: '0.3rem' }}>◈ CREW MANIFEST</div>
          <div>TEAM MUSHAK · HERC 2026</div>
          <div>INDIA RC DIVISION</div>
        </div>
      </motion.div>

      {/* Caption */}
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid var(--border)', marginTop: '3rem' }}
        >
          <span style={{ fontSize: '0.75rem', color: 'rgba(255, 252, 225, 0.25)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Team Mushak · HERC 2026</span>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255, 252, 225, 0.25)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>India's Finest</span>
        </motion.div>
      </div>
    </section>
  )
}
