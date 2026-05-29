import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'

function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId: number
    let stars: { x: number; y: number; r: number; o: number; speed: number }[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      stars = Array.from({ length: 180 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        o: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 0.3 + 0.05,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(s => {
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 252, 225, ${s.o})`
        ctx.fill()
        s.o += (Math.random() - 0.5) * 0.02
        s.o = Math.max(0.1, Math.min(0.9, s.o))
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
    />
  )
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.3])
  const bgScale = useTransform(scrollYProgress, [0, 0.7], [1, 1.1])
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, 80])

  return (
    <section id="hero" ref={ref} style={{ height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

      {/* BG image with parallax */}
      <motion.div style={{ position: 'absolute', inset: '-6%', scale: bgScale, opacity: bgOpacity, zIndex: 1 }}>
        <img src="/bg_opt.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(43,42,41,0.2) 0%, rgba(43,42,41,0.45) 50%, rgba(43,42,41,0.92) 100%)' }} />
      </motion.div>

      {/* Animated stars overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
        <StarCanvas />
      </div>



      {/* Retro corner brackets */}
      {[['0','0','top','left'],['0','0','top','right'],['0','0','bottom','left'],['0','0','bottom','right']].map(([_,__,v,h], i) => (
        <div key={i} style={{
          position: 'absolute', [v]: '3rem', [h]: '3rem',
          width: '30px', height: '30px',
          borderTop: v === 'top' ? '1.5px solid rgba(227, 30, 36, 0.5)' : 'none',
          borderBottom: v === 'bottom' ? '1.5px solid rgba(227, 30, 36, 0.5)' : 'none',
          borderLeft: h === 'left' ? '1.5px solid rgba(227, 30, 36, 0.5)' : 'none',
          borderRight: h === 'right' ? '1.5px solid rgba(227, 30, 36, 0.5)' : 'none',
          zIndex: 4,
        }} />
      ))}

      {/* HUD coordinates top-left */}
      <div className="hud-decorations" style={{ position: 'absolute', top: '5rem', left: '3rem', zIndex: 4, fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255, 252, 225, 0.3)', lineHeight: 1.8 }}>
        <div>LAT: 21.1458° N</div>
        <div>LON: 79.0882° E</div>
        <div>ALT: 312M</div>
      </div>

      {/* HUD status top-right */}
      <div className="hud-decorations" style={{ position: 'absolute', top: '5rem', right: '3rem', zIndex: 4, fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255, 252, 225, 0.3)', textAlign: 'right', lineHeight: 1.8 }}>
        <div>SYS STATUS: <span style={{ color: 'var(--accent-red)' }}>NOMINAL</span></div>
        <div>MISSION: HERC-2026</div>
        <div>CYCLE: <span className="blink">■</span></div>
      </div>

      {/* HUD Crosshair markings */}
      <div className="hud-crosshair hud-decorations" style={{ top: '22vh', left: '12%' }}>+</div>
      <div className="hud-crosshair hud-decorations" style={{ top: '22vh', right: '12%' }}>+</div>
      <div className="hud-crosshair hud-decorations" style={{ bottom: '28vh', left: '12%' }}>+</div>
      <div className="hud-crosshair hud-decorations" style={{ bottom: '28vh', right: '12%' }}>+</div>

      {/* Main content */}
      <motion.div
        style={{ textAlign: 'center', position: 'relative', zIndex: 5, y: textY, padding: '0 2rem' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '1.1rem', background: 'rgba(255, 252, 225, 0.03)', border: '1px solid var(--border)', padding: '0.7rem 1.4rem', borderRadius: '4px', marginBottom: '2.5rem' }}
        >
          <img src="/nasa.png" alt="NASA Logo" style={{ height: '36px', objectFit: 'contain' }} />
          <div style={{ height: '22px', width: '1px', background: 'var(--border)' }} />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--off-white)', textTransform: 'uppercase', fontWeight: 500 }}>NASA HERC 2026</span>
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.3em', color: 'var(--off-white)', marginBottom: '1.5rem', textTransform: 'uppercase' }}
        >
          [MISSION.LOG // INDIA'S PREMIER SPACE ENGINEERING TEAM]
        </motion.span>

        <h1 style={{
          fontSize: 'clamp(2.8rem, 8vw, 7.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          fontFamily: "'Space Grotesk', sans-serif",
          color: 'var(--off-white)',
          marginBottom: '1.5rem',
          textShadow: '0 0 80px rgba(43,42,41,0.8)',
        }}>
          TEAM<br />MUSHAK
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{ fontSize: '1rem', color: 'rgba(255, 252, 225, 0.5)', fontWeight: 300, maxWidth: '480px', margin: '0 auto 2.2rem', lineHeight: 1.7, letterSpacing: '0.03em' }}
        >
          Top 7 globally. Two consecutive India representations. <br />NASA HERC 2026 RC Division.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#about" className="btn btn-outline-white">Explore Mission</a>
          <a href="#rover" className="btn btn-solid-red">View Rover</a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        style={{ position: 'absolute', bottom: '5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255, 252, 225, 0.3)' }}>Scroll</span>
        <motion.div
          style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, rgba(227, 30, 36, 0.6), transparent)', transformOrigin: 'top' }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

    </section>
  )
}
