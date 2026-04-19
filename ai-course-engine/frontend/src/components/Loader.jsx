export default function Loader({ text = 'Loading...' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '4rem' }}>
      <div style={{
        width: 40, height: 40, borderRadius: '50%',
        border: '3px solid var(--border)',
        borderTopColor: 'var(--violet)',
        animation: 'spin 0.8s linear infinite',
      }} />
      <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{text}</span>
    </div>
  )
}
