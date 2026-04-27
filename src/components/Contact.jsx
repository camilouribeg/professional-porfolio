import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { personal } from '../data/portfolio'

const wrap = { maxWidth: '640px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }

const contactLinks = [
  { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, icon: '✉' },
  { label: 'LinkedIn', value: 'Camilo Uribe Guerra', href: personal.linkedin, icon: '↗', external: true },
  { label: 'GitHub', value: 'github.com/camilouribeg', href: personal.github, icon: '↗', external: true },
  { label: 'Phone', value: personal.phone, href: `tel:${personal.phone}`, icon: '☎' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '9rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '300px', borderRadius: '50%', background: '#0D9488', filter: 'blur(180px)', opacity: 0.05, pointerEvents: 'none' }} />

      <div style={wrap}>
        <FadeIn>
          <p style={{ color: '#0D9488', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1.25rem' }}>05 — Contact</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, color: '#fff', textAlign: 'center', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Let's build something{' '}
            <span style={{ color: '#0D9488' }}>together.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.75, textAlign: 'center', marginBottom: '3rem' }}>
            Open to data science, AI engineering, and data engineering roles in Sydney and remote.
            Always happy to connect and talk about exciting challenges.
          </p>
        </FadeIn>

        {/* Contact cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem', marginBottom: '2rem' }}>
          {contactLinks.map((link, i) => (
            <FadeIn key={link.label} delay={0.25 + i * 0.07}>
              <motion.a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel="noreferrer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 1.5rem', background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1rem', textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(13,148,136,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', background: 'rgba(13,148,136,0.1)', color: '#0D9488', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>
                  {link.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ color: '#4b5563', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{link.label}</p>
                  <p style={{ color: '#e5e7eb', fontSize: '0.82rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{link.value}</p>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>

        {/* CV banner */}
        <FadeIn delay={0.5}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', padding: '1.75rem 2rem', borderRadius: '1rem', background: 'rgba(13,148,136,0.07)', border: '1px solid rgba(13,148,136,0.2)' }}>
            <div>
              <p className="font-display" style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Full Curriculum Vitae</p>
              <p style={{ color: '#6b7280', fontSize: '0.82rem' }}>Data Science & AI Engineering · Sydney, AU</p>
            </div>
            <a href={personal.cvUrl} download style={{ flexShrink: 0, padding: '0.65rem 1.5rem', borderRadius: '999px', background: '#0D9488', color: '#fff', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Download CV →
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Footer */}
      <div style={{ maxWidth: '860px', margin: '4rem auto 0', padding: '1.5rem clamp(24px, 5vw, 80px) 0', borderTop: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p className="font-display" style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>CUG<span style={{ color: '#0D9488' }}>.</span></p>
        <p style={{ color: '#374151', fontSize: '0.8rem' }}>© 2026 Camilo Uribe Guerra · Sydney 🇦🇺</p>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {[{ label: 'LinkedIn', href: personal.linkedin }, { label: 'GitHub', href: personal.github }].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={{ color: '#374151', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#374151'}
            >{l.label}</a>
          ))}
        </div>
      </div>
    </section>
  )
}
