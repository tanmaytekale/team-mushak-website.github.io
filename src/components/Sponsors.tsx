import { motion } from 'framer-motion'

type LogoBg = 'light' | 'dark' | 'brand'

type Sponsor = {
  name: string
  amount: string
  detail: string
  tag: string
  logo?: string
  initials?: string
  /** Chip background to use behind the logo, chosen per-asset for contrast:
   *  'light' for dark/colored marks on transparent, 'dark' for light/white marks
   *  on transparent, 'brand' when the asset already carries its own full-bleed background. */
  logoBg: LogoBg
}

const leadSponsor: Sponsor = {
  name: 'Emergent Ventures',
  amount: '$30,000',
  detail: "One of India's largest grants for a student engineering team.",
  tag: 'Lead Grant · 2025–26',
  logo: './Emergent Ventures.png',
  logoBg: 'light',
}

const supportingSponsors: Sponsor[] = [
  {
    name: 'SuperYou',
    amount: 'Official Partner',
    detail: "Backed by Ranveer Singh's SuperYou platform.",
    tag: 'Cultural Partner',
    logo: './SuperYou.png',
    logoBg: 'brand',
  },
  {
    name: 'Tech Mahindra',
    amount: 'Technology Partner',
    detail: 'Technical mentorship and engineering resources.',
    tag: 'Technology Partner',
    logo: './Tech Mahindra.svg',
    logoBg: 'light',
  },
  {
    name: 'UpGrad',
    amount: 'Education Partner',
    detail: 'Championing hands-on engineering education.',
    tag: 'Education Partner',
    logo: './UpGrad.svg',
    logoBg: 'light',
  },
  {
    name: 'Too Yumm!',
    amount: 'Snacking Partner',
    detail: 'Fueled our build nights and competition travel.',
    tag: 'Snacking Partner',
    logo: './Too Yumm.png',
    logoBg: 'dark',
  },
  {
    name: 'Sood Charity Foundation',
    amount: 'Supporting Partner',
    detail: "Backed by Sonu Sood's philanthropic foundation.",
    tag: 'Social Impact Partner',
    logo: './Sood Charity Foundation.svg',
    logoBg: 'light',
  },
  {
    name: 'ATLAS SkillTech University',
    amount: 'Home Institution',
    detail: 'Our university, resources, labs, and faculty backing.',
    tag: 'Home Institution',
    logo: './ATLAS SkillTech University.svg',
    logoBg: 'dark',
  },
]

const logoBgStyles: Record<LogoBg, string> = {
  light: 'rgba(255, 252, 225, 0.92)',
  dark: 'rgba(20, 19, 18, 0.9)',
  brand: 'var(--accent-red)',
}

function LogoBox({ s }: { s: Sponsor }) {
  const bg = s.logo ? logoBgStyles[s.logoBg] : 'rgba(255, 252, 225, 0.02)'
  return (
    <div style={{
      width: '100%',
      height: '90px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: bg,
      border: '1px solid var(--border)',
      padding: '1rem',
      borderRadius: '8px',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {s.logo ? (
        <img
          src={s.logo}
          alt={`${s.name} Logo`}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
      ) : (
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '1.4rem',
          letterSpacing: '0.04em',
          color: 'rgba(255, 252, 225, 0.55)',
        }}>
          {s.initials}
        </span>
      )}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '8px', height: '8px', borderTop: '1px solid var(--accent-red)', borderLeft: '1px solid var(--accent-red)' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '8px', height: '8px', borderBottom: '1px solid var(--accent-red)', borderRight: '1px solid var(--accent-red)' }} />
    </div>
  )
}

export default function Sponsors() {
  return (
    <section id="sponsors" style={{ backgroundColor: 'var(--black)' }}>
      <div className="container">
        <div className="divider" style={{ marginBottom: '6rem' }} />

        <div className="grid-split" style={{ marginBottom: '5rem' }}>
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
            Over the last two years, Team Mushak earned support from globally influential names in innovation, entrepreneurship, education, and culture.
          </motion.p>
        </div>

        {/* Lead sponsor: single full-width row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="backer-card"
          style={{ marginBottom: '1.5rem' }}
        >
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: 'linear-gradient(to bottom, var(--accent-red), transparent)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at left, rgba(227, 30, 36, 0.04) 0%, transparent 55%)', pointerEvents: 'none' }} />

          <div style={{ width: '120px' }}>
            <LogoBox s={leadSponsor} />
          </div>

          <div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255, 252, 225, 0.3)', marginBottom: '0.7rem' }}>{leadSponsor.tag}</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '0.8rem', color: 'var(--off-white)' }}>{leadSponsor.name}</h3>
            <p style={{ color: 'rgba(255, 252, 225, 0.45)', lineHeight: 1.7, fontSize: '0.9rem', fontWeight: 300, maxWidth: '540px' }}>{leadSponsor.detail}</p>
          </div>
          <div style={{ fontSize: 'clamp(1.2rem, 2.2vw, 2rem)', fontWeight: 700, color: 'var(--off-white)', fontFamily: "'Space Grotesk'", whiteSpace: 'nowrap', letterSpacing: '-0.02em', opacity: 0.9 }}>
            {leadSponsor.amount}
          </div>
        </motion.div>

        {/* Supporting sponsors: equal-weight card grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          marginTop: '3rem',
        }} className="sponsor-grid">
          {supportingSponsors.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4, borderColor: 'rgba(227, 30, 36, 0.3)' }}
              style={{
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.1rem',
                background: 'rgba(255, 252, 225, 0.015)',
                transition: 'border-color 0.3s ease',
              }}
            >
              <LogoBox s={s} />
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255, 252, 225, 0.3)', marginBottom: '0.5rem' }}>{s.tag}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '0.4rem', color: 'var(--off-white)' }}>{s.name}</h3>
                <p style={{ color: 'rgba(255, 252, 225, 0.4)', lineHeight: 1.55, fontSize: '0.8rem', fontWeight: 300 }}>{s.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .sponsor-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 1024px) and (min-width: 641px) {
          .sponsor-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
