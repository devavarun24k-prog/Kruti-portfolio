import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceTimeline() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 border-b border-white/10 bg-[#111114]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-warm-accent uppercase mb-3 block">
            Professional Track Record
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Industry Experience & <span className="italic font-serif text-warm-sand">Retail Leadership</span>
          </h2>
          <p className="text-studio-300 text-sm sm:text-base font-light mt-3">
            Hands-on store operations, multi-format visual merchandising, luxury ad sales, bespoke design, and brand communication.
          </p>
        </div>

        {/* Editorial Experience Timeline List */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-[#151518] border border-white/10 hover:border-warm-accent/30 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left: Organization, Role, Dates & Location */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-white/5 border border-white/10 text-warm-sand font-semibold">
                      {exp.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-white">
                    {exp.company}
                  </h3>

                  <div className="font-mono text-xs text-warm-accent font-medium">
                    {exp.role}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-studio-400 pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-warm-accent" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-studio-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Right: Summary, Responsibilities & Skills */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-xs sm:text-sm text-studio-200 font-light leading-relaxed italic border-l-2 border-warm-accent/40 pl-3">
                    "{exp.summary}"
                  </p>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-studio-400 block">
                      Core Responsibilities & Deliverables
                    </span>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs text-studio-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-warm-accent shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.coreCompetencies.map((comp, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-0.5 rounded bg-[#0e0e10] border border-white/5 text-[10px] font-mono text-studio-400"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
