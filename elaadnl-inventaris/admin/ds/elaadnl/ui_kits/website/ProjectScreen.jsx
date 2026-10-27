const { Card, Tag, Badge, Icon, Button, Breadcrumb, KeyValueList, Tabs, ProgressBar, LinkArrow, StatTile } = window.__ELAAD;

function ProjectScreen({ project, onBack }) {
  const [tab, setTab] = React.useState('Aanpak');
  const title = (project && project.title) || 'Slimme Fundering';
  return (
    <main>
      <section style={{ position:'relative', background:'var(--grey-600)', minHeight:340, display:'flex', alignItems:'flex-end', overflow:'hidden' }}>
        <img src="../../assets/photography/connector-ccs-detail.jpg" alt=""
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'var(--gradient-protect-bottom)' }} />
        <div className="container" style={{ position:'relative', paddingBottom:'var(--space-10)', paddingTop:'var(--space-16)' }}>
          <Breadcrumb style={{ marginBottom:'var(--space-4)' }}
            items={[{ label:'Home', href:'#' }, { label:'Projecten', href:'#' }, { label:title }]} />
          <div style={{ display:'flex', gap:'var(--space-3)', marginBottom:'var(--space-4)' }}>
            <Badge tone="success" dot>Lopend project</Badge>
            <Badge tone="solid">Testen</Badge>
          </div>
          <h1 style={{ color:'#fff', margin:0, maxWidth:760 }}>{title}</h1>
        </div>
        <div style={{ position:'absolute', left:0, right:0, bottom:0, height:5, background:'var(--gradient-brand)' }} />
      </section>

      <section style={{ padding:'var(--section-y) 0' }}>
        <div className="container" style={{ display:'grid', gridTemplateColumns:'1fr 320px', gap:'var(--space-16)', alignItems:'start' }}>
          <article>
            <p style={{ fontSize:'var(--fs-md)', lineHeight:'var(--lh-relaxed)', color:'var(--text-body)' }}>
              Laadpalen worden steeds slimmer, maar de fundering waarop ze staan verandert nauwelijks mee. In dit project
              onderzoeken we met netbeheerders en fabrikanten hoe een gestandaardiseerde “slimme fundering” de aanleg
              versnelt en het laadpunt voorbereidt op netbewust laden.
            </p>
            <Tabs items={['Aanpak','Resultaten','Publicaties']} value={tab} onChange={setTab} style={{ margin:'var(--space-8) 0 var(--space-6)' }} />
            {tab === 'Aanpak' && (
              <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-5)' }}>
                <p style={{ margin:0 }}>We werken in drie stappen: inventarisatie van bestaande funderingsvarianten,
                  laboratoriumtesten in het Elaad Testlab, en een veldproef bij twee netbeheerders.</p>
                <ProgressBar label="Projectvoortgang" value={62} showValue tone="gradient" />
              </div>
            )}
            {tab === 'Resultaten' && (
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-5)' }}>
                <StatTile label="Varianten getest" value="14" />
                <StatTile label="Aanlegtijd korter" value="31" unit="%" variant="muted" />
              </div>
            )}
            {tab === 'Publicaties' && (
              <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-3)' }}>
                {['Aansluitspecificaties Laadobjecten 3x25A–3x80A v4.0','Onepager Slimme Fundering'].map(t => (
                  <Card key={t} variant="flat" interactive as="a" href="#" padding="var(--space-4)">
                    <div style={{ display:'flex', alignItems:'center', gap:'var(--space-3)' }}>
                      <Icon name="file-text" size={18} style={{ color:'var(--brand-primary)' }} />
                      <span style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--fs-sm)', color:'var(--text-heading)' }}>{t}</span>
                    </div>
                  </Card>
                ))}
              </div>
            )}
            <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginTop:'var(--space-8)' }}>
              {['Netbeheerderskeuringen','Interoperabiliteit','Versnellen proces','Laadpaalkeuringen'].map(t => <Tag key={t}>{t}</Tag>)}
            </div>
            <Button variant="ghost" onClick={onBack} style={{ marginTop:'var(--space-8)' }}
              iconLeft={<Icon name="arrow-left" size={16} />}>Terug naar projecten</Button>
          </article>
          <aside style={{ display:'flex', flexDirection:'column', gap:'var(--space-6)', position:'sticky', top:150 }}>
            <Card variant="muted">
              <KeyValueList items={[
                { label:'Looptijd', value:'2024 – 2027' },
                { label:'Partners', value:'Liander, Stedin, Enexis' },
                { label:'Thema', value:'Interoperabiliteit' },
                { label:'Contact', value:'testlab@elaad.nl' }
              ]} />
            </Card>
            <Card variant="gradient">
              <h3 style={{ color:'#fff', fontSize:'var(--fs-lg)', margin:'0 0 var(--space-3)' }}>Testen in het Elaad Testlab?</h3>
              <p style={{ color:'rgba(255,255,255,.9)', fontSize:'var(--fs-sm)', margin:'0 0 var(--space-5)' }}>
                Laat je laadstation of HEMS toetsen op interoperabiliteit, power quality en cybersecurity.
              </p>
              <Button variant="inverse" iconRight={<Icon name="arrow-right" size={16} />}>Neem contact op</Button>
            </Card>
          </aside>
        </div>
      </section>
    </main>
  );
}
Object.assign(window, { ProjectScreen });
