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
    <div className="w-full pb-20 bg-[#FFF8F3] text-[#3A2A30]">
      {/* Header */}
      <section className="py-10 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-[#FBE4EA]/50">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-1.5 text-xs text-[#3A2A30]/70 mb-3" aria-label="Breadcrumb">
            <button onClick={() => onNavigate('home')} className="hover:text-[#B03A63] transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="font-semibold text-[#B03A63]">Specialty Products</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 text-[#B03A63]">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
                <span>Sweet Treats &amp; Surprises · Lahore | Pattoki</span>
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-1 text-[#3A2A30]">
                Specialty Gift Boxes &amp; Hampers
              </h1>
              <p className="text-sm text-[#3A2A30]/80 mt-2 max-w-xl">
                Whimsical alphabet letter snack crates, smashable surprise piñatas, hand-folded scrapbooks, and personalized calligraphy mugs made to ignite pure delight.
              </p>
            </div>

            <a
              href={`https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(
                'Assalam-o-Alaikum! I want to design a custom gift hamper or snack box.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 min-h-[44px] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 bg-[#B03A63] hover:bg-[#962B56] text-white shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire Box on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Masonry-Style Varied Grid of Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {boxProducts.map((item, index) => {
            const isTall = index % 3 === 0;

            return (
              <article
                key={item.id}
                className="rounded-[26px] overflow-hidden border border-[#F4B6C6]/60 bg-white p-4 flex flex-col transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-xl group"
              >
                <div
                  onClick={() => onSelectProduct(item)}
                  className={`relative w-full rounded-[20px] overflow-hidden mb-4 cursor-pointer bg-[#FBE4EA]/30 ${
                    isTall ? 'aspect-[4/5]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Small "Personalize it" badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#B03A63] text-white shadow-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#C9A66B]" />
                    <span>Personalize it</span>
                  </span>

                  {item.badge && (
                    <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wide bg-[#C9A66B] text-white">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#B03A63]">
                      {item.subCategory}
                    </span>
                    <span className="font-serif italic text-xs text-[#C9A66B] font-medium">Handmade Keepsake</span>
                  </div>

                  <h3
                    onClick={() => onSelectProduct(item)}
                    className="font-serif text-lg font-bold hover:text-[#B03A63] cursor-pointer transition-colors mb-1.5 text-[#3A2A30]"
                  >
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#3A2A30]/75 line-clamp-2 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-3 border-t border-[#F4B6C6]/40 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#3A2A30]/60 uppercase font-semibold block">Pricing</span>
                      <span className="text-xs sm:text-sm font-semibold text-[#B03A63]">
                        Price on request, DM to order
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(
                        `Assalam-o-Alaikum Mini Makers! I want to order: ${item.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 min-h-[40px] rounded-full text-xs font-semibold flex items-center gap-1 transition-all bg-[#B03A63] hover:bg-[#962B56] text-white shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Birthday Surprise Builder Section */}
        <section className="mt-16 rounded-3xl p-6 sm:p-10 border border-[#F4B6C6] bg-white shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B03A63]">
              Curated Gift Bundles
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-[#3A2A30]">
              Popular Birthday &amp; Anniversary Recipes
            </h2>
            <p className="text-xs text-[#3A2A30]/75 mt-1">
              Need inspiration? Here is what our Lahore customers love pairing together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {birthdayIdeas.map((idea, idx) => {
              const IconComp = idea.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-[#F4B6C6]/60 bg-[#FFF8F3] flex flex-col shadow-xs"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FBE4EA] text-[#B03A63] flex items-center justify-center mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-bold mb-1 text-[#3A2A30]">{idea.title}</h4>
                  <p className="text-xs text-[#3A2A30]/75 leading-relaxed mb-4">{idea.description}</p>
                  <div className="mt-auto pt-3 border-t border-[#F4B6C6]/30">
                    <span className="text-[10px] text-[#3A2A30]/60 uppercase font-bold block mb-1">
                      Bundle Recommendation:
                    </span>
                    <span className="text-xs font-semibold text-[#B03A63]">{idea.recommended}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
