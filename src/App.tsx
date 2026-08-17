import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { FeaturedProject } from './components/FeaturedProject';
import { WorkGallery } from './components/WorkGallery';
import { InteractiveEstimator } from './components/InteractiveEstimator';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { ResumePage } from './components/ResumePage';
import { ProjectItem } from './types';
import { PERSONAL_INFO } from './data/portfolioData';
import { ESMonogram } from './components/ArtElements';
import { ExternalLink, Linkedin, MessageCircle, Mail, ArrowUp, Heart } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [currentView, setCurrentView] = useState<'portfolio' | 'cv'>('portfolio');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('es_theme_mode');
      return saved ? saved === 'dark' : true;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('es_theme_mode', darkMode ? 'dark' : 'light');
    } catch {
      // ignore
    }
  }, [darkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        darkMode ? 'bg-[#0B0F17] text-[#E2E8F0]' : 'bg-[#F8FAFC] text-[#0F172A]'
      }`}
    >
      {/* Top Fixed Header */}
      <Navbar
        currentView={currentView}
        onToggleView={() => setCurrentView((prev) => (prev === 'cv' ? 'portfolio' : 'cv'))}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
      />

      {/* Main Content */}
      <main>
        {currentView === 'cv' ? (
          <ResumePage onBackToPortfolio={() => setCurrentView('portfolio')} />
        ) : (
          <>
            <Hero darkMode={darkMode} />
            <About />
            <ServicesSection />
            <SkillsSection />
            <FeaturedProject onSelectProject={(p) => setSelectedProject(p)} />
            <WorkGallery onSelectProject={(p) => setSelectedProject(p)} />
            <InteractiveEstimator />
            <ExperienceSection />
            <EducationSection />
            <TestimonialsSection />
            <ContactSection />
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#070A10] border-t border-slate-800/80 py-12 text-slate-400 text-xs font-mono no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <ESMonogram size={32} variant="gold" />
            <div className="space-y-0.5">
              <div className="text-white font-bold font-heading text-sm">
                {PERSONAL_INFO.name} — Lead Graphic Designer & Brand Identity Specialist
              </div>
              <div className="text-slate-500 text-[11px]">
                Crafted with Luxury Serif Design Tokens, Vector Assets & Modern Web Aesthetics.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.portfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-[#E5C16C] transition-colors flex items-center gap-1 text-xs"
              title="Design Portfolio"
            >
              <ExternalLink size={16} />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-400 transition-colors"
              title="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-[#C59B4E] hover:text-black text-slate-300 transition-all ml-2"
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>

      {/* Full-Screen Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
