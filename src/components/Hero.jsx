import React from 'react';
import { ArrowDown, Download, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-between border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Eyebrow Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/[0.04] border border-white/15 text-warm-sand text-[11px] font-mono tracking-widest uppercase">
            <span>Fashion Business</span>
            <span className="text-warm-accent">•</span>
            <span>Buying & Merchandising</span>
            <span className="text-warm-accent">•</span>
            <span>Retail</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-studio-400">
            <span className="text-white">Pearl Academy MBA</span>
            <span>/</span>
            <span className="text-white">BSc Fashion Design</span>
          </div>
        </div>

        {/* Hero Title & Recruiter Statement */}
        <div className="max-w-5xl space-y-8">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal text-white leading-[1.04] tracking-tight">
            Translating Fashion Insight <br />
            <span className="italic text-warm-sand font-serif">Into Commercial Decisions</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-2">
            <div className="lg:col-span-8">
              <p className="text-studio-200 text-lg sm:text-xl font-light leading-relaxed max-w-3xl">
                {personal.recruiterStatement}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-studio-400">
                Core Brand Pillars
              </span>
              <div className="flex flex-wrap gap-2">
                {personal.attributes.map((attr, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-warm-surface border border-white/10 text-xs font-mono tracking-wider text-warm-accent uppercase"
                  >
                    {attr.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#selected-work"
              className="px-7 py-3.5 rounded bg-warm-sand text-studio-950 font-mono text-xs font-semibold tracking-wider uppercase hover:bg-white transition-all duration-200 flex items-center gap-2 shadow-sm"
            >
              <span>View Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={personal.resumePdf}
              download="Kruti_A_Resume.pdf"
              className="px-7 py-3.5 rounded bg-transparent border border-white/20 text-white font-mono text-xs font-medium tracking-wider uppercase hover:border-warm-accent hover:text-warm-accent transition-all duration-200 flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>

            <a
              href="#bear-house"
              className="px-5 py-3.5 text-studio-400 hover:text-white font-mono text-xs tracking-wider uppercase transition-colors flex items-center gap-1.5"
            >
              <span>The Bear House Case Study</span>
              <span className="text-warm-accent">→</span>
            </a>
          </div>

        </div>

      </div>

      {/* Editorial Bottom Metrics Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 pt-8 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {personal.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-normal text-white">
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-warm-sand">
                {stat.label}
              </div>
              <div className="text-[11px] text-studio-400 font-light">
                {stat.context}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
