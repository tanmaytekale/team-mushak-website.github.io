import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Mission', href: '#about' },
  { label: 'Awards', href: '#impact' },
  { label: 'Rover', href: '#rover' },
  { label: 'Backers', href: '#backers' },
  { label: 'Crew', href: '#team' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'fixed', width: '100%', top: 0, zIndex: 100,
          padding: scrolled ? '0.9rem 2rem' : '1.3rem 2rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          backgroundColor: scrolled ? 'rgba(43,42,41,0.96)' : '#2B2A29',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: '1px solid rgba(255, 252, 225, 0.07)',
          transition: 'background-color 0.4s ease, padding 0.4s ease',
        }}
      >
        {/* Left: logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="./logo-1.png" alt="Team Mushak Logo" style={{ height: '38px', objectFit: 'contain' }} />
        </a>

        {/* Center: HUD indicator and NASA logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--accent-red)', opacity: 0.9, fontFamily: "'Space Grotesk', sans-serif" }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-red)', display: 'inline-block', animation: 'blink 1.2s step-end infinite' }} />
            <span className="hud-decorations">[SYS.ACTIVE · NASA HERC 2026]</span>
            <span className="nav-mobile-overlay" style={{ display: 'none' }}>ACTIVE</span>
          </div>
          <div className="hud-decorations" style={{ height: '24px', width: '1px', background: 'var(--border)' }} />
          <img className="hud-decorations" src="./nasa.png" alt="NASA Logo" style={{ height: '32px', objectFit: 'contain', opacity: 0.95 }} />
        </div>

        {/* Right: nav links */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {/* Desktop Links */}
          <div className="nav-desktop-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255, 252, 225, 0.55)', transition: 'color 0.2s', fontFamily: "'Space Grotesk', sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--off-white)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255, 252, 225, 0.55)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'none',
              flexDirection: 'column',
              gap: '6px',
              padding: '4px',
              zIndex: 101,
            }}
            className="hamburger-btn"
          >
            <span style={{ width: '24px', height: '2px', background: 'var(--off-white)', transition: 'transform 0.3s, margin 0.3s', transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }} />
            <span style={{ width: '24px', height: '2px', background: 'var(--off-white)', transition: 'opacity 0.3s', opacity: isOpen ? 0 : 1 }} />
            <span style={{ width: '24px', height: '2px', background: 'var(--off-white)', transition: 'transform 0.3s, margin 0.3s', transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }} />
          </button>
        </div>
      </motion.nav>

      {/* Inline responsiveness helper style */}
      <style>{`
        @media (max-width: 768px) {
          .hamburger-btn {
            display: flex !important;
          }
          .nav-mobile-overlay {
            display: inline-block !important;
          }
        }
      `}</style>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '60px',
              left: 0,
              right: 0,
              background: scrolled ? 'rgba(43,42,41,0.98)' : '#2B2A29',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              zIndex: 99,
            }}
          >
            {links.map((link, idx) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--off-white)',
                  fontFamily: "'Space Grotesk', sans-serif",
                  borderBottom: '1px solid rgba(255, 252, 225, 0.05)',
                  paddingBottom: '0.8rem',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--accent-red)', fontFamily: "'Space Grotesk', sans-serif", marginTop: '1rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-red)', display: 'inline-block', animation: 'blink 1.2s step-end infinite' }} />
              [COMMS ACTIVE · HERC 2026]
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
