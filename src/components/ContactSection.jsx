import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 sm:p-12 backdrop-blur">
          <h2 className="text-3xl font-semibold sm:text-4xl">Let’s build your next growth story</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            I partner with teams to design GTM motions, partnerships, and campaigns that convert narrative into revenue.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-slate-900 shadow/20 shadow-white/10 transition hover:bg-fuchsia-50"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 text-sm text-white/60 sm:grid-cols-3">
            <div>
              <div className="text-white">Focus</div>
              Narrative GTM · Partnerships · Enablement
            </div>
            <div>
              <div className="text-white">Industries</div>
              EdTech · Career Services · Higher Education
            </div>
            <div>
              <div className="text-white">Location</div>
              Open to global opportunities
            </div>
          </div>
        </div>

        <footer className="mt-8 flex items-center justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} Sales & Marketing Portfolio</div>
          <a href="#" className="hover:text-white">Back to top</a>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
