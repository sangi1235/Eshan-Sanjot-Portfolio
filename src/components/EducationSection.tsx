import React from 'react';
import { EDUCATION_LIST } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-24 bg-[#090D16] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#E5C16C]">
            07 / EDUCATION & QUALIFICATIONS
          </span>
          <span className="h-px w-10 bg-slate-800" />
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Academic Qualifications & Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Formal education at S.M Arts and Commerce College, technical matriculation, and certified training at Bano Qabil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_LIST.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#E5C16C]">
                  <GraduationCap size={20} />
                </div>

                <div>
                  <h3 className="text-lg font-bold font-heading text-white">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-mono text-[#E5C16C] font-semibold mt-0.5">
                    {edu.institution}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <Calendar size={13} />
                  <span>{edu.period}</span>
                  <span>•</span>
                  <span className="text-emerald-400">{edu.status}</span>
                </div>

                <div className="text-xs font-medium text-slate-300">
                  {edu.field}
                </div>

                {edu.details && (
                  <p className="text-xs text-slate-400 leading-relaxed font-sans pt-2 border-t border-slate-800/80">
                    {edu.details}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                <CheckCircle2 size={13} />
                <span>Verified Qualification</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
