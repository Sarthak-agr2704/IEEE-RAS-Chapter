import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ShieldCheck, Target, Award, Cpu, BookOpen, Layers, Users, Sparkles, ArrowRight } from 'lucide-react';

interface AboutProps {
  onOpenJoin: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenJoin }) => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Header */}
      <SectionHeader
        badge="ABOUT THE CHAPTER"
        title="Engineering Autonomy."
        subtitle="The IEEE Robotics and Automation Society (IEEE RAS) Student Chapter is dedicated to advancing robotics knowledge, applied engineering research, and student innovation."
      />

      {/* Mission & Vision Split Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-[#0D111A] border border-white/10 tech-border space-y-4">
          <div className="w-12 h-12 rounded-xl bg-ras-blue/20 border border-ras-cyan/40 flex items-center justify-center">
            <Target className="w-6 h-6 text-ras-cyan" />
          </div>
          <h3 className="text-2xl font-bold font-heading text-white">CHAPTER VISION</h3>
          <p className="text-ras-muted text-sm sm:text-base leading-relaxed font-sans">
            To serve as a premier student robotics hub where future engineers master autonomous systems, kinematic mechanics, artificial intelligence, and embedded firmware to solve real-world industrial and societal challenges.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-[#0D111A] border border-white/10 tech-border space-y-4">
          <div className="w-12 h-12 rounded-xl bg-ras-blue/20 border border-ras-cyan/40 flex items-center justify-center">
            <Award className="w-6 h-6 text-ras-cyan" />
          </div>
          <h3 className="text-2xl font-bold font-heading text-white">CHAPTER MISSION</h3>
          <p className="text-ras-muted text-sm sm:text-base leading-relaxed font-sans">
            We empower students through open-hardware research, peer-led technical boot camps, international robotics competitions, paper publications, and strategic industry collaboration.
          </p>
        </div>
      </div>

      {/* VISUAL FLOW: LEARN -> BUILD -> COMPETE -> RESEARCH -> INNOVATE */}
      <div className="space-y-6">
        <h3 className="text-xs font-mono-tech text-ras-cyan uppercase tracking-widest text-center">
          OUR DEVELOPMENT METHODOLOGY
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {[
            { step: '01', title: 'LEARN', desc: 'ROS 2, Linux, CAD, and Control loops' },
            { step: '02', title: 'BUILD', desc: 'Hardware prototyping & sensor wiring' },
            { step: '03', title: 'COMPETE', desc: 'National & international rover trials' },
            { step: '04', title: 'RESEARCH', desc: 'Sim-to-Real RL & Computer Vision' },
            { step: '05', title: 'INNOVATE', desc: 'Open-source code & paper publishing' }
          ].map((flow, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0D111A] border border-white/10 text-center space-y-2 relative group hover:border-ras-cyan/50 transition-colors"
            >
              <div className="font-mono-tech text-xs text-ras-cyan font-bold">{flow.step}</div>
              <div className="font-heading text-lg font-bold text-white">{flow.title}</div>
              <p className="text-xs text-ras-muted leading-snug">{flow.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GOVERNANCE & AFFILIATION ARCHITECTURE */}
      <div className="p-8 sm:p-12 rounded-2xl bg-[#080B12] border border-white/10 space-y-8">
        <div className="max-w-2xl">
          <span className="px-3 py-1 rounded bg-ras-blue/20 text-ras-cyan font-mono-tech text-xs uppercase">
            ORGANIZATIONAL STRUCTURE
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-3">
            IEEE Governance & Chapter Relationship
          </h3>
          <p className="text-ras-muted text-sm mt-2">
            Understanding how our local student chapter integrates within global engineering leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono-tech text-xs">
          <div className="p-5 rounded-lg bg-[#0D111A] border border-white/10 space-y-2">
            <span className="text-white/40 block text-[10px]">PARENT ENTITY</span>
            <h4 className="text-white font-bold text-sm">IEEE GLOBAL</h4>
            <p className="text-ras-muted text-[11px] font-sans">
              The world's largest technical professional organization for advancing technology for humanity.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#0D111A] border border-white/10 space-y-2">
            <span className="text-white/40 block text-[10px]">TECHNICAL SOCIETY</span>
            <h4 className="text-ras-cyan font-bold text-sm">IEEE RAS SOCIETY</h4>
            <p className="text-ras-muted text-[11px] font-sans">
              Fosters global scientific research and education in robotics and automation sciences.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#0D111A] border border-white/10 space-y-2">
            <span className="text-white/40 block text-[10px]">INSTITUTIONAL BRANCH</span>
            <h4 className="text-white font-bold text-sm">STUDENT BRANCH</h4>
            <p className="text-ras-muted text-[11px] font-sans">
              University student branch providing campus engineering activities and administrative oversight.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#0D111A] border border-ras-cyan/40 bg-ras-blue/10 space-y-2">
            <span className="text-ras-cyan block text-[10px]">LOCAL CHAPTER</span>
            <h4 className="text-white font-bold text-sm">IEEE RAS CHAPTER</h4>
            <p className="text-ras-muted text-[11px] font-sans">
              Our specialized student chapter leading hands-on robotics labs, rovers, and research teams.
            </p>
          </div>
        </div>
      </div>

      {/* CORE PILLARS */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold font-heading text-white">WHAT WE DO & OFFER</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#0D111A] border border-white/10 space-y-3">
            <Cpu className="w-8 h-8 text-ras-cyan" />
            <h4 className="text-lg font-bold font-heading text-white">Hands-on Hardware Labs</h4>
            <p className="text-xs text-ras-muted leading-relaxed font-sans">
              Access 3D printers, soldering stations, LiDAR sensors, Jetson edge boards, and high-performance workstation GPUs for hardware prototyping.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0D111A] border border-white/10 space-y-3">
            <BookOpen className="w-8 h-8 text-ras-cyan" />
            <h4 className="text-lg font-bold font-heading text-white">Peer-Led Workshops</h4>
            <p className="text-xs text-ras-muted leading-relaxed font-sans">
              Weekly masterclasses on ROS 2 Humble, MoveIt 2 trajectory planning, OpenCV object tracking, and embedded C++ micro-ROS firmware.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0D111A] border border-white/10 space-y-3">
            <Users className="w-8 h-8 text-ras-cyan" />
            <h4 className="text-lg font-bold font-heading text-white">Industry & Research Network</h4>
            <p className="text-xs text-ras-muted leading-relaxed font-sans">
              Direct connection with IEEE RAS global conferences (ICRA, IROS), university research professors, and industrial robotics hiring partners.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-ras-blue/30 via-[#0D111A] to-[#080B12] border border-white/10 flex flex-wrap items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold font-heading text-white">Become Part of the Chapter</h3>
          <p className="text-xs font-mono-tech text-ras-muted mt-1">Open to all passionate undergraduate and graduate engineering students.</p>
        </div>
        <button
          onClick={onOpenJoin}
          className="px-6 py-3 rounded-lg bg-ras-blue hover:bg-ras-cyan text-white font-mono-tech text-xs font-semibold uppercase tracking-wider transition-colors"
        >
          APPLY FOR MEMBERSHIP
        </button>
      </div>

    </div>
  );
};
