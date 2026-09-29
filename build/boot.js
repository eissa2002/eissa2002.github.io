const Boot = ({
  onDone
}) => {
  const [lines, setLines] = React.useState([]);
  const [pct, setPct] = React.useState(0);
  const [hidden, setHidden] = React.useState(false);
  const startedRef = React.useRef(false);
  const ts = () => {
    const d = new Date();
    const p = n => String(n).padStart(2, '0');
    return `[${p(d.getUTCHours())}:${p(d.getUTCMinutes())}:${p(d.getUTCSeconds())}.${String(d.getUTCMilliseconds()).padStart(3, '0').slice(0, 3)}]`;
  };
  const script = [{
    t: 30,
    c: 'dim',
    k: 'BIOS',
    m: 'EISSA/OS · 2026.5  cold start'
  }, {
    t: 40,
    c: 'info',
    k: 'CPU',
    m: 'detecting cores ……… 8 logical · AVX2 · CUDA capable'
  }, {
    t: 45,
    c: 'info',
    k: 'MEM',
    m: 'allocating runtime …… 16 GiB available'
  }, {
    t: 55,
    c: 'ok',
    k: 'OK',
    m: 'mount /tokens.css → DCS palette loaded'
  }, {
    t: 45,
    c: 'info',
    k: 'NET',
    m: 'eth0 ↑  0.0 ms · resolving portfolio.eissa'
  }, {
    t: 55,
    c: 'ok',
    k: 'OK',
    m: 'kernel modules: react@18 · lucide-icons'
  }, {
    t: 65,
    c: 'info',
    k: 'LLM',
    m: 'attaching gemini · groq/llama3 · ollama (local)'
  }, {
    t: 55,
    c: 'ok',
    k: 'OK',
    m: 'vector index online · BGE-m3 · qdrant · chromadb'
  }, {
    t: 50,
    c: 'info',
    k: 'CV',
    m: 'spinning up YOLOv8 · OpenCV · Mediapipe'
  }, {
    t: 55,
    c: 'info',
    k: 'AGENT',
    m: 'agent graph compiled · router · retrieval · action'
  }, {
    t: 45,
    c: 'warn',
    k: 'AUDIT',
    m: 'sentry hook attached · uptime ⟳ tracker armed'
  }, {
    t: 45,
    c: 'ok',
    k: 'OK',
    m: 'authenticating operator: eissa  uid=2002  ✔'
  }, {
    t: 40,
    c: 'info',
    k: 'PROFILE',
    m: 'loading ' + window.PortfolioData.projects.length + ' projects · ' + window.PortfolioData.experience.length + ' roles · 1 IEEE pub'
  }, {
    t: 40,
    c: 'ok',
    k: 'READY',
    m: 'all systems nominal — handoff to renderer'
  }];
  React.useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    let cancelled = false;
    let acc = 0;
    const total = script.reduce((s, l) => s + l.t, 0);
    (async () => {
      for (let i = 0; i < script.length; i++) {
        if (cancelled) return;
        const l = script[i];
        await new Promise(r => setTimeout(r, l.t));
        acc += l.t;
        if (cancelled) return;
        setLines(arr => [...arr, {
          ...l,
          time: ts()
        }]);
        setPct(Math.round(acc / total * 100));
      }
      await new Promise(r => setTimeout(r, 160));
      if (cancelled) return;
      setHidden(true);
      setTimeout(() => onDone && onDone(), 300);
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  const skip = () => {
    setHidden(true);
    setTimeout(() => onDone && onDone(), 420);
  };
  return React.createElement("div", {
    className: 'boot' + (hidden ? ' hidden' : '')
  }, React.createElement("div", {
    className: "boot-inner"
  }, React.createElement("div", {
    className: "boot-mark"
  }), React.createElement("div", {
    className: "boot-title"
  }, React.createElement("b", null, "EISSA / OS"), " \xB7 operator console boot"), React.createElement("div", {
    className: "boot-log"
  }, lines.map((l, i) => React.createElement("div", {
    key: i
  }, React.createElement("span", {
    className: "ts"
  }, l.time), React.createElement("span", {
    className: l.c
  }, "[", l.k, "]"), React.createElement("span", {
    style: {
      marginLeft: 8
    }
  }, l.m)))), React.createElement("div", {
    className: "boot-bar"
  }, React.createElement("div", {
    className: "boot-bar-fill",
    style: {
      width: pct + '%'
    }
  })), React.createElement("div", {
    className: "boot-foot"
  }, React.createElement("span", null, "EISSA/OS \xB7 2026.5"), React.createElement("span", null, pct, "% \xB7 ", lines.length, "/", script.length, " modules"))), React.createElement("button", {
    className: "boot-skip",
    onClick: skip
  }, "skip \u21B5"));
};
window.Boot = Boot;