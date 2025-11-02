import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start px-6 pt-28 pb-24 sm:px-8 md:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur">
          <Rocket className="h-4 w-4 text-fuchsia-400" />
          Sales & Marketing Portfolio · EdTech & Career Services
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Driving Growth with Story-led
          <span className="bg-gradient-to-r from-fuchsia-400 to-sky-400 bg-clip-text text-transparent"> GTM </span>
          and Partner Strategies
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
          5 years scaling revenue, launching programs, and building partnerships across top EdTech and Career Services brands. I blend narrative, data, and design to move pipelines—and people.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#journey"
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-slate-900 shadow/20 shadow-white/10 transition hover:bg-fuchsia-50"
          >
            Explore my story
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
