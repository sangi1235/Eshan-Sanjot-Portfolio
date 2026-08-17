import React, { useState, useEffect } from 'react';
import { ProjectItem } from '../types';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Layers,
  Award,
  Sparkles,
  ArrowUpRight,
  MessageCircle,
  FileText,
  CreditCard,
  Receipt,
  FileCheck,
  Megaphone,
  Palette,
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeAssetTab, setActiveAssetTab] = useState<string>('logo');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isMKTailors = project.id === 'mk-tailors-brand-package';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-[#0F172A] border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-100 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-10"
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 border-b border-slate-800 pb-6 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-[#C59B4E]/15 border border-[#C59B4E]/40 text-[#E5C16C] font-mono text-xs font-bold rounded-full uppercase">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">{project.year}</span>
            <span className="text-slate-500">•</span>
            <span className="text-xs font-mono text-slate-300">Client: {project.client}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-[#E5C16C]">
            {project.subtitle}
          </p>
        </div>

        {/* SPECIAL INTERACTIVE ASSET VIEWER FOR M.K TAILORS */}
        {isMKTailors && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-[#E5C16C] font-bold tracking-wider flex items-center gap-1.5">
                <Sparkles size={14} />
                <span>Interactive Brand Assets Viewer (From Submitted Project Deck)</span>
              </span>
            </div>

            {/* Asset Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs font-mono">
              {[
                { id: 'logo', label: '1. Brand Logo Mark', icon: Palette },
                { id: 'card-front', label: '2. Visiting Card (Front)', icon: CreditCard },
                { id: 'card-back', label: '3. Measurement Ledger (Back)', icon: FileText },
                { id: 'letterhead', label: '4. Order Letterhead', icon: FileCheck },
                { id: 'invoice', label: '5. Invoicing Template', icon: Receipt },
                { id: 'poster', label: '6. Opening Day Poster', icon: Megaphone },
              ].map((tab) => {
                const Icon = tab.icon;
                const active = activeAssetTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveAssetTab(tab.id)}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                      active
                        ? 'bg-[#C59B4E] text-black font-extrabold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Icon size={13} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Rendered Asset Mockup Box */}
            <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col items-center justify-center min-h-[300px]">
              {activeAssetTab === 'logo' && (
                <div className="text-center space-y-4 max-w-md py-6">
                  {/* Vector Representation of M.K Tailors Circular Logo */}
                  <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full border-4 border-[#254B4B] bg-[#FFFDF7] p-4 flex flex-col items-center justify-center relative shadow-2xl text-slate-800">
                    <div className="text-[10px] font-mono tracking-widest text-[#254B4B] uppercase font-bold absolute top-5">
                      M . K &nbsp; T A I L O R S
                    </div>
                    <div className="flex items-center justify-between w-full px-4 text-[9px] font-mono text-[#D98A36] font-bold absolute top-14">
                      <span>ESTD</span>
                      <span>2002</span>
                    </div>

                    {/* Stylized Sewing Machine Icon */}
                    <div className="p-3 bg-[#D98A36]/15 rounded-xl border border-[#D98A36]/40 text-[#D98A36] my-auto flex flex-col items-center">
                      <span className="text-3xl">🧵</span>
                      <span className="text-[10px] font-mono font-bold text-[#254B4B]">SEWING CRAFT</span>
                    </div>

                    <div className="text-[10px] font-serif uppercase tracking-wider text-[#254B4B] font-extrabold absolute bottom-5">
                      K I S H A N &nbsp; M A S T E R
                    </div>
                  </div>
                  <div className="text-xs text-slate-300">
                    <strong>M.K Tailors Heritage Logo Mark</strong>: Circular seal featuring vintage sewing machine emblem, established year 2002, and Kishan Master designation.
                  </div>
                </div>
              )}

              {activeAssetTab === 'card-front' && (
                <div className="w-full max-w-md bg-[#FFFDF7] text-slate-900 rounded-xl p-6 shadow-2xl border-2 border-slate-300 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-300 pb-3">
                    <div>
                      <div className="text-lg font-serif font-extrabold tracking-tight text-[#111111]">
                        MASTER KISHAN
                      </div>
                      <div className="text-xs font-mono font-bold text-[#D98A36] uppercase">
                        Gents Specialist (Formal & Traditional)
                      </div>
                    </div>
                    <span className="text-2xl">✂️</span>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-700 font-sans">
                    <p>✉️ kishanmaster@gmail.com</p>
                    <p>📞 0334-3024769</p>
                    <p>📍 Shop#23, Mehran Centre, Shah Abdul Latif Bhittai Road, Moosa Lane, Karachi</p>
                  </div>

                  <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-200 flex justify-between">
                    <span>Designed by Eshan Sanjot</span>
                    <span>Visiting Card (Front Layout)</span>
                  </div>
                </div>
              )}

              {activeAssetTab === 'card-back' && (
                <div className="w-full max-w-md bg-[#FAF7F0] text-slate-900 rounded-xl p-6 shadow-2xl border-2 border-slate-300 space-y-3 font-mono text-xs">
                  <div className="text-center font-bold font-serif text-sm tracking-wider text-[#254B4B] border-b border-slate-300 pb-2">
                    M.K TAILORS — MEASUREMENT LEDGER
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="border-b border-dotted border-slate-400 pb-1">Name: _________________</div>
                    <div className="border-b border-dotted border-slate-400 pb-1">B.Date: ________________</div>
                    <div className="border-b border-dotted border-slate-400 pb-1">Quantity: ______________</div>
                    <div className="border-b border-dotted border-slate-400 pb-1">D.Date: ________________</div>
                    <div className="border-b border-dotted border-slate-400 pb-1">Total: _________________</div>
                    <div className="border-b border-dotted border-slate-400 pb-1">Advance: _______________</div>
                    <div className="border-b border-dotted border-slate-400 pb-1">Balance: _______________</div>
                    <div className="border-b border-dotted border-slate-400 pb-1">Signature: _____________</div>
                  </div>

                  <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-300 text-center">
                    Visiting Card Reverse — Integrated Customer Order & Advance Payment Slip
                  </div>
                </div>
              )}

              {activeAssetTab === 'letterhead' && (
                <div className="w-full max-w-lg bg-white text-slate-900 rounded-xl p-6 sm:p-8 shadow-2xl border border-slate-300 space-y-4 text-xs font-sans">
                  <div className="flex items-center justify-between border-b-2 border-[#254B4B] pb-3">
                    <div>
                      <div className="font-serif text-lg font-bold text-slate-900">MASTER KISHAN</div>
                      <div className="text-[10px] font-mono text-[#D98A36]">M.K TAILORS • FORMAL WEAR SPECIALIST</div>
                    </div>
                    <div className="text-[10px] text-right text-slate-600 font-mono">
                      <div>03343024769</div>
                      <div>Moosa Lane, Karachi</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-slate-700">
                    <div className="flex justify-between font-mono text-[11px]">
                      <span>Date: 27 October 2025</span>
                      <span>To: Mr. [Client]</span>
                    </div>
                    <div className="font-bold text-slate-900">Subject: Confirmation of Custom Suit Order</div>
                    <p className="leading-relaxed">
                      We are pleased to confirm your recent order for a custom-designed men's suit from Kishan Master – Tailor Master. Our team has carefully noted your fabric choice, fitting details, and delivery preferences.
                    </p>
                    <p>The estimated completion date for your order is <strong>30 October 2025</strong>.</p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex justify-between items-end">
                    <div className="text-[10px] text-slate-500">M.K Tailor — Master Kishan</div>
                    <div className="text-right">
                      <div className="font-serif italic font-bold">Kishan Master</div>
                      <div className="text-[10px] text-slate-500">Owner & Head Tailor</div>
                    </div>
                  </div>
                </div>
              )}

              {activeAssetTab === 'invoice' && (
                <div className="w-full max-w-lg bg-[#FAF8F2] text-slate-900 rounded-xl p-6 shadow-2xl border border-slate-300 space-y-4 text-xs font-mono">
                  <div className="flex justify-between items-start border-b border-slate-300 pb-3">
                    <div>
                      <div className="font-serif font-bold text-base text-slate-900">MASTER KISHAN</div>
                      <div className="text-[10px] text-slate-600">INVOICE NO. 471554 • 27-OCT-2025</div>
                    </div>
                    <div className="text-right text-[10px] text-slate-600">
                      <div>Shop#23, Mehran Centre</div>
                      <div>Moosa Lane, Karachi</div>
                    </div>
                  </div>

                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-400 font-bold">
                        <th className="py-1">Description</th>
                        <th className="py-1 text-center">Qty</th>
                        <th className="py-1 text-right">Rate</th>
                        <th className="py-1 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700">
                      <tr className="border-b border-slate-200">
                        <td className="py-1">Men's Suit (2-piece)</td>
                        <td className="py-1 text-center">1</td>
                        <td className="py-1 text-right">Rs. 5,000</td>
                        <td className="py-1 text-right">Rs. 5,000</td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-1">Shirt Stitching</td>
                        <td className="py-1 text-center">2</td>
                        <td className="py-1 text-right">Rs. 800</td>
                        <td className="py-1 text-right">Rs. 1,600</td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-1">Trouser Stitching</td>
                        <td className="py-1 text-center">1</td>
                        <td className="py-1 text-right">Rs. 700</td>
                        <td className="py-1 text-right">Rs. 700</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="flex justify-between items-center pt-2 border-t border-slate-300 font-bold">
                    <span>Subtotal: Rs. 7,300 | Advance: Rs. 2,000</span>
                    <span className="text-sm text-emerald-800">Balance Due: Rs. 5,300</span>
                  </div>

                  <div className="text-[10px] text-slate-500 italic text-center pt-1">
                    "Where every stitch defines perfection." — Eshan Sanjot
                  </div>
                </div>
              )}

              {activeAssetTab === 'poster' && (
                <div className="w-full max-w-sm bg-[#F5EFE6] text-slate-900 rounded-xl p-6 shadow-2xl border-4 border-dashed border-slate-400 space-y-4 text-center">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#D98A36] font-bold">
                    • WELCOME TO •
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-extrabold text-slate-900 tracking-tight">
                    OPENING DAY
                  </div>
                  <div className="p-3 bg-[#254B4B] text-white rounded-lg font-serif font-bold text-sm">
                    M.K TAILOR — MASTER KISHAN
                  </div>
                  <div className="text-xs text-slate-700 italic">
                    Professional Men's Tailoring & Stitching Services
                  </div>
                  <div className="text-sm font-bold font-mono text-[#D98A36] pt-2 border-t border-slate-300">
                    🗓️ MONDAY, 30 OCTOBER
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">
                    Grand Opening Promotional Poster
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="py-6 space-y-6">
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">
              PROJECT OVERVIEW & CONTEXT:
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((m, i) => (
                <div key={i} className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-center">
                  <div className="text-xl font-bold font-heading text-[#E5C16C]">{m.value}</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-slate-400 font-bold">
              SYSTEM DELIVERABLES & MODULES:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-300">
                  <CheckCircle2 size={16} className="text-[#C59B4E] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-400 font-bold">
                KEY DESIGN & ACADEMIC HIGHLIGHTS:
              </h4>
              <ul className="space-y-1.5 list-disc list-inside text-xs text-slate-300">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech & Design Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">
              DESIGN & CREATIVE TOOLS EMPLOYED:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-slate-800 text-[#E5C16C] border border-slate-700 rounded-lg text-xs font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 bg-[#C59B4E] hover:bg-[#d5ab5a] text-black font-mono text-xs uppercase font-extrabold rounded-xl transition-all flex items-center gap-1.5"
              >
                <ExternalLink size={14} />
                <span>Open Project Link</span>
              </a>
            )}

            <a
              href={`https://wa.me/923363179298?text=${encodeURIComponent(
                `Hi Eshan Sanjot! I reviewed your project "${project.title}" and would love to commission a graphic design package.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase font-bold rounded-xl transition-colors flex items-center gap-1.5"
            >
              <MessageCircle size={14} />
              <span>Commission on WhatsApp</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs uppercase rounded-xl transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
