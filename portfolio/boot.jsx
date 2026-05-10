/* Boot overlay — terminal-style boot sequence on first load */

const Boot = ({ onDone }) => {
  const [lines, setLines] = React.useState([]);
  const [pct, setPct] = React.useState(0);
  const [hidden, setHidden] = React.useState(false);
  const startedRef = React.useRef(false);

  const ts = () => {
    const d = new Date();
    const p = (n) => String(n).padStart(2, '0');
    return `[${p(d.getUTCHours())}:${p(d.getUTCMinutes())}:${p(d.getUTCSeconds())}.${String(d.getUTCMilliseconds()).padStart(3,'0').slice(0,3)}]`;
  };

  const script = [
    { t: 60,  c: 'dim',  k: 'BIOS',     m: 'EISSA/OS · 2026.5  cold start' },
    { t: 80,  c: 'info', k: 'CPU',      m: 'detecting cores ……… 8 logical · AVX2 · CUDA capable' },
    { t: 90,  c: 'info', k: 'MEM',      m: 'allocating runtime …… 16 GiB available' },
    { t: 110, c: 'ok',   k: 'OK',       m: 'mount /tokens.css → DCS palette loaded' },
    { t: 90,  c: 'info', k: 'NET',      m: 'eth0 ↑  0.0 ms · resolving portfolio.eissa' },
    { t: 110, c: 'ok',   k: 'OK',       m: 'kernel modules: react@18 · babel@7 · lucide-icons' },
    { t: 130, c: 'info', k: 'LLM',      m: 'attaching gemini · groq/llama3 · ollama (local)' },
    { t: 110, c: 'ok',   k: 'OK',       m: 'vector index online · BGE-m3 · qdrant · chromadb' },
    { t: 100, c: 'info', k: 'CV',       m: 'spinning up YOLOv8 · OpenCV · Mediapipe' },
    { t: 110, c: 'info', k: 'AGENT',    m: 'router/retrieval/action graph compiled · 7 layers' },
    { t: 90,  c: 'warn', k: 'AUDIT',    m: 'sentry hook attached · uptime ⟳ tracker armed' },
    { t: 90,  c: 'ok',   k: 'OK',       m: 'authenticating operator: eissa  uid=2002  ✔' },
    { t: 80,  c: 'info', k: 'PROFILE',  m: 'loading 13 projects · 6 roles · 1 IEEE pub' },
    { t: 80,  c: 'ok',   k: 'READY',    m: 'all systems nominal — handoff to renderer' },
  ];

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
        setLines(arr => [...arr, { ...l, time: ts() }]);
        setPct(Math.round((acc / total) * 100));
      }
      await new Promise(r => setTimeout(r, 320));
      if (cancelled) return;
      setHidden(true);
      setTimeout(() => onDone && onDone(), 620);
    })();

    return () => { cancelled = true; };
  }, []);

  const skip = () => {
    setHidden(true);
    setTimeout(() => onDone && onDone(), 420);
  };

  return (
    <div className={'boot' + (hidden ? ' hidden' : '')}>
      <div className="boot-inner">
        <div className="boot-mark"></div>
        <div className="boot-title"><b>EISSA / OS</b> · operator console boot</div>
        <div className="boot-log">
          {lines.map((l, i) => (
            <div key={i}>
              <span className="ts">{l.time}</span>
              <span className={l.c}>[{l.k}]</span>
              <span style={{marginLeft:8}}>{l.m}</span>
            </div>
          ))}
        </div>
        <div className="boot-bar"><div className="boot-bar-fill" style={{width: pct + '%'}}/></div>
        <div className="boot-foot">
          <span>EISSA/OS · 2026.5</span>
          <span>{pct}% · {lines.length}/{script.length} modules</span>
        </div>
      </div>
      <button className="boot-skip" onClick={skip}>skip ↵</button>
    </div>
  );
};

window.Boot = Boot;
