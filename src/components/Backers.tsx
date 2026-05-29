import { motion } from 'framer-motion'

const backers = [
  {
    name: 'Emergent Ventures',
    amount: '$30,000',
    detail: "One of India's largest grants for a student engineering team. Backed by Peter Thiel and Tyler Cowen of the Mercatus Center at George Mason University.",
    tag: 'Lead Grant · 2026',
    logo: './Emergent Ventures.png',
  },
  {
    name: 'SuperYou',
    amount: 'Official Partner',
    detail: "Officially backed by Ranveer Singh's SuperYou platform, strengthening our cultural reach and amplifying the message that engineering is the future of India.",
    tag: 'Cultural Partner · 2026',
    logo: './SuperYou.png',
  },
]

export default function Backers() {
  return (
    <section id="backers" style={{ backgroundColor: 'var(--black)' }}>
      <div className="container">
        <div className="divider" style={{ marginBottom: '6rem' }} />

        <div className="grid-split" style={{ marginBottom: '6rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="eyebrow">[SPONSORS.LOG // TRUSTED BY]</span>
            <h2 className="section-title">Trusted by<br />the best.</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{ color: 'rgba(255, 252, 225, 0.45)', lineHeight: 1.8, fontSize: '1rem', fontWeight: 300, alignSelf: 'end' }}
          >
            In 2026, Team Mushak earned support from globally influential names in innovation, entrepreneurship, and culture — validating our work not just technically, but as a movement.
          </motion.p>
        </div>

        {/* Backer rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: 'var(--border)' }}>
          {backers.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="backer-card"
            >
              {/* left edge accent */}
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: 'linear-gradient(to bottom, var(--accent-red), transparent)' }} />
              {/* bg wash */}
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at left, rgba(227, 30, 36, 0.04) 0%, transparent 55%)', pointerEvents: 'none' }} />

              <div style={{ 
                width: '120px', 
                height: '80px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                background: 'rgba(255, 252, 225, 0.02)', 
                border: '1px solid var(--border)', 
                padding: '0.8rem',
                borderRadius: '4px',
                position: 'relative',
                zIndex: 2,
              }}>
                <img 
                  src={b.logo} 
                  alt={`${b.name} Logo`} 
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    objectFit: 'contain',
                    filter: 'brightness(1.05)'
                  }} 
                />
                {/* HUD corner brackets on the logo box */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '8px', height: '8px', borderTop: '1px solid var(--accent-red)', borderLeft: '1px solid var(--accent-red)' }} />
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: '8px', height: '8px', borderBottom: '1px solid var(--accent-red)', borderRight: '1px solid var(--accent-red)' }} />
              </div>

              <div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255, 252, 225, 0.3)', marginBottom: '0.7rem' }}>{b.tag}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '0.8rem', color: 'var(--off-white)' }}>{b.name}</h3>
                <p style={{ color: 'rgba(255, 252, 225, 0.45)', lineHeight: 1.7, fontSize: '0.9rem', fontWeight: 300, maxWidth: '540px' }}>{b.detail}</p>
              </div>
              <div style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', fontWeight: 700, color: 'var(--off-white)', fontFamily: "'Space Grotesk'", whiteSpace: 'nowrap', letterSpacing: '-0.02em', opacity: 0.9 }}>
                {b.amount}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
