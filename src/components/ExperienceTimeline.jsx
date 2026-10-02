import React, { useState } from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2, ChevronRight, Building2, Store } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceTimeline() {
  const { experiences } = portfolioData;
  const [activeExpId, setActiveExpId] = useState(experiences[0].id);

  const activeExp = experiences.find(e => e.id === activeExpId) || experiences[0];

  return (
    <section id="experience" className="py-24 bg-luxury-950/60 relative border-t border-luxury-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-champagne uppercase mb-3">
            02. Career Track Record
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal">
            Professional Experience & <span className="italic font-serif gold-gradient-text">Brand Leadership</span>
          </h2>
          <div className="w-16 h-0.5 bg-champagne/40 mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Role Navigation Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-luxury-400 block px-2 mb-2">
              Select Position / Organization
            </span>
            {experiences.map((exp) => {
              const isSelected = exp.id === activeExpId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExpId(exp.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-luxury-900 border-champagne/60 shadow-lg shadow-champagne/10 text-white'
                      : 'glass-card border-luxury-800/80 text-luxury-300 hover:text-white hover:border-luxury-700'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                        isSelected ? 'bg-champagne text-luxury-950 font-bold' : 'bg-luxury-800 text-luxury-400'
                      }`}>
                        {exp.badge}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg sm:text-xl font-semibold text-white">
                      {exp.role}
                    </h4>
                    <p className="text-xs text-luxury-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isSelected ? 'text-champagne translate-x-1' : 'text-luxury-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Experience Card */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-10 rounded-3xl border border-champagne/30 relative shadow-2xl">
              
              {/* Badge & Period Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-luxury-800">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/30 text-champagne text-xs font-mono font-medium mb-3">
                    <Store className="w-3.5 h-3.5" />
                    <span>{activeExp.badge}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-semibold">
                    {activeExp.role}
                  </h3>
                  <div className="flex items-center gap-3 text-luxury-300 text-sm font-medium mt-1">
                    <span className="text-champagne font-semibold">{activeExp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-xs text-luxury-400">
                      <MapPin className="w-3 h-3 text-luxury-500" />
                      {activeExp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-luxury-900 border border-luxury-800 text-xs font-mono text-luxury-300">
                  <Calendar className="w-3.5 h-3.5 text-champagne" />
                  <span>{activeExp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-luxury-300 text-sm sm:text-base leading-relaxed mt-6 italic font-light">
                "{activeExp.description}"
              </p>

              {/* Key Deliverables & Impact Points */}
              <div className="mt-6 space-y-3.5">
                <h4 className="text-xs font-mono uppercase tracking-widest text-champagne font-semibold">
                  Key Strategic Contributions
                </h4>
                <ul className="space-y-3">
                  {activeExp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-luxury-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applied Skills */}
              <div className="mt-8 pt-6 border-t border-luxury-800/80">
                <span className="text-[11px] font-mono uppercase tracking-widest text-luxury-400 block mb-3">
                  Domain Competencies Applied
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeExp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-full bg-luxury-900 border border-luxury-700/60 text-xs font-medium text-luxury-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
