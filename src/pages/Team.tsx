import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { teamData } from '../data/team';
import { Linkedin, Github, Mail, ShieldCheck, Cpu } from 'lucide-react';

export const Team: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');

  const categories = ['ALL', 'Faculty Advisor', 'Executive Board', 'Technical Leads', 'Research Division', 'Operations & Events'];

  const filteredTeam = teamData.filter((member) => {
    if (filter === 'ALL') return true;
    return member.category === filter;
  });

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <SectionHeader
        badge="CHAPTER LEADERSHIP"
        title="Meet the People Behind the Machines."
        subtitle="Our team brings together student engineers, researchers, hardware builders, and faculty advisors committed to pushing the boundaries of robotics."
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-2 rounded-xl bg-[#0D111A] border border-white/10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-mono-tech uppercase transition-all ${
              filter === cat
                ? 'bg-ras-blue text-white font-semibold shadow-md shadow-ras-blue/30'
                : 'text-ras-muted hover:text-white hover:bg-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTeam.map((member) => (
          <div
            key={member.id}
            className="group p-5 rounded-2xl bg-[#0D111A] border border-white/10 hover:border-ras-cyan/40 hover:bg-[#131826] transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Member Photo */}
              <div className="relative h-64 rounded-xl overflow-hidden border border-white/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-transparent to-transparent"></div>
                
                <span className="absolute top-3 left-3 font-mono-tech text-[10px] bg-black/80 border border-white/10 text-ras-cyan px-2.5 py-0.5 rounded backdrop-blur-md">
                  {member.category}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold font-heading text-white group-hover:text-ras-cyan transition-colors">
                  {member.name}
                </h3>
                <span className="text-xs font-mono-tech text-ras-cyan font-semibold block mt-0.5">
                  {member.role}
                </span>
                <span className="text-[11px] font-mono-tech text-ras-muted block mt-1">
                  {member.department}
                </span>
              </div>

              <p className="text-xs text-ras-muted leading-relaxed font-sans line-clamp-3">
                {member.bio}
              </p>
            </div>

            {/* Social & Contact Links */}
            <div className="pt-4 border-t border-white/5 mt-4 flex items-center gap-3 text-ras-muted">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-white/5 hover:bg-ras-blue hover:text-white transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}

              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-white/5 hover:bg-ras-blue hover:text-white transition-colors"
                  aria-label={`${member.name} GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}

              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="p-2 rounded bg-white/5 hover:bg-ras-blue hover:text-white transition-colors"
                  aria-label={`${member.name} Email`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
