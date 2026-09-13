export interface OrganizationExperience {
  id: number;
  role: string;
  organization: string;
  period: string;
  category: 'Ormas & Kepemudaan' | 'Paguyuban & Pasar' | 'Adat & Marga' | 'Partai & Politik' | 'Relawan Pemenangan' | 'Alumni & Pendidikan';
  description: string;
  highlight?: boolean;
}

export interface ProfileData {
  name: string;
  subtitle: string;
  tagline: string;
  bio: string[];
  motto: string;
  location: string;
  education: {
    degree: string;
    institution: string;
    year: string;
    focus: string;
  }[];
  experience: {
    year: string;
    role: string;
    organization: string;
    description: string;
  }[];
  organizations?: OrganizationExperience[];
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
  awards: {
    year: string;
    title: string;
    issuer: string;
  }[];
  stats: {
    value: string;
    label: string;
    detail: string;
  }[];
}

export interface VisionMission {
  grandVision: string;
  visionNarrative: string;
  missions: {
    id: number;
    title: string;
    description: string;
    focusAreas: string[];
    targetOutput: string;
    icon: string;
  }[];
  pillars: {
    title: string;
    metric: string;
    description: string;
  }[];
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
  location: string;
  author: string;
  tags: string[];
  featured?: boolean;
  status?: 'Publik' | 'Draf';
  viewsCount?: number;
}

export interface ActivityItem {
  id: string;
  title: string;
  category: 'Pasar Modern & UMKM' | 'Sosial & Kemanusiaan' | 'Pemuda Pancasila & Ormas' | 'Keagamaan & Komunitas' | 'Dialog Warga & Blusukan' | 'Relawan & Pemenangan';
  date: string;
  location: string;
  description: string;
  impactMetric: string;
  impactLabel: string;
  image: string;
  additionalImages?: string[];
  roleTitle?: string;
  tags: string[];
  highlight?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Kunjungan & Blusukan' | 'Aksi Kemanusiaan' | 'Sarasehan & Dialog' | 'Pemberdayaan UMKM' | 'Kegiatan Pemuda';
  type: 'photo' | 'video';
  thumbnail: string;
  mediaUrl: string;
  date: string;
  location: string;
  caption: string;
  attendeesCount?: string;
}

export interface AgendaItem {
  id: string;
  title: string;
  category: 'Dialog Warga' | 'Bakti Sosial' | 'FGD Kebijakan' | 'Pelatihan UMKM' | 'Konsolidasi Relawan';
  date: string;
  time: string;
  location: string;
  address: string;
  status: 'Akan Datang' | 'Sedang Berlangsung' | 'Terlaksana';
  description: string;
  speaker: string;
  targetAudience: string;
  isUpcoming: boolean;
  registrationOpen: boolean;
}

export interface Aspiration {
  id: string;
  trackingCode: string;
  name: string;
  isAnonymous: boolean;
  emailOrPhone: string;
  category: 'Ekonomi & UMKM' | 'Pendidikan & Beasiswa' | 'Kesehatan & Lansia' | 'Infrastruktur & Lingkungan' | 'Hukum & Layanan Publik' | 'Pemuda & Olahraga' | 'Lainnya';
  region: string;
  title: string;
  message: string;
  createdAt: string;
  status: 'Diterima' | 'Ditelaah Tim Ahli' | 'Dalam Advokasi' | 'Telah Tervalidasi';
  likesCount: number;
  responseNote?: string;
  priority: 'Tinggi' | 'Sedang' | 'Biasa';
}

export interface VolunteerPass {
  id: string;
  name: string;
  phone: string;
  city: string;
  focusDivision: string;
  memberNumber: string;
  joinedDate: string;
}

export interface ContentPlanItem {
  dayNumber: number;
  date: string;
  dayName: string;
  pillar: string;
  title: string;
  caption: string;
  platform: string;
  mediaType: string;
  mediaRef: string;
  cta: string;
  status: string;
  localImages: string[];
}
