import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sparkles, 
  Send, 
  Users, 
  Award, 
  Bot, 
  PhoneCall, 
  ChevronRight,
  FileText
} from 'lucide-react';

interface NavbarProps {
  onOpenVolunteer: () => void;
  onOpenAI: () => void;
  onOpenPressKit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenVolunteer,
  onOpenAI,
  onOpenPressKit
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['beranda', 'profil', 'visi-misi', 'content-plan', 'berita', 'galeri', 'agenda', 'aspirasi'];
      const scrollPos = window.scrollY + 120;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda', id: 'beranda' },
    { name: 'Profil', href: '#profil', id: 'profil' },
    { name: 'Visi & Misi', href: '#visi-misi', id: 'visi-misi' },
    { name: 'Content Plan 30 Hari', href: '#content-plan', id: 'content-plan' },
    { name: 'Berita', href: '#berita', id: 'berita' },
    { name: 'Galeri', href: '#galeri', id: 'galeri' },
    { name: 'Agenda', href: '#agenda', id: 'agenda' },
    { name: 'Aspirasi Warga', href: '#aspirasi', id: 'aspirasi' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-blue-600/30 py-3 shadow-xl shadow-slate-950/70' 
          : 'bg-gradient-to-b from-slate-950/95 via-slate-950/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            id="brand-logo-link"
            href="#beranda"
            onClick={(e) => { e.preventDefault(); handleNavClick('#beranda'); }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-800 flex items-center justify-center shadow-lg shadow-blue-500/30 border border-sky-400/40 group-hover:scale-105 transition-transform duration-300">
              <span className="font-cinzel text-white font-black text-xl tracking-tighter">D</span>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-950"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-sky-300 transition-colors">
                SOBAT <span className="blue-gradient-text font-black">DESMONTH</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-sky-400/80 font-bold -mt-1">
                Official Movement Portal
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-blue-900/40 backdrop-blur-sm shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md shadow-blue-600/30 font-bold border border-blue-400/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* AI Assistant Button */}
            <button
              id="btn-nav-ai-chat"
              onClick={onOpenAI}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-sky-300 bg-blue-950/60 hover:bg-blue-900/70 border border-blue-500/30 transition-all duration-200 cursor-pointer shadow-sm hover:border-blue-400/50"
              title="Tanya seputar Visi, Profil & Program Bang Desmonth"
            >
              <Bot className="w-4 h-4 text-sky-400 animate-pulse" />
              <span>Tanya AI</span>
            </button>

            {/* Volunteer Join Button */}
            <button
              id="btn-nav-volunteer"
              onClick={onOpenVolunteer}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-slate-850 border border-slate-700 hover:border-blue-500/40 transition-all duration-200 cursor-pointer"
            >
              <Users className="w-3.5 h-3.5 text-sky-400" />
              <span>Gabung Relawan</span>
            </button>

            {/* Aspiration CTA Button */}
            <a
              id="btn-nav-aspirasi-cta"
              href="#aspirasi"
              onClick={(e) => { e.preventDefault(); handleNavClick('#aspirasi'); }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-sky-600 hover:from-blue-500 hover:to-sky-500 shadow-lg shadow-blue-600/30 border border-blue-400/30 transition-all duration-200 cursor-pointer hover:shadow-blue-500/50 hover:scale-[1.02]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Kirim Aspirasi</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="btn-mobile-ai"
              onClick={onOpenAI}
              className="p-2 rounded-lg text-sky-400 bg-blue-950/80 border border-blue-500/30"
              aria-label="Tanya AI"
            >
              <Bot className="w-4 h-4" />
            </button>

            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer-overlay"
          className="lg:hidden bg-slate-950/95 border-b border-blue-600/30 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200"
        >
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-800">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center justify-between p-2.5 rounded-lg text-xs font-semibold text-left transition-all ${
                    isActive
                      ? 'bg-blue-600/25 text-sky-300 border border-blue-500/40 font-bold'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              id="mobile-btn-aspirasi"
              onClick={() => handleNavClick('#aspirasi')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-sky-600 shadow-md shadow-blue-600/30 border border-blue-400/30"
            >
              <Send className="w-4 h-4" />
              <span>Suarakan Aspirasi Sekarang</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                id="mobile-btn-volunteer"
                onClick={() => { setMobileMenuOpen(false); onOpenVolunteer(); }}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold text-white bg-slate-900 border border-slate-800 hover:bg-slate-800"
              >
                <Users className="w-3.5 h-3.5 text-sky-400" />
                <span>Gabung Relawan</span>
              </button>

              <button
                id="mobile-btn-presskit"
                onClick={() => { setMobileMenuOpen(false); onOpenPressKit(); }}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>Unduh Profil / Kit</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
