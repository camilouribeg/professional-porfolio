import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const wrap = { maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(32px, 5vw, 80px)' }

const TEAL = '#0D9488'
const BLUE = '#3B82F6'
const PURPLE = '#8B5CF6'
const AMBER = '#F59E0B'
const GREEN = '#10B981'
const ROSE = '#F43F5E'

const layers = [
  {
    id: 'sources',
    number: '01',
    label: 'Data Sources',
    color: BLUE,
    description: 'Raw operational data from client systems in any format',
    items: [
      { icon: '📊', name: 'Excel / CSV', detail: 'Equipment inventories, fuel logs, production reports' },
      { icon: '📡', name: 'SCADA / IoT', detail: 'Real-time sensor readings, flow rates, pressures' },
      { icon: '📄', name: 'PDF / OCR', detail: 'Legacy invoices and regulatory forms extracted automatically' },
      { icon: '🗄️', name: 'SQL / ERP', detail: 'Enterprise systems, well management platforms' },
    ],
  },
  {
    id: 'ingestion',
    number: '02',
    label: 'Ingestion & Automation',
    color: TEAL,
    description: 'Client-specific Python pipelines that clean, join, and time-filter raw data into typed CSVs ready for the calculation engine',
    items: [
      { icon: '🔗', name: 'Entity Resolution', detail: 'Join production volumes to equipment inventory via shared identifiers' },
      { icon: '🕐', name: 'Time Window Filter', detail: 'Scope each batch run to a configurable reporting period' },
      { icon: '⚖️', name: 'Unit Normalisation', detail: 'Standardise units across source systems before calculation' },
      { icon: '✅', name: 'Validation Layer', detail: 'Schema checks, null handling, consistency key verification' },
    ],
  },
  {
    id: 'database',
    number: '03',
    label: 'Database',
    color: PURPLE,
    description: 'PostgreSQL with per-client schemas — every input, result, forecast, and aggregation is stored and queryable for full audit traceability',
    items: [
      { icon: '📥', name: 'Input Tables', detail: 'Equipment inventory, fuel consumption, activity data' },
      { icon: '📤', name: 'Results Tables', detail: 'One table per emission source category' },
      { icon: '📈', name: 'Forecast Tables', detail: 'Future emission predictions per reporting period' },
      { icon: '🌳', name: 'Aggregation Views', detail: 'Parent → child org tree rollups' },
    ],
  },
]

const modules = [
  { name: 'Stationary Combustion', detail: 'Engines · Heaters · Boilers\nTier 1 / 2 / 3', color: TEAL, icon: '🔥' },
  { name: 'Fugitive & Process', detail: 'Equipment leaks · Venting\n25+ source categories', color: ROSE, icon: '💨' },
  { name: 'Purchased Energy', detail: 'Scope 2 electricity\nState-based grid factors', color: BLUE, icon: '⚡' },
  { name: 'Mobile Sources', detail: 'Fleet vehicles\nDistance × emission factor', color: AMBER, icon: '🚛' },
  { name: 'Refrigerants', detail: 'HFC losses\nPurchase reconciliation', color: PURPLE, icon: '❄️' },
  { name: 'Waste & Water', detail: 'Landfill CH₄\nWastewater N₂O', color: GREEN, icon: '♻️' },
  { name: 'Custom Model', detail: 'Any EF × activity factor\nUser-defined methodology', color: '#F59E0B', icon: '⚙️' },
  { name: 'Scope 3 Modules', detail: 'Supply chain · Travel\nPurchased goods · Transport', color: '#6366F1', icon: '🌐' },
]

const bottomLayers = [
  {
    id: 'aggregation',
    number: '06',
    label: 'Aggregation',
    color: AMBER,
    description: 'Two-stage aggregation: combine facility inputs before calculation (input aggregation) or sum results up an org tree after calculation (output aggregation)',
    items: [
      { icon: '⬇️', name: 'Input Aggregation', detail: 'Merge multiple facility inputs into one before the engine runs' },
      { icon: '⬆️', name: 'Output Aggregation', detail: 'Sum child results up parent → region → corporate hierarchy' },
      { icon: '🏗️', name: 'Org Tree Config', detail: 'JSON-defined parent-child relationships, unlimited depth' },
      { icon: '📋', name: 'GHG Summary', detail: 'Level / Feature / Parameter / Value — drillable at any level' },
    ],
  },
  {
    id: 'forecasting',
    number: '07',
    label: 'Forecasting',
    color: GREEN,
    description: 'Deterministic input-replay forecasting — scale activity data and emission factors forward in time, re-run the same calculation, produce an auditable emissions time series',
    items: [
      { icon: '📋', name: 'Activity Template', detail: 'Future production volumes, equipment counts per period' },
      { icon: '📉', name: 'EF Evolution', detail: 'Model grid decarbonisation or regulatory EF changes over time' },
      { icon: '🔄', name: 'Input Replay', detail: 'Re-runs exact same calculation — no ML model drift, fully auditable' },
      { icon: '📅', name: 'Event Handling', detail: 'New baseline injected at a specific date (e.g. facility expansion)' },
    ],
  },
  {
    id: 'reporting',
    number: '08',
    label: 'Reporting & Output',
    color: ROSE,
    description: 'Audit-ready outputs aligned with regulatory and financial disclosure requirements',
    items: [
      { icon: '🏛️', name: 'Regulatory Submission', detail: 'NGER (CER portal) · EPA GHGRP · XML forms' },
      { icon: '💰', name: 'Financial Disclosure', detail: 'AASB S2 · ISSB IFRS S2 · TCFD · CDP · GRI' },
      { icon: '📊', name: 'Dashboard', detail: 'Interactive baseline · EDA · forecast scenario views' },
      { icon: '🔍', name: 'Audit Trail', detail: 'Every output traceable to input version, EF version, and method' },
    ],
  },
]

function Arrow() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0.75rem 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
        <div style={{ width: '1px', height: '24px', background: 'linear-gradient(to bottom, #1f2937, #374151)' }} />
        <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '7px solid #374151' }} />
      </div>
    </div>
  )
}

function LayerCard({ layer }) {
  return (
    <FadeIn>
      <div style={{
        background: '#0e0e0e',
        border: `1px solid ${layer.color}22`,
        borderRadius: '1.25rem',
        overflow: 'hidden',
      }}>
        <div style={{ padding: '1.75rem 2rem 1.5rem', borderBottom: `1px solid ${layer.color}15` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: layer.color, background: `${layer.color}12`, padding: '0.3rem 0.75rem', borderRadius: '999px', border: `1px solid ${layer.color}25` }}>
              {layer.number} — {layer.label.toUpperCase()}
            </span>
          </div>
          <p style={{ color: '#9ca3af', fontSize: '0.88rem', lineHeight: 1.7 }}>{layer.description}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: `${layer.color}08` }}>
          {layer.items.map((item) => (
            <div key={item.name} style={{ padding: '1.25rem 1.5rem', background: '#0e0e0e' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                <span style={{ color: '#e5e7eb', fontSize: '0.85rem', fontWeight: 600 }}>{item.name}</span>
              </div>
              <p style={{ color: '#6b7280', fontSize: '0.78rem', lineHeight: 1.6 }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

function EngineSection() {
  const [activeModule, setActiveModule] = useState(null)

  return (
    <FadeIn>
      <div style={{ background: '#0e0e0e', border: `1px solid ${TEAL}22`, borderRadius: '1.25rem', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '1.75rem 2rem 1.5rem', borderBottom: `1px solid ${TEAL}15` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: TEAL, background: `${TEAL}12`, padding: '0.3rem 0.75rem', borderRadius: '999px', border: `1px solid ${TEAL}25` }}>
              04 — CALCULATION ENGINE
            </span>
            <span style={{ fontSize: '0.7rem', color: '#4b5563', background: '#111', padding: '0.25rem 0.65rem', borderRadius: '999px', border: '1px solid #1f2937' }}>
              Plugin Architecture
            </span>
          </div>
          <p style={{ color: '#9ca3af', fontSize: '0.88rem', lineHeight: 1.7 }}>
            Each emission source category is an independent, swappable module with an identical interface.
            Adding a new sector means writing one new module — the core dispatcher never changes.
          </p>
        </div>

        {/* EF Registry */}
        <div style={{ padding: '1rem 2rem', borderBottom: `1px solid #1a1a1a`, background: '#0b0b0b' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ color: '#4b5563', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Emission Factor Registry</span>
            {['NGER Measurement Determination', 'IPCC AR5 / AR6', 'EPA 40 CFR Part 98', 'Custom EF overlay', 'Time-versioned'].map(tag => (
              <span key={tag} style={{ fontSize: '0.7rem', color: '#374151', background: '#111', padding: '0.2rem 0.6rem', borderRadius: '0.3rem', border: '1px solid #1f2937' }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Modules grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: '#111' }}>
          {modules.map((mod) => (
            <motion.div
              key={mod.name}
              whileHover={{ y: -2 }}
              onClick={() => setActiveModule(activeModule === mod.name ? null : mod.name)}
              style={{
                padding: '1.25rem 1.5rem',
                background: activeModule === mod.name ? `${mod.color}08` : '#0e0e0e',
                cursor: 'pointer',
                borderBottom: activeModule === mod.name ? `2px solid ${mod.color}` : '2px solid transparent',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.1rem' }}>{mod.icon}</span>
                <span style={{ color: mod.color, fontSize: '0.82rem', fontWeight: 600 }}>{mod.name}</span>
              </div>
              <p style={{ color: '#4b5563', fontSize: '0.75rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{mod.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* GWP row */}
        <div style={{ padding: '1.25rem 2rem', background: '#080808', borderTop: '1px solid #1a1a1a' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ color: '#4b5563', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              05 — GWP Conversion
            </span>
            <span style={{ color: '#6b7280', fontSize: '0.82rem', fontFamily: 'monospace' }}>
              CO₂e = CO₂ × 1 + CH₄ × GWP + N₂O × GWP
            </span>
            {[{ label: 'AR4  CH₄=25', c: '#374151' }, { label: 'AR5  CH₄=28', c: '#374151' }, { label: 'AR6  CH₄=29.8', c: TEAL }].map(g => (
              <span key={g.label} style={{ fontSize: '0.7rem', color: g.c, background: '#111', padding: '0.2rem 0.6rem', borderRadius: '0.3rem', border: `1px solid ${g.c}30` }}>{g.label}</span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default function GHGPipeline() {
  return (
    <section id="ghg-pipeline" style={{ padding: '9rem 0', position: 'relative', background: '#050505' }}>
      {/* subtle background grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${TEAL} 1px, transparent 1px)`, backgroundSize: '40px 40px', opacity: 0.018, pointerEvents: 'none' }} />

      <div style={wrap}>
        <FadeIn>
          <p style={{ color: TEAL, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1.25rem' }}>
            04 — Architecture
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: '0.75rem' }}>
            GHG Emissions Platform
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{ color: '#6b7280', fontSize: '1rem', textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem', lineHeight: 1.8 }}>
            A modular, auditable pipeline for calculating, aggregating, and forecasting greenhouse gas inventories across industrial sectors — from raw operational data to regulatory submission.
          </p>
        </FadeIn>

        {/* Pipeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {layers.map((layer, i) => (
            <div key={layer.id}>
              <LayerCard layer={layer} />
              {i < layers.length - 1 && <Arrow />}
            </div>
          ))}

          <Arrow />
          <EngineSection />
          <Arrow />

          {bottomLayers.map((layer, i) => (
            <div key={layer.id}>
              <LayerCard layer={layer} />
              {i < bottomLayers.length - 1 && <Arrow />}
            </div>
          ))}
        </div>

        {/* Sector extension callout */}
        <FadeIn delay={0.1}>
          <div style={{ marginTop: '3rem', padding: '2rem', background: `${TEAL}07`, border: `1px solid ${TEAL}20`, borderRadius: '1.25rem' }}>
            <p style={{ color: TEAL, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Sector Extension Pattern
            </p>
            <p className="font-display" style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              Extending the platform to a new sector takes five steps
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
              {[
                { n: '1', t: 'Regulatory Mapping', d: 'Identify applicable standards, IPCC tiers, emission factor sources' },
                { n: '2', t: 'Data Ingestion', d: 'Map sector-specific data sources and build ingestion connectors' },
                { n: '3', t: 'EF Registry', d: 'Add sector emission factors with version tags for annual updates' },
                { n: '4', t: 'Calculation Module', d: 'Write one new plugin module — same interface, sector-specific logic' },
                { n: '5', t: 'Validation & Output', d: 'Sector-specific QA rules and regulatory output format' },
              ].map(s => (
                <div key={s.n} style={{ padding: '1rem', background: '#0e0e0e', borderRadius: '0.75rem', border: `1px solid ${TEAL}15` }}>
                  <div style={{ width: '1.6rem', height: '1.6rem', borderRadius: '50%', background: `${TEAL}15`, border: `1px solid ${TEAL}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.6rem' }}>
                    <span style={{ color: TEAL, fontSize: '0.72rem', fontWeight: 700 }}>{s.n}</span>
                  </div>
                  <p style={{ color: '#e5e7eb', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.35rem' }}>{s.t}</p>
                  <p style={{ color: '#6b7280', fontSize: '0.75rem', lineHeight: 1.6 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
