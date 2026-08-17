import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Clock, DollarSign, Palette, Coins } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const InteractiveEstimator: React.FC = () => {
  const [currency, setCurrency] = useState<'PKR' | 'USD'>('PKR');
  const [projectType, setProjectType] = useState<'branding' | 'packaging' | 'stationery' | 'social'>('branding');
  const [assetVolume, setAssetVolume] = useState<'essential' | 'complete' | 'enterprise'>('complete');
  const [features, setFeatures] = useState<string[]>(['vector-source', 'brand-book', 'stationery']);
  const [timeline, setTimeline] = useState<'standard' | 'rush'>('standard');

  const toggleFeature = (featureId: string) => {
    setFeatures((prev) =>
      prev.includes(featureId) ? prev.filter((f) => f !== featureId) : [...prev, featureId]
    );
  };

  // Calculate estimated days and price in both PKR and USD
  const calculateEstimate = () => {
    let baseDays = 5;
    let baseCostPKR = 12000;
    let baseCostUSD = 75;

    if (projectType === 'branding') {
      // Luxury Brand Identity & Monogram System
      baseDays = 6;
      baseCostPKR = 18000;
      baseCostUSD = 110;
    } else if (projectType === 'packaging') {
      baseDays = 7;
      baseCostPKR = 22000;
      baseCostUSD = 140;
    } else if (projectType === 'stationery') {
      baseDays = 4;
      baseCostPKR = 10000;
      baseCostUSD = 60;
    } else if (projectType === 'social') {
      baseDays = 4;
      baseCostPKR = 9000;
      baseCostUSD = 55;
    }

    if (assetVolume === 'complete') {
      baseDays += 3;
      baseCostPKR += 8000;
      baseCostUSD += 50;
    } else if (assetVolume === 'enterprise') {
      baseDays += 6;
      baseCostPKR += 18000;
      baseCostUSD += 110;
    }

    // Feature add-ons
    baseCostPKR += features.length * 3000;
    baseCostUSD += features.length * 20;
    baseDays += Math.ceil(features.length * 0.8);

    if (timeline === 'rush') {
      baseDays = Math.max(2, Math.ceil(baseDays * 0.5));
      baseCostPKR = Math.round(baseCostPKR * 1.25);
      baseCostUSD = Math.round(baseCostUSD * 1.25);
    }

    return {
      days: baseDays,
      costPKR: baseCostPKR,
      costUSD: baseCostUSD,
      cost: currency === 'PKR' ? baseCostPKR : baseCostUSD,
    };
  };

  const { days, costPKR, costUSD, cost } = calculateEstimate();

  const handleWhatsAppInquiry = () => {
    const formattedPrice = currency === 'PKR' ? `Rs. ${costPKR.toLocaleString('en-PK')} PKR` : `$${costUSD} USD`;
    const text = `Hi Eshan Sanjot! I used your graphic design project estimator:
- Design Scope: ${projectType === 'branding' ? 'Luxury Brand Identity & Monogram System' : projectType.toUpperCase()}
- Deliverable Tier: ${assetVolume.toUpperCase()}
- Included Assets: ${features.join(', ')}
- Timeline: ${timeline === 'rush' ? 'Rush Priority' : 'Standard Delivery'}
- Budget Estimate: ~${formattedPrice} (${days} days)

I would like to commission this design project!`;

    window.open(`https://wa.me/923363179298?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="estimator" className="py-20 bg-slate-900/60 border-y border-slate-800 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C59B4E]/15 border border-[#C59B4E]/30 text-[#E5C16C] text-xs font-mono font-medium mb-3">
            <Calculator size={14} />
            <span>Interactive Design Estimator & Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Estimate Your Brand Identity & Design Budget
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Calculate instant budget approximations in Pakistani Rupees (PKR) or USD for bespoke logo monograms, complete business stationery, invoices, and social media kits.
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center gap-1 p-1 bg-slate-950 border border-slate-800 rounded-xl mt-5">
            <button
              type="button"
              onClick={() => setCurrency('PKR')}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                currency === 'PKR'
                  ? 'bg-[#C59B4E] text-black shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              PKR (₨ Pakistani Rupee)
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-[#C59B4E] text-black shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              USD ($ International)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                1. Select Design Discipline
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'branding', label: 'Luxury Brand & Monogram', desc: 'Logos, Marks & Guidelines' },
                  { id: 'packaging', label: 'Packaging & Labels', desc: 'Boxes, Sleeves & Dielines' },
                  { id: 'stationery', label: 'Stationery & Invoices', desc: 'Cards, Letterheads & Bills' },
                  { id: 'social', label: 'Posters & Meta Ads', desc: 'Opening Posters & Social Ads' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setProjectType(type.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      projectType === type.id
                        ? 'bg-[#C59B4E]/15 border-[#C59B4E] text-white shadow-sm'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-xs text-white">{type.label}</div>
                    <div className="text-[10px] text-slate-400 mt-1">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scope / Volume */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                2. Deliverables Volume & Scale
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'essential', label: 'Essential Tier', sub: 'Primary Mark & Vector File' },
                  { id: 'complete', label: 'Complete Suite', sub: 'Logo, Visiting Card & Letterhead' },
                  { id: 'enterprise', label: 'Master Kit', sub: 'Full Stationery, Invoices & Brand Book' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setAssetVolume(opt.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      assetVolume === opt.id
                        ? 'bg-[#C59B4E]/15 border-[#C59B4E] text-white'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-xs text-white">{opt.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{opt.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Features */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                3. Design Assets & Production Inclusions
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'vector-source', label: 'Infinite Vector Files (AI / EPS / SVG)' },
                  { id: 'brand-book', label: 'Color Palette & Typography Brand Sheet' },
                  { id: 'stationery', label: 'Double-Sided Visiting Card & Letterhead' },
                  { id: 'invoice-template', label: 'Itemized Invoice / Order Form Template' },
                  { id: 'poster-flyer', label: 'Grand Opening Announcement Poster' },
                  { id: 'meta-ads', label: 'High-Converting Meta Ads Creative Kit' },
                ].map((f) => {
                  const active = features.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => toggleFeature(f.id)}
                      className={`p-2.5 rounded-xl border flex items-center justify-between text-xs transition-all ${
                        active
                          ? 'bg-[#C59B4E]/10 border-[#C59B4E] text-[#E5C16C]'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span>{f.label}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center ${
                          active ? 'bg-[#C59B4E] text-black' : 'border border-slate-700'
                        }`}
                      >
                        {active && <Check size={12} strokeWidth={3} />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Timeline */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                4. Turnaround Priority
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTimeline('standard')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    timeline === 'standard'
                      ? 'bg-[#C59B4E]/15 border-[#C59B4E] text-white'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-semibold text-xs text-white">Standard Delivery</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Careful Crafting & Iterations</div>
                </button>
                <button
                  type="button"
                  onClick={() => setTimeline('rush')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    timeline === 'rush'
                      ? 'bg-amber-500/15 border-amber-400 text-white'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-semibold text-xs text-white flex items-center gap-1.5">
                    <span>⚡ Rush Priority (+25%)</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Expedited Fast-Track Delivery</div>
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-950 border-2 border-[#C59B4E]/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Sparkles size={120} className="text-[#C59B4E]" />
            </div>

            <div className="border-b border-slate-800 pb-4">
              <div className="text-xs font-mono uppercase text-[#E5C16C] font-semibold tracking-wider">
                ESTIMATED PROPOSAL SUMMARY
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mt-1">
                {projectType === 'branding' ? 'Luxury Brand Identity & Monogram' : 'Custom Design Proposal'}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Clock size={14} className="text-[#E5C16C]" />
                  <span>Estimated Time</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
                  {days} <span className="text-xs text-slate-400 font-normal">Days</span>
                </div>
              </div>

              <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Coins size={14} className="text-emerald-400" />
                  <span>Approx. Budget</span>
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 mt-1 font-heading">
                  {currency === 'PKR' ? `Rs. ${costPKR.toLocaleString('en-PK')}` : `$${costUSD}`}
                  <span className="text-xs text-slate-400 font-normal ml-1">{currency}</span>
                </div>
              </div>
            </div>

            {/* Quick PKR Breakdown Box */}
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5 text-xs font-mono">
              <div className="text-slate-400 uppercase text-[10px] font-bold text-[#E5C16C]">
                Typical Monogram & Branding Ranges in PKR:
              </div>
              <div className="flex justify-between text-slate-300 text-[11px]">
                <span>• Essential Monogram:</span>
                <span className="text-white font-bold">Rs. 8,000 – 15,000</span>
              </div>
              <div className="flex justify-between text-slate-300 text-[11px]">
                <span>• Complete Identity Kit:</span>
                <span className="text-white font-bold">Rs. 18,000 – 35,000</span>
              </div>
              <div className="flex justify-between text-slate-300 text-[11px]">
                <span>• Master Corporate Suite:</span>
                <span className="text-white font-bold">Rs. 40,000 – 65,000+</span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="text-slate-400 font-mono uppercase tracking-wider text-[11px]">
                Standard Package Inclusions:
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Check size={14} className="text-emerald-400 shrink-0" />
                <span>Direct Collaboration with Designer Eshan Sanjot</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Check size={14} className="text-emerald-400 shrink-0" />
                <span>Print-Ready 300 DPI CMYK + Vector Source (AI, EPS, SVG, PDF)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Check size={14} className="text-emerald-400 shrink-0" />
                <span>Complete Commercial Usage Rights Transfer</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Check size={14} className="text-emerald-400 shrink-0" />
                <span>Dedicated Iterations until Final Sign-Off</span>
              </div>
            </div>

            <button
              onClick={handleWhatsAppInquiry}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C59B4E] via-[#D4AF37] to-[#A37A2C] hover:from-[#d5ab5a] hover:to-[#B88A34] text-black font-extrabold font-heading text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#C59B4E]/25 flex items-center justify-center gap-2 group"
            >
              <span>Get Exact Quote on WhatsApp</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
