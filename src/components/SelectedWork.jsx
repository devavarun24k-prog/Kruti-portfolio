import React, { useState } from 'react';
import { ArrowRight, Layers, Clock, ShieldCheck, ChevronRight, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SelectedWork() {
  const { selectedWork } = portfolioData;
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  return (
    <section id="selected-work" className="py-24 border-b border-white/10 bg-[#111114]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-warm-accent uppercase mb-3 block">
            Core Portfolio Showcase
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Selected Work & <span className="italic font-serif text-warm-sand">Strategic Case Studies</span>
          </h2>
          <p className="text-studio-300 text-sm sm:text-base font-light mt-3">
            In-depth strategic initiatives spanning wholesale buying cycles, phased merchandise launches, retail inventory control, and avant-garde material exploration.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {selectedWork.map((project, idx) => (
            <div
              key={project.id}
              className="p-8 sm:p-10 rounded-xl bg-[#151518] border border-white/10 hover:border-warm-accent/30 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Metadata & Overview */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-warm-accent/15 text-warm-accent font-semibold border border-warm-accent/30">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-studio-400">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-warm-sand mt-1">
                      {project.headline}
                    </p>
                  </div>

                  <p className="text-sm text-studio-200 leading-relaxed font-light">
                    {project.overview}
                  </p>

                  {/* Deliverables Bullet List */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-studio-400 block">
                      Key Strategic Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {project.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-studio-300">
                          <span className="text-warm-accent font-bold">•</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-[#101012] border border-white/10 text-[11px] font-mono text-studio-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Lifecycle / Phased Architecture Visualization */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="p-5 rounded-lg bg-[#0e0e10] border border-white/10">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                      <span className="text-xs font-mono uppercase tracking-wider text-warm-sand font-semibold">
                        Lifecycle Execution Model
                      </span>
                      <span className="text-[10px] font-mono text-studio-400">
                        {project.focus}
                      </span>
                    </div>

                    {/* Phased Steps */}
                    <div className="space-y-3">
                      {project.lifecyclePhases.map((phase, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-3.5 rounded bg-[#161619] border border-white/5 hover:border-warm-accent/20 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-mono font-bold text-white">
                              {phase.name}
                            </span>
                            <span className="text-[10px] font-mono text-warm-accent uppercase">
                              {phase.timing}
                            </span>
                          </div>
                          <p className="text-xs text-studio-300 font-light leading-relaxed">
                            {phase.purpose}
                          </p>
                        </div>
                      ))}
                    </div>
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
