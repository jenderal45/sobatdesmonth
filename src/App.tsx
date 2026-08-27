import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProfileSection } from './components/ProfileSection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { ContentPlanSection } from './components/ContentPlanSection';
import { NewsSection } from './components/NewsSection';
import { GallerySection } from './components/GallerySection';
import { AgendaSection } from './components/AgendaSection';
import { AspirationSection } from './components/AspirationSection';
import { VolunteerModal } from './components/VolunteerModal';
import { AIChatModal } from './components/AIChatModal';
import { PressKitModal } from './components/PressKitModal';
import { Footer } from './components/Footer';
import { ThreeCanvasBackground } from './components/ThreeCanvasBackground';
import { Bot, Send, Users, ArrowUp, Sparkles } from 'lucide-react';

export default function App() {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isAIChatModalOpen, setIsAIChatModalOpen] = useState(false);
  const [isPressKitModalOpen, setIsPressKitModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600/40 selection:text-blue-100 relative">
      
      {/* Interactive 3D WebGL Canvas Background */}
      <ThreeCanvasBackground />

      {/* Sticky Header Navigation */}
      <Navbar
        onOpenVolunteer={() => setIsVolunteerModalOpen(true)}
        onOpenAI={() => setIsAIChatModalOpen(true)}
        onOpenPressKit={() => setIsPressKitModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero Section */}
        <Hero
          onOpenVolunteer={() => setIsVolunteerModalOpen(true)}
          onOpenPressKit={() => setIsPressKitModalOpen(true)}
          onOpenAI={() => setIsAIChatModalOpen(true)}
        />

        {/* 2. Profil Section */}
        <ProfileSection />

        {/* 3. Visi & Misi Section with 3D Orbit Pillar */}
        <VisionMissionSection
          onOpenPressKit={() => setIsPressKitModalOpen(true)}
        />

        {/* 4. Kalender & Roadmap Content Plan 30 Hari */}
        <ContentPlanSection />

        {/* 5. Berita Kegiatan Section */}
        <NewsSection />

        {/* 6. Galeri Section */}
        <GallerySection />

        {/* 7. Agenda Section */}
        <AgendaSection />

        {/* 8. Form Aspirasi Warga & Papan Transparansi */}
        <AspirationSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenVolunteer={() => setIsVolunteerModalOpen(true)}
        onOpenAI={() => setIsAIChatModalOpen(true)}
        onOpenPressKit={() => setIsPressKitModalOpen(true)}
      />

      {/* Floating Quick Action Widget with 3D elevation */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        {/* Quick AI Trigger */}
        <button
          id="floating-btn-ai"
          onClick={() => setIsAIChatModalOpen(true)}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/95 hover:bg-slate-800 text-sky-300 border border-blue-500/40 shadow-3d-blue backdrop-blur-md transition-all hover:scale-105 cursor-pointer hover:border-blue-400"
          title="Tanya AI Bang Desmonth"
        >
          <Bot className="w-4 h-4 text-sky-400 animate-pulse" />
          <span className="text-xs font-bold hidden sm:inline">Tanya AI</span>
        </button>

        {/* Quick Aspirasi Button */}
        <a
          id="floating-btn-aspirasi"
          href="#aspirasi"
          className="group flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold text-xs btn-3d-primary cursor-pointer border border-blue-400/40"
          title="Suarakan Aspirasi Anda Langsung"
        >
          <Send className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">Suarakan Aspirasi</span>
        </a>
      </div>

      {/* Modals */}
      <VolunteerModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />

      <AIChatModal
        isOpen={isAIChatModalOpen}
        onClose={() => setIsAIChatModalOpen(false)}
      />

      <PressKitModal
        isOpen={isPressKitModalOpen}
        onClose={() => setIsPressKitModalOpen(false)}
      />

    </div>
  );
}
