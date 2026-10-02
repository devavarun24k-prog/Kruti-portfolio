import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ['about', 'pipeline', 'bear-house', 'selected-work', 'experience', 'the-edit', 'competencies', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 180) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Concept to Commerce', href: '#pipeline' },
    { name: 'The Bear House', href: '#bear-house' },
    { name: 'Selected Work', href: '#selected-work' },
    { name: 'Experience', href: '#experience' },
    { name: 'The Edit', href: '#the-edit' },
    { name: 'Competencies', href: '#competencies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0e0e10]/95 backdrop-blur-md py-3.5 border-b border-white/10' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#hero" className="flex items-baseline gap-2.5 group">
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-white group-hover:text-warm-accent transition-colors">
            KRUTI A.
          </span>
          <span className="hidden md:inline-block text-[11px] font-mono tracking-widest text-studio-400 uppercase border-l border-white/10 pl-2.5">
            Buying & Merchandising
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-mono tracking-wider uppercase transition-colors duration-200 ${
                  isActive
                    ? 'text-warm-accent font-semibold border-b border-warm-accent pb-0.5'
                    : 'text-studio-400 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action: Download CV */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={portfolioData.personal.resumePdf}
            download="Kruti_A_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded border border-white/20 text-white hover:border-warm-accent hover:text-warm-accent hover:bg-white/[0.02] transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded text-studio-300 hover:text-white border border-white/10"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0e10] border-b border-white/10 px-6 py-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono uppercase tracking-wider py-2 text-studio-300 hover:text-warm-accent transition-colors border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3">
            <a
              href={portfolioData.personal.resumePdf}
              download="Kruti_A_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded border border-warm-accent text-warm-accent text-xs font-mono uppercase tracking-wider"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
