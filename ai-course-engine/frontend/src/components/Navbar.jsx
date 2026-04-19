import { useState, useEffect } from 'react'

const links = [
  { href: '#overview',    label: 'Overview'    },
  { href: '#milestones',  label: 'Milestones'  },
  { href: '#progress',    label: 'Progress'    },
  { href: '#tech',        label: 'Tech Stack'  },
  { href: '#impact',      label: 'Impact'      },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1.1rem 3rem',
      background: scrolled ? 'rgba(11,11,34,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <span style={{
        fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1rem',
        background: 'linear-gradient(135deg, var(--lilac), var(--pink))',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        letterSpacing: '0.03em',
      }}>
        AI · Course Engine
      </span>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} style={{
              color: 'var(--muted)', fontSize: '0.85rem', fontWeight: 500,
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--lilac)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
