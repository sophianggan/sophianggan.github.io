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
          <ScrambleText text="SELECTED PROJECTS" />
        </h1>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-secondary text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <a
                  href={project.link}
                  className="text-lg md:text-xl text-foreground hover:text-accent transition-colors"
                >
                  <ScrambleText text={project.title} />
                </a>
                <span className="text-xs text-muted-foreground ml-auto">
                  {project.year}
                </span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed ml-12">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
