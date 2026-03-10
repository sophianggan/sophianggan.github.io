import { NavLink } from '@/components/NavLink';
import { ScrambleText } from './ScrambleText';

const navItems = [
  { to: '/', label: 'home' },
  { to: '/timeline', label: 'about me' },
  { to: '/projects', label: 'projects' },
  { to: '/writing', label: 'elsewhere' },
];

export const Navigation = () => {
  return (
    <nav className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {navItems.map((item, idx) => (
        <NavLink
          key={item.to}
          to={item.to}
          className="font-mono text-xs text-white/40 hover:text-white transition-colors"
          activeClassName="text-white"
        >
          <ScrambleText text={`[${String(idx + 1).padStart(2, '0')}] ${item.label}`} />
        </NavLink>
      ))}
      <a
        href="https://drive.google.com/file/d/1hhMDFiIl7XPKN2MnyHKsxnc__6q2Kl3n/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs text-white/40 hover:text-white transition-colors"
      >
        <ScrambleText text="[05] resume" />
      </a>
    </nav>
  );
};
