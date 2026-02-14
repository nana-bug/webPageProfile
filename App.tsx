import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

/**
 * App Component
 * 
 * Aesthetic: Cyber-Vogue.
 * Background: Deep space violet with subtle glowing nebula effects and constellations.
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-deep-space relative overflow-x-hidden">
      {/* Background Dots */}
      <div className="fixed inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-20 pointer-events-none z-0"></div>
      
      {/* Ambient Glows - Purple/Blue */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-neon-violet/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Constellation: Cassiopeia Style (Top Right) */}
      <div className="fixed top-24 right-8 md:right-24 pointer-events-none z-0 opacity-70 mix-blend-screen">
        <svg width="200" height="120" viewBox="0 0 200 120" className="drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]">
           <path 
             d="M20,30 L65,80 L100,40 L145,70 L180,20" 
             fill="none" 
             stroke="rgba(255,255,255,0.15)" 
             strokeWidth="1"
           />
           <circle cx="20" cy="30" r="2" fill="white" className="animate-[pulse_3s_ease-in-out_infinite]" />
           <circle cx="65" cy="80" r="2" fill="white" className="animate-[pulse_5s_ease-in-out_infinite]" />
           <circle cx="100" cy="40" r="2.5" fill="white" className="animate-[pulse_4s_ease-in-out_infinite]" />
           <circle cx="145" cy="70" r="2" fill="white" className="animate-[pulse_3.5s_ease-in-out_infinite]" />
           <circle cx="180" cy="20" r="3" fill="white" className="animate-[pulse_6s_ease-in-out_infinite]" />
        </svg>
      </div>

      {/* Constellation: Orion Style (Top Left) */}
      <div className="fixed top-32 left-8 md:left-24 pointer-events-none z-0 opacity-60 mix-blend-screen hidden sm:block">
        <svg width="100" height="140" viewBox="0 0 100 140" className="drop-shadow-[0_0_2px_rgba(255,255,255,0.6)]">
           {/* Orion structure */}
           <path 
             d="M20,20 L40,65 L20,120 M80,20 L60,65 L80,120 M40,65 L60,65" 
             fill="none" 
             stroke="rgba(255,255,255,0.1)" 
             strokeWidth="1"
           />
           {/* Betelgeuse (Red/Orange hint) */}
           <circle cx="20" cy="20" r="2.5" fill="#fecaca" className="animate-[pulse_4s_ease-in-out_infinite]" />
           {/* Bellatrix */}
           <circle cx="80" cy="20" r="2" fill="white" className="animate-[pulse_5s_ease-in-out_infinite]" />
           
           {/* Belt */}
           <circle cx="40" cy="65" r="1.5" fill="white" />
           <circle cx="50" cy="65" r="1.5" fill="white" />
           <circle cx="60" cy="65" r="1.5" fill="white" />

           {/* Saiph */}
           <circle cx="20" cy="120" r="2" fill="white" className="animate-[pulse_6s_ease-in-out_infinite]" />
           {/* Rigel (Blue hint) */}
           <circle cx="80" cy="120" r="3" fill="#bfdbfe" className="animate-[pulse_3s_ease-in-out_infinite]" />
        </svg>
      </div>

      {/* Math Constant: Pi */}
      <div className="fixed bottom-20 left-4 md:left-16 pointer-events-none z-0 opacity-10 font-mono text-neon-violet text-6xl md:text-8xl font-bold select-none blur-[2px]">
        π
      </div>
      <div className="fixed bottom-24 left-16 md:left-32 pointer-events-none z-0 opacity-30 font-mono text-neon-violet text-xs tracking-[0.5em] select-none">
        3.1415926535...
      </div>

      {/* Math Constant: Euler's Number */}
      <div className="fixed top-1/2 right-4 md:right-16 pointer-events-none z-0 opacity-10 font-mono text-electric-blue text-6xl md:text-8xl font-bold select-none blur-[2px]">
        e
      </div>
      <div className="fixed top-[55%] right-8 md:right-24 pointer-events-none z-0 opacity-30 font-mono text-electric-blue text-xs tracking-[0.5em] select-none rotate-90 origin-right">
        2.7182818284...
      </div>

      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <About />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;