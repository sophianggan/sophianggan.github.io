import { ScrambleText } from '@/components/ScrambleText';

const Past = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono p-8 md:p-16">
      <div className="max-w-4xl">
        <h2 className="text-xs uppercase tracking-wider mb-12 text-secondary">
          <ScrambleText text="PAST" delay={100} />
        </h2>
        
        <div className="space-y-8 text-sm md:text-base text-muted-foreground leading-relaxed">
          <div>
            <span className="text-secondary mr-4"><ScrambleText text="01" delay={200} /></span>
            <span className="inline">
              <ScrambleText text="previous role or achievement. what you built, learned, or accomplished. include notable outcomes or recognition." delay={250} />
            </span>
          </div>
          
          <div>
            <span className="text-secondary mr-4"><ScrambleText text="02" delay={300} /></span>
            <span className="inline">
              <ScrambleText text="another significant experience from your past. education, previous companies, or major projects." delay={350} />
            </span>
          </div>

          <div>
            <span className="text-secondary mr-4"><ScrambleText text="03" delay={400} /></span>
            <span className="inline">
              <ScrambleText text="more background on your journey. where you started, key moments, or transformative experiences." delay={450} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Past;
