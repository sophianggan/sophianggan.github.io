import { NavLink } from '@/components/NavLink';
import { ScrambleText } from './ScrambleText';

const navItems = [
  { to: '/', label: 'HOME' },
  { to: '/timeline', label: 'ABOUT ME' },
];

export const Navigation = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 p-8 pt-16 md:pt-8 z-50 bg-background">
      <div className="flex gap-8 justify-end">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="font-mono text-xs text-white hover:text-white transition-colors"
            activeClassName="text-white"
          >
            <ScrambleText text={item.label} />
          </NavLink>
        ))}
        <a
          href="https://drive.google.com/file/d/1ZQdmK5_SWSiXkqi6HUh3ZH8qjHtl96mW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-white hover:text-white transition-colors"
        >
          <ScrambleText text="RESUME" />
        </a>
        <NavLink
          to="/contact"
          className="font-mono text-xs text-white hover:text-white transition-colors"
          activeClassName="text-white"
        >
          <ScrambleText text="SAY HI!" />
        </NavLink>
      </div>
    </nav>
  );
};
