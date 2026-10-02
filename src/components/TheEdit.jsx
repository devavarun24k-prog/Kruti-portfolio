import React, { useState } from 'react';
import { BookOpen, ArrowUpRight, FileText, Sparkles, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function TheEdit() {
  const { theEdit } = portfolioData;
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="the-edit" className="py-24 border-b border-white/10 bg-[#0e0e10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold tracking-widest text-warm-accent uppercase mb-3 block">
              Industry Analysis & Perspectives
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
              The Edit: <span className="italic font-serif text-warm-sand">Fashion Business Observations</span>
            </h2>
            <p className="text-studio-300 text-sm sm:text-base font-light mt-3">
              Analytical frameworks and observational case studies examining assortment planning, delivery models, and retail spatial dynamics.
            </p>
          </div>

          <div className="text-[11px] font-mono text-studio-400 max-w-xs border-l border-white/10 pl-3">
            {theEdit.note}
          </div>
        </div>

        {/* 3 Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {theEdit.articles.map((article) => (
            <div
              key={article.id}
              className="p-7 rounded-xl bg-[#141417] border border-white/10 hover:border-warm-accent/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-white/5 border border-white/10 text-warm-accent font-semibold">
                    {article.tag}
                  </span>
                  <span className="text-[10px] font-mono text-studio-400">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-white group-hover:text-warm-sand transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-studio-300 leading-relaxed font-light">
                  {article.summary}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase text-studio-400 block">Framework</span>
                  <span className="text-xs font-mono text-white font-medium">{article.framework}</span>
                </div>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="p-2 rounded bg-white/5 hover:bg-warm-accent hover:text-studio-950 text-studio-300 transition-colors"
                  aria-label={`Read outline of ${article.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Perspective Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#141417] border border-white/20 rounded-xl max-w-2xl w-full p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded text-studio-400 hover:text-white border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-warm-accent/20 text-warm-accent font-semibold">
                {selectedArticle.tag}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mt-3">
                {selectedArticle.title}
              </h3>
              <p className="text-xs font-mono text-warm-sand mt-1">
                Analytical Framework: {selectedArticle.framework}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-studio-200 font-light leading-relaxed">
              <p>{selectedArticle.summary}</p>
              <div className="p-4 rounded bg-[#0e0e10] border border-white/5 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-warm-accent font-semibold block">
                  Methodological Overview
                </span>
                <p className="text-xs text-studio-300">
                  This perspective applies data-driven range structuring, option rationalization, and consumer dwell-time mapping to evaluate retail outcomes before inventory commitment.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider transition-colors"
              >
                Close Perspective
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
