export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center', padding: '2.5rem 3rem',
      borderTop: '1px solid var(--border)',
      fontSize: '0.82rem', color: 'var(--muted)',
      background: 'var(--deep)',
    }}>
      <span style={{ color: 'var(--lilac)', fontWeight: 600 }}>Sree Sowmya Gaddam</span>
      &nbsp;·&nbsp; AI Course Recommendation Engine &nbsp;·&nbsp;
      Cumberland University &nbsp;·&nbsp; MS in Information Technology &nbsp;·&nbsp; 2026
      <br />
      <span style={{ fontSize: '0.75rem', marginTop: '0.4rem', display: 'block', opacity: 0.5 }}>
        React 18 + Vite · Spring Boot 3 · H2 · AWS
      </span>
    </footer>
  )
}
