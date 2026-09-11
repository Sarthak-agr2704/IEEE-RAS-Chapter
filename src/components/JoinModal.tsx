import React, { useState } from 'react';
import { X, CheckCircle2, Bot, Code, Cpu, Sparkles } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    year: 'Undergraduate',
    interest: 'Autonomous Mobile Robots (ROS 2)',
    experience: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#0D111A] border border-white/15 rounded-xl shadow-2xl overflow-hidden my-8 flex flex-col">
        
        {/* HUD Corner Decorators */}
        <div className="hud-corner-tl"></div>
        <div className="hud-corner-tr"></div>
        <div className="hud-corner-bl"></div>
        <div className="hud-corner-br"></div>

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080B12]">
          <div className="flex items-center gap-2 text-ras-cyan font-mono-tech text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>JOIN IEEE RAS CHAPTER // 2026</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-ras-muted hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">
                APPLICATION RECEIVED
              </h3>
              <p className="text-sm text-ras-muted font-mono-tech max-w-md mx-auto">
                Thank you for applying to IEEE RAS! Our chapter lead will reach out to you at <strong className="text-white">{formData.email}</strong> with details on the upcoming orientation and hardware onboarding task.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 rounded bg-ras-blue hover:bg-ras-cyan text-white text-xs font-mono-tech uppercase font-semibold transition-colors"
              >
                CLOSE WINDOW
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-xl font-bold font-heading text-white">
                  Build What Comes Next.
                </h3>
                <p className="text-xs font-mono-tech text-ras-muted mt-1">
                  Fill out this application to join research project teams, hardware workshops, and competition squads.
                </p>
              </div>

              <div className="space-y-3 pt-2 font-mono-tech text-xs">
                <div>
                  <label className="block text-ras-muted mb-1">FULL NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-[#080B12] border border-white/15 text-white focus:outline-none focus:border-ras-cyan"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-ras-muted mb-1">STUDENT EMAIL *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. a.rivera@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#080B12] border border-white/15 text-white focus:outline-none focus:border-ras-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-ras-muted mb-1">DEPARTMENT / MAJOR</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Computer Science / Mechanical"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#080B12] border border-white/15 text-white focus:outline-none focus:border-ras-cyan"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-ras-muted mb-1">PRIMARY DOMAIN INTEREST</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-[#080B12] border border-white/15 text-white focus:outline-none focus:border-ras-cyan"
                  >
                    <option>Autonomous Mobile Robots (ROS 2 / Nav2)</option>
                    <option>Computer Vision & 3D Point Cloud</option>
                    <option>Artificial Intelligence & Reinforcement Learning</option>
                    <option>Embedded Firmware & CAN Bus (STM32)</option>
                    <option>Drones & UAV Swarms (PX4)</option>
                    <option>Bionics & Prosthetics</option>
                    <option>Events & Chapter Operations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-ras-muted mb-1">BRIEF SKILLS / INTERESTS SUMMARY</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us briefly about your interest in robotics, coding, or hands-on hardware..."
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-[#080B12] border border-white/15 text-white focus:outline-none focus:border-ras-cyan resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 rounded-lg bg-gradient-to-r from-ras-blue to-ras-cyan text-white font-mono-tech text-xs font-semibold uppercase tracking-wider shadow-lg shadow-ras-blue/20 hover:opacity-95 transition-opacity"
              >
                SUBMIT IEEE RAS APPLICATION
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
