const { Card, Button, Icon, Badge, Dialog, FormField, Input, Select, Textarea, Checkbox, Switch, KeyValueList, DataTable, Toast, Tag, Radio } = window.__ELAAD;

function SessionScreen() {
  const [open, setOpen] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const [live, setLive] = React.useState(true);
  const [mode, setMode] = React.useState('ac');
  React.useEffect(() => { if (toast) { const t = setTimeout(() => setToast(false), 4000); return () => clearTimeout(t); } }, [toast]);
  return (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 340px', gap:'var(--space-6)', alignItems:'start' }}>
      <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-6)' }}>
        <Card variant="raised">
          <div style={{ display:'flex', alignItems:'center', gap:'var(--space-4)', marginBottom:'var(--space-6)' }}>
            <h3 style={{ margin:0, fontSize:'var(--fs-lg)', flex:1 }}>Nieuwe testsessie</h3>
            <Switch checked={live} onChange={e => setLive(e.target.checked)} label="Live meetwaarden" />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-5)' }}>
            <FormField label="Laadstation" required>
              <Select placeholder="Selecteer station" options={['CS-01 · Alfen Eve','CS-03 · Wallbox','CS-07 · ABB Terra','CS-12 · Kempower']} />
            </FormField>
            <FormField label="Testtype" required>
              <Select placeholder="Selecteer testtype" options={['Interoperabiliteit','Power Quality','Smart Charging','Cybersecurity']} />
            </FormField>
            <FormField label="Sessiecode" hint="Automatisch gegenereerd, aanpasbaar">
              <Input defaultValue="TS-2026-119" />
            </FormField>
            <FormField label="Normkader">
              <Select placeholder="Selecteer norm" options={['EV-211 (IEC 62443)','EV-311 (IEC 62443)','ISO 15118-2','OpenADR 3.0']} />
            </FormField>
            <FormField label="Laadmodus" style={{ gridColumn:'span 2' }}>
              <div style={{ display:'flex', gap:'var(--space-6)' }}>
                <Radio name="mode" checked={mode === 'ac'} onChange={() => setMode('ac')} label="AC laden (max 22 kW)" />
                <Radio name="mode" checked={mode === 'dc'} onChange={() => setMode('dc')} label="DC snelladen (max 350 kW)" />
                <Radio name="mode" checked={mode === 'v2g'} onChange={() => setMode('v2g')} label="Bidirectioneel (V2G)" />
              </div>
            </FormField>
            <FormField label="Opmerkingen" style={{ gridColumn:'span 2' }}>
              <Textarea rows={3} placeholder="Bijzonderheden over de opstelling…" />
            </FormField>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:'var(--space-5)', marginTop:'var(--space-6)',
            paddingTop:'var(--space-5)', borderTop:'1px solid var(--border-subtle)' }}>
            <Checkbox checked label="Meetgegevens automatisch archiveren" />
            <div style={{ marginLeft:'auto', display:'flex', gap:'var(--space-3)' }}>
              <Button variant="ghost">Concept opslaan</Button>
              <Button onClick={() => setOpen(true)} iconRight={<Icon name="arrow-right" size={16} />}>Sessie starten</Button>
            </div>
          </div>
        </Card>
        <Card variant="raised" padding="0">
          <div style={{ padding:'var(--space-5) var(--space-6)', display:'flex', alignItems:'center', gap:'var(--space-3)' }}>
            <h3 style={{ margin:0, fontSize:'var(--fs-lg)', flex:1 }}>Meetkanalen</h3>
            <Badge tone={live ? 'success' : 'neutral'} dot>{live ? 'Live' : 'Gepauzeerd'}</Badge>
          </div>
          <DataTable dense style={{ border:'none', borderRadius:0 }}
            columns={[{ key:'k', label:'Kanaal' }, { key:'v', label:'Waarde', align:'right' },
              { key:'n', label:'Norm', align:'right' }, { key:'s', label:'Status' }]}
            rows={[
              { k:'Spanning L1', v:'230,4 V', n:'207–253 V', s:<Badge tone="success">Binnen</Badge> },
              { k:'Stroom L1', v:'31,8 A', n:'≤ 32 A', s:<Badge tone="warning">Grens</Badge> },
              { k:'THD spanning', v:'3,1 %', n:'≤ 8 %', s:<Badge tone="success">Binnen</Badge> },
              { k:'Flikker Pst', v:'0,62', n:'≤ 1,0', s:<Badge tone="success">Binnen</Badge> },
              { k:'Cos φ', v:'0,98', n:'≥ 0,95', s:<Badge tone="success">Binnen</Badge> }
            ]} />
        </Card>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-5)', position:'sticky', top:'var(--space-8)' }}>
        <Card variant="muted">
          <KeyValueList items={[
            { label:'Testbank', value:'AC-bank 2' },
            { label:'Operator', value:'M. de Vries' },
            { label:'Gestart', value:'—' },
            { label:'Verwachte duur', value:'3 u 20 min' }
          ]} />
        </Card>
        <Card variant="raised">
          <h4 style={{ margin:'0 0 var(--space-4)', fontSize:'var(--fs-base)' }}>Checklist vooraf</h4>
          <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-3)' }}>
            <Checkbox checked label="Aardlekbeveiliging getest" />
            <Checkbox checked label="Meetkabels gekalibreerd" />
            <Checkbox label="Firmwareversie vastgelegd" />
            <Checkbox label="Backend-koppeling gecontroleerd" />
          </div>
        </Card>
        <Card variant="raised">
          <h4 style={{ margin:'0 0 var(--space-3)', fontSize:'var(--fs-base)' }}>Labels</h4>
          <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
            {['Interoperabiliteit','V2G','SCALE','Klantopdracht'].map(t => <Tag key={t} onRemove={() => {}}>{t}</Tag>)}
          </div>
        </Card>
      </div>
      <Dialog open={open} title="Testsessie starten" description="De sessie start direct en registreert meetwaarden."
        onClose={() => setOpen(false)}
        footer={<><Button variant="ghost" onClick={() => setOpen(false)}>Annuleren</Button>
          <Button onClick={() => { setOpen(false); setToast(true); }}>Starten</Button></>}>
        <KeyValueList columns={2} items={[
          { label:'Sessie', value:'TS-2026-119' }, { label:'Station', value:'CS-01 · Alfen Eve' },
          { label:'Testtype', value:'Interoperabiliteit' }, { label:'Norm', value:'ISO 15118-2' }
        ]} />
      </Dialog>
      {toast && <div style={{ position:'fixed', right:24, bottom:24, zIndex:1000 }}>
        <Toast tone="success" title="Testsessie gestart" description="TS-2026-119 · CS-01 · Alfen Eve" onDismiss={() => setToast(false)} />
      </div>}
    </div>
  );
}
Object.assign(window, { SessionScreen });
