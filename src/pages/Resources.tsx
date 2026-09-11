import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { resourcesData, ResourceItem } from '../data/resources';
import { ExternalLink, BookOpen, Code, Cpu, Terminal, Search, Copy, Check } from 'lucide-react';

export const Resources: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');
  const [search, setSearch] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['ALL', 'ROS 2', 'Computer Vision', 'Hardware & Embedded', 'Simulation', 'IEEE Research Papers'];

  const filteredResources = resourcesData.filter((res) => {
    const matchesCat = filter === 'ALL' || res.category === filter;
    const matchesSearch =
      res.title.toLowerCase().includes(search.toLowerCase()) ||
      res.description.toLowerCase().includes(search.toLowerCase()) ||
      res.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    return matchesCat && matchesSearch;
  });

  const handleCopyCommand = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <SectionHeader
        badge="STUDENT KNOWLEDGE HUB"
        title="Engineering Resources & Toolkits."
        subtitle="Curated documentation, open-source repositories, cheat sheets, and ROS 2 setup guides for chapter developers."
      />

      {/* Quick Terminal Command Cheat Sheet Banner */}
      <div className="p-6 rounded-2xl bg-[#080B12] border border-white/10 space-y-4 font-mono-tech">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-ras-cyan text-xs font-semibold">
            <Terminal className="w-4 h-4" />
            <span>ROS 2 HUMBLE QUICK START COMMANDS</span>
          </div>
          <span className="text-[10px] text-ras-muted">UBUNTU 22.04 LTS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3 rounded bg-[#0D111A] border border-white/10 flex items-center justify-between">
            <code className="text-emerald-400">sudo apt install ros-humble-desktop-full</code>
            <button
              onClick={() => handleCopyCommand('cmd1', 'sudo apt install ros-humble-desktop-full')}
              className="text-ras-muted hover:text-white p-1"
              aria-label="Copy Command"
            >
              {copiedId === 'cmd1' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="p-3 rounded bg-[#0D111A] border border-white/10 flex items-center justify-between">
            <code className="text-emerald-400">sudo apt install ros-humble-navigation2</code>
            <button
              onClick={() => handleCopyCommand('cmd2', 'sudo apt install ros-humble-navigation2')}
              className="text-ras-muted hover:text-white p-1"
              aria-label="Copy Command"
            >
              {copiedId === 'cmd2' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-xl bg-[#0D111A] border border-white/10">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech uppercase transition-all ${
                filter === cat
                  ? 'bg-ras-blue text-white font-semibold shadow-md shadow-ras-blue/30'
                  : 'bg-white/5 text-ras-muted hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-ras-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search tools or tags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#080B12] border border-white/10 text-xs font-mono-tech text-white focus:outline-none focus:border-ras-cyan"
          />
        </div>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredResources.map((res) => (
          <div
            key={res.id}
            className="p-6 rounded-2xl bg-[#0D111A] border border-white/10 hover:border-ras-cyan/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono-tech text-xs">
                <span className="px-2.5 py-0.5 rounded bg-ras-blue/20 text-ras-cyan font-bold">
                  {res.category}
                </span>
                <span className="px-2 py-0.5 rounded bg-white/5 text-ras-muted">
                  {res.type}
                </span>
              </div>

              <h3 className="text-xl font-bold font-heading text-white">
                {res.title}
              </h3>

              <p className="text-xs text-ras-muted leading-relaxed font-sans">
                {res.description}
              </p>

              <div className="p-3 rounded bg-[#080B12] border border-white/5 font-mono-tech text-[11px] text-ras-cyan">
                TARGET AUDIENCE: <span className="text-white">{res.recommendedFor}</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {res.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-[10px] font-mono-tech bg-white/5 text-ras-muted"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between">
              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono-tech text-xs font-semibold text-ras-cyan hover:underline"
              >
                <span>ACCESS OFFICIAL DOCS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
