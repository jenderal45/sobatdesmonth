import React, { useState } from 'react';
import { 
  FileDown, 
  X, 
  FileText, 
  Image, 
  Award, 
  CheckCircle2, 
  Download,
  Share2,
  ExternalLink
} from 'lucide-react';
import { PROFILE_DATA, VISION_MISSION } from '../data/mockData';

interface PressKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PressKitModal: React.FC<PressKitModalProps> = ({ isOpen, onClose }) => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  if (!isOpen) return null;

  const kitItems = [
    {
      id: 'doc-visi-misi',
      title: 'Buku Putih Visi Misi & 5 Panca Misi Sobat Desmonth 2024-2029',
      category: 'Dokumen Kebijakan Publik',
      format: 'PDF Digital (3.4 MB)',
      description: 'Naskah komprehensif arah strategi ekonomi UMKM, beasiswa pendidikan, kesehatan gratis, dan drainase lingkungan.',
      icon: 'FileText'
    },
    {
      id: 'doc-factsheet',
      title: 'Lembar Fakta Profil & Rekam Jejak Kepemimpinan Desmonth',
      category: 'Factsheet & Biografi',
      format: 'PDF Ringkas (1.8 MB)',
      description: 'Ikhtisar riwayat pendidikan, rekam jejak organisasi sosial, penghargaan, dan statistik 150+ aksi nyata.',
      icon: 'Award'
    },
    {
      id: 'doc-photo-kit',
      title: 'Paket Foto Resmi & Dokumentasi Resolusi Tinggi (High-Res)',
      category: 'Aset Media & Pers',
      format: 'Archive ZIP (18.5 MB)',
      description: 'Kumpulan foto potret resmi vertikal & horizontal, momen blusukan pasar, dan kegiatan sarasehan pemuda.',
      icon: 'Image'
    },
    {
      id: 'doc-logo-kit',
      title: 'Logo Resmi & Identitas Visual Gerakan Sobat Desmonth',
      category: 'Brand Guidelines',
      format: 'Vector PNG & SVG (4.2 MB)',
      description: 'Logo resmi, palet warna emas-navy, dan template spanduk aspirasi warga.',
      icon: 'FileText'
    }
  ];

  const handleDownload = (id: string, title: string) => {
    setDownloadingId(id);
    
    // Simulate generation & download of text summary or asset trigger
    setTimeout(() => {
      const element = document.createElement('a');
      const file = new Blob([
        `SOBAT DESMONTH - OFFICIAL ASSET\n\nJudul: ${title}\nTanggal Rilis: Agustus 2026\nInisiator: Desmonth\nTagline: ${PROFILE_DATA.tagline}\nVisi: ${VISION_MISSION.grandVision}\n\nDokumen resmi ini diterbitkan oleh Tim Media & Kebijakan Sobat Desmonth.`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `${id}-sobat-desmonth.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      setDownloadingId(null);
    }, 800);
  };

  return (
    <div 
      id="modal-presskit-root"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-blue-500/40 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-sky-400">
              <FileDown className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Pusat Unduhan <span className="blue-gradient-text">Press Kit & Dokumen</span>
              </h3>
              <p className="text-xs text-slate-400">Materi resmi untuk jurnalis, akademisi, relawan, dan publik</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Kit Items List */}
        <div className="space-y-3">
          {kitItems.map((item) => (
            <div 
              key={item.id}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-sky-400 text-[10px] font-bold">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-slate-400">{item.format}</span>
                </div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>

              <button
                onClick={() => handleDownload(item.id, item.title)}
                disabled={downloadingId === item.id}
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all flex-shrink-0 cursor-pointer disabled:opacity-50 shadow-md shadow-blue-600/30"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadingId === item.id ? 'Mengunduh...' : 'Unduh'}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Media Contact Note */}
        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <strong className="text-slate-200 block">Kontak Media & Permohonan Wawancara:</strong>
            <span>Humas Sobat Desmonth: media@sobatdesmonth.id</span>
          </div>
          <span className="text-sky-400 font-medium">WhatsApp Media: 0812-8888-045</span>
        </div>

      </div>
    </div>
  );
};
