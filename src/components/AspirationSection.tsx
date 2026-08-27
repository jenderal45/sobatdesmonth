import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquareHeart, 
  Send, 
  Search, 
  CheckCircle2, 
  ThumbsUp, 
  MapPin, 
  ShieldCheck, 
  AlertCircle, 
  Sparkles, 
  FileCheck, 
  Lock, 
  RefreshCw,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { INITIAL_ASPIRATIONS } from '../data/mockData';
import { Aspiration } from '../types';
import { Card3D } from './Card3D';

export const AspirationSection: React.FC = () => {
  // Local state persisted in localStorage
  const [aspirations, setAspirations] = useState<Aspiration[]>(() => {
    try {
      const saved = localStorage.getItem('sobat_desmonth_aspirations');
      return saved ? JSON.parse(saved) : INITIAL_ASPIRATIONS;
    } catch {
      return INITIAL_ASPIRATIONS;
    }
  });

  // Form states
  const [name, setName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [contact, setContact] = useState('');
  const [category, setCategory] = useState<Aspiration['category']>('Ekonomi & UMKM');
  const [region, setRegion] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  // Search & Filter for Board
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedStatus, setSelectedStatus] = useState<string>('Semua');

  // Tracking lookup tool
  const [lookupCode, setLookupCode] = useState('');
  const [lookupResult, setLookupResult] = useState<Aspiration | null>(null);
  const [lookupError, setLookupError] = useState(false);

  // Upvoted IDs state
  const [upvotedIds, setUpvotedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sobat_desmonth_upvotes');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sobat_desmonth_aspirations', JSON.stringify(aspirations));
    } catch (e) {
      console.error(e);
    }
  }, [aspirations]);

  useEffect(() => {
    try {
      localStorage.setItem('sobat_desmonth_upvotes', JSON.stringify(upvotedIds));
    } catch (e) {
      console.error(e);
    }
  }, [upvotedIds]);

  const categories: Aspiration['category'][] = [
    'Ekonomi & UMKM',
    'Pendidikan & Beasiswa',
    'Kesehatan & Lansia',
    'Infrastruktur & Lingkungan',
    'Hukum & Layanan Publik',
    'Pemuda & Olahraga',
    'Lainnya'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !message.trim()) return;

    setSubmitting(true);

    // Generate unique tracking code
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const trackingCode = `ASP-2026-${randomNum}`;

    const newAspiration: Aspiration = {
      id: `asp-${Date.now()}`,
      trackingCode,
      name: isAnonymous ? 'Warga Peduli' : (name.trim() || 'Warga Masyarakat'),
      isAnonymous,
      emailOrPhone: contact.trim() || 'Data Terenkripsi',
      category,
      region: region.trim() || 'DKI Jakarta & Sekitarnya',
      title: title.trim(),
      message: message.trim(),
      createdAt: 'Baru saja',
      status: 'Diterima',
      likesCount: 1,
      responseNote: 'Aspirasi telah berhasil dicatat ke sistem dan sedang dijadwalkan untuk telaah awal tim analisis advokasi Desmonth.',
      priority: 'Sedang'
    };

    setTimeout(() => {
      setAspirations([newAspiration, ...aspirations]);
      setSubmittedCode(trackingCode);
      setSubmitting(false);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }

      // Reset form fields
      setName('');
      setContact('');
      setRegion('');
      setTitle('');
      setMessage('');
    }, 800);
  };

  const handleUpvote = (id: string) => {
    if (upvotedIds.includes(id)) {
      setUpvotedIds(upvotedIds.filter(item => item !== id));
      setAspirations(aspirations.map(asp => {
        if (asp.id === id) {
          return { ...asp, likesCount: Math.max(0, asp.likesCount - 1) };
        }
        return asp;
      }));
    } else {
      setUpvotedIds([...upvotedIds, id]);
      setAspirations(aspirations.map(asp => {
        if (asp.id === id) {
          return { ...asp, likesCount: asp.likesCount + 1 };
        }
        return asp;
      }));
    }
  };

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lookupCode.trim()) return;
    
    const found = aspirations.find(
      a => a.trackingCode.toLowerCase() === lookupCode.trim().toLowerCase()
    );

    if (found) {
      setLookupResult(found);
      setLookupError(false);
    } else {
      setLookupResult(null);
      setLookupError(true);
    }
  };

  const filteredAspirations = aspirations.filter(item => {
    const matchQuery = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.trackingCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.region.toLowerCase().includes(searchQuery.toLowerCase());

    const matchCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchStatus = selectedStatus === 'Semua' || item.status === selectedStatus;

    return matchQuery && matchCategory && matchStatus;
  });

  const getStatusBadge = (status: Aspiration['status']) => {
    switch (status) {
      case 'Diterima':
        return (
          <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-sky-400 border border-blue-500/20 text-[11px] font-bold">
            • Diterima Sistem
          </span>
        );
      case 'Ditelaah Tim Ahli':
        return (
          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[11px] font-bold">
            • Ditelaah Tim Ahli
          </span>
        );
      case 'Dalam Advokasi':
        return (
          <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[11px] font-bold">
            • Dalam Advokasi Kebijakan
          </span>
        );
      case 'Telah Tervalidasi':
        return (
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold">
            ✓ Telah Ditindaklanjuti
          </span>
        );
      default:
        return null;
    }
  };

  const copyTrackingCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="aspirasi" className="py-20 relative border-t border-slate-800 overflow-hidden">
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
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>Kanal Suara Rakyat & Partisipasi Publik</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Formulir Aspirasi & Aduan <span className="blue-gradient-text">Warga</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Setiap suara Anda adalah amanah. Sampaikan usulan pembangunan, keluhan fasilitas umum, maupun permohonan advokasi secara langsung dan transparan.
          </p>
        </motion.div>

        {/* Top Split: Interactive Submission Form + Tracking Lookup Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Submission Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-blue-500/35 p-6 sm:p-8 shadow-3d-elevated space-y-6"
          >
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 font-cinzel">
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>Kirimkan Aspirasi Anda</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 font-light">
                  Diterima langsung oleh Tim Kebijakan & Advokasi Sobat Desmonth.
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-[11px] font-semibold border border-emerald-500/20 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Privasi Terjaga</span>
              </div>
            </div>

            {/* Submission Success Banner */}
            {submittedCode && (
              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 space-y-2 animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Aspirasi Anda Berhasil Dikirim!</span>
                  </div>
                  <button
                    onClick={() => copyTrackingCode(submittedCode)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/30 cursor-pointer transition-colors"
                  >
                    {copiedCode ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? 'Tersalin' : 'Salin Kode'}</span>
                  </button>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Kode Pelacakan Anda: <strong className="text-sky-300 font-mono text-sm px-2 py-0.5 bg-slate-900 rounded-lg border border-blue-500/30">{submittedCode}</strong>. Simpan kode ini untuk memantau status tindak lanjut aduan Anda di papan transparansi.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Anonymous Toggle */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-sky-400" />
                  <div>
                    <span className="text-xs font-bold text-white block">Kirim Sebagai Anonim</span>
                    <span className="text-[11px] text-slate-400">Identitas nama Anda tidak akan ditampilkan di papan publik</span>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    id="checkbox-aspirasi-anonim"
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {/* Name & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Nama Lengkap {!isAnonymous && <span className="text-sky-400">*</span>}
                  </label>
                  <input
                    id="input-aspirasi-nama"
                    type="text"
                    disabled={isAnonymous}
                    value={isAnonymous ? 'Warga Peduli (Anonim)' : name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    No. WhatsApp / Email <span className="text-[10px] text-slate-400">(Opsional untuk update)</span>
                  </label>
                  <input
                    id="input-aspirasi-kontak"
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="0812-xxxx-xxxx / email@anda.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              {/* Category & Region */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Kategori Aspirasi <span className="text-sky-400">*</span>
                  </label>
                  <select
                    id="select-aspirasi-kategori"
                    value={category}
                    onChange={(e) => setCategory(e.target.value as Aspiration['category'])}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-400"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Wilayah / Daerah <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="input-aspirasi-wilayah"
                    type="text"
                    required
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    placeholder="Contoh: Kec. Matraman, Jakarta Timur"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Judul Aspirasi / Pokok Masalah <span className="text-sky-400">*</span>
                </label>
                <input
                  id="input-aspirasi-judul"
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Contoh: Permohonan Perbaikan Penerangan Jalan Umum di Gang Melati"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400"
                />
              </div>

              {/* Message Content */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Uraian Lengkap & Usulan Solusi <span className="text-sky-400">*</span>
                </label>
                <textarea
                  id="textarea-aspirasi-pesan"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ceritakan detail masalah yang dialami warga, lokasi spesifik, dampak yang dirasakan, serta solusi yang diharapkan..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400 resize-y"
                ></textarea>
              </div>

              <button
                id="btn-submit-aspirasi"
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-3d-blue cursor-pointer border border-blue-400/40"
              >
                {submitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Mengirimkan ke Sistem Advokasi...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Kirim Aspirasi Sekarang</span>
                  </>
                )}
              </button>

            </form>

          </motion.div>

          {/* Right Side: Tracking Tool & Transparency Workflow */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Realtime Tracking Box */}
            <Card3D maxTilt={8} depth={20} glareOpacity={0.2}>
              <div className="rounded-3xl bg-slate-900/90 border border-blue-500/35 p-6 shadow-3d-blue space-y-4">
                <div className="flex items-center gap-2 text-sky-400">
                  <Search className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white font-cinzel">Lacak Status Aspirasi Anda</h3>
                </div>
                
                <p className="text-xs text-slate-300 font-light">
                  Masukkan nomor kode pelacakan (misal: <code className="text-sky-300 font-mono">ASP-2026-8812</code>) untuk memeriksa riwayat disposisi tindak lanjut tim advokasi.
                </p>

                <form onSubmit={handleLookup} className="flex gap-2">
                  <input
                    type="text"
                    value={lookupCode}
                    onChange={(e) => setLookupCode(e.target.value)}
                    placeholder="Kode: ASP-2026-xxxx"
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400 uppercase font-mono"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer shadow-3d-blue"
                  >
                    Lacak
                  </button>
                </form>

                {/* Lookup Result Box */}
                {lookupResult && (
                  <div className="p-4 rounded-2xl bg-slate-950 border border-blue-500/40 space-y-2.5 animate-in fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-sky-300">{lookupResult.trackingCode}</span>
                      {getStatusBadge(lookupResult.status)}
                    </div>
                    <h4 className="text-xs font-bold text-white font-cinzel">{lookupResult.title}</h4>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                      <span className="font-bold text-sky-400 block uppercase text-[10px]">Catatan Disposisi:</span>
                      <p className="italic font-light">"{lookupResult.responseNote}"</p>
                    </div>
                  </div>
                )}

                {lookupError && (
                  <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Kode tidak ditemukan. Pastikan format benar.</span>
                  </div>
                )}
              </div>
            </Card3D>

            {/* Public Accountability Workflow Card */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950/40 border border-slate-800 p-6 space-y-4 shadow-3d-blue">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 font-cinzel">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Alur Transparansi Advokasi</span>
              </h4>

              <div className="space-y-3 text-xs text-slate-300 font-light">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>100% Tercatat:</strong> Setiap aduan mendapatkan nomor registrasi resmi yang tidak dapat dimanipulasi.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Advokasi Langsung:</strong> Masalah mendesak langsung dibawa ke meja rapat komisi dan dinas teknis.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Laporan Balik:</strong> Hasil advokasi dilaporkan secara terbuka melalui papan transparansi ini.</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Live Public Aspirations Board */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-slate-900/90 border border-blue-500/30 p-6 sm:p-8 space-y-6 shadow-3d-elevated"
        >
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 font-cinzel">
                <FileCheck className="w-5 h-5 text-sky-400" />
                <span>Papan Transparansi Suara Rakyat</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 font-light">
                Menampilkan {filteredAspirations.length} dari total {aspirations.length} aspirasi warga yang terhimpun.
              </p>
            </div>

            {/* Filter Group */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari aspirasi..."
                  className="pl-8 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="py-2 px-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-400"
              >
                <option value="Semua">Semua Kategori</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="py-2 px-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-400"
              >
                <option value="Semua">Semua Status</option>
                <option value="Diterima">Diterima</option>
                <option value="Ditelaah Tim Ahli">Ditelaah Tim Ahli</option>
                <option value="Dalam Advokasi">Dalam Advokasi</option>
                <option value="Telah Tervalidasi">Telah Tervalidasi</option>
              </select>
            </div>
          </div>

          {/* Aspirations Feed Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredAspirations.map((asp, idx) => {
              const isUpvoted = upvotedIds.includes(asp.id);
              return (
                <motion.div
                  key={asp.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: (idx % 2) * 0.1 }}
                >
                  <Card3D maxTilt={6} depth={15} glareOpacity={0.15} className="h-full">
                    <div
                      id={`card-aspirasi-${asp.id}`}
                      className="p-5 sm:p-6 rounded-3xl bg-slate-950 border border-blue-500/25 hover:border-blue-400/50 transition-all flex flex-col justify-between space-y-4 h-full shadow-3d-blue"
                    >
                      <div className="space-y-3">
                        {/* Header info */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] text-sky-400 font-bold bg-blue-950/80 px-2.5 py-0.5 rounded-md border border-blue-500/30">
                              {asp.trackingCode}
                            </span>
                            <span className="text-[11px] text-slate-400 font-mono">
                              {asp.createdAt}
                            </span>
                          </div>

                          {getStatusBadge(asp.status)}
                        </div>

                        <h4 className="text-sm sm:text-base font-bold text-white leading-snug font-cinzel">
                          {asp.title}
                        </h4>

                        <p className="text-xs text-slate-300 leading-relaxed font-light">
                          {asp.message}
                        </p>

                        {/* Response Note */}
                        {asp.responseNote && (
                          <div className="p-3 rounded-2xl bg-slate-900/90 border border-blue-500/20 space-y-1">
                            <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">
                              Tindak Lanjut Tim Sobat Desmonth:
                            </span>
                            <p className="text-xs text-slate-300 italic font-light">
                              "{asp.responseNote}"
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Footer Meta & Dukungan */}
                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                          <span className="font-medium text-slate-300">
                            {asp.isAnonymous ? 'Warga Peduli (Anonim)' : asp.name}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-sky-400" />
                            {asp.region}
                          </span>
                        </div>

                        {/* Upvote Button */}
                        <button
                          id={`btn-upvote-${asp.id}`}
                          onClick={() => handleUpvote(asp.id)}
                          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-sm ${
                            isUpvoted
                              ? 'bg-blue-600 text-white font-bold shadow-3d-blue'
                              : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700'
                          }`}
                          title="Dukung Aspirasi Ini"
                        >
                          <ThumbsUp className={`w-3.5 h-3.5 ${isUpvoted ? 'fill-current' : ''}`} />
                          <span>{asp.likesCount} Dukungan</span>
                        </button>
                      </div>
                    </div>
                  </Card3D>
                </motion.div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
};
