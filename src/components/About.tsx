import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ESMonogram } from './ArtElements';
import {
  Palette,
  Layout,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
  Sparkles,
  Award,
  Layers,
  Megaphone,
} from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Palette,
      title: 'Logo Design & Brand Identity Packages',
      desc: 'Crafting memorable visual identities, bespoke brand marks, and complete brand kits with cohesive color geometry and typography.',
      color: 'text-[#E5C16C] border-[#C59B4E]/30 bg-[#C59B4E]/10',
    },
    {
      icon: Layers,
      title: 'Business Stationery, Invoices & Print',
      desc: 'Double-sided visiting cards with measurement fields, formal client letterheads, itemized billing invoices, and receipt vouchers.',
      color: 'text-purple-400 border-purple-500/20 bg-purple-500/10',
    },
    {
      icon: ShieldCheck,
      title: 'Grand Opening Posters & Flyers',
      desc: 'Eye-catching storefront announcement posters, vintage promotional flyers, and event graphics designed for high customer draw.',
      color: 'text-rose-400 border-rose-500/20 bg-rose-500/10',
    },
    {
      icon: Megaphone,
      title: 'Social Media Graphics & Meta Ads',
      desc: 'High-converting Instagram & Facebook service flyers, story templates, and targeted Meta Ads campaign setups.',
      color: 'text-sky-400 border-sky-500/20 bg-sky-500/10',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#090D16] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#E5C16C]">
            01 / ABOUT ME & BACKGROUND
          </span>
          <span className="h-px w-10 bg-slate-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative Story & Studio Details */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Turning Creative Ideas Into Clean, Visually Appealing Designs
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans font-normal">
              {PERSONAL_INFO.aboutStory.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Badges */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#E5C16C] font-bold uppercase">
                  <GraduationCap size={16} />
                  <span>Bano Qabil Program</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  Graphic Design Certified (3 Months)
                </div>
                <div className="text-xs text-slate-400">
                  HOL Foundation Campus • Student ID: 471554
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold uppercase">
                  <Award size={16} />
                  <span>Digital Marketing</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  Meta Ads Fundamentals (2 Months)
                </div>
                <div className="text-xs text-slate-400">
                  Campaign Setup, Targeting & High-CTR Ad Creatives
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-4 py-2.5 bg-gradient-to-r from-[#C59B4E] to-[#99732B] text-black font-mono text-xs uppercase font-extrabold rounded-xl transition-all shadow-md shadow-[#C59B4E]/20 flex items-center gap-2"
              >
                <span>Explore M.K Tailors Project</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://wa.me/923363179298"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-mono text-xs uppercase font-bold rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Chat on WhatsApp (0336-3179298)</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Core Pillars & Brand Banner Card */}
          <div className="lg:col-span-5 space-y-4">
            {/* ES Brand Banner Mockup */}
            <div className="rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-xl group">
              <img
                src={PERSONAL_INFO.brandBannerImage}
                alt="ES — Eshan Sanjot Graphic Designer"
                className="w-full h-48 sm:h-52 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-[#E5C16C] font-semibold">Portfolio 2025 • Eshan Sanjot</span>
                <span className="text-slate-400 font-bold">Graphic Designer</span>
              </div>
            </div>

            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
              CORE AREAS OF SPECIALIZATION:
            </div>
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-1.5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg border ${p.color}`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="font-bold font-heading text-base text-white">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-10 font-sans">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
