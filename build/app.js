const {
  useState
} = React;
const TWEAK_DEFAULTS = {
  "accent": "#00B4D8",
  "density": "comfortable",
  "showTerminalCard": true,
  "showStatusPill": true,
  "monoEverywhere": false
};
const SECTIONS = {
  overview: {
    crumbs: ['Operate', 'Overview'],
    label: 'Overview'
  },
  projects: {
    crumbs: ['Work', 'Projects'],
    label: 'Projects'
  },
  experience: {
    crumbs: ['Work', 'Experience'],
    label: 'Experience'
  },
  stack: {
    crumbs: ['Work', 'Stack'],
    label: 'Stack'
  },
  publication: {
    crumbs: ['Research', 'Publication'],
    label: 'Publication'
  },
  terminal: {
    crumbs: ['System', 'Terminal'],
    label: 'Terminal'
  },
  contact: {
    crumbs: ['System', 'Contact'],
    label: 'Contact'
  }
};
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [booted, setBooted] = useState(() => (() => {
    try {
      return localStorage.getItem('eissa_booted') === '1';
    } catch (e) {
      return false;
    }
  })());
  React.useEffect(() => {
    if (booted) {
      try {
        localStorage.setItem('eissa_booted', '1');
      } catch (e) {}
    }
  }, [booted]);
  const hashSection = () => {
    const h = (window.location.hash || '').replace('#', '');
    return SECTIONS[h] ? h : 'overview';
  };
  const [section, setSection] = useState(hashSection);
  React.useEffect(() => {
    const onHash = () => setSection(hashSection());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const navigate = id => {
    setSection(id);
    if (window.location.hash !== '#' + id) {
      history.replaceState(null, '', '#' + id);
    }
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };
  React.useEffect(() => {
    document.documentElement.style.setProperty('--brand-teal', tweaks.accent);
    if (tweaks.monoEverywhere) {
      document.documentElement.style.setProperty('--font-sans', 'JetBrains Mono, ui-monospace, monospace');
    } else {
      document.documentElement.style.removeProperty('--font-sans');
    }
  }, [tweaks.accent, tweaks.monoEverywhere]);
  const meta = SECTIONS[section];
  return React.createElement(React.Fragment, null, !booted && React.createElement(Boot, {
    onDone: () => setBooted(true)
  }), React.createElement("div", {
    className: 'app' + (tweaks.density === 'dense' ? ' dense' : '')
  }, React.createElement(Sidebar, {
    active: section,
    onNavigate: navigate,
    projectCount: window.PortfolioData.projects.length
  }), React.createElement("div", {
    className: "main"
  }, React.createElement(Topbar, {
    crumbs: meta.crumbs
  }), React.createElement("div", {
    className: "page"
  }, section === 'overview' && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "page-head"
  }, React.createElement("div", null, React.createElement("span", {
    className: "eyebrow"
  }, meta.crumbs[0]), React.createElement("h1", null, meta.label)), React.createElement("div", {
    className: "actions"
  }, React.createElement("a", {
    className: "btn btn-secondary btn-sm",
    href: window.PortfolioData.identity.cv,
    download: true
  }, React.createElement(window.Icons.Download, null), "CV"), React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: () => navigate('contact')
  }, React.createElement(window.Icons.Mail, null), "Contact"))), React.createElement(Hero, {
    onNavigate: navigate
  }), React.createElement(window.Ticker, null), React.createElement(Featured, {
    onNavigate: navigate
  }), tweaks.showTerminalCard && React.createElement("div", {
    className: "card",
    style: {
      padding: '18px 20px',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gap: 16,
      alignItems: 'center'
    }
  }, React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 8,
      background: 'var(--bg-2)',
      border: '1px solid var(--border-2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--brand-teal-hi)'
    }
  }, React.createElement(window.Icons.Terminal, null)), React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--fg-1)'
    }
  }, "There's a terminal in this portfolio"), React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-2)'
    }
  }, "Type ", React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--brand-teal-hi)'
    }
  }, "help"), ", ", React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--brand-teal-hi)'
    }
  }, "projects"), ", or ", React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--brand-teal-hi)'
    }
  }, "sudo hire-me"), " to explore.")), React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    onClick: () => navigate('terminal')
  }, "Open ", React.createElement(window.Icons.ChevronR, null)))), section !== 'overview' && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "page-head"
  }, React.createElement("div", null, React.createElement("span", {
    className: "eyebrow"
  }, meta.crumbs[0]), React.createElement("h1", null, meta.label)), React.createElement("div", {
    className: "actions"
  }, React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => navigate('overview')
  }, React.createElement(window.Icons.Grid, null), "Overview"), section !== 'contact' && React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: () => navigate('contact')
  }, React.createElement(window.Icons.Mail, null), "Contact"))), section === 'projects' && React.createElement(Projects, null), section === 'experience' && React.createElement(Experience, null), section === 'stack' && React.createElement(Stack, null), section === 'publication' && React.createElement(Publication, null), section === 'terminal' && React.createElement(Terminal, null), section === 'contact' && React.createElement(Contact, null)))), React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, React.createElement(TweakSection, {
    title: "Accent"
  }, React.createElement(TweakColor, {
    t: tweaks,
    setTweak: setTweak,
    k: "accent",
    label: "Primary",
    options: ['#00B4D8', '#2EE6A6', '#22D3EE', '#A78BFA', '#F5B544']
  })), React.createElement(TweakSection, {
    title: "Density"
  }, React.createElement(TweakRadio, {
    t: tweaks,
    setTweak: setTweak,
    k: "density",
    label: "Cards",
    options: [{
      value: 'comfortable',
      label: 'Comfortable'
    }, {
      value: 'dense',
      label: 'Dense'
    }]
  })), React.createElement(TweakSection, {
    title: "Surfaces"
  }, React.createElement(TweakToggle, {
    t: tweaks,
    setTweak: setTweak,
    k: "showTerminalCard",
    label: "Hint terminal on overview"
  }), React.createElement(TweakToggle, {
    t: tweaks,
    setTweak: setTweak,
    k: "showStatusPill",
    label: "'Open to roles' pill"
  }), React.createElement(TweakToggle, {
    t: tweaks,
    setTweak: setTweak,
    k: "monoEverywhere",
    label: "Mono everywhere"
  }))), React.createElement("style", null, `
        ${tweaks.showStatusPill ? '' : '.topbar .status-pill, .hero-id .status-pill, .contact-row + * .status-pill, .section-card .status-pill { display: none !important; }'}
      `)));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));