import React from 'react';
import { Mail, Github, Twitter, Send, Terminal } from 'lucide-react';

/**
 * Contact Component
 * Aesthetic: Transmission Line.
 */
export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-cosmic-void border-t border-white/5 relative">
      {/* Decorative Gradient Blob */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric-blue/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="mb-12 text-center">
           <h2 className="text-3xl font-mono font-bold text-white uppercase tracking-widest">
             Init_Communication
           </h2>
           <p className="text-slate-500 font-mono mt-2">Secure Channel Open</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Info Side */}
            <div className="space-y-8">
              <div className="bg-white/5 border-l-2 border-neon-violet p-6 backdrop-blur-sm">
                <h3 className="text-xl font-mono font-bold text-white mb-4 flex items-center gap-2">
                   <Terminal size={20} className="text-neon-violet" /> DIRECT_LINE
                </h3>
                <p className="text-slate-400 font-light mb-6">
                  Available for architectural consultation, speaking engagements, and high-impact contract work.
                </p>
                
                <a href="mailto:hello@neurodev.ai" className="flex items-center gap-4 text-slate-300 hover:text-neon-violet transition-colors group">
                  <div className="p-3 bg-black/40 border border-white/10 group-hover:border-neon-violet transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="font-mono">hello@neurodev.ai</span>
                </a>
              </div>
              
              <div className="flex gap-4">
                 <SocialLink href="#" icon={<Github size={20} />} label="GitHub" />
                 <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
              </div>
            </div>

            {/* Form Side - Terminal Style */}
            <form className="bg-black/40 p-8 border border-white/10 clip-tech relative shadow-xl" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute top-0 right-0 p-2 text-xs font-mono text-slate-500 bg-white/5 border-l border-b border-white/10">
                 ENCRYPTION: ON
              </div>

              <div className="space-y-6 mt-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-neon-violet uppercase">User_ID</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-deep-space border-b border-white/20 text-white px-4 py-3 focus:outline-none focus:border-neon-violet transition-colors font-mono placeholder-slate-700 focus:bg-white/5"
                    placeholder="ENTER NAME"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-neon-violet uppercase">Return_Path</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-deep-space border-b border-white/20 text-white px-4 py-3 focus:outline-none focus:border-neon-violet transition-colors font-mono placeholder-slate-700 focus:bg-white/5"
                    placeholder="ENTER EMAIL"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono text-neon-violet uppercase">Payload</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-deep-space border-b border-white/20 text-white px-4 py-3 focus:outline-none focus:border-neon-violet transition-colors font-mono placeholder-slate-700 resize-none focus:bg-white/5"
                    placeholder="ENTER MESSAGE DATA..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-neon-violet/10 border border-neon-violet/50 text-white font-mono font-bold uppercase tracking-widest hover:bg-neon-violet hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                >
                  <Send size={16} />
                  Transmit Data
                </button>
              </div>
            </form>

        </div>
      </div>
    </section>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a 
    href={href} 
    aria-label={label}
    className="p-4 bg-white/5 border border-white/10 text-slate-400 hover:text-neon-violet hover:border-neon-violet transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
  >
    {icon}
  </a>
);