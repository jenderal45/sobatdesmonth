import React, { useState } from 'react';
import { 
  Users, 
  X, 
  Sparkles, 
  CheckCircle2, 
  Download, 
  ShieldCheck, 
  Award, 
  QrCode,
  HeartHandshake
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { VolunteerPass } from '../types';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [focusDivision, setFocusDivision] = useState('Pendampingan UMKM & Ekonomi');
  const [createdPass, setCreatedPass] = useState<VolunteerPass | null>(null);

  if (!isOpen) return null;

  const divisions = [
    'Pendampingan UMKM & Ekonomi',
    'Advokasi Kebijakan & Aspirasi Warga',
    'Tim Medis & Aksi Kemanusiaan',
    'Media Kreatif, Konten & Humas',
    'Relawan Lapangan & Tanggap Bencana',
    'Pendidikan & Beasiswa Muda'
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const randomMemberId = Math.floor(10000 + Math.random() * 90000);
    const pass: VolunteerPass = {
      id: `vol-${Date.now()}`,
      name: name.trim(),
      phone: phone.trim(),
      city: city.trim() || 'DKI Jakarta',
      focusDivision,
      memberNumber: `SDM-2026-${randomMemberId}`,
      joinedDate: 'Agustus 2026'
    };

    setCreatedPass(pass);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      id="modal-volunteer-root"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-blue-500/40 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-sky-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Gabung Relawan <span className="blue-gradient-text">Sobat Desmonth</span>
              </h3>
              <p className="text-xs text-slate-400">Menjadi bagian dari barisan penggerak perubahan nyata</p>
            </div>
          </div>

          <button
            id="btn-close-volunteer-modal"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!createdPass ? (
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
              <HeartHandshake className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
              <span>
                Relawan Sobat Desmonth bergerak secara sukarela, transparan, dan menjunjung tinggi nilai integritas tanpa membedakan latar belakang.
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Nama Lengkap Anda <span className="text-sky-400">*</span>
              </label>
              <input
                id="input-volunteer-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Muhammad Farhan"
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Nomor WhatsApp Aktif <span className="text-sky-400">*</span>
                </label>
                <input
                  id="input-volunteer-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="08123456xxxx"
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Kota / Kabupaten Domisili
                </label>
                <input
                  id="input-volunteer-city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Contoh: Jakarta Selatan"
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Peminatan Divisi Pengabdian
              </label>
              <select
                id="select-volunteer-division"
                value={focusDivision}
                onChange={(e) => setFocusDivision(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                {divisions.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <button
              id="btn-submit-volunteer"
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Daftar & Terbitkan Kartu Relawan Digital</span>
            </button>
          </form>
        ) : (
          /* Generated Digital Membership Card */
          <div className="space-y-5 animate-in zoom-in-95 duration-200">
            <div className="text-center space-y-1">
              <span className="text-xs font-bold text-emerald-400 flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Selamat! Anda Resmi Terdaftar sebagai Sobat Desmonth
              </span>
              <p className="text-xs text-slate-400">Berikut adalah Kartu Tanda Anggota (KTA) Digital Anda:</p>
            </div>

            {/* Premium Blue Card Pass */}
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/80 border-2 border-blue-500/60 p-6 shadow-2xl overflow-hidden space-y-5 shadow-blue-950/50">
              
              {/* Blue watermark */}
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <ShieldCheck className="w-40 h-40 text-blue-400" />
              </div>

              {/* Card Top */}
              <div className="flex items-center justify-between border-b border-blue-500/30 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-cinzel font-black text-sm shadow-md shadow-blue-600/30">
                    D
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xs font-bold text-white tracking-wider">
                      SOBAT <span className="text-sky-400">DESMONTH</span>
                    </h4>
                    <span className="text-[9px] uppercase tracking-widest text-slate-400">Kartu Tanda Relawan Resmi</span>
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-sky-300 font-mono text-[10px] font-bold border border-blue-500/40">
                  {createdPass.memberNumber}
                </span>
              </div>

              {/* Card Details */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Nama Anggota:</span>
                  <span className="font-bold text-white text-sm block mt-0.5">{createdPass.name}</span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Domisili:</span>
                  <span className="font-semibold text-slate-200 block mt-0.5">{createdPass.city}</span>
                </div>

                <div className="col-span-2">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Divisi Pengabdian:</span>
                  <span className="font-semibold text-sky-300 block mt-0.5">{createdPass.focusDivision}</span>
                </div>
              </div>

              {/* Card Bottom */}
              <div className="flex items-center justify-between pt-3 border-t border-blue-500/20 text-[10px] text-slate-400">
                <span>Bergabung: {createdPass.joinedDate}</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Status: Relawan Aktif
                </span>
              </div>

            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                id="btn-print-volunteer-pass"
                onClick={handlePrint}
                className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-600/30"
              >
                <Download className="w-4 h-4" />
                <span>Unduh / Cetak KTA Digital</span>
              </button>

              <button
                onClick={() => setCreatedPass(null)}
                className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
              >
                Daftar Baru
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
