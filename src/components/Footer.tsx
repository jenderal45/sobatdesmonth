import React, { useState } from 'react';
import { 
  Heart, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Instagram, 
  Youtube, 
  Twitter, 
  Facebook, 
  CheckCircle2, 
  Bot,
  Users,
  FileText
} from 'lucide-react';
import { PROFILE_DATA } from '../data/mockData';

interface FooterProps {
  onOpenVolunteer: () => void;
  onOpenAI: () => void;
  onOpenPressKit: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenVolunteer,
  onOpenAI,
  onOpenPressKit
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-850 relative overflow-hidden">
      
      {/* Top Banner Accent */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-blue-700 to-indigo-900 flex items-center justify-center font-cinzel text-white font-black text-xl shadow-lg shadow-blue-600/30 border border-blue-400/40">
                D
              </div>
              <div>
                <span className="font-cinzel text-lg font-bold tracking-wider text-white">
                  SOBAT <span className="blue-gradient-text">DESMONTH</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slate-500 block font-semibold">
                  Official Movement Portal
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Platform resmi personal branding dan wadah konsolidasi aksi nyata gerakan rakyat bersama <strong>Bang Desmonth</strong>. Mendedikasikan langkah untuk kemakmuran UMKM, keadilan pendidikan, dan pelayanan publik yang berintegritas.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              {[
                { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
                { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
                { icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com' },
                { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' }
              ].map((soc, idx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 text-slate-400 hover:text-sky-400 flex items-center justify-center transition-colors"
                    aria-label={soc.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Profil & Rekam Jejak', href: 'profil' },
                { label: 'Visi & 5 Panca Misi', href: 'visi-misi' },
                { label: 'Berita & Liputan Aksi', href: 'berita' },
                { label: 'Dokumentasi Galeri', href: 'galeri' },
                { label: 'Agenda & Jadwal', href: 'agenda' },
                { label: 'Form Aspirasi Warga', href: 'aspirasi' },
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="hover:text-sky-300 transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Posko & Layanan Darurat */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Posko & Layanan Warga
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>Posko Pusat Sobat Desmonth: Jl. Rasuna Said Kav. 45, Jakarta Selatan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Hotline Relawan: 0812-8900-2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>aspirasi@sobatdesmonth.id</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-emerald-400 font-semibold">
                🚑 Ambulans Siaga Gratis 24 Jam: Hubungi Hotline Posko
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter & Direct Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Buletin Warga Sobat Desmonth
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dapatkan info berkala agenda blusukan, rilis beasiswa, dan laporan pertanggungjawaban program kerja.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Terima kasih! Anda telah terdaftar.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-1.5">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email Anda..."
                  className="flex-1 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors cursor-pointer shadow-md shadow-blue-600/30"
                  title="Berlangganan"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={onOpenAI}
                className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-[11px] font-semibold text-sky-300 border border-blue-500/30 flex items-center gap-1 cursor-pointer"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Tanya AI</span>
              </button>
              <button
                onClick={onOpenVolunteer}
                className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-[11px] font-semibold text-slate-200 border border-slate-800 flex items-center gap-1 cursor-pointer"
              >
                <Users className="w-3.5 h-3.5 text-sky-400" />
                <span>Daftar Relawan</span>
              </button>
              <button
                onClick={onOpenPressKit}
                className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-[11px] font-semibold text-slate-200 border border-slate-800 flex items-center gap-1 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>Press Kit</span>
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Back to top */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong>Sobat Desmonth</strong>. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px]">Didedikasikan untuk Kemaslahatan Rakyat Indonesia</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
              title="Kembali ke Atas"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-semibold">Ke Atas</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
