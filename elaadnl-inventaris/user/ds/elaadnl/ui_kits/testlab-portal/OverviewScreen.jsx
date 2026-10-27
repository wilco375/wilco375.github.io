const { Card, StatTile, DataTable, Badge, Button, Icon, ProgressBar, Alert, Tabs, LinkArrow } = window.__ELAAD;

const SESSIONS = [
  { id:'TS-2026-118', station:'CS-01 · Alfen Eve', type:'Interoperabiliteit', p:'22 kW', thd:'3,1 %', st:'ok' },
  { id:'TS-2026-117', station:'CS-07 · ABB Terra', type:'Power Quality', p:'50 kW', thd:'4,8 %', st:'warn' },
  { id:'TS-2026-116', station:'CS-03 · Wallbox', type:'Smart Charging', p:'11 kW', thd:'2,4 %', st:'ok' },
  { id:'TS-2026-115', station:'CS-12 · Kempower', type:'Power Quality', p:'150 kW', thd:'7,2 %', st:'fail' },
  { id:'TS-2026-114', station:'CS-05 · HEMS-rig', type:'Interoperabiliteit', p:'7,4 kW', thd:'2,9 %', st:'ok' }
];
const BADGE = { ok:['success','Geslaagd'], warn:['warning','Aandacht'], fail:['danger','Afgekeurd'] };

function Sparkline({ points, color='var(--brand-primary)' }) {
  const max = Math.max(...points), min = Math.min(...points);
  const d = points.map((p,i) => `${(i/(points.length-1))*100},${34 - ((p-min)/(max-min||1))*30}`).join(' L');
  return <svg viewBox="0 0 100 36" preserveAspectRatio="none" style={{ width:'100%', height:44 }}>
    <polyline points={points.map((p,i)=>`${(i/(points.length-1))*100},${34-((p-min)/(max-min||1))*30}`).join(' ')}
      fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
  </svg>;
}

function OverviewScreen() {
  const [range, setRange] = React.useState('Week');
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-6)' }}>
      <Alert tone="warning" title="Meetreeks onvolledig" icon={<Icon name="warning" size={18} />} onDismiss={() => {}}>
        Sessie TS-2026-115 mist 3 minuten aan data tussen 14:02 en 14:05.
      </Alert>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'var(--space-5)' }}>
        <StatTile label="Sessies deze week" value="18" delta="+4 t.o.v. vorige week" deltaTone="up" icon={<Icon name="flask" size={18} />} />
        <StatTile label="Bezetting testbanken" value="76" unit="%" icon={<Icon name="gauge" size={18} />} />
        <StatTile label="Openstaande bevindingen" value="7" delta="−2 deze week" deltaTone="down" icon={<Icon name="warning-circle" size={18} />} />
        <StatTile variant="gradient" label="Piekvermogen lab" value="312" unit="kW" icon={<Icon name="lightning" size={18} />} />
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr', gap:'var(--space-6)', alignItems:'start' }}>
        <Card variant="raised">
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'var(--space-5)' }}>
            <h3 style={{ margin:0, fontSize:'var(--fs-lg)' }}>Labvermogen</h3>
            <Tabs variant="pills" items={['Dag','Week','Maand']} value={range} onChange={setRange} />
          </div>
          <Sparkline points={[120,180,150,240,210,290,260,312,270,230,250,200]} />
          <div style={{ display:'flex', justifyContent:'space-between', marginTop:'var(--space-3)',
            fontSize:'var(--fs-2xs)', color:'var(--text-subtle)', fontFamily:'var(--font-display)', letterSpacing:'.08em' }}>
            {['MA','DI','WO','DO','VR','ZA','ZO'].map(d => <span key={d}>{d}</span>)}
          </div>
        </Card>
        <Card variant="raised">
          <h3 style={{ margin:'0 0 var(--space-5)', fontSize:'var(--fs-lg)' }}>Testbanken</h3>
          <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-4)' }}>
            <ProgressBar label="AC-bank 1" value={92} showValue />
            <ProgressBar label="AC-bank 2" value={64} showValue />
            <ProgressBar label="DC-bank" value={78} showValue tone="gradient" />
            <ProgressBar label="HEMS-rig" value={31} showValue />
          </div>
        </Card>
      </div>
      <Card variant="raised" padding="0">
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'var(--space-5) var(--space-6)' }}>
          <h3 style={{ margin:0, fontSize:'var(--fs-lg)' }}>Recente testsessies</h3>
          <LinkArrow href="#">Alle sessies</LinkArrow>
        </div>
        <DataTable
          style={{ border:'none', borderRadius:0 }}
          columns={[
            { key:'id', label:'Sessie' }, { key:'station', label:'Laadstation' }, { key:'type', label:'Testtype' },
            { key:'p', label:'Vermogen', align:'right' }, { key:'thd', label:'THD', align:'right' }, { key:'st', label:'Status' }
          ]}
          rows={SESSIONS.map(s => ({ ...s,
            id:<span style={{ fontFamily:'var(--font-display)', fontWeight:600, color:'var(--brand-primary)' }}>{s.id}</span>,
            st:<Badge tone={BADGE[s.st][0]} dot>{BADGE[s.st][1]}</Badge> }))} />
      </Card>
    </div>
  );
}
Object.assign(window, { OverviewScreen });
