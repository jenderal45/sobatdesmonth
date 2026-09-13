import { ProfileData, VisionMission, NewsItem, GalleryItem, AgendaItem, Aspiration, ContentPlanItem, OrganizationExperience, ActivityItem } from '../types';

export const ORGANIZATION_EXPERIENCES: OrganizationExperience[] = [
  {
    id: 1,
    role: "Ketua Umum",
    organization: "Paguyuban Pasar Modern Bintaro",
    period: "2014 - Sekarang",
    category: "Paguyuban & Pasar",
    description: "Memimpin paguyuban ratusan pedagang Pasar Modern Bintaro selama lebih dari 10 tahun, memperjuangkan tata kelola pasar modern yang higienis, advokasi legalitas tempat usaha, ketertiban sentra kuliner, serta program digitalisasi promosi dan permodalan mikro pedagang.",
    highlight: true
  },
  {
    id: 2,
    role: "Ketua Bidang Sarana & Prasarana",
    organization: "Pemuda Pancasila MPW Provinsi DKI Jakarta",
    period: "Periode Kepengurusan",
    category: "Ormas & Kepemudaan",
    description: "Mengkoordinasikan pengelolaan fasilitas, logistik operasional, dan penyediaan armada bantuan penunjang berbagai aksi sosial, mitigasi bencana, serta kegiatan ormas di wilayah DKI Jakarta.",
    highlight: true
  },
  {
    id: 3,
    role: "Wakil Bendahara",
    organization: "Pemuda Pancasila MPW Provinsi DKI Jakarta",
    period: "Periode Kepengurusan",
    category: "Ormas & Kepemudaan",
    description: "Mengawal transparansi pembukuan kas organisasi, tata kelola anggaran program kerja, serta akuntabilitas alokasi dana sosial kemasyarakatan tingkat provinsi.",
    highlight: true
  },
  {
    id: 4,
    role: "Wakil Bendahara",
    organization: "Pemuda Pancasila MPC Jakarta Selatan",
    period: "Periode Kepengurusan",
    category: "Ormas & Kepemudaan",
    description: "Mengelola perbendaharaan dan penggalangan pendanaan kegiatan kemasyarakatan serta bakti pemuda di tingkat Majelis Pimpinan Cabang Jakarta Selatan."
  },
  {
    id: 5,
    role: "Bendahara DPC",
    organization: "Partai Patriot DPC Jakarta Selatan",
    period: "Periode Kepengurusan",
    category: "Partai & Politik",
    description: "Mengemban amanah manajemen perbendaharaan partai politik di tingkat cabang Jakarta Selatan, memastikan kelancaran operasional administrasi dan konsolidasi kader."
  },
  {
    id: 6,
    role: "Sekretaris Umum",
    organization: "Pomp Op Raja Isori Parhusip Se-Jabodetabek",
    period: "Periode Kepengurusan",
    category: "Adat & Marga",
    description: "Memimpin sekretariat organisasi kekerabatan marga Pomparan Ompu Raja Isori Parhusip se-wilayah Jabodetabek, mengkoordinasikan kegiatan adat, temu berkala, dan tali asih sosial warga perantauan."
  },
  {
    id: 7,
    role: "Bendahara Umum",
    organization: "Pomparan Toga Parhusip Se-Jabodetabek",
    period: "Periode Kepengurusan",
    category: "Adat & Marga",
    description: "Memegang amanah bendahara umum persatuan Pomparan Toga Parhusip se-Jabodetabek, mengelola dana abadi sosial, bantuan kedukaan, dan beasiswa anak keluarga marga."
  },
  {
    id: 8,
    role: "Ketua Ikatan Alumni",
    organization: "Ikatan Alumni SMPK PSKD 4 Jakarta",
    period: "Periode Kepengurusan",
    category: "Alumni & Pendidikan",
    description: "Menghimpun jejaring alumni lintas angkatan, menginisiasi program bakti almamater, pembinaan beasiswa bagi adik kelas, serta donor darah dan bakti sosial berkala."
  },
  {
    id: 9,
    role: "Bendahara Relawan Pemenangan",
    organization: "Relawan Pemenangan Sandiaga Uno",
    period: "Pilkada DKI Jakarta",
    category: "Relawan Pemenangan",
    description: "Mengelola akuntabilitas keuangan relawan, logistik pergerakan lapangan, dan transparansi dana pemenangan dalam kontestasi politik DKI Jakarta."
  },
  {
    id: 10,
    role: "Bendahara DKI Relawan Pemenangan",
    organization: "Relawan Pemenangan Ganjar - Mahfud MD DKI Jakarta",
    period: "Pilpres 2024",
    category: "Relawan Pemenangan",
    description: "Bertindak sebagai Bendahara tingkat provinsi DKI Jakarta dalam mengelola akuntabilitas dana kampanye relawan, konsolidasi simpul massa, dan logistik posko se-DKI Jakarta."
  }
];

export const PROFILE_DATA: ProfileData = {
  name: "Bang Desmonth",
  subtitle: "Ketua Umum Paguyuban Pasar Modern Bintaro & Kader Muda Partai Demokrat DKI Jakarta",
  tagline: "Mendengar dengan Hati, Mengabdi dengan Aksi Nyata",
  motto: "Kemajuan sejati lahir ketika suara rakyat menjadi kompas setiap kebijakan dan tindakan nyata di lapangan.",
  location: "Jakarta Selatan, DKI Jakarta",
  bio: [
    "Bang Desmonth adalah figur penggerak sosial, Ketua Umum Paguyuban Pasar Modern Bintaro (2014 sd sekarang), dan kader muda Partai Demokrat DKI Jakarta yang mendedikasikan energi kepemimpinannya untuk memperjuangkan kesejahteraan masyarakat akar rumput di Jakarta Selatan.",
    "Memiliki rekam jejak pengabdian organisasi yang kokoh dan beragam: berpengalaman sebagai pengurus inti Pemuda Pancasila tingkat Provinsi DKI Jakarta dan MPC Jakarta Selatan, kepemimpinan perkumpulan adat Pomparan Parhusip Se-Jabodetabek, Ketua Ikatan Alumni SMPK PSKD 4 Jakarta, hingga memegang amanah Bendahara dalam tim relawan pemenangan tokoh nasional.",
    "Melalui gerakan 'Sobat Desmonth', beliau senantiasa hadir langsung menyapa warga di pasar tradisional, gang pemukiman, sentra UMKM, dan komunitas keagamaan (termasuk jemaat HKBP Kebayoran Lama) guna menjembatani aspirasi publik dengan solusi kebijakan yang transparan dan berdampak nyata."
  ],
  education: [
    {
      degree: "Magister Manajemen Kebijakan Publik & Strategi",
      institution: "Universitas Terkemuka di Jakarta",
      year: "2018 - 2020",
      focus: "Tata Kelola Pemerintahan Transparan, Anggaran Daerah & Pemberdayaan Komunitas"
    },
    {
      degree: "Sarjana Ilmu Komunikasi & Kepemimpinan Organisasi",
      institution: "Universitas Negeri Terkemuka",
      year: "2012 - 2016",
      focus: "Komunikasi Publik, Resolusi Sosial & Pengorganisasian Akar Rumput"
    }
  ],
  experience: [
    {
      year: "2014 - Sekarang",
      role: "Ketua Umum Paguyuban",
      organization: "Paguyuban Pasar Modern Bintaro",
      description: "Memimpin paguyuban pedagang pasar selama lebih dari 10 tahun, memperjuangkan ketertiban sarana prasarana, advokasi lapak, serta penguatan daya saing UMKM lokal."
    },
    {
      year: "2023 - Sekarang",
      role: "Kader & Fungsionaris",
      organization: "DPD Partai Demokrat DKI Jakarta",
      description: "Aktif dalam konsolidasi pemenangan dan advokasi kebijakan publik pro-rakyat untuk wilayah Jakarta Selatan bersama pimpinan partai dan Ketum AHY."
    },
    {
      year: "Periode Kepengurusan",
      role: "Ketua Bidang Sarana Prasarana & Wkl Bendahara",
      organization: "Pemuda Pancasila MPW DKI Jakarta",
      description: "Mengelola sarana logistik operasional organisasi serta tata kelola perbendaharaan dalam menjalankan misi sosial kemanusiaan se-DKI Jakarta."
    },
    {
      year: "Periode Kepengurusan",
      role: "Wakil Bendahara",
      organization: "Pemuda Pancasila MPC Jakarta Selatan",
      description: "Mengawal akuntabilitas keuangan dan penggalangan pendanaan kegiatan bakti sosial di wilayah Jakarta Selatan."
    }
  ],
  organizations: ORGANIZATION_EXPERIENCES,
  values: [
    {
      title: "Integritas & Kejujuran",
      description: "Menjaga amanah rakyat dengan keterbukaan total, tanpa kompromi terhadap korupsi maupun kepentingan golongan.",
      icon: "ShieldCheck"
    },
    {
      title: "Empati & Dekat Rakyat",
      description: "Hadir langsung di tengah masyarakat, mendengar keluh kesah dari pasar tradisional, warung kopi, hingga balai warga tanpa sekat.",
      icon: "HeartHandshake"
    },
    {
      title: "Inovasi Kebijakan & Solusi",
      description: "Mengoptimalkan data lapangan dan teknologi digital untuk menghadirkan program yang presisi dan tepat sasaran.",
      icon: "Sparkles"
    },
    {
      title: "Kolaborasi Gotong Royong",
      description: "Membangun sinergi lintas pemuda, komunitas keagamaan, pelaku UMKM, dan ormas demi kemajuan Jakarta Selatan.",
      icon: "Users"
    }
  ],
  awards: [
    {
      year: "2025",
      title: "Tokoh Penggerak Pemuda & Solidaritas Sosial DKI Jakarta",
      issuer: "Forum Pemuda & Komunitas Nusantara"
    },
    {
      year: "2024",
      title: "Penghargaan Dedikasi Konsolidasi Kader Demokrat",
      issuer: "DPD Partai Demokrat DKI Jakarta"
    },
    {
      year: "2022",
      title: "Apresiasi Relawan Tanggap Pandemi & Kemanusiaan",
      issuer: "Aliansi Sahabat Sosial Jakarta"
    }
  ],
  stats: [
    {
      value: "10+",
      label: "Amanah Organisasi",
      detail: "Pengalaman kepemimpinan ormas, paguyuban pasar, adat, dan pemenangan"
    },
    {
      value: "12 Tahun+",
      label: "Pemberdayaan Pasar",
      detail: "Ketua Umum Paguyuban Pasar Modern Bintaro sejak 2014"
    },
    {
      value: "150+",
      label: "Aksi Nyata Lapangan",
      detail: "Blusukan pasar, baksos sembako, dan advokasi warga Jaksel"
    },
    {
      value: "45.000+",
      label: "Sobat & Relawan",
      detail: "Tergabung dalam barisan penggerak Sobat Desmonth Jaksel"
    }
  ]
};

export const VISION_MISSION: VisionMission = {
  grandVision: "Mewujudkan Jakarta Selatan yang Maju, Sejahtera, Berkeadilan, dan Berkeadaban Melalui Kepemimpinan Bersih Berbasis Aksi Nyata.",
  visionNarrative: "Visi ini berakar dari pengalaman panjang Bang Desmonth turun langsung ke gang-gang pemukiman, pasar tradisional, dan komunitas warga. Pembangunan tidak boleh hanya dirasakan oleh kalangan tertentu, melainkan harus menyentuh pedagang kecil, pengemudi ojol, lansia, kaum ibu, dan generasi muda pencari kerja di Jakarta Selatan.",
  missions: [
    {
      id: 1,
      title: "Akselerasi Ekonomi Kerakyatan & 10.000 UMKM Naik Kelas",
      description: "Memperjuangkan permodalan mikro bunga rendah, program 'Gerakan 1000 Warung Digital', fasilitasi legalitas & sertifikasi halal gratis, serta revitalisasi pasar tradisional agar higienis dan ramai pembeli.",
      focusAreas: [
        "Bantuan permodalan usaha tanpa agunan memberatkan",
        "Digitalisasi pemasaran & pelatihan foto produk bagi pedagang kecil",
        "Penataan sentra kuliner kaki lima yang tertib dan bersih"
      ],
      targetOutput: "10.000 UMKM & warung kelontong Jakarta Selatan bertransformasi dan naik omset.",
      icon: "TrendingUp"
    },
    {
      id: 2,
      title: "Pendidikan Berkualitas, Karakter Unggul & 5.000 Beasiswa",
      description: "Menjamin hak setiap anak Jakarta Selatan untuk mengenyam pendidikan hingga perguruan tinggi, penyediaan beasiswa berprestasi & prasejahtera, serta ruang kreatif pemuda.",
      focusAreas: [
        "Beasiswa penuh dan perlengkapan sekolah gratis untuk keluarga pra-sejahtera",
        "Pojok baca digital di setiap RW dan pelatihan vokasi kerja pemuda",
        "Sinergi ruang bimbingan belajar dan ruang kreatif anak muda"
      ],
      targetOutput: "5.000 pelajar dan mahasiswa mendapatkan dukungan beasiswa berkelanjutan.",
      icon: "GraduationCap"
    },
    {
      id: 3,
      title: "Layanan Kesehatan Preventif, Ambulans Siaga & Posko Gizi",
      description: "Menghadirkan posko kesehatan terpadu 24 jam, ambulans gratis siaga antar-jemput warga sakit, posko nutrisi anti-stunting balita, serta senam kebugaran lansia rutin.",
      focusAreas: [
        "Layanan ambulans tanggap darurat 24 jam gratis untuk warga Jaksel",
        "Pemberian makanan tambahan bernutrisi bagi balita & ibu hamil",
        "Pemeriksaan kesehatan gula darah, kolesterol, dan tensi gratis berkala"
      ],
      targetOutput: "Nol kasus penundaan rujukan darurat dan penurunan angka stunting di Jaksel.",
      icon: "HeartPulse"
    },
    {
      id: 4,
      title: "Drainase Tangguh Anti-Banjir & Lingkungan Bersih Berkelanjutan",
      description: "Mempercepat normalisasi dan pengerukan saluran air mikro di pemukiman padat, penghijauan lahan publik, serta gerakan bank sampah bernilai ekonomi.",
      focusAreas: [
        "Pembersihan berkala got dan gorong-gorong saluran pemukiman",
        "Pengadaan sumur resapan dan lubang biopori di area rawan genangan",
        "Pemberdayaan kader lingkungan pengolah sampah organik menjadi pupuk"
      ],
      targetOutput: "Pengurangan titik genangan air hingga 80% saat musim hujan.",
      icon: "ShieldAlert"
    },
    {
      id: 5,
      title: "Tata Kelola Transparan, Parlemen Bersih & Aspirasi Responsif 1x24 Jam",
      description: "Membuka posko aduan publik fisik dan digital dengan sistem pelacakan (tracking code), keterbukaan dana aspirasi dewan, serta rembug warga berkala setiap bulan.",
      focusAreas: [
        "Portal pengaduan warga dengan SLA respon maksimal 1x24 jam",
        "Laporan pertanggungjawaban dana pokok pikiran (Pokir) secara terbuka",
        "Sarasehan tatap muka rutin di balai warga setiap kelurahan"
      ],
      targetOutput: "100% aspirasi warga tercatat dan dilaporkan tindak lanjutnya secara publik.",
      icon: "CheckSquare"
    }
  ],
  pillars: [
    {
      title: "Kemandirian Ekonomi",
      metric: "10.000 UMKM",
      description: "Didampingi modal, digitalisasi, dan pasar mandiri."
    },
    {
      title: "Akses Pendidikan",
      metric: "5.000 Beasiswa",
      description: "Bagi putra-putri Jakarta Selatan berprestasi & prasejahtera."
    },
    {
      title: "Layanan Kesehatan",
      metric: "24 Jam Siaga",
      description: "Ambulans gratis dan posko kesehatan keliling."
    },
    {
      title: "Aspirasi Warga",
      metric: "1x24 Jam",
      description: "Sistem pelacakan transparan terhubung langsung dengan tim advokasi."
    }
  ]
};

export const NEWS_DATA: NewsItem[] = [
  {
    id: "news-1",
    title: "Konsolidasi Akbar DPD Partai Demokrat DKI Jakarta: Bang Desmonth Kobarkan Semangat Kader Muda Menuju Kemenangan Rakyat",
    slug: "konsolidasi-akbar-demokrat-dki-jakarta-bang-desmonth",
    category: "Siaran Pers",
    date: "24 Agustus 2026",
    readTime: "4 menit baca",
    summary: "Bersama jajaran pimpinan DPD Partai Demokrat DKI Jakarta, Bang Desmonth menegaskan komitmen memperjuangkan kebijakan pro-rakyat, kemandirian ekonomi, dan aspirasi warga Jakarta Selatan.",
    content: [
      "JAKARTA SELATAN — Bertempat di hadapan jajaran pimpinan DPD Partai Demokrat DKI Jakarta dan kader muda, Bang Desmonth menyampaikan orasi penuh semangat mengenai pentingnya kehadiran nyata partai politik di tengah denyut kehidupan masyarakat sehari-hari.",
      "“Partai Demokrat di bawah kepemimpinan Ketum AHY senantiasa mengedepankan politik kerja nyata dan etika luhur. Sebagai kader muda di Jakarta Selatan, kami tidak menunggu momentum lima tahunan—kami terus hadir bersama pedagang pasar, kaum muda kreatif, dan keluarga yang membutuhkan pendampingan,” tegas Bang Desmonth.",
      "Konsolidasi ini memperkuat simpul pemenangan di seluruh kecamatan di Jakarta Selatan, memastikan bahwa setiap posko relawan menjadi garda terdepan dalam menyerap aspirasi dan memberikan solusi konkret bagi warga."
    ],
    image: "/photos/whatsapp_2026-08-18_15.45.00_2.jpeg",
    location: "Jakarta Selatan",
    author: "Tim Media Sobat Desmonth",
    tags: ["Partai Demokrat", "Konsolidasi", "Bang Desmonth", "Jakarta Selatan", "AHY"],
    featured: true
  },
  {
    id: "news-2",
    title: "Silaturahmi Hangat di HKBP Kebayoran Lama: Bang Desmonth Bersama Pemuda Pancasila Rajut Kerukunan dan Kepedulian Sesama",
    slug: "silaturahmi-hkbp-kebayoran-lama-pemuda-pancasila",
    category: "Dialog Warga",
    date: "21 Agustus 2026",
    readTime: "3 menit baca",
    summary: "Momen penuh kekeluargaan saat Bang Desmonth menghadiri perayaan dan doa bersama jemaat HKBP Kebayoran Lama, menggandeng elemen Pemuda Pancasila untuk menjaga harmoni sosial.",
    content: [
      "KEBAYORAN LAMA — Kebersamaan dan persaudaraan lintas elemen tercermin dalam kunjungan silaturahmi Bang Desmonth ke Gereja HKBP Kebayoran Lama Jakarta Selatan. Kegiatan ini dihadiri oleh tokoh masyarakat, jemaat gereja, serta perwakilan Pemuda Pancasila DKI Jakarta.",
      "Dalam sambutannya, Bang Desmonth menekankan bahwa keberagaman adalah kekayaan terbesar Jakarta. Sinergi antara komunitas keagamaan dan ormas kepemudaan menjadi kunci dalam menjaga persatuan, kedamaian, dan aksi tolong-menolong tanpa membeda-bedakan latar belakang.",
      "Pendeta dan para tetua jemaat mengapresiasi kerendahan hati dan kepedulian Bang Desmonth yang konsisten hadir dalam berbagai momentum kemasyarakatan dan aksi sosial di wilayah Kebayoran Lama."
    ],
    image: "/photos/whatsapp_2026-08-18_15.21.32_1.jpeg",
    location: "Kebayoran Lama, Jakarta Selatan",
    author: "Humas Komunitas",
    tags: ["HKBP Kebayoran Lama", "Pemuda Pancasila", "Toleransi", "Kebersamaan"],
    featured: true
  },
  {
    id: "news-3",
    title: "Blusukan Pasar Tradisional Jaksel: Bang Desmonth Dengarkan Keluhan Pedagang dan Dorong Program Gerakan Warung Berdaya",
    slug: "blusukan-pasar-tradisional-gerakan-warung-berdaya",
    category: "Pemberdayaan UMKM",
    date: "18 Agustus 2026",
    readTime: "4 menit baca",
    summary: "Menyusuri lorong pasar tradisional sejak pagi buta, Bang Desmonth berdialog langsung dengan pedagang sayur, bumbu, dan sembako mengenai stabilitas harga dan akses modal mikro.",
    content: [
      "PASAR MINGGU — Bang Desmonth kembali melakukan aksi blusukan menyapa para pedagang di pasar tradisional Jakarta Selatan. Dalam dialog santai di sela transaksi jual beli, para pedagang menyampaikan tantangan kenaikan harga kulakan dan persaingan dagang era modern.",
      "Menanggapi hal tersebut, Bang Desmonth memaparkan inisiatif 'Gerakan 1000 Warung Digital' dan program kemitraan modal mikro bunga rendah yang dirancang agar pedagang tradisional tetap menjadi tuan rumah di tanah sendiri.",
      "“Pasar tradisional adalah denyut nadi ekonomi rakyat. Kami akan terus memperjuangkan revitalisasi fasilitas pasar yang higienis, nyaman, dan terintegrasi dengan akses modal yang adil,” ujar beliau."
    ],
    image: "/photos/whatsapp_2026-08-18_15.15.42.jpeg",
    location: "Pasar Tradisional Jakarta Selatan",
    author: "Tim Lapangan Sobat Desmonth",
    tags: ["Pasar Tradisional", "UMKM", "Ekonomi Kerakyatan", "Blusukan"]
  },
  {
    id: "news-4",
    title: "Konsisten Sejak Pandemi: Kilas Balik Dedikasi Aksi Kemanusiaan Bang Desmonth Bersama Kemensos RI Membantu Warga",
    slug: "kilas-balik-aksi-kemanusiaan-kemensos-pandemi",
    category: "Aksi Sosial",
    date: "14 Agustus 2026",
    readTime: "3 menit baca",
    summary: "Bukti konsistensi pengabdian sosial Bang Desmonth yang telah teruji dalam penyaluran bantuan tanggap darurat dan logistik sembako bagi ribuan kepala keluarga di Jakarta Selatan.",
    content: [
      "JAKARTA — Rekam jejak pengabdian Bang Desmonth bukanlah hal baru. Sejak masa-masa kritis pandemi, beliau telah memimpin tim relawan berkolaborasi dengan Kementerian Sosial RI dan perangkat RT/RW untuk mendistribusikan bantuan langsung ke pintu-pintu rumah warga prasejahtera.",
      "Konsistensi ini terus berlanjut hingga kini melalui posko siaga sembako murah, ambulans gratis 24 jam, dan advokasi kesehatan warga lansia di berbagai sudut Jakarta Selatan.",
      "Warga mengapresiasi figur pemimpin yang tidak sekadar berjanji, melainkan telah terbukti memiliki rekam jejak kepedulian yang tulus dan berkelanjutan."
    ],
    image: "/photos/whatsapp_2026-08-18_16.58.34.jpeg",
    location: "Jakarta Selatan",
    author: "Redaksi Warta Warga",
    tags: ["Aksi Sosial", "Kemensos RI", "Kemanusiaan", "Rekam Jejak"]
  }
];

export const ACTIVITIES_DATA: ActivityItem[] = [
  {
    id: "act-1",
    title: "Kepemimpinan Paguyuban Pasar Modern Bintaro & Tata Kelola UMKM Higienis",
    category: "Pasar Modern & UMKM",
    date: "2014 - Sekarang",
    location: "Pasar Modern Bintaro",
    roleTitle: "Ketua Umum Paguyuban Pasar Modern Bintaro",
    description: "Memimpin paguyuban pedagang selama lebih dari 10 tahun, mengadvokasi perbaikan sarana prasarana pasar, zonasi lapak higienis, fasilitas perbankan dan transaksi digital QRIS, serta menjaga stabilitas harga dan kenyamanan ribuan pengunjung setia pasar.",
    impactMetric: "450+ Pedagang & UMKM",
    impactLabel: "Kios, lapak sayur, kuliner, dan kebutuhan pokok dalam binaan paguyuban",
    image: "/photos/whatsapp_2026-08-18_15.15.42.jpeg",
    tags: ["Pasar Modern Bintaro", "Ketua Umum", "UMKM", "Ekonomi Kerakyatan"],
    highlight: true
  },
  {
    id: "act-2",
    title: "Aksi Sosial & Penguatan Logistik Bersama Pemuda Pancasila MPW DKI & MPC Jaksel",
    category: "Pemuda Pancasila & Ormas",
    date: "Rutin & Berkelanjutan",
    location: "Jakarta Selatan & DKI Jakarta",
    roleTitle: "Ketua Bidang Sarpras & Wkl Bendahara PP MPW DKI",
    description: "Mengkoordinasikan sarana prasarana logistik dan transparansi perbendaharaan dalam berbagai kegiatan bakti sosial, donor darah, pengamanan kegiatan keagamaan, dan penanggulangan tanggap darurat bencana di wilayah DKI Jakarta.",
    impactMetric: "1.200+ Paket Logistik",
    impactLabel: "Disalurkan dalam program tanggap darurat dan bakti pemuda",
    image: "/photos/whatsapp_2026-08-18_15.21.32.jpeg",
    tags: ["Pemuda Pancasila", "MPW DKI Jakarta", "MPC Jaksel", "Bakti Sosial"],
    highlight: true
  },
  {
    id: "act-3",
    title: "Silaturahmi Harmoni Sosial & Perayaan Ibadah Bersama Jemaat HKBP Kebayoran Lama",
    category: "Keagamaan & Komunitas",
    date: "Agustus 2026",
    location: "Gereja HKBP Kebayoran Lama, Jaksel",
    roleTitle: "Tokoh Masyarakat & Komunitas Keagamaan",
    description: "Menghadiri ibadah syukur, temu sapa dengan pendeta dan jemaat, serta menyerahkan tali asih sosial bagi lansia dan pemuda gereja guna mempererat tali persaudaraan dan toleransi antarumat di Jakarta Selatan.",
    impactMetric: "600+ Jemaat",
    impactLabel: "Mengikuti dialog kebangsaan dan doa bersama untuk kedamaian Jakarta",
    image: "/photos/whatsapp_2026-08-18_15.21.32_1.jpeg",
    tags: ["HKBP Kebayoran Lama", "Toleransi", "Kepedulian", "Keagamaan"],
    highlight: true
  },
  {
    id: "act-4",
    title: "Konsolidasi Akbar DPD Partai Demokrat DKI Jakarta: Gerak Cepat Kader Muda",
    category: "Relawan & Pemenangan",
    date: "Agustus 2026",
    location: "Kantor DPD Partai Demokrat DKI Jakarta",
    roleTitle: "Kader & Fungsionaris Partai Demokrat",
    description: "Menyatukan gerak langkah bersama jajaran pimpinan partai dan Ketua Umum AHY, merumuskan peta jalan advokasi kesejahteraan rakyat dan pemenangan legislatif di dapil Jakarta Selatan.",
    impactMetric: "10 Kecamatan",
    impactLabel: "Simpul koordinator wilayah telah terbentuk dan aktif bergerak",
    image: "/photos/whatsapp_2026-08-18_15.45.00_2.jpeg",
    tags: ["Partai Demokrat", "AHY", "Kader Muda", "DPRD DKI Jakarta"],
    highlight: true
  },
  {
    id: "act-5",
    title: "Musyawarah & Temu Kekerabatan Pomparan Raja Isori & Toga Parhusip Se-Jabodetabek",
    category: "Keagamaan & Komunitas",
    date: "Semester I 2026",
    location: "Jakarta",
    roleTitle: "Sekretaris Umum Pomp Op Raja Isori & Bendum Toga Parhusip",
    description: "Memimpin jalannya temu kekerabatan marga se-Jabodetabek, mengelola kas abadi sosial keluarga, menyelenggarakan santunan duka cita, serta memperkuat solidaritas warga perantauan di ibu kota.",
    impactMetric: "800+ Anggota Marga",
    impactLabel: "Tergabung dalam paguyuban persaudaraan adat se-Jabodetabek",
    image: "/photos/whatsapp_2026-08-18_16.02.26.jpeg",
    tags: ["Marga Parhusip", "Adat Batak", "Solidaritas", "Jabodetabek"]
  },
  {
    id: "act-6",
    title: "Blusukan Menyapa Pedagang Tradisional & Luncurkan Gerakan Warung Berdaya",
    category: "Dialog Warga & Blusukan",
    date: "Juli - Agustus 2026",
    location: "Pasar Tradisional Jakarta Selatan",
    roleTitle: "Inisiator Sobat Desmonth",
    description: "Turun langsung menyerap aspirasi pedagang kecil, memfasilitasi pendampingan modal usaha tanpa rente, serta menghubungkan pedagang dengan sistem pasokan pangan murah langsung dari petani.",
    impactMetric: "150+ Warung Binaan",
    impactLabel: "Menerima pelatihan promosi dan fasilitasi legalitas usaha",
    image: "/photos/whatsapp_2026-08-18_15.15.42.jpeg",
    tags: ["Blusukan Pasar", "Warung Berdaya", "Ekonomi Kerakyatan"]
  },
  {
    id: "act-7",
    title: "Penyaluran Sembako Kemanusiaan & Layanan Ambulans Siaga Gratis Bersama Relawan",
    category: "Sosial & Kemanusiaan",
    date: "Rutin Mingguan",
    location: "Kebayoran Lama & Pasar Minggu",
    roleTitle: "Pembina Relawan Kemanusiaan",
    description: "Mengoperasikan armada ambulans siaga 24 jam gratis antar-jemput pasien sakit dan lansia ke RSUD, serta membagikan ribuan paket sembako murah di gang-gang pemukiman padat Jakarta Selatan.",
    impactMetric: "2.500+ Paket Pangan",
    impactLabel: "Serta 120+ rujukan medis darurat warga terlayani gratis",
    image: "/photos/whatsapp_2026-08-18_16.58.34.jpeg",
    tags: ["Bansos Sembako", "Ambulans Gratis", "Aksi Nyata"]
  },
  {
    id: "act-8",
    title: "Temu Akbar & Program Bakti Almamater Ikatan Alumni SMPK PSKD 4 Jakarta",
    category: "Pemuda Pancasila & Ormas",
    date: "Tahun 2025 - 2026",
    location: "Jakarta",
    roleTitle: "Ketua Ikatan Alumni SMPK PSKD 4 Jakarta",
    description: "Menggalang solidaritas lintas generasi alumni, menyelenggarakan program beasiswa adik asuh bagi siswa berprestasi prasejahtera, dan donor darah tahunan.",
    impactMetric: "150 Siswa Terbantu",
    impactLabel: "Dukungan perlengkapan sekolah dan beasiswa pendidikan",
    image: "/photos/whatsapp_2026-08-18_16.57.46.jpeg",
    tags: ["PSKD 4", "Ikatan Alumni", "Pendidikan", "Kepemimpinan"]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Potret Resmi Kepemimpinan Bang Desmonth",
    category: "Kunjungan & Blusukan",
    type: "photo",
    thumbnail: "/photos/desmonth_hero_profile.jpg",
    mediaUrl: "/photos/desmonth_hero_profile.jpg",
    date: "Agustus 2026",
    location: "Jakarta Selatan",
    caption: "Bang Desmonth: Menatap masa depan Jakarta Selatan yang lebih adil, mandiri, dan berkarakter.",
    attendeesCount: "Simbol Gerakan"
  },
  {
    id: "gal-2",
    title: "Konsolidasi Pemenangan DPD Partai Demokrat DKI Jakarta",
    category: "Sarasehan & Dialog",
    type: "photo",
    thumbnail: "/photos/whatsapp_2026-08-18_15.45.00_2.jpeg",
    mediaUrl: "/photos/whatsapp_2026-08-18_15.45.00_2.jpeg",
    date: "Agustus 2026",
    location: "Kantor DPD Demokrat DKI Jakarta",
    caption: "Kebersamaan dan soliditas kader muda Partai Demokrat DKI Jakarta dalam menyongsong pesta demokrasi.",
    attendeesCount: "250+ Pengurus & Kader"
  },
  {
    id: "gal-3",
    title: "Kebersamaan Hangat Bersama Jemaat HKBP Kebayoran Lama",
    category: "Sarasehan & Dialog",
    type: "photo",
    thumbnail: "/photos/whatsapp_2026-08-18_15.21.32_1.jpeg",
    mediaUrl: "/photos/whatsapp_2026-08-18_15.21.32_1.jpeg",
    date: "Agustus 2026",
    location: "Gereja HKBP Kebayoran Lama, Jaksel",
    caption: "Momen silaturahmi, doa bersama, dan pembagian tali asih bersama jemaat dan pemuda gereja.",
    attendeesCount: "400+ Jemaat"
  },
  {
    id: "gal-4",
    title: "Blusukan Menyapa Pedagang Pasar Tradisional Jaksel",
    category: "Pemberdayaan UMKM",
    type: "photo",
    thumbnail: "/photos/whatsapp_2026-08-18_15.15.42.jpeg",
    mediaUrl: "/photos/whatsapp_2026-08-18_15.15.42.jpeg",
    date: "Agustus 2026",
    location: "Pasar Tradisional Jakarta Selatan",
    caption: "Mendengarkan langsung aspirasi para pedagang kecil terkait stabilitas harga dan permodalan mikro.",
    attendeesCount: "120+ Pedagang"
  },
  {
    id: "gal-5",
    title: "Aksi Tanggap Sosial & Bantuan Kemanusiaan",
    category: "Aksi Kemanusiaan",
    type: "photo",
    thumbnail: "/photos/whatsapp_2026-08-18_16.58.34.jpeg",
    mediaUrl: "/photos/whatsapp_2026-08-18_16.58.34.jpeg",
    date: "Agustus 2026",
    location: "Pemukiman Warga Jakarta Selatan",
    caption: "Penyaluran bantuan logistik sembako dan vitamin bagi warga prasejahtera di pemukiman padat.",
    attendeesCount: "350+ Paket Terdistribusi"
  },
  {
    id: "gal-6",
    title: "Sarasehan Pemuda & Diskusi Ruang Kreatif Jaksel",
    category: "Kegiatan Pemuda",
    type: "photo",
    thumbnail: "/photos/whatsapp_2026-08-18_16.57.46.jpeg",
    mediaUrl: "/photos/whatsapp_2026-08-18_16.57.46.jpeg",
    date: "Agustus 2026",
    location: "Ruang Kreatif Jakarta Selatan",
    caption: "Dialog interaktif bersama anak muda seputar peluang kerja, industri kreatif, dan enterpreneurship.",
    attendeesCount: "150+ Pemuda"
  },
  {
    id: "gal-7",
    title: "Sinergi Bersama Pemuda Pancasila DKI Jakarta",
    category: "Sarasehan & Dialog",
    type: "photo",
    thumbnail: "/photos/whatsapp_2026-08-18_15.21.32.jpeg",
    mediaUrl: "/photos/whatsapp_2026-08-18_15.21.32.jpeg",
    date: "Agustus 2026",
    location: "Jakarta Selatan",
    caption: "Membangun kekompakan dan kepedulian sosial bersama rekan-rekan pengurus Pemuda Pancasila.",
    attendeesCount: "180+ Anggota"
  },
  {
    id: "gal-8",
    title: "Malam Ramah Tamah & Temu Warga Akar Rumput",
    category: "Kunjungan & Blusukan",
    type: "photo",
    thumbnail: "/photos/whatsapp_2026-08-18_16.54.44.jpeg",
    mediaUrl: "/photos/whatsapp_2026-08-18_16.54.44.jpeg",
    date: "Agustus 2026",
    location: "Balai Warga Jakarta Selatan",
    caption: "Suasana akrab dan guyub saat mendengarkan masukan warga terkait penataan lingkungan dan saluran air.",
    attendeesCount: "200+ Warga"
  }
];

export const AGENDA_DATA: AgendaItem[] = [
  {
    id: "agenda-1",
    title: "Rembug Warga & Urun Rembuk Kebijakan UMKM Jakarta Selatan",
    category: "Dialog Warga",
    date: "30 Agustus 2026",
    time: "19:30 - 22:00 WIB",
    location: "Balai Warga Kebayoran Lama, Jaksel",
    address: "Jl. Ciputat Raya No. 45, Kebayoran Lama, Jakarta Selatan",
    status: "Akan Datang",
    description: "Forum musyawarah terbuka membahas kemudahan izin usaha mikro, permodalan UMKM tanpa agunan, dan solusi drainase lingkungan.",
    speaker: "Bang Desmonth & Tim Advokasi Kebijakan Sobat Desmonth",
    targetAudience: "Pelaku UMKM, Tokoh Masyarakat, Karang Taruna, & Warga RT/RW",
    isUpcoming: true,
    registrationOpen: true
  },
  {
    id: "agenda-2",
    title: "Pasar Berkah Sembako Murah & Pemeriksaan Kesehatan Gratis",
    category: "Bakti Sosial",
    date: "05 September 2026",
    time: "08:00 - 13:00 WIB",
    location: "Lapangan Serbaguna Pasar Minggu, Jaksel",
    address: "Jl. Ragunan No. 12, Pasar Minggu, Jakarta Selatan",
    status: "Akan Datang",
    description: "Penyaluran 1.000 paket sembako bersubsidi serta layanan cek tensi, gula darah, dan konsultasi dokter umum gratis bagi lansia.",
    speaker: "Bang Desmonth & Tim Medis Relawan",
    targetAudience: "Masyarakat Umum & Lansia Jakarta Selatan",
    isUpcoming: true,
    registrationOpen: true
  },
  {
    id: "agenda-3",
    title: "Workshop Digital Marketing & Fotografi Produk untuk Warung Lokal",
    category: "Pelatihan UMKM",
    date: "12 September 2026",
    time: "09:00 - 15:00 WIB",
    location: "Rumah Aspirasi Sobat Desmonth Jaksel",
    address: "Jl. Gandaria I No. 20, Kebayoran Baru, Jakarta Selatan",
    status: "Akan Datang",
    description: "Pelatihan praktis cara jualan online di Google Maps & media sosial, tips kemasan menarik, dan fasilitasi pendaftaran sertifikasi halal.",
    speaker: "Bang Desmonth & Praktisi Digital UMKM",
    targetAudience: "Pelaku Usaha Rumahan, Pedagang Warung, & Pemuda Wirausaha",
    isUpcoming: true,
    registrationOpen: true
  },
  {
    id: "agenda-4",
    title: "Konsolidasi Akbar Simpul Relawan Sobat Desmonth Se-Jaksel",
    category: "Konsolidasi Relawan",
    date: "19 September 2026",
    time: "14:00 - 17:30 WIB",
    location: "Gedung Pertemuan Pemuda Jakarta Selatan",
    address: "Jl. Trunojoyo Kav. 18, Kebayoran Baru, Jakarta Selatan",
    status: "Akan Datang",
    description: "Penguatan jaringan posko kelurahan, pembekalan materi advokasi warga, dan peluncuran peta jalan aksi pemenangan rakyat.",
    speaker: "Bang Desmonth & Koordinator Dapil",
    targetAudience: "Kordinator Wilayah, Relawan, & Simpatisan",
    isUpcoming: true,
    registrationOpen: true
  }
];

export const INITIAL_ASPIRATIONS: Aspiration[] = [
  {
    id: "asp-1",
    trackingCode: "ASP-2026-9042",
    name: "H. Ridwan Santoso",
    isAnonymous: false,
    emailOrPhone: "08129881xxxx",
    category: "Infrastruktur & Lingkungan",
    region: "Kebayoran Lama, Jaksel",
    title: "Perlu Normalisasi Saluran Air Mikro di RW 04 Kebayoran Lama",
    message: "Setiap hujan lebat lebih dari 2 jam, saluran air di gang sempit RW 04 meluap karena sedimen lumpur yang tebal. Kami memohon bantuan advokasi ke dinas terkait untuk pengerukan sedimen dan penambahan grill saluran.",
    createdAt: "25 Agustus 2026",
    status: "Dalam Advokasi",
    likesCount: 142,
    responseNote: "Aspirasi telah dikoordinasikan oleh Tim Lapangan Sobat Desmonth bersama Sudin SDA Jaksel. Jadwal pengerukan got diagendakan pekan depan.",
    priority: "Tinggi"
  },
  {
    id: "asp-2",
    trackingCode: "ASP-2026-9043",
    name: "Ibu Nurhayati (Pedagang Nasi Uduk)",
    isAnonymous: false,
    emailOrPhone: "08571234xxxx",
    category: "Ekonomi & UMKM",
    region: "Pasar Minggu, Jaksel",
    title: "Akses Permodalan Mikro untuk Pedagang Kecil Tanpa Bunga Mencekik",
    message: "Banyak pedagang di sekitar pasar terpaksa meminjam ke rentenir karena syarat bank yang rumit. Mohon program pendampingan modal bergulir bunga rendah dari Bang Desmonth bisa segera diperluas ke wilayah kami.",
    createdAt: "24 Agustus 2026",
    status: "Ditelaah Tim Ahli",
    likesCount: 98,
    responseNote: "Wilayah Anda masuk ke dalam prioritas gelombang ke-2 program Gerakan Warung Berdaya Sobat Desmonth.",
    priority: "Tinggi"
  },
  {
    id: "asp-3",
    trackingCode: "ASP-2026-9044",
    name: "Warga Jagakarsa",
    isAnonymous: true,
    emailOrPhone: "warga@jaksel.id",
    category: "Pendidikan & Beasiswa",
    region: "Jagakarsa, Jaksel",
    title: "Beasiswa Kuliah bagi Anak Yatim Berprestasi",
    message: "Keponakan saya lulus SMA dengan nilai sangat baik namun terkendala biaya uang pangkal kuliah. Bagaimana cara mendaftar program 5.000 Beasiswa Sobat Desmonth?",
    createdAt: "22 Agustus 2026",
    status: "Telah Tervalidasi",
    likesCount: 76,
    responseNote: "Data berkas telah diverifikasi tim pendidikan Sobat Desmonth. Surat rekomendasi beasiswa telah diterbitkan.",
    priority: "Sedang"
  }
];

export const CONTENT_PLAN_30_DAYS: ContentPlanItem[] = [
  {
    dayNumber: 1,
    date: "21-08-2026",
    dayName: "Jumat",
    pillar: "Profil & Latar Belakang",
    title: "Kenalan Yuk sama Bang Desmonth",
    caption: "Perkenalan singkat: siapa Bang Desmonth, dari mana asalnya, nilai-nilai yang dipegang teguh, dan kenapa terpanggil untuk berjuang mengabdi demi kemajuan warga Jakarta Selatan.",
    platform: "Instagram Feed",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 16.02.26.jpeg, WhatsApp Image 2026-08-18 at 16.00.33.jpeg",
    cta: "Follow & simak cerita lengkap perjuangannya minggu ini",
    status: "Terpublikasi",
    localImages: ["/photos/whatsapp_2026-08-18_16.02.26.jpeg", "/photos/desmonth_hero_profile.jpg"]
  },
  {
    dayNumber: 2,
    date: "22-08-2026",
    dayName: "Sabtu",
    pillar: "Politik & Partai Demokrat",
    title: "Konsolidasi Bersama DPD Partai Demokrat DKI Jakarta",
    caption: "Dokumentasi kegiatan konsolidasi struktural partai, semangat kebersamaan dan soliditas kader muda menuju Pileg DPRD DKI Jakarta.",
    platform: "Instagram Story",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.45.00 (2).jpeg",
    cta: "Dukung perjuangan Bang Desmonth bersama Partai Demokrat",
    status: "Terpublikasi",
    localImages: ["/photos/whatsapp_2026-08-18_15.45.00_2.jpeg"]
  },
  {
    dayNumber: 3,
    date: "23-08-2026",
    dayName: "Minggu",
    pillar: "Kegiatan Sosial & Kemasyarakatan",
    title: "Turun Langsung Bantu Warga",
    caption: "Cuplikan aksi nyata bakti sosial, penyerahan paket sembako, dan bantuan langsung kepada masyarakat di pemukiman padat.",
    platform: "TikTok",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 16.00.32.jpeg",
    cta: "Tag warga sekitar yang membutuhkan bantuan serupa",
    status: "Terpublikasi",
    localImages: ["/photos/whatsapp_2026-08-18_16.00.32.jpeg"]
  },
  {
    dayNumber: 4,
    date: "24-08-2026",
    dayName: "Senin",
    pillar: "Komunitas Keagamaan (HKBP)",
    title: "Kebersamaan di HKBP Kebayoran Lama",
    caption: "Momen penuh kehangatan bersama jemaat dan Pemuda Pancasila DKI Jakarta dalam perayaan, doa bersama, dan silaturahmi sosial.",
    platform: "Facebook",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.21.32 (1).jpeg",
    cta: "Bagikan ke keluarga & sahabat jemaat",
    status: "Terpublikasi",
    localImages: ["/photos/whatsapp_2026-08-18_15.21.32_1.jpeg"]
  },
  {
    dayNumber: 5,
    date: "25-08-2026",
    dayName: "Selasa",
    pillar: "Blusukan & Aspirasi Warga Jaksel",
    title: "Menyapa Warga Jakarta Selatan",
    caption: "Blusukan menyapa warga dari pintu ke pintu, mendengar keluh kesah dan harapan masyarakat langsung dari lapangan.",
    platform: "WhatsApp Broadcast",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.52.57.jpeg",
    cta: "Ceritakan aspirasimu di formulir website ini",
    status: "Terpublikasi",
    localImages: ["/photos/whatsapp_2026-08-18_15.52.57_1.jpeg"]
  },
  {
    dayNumber: 6,
    date: "26-08-2026",
    dayName: "Rabu",
    pillar: "Ajakan/CTA & Interaksi Warga",
    title: "Video Sapaan Bang Desmonth",
    caption: "Video singkat sapaan hangat dan komitmen pengabdian tulus untuk seluruh warga Jakarta Selatan.",
    platform: "Instagram Feed",
    mediaType: "Video",
    mediaRef: "WhatsApp Video 2026-08-18 at 15.20.31.mp4",
    cta: "Like, share, dan follow untuk update kegiatan terbaru",
    status: "Terpublikasi",
    localImages: ["/photos/desmonth_hero_profile.jpg"]
  },
  {
    dayNumber: 7,
    date: "27-08-2026",
    dayName: "Kamis",
    pillar: "Kegiatan Sosial & Kemasyarakatan",
    title: "Kepedulian di Masa Pandemi Bersama Kemensos",
    caption: "Kilas balik aksi kepedulian bersama Kemensos RI saat pandemi, bukti nyata konsistensi peduli warga dari masa ke masa.",
    platform: "Instagram Story",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 16.58.34.jpeg",
    cta: "Komentar 1 jika kamu ingat kondisi perjuangan saat itu",
    status: "Terpublikasi",
    localImages: ["/photos/whatsapp_2026-08-18_16.58.34.jpeg"]
  },
  {
    dayNumber: 8,
    date: "28-08-2026",
    dayName: "Jumat",
    pillar: "Profil & Latar Belakang",
    title: "Nilai & Prinsip Hidup Bang Desmonth",
    caption: "Cerita nilai-nilai yang dipegang teguh: kejujuran tanpa kompromi, kerja keras tanpa lelah, dan kepedulian sosial tanpa sekat.",
    platform: "TikTok",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.52.56.jpeg",
    cta: "Nilai apa yang paling penting buatmu? Share di komentar",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_15.52.56.jpeg"]
  },
  {
    dayNumber: 9,
    date: "29-08-2026",
    dayName: "Sabtu",
    pillar: "Blusukan & Aspirasi Warga Jaksel",
    title: "Dialog Warga: Isu Saluran & Lingkungan",
    caption: "Diskusi santai bersama warga soal isu kebersihan, penataan sampah, dan pengerukan saluran air pemukiman di Jaksel.",
    platform: "Facebook",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.52.56 (3).jpeg",
    cta: "Sampaikan isu lingkungan di sekitarmu lewat web",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_15.52.56_3.jpeg"]
  },
  {
    dayNumber: 10,
    date: "30-08-2026",
    dayName: "Minggu",
    pillar: "Politik & Partai Demokrat",
    title: "Semangat Kader Muda Demokrat",
    caption: "Highlight semangat anak-anak muda Partai Demokrat dan dukungan struktural partai untuk gerakan perubahan Jakarta Selatan.",
    platform: "WhatsApp Broadcast",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.52.56 (2).jpeg, WhatsApp Image 2026-08-18 at 15.52.56 (1).jpeg",
    cta: "Gabung jadi relawan Sobat Desmonth sekarang",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_15.52.56_2.jpeg", "/photos/whatsapp_2026-08-18_15.52.56_1.jpeg"]
  },
  {
    dayNumber: 11,
    date: "31-08-2026",
    dayName: "Senin",
    pillar: "Komunitas Keagamaan (HKBP)",
    title: "Silaturahmi Jemaat & Komunitas",
    caption: "Momen silaturahmi hangat bersama jemaat gereja dan komunitas sekitar untuk mempererat kerukunan dan tali persaudaraan.",
    platform: "Instagram Feed",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.05.23.jpeg",
    cta: "Tandai sahabat jemaat dan keluargamu",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_15.05.23.jpeg"]
  },
  {
    dayNumber: 12,
    date: "01-09-2026",
    dayName: "Selasa",
    pillar: "Ajakan/CTA & Interaksi Warga",
    title: "Polling: Isu Apa yang Paling Penting di Jaksel?",
    caption: "Konten interaktif polling isu prioritas warga Jaksel (kemudahan modal UMKM, beasiswa, banjir, atau layanan ambulans gratis).",
    platform: "Instagram Story",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.46.09.jpeg",
    cta: "Vote di polling dan sampaikan pendapatmu",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_15.46.09.jpeg"]
  },
  {
    dayNumber: 13,
    date: "02-09-2026",
    dayName: "Rabu",
    pillar: "Kegiatan Sosial & Kemasyarakatan",
    title: "Aksi Peduli Sesama & Solidaritas",
    caption: "Dokumentasi kegiatan sosial dan kunjungan komunitas bagi kelompok rentan serta santunan yatim.",
    platform: "TikTok",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.46.09 (1).jpeg, WhatsApp Image 2026-08-18 at 15.49.07.jpeg",
    cta: "Bagikan cerita kebaikan hari ini",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_15.46.09_1.jpeg", "/photos/whatsapp_2026-08-18_15.49.07.jpeg"]
  },
  {
    dayNumber: 14,
    date: "03-09-2026",
    dayName: "Kamis",
    pillar: "Blusukan & Aspirasi Warga Jaksel",
    title: "Ngobrol Bareng Pelaku UMKM",
    caption: "Kunjungan dan dialog hangat dengan pelaku UMKM warung makan dan pedagang keliling di Jakarta Selatan.",
    platform: "Facebook",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.45.00.jpeg",
    cta: "Dukung UMKM lokal, share ke teman-temanmu",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_15.45.00.jpeg"]
  },
  {
    dayNumber: 15,
    date: "04-09-2026",
    dayName: "Jumat",
    pillar: "Profil & Latar Belakang",
    title: "Perjalanan Karier & Pengabdian Bang Desmonth",
    caption: "Ringkasan jejak langkah karier profesional dan pengabdian panjang Bang Desmonth di tengah masyarakat.",
    platform: "WhatsApp Broadcast",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.45.00 (1).jpeg",
    cta: "Simak kisah lengkapnya di portal Sobat Desmonth",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_15.45.00_1.jpeg"]
  },
  {
    dayNumber: 16,
    date: "05-09-2026",
    dayName: "Sabtu",
    pillar: "Ajakan/CTA & Interaksi Warga",
    title: "Video Testimoni Warga & Dukungan",
    caption: "Cuplikan video testimoni dan harapan warga akar rumput terhadap figur Bang Desmonth yang ramah dan solutif.",
    platform: "Instagram Feed",
    mediaType: "Video",
    mediaRef: "WhatsApp Video 2026-08-18 at 16.56.13.mp4",
    cta: "Rekam testimonimu dan tag @BangDesmonth",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_16.54.44.jpeg"]
  },
  {
    dayNumber: 17,
    date: "06-09-2026",
    dayName: "Minggu",
    pillar: "Kegiatan Sosial & Kemasyarakatan",
    title: "Gotong Royong Bersama Warga Pemukiman",
    caption: "Momen kerja bakti gotong royong membersihkan lingkungan dan saluran air bersama warga sekitar.",
    platform: "Instagram Story",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.31.01.jpeg",
    cta: "Ajak tetangga ikut gotong royong berikutnya",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_15.31.01.jpeg"]
  },
  {
    dayNumber: 18,
    date: "07-09-2026",
    dayName: "Senin",
    pillar: "Komunitas Keagamaan (HKBP)",
    title: "Doa Bersama untuk Kemakmuran Jakarta Selatan",
    caption: "Momen doa bersama komunitas keagamaan memohon keberkahan dan kedamaian bagi segenap warga Jakarta.",
    platform: "TikTok",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.31.20.jpeg",
    cta: "Tuliskan harapan dan doa terbaikmu di kolom komentar",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_15.31.20.jpeg"]
  },
  {
    dayNumber: 19,
    date: "08-09-2026",
    dayName: "Selasa",
    pillar: "Politik & Partai Demokrat",
    title: "Bersama AHY & Jajaran DPD Demokrat DKI",
    caption: "Highlight kebersamaan dengan pimpinan Partai Demokrat DKI Jakarta dan Ketua Umum Agus Harimurti Yudhoyono.",
    platform: "Facebook",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.31.20 (1).jpeg, WhatsApp Image 2026-08-18 at 15.21.18.jpeg",
    cta: "Dukung kader terbaik Demokrat untuk Jakarta Selatan",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_15.31.20_1.jpeg", "/photos/whatsapp_2026-08-18_15.21.18.jpeg"]
  },
  {
    dayNumber: 20,
    date: "09-09-2026",
    dayName: "Rabu",
    pillar: "Blusukan & Aspirasi Warga Jaksel",
    title: "Cerita Hangat dari Pasar Tradisional",
    caption: "Blusukan ke pasar tradisional, ngobrol akrab dengan pedagang soal harga kebutuhan pokok sehari-hari.",
    platform: "WhatsApp Broadcast",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.15.42.jpeg",
    cta: "Cerita pengalamanmu belanja di pasar tradisional terdekat",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_15.15.42.jpeg"]
  },
  {
    dayNumber: 21,
    date: "10-09-2026",
    dayName: "Kamis",
    pillar: "Ajakan/CTA & Interaksi Warga",
    title: "Kuis Seru Berhadiah Merchandise Sobat Desmonth",
    caption: "Kuis ringan seputar sejarah dan potensi Jakarta Selatan berhadiah merchandise resmi kampanye.",
    platform: "Instagram Feed",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.05.35.jpeg",
    cta: "Jawab di kolom komentar untuk memenangkan hadiah",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_15.05.35.jpeg"]
  },
  {
    dayNumber: 22,
    date: "11-09-2026",
    dayName: "Jumat",
    pillar: "Profil & Latar Belakang",
    title: "Keluarga & Kehidupan Sehari-hari",
    caption: "Sisi personal Bang Desmonth bersama keluarga tercinta yang menjadi fondasi dan motivasi terbesar perjuangan.",
    platform: "Instagram Story",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.10.21.jpeg, WhatsApp Image 2026-08-18 at 15.15.41.jpeg",
    cta: "Keluarga adalah motivasi terbesar, bagaimana denganmu?",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_15.10.21.jpeg", "/photos/whatsapp_2026-08-18_15.15.41.jpeg"]
  },
  {
    dayNumber: 23,
    date: "12-09-2026",
    dayName: "Sabtu",
    pillar: "Kegiatan Sosial & Kemasyarakatan",
    title: "Kunjungan ke Panti & Komunitas Rentan",
    caption: "Dokumentasi kunjungan kasih dan penyerahan bantuan untuk lansia serta anak yatim di Jakarta Selatan.",
    platform: "TikTok",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.13.11.jpeg",
    cta: "Yuk ikut bergabung jadi relawan kemanusiaan",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_15.13.11.jpeg"]
  },
  {
    dayNumber: 24,
    date: "13-09-2026",
    dayName: "Minggu",
    pillar: "Blusukan & Aspirasi Warga Jaksel",
    title: "Ngobrol Bareng Anak Muda Jaksel",
    caption: "Diskusi santai dengan generasi muda soal peluang kerja digital, ruang kreatif komunitas, dan beasiswa.",
    platform: "Facebook",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 16.57.46.jpeg",
    cta: "Anak muda Jaksel, apa harapanmu untuk masa depan kota?",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_16.57.46.jpeg"]
  },
  {
    dayNumber: 25,
    date: "14-09-2026",
    dayName: "Senin",
    pillar: "Komunitas Keagamaan (HKBP)",
    title: "Kegiatan Pemuda Pancasila & Keagamaan",
    caption: "Sinergi kegiatan sosial-keagamaan bersama kader Pemuda Pancasila DKI Jakarta dan jemaat gereja.",
    platform: "WhatsApp Broadcast",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 16.57.46 (1).jpeg, WhatsApp Image 2026-08-18 at 16.58.35.jpeg",
    cta: "Mari bergabung dalam aksi bakti sosial berikutnya",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_16.57.46_1.jpeg", "/photos/whatsapp_2026-08-18_16.58.35.jpeg"]
  },
  {
    dayNumber: 26,
    date: "15-09-2026",
    dayName: "Selasa",
    pillar: "Politik & Partai Demokrat",
    title: "Rapat Konsolidasi Tim Pemenangan Pileg",
    caption: "Dokumentasi rapat strategi konsolidasi posko relawan dan saksi menuju pemilihan anggota DPRD DKI Jakarta.",
    platform: "Instagram Feed",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 16.56.38.jpeg",
    cta: "Relawan siap berjuang bersama Bang Desmonth",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_16.56.38.jpeg"]
  },
  {
    dayNumber: 27,
    date: "16-09-2026",
    dayName: "Rabu",
    pillar: "Ajakan/CTA & Interaksi Warga",
    title: "Q&A Langsung dengan Bang Desmonth",
    caption: "Sesi tanya-jawab interaktif langsung seputar program kerja dan komitmen parlemen bersama warga.",
    platform: "Instagram Story",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 16.57.07.jpeg",
    cta: "Kirim pertanyaanmu lewat fitur Tanya AI sekarang",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_16.57.07.jpeg"]
  },
  {
    dayNumber: 28,
    date: "17-09-2026",
    dayName: "Kamis",
    pillar: "Kegiatan Sosial & Kemasyarakatan",
    title: "Recap Kegiatan Sosial Sebulan Terakhir",
    caption: "Rangkuman highlight capaian kegiatan sosial dan advokasi kemasyarakatan yang telah terlaksana sebulan terakhir.",
    platform: "TikTok",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.52.57 (1).jpeg, WhatsApp Image 2026-08-18 at 15.46.06.jpeg",
    cta: "Kegiatan mana yang jadi favoritmu? Komen di bawah",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_15.52.57_1.jpeg", "/photos/whatsapp_2026-08-18_15.46.06.jpeg"]
  },
  {
    dayNumber: 29,
    date: "18-09-2026",
    dayName: "Jumat",
    pillar: "Blusukan & Aspirasi Warga Jaksel",
    title: "Malam Ramah Tamah & Guyub Warga",
    caption: "Dokumentasi acara ramah tamah malam bersama ketua RT, RW, dan warga untuk merajut kerukunan lingkungan.",
    platform: "Facebook",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 16.54.44.jpeg",
    cta: "Terima kasih atas sambutan hangat warga Jaksel!",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_16.54.44.jpeg"]
  },
  {
    dayNumber: 30,
    date: "19-09-2026",
    dayName: "Sabtu",
    pillar: "Ajakan/CTA & Interaksi Warga",
    title: "Ajakan Bersatu & Sebarkan Semangat Kebaikan",
    caption: "Penutup roadmap: ajakan tegas dan terbuka untuk bersatu mendukung serta menyebarkan semangat perjuangan Bang Desmonth menuju DPRD DKI Jakarta.",
    platform: "WhatsApp Broadcast",
    mediaType: "Foto",
    mediaRef: "WhatsApp Image 2026-08-18 at 15.42.08.jpeg",
    cta: "Follow, share, dan ajak keluarga untuk bergerak bersama Bang Desmonth!",
    status: "Terjadwal",
    localImages: ["/photos/whatsapp_2026-08-18_15.42.08.jpeg"]
  }
];
