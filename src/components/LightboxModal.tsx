import React from 'react';
import { GalleryItem } from '../data/gallery';
import { X, Calendar, Tag } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
      <div className="relative max-w-5xl w-full bg-[#0D111A] border border-white/15 rounded-xl overflow-hidden shadow-2xl flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-white/20 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />
        </div>

        <div className="p-6 bg-[#080B12] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-tech bg-ras-cyan/10 border border-ras-cyan/30 text-ras-cyan">
                {item.category.toUpperCase()}
              </span>
              <span className="text-xs font-mono-tech text-ras-muted flex items-center gap-1">
                <Calendar className="w-3 h-3 text-ras-cyan" />
                {item.date}
              </span>
            </div>
            <h3 className="text-xl font-bold font-heading text-white">
              {item.title}
            </h3>
            <p className="text-xs font-mono-tech text-ras-muted mt-1">
              {item.caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
