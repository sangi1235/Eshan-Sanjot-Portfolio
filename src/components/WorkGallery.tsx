import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import {
  ExternalLink,
  Github,
  Layers,
  ArrowUpRight,
  Maximize2,
  CheckCircle2,
  Sparkles,
  Palette,
} from 'lucide-react';
import { ESMonogram } from './ArtElements';

export const WorkGallery: React.FC<{ onSelectProject: (p: ProjectItem) => void }> = ({
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterTabs = ['All', 'Branding', 'Graphic Design', 'Packaging', 'UI/UX Design', 'Visual Identity', 'Typography'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#090D16] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#E5C16C]">
            05 / COMPLETE PORTFOLIO & WORK ARCHIVE
          </span>
          <span className="h-px w-10 bg-slate-800" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Selected Graphic & Brand Works
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Explore bespoke luxury monogram branding, luxury packaging dielines, corporate identity systems, and high-conversion UI/UX layouts.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeFilter === tab
                    ? 'bg-[#C59B4E] text-black font-extrabold shadow-md shadow-[#C59B4E]/20'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Grid of Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all group cursor-pointer flex flex-col justify-between hover:shadow-2xl space-y-4"
            >
              {/* Optional Visual Image Header */}
              {project.imageUrl ? (
                <div className="h-44 w-full relative overflow-hidden bg-slate-950">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0B0F17]/90 text-[#E5C16C] border border-[#C59B4E]/40 text-[10px] font-mono uppercase font-bold backdrop-blur-sm">
                    {project.category}
                  </span>
                  <span className="absolute top-3 right-3 text-[11px] font-mono text-slate-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>
              ) : null}

              <div className="p-6 pt-2 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  {!project.imageUrl && (
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[#E5C16C] text-[10px] font-mono uppercase font-bold">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">{project.year}</span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#E5C16C] transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight size={18} className="text-slate-400 group-hover:text-[#E5C16C] transition-colors shrink-0" />
                    </h3>
                    <div className="text-xs text-slate-400 font-mono mt-1 line-clamp-1">
                      {project.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-1 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                    {project.deliverables.slice(0, 2).map((d, i) => (
                      <div key={i} className="flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C59B4E] shrink-0"></span>
                        <span className="truncate">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tools.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-slate-800/80 text-slate-400 text-[10px] font-mono rounded border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-1.5 py-0.5 text-slate-400 text-[10px] font-mono">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono font-bold text-[#E5C16C] group-hover:underline">
                    Case Study →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
