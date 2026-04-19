const cards = [
  {
    icon: '🔧',
    title: 'Current Milestone',
    body: 'Milestone 2: LLM Integration and Model Development. Sub-tasks include LangChain framework setup, LLM prompt design, hybrid recommendation system development, and output testing.',
  },
  {
    icon: '📋',
    title: 'Next Milestone',
    body: 'Deployment and Evaluation — target end of April 2026. Tasks: AWS deployment, React dashboard development, performance metric evaluation, and user feedback collection.',
  },
  {
    icon: '✅',
    title: 'Actions for Success',
    body: 'Focus on prompt tuning, improving LangChain integration, practicing AWS deployment workflows, and validating outputs with real-world student scenarios.',
  },
]

export default function WeekReport() {
  return (
    <section style={{
      padding: '6rem 3rem',
      background: 'var(--navy)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ marginBottom: '3rem' }}>
        <div style={{
          fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--lilac)', fontWeight: 700, marginBottom: '0.7rem',
        }}>Week 10 Progress Report</div>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 800, lineHeight: 1.15, marginBottom: '0.8rem',
        }}>Milestone 2 Update</h2>
        <p style={{ color: 'var(--muted)', maxWidth: 500, lineHeight: 1.7, fontSize: '1rem' }}>
          LLM Integration and Model Development — current status and next steps.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.4rem' }}>
        {cards.map((c, i) => (
          <div key={i} style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 16, padding: '1.8rem',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
          >
            <div style={{ fontSize: '1.8rem', marginBottom: '0.9rem' }}>{c.icon}</div>
            <h3 style={{
              fontFamily: 'Syne, sans-serif', fontSize: '1rem',
              fontWeight: 700, color: 'var(--lilac)', marginBottom: '0.7rem',
            }}>{c.title}</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7 }}>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
