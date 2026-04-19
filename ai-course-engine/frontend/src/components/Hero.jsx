export default function Hero({ stats }) {
  return (
    <section id="overview" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '8rem 3rem 4rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Glow blobs */}
      <div style={{
        position: 'absolute', width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(91,63,212,0.3) 0%, transparent 70%)',
        top: -150, right: -200, pointerEvents: 'none', borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(224,64,251,0.12) 0%, transparent 70%)',
        bottom: 50, left: '5%', pointerEvents: 'none', borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute', width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)',
        top: '30%', left: '20%', pointerEvents: 'none', borderRadius: '50%',
      }} />

      <div style={{ maxWidth: 780, position: 'relative', zIndex: 1 }}>
        {/* Tag */}
        <div className="fade-up" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(91,63,212,0.18)', border: '1px solid var(--border)',
          padding: '0.35rem 1rem', borderRadius: 100,
          fontSize: '0.72rem', color: 'var(--lilac)',
          letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700,
          marginBottom: '1.8rem',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
          ITM Project Proposal · Cumberland University
        </div>

        {/* Headline */}
        <h1 className="fade-up-1" style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
          fontWeight: 800, lineHeight: 1.06,
          marginBottom: '1.6rem', letterSpacing: '-0.02em',
        }}>
          AI Course<br />
          <span style={{
            background: 'linear-gradient(135deg, var(--violet) 0%, var(--pink) 60%, var(--gold) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Recommendation
          </span>
          <br />Engine
        </h1>

        {/* Subtext */}
        <p className="fade-up-2" style={{
          fontSize: '1.08rem', lineHeight: 1.8,
          color: 'var(--muted)', maxWidth: 580, marginBottom: '2.4rem',
        }}>
          An LLM-powered personalized learning platform analyzing academic history,
          skills, and career goals to intelligently recommend university courses —
          built with Python, LangChain, and AWS.
        </p>

        {/* CTA buttons */}
        <div className="fade-up-3" style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <a href="#milestones" style={{
            background: 'linear-gradient(135deg, var(--purple), var(--violet))',
            color: '#fff', padding: '0.8rem 2rem', borderRadius: 10,
            fontWeight: 600, fontSize: '0.92rem',
            boxShadow: '0 4px 28px rgba(91,63,212,0.45)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 36px rgba(91,63,212,0.55)' }}
            onMouseLeave={e => { e.target.style.transform = ''; e.target.style.boxShadow = '0 4px 28px rgba(91,63,212,0.45)' }}
          >
            View Milestones →
          </a>
          <a href="#progress" style={{
            border: '1px solid var(--border)', color: 'var(--lilac)',
            padding: '0.8rem 2rem', borderRadius: 10,
            fontWeight: 500, fontSize: '0.92rem',
            transition: 'background 0.2s, border-color 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(167,139,250,0.08)'; e.currentTarget.style.borderColor = 'var(--lilac)' }}
            onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.borderColor = 'var(--border)' }}
          >
            Track Progress
          </a>
        </div>

        {/* Author */}
        <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
          <strong style={{ color: 'var(--white)' }}>Sree Sowmya Gaddam</strong>
          &nbsp;·&nbsp; MS in Information Technology &nbsp;·&nbsp; Feb – May 2026
        </div>
      </div>

      {/* Stats strip */}
      {stats && (
        <div style={{
          display: 'flex', gap: '0', flexWrap: 'wrap',
          marginTop: '5rem', borderTop: '1px solid var(--border)',
          paddingTop: '2.5rem', position: 'relative', zIndex: 1,
        }}>
          {[
            { num: stats.accuracyImprovement,          label: 'Course Match Accuracy' },
            { num: stats.advisorWorkloadReduction,      label: 'Advisor Workload Reduced' },
            { num: stats.studentSatisfactionTarget,     label: 'Satisfaction Target' },
            { num: stats.duration,                      label: 'Project Duration' },
            { num: stats.totalBudget,                   label: 'Total Budget' },
          ].map((s, i) => (
            <div key={i} style={{
              flex: '1', minWidth: 140, textAlign: 'center', padding: '0 1.5rem',
              borderRight: i < 4 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{
                fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 800,
                background: 'linear-gradient(135deg, var(--lilac), var(--pink))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>{s.num}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.3rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
