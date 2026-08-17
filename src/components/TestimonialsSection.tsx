import React from 'react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';
import { Star, Quote, CheckCircle, Globe } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#0B0F17] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest font-bold text-sky-400">
            08 / CLIENT REPUTATION & REVIEWS
          </span>
          <span className="h-px w-10 bg-slate-800" />
        </div>

        <div className="mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Trusted by Founders & Agencies Worldwide
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            100% 5-star ratings across US, UK, UAE, and domestic business clients. Here is what they have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-6 shadow-xl relative"
            >
              <div className="space-y-4">
                {/* Rating & Project reference */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-sky-400 text-[10px] font-mono border border-slate-700">
                    {t.project}
                  </span>
                </div>

                <p className="text-sm text-slate-300 italic leading-relaxed font-sans">
                  "{t.quote}"
                </p>
              </div>

              {/* Author details */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm font-heading">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-400 font-sans">
                    {t.role} • <span className="text-sky-400 font-semibold">{t.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-lg">
                  <Globe size={12} className="text-emerald-400" />
                  <span>{t.country}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
