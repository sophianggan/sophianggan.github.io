import { ScrambleText } from '@/components/ScrambleText';
import { HoverScrambleText } from '@/components/HoverScrambleText';
import { useState } from 'react';

const Timeline = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-white font-mono p-8 pt-32 md:p-16 md:pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Timeline Visual */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-12 mb-8">
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
            <div className={`border-2 border-white rounded-full transition-all ${hoveredSection === 'offers' ? 'bg-white w-4 h-4' : 'bg-transparent w-3 h-3'}`}></div>
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
              <span style={{ color: '#7FFFD4' }}>
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
                  <HoverScrambleText text="client relations & operations coordinator" shouldScramble={hoveredSection === 'past'} />
                </div>
                <div className="text-white/70 italic mb-2">
                  restaurant buffet mandarin & hotel el doral
                </div>
                <div>
                  built forecasting models in excel/python using seasonality to sustain &gt;80% occupancy and optimize staffing. designed time-series kpis (revpash, adr, occupancy) in power bi and ran variance analysis on $4m transactions. automated reconciliation via sql/vba pipelines and detected outliers using iqr thresholds and control charts.
                </div>
              </div>
              
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-white mr-2"><ScrambleText text="02" delay={400} /></span>
                  <span className="ml-auto text-white/70">jun 2021 - jul 2024</span>
                </div>
                <div className="font-semibold mb-1">
                  <HoverScrambleText text="assistant coach, team captain, national swimmer" shouldScramble={hoveredSection === 'past'} />
                </div>
                <div className="text-white/70 italic mb-2">
                  peruvian national swimming team
                </div>
                <div>
                  built regression models on split-time data to optimize taper cycles and improve performance yield. directed 80+ athletes to a south american title and top-5 finishes at world juniors and international meets. developed z-score models to forecast variance shifts and prevent performance degradation or injury across 100+ records.
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS Column */}
          <section 
            onMouseEnter={() => setHoveredSection('projects')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h2 className="text-xs uppercase tracking-wider mb-8 font-bold">
              <span style={{ color: '#7FFFD4' }}>
                <ScrambleText text="PROJECTS" delay={250} />
              </span>
            </h2>
            
            <div className="space-y-8 text-xs text-white leading-relaxed">
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-white mr-2"><ScrambleText text="01" delay={500} /></span>
                  <span className="ml-auto text-white/70">dec 2025</span>
                </div>
                <div className="font-semibold mb-1">
                  <HoverScrambleText text="ecogrid - carbon-aware gpu scheduler" shouldScramble={hoveredSection === 'projects'} />
                </div>
                <div className="italic mb-2" style={{ color: '#AFEEEE' }}>
                  fastapi, rapids (cudf), docker
                </div>
                <div>
                  developed middleware optimizing gpu scheduling via real-time carbon intensity to mitigate operational volatility. engineered a fastapi microservice leveraging rapids (cudf) for gpu-accelerated analysis of optimal training windows. containerized using docker for cloud-agnostic portability across distributed clusters, meeting ai scalability standards. enhanced efficiency by automating energy-aware workload timing, bridging hpc requirements with sustainability.
                </div>
              </div>
              
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-white mr-2"><ScrambleText text="02" delay={600} /></span>
                  <span className="ml-auto text-white/70">oct 2025</span>
                </div>
                <div className="font-semibold mb-1">
                  <HoverScrambleText text="alphaxplore" shouldScramble={hoveredSection === 'projects'} />
                </div>
                <div className="italic mb-2" style={{ color: '#AFEEEE' }}>
                  python, streamlit, click, sqlalchemy, scikit-learn, docker, ci/cd
                </div>
                <div>
                  designed registry-driven fastapi & sqlalchemy backend merging market, macro, and alt datasets for factor analyses. built composable featurebuilder & modelmanager modules running scikit-learn models with artifact tracking logs. built modular backtesting engine computing cagr, sharpe, & drawdowns; deployed via docker with ci/cd builds.
                </div>
              </div>
              
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-white mr-2"><ScrambleText text="03" delay={700} /></span>
                  <span className="ml-auto text-white/70">july 2025</span>
                </div>
                <div className="font-semibold mb-1">
                  <HoverScrambleText text="stock newsgraph" shouldScramble={hoveredSection === 'projects'} />
                </div>
                <div className="italic mb-2" style={{ color: '#AFEEEE' }}>
                  python, streamlit, spacy, pyvis, fastapi, docker, networkx
                </div>
                <div>
                  built interactive streamlit + pyvis interface generating multi-hop company graphs from google news rss feeds. applied spacy ner & networkx/pagerank to extract, rank co-mentioned firms; map names via canonical utility. deployed fastapi + streamlit services inside docker container with .env keys & lightweight rest endpoints.
                </div>
              </div>
              
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-white mr-2"><ScrambleText text="04" delay={800} /></span>
                  <span className="ml-auto text-white/70">feb 2025</span>
                </div>
                <div className="font-semibold mb-1">
                  <HoverScrambleText text="rag-ta assistant" shouldScramble={hoveredSection === 'projects'} />
                </div>
                <div className="italic mb-2" style={{ color: '#AFEEEE' }}>
                  langchain, groq llama 3.3 8b, pinecone, python etl, prompt tuning
                </div>
                <div>
                  designed a cost-efficient rag system combining groq-accelerated llm inference with pinecone vector retrieval. automated daily etl to clean, classify, and embed 50k+ academic data points with structured metadata. implemented prompt-tuned ranking and telemetry to monitor retrieval precision, latency, and model drift.
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
              <span style={{ color: '#7FFFD4' }}>
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
                  <HoverScrambleText text="technology, risk & client-support analyst" shouldScramble={hoveredSection === 'currently'} />
                </div>
                <div className="text-white/70 italic mb-2">
                  scotiabank it help desk, university of toronto information commons
                </div>
                <div>
                  analyzed 5k+ entra id accounts using azure graph scripts to verify mfa and assess access risk with 0% exceptions. built python/sql ticket analytics from servicenow data; used regression and clustering to cut median ttr by 45%. created sla dashboards for fcr, p1 latency, and backlog trends; a/b-tested kb updates to reach 97% fcr.
                </div>
              </div>
            </div>
          </section>

          {/* OFFERS Column */}
          <section 
            onMouseEnter={() => setHoveredSection('offers')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h2 className="text-xs uppercase tracking-wider mb-8 font-bold">
              <span style={{ color: '#7FFFD4' }}>
                <ScrambleText text="OFFERS" delay={350} />
              </span>
            </h2>
            
            <div className="space-y-8 text-xs text-white leading-relaxed">
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-white mr-2"><ScrambleText text="01" delay={400} /></span>
                  <span className="ml-auto text-white/70">may 2026 - aug 2026</span>
                </div>
                <div className="font-semibold mb-1">
                  <HoverScrambleText text="sales + data analyst intern" shouldScramble={hoveredSection === 'offers'} />
                </div>
                <div className="text-white/70 italic">
                  procter & gamble (p&g)
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
