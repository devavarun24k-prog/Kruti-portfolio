import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      
      const sections = ['about', 'experience', 'projects', 'skills', 'lookbook', 'contact'];
      const scrollPos = window.scrollY + 200;

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
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Case Studies', href: '#projects' },
    { name: 'Competencies', href: '#skills' },
    { name: 'Lookbook', href: '#lookbook' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#08080a]/90 backdrop-blur-md py-3.5 border-b border-luxury-800/80 shadow-2xl shadow-black/50' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-champagne/40 bg-luxury-900/80 flex items-center justify-center text-champagne font-serif text-xl font-bold tracking-widest group-hover:border-champagne group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            K
          </div>
          <div>
            <span className="font-serif text-xl font-semibold tracking-wider text-white group-hover:text-champagne transition-colors">
              KRUTI A.
            </span>
            <span className="hidden sm:block text-[10px] tracking-[0.2em] uppercase text-luxury-400 font-mono">
              Fashion Strategist & VM
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-luxury-900/60 p-1.5 rounded-full border border-luxury-800/70 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-champagne text-luxury-950 font-semibold shadow-md shadow-champagne/20'
                    : 'text-luxury-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* CTA & Resume Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={portfolioData.personal.resumePdf}
            download="Kruti_A_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border border-champagne/40 text-champagne bg-champagne/5 hover:bg-champagne hover:text-luxury-950 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
          
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-white text-luxury-950 hover:bg-champagne transition-all duration-300 shadow-md hover:shadow-champagne/20"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-luxury-900 border border-luxury-800 text-luxury-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-luxury-950/98 border-b border-luxury-800/80 px-6 py-6 space-y-4 backdrop-blur-xl animate-fade-in">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm uppercase tracking-wider text-luxury-200 hover:text-champagne hover:bg-luxury-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-luxury-800 flex flex-col gap-3">
            <a
              href={portfolioData.personal.resumePdf}
              download="Kruti_A_Resume.pdf"
              className="flex items-center justify-center gap-2 py-3 rounded-lg border border-champagne text-champagne text-xs font-semibold uppercase tracking-wider"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-champagne text-luxury-950 text-xs font-semibold uppercase tracking-wider"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
