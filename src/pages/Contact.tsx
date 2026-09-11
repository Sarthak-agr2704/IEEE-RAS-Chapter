import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General Chapter Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <SectionHeader
        badge="GET IN TOUCH"
        title="Let's Build Something."
        subtitle="Have questions about chapter membership, industrial project sponsorships, research collaboration, or guest lectures?"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Official Chapter Details & Location */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-2xl bg-[#0D111A] border border-white/10 tech-border space-y-6">
            <h3 className="text-2xl font-bold font-heading text-white">
              Official Chapter Contact
            </h3>
            <p className="text-xs text-ras-muted leading-relaxed font-sans">
              Our chapter committee responds to technical inquiries, prospective student applicants, and event sponsorship opportunities within 24-48 hours.
            </p>

            <div className="space-y-4 font-mono-tech text-xs">
              <div className="flex items-start gap-3 p-3 rounded bg-[#080B12] border border-white/5">
                <Mail className="w-4 h-4 text-ras-cyan shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-white/40 block">CHAPTER EMAIL</span>
                  <a href="mailto:contact@ieee-ras.org" className="text-white font-semibold hover:text-ras-cyan">
                    contact@ieee-ras.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded bg-[#080B12] border border-white/5">
                <MapPin className="w-4 h-4 text-ras-cyan shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-white/40 block">LABORATORY LOCATION</span>
                  <span className="text-white font-semibold">
                    Robotics & Automation Laboratory // Engineering Building Hall 4
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-white/10 space-y-2 font-mono-tech text-xs">
              <span className="text-ras-muted text-[10px] uppercase">CONNECT ON SOCIAL MEDIA</span>
              <div className="flex gap-3 pt-1">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-ras-cyan" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-ras-cyan" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive HUD System Diagnostic Card */}
          <div className="p-6 rounded-2xl bg-[#080B12] border border-white/10 font-mono-tech text-xs space-y-3">
            <div className="flex items-center justify-between text-emerald-400 font-semibold">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>COMMUNICATIONS NODE: ONLINE</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            </div>
            <p className="text-[11px] text-ras-muted">
              Direct encrypted channel connected to IEEE RAS student branch committee.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 p-8 rounded-2xl bg-[#0D111A] border border-white/10 tech-border">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">
                MESSAGE TRANSMITTED
              </h3>
              <p className="text-xs font-mono-tech text-ras-muted max-w-md mx-auto">
                Thank you for reaching out to IEEE RAS. A chapter representative will reply to <strong className="text-white">{form.email}</strong> shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: '', email: '', subject: 'General Chapter Inquiry', message: '' });
                }}
                className="mt-4 px-6 py-2.5 rounded bg-ras-blue hover:bg-ras-cyan text-white text-xs font-mono-tech uppercase font-semibold transition-colors"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="text-xl font-bold font-heading text-white">
                  Send an Inquiry
                </h3>
                <p className="text-xs font-mono-tech text-ras-muted mt-1">
                  Fill out the fields below and our team will get back to you.
                </p>
              </div>

              <div className="space-y-4 font-mono-tech text-xs">
                <div>
                  <label className="block text-ras-muted mb-1.5">FULL NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Miller"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#080B12] border border-white/15 text-white focus:outline-none focus:border-ras-cyan"
                  />
                </div>

                <div>
                  <label className="block text-ras-muted mb-1.5">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. j.miller@domain.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#080B12] border border-white/15 text-white focus:outline-none focus:border-ras-cyan"
                  />
                </div>

                <div>
                  <label className="block text-ras-muted mb-1.5">SUBJECT CATEGORY</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#080B12] border border-white/15 text-white focus:outline-none focus:border-ras-cyan"
                  >
                    <option>General Chapter Inquiry</option>
                    <option>Student Chapter Membership</option>
                    <option>Industry Sponsorship / Project Collaboration</option>
                    <option>Workshop / Guest Speaker Proposal</option>
                    <option>Robotics Competition Team Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-ras-muted mb-1.5">MESSAGE *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Provide details regarding your inquiry..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#080B12] border border-white/15 text-white focus:outline-none focus:border-ras-cyan resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-ras-blue to-ras-cyan text-white font-mono-tech text-xs font-semibold uppercase tracking-wider shadow-lg shadow-ras-blue/20 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
                <span>TRANSMIT MESSAGE</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
