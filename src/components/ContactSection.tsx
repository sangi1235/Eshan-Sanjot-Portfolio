import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  Linkedin,
  ArrowUpRight,
  Sparkles,
  Palette,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    emailOrPhone: '',
    projectType: 'Brand Identity & Monogram System',
    budget: '$500 – $1,500',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [karachiTime, setKarachiTime] = useState('');

  // Live Karachi, Pakistan Clock
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setKarachiTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const messageBody = `Hello Eshan Sanjot! New inquiry via your portfolio:
- Name: ${formState.name}
- Contact: ${formState.emailOrPhone}
- Service: ${formState.projectType}
- Budget: ${formState.budget}
- Message: ${formState.message}`;

    // Auto open WhatsApp with the formatted inquiry
    window.open(`https://wa.me/923363179298?text=${encodeURIComponent(messageBody)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#090D16] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#E5C16C]">
            09 / START A COLLABORATION
          </span>
          <span className="h-px w-10 bg-slate-800" />
        </div>

        <div className="mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Let's Craft Your Brand & Visual Identity
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Have a luxury branding commission, packaging project, logo monogram, or UI/UX visual system in mind? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & Live Clock */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Cards */}
            <div className="space-y-3">
              {/* WhatsApp Card */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400 font-bold">
                      Direct WhatsApp Chat
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-slate-400 group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#C59B4E]/10 border border-[#C59B4E]/25 text-[#E5C16C] flex items-center justify-center shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400 font-bold">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-bold text-white hover:text-[#E5C16C] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <CheckCircle size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location & Live Clock Card */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400 font-bold">
                      Studio Location
                    </div>
                    <div className="text-sm font-bold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#E5C16C]" />
                    <span>Local Time (PKT):</span>
                  </div>
                  <span className="font-bold text-white">{karachiTime || 'Loading...'}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase text-slate-400 font-bold mb-3">
                Creative & Professional Portfolios:
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={PERSONAL_INFO.portfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-[#E5C16C] rounded-xl border border-slate-800 font-mono text-xs flex items-center gap-2 transition-colors"
                >
                  <ExternalLink size={15} />
                  <span>Design Portfolio</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-800 font-mono text-xs flex items-center gap-2 transition-colors"
                >
                  <Linkedin size={15} />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-emerald-950/60 hover:bg-emerald-900 text-emerald-300 rounded-xl border border-emerald-800/40 font-mono text-xs flex items-center gap-2 transition-colors"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal & Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0F172A] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Send Project Brief / Commission Request
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Typical response time: Under 2 hours during active business hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                <CheckCircle size={48} className="text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold font-heading text-white">
                  Inquiry Dispatched Successfully!
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Your project brief has been formatted. WhatsApp has been opened to connect with Eshan Sanjot directly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs uppercase rounded-xl"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1.5">
                      Your Name / Brand *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Rostova / Lumina Studio"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C59B4E] font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1.5">
                      Email or WhatsApp *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. elena@lumina.com / +1 234..."
                      value={formState.emailOrPhone}
                      onChange={(e) => setFormState({ ...formState, emailOrPhone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C59B4E] font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1.5">
                      Primary Service Requirement
                    </label>
                    <select
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C59B4E] font-sans"
                    >
                      <option value="Brand Identity & Monogram System">Luxury Brand Identity & Monogram System</option>
                      <option value="Packaging Design & Print Production">Packaging Design & Print Production (Boxes, Labels, Dielines)</option>
                      <option value="UI/UX Visual Design & Figma Prototyping">UI/UX Visual Design & Figma Interactive Prototyping</option>
                      <option value="Marketing Collateral & Social Media">Marketing Collateral & Social Media Brand Kit</option>
                      <option value="Logo Redesign & Vector Modernization">Logo Redesign & Vector Modernization (AI/SVG)</option>
                      <option value="Comprehensive Art Direction Retainer">Comprehensive Art Direction & Visual Standards</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1.5">
                      Approximate Budget Range
                    </label>
                    <select
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C59B4E] font-sans"
                    >
                      <option value="$300 – $600">$300 – $600 (Logo & Identity Starter)</option>
                      <option value="$600 – $1,500">$600 – $1,500 (Comprehensive Brand + Web Portal)</option>
                      <option value="$1,500 – $3,500">$1,500 – $3,500 (Full Brand System + Packaging + App)</option>
                      <option value="$3,500+">$3,500+ (Enterprise Retainer / Large Platform)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1.5">
                    Project Goals / Design Brief *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your brand vision, target audience, aesthetic preferences (e.g. minimalist luxury, modern bold), or link to mood boards..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C59B4E] font-sans leading-relaxed resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#C59B4E] via-[#D4AF37] to-[#99732B] hover:opacity-95 text-black font-extrabold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C59B4E]/25"
                >
                  <Send size={15} />
                  <span>Send Inquiry & Open Direct WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
