/* Interactive terminal — supports: help, about, projects, skills, experience, contact, publication, ls, whoami, clear, sudo hire-me */

const Terminal = () => {
  const D = window.PortfolioData;
  const [history, setHistory] = React.useState([]);
  const [value, setValue] = React.useState('');
  const [cmdHistory, setCmdHistory] = React.useState([]);
  const [historyIdx, setHistoryIdx] = React.useState(-1);
  const bodyRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const PROMPT = 'eissa@os:~$ ';

  React.useEffect(() => {
    setHistory([
      { kind: 'sys', text: 'EISSA/OS 2026.5  ·  AI engineer shell  ·  type `help`' },
      { kind: 'sys', text: 'Last login: ' + new Date().toUTCString() },
      { kind: 'spacer' },
    ]);
  }, []);

  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history]);

  const focus = () => inputRef.current && inputRef.current.focus();

  const print = (lines) => setHistory(h => [...h, ...lines]);
  const printBlock = (text) => print(text.split('\n').map(t => ({ kind: 'out', text: t })));

  const commands = {
    help: () => [
      { kind: 'h', text: 'Available commands' },
      { kind: 'out', text: '  about        — short bio' },
      { kind: 'out', text: '  projects     — list shipped projects' },
      { kind: 'out', text: '  skills       — tech stack matrix' },
      { kind: 'out', text: '  experience   — work history' },
      { kind: 'out', text: '  publication  — IEEE paper' },
      { kind: 'out', text: '  contact      — channels' },
      { kind: 'out', text: '  ls           — list sections' },
      { kind: 'out', text: '  whoami       — operator id' },
      { kind: 'out', text: '  cv           — open CV' },
      { kind: 'out', text: '  open <link>  — github | linkedin | ieee' },
      { kind: 'out', text: '  clear        — clear screen' },
      { kind: 'out', text: '  sudo hire-me — try it' },
    ],
    about: () => [
      { kind: 'h', text: D.identity.name + ' · ' + D.identity.role },
      { kind: 'out', text: D.identity.summary },
      { kind: 'spacer' },
      { kind: 'k',  text: '  location: ' + D.identity.location },
      { kind: 'k',  text: '  email:    ' + D.identity.email },
      { kind: 'k',  text: '  github:   ' + D.identity.github },
    ],
    projects: () => {
      const out = [{ kind: 'h', text: 'PROJECTS  ·  ' + D.projects.length + ' total' }];
      D.projects.forEach(p => {
        out.push({ kind: 'out', text: `  ${p.id}  ${p.name.padEnd(28)}  ${p.year}  [${p.tags.join(', ')}]` });
      });
      return out;
    },
    skills: () => {
      const out = [{ kind: 'h', text: 'STACK' }];
      D.stack.forEach(g => {
        out.push({ kind: 'k', text: '  ' + g.group });
        out.push({ kind: 'out', text: '    ' + g.items.join(' · ') });
      });
      return out;
    },
    experience: () => {
      const out = [{ kind: 'h', text: 'EXPERIENCE' }];
      D.experience.forEach(e => {
        out.push({ kind: 'k', text: `  ${e.role}  ·  ${e.org}` });
        out.push({ kind: 'out', text: `    ${e.from} → ${e.to}  ·  ${e.loc}` });
      });
      return out;
    },
    publication: () => [
      { kind: 'h',   text: 'IEEE 2024 — ' + D.publication.venue },
      { kind: 'out', text: '  ' + D.publication.title },
      { kind: 'out', text: '  ' + D.publication.desc },
      { kind: 'k',   text: '  url: ' + D.publication.url },
    ],
    contact: () => [
      { kind: 'h',   text: 'OPEN CHANNELS' },
      { kind: 'out', text: '  email     ' + D.identity.email },
      { kind: 'out', text: '  phone     ' + D.identity.phone },
      { kind: 'out', text: '  linkedin  ' + D.identity.linkedin },
      { kind: 'out', text: '  github    ' + D.identity.github },
    ],
    ls: () => [
      { kind: 'out', text: 'overview/  projects/  experience/  stack/  publication/  contact/  cv.pdf' },
    ],
    whoami: () => [
      { kind: 'out', text: 'eissa  ·  uid=2002  ·  groups=ai,ml,rag,cv,mlops' },
    ],
    cv: () => {
      window.open(D.identity.cv, '_blank');
      return [{ kind: 'out', text: 'opening Eissa_Islam_CV.pdf …' }];
    },
    open: (arg) => {
      const map = { github: D.identity.github, linkedin: D.identity.linkedin, ieee: D.publication.url, cv: D.identity.cv };
      const url = map[arg];
      if (!url) return [{ kind: 'err', text: `unknown link: ${arg}. try: github | linkedin | ieee | cv` }];
      window.open(url, '_blank');
      return [{ kind: 'out', text: `→ ${url}` }];
    },
    clear: () => { setHistory([]); return null; },
    'sudo': (rest) => {
      if (rest.trim() === 'hire-me') {
        return [
          { kind: 'h',   text: '[OK] elevation granted' },
          { kind: 'out', text: '→ piping intent to ' + D.identity.email + ' …' },
          { kind: 'out', text: '→ delivery confirmed.' },
          { kind: 'k',   text: 'looking forward to hearing from you. — eissa' },
        ];
      }
      return [{ kind: 'err', text: 'sudo: try `sudo hire-me`' }];
    },
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const raw = value.trim();
    const echoed = [{ kind: 'cmd', text: PROMPT + value }];
    if (!raw) { print(echoed); setValue(''); return; }
    setCmdHistory(h => [...h, raw]);
    setHistoryIdx(-1);
    const [cmd, ...args] = raw.split(/\s+/);
    const fn = commands[cmd];
    let out;
    if (!fn) out = [{ kind: 'err', text: `command not found: ${cmd}. type \`help\`` }];
    else out = fn(args.join(' '));
    if (out === null) { setValue(''); return; }
    print([...echoed, ...out, { kind: 'spacer' }]);
    setValue('');
  };

  const onKey = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const next = historyIdx < 0 ? cmdHistory.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(next);
      setValue(cmdHistory[next]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx < 0) return;
      const next = historyIdx + 1;
      if (next >= cmdHistory.length) { setHistoryIdx(-1); setValue(''); }
      else { setHistoryIdx(next); setValue(cmdHistory[next]); }
    }
  };

  return (
    <div className="card section-card">
      <div className="card-head">
        <div>
          <div className="eyebrow">REPL</div>
          <h2 style={{marginTop:2}}>Terminal</h2>
        </div>
        <span className="spacer"/>
        <span className="section-meta">type `help` to see commands</span>
      </div>
      <div className="card-body" style={{padding:'12px 12px 14px'}}>
        <div className="term" onClick={focus}>
          <div className="term-head">
            <div className="lights"><span/><span/><span/></div>
            <span className="mono">eissa@os : ~/portfolio</span>
            <span style={{marginLeft:'auto'}} className="mono">zsh · 80×24</span>
          </div>
          <div className="term-body" ref={bodyRef}>
            {history.map((l, i) => {
              if (l.kind === 'spacer') return <div key={i} className="line">&nbsp;</div>;
              const cls = { sys: 'ln-out', cmd: 'ln-cmd', out: 'ln-out', err: 'ln-err', h: 'ln-h', k: 'ln-k' }[l.kind] || 'ln-out';
              return <div key={i} className={'line ' + cls}>{l.text}</div>;
            })}
            <form onSubmit={onSubmit} className="input-row" style={{marginTop:2}}>
              <span className="ln-prompt">{PROMPT}</span>
              <input ref={inputRef} autoFocus value={value} onChange={(e)=>setValue(e.target.value)} onKeyDown={onKey} spellCheck={false} autoComplete="off"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Terminal = Terminal;
