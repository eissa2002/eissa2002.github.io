function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const D = window.PortfolioData;
const I = () => window.Icons;
const Sidebar = ({
  active,
  onNavigate,
  projectCount
}) => {
  const Icons = window.Icons;
  const items = [{
    id: 'overview',
    label: 'Overview',
    icon: 'Grid'
  }, {
    id: 'projects',
    label: 'Projects',
    icon: 'Box',
    count: projectCount
  }, {
    id: 'experience',
    label: 'Experience',
    icon: 'Briefcase',
    count: D.experience.length
  }, {
    id: 'stack',
    label: 'Stack',
    icon: 'Cpu'
  }, {
    id: 'publication',
    label: 'Publication',
    icon: 'Award',
    count: 1
  }, {
    id: 'terminal',
    label: 'Terminal',
    icon: 'Terminal'
  }, {
    id: 'contact',
    label: 'Contact',
    icon: 'Mail'
  }];
  const initials = D.identity.name.split(' ').map(s => s[0]).slice(0, 2).join('');
  return React.createElement("aside", {
    className: "sidebar"
  }, React.createElement("div", {
    className: "brand"
  }, React.createElement("div", {
    className: "mark"
  }, React.createElement("svg", {
    viewBox: "0 0 32 32",
    width: "22",
    height: "22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    x: "7",
    y: "7",
    width: "14",
    height: "3.2",
    rx: "1",
    fill: "#071428"
  }), React.createElement("rect", {
    x: "7",
    y: "14.4",
    width: "10",
    height: "3.2",
    rx: "1",
    fill: "#071428"
  }), React.createElement("rect", {
    x: "7",
    y: "21.8",
    width: "14",
    height: "3.2",
    rx: "1",
    fill: "#071428"
  }), React.createElement("rect", {
    x: "23",
    y: "14.4",
    width: "3.2",
    height: "10.6",
    rx: "1",
    fill: "#071428"
  }), React.createElement("circle", {
    cx: "24.6",
    cy: "9",
    r: "1.7",
    fill: "#071428"
  }))), React.createElement("div", null, React.createElement("div", {
    className: "name"
  }, "Eissa", React.createElement("span", {
    style: {
      color: 'var(--brand-teal-hi)'
    }
  }, "."), "Islam"), React.createElement("div", {
    className: "sub"
  }, "AI Engineer \xB7 Portfolio"))), React.createElement("div", {
    className: "section"
  }, "Navigate"), React.createElement("div", {
    className: "nav-bar"
  }, items.map(it => {
    const Ic = Icons[it.icon];
    return React.createElement("button", {
      key: it.id,
      className: 'nav-item' + (active === it.id ? ' active' : ''),
      onClick: () => onNavigate(it.id)
    }, React.createElement(Ic, null), React.createElement("span", null, it.label), it.count != null && React.createElement("span", {
      className: "count"
    }, it.count));
  })), React.createElement("div", {
    className: "foot"
  }, React.createElement("div", {
    className: "avatar"
  }, initials), React.createElement("div", null, React.createElement("div", {
    className: "who"
  }, D.identity.name), React.createElement("div", {
    className: "role"
  }, "Open to roles")), React.createElement("span", {
    className: "live-dot",
    title: "Available"
  })));
};
const Topbar = ({
  crumbs
}) => {
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const fmt = d => {
    const pad = n => String(n).padStart(2, '0');
    return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`;
  };
  return React.createElement("header", {
    className: "topbar"
  }, React.createElement("div", {
    className: "crumbs"
  }, crumbs.map((c, i) => React.createElement(React.Fragment, {
    key: i
  }, i > 0 && React.createElement("span", {
    className: "sep"
  }, "/"), React.createElement("span", {
    className: i === crumbs.length - 1 ? 'current' : ''
  }, c)))), React.createElement("span", {
    className: "status-pill"
  }, React.createElement("span", {
    className: "dot",
    style: {
      background: '#2EE6A6'
    }
  }), "Available \xB7 Open to roles"), React.createElement("div", {
    className: "clock"
  }, React.createElement("span", {
    className: "dot"
  }), fmt(now)));
};
const VizPipeline = () => {
  const stages = [{
    x: 30,
    w: 60,
    label: '11',
    sub: 'sources',
    color: '#22D3EE',
    h: 54
  }, {
    x: 110,
    w: 60,
    label: 'dedupe',
    sub: 'fuzzy match',
    color: '#22D3EE',
    h: 38
  }, {
    x: 190,
    w: 60,
    label: 'hybrid',
    sub: 'rules+LLM',
    color: '#2EE6A6',
    h: 24
  }, {
    x: 270,
    w: 60,
    label: 'CV',
    sub: 'tailored',
    color: '#2EE6A6',
    h: 14
  }];
  return React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 360 110",
    preserveAspectRatio: "none",
    style: {
      display: 'block'
    }
  }, React.createElement("defs", null, React.createElement("linearGradient", {
    id: "jp-bar",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, React.createElement("stop", {
    offset: "0",
    stopColor: "#22D3EE",
    stopOpacity: "0.85"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#2EE6A6",
    stopOpacity: "0.55"
  }))), React.createElement("line", {
    x1: "10",
    y1: "82",
    x2: "350",
    y2: "82",
    stroke: "#1C3558",
    strokeWidth: "1",
    strokeDasharray: "3 3"
  }), stages.map((s, i) => React.createElement("g", {
    key: i
  }, React.createElement("rect", {
    x: s.x,
    y: 82 - s.h,
    width: s.w,
    height: s.h,
    rx: "3",
    fill: "url(#jp-bar)",
    style: {
      transformOrigin: `${s.x + s.w / 2}px 82px`,
      animation: `funnelGrow 900ms ${i * 120}ms cubic-bezier(0.2,0.8,0.2,1) both`
    }
  }), React.createElement("text", {
    x: s.x + s.w / 2,
    y: 82 - s.h - 6,
    fill: s.color,
    fontFamily: "JetBrains Mono",
    fontWeight: "600",
    fontSize: "11",
    textAnchor: "middle"
  }, s.label), React.createElement("text", {
    x: s.x + s.w / 2,
    y: 96,
    fill: "#6F84A0",
    fontFamily: "JetBrains Mono",
    fontSize: "8",
    textAnchor: "middle",
    letterSpacing: "0.5"
  }, s.sub.toUpperCase()))), React.createElement("line", {
    x1: "350",
    y1: "14",
    x2: "350",
    y2: "82",
    stroke: "#2EE6A6",
    strokeWidth: "1",
    strokeDasharray: "2 2",
    opacity: "0.6"
  }), React.createElement("circle", {
    cx: "350",
    cy: "22",
    r: "3",
    fill: "#2EE6A6"
  }, React.createElement("animate", {
    attributeName: "r",
    values: "3;6;3",
    dur: "1.6s",
    repeatCount: "indefinite"
  })), React.createElement("text", {
    x: "346",
    y: "14",
    fill: "#2EE6A6",
    fontFamily: "JetBrains Mono",
    fontSize: "8",
    textAnchor: "end",
    letterSpacing: "0.5"
  }, "LIVE"));
};
const VizGraph = () => {
  const sources = [{
    x: 28,
    y: 22,
    l: 'DRIVE'
  }, {
    x: 28,
    y: 55,
    l: 'SLACK'
  }, {
    x: 28,
    y: 88,
    l: 'NOTION'
  }];
  return React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 360 110",
    preserveAspectRatio: "none",
    style: {
      display: 'block'
    }
  }, React.createElement("defs", null, React.createElement("linearGradient", {
    id: "eb-flow",
    x1: "0",
    x2: "1"
  }, React.createElement("stop", {
    offset: "0",
    stopColor: "#22D3EE",
    stopOpacity: "0.1"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#22D3EE",
    stopOpacity: "0.9"
  })), React.createElement("radialGradient", {
    id: "eb-core",
    cx: "50%",
    cy: "50%"
  }, React.createElement("stop", {
    offset: "0",
    stopColor: "#2EE6A6",
    stopOpacity: "0.5"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#0B1F3A",
    stopOpacity: "0"
  }))), React.createElement("circle", {
    cx: "180",
    cy: "55",
    r: "42",
    fill: "url(#eb-core)"
  }), sources.map((s, i) => React.createElement("path", {
    key: 'src' + i,
    d: `M${s.x + 30},${s.y} Q 110,${s.y} 158,55`,
    stroke: "url(#eb-flow)",
    strokeWidth: "1.2",
    fill: "none",
    strokeDasharray: "3 4",
    style: {
      animation: `dashFlow 2.4s linear ${i * 0.2}s infinite`
    }
  })), [{
    y: 30,
    l: 'RETRIEVE'
  }, {
    y: 55,
    l: 'RANK'
  }, {
    y: 80,
    l: 'ACT'
  }].map((o, i) => React.createElement("g", {
    key: 'out' + i
  }, React.createElement("path", {
    d: `M202,55 Q 240,55 270,${o.y}`,
    stroke: "#2EE6A6",
    strokeWidth: "1.2",
    fill: "none",
    strokeDasharray: "3 4",
    opacity: "0.55",
    style: {
      animation: `dashFlow 2.4s linear ${0.6 + i * 0.2}s infinite`
    }
  }), React.createElement("rect", {
    x: "272",
    y: o.y - 9,
    width: "68",
    height: "18",
    rx: "4",
    fill: "#0B1F3A",
    stroke: "#26446E"
  }), React.createElement("text", {
    x: "306",
    y: o.y + 3,
    fill: "#A9BCD4",
    fontFamily: "JetBrains Mono",
    fontSize: "8",
    textAnchor: "middle",
    letterSpacing: "0.6"
  }, o.l))), sources.map((s, i) => React.createElement("g", {
    key: 'srcN' + i
  }, React.createElement("rect", {
    x: s.x,
    y: s.y - 8,
    width: "30",
    height: "16",
    rx: "3",
    fill: "#112A4A",
    stroke: "#345A8A"
  }), React.createElement("text", {
    x: s.x + 15,
    y: s.y + 3,
    fill: "#A9BCD4",
    fontFamily: "JetBrains Mono",
    fontSize: "7",
    textAnchor: "middle",
    letterSpacing: "0.6"
  }, s.l))), React.createElement("circle", {
    cx: "180",
    cy: "55",
    r: "22",
    fill: "#0B1F3A",
    stroke: "#22D3EE",
    strokeWidth: "1.5"
  }), React.createElement("circle", {
    cx: "180",
    cy: "55",
    r: "22",
    fill: "none",
    stroke: "#22D3EE",
    strokeWidth: "1",
    opacity: "0.4"
  }, React.createElement("animate", {
    attributeName: "r",
    values: "22;30;22",
    dur: "2.4s",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "opacity",
    values: "0.4;0;0.4",
    dur: "2.4s",
    repeatCount: "indefinite"
  })), React.createElement("text", {
    x: "180",
    y: "52",
    fill: "#2EE6A6",
    fontFamily: "JetBrains Mono",
    fontSize: "8",
    textAnchor: "middle",
    letterSpacing: "1"
  }, "ROUTER"), React.createElement("text", {
    x: "180",
    y: "63",
    fill: "#22D3EE",
    fontFamily: "JetBrains Mono",
    fontSize: "7",
    textAnchor: "middle",
    letterSpacing: "0.5"
  }, "BGE-m3"), React.createElement("text", {
    x: "346",
    y: "14",
    fill: "#6F84A0",
    fontFamily: "JetBrains Mono",
    fontSize: "8",
    textAnchor: "end",
    letterSpacing: "0.6"
  }, "7-AGENT GRAPH"));
};
const VizWave = () => {
  const inBars = Array.from({
    length: 22
  }, (_, i) => 5 + Math.abs(Math.sin(i * 0.55)) * 14 + (i % 5 === 0 ? 5 : 0));
  const outBars = Array.from({
    length: 22
  }, (_, i) => 4 + Math.abs(Math.cos(i * 0.42 + 1)) * 11 + (i % 6 === 0 ? 4 : 0));
  return React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 360 110",
    preserveAspectRatio: "none",
    style: {
      display: 'block'
    }
  }, React.createElement("g", null, React.createElement("circle", {
    cx: "14",
    cy: "20",
    r: "3",
    fill: "#22D3EE"
  }, React.createElement("animate", {
    attributeName: "opacity",
    values: "0.3;1;0.3",
    dur: "1.6s",
    repeatCount: "indefinite"
  })), React.createElement("text", {
    x: "22",
    y: "23",
    fill: "#22D3EE",
    fontFamily: "JetBrains Mono",
    fontSize: "9",
    letterSpacing: "0.6",
    fontWeight: "600"
  }, "STUDENT"), React.createElement("text", {
    x: "74",
    y: "23",
    fill: "#6F84A0",
    fontFamily: "JetBrains Mono",
    fontSize: "8"
  }, "voice in \xB7 16 kHz"), inBars.map((h, i) => React.createElement("rect", {
    key: 'i' + i,
    x: 14 + i * 15.5,
    y: 42 - h / 2,
    width: "6",
    height: h,
    rx: "1.5",
    fill: "#22D3EE",
    style: {
      animation: `wavePulse 1.2s ${i * 45}ms ease-in-out infinite alternate`,
      transformOrigin: `${17 + i * 15.5}px 42px`
    }
  }))), React.createElement("line", {
    x1: "14",
    y1: "62",
    x2: "346",
    y2: "62",
    stroke: "#1C3558",
    strokeWidth: "1",
    strokeDasharray: "2 4"
  }), React.createElement("g", null, React.createElement("circle", {
    cx: "14",
    cy: "74",
    r: "3",
    fill: "#2EE6A6"
  }, React.createElement("animate", {
    attributeName: "opacity",
    values: "0.3;1;0.3",
    dur: "1.6s",
    begin: "0.6s",
    repeatCount: "indefinite"
  })), React.createElement("text", {
    x: "22",
    y: "77",
    fill: "#2EE6A6",
    fontFamily: "JetBrains Mono",
    fontSize: "9",
    letterSpacing: "0.6",
    fontWeight: "600"
  }, "ROBOMUST"), React.createElement("text", {
    x: "80",
    y: "77",
    fill: "#6F84A0",
    fontFamily: "JetBrains Mono",
    fontSize: "8"
  }, "TTS reply \xB7 Lecture 09"), outBars.map((h, i) => React.createElement("rect", {
    key: 'o' + i,
    x: 14 + i * 15.5,
    y: 94 - h / 2,
    width: "6",
    height: h,
    rx: "1.5",
    fill: "#2EE6A6",
    style: {
      animation: `wavePulse 1.2s ${600 + i * 45}ms ease-in-out infinite alternate`,
      transformOrigin: `${17 + i * 15.5}px 94px`
    }
  }))));
};
const VizSuite = () => {
  const agents = [{
    x: 12,
    l: 'LEAD INTEL',
    s: '158K delivered',
    c: '#2EE6A6'
  }, {
    x: 98,
    l: 'INTAKE',
    s: 'whatsapp api',
    c: '#22D3EE'
  }, {
    x: 184,
    l: 'DOC INTEL',
    s: 'arabic docs',
    c: '#22D3EE'
  }, {
    x: 270,
    l: 'VOICE',
    s: 'ar/en realtime',
    c: '#F5B544'
  }];
  return React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 360 110",
    preserveAspectRatio: "none",
    style: {
      display: 'block'
    }
  }, React.createElement("text", {
    x: "346",
    y: "14",
    fill: "#6F84A0",
    fontFamily: "JetBrains Mono",
    fontSize: "8",
    textAnchor: "end",
    letterSpacing: "0.6"
  }, "4-AGENT PLATFORM"), agents.map((a, i) => React.createElement("g", {
    key: i
  }, React.createElement("rect", {
    x: a.x,
    y: "24",
    width: "78",
    height: "36",
    rx: "4",
    fill: "#0B1A2E",
    stroke: a.c,
    strokeOpacity: "0.7"
  }), React.createElement("circle", {
    cx: a.x + 9,
    cy: "36",
    r: "2.5",
    fill: a.c
  }), React.createElement("text", {
    x: a.x + 16,
    y: "39",
    fill: a.c,
    fontFamily: "JetBrains Mono",
    fontSize: "7.5",
    fontWeight: "600",
    letterSpacing: "0.4"
  }, a.l), React.createElement("text", {
    x: a.x + 8,
    y: "52",
    fill: "#6F84A0",
    fontFamily: "JetBrains Mono",
    fontSize: "6.5",
    letterSpacing: "0.3"
  }, a.s.toUpperCase()), React.createElement("line", {
    x1: a.x + 39,
    y1: "60",
    x2: a.x + 39,
    y2: "78",
    stroke: "#1C3558",
    strokeDasharray: "2 2"
  }))), React.createElement("rect", {
    x: "12",
    y: "78",
    width: "336",
    height: "18",
    rx: "3",
    fill: "#0B1A2E",
    stroke: "#1C3558"
  }), React.createElement("text", {
    x: "180",
    y: "90",
    fill: "#A9BCD4",
    fontFamily: "JetBrains Mono",
    fontSize: "7.5",
    textAnchor: "middle",
    letterSpacing: "0.6"
  }, "FASTAPI \xB7 POSTGRES \xB7 AUDIT LOG \xB7 PII REDACTION"));
};
const Viz = ({
  kind
}) => {
  if (kind === 'suite') return React.createElement(VizSuite, null);
  if (kind === 'pipeline') return React.createElement(VizPipeline, null);
  if (kind === 'graph') return React.createElement(VizGraph, null);
  return React.createElement(VizWave, null);
};
const StatusBadge = ({
  status,
  label
}) => {
  const map = {
    'in-use': {
      c: 'b-in-use',
      d: '#22D3EE',
      t: label || 'In use'
    },
    'online': {
      c: 'b-online',
      d: '#2EE6A6',
      t: label || 'Online'
    },
    'idle': {
      c: 'b-idle',
      d: '#F5B544',
      t: label || 'Archived'
    },
    'dev': {
      c: 'b-idle',
      d: '#F5B544',
      t: label || 'In build'
    },
    'offline': {
      c: 'b-offline',
      d: '#A9BCD4',
      t: label || 'Offline'
    }
  };
  const m = map[status] || map.online;
  return React.createElement("span", {
    className: 'badge ' + m.c
  }, React.createElement("span", {
    className: "dot",
    style: {
      background: m.d
    }
  }), m.t);
};
const Typer = ({
  text,
  speed = 28,
  delay = 200
}) => {
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
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [text, speed, delay]);
  return React.createElement(React.Fragment, null, text.slice(0, n), n < text.length && React.createElement("span", {
    className: "type-caret"
  }));
};
const Ticker = () => {
  const items = [{
    sym: 'JOBPILOT',
    v: 'LIVE SAAS',
    d: '11 job sources'
  }, {
    sym: 'LEAD INTEL',
    v: '158K',
    d: 'delivered to client'
  }, {
    sym: 'INTAKE',
    v: '155 TESTS',
    d: 'exactly-once replies'
  }, {
    sym: 'VOICE',
    v: 'AR / EN',
    d: 'realtime agent'
  }, {
    sym: 'ROBOMUST',
    v: 'IN SESSION',
    d: 'MUST campus'
  }, {
    sym: 'BRAIN',
    v: 'ARCHITECTED',
    d: 'multi-agent'
  }, {
    sym: 'IEEE',
    v: '92%',
    d: 'gait analysis'
  }, {
    sym: 'STACK',
    v: '40+ TOOLS',
    d: '9 domains'
  }, {
    sym: 'YOLOv8',
    v: 'EDGE',
    d: 'sorting stations'
  }, {
    sym: 'RAG',
    v: 'BGE-m3',
    d: 'qdrant + chroma'
  }, {
    sym: 'COST',
    v: '$0/MO',
    d: 'JobPilot infra'
  }];
  const row = React.createElement(React.Fragment, null, items.map((x, i) => React.createElement("span", {
    key: i,
    className: "marquee-item"
  }, React.createElement("span", {
    className: "sym"
  }, "\u25CF ", x.sym), React.createElement("span", {
    className: "v"
  }, x.v), React.createElement("span", {
    className: "delta-up"
  }, x.d))));
  return React.createElement("div", {
    className: "marquee"
  }, React.createElement("div", {
    className: "marquee-track"
  }, row, row));
};
const Hero = ({
  onNavigate
}) => {
  const Icons = window.Icons;
  const id = D.identity;
  return React.createElement("div", {
    className: "hero-grid"
  }, React.createElement("div", {
    className: "card hero-id"
  }, React.createElement("div", {
    className: "grid-bg"
  }), React.createElement("div", null, React.createElement("div", {
    className: "role"
  }, "Operator \xB7 ", id.role), React.createElement("div", {
    className: "nameline"
  }, React.createElement("h1", null, "Eissa ", React.createElement("span", {
    className: "accent"
  }, "Islam")), React.createElement("span", {
    className: "status-pill"
  }, React.createElement("span", {
    className: "dot",
    style: {
      background: '#2EE6A6'
    }
  }), "online"))), React.createElement("div", {
    className: "summary"
  }, React.createElement(Typer, {
    text: id.summary,
    delay: 420
  })), React.createElement("div", {
    className: "meta"
  }, React.createElement("span", {
    className: "kv"
  }, React.createElement(Icons.MapPin, null), React.createElement("span", {
    className: "v"
  }, id.location)), React.createElement("span", {
    className: "kv"
  }, React.createElement(Icons.Mail, null), React.createElement("span", {
    className: "v"
  }, id.email)), React.createElement("span", {
    className: "kv"
  }, React.createElement(Icons.Github, null), React.createElement("span", {
    className: "v"
  }, "eissa2002")), React.createElement("span", {
    className: "kv"
  }, React.createElement(Icons.FileText, null), React.createElement("span", {
    className: "v"
  }, "B.Sc. AI \xB7 3.41 GPA"))), React.createElement("div", {
    className: "actions-row"
  }, React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => onNavigate('projects')
  }, React.createElement(Icons.Box, null), "View projects"), React.createElement("a", {
    className: "btn btn-secondary",
    href: id.cv,
    download: true
  }, React.createElement(Icons.Download, null), "Download CV"), React.createElement("button", {
    className: "btn btn-ghost",
    onClick: () => onNavigate('terminal')
  }, React.createElement(Icons.Terminal, null), "Open terminal"))), React.createElement("div", {
    className: "kpi-stack"
  }, D.kpis.map((k, i) => React.createElement(Kpi, {
    key: i,
    kpi: k,
    idx: i
  }))));
};
const useCountUp = (target, dur = 1200) => {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    const m = String(target).match(/^(\d+)(.*)$/);
    if (!m) {
      return;
    }
    const n = parseInt(m[1], 10);
    const start = performance.now();
    let raf;
    const tick = t => {
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
const Kpi = ({
  kpi,
  idx
}) => {
  const display = useCountUp(kpi.value, 1100 + idx * 120);
  return React.createElement("div", {
    className: "card tile"
  }, React.createElement("div", {
    className: "eyebrow"
  }, kpi.label), React.createElement("div", {
    className: "metric num"
  }, display), React.createElement("div", {
    className: "sub"
  }, kpi.sub));
};
const Featured = ({
  onNavigate
}) => {
  return React.createElement("div", {
    className: "card section-card"
  }, React.createElement("div", {
    className: "card-head"
  }, React.createElement("div", null, React.createElement("div", {
    className: "eyebrow"
  }, "Featured"), React.createElement("h2", {
    style: {
      marginTop: 2
    }
  }, "Production systems")), React.createElement("span", {
    className: "spacer"
  }), React.createElement("span", {
    className: "section-meta"
  }, "3 / ", D.projects.length, " surfaced"), React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => onNavigate('projects')
  }, "See all ", React.createElement(window.Icons.ChevronR, null))), React.createElement("div", {
    className: "card-body"
  }, React.createElement("div", {
    className: "feat-grid"
  }, D.featured.map(p => React.createElement("div", {
    key: p.id,
    className: "card feat",
    onClick: () => onNavigate('projects')
  }, React.createElement("div", {
    className: "feat-viz"
  }, React.createElement(Viz, {
    kind: p.viz
  })), React.createElement("div", {
    className: "feat-meta"
  }, React.createElement("span", {
    className: "id"
  }, p.id), React.createElement("span", {
    className: "status"
  }, React.createElement(StatusBadge, {
    status: p.status,
    label: p.statusLabel
  }))), React.createElement("div", {
    className: "feat-body"
  }, React.createElement("h3", null, p.name), React.createElement("div", {
    className: "desc"
  }, p.desc)), React.createElement("div", {
    className: "feat-foot"
  }, p.stack.slice(0, 5).map(s => React.createElement("span", {
    key: s,
    className: "chip"
  }, s)), p.stack.length > 5 && React.createElement("span", {
    className: "chip muted"
  }, "+", p.stack.length - 5), p.url && React.createElement("a", {
    className: "feat-link",
    href: p.url,
    target: "_blank",
    rel: "noopener",
    onClick: e => e.stopPropagation()
  }, p.urlLabel || 'Visit', " \u2197")))))));
};
const Projects = () => {
  const [filter, setFilter] = React.useState('all');
  const tagsAll = ['all', ...Array.from(new Set(D.projects.flatMap(p => p.tags)))];
  const filtered = filter === 'all' ? D.projects : D.projects.filter(p => p.tags.includes(filter));
  const counts = tagsAll.reduce((acc, t) => {
    acc[t] = t === 'all' ? D.projects.length : D.projects.filter(p => p.tags.includes(t)).length;
    return acc;
  }, {});
  return React.createElement("div", {
    className: "card section-card"
  }, React.createElement("div", {
    className: "card-head"
  }, React.createElement("div", null, React.createElement("div", {
    className: "eyebrow"
  }, "Project log"), React.createElement("h2", {
    style: {
      marginTop: 2
    }
  }, "All projects \xB7 ", D.projects.length)), React.createElement("span", {
    className: "spacer"
  }), React.createElement("span", {
    className: "section-meta"
  }, "Filter by tag")), React.createElement("div", {
    className: "filter-bar"
  }, tagsAll.map(t => React.createElement("button", {
    key: t,
    className: 'tab' + (filter === t ? ' active' : ''),
    onClick: () => setFilter(t)
  }, t === 'all' ? 'All' : t, React.createElement("span", {
    className: "count"
  }, counts[t])))), React.createElement("div", {
    className: "card-body flush"
  }, React.createElement("table", {
    className: "tbl"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
    style: {
      width: '90px'
    }
  }, "ID"), React.createElement("th", null, "Project"), React.createElement("th", null, "Tags"), React.createElement("th", null, "Stack"), React.createElement("th", {
    style: {
      width: '90px'
    }
  }, "Role"), React.createElement("th", {
    style: {
      width: '70px'
    }
  }, "Year"), React.createElement("th", {
    style: {
      width: '110px'
    }
  }, "Status"))), React.createElement("tbody", null, filtered.map(p => React.createElement("tr", {
    key: p.id
  }, React.createElement("td", {
    className: "mono muted"
  }, p.id), React.createElement("td", null, p.url ? React.createElement("a", {
    href: p.url,
    target: "_blank",
    rel: "noopener",
    style: {
      fontWeight: 600,
      color: 'var(--brand-teal-hi)'
    }
  }, p.name, " \u2197") : React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, p.name)), React.createElement("td", null, React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, p.tags.map(t => React.createElement("span", {
    key: t,
    className: "chip teal"
  }, t)))), React.createElement("td", {
    className: "muted mono",
    style: {
      fontSize: 11
    }
  }, p.stack), React.createElement("td", {
    className: "muted"
  }, p.role), React.createElement("td", {
    className: "num mono"
  }, p.year), React.createElement("td", null, React.createElement(StatusBadge, {
    status: p.status
  }))))))));
};
const fmtSpan = e => {
  const fmt = s => {
    if (s === 'Present') return 'Present';
    const [y, m] = s.split('-');
    const mm = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][parseInt(m, 10) - 1];
    return `${mm} ${y}`;
  };
  return `${fmt(e.from)} → ${fmt(e.to)}`;
};
const Experience = () => React.createElement("div", {
  className: "card section-card"
}, React.createElement("div", {
  className: "card-head"
}, React.createElement("div", null, React.createElement("div", {
  className: "eyebrow"
}, "Log"), React.createElement("h2", {
  style: {
    marginTop: 2
  }
}, "Experience timeline")), React.createElement("span", {
  className: "spacer"
}), React.createElement("span", {
  className: "section-meta"
}, D.experience.length, " entries \xB7 3y span")), React.createElement("div", {
  className: "card-body flush tl"
}, D.experience.map((e, i) => React.createElement("div", {
  key: i,
  className: "tl-row"
}, React.createElement("div", {
  className: "tl-time"
}, React.createElement("div", {
  className: e.current ? 'now' : ''
}, fmtSpan(e)), e.current && React.createElement("div", {
  style: {
    marginTop: 4,
    fontSize: 10,
    color: 'var(--success)'
  }
}, "\u25CF active")), React.createElement("div", {
  className: "tl-tick"
}, React.createElement("span", {
  className: 'd' + (e.current ? ' now' : '')
}), React.createElement("span", {
  className: "l"
})), React.createElement("div", {
  className: "tl-body"
}, React.createElement("h3", null, e.role), React.createElement("div", {
  className: "org"
}, e.org, React.createElement("span", {
  className: "loc"
}, "\xB7 ", e.loc)), React.createElement("ul", null, e.bullets.map((b, j) => React.createElement("li", {
  key: j
}, b)))))), React.createElement("div", {
  className: "tl-row"
}, React.createElement("div", {
  className: "tl-time"
}, React.createElement("div", null, D.education.span)), React.createElement("div", {
  className: "tl-tick"
}, React.createElement("span", {
  className: "d",
  style: {
    background: 'var(--brand-teal-lo)',
    boxShadow: '0 0 0 3px rgba(8,145,178,0.22)'
  }
}), React.createElement("span", {
  className: "l"
})), React.createElement("div", {
  className: "tl-body"
}, React.createElement("h3", null, D.education.degree), React.createElement("div", {
  className: "org"
}, D.education.org, React.createElement("span", {
  className: "loc"
}, "\xB7 ", D.education.loc, " \xB7 GPA ", D.education.gpa))))));
const Stack = () => React.createElement("div", null, React.createElement("div", {
  className: "stack-grid"
}, D.stack.map(g => React.createElement("div", {
  key: g.group,
  className: "card stack-card"
}, React.createElement("h3", null, g.group, React.createElement("span", {
  className: "eyebrow"
}, g.items.length)), React.createElement("div", {
  className: "chips"
}, g.items.map(it => React.createElement("span", {
  key: it,
  className: "chip"
}, it)))))));
const Publication = () => {
  const Icons = window.Icons;
  const p = D.publication;
  return React.createElement("div", {
    className: "card section-card"
  }, React.createElement("div", {
    className: "card-head"
  }, React.createElement("div", null, React.createElement("div", {
    className: "eyebrow"
  }, "Research"), React.createElement("h2", {
    style: {
      marginTop: 2
    }
  }, "Publication")), React.createElement("span", {
    className: "spacer"
  }), React.createElement("span", {
    className: "section-meta"
  }, "peer-reviewed \xB7 IEEE Xplore")), React.createElement("div", {
    className: "pub"
  }, React.createElement("div", {
    className: "stamp"
  }, React.createElement("div", {
    className: "y"
  }, p.year), React.createElement("div", {
    className: "l"
  }, "IEEE")), React.createElement("div", null, React.createElement("h3", null, p.title), React.createElement("div", {
    className: "venue"
  }, p.venue, " \xB7 International Telecommunications Conference (Egypt)"), React.createElement("div", {
    className: "desc"
  }, p.desc), React.createElement("div", {
    className: "pub-actions"
  }, React.createElement("a", {
    className: "btn btn-secondary btn-sm",
    href: p.url,
    target: "_blank",
    rel: "noreferrer"
  }, React.createElement(Icons.ExternalLink, null), "View on IEEE Xplore"), React.createElement("span", {
    className: "chip green"
  }, "92% validation accuracy"), React.createElement("span", {
    className: "chip"
  }, "Mediapipe \xB7 ML ensemble")))));
};
const FORMSPREE = 'https://formspree.io/f/xrejoojk';
const ContactForm = ({
  defaultMessage = ''
}) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState(defaultMessage);
  const [state, setState] = React.useState('idle');
  const [err, setErr] = React.useState('');
  React.useEffect(() => {
    setMessage(defaultMessage);
  }, [defaultMessage]);
  const submit = async e => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErr('All fields required');
      setState('error');
      return;
    }
    setState('sending');
    setErr('');
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: 'Portfolio inquiry — ' + name
        })
      });
      if (res.ok) {
        setState('sent');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const d = await res.json().catch(() => ({}));
        setErr(d.errors && d.errors[0] && d.errors[0].message || 'Something went wrong');
        setState('error');
      }
    } catch (ex) {
      setErr('Network error — try again');
      setState('error');
    }
  };
  return React.createElement("form", {
    className: "contact-form",
    onSubmit: submit
  }, React.createElement("div", {
    className: "cf-row"
  }, React.createElement("input", {
    className: "cf-input",
    placeholder: "Your name",
    value: name,
    onChange: e => setName(e.target.value),
    disabled: state === 'sending'
  }), React.createElement("input", {
    className: "cf-input",
    type: "email",
    placeholder: "Your email",
    value: email,
    onChange: e => setEmail(e.target.value),
    disabled: state === 'sending'
  })), React.createElement("textarea", {
    className: "cf-input cf-textarea",
    placeholder: "What are you working on?",
    rows: "4",
    value: message,
    onChange: e => setMessage(e.target.value),
    disabled: state === 'sending'
  }), React.createElement("div", {
    className: "cf-foot"
  }, React.createElement("span", {
    className: 'cf-status ' + state
  }, state === 'idle' && '↳ delivered straight to my inbox', state === 'sending' && '… transmitting', state === 'sent' && '✓ message received — I\'ll reply within 24h', state === 'error' && '✗ ' + (err || 'failed')), React.createElement("button", {
    className: "btn btn-primary",
    type: "submit",
    disabled: state === 'sending' || state === 'sent'
  }, state === 'sending' ? 'Sending…' : state === 'sent' ? 'Sent' : 'Send message')));
};
const Contact = () => {
  const Icons = window.Icons;
  const id = D.identity;
  const rows = [{
    ic: 'Mail',
    lbl: 'Primary email',
    val: id.email,
    href: 'mailto:' + id.email
  }, {
    ic: 'Linkedin',
    lbl: 'LinkedIn',
    val: 'eissa-islam-775291200',
    href: id.linkedin
  }, {
    ic: 'Github',
    lbl: 'GitHub',
    val: 'github.com/eissa2002',
    href: id.github
  }, {
    ic: 'Phone',
    lbl: 'Direct',
    val: id.phone,
    href: 'tel:' + id.phone.replace(/\s/g, '')
  }, {
    ic: 'Award',
    lbl: 'IEEE Xplore',
    val: 'ITC-Egypt 2024',
    href: D.publication.url
  }, {
    ic: 'Download',
    lbl: 'CV / Résumé',
    val: 'Eissa_Islam_CV.pdf',
    href: id.cv,
    download: true
  }];
  return React.createElement("div", {
    className: "card section-card"
  }, React.createElement("div", {
    className: "card-head"
  }, React.createElement("div", null, React.createElement("div", {
    className: "eyebrow"
  }, "Channel"), React.createElement("h2", {
    style: {
      marginTop: 2
    }
  }, "Open channels")), React.createElement("span", {
    className: "spacer"
  }), React.createElement("span", {
    className: "status-pill",
    style: {
      width: "90px"
    }
  }, React.createElement("span", {
    className: "dot",
    style: {
      background: '#2EE6A6'
    }
  }), "Reply < 24h")), React.createElement("div", {
    className: "card-body"
  }, React.createElement(ContactForm, null), React.createElement("div", {
    className: "contact-grid",
    style: {
      marginTop: 18
    }
  }, rows.map(r => {
    const Ic = Icons[r.ic];
    return React.createElement("a", _extends({
      key: r.lbl,
      className: "contact-row",
      href: r.href
    }, r.download ? {
      download: true
    } : {
      target: '_blank',
      rel: 'noreferrer'
    }), React.createElement("div", {
      className: "ic"
    }, React.createElement(Ic, null)), React.createElement("div", null, React.createElement("div", {
      className: "lbl"
    }, r.lbl), React.createElement("div", {
      className: "val"
    }, r.val)), React.createElement("div", {
      className: "arr"
    }, React.createElement(Icons.ArrowUpRight, null)));
  }))));
};
Object.assign(window, {
  Sidebar,
  Topbar,
  Hero,
  Featured,
  Projects,
  Experience,
  Stack,
  Publication,
  Contact,
  ContactForm,
  StatusBadge,
  Viz,
  Typer,
  Ticker,
  FORMSPREE
});