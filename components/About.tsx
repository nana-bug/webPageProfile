import React, { useState } from 'react';
import { Database, Brain, Cpu, X, ChevronRight, CheckSquare, Activity } from 'lucide-react';

/**
 * About Component
 * 
 * Aesthetic: Cyber-Palace.
 * Glassmorphism, deep violets, sharp edges.
 */
export const About: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories: Record<string, { title: string; subtitle: string; content: React.ReactNode }> = {
    'Machine Learning': {
      title: 'ML_PIPELINE_ARCHITECTURE',
      subtitle: 'Migration & Optimization Protocols',
      content: (
        <ul className="space-y-6 font-light text-slate-300">
          <li className="flex gap-4 items-start group">
            <CheckSquare className="flex-shrink-0 text-neon-violet mt-1 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" size={20} />
            <span>
              Orchestrated full migration of model training pipelines from <strong className="text-white">AWS Sagemaker</strong> to <strong className="text-white">Azure ML</strong>. Designed automated CI/CD for daily retraining of hyperparameters.
            </span>
          </li>
          <li className="flex gap-4 items-start group">
            <CheckSquare className="flex-shrink-0 text-neon-violet mt-1 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" size={20} />
            <span>
              Engineered a centralized Model Registry & Evaluation System, ensuring 99.9% availability for inference endpoints.
            </span>
          </li>
          <li className="flex gap-4 items-start group">
            <CheckSquare className="flex-shrink-0 text-neon-violet mt-1 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" size={20} />
            <span>
              Achieved <strong className="text-neon-violet">67% improvement</strong> in forecasting accuracy (MAE) via implementation of Transformer-based time-series models.
            </span>
          </li>
        </ul>
      )
    },
    'Big Data': {
      title: 'DATA_INFRASTRUCTURE_CORE',
      subtitle: 'High-Throughput Engineering',
      content: (
        <ul className="space-y-6 font-light text-slate-300">
          <li className="flex gap-4 items-start group">
            <CheckSquare className="flex-shrink-0 text-neon-violet mt-1 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" size={20} />
            <span>
              Architected real-time ingestion layer using <strong className="text-white">Kafka</strong> and <strong className="text-white">Spark Streaming</strong>, processing 4TB+ daily telemetry data.
            </span>
          </li>
          <li className="flex gap-4 items-start group">
            <CheckSquare className="flex-shrink-0 text-neon-violet mt-1 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" size={20} />
            <span>
              Optimized <strong className="text-white">Snowflake</strong> warehousing strategy, reducing query latency by 40% and cutting infrastructure costs by 25%.
            </span>
          </li>
          <li className="flex gap-4 items-start group">
            <CheckSquare className="flex-shrink-0 text-neon-violet mt-1 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" size={20} />
            <span>
              Deployed 'Great Expectations' framework for automated data quality gates in production pipelines.
            </span>
          </li>
        </ul>
      )
    },
    'Agent Ops': {
      title: 'AUTONOMOUS_AGENTS_NET',
      subtitle: 'LLM Orchestration & Tooling',
      content: (
        <ul className="space-y-6 font-light text-slate-300">
          <li className="flex gap-4 items-start group">
            <CheckSquare className="flex-shrink-0 text-neon-violet mt-1 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" size={20} />
            <span>
              Developed multi-agent swarms using <strong className="text-white">LangChain</strong> to automate L2 support tickets, reducing human triage load by 50%.
            </span>
          </li>
          <li className="flex gap-4 items-start group">
            <CheckSquare className="flex-shrink-0 text-neon-violet mt-1 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" size={20} />
            <span>
              Implemented secure "Function Calling" layer allowing LLMs to execute read/write operations on internal SQL databases.
            </span>
          </li>
          <li className="flex gap-4 items-start group">
            <CheckSquare className="flex-shrink-0 text-neon-violet mt-1 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" size={20} />
            <span>
              Integrated <strong className="text-white">LangSmith</strong> observability for full trace-backs of agent reasoning chains in production.
            </span>
          </li>
        </ul>
      )
    }
  };

  return (
    <section id="about" className="py-24 px-4 bg-deep-space relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-end gap-4 mb-16 border-b border-white/10 pb-4">
          <Activity className="text-neon-violet mb-1" />
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white tracking-widest uppercase">
            System_Architecture
          </h2>
          <span className="text-slate-500 font-mono text-sm ml-auto hidden md:inline-block">STATUS: OPERATIONAL</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Visual Side */}
          <div className="w-full lg:w-1/3 flex flex-col justify-start">
            <div className="relative group border border-white/10 bg-white/5 p-2 clip-tech">
              {/* Image Overlay Effect - Purple Glitch */}
              <div className="absolute inset-0 bg-neon-violet/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none mix-blend-color-dodge"></div>

              <img
                src="https://picsum.photos/600/600?grayscale"
                alt="Profile"
                className="w-full aspect-square object-cover opacity-90 group-hover:opacity-100 transition-opacity filter contrast-125 grayscale group-hover:grayscale-0"
              />

              {/* HUD Elements overlay */}
              <div className="absolute top-4 left-4 border-l-2 border-t-2 border-neon-violet w-8 h-8 opacity-70"></div>
              <div className="absolute bottom-4 right-4 border-r-2 border-b-2 border-electric-blue w-8 h-8 opacity-70"></div>
            </div>

            <div className="mt-8 space-y-4 font-mono text-sm text-slate-400">
              <p><span className="text-neon-violet">ID:</span> ILCE MEDINA</p>
              <p><span className="text-neon-violet">ROLE:</span> AGENTIC AI ENGINEER</p>
              <p><span className="text-neon-violet">FOCUS:</span> AI APPLICATIONS WITH EFFICIENT INFRASTRUCTURE AND RELIABLE SOLUTIONS</p>
            </div>
          </div>

          {/* Modules Side */}
          <div className="w-full lg:w-2/3">
            <div className="mb-8">
              <p className="text-xl text-slate-300 font-light leading-relaxed">
                Specializing in the convergence of <span className="text-white border-b border-neon-violet/50">deterministic infrastructure</span> and <span className="text-white border-b border-electric-blue/50">probabilistic reasoning</span>. I build rigorous systems to make AI reliable.
              </p>
            </div>

            {/* Interactive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ModuleCard
                icon={<Brain className="text-neon-violet" size={32} />}
                label="MACHINE_LEARNING"
                sub="Pipeline Ops"
                onClick={() => setActiveCategory('Machine Learning')}
              />
              <ModuleCard
                icon={<Database className="text-electric-blue" size={32} />}
                label="BIG_DATA"
                sub="Distributed Systems"
                onClick={() => setActiveCategory('Big Data')}
              />
              <ModuleCard
                icon={<Cpu className="text-fuchsia-500" size={32} />}
                label="AGENT_OPS"
                sub="Autonomous Swarms"
                onClick={() => setActiveCategory('Agent Ops')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tech Modal */}
      {activeCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-deep-space/90 backdrop-blur-md"
            onClick={() => setActiveCategory(null)}
          ></div>

          <div className="relative w-full max-w-3xl bg-cosmic-void border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.2)] clip-tech">
            {/* Modal Header */}
            <div className="flex justify-between items-center bg-white/5 p-6 border-b border-white/10">
              <div>
                <h3 className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-electric-blue uppercase tracking-widest">
                  {categories[activeCategory].title}
                </h3>
                <p className="text-slate-500 font-mono text-sm">
                     // {categories[activeCategory].subtitle}
                </p>
              </div>
              <button
                onClick={() => setActiveCategory(null)}
                className="p-2 text-slate-500 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 bg-gradient-to-b from-transparent to-neon-violet/5">
              {categories[activeCategory].content}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-black/40 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveCategory(null)}
                className="flex items-center gap-2 px-6 py-2 bg-white/5 hover:bg-neon-violet hover:text-white text-slate-300 font-mono text-sm uppercase transition-colors"
              >
                Close Terminal <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

interface ModuleCardProps {
  icon: React.ReactNode;
  label: string;
  sub: string;
  onClick: () => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ icon, label, sub, onClick }) => (
  <button
    onClick={onClick}
    className="group relative bg-cosmic-void border border-white/10 p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-neon-violet/50 transition-all duration-300 overflow-hidden clip-tech hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
  >
    {/* Scan line effect on hover */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-violet/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700"></div>

    <div className="p-4 bg-white/5 border border-white/10 group-hover:border-neon-violet group-hover:text-neon-violet transition-colors rounded-sm">
      {icon}
    </div>
    <div>
      <h4 className="font-mono font-bold text-white text-lg tracking-wider group-hover:text-neon-violet transition-colors">{label}</h4>
      <p className="text-slate-500 text-xs font-mono uppercase mt-1">{sub}</p>
    </div>
  </button>
);