import { ScrambleText } from '@/components/ScrambleText';

const Present = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono p-8 md:p-16">
      <div className="max-w-4xl">
        <h2 className="text-xs uppercase tracking-wider mb-12 text-secondary">
          <ScrambleText text="PRESENT" delay={100} />
        </h2>
        
        <div className="space-y-8 text-sm md:text-base text-muted-foreground leading-relaxed">
          <div>
            <span className="text-secondary mr-4"><ScrambleText text="01" delay={200} /></span>
            <span className="inline">
              <ScrambleText text="working on something interesting. describe what you're currently doing, your role, and why it matters to you." delay={250} />
            </span>
          </div>
          
          <div>
            <span className="text-secondary mr-4"><ScrambleText text="02" delay={300} /></span>
            <span className="inline">
              <ScrambleText text="another current activity or focus. maybe you're studying, building a side project, or exploring a new field." delay={350} />
            </span>
          </div>
          
          <div>
            <span className="text-secondary mr-4"><ScrambleText text="03" delay={400} /></span>
            <span className="inline">
              <ScrambleText text="what else occupies your time? hobbies, learning, research, or creative pursuits." delay={450} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Present;
