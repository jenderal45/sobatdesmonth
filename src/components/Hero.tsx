import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Send, 
  ArrowRight, 
  Play, 
  Pause, 
  Volume2, 
  Sparkles, 
  CheckCircle2, 
  FileDown, 
  Users, 
  HeartHandshake,
  Award,
  Flame,
  Layers
} from 'lucide-react';
import { PROFILE_DATA } from '../data/mockData';
import { Card3D } from './Card3D';

interface HeroProps {
  onOpenVolunteer: () => void;
  onOpenPressKit: () => void;
  onOpenAI: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenVolunteer,
  onOpenPressKit,
  onOpenAI
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioTime, setAudioTime] = useState('00:48 / 01:30');

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="beranda" 
      className="relative min-h-[94vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center"
    >
      {/* Background Decorative 3D Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[160px]"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-sky-500/15 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/20 rounded-full blur-[130px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio Tagline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* 3D Verified Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/90 border border-blue-500/50 text-sky-300 text-xs font-bold shadow-3d-blue">
              <Sparkles className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Gerakan Kolaborasi & Perubahan Nyata</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
              <span className="text-white">Resmi</span>
            </div>

            {/* Main Executive Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Bersama <span className="blue-gradient-text font-cinzel">Bang Desmonth</span>, Mewujudkan Harapan Rakyat Jadi <span className="underline decoration-sky-500 decoration-4 underline-offset-8">Aksi Nyata</span>.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed pt-2">
                {PROFILE_DATA.subtitle} — Mendedikasikan langkah untuk kemandirian ekonomi UMKM, beasiswa pendidikan generasi muda, layanan kesehatan gratis, dan tata kelola yang transparan.
              </p>
            </div>

            {/* 3D Glass Quote Badge */}
            <div className="p-4 rounded-2xl navy-card border border-blue-500/40 text-left relative overflow-hidden shadow-3d-blue">
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600"></div>
              <p className="text-xs sm:text-sm italic text-sky-100/95 font-serif pl-2">
                "{PROFILE_DATA.motto}"
              </p>
              <div className="flex items-center gap-2 mt-2 pl-2">
                <span className="text-[11px] font-bold text-sky-400 tracking-wider uppercase">— Bang Desmonth</span>
                <span className="text-[10px] text-slate-400">• Inisiator Sobat Desmonth</span>
              </div>
            </div>

            {/* 3D Audio Sambutan Player Widget */}
            <div className="p-4 rounded-2xl bg-slate-900/95 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-3d-blue">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  id="btn-hero-audio-play"
                  onClick={toggleAudio}
                  className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white flex items-center justify-center btn-3d-primary flex-shrink-0 cursor-pointer border border-blue-300/40"
                  title="Dengarkan Pesan Sambutan Singkat Bang Desmonth"
                >
                  {isPlayingAudio ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>
                <div>
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-bold text-white">Audio Sambutan: "Mengapa Kita Berjuang Bersama"</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">{audioTime}</span>
                </div>
              </div>

              {/* Sound Wave Animation Visualizer */}
              <div className="flex items-center gap-1.5 h-6 px-3 bg-slate-950/80 rounded-xl border border-slate-800">
                {[40, 75, 100, 50, 85, 30, 90, 60, 100, 45, 70, 35].map((height, idx) => (
                  <span
                    key={idx}
                    className={`w-1 rounded-full transition-all duration-300 ${
                      isPlayingAudio ? 'bg-sky-400 animate-pulse' : 'bg-slate-700'
                    }`}
                    style={{
                      height: isPlayingAudio ? `${height}%` : '20%',
                      animationDelay: `${idx * 0.1}s`
                    }}
                  ></span>
                ))}
              </div>
            </div>

            {/* 3D Tactile CTA Buttons Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                id="btn-hero-aspirasi"
                onClick={() => scrollToSection('aspirasi')}
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-500 hover:to-sky-400 btn-3d-primary border border-blue-400/40 flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Suarakan Aspirasi Anda</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="btn-hero-visi"
                onClick={() => scrollToSection('visi-misi')}
                className="px-5 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-blue-500/50 flex items-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Pelajari Visi & Misi</span>
              </button>

              <button
                id="btn-hero-presskit"
                onClick={onOpenPressKit}
                className="px-4 py-3.5 rounded-xl text-xs font-semibold text-sky-300 bg-blue-950/80 hover:bg-blue-900/80 border border-blue-500/40 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                title="Unduh Fakta & Naskah Profil Lengkap"
              >
                <FileDown className="w-3.5 h-3.5 text-sky-400" />
                <span>Unduh Press Kit</span>
              </button>
            </div>

          </div>

          {/* Right Column: 3D Interactive Portrait Showcase with Multi-Layer Parallax */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md">
              <Card3D maxTilt={14} depth={30} glareOpacity={0.3}>
                <div className="relative rounded-3xl bg-slate-900/90 border-2 border-blue-500/40 p-4 shadow-2xl overflow-hidden backdrop-blur-xl">
                  
                  {/* Visual Portrait Container (Base Layer 0) */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950">
                    <img
                      src="/photos/desmonth_hero_profile.jpg"
                      alt="Bang Desmonth - Kader Muda Partai Demokrat & Penggerak Sobat Desmonth"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                    {/* Floating 3D Badge 1: Tokoh Penggerak (Layer +35px) */}
                    <div 
                      style={{ transform: 'translateZ(35px)' }}
                      className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-blue-400/50 flex items-center gap-1.5 shadow-3d-blue"
                    >
                      <ShieldCheck className="w-4 h-4 text-sky-400" />
                      <span className="text-[11px] font-bold text-white tracking-wide">Tokoh Penggerak Publik</span>
                    </div>

                    {/* Floating 3D Badge 2: DKI Jakarta Seal (Layer +40px) */}
                    <div 
                      style={{ transform: 'translateZ(40px)' }}
                      className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider shadow-lg border border-blue-300/40"
                    >
                      DKI JAKARTA
                    </div>

                    {/* Floating 3D Bottom Caption Nameplate (Layer +50px) */}
                    <div 
                      style={{ transform: 'translateZ(50px)' }}
                      className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-blue-500/40 shadow-3d-blue space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-cinzel text-lg font-bold text-white tracking-wide">
                          BANG DESMONTH
                        </h3>
                        <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                          Aktif Blusukan
                        </span>
                      </div>
                      <p className="text-[11px] text-sky-200 font-medium line-clamp-1">
                        Partai Demokrat • Sobat Desmonth Jakarta Selatan
                      </p>
                    </div>
                  </div>

                  {/* Micro Action Bar under Portrait (Layer +25px) */}
                  <div 
                    style={{ transform: 'translateZ(25px)' }}
                    className="mt-3 grid grid-cols-2 gap-2"
                  >
                    <button
                      id="btn-hero-gabung-relawan-card"
                      onClick={onOpenVolunteer}
                      className="py-2.5 px-3 rounded-xl bg-blue-950/90 hover:bg-blue-900 border border-blue-500/50 text-sky-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
                    >
                      <Users className="w-4 h-4" />
                      <span>Daftar Relawan</span>
                    </button>

                    <button
                      id="btn-hero-tanya-ai-card"
                      onClick={onOpenAI}
                      className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-slate-700 hover:border-blue-500/40 shadow-md"
                    >
                      <Sparkles className="w-4 h-4 text-sky-400" />
                      <span>Tanya AI Bang Desmonth</span>
                    </button>
                  </div>

                </div>
              </Card3D>
            </div>
          </div>

        </div>

        {/* 3D Executive Stats Counter Bar */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {PROFILE_DATA.stats.map((stat, index) => (
              <Card3D key={index} maxTilt={10} depth={20} glareOpacity={0.2}>
                <div className="p-5 rounded-2xl navy-card border border-blue-500/30 group shadow-3d-blue h-full flex flex-col justify-between">
                  <div>
                    <div className="text-2xl sm:text-4xl font-extrabold blue-gradient-text tracking-tight font-cinzel">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mt-1 group-hover:text-sky-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-2 leading-snug">
                    {stat.detail}
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

