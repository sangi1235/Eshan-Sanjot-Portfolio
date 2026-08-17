import React, { useState } from 'react';
import {
  ESBrandMockup,
  GrandAutoMockup,
  ProDawoodMockup,
  AztecIntelMockup,
} from './InteractiveMockups';
import { PROJECTS_DATA } from '../data/portfolioData';
import {
  Layers,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Github,
  CheckCircle2,
  Palette,
} from 'lucide-react';
import { ProjectItem } from '../types';

export const FeaturedProject: React.FC<{ onSelectProject: (p: ProjectItem) => void }> = ({
  onSelectProject,
}) => {
  const [activeTab, setActiveTab] = useState<'es-brand' | 'grand-auto' | 'pro-dawood' | 'aztec-intel'>('es-brand');

  const esBrand = PROJECTS_DATA.find((p) => p.id === 'es-brand-identity') || PROJECTS_DATA[0];
  const grandAuto = PROJECTS_DATA.find((p) => p.id === 'grand-auto-store')!;
  const proDawood = PROJECTS_DATA.find((p) => p.id === 'pro-dawood')!;
  const aztecIntel = PROJECTS_DATA.find((p) => p.id === 'aztec-intel')!;

  const getActiveProject = () => {
    switch (activeTab) {
      case 'es-brand':
        return esBrand;
      case 'grand-auto':
        return grandAuto;
      case 'pro-dawood':
        return proDawood;
      case 'aztec-intel':
        return aztecIntel;
      default:
        return esBrand;
    }
  };

  const project = getActiveProject();

  return (
    <section id="featured" className="py-20 sm:py-28 bg-[#0B0F17] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#E5C16C]">
            04 / FLAGSHIP CASE STUDIES & LIVE PREVIEWS
          </span>
          <span className="h-px w-10 bg-slate-800" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Interactive Flagship Deployments
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Explore bespoke luxury branding systems, e-commerce engines, financial academies, and AI automation platforms.
            </p>
          </div>

          {/* Interactive Switcher Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveTab('es-brand')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'es-brand'
                  ? 'bg-gradient-to-r from-[#C59B4E] to-[#99732B] text-black shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1. ES Luxury Brand Identity
            </button>
            <button
              onClick={() => setActiveTab('grand-auto')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'grand-auto'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              2. Grand Auto Store
            </button>
            <button
              onClick={() => setActiveTab('pro-dawood')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'pro-dawood'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              3. Pro Dawood Trading
            </button>
            <button
              onClick={() => setActiveTab('aztec-intel')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'aztec-intel'
                  ? 'bg-sky-500 text-black shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              4. Aztec Intel AI
            </button>
          </div>
        </div>

        {/* 2-Column Showcase Box */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Case Study Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-[#E5C16C] border border-[#C59B4E]/30 text-[10px] font-mono uppercase font-bold">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-slate-400">{project.year}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-slate-300">
                {project.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-normal">
              {project.description}
            </p>

            {/* Metrics Chips */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/60 text-center">
                    <div className="text-base font-bold text-[#E5C16C] font-heading">{m.value}</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Deliverables */}
            <div className="space-y-1.5 pt-2 border-t border-slate-800">
              <div className="text-[11px] font-mono uppercase text-slate-400 font-bold">
                Key Deliverables & Specifications:
              </div>
              {project.deliverables?.slice(0, 3).map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-[#C59B4E] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 bg-slate-800 text-slate-300 text-[10px] font-mono rounded-lg border border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 pt-3">
              <button
                onClick={() => onSelectProject(project)}
                className="px-4 py-2.5 bg-[#C59B4E] hover:bg-[#d5ab5a] text-black font-mono text-xs uppercase font-extrabold rounded-xl transition-all flex items-center gap-1.5 shadow-md shadow-[#C59B4E]/20"
              >
                <span>Inspect Full Case Study</span>
                <ArrowUpRight size={14} />
              </button>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs uppercase font-bold rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink size={14} />
                  <span>Live URL</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Live Interactive Mockup Widget */}
          <div className="lg:col-span-7">
            {activeTab === 'es-brand' && <ESBrandMockup />}
            {activeTab === 'grand-auto' && <GrandAutoMockup />}
            {activeTab === 'pro-dawood' && <ProDawoodMockup />}
            {activeTab === 'aztec-intel' && <AztecIntelMockup />}
          </div>
        </div>
      </div>
    </section>
  );
};
