import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Award, 
  ChevronRight, 
  Quote, 
  CheckCircle2,
  Store,
  Building2,
  Flag,
  UserCheck
} from 'lucide-react';
import { PROFILE_DATA, ORGANIZATION_EXPERIENCES } from '../data/mockData';
import { Card3D } from './Card3D';

export const ProfileSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'organisasi' | 'pendidikan' | 'penghargaan'>('organisasi');
  const [selectedOrgCategory, setSelectedOrgCategory] = useState<string>('Semua');

  const orgCategories = [
    'Semua',
    'Paguyuban & Pasar',
    'Ormas & Kepemudaan',
    'Adat & Marga',
    'Relawan Pemenangan',
    'Partai & Politik',
    'Alumni & Pendidikan'
  ];

  const filteredOrgs = ORGANIZATION_EXPERIENCES.filter(org => {
    if (selectedOrgCategory === 'Semua') return true;
    return org.category === selectedOrgCategory;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-sky-400" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-sky-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-sky-400" />;
      case 'Users': return <Users className="w-6 h-6 text-sky-400" />;
      default: return <CheckCircle2 className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="profil" className="py-20 relative border-t border-slate-800 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-sky-300 text-xs font-bold uppercase tracking-wider shadow-3d-blue">
            <span>Profil & Nilai Pengabdian</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mengenal Lebih Dekat <span className="blue-gradient-text">Bang Desmonth</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Jejak langkah kepemimpinan yang berakar dari kepedulian tulus terhadap kesejahteraan masyarakat dan kemajuan peradaban bangsa.
          </p>
        </motion.div>

        {/* Top Split: Bio Narrative & Visual Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Bio Paragraphs with Left-to-Right Scroll Reveal */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 font-cinzel">
              <span className="w-2.5 h-6 rounded-full bg-blue-500 shadow-md shadow-blue-500/50"></span>
              Dedikasi untuk Rakyat Tanpa Kompromi
            </h3>
            
            <div className="space-y-4 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {PROFILE_DATA.bio.map((paragraph, idx) => (
                <motion.p 
                  key={idx} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-blue-500/20 shadow-3d-blue backdrop-blur-md"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Core Motto with 3D Depth */}
            <Card3D maxTilt={8} depth={20} glareOpacity={0.25}>
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/60 border border-blue-500/40 flex items-start gap-4 shadow-3d-elevated">
                <div className="p-3 rounded-2xl bg-blue-600 text-white flex-shrink-0 mt-1 shadow-md shadow-blue-600/40">
                  <Quote className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-sky-100 italic font-serif">
                    "{PROFILE_DATA.motto}"
                  </p>
                  <span className="text-xs font-bold text-sky-400 mt-2 block tracking-wider uppercase">
                    — Prinsip Kepemimpinan Bang Desmonth
                  </span>
                </div>
              </div>
            </Card3D>
          </motion.div>

          {/* Core Values 4-Grid with 3D Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-cinzel">
              <Award className="w-5 h-5 text-sky-400" />
              <span>4 Pilar Nilai Kepemimpinan</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              {PROFILE_DATA.values.map((val, idx) => (
                <Card3D key={idx} maxTilt={8} depth={15} glareOpacity={0.2}>
                  <div className="p-4 rounded-2xl navy-card border border-blue-500/30 flex items-start gap-3.5 shadow-3d-blue h-full">
                    <div className="p-2.5 rounded-xl bg-blue-950/90 border border-blue-500/40 flex-shrink-0 text-sky-400 shadow-inner">
                      {getIcon(val.icon)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{val.title}</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed font-light">{val.description}</p>
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Tabbed Credentials: Rekam Jejak Pengalaman, Pendidikan & Penghargaan */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-slate-900/90 border border-blue-500/35 p-6 sm:p-8 shadow-3d-elevated backdrop-blur-xl"
        >
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-white font-cinzel">
              Rekam Jejak & Portofolio Pengabdian
            </h3>

            <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 shadow-inner">
              <button
                id="btn-tab-organisasi"
                onClick={() => setActiveTab('organisasi')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'organisasi'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40 border border-blue-400/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Pengalaman Organisasi (10)</span>
              </button>

              <button
                id="btn-tab-pendidikan"
                onClick={() => setActiveTab('pendidikan')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'pendidikan'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40 border border-blue-400/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Pendidikan</span>
              </button>

              <button
                id="btn-tab-penghargaan"
                onClick={() => setActiveTab('penghargaan')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'penghargaan'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40 border border-blue-400/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Penghargaan</span>
              </button>
            </div>
          </div>

          {/* Tab Content: Pengalaman Organisasi (10 Amanah) */}
          {activeTab === 'organisasi' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Highlight Banner: Pasar Modern Bintaro */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-950/90 via-slate-900 to-indigo-950/80 border border-blue-500/50 shadow-3d-blue flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/40 flex-shrink-0">
                    <Store className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider">
                        Amanah Utama • Lebih dari 10 Tahun
                      </span>
                      <span className="text-xs font-mono text-sky-300">2014 - Sekarang</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mt-1 font-cinzel">
                      Ketua Umum Paguyuban Pasar Modern Bintaro
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed font-light">
                      Mendedikasikan kepemimpinan selama lebih dari 10 tahun membina ratusan pedagang pasar, mengawal tata kelola sentra UMKM, stabilisasi harga komoditas, dan permodalan mikro rakyat.
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-blue-900/60 border border-blue-400/40 text-sky-200 text-xs font-bold whitespace-nowrap self-end md:self-center shadow-inner">
                  10+ Tahun Menjabat
                </span>
              </div>

              {/* Sub Categories Filter */}
              <div className="flex flex-wrap gap-2 pt-2 pb-2">
                {orgCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedOrgCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      selectedOrgCategory === cat
                        ? 'bg-blue-600 text-white font-bold shadow-3d-blue border border-blue-400/50'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* 10 Organization Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {filteredOrgs.map((org, index) => (
                  <Card3D key={org.id} maxTilt={6} depth={12} glareOpacity={0.15}>
                    <div className="p-5 rounded-2xl bg-slate-950/80 border border-blue-500/20 hover:border-blue-400/50 transition-all shadow-3d-blue h-full flex flex-col justify-between group">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-lg bg-blue-950 border border-blue-500/40 text-sky-400 text-xs font-bold font-mono flex items-center justify-center">
                              {org.id}
                            </span>
                            <span className="text-[11px] font-semibold text-sky-400/90 px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800">
                              {org.category}
                            </span>
                          </div>
                          <span className="text-[11px] font-mono text-slate-400">
                            {org.period}
                          </span>
                        </div>

                        <div>
                          <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block">
                            {org.role}
                          </span>
                          <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors font-cinzel mt-0.5">
                            {org.organization}
                          </h4>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed font-light">
                          {org.description}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="flex items-center gap-1 text-emerald-400 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Terverifikasi</span>
                        </span>
                        <span className="text-slate-500 font-mono">ID #{org.id}</span>
                      </div>
                    </div>
                  </Card3D>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content: Pendidikan with 3D Cards */}
          {activeTab === 'pendidikan' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
              {PROFILE_DATA.education.map((edu, index) => (
                <Card3D key={index} maxTilt={10} depth={20} glareOpacity={0.25}>
                  <div className="p-6 rounded-2xl bg-slate-950/80 border border-blue-500/30 shadow-3d-blue space-y-3 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-sky-400 px-3 py-0.5 rounded-md bg-blue-950/80 border border-blue-500/30 font-mono">
                          {edu.year}
                        </span>
                        <div className="p-2 rounded-xl bg-blue-600/20 border border-blue-500/30 text-sky-400">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                      </div>
                      <h4 className="text-base font-bold text-white mt-2 font-cinzel">{edu.degree}</h4>
                      <p className="text-sm text-slate-200 font-semibold">{edu.institution}</p>
                    </div>
                    <div className="text-xs text-slate-400 pt-3 border-t border-slate-800">
                      <span className="text-sky-300 font-medium">Fokus Kajian:</span> {edu.focus}
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
          )}

          {/* Tab Content: Penghargaan with 3D Cards */}
          {activeTab === 'penghargaan' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-in fade-in duration-200">
              {PROFILE_DATA.awards.map((award, index) => (
                <Card3D key={index} maxTilt={12} depth={25} glareOpacity={0.3}>
                  <div className="p-6 rounded-2xl bg-slate-950/80 border border-blue-500/40 shadow-3d-blue space-y-2.5 text-center h-full flex flex-col items-center justify-center">
                    <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-blue-600/30 to-sky-400/20 border border-blue-400/50 flex items-center justify-center text-sky-400 mb-1 shadow-3d-blue">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-sky-400 px-3 py-0.5 rounded-full bg-blue-950/90 border border-blue-500/30 font-mono">
                      Tahun {award.year}
                    </span>
                    <h4 className="text-sm font-bold text-white pt-1">{award.title}</h4>
                    <p className="text-xs text-slate-400 font-light">{award.issuer}</p>
                  </div>
                </Card3D>
              ))}
            </div>
          )}

        </motion.div>

      </div>
    </section>
  );
};

