import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-luxury-950 text-luxury-400 py-16 border-t border-luxury-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-luxury-900">
          
          {/* Logo & Headline */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 rounded-full border border-champagne/40 bg-luxury-900 flex items-center justify-center text-champagne font-serif text-sm font-bold">
                K
              </div>
              <span className="font-serif text-xl font-semibold text-white tracking-wider">
                KRUTI AYACHITULA
              </span>
            </div>
            <p className="text-xs text-luxury-400 max-w-md font-light">
              MBA in Fashion Lifestyle Business Management • Fashion Designer • Retail & Visual Merchandising Strategist
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono uppercase tracking-wider">
            <a href="#about" className="hover:text-champagne transition-colors">About</a>
            <a href="#experience" className="hover:text-champagne transition-colors">Experience</a>
            <a href="#projects" className="hover:text-champagne transition-colors">Case Studies</a>
            <a href="#skills" className="hover:text-champagne transition-colors">Competencies</a>
            <a href="#lookbook" className="hover:text-champagne transition-colors">Lookbook</a>
            <a href="#contact" className="hover:text-champagne transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-luxury-900 border border-luxury-800 text-luxury-300 hover:text-white hover:border-champagne hover:scale-110 transition-all group"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-luxury-500 gap-4">
          <div>
            © {new Date().getFullYear()} Kruti Ayachitula. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href={personal.behance} target="_blank" rel="noreferrer" className="hover:text-champagne transition-colors">
              Behance
            </a>
            <span>•</span>
            <a href={`mailto:${personal.email}`} className="hover:text-champagne transition-colors">
              Direct Inquiries
            </a>
            <span>•</span>
            <a href={personal.resumePdf} download className="hover:text-champagne transition-colors">
              Curriculum Vitae
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
