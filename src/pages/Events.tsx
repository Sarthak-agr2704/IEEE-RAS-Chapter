import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { eventsData, EventItem } from '../data/events';
import { Calendar, Clock, MapPin, Tag, User, CheckCircle, ArrowRight } from 'lucide-react';

interface EventsProps {
  onSelectEvent: (event: EventItem) => void;
}

export const Events: React.FC<EventsProps> = ({ onSelectEvent }) => {
  const [tab, setTab] = useState<string>('ALL');

  const filteredEvents = eventsData.filter((e) => {
    if (tab === 'ALL') return true;
    if (tab === 'Upcoming') return e.status === 'Upcoming';
    if (tab === 'Past') return e.status === 'Past';
    return e.category.toLowerCase() === tab.toLowerCase();
  });

  const featuredEvent = eventsData.find((e) => e.featured) || eventsData[0];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <SectionHeader
        badge="CHAPTER CALENDAR"
        title="Events & Hackathons."
        subtitle="Join our hands-on hardware workshops, research seminars, and 36-hour autonomous rover hackathons."
      />

      {/* FEATURED EVENT SPOTLIGHT BANNER */}
      {featuredEvent && (
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#0D111A] via-[#080B12] to-[#0D111A] border border-ras-cyan/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden tech-border shadow-2xl">
          <div className="hud-corner-tl"></div>
          <div className="hud-corner-tr"></div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3 font-mono-tech text-xs">
              <span className="px-3 py-1 rounded bg-ras-blue/30 text-ras-cyan border border-ras-cyan/40 font-bold uppercase">
                FEATURED SPOTLIGHT
              </span>
              <span className="text-emerald-400 font-semibold">● REGISTRATION OPEN</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white leading-tight">
              {featuredEvent.title}
            </h2>

            <p className="text-ras-muted text-sm sm:text-base leading-relaxed">
              {featuredEvent.shortDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono-tech text-xs pt-2">
              <div className="flex items-center gap-2 text-ras-muted">
                <Calendar className="w-4 h-4 text-ras-cyan" />
                <span>{featuredEvent.date}</span>
              </div>
              <div className="flex items-center gap-2 text-ras-muted">
                <Clock className="w-4 h-4 text-ras-cyan" />
                <span>{featuredEvent.time}</span>
              </div>
              <div className="flex items-center gap-2 text-ras-muted">
                <MapPin className="w-4 h-4 text-ras-cyan" />
                <span className="truncate">{featuredEvent.location}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onSelectEvent(featuredEvent)}
                className="px-6 py-3 rounded-lg bg-ras-blue hover:bg-ras-cyan text-white font-mono-tech text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg shadow-ras-blue/30 inline-flex items-center gap-2"
              >
                <span>REGISTER & VIEW DETAILS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-xl overflow-hidden border border-white/10">
            <img
              src={featuredEvent.image}
              alt={featuredEvent.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-transparent to-transparent"></div>
          </div>
        </div>
      )}

      {/* FILTER TABS */}
      <div className="flex flex-wrap items-center gap-2 p-2 rounded-xl bg-[#0D111A] border border-white/10">
        {['ALL', 'Upcoming', 'Past', 'Workshop', 'Hackathon', 'Research Seminar'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-lg text-xs font-mono-tech uppercase transition-all ${
              tab === t
                ? 'bg-ras-blue text-white font-semibold shadow-md shadow-ras-blue/30'
                : 'text-ras-muted hover:text-white hover:bg-white/5'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* EVENT CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            onClick={() => onSelectEvent(event)}
            className="group p-6 rounded-2xl bg-[#0D111A] border border-white/10 hover:border-ras-cyan/50 hover:bg-[#131826] transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono-tech text-xs">
                <span className="px-2.5 py-0.5 rounded bg-ras-cyan/10 border border-ras-cyan/30 text-ras-cyan">
                  {event.category.toUpperCase()}
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] ${
                  event.status === 'Upcoming' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-white/5 text-ras-muted'
                }`}>
                  ● {event.status.toUpperCase()}
                </span>
              </div>

              <h3 className="text-xl font-bold font-heading text-white group-hover:text-ras-cyan transition-colors">
                {event.title}
              </h3>

              <p className="text-xs text-ras-muted leading-relaxed line-clamp-3">
                {event.shortDesc}
              </p>

              <div className="space-y-2 pt-2 font-mono-tech text-xs text-ras-muted">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-ras-cyan shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-ras-cyan shrink-0" />
                  <span className="truncate">{event.location}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between font-mono-tech text-xs">
              <span className="text-ras-cyan font-semibold group-hover:translate-x-1 transition-transform">
                {event.registrationOpen ? 'Register Now →' : 'View Summary →'}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
