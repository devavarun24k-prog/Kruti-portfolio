import React, { useState } from 'react';
import { Sparkles, Maximize2, X, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function LookbookGallery() {
  const { lookbook } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filters = ['All', 'Editorial', 'Retail Merchandising', 'Couture Design', 'Concept Lab'];

  const filteredItems = activeFilter === 'All'
    ? lookbook
    : lookbook.filter(item => item.category === activeFilter);

  return (
    <section id="lookbook" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-semibold tracking-widest text-champagne uppercase mb-3">
            05. Visual Aesthetics & Styling
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal">
            Curated Editorial <span className="italic font-serif gold-gradient-text">Lookbook</span>
          </h2>
          <div className="w-16 h-0.5 bg-champagne/40 mt-4" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-champagne text-luxury-950 font-semibold'
                  : 'glass-card text-luxury-300 hover:text-white border-luxury-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImg(item)}
              className="group relative rounded-2xl overflow-hidden glass-card border border-luxury-800 cursor-pointer h-80 sm:h-96"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-950 via-luxury-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase bg-luxury-950/80 text-champagne border border-champagne/30 backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-luxury-900/80 border border-luxury-700 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-champagne" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="font-serif text-lg font-semibold text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-luxury-300 mt-1 line-clamp-2 font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fade-in">
          <div className="relative max-w-4xl w-full bg-luxury-950 rounded-3xl border border-champagne/40 overflow-hidden shadow-2xl">
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-luxury-900/90 border border-luxury-700 text-white hover:border-champagne transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={lightboxImg.image}
                alt={lightboxImg.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-luxury-950 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-luxury-800">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-champagne font-semibold">
                  {lightboxImg.category}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-white mt-1">
                  {lightboxImg.title}
                </h3>
                <p className="text-sm text-luxury-300 font-light mt-1">
                  {lightboxImg.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
