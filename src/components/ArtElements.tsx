import React from 'react';

/**
 * Signature Luxury ES Monogram / Brand Ligature Emblem for Eshan Sanjot
 */
export const ESMonogram: React.FC<{ className?: string; size?: number; variant?: 'gold' | 'dark' | 'glass' }> = ({
  className = '',
  size = 40,
  variant = 'gold',
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center font-heading select-none ${className}`}>
      <div
        className={`rounded-xl p-[1.5px] shadow-sm flex items-center justify-center transition-transform duration-300 hover:scale-105 ${
          variant === 'gold'
            ? 'bg-gradient-to-tr from-[#C59B4E] via-[#F2D080] to-[#99732B]'
            : 'bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400'
        }`}
        style={{ width: size, height: size }}
      >
        <div className="w-full h-full bg-[#0B0F17] rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C59B4E]/10 to-transparent opacity-60 pointer-events-none" />
          
          {/* Custom Interlocking Vector Ligature for ES */}
          <svg
            width={size * 0.75}
            height={size * 0.75}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10"
          >
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5D77F" />
                <stop offset="50%" stopColor="#C59B4E" />
                <stop offset="100%" stopColor="#8C6826" />
              </linearGradient>
            </defs>
            {/* Serif E Backbone */}
            <path
              d="M12 10H28V14.5H18V21.5H26V25.5H18V33.5H29V38H12V10Z"
              fill="url(#goldGrad)"
            />
            {/* Elegant Serif S Interlocking */}
            <path
              d="M24 16.5C24 12.5 28 9.5 33.5 9.5C39 9.5 42.5 13 42.5 17C42.5 23 33 24 33 27C33 28.5 34.5 29.5 37 29.5C39.5 29.5 42 28 43 27V31.5C41.5 32.5 39 33.5 36 33.5C30.5 33.5 27 30 27 26C27 19.8 36.5 19 36.5 16C36.5 14.8 35.2 13.8 33.5 13.8C31.5 13.8 29.5 15 28.5 16.5H24Z"
              fill="url(#goldGrad)"
              opacity="0.95"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const SMAMonogram = ESMonogram;

/**
 * Animated Pulse Availability Indicator
 */
export const AvailabilityBadge: React.FC<{ className?: string; text?: string }> = ({
  className = '',
  text = 'Available for commissions & projects',
}) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C59B4E]/10 border border-[#C59B4E]/30 text-[#E5C16C] text-xs font-mono font-medium shadow-sm backdrop-blur-sm ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5C16C] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C59B4E]"></span>
      </span>
      <span>{text}</span>
    </div>
  );
};

/**
 * Interactive Graphic Design Studio Manifest
 */
export const CodeTerminalGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`rounded-2xl border border-slate-800 bg-[#0B1120]/95 text-slate-200 font-mono text-xs shadow-2xl overflow-hidden backdrop-blur-xl ${className}`}>
      {/* Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-[11px] text-slate-400 font-mono">es-design-tokens.json</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-amber-300 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C59B4E] animate-pulse"></span>
          <span>ES Studio v2.6</span>
        </div>
      </div>

      {/* Design Studio Manifest */}
      <div className="p-4 sm:p-6 space-y-2 text-[11px] sm:text-xs leading-relaxed overflow-x-auto">
        <div>
          <span className="text-pink-400">const</span>{' '}
          <span className="text-amber-300">eshanSanjotProfile</span> = &#123;
        </div>
        <div className="pl-4">
          <span className="text-slate-400">designer:</span>{' '}
          <span className="text-emerald-300">'Eshan Sanjot'</span>,
        </div>
        <div className="pl-4">
          <span className="text-slate-400">role:</span>{' '}
          <span className="text-amber-300">'Graphic Designer & Creative Designer'</span>,
        </div>
        <div className="pl-4">
          <span className="text-slate-400">program:</span>{' '}
          <span className="text-sky-300">'Bano Qabil (HOL Foundation Campus)'</span>,
        </div>
        <div className="pl-4">
          <span className="text-slate-400">studentId:</span>{' '}
          <span className="text-purple-300">'471554'</span>,
        </div>
        <div className="pl-4">
          <span className="text-slate-400">instructor:</span>{' '}
          <span className="text-amber-200">'Sir Shujaat Ejaz'</span>,
        </div>
        <div className="pl-4">
          <span className="text-slate-400">softwareProficiency:</span> [
          <span className="text-pink-300">'Canva (90%)'</span>,{' '}
          <span className="text-sky-300">'Photoshop (50%)'</span>,{' '}
          <span className="text-amber-300">'Illustrator (50%)'</span>,{' '}
          <span className="text-emerald-300">'Meta Ads'</span>],
        </div>
        <div className="pl-4">
          <span className="text-slate-400">featuredCoursework:</span>{' '}
          <span className="text-amber-300">'M.K Tailors Complete Brand Package'</span>,
        </div>
        <div className="pl-4">
          <span className="text-slate-400">location:</span>{' '}
          <span className="text-emerald-300">'Nayabad Lyari, Karachi, Pakistan 🇵🇰'</span>,
        </div>
        <div className="pl-4">
          <span className="text-slate-400">status:</span>{' '}
          <span className="text-emerald-400">'Available for Freelance & Entry-Level'</span>,
        </div>
        <div>&#125;;</div>
        <div className="pt-2 text-slate-500">
          <span className="text-pink-400">export default</span>{' '}
          <span className="text-amber-300">eshanSanjotProfile</span>;
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="px-4 py-2.5 bg-slate-900/70 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
        <div className="flex items-center gap-2">
          <span className="text-[#C59B4E] font-bold">✔ Bano Qabil Certified</span>
          <span>•</span>
          <span className="text-slate-400">Student ID: 471554</span>
        </div>
        <div className="text-emerald-400 font-bold">Available for Work</div>
      </div>
    </div>
  );
};

/**
 * Metallic Star Sparkle
 */
export const SparkleStar: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = '',
  size = 20,
  color = '#C59B4E',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none ${className}`}
    >
      <path
        d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
        fill={color}
      />
    </svg>
  );
};
