import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { personal } from '../data/portfolio'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stats = [
  { value: '~10', label: 'Clients Served' },
  { value: '3+', label: 'Years in Data & AI' },
  { value: '1', label: 'SPE Publication' },
  { value: '6.7 / 7', label: 'Master GPA' },
]

export default function Hero() {
  return (
    <section id="hero" className="hero-shell">
      {/* Background image */}
      <div
        style={{ position: 'absolute', inset: 0, backgroundImage: "url('/professional-porfolio/assets/hero-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      />
      {/* Dark overlay */}
      <div
        style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.70) 50%, rgba(10,10,10,0.95) 100%)' }}
      />

      {/* Content */}
      <div className="hero-content">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
        >
          {/* Status badge */}
          <motion.div variants={fadeUp} style={{ marginBottom: '2.5rem' }}>
            <span
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                fontSize: '0.7rem', padding: '0.5rem 1.25rem', borderRadius: '999px',
                border: '1px solid rgba(13,148,136,0.6)', color: '#0D9488',
                background: 'rgba(10,10,10,0.6)', backdropFilter: 'blur(8px)',
                letterSpacing: '0.18em', textTransform: 'uppercase',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0D9488', animation: 'pulse 2s infinite' }} />
              Open to work · Sydney, Australia
            </span>
          </motion.div>

          {/* Photo */}
          <motion.div variants={fadeUp} style={{ marginBottom: '2rem', position: 'relative' }}>
            <div
              style={{
                width: '9rem', height: '9rem', borderRadius: '50%', overflow: 'hidden', margin: '0 auto',
                border: '2px solid rgba(13,148,136,0.5)',
                boxShadow: '0 0 0 6px rgba(13,148,136,0.08), 0 0 60px rgba(13,148,136,0.2)',
              }}
            >
              <img
                src="/professional-porfolio/assets/camilo.jpg"
                alt="Camilo Uribe Guerra"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transform: 'scale(1.1)' }}
              />
            </div>
            <motion.div
              style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(13,148,136,0.25)', pointerEvents: 'none' }}
              animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="font-display"
            style={{ fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '1.25rem', fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', textAlign: 'center' }}
          >
            Camilo <span style={{ color: '#0D9488' }}>Uribe</span> Guerra
          </motion.h1>

          <motion.p variants={fadeUp} style={{ color: '#d1d5db', fontSize: '1.2rem', fontWeight: 300, marginBottom: '0.6rem', letterSpacing: '0.01em', textAlign: 'center' }}>
            {personal.title}
          </motion.p>
          <motion.p variants={fadeUp} style={{ color: '#6b7280', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '2.5rem', textAlign: 'center' }}>
            {personal.subtitle}
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.9, marginBottom: '2.5rem', maxWidth: '520px', textAlign: 'center' }}
          >
            Petroleum engineer turned data scientist, bringing rare domain depth
            to every pipeline, model, and AI system I build across energy,
            sustainability, and enterprise software.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '3.5rem' }}>
            <Link to="projects" smooth duration={700} offset={-80}>
              <button
                style={{ padding: '0.75rem 2rem', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600, color: '#fff', background: '#0D9488', border: 'none', cursor: 'pointer', transition: 'opacity 0.2s, transform 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'scale(1.03)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)' }}
              >
                View My Work
              </button>
            </Link>
            <a
              href={personal.cvUrl}
              download
              style={{ padding: '0.75rem 2rem', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600, color: '#e5e7eb', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s, transform 0.2s', display: 'inline-block' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'scale(1.03)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#e5e7eb'; e.currentTarget.style.transform = 'scale(1)' }}
            >
              Download CV
            </a>
            <Link to="contact" smooth duration={700} offset={-80}>
              <button style={{ padding: '0.75rem 2rem', borderRadius: '999px', fontSize: '0.875rem', color: '#6b7280', background: 'transparent', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#d1d5db'}
                onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
              >
                Get in touch →
              </button>
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div variants={fadeUp} className="hero-stats">
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
              >
                <p className="font-display" style={{ color: '#0D9488', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                  {s.value}
                </p>
                <p style={{ color: '#6b7280', fontSize: '0.7rem', textAlign: 'center', lineHeight: 1.3 }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <span style={{ color: '#4b5563', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          style={{ width: '1px', height: '2rem', background: 'linear-gradient(to bottom, #0D9488, transparent)' }}
          animate={{ opacity: [0.7, 0.1, 0.7] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
