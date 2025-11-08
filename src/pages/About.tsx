import { ScrambleText } from '@/components/ScrambleText';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono p-8 md:p-16">
      <div className="max-w-4xl">
        <h1 className="text-3xl md:text-5xl mb-8 font-light italic">
          <ScrambleText text="Your Name" />
        </h1>
        
        <p className="text-lg md:text-xl mb-12 text-muted-foreground leading-relaxed">
          <ScrambleText text="your tagline or brief description goes here. make it memorable." />
        </p>

        <section className="mb-16">
          <h2 className="text-xs uppercase tracking-wider mb-6 text-secondary">
            <ScrambleText text="CURRENTLY" />
          </h2>
          
          <div className="space-y-8 text-sm md:text-base text-muted-foreground leading-relaxed">
            <div>
              <span className="text-secondary mr-4">01</span>
              <p className="inline">
                working on something interesting. describe what you're currently doing, your role, and why it matters to you.
              </p>
            </div>
            
            <div>
              <span className="text-secondary mr-4">02</span>
              <p className="inline">
                another current activity or focus. maybe you're studying, building a side project, or exploring a new field.
              </p>
            </div>
            
            <div>
              <span className="text-secondary mr-4">03</span>
              <p className="inline">
                what else occupies your time? hobbies, learning, research, or creative pursuits.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-wider mb-6 text-secondary">
            <ScrambleText text="PAST" />
          </h2>
          
          <div className="space-y-8 text-sm md:text-base text-muted-foreground leading-relaxed">
            <div>
              <span className="text-secondary mr-4">01</span>
              <p className="inline">
                previous role or achievement. what you built, learned, or accomplished. include notable outcomes or recognition.
              </p>
            </div>
            
            <div>
              <span className="text-secondary mr-4">02</span>
              <p className="inline">
                another significant experience from your past. education, previous companies, or major projects.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
