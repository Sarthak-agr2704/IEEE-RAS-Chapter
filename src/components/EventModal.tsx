import React, { useState } from 'react';
import { EventItem } from '../data/events';
import { X, Calendar, Clock, MapPin, CheckCircle, User } from 'lucide-react';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const [registered, setRegistered] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setRegistered(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0D111A] border border-white/15 rounded-xl shadow-2xl overflow-hidden my-8 flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080B12]">
          <span className="font-mono-tech text-xs text-ras-cyan px-2.5 py-1 bg-ras-cyan/10 border border-ras-cyan/30 rounded">
            {event.category.toUpperCase()}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-ras-muted hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold font-heading text-white mb-2">
              {event.title}
            </h2>
            <p className="text-ras-muted text-sm leading-relaxed">
              {event.fullDesc}
            </p>
          </div>

          {/* Key Event Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-lg bg-[#080B12] border border-white/10 font-mono-tech text-xs">
            <div className="flex items-center gap-2.5 text-ras-muted">
              <Calendar className="w-4 h-4 text-ras-cyan shrink-0" />
              <div>
                <span className="block text-[10px] text-white/40">DATE</span>
                <span className="text-white font-semibold">{event.date}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-ras-muted">
              <Clock className="w-4 h-4 text-ras-cyan shrink-0" />
              <div>
                <span className="block text-[10px] text-white/40">TIME</span>
                <span className="text-white font-semibold">{event.time}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-ras-muted">
              <MapPin className="w-4 h-4 text-ras-cyan shrink-0" />
              <div>
                <span className="block text-[10px] text-white/40">LOCATION</span>
                <span className="text-white font-semibold">{event.location}</span>
              </div>
            </div>
          </div>

          {event.speaker && (
            <div className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/5">
              <User className="w-4 h-4 text-ras-cyan" />
              <span className="text-xs font-mono-tech text-ras-muted">
                KEYNOTE SPEAKER: <strong className="text-white">{event.speaker}</strong>
              </span>
            </div>
          )}

          {/* Agenda */}
          {event.agenda && event.agenda.length > 0 && (
            <div>
              <h3 className="text-xs font-mono-tech text-ras-muted uppercase tracking-wider mb-2">
                WORKSHOP AGENDA
              </h3>
              <ul className="space-y-2 font-mono-tech text-xs">
                {event.agenda.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-ras-muted">
                    <span className="text-ras-cyan">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Registration Section */}
          {event.registrationOpen ? (
            registered ? (
              <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center font-mono-tech text-sm flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>REGISTRATION CONFIRMED! CHECK YOUR EMAIL FOR ATTENDEE PASS.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-white/10">
                <h3 className="text-sm font-bold font-heading text-white">
                  REGISTER FOR THIS EVENT
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded bg-[#080B12] border border-white/15 text-white text-xs font-mono-tech focus:outline-none focus:border-ras-cyan"
                  />
                  <input
                    type="email"
                    required
                    placeholder="University / Student Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded bg-[#080B12] border border-white/15 text-white text-xs font-mono-tech focus:outline-none focus:border-ras-cyan"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-ras-blue hover:bg-ras-cyan text-white font-mono-tech text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg shadow-ras-blue/20"
                >
                  CONFIRM REGISTRATION
                </button>
              </form>
            )
          ) : (
            <div className="p-3 rounded bg-white/5 border border-white/10 text-ras-muted text-xs font-mono-tech text-center">
              REGISTRATION CLOSED FOR THIS PAST EVENT
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
