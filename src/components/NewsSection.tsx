import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  MapPin, 
  Search, 
  ArrowRight, 
  Share2, 
  X, 
  Bookmark, 
  Check, 
  Tag, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { NEWS_DATA } from '../data/mockData';
import { NewsItem } from '../types';
import { Card3D } from './Card3D';

export const NewsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeNewsModal, setActiveNewsModal] = useState<NewsItem | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [savedNewsIds, setSavedNewsIds] = useState<string[]>([]);

  const categories = ['Semua', 'Siaran Pers', 'Pemberdayaan UMKM', 'Aksi Sosial', 'Dialog Warga', 'Kesehatan & Lansia'];

  const filteredNews = useMemo(() => {
    return NEWS_DATA.filter((item) => {
      const matchCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
      const matchSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (savedNewsIds.includes(id)) {
      setSavedNewsIds(savedNewsIds.filter(i => i !== id));
    } else {
      setSavedNewsIds([...savedNewsIds, id]);
    }
  };

  const handleShare = (platform: 'whatsapp' | 'twitter' | 'copy', news: NewsItem) => {
    const url = window.location.href;
    const text = `Baca Berita Sobat Desmonth: "${news.title}"`;
    
    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + '\n' + url)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else {
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <section id="berita" className="py-20 relative border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-sky-300 text-xs font-bold uppercase tracking-wider shadow-3d-blue">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Kabar & Liputan Aksi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Berita & Publikasi Kegiatan <span className="blue-gradient-text">Bang Desmonth</span>
            </h2>
            <p className="text-sm text-slate-300">
              Dokumentasi transparansi program kerja, peliputan aksi sosial, dan dialog terkini bersama warga.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="input-search-berita"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari berita / topik kegiatan..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-blue-500/30 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400 transition-colors shadow-inner"
            />
          </div>
        </motion.div>

        {/* Category Pills with Fade Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-berita-${cat.replace(/\s+/g, '-').toLowerCase()}`}
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

        {/* News Grid */}
        {filteredNews.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800 space-y-3">
            <Newspaper className="w-12 h-12 text-slate-600 mx-auto" />
            <p className="text-sm text-slate-300 font-semibold">Tidak ditemukan berita untuk kata kunci tersebut.</p>
            <button
              onClick={() => { setSelectedCategory('Semua'); setSearchQuery(''); }}
              className="text-xs text-sky-400 hover:underline font-bold"
            >
              Reset Filter & Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news, idx) => {
              const isSaved = savedNewsIds.includes(news.id);
              return (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: (idx % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Card3D maxTilt={9} depth={20} glareOpacity={0.25} className="h-full">
                    <div
                      id={`card-news-${news.id}`}
                      onClick={() => setActiveNewsModal(news)}
                      className="rounded-3xl bg-slate-900/90 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer shadow-3d-blue h-full"
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                        <img
                          src={news.image}
                          alt={news.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-lg border border-blue-500/40 text-[10px] font-bold text-sky-300 uppercase tracking-wider shadow-sm">
                          {news.category}
                        </div>

                        <button
                          onClick={(e) => toggleBookmark(news.id, e)}
                          className={`absolute top-3 right-3 p-2 rounded-xl backdrop-blur-md transition-colors ${
                            isSaved 
                              ? 'bg-blue-600 text-white shadow-md' 
                              : 'bg-slate-950/70 text-slate-300 hover:text-white'
                          }`}
                          title={isSaved ? 'Hapus dari Tersimpan' : 'Simpan Berita'}
                        >
                          <Bookmark className="w-3.5 h-3.5 fill-current" />
                        </button>
                      </div>

                      {/* Body Content */}
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-3 text-[11px] text-slate-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-sky-400" />
                              {news.date}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-sky-400" />
                              {news.location}
                            </span>
                          </div>

                          <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2 leading-snug font-cinzel">
                            {news.title}
                          </h3>

                          <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-light">
                            {news.summary}
                          </p>
                        </div>

                        {/* Bottom Meta & Read Action */}
                        <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                          <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                            <Clock className="w-3.5 h-3.5" />
                            {news.readTime}
                          </span>

                          <span className="text-xs font-bold text-sky-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            <span>Baca Selengkapnya</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card3D>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>

      {/* Detailed News Modal Reader */}
      {activeNewsModal && (
        <div 
          id="modal-news-reader"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setActiveNewsModal(null)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-blue-500/40 rounded-3xl overflow-y-auto shadow-3d-elevated p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Actions */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-blue-600/25 border border-blue-500/40 text-sky-300 text-xs font-bold uppercase">
                  {activeNewsModal.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  {activeNewsModal.readTime}
                </span>
              </div>

              <button
                id="btn-close-news-modal"
                onClick={() => setActiveNewsModal(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title & Metadata */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {activeNewsModal.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1 text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  {activeNewsModal.date}
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  {activeNewsModal.location}
                </span>
                <span className="text-slate-400">Oleh: <strong className="text-white">{activeNewsModal.author}</strong></span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden aspect-[16/9] bg-slate-950 border border-slate-800">
              <img
                src={activeNewsModal.image}
                alt={activeNewsModal.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* News Body Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              {activeNewsModal.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800">
              <Tag className="w-3.5 h-3.5 text-sky-400" />
              {activeNewsModal.tags.map((tag, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-slate-950 text-[11px] text-slate-300 border border-slate-800 font-medium">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Social Share Bar */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Share2 className="w-4 h-4 text-sky-400" />
                Bagikan Berita Ini:
              </span>

              <div className="flex items-center gap-2">
                <button
                  id="btn-share-whatsapp"
                  onClick={() => handleShare('whatsapp', activeNewsModal)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 text-xs font-semibold flex items-center gap-1 border border-emerald-500/30 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>

                <button
                  id="btn-share-twitter"
                  onClick={() => handleShare('twitter', activeNewsModal)}
                  className="px-3 py-1.5 rounded-lg bg-sky-600/20 hover:bg-sky-600/30 text-sky-400 text-xs font-semibold flex items-center gap-1 border border-sky-500/30 transition-colors cursor-pointer"
                >
                  <span>Twitter / X</span>
                </button>

                <button
                  id="btn-share-copy"
                  onClick={() => handleShare('copy', activeNewsModal)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <ExternalLink className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Tersalin!' : 'Salin Tautan'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
