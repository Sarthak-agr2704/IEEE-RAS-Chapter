import React from 'react';
import { Cpu, Github, Linkedin, Mail, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenJoin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenJoin }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030407] border-t border-white/10 pt-16 pb-12 font-sans relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-ras-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-ras-blue/20 border border-ras-cyan/40 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-ras-cyan" />
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-white">
                  IEEE <span className="text-ras-cyan">RAS</span>
                </div>
                <div className="text-[10px] font-mono-tech text-ras-muted tracking-wider">
                  ROBOTICS & AUTOMATION SOCIETY CHAPTER
                </div>
              </div>
            </div>

            <p className="text-sm text-ras-muted leading-relaxed max-w-sm">
              Advancing robotics, autonomous systems, artificial intelligence, and embedded engineering through hands-on innovation, research initiatives, and competition squads.
            </p>

            <div className="pt-2 font-mono-tech text-xs text-ras-cyan flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>OFFICIAL STUDENT BRANCH CHAPTER</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono-tech text-white uppercase tracking-wider mb-4 font-semibold">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 font-mono-tech text-xs">
              {['home', 'about', 'research', 'projects', 'events'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => handleLinkClick(id)}
                    className="text-ras-muted hover:text-ras-cyan transition-colors uppercase"
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Chapter Links */}
          <div>
            <h4 className="text-xs font-mono-tech text-white uppercase tracking-wider mb-4 font-semibold">
              RESOURCES & MORE
            </h4>
            <ul className="space-y-2.5 font-mono-tech text-xs">
              {['team', 'achievements', 'gallery', 'resources', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => handleLinkClick(id)}
                    className="text-ras-muted hover:text-ras-cyan transition-colors uppercase"
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official IEEE External Links */}
          <div>
            <h4 className="text-xs font-mono-tech text-white uppercase tracking-wider mb-4 font-semibold">
              OFFICIAL IEEE LINKS
            </h4>
            <ul className="space-y-2.5 font-mono-tech text-xs">
              <li>
                <a
                  href="https://www.ieee.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ras-muted hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>IEEE Main Portal</span>
                  <ExternalLink className="w-3 h-3 text-ras-cyan" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ieee-ras.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ras-muted hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>IEEE RAS Society</span>
                  <ExternalLink className="w-3 h-3 text-ras-cyan" />
                </a>
              </li>
              <li>
                <a
                  href="https://ieeexplore.ieee.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ras-muted hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>IEEE Xplore Digital Library</span>
                  <ExternalLink className="w-3 h-3 text-ras-cyan" />
                </a>
              </li>
            </ul>

            <button
              onClick={onOpenJoin}
              className="mt-6 w-full py-2.5 rounded bg-ras-blue/20 hover:bg-ras-blue border border-ras-blue/40 text-white font-mono-tech text-xs font-semibold uppercase transition-all"
            >
              JOIN CHAPTER
            </button>
          </div>

        </div>

        {/* Bottom copyright & disclaimers */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 font-mono-tech text-xs text-ras-muted">
          <div>
            © {currentYear} IEEE Robotics and Automation Society Student Chapter. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="LinkedIn Page"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@ieee-ras.org"
              className="p-2 rounded bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Contact Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
