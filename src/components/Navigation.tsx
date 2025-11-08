import { NavLink } from '@/components/NavLink';
import { ScrambleText } from './ScrambleText';

const navItems = [
  { to: '/', label: 'HOME' },
  { to: '/present', label: 'PRESENT' },
  { to: '/past', label: 'PAST' },
  { to: '/future', label: 'FUTURE' },
  { to: '/projects', label: 'PROJECTS' },
  { to: '/writing', label: 'WRITING' },
  { to: '/contact', label: 'CONTACT' },
];

export const Navigation = () => {
  return (
    <nav className="fixed top-0 right-0 p-8 z-50">
      <div className="flex gap-8">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            activeClassName="text-foreground"
          >
            <ScrambleText text={item.label} />
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
