import React, { useState } from 'react';
import { ShoppingCart, Star, ShieldCheck, Zap, Activity, Bot, Send, ArrowRight, ExternalLink, Palette, Sparkles, Copy, Check } from 'lucide-react';
import { ESMonogram } from './ArtElements';

/**
 * ES Luxury Brand Identity & Monogram Interactive Mockup
 */
export const ESBrandMockup: React.FC = () => {
  const [activePalette, setActivePalette] = useState<'ochre' | 'obsidian' | 'sand'>('ochre');
  const [showFoil, setShowFoil] = useState(true);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const colors = {
    ochre: { primary: '#C59B4E', bg: '#0B0F17', text: '#F5D77F', label: 'Imperial Gold' },
    obsidian: { primary: '#1E293B', bg: '#020617', text: '#E2E8F0', label: 'Obsidian Noir' },
    sand: { primary: '#D4AF37', bg: '#ECE8DC', text: '#1E293B', label: 'Warm Sandstone' },
  };

  const copyToken = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedCode(hex);
    setTimeout(() => setCopiedCode(null), 1800);
  };

  return (
    <div className="w-full rounded-2xl bg-[#0B0F17] border border-[#C59B4E]/30 p-4 sm:p-6 text-slate-100 shadow-2xl font-sans relative overflow-hidden">
      {/* Title Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-3">
          <ESMonogram size={32} variant="gold" />
          <div>
            <div className="text-sm font-bold text-white tracking-wide">ES BRAND IDENTITY SYSTEM</div>
            <div className="text-[10px] text-[#E5C16C]">Eshan Sanjot • Graphic Designer</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFoil(!showFoil)}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all flex items-center gap-1 border ${
              showFoil
                ? 'bg-[#C59B4E]/20 text-[#E5C16C] border-[#C59B4E]/40'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            <Sparkles size={11} />
            <span>{showFoil ? 'Gold Foil: ON' : 'Gold Foil: OFF'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Monogram Card Stage */}
      <div
        className="p-6 rounded-xl border transition-all flex flex-col items-center justify-center text-center relative overflow-hidden mb-4 min-h-[160px]"
        style={{
          backgroundColor: colors[activePalette].bg,
          borderColor: showFoil ? '#C59B4E' : '#334155',
          color: colors[activePalette].text,
        }}
      >
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C59B4E_1px,transparent_1px)] [background-size:12px_12px]" />

        <div className="relative z-10 space-y-2">
          <div className="flex justify-center">
            <ESMonogram size={56} variant="gold" />
          </div>
          <div className="font-heading text-lg sm:text-xl font-extrabold tracking-widest uppercase">
            ESHAN SANJOT
          </div>
          <div className="text-xs font-mono tracking-widest uppercase opacity-80">
            Graphic Designer • Brand Identity
          </div>
        </div>
      </div>

      {/* Palette Selector & Token Inspector */}
      <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
        {(['ochre', 'obsidian', 'sand'] as const).map((pKey) => (
          <button
            key={pKey}
            onClick={() => setActivePalette(pKey)}
            className={`p-2 rounded-lg border text-left font-mono transition-all ${
              activePalette === pKey
                ? 'border-[#C59B4E] bg-slate-800 text-white'
                : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
            }`}
          >
            <div className="text-[10px] text-slate-400 uppercase">{colors[pKey].label}</div>
            <div className="flex items-center gap-1.5 mt-1 font-bold text-xs">
              <span
                className="w-2.5 h-2.5 rounded-full inline-block border border-slate-700"
                style={{ backgroundColor: colors[pKey].primary }}
              />
              <span>{colors[pKey].primary}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Token Copy Footer */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-slate-800/80">
        <span className="text-[#E5C16C]">CMYK & Pantone Ready (AI, SVG, EPS)</span>
        <button
          onClick={() => copyToken('#C59B4E')}
          className="flex items-center gap-1 text-slate-300 hover:text-white hover:underline"
        >
          {copiedCode ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
          <span>{copiedCode ? 'Copied Pantone' : 'Copy Primary Gold Token'}</span>
        </button>
      </div>
    </div>
  );
};

/**
 * Grand Auto Store Interactive Mockup
 */
export const GrandAutoMockup: React.FC = () => {
  const [selectedMake, setSelectedMake] = useState('Toyota');
  const [selectedYear, setSelectedYear] = useState('2023');
  const [cartCount, setCartCount] = useState(2);

  const parts = [
    { name: 'Ceramic Performance Brake Pads', price: '$89.99', rating: 4.9, brand: 'Brembo Pro', inStock: true },
    { name: 'Cold Air Intake System & Filter', price: '$149.00', rating: 4.8, brand: 'K&N Power', inStock: true },
    { name: 'LED Matrix Headlight Assemblies (Pair)', price: '$229.50', rating: 5.0, brand: 'Philips Auto', inStock: true },
  ];

  return (
    <div className="w-full rounded-xl bg-slate-900 border border-slate-800 p-4 sm:p-6 text-slate-100 shadow-xl font-sans">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-rose-600 flex items-center justify-center font-bold text-xs text-white">
            GA
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-wide">GRAND AUTO STORE</div>
            <div className="text-[10px] text-slate-400">Direct Vehicle Fitment Engine</div>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-lg text-xs font-mono">
          <ShoppingCart size={14} className="text-rose-400" />
          <span>Cart ({cartCount})</span>
        </div>
      </div>

      {/* Vehicle Fitment Filter Widget */}
      <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60 mb-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
        <div>
          <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Make</label>
          <select
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-xs text-white focus:outline-none focus:border-rose-500"
          >
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="BMW">BMW</option>
            <option value="Ford">Ford</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Year</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-xs text-white focus:outline-none focus:border-rose-500"
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div className="flex items-end">
          <div className="w-full py-1.5 bg-rose-600 rounded text-center text-xs font-semibold text-white cursor-pointer hover:bg-rose-500 transition-colors">
            ✔ {selectedMake} {selectedYear} Matched
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="space-y-2.5">
        {parts.map((part, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-2.5 bg-slate-800/40 hover:bg-slate-800/80 rounded-lg border border-slate-700/40 transition-colors"
          >
            <div>
              <div className="text-xs font-semibold text-white">{part.name}</div>
              <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                <span className="text-rose-400">{part.brand}</span>
                <span>•</span>
                <span className="flex items-center gap-0.5 text-amber-400">
                  <Star size={10} fill="currentColor" /> {part.rating}
                </span>
                <span>•</span>
                <span className="text-emerald-400">In Stock</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-white">{part.price}</span>
              <button
                onClick={() => setCartCount((prev) => prev + 1)}
                className="px-2.5 py-1 bg-slate-700 hover:bg-rose-600 text-white rounded text-[11px] font-medium transition-colors"
              >
                + Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Pro Dawood Trading Platform Interactive Mockup
 */
export const ProDawoodMockup: React.FC = () => {
  const [activePair, setActivePair] = useState('EUR/USD');

  const tickers = [
    { pair: 'EUR/USD', price: '1.0874', change: '+0.42%' },
    { pair: 'GBP/USD', price: '1.2640', change: '+0.18%' },
    { pair: 'BTC/USDT', price: '$64,280', change: '+2.85%' },
    { pair: 'XAU/USD', price: '$2,385.40', change: '+1.15%' },
  ];

  return (
    <div className="w-full rounded-xl bg-slate-950 border border-emerald-500/30 p-4 sm:p-6 text-slate-100 shadow-xl font-sans">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-xs text-white">
            PD
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-wide">PRO DAWOOD TRADING</div>
            <div className="text-[10px] text-emerald-400">Live Trading Signal & Student Portal</div>
          </div>
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-mono border border-emerald-500/20">
          <Activity size={12} className="animate-pulse" />
          <span>Live Feed</span>
        </div>
      </div>

      {/* Ticker Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {tickers.map((t) => (
          <div
            key={t.pair}
            onClick={() => setActivePair(t.pair)}
            className={`p-2 rounded-lg border text-center cursor-pointer transition-all ${
              activePair === t.pair
                ? 'bg-slate-800 border-emerald-500 text-white'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <div className="text-[10px] font-mono font-bold">{t.pair}</div>
            <div className="text-xs font-mono text-white mt-0.5">{t.price}</div>
            <div className="text-[10px] text-emerald-400 font-mono">{t.change}</div>
          </div>
        ))}
      </div>

      {/* Mini Candlestick Simulation Banner */}
      <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 mb-3">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-mono text-slate-300">Live Signal: {activePair} — Strong Buy Setup</span>
          <span className="text-emerald-400 font-mono text-[11px]">TP: 1.0920 | SL: 1.0810</span>
        </div>
        <div className="h-16 flex items-end justify-between gap-1 px-2 pt-2 bg-slate-950/60 rounded">
          {[40, 55, 30, 60, 45, 75, 65, 80, 70, 95, 85, 100].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className={`w-full rounded-t ${i % 2 === 0 ? 'bg-emerald-500' : 'bg-emerald-400'}`}
            ></div>
          ))}
        </div>
      </div>

      <div className="text-[11px] text-slate-400 flex items-center justify-between font-mono">
        <span>2,500+ Active Academy Students</span>
        <span className="text-sky-400">DRM Protected Video Player</span>
      </div>
    </div>
  );
};

/**
 * Aztec Intel AI Platform Mockup
 */
export const AztecIntelMockup: React.FC = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! Aztec AI Assistant online. How can I automate your business workflow today?' },
    { sender: 'user', text: 'Can you integrate our CRM with incoming customer WhatsApp leads?' },
    { sender: 'bot', text: 'Yes! Aztec connects WhatsApp Business API to HubSpot/Salesforce with autonomous lead qualification in <2s.' },
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const newMsg = { sender: 'user', text: inputVal };
    setMessages((prev) => [...prev, newMsg]);
    setInputVal('');
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: `Confirmed. Aztec AI workflow triggered for "${newMsg.text.slice(0, 30)}...". Efficiency increased by 4.5x.` },
      ]);
    }, 600);
  };

  return (
    <div className="w-full rounded-xl bg-[#090D16] border border-sky-500/30 p-4 sm:p-6 text-slate-100 shadow-2xl font-sans relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center font-bold text-xs text-black">
            <Bot size={16} />
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-wide">AZTEC INTEL AI</div>
            <div className="text-[10px] text-sky-400">Autonomous Business Automation</div>
          </div>
        </div>
        <div className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          98% Intent Accuracy
        </div>
      </div>

      {/* Live Chat Stream */}
      <div className="space-y-2 mb-4 max-h-48 overflow-y-auto pr-1 text-xs">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-2.5 rounded-lg max-w-[85%] leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-sky-600 text-white rounded-br-none'
                  : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700/60'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <form onSubmit={handleSend} className="flex gap-2">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Ask Aztec AI automation demo..."
          className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-400"
        />
        <button
          type="submit"
          className="px-3 py-2 bg-sky-500 hover:bg-sky-400 text-black font-bold rounded-lg text-xs transition-colors flex items-center justify-center"
        >
          <Send size={14} />
        </button>
      </form>
    </div>
  );
};
