import http from "http";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API health endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Sobat Desmonth Platform" });
});

// Gemini AI Chat Proxy for "Tanya Sobat Desmonth"
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Pesan tidak boleh kosong" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Fallback graceful message if key is not yet configured
      return res.json({
        reply: `Terima kasih atas pertanyaannya. Sebagai tokoh penggerak, Desmonth senantiasa berkomitmen memperjuangkan kemandirian ekonomi UMKM, penyediaan 5.000 beasiswa pendidikan, layanan kesehatan gratis, serta perbaikan drainase & tata kelola pemerintahan yang bersih dan transparan. Anda juga dapat menyuarakan aspirasi Anda langsung melalui formulir di website ini!`
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const systemPrompt = `
Anda adalah 'Asisten Virtual Sobat Desmonth' — asisten resmi untuk figur pemimpin sosial & inisiator gerakan rakyat: Desmonth.
Berikan jawaban yang hangat, santun, cerdas, berintegritas, optimis, dan terstruktur dalam Bahasa Indonesia.

Informasi Kunci:
- Figur: Desmonth (Tokoh Penggerak Masyarakat & Inovator Sosial)
- Visi: "Mewujudkan Masyarakat Mandiri, Adil, Berkarakter, dan Berkeadaban Melalui Kepemimpinan Bersih Berbasis Solusi Nyata."
- 5 Panca Misi:
  1. Akselerasi Ekonomi Kerakyatan & 10.000 UMKM Naik Kelas (Gerakan 1000 Warung Digital, sertifikasi halal gratis, modal bergulir)
  2. Pendidikan Berkualitas & 5.000 Beasiswa Merata bagi anak keluarga prasejahtera
  3. Layanan Kesehatan Preventif & Perlindungan Lansia (Ambulans Siaga 24 Jam Gratis, Posko Gizi Anti-Stunting)
  4. Infrastruktur Drainase Anti-Banjir & Bank Sampah Lingkungan Bersih
  5. Tata Kelola Transparan, Bersih, dan Kanal Aspirasi Responsif 1x24 Jam
- Gerakan 'Sobat Desmonth' memiliki 45.000+ relawan, 150+ program aksi nyata terlaksana.
- Ajak warga untuk menyuarakan aspirasi melalui Formulir Aspirasi Warga di website ini untuk mendapatkan Kode Pelacakan (Tracking Code) transparan.
`;

    let response;
    try {
      response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `Pertanyaan Warga: "${message}"\nJawablah secara padat, jelas, ramah, dan inspiratif:`,
        config: {
          systemInstruction: systemPrompt,
        },
      });
    } catch (modelErr: any) {
      console.warn("Retrying with gemini-3.8-flash:", modelErr?.message || modelErr);
      response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: `Pertanyaan Warga: "${message}"\nJawablah secara padat, jelas, ramah, dan inspiratif:`,
        config: {
          systemInstruction: systemPrompt,
        },
      });
    }

    const reply = response.text || "Terima kasih atas pertanyaan Anda kepada Sobat Desmonth. Mari kita bersama-sama mewujudkan aksi nyata untuk kemajuan masyarakat!";
    return res.json({ reply });

  } catch (error: any) {
    console.error("AI Chat Error:", error);
    return res.json({
      reply: "Desmonth senantiasa berkomitmen mendengar suara rakyat. Anda dapat mengeksplorasi Visi, Misi, Agenda kegiatan, serta mengirimkan aspirasi langsung melalui formulir di portal Sobat Desmonth ini."
    });
  }
});

async function startServer() {
  const httpServer = http.createServer(app);

  if (process.env.NODE_ENV !== "production") {
    const isHmrDisabled = process.env.DISABLE_HMR === "true";
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: isHmrDisabled ? false : { server: httpServer },
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  httpServer.on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.error(`Port ${PORT} is already in use.`);
    } else {
      console.error("HTTP server error:", err);
    }
  });

  httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Sobat Desmonth running on http://localhost:${PORT}`);
  });

  process.on("SIGTERM", () => {
    httpServer.close();
    process.exit(0);
  });

  process.on("SIGINT", () => {
    httpServer.close();
    process.exit(0);
  });
}

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});

startServer().catch((err) => {
  console.error("Fatal startup error:", err);
  process.exit(1);
});
