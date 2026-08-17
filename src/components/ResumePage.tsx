import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ESMonogram } from './ArtElements';
import {
  Printer,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Globe,
  ExternalLink,
  CheckCircle2,
  FileText,
  Sparkles,
  Download,
} from 'lucide-react';

interface ResumePageProps {
  onBackToPortfolio: () => void;
}

export const ResumePage: React.FC<ResumePageProps> = ({ onBackToPortfolio }) => {
  const [activeTab, setActiveTab] = useState<'official' | 'designer'>('official');
  const [photoSrc] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('es_custom_portrait');
      return saved || PERSONAL_INFO.portraitImage;
    } catch {
      return PERSONAL_INFO.portraitImage;
    }
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      {/* Top Action Bar (hidden on print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 no-print">
        <button
          onClick={onBackToPortfolio}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-mono text-xs uppercase font-bold rounded-xl transition-all flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          <span>← Back to Interactive Portfolio</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Format Switcher */}
          <div className="bg-slate-900 border border-slate-800 p-1 rounded-xl flex items-center text-xs font-mono">
            <button
              onClick={() => setActiveTab('official')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'official'
                  ? 'bg-[#C59B4E] text-black font-extrabold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Exact CV Document
            </button>
            <button
              onClick={() => setActiveTab('designer')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'designer'
                  ? 'bg-[#C59B4E] text-black font-extrabold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Creative Studio CV
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-gradient-to-r from-[#C59B4E] to-[#D4AF37] hover:from-[#d5ab5a] hover:to-[#B88A34] text-black font-mono text-xs uppercase font-extrabold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-[#C59B4E]/20"
          >
            <Printer size={16} />
            <span>Print / PDF</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: EXACT RESUME AS UPLOADED IN PDF */}
      {activeTab === 'official' && (
        <div
          id="printable-cv"
          className="max-w-4xl mx-auto bg-white text-slate-900 rounded-2xl p-8 sm:p-14 shadow-2xl space-y-6 font-sans border border-slate-200"
        >
          {/* Top Profile Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-4 border-b border-slate-200">
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                <span className="font-semibold text-slate-800">Address:</span> {PERSONAL_INFO.address}
              </p>
              <p className="text-xs text-slate-600 font-normal">
                <span className="font-semibold text-slate-800">Cell:</span> {PERSONAL_INFO.phoneRaw}
              </p>
              <p className="text-xs text-slate-600 font-normal">
                <span className="font-semibold text-slate-800">Email:</span>{' '}
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-700 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </p>
              <p className="text-xs text-slate-600 font-normal">
                <span className="font-semibold text-slate-800">Portfolio:</span>{' '}
                <a
                  href={PERSONAL_INFO.portfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 hover:underline font-mono"
                >
                  {PERSONAL_INFO.portfolioUrl}
                </a>
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <img
                src={photoSrc}
                alt={PERSONAL_INFO.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover object-[center_20%] border-2 border-slate-300 shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* OBJECTIVE */}
          <div className="space-y-2">
            <div className="bg-[#1E3A5F] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
              OBJECTIVE
            </div>
            <p className="text-xs text-slate-700 leading-relaxed px-1 font-normal">
              {PERSONAL_INFO.objective}
            </p>
          </div>

          {/* QUALIFICATION */}
          <div className="space-y-2">
            <div className="bg-[#1E3A5F] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
              QUALIFICATION
            </div>
            <div className="text-xs text-slate-800 space-y-1 px-1 font-normal">
              <p className="leading-relaxed">
                ● <strong>Matriculation (Science group)</strong> – Iranian Technical Govt Sec School (2022–2025)
              </p>
              <p className="leading-relaxed">
                ● <strong>First Year in Process (Humanities Arts group)</strong> – S.M Arts and Commerce College (2025–2026)
              </p>
            </div>
          </div>

          {/* SKILLS HIGHLIGHTS */}
          <div className="space-y-2">
            <div className="bg-[#1E3A5F] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
              SKILLS HIGHLIGHTS
            </div>
            <ul className="text-xs text-slate-800 space-y-1.5 list-disc list-inside px-1 font-normal">
              <li>
                <strong>Graphic Design</strong> (Tools: Canva, Photoshop, Illustrator)
              </li>
              <li>
                <strong>Digital Marketing</strong> – Meta Ads
              </li>
              <li>
                <strong>Logo, Poster & Social Media Design</strong>
              </li>
              <li>Time Management</li>
              <li>Teamwork</li>
              <li>
                <strong>Computer Skills</strong> (MS Office)
              </li>
              <li>Quick Learner</li>
            </ul>
          </div>

          {/* PROJECTS */}
          <div className="space-y-2">
            <div className="bg-[#1E3A5F] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
              PROJECTS
            </div>
            <div className="px-1 space-y-1.5 text-xs text-slate-800 font-normal">
              <p className="font-bold text-slate-900">
                M.K Tailors — Brand Identity Package — Course Project (Bano Qabil, 2025)
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 pl-2">
                <li>
                  Designed a complete branding package for a men's tailoring business, including logo, business card, invoice template, official letterhead, and promotional posters
                </li>
                <li>Created social media and opening-day marketing graphics for brand launch</li>
              </ul>
              <p className="text-slate-600 pt-1">
                View project:{' '}
                <a
                  href="https://bit.ly/3Rh9UB1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 underline font-semibold inline-flex items-center gap-1"
                >
                  <span>M.K Tailors Project PDF</span>
                  <ExternalLink size={11} />
                </a>
              </p>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="space-y-2">
            <div className="bg-[#1E3A5F] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
              EXPERIENCE
            </div>
            <div className="px-1 space-y-2.5 text-xs text-slate-800 font-normal">
              <div>
                <p className="font-bold text-slate-900">Graphic Design Coursework — 3 months</p>
                <ul className="list-disc list-inside text-slate-700 pl-2 mt-0.5">
                  <li>Completed hands-on projects in logo design, branding, and social media graphics</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-slate-900">Digital Marketing Coursework — 2 months</p>
                <ul className="list-disc list-inside text-slate-700 pl-2 mt-0.5">
                  <li>Learned Meta Ads fundamentals — campaign setup, targeting, and ad creation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* LANGUAGES */}
          <div className="space-y-2">
            <div className="bg-[#1E3A5F] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
              LANGUAGES
            </div>
            <ul className="text-xs text-slate-800 space-y-1 list-disc list-inside px-1 font-normal">
              <li>Urdu (Native)</li>
              <li>English (Professional)</li>
            </ul>
          </div>
        </div>
      )}

      {/* VIEW 2: MODERN CREATIVE STUDIO CV */}
      {activeTab === 'designer' && (
        <div
          id="printable-cv-dark"
          className="max-w-4xl mx-auto bg-[#0F172A] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl text-slate-200 space-y-8"
        >
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={photoSrc}
                    alt={PERSONAL_INFO.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-[center_20%] border-2 border-[#C59B4E]/60 shadow-lg shadow-[#C59B4E]/10"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-1 -right-1 p-0.5 bg-[#0F172A] rounded-md">
                    <ESMonogram size={18} variant="gold" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                    {PERSONAL_INFO.name}
                  </h1>
                  <div className="text-xs sm:text-sm font-mono text-[#E5C16C] font-bold mt-0.5">
                    {PERSONAL_INFO.title} • {PERSONAL_INFO.secondaryTitle}
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-slate-400 space-y-1 sm:text-right">
                <div className="text-[#E5C16C] font-bold">Bano Qabil Certified (ID: 471554)</div>
                <div>Instructor: Sir Shujaat Ejaz</div>
                <div className="text-emerald-400 font-bold">Available for Work</div>
              </div>
            </div>

            {/* Contact Details Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-2">
              <div className="flex items-center gap-1.5">
                <Mail size={13} className="text-[#E5C16C]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone size={13} className="text-emerald-400" />
                <span>{PERSONAL_INFO.phoneRaw}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={13} className="text-purple-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe size={13} className="text-sky-400" />
                <a href={PERSONAL_INFO.portfolioUrl} target="_blank" rel="noreferrer" className="hover:underline">
                  {PERSONAL_INFO.portfolioUrl}
                </a>
              </div>
            </div>
          </div>

          {/* OBJECTIVE */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase font-bold tracking-widest text-[#E5C16C] border-b border-slate-800 pb-1">
              01 / CAREER OBJECTIVE
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-normal">
              {PERSONAL_INFO.objective}
            </p>
          </div>

          {/* SKILLS */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase font-bold tracking-widest text-[#E5C16C] border-b border-slate-800 pb-1">
              02 / CORE SKILLS & TOOLS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="font-bold text-white font-mono">Graphic Design (Tools):</span>
                <p className="text-slate-400 mt-1">
                  Canva (90%), Adobe Photoshop (50%), Adobe Illustrator (50%), Logo Design, Monograms, Brand Identity Packages.
                </p>
              </div>

              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="font-bold text-white font-mono">Digital Marketing & Meta Ads:</span>
                <p className="text-slate-400 mt-1">
                  Meta Ads Manager, Campaign Setup, Audience Targeting, Ad Creative Design, High-CTR Social Media Copy.
                </p>
              </div>

              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="font-bold text-white font-mono">Print & Social Media Collateral:</span>
                <p className="text-slate-400 mt-1">
                  Business Visiting Cards, Custom Invoices, Official Letterheads, Grand Opening Posters, Flyers, Instagram/Facebook Posts.
                </p>
              </div>

              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="font-bold text-white font-mono">Professional & Computer Skills:</span>
                <p className="text-slate-400 mt-1">
                  MS Office (Word, Excel, PowerPoint), Time Management, Teamwork, Quick Learner, Bilingual (Urdu & English).
                </p>
              </div>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase font-bold tracking-widest text-[#E5C16C] border-b border-slate-800 pb-1">
              03 / FEATURED PROJECT — M.K TAILORS
            </h2>

            <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-sm font-heading">
                  M.K Tailors — Complete Brand Identity Package
                </span>
                <span className="text-[10px] font-mono text-[#E5C16C] uppercase font-bold">
                  Bano Qabil (2025)
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed font-sans">
                Designed a complete branding package for a men's custom tailoring business (Master Kishan), including heritage sewing machine logo, double-sided measurement visiting cards, official order letterhead, custom invoice templates, and vintage opening day posters.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                  Logo & Monogram
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-emerald-300 border border-slate-700">
                  Business Card
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700">
                  Invoice & Letterhead
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-rose-300 border border-slate-700">
                  Opening Posters
                </span>
              </div>
            </div>
          </div>

          {/* EDUCATION & EXPERIENCE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase font-bold tracking-widest text-[#E5C16C] border-b border-slate-800 pb-1">
                04 / EDUCATION
              </h2>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="font-bold text-white">First Year in Process (Humanities Arts)</div>
                  <div className="text-slate-400">S.M Arts and Commerce College (2025–2026)</div>
                </div>
                <div>
                  <div className="font-bold text-white">Matriculation (Science Group / Bio Science)</div>
                  <div className="text-slate-400">Iranian Technical Govt Sec School (2022–2025)</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase font-bold tracking-widest text-[#E5C16C] border-b border-slate-800 pb-1">
                05 / COURSEWORK EXPERIENCE
              </h2>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="font-bold text-white">Graphic Design Coursework (3 Months)</div>
                  <div className="text-slate-400">Bano Qabil Program — HOL Foundation Campus</div>
                </div>
                <div>
                  <div className="font-bold text-white">Digital Marketing Coursework (2 Months)</div>
                  <div className="text-slate-400">Meta Ads Fundamentals — Campaign Setup & Targeting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
