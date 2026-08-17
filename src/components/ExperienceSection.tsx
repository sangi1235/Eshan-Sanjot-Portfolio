import React from 'react';
import { EXPERIENCE_LIST } from '../data/portfolioData';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building,
  Sparkles,
  Award,
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#0B0F17] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#E5C16C]">
            06 / COURSEWORK & PRACTICAL TRAINING
          </span>
          <span className="h-px w-10 bg-slate-800" />
        </div>

        <div className="mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Coursework & Hands-On Training
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Certified intensive training in Graphic Design (Bano Qabil Program) and Digital Marketing (Meta Ads fundamentals).
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-slate-800">
          {EXPERIENCE_LIST.map((exp, index) => (
            <div
              key={index}
              className="relative pl-10 sm:pl-16 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 sm:left-6.5 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0B0F17] border-2 border-[#C59B4E] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B4E]"></span>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all space-y-4 shadow-xl">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                        {exp.title}
                      </h3>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold uppercase">
                          Certified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#E5C16C] font-mono font-semibold mt-0.5">
                      <Building size={14} />
                      <span>{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400 text-xs">{exp.type}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-slate-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-normal">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-mono uppercase text-slate-400 font-bold">
                    Key Outcomes & Contributions:
                  </div>
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-[#C59B4E] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded-lg text-[10px] font-mono border border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
