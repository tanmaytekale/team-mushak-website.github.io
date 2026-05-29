import { motion } from 'framer-motion'

const stats = [
  { number: '#7', label: 'Global Rank', sub: 'Out of 56 teams' },
  { number: '2×', label: 'Consecutive', sub: 'India representation' },
  { number: '6', label: 'Countries', sub: 'Competed against' },
  { number: '3', label: 'Awards', sub: 'HERC 2025' },
]

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: 'var(--black)', paddingTop: '12rem', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle retro grid background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `linear-gradient(rgba(255, 252, 225, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 252, 225, 0.025) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
      }} />
      {/* Faint vector schematic backdrop on the right */}
      <div style={{ position: 'absolute', right: '-5%', top: '10%', width: '550px', height: '550px', opacity: 0.03, pointerEvents: 'none', zIndex: 0 }}>
        <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%', color: 'var(--off-white)' }}>
          {/* Radial grid lines */}
          <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="130" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
          <circle cx="200" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
          {/* Diagonal target vectors */}
          <line x1="20" y1="20" x2="380" y2="380" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
          <line x1="380" y1="20" x2="20" y2="380" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
          <line x1="200" y1="10" x2="200" y2="390" stroke="currentColor" strokeWidth="0.5" />
          <line x1="10" y1="200" x2="390" y2="200" stroke="currentColor" strokeWidth="0.5" />
          {/* Constellation dots & lines */}
          <path d="M 120,100 L 160,180 L 250,220 L 300,160 M 160,180 L 220,120 L 250,220" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="120" cy="100" r="4" fill="currentColor" />
          <circle cx="160" cy="180" r="4" fill="currentColor" />
          <circle cx="250" cy="220" r="4" fill="currentColor" />
          <circle cx="300" cy="160" r="4" fill="currentColor" />
          <circle cx="220" cy="120" r="4" fill="currentColor" />
        </svg>
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Intro */}
        <div className="grid-split" style={{ marginBottom: '8rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          >
            <span className="eyebrow">[MANIFEST.SYS // WHO WE ARE]</span>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>
              The only team to<br />represent India<br />twice in a row.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            style={{ paddingTop: '3.5rem' }}
          >
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 252, 225, 0.5)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
              Team Mushak competes in NASA's Human Exploration Rover Challenge — one of the world's most prestigious student engineering competitions. We don't just build rovers. We build legacies.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 252, 225, 0.5)', lineHeight: 1.8, fontWeight: 300 }}>
              Our rover secured a global top 7 rank in 2025, facing off against elite teams from 6 countries — and we're back in 2026 to go even further.
            </p>
          </motion.div>
        </div>

        {/* Stats strip with HUD style */}
        <div style={{ position: 'relative' }}>
          <div className="hud-crosshair" style={{ top: '-8px', left: '50%', transform: 'translateX(-50%)' }}>+</div>
          <div className="hud-crosshair" style={{ bottom: '-8px', left: '50%', transform: 'translateX(-50%)' }}>+</div>
          
          <div className="grid-stats">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                style={{
                  padding: '3rem 2.5rem',
                  borderRight: '1px solid var(--border)',
                  borderBottom: '1px solid var(--border)',
                  position: 'relative',
                }}
              >
                {/* HUD corner brackets on stat */}
                <div style={{ position: 'absolute', top: '10px', left: '10px', width: '10px', height: '10px', borderTop: '1px solid rgba(227, 30, 36, 0.4)', borderLeft: '1px solid rgba(227, 30, 36, 0.4)' }} />
                <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '10px', height: '10px', borderBottom: '1px solid rgba(227, 30, 36, 0.4)', borderRight: '1px solid rgba(227, 30, 36, 0.4)' }} />
                <div className="stat-number" style={{ color: 'var(--off-white)' }}>{s.number}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--accent-red)', marginTop: '0.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'Space Grotesk'" }}>{s.label}</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255, 252, 225, 0.3)', marginTop: '0.3rem', letterSpacing: '0.05em' }}>{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission statement */}
        <div className="grid-split" style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="eyebrow-blue">[OBJECTIVE.CMD // OUR MISSION]</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 600, lineHeight: 1.2, marginBottom: '1.5rem', letterSpacing: '-0.01em', color: 'var(--off-white)' }}>
              Engineering beyond<br />boundaries
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            style={{ color: 'rgba(255, 252, 225, 0.5)', lineHeight: 1.8, fontSize: '1.05rem', fontWeight: 300, alignSelf: 'end' }}
          >
            We represent a new generation of Indian engineers — students who don't wait for the future, but build it. Our rover is not just a machine; it is a proof of concept for what is possible when curiosity meets rigorous engineering.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
