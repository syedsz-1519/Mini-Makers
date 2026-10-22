import React from 'react';
import {
  MessageCircle,
  Sparkles,
  ChevronRight,
  Heart,
  Crown,
  Calendar,
  Eye,
} from 'lucide-react';
import { BRAND, PRODUCTS } from '../data/catalog';
import { Product } from '../types';

interface WeddingScreenProps {
  onNavigate: (screen: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const WeddingScreen: React.FC<WeddingScreenProps> = ({
  onNavigate,
  onSelectProduct,
}) => {
  const weddingProducts = PRODUCTS.filter((p) => p.category === 'wedding');

  return (
    <div className="w-full pb-20 bg-[#FFF8F3] text-[#3A2A30]">
      {/* Wedding Hero Banner */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-gradient-to-b from-[#FFF8F3] via-[#FBE4EA]/60 to-[#FFF8F3]">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-[#3A2A30]/70 mb-4" aria-label="Breadcrumb">
            <button onClick={() => onNavigate('home')} className="hover:text-[#B03A63] transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="font-semibold text-[#B03A63]">Wedding &amp; Nikkah</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              {/* Script-style gold eyebrow with wedding SVG */}
              <div className="flex items-center gap-2 mb-2 font-serif italic text-sm sm:text-base font-medium text-[#C9A66B] tracking-wide">
                <img
                  src="/assets/icons/headings/wedding-heading.svg"
                  alt=""
                  className="w-7 h-7 inline-block object-contain"
                />
                <span>royal bridal &amp; nikkah keepsakes</span>
              </div>

              <h1 className="font-serif italic font-bold tracking-tight fluid-h1 mb-3 text-[#3A2A30]">
                Make Your <span className="highlight-marker">Shadi</span> Extra Special
              </h1>

              {/* Floral decorative divider */}
              <div className="flex items-center my-3" aria-hidden="true">
                <img
                  src="/assets/icons/headings/divider-ornament.svg"
                  alt=""
                  className="h-5 w-auto max-w-[200px] opacity-80"
                />
              </div>

              <div className="flex items-center gap-2 text-sm italic font-serif text-[#C9A66B] font-semibold mb-4">
                <span>Traditional Artisanship for Barat, Mayun, Mehndi &amp; Nikkah Celebrations</span>
              </div>

              <p className="text-base sm:text-lg text-[#3A2A30]/80 max-w-2xl leading-relaxed mb-6">
                From hand-embellished crystal Doodh Pilai glasses and laser-engraved Nikkah pens to mirror mosaic Mehndi plates and royal velvet lifafas, each heirloom is custom made in <strong>Lahore | Pattoki</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(
                    'Assalam-o-Alaikum! I want to discuss a customized Wedding & Shadi order.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 min-h-[44px] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 bg-[#B03A63] hover:bg-[#962B56] text-white shadow-md shadow-[#B03A63]/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Wedding Order via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Stats or Small Arch Badge */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="p-6 rounded-3xl border border-[#C9A66B]/40 bg-white/90 shadow-sm max-w-xs text-center">
                <Sparkles className="w-8 h-8 text-[#C9A66B] mx-auto mb-2" />
                <h4 className="font-serif text-lg font-bold text-[#3A2A30]">Bridal Customization</h4>
                <p className="text-xs text-[#3A2A30]/80 mt-1 leading-relaxed">
                  Personalized couple names, Nikkah dates in Arabic or Nastaliq gold calligraphy, and matching dress palette themes.
                </p>
                <div className="mt-4 pt-3 border-t border-[#F4B6C6]/30 text-xs font-semibold text-[#B03A63]">
                  Lahore &amp; Pattoki Express · PK Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Notice Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8">
        <div className="p-4 rounded-2xl border border-[#C9A66B] bg-[#FFF8F3] text-[#3A2A30] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#C9A66B] shrink-0" />
            <div className="text-xs sm:text-sm">
              <span className="font-bold">Wedding Season Notice:</span> Please book your order 5 to 7 days before your ceremony date to allow our artisans meticulous detail crafting.
            </div>
          </div>
          <a
            href={`https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(
              'Assalam-o-Alaikum Mini Makers! Checking slot availability for my upcoming wedding ceremony.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 min-h-[44px] rounded-full text-xs font-semibold bg-[#B03A63] hover:bg-[#962B56] text-white shrink-0 transition-colors shadow-xs flex items-center justify-center"
          >
            Check Shadi Dates via WhatsApp
          </a>
        </div>

        {/* Wedding Products Grid */}
        <div className="mt-10">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B03A63]">
              Ceremonial Essentials
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-[#3A2A30]">
              Handcrafted Shadi Collection
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {weddingProducts.map((item) => (
              <article
                key={item.id}
                className="rounded-[26px] overflow-hidden border border-[#F4B6C6]/60 bg-white p-4 flex flex-col transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-xl group"
              >
                <div
                  onClick={() => onSelectProduct(item)}
                  className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-4 cursor-pointer bg-[#FBE4EA]/30"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#B03A63] text-white shadow-xs">
                      {item.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-md text-white">
                    {item.subCategory}
                  </span>
                </div>

                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-serif italic text-[#B03A63] font-semibold">{item.subCategory}</span>
                    <span className="text-[#C9A66B] text-[11px] font-semibold">✦ Hand-Embellished</span>
                  </div>

                  <h3
                    onClick={() => onSelectProduct(item)}
                    className="font-serif text-xl font-bold hover:text-[#B03A63] cursor-pointer transition-colors mb-2 text-[#3A2A30]"
                  >
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#3A2A30]/75 line-clamp-3 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-3 border-t border-[#F4B6C6]/40 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#3A2A30]/60 block uppercase font-semibold">Price</span>
                      <span className="text-xs sm:text-sm font-semibold text-[#B03A63]">
                        Price on request, DM to order
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(
                        `Assalam-o-Alaikum Mini Makers! I want to order the Wedding item: ${item.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 min-h-[40px] rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all bg-[#B03A63] hover:bg-[#962B56] text-white shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bridesmaids & Corsages Spotlight */}
        <section className="mt-16 rounded-3xl p-6 sm:p-10 border border-[#F4B6C6] bg-gradient-to-r from-[#FBE4EA] via-white to-[#FBE4EA]/50 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#B03A63]">
                Bridal Squad &amp; Dholki
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 mb-3 text-[#3A2A30]">
                Matching Wrist Corsages &amp; Everlasting Gajras
              </h3>
              <p className="text-sm text-[#3A2A30]/80 leading-relaxed mb-6">
                Make your dholki and mayun pictures unforgettable with matching handmade flower bracelets for sisters and cousins. Custom tinted in dusty pink, blush ivory, or yellow marigold hues.
              </p>
              <a
                href={`https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(
                  'Assalam-o-Alaikum Mini Makers! I want to inquire about custom Wrist Corsages & Mehndi Bracelets for my bridesmaids.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-full text-xs font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Customize Squad Corsages on WhatsApp</span>
              </a>
            </div>

            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-md border-2 border-white">
                <img
                  src="/assets/images/wedding/wrist-corsages.jpg"
                  alt="Mehndi Flower Bracelets and Wrist Corsages"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
