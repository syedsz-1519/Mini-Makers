export type CategoryId = 
  | 'all'
  | 'bouquets'
  | 'wedding'
  | 'gift-boxes'
  | 'frames'
  | 'baskets'
  | 'accessories'
  | 'greeting-boxes';

export interface Product {
  id: string;
  name: string;
  urduName?: string;
  category: CategoryId;
  subCategory?: string;
  tagline: string;
  description: string;
  priceText: string;
  estimatedPricePKR?: number;
  image: string;
  gallery?: string[];
  tags: string[];
  badge?: string;
  customizable: boolean;
  featured?: boolean;
  customizationOptions?: {
    occasions?: string[];
    colors?: string[];
    ribbons?: string[];
    addOns?: string[];
  };
}

export interface CustomOrderItem {
  product: Product;
  selectedOccasion?: string;
  selectedColor?: string;
  selectedRibbon?: string;
  customNote?: string;
  recipientName?: string;
  quantity: number;
}

export interface Review {
  id: string;
  customerName: string;
  location: string;
  date: string;
  rating: number;
  occasion: string;
  reviewText: string;
  productName: string;
  verifiedWhatsApp: boolean;
  chatSnippet?: string;
  image?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
