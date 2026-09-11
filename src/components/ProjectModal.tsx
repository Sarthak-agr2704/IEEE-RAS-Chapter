import React from 'react';
import { Project } from '../data/projects';
import { X, ExternalLink, Github, Cpu, Layers, CheckCircle2, AlertCircle } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0D111A] border border-white/15 rounded-xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* HUD Corner Decorators */}
        <div className="hud-corner-tl"></div>
        <div className="hud-corner-tr"></div>
        <div className="hud-corner-bl"></div>
        <div className="hud-corner-br"></div>

        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080B12]">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs text-ras-cyan px-2.5 py-1 bg-ras-cyan/10 border border-ras-cyan/30 rounded">
              {project.number}
            </span>
            <span className="text-xs font-mono-tech text-ras-muted uppercase tracking-wider">
              CATEGORY: {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-ras-muted hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Main Title & Image */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                {project.title}
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-mono-tech font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                ● STATUS: {project.status.toUpperCase()}
              </span>
            </div>
            <p className="text-ras-muted text-base leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-transparent to-transparent"></div>
          </div>

          {/* Problem & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg bg-[#080B12] border border-white/10">
              <div className="flex items-center gap-2 text-amber-400 font-mono-tech text-sm font-semibold mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>PROBLEM STATEMENT</span>
              </div>
              <p className="text-sm text-ras-muted leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#080B12] border border-white/10">
              <div className="flex items-center gap-2 text-ras-cyan font-mono-tech text-sm font-semibold mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>TECHNICAL APPROACH</span>
              </div>
              <p className="text-sm text-ras-muted leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* System Architecture */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold font-heading text-white mb-4">
              <Layers className="w-5 h-5 text-ras-cyan" />
              <span>SYSTEM ARCHITECTURE & LAYERS</span>
            </h3>
            <ul className="space-y-2.5 font-mono-tech text-xs sm:text-sm">
              {project.architecture.map((layer, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 rounded bg-white/5 border border-white/5">
                  <span className="text-ras-cyan font-bold">0{idx + 1}.</span>
                  <span className="text-ras-muted">{layer}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack & Hardware BOM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-mono-tech text-ras-muted uppercase tracking-wider mb-3">
                SOFTWARE & ALGORITHMS
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded text-xs font-mono-tech bg-ras-blue/20 border border-ras-blue/40 text-ras-cyan"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono-tech text-ras-muted uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-ras-cyan" />
                <span>HARDWARE BILL OF MATERIALS (BOM)</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.hardwareBOM.map((hw, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded text-xs font-mono-tech bg-white/5 border border-white/10 text-white"
                  >
                    {hw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Team */}
          <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono-tech text-ras-muted uppercase tracking-wider block mb-1">
                PROJECT AUTHORS
              </span>
              <span className="text-sm font-semibold text-white">
                {project.teamMembers.join(' • ')}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono-tech text-xs transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
