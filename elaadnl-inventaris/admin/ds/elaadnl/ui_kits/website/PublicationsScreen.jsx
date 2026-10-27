const { Card, Tag, Badge, Icon, Input, Select, Checkbox, Pagination, Button, LinkArrow } = window.__ELAAD;

const GROUPS = [
  { title:'Bidirectioneel laden', items:[
    { t:'V2G Implementation Guide', y:'2025', kind:'PDF' },
    { t:'Technical requirements for purchasing and operating Smart and Bidirectional Charging v1.0', y:'2025', kind:'PDF' },
    { t:'Outlook: Bidirectioneel laden: welke kant gaat het op?', y:'2025', kind:'Outlook' },
    { t:'SCALE: V2G Interoperability testing', y:'2025', kind:'PDF' }
  ]},
  { title:'Smart Charging', items:[
    { t:'Nationaal Laadonderzoek 2025', y:'2025', kind:'Rapport' },
    { t:'Guide to Smart Charging Solutions', y:'2025', kind:'PDF' },
    { t:'Results of large scale technical smart charging test of electric vehicles', y:'2025', kind:'PDF' },
    { t:'Flexpower3: meer laden op een vol elektriciteitsnet', y:'2024', kind:'Rapport' }
  ]},
  { title:'Power Quality', items:[
    { t:'TEPQEV whitepaper: Standards for 2–150 kHz', y:'2023', kind:'Whitepaper' },
    { t:'Power Quality Guidelines (Enedis & ElaadNL)', y:'2022', kind:'PDF' }
  ]}
];
const TOPICS = ['Bidirectioneel laden','Residentiële flexibiliteit','Smart Charging','Cyber security','Quickscans','Outlooks','Public Key Infrastructure','Nationaal Laadonderzoek','Power Quality'];

function PublicationsScreen() {
  const [q, setQ] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [checked, setChecked] = React.useState(['Smart Charging']);
  const toggle = (t) => setChecked(c => c.includes(t) ? c.filter(x => x !== t) : [...c, t]);
  const match = (s) => !q || s.toLowerCase().includes(q.toLowerCase());
  return (
    <main>
      <section style={{ background:'var(--surface-muted)', borderBottom:'1px solid var(--border-subtle)', padding:'var(--space-12) 0 var(--space-10)' }}>
        <div className="container">
          <span className="eyebrow">Kennisbank</span>
          <h1 style={{ margin:'var(--space-2) 0 var(--space-3)' }}>Publicaties</h1>
          <p style={{ maxWidth:640, margin:0, fontSize:'var(--fs-md)', color:'var(--text-muted)' }}>
            Op deze pagina vind je onze belangrijkste publicaties over uiteenlopende onderwerpen.
          </p>
        </div>
      </section>
      <section style={{ padding:'var(--section-y) 0' }}>
        <div className="container" style={{ display:'grid', gridTemplateColumns:'260px 1fr', gap:'var(--space-12)', alignItems:'start' }}>
          <aside style={{ position:'sticky', top:150, display:'flex', flexDirection:'column', gap:'var(--space-6)' }}>
            <div>
              <h4 style={{ fontSize:'var(--fs-sm)', marginBottom:'var(--space-3)' }}>Zoeken</h4>
              <Input value={q} onChange={e => setQ(e.target.value)} placeholder="Titel of trefwoord"
                iconLeft={<Icon name="magnifying-glass" size={16} />} />
            </div>
            <div>
              <h4 style={{ fontSize:'var(--fs-sm)', marginBottom:'var(--space-3)' }}>Jaar</h4>
              <Select placeholder="Alle jaren" options={['2026','2025','2024','2023']} />
            </div>
            <div>
              <h4 style={{ fontSize:'var(--fs-sm)', marginBottom:'var(--space-3)' }}>Onderwerp</h4>
              <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-3)' }}>
                {TOPICS.map(t => <Checkbox key={t} checked={checked.includes(t)} onChange={() => toggle(t)} label={t} />)}
              </div>
            </div>
          </aside>
          <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-10)' }}>
            {GROUPS.map(g => {
              const items = g.items.filter(i => match(i.t));
              if (!items.length) return null;
              return (
                <div key={g.title}>
                  <div style={{ display:'flex', alignItems:'baseline', gap:'var(--space-3)', marginBottom:'var(--space-4)' }}>
                    <h2 style={{ margin:0, fontSize:'var(--fs-xl)' }}>{g.title}</h2>
                    <span style={{ fontSize:'var(--fs-xs)', color:'var(--text-subtle)' }}>{items.length} publicaties</span>
                  </div>
                  <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-3)' }}>
                    {items.map(i => (
                      <Card key={i.t} variant="flat" interactive as="a" href="#" padding="var(--space-4) var(--space-5)">
                        <div style={{ display:'flex', alignItems:'center', gap:'var(--space-4)' }}>
                          <span style={{ width:38, height:38, borderRadius:'var(--radius-sm)', background:'var(--blue-50)',
                            color:'var(--brand-primary)', display:'flex', alignItems:'center', justifyContent:'center', flex:'0 0 auto' }}>
                            <Icon name="file-text" size={19} />
                          </span>
                          <div style={{ flex:1, minWidth:0 }}>
                            <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--fs-base)',
                              color:'var(--text-heading)' }}>{i.t}</div>
                            <div style={{ display:'flex', gap:'var(--space-3)', marginTop:4, fontSize:'var(--fs-xs)', color:'var(--text-muted)' }}>
                              <span>{i.y}</span><span>·</span><span>{i.kind}</span>
                            </div>
                          </div>
                          <Icon name="download-simple" size={18} style={{ color:'var(--brand-primary)' }} />
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
            <Pagination page={page} pageCount={8} onChange={setPage} />
          </div>
        </div>
      </section>
    </main>
  );
}
Object.assign(window, { PublicationsScreen });
