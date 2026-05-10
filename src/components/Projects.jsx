import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const wrap = { maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(32px, 5vw, 80px)' }

const projects = [
  { title: 'Pentana Dealership Analytics Platform', category: 'Data Engineering · AI', description: 'Snowflake medallion architecture (Bronze → Silver → Gold) over 8.7M rows of Australian dealership DMS data. AI enrichment layer: dealer group taxonomy (329 groups, 74.1% VIN coverage), land size, VIN decoding, and 68-variable benchmarking framework.', tech: ['Snowflake', 'Python', 'SQL', 'Tavily API', 'Star Schema', 'Medallion Architecture'], image: null, accent: '#005293', wide: true, link: '/professional-porfolio/pentana.html', linkLabel: 'View Case Study ↗' },
  { title: 'Airflow + dbt Medallion Pipeline', category: 'Data Engineering', description: 'End-to-end pipeline with bronze/silver/gold layers, SCD Type 2 snapshots, star schema models and business marts for Airbnb and Census revenue + demographic analysis.', tech: ['Apache Airflow', 'dbt', 'Snowflake', 'PostgreSQL', 'Python'], image: '/professional-porfolio/assets/medallion.png', accent: '#0D9488', wide: true },
  { title: 'RAG Resume Ranking & Supplier Evaluation', category: 'AI / NLP', description: 'AWS Bedrock retrieval workflow using MongoDB Atlas as vector store. Resume ranking and supplier evaluation with LLM context injection.', tech: ['AWS Bedrock', 'MongoDB Atlas', 'LlamaIndex', 'Python'], image: '/professional-porfolio/assets/rag-workflow.png', accent: '#6366F1', wide: false },
  { title: 'GHG Digital Consultant', category: 'AI / Sustainability', description: 'RAG-powered assistant for Australian GHG compliance that answers regulatory questions using retrieved context from official standards. Led delivery, business analysis, and implementation roadmap. Live on Hugging Face.', tech: ['Python', 'RAG', 'LLM', 'Reinforcement Learning'], image: null, accent: '#10B981', wide: false, link: 'https://huggingface.co/spaces/camilouribeg/ghg-digital-consultant', linkLabel: 'Try it on HF ↗', secondLink: 'https://github.com/camilouribeg/RL-GHG-Consultant', secondLinkLabel: 'GitHub ↗' },
  { title: 'LLM Prompt Injection Eval Framework', category: 'AI Security', description: 'Modular capstone framework to test prompt injection attacks, benchmark attack success rates and evaluate mitigation strategies across LLM and lightweight agent workflows. Live demo on Hugging Face.', tech: ['Python', 'LLMs', 'Agent Frameworks'], image: null, accent: '#F59E0B', wide: false, link: 'https://huggingface.co/spaces/camilouribeg/prompt-injection-eval', linkLabel: 'Try it on HF ↗' },
  { title: 'Automation of GHG Estimates — SPE Publication', category: 'Research / Publication', description: 'Authored and published SPE paper on automating Greenhouse Gas Emissions estimates for natural gas production in the Appalachian Basin, applying EPA 40 CFR Part 98. Presented at SPE Energy Transition Symposium, Houston 2024. DOI: 10.2118/221400-MS.', tech: ['Python', 'GHG Protocols', 'EPA 40 CFR Part 98', 'PostgreSQL'], image: null, accent: '#EC4899', wide: true, link: 'https://onepetro.org/speets/proceedings-abstract/24ETS/24ETS/D012S005R002/548349', linkLabel: 'View on OnePetro ↗' },
  { title: 'GHG Pipeline Architecture', category: 'Architecture · Sustainability', description: 'Architecture overview of how production GHG emissions calculators work, based on two years building and deploying emissions pipelines for nearly 10 oil & gas clients at Tachyus. Documents the full pipeline: data ingestion, modular calculation engine, aggregation, forecasting, and regulatory reporting — and how the same design extends to any industrial sector.', tech: ['Python', 'EPA 40 CFR Part 98', 'NGER', 'IPCC AR6', 'PostgreSQL', 'AASB S2 · TCFD'], image: null, accent: '#0D9488', wide: true, link: '/professional-porfolio/ghg-pipeline.html', linkLabel: 'View Architecture ↗' },
]

const categoryIcon = { 'AI Security': '🔐', 'Research / Publication': '📄', 'AI / Sustainability': '🌿' }

function ProjectCard({ title, category, description, tech, image, accent, wide, link, linkLabel, secondLink, secondLinkLabel }) {
  return (
    <FadeIn>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className={wide ? 'project-card-wide' : 'project-card-regular'}
        style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.25rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', transition: 'border-color 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.borderColor = `${accent}35`}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
      >
        {image ? (
          <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
            <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.5s' }} onMouseEnter={e => e.target.style.transform = 'scale(1.03)'} onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, #111111 100%)' }} />
          </div>
        ) : (
          <div style={{ height: '7rem', background: `${accent}07`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${accent} 1px, transparent 1px)`, backgroundSize: '20px 20px', opacity: 0.03 }} />
            <span style={{ fontSize: '2.5rem', opacity: 0.15 }}>{categoryIcon[category] || '⚡'}</span>
          </div>
        )}
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.72rem', padding: '0.3rem 0.85rem', borderRadius: '999px', background: `${accent}12`, color: accent, border: `1px solid ${accent}22` }}>{category}</span>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              {secondLink && (
                <a href={secondLink} target="_blank" rel="noreferrer" style={{ color: '#6b7280', fontSize: '0.72rem', textDecoration: 'none', fontWeight: 500, opacity: 0.7, transition: 'opacity 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
                >{secondLinkLabel}</a>
              )}
              {link ? (
                <a href={link} target="_blank" rel="noreferrer" style={{ color: accent, fontSize: '0.75rem', textDecoration: 'none', fontWeight: 500, opacity: 0.8, transition: 'opacity 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '0.8'}
                >{linkLabel || '↗'}</a>
              ) : (
                <span style={{ color: '#374151', fontSize: '1rem' }}>↗</span>
              )}
            </div>
          </div>
          <p className="font-display" style={{ color: '#fff', fontWeight: 700, fontSize: '1.15rem', lineHeight: 1.3, marginBottom: '0.875rem' }}>{title}</p>
          <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.8, flex: 1, marginBottom: '1.5rem' }}>{description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {tech.map(t => <span key={t} style={{ fontSize: '0.72rem', padding: '0.3rem 0.7rem', borderRadius: '0.3rem', background: '#1a1a1a', color: '#555' }}>{t}</span>)}
          </div>
        </div>
      </motion.div>
    </FadeIn>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '9rem 0', position: 'relative' }}>
      <div style={wrap}>
        <FadeIn>
          <p style={{ color: '#0D9488', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1.25rem' }}>03 — Projects</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: '3.5rem' }}>Selected Work</h2>
        </FadeIn>
        <div className="projects-grid">
          {projects.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  )
}
