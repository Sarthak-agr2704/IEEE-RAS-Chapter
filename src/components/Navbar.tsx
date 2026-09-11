import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenJoin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenJoin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'research', label: 'Domains' },
    { id: 'projects', label: 'Projects' },
    { id: 'events', label: 'Events' },
    { id: 'team', label: 'Team' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070B]/90 backdrop-blur-lg border-b border-white/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & IEEE RAS Badge */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          {/* Logo Mark */}
          <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-ras-blue to-ras-cyan p-[1px] shadow-lg shadow-ras-blue/30 group-hover:shadow-ras-cyan/40 transition-shadow">
            <div className="w-full h-full bg-[#080B12] rounded-[7px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-ras-cyan group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 font-heading font-bold text-base sm:text-lg tracking-tight text-white">
              <span>IEEE</span>
              <span className="text-ras-cyan">RAS</span>
            </div>
            <div className="text-[10px] font-mono-tech text-ras-muted tracking-widest uppercase">
              STUDENT CHAPTER
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#0D111A]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono-tech transition-all ${
                activeTab === item.id
                  ? 'bg-ras-blue text-white font-semibold shadow-md shadow-ras-blue/30'
                  : 'text-ras-muted hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center gap-3">
          <button
            onClick={onOpenJoin}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-ras-blue to-ras-cyan hover:opacity-90 text-white font-mono-tech text-xs font-semibold tracking-wider uppercase transition-all shadow-md shadow-ras-blue/20"
          >
            <span>JOIN US</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg bg-[#0D111A] border border-white/10 text-white hover:text-ras-cyan transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[65px] bg-[#080B12]/95 border-b border-white/10 backdrop-blur-xl p-6 shadow-2xl flex flex-col gap-2 max-h-[85vh] overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-mono-tech text-left transition-colors ${
                activeTab === item.id
                  ? 'bg-ras-blue/30 border border-ras-blue/50 text-ras-cyan font-bold'
                  : 'text-ras-muted hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{item.label}</span>
              {activeTab === item.id && <div className="w-2 h-2 rounded-full bg-ras-cyan"></div>}
            </button>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenJoin();
            }}
            className="mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-ras-blue to-ras-cyan text-white font-mono-tech text-xs font-semibold uppercase tracking-wider text-center"
          >
            JOIN IEEE RAS CHAPTER
          </button>
        </div>
      )}
    </header>
  );
};
