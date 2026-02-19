import React, { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

/**
 * Navbar Component
 * Sleek, glass-panel navigation with violet glows.
 */
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'SYSTEMS', href: '#about' },
    { name: 'TRANSMIT', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-deep-space/70 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div className="p-1 border border-neon-violet/50 shadow-[0_0_10px_rgba(168,85,247,0.3)] rounded-sm group-hover:bg-neon-violet/20 transition-all duration-300">
              <Cpu className="text-neon-violet w-6 h-6" />
            </div>
            <a href="#home" className="text-2xl font-mono font-bold text-white tracking-widest group-hover:text-neon-violet transition-colors">
              MATHEMATICIAN<span className="text-slate-500">_DEV</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-6 py-2 text-sm font-mono text-slate-300 hover:text-white transition-all duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                {/* Hover Glow Background */}
                <div className="absolute inset-0 bg-neon-violet/10 skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity border-b border-neon-violet"></div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-300 hover:text-neon-violet focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-cosmic-void border-b border-white/10 backdrop-blur-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-mono font-medium text-slate-300 hover:text-neon-violet hover:bg-white/5 border-l-2 border-transparent hover:border-neon-violet transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};