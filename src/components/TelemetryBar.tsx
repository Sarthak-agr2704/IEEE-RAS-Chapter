import React from 'react';
import { Activity, ShieldCheck, Cpu, Wifi } from 'lucide-react';

export const TelemetryBar: React.FC = () => {
  return (
    <div className="w-full bg-[#080B12]/90 border-y border-white/10 backdrop-blur-md py-2.5 px-4 text-xs font-mono-tech text-ras-muted select-none z-20">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-white tracking-wider">SYSTEM ONLINE</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 border-l border-white/10 pl-6">
            <Activity className="w-3.5 h-3.5 text-ras-cyan" />
            <span>AUTONOMY: <strong className="text-white">ACTIVE</strong></span>
          </div>

          <div className="hidden md:flex items-center gap-2 border-l border-white/10 pl-6">
            <Cpu className="w-3.5 h-3.5 text-ras-cyan" />
            <span>VISION: <strong className="text-white">60 FPS STEREO</strong></span>
          </div>

          <div className="hidden lg:flex items-center gap-2 border-l border-white/10 pl-6">
            <ShieldCheck className="w-3.5 h-3.5 text-ras-blue" />
            <span>CONTROL LOOP: <strong className="text-white">100Hz STABLE</strong></span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-[#7E8B9B]">
          <div className="flex items-center gap-1.5">
            <Wifi className="w-3.5 h-3.5 text-ras-cyan" />
            <span>ROS 2 HUMBLE // DDS MESH</span>
          </div>
          <div className="hidden sm:block text-white/40">|</div>
          <div className="hidden sm:block">CHAPTER ID: <span className="text-ras-cyan font-bold">#RAS-2026</span></div>
        </div>
      </div>
    </div>
  );
};
