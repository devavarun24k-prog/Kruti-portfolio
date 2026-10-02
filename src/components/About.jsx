import React from 'react';
import { GraduationCap, Award, CheckCircle2, TrendingUp, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, education } = portfolioData;

  const corePillars = [
    {
      title: "Commercial Retail Strategy",
      desc: "Range planning, SKU categorization, option balancing, and sell-through rate acceleration.",
      icon: TrendingUp
    },
    {
      title: "Spatial & Visual Merchandising",
      desc: "Creating captivating window displays, EBO/SIS brand coherence, and footfall-converting floor layouts.",
      icon: Sparkles
    },
    {
      title: "Couture Design & Construction",
      desc: "Translating concepts into master silhouettes, fabric ergonomics, and bespoke surface detailing.",
      icon: Compass
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-champagne uppercase mb-3">
            01. Professional Overview
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal">
            Creative Vision Powered by <span className="italic font-serif gold-gradient-text">Commercial Precision</span>
          </h2>
          <div className="w-16 h-0.5 bg-champagne/40 mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-luxury-800 relative">
              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4">
                Bridging Fashion Artistry & Retail Profitability
              </h3>
              
              <p className="text-luxury-300 leading-relaxed font-light text-base sm:text-lg mb-6">
                With a dual background combining a <span className="text-white font-medium">BSc in Fashion Design</span> and an <span className="text-white font-medium">MBA in Fashion Lifestyle Business Management</span> from Pearl Academy, I operate at the intersection of creative luxury aesthetics and data-driven retail management.
              </p>

              <p className="text-luxury-300 leading-relaxed font-light text-base sm:text-lg mb-8">
                My career encompasses hands-on store leadership at <span className="text-champagne font-medium">Philocaly</span> (managing 1,500+ SKUs), multi-store VM rollouts at <span className="text-champagne font-medium">The Bear House</span>, luxury ad sales at <span className="text-champagne font-medium">The Times of India Group</span>, high-fashion PR at <span className="text-champagne font-medium">Gaurav Gupta</span>, and bespoke bridal execution at <span className="text-champagne font-medium">Pooja & Kavya</span>.
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-luxury-800">
                {corePillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={idx} className="p-4 rounded-xl bg-luxury-900/60 border border-luxury-800/60 hover:border-champagne/40 transition-colors">
                      <Icon className="w-5 h-5 text-champagne mb-2" />
                      <h4 className="text-sm font-semibold text-white mb-1">{pillar.title}</h4>
                      <p className="text-xs text-luxury-400 leading-relaxed">{pillar.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Academic Foundation & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-champagne mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Credentials</span>
            </div>

            {education.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-luxury-800 hover:border-champagne/40 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-champagne font-semibold px-2.5 py-1 rounded bg-champagne/10 border border-champagne/20">
                      {edu.period}
                    </span>
                    <h4 className="font-serif text-xl font-semibold text-white mt-3 group-hover:text-champagne transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-luxury-300 font-medium mt-1">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 border-t border-luxury-800/60 pt-4">
                  {edu.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs text-luxury-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-champagne shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Quick Contact Micro-Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-luxury-900 to-luxury-950 border border-champagne/30 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-luxury-400">Current Base</span>
                <p className="text-sm font-semibold text-white">Bangalore, India</p>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 rounded-full bg-champagne text-luxury-950 text-xs font-semibold uppercase tracking-wider hover:bg-champagne-light transition-colors"
              >
                Connect
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
