import React, { useState } from 'react';
import {
  MessageCircle,
  Sparkles,
  ChevronRight,
  Send,
  Upload,
  CheckCircle2,
  Heart,
  Palette,
  Calendar,
  MapPin,
  Clock,
} from 'lucide-react';
import { BRAND } from '../data/catalog';
import {
  CustomOrderFormData,
  validateCustomOrder,
  buildCustomInquiryWhatsAppUrl,
} from '../utils/order';

interface CustomOrderScreenProps {
  onNavigate: (screen: string) => void;
}

export const CustomOrderScreen: React.FC<CustomOrderScreenProps> = ({
  onNavigate,
}) => {
  const [formData, setFormData] = useState<CustomOrderFormData>({
    fullName: '',
    whatsappNumber: '',
    city: 'Lahore',
    occasion: 'Birthday',
    category: 'Everlasting Bouquet',
    colorTheme: 'Blush Rose & Cream',
    recipientName: '',
    eventDate: '',
    customNotes: '',
    budgetRange: 'Rs. 2,000 - Rs. 4,000',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const occasions = [
    'Birthday',
    'Nikkah / Shadi',
    'Engagement / Baat Pakki',
    'Bridal Shower / Mayun',
    'Anniversary',
    'Graduation',
    'Baby Shower / Newborn',
    'Eid Mubarak',
    'Apology / Thank You',
  ];

  const categories = [
    'Everlasting Chenille Bouquet',
    'Satin Ribbon Rose Bouquet',
    'Doodh Pilai Glass & Tray Set',
    'Nikkah Signature Feather Pen',
    'Engagement Arch Ring Platter',
    'Mehndi Thaali & Plates',
    'Alphabetic Wooden Snack Box',
    'Surprise Piñata Smash Box',
    'Memory Scrapbook Album',
    'Customized Frame / Plaque',
    'Handwoven Treat Basket',
  ];

  const colorPalettes = [
    'Blush Rose & Cream',
    'Velvet Scarlet Red',
    'Lavender & Soft Lilac',
    'Pastel Baby Blue & Peach',
    'Royal Emerald & Champagne Gold',
    'Maroon & Antique Gota Zari',
    'Custom Theme (Match My Dress)',
  ];

  const cities = [
    'Lahore (Workshop / Express)',
    'Pattoki (Workshop / Express)',
    'Karachi',
    'Islamabad',
    'Rawalpindi',
    'Faisalabad',
    'Multan',
    'Sialkot',
    'Gujranwala',
    'Peshawar',
    'Quetta',
    'Other City / Town in PK',
  ];

  const budgetOptions = [
    'Under Rs. 2,000',
    'Rs. 2,000 - Rs. 4,000',
    'Rs. 4,000 - Rs. 7,000',
    'Rs. 7,000+ Luxury Set',
  ];

  const handleInputChange = (field: keyof CustomOrderFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateCustomOrder(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setSubmitted(true);

    const waUrl = buildCustomInquiryWhatsAppUrl(formData);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full pb-28 bg-[#FFF8F3] text-[#3A2A30]">
      {/* Header */}
      <section className="py-10 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-[#FBE4EA]/50">
        <div className="max-w-7xl mx-auto text-center max-w-2xl">
          <nav className="flex items-center justify-center gap-1.5 text-xs text-[#3A2A30]/70 mb-3" aria-label="Breadcrumb">
            <button onClick={() => onNavigate('home')} className="hover:text-[#B03A63] transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="font-semibold text-[#B03A63]">Custom Order Studio</span>
          </nav>

          <span className="text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 text-[#B03A63]">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
            <span>Handcrafted to Order · Lahore | Pattoki</span>
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-1 text-[#3A2A30]">
            Custom Order Request
          </h1>
          <p className="text-sm text-[#3A2A30]/80 mt-2 max-w-xl mx-auto">
            Have a custom Pinterest picture or a unique concept? Fill in your details below and chat directly with our Lahore workshop lead.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Friendly Illustration & Storytelling */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="p-8 rounded-[32px] border border-[#F4B6C6] bg-gradient-to-b from-[#FFF8F3] via-[#FBE4EA] to-[#FFF8F3] relative overflow-hidden shadow-xs">
              <div className="w-14 h-14 rounded-full bg-[#FBE4EA] text-[#B03A63] flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-[#B03A63] fill-[#B03A63]/20" />
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3 text-[#3A2A30]">
                Tell us your idea, we'll make it real.
              </h2>

              <p className="font-serif italic text-base text-[#B03A63] mb-6">
                Your Vision, Our Handcrafted Legacy
              </p>

              <p className="text-sm text-[#3A2A30]/85 leading-relaxed mb-6">
                Whether you need a bouquet matching your bridal lehenga colors, a letter box spelling your partner’s name, or emergency same-day delivery in Lahore, we handle each piece with pure personal care.
              </p>

              {/* Workflow Highlights */}
              <div className="space-y-4 pt-4 border-t border-[#F4B6C6]/40 text-xs text-[#3A2A30]">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#B03A63] text-white flex items-center justify-center shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold">Instant Price Quote</h4>
                    <p className="text-[#3A2A30]/75">No hidden charges. Exact quote provided in Pakistani Rupees (PKR).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#B03A63] text-white flex items-center justify-center shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold">Video &amp; Photo Proof</h4>
                    <p className="text-[#3A2A30]/75">We send photos and videos of your item before parcel dispatch.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#B03A63] text-white flex items-center justify-center shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold">Direct Workshop Support</h4>
                    <p className="text-[#3A2A30]/75">Message anytime on WhatsApp hotline: 0341-4655335.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Message Preview Card */}
            <div className="mt-6 p-5 rounded-2xl border border-[#F4B6C6]/60 bg-white text-xs shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold uppercase tracking-wider text-[#B03A63]">
                  Live WhatsApp Message Preview:
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
              </div>
              <div className="p-3 rounded-xl bg-[#FFF8F3] font-mono text-[11px] text-[#3A2A30] leading-relaxed whitespace-pre-line border border-[#F4B6C6]/40">
                {`🌸 Custom Order Request - Mini Makers 🌸
👤 Name: ${formData.fullName || '[Your Name]'}
📱 WhatsApp: ${formData.whatsappNumber || '[Your Phone]'}
📍 Delivery City: ${formData.city}
🎁 Occasion: ${formData.occasion}
📦 Category: ${formData.category}
🎨 Palette: ${formData.colorTheme}`}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-10 rounded-[32px] border border-[#F4B6C6] bg-white shadow-lg"
            >
              <h3 className="font-serif text-2xl font-bold mb-6 text-[#3A2A30]">Your Order Details</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Full Name */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5 text-[#3A2A30]/80">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="e.g. Zainab Fatima"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs outline-none border transition-colors ${
                      errors.fullName
                        ? 'border-red-500 bg-red-500/10'
                        : 'bg-[#FFF8F3] border-[#F4B6C6] text-[#3A2A30] focus:border-[#B03A63]'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[10px] text-red-500 mt-1 block">{errors.fullName}</span>
                  )}
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5 text-[#3A2A30]/80">
                    WhatsApp Number (Pakistan) *
                  </label>
                  <input
                    type="text"
                    value={formData.whatsappNumber}
                    onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                    placeholder="e.g. 0341-4655335"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs outline-none border transition-colors ${
                      errors.whatsappNumber
                        ? 'border-red-500 bg-red-500/10'
                        : 'bg-[#FFF8F3] border-[#F4B6C6] text-[#3A2A30] focus:border-[#B03A63]'
                    }`}
                  />
                  {errors.whatsappNumber && (
                    <span className="text-[10px] text-red-500 mt-1 block">{errors.whatsappNumber}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Delivery City */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5 text-[#3A2A30]/80">
                    Delivery City *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl text-xs outline-none border bg-[#FFF8F3] border-[#F4B6C6] text-[#3A2A30] focus:border-[#B03A63]"
                  >
                    {cities.map((c) => (
                      <option key={c} value={c} className="bg-white">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Occasion */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5 text-[#3A2A30]/80">
                    Celebration Occasion *
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => handleInputChange('occasion', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl text-xs outline-none border bg-[#FFF8F3] border-[#F4B6C6] text-[#3A2A30] focus:border-[#B03A63]"
                  >
                    {occasions.map((o) => (
                      <option key={o} value={o} className="bg-white">
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Product Category Style */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5 text-[#3A2A30]/80">
                    Preferred Product Style
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl text-xs outline-none border bg-[#FFF8F3] border-[#F4B6C6] text-[#3A2A30] focus:border-[#B03A63]"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat} className="bg-white">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Color Palette */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5 text-[#3A2A30]/80">
                    Color Theme / Ribbon
                  </label>
                  <select
                    value={formData.colorTheme}
                    onChange={(e) => handleInputChange('colorTheme', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl text-xs outline-none border bg-[#FFF8F3] border-[#F4B6C6] text-[#3A2A30] focus:border-[#B03A63]"
                  >
                    {colorPalettes.map((cp) => (
                      <option key={cp} value={cp} className="bg-white">
                        {cp}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Name / Inscription */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5 text-[#3A2A30]/80">
                    Personalized Name / Letter (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.recipientName}
                    onChange={(e) => handleInputChange('recipientName', e.target.value)}
                    placeholder="e.g. Letter 'A' or 'Bilal & Hira'"
                    className="w-full px-4 py-2.5 rounded-xl text-xs outline-none border bg-[#FFF8F3] border-[#F4B6C6] text-[#3A2A30] focus:border-[#B03A63]"
                  />
                </div>

                {/* Target Event Date */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5 text-[#3A2A30]/80">
                    Event Date Needed By
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => handleInputChange('eventDate', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl text-xs outline-none border bg-[#FFF8F3] border-[#F4B6C6] text-[#3A2A30] focus:border-[#B03A63]"
                  />
                </div>
              </div>

              {/* Budget Range */}
              <div className="mb-5">
                <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5 text-[#3A2A30]/80">
                  Approximate Budget Target
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => handleInputChange('budgetRange', opt)}
                      className={`px-3 py-2.5 min-h-[44px] rounded-xl text-xs font-semibold text-center border transition-all flex items-center justify-center ${
                        formData.budgetRange === opt
                          ? 'bg-[#B03A63] text-white border-[#B03A63] shadow-xs'
                          : 'bg-[#FFF8F3] border-[#F4B6C6] text-[#3A2A30] hover:bg-[#FBE4EA]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Notes / Vision */}
              <div className="mb-6">
                <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5 text-[#3A2A30]/80">
                  Custom Request Description / Details
                </label>
                <textarea
                  rows={4}
                  value={formData.customNotes}
                  onChange={(e) => handleInputChange('customNotes', e.target.value)}
                  placeholder="Describe your design vision: e.g. 'I want 12 red velvet chenille tulips with white organza wrap, fairy lights, and a handwritten Urdu card saying سالگرہ مبارک'..."
                  className="w-full px-4 py-2.5 rounded-xl text-xs outline-none border bg-[#FFF8F3] border-[#F4B6C6] text-[#3A2A30] focus:border-[#B03A63]"
                />
              </div>

              {/* Photo Upload Notice */}
              <div className="p-4 rounded-2xl border border-[#F4B6C6] bg-[#FBE4EA]/50 mb-6 flex items-center gap-3 text-xs text-[#3A2A30]">
                <Upload className="w-5 h-5 text-[#B03A63] shrink-0" />
                <span>
                  <strong>Have inspiration screenshots or Pinterest photos?</strong> Clicking the button below connects you directly to WhatsApp where you can immediately attach all your images!
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 min-h-[48px] rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md shadow-[#25D366]/20 transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Custom Request to WhatsApp (0341-4655335)</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
