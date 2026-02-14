import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-slate-600 font-mono text-xs bg-deep-space border-t border-white/5">
      <p>NEURO_DEV SYSTEMS © {new Date().getFullYear()} // ALL RIGHTS RESERVED</p>
    </footer>
  );
};