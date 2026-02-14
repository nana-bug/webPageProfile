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
 * Background: Deep space violet with subtle glowing nebula effects.
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-deep-space relative overflow-x-hidden">
      {/* Background Dots */}
      <div className="fixed inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-20 pointer-events-none z-0"></div>
      
      {/* Ambient Glows - Purple/Blue */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-neon-violet/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

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