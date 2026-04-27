import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { skills } from '../data/portfolio'

const wrap = { maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(32px, 5vw, 80px)' }

const techLogos = [
  { name: 'Python', slug: 'python', color: '#3776AB' },
  { name: 'Snowflake', slug: 'snowflake', color: '#29B5E8' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '#4169E1' },
  { name: 'AWS', slug: 'amazonaws', color: '#FF9900' },
  { name: 'GCP', slug: 'googlecloud', color: '#4285F4' },
  { name: 'Azure', slug: 'microsoftazure', color: '#0078D4' },
  { name: 'Docker', slug: 'docker', color: '#2496ED' },
  { name: 'dbt', slug: 'dbt', color: '#FF694A' },
  { name: 'Airflow', slug: 'apacheairflow', color: '#017CEE' },
  { name: 'MongoDB', slug: 'mongodb', color: '#47A248' },
  { name: 'Power BI', slug: 'microsoftpowerbi', color: '#F2C811' },
  { name: 'Streamlit', slug: 'streamlit', color: '#FF4B4B' },
  { name: 'FastAPI', slug: 'fastapi', color: '#009688' },
  { name: 'Git', slug: 'git', color: '#F05032' },
  { name: 'TensorFlow', slug: 'tensorflow', color: '#FF6F00' },
  { name: 'Plotly', slug: 'plotly', color: '#636EFA' },
  { name: 'Tableau', slug: 'tableau', color: '#E97627' },
  { name: 'Hugging Face', slug: 'huggingface', color: '#FFD21E' },
  { name: 'Pandas', slug: 'pandas', color: '#150458' },
  { name: 'LangChain', slug: 'langchain', color: '#1C3C3C' },
  { name: 'Databricks', slug: 'databricks', color: '#FF3621' },
  { name: 'Jupyter', slug: 'jupyter', color: '#F37626' },
  { name: 'Matplotlib', slug: 'matplotlib', color: '#11557C' },
  { name: 'Qiskit', slug: 'qiskit', color: '#6929C4' },
]

const groupColors = {
  Languages: '#0D9488', 'AI / ML': '#6366F1', 'Data Engineering': '#10B981',
  Cloud: '#3B82F6', 'Visualization & Apps': '#F59E0B', 'DevOps & App Dev': '#EC4899',
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '9rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle tech city background */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/professional-porfolio/assets/hero-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.035, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0a0a0a 0%, transparent 15%, transparent 85%, #0a0a0a 100%)', pointerEvents: 'none' }} />

      {/* Header — uses wrap */}
      <div style={wrap}>
        <FadeIn>
          <p style={{ color: '#0D9488', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1.25rem' }}>04 — Skills</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: '3.5rem' }}>Technical Stack</h2>
        </FadeIn>
      </div>

      {/* Logo marquee — FULL viewport width, no container constraint */}
      <FadeIn delay={0.15}>
        <div style={{ position: 'relative', overflow: 'hidden', marginBottom: '4rem', width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6rem', background: 'linear-gradient(to right, #0a0a0a, transparent)', zIndex: 1, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '6rem', background: 'linear-gradient(to left, #0a0a0a, transparent)', zIndex: 1, pointerEvents: 'none' }} />
          <motion.div
            style={{ display: 'flex', gap: '1rem', width: 'max-content', padding: '0.5rem 0' }}
            animate={{ x: [0, -(techLogos.length * 110)] }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          >
            {[...techLogos, ...techLogos].map((logo, i) => (
              <div key={`${logo.slug}-${i}`} style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0.875rem', padding: '1.25rem 1rem', width: '100px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}>
                <img
                  src={`https://cdn.simpleicons.org/${logo.slug}/${logo.color.replace('#', '')}`}
                  alt={logo.name}
                  style={{ width: '1.85rem', height: '1.85rem', opacity: 0.7 }}
                  onError={e => { e.target.style.display = 'none' }}
                />
                <span style={{ color: '#4b5563', fontSize: '0.62rem', textAlign: 'center', lineHeight: 1.3 }}>{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </FadeIn>

      {/* Skill groups — back in wrap */}
      <div style={wrap}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {Object.entries(skills).map(([group, items], i) => {
            const color = groupColors[group] || '#0D9488'
            return (
              <FadeIn key={group} delay={i * 0.08}>
                <div style={{ background: 'rgba(17,17,17,0.85)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.25rem', padding: '1.75rem', height: '100%', backdropFilter: 'blur(4px)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                    <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: color, flexShrink: 0, boxShadow: `0 0 6px ${color}` }} />
                    <span style={{ color, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>{group}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {items.map((skill, j) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 + j * 0.03, duration: 0.3 }}
                        whileHover={{ scale: 1.06 }}
                        style={{ fontSize: '0.73rem', padding: '0.35rem 0.75rem', borderRadius: '999px', background: '#1a1a1a', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.05)', cursor: 'default', transition: 'all 0.2s' }}
                        onMouseEnter={e => { e.currentTarget.style.background = `${color}12`; e.currentTarget.style.borderColor = `${color}35`; e.currentTarget.style.color = color }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#9ca3af' }}
                      >{skill}</motion.span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
