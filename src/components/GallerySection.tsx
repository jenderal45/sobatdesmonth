import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Image as ImageIcon, 
  Video, 
  MapPin, 
  Calendar, 
  Users, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Share2, 
  Check,
  Instagram,
  ExternalLink
} from 'lucide-react';
import { GALLERY_DATA } from '../data/mockData';
import { GalleryItem } from '../types';
import { Card3D } from './Card3D';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = [
    'Semua', 
    'Kunjungan & Blusukan', 
    'Aksi Kemanusiaan', 
    'Sarasehan & Dialog', 
    'Pemberdayaan UMKM', 
    'Kegiatan Pemuda'
  ];

  const filteredGallery = useMemo(() => {
    if (selectedCategory === 'Semua') return GALLERY_DATA;
    return GALLERY_DATA.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const activeItem = activeLightboxIndex !== null ? filteredGallery[activeLightboxIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredGallery.length);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="galeri" className="py-20 relative border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-sky-300 text-xs font-bold uppercase tracking-wider shadow-3d-blue">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Dokumentasi Visual & Aksi Nyata</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Galeri Kegiatan <span className="blue-gradient-text">Bang Desmonth</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Momen kebersamaan, aksi sosial kemanusiaan, dan kehangatan interaksi langsung bersama warga dari berbagai pelosok daerah.
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-galeri-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-3d-blue border border-blue-400/50'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Masonry 3D Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
            >
              <Card3D maxTilt={10} depth={20} glareOpacity={0.25} className="h-full">
                <div
                  id={`gallery-item-${item.id}`}
                  onClick={() => setActiveLightboxIndex(index)}
                  className="group relative rounded-3xl overflow-hidden bg-slate-950 border border-blue-500/30 hover:border-blue-400/60 shadow-3d-blue cursor-pointer transition-all duration-300 h-full flex flex-col justify-end"
                >
                  {/* Image Frame */}
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                  {/* Top Meta Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className={`px-2.5 py-0.5 rounded-md backdrop-blur-md text-[10px] font-bold shadow-sm flex items-center gap-1 ${
                      item.externalUrl 
                        ? 'bg-gradient-to-r from-amber-500/90 via-rose-500/90 to-purple-600/90 text-white border border-amber-300/40' 
                        : 'bg-slate-950/85 text-sky-300 border border-blue-500/40'
                    }`}>
                      {item.externalUrl && <Instagram className="w-3 h-3 text-amber-200" />}
                      <span>{item.externalUrl ? 'Instagram Resmi' : item.category}</span>
                    </span>

                    <div className="w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur-md flex items-center justify-center text-white border border-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-md">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Bottom Caption Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1.5">
                    <div className="flex items-center gap-2 text-[10px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-sky-400" />
                        {item.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-sky-400" />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2 font-cinzel">
                      {item.title}
                    </h3>

                    {item.attendeesCount && (
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                        {item.externalUrl ? (
                          <span className="inline-flex items-center gap-1 text-amber-300 font-mono">
                            <Instagram className="w-3 h-3 text-rose-400" />
                            {item.attendeesCount}
                          </span>
                        ) : (
                          <>
                            <Users className="w-3 h-3" />
                            <span>{item.attendeesCount}</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>

        {/* Official Instagram Account Thumbnail Banner Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950/70 border-2 border-amber-400/40 shadow-3d-blue relative overflow-hidden"
        >
          {/* Ambient glow decoration */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Thumbnail & Account Identity */}
            <div className="flex items-center gap-4 text-center md:text-left">
              <a 
                href="https://www.instagram.com/sobatbangdesmonth?exln=MWgzdTcxa284dm45ag==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group cursor-pointer flex-shrink-0"
                title="Lihat Instagram Resmi Sobat Bang Desmonth"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[3px] bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 border-2 border-slate-900">
                    <img
                      src="/photos/logo_sobat_bang_desmonth.jpg"
                      alt="Thumbnail Instagram @sobatbangdesmonth"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white shadow-md border-2 border-slate-950">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
              </a>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="font-mono text-sm sm:text-base font-bold text-white tracking-wide">
                    @sobatbangdesmonth
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-[10px] font-bold uppercase tracking-wider">
                    Instagram Resmi
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white font-cinzel">
                  Dokumentasi & Aksi Nyata di Instagram
                </h4>
                <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                  Ikuti galeri interaktif, liputan live kegiatan blusukan pasar, reels perjuangan, serta video dokumentasi aksi kemanusiaan Bang Desmonth terkini secara real-time.
                </p>
              </div>
            </div>

            {/* Right: Action Button */}
            <a
              href="https://www.instagram.com/sobatbangdesmonth?exln=MWgzdTcxa284dm45ag=="
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-rose-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 text-white font-bold text-xs sm:text-sm flex items-center gap-2.5 shadow-lg shadow-rose-600/25 hover:shadow-rose-600/40 transition-all duration-300 hover:scale-105 flex-shrink-0 cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>Buka Instagram @sobatbangdesmonth</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && activeLightboxIndex !== null && (
        <div 
          id="modal-gallery-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Navigation Controls */}
          <button
            id="btn-lightbox-prev"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white border border-slate-700 hover:border-blue-500 transition-all z-10 cursor-pointer shadow-3d-blue"
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            id="btn-lightbox-next"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white border border-slate-700 hover:border-blue-500 transition-all z-10 cursor-pointer shadow-3d-blue"
            aria-label="Selanjutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Close Button */}
          <button
            id="btn-close-lightbox"
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900 text-white border border-slate-700 hover:bg-slate-800 transition-colors z-10 cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Container */}
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl border border-blue-500/40 overflow-hidden shadow-3d-elevated space-y-4 p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* High-res Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-950 flex items-center justify-center">
              <img
                src={activeItem.mediaUrl}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Lightbox Caption & Details */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                    {activeItem.category} • Foto {activeLightboxIndex + 1} dari {filteredGallery.length}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-0.5 font-cinzel">
                    {activeItem.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {activeItem.externalUrl && (
                    <a
                      href={activeItem.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 via-rose-600 to-amber-500 hover:opacity-95 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-rose-600/30 transition-transform hover:scale-105 cursor-pointer"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Buka di Instagram</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <button
                    onClick={handleShare}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700 shadow-sm"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'Tersalin' : 'Bagikan'}</span>
                  </button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {activeItem.caption}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1 text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  {activeItem.date}
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  {activeItem.location}
                </span>
                {activeItem.attendeesCount && (
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <Users className="w-3.5 h-3.5" />
                    {activeItem.attendeesCount}
                  </span>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

