import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Download, Send, Check, Copy, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-luxury-950/80 relative border-t border-luxury-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-champagne uppercase mb-3">
            06. Let's Collaborate
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal">
            Initiate a <span className="italic font-serif gold-gradient-text">Conversation</span>
          </h2>
          <div className="w-16 h-0.5 bg-champagne/40 mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-luxury-800 space-y-6">
              <h3 className="font-serif text-2xl text-white font-semibold">
                Available for Strategic Retail, Merchandising & Design Roles
              </h3>
              <p className="text-luxury-300 text-sm leading-relaxed font-light">
                Open to executive retail merchandise planning, visual merchandising leadership, luxury buying, and fashion brand development opportunities.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 pt-4 border-t border-luxury-800">
                
                {/* Email */}
                <div className="p-4 rounded-2xl bg-luxury-900/70 border border-luxury-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-luxury-400 block">Email Address</span>
                      <a href={`mailto:${personal.email}`} className="text-sm font-medium text-white hover:text-champagne transition-colors">
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personal.email, 'email')}
                    className="p-2 rounded-lg bg-luxury-800 text-luxury-300 hover:text-white hover:bg-luxury-700 transition-colors"
                    title="Copy email"
                  >
                    {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-luxury-900/70 border border-luxury-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-luxury-400 block">Direct Phone</span>
                      <a href={`tel:${personal.phone}`} className="text-sm font-medium text-white hover:text-champagne transition-colors">
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personal.phone, 'phone')}
                    className="p-2 rounded-lg bg-luxury-800 text-luxury-300 hover:text-white hover:bg-luxury-700 transition-colors"
                    title="Copy phone"
                  >
                    {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-luxury-900/70 border border-luxury-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-luxury-400 block">Location</span>
                    <span className="text-sm font-medium text-white">{personal.location}</span>
                  </div>
                </div>

                {/* Behance Link */}
                <a
                  href={personal.behance}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-luxury-900/70 border border-luxury-800 hover:border-champagne/50 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne font-bold font-serif">
                      Bē
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-luxury-400 block">Design Portfolio</span>
                      <span className="text-sm font-medium text-white group-hover:text-champagne transition-colors">behance.net/krutiayachitula</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-luxury-500 group-hover:text-champagne transition-colors" />
                </a>

              </div>

              {/* Resume Download CTA */}
              <div className="pt-2">
                <a
                  href={personal.resumePdf}
                  download="Kruti_A_Resume.pdf"
                  className="w-full py-3.5 rounded-xl bg-champagne text-luxury-950 font-semibold text-xs uppercase tracking-wider hover:bg-champagne-light transition-all flex items-center justify-center gap-2 shadow-lg shadow-champagne/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full Curriculum Vitae</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-luxury-800 relative">
              <h3 className="font-serif text-2xl text-white font-semibold mb-2">
                Send an Executive Inquiry
              </h3>
              <p className="text-xs text-luxury-400 mb-8 font-mono">
                Direct inquiries are forwarded promptly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-champagne/10 border border-champagne/40 text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-champagne/20 border border-champagne flex items-center justify-center mx-auto text-champagne">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-white font-semibold">Message Delivered</h4>
                  <p className="text-sm text-luxury-300">Thank you for reaching out. Kruti will connect with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-luxury-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-luxury-900 border border-luxury-800 text-white placeholder-luxury-600 focus:outline-none focus:border-champagne text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-luxury-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. name@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-luxury-900 border border-luxury-800 text-white placeholder-luxury-600 focus:outline-none focus:border-champagne text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-luxury-300">Subject / Engagement Type</label>
                    <input
                      type="text"
                      placeholder="e.g. Visual Merchandising Project / Luxury Retail Role"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-luxury-900 border border-luxury-800 text-white placeholder-luxury-600 focus:outline-none focus:border-champagne text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-luxury-300">Message *</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Describe your project, merchandising requirements, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-luxury-900 border border-luxury-800 text-white placeholder-luxury-600 focus:outline-none focus:border-champagne text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-white hover:bg-champagne text-luxury-950 font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
