import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import {
  Palette,
  Layout,
  Layers,
  Search,
  CheckCircle2,
  Megaphone,
  FileText,
  Sparkles,
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Skills & Tools', icon: Layers },
    { id: 'branding', label: 'Logo & Brand Identity', icon: Palette },
    { id: 'tools', label: 'Design Software & Tools', icon: Layout },
    { id: 'packaging', label: 'Posters & Stationery', icon: FileText },
    { id: 'digital', label: 'Meta Ads & Marketing', icon: Megaphone },
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#090D16] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#E5C16C]">
            03 / SKILLS HIGHLIGHTS & SOFTWARE
          </span>
          <span className="h-px w-10 bg-slate-800" />
        </div>

        {/* Featured Software Gauges from Portfolio Slide 4 */}
        <div className="mb-12 p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-[#0F172A] to-slate-900 border border-[#C59B4E]/30 rounded-3xl shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-mono uppercase text-[#E5C16C] font-semibold tracking-wider flex items-center gap-1.5">
                <Sparkles size={14} />
                <span>Primary Software Proficiencies (Portfolio Slide 4)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
                Design & Digital Tool Mastery
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1.5 max-w-lg">
                Hands-on practical coursework in Canva, Adobe Photoshop, Adobe Illustrator, and Meta Ads Manager.
              </p>
            </div>

            {/* Circular Gauges */}
            <div className="flex items-center gap-6 sm:gap-8 justify-around md:justify-end">
              {/* Canva Gauge */}
              <div className="flex flex-col items-center space-y-2">
                <div className="relative w-20 h-20 rounded-full bg-slate-800 border-4 border-pink-500/80 flex items-center justify-center shadow-lg shadow-pink-500/15">
                  <span className="font-extrabold font-mono text-lg text-white">90%</span>
                </div>
                <div className="text-xs font-mono font-bold text-pink-300">Canva Pro</div>
              </div>

              {/* Photoshop Gauge */}
              <div className="flex flex-col items-center space-y-2">
                <div className="relative w-20 h-20 rounded-full bg-slate-800 border-4 border-sky-500/80 flex items-center justify-center shadow-lg shadow-sky-500/15">
                  <span className="font-extrabold font-mono text-lg text-white">50%</span>
                </div>
                <div className="text-xs font-mono font-bold text-sky-300">Photoshop</div>
              </div>

              {/* Illustrator Gauge */}
              <div className="flex flex-col items-center space-y-2">
                <div className="relative w-20 h-20 rounded-full bg-slate-800 border-4 border-amber-500/80 flex items-center justify-center shadow-lg shadow-amber-500/15">
                  <span className="font-extrabold font-mono text-lg text-white">50%</span>
                </div>
                <div className="text-xs font-mono font-bold text-amber-300">Illustrator</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              Comprehensive Design & Professional Capabilities
            </h2>
            <p className="text-slate-400 text-sm mt-1.5 max-w-xl">
              Equipped with branding systems, print-ready file preparation, MS Office document structuring, and Meta Ads.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter skills (e.g. Canva, Logo)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#C59B4E] font-mono"
            />
          </div>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                  active
                    ? 'bg-[#C59B4E] text-black shadow-md shadow-[#C59B4E]/20 font-extrabold'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <Icon size={14} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold font-heading text-white">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#E5C16C]">
                    {skill.level}%
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {skill.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#C59B4E] to-[#E5C16C] rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>{skill.experienceYears}</span>
                  <span className="text-emerald-400">Ready for Production</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
