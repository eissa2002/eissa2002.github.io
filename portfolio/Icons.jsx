// Lucide-style stroke icons, 24x24 viewBox.
const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' };
const Icon = ({ children, size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...stroke}>{children}</svg>
);

const Icons = {
  // Nav
  Grid:     () => <Icon><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></Icon>,
  Box:      () => <Icon><path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v9"/></Icon>,
  Briefcase:() => <Icon><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20"/></Icon>,
  Cpu:      () => <Icon><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></Icon>,
  Award:    () => <Icon><circle cx="12" cy="9" r="6"/><path d="m8.21 13.89-1.21 7.11 5-3 5 3-1.21-7.11"/></Icon>,
  Mail:     () => <Icon><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></Icon>,
  Terminal: () => <Icon><path d="m4 17 6-6-6-6M12 19h8"/></Icon>,

  // UI
  Search:   () => <Icon><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></Icon>,
  Bell:     () => <Icon><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></Icon>,
  Refresh:  () => <Icon><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/></Icon>,
  Download: () => <Icon><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></Icon>,
  ArrowUpRight: () => <Icon><path d="M7 17 17 7M7 7h10v10"/></Icon>,
  ChevronR: () => <Icon><path d="m9 18 6-6-6-6"/></Icon>,
  X:        () => <Icon><path d="M18 6 6 18M6 6l12 12"/></Icon>,
  ExternalLink: () => <Icon><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/></Icon>,
  Filter:   () => <Icon><path d="M22 3H2l8 9.5V19l4 2v-8.5z"/></Icon>,
  Play:     () => <Icon><path d="M5 3 19 12 5 21z"/></Icon>,
  Code:     () => <Icon><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></Icon>,
  MapPin:   () => <Icon><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></Icon>,
  Phone:    () => <Icon><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></Icon>,
  FileText: () => <Icon><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></Icon>,
  Zap:      () => <Icon><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></Icon>,

  // Brand-ish
  Github:   () => <Icon><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></Icon>,
  Linkedin: () => <Icon><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></Icon>,

  Dot:      ({color = 'currentColor'}) => <svg width="6" height="6" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3" fill={color}/></svg>,
};

window.Icons = Icons;
