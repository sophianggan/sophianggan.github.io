import { ScrambleText } from '@/components/ScrambleText';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono flex items-center justify-center p-8">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl mb-8 font-light italic">
          <ScrambleText text="Your Name" delay={100} />
        </h1>
        
        <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed">
          <ScrambleText text="your tagline or brief description goes here. make it memorable." delay={300} />
        </p>
      </div>
    </div>
  );
};

export default About;
