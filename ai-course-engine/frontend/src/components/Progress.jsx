import Loader from './Loader'

const badgeStyle = {
  'Completed':  { bg: 'rgba(52,211,153,0.14)',  color: '#34d399' },
  'In Progress':{ bg: 'rgba(251,191,36,0.14)',  color: '#fbbf24' },
  'Not Started':{ bg: 'rgba(167,139,250,0.1)',  color: 'var(--lilac)' },
  'Ongoing':    { bg: 'rgba(224,64,251,0.12)',  color: '#e879f9' },
}

export default function Progress({ tasks, loading, error }) {
  return (
    <section id="progress" style={{
      padding: '6rem 3rem',
      background: 'var(--navy)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ marginBottom: '3rem' }}>
        <div style={{
          fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--lilac)', fontWeight: 700, marginBottom: '0.7rem',
        }}>Gantt Chart — Week 10</div>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 800, lineHeight: 1.15, marginBottom: '0.8rem',
        }}>Task Progress Tracker</h2>
        <p style={{ color: 'var(--muted)', maxWidth: 500, lineHeight: 1.7, fontSize: '1rem' }}>
          Live status of all project workstreams, served from the Spring Boot API.
        </p>
      </div>

      {loading && <Loader text="Fetching tasks from backend..." />}
      {error   && <p style={{ color: '#f87171', fontSize: '0.9rem' }}>⚠ API error: {error}</p>}

      {tasks && (
        <div style={{ overflowX: 'auto', borderRadius: 14, border: '1px solid var(--border)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                {['Task', 'Start', 'End', 'Status', 'Progress', 'Notes'].map(h => (
                  <th key={h} style={{
                    textAlign: 'left', padding: '0.85rem 1.2rem',
                    fontSize: '0.7rem', letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: 'var(--muted)',
                    borderBottom: '1px solid var(--border)', fontWeight: 700,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tasks.map((t, i) => {
                const bs = badgeStyle[t.status] || badgeStyle['Not Started']
                return (
                  <tr key={t.id} style={{
                    background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                    transition: 'background 0.15s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(167,139,250,0.05)'}
                    onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)'}
                  >
                    <td style={{ padding: '0.9rem 1.2rem', fontSize: '0.88rem', borderBottom: '1px solid rgba(255,255,255,0.04)', fontWeight: 500 }}>
                      {t.name}
                    </td>
                    <td style={{ padding: '0.9rem 1.2rem', fontSize: '0.83rem', color: 'var(--muted)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      {t.startDate}
                    </td>
                    <td style={{ padding: '0.9rem 1.2rem', fontSize: '0.83rem', color: 'var(--muted)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      {t.endDate}
                    </td>
                    <td style={{ padding: '0.9rem 1.2rem', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <span style={{
                        display: 'inline-block', padding: '0.25rem 0.7rem',
                        borderRadius: 100, fontSize: '0.7rem', fontWeight: 700,
                        letterSpacing: '0.03em', background: bs.bg, color: bs.color,
                      }}>{t.status}</span>
                    </td>
                    <td style={{ padding: '0.9rem 1.2rem', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <div style={{ width: 90, height: 5, background: 'rgba(255,255,255,0.08)', borderRadius: 100, overflow: 'hidden' }}>
                          <div style={{
                            width: `${t.percentComplete}%`, height: '100%', borderRadius: 100,
                            background: 'linear-gradient(90deg, var(--purple), var(--pink))',
                            transition: 'width 0.8s ease',
                          }} />
                        </div>
                        <span style={{ fontSize: '0.75rem', color: 'var(--muted)', minWidth: 28 }}>
                          {t.percentComplete > 0 ? `${t.percentComplete}%` : '—'}
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: '0.9rem 1.2rem', fontSize: '0.78rem', color: 'var(--muted)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      {t.notes}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
