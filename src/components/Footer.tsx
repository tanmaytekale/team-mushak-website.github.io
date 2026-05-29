
export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--black)', borderTop: '1px solid var(--border)', paddingTop: '5rem', paddingBottom: '3rem' }}>
      <div className="container">
        <div className="grid-footer">
          {/* Brand */}
          <div>
            <img src="/logo-1.png" alt="Team Mushak" style={{ height: '38px', marginBottom: '1.5rem', display: 'block' }} />
            <p style={{ color: 'rgba(255, 252, 225, 0.35)', fontSize: '0.85rem', lineHeight: 1.75, maxWidth: '240px' }}>
              India's top-ranking RC division team at NASA HERC. Backed by Emergent Ventures and SuperYou.
            </p>
            {/* HUD status */}
            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(227, 30, 36, 0.6)', fontFamily: "'Space Grotesk'" }}>
              <span style={{ width: '5px', height: '5px', background: 'var(--accent-red)', borderRadius: '50%', display: 'inline-block', animation: 'blink 1.2s step-end infinite' }} />
              MISSION ACTIVE
            </div>
          </div>

          {/* Links */}
          <div>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255, 252, 225, 0.25)', display: 'block', marginBottom: '1.5rem', fontFamily: "'Space Grotesk'" }}>Navigation</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {['Mission', 'Awards', 'Rover', 'Backers', 'Crew'].map((item, i) => {
                const hrefs = ['#about','#impact','#rover','#backers','#team']
                return (
                  <a key={item} href={hrefs[i]} style={{ fontSize: '0.88rem', color: 'rgba(255, 252, 225, 0.45)', letterSpacing: '0.03em' }}>{item}</a>
                )
              })}
            </div>
          </div>

          {/* Accolades */}
          <div>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255, 252, 225, 0.25)', display: 'block', marginBottom: '1.5rem', fontFamily: "'Space Grotesk'" }}>Accolades</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                '◈ Top 7 of 56 Teams Globally',
                '◈ STEM Award Winner',
                '◈ Best Social Media Award',
                '◈ $30K Emergent Ventures Grant',
                '◈ SuperYou Official Partner',
              ].map(item => (
                <span key={item} style={{ fontSize: '0.85rem', color: 'rgba(255, 252, 225, 0.35)' }}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.72rem', color: 'rgba(255, 252, 225, 0.2)', letterSpacing: '0.1em' }}>© 2026 Team Mushak. All rights reserved.</span>
          <span style={{ fontSize: '0.72rem', color: 'rgba(255, 252, 225, 0.2)', letterSpacing: '0.1em' }}>NASA HERC 2026</span>
        </div>
      </div>
    </footer>
  )
}
