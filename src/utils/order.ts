import { Product, CustomOrderItem } from '../types';
import { BRAND } from '../data/catalog';

export interface CustomOrderFormData {
  fullName: string;
  whatsappNumber: string;
  city: string;
  occasion: string;
  category: string;
  colorTheme: string;
  recipientName?: string;
  eventDate?: string;
  customNotes?: string;
  budgetRange?: string;
}

export interface OrderEstimateResult {
  subtotalPKR: number;
  shippingPKR: number;
  totalPKR: number;
  isLahoreOrPattoki: boolean;
  itemCount: number;
}

/**
 * Format phone number to clean WhatsApp international digits without dashes or spaces.
 */
export function sanitizeWhatsAppPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('03')) {
    return '92' + digits.substring(1);
  }
  if (digits.startsWith('3') && digits.length === 10) {
    return '92' + digits;
  }
  return digits || BRAND.whatsappRaw;
}

/**
 * Calculate pricing estimate for Pakistani cities.
 * Lahore & Pattoki have local boutique delivery fee (Rs. 250),
 * Other cities across Pakistan have nationwide safe courier crating fee (Rs. 450).
 */
export function calculateOrderEstimate(
  items: CustomOrderItem[],
  city: string = 'Lahore'
): OrderEstimateResult {
  const subtotalPKR = items.reduce((sum, item) => {
    const unitPrice = item.product.estimatedPricePKR || 2500;
    return sum + unitPrice * item.quantity;
  }, 0);

  const normalizedCity = city.trim().toLowerCase();
  const isLahoreOrPattoki =
    normalizedCity.includes('lahore') || normalizedCity.includes('pattoki');

  const shippingPKR = items.length === 0 ? 0 : isLahoreOrPattoki ? 250 : 450;
  const totalPKR = subtotalPKR + shippingPKR;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    subtotalPKR,
    shippingPKR,
    totalPKR,
    isLahoreOrPattoki,
    itemCount,
  };
}

/**
 * Build prefilled WhatsApp URL for a specific product and customization selections.
 */
export function buildProductWhatsAppUrl(
  product: Product,
  customization?: {
    occasion?: string;
    color?: string;
    ribbon?: string;
    note?: string;
    recipient?: string;
  }
): string {
  const lines: string[] = [
    `✨ *New Inquiry from Mini Makers Web Boutique* ✨`,
    `----------------------------------------`,
    `🌸 *Item:* ${product.name}`,
    `🔖 *Category:* ${product.category}`,
  ];

  if (customization?.occasion) {
    lines.push(`🎉 *Occasion:* ${customization.occasion}`);
  }
  if (customization?.color) {
    lines.push(`🎨 *Color Theme:* ${customization.color}`);
  }
  if (customization?.ribbon) {
    lines.push(`🎀 *Ribbon Style:* ${customization.ribbon}`);
  }
  if (customization?.recipient) {
    lines.push(`👤 *Recipient Name:* ${customization.recipient}`);
  }
  if (customization?.note) {
    lines.push(`💌 *Handwritten Note:* "${customization.note}"`);
  }

  lines.push(`----------------------------------------`);
  lines.push(`💬 *Inquiry:* Assalam-o-Alaikum Mini Makers! Please share the price quote, customization availability, and delivery time for this piece.`);
  lines.push(`📍 *Location:* Lahore & Pattoki workshop dispatch`);

  const encoded = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${BRAND.whatsappRaw}?text=${encoded}`;
}

/**
 * Build prefilled WhatsApp URL for custom inquiry form submission.
 */
export function buildCustomInquiryWhatsAppUrl(data: CustomOrderFormData): string {
  const lines: string[] = [
    `🌸 *Custom Order Request - Mini Makers* 🌸`,
    `----------------------------------------`,
    `👤 *Name:* ${data.fullName || 'Valued Customer'}`,
    `📱 *WhatsApp:* ${data.whatsappNumber || 'Not provided'}`,
    `📍 *Delivery City:* ${data.city || 'Lahore'}`,
    `🎁 *Occasion:* ${data.occasion || 'Special Celebration'}`,
    `📦 *Product Style:* ${data.category || 'Custom Keepsake'}`,
    `🎨 *Color Palette:* ${data.colorTheme || 'Boutique Blush & Rose'}`,
  ];

  if (data.recipientName) {
    lines.push(`🏷️ *Name to Inscribe:* ${data.recipientName}`);
  }
  if (data.eventDate) {
    lines.push(`📅 *Required Event Date:* ${data.eventDate}`);
  }
  if (data.budgetRange) {
    lines.push(`💰 *Budget Estimate:* ${data.budgetRange}`);
  }
  if (data.customNotes) {
    lines.push(`📝 *Design Details / Vision:* "${data.customNotes}"`);
  }

  lines.push(`----------------------------------------`);
  lines.push(`Assalam-o-Alaikum! I submitted my custom gift idea via your website. Looking forward to your response and finalizing the design! ❤️`);

  const encoded = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${BRAND.whatsappRaw}?text=${encoded}`;
}

/**
 * Filter product catalog by category, search term, and tags.
 */
export function filterProducts(
  products: Product[],
  options: {
    category?: string;
    searchQuery?: string;
    tag?: string;
    subCategory?: string;
  }
): Product[] {
  return products.filter((p) => {
    if (options.category && options.category !== 'all' && p.category !== options.category) {
      return false;
    }
    if (options.subCategory && options.subCategory !== 'all') {
      const pSub = (p.subCategory || '').toLowerCase();
      const targetSub = options.subCategory.toLowerCase();
      if (!pSub.includes(targetSub)) {
        return false;
      }
    }
    if (options.tag && !p.tags.some((t) => t.toLowerCase().includes(options.tag!.toLowerCase()))) {
      return false;
    }
    if (options.searchQuery && options.searchQuery.trim().length > 0) {
      const q = options.searchQuery.trim().toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchUrdu = (p.urduName || '').toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchTag = p.tags.some((t) => t.toLowerCase().includes(q));
      if (!matchName && !matchUrdu && !matchDesc && !matchTag) {
        return false;
      }
    }
    return true;
  });
}

/**
 * Validation rules for custom order request form.
 */
export function validateCustomOrder(data: Partial<CustomOrderFormData>): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name';
  }

  const phoneDigits = (data.whatsappNumber || '').replace(/\D/g, '');
  if (phoneDigits.length < 10) {
    errors.whatsappNumber = 'Please provide a valid Pakistani WhatsApp number (e.g. 0341-4655335)';
  }

  if (!data.city || data.city.trim().length < 2) {
    errors.city = 'Please specify your delivery city';
  }

  if (!data.occasion || data.occasion.trim().length === 0) {
    errors.occasion = 'Please select the celebration occasion';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
