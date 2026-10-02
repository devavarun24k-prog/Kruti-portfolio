import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CompetenciesGrid() {
  const { competencies } = portfolioData;

  const quickPills = [
    "Merchandise Planning",
    "Trend Research",
    "Fashion Forecasting",
    "Excel-Based Data Analysis",
    "Store Operations",
    "Negotiation",
    "Campaign Coordination",
    "Project Management",
    "Fashion Marketing",
    "Content Planning"
  ];

  return (
    <section id="competencies" className="py-24 border-b border-white/10 bg-[#111114]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-warm-accent uppercase mb-3 block">
            Domain Competencies
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Core Skills & <span className="italic font-serif text-warm-sand">Operational Capabilities</span>
          </h2>
          <p className="text-studio-300 text-sm sm:text-base font-light mt-3">
            Grounded in rigorous merchandise planning, retail operations, quantitative data analysis, and garment construction.
          </p>
        </div>

        {/* Quick Tag Strip */}
        <div className="flex flex-wrap gap-2 mb-12">
          {quickPills.map((pill, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded bg-[#161619] border border-white/10 text-xs font-mono text-studio-200"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* 3 Group Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competencies.map((group, gIdx) => (
            <div
              key={gIdx}
              className="p-7 rounded-xl bg-[#151518] border border-white/10 space-y-6 flex flex-col justify-between"
            >
              <div>
                <div className="pb-4 border-b border-white/10">
                  <span className="text-[10px] font-mono text-warm-accent uppercase font-bold block mb-1">
                    Group 0{gIdx + 1}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-white">
                    {group.group}
                  </h3>
                </div>

                <div className="mt-6 space-y-5">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-warm-accent shrink-0" />
                        <h4 className="text-xs font-mono font-semibold text-white">
                          {skill.name}
                        </h4>
                      </div>
                      <p className="text-xs text-studio-300 font-light pl-6 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-studio-400">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-accent" />
                <span>Authoritative CV Competency</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
