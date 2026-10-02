import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ConceptToCommerce() {
  const { conceptToCommerce } = portfolioData;

  return (
    <section id="pipeline" className="py-24 border-b border-white/10 bg-[#111114]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow and Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-warm-accent uppercase mb-3 block">
            Signature Methodology
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
            From Concept to Commerce
          </h2>
          <p className="text-studio-300 text-sm sm:text-base font-light mt-4 leading-relaxed">
            A structured decision-making pipeline connecting fashion intuition and garment design knowledge directly to retail execution and commercial viability.
          </p>
        </div>

        {/* Horizontal Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {conceptToCommerce.map((step, idx) => {
            const isLast = idx === conceptToCommerce.length - 1;
            return (
              <div
                key={idx}
                className={`p-6 rounded-lg border transition-all duration-300 flex flex-col justify-between ${
                  isLast 
                    ? 'bg-warm-darkAccent/40 border-warm-accent/40 lg:col-span-2' 
                    : 'bg-[#161619] border-white/10 hover:border-warm-accent/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-warm-accent font-bold">
                      PHASE {step.step}
                    </span>
                    {!isLast && (
                      <ArrowRight className="w-3.5 h-3.5 text-studio-500 hidden lg:block" />
                    )}
                    {isLast && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-warm-accent/20 text-warm-accent font-semibold">
                        Final Deliverable
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                    {step.stage}
                  </h3>
                  <p className="text-xs text-studio-300 leading-relaxed font-light">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-studio-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-warm-accent" />
                  <span>Verified Retail Alignment</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
