import { ScrambleText } from '@/components/ScrambleText';

const Future = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono p-8 md:p-16">
      <div className="max-w-4xl">
        <h2 className="text-xs uppercase tracking-wider mb-12 text-secondary">
          <ScrambleText text="FUTURE" delay={100} />
        </h2>
        
        <div className="space-y-8 text-sm md:text-base text-muted-foreground leading-relaxed">
          <div>
            <span className="text-secondary mr-4"><ScrambleText text="01" delay={200} /></span>
            <span className="inline">
              <ScrambleText text="what problems do you want to solve? what impact do you want to make in the world?" delay={250} />
            </span>
          </div>
          
          <div>
            <span className="text-secondary mr-4"><ScrambleText text="02" delay={300} /></span>
            <span className="inline">
              <ScrambleText text="where do you see yourself going? what skills are you building? what's next on your journey?" delay={350} />
            </span>
          </div>
          
          <div>
            <span className="text-secondary mr-4"><ScrambleText text="03" delay={400} /></span>
            <span className="inline">
              <ScrambleText text="your vision for the future. dreams, goals, or the legacy you want to create." delay={450} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
