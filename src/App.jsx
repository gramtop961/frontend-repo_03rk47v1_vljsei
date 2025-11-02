import React from 'react';
import HeroSection from './components/HeroSection';
import NarrativeSection from './components/NarrativeSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      {/* Simple top navigation */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/60 p-3 backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <a href="#" className="text-sm font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-fuchsia-600 to-sky-600 bg-clip-text text-transparent">Portfolio</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
            <a href="#journey" className="hover:text-slate-900">Journey</a>
            <a href="#experience" className="hover:text-slate-900">Experience</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex flex-col">
        <HeroSection />
        <div id="experience">
          <ExperienceSection />
        </div>
        <NarrativeSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
