import {
  ServiceItem,
  PricingPackage,
  Barber,
  GalleryItem,
  ReviewItem,
  BlogPost,
  ShopFeature,
  Branch
} from '@/types/barbershop';

export const BRANCHES_DATA: Branch[] = [
  {
    id: 'manislor',
    name: 'Cabang Utama Manislor',
    shortName: 'Manislor (Utama)',
    isMain: true,
    tag: 'CABANG UTAMA',
    address: 'Manislor, Kec. Jalaksana, Kabupaten Kuningan, Jawa Barat',
    mapUrl: 'https://maps.app.goo.gl/wBWvPyZ5u44wH1mn8?g_st=iw',
    embedQuery: 'Manislor, Jalaksana, Kuningan, Jawa Barat',
    hours: 'Senin - Minggu: 10:00 - 21:00 WIB'
  },
  {
    id: 'jagabaya',
    name: 'Cabang Jagabaya',
    shortName: 'Jagabaya',
    isMain: false,
    tag: 'CABANG 2',
    address: 'Jagabaya, Kabupaten Kuningan, Jawa Barat',
    mapUrl: 'https://maps.app.goo.gl/29U9Rf6YVygTJ5x16?g_st=iw',
    embedQuery: 'Jagabaya, Kuningan, Jawa Barat',
    hours: 'Senin - Minggu: 10:00 - 21:00 WIB'
  },
  {
    id: 'jalaksana',
    name: 'Cabang Jalaksana',
    shortName: 'Jalaksana',
    isMain: false,
    tag: 'CABANG 3',
    address: 'Jalaksana, Kabupaten Kuningan, Jawa Barat',
    mapUrl: 'https://maps.app.goo.gl/8pAb44x7tCxYz9G57?g_st=iw',
    embedQuery: 'Jalaksana, Kuningan, Jawa Barat',
    hours: 'Senin - Minggu: 10:00 - 21:00 WIB'
  }
];

export const SHOP_INFO = {
  name: 'CAHAYA BARBERSHOP',
  city: 'KUNINGAN',
  tagline: 'Look Sharp. Feel Confident.',
  description: 'Pengalaman grooming & styling pria premium di Kuningan dengan 3 cabang strategis (Manislor, Jagabaya, Jalaksana). Precision haircut, hair color, korean perm, hingga cukur panggilan & hairdo wedding.',
  phone: '+62 852-2123-9852',
  whatsapp: '6285221239852',
  logo: '/images/logo.png',
  instagram: '@cahayabarbershop',
  mainAddress: 'Manislor, Kec. Jalaksana, Kabupaten Kuningan, Jawa Barat (Cabang Utama)',
  hours: {
    weekdays: 'Senin - Minggu: 10:00 - 21:00 WIB',
    status: 'Buka Setiap Hari di 3 Cabang'
  },
  stats: [
    { value: '3 Cabang', label: 'Lokasi Strategis', detail: 'Manislor, Jagabaya, Jalaksana' },
    { value: '5.0 ★', label: 'Google Rating', detail: 'Based on 500+ reviews' },
    { value: '1,500+', label: 'Happy Clients', detail: 'Pelanggan Setia' },
    { value: '100%', label: 'Kepuasan', detail: 'Garansi Hasil Rapi' }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  // --- HAIRCUT ---
  {
    id: 'cukur-saja',
    category: 'haircut',
    name: 'Cukur Saja',
    price: 'Rp 30.000',
    numericPrice: 30000,
    time: '15-25 mins',
    desc: 'Potongan rambut presisi sesuai bentuk kepala dan karakter wajah dengan finishing handuk segar.',
    iconName: 'Scissors',
    tag: 'ESSENTIAL'
  },
  {
    id: 'cukur-cuci',
    category: 'haircut',
    name: 'Cukur + Cuci',
    price: 'Rp 35.000',
    numericPrice: 35000,
    time: '30 mins',
    desc: 'Cukur presisi ditambah keramas pembersih kulit kepala dan blow dry styling siap tampil rapi.',
    iconName: 'Sparkles',
    tag: 'POPULAR'
  },
  {
    id: 'cukur-cuci-pijit',
    category: 'haircut',
    name: 'Cukur + Cuci + Pijit',
    price: 'Rp 45.000',
    numericPrice: 45000,
    time: '45 mins',
    desc: 'Paket komplit favorit: Cukur presisi, keramas scalp refresh, dan pijatan rileks leher & pundak.',
    iconName: 'Crown',
    tag: 'RECOMMENDED'
  },
  {
    id: 'cukur-by-yayat',
    category: 'haircut',
    name: 'Cukur by Yayat',
    price: 'Rp 50.000',
    numericPrice: 50000,
    time: '30-45 mins',
    desc: 'Layanan potong rambut eksklusif langsung ditangani oleh Master Barber Yayat dengan teknik signature.',
    iconName: 'Award',
    tag: 'SIGNATURE'
  },
  {
    id: 'cukur-panggilan',
    category: 'haircut',
    name: 'Cukur Panggilan (Home Service)',
    price: 'Rp 150.000',
    numericPrice: 150000,
    time: 'Fleksibel',
    desc: 'Layanan barber datang langsung ke rumah, kantor, atau hotel Anda dengan peralatan steril dan lengkap.',
    iconName: 'Flame',
    tag: 'HOME SERVICE'
  },
  {
    id: 'hairdo-wedding',
    category: 'haircut',
    name: 'Hairdo Wedding dll',
    price: 'Rp 400.000',
    numericPrice: 40000,
    time: 'Sesuai Acara',
    desc: 'Penataan rambut & grooming profesional untuk pengantin pria (groomsmen), prewedding, wisuda, atau event formal.',
    iconName: 'Crown',
    tag: 'SPECIAL EVENT'
  },

  // --- HAIR COLOR ---
  {
    id: 'hair-color-fashion',
    category: 'color',
    name: 'Fashion Color',
    price: 'Rp 200.000 – Rp 350.000',
    time: '75-105 mins',
    desc: 'Pewarnaan rambut trendi (Ash grey, blonde, pastel, burgundy dll) dengan cat rambut berkualitas tinggi.',
    iconName: 'Palette',
    tag: 'TRENDING'
  },
  {
    id: 'hairlight',
    category: 'color',
    name: 'Hairlight / Highlight',
    price: 'Rp 200.000 – Rp 300.000',
    time: '45-75 mins',
    desc: 'Aksen highlight rambut berdimensi yang memberikan efek tekstur dan volume modern pada rambut pria.',
    iconName: 'Palette',
    tag: 'DIMENSION'
  },
  {
    id: 'bleach',
    category: 'color',
    name: 'Bleaching Rambut',
    price: 'Mulai Rp 150.000',
    time: '30-45 mins',
    desc: 'Proses lightening dasar untuk mengangkat pigmen rambut sebelum pewarnaan fashion dengan pelindung batang rambut.',
    iconName: 'Zap',
    tag: 'LIGHTENING'
  },
  {
    id: 'hair-color-bassic',
    category: 'color',
    name: 'Basic Color (Hitam, Coklat dll)',
    price: 'Rp 40.000',
    numericPrice: 40000,
    time: '15-25 mins',
    desc: 'Pewarnaan alami untuk menutup uban atau menggelapkan rambut dengan hasil natural berkilau.',
    iconName: 'ShieldCheck',
    tag: 'NATURAL'
  },

  // --- OTHERS (PERM & TEXTURE) ---
  {
    id: 'korean-perm',
    category: 'others',
    name: 'Korean Perm',
    price: 'Rp 200.000',
    numericPrice: 200000,
    time: '75-105 mins',
    desc: 'Pengeritingan gaya Korea untuk menghasilkan volume wavy alami, comma hair, atau dandy look kekinian.',
    iconName: 'Waves',
    tag: 'K-STYLE'
  },
  {
    id: 'down-perm',
    category: 'others',
    name: 'Down Perm',
    price: 'Mulai Rp 100.000+',
    time: '30-45 mins',
    desc: 'Treatment penjinak rambut samping yang jabrik/berdiri agar rapi, ramping, dan mudah ditata tanpa gel.',
    iconName: 'Waves',
    tag: 'NEAT SIDES'
  },
  {
    id: 'perming',
    category: 'others',
    name: 'Perming Texture',
    price: 'Rp 200.000 – Rp 300.000',
    time: '75-105 mins',
    desc: 'Teknik pengeritingan tekstur rambut untuk menciptakan look afro, curl spiral, atau messy textured crop.',
    iconName: 'Waves',
    tag: 'TEXTURED'
  },
  {
    id: 'root-lift',
    category: 'others',
    name: 'Root Lift',
    price: 'Mulai Rp 100.000+',
    time: '30-45 mins',
    desc: 'Mengangkat akar rambut yang lepek dan tipis sehingga rambut tampak lebih tebal, bervolume, dan berdimensi.',
    iconName: 'Sparkles',
    tag: 'VOLUME UP'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'cukur-basic',
    name: 'CUKUR + CUCI',
    subtitle: 'Daily Fresh & Clean Grooming',
    price: 'Rp 35.000',
    numericPrice: 35000,
    highlighted: false,
    features: [
      'Konsultasi Bentuk Wajah & Gaya',
      'Cukur Presisi Haircut',
      'Keramas Cuci Rambut Bersih',
      'Blow Dry & Styling Pomade'
    ]
  },
  {
    id: 'cukur-signature-pijit',
    name: 'CUKUR + CUCI + PIJIT',
    subtitle: 'Pilihan Terfavorit Pelanggan',
    price: 'Rp 45.000',
    numericPrice: 45000,
    highlighted: true,
    popularBadge: 'PALING LARIS',
    features: [
      'Konsultasi Gaya Menyeluruh',
      'Precision Haircut Custom',
      'Cuci Rambut + Scalp Massage',
      'Pijat Leher & Pundak Rileks',
      'Handuk Hangat & Styling Premium'
    ]
  },
  {
    id: 'cukur-by-yayat-pack',
    name: 'CUKUR BY YAYAT',
    subtitle: 'Master Barber Experience',
    price: 'Rp 50.000',
    numericPrice: 50000,
    highlighted: false,
    popularBadge: 'FOUNDER CHOICE',
    features: [
      'Ditangani Langsung oleh Yayat',
      'Detail Razor Fade & Geometry Khusus',
      'Finishing Cuci & Scalp Refresh',
      'Saran Perawatan Rambut Personal',
      'Signature Styling Pomade'
    ]
  }
];

export const BARBERS_DATA: Barber[] = [
  {
    id: 1,
    name: 'Yayat',
    role: 'Lead Master Barber & Founder',
    exp: '10+ Tahun Pengalaman',
    specialty: 'Signature Precision Cut, Classic Fade, Razor Geometry & Style Consultation',
    image: '/images/barbers/yayat.jpeg',
    imagePosition: 'center 15%',
    instagram: '@cahayabarbershop',
    isFounder: true
  },
  {
    id: 2,
    name: 'Eryanto',
    role: 'Senior Master Barber',
    exp: '7+ Tahun Pengalaman',
    specialty: 'Classic Haircut, Scissor Work, Pompadour & Scalp Treatment',
    image: '/images/barbers/eryanto.jpeg',
    imagePosition: 'center 18%',
    instagram: '@cahayabarbershop'
  },
  {
    id: 3,
    name: 'Maman',
    role: 'Master Barber & Stylist',
    exp: '6+ Tahun Pengalaman',
    specialty: 'Precision Fade, Taper Cut, Side Part & Hair Styling',
    image: '/images/barbers/maman.jpeg',
    imagePosition: 'center 18%',
    instagram: '@cahayabarbershop'
  },
  {
    id: 4,
    name: 'Asep',
    role: 'Fade & Beard Specialist',
    exp: '5+ Tahun Pengalaman',
    specialty: 'Skin Fade, Burst Fade, Beard Sculpting & Hot Towel Shave',
    image: '/images/barbers/asep.jpeg',
    imagePosition: 'center 18%',
    instagram: '@cahayabarbershop'
  },
  {
    id: 5,
    name: 'Ilham',
    role: 'Color & Texture Specialist',
    exp: '4+ Tahun Pengalaman',
    specialty: 'Korean Perm, Down Perm, Root Lift & Fashion Color',
    image: '/images/barbers/ilham.jpeg',
    imagePosition: 'center 20%',
    instagram: '@cahayabarbershop'
  },
  {
    id: 6,
    name: 'Aditia',
    role: 'Modern Style Consultant',
    exp: '4+ Tahun Pengalaman',
    specialty: 'Textured Crop, Mullet, Two Block & Comma Hair',
    image: '/images/barbers/aditia.jpeg',
    imagePosition: 'center 30%',
    instagram: '@cahayabarbershop'
  },
  {
    id: 7,
    name: 'Hera',
    role: 'Creative Barber & Groomer',
    exp: '3+ Tahun Pengalaman',
    specialty: 'Modern Gentlemen Cut, Hair Wash & Head Massage',
    image: '/images/barbers/hera.jpeg',
    imagePosition: '50% 18%',
    instagram: '@cahayabarbershop'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 1,
    category: 'cuts',
    title: 'Precision Taper & Crop',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800',
    description: 'Potongan rambut rapi dengan gradasi halus dan tekstur atas natural.'
  },
  {
    id: 2,
    category: 'interior',
    title: 'Suasana Studio Cahaya Barbershop',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
    description: 'Kursi barber nyaman, AC sejuk, dan pencahayaan studio terbaik.'
  },
  {
    id: 3,
    category: 'beard',
    title: 'Detailing Garis Rapi',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800',
    description: 'Kerapian garis batas rambut dan kumis dengan razor tajam steril.'
  },
  {
    id: 4,
    category: 'process',
    title: 'Treatment Cuci & Pijat Kepala',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800',
    description: 'Sensasi relaksasi maksimal setelah potong rambut.'
  },
  {
    id: 5,
    category: 'cuts',
    title: 'Korean Perm & Texture Look',
    image: '/images/korean-perm.jpg',
    description: 'Tekstur bergelombang alami gaya Korea yang mudah diatur.'
  },
  {
    id: 6,
    category: 'interior',
    title: 'Peralatan Steril & Higienis',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800',
    description: 'Setiap gunting, clipper, dan handuk dibersihkan secara steril.'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 1,
    name: 'Andika Wijaya',
    role: 'Pelanggan Setia',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    review: 'Pelayanannya mantap banget! Potong sama Kang Yayat hasilnya rapi presisi, cuci + pijitnya bikin seger. Barbershop nomor satu di Kuningan!',
    service: 'Cukur by Yayat + Cuci + Pijit'
  },
  {
    id: 2,
    name: 'Farhan Hidayat',
    role: 'Eksekutif Muda',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    review: 'Nyobain Korean Perm dan Down Perm di Cahaya Barbershop hasilnya di luar ekspektasi, rambut samping ga jabrik lagi dan gampang ditata.',
    service: 'Korean Perm + Down Perm'
  },
  {
    id: 3,
    name: 'Rian Putra',
    role: 'Kreator Konten',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    review: 'Tempatnya bersih, wangi, AC dingin. Booking lewat WA gampang banget tanpa harus antre lama. Rekomendasi buat yang mau tampil ganteng maksimal.',
    service: 'Cukur + Cuci + Pijit'
  }
];

export const BLOG_DATA: BlogPost[] = [
  {
    id: 1,
    title: 'Tren Model Rambut Pria Terbaik Tahun Ini di Cahaya Barbershop',
    date: 'Sep 18, 2026',
    category: 'Style Guide',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600',
    excerpt: 'Simak tren potongan rambut pria mulai dari Taper Fade, Textured French Crop, hingga Comma Hair.',
    content: 'Model rambut klasik dan modern seperti Low Fade, French Crop bertekstur, serta Korean Comma Hair tetap menjadi idaman pria modern. Di Cahaya Barbershop, barber kami siap menyesuaikan potongan dengan lekuk kepala dan tekstur rambut Anda.',
    readTime: '4 min read'
  },
  {
    id: 2,
    title: 'Manfaat Down Perm dan Korean Perm untuk Rambut Asia yang Kaku',
    date: 'Aug 29, 2026',
    category: 'Treatment',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600',
    excerpt: 'Ketahui bagaimana Down Perm dan Korean Perm mengatasi rambut samping yang jabrik dan sulit diatur.',
    content: 'Banyak pria di Indonesia menghadapi masalah rambut samping yang mengembang (jabrik). Melalui perawatan Down Perm di Cahaya Barbershop, rambut samping akan tertidur rapi secara instan selama berminggu-minggu tanpa perlu banyak pomade.',
    readTime: '5 min read'
  },
  {
    id: 3,
    title: 'Tips Merawat Rambut Setelah Pewarnaan Fashion & Bleaching',
    date: 'Aug 10, 2026',
    category: 'Hair Care',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600',
    excerpt: 'Panduan menjaga kilau warna dan kelembapan rambut setelah proses cat dan bleaching.',
    content: 'Setelah melakukan fashion coloring atau bleaching, rambut membutuhkan shampoo khusus dan vitamin agar warna tidak cepat luntur serta batang rambut tetap lembut ternutrisi.',
    readTime: '3 min read'
  }
];

export const FEATURES_DATA: ShopFeature[] = [
  {
    iconName: 'Scissors',
    title: 'POTONGAN PRESISI',
    desc: 'Setiap potongan rambut dikerjakan dengan teknik geometri teliti dan garis razor tajam yang rapi.'
  },
  {
    iconName: 'Sparkles',
    title: 'KENYAMANAN & RELAKSASI',
    desc: 'Ruang tunggu ber-AC sejuk, kursi ergonomis, keramas bersih menyegarkan, dan pijatan rileks.'
  },
  {
    iconName: 'Crown',
    title: 'PERM & COLORING MODERN',
    desc: 'Melayani Korean Perm, Down Perm, Bleaching, hingga Fashion Color kekinian dengan bahan berkualitas.'
  },
  {
    iconName: 'Award',
    title: 'MASTER BARBER YAYAT',
    desc: 'Dikerjakan langsung oleh barber berpengalaman dengan standar higienis dan layanan ramah.'
  }
];

export const TIME_SLOTS = [
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:30',
  '19:30',
  '20:30'
];
