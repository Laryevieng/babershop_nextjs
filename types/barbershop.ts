export type ServiceCategory = 'all' | 'haircut' | 'color' | 'others';

export interface ServiceItem {
  id: string;
  category: 'haircut' | 'color' | 'others';
  name: string;
  price: string;
  numericPrice?: number;
  time?: string;
  desc: string;
  iconName: 'Scissors' | 'Sparkles' | 'Crown' | 'Flame' | 'ShieldCheck' | 'Award' | 'Palette' | 'Waves' | 'Zap';
  tag?: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  numericPrice?: number;
  highlighted: boolean;
  popularBadge?: string;
  features: string[];
}

export interface Barber {
  id: number;
  name: string;
  role: string;
  exp: string;
  specialty: string;
  image: string;
  instagram: string;
}

export type GalleryCategory = 'all' | 'cuts' | 'beard' | 'interior' | 'process';

export interface GalleryItem {
  id: number;
  category: 'cuts' | 'beard' | 'interior' | 'process';
  title: string;
  image: string;
  description?: string;
}

export interface ReviewItem {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
  service?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
  readTime?: string;
}

export interface Branch {
  id: string;
  name: string;
  shortName: string;
  isMain?: boolean;
  tag: string;
  address: string;
  mapUrl: string;
  embedQuery: string;
  hours: string;
}

export interface BookingState {
  name: string;
  phone: string;
  branch: string;
  service: string;
  barber: string;
  date: string;
  time: string;
  notes: string;
}

export interface ShopFeature {
  iconName: 'Scissors' | 'Sparkles' | 'Crown' | 'Award' | 'ShieldCheck' | 'Clock';
  title: string;
  desc: string;
}
