import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  CalendarDays, 
  Clock, 
  MapPin, 
  UserCheck, 
  Users, 
  Bell, 
  CalendarPlus, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { AGENDA_DATA } from '../data/mockData';
import { AgendaItem } from '../types';
import { Card3D } from './Card3D';

export const AgendaSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Semua');
  const [activeModalAgenda, setActiveModalAgenda] = useState<AgendaItem | null>(null);
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeePhone, setAttendeePhone] = useState('');
  const [regSuccess, setRegSuccess] = useState(false);

  // Countdown timer for next nearest event (e.g. 30 Agustus 2026)
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 42,
    seconds: 18
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const categories = ['Semua', 'Dialog Warga', 'Bakti Sosial', 'Pelatihan UMKM', 'FGD Kebijakan'];

  const filteredAgendas = AGENDA_DATA.filter(item => {
    if (selectedFilter === 'Semua') return true;
    return item.category === selectedFilter;
  });

  const handleRegisterAttendance = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeModalAgenda) return;
    setRegisteredEvents([...registeredEvents, activeModalAgenda.id]);
    setRegSuccess(true);
    setTimeout(() => {
      setRegSuccess(false);
      setAttendeeName('');
      setAttendeePhone('');
    }, 3000);
  };

  const handleAddToCalendar = (agenda: AgendaItem) => {
    const title = encodeURIComponent(`Sobat Desmonth: ${agenda.title}`);
    const details = encodeURIComponent(`${agenda.description}\nLokasi: ${agenda.address}\nPembicara: ${agenda.speaker}`);
    const location = encodeURIComponent(agenda.address);
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="agenda" className="py-20 relative border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-sky-300 text-xs font-bold uppercase tracking-wider shadow-3d-blue">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>Jadwal & Agenda Aksi Nyata</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Agenda Kegiatan <span className="blue-gradient-text">Mendatang</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Temukan jadwal dialog warga, bakti sosial kemanusiaan, dan pelatihan pemberdayaan terdekat. Hadir dan suarakan aspirasi Anda langsung!
          </p>
        </motion.div>

        {/* Live Countdown to Next Agenda Highlight with 3D Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <Card3D maxTilt={6} depth={20} glareOpacity={0.25}>
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950/50 to-slate-900 border border-blue-500/40 relative overflow-hidden shadow-3d-elevated">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-blue-600 text-white text-[11px] font-extrabold uppercase shadow-md shadow-blue-600/30">
                    <Bell className="w-3 h-3 animate-bounce" />
                    <span>Agenda Utama Terdekat</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug font-cinzel">
                    Rembug Warga & Urun Rembuk Kebijakan Pendidikan Inklusif
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light">
                    Balai Warga Rawamangun, Jakarta Timur • 30 Agustus 2026, 19.30 WIB
                  </p>
                </div>

                {/* Countdown Numbers Grid */}
                <div className="lg:col-span-5 flex items-center justify-center lg:justify-end gap-3">
                  {[
                    { label: 'Hari', val: timeLeft.days },
                    { label: 'Jam', val: timeLeft.hours },
                    { label: 'Menit', val: timeLeft.minutes },
                    { label: 'Detik', val: timeLeft.seconds }
                  ].map((slot, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-950 border border-blue-500/40 flex items-center justify-center shadow-3d-blue">
                        <span className="text-2xl sm:text-3xl font-extrabold blue-gradient-text font-cinzel">
                          {String(slot.val).padStart(2, '0')}
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">
                        {slot.label}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </Card3D>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-agenda-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-blue-600 text-white shadow-3d-blue border border-blue-400/50'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Agenda Cards List */}
        <div className="space-y-4">
          {filteredAgendas.map((item, idx) => {
            const isRegistered = registeredEvents.includes(item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <div
                  id={`agenda-card-${item.id}`}
                  className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-blue-500/25 hover:border-blue-400/60 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-3d-blue group"
                >
                  {/* Left Date Badge & Details */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    {/* Date Block */}
                    <div className="w-full sm:w-28 sm:h-28 rounded-2xl bg-slate-950 border border-blue-500/40 flex sm:flex-col items-center justify-center gap-2 sm:gap-0 p-3 sm:p-0 flex-shrink-0 text-center shadow-inner">
                      <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                        {item.date.split(' ')[1]}
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-white font-cinzel">
                        {item.date.split(' ')[0]}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {item.date.split(' ')[2]}
                      </span>
                    </div>

                    {/* Info Content */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-lg bg-blue-950/80 text-sky-300 text-[11px] font-bold border border-blue-500/30">
                          {item.category}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          {item.status}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors font-cinzel">
                        {item.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
                        <span className="flex items-center gap-1 font-mono">
                          <Clock className="w-3.5 h-3.5 text-sky-400" />
                          {item.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-sky-400" />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <Users className="w-3.5 h-3.5" />
                          {item.targetAudience}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-800">
                    <button
                      id={`btn-calendar-${item.id}`}
                      onClick={() => handleAddToCalendar(item)}
                      className="p-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer shadow-sm"
                      title="Simpan ke Google Calendar"
                    >
                      <CalendarPlus className="w-4 h-4 text-sky-400" />
                    </button>

                    <button
                      id={`btn-detail-agenda-${item.id}`}
                      onClick={() => setActiveModalAgenda(item)}
                      className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-3d-blue transition-all cursor-pointer flex items-center gap-2 border border-blue-400/40"
                    >
                      {isRegistered ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>Terdaftar Hadir</span>
                        </>
                      ) : (
                        <>
                          <UserCheck className="w-4 h-4" />
                          <span>Detail & Daftar Hadir</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Agenda Detail & Registration Modal */}
      {activeModalAgenda && (
        <div 
          id="modal-agenda-detail"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setActiveModalAgenda(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-slate-900 border border-blue-500/40 rounded-3xl overflow-y-auto max-h-[90vh] shadow-3d-elevated p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-blue-600/25 border border-blue-500/40 text-sky-300 text-xs font-bold uppercase">
                  {activeModalAgenda.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  {activeModalAgenda.time}
                </span>
              </div>

              <button
                id="btn-close-agenda-modal"
                onClick={() => setActiveModalAgenda(null)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white leading-snug font-cinzel">
                {activeModalAgenda.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {activeModalAgenda.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <span className="text-[11px] font-semibold text-slate-400 block">Lokasi / Tempat Acara</span>
                  <div className="text-xs font-bold text-white flex items-start gap-1.5">
                    <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                    <span>{activeModalAgenda.address}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <span className="text-[11px] font-semibold text-slate-400 block">Narasumber & Pembicara</span>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>{activeModalAgenda.speaker}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Attendance Form */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-blue-500/30 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Formulir Konfirmasi Kehadiran</span>
              </h4>

              {regSuccess ? (
                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-center space-y-1.5">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h5 className="text-sm font-bold text-white">Konfirmasi Kehadiran Berhasil!</h5>
                  <p className="text-xs text-slate-300">Pengingat jadwal akan dikirimkan melalui WhatsApp Anda.</p>
                </div>
              ) : (
                <form onSubmit={handleRegisterAttendance} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-slate-300 block mb-1 font-medium">Nama Lengkap</label>
                      <input
                        type="text"
                        required
                        value={attendeeName}
                        onChange={(e) => setAttendeeName(e.target.value)}
                        placeholder="Contoh: Hendra Wijaya"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-300 block mb-1 font-medium">Nomor WhatsApp</label>
                      <input
                        type="tel"
                        required
                        value={attendeePhone}
                        onChange={(e) => setAttendeePhone(e.target.value)}
                        placeholder="0812-xxxx-xxxx"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer shadow-3d-blue"
                  >
                    Kirim Konfirmasi Hadir
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

