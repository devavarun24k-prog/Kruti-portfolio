import React from 'react';
import { Store, Layers, TrendingUp, CheckCircle, ArrowRight, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function BearHouseCaseStudy() {
  const { bearHouseCaseStudy } = portfolioData;

  return (
    <section id="bear-house" className="py-24 border-b border-white/10 bg-[#0e0e10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold tracking-widest text-warm-accent uppercase mb-3 block">
              Flagship Retail Case Study
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
              The Bear House: <span className="italic font-serif text-warm-sand">Multi-Store VM & EOSS Strategy</span>
            </h2>
            <p className="text-studio-300 text-sm sm:text-base font-light mt-3">
              Standardizing brand presentation across 3 Exclusive Brand Outlets (EBOs), 2 Shop-in-Shop (SIS) formats, and executing pre-opening rollouts for 2 new Hyderabad stores.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 self-start md:self-auto">
            {bearHouseCaseStudy.keyFacts.map((fact, idx) => (
              <div key={idx} className="px-3.5 py-2 rounded bg-warm-surface border border-white/10 text-center">
                <div className="font-mono text-xs font-bold text-white">{fact.val}</div>
                <div className="text-[10px] font-mono uppercase text-studio-400">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Structured 5-Step Process: Challenge -> Observation -> Action -> Execution -> Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {bearHouseCaseStudy.structure.map((item, idx) => {
            const isImpact = item.phase === 'Impact';
            return (
              <div
                key={idx}
                className={`p-6 rounded-lg border flex flex-col justify-between transition-all duration-300 ${
                  isImpact
                    ? 'bg-warm-darkAccent/60 border-warm-accent/50 shadow-lg'
                    : 'bg-[#141417] border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                      isImpact ? 'text-warm-accent' : 'text-studio-400'
                    }`}>
                      0{idx + 1}. {item.phase}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-white mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-studio-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                  <CheckCircle className={`w-3.5 h-3.5 ${isImpact ? 'text-warm-accent' : 'text-studio-500'}`} />
                  <span className="text-[10px] font-mono text-studio-400 uppercase">
                    {item.phase} Documented
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tactical Deliverables Strip */}
        <div className="mt-8 p-6 rounded-lg bg-[#141417] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-warm-accent font-semibold">
              Operational Scope Delivered
            </span>
            <p className="text-xs text-studio-300 font-light">
              Floor planning • Product placement hierarchies • Folding standardization • Stock arrangement • Focal wall VM revamp • Foot traffic enhancement
            </p>
          </div>

          <a
            href="#experience"
            className="text-xs font-mono text-white hover:text-warm-accent uppercase tracking-wider shrink-0 flex items-center gap-1.5"
          >
            <span>View Full Work History</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
