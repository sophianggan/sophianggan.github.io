import { ScrambleText } from '@/components/ScrambleText';

const writings = [
  {
    title: 'Essay Title One',
    description: 'a brief excerpt or description of what this piece is about.',
    link: '#',
    date: 'Jan 2024',
  },
  {
    title: 'Essay Title Two',
    description: 'another writing sample. what themes or ideas does it explore?',
    link: '#',
    date: 'Dec 2023',
  },
  {
    title: 'Essay Title Three',
    description: 'describe the focus of this piece and why you wrote it.',
    link: '#',
    date: 'Nov 2023',
  },
];

const Writing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono p-8 md:p-16">
      <div className="max-w-4xl">
        <h1 className="text-xs uppercase tracking-wider mb-12 text-secondary">
          <ScrambleText text="SELECTED WRITING" delay={100} />
        </h1>
        
        <div className="space-y-10">
          {writings.map((writing, index) => (
            <div key={index} className="group">
              <div className="flex items-baseline gap-4 mb-2">
                <a
                  href={writing.link}
                  className="text-lg md:text-xl text-foreground hover:text-accent transition-colors"
                >
                  <ScrambleText text={writing.title} delay={200 + index * 100} />
                </a>
                <span className="text-xs text-muted-foreground ml-auto">
                  <ScrambleText text={writing.date} delay={250 + index * 100} />
                </span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                <ScrambleText text={writing.description} delay={300 + index * 100} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Writing;
