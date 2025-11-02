import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, Award, Users, TrendingUp } from 'lucide-react';

const stats = [
  { icon: TrendingUp, label: 'Pipeline Influenced', value: '$5M+', hint: 'from multi-channel programs' },
  { icon: Users, label: 'Learners Impacted', value: '25k+', hint: 'through campaigns & partnerships' },
  { icon: Briefcase, label: 'Programs Launched', value: '12', hint: 'market-ready GTM initiatives' },
  { icon: Award, label: 'NPS on Workshops', value: '72', hint: 'average across cohorts' },
];

const logos = [
  { name: 'Top EdTech', initials: 'TE' },
  { name: 'Career Services', initials: 'CS' },
  { name: 'University', initials: 'U' },
  { name: 'Growth Lab', initials: 'GL' },
  { name: 'Talent Cloud', initials: 'TC' },
];

const ExperienceSection = () => {
  return (
    <section className="relative w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Experience & Impact</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Partnered with leading EdTech and Career ecosystems to craft growth stories, build partnerships, and accelerate revenue.
            </p>
          </div>
          <div className="flex items-center gap-3 text-slate-500">
            <Building className="h-5 w-5" />
            Worked with top companies
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500/15 to-sky-500/15">
                <s.icon className="h-5 w-5 text-fuchsia-600" />
              </div>
              <div className="mt-3 text-2xl font-semibold text-slate-900">{s.value}</div>
              <div className="text-sm text-slate-500">{s.label}</div>
              <div className="mt-1 text-xs text-slate-400">{s.hint}</div>
            </motion.div>
          ))}
        </div>

        {/* Logos */}
        <div className="mt-12 grid grid-cols-2 items-center gap-3 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((l) => (
            <div
              key={l.name}
              className="flex h-20 items-center justify-center rounded-xl border border-slate-200 bg-white/60 text-sm font-medium text-slate-500"
              title={l.name}
            >
              {l.initials}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
