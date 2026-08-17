import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ESMonogram } from './ArtElements';
import {
  Menu,
  X,
  FileText,
  ArrowUpRight,
  Sun,
  Moon,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';

interface NavbarProps {
  currentView: 'portfolio' | 'cv';
  onToggleView: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onToggleView,
  darkMode,
  onToggleDarkMode,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'skills', 'projects', 'experience', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Works', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'testimonials', label: 'Reviews', href: '#testimonials' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-[#070A11]/85 backdrop-blur-xl border-b border-slate-800/70 shadow-lg shadow-black/20'
            : 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-md shadow-slate-900/5'
          : darkMode
          ? 'bg-[#070A11]/60 backdrop-blur-lg border-b border-slate-800/40'
          : 'bg-white/70 backdrop-blur-lg border-b border-slate-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-4">
          {/* Left Brand Identity */}
          <a
            href="#home"
            onClick={() => currentView === 'cv' && onToggleView()}
            className="flex items-center gap-3.5 group shrink-0 select-none py-1"
          >
            <div className="shrink-0 flex items-center justify-center">
              <ESMonogram size={42} variant="gold" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span
                  className={`font-heading font-extrabold text-base sm:text-lg tracking-tight transition-colors ${
                    darkMode ? 'text-white group-hover:text-[#E5C16C]' : 'text-slate-900 group-hover:text-[#C59B4E]'
                  }`}
                >
                  {PERSONAL_INFO.name}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#C59B4E]/10 text-[#E5C16C] border border-[#C59B4E]/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C16C] animate-pulse mr-1.5" />
                  ES Studio
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 font-normal tracking-wide opacity-80 leading-tight hidden xs:block">
                Graphic Designer & Brand Identity Specialist
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-[13px] font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id && currentView === 'portfolio';
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => currentView === 'cv' && onToggleView()}
                  className={`relative py-2 px-1 transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-[#E5C16C] font-semibold'
                      : darkMode
                      ? 'text-slate-300/90 hover:text-[#E5C16C]'
                      : 'text-slate-600 hover:text-[#C59B4E]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F5D77F] via-[#E5C16C] to-[#C59B4E] rounded-full shadow-[0_0_8px_rgba(229,193,108,0.5)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0">
            {/* Design Portfolio Link */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={PERSONAL_INFO.portfolioUrl}
              target="_blank"
              rel="noreferrer"
              className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all min-h-[44px] min-w-[44px] ${
                darkMode
                  ? 'border-slate-800/80 bg-slate-900/60 text-slate-300 hover:text-[#E5C16C] hover:border-slate-700 shadow-xs'
                  : 'border-slate-200 bg-slate-100/80 text-slate-700 hover:text-black hover:border-slate-300'
              }`}
              title="External Portfolio Link"
              aria-label="Portfolio"
            >
              <ExternalLink size={17} />
            </motion.a>

            {/* Dark / Light Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onToggleDarkMode}
              className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all min-h-[44px] min-w-[44px] ${
                darkMode
                  ? 'border-slate-800/80 bg-slate-900/60 text-amber-400 hover:border-slate-700 shadow-xs'
                  : 'border-slate-200 bg-slate-100/80 text-slate-800 hover:border-slate-300'
              }`}
              title={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={17} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={17} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Curriculum Vitae Button (Premium Glass / Outlined with subtle hover glow) */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onToggleView}
              id="nav-cv-btn"
              className={`h-11 px-4 rounded-xl border text-xs font-mono font-semibold tracking-wide transition-all flex items-center gap-2 min-h-[44px] whitespace-nowrap shadow-xs ${
                currentView === 'cv'
                  ? 'bg-[#C59B4E] border-[#C59B4E] text-black font-extrabold shadow-sm'
                  : darkMode
                  ? 'border-slate-700/80 bg-slate-900/60 text-slate-200 hover:text-white hover:border-[#C59B4E]/60 hover:shadow-[0_0_15px_rgba(197,155,78,0.15)]'
                  : 'border-slate-300 bg-white text-slate-800 hover:border-[#C59B4E]/80 hover:text-[#99732B]'
              }`}
            >
              <FileText size={15} className={currentView === 'cv' ? 'text-black' : 'text-[#E5C16C]'} />
              <span>{currentView === 'cv' ? 'Portfolio View' : 'Curriculum Vitae'}</span>
            </motion.button>

            {/* Let's Talk CTA (Fully visible, never cut off) */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              onClick={() => currentView === 'cv' && onToggleView()}
              id="nav-cta-btn"
              className="h-11 px-5 bg-gradient-to-r from-[#C59B4E] via-[#D4AF37] to-[#A37A2C] hover:from-[#d5ab5a] hover:to-[#B88A34] text-black text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-md shadow-[#C59B4E]/20 flex items-center gap-1.5 min-h-[44px] whitespace-nowrap shrink-0"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={15} className="shrink-0" />
            </motion.a>
          </div>

          {/* Mobile Drawer Trigger (Mobile/Tablet) */}
          <div className="flex lg:hidden items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onToggleDarkMode}
              className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all min-h-[44px] min-w-[44px] ${
                darkMode ? 'border-slate-800 bg-slate-900/80 text-amber-400' : 'border-slate-200 bg-slate-100 text-slate-800'
              }`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all min-h-[44px] min-w-[44px] ${
                darkMode
                  ? 'border-slate-800 bg-slate-900/80 text-white hover:border-slate-700'
                  : 'border-slate-200 bg-slate-100 text-slate-800 hover:border-slate-300'
              }`}
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Glass Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={`lg:hidden border-b overflow-hidden shadow-2xl backdrop-blur-2xl ${
              darkMode ? 'bg-[#090D16]/95 border-slate-800 text-white' : 'bg-white/95 border-slate-200 text-slate-900'
            }`}
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-6 py-6 space-y-5">
              {/* Nav links */}
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold uppercase tracking-wider">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id && currentView === 'portfolio';
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (currentView === 'cv') onToggleView();
                      }}
                      className={`py-3 px-3.5 rounded-xl border transition-all flex items-center justify-between min-h-[44px] ${
                        isActive
                          ? 'bg-[#C59B4E]/15 border-[#C59B4E]/50 text-[#E5C16C] font-bold'
                          : darkMode
                          ? 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:text-white hover:border-slate-700'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-black'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E5C16C]" />}
                    </a>
                  );
                })}
              </div>

              {/* Action Buttons inside Drawer */}
              <div className="pt-4 border-t border-slate-800/60 flex flex-col gap-3">
                <button
                  onClick={() => {
                    onToggleView();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full h-11 px-4 bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs uppercase font-bold rounded-xl flex items-center justify-center gap-2 transition-colors min-h-[44px] border border-slate-700"
                >
                  <FileText size={15} className="text-[#E5C16C]" />
                  <span>{currentView === 'cv' ? 'Switch to Portfolio View' : 'View Curriculum Vitae (CV)'}</span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/923363179298"
                    target="_blank"
                    rel="noreferrer"
                    className="h-11 px-4 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="#contact"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (currentView === 'cv') onToggleView();
                    }}
                    className="h-11 px-4 bg-gradient-to-r from-[#C59B4E] to-[#99732B] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 min-h-[44px] shadow-sm"
                  >
                    <span>Let's Talk</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
