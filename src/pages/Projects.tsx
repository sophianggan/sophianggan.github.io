import { ScrambleText } from '@/components/ScrambleText';

const projects = [
  {
    title: 'AlphaXplore',
    tech: 'Python, Streamlit, Click, SQLAlchemy, scikit-learn, Docker, CI/CD',
    description: 'Designed registry-driven FastAPI & SQLAlchemy backend merging market, macro, and alt datasets for factor analyses. Built composable FeatureBuilder & ModelManager modules running scikit-learn models with artifact tracking logs. Built modular backtesting engine computing CAGR, Sharpe, & drawdowns; deployed via Docker with CI/CD builds.',
    link: '#',
    year: 'Oct 2025',
  },
  {
    title: 'Stock NewsGraph',
    tech: 'Python, Streamlit, spaCy, PyVis, FastAPI, Docker, NetworkX',
    description: 'Built interactive Streamlit + PyVis interface generating multi-hop company graphs from Google News RSS feeds. Applied spaCy NER & NetworkX/PageRank to extract, rank co-mentioned firms; map names via canonical utility. Deployed FastAPI + Streamlit services inside Docker container with .env keys & lightweight REST endpoints.',
    link: '#',
    year: 'July 2025',
  },
  {
    title: 'RAG-TA Assistant',
    tech: 'LangChain, Groq LLaMA 3.3 8B, Pinecone, Python ETL, Prompt Tuning',
    description: 'Designed a cost-efficient RAG system combining Groq-accelerated LLM inference with Pinecone vector retrieval. Automated daily ETL to clean, classify, and embed 50K+ academic data points with structured metadata. Implemented prompt-tuned ranking and telemetry to monitor retrieval precision, latency, and model drift.',
    link: '#',
    year: 'Feb 2025',
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
