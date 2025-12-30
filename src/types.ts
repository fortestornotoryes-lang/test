
export interface ServiceItem {
  id: string;
  name: string;
  description?: string; // Краткое описание услуги
  price: string;
  category: 'base' | 'restore' | 'premium';
}

export interface GalleryImage {
  url: string;
  beforeUrl?: string; // Опциональное фото "до"
  title: string;
  description: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  workHours: string;
  googleMapsUrl: string;
  instagram: string;
}