import React, { useState } from 'react';
import { Layers, ArrowRight, ExternalLink, Sparkles, X, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsShowcase() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Merchandise Planning', 'Visual Merchandising', 'Couture & Concept Design', 'Fashion Design'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-semibold tracking-widest text-champagne uppercase mb-3">
            03. Industry Projects & Case Studies
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal">
            Strategic Initiatives & <span className="italic font-serif gold-gradient-text">Design Case Studies</span>
          </h2>
          <div className="w-16 h-0.5 bg-champagne/40 mt-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-champagne text-luxury-950 font-bold shadow-md shadow-champagne/20'
                  : 'glass-card text-luxury-300 hover:text-white border-luxury-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden border border-luxury-800/80 hover:border-champagne/50 transition-all duration-500 flex flex-col group"
            >
              {/* Image Banner with Overlay */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-950 via-luxury-950/40 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-luxury-950/90 text-champagne border border-champagne/30 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-luxury-400 block mb-1">
                    {project.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-white leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-luxury-300 text-sm leading-relaxed font-light line-clamp-3">
                  {project.overview}
                </p>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-luxury-800/80">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-xs font-semibold text-champagne">{m.val}</div>
                      <div className="text-[10px] uppercase font-mono text-luxury-400">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags and CTA */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-luxury-900 border border-luxury-800 text-luxury-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-3 rounded-xl bg-luxury-900 hover:bg-champagne hover:text-luxury-950 border border-luxury-750 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>View Case Study Deep Dive</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="glass-card bg-luxury-950 border border-champagne/40 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative shadow-2xl">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-luxury-900 border border-luxury-700 text-luxury-300 hover:text-white hover:border-champagne transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-champagne font-bold px-3 py-1 rounded bg-champagne/10 border border-champagne/30">
                  {selectedProject.category}
                </span>
                <h3 className="font-serif text-3xl font-semibold text-white mt-4">
                  {selectedProject.title}
                </h3>
                <p className="text-luxury-400 text-sm mt-1">{selectedProject.subtitle}</p>
              </div>

              <div className="rounded-2xl overflow-hidden h-60 border border-luxury-800">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-4 text-sm text-luxury-300">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-champagne font-semibold mb-1">
                    Project Overview
                  </h4>
                  <p className="leading-relaxed">{selectedProject.overview}</p>
                </div>

                <div className="p-4 rounded-xl bg-luxury-900/80 border border-luxury-800">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-roseGold-light font-semibold mb-1">
                    The Strategic Challenge
                  </h4>
                  <p className="text-xs text-luxury-300 leading-relaxed">{selectedProject.challenge}</p>
                </div>

                <div className="p-4 rounded-xl bg-champagne/5 border border-champagne/30">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-champagne font-semibold mb-1">
                    Strategic Execution & Solution
                  </h4>
                  <p className="text-xs text-luxury-200 leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-luxury-800 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full text-xs font-mono bg-luxury-900 border border-luxury-700 text-luxury-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
