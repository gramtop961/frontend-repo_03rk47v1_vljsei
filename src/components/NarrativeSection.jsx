import React from 'react';
import { motion } from 'framer-motion';
import { Target, LineChart, Users, Megaphone } from 'lucide-react';

const steps = [
  {
    icon: Target,
    title: 'Discover',
    text:
      'Mapped ICPs and audience narratives across learners, universities, and enterprise partners to unlock positioning that resonates.',
  },
  {
    icon: LineChart,
    title: 'Design',
    text:
      'Built full-funnel GTM motions: content engines, webinar funnels, partner co-marketing, and lifecycle nurturing sequences.',
  },
  {
    icon: Users,
    title: 'Activate',
    text:
      'Enabled sales with stories, battlecards, and demos that simplify complex value for multiple stakeholders.',
  },
  {
    icon: Megaphone,
    title: 'Scale',
    text:
      'Optimized channels via experimentation—iterating offers, creative, and outreach to drive predictable pipeline.',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } }),
};

const NarrativeSection = () => {
  return (
    <section id="journey" className="relative w-full bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="text-3xl font-semibold sm:text-4xl"
        >
          A narrative-led journey from insight to impact
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="mt-3 max-w-2xl text-lg text-slate-600"
        >
          Each phase builds momentum—aligning teams, clarifying value, and converting attention into measurable growth.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              custom={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gradient-to-br from-fuchsia-500/15 to-sky-500/15 p-3">
                  <s.icon className="h-6 w-6 text-fuchsia-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-slate-600">{s.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;
