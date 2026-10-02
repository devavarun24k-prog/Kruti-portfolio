import React from 'react';
import { GraduationCap, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, education } = portfolioData;

  const corePillars = [
    {
      title: "Buying & Assortment Architecture",
      detail: "Range planning, SKU tiering, option counts, and aligning wholesale orders with store delivery cadences."
    },
    {
      title: "Retail Operations & Stock Flow",
      detail: "Active inventory tracking across 1,500+ SKUs, minimizing stock-outs through scheduled replenishment cycles."
    },
    {
      title: "Visual Merchandising & Floor Physics",
      detail: "Translating brand guidelines into high-traffic window displays, focal points, and standardized folding/placement SOPs."
    },
    {
      title: "Garment Construction & Technical Fluency",
      detail: "BSc training in pattern drafting, silhouette draping, and fabric science providing deep product-level credibility."
    }
  ];

  return (
    <section id="about" className="py-24 border-b border-white/10 bg-[#0e0e10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait Framing & Education Credentials */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Refined Editorial Monogram / Portrait Frame */}
            <div className="relative rounded-xl overflow-hidden bg-[#161619] border border-white/10 p-8 text-center flex flex-col items-center justify-center min-h-[320px]">
              <div className="w-20 h-20 rounded-full border border-warm-accent/40 bg-[#121214] flex items-center justify-center font-serif text-3xl font-bold text-warm-accent mb-4 shadow-sm">
                K
              </div>
              <span className="font-serif text-2xl font-semibold text-white tracking-wider">
                KRUTI AYACHITULA
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-warm-sand mt-1">
                Bangalore, India
              </span>
              <p className="text-xs text-studio-400 font-light mt-3 max-w-xs leading-relaxed">
                MBA Candidate in Fashion Lifestyle Business Management & BSc Fashion Design Graduate.
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 w-full flex items-center justify-around text-center">
                <div>
                  <div className="font-mono text-xs font-bold text-white">Pearl Academy</div>
                  <div className="text-[10px] font-mono text-studio-400">MBA 2025–2027</div>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div>
                  <div className="font-mono text-xs font-bold text-white">INIFD</div>
                  <div className="text-[10px] font-mono text-studio-400">BSc 2020–2023</div>
                </div>
              </div>
            </div>

            {/* Academic Credentials Detail */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-warm-accent block">
                Academic Background
              </span>

              {education.map((edu, idx) => (
                <div key={idx} className="p-5 rounded-lg bg-[#141417] border border-white/10 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif text-lg font-semibold text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-[11px] font-mono text-warm-sand shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-studio-300">
                    {edu.institution} • {edu.location}
                  </p>
                  <p className="text-xs text-studio-400 font-light pt-1">
                    {edu.focus}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Professional Background & 4 Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-semibold tracking-widest text-warm-accent uppercase block">
                Executive Profile
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
                Product Knowledge Meets <br />
                <span className="italic font-serif text-warm-sand">Commercial Retail Rigor</span>
              </h2>
              <p className="text-studio-200 text-sm sm:text-base leading-relaxed font-light pt-2">
                {personal.bio}
              </p>
            </div>

            {/* Core Capabilities Grid */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-widest text-studio-400 block">
                Core Professional Focus Areas
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {corePillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-lg bg-[#141417] border border-white/10 hover:border-warm-accent/30 transition-colors space-y-2"
                  >
                    <h4 className="font-serif text-lg font-semibold text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-studio-300 leading-relaxed font-light">
                      {pillar.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Link to CV */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={personal.resumePdf}
                download="Kruti_A_Resume.pdf"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-warm-sand hover:text-white border-b border-warm-sand pb-0.5 transition-colors"
              >
                <span>Review Full Curriculum Vitae</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
