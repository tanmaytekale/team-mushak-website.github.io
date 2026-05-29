import { motion } from 'framer-motion'

const awards = [
  {
    tag: '2025 · NASA HERC',
    title: 'STEM Excellence Award',
    description: "Awarded to teams that don't just build advanced engineering systems but actively inspire, educate, and influence thousands through real-world STEM impact — aligned with NASA's vision for the next generation of space innovators.",
    icon: '◎',
  },
  {
    tag: '2025 · NASA HERC',
    title: 'Best Social Media Award',
    description: "Recognized for turning complex space engineering into engaging, high-reach content. We spread science-based knowledge at scale, capturing massive audience attention and driving genuine education far beyond the competition floor.",
    icon: '◉',
  },
]

export default function Impact() {
  return (
    <section id="impact" style={{ backgroundColor: 'var(--black)' }}>
      <div className="container">
        <div className="divider" style={{ marginBottom: '6rem' }} />

        <div className="grid-split" style={{ alignItems: 'end', marginBottom: '5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="eyebrow">[RECOGNITION.SYS // AWARDS]</span>
            <h2 className="section-title">Awards that<br />define our impact.</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{ color: 'rgba(255, 252, 225, 0.45)', lineHeight: 1.8, fontSize: '1rem', fontWeight: 300 }}
          >
            At NASA HERC 2025, Team Mushak didn't just rank — we were recognized in two distinct award categories that reflect our dual mission: engineering excellence and public science education.
          </motion.p>
        </div>

        {/* Award cards with HUD treatment */}
        <div className="grid-split" style={{ gap: '2px', background: 'var(--border)' }}>
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              style={{
                background: 'var(--black)',
                padding: '4rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Corner brackets */}
              <div style={{ position: 'absolute', top: '16px', left: '16px', width: '14px', height: '14px', borderTop: '1.5px solid rgba(227, 30, 36, 0.45)', borderLeft: '1.5px solid rgba(227, 30, 36, 0.45)' }} />
              <div style={{ position: 'absolute', bottom: '16px', right: '16px', width: '14px', height: '14px', borderBottom: '1.5px solid rgba(227, 30, 36, 0.45)', borderRight: '1.5px solid rgba(227, 30, 36, 0.45)' }} />

              {/* Subtle red gradient wash */}
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top left, rgba(227, 30, 36, 0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />

              <div style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent-red)', opacity: 0.7 }}>{award.icon}</div>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255, 252, 225, 0.3)', display: 'block', marginBottom: '1rem' }}>{award.tag}</span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '-0.01em', color: 'var(--off-white)' }}>{award.title}</h3>
              <p style={{ color: 'rgba(255, 252, 225, 0.45)', lineHeight: 1.75, fontSize: '0.9rem', fontWeight: 300 }}>{award.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Editorial quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          style={{ padding: '8rem 0 4rem', maxWidth: '860px', margin: '0 auto', textAlign: 'center', position: 'relative' }}
        >
          {/* decorative line */}
          <div style={{ width: '40px', height: '1px', background: 'var(--accent-red)', margin: '0 auto 3rem', opacity: 0.6 }} />
          <p style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)', fontWeight: 300, lineHeight: 1.65, color: 'rgba(255, 252, 225, 0.65)', fontStyle: 'italic' }}>
            "We don't just build rovers — we build the future of Indian space engineering, one competition at a time."
          </p>
          <span style={{ display: 'block', marginTop: '2.5rem', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255, 252, 225, 0.25)' }}>◈ Team Mushak ◈</span>
        </motion.div>
      </div>
    </section>
  )
}
