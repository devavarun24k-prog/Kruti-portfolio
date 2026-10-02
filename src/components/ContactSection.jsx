import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Download, Send, Check, Copy } from 'lucide-react';
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
    <section id="contact" className="py-24 border-b border-white/10 bg-[#0e0e10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-warm-accent uppercase mb-3 block">
            Initiate Contact
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Available for Buying, Merchandising & <br />
            <span className="italic font-serif text-warm-sand">Retail Management Opportunities</span>
          </h2>
          <p className="text-studio-300 text-sm sm:text-base font-light mt-3">
            Open to full-time roles, strategic internships, and placement opportunities in fashion buying, retail merchandising, and visual operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & CV Download */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-xl bg-[#141417] border border-white/10 space-y-6">
              
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-warm-accent font-semibold block">
                  Direct Inquiries
                </span>
                <h3 className="font-serif text-2xl font-semibold text-white">
                  Contact Information
                </h3>
              </div>

              {/* Email */}
              <div className="p-4 rounded-lg bg-[#0e0e10] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-warm-accent shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-studio-400 block">Email Address</span>
                    <a href={`mailto:${personal.email}`} className="text-xs font-mono text-white hover:text-warm-accent transition-colors">
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personal.email, 'email')}
                  className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-studio-300 transition-colors"
                  title="Copy email"
                >
                  {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-lg bg-[#0e0e10] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-warm-accent shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-studio-400 block">Phone</span>
                    <a href={`tel:${personal.phone}`} className="text-xs font-mono text-white hover:text-warm-accent transition-colors">
                      {personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personal.phone, 'phone')}
                  className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-studio-300 transition-colors"
                  title="Copy phone"
                >
                  {copiedType === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-lg bg-[#0e0e10] border border-white/10 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-warm-accent shrink-0" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-studio-400 block">Current Location</span>
                  <span className="text-xs font-mono text-white">{personal.location}</span>
                </div>
              </div>

              {/* Behance Link */}
              <a
                href={personal.behance}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-lg bg-[#0e0e10] border border-white/10 hover:border-warm-accent/40 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif font-bold text-sm text-warm-accent">Bē</span>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-studio-400 block">Design Portfolio</span>
                    <span className="text-xs font-mono text-white group-hover:text-warm-accent transition-colors">
                      behance.net/krutiayachitula
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-studio-500 group-hover:text-warm-accent transition-colors" />
              </a>

              {/* Download CV Button */}
              <div className="pt-2">
                <a
                  href={personal.resumePdf}
                  download="Kruti_A_Resume.pdf"
                  className="w-full py-3.5 rounded bg-warm-sand hover:bg-white text-studio-950 font-mono font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Clean Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-xl bg-[#141417] border border-white/10 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-warm-accent font-semibold block">
                  Get In Touch
                </span>
                <h3 className="font-serif text-2xl font-semibold text-white">
                  Send a Direct Message
                </h3>
              </div>

              {submitted ? (
                <div className="p-6 rounded-lg bg-warm-darkAccent/40 border border-warm-accent/40 text-center space-y-2">
                  <Check className="w-6 h-6 text-warm-accent mx-auto" />
                  <h4 className="font-serif text-xl text-white font-semibold">Message Received</h4>
                  <p className="text-xs text-studio-300 font-light">Thank you. Kruti will respond to your inquiry promptly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-studio-300">Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-[#0e0e10] border border-white/10 text-white placeholder-studio-600 focus:outline-none focus:border-warm-accent text-xs font-mono"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-studio-300">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-[#0e0e10] border border-white/10 text-white placeholder-studio-600 focus:outline-none focus:border-warm-accent text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-studio-300">Inquiry Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Buying & Merchandising Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#0e0e10] border border-white/10 text-white placeholder-studio-600 focus:outline-none focus:border-warm-accent text-xs font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-studio-300">Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please share details about the role, organization, or project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#0e0e10] border border-white/10 text-white placeholder-studio-600 focus:outline-none focus:border-warm-accent text-xs font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded bg-white hover:bg-warm-sand text-studio-950 font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmit Message</span>
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
