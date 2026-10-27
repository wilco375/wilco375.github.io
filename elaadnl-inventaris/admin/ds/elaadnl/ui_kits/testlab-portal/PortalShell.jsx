const { Logo, Icon, Badge, Tooltip } = window.__ELAAD;

const NAV = [
  { label:'Overzicht', icon:'squares-four' },
  { label:'Testsessies', icon:'flask' },
  { label:'Laadstations', icon:'plug' },
  { label:'Metingen', icon:'pulse' },
  { label:'Rapporten', icon:'file-text' },
  { label:'Kalender', icon:'calendar-blank' }
];

function PortalShell({ view, onNavigate, title, subtitle, actions, children }) {
  return (
    <div style={{ display:'flex', minHeight:'100vh', background:'var(--surface-muted)' }}>
      <nav style={{ width:236, flex:'0 0 auto', background:'var(--blue-800)', display:'flex', flexDirection:'column',
        padding:'var(--space-6) 0' }}>
        <div style={{ padding:'0 var(--space-5) var(--space-6)' }}>
          <img src="../../assets/logos/logo-elaad-testlab.png" alt="Elaad Testlab"
            style={{ width:'100%', background:'#fff', padding:'10px 12px', borderRadius:'var(--radius-md)', boxSizing:'border-box' }} />
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:2, padding:'0 var(--space-3)' }}>
          {NAV.map(n => {
            const on = n.label === view;
            return (
              <button key={n.label} onClick={() => onNavigate && onNavigate(n.label)}
                style={{ display:'flex', alignItems:'center', gap:'var(--space-3)', padding:'10px 12px',
                  border:'none', cursor:'pointer', borderRadius:'var(--radius-sm)', textAlign:'left',
                  fontFamily:'var(--font-display)', fontSize:'var(--fs-sm)', fontWeight: on ? 700 : 500,
                  background: on ? 'rgba(255,255,255,.12)' : 'transparent',
                  color: on ? '#fff' : 'rgba(255,255,255,.72)',
                  borderLeft:'3px solid ' + (on ? 'var(--brand-accent)' : 'transparent'),
                  transition:'var(--transition-control)' }}>
                <Icon name={n.icon} size={17} />{n.label}
              </button>
            );
          })}
        </div>
        <div style={{ marginTop:'auto', padding:'var(--space-5)', color:'rgba(255,255,255,.5)', fontSize:'var(--fs-2xs)' }}>
          <div style={{ height:3, background:'var(--gradient-brand)', borderRadius:2, marginBottom:'var(--space-4)' }} />
          Testlab Arnhem · v4.2
        </div>
      </nav>
      <div style={{ flex:1, minWidth:0, display:'flex', flexDirection:'column' }}>
        <header style={{ background:'#fff', borderBottom:'1px solid var(--border-subtle)', padding:'var(--space-5) var(--space-8)',
          display:'flex', alignItems:'center', gap:'var(--space-6)' }}>
          <div style={{ flex:1, minWidth:0 }}>
            <h1 style={{ margin:0, fontSize:'var(--fs-xl)' }}>{title}</h1>
            {subtitle && <div style={{ fontSize:'var(--fs-xs)', color:'var(--text-muted)', marginTop:2 }}>{subtitle}</div>}
          </div>
          {actions}
          <Tooltip label="Ingelogd als M. de Vries">
            <span style={{ width:36, height:36, borderRadius:'50%', background:'var(--blue-50)', color:'var(--brand-primary)',
              display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)',
              fontWeight:700, fontSize:'var(--fs-sm)' }}>MV</span>
          </Tooltip>
        </header>
        <div style={{ flex:1, padding:'var(--space-8)' }}>{children}</div>
      </div>
    </div>
  );
}
Object.assign(window, { PortalShell });
