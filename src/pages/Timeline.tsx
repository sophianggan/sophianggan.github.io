import { ScrambleText } from '@/components/ScrambleText';

const Timeline = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono p-8 md:p-16">
      <div className="max-w-4xl space-y-16">
        {/* Present Section */}
        <section>
          <h2 className="text-xs uppercase tracking-wider mb-8 text-secondary">
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
        </section>

        {/* Past Section */}
        <section>
          <h2 className="text-xs uppercase tracking-wider mb-8 text-secondary">
            <ScrambleText text="PAST" delay={500} />
          </h2>
          
          <div className="space-y-8 text-sm md:text-base text-muted-foreground leading-relaxed">
            <div>
              <span className="text-secondary mr-4"><ScrambleText text="01" delay={600} /></span>
              <span className="inline">
                <ScrambleText text="previous role or achievement. what you built, learned, or accomplished. include notable outcomes or recognition." delay={650} />
              </span>
            </div>
            
            <div>
              <span className="text-secondary mr-4"><ScrambleText text="02" delay={700} /></span>
              <span className="inline">
                <ScrambleText text="another significant experience from your past. education, previous companies, or major projects." delay={750} />
              </span>
            </div>

            <div>
              <span className="text-secondary mr-4"><ScrambleText text="03" delay={800} /></span>
              <span className="inline">
                <ScrambleText text="more background on your journey. where you started, key moments, or transformative experiences." delay={850} />
              </span>
            </div>
          </div>
        </section>

        {/* Future Section */}
        <section>
          <h2 className="text-xs uppercase tracking-wider mb-8 text-secondary">
            <ScrambleText text="FUTURE" delay={900} />
          </h2>
          
          <div className="space-y-8 text-sm md:text-base text-muted-foreground leading-relaxed">
            <div>
              <span className="text-secondary mr-4"><ScrambleText text="01" delay={1000} /></span>
              <span className="inline">
                <ScrambleText text="what problems do you want to solve? what impact do you want to make in the world?" delay={1050} />
              </span>
            </div>
            
            <div>
              <span className="text-secondary mr-4"><ScrambleText text="02" delay={1100} /></span>
              <span className="inline">
                <ScrambleText text="where do you see yourself going? what skills are you building? what's next on your journey?" delay={1150} />
              </span>
            </div>
            
            <div>
              <span className="text-secondary mr-4"><ScrambleText text="03" delay={1200} /></span>
              <span className="inline">
                <ScrambleText text="your vision for the future. dreams, goals, or the legacy you want to create." delay={1250} />
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Timeline;
