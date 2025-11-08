import { ScrambleText } from '@/components/ScrambleText';

const projects = [
  {
    title: 'Project One',
    description: 'a brief description of this project. what problem did it solve? what technologies did you use?',
    link: '#',
    year: '2024',
  },
  {
    title: 'Project Two',
    description: 'another interesting project. highlight the impact, scale, or innovative aspects.',
    link: '#',
    year: '2023',
  },
  {
    title: 'Project Three',
    description: 'describe this project and what makes it noteworthy. include results or learnings.',
    link: '#',
    year: '2023',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono p-8 md:p-16">
      <div className="max-w-4xl">
        <h1 className="text-xs uppercase tracking-wider mb-12 text-secondary">
          <ScrambleText text="SELECTED PROJECTS" delay={100} />
        </h1>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-secondary text-sm">
                  <ScrambleText text={String(index + 1).padStart(2, '0')} delay={200 + index * 100} />
                </span>
                <a
                  href={project.link}
                  className="text-lg md:text-xl text-foreground hover:text-accent transition-colors"
                >
                  <ScrambleText text={project.title} delay={250 + index * 100} />
                </a>
                <span className="text-xs text-muted-foreground ml-auto">
                  <ScrambleText text={project.year} delay={300 + index * 100} />
                </span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed ml-12">
                <ScrambleText text={project.description} delay={350 + index * 100} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
