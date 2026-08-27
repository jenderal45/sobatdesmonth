import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Copy, 
  Check, 
  Instagram, 
  Facebook, 
  MessageSquare, 
  Video, 
  Image as ImageIcon, 
  Sparkles, 
  CheckCircle2, 
  Search
} from 'lucide-react';
import { CONTENT_PLAN_30_DAYS } from '../data/mockData';
import { ContentPlanItem } from '../types';
import { Card3D } from './Card3D';

export const ContentPlanSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<string>('Semua');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedDay, setCopiedDay] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<ContentPlanItem | null>(null);

  const pillars = [
    'Semua',
    'Profil & Latar Belakang',
    'Politik & Partai Demokrat',
    'Kegiatan Sosial & Kemasyarakatan',
    'Komunitas Keagamaan (HKBP)',
    'Blusukan & Aspirasi Warga Jaksel',
    'Ajakan/CTA & Interaksi Warga'
  ];

  const platforms = [
    'Semua',
    'Instagram Feed',
    'Instagram Story',
    'TikTok',
    'Facebook',
    'WhatsApp Broadcast'
  ];

  const filteredItems = CONTENT_PLAN_30_DAYS.filter(item => {
    const matchPillar = selectedPillar === 'Semua' || item.pillar === selectedPillar;
    const matchPlatform = selectedPlatform === 'Semua' || item.platform.toLowerCase().includes(selectedPlatform.toLowerCase());
    const matchSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.pillar.toLowerCase().includes(searchQuery.toLowerCase());
    return matchPillar && matchPlatform && matchSearch;
  });

  const handleCopyCaption = (item: ContentPlanItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const textToCopy = `${item.title}\n\n${item.caption}\n\n👉 ${item.cta}\n\n#BangDesmonth #SobatDesmonth #DemokratJakartaSelatan #AksiNyata #JakartaSelatanMaju`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedDay(item.dayNumber);
    setTimeout(() => setCopiedDay(null), 2000);
  };

  const getPlatformBadge = (platform: string) => {
    if (platform.includes('Instagram Feed')) {
      return { label: 'IG Feed', bg: 'bg-pink-500/10 text-pink-400 border-pink-500/30', icon: Instagram };
    }
    if (platform.includes('Instagram Story')) {
      return { label: 'IG Story', bg: 'bg-purple-500/10 text-purple-400 border-purple-500/30', icon: Instagram };
    }
    if (platform.includes('TikTok')) {
      return { label: 'TikTok', bg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30', icon: Video };
    }
    if (platform.includes('Facebook')) {
      return { label: 'Facebook', bg: 'bg-blue-500/10 text-blue-400 border-blue-500/30', icon: Facebook };
    }
    return { label: 'WhatsApp', bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', icon: MessageSquare };
  };

  return (
    <section id="content-plan" className="py-24 relative border-t border-slate-800/80 overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-sky-300 text-xs font-semibold shadow-3d-blue">
            <Calendar className="w-3.5 h-3.5" />
            <span>Peta Jalan Kampanye & Kalender Konten 30 Hari</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-cinzel">
            Agenda Publikasi <span className="blue-gradient-text">Bang Desmonth</span>
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed font-light">
            Transparansi narasi, jadwal publikasi media, dan dokumentasi kegiatan harian Bang Desmonth bersama Partai Demokrat, Pemuda Pancasila, jemaat HKBP, pedagang UMKM, dan warga Jakarta Selatan.
          </p>
        </motion.div>

        {/* Filters & Search Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4 p-6 rounded-3xl bg-slate-900/90 border border-blue-500/30 shadow-3d-elevated"
        >
          
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari tema konten (contoh: HKBP, UMKM, Demokrat, Blusukan, Kemensos)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400"
            />
          </div>

          {/* Filter Pillars */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Pilar Konten:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {pillars.map((pillar) => (
                <button
                  key={pillar}
                  onClick={() => setSelectedPillar(pillar)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    selectedPillar === pillar
                      ? 'bg-blue-600 text-white font-bold shadow-3d-blue border border-blue-400/40'
                      : 'bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {pillar}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Platform */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Platform:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {platforms.map((plat) => (
                <button
                  key={plat}
                  onClick={() => setSelectedPlatform(plat)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer ${
                    selectedPlatform === plat
                      ? 'bg-blue-600 text-white font-bold shadow-sm shadow-blue-600/30'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {plat}
                </button>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Content Plan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const badge = getPlatformBadge(item.platform);
            const BadgeIcon = badge.icon;

            return (
              <motion.div
                key={item.dayNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
              >
                <Card3D maxTilt={7} depth={15} glareOpacity={0.15} className="h-full">
                  <div
                    onClick={() => setSelectedItem(item)}
                    className="group relative rounded-3xl bg-slate-900/90 border border-blue-500/25 hover:border-blue-400/50 p-6 shadow-3d-blue transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden h-full"
                  >
                    {/* Top Badge & Day Info */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-lg bg-blue-950/80 border border-blue-500/40 text-sky-400 text-[11px] font-bold font-mono">
                            HARI #{item.dayNumber}
                          </span>
                          <span className="text-xs font-semibold text-slate-400">
                            {item.dayName}, {item.date}
                          </span>
                        </div>

                        <div className={`px-2 py-0.5 rounded-md text-[10px] font-bold border flex items-center gap-1 ${badge.bg}`}>
                          <BadgeIcon className="w-3 h-3" />
                          <span>{badge.label}</span>
                        </div>
                      </div>

                      {/* Pillar Category */}
                      <span className="text-[11px] font-semibold text-sky-400 block">
                        {item.pillar}
                      </span>

                      {/* Title */}
                      <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2 font-cinzel">
                        {item.title}
                      </h3>

                      {/* Caption snippet */}
                      <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-light">
                        {item.caption}
                      </p>

                      {/* Photo Preview if available */}
                      {item.localImages && item.localImages.length > 0 && (
                        <div className="pt-2">
                          <div className="h-36 w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 relative">
                            <img 
                              src={item.localImages[0]} 
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                            <div className="absolute bottom-2 left-2 px-2 py-1 rounded-lg bg-slate-950/80 text-[10px] text-slate-200 border border-slate-800 flex items-center gap-1">
                              <ImageIcon className="w-3 h-3 text-sky-400" />
                              <span>Dokumentasi Google Drive</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* CTA Tag */}
                      <div className="p-2.5 rounded-2xl bg-slate-950/90 border border-slate-800/80 text-[11px] text-sky-200/90 flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                        <span><strong>CTA:</strong> {item.cta}</span>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{item.status}</span>
                      </span>

                      <button
                        onClick={(e) => handleCopyCaption(item, e)}
                        className="p-1.5 rounded-xl bg-slate-950 hover:bg-blue-600 hover:text-white text-slate-300 transition-colors flex items-center gap-1.5 text-[11px] font-medium cursor-pointer border border-slate-800"
                        title="Salin Draft Teks Konten"
                      >
                        {copiedDay === item.dayNumber ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Tersalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Salin Teks</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-3 shadow-3d-blue">
            <p className="text-sm text-slate-400 font-light">Tidak ada konten yang sesuai dengan filter atau kata kunci pencarian Anda.</p>
            <button
              onClick={() => { setSelectedPillar('Semua'); setSelectedPlatform('Semua'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs cursor-pointer shadow-3d-blue"
            >
              Reset Filter
            </button>
          </div>
        )}

      </div>

      {/* Modal Detail & Full Caption */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-slate-900 border border-blue-500/40 rounded-3xl overflow-hidden shadow-3d-elevated p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-blue-600 text-white font-bold font-mono text-xs shadow-3d-blue">
                  HARI #{selectedItem.dayNumber}
                </span>
                <span className="text-xs font-semibold text-slate-300">
                  {selectedItem.dayName}, {selectedItem.date}
                </span>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-bold cursor-pointer"
              >
                Tutup
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                  {selectedItem.pillar} • {selectedItem.platform}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 font-cinzel">
                  {selectedItem.title}
                </h3>
              </div>

              {/* Photo Preview Gallery */}
              {selectedItem.localImages && selectedItem.localImages.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-400">Aset Dokumentasi Lapangan:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedItem.localImages.map((img, idx) => (
                      <div key={idx} className="rounded-2xl overflow-hidden border border-slate-800 h-48 bg-slate-950">
                        <img 
                          src={img} 
                          alt={`${selectedItem.title} ${idx+1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Caption */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-400">Draft Caption Lengkap:</span>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line font-mono">
                  {selectedItem.caption}
                  {"\n\n"}
                  👉 {selectedItem.cta}
                  {"\n\n"}
                  #BangDesmonth #SobatDesmonth #PartaiDemokrat #DPRDDKIJakarta #JakartaSelatan #AksiNyata
                </div>
              </div>

              {/* CTA Details */}
              <div className="p-3.5 rounded-2xl bg-blue-950/70 border border-blue-500/30 text-xs text-sky-300 flex items-center justify-between">
                <div>
                  <strong>Target Tindakan (Call to Action):</strong>
                  <p>{selectedItem.cta}</p>
                </div>
                <button
                  onClick={(e) => handleCopyCaption(selectedItem, e)}
                  className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center gap-1.5 flex-shrink-0 cursor-pointer shadow-3d-blue"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Caption</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
