const { Logo, Icon, Button, LinkArrow } = window.__ELAAD;

const TOP = ['Publicaties','Data','Beeldbank','Vacatures','Over ons','Contact'];
const MAIN = [
  { label:'Home' },
  { label:'Onderzoek', children:['Smart Charging','Human Capital','Open Source','Power Quality','Logistiek','Data-analyse en Outlooks','Cybersecurity','Versnellen proces','Gedragsonderzoek'] },
  { label:'Testen', children:['Testen algemeen','Interoperabiliteit','Netbeheerderskeuringen','Power Quality','Smart Charging','Cybersecurity'] },
  { label:'Projecten' }, { label:'Evenementen' }, { label:'Nieuws' }
];

function SiteHeader({ active, onNavigate }) {
  const [open, setOpen] = React.useState(null);
  return (
    <header style={{ position:'sticky', top:0, zIndex:200, background:'#fff', boxShadow:'0 1px 0 var(--border-subtle)' }}>
      <div style={{ background:'var(--surface-muted)', borderBottom:'1px solid var(--border-subtle)' }}>
        <div className="container" style={{ display:'flex', justifyContent:'flex-end', alignItems:'center', gap:'var(--space-5)', height:38 }}>
          {TOP.map(t => <a key={t} href="#" onClick={e=>{e.preventDefault();onNavigate&&onNavigate(t)}}
            style={{ fontSize:'var(--fs-xs)', color:'var(--text-muted)', borderBottom:'none', fontWeight:500 }}>{t}</a>)}
          <span style={{ width:1, height:16, background:'var(--border-default)' }} />
          <a href="#" style={{ fontSize:'var(--fs-xs)', color:'var(--brand-primary)', borderBottom:'none', fontWeight:700, fontFamily:'var(--font-display)' }}>EN</a>
        </div>
      </div>
      <div className="container" style={{ display:'flex', alignItems:'center', gap:'var(--space-8)', height:92 }}>
        <a href="#" onClick={e=>{e.preventDefault();onNavigate&&onNavigate('Home')}} style={{ borderBottom:'none', flex:'0 0 auto' }}>
          <Logo brand="elaad" height={64} />
        </a>
        <nav style={{ display:'flex', alignItems:'center', gap:'var(--space-6)', marginLeft:'auto' }}
          onMouseLeave={() => setOpen(null)}>
          {MAIN.map(item => (
            <div key={item.label} style={{ position:'relative' }} onMouseEnter={() => setOpen(item.children ? item.label : null)}>
              <a href="#" onClick={e=>{e.preventDefault();onNavigate&&onNavigate(item.label)}}
                style={{ display:'flex', alignItems:'center', gap:5, fontFamily:'var(--font-display)',
                  fontSize:'var(--fs-sm)', fontWeight:600, borderBottom:'3px solid ' + (active === item.label ? 'var(--brand-accent)' : 'transparent'),
                  paddingBottom:6, color: active === item.label ? 'var(--text-heading)' : 'var(--text-body)' }}>
                {item.label}{item.children && <Icon name="caret-down" size={14} />}
              </a>
              {item.children && open === item.label && (
                <div style={{ position:'absolute', top:'100%', left:-16, marginTop:10, minWidth:260, background:'#fff',
                  border:'1px solid var(--border-subtle)', borderRadius:'var(--radius-md)', boxShadow:'var(--shadow-lg)',
                  padding:'var(--space-2)', display:'flex', flexDirection:'column' }}>
                  <div style={{ height:3, background:'var(--gradient-brand)', margin:'-8px -8px 8px', borderRadius:'6px 6px 0 0' }} />
                  {item.children.map(c => <a key={c} href="#" onClick={e=>{e.preventDefault();onNavigate&&onNavigate(c)}}
                    style={{ padding:'9px 12px', fontSize:'var(--fs-sm)', color:'var(--text-body)', borderBottom:'none',
                      borderRadius:'var(--radius-sm)' }}
                    onMouseEnter={e=>e.currentTarget.style.background='var(--blue-50)'}
                    onMouseLeave={e=>e.currentTarget.style.background='transparent'}>{c}</a>)}
                </div>
              )}
            </div>
          ))}
          <button aria-label="Zoeken" style={{ border:'none', background:'none', cursor:'pointer', color:'var(--brand-primary)', padding:0 }}>
            <Icon name="magnifying-glass" size={20} />
          </button>
        </nav>
      </div>
    </header>
  );
}

const PARTNERS = ['Stedin','Enexis','Coteq','Liander','Westland Infra','Rendo'];

function SiteFooter() {
  return (
    <footer>
      <div style={{ background:'var(--surface-muted)', padding:'var(--space-10) 0', borderTop:'1px solid var(--border-subtle)' }}>
        <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'var(--space-8)', flexWrap:'wrap' }}>
          <span style={{ fontFamily:'var(--font-display)', fontSize:'var(--fs-xs)', fontWeight:700,
            letterSpacing:'var(--ls-eyebrow)', textTransform:'uppercase', color:'var(--text-muted)' }}>Een initiatief van de netbeheerders</span>
          <div style={{ display:'flex', gap:'var(--space-8)', flexWrap:'wrap', alignItems:'center' }}>
            {PARTNERS.map(p => <span key={p} style={{ fontFamily:'var(--font-display)', fontSize:'var(--fs-md)',
              fontWeight:700, color:'var(--grey-300)' }}>{p}</span>)}
          </div>
        </div>
      </div>
      <div style={{ background:'var(--blue-800)', color:'rgba(255,255,255,.78)', padding:'var(--space-12) 0 var(--space-6)' }}>
        <div className="container" style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr', gap:'var(--space-10)' }}>
          <div>
            <Logo brand="elaad" height={56} style={{ background:'#fff', borderRadius:'var(--radius-md)', padding:6 }} />
            <p style={{ marginTop:'var(--space-4)', fontSize:'var(--fs-sm)', lineHeight:'var(--lh-normal)', maxWidth:380 }}>
              Kennis- en innovatiecentrum ElaadNL onderzoekt en test de mogelijkheden voor Smart Charging: elektrische voertuigen slim en duurzaam opladen.
            </p>
            <div style={{ display:'flex', gap:'var(--space-3)', marginTop:'var(--space-5)' }}>
              {['linkedin-logo','youtube-logo','x-logo','instagram-logo','facebook-logo'].map(n =>
                <a key={n} href="#" aria-label={n} style={{ borderBottom:'none', color:'rgba(255,255,255,.8)' }}><Icon name={n} size={20} /></a>)}
            </div>
          </div>
          <div>
            <h4 style={{ color:'#fff', fontSize:'var(--fs-base)', marginBottom:'var(--space-4)' }}>Onderwerpen</h4>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {['Smart Charging','Power Quality','Cybersecurity','Interoperabiliteit','Logistiek'].map(l =>
                <a key={l} href="#" style={{ fontSize:'var(--fs-sm)', color:'rgba(255,255,255,.78)', borderBottom:'none' }}>{l}</a>)}
            </div>
          </div>
          <div>
            <h4 style={{ color:'#fff', fontSize:'var(--fs-base)', marginBottom:'var(--space-4)' }}>Organisatie</h4>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {['Over ons','Vacatures','Contact','Privacyverklaring','Responsible Disclosure Policy'].map(l =>
                <a key={l} href="#" style={{ fontSize:'var(--fs-sm)', color:'rgba(255,255,255,.78)', borderBottom:'none' }}>{l}</a>)}
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop:'var(--space-10)', paddingTop:'var(--space-5)',
          borderTop:'1px solid rgba(255,255,255,.14)', fontSize:'var(--fs-xs)', color:'rgba(255,255,255,.55)' }}>
          Copyright © ElaadNL 2026
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter });
