import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  CheckCircle2, 
  RotateCcw, 
  Image as ImageIcon, 
  Tag, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  FileText, 
  Sparkles, 
  Search,
  Download,
  Upload,
  AlertCircle
} from 'lucide-react';
import { NewsItem } from '../types';

interface NewsCMSModalProps {
  isOpen: boolean;
  onClose: () => void;
  newsList: NewsItem[];
  onSaveNews: (news: NewsItem) => void;
  onDeleteNews: (id: string) => void;
  onResetNews: () => void;
  onPreviewNews: (news: NewsItem) => void;
}

const PRESET_IMAGES = [
  { label: 'Pasar Modern & UMKM', url: '/photos/whatsapp_2026-08-18_15.15.42.jpeg' },
  { label: 'Konsolidasi Partai Demokrat', url: '/photos/whatsapp_2026-08-18_15.45.00_2.jpeg' },
  { label: 'Harmoni HKBP Kebayoran Lama', url: '/photos/whatsapp_2026-08-18_15.21.32_1.jpeg' },
  { label: 'Bakti Kemanusiaan Kemensos', url: '/photos/whatsapp_2026-08-18_16.58.34.jpeg' },
  { label: 'Potret Resmi Bang Desmonth', url: '/photos/desmonth_hero_profile.jpg' },
  { label: 'Pemuda Pancasila & Ormas', url: '/photos/whatsapp_2026-08-18_15.21.32.jpeg' },
  { label: 'Silaturahmi Komunitas Marga', url: '/photos/whatsapp_2026-08-18_16.02.26.jpeg' },
  { label: 'Alumni PSKD 4 & Pemuda', url: '/photos/whatsapp_2026-08-18_16.57.46.jpeg' }
];

const DEFAULT_CATEGORIES = [
  'Pasar Modern & UMKM',
  'Siaran Pers',
  'Pemberdayaan UMKM',
  'Aksi Sosial',
  'Dialog Warga',
  'Kesehatan & Lansia',
  'Pemuda Pancasila & Ormas'
];

export const NewsCMSModal: React.FC<NewsCMSModalProps> = ({
  isOpen,
  onClose,
  newsList,
  onSaveNews,
  onDeleteNews,
  onResetNews,
  onPreviewNews
}) => {
  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');
  const [cmsSearch, setCmsSearch] = useState('');
  const [selectedFilterCategory, setSelectedFilterCategory] = useState('Semua');
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);

  // Form State
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState(DEFAULT_CATEGORIES[0]);
  const [formCustomCategory, setFormCustomCategory] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formReadTime, setFormReadTime] = useState('3 menit baca');
  const [formLocation, setFormLocation] = useState('Jakarta Selatan');
  const [formAuthor, setFormAuthor] = useState('Redaksi Sobat Desmonth');
  const [formSummary, setFormSummary] = useState('');
  const [formContentText, setFormContentText] = useState('');
  const [formImage, setFormImage] = useState(PRESET_IMAGES[0].url);
  const [formTags, setFormTags] = useState('');
  const [formStatus, setFormStatus] = useState<'Publik' | 'Draf'>('Publik');
  const [formFeatured, setFormFeatured] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleOpenCreateForm = () => {
    setEditingNews(null);
    setFormTitle('');
    setFormCategory(DEFAULT_CATEGORIES[0]);
    setFormCustomCategory('');
    
    // Auto populate today's date in Indonesian
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const dateStr = today.toLocaleDateString('id-ID', options);
    setFormDate(dateStr);

    setFormReadTime('3 menit baca');
    setFormLocation('Jakarta Selatan');
    setFormAuthor('Redaksi Sobat Desmonth');
    setFormSummary('');
    setFormContentText('');
    setFormImage(PRESET_IMAGES[0].url);
    setFormTags('Bang Desmonth, Jakarta Selatan, Sobat Desmonth');
    setFormStatus('Publik');
    setFormFeatured(false);
    setFormErrors({});
    setViewMode('form');
  };

  const handleOpenEditForm = (item: NewsItem) => {
    setEditingNews(item);
    setFormTitle(item.title);
    if (DEFAULT_CATEGORIES.includes(item.category)) {
      setFormCategory(item.category);
      setFormCustomCategory('');
    } else {
      setFormCategory('Lainnya');
      setFormCustomCategory(item.category);
    }
    setFormDate(item.date);
    setFormReadTime(item.readTime || '3 menit baca');
    setFormLocation(item.location || 'Jakarta Selatan');
    setFormAuthor(item.author || 'Redaksi Sobat Desmonth');
    setFormSummary(item.summary);
    setFormContentText(item.content ? item.content.join('\n\n') : '');
    setFormImage(item.image);
    setFormTags(item.tags ? item.tags.join(', ') : '');
    setFormStatus(item.status || 'Publik');
    setFormFeatured(Boolean(item.featured));
    setFormErrors({});
    setViewMode('form');
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!formTitle.trim()) errors.title = 'Judul berita wajib diisi';
    if (!formSummary.trim()) errors.summary = 'Ringkasan berita wajib diisi';
    if (!formContentText.trim()) errors.content = 'Konten berita lengkap wajib diisi';
    if (!formDate.trim()) errors.date = 'Tanggal wajib diisi';
    if (!formImage.trim()) errors.image = 'Foto utama berita wajib dipilih';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const finalCategory = formCategory === 'Lainnya' && formCustomCategory.trim() 
      ? formCustomCategory.trim() 
      : formCategory;

    // Split content by double newlines or single newlines
    const paragraphs = formContentText
      .split('\n')
      .map(p => p.trim())
      .filter(p => p.length > 0);

    const tagsArray = formTags
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const slug = formTitle
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    const newsDataToSave: NewsItem = {
      id: editingNews ? editingNews.id : `news-${Date.now()}`,
      title: formTitle.trim(),
      slug: slug || `berita-${Date.now()}`,
      category: finalCategory,
      date: formDate.trim(),
      readTime: formReadTime.trim() || '3 menit baca',
      location: formLocation.trim() || 'Jakarta Selatan',
      author: formAuthor.trim() || 'Redaksi Sobat Desmonth',
      summary: formSummary.trim(),
      content: paragraphs.length > 0 ? paragraphs : [formSummary.trim()],
      image: formImage.trim(),
      tags: tagsArray.length > 0 ? tagsArray : ['Bang Desmonth', 'Jakarta Selatan'],
      status: formStatus,
      featured: formFeatured
    };

    onSaveNews(newsDataToSave);
    showToast(editingNews ? 'Berita berhasil diperbarui!' : 'Berita baru berhasil diterbitkan!');
    setViewMode('list');
  };

  const handleDeleteItem = (id: string, title: string) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus berita: "${title}"?`)) {
      onDeleteNews(id);
      showToast('Berita berhasil dihapus.');
    }
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(newsList, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `berita-sobat-desmonth-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('Data berita berhasil diunduh (JSON).');
  };

  const filteredNewsInCms = newsList.filter(item => {
    const matchCat = selectedFilterCategory === 'Semua' || item.category === selectedFilterCategory;
    const matchSearch = item.title.toLowerCase().includes(cmsSearch.toLowerCase()) ||
      item.summary.toLowerCase().includes(cmsSearch.toLowerCase()) ||
      item.location.toLowerCase().includes(cmsSearch.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        className="w-full max-w-5xl bg-slate-900 border border-blue-500/40 rounded-3xl shadow-3d-elevated overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-blue-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/40">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white font-cinzel">
                  CMS Berita & Publikasi Bang Desmonth
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider">
                  Admin Active
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Kelola liputan media, rilis pers, dokumentasi kegiatan, dan publikasi langsung ke web
              </p>
            </div>
          </div>

          <button
            id="btn-close-news-cms"
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs inside CMS */}
        <div className="px-6 py-3 bg-slate-950/60 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'list'
                  ? 'bg-blue-600 text-white shadow-3d-blue border border-blue-400/40'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Daftar Berita ({newsList.length})</span>
            </button>

            <button
              onClick={handleOpenCreateForm}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'form' && !editingNews
                  ? 'bg-blue-600 text-white shadow-3d-blue border border-blue-400/40'
                  : 'bg-emerald-600/90 hover:bg-emerald-600 text-white shadow-md'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ Tulis Berita Baru</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportJSON}
              title="Unduh Cadangan JSON"
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export JSON</span>
            </button>

            <button
              onClick={() => {
                if (window.confirm('Kembalikan seluruh data berita ke data bawaan awal?')) {
                  onResetNews();
                  showToast('Data berita berhasil dikembalikan ke pengaturan awal.');
                }
              }}
              title="Reset ke Default"
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-red-950/60 border border-slate-700 hover:border-red-500/50 text-slate-400 hover:text-red-300 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Default</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 bg-slate-900/95 space-y-6">
          {viewMode === 'list' ? (
            <div className="space-y-4">
              {/* Search & Filter Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Cari judul berita, lokasi, ringkasan..."
                    value={cmsSearch}
                    onChange={(e) => setCmsSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-400 text-white text-xs placeholder:text-slate-500 outline-none"
                  />
                  {cmsSearch && (
                    <button 
                      onClick={() => setCmsSearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={selectedFilterCategory}
                    onChange={(e) => setSelectedFilterCategory(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white outline-none focus:border-blue-400"
                  >
                    <option value="Semua">Semua Kategori</option>
                    {DEFAULT_CATEGORIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Table / List of News */}
              {filteredNewsInCms.length === 0 ? (
                <div className="text-center py-12 rounded-2xl bg-slate-950/60 border border-slate-800 p-6 space-y-2">
                  <p className="text-slate-400 text-xs">Tidak ada berita yang sesuai dengan pencarian.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredNewsInCms.map((item, idx) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-slate-950/80 border border-blue-500/20 hover:border-blue-500/50 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group"
                    >
                      {/* Left: Thumbnail & Info */}
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-20 h-16 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <div className="space-y-1 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2 py-0.5 rounded-md bg-blue-950 border border-blue-500/30 text-sky-300 text-[10px] font-bold">
                              {item.category}
                            </span>
                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                              item.status === 'Draf'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            }`}>
                              {item.status || 'Publik'}
                            </span>
                            {item.featured && (
                              <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-bold">
                                Unggulan
                              </span>
                            )}
                            <span className="text-[11px] font-mono text-slate-400">
                              {item.date}
                            </span>
                          </div>

                          <h4 className="text-sm font-bold text-white font-cinzel line-clamp-1">
                            {item.title}
                          </h4>

                          <p className="text-xs text-slate-400 line-clamp-1 font-light">
                            {item.summary}
                          </p>
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center gap-2 self-end md:self-center">
                        <button
                          onClick={() => onPreviewNews(item)}
                          title="Lihat Pratinjau"
                          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 hover:text-white transition-colors cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleOpenEditForm(item)}
                          title="Edit Berita"
                          className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-3d-blue transition-colors cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>

                        <button
                          onClick={() => handleDeleteItem(item.id, item.title)}
                          title="Hapus Berita"
                          className="p-2 rounded-xl bg-slate-900 hover:bg-red-950/80 text-slate-400 hover:text-red-300 border border-slate-800 hover:border-red-500/40 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Form Mode */
            <form onSubmit={handleSaveForm} className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h4 className="text-base font-bold text-white font-cinzel">
                  {editingNews ? 'Edit Berita' : 'Tulis Berita Baru'}
                </h4>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Kembali ke Daftar Berita
                </button>
              </div>

              {/* Title */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Judul Berita <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Kunjungan Bang Desmonth di Pasar Modern Bintaro Dorong Revitalisasi Kios..."
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white outline-none ${
                    formErrors.title ? 'border-red-500' : 'border-slate-800 focus:border-blue-400'
                  }`}
                />
                {formErrors.title && <span className="text-xs text-red-400">{formErrors.title}</span>}
              </div>

              {/* Category, Date & Read Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Kategori Berita
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white outline-none focus:border-blue-400"
                  >
                    {DEFAULT_CATEGORIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                    <option value="Lainnya">+ Kategori Lainnya</option>
                  </select>
                  {formCategory === 'Lainnya' && (
                    <input
                      type="text"
                      placeholder="Ketik kategori kustom..."
                      value={formCustomCategory}
                      onChange={(e) => setFormCustomCategory(e.target.value)}
                      className="w-full mt-2 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white outline-none"
                    />
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Tanggal Publikasi <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: 28 Agustus 2026"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-xs text-white outline-none ${
                      formErrors.date ? 'border-red-500' : 'border-slate-800 focus:border-blue-400'
                    }`}
                  />
                  {formErrors.date && <span className="text-xs text-red-400">{formErrors.date}</span>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Estimasi Baca
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: 3 menit baca"
                    value={formReadTime}
                    onChange={(e) => setFormReadTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              {/* Location, Author, Status, Featured */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Lokasi
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Pasar Modern Bintaro"
                    value={formLocation}
                    onChange={(e) => setFormLocation(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white outline-none focus:border-blue-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Penulis / Redaksi
                  </label>
                  <input
                    type="text"
                    placeholder="Redaksi Sobat Desmonth"
                    value={formAuthor}
                    onChange={(e) => setFormAuthor(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white outline-none focus:border-blue-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Status Publikasi
                  </label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as 'Publik' | 'Draf')}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white outline-none focus:border-blue-400"
                  >
                    <option value="Publik">Publik (Tayang)</option>
                    <option value="Draf">Draf (Disimpan Internal)</option>
                  </select>
                </div>

                <div className="space-y-1.5 flex flex-col justify-end">
                  <label className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formFeatured}
                      onChange={(e) => setFormFeatured(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-600 bg-slate-900 border-slate-700"
                    />
                    <span className="text-xs font-bold text-sky-300">Tandai Berita Unggulan</span>
                  </label>
                </div>
              </div>

              {/* Preset Image Chooser */}
              <div className="space-y-2 p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block flex items-center justify-between">
                  <span>Pilih Foto Berita dari Koleksi Bang Desmonth</span>
                  <span className="text-sky-400 font-mono text-[11px]">Klik foto untuk memilih</span>
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  {PRESET_IMAGES.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setFormImage(img.url)}
                      className={`relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 transition-all group ${
                        formImage === img.url
                          ? 'border-blue-500 ring-2 ring-blue-500/40 shadow-lg'
                          : 'border-slate-800 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                      <span className="absolute bottom-1 left-1 right-1 text-[10px] text-white font-medium truncate block">
                        {img.label}
                      </span>
                      {formImage === img.url && (
                        <div className="absolute top-1 right-1 bg-blue-600 text-white rounded-full p-0.5">
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <span className="text-[11px] text-slate-400 block mb-1">Atau masukkan URL Foto kustom:</span>
                  <input
                    type="text"
                    value={formImage}
                    onChange={(e) => setFormImage(e.target.value)}
                    placeholder="/photos/... atau https://..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white outline-none focus:border-blue-400 font-mono"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Ringkasan Berita (Lead / Excerpt) <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Ringkasan 1-2 kalimat untuk preview kartu berita..."
                  value={formSummary}
                  onChange={(e) => setFormSummary(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-xs text-white outline-none resize-none ${
                    formErrors.summary ? 'border-red-500' : 'border-slate-800 focus:border-blue-400'
                  }`}
                />
                {formErrors.summary && <span className="text-xs text-red-400">{formErrors.summary}</span>}
              </div>

              {/* Full Content */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Konten Berita Lengkap (Pisahkan paragraf dengan baris baru) <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={6}
                  placeholder="Ketik isi berita lengkap di sini. Gunakan baris baru untuk memisahkan antar paragraf..."
                  value={formContentText}
                  onChange={(e) => setFormContentText(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-xs text-white outline-none ${
                    formErrors.content ? 'border-red-500' : 'border-slate-800 focus:border-blue-400'
                  }`}
                />
                {formErrors.content && <span className="text-xs text-red-400">{formErrors.content}</span>}
              </div>

              {/* Tags */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Tag Berita (Pisahkan dengan koma)
                </label>
                <input
                  type="text"
                  placeholder="Pasar Modern Bintaro, Bang Desmonth, UMKM, Jakarta Selatan"
                  value={formTags}
                  onChange={(e) => setFormTags(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white outline-none focus:border-blue-400"
                />
              </div>

              {/* Form Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Batal
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-3d-blue transition-colors cursor-pointer flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{editingNews ? 'Simpan Perubahan' : 'Terbitkan Berita'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* CMS Toast Feedback */}
        {toastMessage && (
          <div className="px-6 py-3 bg-emerald-600 text-white text-xs font-bold flex items-center justify-between animate-in fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{toastMessage}</span>
            </div>
            <button onClick={() => setToastMessage(null)} className="text-emerald-200 hover:text-white">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
