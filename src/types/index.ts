export interface Treatment {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: string;
  image: string;
  benefits: string[];
  targets?: string[];
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  rating: number;
  treatment: string;
  image?: string;
  video?: string;
  featured: boolean;
  createdAt: Date;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  latitude: number;
  longitude: number;
  isHeadquarter: boolean;
  image: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  country?: string;
  clinic?: string;
  treatment?: string;
  date?: string;
  time?: string;
  message?: string;
  status: "new" | "contacted" | "converted" | "closed";
  createdAt: Date;
  updatedAt: Date;
}

export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  category: string;
  duration: string;
  featured: boolean;
  createdAt: Date;
}

export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}
