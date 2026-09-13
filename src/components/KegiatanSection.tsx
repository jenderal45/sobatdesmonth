import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Search, 
  Filter, 
  Tag, 
  Share2, 
  ExternalLink, 
  X, 
  CheckCircle2, 
  Sparkles, 
  Store, 
  Users, 
  HeartHandshake, 
  Flame, 
  ShieldCheck,
  Award,
  ChevronRight
} from 'lucide-react';
import { ACTIVITIES_DATA } from '../data/mockData';
import { ActivityItem } from '../types';
import { Card3D } from './Card3D';

export const KegiatanSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalActivity, setActiveModalActivity] = useState<ActivityItem | null>(null);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);

  const categories = [
    'Semua',
    'Pasar Modern & UMKM',
    'Pemuda Pancasila & Ormas',
    'Keagamaan & Komunitas',
    'Sosial & Kemanusiaan',
    'Relawan & Pemenangan',
    'Dialog Warga & Blusukan'
  ];

  const filteredActivities = ACTIVITIES_DATA.filter((item) => {
    const matchCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  const handleShare = (activity: ActivityItem) => {
    const text = `Kegiatan Bang Desmonth: ${activity.title} (${activity.location}) - Simak aksi nyata di sobatdesmonth.id`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Pasar Modern & UMKM':
        return <Store className="w-4 h-4 text-amber-400" />;
      case 'Pemuda Pancasila & Ormas':
        return <Flame className="w-4 h-4 text-orange-400" />;
      case 'Keagamaan & Komunitas':
        return <HeartHandshake className="w-4 h-4 text-emerald-400" />;
      case 'Sosial & Kemanusiaan':
        return <ShieldCheck className="w-4 h-4 text-sky-400" />;
      case 'Relawan & Pemenangan':
        return <Users className="w-4 h-4 text-blue-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="kegiatan" className="py-24 relative overflow-hidden bg-slate-950 border-t border-blue-900/20">
      {/* 3D Atmospheric Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 blur-[110px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-sky-300 text-xs font-semibold tracking-wide uppercase shadow-3d-blue mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Aksi Nyata & Jejak Lapangan</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-cinzel tracking-tight">
            Kegiatan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">Bang Desmonth</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Dokumentasi rekam jejak kepemimpinan, kepedulian sosial, dan advokasi berkelanjutan bersama pedagang pasar, simpul kepemudaan, komunitas keagamaan, serta warga Jakarta Selatan.
          </p>
        </div>

        {/* Featured Card: Ketum Paguyuban Pasar Modern Bintaro */}
        <div className="mb-12">
          <Card3D maxTilt={5} depth={15} glareOpacity={0.2}>
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950/70 to-slate-900 border border-blue-500/40 p-6 sm:p-8 shadow-3d-elevated grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-blue-500/30 aspect-video lg:aspect-[4/3]">
                <img 
                  src="/photos/whatsapp_2026-08-18_15.15.42.jpeg" 
                  alt="Kegiatan Pasar Modern Bintaro" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <Store className="w-3.5 h-3.5" />
                    Ketua Umum Paguyuban (2014 - Sekarang)
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-xs text-sky-200 flex items-center justify-between">
                  <span className="flex items-center gap-1 font-mono">
                    <MapPin className="w-3 h-3 text-sky-400" />
                    Pasar Modern Bintaro
                  </span>
                  <span className="font-semibold text-emerald-400">10+ Tahun Menjabat</span>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold">
                    Pasar Modern & UMKM
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Dedikasi Berkelanjutan
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-cinzel">
                  Kepemimpinan Paguyuban Pasar Modern Bintaro & Pemberdayaan UMKM Rakyat
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Sejak tahun 2014 hingga saat ini, Bang Desmonth mengemban amanah sebagai Ketua Umum Paguyuban Pasar Modern Bintaro. Beliau secara konsisten memperjuangkan zonasi lapak higienis, fasilitas kenyamanan pedagang, transparansi iuran, serta mengawal digitalisasi pembayaran dan kemudahan akses modal tanpa lilitan rentenir.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-blue-500/20">
                    <span className="text-xl font-extrabold text-sky-400 font-mono block">450+</span>
                    <span className="text-xs text-slate-400">Kios & Lapak Terbina</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-blue-500/20">
                    <span className="text-xl font-extrabold text-emerald-400 font-mono block">10+ Thn</span>
                    <span className="text-xs text-slate-400">Pengabdian Nyata</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-blue-500/20 col-span-2 sm:col-span-1">
                    <span className="text-xl font-extrabold text-amber-400 font-mono block">QRIS</span>
                    <span className="text-xs text-slate-400">Digitalisasi Pasar</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button 
                    id="btn-detail-pasar-modern"
                    onClick={() => setActiveModalActivity(ACTIVITIES_DATA[0])}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-3d-blue transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Pelajari Rekam Jejak Ini</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button 
                    id="btn-share-pasar-modern"
                    onClick={() => handleShare(ACTIVITIES_DATA[0])}
                    className="px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-700 text-slate-300 text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Bagikan</span>
                  </button>
                </div>
              </div>
            </div>
          </Card3D>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                id="input-search-kegiatan"
                type="text"
                placeholder="Cari kegiatan (misal: Bintaro, Pemuda Pancasila, HKBP, Demokrat)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900/90 border border-blue-500/20 focus:border-blue-400 text-white text-sm placeholder:text-slate-500 outline-none transition-all shadow-inner"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="font-bold text-sky-400">{filteredActivities.length}</span>
              <span>Kegiatan Ditemukan</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-kegiatan-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-3d-blue border border-blue-400/50'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat !== 'Semua' && getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        {filteredActivities.length === 0 ? (
          <div className="text-center py-16 rounded-3xl bg-slate-900/50 border border-slate-800 p-8">
            <p className="text-slate-400 text-base">Tidak ada kegiatan yang cocok dengan kriteria pencarian.</p>
            <button 
              onClick={() => { setSelectedCategory('Semua'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-colors"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map((act) => (
              <Card3D key={act.id} maxTilt={8} depth={15} glareOpacity={0.2}>
                <div className="rounded-2xl bg-slate-900/90 border border-blue-500/25 hover:border-blue-400/60 transition-all shadow-3d-blue overflow-hidden flex flex-col justify-between h-full group">
                  {/* Photo Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img 
                      src={act.image} 
                      alt={act.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-blue-500/30 text-sky-300 text-[11px] font-semibold flex items-center gap-1 shadow-md">
                        {getCategoryIcon(act.category)}
                        <span>{act.category}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300 font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-sky-400" />
                        <span className="truncate max-w-[150px]">{act.location}</span>
                      </span>
                      <span>{act.date}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      {act.roleTitle && (
                        <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block font-mono">
                          {act.roleTitle}
                        </span>
                      )}
                      
                      <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors font-cinzel line-clamp-2">
                        {act.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed font-light line-clamp-3">
                        {act.description}
                      </p>
                    </div>

                    {/* Impact Metric Box */}
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                      <span className="text-xs font-bold text-emerald-400 font-mono block">
                        {act.impactMetric}
                      </span>
                      <span className="text-[11px] text-slate-400 line-clamp-1 block">
                        {act.impactLabel}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                      <button
                        id={`btn-detail-act-${act.id}`}
                        onClick={() => setActiveModalActivity(act)}
                        className="flex-1 py-2 px-3 rounded-xl bg-blue-600/90 hover:bg-blue-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md"
                      >
                        <span>Dokumentasi Lengkap</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        id={`btn-share-act-${act.id}`}
                        onClick={() => handleShare(act)}
                        title="Bagikan Kegiatan"
                        className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        )}
      </div>

      {/* Share Toast */}
      {copiedShare && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-2xl flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>Teks kegiatan berhasil disalin ke clipboard!</span>
        </div>
      )}

      {/* Modal Detail Kegiatan */}
      <AnimatePresence>
        {activeModalActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl bg-slate-900 border border-blue-500/40 rounded-3xl overflow-hidden shadow-3d-elevated max-h-[90vh] flex flex-col"
            >
              {/* Modal Header Image */}
              <div className="relative aspect-video w-full bg-slate-950 flex-shrink-0">
                <img 
                  src={activeModalActivity.image} 
                  alt={activeModalActivity.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  id="btn-close-modal-kegiatan"
                  onClick={() => setActiveModalActivity(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-white hover:bg-slate-900 border border-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="px-3 py-1 rounded-full bg-blue-600/90 text-white font-bold backdrop-blur-sm">
                    {activeModalActivity.category}
                  </span>
                  <span className="bg-slate-950/80 px-2.5 py-1 rounded-md font-mono text-sky-300">
                    {activeModalActivity.date}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-4">
                {activeModalActivity.roleTitle && (
                  <div className="inline-block px-3 py-1 rounded-lg bg-blue-950/90 border border-blue-500/40 text-sky-400 text-xs font-bold font-mono">
                    Peran: {activeModalActivity.roleTitle}
                  </div>
                )}

                <h3 className="text-xl sm:text-2xl font-bold text-white font-cinzel">
                  {activeModalActivity.title}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{activeModalActivity.location}</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-blue-500/20 space-y-1">
                  <span className="text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider">
                    Capaian & Dampak Nyata:
                  </span>
                  <p className="text-sm font-bold text-white">
                    {activeModalActivity.impactMetric}
                  </p>
                  <p className="text-xs text-slate-400">
                    {activeModalActivity.impactLabel}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                    Deskripsi & Uraian Kegiatan:
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {activeModalActivity.description}
                  </p>
                </div>

                {activeModalActivity.tags && activeModalActivity.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {activeModalActivity.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleShare(activeModalActivity)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Bagikan Kegiatan Ini</span>
                </button>
                <button
                  onClick={() => setActiveModalActivity(null)}
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-3d-blue transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
