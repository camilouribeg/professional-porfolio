import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'
import { experience } from '../data/portfolio'

const wrap = { maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(32px, 5vw, 80px)' }

const companyInfo = {
  'Synogize':                        { domain: 'synogize.io',    url: 'https://synogize.io',    color: '#0D9488' },
  'Triber Tech':                     { domain: 'triber.io',      url: 'https://triber.io',      color: '#6366F1' },
  'Tachyus':                         { domain: 'tachyus.com',    url: 'https://tachyus.com',    color: '#F59E0B' },
  'Skanhawk':                        { domain: 'skanhawk.com',   url: 'https://skanhawk.com',   color: '#3B82F6' },
  'Halliburton / Petroland':         { domain: 'halliburton.com',url: 'https://halliburton.com',color: '#EC4899' },
  'Universidad Nacional de Colombia':{ domain: 'unal.edu.co',    url: 'https://unal.edu.co',    color: '#10B981' },
}

const techIconMap = {
  'Python': 'python', 'SQL': 'postgresql', 'Snowflake': 'snowflake',
  'AWS Bedrock': 'amazonaws', 'MongoDB': 'mongodb', 'Streamlit': 'streamlit',
  'AWS Lambda': 'amazonaws', 'LlamaIndex': null, 'PostgreSQL': 'postgresql',
  'GCP': 'googlecloud', 'BigQuery': 'googlebigquery', 'Docker': 'docker',
  'Azure': 'microsoftazure', 'Power BI': 'microsoftpowerbi', 'TensorFlow': 'tensorflow',
  'XGBoost': null, 'dbt': 'dbt', 'Apache Airflow': 'apacheairflow',
  'Plotly Dash': 'plotly', 'Parquet': null, 'OCR': null, 'NoSQL': null,
  'IoT/SCADA': null, 'Amazon Lex': 'amazonaws', 'Amazon Textract': 'amazonaws',
  'C++': 'cplusplus', 'Fortran': null, 'Reservoir Simulation': null,
  'Research': null,
}

function CompanyLogo({ name, size = 40 }) {
  const info = companyInfo[name]
  const [failed, setFailed] = useState(false)
  const color = info?.color || '#0D9488'

  if (!info || failed) {
    return (
      <div style={{ width: size, height: size, borderRadius: '0.5rem', background: `${color}20`, color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.45, fontWeight: 700, flexShrink: 0, fontFamily: 'Cabinet Grotesk, sans-serif', border: `1px solid ${color}30` }}>
        {name[0]}
      </div>
    )
  }
  return (
    <img
      src={`https://logo.clearbit.com/${info.domain}`}
      alt={name}
      onError={() => setFailed(true)}
      style={{ width: size, height: size, borderRadius: '0.5rem', objectFit: 'contain', background: '#fff', padding: '4px', flexShrink: 0 }}
    />
  )
}

function TechTag({ name }) {
  const slug = techIconMap[name]
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', padding: '0.3rem 0.7rem', borderRadius: '999px', background: 'rgba(13,148,136,0.07)', color: '#0D9488', border: '1px solid rgba(13,148,136,0.18)', whiteSpace: 'nowrap' }}>
      {slug && (
        <img
          src={`https://cdn.simpleicons.org/${slug}/0D9488`}
          alt={name}
          style={{ width: '0.85rem', height: '0.85rem', opacity: 0.8 }}
          onError={e => { e.target.style.display = 'none' }}
        />
      )}
      {name}
    </span>
  )
}

function Card({ role, company, location, period, bullets, tech, index, isOpen, onClick }) {
  const info = companyInfo[company]
  const color = info?.color || '#0D9488'

  return (
    <FadeIn delay={index * 0.07}>
      <div
        onClick={onClick}
        style={{ background: '#111111', border: `1px solid ${isOpen ? `${color}35` : 'rgba(255,255,255,0.06)'}`, borderRadius: '1.25rem', overflow: 'hidden', cursor: 'pointer', marginBottom: '0.875rem', transition: 'border-color 0.25s' }}
      >
        {/* Card header */}
        <div style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', minWidth: 0, flex: '1 1 320px' }}>
            <CompanyLogo name={company} size={44} />
            <div style={{ minWidth: 0 }}>
              <p className="font-display" style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.25, marginBottom: '0.2rem' }}>{role}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                {info?.url ? (
                  <a href={info.url} target="_blank" rel="noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{ color, fontSize: '0.85rem', textDecoration: 'none', fontWeight: 500 }}
                    onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                  >{company} ↗</a>
                ) : (
                  <span style={{ color, fontSize: '0.85rem', fontWeight: 500 }}>{company}</span>
                )}
                <span style={{ color: '#4b5563', fontSize: '0.82rem' }}>· {location}</span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', flexShrink: 0, marginLeft: 'auto' }}>
            <span style={{ fontSize: '0.72rem', color: '#6b7280', background: 'rgba(255,255,255,0.05)', padding: '0.4rem 1rem', borderRadius: '999px', whiteSpace: 'nowrap' }}>{period}</span>
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.25 }}
              style={{ width: '1.75rem', height: '1.75rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', fontSize: '1rem', flexShrink: 0 }}
            >+</motion.div>
          </div>
        </div>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ padding: '0 2rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                {/* Two-column layout: bullets left, tech right */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', paddingTop: '1.5rem', alignItems: 'start' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {bullets.map((b, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.85rem', color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.7 }}>
                        <span style={{ color, flexShrink: 0, marginTop: '0.1rem', fontSize: '1rem' }}>›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  {/* Tech tags stacked vertically on the right */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: 0, maxWidth: '200px' }}>
                    {tech.map(t => <TechTag key={t} name={t} />)}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  )
}

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section id="experience" style={{ padding: '9rem 0', position: 'relative' }}>
      <div style={wrap}>
        <FadeIn>
          <p style={{ color: '#0D9488', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1.25rem' }}>02 — Experience</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: '3.5rem' }}>
            Career Timeline
          </h2>
        </FadeIn>
        {experience.map((exp, i) => (
          <Card key={i} {...exp} index={i} isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? -1 : i)} />
        ))}
      </div>
    </section>
  )
}
