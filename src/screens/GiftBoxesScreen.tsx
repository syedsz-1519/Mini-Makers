import React from 'react';
import {
  MessageCircle,
  Sparkles,
  ChevronRight,
  Gift,
  PartyPopper,
  Heart,
} from 'lucide-react';
import { BRAND, PRODUCTS } from '../data/catalog';
import { Product } from '../types';

interface GiftBoxesScreenProps {
  onNavigate: (screen: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const GiftBoxesScreen: React.FC<GiftBoxesScreenProps> = ({
  onNavigate,
  onSelectProduct,
}) => {
  const boxProducts = PRODUCTS.filter((p) => p.category === 'gift-boxes');

  const birthdayIdeas = [
    {
      title: 'The Midnight Snack Attack',
      description: 'Alphabet wooden letter filled with imported chocolates, Dairy Milk silk, Kinder joy, and warm fairy lights for turning 18 or 21.',
      icon: Gift,
      recommended: 'Alphabetic Snack Box + Piñata Heart',
    },
    {
      title: 'Romantic Memory Keepsake Box',
      description: 'Accordion fold handmade scrapbook loaded with 30 candid photos, anniversary quotes, and scented wax seal letters.',
      icon: Heart,
      recommended: 'Artisan Memory Scrapbook + Customized Mug',
    },
    {
      title: 'Sweet Smash Birthday Piñata',
      description: 'Chocolate sphere or pastel paper-mache piñata with mini wooden hammer. Crack it open for custom candy & surprise vouchers!',
      icon: PartyPopper,
      recommended: 'Surprise Piñata Smash Box + Ribbon Bouquet',
    },
  ];

  return (
    <div className="w-full pb-20 bg-[#FFF8F3] text-[#3A2A30] overflow-x-clip">
      {/* Header */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-[#FBE4EA]/50">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-1.5 text-xs text-[#3A2A30]/70 mb-3" aria-label="Breadcrumb">
            <button onClick={() => onNavigate('home')} className="hover:text-[#B03A63] transition-colors min-h-[44px] flex items-center">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="font-semibold text-[#B03A63]">Specialty Products</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              {/* Gold eyebrow with giftbox SVG */}
              <div className="flex items-center gap-2 mb-1.5 font-serif italic text-sm sm:text-base font-medium text-[#C9A66B] tracking-wide">
                <img
                  src="/assets/icons/headings/giftbox-heading.svg"
                  alt=""
                  className="w-6 h-6 sm:w-7 sm:h-7 inline-block object-contain"
                  width={28}
                  height={28}
                />
                <span>sweet treats &amp; keepsakes</span>
              </div>

              <h1 className="font-serif italic font-bold tracking-tight fluid-h1 text-[#3A2A30]">
                Specialty <span className="highlight-marker">Gift Boxes</span> &amp; Hampers
              </h1>

              {/* Floral decorative divider */}
              <div className="flex items-center my-2.5" aria-hidden="true">
                <img
                  src="/assets/icons/headings/divider-ornament.svg"
                  alt=""
                  className="h-4 sm:h-5 w-auto max-w-[180px] sm:max-w-[200px] opacity-80"
                  width={180}
                  height={20}
                />
              </div>

              <p className="text-xs sm:text-sm text-[#3A2A30]/80 mt-1 max-w-xl leading-relaxed">
                Handmade chocolate snack crates, wooden alphabet monogram boxes, crackable piñatas, and custom ceramic mugs. Packed with care in Lahore | Pattoki.
              </p>
            </div>

            <div className="text-xs font-medium text-[#3A2A30]/75">
              <span>Bespoke Confections &amp; Memory Bundles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-10">
        
        {/* Products Grid (Priority 5: 2 cols phone, 3 tablet, 4 desktop) */}
        <div className="adaptive-catalog-grid">
          {boxProducts.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl overflow-hidden border border-[#F4B6C6]/60 bg-white p-3.5 sm:p-4 flex flex-col h-full transition-all duration-300 shadow-xs hover:shadow-lg group"
            >
              <div
                onClick={() => onSelectProduct(item)}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3 cursor-pointer bg-[#FBE4EA]/30"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={320}
                  height={240}
                />
                {item.badge && (
                  <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#B03A63] text-white shadow-xs">
                    {item.badge}
                  </span>
                )}
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-semibold bg-white/90 text-[#3A2A30] border border-[#F4B6C6]/50">
                  Customizable
                </span>
              </div>

              <div className="flex flex-col flex-1">
                <span className="text-[10px] uppercase font-semibold text-[#B03A63] tracking-wider mb-0.5">
                  {item.subCategory}
                </span>

                <h3
                  onClick={() => onSelectProduct(item)}
                  className="font-serif text-sm sm:text-base font-bold hover:text-[#B03A63] cursor-pointer transition-colors mb-1.5 text-[#3A2A30] line-clamp-2"
                >
                  {item.name}
                </h3>

                <p className="text-[11px] sm:text-xs text-[#3A2A30]/75 line-clamp-2 mb-3 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-auto pt-2.5 border-t border-[#F4B6C6]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[9px] text-[#3A2A30]/60 block uppercase font-semibold">Pricing</span>
                    <span className="text-xs font-semibold text-[#B03A63]">
                      Price on request, DM
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(
                      `Assalam-o-Alaikum Mini Makers! I want to order the Specialty Gift Box: ${item.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-3 py-1.5 min-h-[44px] rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all bg-[#B03A63] hover:bg-[#962B56] text-white shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Birthday Combo Ideas Strip (Single column mobile, 3 cols desktop) */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B03A63]">
              Curated Recommendations
            </span>
            <h2 className="font-serif italic text-2xl sm:text-3xl font-bold mt-1 text-[#3A2A30] fluid-h2">
              Popular Birthday &amp; Anniversary Combos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {birthdayIdeas.map((idea, idx) => {
              const IconComponent = idea.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-3xl border border-[#F4B6C6]/70 bg-white flex flex-col h-full shadow-xs"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#FBE4EA] text-[#B03A63] flex items-center justify-center mb-3">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#3A2A30] mb-1.5">
                    {idea.title}
                  </h4>
                  <p className="text-xs text-[#3A2A30]/80 leading-relaxed mb-4 flex-1">
                    {idea.description}
                  </p>
                  <div className="pt-3 border-t border-[#F4B6C6]/40 text-xs">
                    <span className="text-[#3A2A30]/60 block text-[11px]">Recommended Pairing:</span>
                    <span className="font-semibold text-[#B03A63]">{idea.recommended}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
