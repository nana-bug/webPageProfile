import React from 'react';
import { ArrowDown, Terminal, Command } from 'lucide-react';

/**
 * Hero Component
 * 
 * Aesthetic: Senior Technical Leader / Digital Chrome.
 * Visuals: Chrome text gradients, neon violet accents, server-room atmosphere.
 */
export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b border-white/5"
    >
      {/* Chrome Glow Behind Headings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-neon-violet/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 text-xs font-mono tracking-[0.2em] text-neon-violet uppercase backdrop-blur-md rounded-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-violet opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-violet"></span>
          </span>
          System Online // v4.0.2
        </div>
        
        {/* Main Title with Chrome Gradient */}
        <h1 className="text-6xl md:text-8xl font-mono font-bold tracking-tighter uppercase leading-none">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            AI
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet via-fuchsia-400 to-electric-blue drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            Architect
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto pl-6 border-l border-neon-violet/50 text-left">
          Designing the neural fabric of tomorrow. Converting raw entropy into 
          <span className="text-white font-medium"> autonomous workflows</span>. 
          Expertise in <span className="text-white font-medium">Scale Inference</span> & <span className="text-white font-medium">Generative Systems</span>.
        </p>

        {/* Action Grid */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <a 
            href="#contact" 
            className="group relative px-8 py-4 bg-neon-violet text-white font-mono font-bold uppercase tracking-widest hover:bg-fuchsia-500 transition-all duration-300 clip-tech shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative flex items-center gap-2">
              <Terminal size={18} /> Initiate Sequence
            </span>
          </a>
          
          <a 
            href="#about" 
            className="px-8 py-4 border border-white/20 text-slate-300 font-mono font-bold uppercase tracking-widest hover:border-neon-violet hover:text-white hover:bg-neon-violet/10 transition-all clip-tech flex items-center gap-2"
          >
            <Command size={18} /> Access Logs
          </a>
        </div>
      </div>

      {/* Footer Hud Elements */}
      <div className="absolute bottom-0 w-full flex justify-between px-8 py-6 text-xs font-mono text-slate-500 border-t border-white/5">
        <span className="flex items-center gap-2">
           <div className="w-1 h-1 bg-electric-blue rounded-full"></div> 
           LOC: 34.0522° N, 118.2437° W
        </span>
        <a href="#about" className="animate-pulse-slow hover:text-neon-violet transition-colors">SCROLL_DOWN_</a>
        <span>MEM: 64GB / 128GB</span>
      </div>
    </section>
  );
};