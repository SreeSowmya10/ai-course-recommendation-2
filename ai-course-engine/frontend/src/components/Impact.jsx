const impacts = [
  {
    pct: '50%',
    title: 'Better course match accuracy',
    desc: 'Compared to traditional catalog-browsing and manual advisor-led selection methods.',
    color: 'var(--lilac)',
  },
  {
    pct: '35%',
    title: 'Reduced advisor workload',
    desc: 'Freeing advisors to focus on high-touch mentoring, counseling, and student support.',
    color: 'var(--pink)',
  },
  {
    pct: '90%+',
    title: 'Student satisfaction target',
    desc: 'Measured via post-recommendation feedback forms and engagement tracking surveys.',
    color: 'var(--teal)',
  },
]

const budgetItems = [
  { icon: '☁️', label: 'AWS (EC2, S3, Lambda)', amount: '$800', sub: '/ year' },
  { icon: '🤖', label: 'OpenAI API Credits',    amount: '$500', sub: 'one-time' },
  { icon: '💰', label: 'Total Budget',           amount: '$1,800', sub: 'full lifecycle', highlight: true },
]

export default function Impact() {
  return (
    <>
      {/* IMPACT */}
      <section id="impact" style={{
        padding: '6rem 3rem',
        background: 'var(--navy)',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--lilac)', fontWeight: 700, marginBottom: '0.7rem',
          }}>Projected Impact</div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 800, lineHeight: 1.15, marginBottom: '0.8rem',
          }}>Why This Matters</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 500, lineHeight: 1.7, fontSize: '1rem' }}>
            Measurable outcomes for students and academic advisors at Cumberland University.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: 640 }}>
          {impacts.map((imp, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '1.5rem',
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 16, padding: '1.4rem 1.8rem',
              transition: 'transform 0.2s, border-color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(6px)'; e.currentTarget.style.borderColor = imp.color }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              <div style={{
                fontFamily: 'Syne, sans-serif', fontSize: '2.2rem', fontWeight: 800,
                minWidth: 90, color: imp.color,
              }}>{imp.pct}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.3rem' }}>{imp.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{imp.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BUDGET */}
      <section style={{
        padding: '6rem 3rem',
        background: 'var(--deep)',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--lilac)', fontWeight: 700, marginBottom: '0.7rem',
          }}>Estimated Costs</div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 800, lineHeight: 1.15,
          }}>Project Budget</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem', maxWidth: 700 }}>
          {budgetItems.map((b, i) => (
            <div key={i} style={{
              background: b.highlight ? 'rgba(91,63,212,0.1)' : 'var(--card)',
              border: `1px solid ${b.highlight ? 'var(--violet)' : 'var(--border)'}`,
              borderRadius: 16, padding: '1.8rem',
              display: 'flex', flexDirection: 'column', gap: '0.5rem',
            }}>
              <div style={{ fontSize: '1.6rem' }}>{b.icon}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{b.label}</div>
              <div style={{
                fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 800,
                ...(b.highlight ? {
                  background: 'linear-gradient(135deg, var(--lilac), var(--pink))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                } : { color: 'var(--lilac)' }),
              }}>{b.amount}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{b.sub}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
