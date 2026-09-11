import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { achievementsData } from '../data/achievements';
import { Trophy, Award, BookOpen, DollarSign, Star, CheckCircle } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      <SectionHeader
        badge="CHAPTER HONORS"
        title="Achievements & Milestones."
        subtitle="A chronological timeline of international robotics competition trophies, IEEE regional chapter awards, and research paper publications."
      />

      {/* Chronological Timeline */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {achievementsData.map((item) => (
          <div key={item.id} className="relative group">
            
            {/* Timeline Node Point */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#080B12] border-2 border-ras-cyan flex items-center justify-center group-hover:bg-ras-cyan transition-colors">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D111A] border border-white/10 hover:border-ras-cyan/40 transition-all space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 font-mono-tech text-xs">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-ras-blue/30 text-ras-cyan font-bold">
                    {item.year}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-white/5 text-ras-muted border border-white/10">
                    {item.category}
                  </span>
                </div>

                <span className="px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold uppercase">
                  🏆 {item.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                {item.title}
              </h3>

              <p className="text-sm text-ras-muted leading-relaxed font-sans">
                {item.description}
              </p>

              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 font-mono-tech text-xs">
                <div className="text-ras-muted">
                  ORGANIZER / ENTITY: <strong className="text-white">{item.eventOrEntity}</strong>
                </div>
                <div className="text-ras-cyan font-bold">
                  VERIFIED RESULT: {item.result}
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
