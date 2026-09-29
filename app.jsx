const { useState } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#00B4D8",
  "density": "comfortable",
  "showTerminalCard": true,
  "showStatusPill": true,
  "monoEverywhere": false
}/*EDITMODE-END*/;

const SECTIONS = {
  overview:    { crumbs: ['Operate', 'Overview'],    label: 'Overview' },
  projects:    { crumbs: ['Work',    'Projects'],    label: 'Projects' },
  experience:  { crumbs: ['Work',    'Experience'],  label: 'Experience' },
  stack:       { crumbs: ['Work',    'Stack'],       label: 'Stack' },
  publication: { crumbs: ['Research','Publication'], label: 'Publication' },
  terminal:    { crumbs: ['System',  'Terminal'],    label: 'Terminal' },
  contact:     { crumbs: ['System',  'Contact'],     label: 'Contact' },
};

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [booted, setBooted] = useState(() => (() => { try { return localStorage.getItem('eissa_booted') === '1'; } catch (e) { return false; } })());
  React.useEffect(() => { if (booted) { try { localStorage.setItem('eissa_booted', '1'); } catch (e) {} } }, [booted]);

  // Read hash for routing
  const hashSection = () => {
    const h = (window.location.hash || '').replace('#','');
    return SECTIONS[h] ? h : 'overview';
  };
  const [section, setSection] = useState(hashSection);

  React.useEffect(() => {
    const onHash = () => setSection(hashSection());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (id) => {
    setSection(id);
    if (window.location.hash !== '#' + id) {
      history.replaceState(null, '', '#' + id);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Apply accent color
  React.useEffect(() => {
    document.documentElement.style.setProperty('--brand-teal', tweaks.accent);
    if (tweaks.monoEverywhere) {
      document.documentElement.style.setProperty('--font-sans', 'JetBrains Mono, ui-monospace, monospace');
    } else {
      document.documentElement.style.removeProperty('--font-sans');
    }
  }, [tweaks.accent, tweaks.monoEverywhere]);

  const meta = SECTIONS[section];

  return (
    <React.Fragment>
    {!booted && <Boot onDone={() => setBooted(true)}/>}
    <div className={'app' + (tweaks.density === 'dense' ? ' dense' : '')}>
      <Sidebar active={section} onNavigate={navigate} projectCount={window.PortfolioData.projects.length}/>
      <div className="main">
        <Topbar crumbs={meta.crumbs}/>
        <div className="page">
          {section === 'overview' && (
            <React.Fragment>
              <div className="page-head">
                <div>
                  <span className="eyebrow">{meta.crumbs[0]}</span>
                  <h1>{meta.label}</h1>
                </div>
                <div className="actions">
                  <a className="btn btn-secondary btn-sm" href={window.PortfolioData.identity.cv} download><window.Icons.Download/>CV</a>
                  <button className="btn btn-primary btn-sm" onClick={() => navigate('contact')}><window.Icons.Mail/>Contact</button>
                </div>
              </div>
              <Hero onNavigate={navigate}/>
              <window.Ticker/>
              <Featured onNavigate={navigate}/>
              {tweaks.showTerminalCard && (
                <div className="card" style={{padding:'18px 20px', display:'grid', gridTemplateColumns:'auto 1fr auto', gap:16, alignItems:'center'}}>
                  <div style={{width:40, height:40, borderRadius:8, background:'var(--bg-2)', border:'1px solid var(--border-2)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--brand-teal-hi)'}}>
                    <window.Icons.Terminal/>
                  </div>
                  <div>
                    <div style={{fontSize:14, fontWeight:600, color:'var(--fg-1)'}}>There's a terminal in this portfolio</div>
                    <div style={{fontSize:12, color:'var(--fg-2)'}}>Type <span className="mono" style={{color:'var(--brand-teal-hi)'}}>help</span>, <span className="mono" style={{color:'var(--brand-teal-hi)'}}>projects</span>, or <span className="mono" style={{color:'var(--brand-teal-hi)'}}>sudo hire-me</span> to explore.</div>
                  </div>
                  <button className="btn btn-secondary btn-sm" onClick={() => navigate('terminal')}>Open <window.Icons.ChevronR/></button>
                </div>
              )}
            </React.Fragment>
          )}

          {section !== 'overview' && (
            <React.Fragment>
              <div className="page-head">
                <div>
                  <span className="eyebrow">{meta.crumbs[0]}</span>
                  <h1>{meta.label}</h1>
                </div>
                <div className="actions">
                  <button className="btn btn-ghost btn-sm" onClick={() => navigate('overview')}><window.Icons.Grid/>Overview</button>
                  {section !== 'contact' && <button className="btn btn-primary btn-sm" onClick={() => navigate('contact')}><window.Icons.Mail/>Contact</button>}
                </div>
              </div>
              {section === 'projects'    && <Projects/>}
              {section === 'experience'  && <Experience/>}
              {section === 'stack'       && <Stack/>}
              {section === 'publication' && <Publication/>}
              {section === 'terminal'    && <Terminal/>}
              {section === 'contact'     && <Contact/>}
            </React.Fragment>
          )}
        </div>
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Accent">
          <TweakColor t={tweaks} setTweak={setTweak} k="accent" label="Primary"
            options={['#00B4D8','#2EE6A6','#22D3EE','#A78BFA','#F5B544']}/>
        </TweakSection>
        <TweakSection title="Density">
          <TweakRadio t={tweaks} setTweak={setTweak} k="density" label="Cards"
            options={[{value:'comfortable',label:'Comfortable'},{value:'dense',label:'Dense'}]}/>
        </TweakSection>
        <TweakSection title="Surfaces">
          <TweakToggle t={tweaks} setTweak={setTweak} k="showTerminalCard" label="Hint terminal on overview"/>
          <TweakToggle t={tweaks} setTweak={setTweak} k="showStatusPill"   label="'Open to roles' pill"/>
          <TweakToggle t={tweaks} setTweak={setTweak} k="monoEverywhere"   label="Mono everywhere"/>
        </TweakSection>
      </TweaksPanel>

      <style>{`
        ${tweaks.showStatusPill ? '' : '.topbar .status-pill, .hero-id .status-pill, .contact-row + * .status-pill, .section-card .status-pill { display: none !important; }'}
      `}</style>
    </div>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
