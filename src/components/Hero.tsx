import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ESMonogram, AvailabilityBadge, CodeTerminalGraphic, SparkleStar } from './ArtElements';
import {
  ArrowUpRight,
  Sparkles,
  MessageCircle,
  Layers,
  CheckCircle2,
  Download,
  Palette,
  Eye,
  Award,
  Camera,
  RotateCcw,
  GraduationCap,
} from 'lucide-react';

export const Hero: React.FC<{ darkMode?: boolean }> = ({ darkMode = true }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = PERSONAL_INFO.roles;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [customPhoto, setCustomPhoto] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('es_custom_portrait');
      return saved || PERSONAL_INFO.portraitImage;
    } catch {
      return PERSONAL_INFO.portraitImage;
    }
  });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomPhoto(result);
          try {
            localStorage.setItem('es_custom_portrait', result);
          } catch {
            // ignore
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C59B4E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Eyebrow Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <AvailabilityBadge text="Available for Freelance Projects & Entry-Level Roles" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-amber-300 text-xs font-mono font-medium shadow-sm">
            <GraduationCap size={14} className="text-[#C59B4E]" />
            <span>BANO QABIL CERTIFIED (ID: 471554)</span>
          </div>
        </div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="text-sm sm:text-base font-mono text-slate-400 flex items-center gap-2 flex-wrap">
                <span>Hi, I am</span>
                <span className="font-bold text-white tracking-wide text-base sm:text-lg">{PERSONAL_INFO.name}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-[#E5C16C] border border-[#C59B4E]/30 font-mono font-bold">
                  Graphic Designer
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.06]">
                Graphic Designer &{' '}
                <span className="bg-gradient-to-r from-[#F5D77F] via-[#C59B4E] to-[#E5C16C] bg-clip-text text-transparent">
                  Creative Designer
                </span>
              </h1>

              {/* Dynamic Rotating Role Tag */}
              <div className="flex items-center gap-2 text-lg sm:text-2xl font-mono text-[#E5C16C] font-bold min-h-[36px] pt-1">
                <span className="text-[#C59B4E]">&gt;</span>
                <span className="border-b-2 border-[#C59B4E] pb-0.5 animate-fadeIn">
                  {roles[roleIndex]}
                </span>
                <span className="animate-pulse text-[#C59B4E]">_</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans font-normal">
              Turning ideas into <strong className="text-white font-semibold">clean, visually appealing designs</strong> — specializing in bespoke logos, business stationery, invoices, grand opening posters, and high-impact social media ad creatives.
            </p>

            {/* CTA Button Cluster */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 bg-gradient-to-r from-[#C59B4E] via-[#D4AF37] to-[#A37A2C] hover:from-[#d5ab5a] hover:to-[#B88A34] text-black font-extrabold rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#C59B4E]/25 flex items-center gap-2"
              >
                <Palette size={16} />
                <span>View M.K Tailors Project</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="https://wa.me/923363179298"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 bg-slate-800/90 hover:bg-slate-800 text-white border border-slate-700 hover:border-[#C59B4E] font-bold rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <MessageCircle size={16} className="text-emerald-400" />
                <span>WhatsApp: 0336-3179298</span>
              </a>

              <a
                href="#estimator"
                className="px-5 py-3.5 bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 font-mono text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
              >
                <Layers size={14} className="text-[#E5C16C]" />
                <span>Get Estimate</span>
              </a>
            </div>

            {/* Trust Highlights Checkmarks */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#C59B4E]" />
                <span>Canva (90%) • Ps & Ai (50%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#C59B4E]" />
                <span>Meta Ads Fundamentals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#C59B4E]" />
                <span>Punctual & Quick Learner</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Portrait & Terminal Info Card */}
          <div className="lg:col-span-5 relative space-y-4">
            {/* Featured Portrait Showcase Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/70 bg-[#0F172A] shadow-2xl group">
              <div className="h-80 sm:h-96 md:h-[400px] w-full relative overflow-hidden bg-slate-900">
                <img
                  src={customPhoto}
                  alt="Eshan Sanjot — Graphic Designer"
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/30 to-transparent" />

                {/* Hidden File Input for direct photo replacement */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handlePhotoUpload}
                  accept="image/*"
                  className="hidden"
                />

                {/* Floating ES Monogram Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2.5 p-2 bg-[#0B0F17]/85 backdrop-blur-md rounded-xl border border-[#C59B4E]/40 shadow-lg">
                  <ESMonogram size={34} />
                  <div>
                    <div className="text-xs font-heading font-extrabold text-white tracking-wide">
                      ESHAN SANJOT
                    </div>
                    <div className="text-[10px] font-mono text-[#E5C16C]">
                      Graphic Designer
                    </div>
                  </div>
                </div>

                {/* Status Float Right & Quick Photo Upload Button */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    title="Upload / Replace photo"
                    className="p-1.5 rounded-full bg-slate-900/80 hover:bg-[#C59B4E] text-slate-300 hover:text-black border border-slate-700 hover:border-[#C59B4E] transition-all text-[10px] flex items-center gap-1 backdrop-blur-md px-2.5"
                  >
                    <Camera size={12} />
                    <span className="font-mono font-bold">Photo</span>
                  </button>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    ACTIVE
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-xs font-mono text-slate-300 block">Graphic Designer & Marketer</span>
                    <span className="text-sm font-heading font-bold text-white">Karachi, Pakistan</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-[#E5C16C] block">Bano Qabil Certified</span>
                    <span className="text-xs font-mono font-semibold text-white">Student ID: 471554</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Terminal Manifest */}
            <div className="relative z-10">
              <CodeTerminalGraphic className="w-full" />
            </div>

            {/* Ambient Backing Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#C59B4E]/20 via-indigo-500/15 to-emerald-500/15 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>

        {/* Bottom Key Stat Counters Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight flex items-baseline gap-1">
                <span className="bg-gradient-to-r from-[#F5D77F] via-white to-slate-200 bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </div>
              <div className="text-xs font-mono font-semibold uppercase text-[#E5C16C] tracking-wider">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 font-sans">
                {stat.suffix}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Marquee Pills */}
        <div className="mt-12">
          <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider mb-3">
            Core Skills & Design Software:
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {[
              { name: 'Canva (90%)', color: 'text-pink-400 border-pink-500/30' },
              { name: 'Adobe Photoshop (50%)', color: 'text-sky-400 border-sky-500/30' },
              { name: 'Adobe Illustrator (50%)', color: 'text-amber-400 border-amber-500/30' },
              { name: 'Logo Design & Monograms', color: 'text-[#E5C16C] border-[#C59B4E]/40' },
              { name: 'Digital Marketing — Meta Ads', color: 'text-emerald-400 border-emerald-500/30' },
              { name: 'Poster & Flyer Design', color: 'text-purple-400 border-purple-500/30' },
              { name: 'Social Media Graphics', color: 'text-rose-400 border-rose-500/30' },
              { name: 'Business Cards & Invoicing', color: 'text-teal-400 border-teal-500/30' },
              { name: 'MS Office & PowerPoint', color: 'text-blue-400 border-blue-500/30' },
              { name: 'Time Management & Teamwork', color: 'text-amber-300 border-amber-500/30' },
            ].map((tech) => (
              <span
                key={tech.name}
                className={`px-3 py-1.5 rounded-lg bg-slate-900/80 border ${tech.color} shadow-xs`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
