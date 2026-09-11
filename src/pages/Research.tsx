import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { domainsData } from '../data/domains';
import { Cpu, BrainCircuit, Eye, Compass, Zap, Bot, Shield, Network, Terminal, BookOpen } from 'lucide-react';

export const Research: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState(domainsData[0].id);

  const activeDomainData = domainsData.find((d) => d.id === selectedDomain) || domainsData[0];

  const researchTopics = [
    {
      id: "slam-3d",
      title: "GPS-Denied 3D SLAM & Point Cloud Odometry",
      field: "Perception & Mapping",
      desc: "Investigating tight-coupling between 32-channel 3D LiDAR, stereo visual odometry, and 9-DOF inertial measurements for indoor structural mapping.",
      pubs: "ICRA 2025 Workshop Paper",
      status: "Active Lab Testing"
    },
    {
      id: "rl-locomotion",
      title: "Sim-to-Real Reinforcement Learning Locomotion",
      field: "Artificial Intelligence",
      desc: "Training neural motor policies in GPU parallel environments (Isaac Sim) with domain randomization to achieve robust quadruped walking across dynamic obstacles.",
      pubs: "IEEE RAS Regional Best Paper 2025",
      status: "Ongoing Experiments"
    },
    {
      id: "swarm-consensus",
      title: "Decentralized Swarm Consensus in Aerial Quadcopters",
      field: "Multi-Agent Systems",
      desc: "Applying potential field navigation and wireless UWB time-of-flight spatial anchors for collision-free formation flight without centralized motion capture.",
      pubs: "National Aerial Expo Proceedings",
      status: "Field Trials"
    },
    {
      id: "tactile-bionics",
      title: "Surface EMG Pattern Recognition for Compliant Grippers",
      field: "Bionics & Prosthetics",
      desc: "Constructing low-latency random forest classifiers on microcontrollers to translate forearm muscle micro-volt impulses into continuous finger joint trajectory angles.",
      pubs: "Biomedical Engineering Symposium",
      status: "Prototype V2"
    }
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      <SectionHeader
        badge="RESEARCH & TECHNICAL DOMAINS"
        title="Exploring the Frontiers of Robotics."
        subtitle="Our chapter laboratories conduct applied research across perception, autonomous navigation, reinforcement learning, micro-ROS embedded systems, and bionic actuation."
      />

      {/* Interactive Domain Navigator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Domain Selection Tabs */}
        <div className="lg:col-span-4 space-y-2">
          <h3 className="text-xs font-mono-tech text-ras-muted uppercase tracking-wider mb-3">
            TECHNICAL DOMAINS DIRECTORY
          </h3>
          {domainsData.map((domain) => (
            <button
              key={domain.id}
              onClick={() => setSelectedDomain(domain.id)}
              className={`w-full p-4 rounded-xl border text-left font-mono-tech text-xs transition-all flex items-center justify-between ${
                selectedDomain === domain.id
                  ? 'bg-ras-blue/20 border-ras-cyan text-white shadow-lg shadow-ras-blue/20'
                  : 'bg-[#0D111A] border-white/10 text-ras-muted hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-ras-cyan font-bold">{domain.number}</span>
                <span className="font-semibold uppercase">{domain.title}</span>
              </div>
              <span className="text-[10px] text-ras-muted">{domain.metrics.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Selected Domain Focus Panel */}
        <div className="lg:col-span-8 p-8 rounded-2xl bg-[#0D111A] border border-white/10 tech-border space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="font-mono-tech text-xs text-ras-cyan uppercase">
                DOMAIN SPECIFICATION // {activeDomainData.number}
              </span>
              <h3 className="text-2xl font-bold font-heading text-white mt-1">
                {activeDomainData.title}
              </h3>
            </div>
            <div className="px-3 py-1 rounded bg-white/5 border border-white/10 font-mono-tech text-xs text-emerald-400">
              ● {activeDomainData.metrics}
            </div>
          </div>

          <p className="text-ras-muted text-base leading-relaxed font-sans">
            {activeDomainData.fullDesc}
          </p>

          <div className="space-y-3">
            <h4 className="text-xs font-mono-tech text-white uppercase tracking-wider">
              PRIMARY TECHNOLOGIES & FRAMEWORKS
            </h4>
            <div className="flex flex-wrap gap-2">
              {activeDomainData.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-ras-blue/20 border border-ras-blue/40 font-mono-tech text-xs text-ras-cyan"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ONGOING RESEARCH PROJECTS GRID */}
      <div className="space-y-8">
        <div>
          <span className="px-3 py-1 rounded bg-ras-cyan/10 border border-ras-cyan/30 text-ras-cyan font-mono-tech text-xs uppercase">
            LABORATORY INITIATIVES
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-2">
            Active Research Papers & Experimental Setups
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchTopics.map((topic) => (
            <div
              key={topic.id}
              className="p-6 rounded-xl bg-[#0D111A] border border-white/10 space-y-4 hover:border-ras-cyan/40 transition-colors"
            >
              <div className="flex items-center justify-between font-mono-tech text-xs">
                <span className="text-ras-cyan uppercase font-semibold">{topic.field}</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {topic.status}
                </span>
              </div>

              <h4 className="text-lg font-bold font-heading text-white">
                {topic.title}
              </h4>

              <p className="text-xs text-ras-muted leading-relaxed font-sans">
                {topic.desc}
              </p>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono-tech text-xs text-ras-muted">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-ras-cyan" />
                  <span>{topic.pubs}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
