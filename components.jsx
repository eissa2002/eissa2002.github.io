/* Portfolio components — Sidebar, Topbar, Hero, Featured, Projects, Experience, Stack, Publication, Contact, Vizzes */

const D = window.PortfolioData;
const I = () => window.Icons;

/* ------- Sidebar ------- */
const Sidebar = ({ active, onNavigate, projectCount }) => {
  const Icons = window.Icons;
  const items = [
  { id: 'overview', label: 'Overview', icon: 'Grid' },
  { id: 'projects', label: 'Projects', icon: 'Box', count: projectCount },
  { id: 'experience', label: 'Experience', icon: 'Briefcase', count: D.experience.length },
  { id: 'stack', label: 'Stack', icon: 'Cpu' },
  { id: 'publication', label: 'Publication', icon: 'Award', count: 1 },
  { id: 'terminal', label: 'Terminal', icon: 'Terminal' },
  { id: 'contact', label: 'Contact', icon: 'Mail' }];

  const initials = D.identity.name.split(' ').map((s) => s[0]).slice(0, 2).join('');
  return (
    <aside className="sidebar">
      <div className="brand">
          <div className="mark"><svg viewBox="0 0 32 32" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="7" width="14" height="3.2" rx="1" fill="#071428" /><rect x="7" y="14.4" width="10" height="3.2" rx="1" fill="#071428" /><rect x="7" y="21.8" width="14" height="3.2" rx="1" fill="#071428" /><rect x="23" y="14.4" width="3.2" height="10.6" rx="1" fill="#071428" /><circle cx="24.6" cy="9" r="1.7" fill="#071428" /></svg></div>
        <div>
          <div className="name">Eissa<span style={{ color: 'var(--brand-teal-hi)' }}>.</span>Islam</div>
          <div className="sub">AI Engineer · Portfolio</div>
        </div>
      </div>
      <div className="section">Navigate</div>
      {items.map((it) => {
        const Ic = Icons[it.icon];
        return (
          <button key={it.id}
          className={'nav-item' + (active === it.id ? ' active' : '')}
          onClick={() => onNavigate(it.id)}>
            <Ic />
            <span>{it.label}</span>
            {it.count != null && <span className="count">{it.count}</span>}
          </button>);

      })}
      <div className="foot">
        <div className="avatar">{initials}</div>
        <div>
          <div className="who">{D.identity.name}</div>
          <div className="role">Open to roles</div>
        </div>
        <span className="live-dot" title="Available"></span>
      </div>
    </aside>);

};

/* ------- Topbar ------- */
const Topbar = ({ crumbs }) => {
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const fmt = (d) => {
    const pad = (n) => String(n).padStart(2, '0');
    return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`;
  };
  return (
    <header className="topbar">
      <div className="crumbs">
        {crumbs.map((c, i) =>
        <React.Fragment key={i}>
            {i > 0 && <span className="sep">/</span>}
            <span className={i === crumbs.length - 1 ? 'current' : ''}>{c}</span>
          </React.Fragment>
        )}
      </div>
      <span className="status-pill"><span className="dot" style={{ background: '#2EE6A6' }} />Available · Open to roles</span>
      <div className="clock"><span className="dot" />{fmt(now)}</div>
    </header>);

};

/* ------- Vizzes (mini diagrams for featured projects) ------- */
const VizPipeline = () => {
  const stages = [
  { x: 30, w: 60, label: '12,847', sub: 'scraped', color: '#22D3EE', h: 54 },
  { x: 110, w: 60, label: '1,420', sub: 'matched', color: '#22D3EE', h: 38 },
  { x: 190, w: 60, label: '286', sub: 'scored 80+', color: '#2EE6A6', h: 24 },
  { x: 270, w: 60, label: '80', sub: 'tailored', color: '#2EE6A6', h: 14 }];

  return (
    <svg width="100%" height="100%" viewBox="0 0 360 110" preserveAspectRatio="none" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="jp-bar" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#22D3EE" stopOpacity="0.85" />
          <stop offset="1" stopColor="#2EE6A6" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <line x1="10" y1="82" x2="350" y2="82" stroke="#1C3558" strokeWidth="1" strokeDasharray="3 3" />
      {stages.map((s, i) =>
      <g key={i}>
          <rect x={s.x} y={82 - s.h} width={s.w} height={s.h} rx="3" fill="url(#jp-bar)"
        style={{ transformOrigin: `${s.x + s.w / 2}px 82px`, animation: `funnelGrow 900ms ${i * 120}ms cubic-bezier(0.2,0.8,0.2,1) both` }} />
          <text x={s.x + s.w / 2} y={82 - s.h - 6} fill={s.color} fontFamily="JetBrains Mono" fontWeight="600" fontSize="11" textAnchor="middle">{s.label}</text>
          <text x={s.x + s.w / 2} y={96} fill="#6F84A0" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" letterSpacing="0.5">{s.sub.toUpperCase()}</text>
        </g>
      )}
      <line x1="350" y1="14" x2="350" y2="82" stroke="#2EE6A6" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      <circle cx="350" cy="22" r="3" fill="#2EE6A6">
        <animate attributeName="r" values="3;6;3" dur="1.6s" repeatCount="indefinite" />
      </circle>
      <text x="346" y="14" fill="#2EE6A6" fontFamily="JetBrains Mono" fontSize="8" textAnchor="end" letterSpacing="0.5">LIVE</text>
    </svg>);

};

const VizGraph = () => {
  const sources = [
  { x: 28, y: 22, l: 'DRIVE' },
  { x: 28, y: 55, l: 'SLACK' },
  { x: 28, y: 88, l: 'NOTION' }];

  return (
    <svg width="100%" height="100%" viewBox="0 0 360 110" preserveAspectRatio="none" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="eb-flow" x1="0" x2="1">
          <stop offset="0" stopColor="#22D3EE" stopOpacity="0.1" />
          <stop offset="1" stopColor="#22D3EE" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="eb-core" cx="50%" cy="50%">
          <stop offset="0" stopColor="#2EE6A6" stopOpacity="0.5" />
          <stop offset="1" stopColor="#0B1F3A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="180" cy="55" r="42" fill="url(#eb-core)" />
      {sources.map((s, i) =>
      <path key={'src' + i} d={`M${s.x + 30},${s.y} Q 110,${s.y} 158,55`} stroke="url(#eb-flow)" strokeWidth="1.2" fill="none"
      strokeDasharray="3 4" style={{ animation: `dashFlow 2.4s linear ${i * 0.2}s infinite` }} />
      )}
      {[{ y: 30, l: 'RETRIEVE' }, { y: 55, l: 'RANK' }, { y: 80, l: 'ACT' }].map((o, i) =>
      <g key={'out' + i}>
          <path d={`M202,55 Q 240,55 270,${o.y}`} stroke="#2EE6A6" strokeWidth="1.2" fill="none" strokeDasharray="3 4" opacity="0.55"
        style={{ animation: `dashFlow 2.4s linear ${0.6 + i * 0.2}s infinite` }} />
          <rect x="272" y={o.y - 9} width="68" height="18" rx="4" fill="#0B1F3A" stroke="#26446E" />
          <text x="306" y={o.y + 3} fill="#A9BCD4" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" letterSpacing="0.6">{o.l}</text>
        </g>
      )}
      {sources.map((s, i) =>
      <g key={'srcN' + i}>
          <rect x={s.x} y={s.y - 8} width="30" height="16" rx="3" fill="#112A4A" stroke="#345A8A" />
          <text x={s.x + 15} y={s.y + 3} fill="#A9BCD4" fontFamily="JetBrains Mono" fontSize="7" textAnchor="middle" letterSpacing="0.6">{s.l}</text>
        </g>
      )}
      <circle cx="180" cy="55" r="22" fill="#0B1F3A" stroke="#22D3EE" strokeWidth="1.5" />
      <circle cx="180" cy="55" r="22" fill="none" stroke="#22D3EE" strokeWidth="1" opacity="0.4">
        <animate attributeName="r" values="22;30;22" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0;0.4" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <text x="180" y="52" fill="#2EE6A6" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" letterSpacing="1">ROUTER</text>
      <text x="180" y="63" fill="#22D3EE" fontFamily="JetBrains Mono" fontSize="7" textAnchor="middle" letterSpacing="0.5">BGE-m3</text>
      <text x="346" y="14" fill="#6F84A0" fontFamily="JetBrains Mono" fontSize="8" textAnchor="end" letterSpacing="0.6">7-AGENT GRAPH</text>
    </svg>);

};

const VizWave = () => {
  const inBars = Array.from({ length: 22 }, (_, i) => 5 + Math.abs(Math.sin(i * 0.55)) * 14 + (i % 5 === 0 ? 5 : 0));
  const outBars = Array.from({ length: 22 }, (_, i) => 4 + Math.abs(Math.cos(i * 0.42 + 1)) * 11 + (i % 6 === 0 ? 4 : 0));
  return (
    <svg width="100%" height="100%" viewBox="0 0 360 110" preserveAspectRatio="none" style={{ display: 'block' }}>
      {/* row 1 — student input */}
      <g>
        <circle cx="14" cy="20" r="3" fill="#22D3EE">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" repeatCount="indefinite" />
        </circle>
        <text x="22" y="23" fill="#22D3EE" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="0.6" fontWeight="600">STUDENT</text>
        <text x="74" y="23" fill="#6F84A0" fontFamily="JetBrains Mono" fontSize="8">voice in · 16 kHz</text>
        {inBars.map((h, i) =>
        <rect key={'i' + i} x={14 + i * 15.5} y={42 - h / 2} width="6" height={h} rx="1.5" fill="#22D3EE"
        style={{ animation: `wavePulse 1.2s ${i * 45}ms ease-in-out infinite alternate`, transformOrigin: `${17 + i * 15.5}px 42px` }} />
        )}
      </g>

      {/* divider */}
      <line x1="14" y1="62" x2="346" y2="62" stroke="#1C3558" strokeWidth="1" strokeDasharray="2 4" />

      {/* row 2 — robomust output */}
      <g>
        <circle cx="14" cy="74" r="3" fill="#2EE6A6">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <text x="22" y="77" fill="#2EE6A6" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="0.6" fontWeight="600">ROBOMUST</text>
        <text x="80" y="77" fill="#6F84A0" fontFamily="JetBrains Mono" fontSize="8">TTS reply · Lecture 09</text>
        {outBars.map((h, i) =>
        <rect key={'o' + i} x={14 + i * 15.5} y={94 - h / 2} width="6" height={h} rx="1.5" fill="#2EE6A6"
        style={{ animation: `wavePulse 1.2s ${600 + i * 45}ms ease-in-out infinite alternate`, transformOrigin: `${17 + i * 15.5}px 94px` }} />
        )}
      </g>
    </svg>);

};

const Viz = ({ kind }) => {
  if (kind === 'pipeline') return <VizPipeline />;
  if (kind === 'graph') return <VizGraph />;
  return <VizWave />;
};

/* ------- Status badge ------- */
const StatusBadge = ({ status, label }) => {
  const map = {
    'in-use': { c: 'b-in-use', d: '#22D3EE', t: label || 'In use' },
    'online': { c: 'b-online', d: '#2EE6A6', t: label || 'Online' },
    'idle': { c: 'b-idle', d: '#F5B544', t: label || 'Archived' },
    'offline': { c: 'b-offline', d: '#A9BCD4', t: label || 'Offline' }
  };
  const m = map[status] || map.online;
  return <span className={'badge ' + m.c}><span className="dot" style={{ background: m.d }} />{m.t}</span>;
};

/* ------- Typewriter ------- */
const Typer = ({ text, speed = 28, delay = 200 }) => {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    let cancelled = false;
    let i = 0;
    const start = setTimeout(function step() {
      if (cancelled) return;
      i++;
      setN(i);
      if (i < text.length) setTimeout(step, speed);
    }, delay);
    return () => {cancelled = true;clearTimeout(start);};
  }, [text, speed, delay]);
  return <React.Fragment>{text.slice(0, n)}{n < text.length && <span className="type-caret" />}</React.Fragment>;
};

/* ------- Marquee ticker ------- */
const Ticker = () => {
  const items = [
  { sym: 'JOBPILOT', v: '24/7 LIVE', d: '▲ 80+ CVs' },
  { sym: 'ROBOMUST', v: 'IN SESSION', d: 'MUST campus' },
  { sym: 'BRAIN', v: 'ARCHITECTED', d: 'multi-agent' },
  { sym: 'IEEE', v: '92%', d: 'gait analysis' },
  { sym: 'STACK', v: '40+ TOOLS', d: '9 domains' },
  { sym: 'YOLOv8', v: 'EDGE', d: 'sorting stations' },
  { sym: 'RAG', v: 'BGE-m3', d: 'qdrant + chroma' },
  { sym: 'UPTIME', v: '99.9%', d: 'oracle ARM' }];

  const row =
  <React.Fragment>
      {items.map((x, i) =>
    <span key={i} className="marquee-item">
          <span className="sym">● {x.sym}</span>
          <span className="v">{x.v}</span>
          <span className="delta-up">{x.d}</span>
        </span>
    )}
    </React.Fragment>;

  return (
    <div className="marquee">
      <div className="marquee-track">{row}{row}</div>
    </div>);

};

/* ------- Hero / Overview ------- */
const Hero = ({ onNavigate }) => {
  const Icons = window.Icons;
  const id = D.identity;
  return (
    <div className="hero-grid">
      <div className="card hero-id">
        <div className="grid-bg" />
        <div>
          <div className="role">Operator · {id.role}</div>
          <div className="nameline">
            <h1>Eissa <span className="accent">Islam</span></h1>
            <span className="status-pill"><span className="dot" style={{ background: '#2EE6A6' }} />online</span>
          </div>
        </div>
        <div className="summary"><Typer text={id.summary} delay={420} /></div>
        <div className="meta">
          <span className="kv"><Icons.MapPin /><span className="v">{id.location}</span></span>
          <span className="kv"><Icons.Mail /><span className="v">{id.email}</span></span>
          <span className="kv"><Icons.Github /><span className="v">eissa2002</span></span>
          <span className="kv"><Icons.FileText /><span className="v">B.Sc. AI · 3.41 GPA</span></span>
        </div>
        <div className="actions-row">
          <button className="btn btn-primary" onClick={() => onNavigate('projects')}><Icons.Box />View projects</button>
          <a className="btn btn-secondary" href={id.cv} download><Icons.Download />Download CV</a>
          <button className="btn btn-ghost" onClick={() => onNavigate('terminal')}><Icons.Terminal />Open terminal</button>
        </div>
      </div>

      <div className="kpi-stack">
        {D.kpis.map((k, i) =>
        <Kpi key={i} kpi={k} idx={i} />
        )}
      </div>
    </div>);

};

const useCountUp = (target, dur = 1200) => {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    const m = String(target).match(/^(\d+)(.*)$/);
    if (!m) {return;}
    const n = parseInt(m[1], 10);
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(n * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, dur]);
  const m = String(target).match(/^(\d+)(.*)$/);
  return m ? v + m[2] : target;
};

const Kpi = ({ kpi, idx }) => {
  const heights = [
  [4, 7, 5, 9, 8, 11, 9, 13, 12, 15, 14, 18],
  [6, 8, 5, 9, 7, 10, 9, 12, 10, 11, 13, 15],
  [3, 6, 9, 12, 8, 14, 11, 16, 13, 18, 15, 20],
  [10, 8, 11, 9, 12, 10, 13, 11, 14, 12, 15, 13]][
  idx % 4];
  const display = useCountUp(kpi.value, 1100 + idx * 120);
  return (
    <div className="card tile">
      <div className="eyebrow">{kpi.label}</div>
      <div className="metric num">{display}</div>
      <div className="spark live">
        {heights.map((h, i) => <span key={i} style={{ height: h + 'px', opacity: 0.4 + i * 0.05 }} />)}
      </div>
      <div className="sub">{kpi.sub}</div>
    </div>);

};

/* ------- Featured ------- */
const Featured = ({ onNavigate }) => {
  return (
    <div className="card section-card">
      <div className="card-head">
        <div>
          <div className="eyebrow">Featured</div>
          <h2 style={{ marginTop: 2 }}>Production systems</h2>
        </div>
        <span className="spacer" />
        <span className="section-meta">3 / {D.projects.length} surfaced</span>
        <button className="btn btn-ghost btn-sm" onClick={() => onNavigate('projects')}>See all <window.Icons.ChevronR /></button>
      </div>
      <div className="card-body">
        <div className="feat-grid">
          {D.featured.map((p) =>
          <div key={p.id} className="card feat" onClick={() => onNavigate('projects')}>
              <div className="feat-viz"><Viz kind={p.viz} /></div>
              <div className="feat-meta">
                <span className="id">{p.id}</span>
                <span className="status"><StatusBadge status={p.status} label={p.statusLabel} /></span>
              </div>
              <div className="feat-body">
                <h3>{p.name}</h3>
                <div className="desc">{p.desc}</div>
              </div>
              <div className="feat-foot">
                {p.stack.slice(0, 5).map((s) => <span key={s} className="chip">{s}</span>)}
                {p.stack.length > 5 && <span className="chip muted">+{p.stack.length - 5}</span>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

};

/* ------- Projects (filterable table) ------- */
const Projects = () => {
  const [filter, setFilter] = React.useState('all');
  const tagsAll = ['all', ...Array.from(new Set(D.projects.flatMap((p) => p.tags)))];
  const filtered = filter === 'all' ? D.projects : D.projects.filter((p) => p.tags.includes(filter));
  const counts = tagsAll.reduce((acc, t) => {
    acc[t] = t === 'all' ? D.projects.length : D.projects.filter((p) => p.tags.includes(t)).length;
    return acc;
  }, {});
  return (
    <div className="card section-card">
      <div className="card-head">
        <div>
          <div className="eyebrow">Project log</div>
          <h2 style={{ marginTop: 2 }}>All projects · {D.projects.length}</h2>
        </div>
        <span className="spacer" />
        <span className="section-meta">Filter by tag</span>
      </div>
      <div className="filter-bar">
        {tagsAll.map((t) =>
        <button key={t} className={'tab' + (filter === t ? ' active' : '')} onClick={() => setFilter(t)}>
            {t === 'all' ? 'All' : t}
            <span className="count">{counts[t]}</span>
          </button>
        )}
      </div>
      <div className="card-body flush">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: '90px' }}>ID</th>
              <th>Project</th>
              <th>Tags</th>
              <th>Stack</th>
              <th style={{ width: '90px' }}>Role</th>
              <th style={{ width: '70px' }}>Year</th>
              <th style={{ width: '110px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) =>
            <tr key={p.id}>
                <td className="mono muted">{p.id}</td>
                <td><span style={{ fontWeight: 600 }}>{p.name}</span></td>
                <td>
                  <span style={{ display: 'inline-flex', gap: 4, flexWrap: 'wrap' }}>
                    {p.tags.map((t) => <span key={t} className="chip teal">{t}</span>)}
                  </span>
                </td>
                <td className="muted mono" style={{ fontSize: 11 }}>{p.stack}</td>
                <td className="muted">{p.role}</td>
                <td className="num mono">{p.year}</td>
                <td><StatusBadge status={p.status} /></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>);

};

/* ------- Experience timeline ------- */
const fmtSpan = (e) => {
  const fmt = (s) => {
    if (s === 'Present') return 'Present';
    const [y, m] = s.split('-');
    const mm = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][parseInt(m, 10) - 1];
    return `${mm} ${y}`;
  };
  return `${fmt(e.from)} → ${fmt(e.to)}`;
};

const Experience = () =>
<div className="card section-card">
    <div className="card-head">
      <div>
        <div className="eyebrow">Log</div>
        <h2 style={{ marginTop: 2 }}>Experience timeline</h2>
      </div>
      <span className="spacer" />
      <span className="section-meta">{D.experience.length} entries · 3y span</span>
    </div>
    <div className="card-body flush tl">
      {D.experience.map((e, i) =>
    <div key={i} className="tl-row">
          <div className="tl-time">
            <div className={e.current ? 'now' : ''}>{fmtSpan(e)}</div>
            {e.current && <div style={{ marginTop: 4, fontSize: 10, color: 'var(--success)' }}>● active</div>}
          </div>
          <div className="tl-tick">
            <span className={'d' + (e.current ? ' now' : '')} />
            <span className="l" />
          </div>
          <div className="tl-body">
            <h3>{e.role}</h3>
            <div className="org">{e.org}<span className="loc">· {e.loc}</span></div>
            <ul>
              {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        </div>
    )}
      <div className="tl-row">
        <div className="tl-time"><div>{D.education.span}</div></div>
        <div className="tl-tick"><span className="d" style={{ background: 'var(--brand-teal-lo)', boxShadow: '0 0 0 3px rgba(8,145,178,0.22)' }} /><span className="l" /></div>
        <div className="tl-body">
          <h3>{D.education.degree}</h3>
          <div className="org">{D.education.org}<span className="loc">· {D.education.loc} · GPA {D.education.gpa}</span></div>
        </div>
      </div>
    </div>
  </div>;


/* ------- Stack matrix ------- */
const Stack = () =>
<div>
    <div className="stack-grid">
      {D.stack.map((g) =>
    <div key={g.group} className="card stack-card">
          <h3>{g.group}<span className="eyebrow">{g.items.length}</span></h3>
          <div className="chips">
            {g.items.map((it) => <span key={it} className="chip">{it}</span>)}
          </div>
        </div>
    )}
    </div>
  </div>;


/* ------- Publication ------- */
const Publication = () => {
  const Icons = window.Icons;
  const p = D.publication;
  return (
    <div className="card section-card">
      <div className="card-head">
        <div>
          <div className="eyebrow">Research</div>
          <h2 style={{ marginTop: 2 }}>Publication</h2>
        </div>
        <span className="spacer" />
        <span className="section-meta">peer-reviewed · IEEE Xplore</span>
      </div>
      <div className="pub">
        <div className="stamp">
          <div className="y">{p.year}</div>
          <div className="l">IEEE</div>
        </div>
        <div>
          <h3>{p.title}</h3>
          <div className="venue">{p.venue} · International Telecommunications Conference (Egypt)</div>
          <div className="desc">{p.desc}</div>
          <div className="pub-actions">
            <a className="btn btn-secondary btn-sm" href={p.url} target="_blank" rel="noreferrer"><Icons.ExternalLink />View on IEEE Xplore</a>
            <span className="chip green">92% validation accuracy</span>
            <span className="chip">Mediapipe · ML ensemble</span>
          </div>
        </div>
      </div>
    </div>);

};

/* ------- Contact form (Formspree) ------- */
const FORMSPREE = 'https://formspree.io/f/xrejoojk';
const ContactForm = ({ defaultMessage = '' }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState(defaultMessage);
  const [state, setState] = React.useState('idle'); // idle | sending | sent | error
  const [err, setErr] = React.useState('');
  React.useEffect(() => {setMessage(defaultMessage);}, [defaultMessage]);
  const submit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {setErr('All fields required');setState('error');return;}
    setState('sending');setErr('');
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, _subject: 'Portfolio inquiry — ' + name })
      });
      if (res.ok) {setState('sent');setName('');setEmail('');setMessage('');} else
      {const d = await res.json().catch(() => ({}));setErr(d.errors && d.errors[0] && d.errors[0].message || 'Something went wrong');setState('error');}
    } catch (ex) {setErr('Network error — try again');setState('error');}
  };
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="cf-row">
        <input className="cf-input" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} disabled={state === 'sending'} />
        <input className="cf-input" type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={state === 'sending'} />
      </div>
      <textarea className="cf-input cf-textarea" placeholder="What are you working on?" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} disabled={state === 'sending'} />
      <div className="cf-foot">
        <span className={'cf-status ' + state}>
          {state === 'idle' && '↳ delivered straight to my inbox'}
          {state === 'sending' && '… transmitting'}
          {state === 'sent' && '✓ message received — I\'ll reply within 24h'}
          {state === 'error' && '✗ ' + (err || 'failed')}
        </span>
        <button className="btn btn-primary" type="submit" disabled={state === 'sending' || state === 'sent'}>
          {state === 'sending' ? 'Sending…' : state === 'sent' ? 'Sent' : 'Send message'}
        </button>
      </div>
    </form>);

};

/* ------- Contact ------- */
const Contact = () => {
  const Icons = window.Icons;
  const id = D.identity;
  const rows = [
  { ic: 'Mail', lbl: 'Primary email', val: id.email, href: 'mailto:' + id.email },
  { ic: 'Linkedin', lbl: 'LinkedIn', val: 'eissa-islam-775291200', href: id.linkedin },
  { ic: 'Github', lbl: 'GitHub', val: 'github.com/eissa2002', href: id.github },
  { ic: 'Phone', lbl: 'Direct', val: id.phone, href: 'tel:' + id.phone.replace(/\s/g, '') },
  { ic: 'Award', lbl: 'IEEE Xplore', val: 'ITC-Egypt 2024', href: D.publication.url },
  { ic: 'Download', lbl: 'CV / Résumé', val: 'Eissa_Islam_CV.pdf', href: id.cv, download: true }];

  return (
    <div className="card section-card">
      <div className="card-head">
        <div>
          <div className="eyebrow">Channel</div>
          <h2 style={{ marginTop: 2 }}>Open channels</h2>
        </div>
        <span className="spacer" />
        <span className="status-pill" style={{ width: "90px" }}><span className="dot" style={{ background: '#2EE6A6' }} />{"Reply < 24h"}</span>
      </div>
      <div className="card-body">
        <ContactForm />
        <div className="contact-grid" style={{ marginTop: 18 }}>
          {rows.map((r) => {
            const Ic = Icons[r.ic];
            return (
              <a key={r.lbl} className="contact-row" href={r.href} {...r.download ? { download: true } : { target: '_blank', rel: 'noreferrer' }}>
                <div className="ic"><Ic /></div>
                <div>
                  <div className="lbl">{r.lbl}</div>
                  <div className="val">{r.val}</div>
                </div>
                <div className="arr"><Icons.ArrowUpRight /></div>
              </a>);

          })}
        </div>
      </div>
    </div>);

};

Object.assign(window, { Sidebar, Topbar, Hero, Featured, Projects, Experience, Stack, Publication, Contact, ContactForm, StatusBadge, Viz, Typer, Ticker, FORMSPREE });