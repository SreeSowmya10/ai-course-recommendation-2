import Loader from './Loader'

const gradients = [
  'linear-gradient(90deg, var(--purple), var(--violet))',
  'linear-gradient(90deg, var(--violet), var(--pink))',
  'linear-gradient(90deg, var(--pink), var(--gold))',
]

export default function Milestones({ milestones, loading, error }) {
  return (
    <section id="milestones" style={{
      padding: '6rem 3rem',
      background: 'var(--deep)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{
          fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--lilac)', fontWeight: 700, marginBottom: '0.7rem',
        }}>Project Milestones</div>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 800, lineHeight: 1.15, marginBottom: '0.8rem',
        }}>Three‑Phase Roadmap</h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 500, lineHeight: 1.7 }}>
          A structured 12‑week plan from data collection to full deployment and evaluation.
        </p>
      </div>

      {loading && <Loader text="Loading milestones from Spring Boot API..." />}
      {error   && <p style={{ color: '#f87171', fontSize: '0.9rem' }}>⚠ API error: {error} — check backend is running on port 8080</p>}

      {milestones && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {milestones.map((m, i) => (
            <div key={m.id} style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 18, padding: '2rem',
              position: 'relative', overflow: 'hidden',
              transition: 'transform 0.25s, box-shadow 0.25s',
              cursor: 'default',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(91,63,212,0.22)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = ''
              }}
            >
              {/* Top accent bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: gradients[i] || gradients[0],
              }} />
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{m.icon}</div>
              <h3 style={{
                fontFamily: 'Syne, sans-serif', fontSize: '1.1rem',
                fontWeight: 700, marginBottom: '0.4rem',
              }}>{m.title}</h3>
              <div style={{
                fontSize: '0.78rem', color: 'var(--pink)',
                fontWeight: 600, marginBottom: '0.9rem', letterSpacing: '0.04em',
              }}>{m.period}</div>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                {m.description}
              </p>
              <div style={{
                position: 'absolute', bottom: 16, right: 16,
                fontFamily: 'Syne, sans-serif', fontSize: '3rem',
                fontWeight: 900, opacity: 0.05, color: 'var(--white)',
                lineHeight: 1, userSelect: 'none',
              }}>0{i + 1}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
