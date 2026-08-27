import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  X, 
  Sparkles, 
  User, 
  RefreshCw, 
  HelpCircle,
  CheckCircle2,
  Compass,
  MessageSquare
} from 'lucide-react';
import { PROFILE_DATA, VISION_MISSION } from '../data/mockData';

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  time: string;
}

export const AIChatModal: React.FC<AIChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'ai',
      text: 'Halo! Saya adalah Asisten Cerdas Sobat Desmonth. Ada yang ingin Anda ketahui tentang figur Desmonth, 5 Panca Misi strategis, agenda kegiatan blusukan, atau cara menyampaikan aspirasi?',
      time: 'Baru saja'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'Apa visi & misi utama Desmonth?',
    'Bagaimana program bantuan modal UMKM?',
    'Kapan agenda kegiatan terdekat?',
    'Cara mengajukan beasiswa & aduan warga?'
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  if (!isOpen) return null;

  const handleSendMessage = async (customPrompt?: string) => {
    const query = customPrompt || inputText;
    if (!query.trim() || loading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!customPrompt) setInputText('');
    setLoading(true);

    try {
      // Call backend API /api/chat
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.map(m => ({ role: m.sender === 'user' ? 'user' : 'model', content: m.text }))
        })
      });

      if (response.ok) {
        const data = await response.json();
        const aiMsg: Message = {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: data.reply || getLocalFallbackAnswer(query),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiMsg]);
      } else {
        throw new Error('API server unavailable');
      }
    } catch {
      // Intelligent fallback answer
      const fallbackText = getLocalFallbackAnswer(query);
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: fallbackText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
    } finally {
      setLoading(false);
    }
  };

  const getLocalFallbackAnswer = (q: string): string => {
    const query = q.toLowerCase();
    if (query.includes('visi') || query.includes('misi')) {
      return `Visi utama Desmonth adalah: "${VISION_MISSION.grandVision}". Beliau mengusung 5 Panca Misi: 1) Pemberdayaan Ekonomi & UMKM Mandiri, 2) Pendidikan Berkualitas & 5.000 Beasiswa, 3) Layanan Kesehatan Gratis 24 Jam, 4) Infrastruktur Drainase & Lingkungan Bersih, 5) Tata Kelola Transparan & Kanal Aspirasi Responsif.`;
    }
    if (query.includes('umkm') || query.includes('modal') || query.includes('warung')) {
      return `Untuk sektor UMKM, Desmonth memiliki program 'Gerakan 1000 Warung Digital', bantuan permodalan mikro bunga rendah, pelatihan foto produk & kemasan, serta fasilitasi sertifikasi halal gratis untuk pelaku usaha kecil dan rumahan.`;
    }
    if (query.includes('beasiswa') || query.includes('sekolah') || query.includes('pendidikan')) {
      return `Program beasiswa Sobat Desmonth menargetkan 5.000 pelajar dan mahasiswa berprestasi dari keluarga prasejahtera, dilengkapi dengan fasilitas Pojok Baca Digital dan pelatihan vokasi kerja.`;
    }
    if (query.includes('agenda') || query.includes('kapan') || query.includes('jadwal')) {
      return `Agenda terdekat adalah 'Rembug Warga & Urun Rembuk Kebijakan Pendidikan' pada 30 Agustus 2026 di Balai Warga Rawamangun Jakarta Timur, serta 'Pasar Berkah Sembako Murah' pada 5 September 2026. Anda dapat mendaftar langsung di menu Agenda pada website ini!`;
    }
    if (query.includes('aspirasi') || query.includes('aduan') || query.includes('keluhan')) {
      return `Anda dapat menyampaikan aspirasi langsung melalui 'Formulir Aspirasi Warga' di website ini. Anda akan mendapatkan Kode Pelacakan otomatis (contoh: ASP-2026-XXXX) untuk memantau telaah dan respon tim advokasi Desmonth secara transparan.`;
    }
    return `Desmonth berkomitmen untuk senantiasa hadir mendengar aspirasi masyarakat dan memberikan aksi nyata. Anda dapat mengeksplorasi profil, rekam jejak, visi misi, atau mengirimkan aspirasi langsung melalui formulir di portal resmi Sobat Desmonth ini.`;
  };

  return (
    <div 
      id="modal-ai-chat-root"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-blue-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[85vh] max-h-[700px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-md shadow-blue-600/30">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">Tanya Sobat Desmonth</h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                  Online
                </span>
              </div>
              <p className="text-xs text-slate-400">Asisten Pintar Program, Visi, & Aspirasi Publik</p>
            </div>
          </div>

          <button
            id="btn-close-ai-chat-modal"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Stream */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-slate-950/50">
          {messages.map((msg) => (
            <div 
              key={msg.id}
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 text-sky-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div 
                className={`p-4 rounded-2xl max-w-[82%] text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white font-medium rounded-tr-none shadow-md shadow-blue-600/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none shadow-sm'
                }`}
              >
                <p className="whitespace-pre-line">{msg.text}</p>
                <span className={`text-[10px] block mt-1.5 ${msg.sender === 'user' ? 'text-blue-200 text-right' : 'text-slate-500'}`}>
                  {msg.time}
                </span>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center flex-shrink-0 mt-0.5 border border-slate-700">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 text-sky-400 flex items-center justify-center">
                <Bot className="w-4 h-4 animate-spin" />
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-sky-300 flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Asisten Desmonth sedang mengetik jawaban...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        <div className="p-3 bg-slate-950 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[10px] font-bold uppercase text-slate-500 whitespace-nowrap pl-1">Saran:</span>
          {quickPrompts.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(prompt)}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-sky-300 border border-slate-800 text-[11px] font-medium whitespace-nowrap transition-colors cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-slate-900 border-t border-slate-800">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
            className="flex items-center gap-2"
          >
            <input
              id="input-ai-chat"
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Tanyakan hal seputar Visi, Misi, Agenda, & Program Desmonth..."
              className="flex-1 p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
            />
            <button
              id="btn-send-ai-chat"
              type="submit"
              disabled={loading || !inputText.trim()}
              className="p-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold disabled:opacity-50 transition-all cursor-pointer shadow-md shadow-blue-600/30"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
