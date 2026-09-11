import React from 'react';
import { HeroCanvas } from '../components/HeroCanvas';
import { SectionHeader } from '../components/SectionHeader';
import { domainsData } from '../data/domains';
import { projectsData, Project } from '../data/projects';
import { eventsData } from '../data/events';
import { Bot, ArrowRight, ChevronRight, Cpu, Compass, Eye, Zap, Layers, Sparkles, Trophy, Calendar, Users } from 'lucide-react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  onSelectProject: (project: Project) => void;
  onOpenJoin: () => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab, onSelectProject, onOpenJoin }) => {
  const featuredProjects = projectsData.filter((p) => p.featured);
  const upcomingEvents = eventsData.filter((e) => e.status === 'Upcoming').slice(0, 3);

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot className="w-6 h-6 text-ras-cyan" />;
      case 'Compass': return <Compass className="w-6 h-6 text-ras-cyan" />;
      case 'Eye': return <Eye className="w-6 h-6 text-ras-cyan" />;
      case 'Zap': return <Zap className="w-6 h-6 text-ras-cyan" />;
      default: return <Cpu className="w-6 h-6 text-ras-cyan" />;
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern overflow-hidden">
        
        {/* Interactive 3D Kinematic Canvas */}
        <HeroCanvas />

        {/* Ambient Radial Background Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ras-blue/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          
          {/* Top HUD Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ras-blue/20 border border-ras-blue/40 backdrop-blur-md text-ras-cyan text-xs font-mono-tech uppercase">
            <span className="w-2 h-2 rounded-full bg-ras-cyan animate-ping"></span>
            <span>IEEE ROBOTICS & AUTOMATION SOCIETY // STUDENT CHAPTER</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.1]">
            Engineering Intelligence. <br />
            <span className="bg-gradient-to-r from-white via-ras-cyan to-ras-blue bg-clip-text text-transparent">
              Building the Future.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-ras-muted leading-relaxed">
            Advancing robotics, autonomous systems, computer vision, and neural engineering through a passionate community of student engineers and creators.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setActiveTab('about')}
              className="flex items-center gap-2 px-7 py-3.5 rounded-lg bg-ras-blue hover:bg-ras-cyan text-white font-mono-tech text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-xl shadow-ras-blue/30 group"
            >
              <span>EXPLORE RAS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className="flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#0D111A] hover:bg-white/10 border border-white/15 text-white font-mono-tech text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all"
            >
              <span>VIEW PROJECTS</span>
              <Layers className="w-4 h-4 text-ras-cyan" />
            </button>
          </div>

          {/* HUD Tech Status Overlay Elements */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto font-mono-tech text-[11px] text-ras-muted">
            <div className="p-2.5 rounded bg-[#0D111A]/80 border border-white/10 backdrop-blur-sm">
              <span className="text-white/40 block text-[9px]">SYSTEM STATUS</span>
              <span className="text-emerald-400 font-semibold">● ACTIVE 100%</span>
            </div>
            <div className="p-2.5 rounded bg-[#0D111A]/80 border border-white/10 backdrop-blur-sm">
              <span className="text-white/40 block text-[9px]">AUTONOMOUS</span>
              <span className="text-ras-cyan font-semibold">ROS 2 HUMBLE</span>
            </div>
            <div className="p-2.5 rounded bg-[#0D111A]/80 border border-white/10 backdrop-blur-sm">
              <span className="text-white/40 block text-[9px]">AI PERCEPTION</span>
              <span className="text-white font-semibold">CUDA / TENSORRT</span>
            </div>
            <div className="p-2.5 rounded bg-[#0D111A]/80 border border-white/10 backdrop-blur-sm">
              <span className="text-white/40 block text-[9px]">CONTROL LOOP</span>
              <span className="text-ras-cyan font-semibold">&lt; 1ms LATENCY</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-6 animate-bounce">
            <span className="text-[10px] font-mono-tech text-ras-muted tracking-widest uppercase block">
              SCROLL TO EXPLORE
            </span>
          </div>

        </div>
      </section>

      {/* ABOUT SNAPSHOT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0D111A] border border-white/10 relative overflow-hidden tech-border">
          <div className="hud-corner-tl"></div>
          <div className="hud-corner-tr"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Big Statement */}
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 rounded bg-ras-blue/15 text-ras-cyan font-mono-tech text-xs uppercase">
                ABOUT IEEE RAS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white leading-tight">
                Where engineering meets autonomy.
              </h2>
            </div>

            {/* Right Description & CTA */}
            <div className="lg:col-span-7 space-y-6 text-ras-muted text-base sm:text-lg leading-relaxed">
              <p>
                The IEEE Robotics and Automation Society (IEEE RAS) Student Chapter is an applied engineering community dedicated to robotics, automation, computer vision, and embedded systems innovation.
              </p>
              <p className="text-sm text-ras-muted">
                Through hands-on hardware development, research papers, national competition participation, and peer-led workshops, we bridge the gap between academic theory and real-world industrial robotics.
              </p>

              <div>
                <button
                  onClick={() => setActiveTab('about')}
                  className="inline-flex items-center gap-2 text-ras-cyan font-mono-tech text-sm font-semibold uppercase hover:translate-x-1 transition-transform"
                >
                  <span>Learn More About RAS</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DOMAINS SECTION: WHERE WE BUILD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="TECHNICAL DOMAINS"
          title="Where We Build."
          subtitle="Explore the 8 foundational pillars of robotics and automation engineered within our chapter laboratories."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domainsData.map((domain) => (
            <div
              key={domain.id}
              onClick={() => setActiveTab('research')}
              className="group p-6 rounded-xl bg-[#0D111A] border border-white/10 hover:border-ras-cyan/40 hover:bg-[#131826] transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-tech text-2xl font-bold text-white/20 group-hover:text-ras-cyan transition-colors">
                    {domain.number}
                  </span>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-ras-cyan/30 transition-colors">
                    {getDomainIcon(domain.iconName)}
                  </div>
                </div>

                <h3 className="text-lg font-bold font-heading text-white group-hover:text-ras-cyan transition-colors mb-2">
                  {domain.title}
                </h3>
                <p className="text-xs text-ras-muted leading-relaxed line-clamp-3 mb-4">
                  {domain.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono-tech text-[11px] text-ras-muted">
                <span>{domain.technologies.slice(0, 2).join(' • ')}</span>
                <ChevronRight className="w-4 h-4 text-ras-cyan opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FEATURED WORK"
          title="Engineered Systems."
          subtitle="Real-world autonomous platforms built, programmed, and field-tested by our student engineers."
        />

        <div className="space-y-12">
          {featuredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className="group p-6 sm:p-8 rounded-2xl bg-[#0D111A] border border-white/10 hover:border-ras-cyan/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Image Col */}
                <div className={`lg:col-span-6 relative rounded-xl overflow-hidden border border-white/10 h-72 sm:h-96 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 font-mono-tech text-xs bg-black/70 border border-white/10 text-ras-cyan px-3 py-1 rounded backdrop-blur-md">
                    {project.number}
                  </span>
                </div>

                {/* Info Col */}
                <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-ras-blue/20 text-ras-cyan font-mono-tech text-xs uppercase">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono-tech text-emerald-400">
                      ● {project.status.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white group-hover:text-ras-cyan transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-ras-muted leading-relaxed">
                    {project.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded text-xs font-mono-tech bg-white/5 border border-white/10 text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-ras-blue hover:bg-ras-cyan text-white font-mono-tech text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <span>VIEW PROJECT DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* UPCOMING EVENTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <SectionHeader
              badge="CHAPTER SCHEDULE"
              title="What's Happening."
              subtitle="Upcoming technical workshops, hackathons, and research symposiums."
            />
          </div>
          <button
            onClick={() => setActiveTab('events')}
            className="text-xs font-mono-tech text-ras-cyan uppercase hover:underline flex items-center gap-1 mb-12"
          >
            <span>VIEW ALL EVENTS</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="p-6 rounded-xl bg-[#0D111A] border border-white/10 hover:border-ras-cyan/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 font-mono-tech text-xs">
                  <span className="px-2 py-0.5 rounded bg-ras-cyan/10 border border-ras-cyan/30 text-ras-cyan">
                    {event.category.toUpperCase()}
                  </span>
                  <span className="text-ras-muted">{event.date}</span>
                </div>

                <h3 className="text-lg font-bold font-heading text-white mb-2 line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-xs text-ras-muted leading-relaxed line-clamp-3 mb-4">
                  {event.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono-tech text-xs">
                <span className="text-ras-muted text-[11px] truncate max-w-[150px]">{event.location}</span>
                <button
                  onClick={() => setActiveTab('events')}
                  className="text-ras-cyan font-semibold hover:underline"
                >
                  Register →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* METRIC / ACHIEVEMENT PREVIEW BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#0D111A] via-[#080B12] to-[#0D111A] border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-mono-tech">
          <div>
            <div className="text-3xl sm:text-5xl font-extrabold text-white font-heading mb-1">
              08
            </div>
            <div className="text-xs text-ras-muted uppercase">ACTIVE HARDWARE ROVERS</div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-extrabold text-ras-cyan font-heading mb-1">
              150+
            </div>
            <div className="text-xs text-ras-muted uppercase">STUDENT ENGINEERS</div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-extrabold text-white font-heading mb-1">
              12
            </div>
            <div className="text-xs text-ras-muted uppercase">RESEARCH PAPERS & AWARDS</div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-extrabold text-ras-blue font-heading mb-1">
              100%
            </div>
            <div className="text-xs text-ras-muted uppercase">OPEN SOURCE HARDWARE</div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="relative p-8 sm:p-16 rounded-2xl bg-gradient-to-br from-ras-blue/30 via-[#0D111A] to-[#080B12] border border-ras-cyan/30 text-center space-y-6 overflow-hidden shadow-2xl">
          <div className="hud-corner-tl"></div>
          <div className="hud-corner-tr"></div>
          <div className="hud-corner-bl"></div>
          <div className="hud-corner-br"></div>

          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Ready to Build What Comes Next?
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-ras-muted leading-relaxed font-sans">
            Join a passionate community of engineers, researchers, and creators shaping the future of autonomous systems and industrial automation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={onOpenJoin}
              className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-ras-blue to-ras-cyan text-white font-mono-tech text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-lg shadow-ras-blue/30 hover:opacity-90 transition-opacity"
            >
              JOIN IEEE RAS CHAPTER
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="px-8 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono-tech text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors"
            >
              CONTACT CHAPTER LEADS
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
