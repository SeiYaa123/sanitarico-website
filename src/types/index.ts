export type ServiceSlug =
  | "renovation-signature"
  | "transition-energetique"
  | "tranquillite";

export type ReviewRating = 1 | 2 | 3 | 4 | 5;

export type ProcessStepOrder = 1 | 2 | 3 | 4 | 5;

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type ServiceIcon = "Sparkles" | "Zap" | "Shield";

export interface ServiceBouquet {
  slug: ServiceSlug;
  name: string;
  tagline: string;
  description: string;
  features: readonly string[];
  priceFrom: string;
  icon: ServiceIcon;
  highlighted: boolean;
}

export interface GoogleReview {
  id: string;
  authorName: string;
  rating: ReviewRating;
  text: string;
  date: string;
}

export interface Project {
  id: string;
  title: string;
  category: ServiceSlug;
  location: string;
  before: ImageAsset;
  after: ImageAsset;
}

export interface ProcessStep {
  order: ProcessStepOrder;
  title: string;
  description: string;
  icon: string;
}

export interface Certification {
  name: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}
