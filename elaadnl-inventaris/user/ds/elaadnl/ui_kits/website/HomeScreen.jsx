const { Button, Card, Badge, Tag, Icon, LinkArrow, StatTile } = window.__ELAAD;

const NEWS = [
  { date:'31 juli 2026', title:'Nieuwe aansluitspecificaties 4.0 bereiden laadpalen voor op slimme fundering', topic:'Netbeheerderskeuringen', photo:'connector-ccs-detail.jpg' },
  { date:'20 juli 2026', title:'ElaadNL test implementatie OpenADR voor dynamisch netbewust laden', topic:'Smart Charging', photo:'engineer-measurement-bench.jpg' },
  { date:'13 juli 2026', title:'Hoe veilig is de digitale infrastructuur van een heavy duty laadplein?', topic:'Cybersecurity', photo:'truck-dashboard-detail.jpg' },
  { date:'13 juli 2026', title:'Effect statisch netbewust laden op netcongestie Utrecht onderzocht', topic:'Smart Charging', photo:'car-charging-detail.jpg' }
];
const PROJECTS = [
  { title:'Energie Management Systemen (EMS) op de bouwplaats', tags:['Logistiek','Versnellen proces'], photo:'testlab-hall-wide.jpg' },
  { title:'BuildZero', tags:['Logistiek'], photo:'truck-dashboard-detail.jpg' },
  { title:'Interoperabiliteit in Home Energy Management', tags:['Smart Charging','Interoperabiliteit'], photo:'car-charging-detail.jpg' },
  { title:'Slimme Fundering', tags:['Netbeheerderskeuringen','Interoperabiliteit'], photo:'connector-ccs-detail.jpg' }
];
const EVENTS = [
  { kind:'Live event', when:'dinsdag 8 september 2026 · 12:00 – 17:30 uur', title:'Midterm Event Charging Energy Hubs', sub:'Charging Energy Hubs' },
  { kind:'Live event', when:'woensdag 25 – donderdag 26 november 2026', title:'Test evenement Residentiële Flexibiliteit: derde editie', sub:'Twee hele dagen in het Elaad Testlab' },
  { kind:'Live event', when:'najaar 2026 · 9.00 – 17.00 uur', title:'Train de trainer ‘laadpunten voor EV’: 2e editie', sub:'Vindt plaats in najaar 2026' }
];

const PHOTO = '../../assets/photography/';

function MediaSlot({ height=200, label, src, radius='var(--radius-lg) var(--radius-lg) 0 0' }) {
  if (src) return <img src={PHOTO + src} alt={label || ''} style={{ height, width:'100%',
    objectFit:'cover', borderRadius:radius, display:'block', flex:'0 0 auto' }} />;
  return (
    <div style={{ height, background:'var(--grey-100)', borderRadius:radius, display:'flex',
      alignItems:'center', justifyContent:'center', color:'var(--grey-300)', flex:'0 0 auto' }}>
      <div style={{ textAlign:'center' }}>
        <Icon name="image" size={26} style={{ margin:'0 auto' }} />
        <div style={{ fontSize:11, marginTop:6, fontFamily:'var(--font-display)', letterSpacing:'.1em', textTransform:'uppercase' }}>{label || 'Beeldbank'}</div>
      </div>
    </div>
  );
}

function SectionHead({ title, linkLabel }) {
  return (
    <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:'var(--space-6)', marginBottom:'var(--space-6)' }}>
      <h2 style={{ margin:0 }}>{title}</h2>
      <LinkArrow href="#">{linkLabel}</LinkArrow>
    </div>
  );
}

function HomeScreen({ onOpenProject }) {
  return (
    <main>
      {/* HERO — full-bleed photo field with blue protection gradient, left-aligned Exo 2 */}
      <section style={{ position:'relative', background:'var(--blue-700)', minHeight:520, display:'flex', alignItems:'center', overflow:'hidden' }}>
        <img src={PHOTO + 'testlab-hall-wide.jpg'} alt="Elaad Testlab in Arnhem"
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'var(--gradient-protect)' }} />
        <div className="container" style={{ position:'relative', paddingTop:'var(--space-16)', paddingBottom:'var(--space-16)' }}>
          <h1 style={{ color:'#fff', maxWidth:820, fontSize:'clamp(34px,4.4vw,60px)', lineHeight:1.06, margin:0 }}>
            ElaadNL test en onderzoekt het slim en duurzaam opladen van elektrische voertuigen
          </h1>
          <div style={{ marginTop:'var(--space-8)', display:'flex', gap:'var(--space-4)', flexWrap:'wrap' }}>
            <Button variant="accent" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Meer informatie over het testlab</Button>
            <Button variant="inverse" size="lg">Bekijk onze publicaties</Button>
          </div>
        </div>
        <div style={{ position:'absolute', left:0, right:0, bottom:0, height:6, background:'var(--gradient-brand)' }} />
      </section>

      {/* STAT STRIP */}
      <section style={{ background:'var(--surface-muted)', padding:'var(--space-10) 0' }}>
        <div className="container" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'var(--space-6)' }}>
          <StatTile label="Laadpunten getest" value="1.284" delta="+12% t.o.v. 2025" deltaTone="up" icon={<Icon name="plug" size={20} />} />
          <StatTile label="Publicaties" value="167" icon={<Icon name="file-text" size={20} />} />
          <StatTile label="Lopende projecten" value="38" icon={<Icon name="pulse" size={20} />} />
          <StatTile variant="gradient" label="Netbeheerders" value="6" icon={<Icon name="buildings" size={20} />} />
        </div>
      </section>

      {/* NEWS */}
      <section style={{ padding:'var(--section-y) 0' }}>
        <div className="container">
          <SectionHead title="Nieuws" linkLabel="Alle berichten" />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'var(--space-6)' }}>
            {NEWS.map(n => (
              <Card key={n.title} variant="raised" interactive as="a" href="#" padding="0">
                <MediaSlot height={150} src={n.photo} label={n.title} />
                <div style={{ padding:'var(--space-5)' }}>
                  <span className="eyebrow">{n.date}</span>
                  <h3 style={{ fontSize:'var(--fs-md)', margin:'var(--space-2) 0 var(--space-4)', lineHeight:1.3 }}>{n.title}</h3>
                  <Tag>{n.topic}</Tag>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS on blue */}
      <section style={{ background:'var(--surface-brand)', padding:'var(--section-y) 0' }}>
        <div className="container">
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:'var(--space-6)' }}>
            <h2 style={{ margin:0, color:'#fff' }}>In the spotlights</h2>
            <LinkArrow tone="inverse" href="#">Alle projecten</LinkArrow>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'var(--space-6)' }}>
            {PROJECTS.map(p => (
              <Card key={p.title} variant="raised" interactive padding="0" onClick={() => onOpenProject && onOpenProject(p)}>
                <MediaSlot height={130} src={p.photo} label={p.title} />
                <div style={{ padding:'var(--space-5)', display:'flex', flexDirection:'column', gap:'var(--space-3)' }}>
                  <Badge tone="success" dot>Lopend project</Badge>
                  <h3 style={{ fontSize:'var(--fs-md)', margin:0, lineHeight:1.3 }}>{p.title}</h3>
                  <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>{p.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
                  <LinkArrow href="#" style={{ marginTop:'auto' }}>Bekijk project</LinkArrow>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section style={{ padding:'var(--section-y) 0' }}>
        <div className="container">
          <SectionHead title="Evenementen" linkLabel="Alle evenementen" />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'var(--space-6)' }}>
            {EVENTS.map(e => (
              <Card key={e.title} variant="flat" interactive as="a" href="#">
                <div style={{ display:'flex', alignItems:'center', gap:'var(--space-3)' }}>
                  <Badge tone="brand">{e.kind}</Badge>
                  <span style={{ fontSize:'var(--fs-xs)', color:'var(--text-muted)' }}>{e.when}</span>
                </div>
                <h3 style={{ fontSize:'var(--fs-lg)', margin:'var(--space-3) 0 var(--space-2)' }}>{e.title}</h3>
                <p style={{ margin:0, fontSize:'var(--fs-sm)', color:'var(--text-muted)' }}>{e.sub}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER — gradient CTA */}
      <section style={{ padding:'0 0 var(--section-y)' }}>
        <div className="container">
          <div style={{ background:'var(--gradient-brand)', borderRadius:'var(--radius-xl)',
            padding:'var(--space-12)', display:'flex', alignItems:'center', justifyContent:'space-between',
            gap:'var(--space-8)', flexWrap:'wrap' }}>
            <h2 style={{ color:'#fff', margin:0, maxWidth:620 }}>Schrijf je in en blijf op de hoogte van al ons nieuws</h2>
            <Button variant="inverse" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Nieuwsbrief</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { HomeScreen, MediaSlot, SectionHead });
