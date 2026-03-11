import { ScrambleText } from '@/components/ScrambleText';
import { HoverScrambleText } from '@/components/HoverScrambleText';
import { useState } from 'react';

const columns = [
  {
    label: 'ML & OPTIMIZATION',
    projects: [
      {
        title: 'olympic medal predictor',
        tech: 'Neo4j, PyTorch Geometric, hetero-GNN (GraphSAGE + GATv2), SBERT, LangGraph',
        description: 'built a leakage-safe olympic medal ranking system using time-sliced Neo4j snapshots; trained a hetero-GNN model, engineered graph features to predict next-games medalists, handled imbalance with hard negatives, and shipped an end-to-end CI/CD pipeline.',
        link: 'https://github.com/sophianggan/olympus-graph',
      },
      {
        title: 'wordle & connections solver',
        tech: 'C++, SIMD (Highway), CMake, WebAssembly (Emscripten), PCA, CI',
        description: 'built a high-performance wordle + connections solver using shannon-entropy search and PCA clustering; accelerated scoring with SIMD (Highway) and fixed-block memory pooling, shipped a WebAssembly demo, and added CI with sanitizer-backed tests, proofs, and detailed benchmarks.',
        link: 'https://sophianggan.github.io/nyt-solver/',
      },
    ],
  },
  {
    label: 'DATA & NLP',
    projects: [
      {
        title: 'news-driven stock analysis',
        tech: 'FastAPI, Streamlit, Postgres, spaCy, PyVis, scikit-learn, PySpark, Docker, CI',
        description: 'built a news-to-graph analytics pipeline: extracted company entities from Google News, canonicalized to tickers/sectors, generated multi-hop co-mention graphs, and served interactive network views (Streamlit/PyVis) + JSON APIs (FastAPI); computed influence (PageRank) and weekly sector metrics from Postgres-backed headlines.',
        link: 'https://github.com/sophianggan/pulseforge',
      },
      {
        title: 'multimodal RAG study assistant (virtual TA)',
        tech: 'Python, LangChain, Pinecone, Groq batching, OCR, ETL',
        description: 'built a multimodal study assistant: indexed PDF chunks in Pinecone for semantic retrieval, automated batched Groq-based OCR with cleaning, chunking, and embedding with a 72-hour refresh ETL, and served grounded Q&A via LangChain and Groq with Microsoft claimification guardrails.',
        link: '#',
      },
    ],
  },
  {
    label: 'FINANCE & ANALYTICS',
    projects: [
      {
        title: 'FP&A reporting automation',
        tech: 'Excel (Power Query, PivotTables, Solver), PostgreSQL, Tableau, Python',
        description: 'expedited close reporting speed, as measured by automated refreshes and actual vs plan vs prior variance outputs, by building a monthly SQL data model and executive-summary pipeline.',
        link: 'https://github.com/sophianggan/fpa-reporting-automation',
      },
      {
        title: 'subscription revenue forecasting dashboard',
        tech: 'Excel, SQL, Tableau, Power BI',
        description: 'clarified planning visibility, as measured by segment-level retention and revenue forecasts, by modeling churn, ARPU, and MRR using SQL aggregations and Excel sensitivity analysis.',
        link: 'https://github.com/sophianggan/Subscription-Revenue-Forecasting-Dashboard',
      },
    ],
  },
];

const Projects = () => {
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-white font-mono p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
          {/* Centered title spanning all columns */}
          <div className="md:col-span-3 flex justify-center mb-8">
            <h1 className="text-xs uppercase tracking-wider font-bold">
              <span style={{ color: 'var(--accent-mint)' }}>
                <ScrambleText text="SELECTED PROJECTS" delay={100} />
              </span>
            </h1>
          </div>

          {/* Row by row: project 0 from each column, then project 1 */}
          {[0, 1].map((rowIdx) =>
            columns.map((col, colIdx) => {
              const project = col.projects[rowIdx];
              const globalIdx = colIdx * 2 + rowIdx;
              return (
                <div
                  key={`${colIdx}-${rowIdx}`}
                  className={`text-xs text-white leading-relaxed ${rowIdx === 0 ? 'mb-8' : ''}`}
                  onMouseEnter={() => setHoveredCol(colIdx)}
                  onMouseLeave={() => setHoveredCol(null)}
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-white mr-2">
                      <ScrambleText text={String(globalIdx + 1).padStart(2, '0')} delay={200 + globalIdx * 100} />
                    </span>
                  </div>
                  <div className="font-semibold mb-1">
                    {project.link !== '#' ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-white/50 underline-offset-2 hover:decoration-white transition-colors inline-flex items-center gap-1.5"
                      >
                        <HoverScrambleText text={project.title} shouldScramble={hoveredCol === colIdx} />
                        <span className="text-[10px] inline-block translate-y-[-1px]">↗</span>
                      </a>
                    ) : (
                      <HoverScrambleText text={project.title} shouldScramble={hoveredCol === colIdx} />
                    )}
                  </div>
                  <div className="italic mb-2" style={{ color: 'var(--accent-teal)' }}>
                    {project.tech}
                  </div>
                  <div>
                    {project.description}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
