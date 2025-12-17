import { ScrambleText } from '@/components/ScrambleText';

const projects = [
  {
    title: 'ecogrid - carbon-aware gpu scheduler',
    tech: 'fastapi, rapids (cudf), docker',
    description: 'developed middleware optimizing gpu scheduling via real-time carbon intensity to mitigate operational volatility. engineered a fastapi microservice leveraging rapids (cudf) for gpu-accelerated analysis of optimal training windows. containerized using docker for cloud-agnostic portability across distributed clusters, meeting ai scalability standards. enhanced efficiency by automating energy-aware workload timing, bridging hpc requirements with sustainability.',
    link: '#',
    year: 'dec 2025',
  },
  {
    title: 'alphaxplore',
    tech: 'python, streamlit, click, sqlalchemy, scikit-learn, docker, ci/cd',
    description: 'designed registry-driven fastapi & sqlalchemy backend merging market, macro, and alt datasets for factor analyses. built composable featurebuilder & modelmanager modules running scikit-learn models with artifact tracking logs. built modular backtesting engine computing cagr, sharpe, & drawdowns; deployed via docker with ci/cd builds.',
    link: '#',
    year: 'oct 2025',
  },
  {
    title: 'stock newsgraph',
    tech: 'python, streamlit, spacy, pyvis, fastapi, docker, networkx',
    description: 'built interactive streamlit + pyvis interface generating multi-hop company graphs from google news rss feeds. applied spacy ner & networkx/pagerank to extract, rank co-mentioned firms; map names via canonical utility. deployed fastapi + streamlit services inside docker container with .env keys & lightweight rest endpoints.',
    link: '#',
    year: 'july 2025',
  },
  {
    title: 'rag-ta assistant',
    tech: 'langchain, groq llama 3.3 8b, pinecone, python etl, prompt tuning',
    description: 'designed a cost-efficient rag system combining groq-accelerated llm inference with pinecone vector retrieval. automated daily etl to clean, classify, and embed 50k+ academic data points with structured metadata. implemented prompt-tuned ranking and telemetry to monitor retrieval precision, latency, and model drift.',
    link: '#',
    year: 'feb 2025',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-white font-mono p-8 pt-32 md:p-16 md:pt-24">
      <div className="max-w-4xl">
        <h1 className="text-xs uppercase tracking-wider mb-12 text-white">
          <ScrambleText text="SELECTED PROJECTS" delay={100} />
        </h1>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-white text-xs">
                  <ScrambleText text={String(index + 1).padStart(2, '0')} delay={200 + index * 100} />
                </span>
                <div className="flex-1">
                  <div className="flex items-baseline gap-4">
                    <a
                      href={project.link}
                      className="text-sm md:text-base text-white hover:text-white transition-colors font-semibold"
                    >
                      <ScrambleText text={project.title} delay={250 + index * 100} />
                    </a>
                    <span className="text-xs text-white ml-auto">
                      {project.year}
                    </span>
                  </div>
                  <div className="text-xs text-white/70 italic mt-1">
                    {project.tech}
                  </div>
                </div>
              </div>
              <p className="text-xs md:text-sm text-white leading-relaxed ml-12">
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
