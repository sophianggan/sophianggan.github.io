import { ScrambleText } from '@/components/ScrambleText';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-white font-mono flex items-center justify-center p-8 pt-32 md:pt-24">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl mb-8 font-black uppercase" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 900, color: '#7FFFD4' }}>
          <ScrambleText text="SOPHIA NG" delay={100} speed={70} />
        </h1>
        
        <div className="text-xs md:text-sm text-white leading-relaxed space-y-1">
          <p>
            mathematics + economics student @ university of toronto
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
