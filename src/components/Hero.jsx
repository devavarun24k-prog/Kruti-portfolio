import React from 'react';
import { ArrowDown, Sparkles, Download, Eye, Layers, Compass, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Editorial Luxury Ambient Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-champagne/10 via-roseGold/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-luxury-800/20 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-champagne/30 text-champagne text-xs font-medium tracking-widest uppercase shadow-[0_0_20px_rgba(212,175,55,0.15)] animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            <span>Fashion Business & Luxury Retail Strategist</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08]">
            Where Haute Couture <br />
            <span className="italic font-light gold-gradient-text font-serif">Meets Retail Strategy</span>
          </h1>

          <p className="text-luxury-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Combining fashion design craft with MBA-level business acumen — optimizing retail merchandise planning, 
            inventory velocity, visual storytelling, and commercial sell-through.
          </p>

          {/* Quick Experience Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2 text-xs tracking-wider uppercase font-mono text-luxury-400">
            <span className="px-3 py-1 rounded-md bg-luxury-900/90 border border-luxury-800 text-luxury-200">The Bear House</span>
            <span className="text-champagne/60">•</span>
            <span className="px-3 py-1 rounded-md bg-luxury-900/90 border border-luxury-800 text-luxury-200">Philocaly</span>
            <span className="text-champagne/60">•</span>
            <span className="px-3 py-1 rounded-md bg-luxury-900/90 border border-luxury-800 text-luxury-200">Gaurav Gupta</span>
            <span className="text-champagne/60">•</span>
            <span className="px-3 py-1 rounded-md bg-luxury-900/90 border border-luxury-800 text-luxury-200">Henis Italian Couture</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-champagne text-luxury-950 font-semibold text-sm tracking-wider uppercase shadow-lg shadow-champagne/25 hover:bg-champagne-light hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>Explore Projects</span>
            </a>

            <a
              href={personal.resumePdf}
              download="Kruti_A_Resume.pdf"
              className="px-8 py-3.5 rounded-full glass-card border border-luxury-700 text-white hover:border-champagne/60 hover:text-champagne font-medium text-sm tracking-wider uppercase hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-5 sm:p-6 rounded-2xl border border-luxury-800/80 hover:border-champagne/40 transition-all duration-300 text-center group"
            >
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white group-hover:text-champagne transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-luxury-300 mt-2">
                {stat.label}
              </div>
              <div className="text-[11px] text-luxury-400 mt-1 font-mono">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll down indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-luxury-400 hover:text-champagne transition-colors text-xs font-mono uppercase tracking-widest group"
          >
            <span>Scroll To Discover</span>
            <div className="w-6 h-10 rounded-full border border-luxury-700 flex items-start justify-center p-1 group-hover:border-champagne transition-colors">
              <div className="w-1.5 h-2 bg-champagne rounded-full animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
