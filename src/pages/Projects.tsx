import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { projectsData, Project } from '../data/projects';
import { Search, ExternalLink, Github, Layers, Filter, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filterCategory, setFilterCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALL', 'Robotics', 'AI', 'Vision', 'Automation', 'Research', 'Drones'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = filterCategory === 'ALL' || project.category.toLowerCase() === filterCategory.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <SectionHeader
        badge="ENGINEERING PORTFOLIO"
        title="Project Showcase."
        subtitle="Explore autonomous mobile rovers, bionic hands, quadcopter swarms, and edge AI defect detectors built by IEEE RAS student engineers."
      />

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-xl bg-[#0D111A] border border-white/10">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech uppercase transition-all ${
                filterCategory === cat
                  ? 'bg-ras-blue text-white font-semibold shadow-md shadow-ras-blue/30'
                  : 'bg-white/5 text-ras-muted hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-ras-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search projects or tech tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#080B12] border border-white/10 text-xs font-mono-tech text-white focus:outline-none focus:border-ras-cyan"
          />
        </div>

      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group p-6 rounded-2xl bg-[#0D111A] border border-white/10 hover:border-ras-cyan/50 hover:bg-[#131826] transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Image Header */}
              <div className="relative h-48 rounded-xl overflow-hidden border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 font-mono-tech text-[10px] bg-black/80 border border-white/10 text-ras-cyan px-2.5 py-1 rounded backdrop-blur-md">
                  {project.number}
                </span>
                <span className="absolute top-3 right-3 font-mono-tech text-[10px] bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-2 py-0.5 rounded backdrop-blur-md">
                  {project.status}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-tech bg-ras-blue/20 text-ras-cyan uppercase">
                  {project.category}
                </span>
                <span className="text-[10px] font-mono-tech text-ras-muted">
                  {project.dateCompleted}
                </span>
              </div>

              <h3 className="text-xl font-bold font-heading text-white group-hover:text-ras-cyan transition-colors">
                {project.title}
              </h3>

              <p className="text-xs text-ras-muted leading-relaxed line-clamp-3">
                {project.shortDesc}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.techStack.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono-tech bg-white/5 border border-white/10 text-ras-muted"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono-tech bg-white/5 text-ras-muted">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between font-mono-tech text-xs">
              <span className="text-ras-cyan font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>INSPECT PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded hover:bg-white/10 text-ras-muted hover:text-white transition-colors"
                  aria-label="View Source Repo"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 p-8 rounded-xl bg-[#0D111A] border border-white/10 font-mono-tech text-ras-muted">
          No projects found matching the selected filter. Try adjusting your search query.
        </div>
      )}

    </div>
  );
};
