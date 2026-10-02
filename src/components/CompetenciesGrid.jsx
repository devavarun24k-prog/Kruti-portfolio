import React from 'react';
import { BarChart3, TrendingUp, Sparkles, Layers, Sliders, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CompetenciesGrid() {
  const { competencies } = portfolioData;

  const corePills = [
    "Trend Research",
    "Fashion Marketing",
    "Merchandise Planning",
    "Store Operations",
    "Range Planning",
    "Visual Merchandising",
    "Fashion Forecasting",
    "Excel Data Analysis",
    "Campaign Coordination",
    "Content Planning",
    "Negotiation",
    "Sell-Through Velocity"
  ];

  return (
    <section id="skills" className="py-24 bg-luxury-950/60 relative border-t border-luxury-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-champagne uppercase mb-3">
            04. Core Competencies
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal">
            Domain Expertise & <span className="italic font-serif gold-gradient-text">Operational Mastery</span>
          </h2>
          <div className="w-16 h-0.5 bg-champagne/40 mt-4" />
        </div>

        {/* Floating Skill Chips Ribbon */}
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mb-16">
          {corePills.map((pill, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-luxury-900/80 border border-luxury-800 text-luxury-200 hover:border-champagne/60 hover:text-champagne transition-colors"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* 3 Major Competency Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competencies.map((group, gIdx) => (
            <div
              key={gIdx}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-luxury-800 hover:border-champagne/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 pb-5 border-b border-luxury-800">
                  <div className="w-9 h-9 rounded-xl bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne font-mono text-xs font-bold">
                    0{gIdx + 1}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="mt-6 space-y-6">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-white">{skill.name}</span>
                        <span className="font-mono text-champagne font-semibold">{skill.level}%</span>
                      </div>
                      
                      {/* Meter Bar */}
                      <div className="w-full h-1.5 bg-luxury-900 rounded-full overflow-hidden border border-luxury-800">
                        <div
                          className="h-full bg-gradient-to-r from-champagne-dark via-champagne to-champagne-light rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <p className="text-[11px] text-luxury-400 font-light leading-snug">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-luxury-800/80 flex items-center gap-2 text-xs font-mono text-luxury-400">
                <CheckCircle2 className="w-4 h-4 text-champagne" />
                <span>Verified Industry Practice</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
