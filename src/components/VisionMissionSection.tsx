import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  GraduationCap, 
  Activity, 
  ShieldAlert, 
  FileCheck, 
  Compass, 
  Target, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  Download
} from 'lucide-react';
import { VISION_MISSION } from '../data/mockData';
import { ThreeInteractiveOrbitPillars } from './ThreeInteractiveOrbitPillars';
import { Card3D } from './Card3D';

interface VisionMissionProps {
  onOpenPressKit: () => void;
}

export const VisionMissionSection: React.FC<VisionMissionProps> = ({ onOpenPressKit }) => {
  const [selectedMission, setSelectedMission] = useState<number>(1);

  const getMissionIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-sky-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-sky-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-sky-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-sky-400" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-sky-400" />;
      default: return <Target className="w-5 h-5 text-sky-400" />;
    }
  };

  const activeMissionData = VISION_MISSION.missions.find(m => m.id === selectedMission) || VISION_MISSION.missions[0];

  return (
    <section id="visi-misi" className="py-20 relative border-t border-slate-800 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-sky-300 text-xs font-bold uppercase tracking-wider shadow-3d-blue">
            <Compass className="w-3.5 h-3.5" />
            <span>Arah & Komitmen Strategis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Visi & 5 Panca Misi <span className="blue-gradient-text">Bang Desmonth</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Peta jalan pembangunan berkelanjutan yang bertumpu pada kemakmuran rakyat, keadilan sosial, dan pelayanan publik yang responsif.
          </p>
        </motion.div>

        {/* 3D Interactive WebGL Orbit Pillars Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <ThreeInteractiveOrbitPillars />
        </motion.div>

        {/* Grand Vision Card Banner with 3D Card Tilt */}
        <Card3D maxTilt={6} depth={20} glareOpacity={0.25}>
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/60 border border-blue-500/40 relative overflow-hidden shadow-3d-elevated">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Compass className="w-48 h-48 text-sky-400" />
            </div>

            <div className="relative z-10 space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-blue-600 text-white text-xs font-extrabold tracking-wide uppercase shadow-md shadow-blue-600/30">
                Visi Utama 2024 - 2029
              </div>
              
              <h3 className="text-xl sm:text-3xl font-extrabold text-white font-cinzel leading-snug">
                "{VISION_MISSION.grandVision}"
              </h3>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {VISION_MISSION.visionNarrative}
              </p>

              {/* Quick Strategic Pillars Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800">
                {VISION_MISSION.pillars.map((pillar, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-xl bg-slate-900/90 border border-blue-500/20 shadow-md"
                  >
                    <div className="text-xs font-bold text-sky-400 font-cinzel">{pillar.metric}</div>
                    <div className="text-xs font-semibold text-white mt-0.5">{pillar.title}</div>
                    <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">{pillar.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card3D>

        {/* 5 Panca Misi Interactive Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Mission Selector Buttons with Left-to-Right Reveal */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-2.5"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Pilih Panca Misi Strategis:
              </span>
              <span className="text-xs text-sky-400 font-semibold">{selectedMission} dari 5 Misi</span>
            </div>

            {VISION_MISSION.missions.map((mission, index) => {
              const isSelected = selectedMission === mission.id;
              return (
                <motion.button
                  key={mission.id}
                  id={`btn-mission-${mission.id}`}
                  onClick={() => setSelectedMission(mission.id)}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-start gap-3.5 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600/25 border-2 border-blue-500 shadow-3d-blue text-white'
                      : 'bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 text-slate-300'
                  }`}
                >
                  <div className={`p-2 rounded-lg flex-shrink-0 mt-0.5 ${
                    isSelected ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30' : 'bg-slate-800 text-sky-400'
                  }`}>
                    {getMissionIcon(mission.icon)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-extrabold uppercase tracking-wider ${
                        isSelected ? 'text-sky-400' : 'text-slate-500'
                      }`}>
                        Misi 0{mission.id}
                      </span>
                    </div>
                    <h4 className={`text-xs sm:text-sm font-bold mt-0.5 line-clamp-2 ${
                      isSelected ? 'text-white' : 'text-slate-200'
                    }`}>
                      {mission.title}
                    </h4>
                  </div>
                </motion.button>
              );
            })}

            <button
              id="btn-download-roadmap-plan"
              onClick={onOpenPressKit}
              className="w-full mt-4 py-3.5 rounded-xl bg-slate-950 border border-blue-500/40 hover:border-blue-400 text-sky-300 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-3d-blue"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>Unduh Dokumen Lengkap Visi Misi (PDF)</span>
            </button>
          </motion.div>

          {/* Active Mission Detail Drill-down Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeMissionData.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-3xl navy-card border border-blue-500/40 space-y-6 shadow-3d-elevated relative"
              >
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-md bg-blue-600/25 border border-blue-500/40 text-sky-300 font-extrabold text-xs">
                      MISI 0{activeMissionData.id}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">Program Prioritas</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-800 border border-slate-700">
                    {getMissionIcon(activeMissionData.icon)}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {activeMissionData.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {activeMissionData.description}
                  </p>
                </div>

                {/* Focus Areas List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Fokus Aksi & Terobosan:</span>
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeMissionData.focusAreas.map((focus, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.05 }}
                        className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-2.5 shadow-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-slate-200">{focus}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Target Output Milestone Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-slate-900 border border-blue-500/40 flex items-center justify-between gap-4 shadow-md">
                  <div>
                    <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block">
                      Target Capaian Terukur:
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                      {activeMissionData.targetOutput}
                    </p>
                  </div>
                  <Target className="w-8 h-8 text-sky-400 flex-shrink-0 opacity-80" />
                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

