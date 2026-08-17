import React from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import {
  Code2,
  ShoppingCart,
  Layout,
  Bot,
  Zap,
  ShieldCheck,
  Check,
  ArrowUpRight,
  Sparkles,
  Palette,
  Package,
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'palette':
        return <Palette size={22} className="text-[#E5C16C]" />;
      case 'package':
        return <Package size={22} className="text-amber-400" />;
      case 'layout':
        return <Layout size={22} className="text-purple-400" />;
      case 'code-2':
        return <Code2 size={22} className="text-sky-400" />;
      case 'shopping-cart':
        return <ShoppingCart size={22} className="text-emerald-400" />;
      case 'bot':
        return <Bot size={22} className="text-pink-400" />;
      default:
        return <Palette size={22} className="text-[#E5C16C]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0B0F17] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#E5C16C]">
            02 / SPECIALIZED CREATIVE & TECHNICAL SERVICES
          </span>
          <span className="h-px w-10 bg-slate-800" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Design & Development Services
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              From bespoke monogram branding and luxury print packaging to high-performance React web applications and e-commerce systems.
            </p>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 bg-gradient-to-r from-[#C59B4E] to-[#99732B] text-black font-mono text-xs uppercase font-extrabold rounded-xl transition-all shadow-md shadow-[#C59B4E]/20 inline-flex items-center gap-2 shrink-0 self-start md:self-auto"
          >
            <span>Request Custom Proposal</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between relative group hover:shadow-xl shadow-xs"
            >
              {service.popular && (
                <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#C59B4E]/15 border border-[#C59B4E]/40 text-[#E5C16C] text-[10px] font-mono font-bold uppercase">
                  <Sparkles size={11} />
                  <span>Popular</span>
                </div>
              )}

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {getIcon(service.icon)}
                </div>

                <div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    {service.title}
                  </h3>
                  <div className="text-xs text-[#E5C16C] font-mono mt-1">
                    {service.tagline}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono uppercase text-slate-400 font-bold">
                    Key Deliverables:
                  </div>
                  <div className="space-y-1.5">
                    {service.deliverables.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check size={14} className="text-[#C59B4E] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">Fixed / Milestone</span>
                <a
                  href="#contact"
                  className="text-xs font-mono text-[#E5C16C] font-bold hover:underline flex items-center gap-1"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
