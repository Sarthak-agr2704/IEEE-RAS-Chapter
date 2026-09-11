import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { galleryData, GalleryItem } from '../data/gallery';
import { Maximize2, Calendar } from 'lucide-react';

interface GalleryProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectImage }) => {
  const [filter, setFilter] = useState<string>('ALL');

  const categories = ['ALL', 'Events', 'Workshops', 'Projects', 'Competitions', 'Behind the Scenes'];

  const filteredGallery = galleryData.filter((item) => {
    if (filter === 'ALL') return true;
    return item.category === filter;
  });

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <SectionHeader
        badge="MEDIA GALLERY"
        title="Chapter Visuals."
        subtitle="Behind-the-scenes snapshots of rover testing, workshop labs, robotics competitions, and chapter events."
      />

      {/* Filter Tabs */}
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

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGallery.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectImage(item)}
            className="group relative rounded-2xl overflow-hidden bg-[#0D111A] border border-white/10 hover:border-ras-cyan/50 cursor-pointer h-72 sm:h-80 transition-all shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-between opacity-90 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-tech bg-ras-blue/40 border border-ras-cyan/40 text-ras-cyan">
                  {item.category.toUpperCase()}
                </span>
                <div className="p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold font-heading text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-mono-tech text-ras-muted flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-ras-cyan" />
                  <span>{item.date}</span>
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
