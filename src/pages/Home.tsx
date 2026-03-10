import { Link } from 'react-router-dom';

const FONT = "Arial, Helvetica, sans-serif";

const Home = () => {
  return (
    <div className="h-screen bg-background text-white flex items-center justify-center overflow-hidden px-8">
      <div className="flex flex-col items-center text-center gap-6">
        <h1
          className="font-bold tracking-tight leading-none"
          style={{ fontFamily: FONT, color: '#7FFFD4', fontSize: 'clamp(3rem, 10vw, 10rem)' }}
        >
          sophie ng
        </h1>
        <p
          className="font-mono text-sm md:text-base"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          mathematics + economics @ university of toronto
        </p>
        <Link
          to="/about"
          className="mt-4 font-mono text-xs tracking-widest transition-colors duration-300"
          style={{ color: 'rgba(255,255,255,0.3)' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#7FFFD4'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.3)'; }}
        >
          enter →
        </Link>
      </div>
    </div>
  );
};

export default Home;
