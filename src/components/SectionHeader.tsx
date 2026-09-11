import React from 'react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  alignment = 'left',
}) => {
  const isCenter = alignment === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center' : 'text-left'}`}>
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded bg-ras-blue/15 border border-ras-blue/40 text-ras-cyan text-xs font-mono-tech uppercase mb-3 ${
          isCenter ? 'mx-auto' : ''
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-ras-cyan animate-pulse"></span>
        <span>{badge}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-ras-muted max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className={`mt-4 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-0.5 w-12 bg-ras-cyan"></div>
        <div className="h-0.5 w-4 bg-ras-blue"></div>
        <div className="h-0.5 w-2 bg-white/20"></div>
      </div>
    </div>
  );
};
