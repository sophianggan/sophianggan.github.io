import { ScrambleText } from '@/components/ScrambleText';
import { HoverScrambleText } from '@/components/HoverScrambleText';
import { useState } from 'react';

const Timeline = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-white font-mono p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Timeline Visual */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-12 mb-8">
          <div className="flex justify-center items-center gap-2">
            <div className={`border-2 border-white rounded-full transition-all ${hoveredSection === 'past' ? 'bg-white w-4 h-4' : 'bg-transparent w-3 h-3'}`}></div>
            <div className="flex-1 h-0.5 bg-white"></div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="flex-1 h-0.5 bg-white"></div>
            <div className={`border-2 border-white rounded-full transition-all ${hoveredSection === 'projects' ? 'bg-white w-4 h-4' : 'bg-transparent w-3 h-3'}`}></div>
            <div className="flex-1 h-0.5 bg-white"></div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="flex-1 h-0.5 bg-white"></div>
            <div className={`border-2 border-white rounded-full transition-all ${hoveredSection === 'currently' ? 'bg-white w-4 h-4' : 'bg-transparent w-3 h-3'}`}></div>
            <div className="flex-1 h-0.5 bg-white"></div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="flex-1 h-0.5 bg-white"></div>
            <div className={`border-2 border-white rounded-full transition-all ${hoveredSection === 'skills' ? 'bg-white w-4 h-4' : 'bg-transparent w-3 h-3'}`}></div>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-12">
          {/* PREVIOUSLY Column */}
          <section 
            onMouseEnter={() => setHoveredSection('past')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h2 className="text-xs uppercase tracking-wider mb-8 font-bold">
              <span style={{ color: 'var(--accent-mint)' }}>
                <ScrambleText text="PREVIOUSLY" delay={200} />
              </span>
            </h2>
            
            <div className="space-y-8 text-xs text-white leading-relaxed">
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-white mr-2"><ScrambleText text="01" delay={300} /></span>
                  <span className="ml-auto text-white/70">jun 2022 - feb 2023</span>
                </div>
                <div className="font-semibold mb-1">
                  <HoverScrambleText text="workflow optimization coordinator" shouldScramble={hoveredSection === 'past'} />
                </div>
                <div className="text-white/70 italic mb-2">
                  restaurant buffet mandarin & hotel el doral
                </div>
                <div>
                  forecasted daily demand to keep occupancy &gt;80% and reconciled $4m annual transactions with zero variances. redesigned check-in and seating workflows to cut wait times 25% while sustaining 94% guest satisfaction. managed 30+ daily requests, increased upsell rate by 15%, and eliminated no-show write-offs for 6 months. built weekly KPI dashboards (occupancy, RevPASH) and trained new staff, reducing overtime costs 12%.
                </div>
              </div>
              
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-white mr-2"><ScrambleText text="02" delay={400} /></span>
                  <span className="ml-auto text-white/70">jun 2021 - jul 2024</span>
                </div>
                <div className="font-semibold mb-1">
                  <HoverScrambleText text="peruvian team captain & assistant coach" shouldScramble={hoveredSection === 'past'} />
                </div>
                <div className="text-white/70 italic mb-2">
                  peruvian national swimming team
                </div>
                <div>
                  captained and mentored 80+ athletes to a south american athletic conference title and 100+ record-breaking finishes. competed at the junior world championships, contributing to a 7th place relay and multiple top 5 finishes. contributed to peru's 3rd place at copa pacifico and set lasting national records.
                </div>
              </div>
            </div>
          </section>

          {/* RECENTLY WORKED ON Column */}
          <section 
            onMouseEnter={() => setHoveredSection('projects')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h2 className="text-xs uppercase tracking-wider mb-8 font-bold">
              <span style={{ color: 'var(--accent-mint)' }}>
                <ScrambleText text="RECENTLY WORKED ON..." delay={250} />
              </span>
            </h2>
            
            <div className="space-y-8 text-xs text-white leading-relaxed">
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-white mr-2"><ScrambleText text="01" delay={500} /></span>
                  <span className="ml-auto text-white/70">feb 2026</span>
                </div>
                <div className="font-semibold mb-1">
                  <HoverScrambleText text="olympic medal predictor" shouldScramble={hoveredSection === 'projects'} />
                </div>
                <div className="italic mb-2" style={{ color: 'var(--accent-teal)' }}>
                  Neo4j, PyTorch Geometric, hetero-GNN (GraphSAGE + GATv2), SBERT, LangGraph
                </div>
                <div>
                  built a leakage-safe olympic medal ranking system using time-sliced Neo4j snapshots; trained a hetero-GNN model, engineered graph features to predict next-games medalists, handled imbalance with hard negatives, and shipped an end-to-end CI/CD pipeline.
                </div>
              </div>
              
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-white mr-2"><ScrambleText text="02" delay={600} /></span>
                  <span className="ml-auto text-white/70">jan 2026</span>
                </div>
                <div className="font-semibold mb-1">
                  <HoverScrambleText text="wordle & connections solver" shouldScramble={hoveredSection === 'projects'} />
                </div>
                <div className="italic mb-2" style={{ color: 'var(--accent-teal)' }}>
                  C++, SIMD (Highway), CMake, WebAssembly (Emscripten), PCA, CI
                </div>
                <div>
                  built a high-performance wordle + connections solver using shannon-entropy search and PCA clustering; accelerated scoring with SIMD (Highway) and fixed-block memory pooling, shipped a WebAssembly demo, and added CI with sanitizer-backed tests, proofs, and detailed benchmarks.
                </div>
              </div>
              
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-white mr-2"><ScrambleText text="03" delay={700} /></span>
                  <span className="ml-auto text-white/70">nov 2025</span>
                </div>
                <div className="font-semibold mb-1">
                  <HoverScrambleText text="news-driven stock analysis" shouldScramble={hoveredSection === 'projects'} />
                </div>
                <div className="italic mb-2" style={{ color: 'var(--accent-teal)' }}>
                  FastAPI, Streamlit, Postgres, spaCy, PyVis, scikit-learn, PySpark, Docker, CI
                </div>
                <div>
                  built a news-to-graph analytics pipeline: extracted company entities from Google News, canonicalized to tickers/sectors, generated multi-hop co-mention graphs, and served interactive network views (Streamlit/PyVis) + JSON APIs (FastAPI); computed influence (PageRank) and weekly sector metrics from Postgres-backed headlines.
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-white mr-2"><ScrambleText text="04" delay={800} /></span>
                  <span className="ml-auto text-white/70">oct 2025</span>
                </div>
                <div className="font-semibold mb-1">
                  <HoverScrambleText text="multimodal RAG study assistant (virtual TA)" shouldScramble={hoveredSection === 'projects'} />
                </div>
                <div className="italic mb-2" style={{ color: 'var(--accent-teal)' }}>
                  Python, LangChain, Pinecone, Groq batching, OCR, ETL
                </div>
                <div>
                  built a multimodal study assistant: indexed PDF chunks in Pinecone for semantic retrieval, automated batched Groq-based OCR with cleaning, chunking, and embedding with a 72-hour refresh ETL, and served grounded Q&A via LangChain and Groq with Microsoft claimification guardrails.
                </div>
              </div>
            </div>
          </section>

          {/* CURRENTLY Column */}
          <section 
            onMouseEnter={() => setHoveredSection('currently')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h2 className="text-xs uppercase tracking-wider mb-8 font-bold">
              <span style={{ color: 'var(--accent-mint)' }}>
                <ScrambleText text="CURRENTLY" delay={100} />
              </span>
            </h2>
            
            <div className="space-y-8 text-xs text-white leading-relaxed">
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-white mr-2"><ScrambleText text="01" delay={300} /></span>
                  <span className="ml-auto text-white/70">sept 2024 - present</span>
                </div>
                <div className="font-semibold mb-1">
                  <HoverScrambleText text="associate IT operations advisor & data analyst" shouldScramble={hoveredSection === 'currently'} />
                </div>
                <div className="text-white/70 italic mb-2">
                  Scotiabank IT help desk, University of Toronto Information Commons
                </div>
                <div>
                  automated identity lifecycle workflows for 5k+ Azure accounts using Python APIs, cut processing time by 80%. queried ticket data with SQL and built Power BI dashboards to track SLA risk and trends across 50+ daily cases. designed rule-based triage automation in ServiceNow, reducing mean-TOR by 45% through AI routing. built log-ingestion pipeline centralizing M365/Azure audit data for analytics, anomaly tracing, & compliance.
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS Column */}
          <section 
            onMouseEnter={() => setHoveredSection('skills')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h2 className="text-xs uppercase tracking-wider mb-8 font-bold">
              <span style={{ color: 'var(--accent-mint)' }}>
                <ScrambleText text="SKILLS" delay={350} />
              </span>
            </h2>
            
            <div className="space-y-6 text-xs text-white leading-relaxed">
              <div>
                <div className="font-semibold mb-2">
                  <HoverScrambleText text="programming" shouldScramble={hoveredSection === 'skills'} />
                </div>
                <div className="text-white/70">
                  Python, SQL, C++
                </div>
              </div>

              <div>
                <div className="font-semibold mb-2">
                  <HoverScrambleText text="frameworks & libraries" shouldScramble={hoveredSection === 'skills'} />
                </div>
                <div className="text-white/70">
                  pandas, PyTorch, NumPy, scikit-learn, statsmodels, XGBoost, LightGBM, CatBoost, spaCy, LangChain, LangGraph, RAG, recursive language models (RLMs)
                </div>
              </div>

              <div>
                <div className="font-semibold mb-2">
                  <HoverScrambleText text="data & infra" shouldScramble={hoveredSection === 'skills'} />
                </div>
                <div className="text-white/70">
                  PySpark, Airflow, SQLAlchemy, ETL, batch processing, data warehousing, FastAPI, FastMCP, REST, Docker, CI/CD, Git
                </div>
              </div>

              <div>
                <div className="font-semibold mb-2">
                  <HoverScrambleText text="databases" shouldScramble={hoveredSection === 'skills'} />
                </div>
                <div className="text-white/70">
                  PostgreSQL, Neo4j, Pinecone
                </div>
              </div>

              <div>
                <div className="font-semibold mb-2">
                  <HoverScrambleText text="financial & analytics" shouldScramble={hoveredSection === 'skills'} />
                </div>
                <div className="text-white/70">
                  advanced Excel (PivotTables, XLOOKUP, Power Query), Tableau, Power BI, variance analysis, forecasting
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
