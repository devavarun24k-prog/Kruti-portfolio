import React from 'react';
import { ArrowUp, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0b0d] text-studio-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          <div className="space-y-1.5">
            <span className="font-serif text-xl font-semibold text-white tracking-wider">
              KRUTI AYACHITULA
            </span>
            <p className="text-xs font-mono text-studio-400 max-w-md font-light">
              Fashion Buying & Merchandising • Retail Operations • Visual Merchandising
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-xs font-mono uppercase tracking-wider">
            <a href="#about" className="hover:text-warm-sand transition-colors">About</a>
            <a href="#pipeline" className="hover:text-warm-sand transition-colors">Concept to Commerce</a>
            <a href="#bear-house" className="hover:text-warm-sand transition-colors">The Bear House</a>
            <a href="#selected-work" className="hover:text-warm-sand transition-colors">Selected Work</a>
            <a href="#experience" className="hover:text-warm-sand transition-colors">Experience</a>
            <a href="#the-edit" className="hover:text-warm-sand transition-colors">The Edit</a>
            <a href="#competencies" className="hover:text-warm-sand transition-colors">Competencies</a>
            <a href="#contact" className="hover:text-warm-sand transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded border border-white/10 text-studio-300 hover:text-white hover:border-warm-accent transition-all"
            title="Return to top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-studio-500 gap-4">
          <div>
            © {new Date().getFullYear()} Kruti Ayachitula. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${personal.email}`} className="hover:text-warm-sand transition-colors">
              {personal.email}
            </a>
            <span>•</span>
            <a href={personal.behance} target="_blank" rel="noreferrer" className="hover:text-warm-sand transition-colors">
              Behance
            </a>
            <span>•</span>
            <a href={personal.resumePdf} download className="hover:text-warm-sand transition-colors">
              Download CV (PDF)
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
