const stack = [
  { cat: 'AI',       label: 'LangChain'              },
  { cat: 'AI',       label: 'OpenAI LLM'             },
  { cat: 'AI',       label: 'Collaborative Filtering' },
  { cat: 'AI',       label: 'NLP Pipelines'          },
  { cat: 'Backend',  label: 'Spring Boot'            },
  { cat: 'Backend',  label: 'Java 17'                },
  { cat: 'Backend',  label: 'Python'                 },
  { cat: 'Backend',  label: 'Flask'                  },
  { cat: 'Frontend', label: 'React 18'               },
  { cat: 'Frontend', label: 'Vite'                   },
  { cat: 'Cloud',    label: 'AWS EC2'                },
  { cat: 'Cloud',    label: 'AWS S3'                 },
  { cat: 'Cloud',    label: 'AWS Lambda'             },
  { cat: 'Data',     label: 'Pandas'                 },
  { cat: 'Data',     label: 'Feature Store'          },
  { cat: 'Eval',     label: 'Precision / Recall'     },
  { cat: 'Eval',     label: 'A/B Testing'            },
  { cat: 'DB',       label: 'H2 / PostgreSQL'        },
]

const catColor = {
  AI:       'rgba(91,63,212,0.15)',
  Backend:  'rgba(45,212,191,0.1)',
  Frontend: 'rgba(224,64,251,0.1)',
  Cloud:    'rgba(245,158,11,0.1)',
  Data:     'rgba(167,139,250,0.1)',
  Eval:     'rgba(248,113,113,0.1)',
  DB:       'rgba(52,211,153,0.1)',
}

export default function TechStack() {
  return (
    <section id="tech" style={{
      padding: '6rem 3rem',
      background: 'var(--deep)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ marginBottom: '3rem' }}>
        <div style={{
          fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--lilac)', fontWeight: 700, marginBottom: '0.7rem',
        }}>Technology Stack</div>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 800, lineHeight: 1.15, marginBottom: '0.8rem',
        }}>Built With</h2>
        <p style={{ color: 'var(--muted)', maxWidth: 500, lineHeight: 1.7, fontSize: '1rem' }}>
          Modern AI/ML tooling from data pipeline through cloud deployment.
        </p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
        {stack.map((s, i) => (
          <div key={i} style={{
            background: catColor[s.cat] || 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 100, padding: '0.55rem 1.2rem',
            fontSize: '0.87rem', fontWeight: 500,
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            transition: 'transform 0.2s, border-color 0.2s',
            cursor: 'default',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.borderColor = 'var(--violet)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = 'var(--border)' }}
          >
            <span style={{ fontSize: '0.65rem', color: 'var(--muted)', fontWeight: 700, letterSpacing: '0.08em' }}>
              {s.cat}
            </span>
            <span style={{ color: 'var(--white)' }}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
