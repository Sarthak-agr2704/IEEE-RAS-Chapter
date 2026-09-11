import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { TelemetryBar } from './components/TelemetryBar';
import { ProjectModal } from './components/ProjectModal';
import { EventModal } from './components/EventModal';
import { LightboxModal } from './components/LightboxModal';
import { JoinModal } from './components/JoinModal';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Research } from './pages/Research';
import { Projects } from './pages/Projects';
import { Events } from './pages/Events';
import { Team } from './pages/Team';
import { Achievements } from './pages/Achievements';
import { Gallery } from './pages/Gallery';
import { Resources } from './pages/Resources';
import { Contact } from './pages/Contact';

import { Project } from './data/projects';
import { EventItem } from './data/events';
import { GalleryItem } from './data/gallery';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  // Modal States
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isJoinOpen, setIsJoinOpen] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderCurrentPage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <Home
            setActiveTab={setActiveTab}
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenJoin={() => setIsJoinOpen(true)}
          />
        );
      case 'about':
        return <About onOpenJoin={() => setIsJoinOpen(true)} />;
      case 'research':
        return <Research />;
      case 'projects':
        return <Projects onSelectProject={(p) => setSelectedProject(p)} />;
      case 'events':
        return <Events onSelectEvent={(e) => setSelectedEvent(e)} />;
      case 'team':
        return <Team />;
      case 'achievements':
        return <Achievements />;
      case 'gallery':
        return <Gallery onSelectImage={(img) => setSelectedImage(img)} />;
      case 'resources':
        return <Resources />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <Home
            setActiveTab={setActiveTab}
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenJoin={() => setIsJoinOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-white font-sans flex flex-col justify-between selection:bg-ras-blue selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenJoin={() => setIsJoinOpen(true)}
      />

      {/* Telemetry Status Bar below navbar spacing */}
      <div className="pt-[72px]">
        <TelemetryBar />
      </div>

      {/* Main Dynamic View */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenJoin={() => setIsJoinOpen(true)}
      />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <LightboxModal
        item={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      <JoinModal
        isOpen={isJoinOpen}
        onClose={() => setIsJoinOpen(false)}
      />

    </div>
  );
}

export default App;
