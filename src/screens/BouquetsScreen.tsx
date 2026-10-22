import React, { useState } from 'react';
import {
  MessageCircle,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Eye,
  Heart,
} from 'lucide-react';
import { BRAND, PRODUCTS } from '../data/catalog';
import { Product } from '../types';

interface BouquetsScreenProps {
  onNavigate: (screen: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const BouquetsScreen: React.FC<BouquetsScreenProps> = ({
  onNavigate,
  onSelectProduct,
}) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterChips = [
    'All',
    'Original Flowers',
    'Ribbon Flower',
    'Chocolate',
    'Hijab',
    'Kids',
    'Money',
    'Photo',
    'Accessories',
    'Mirror',
  ];

  const bouquetProducts = PRODUCTS.filter((p) => p.category === 'bouquets');

  const filteredProducts =
    selectedFilter === 'All'
      ? bouquetProducts
      : bouquetProducts.filter((p) => p.subCategory === selectedFilter);

  return (
    <div className="w-full pb-28 bg-[#FFF8F3] text-[#3A2A30]">
      {/* Header with Breadcrumb & Title */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-[#FBE4EA]/40">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#3A2A30]/70 mb-4" aria-label="Breadcrumb">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#B03A63] transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="font-semibold text-[#B03A63]">Bouquets Collection</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 bg-[#FBE4EA] text-[#B03A63] border border-[#F4B6C6]">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
                <span>100% Everlasting Floral Art</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#3A2A30]">
                Handmade Bouquets
              </h1>
              <p className="text-sm text-[#3A2A30]/80 mt-1 max-w-xl">
                Bespoke chenille velvet tulips, satin folded roses, Lindt &amp; Ferrero chocolates, and crisp currency origami. Crafted with love in Lahore | Pattoki.
              </p>
            </div>

            <div className="text-xs font-medium text-[#3A2A30]/75">
              Showing <span className="font-bold text-[#B03A63]">{filteredProducts.length}</span> handcrafted arrangements
            </div>
          </div>

          {/* Filter Chips Row (horizontally scrollable on mobile) */}
          <div className="flex items-center gap-2 mt-8 overflow-x-auto pb-2 scrollbar-none">
            {filterChips.map((chip) => {
              const isSelected = selectedFilter === chip;
              return (
                <button
                  key={chip}
                  onClick={() => setSelectedFilter(chip)}
                  className={`px-4 py-2 min-h-[44px] rounded-full text-xs font-semibold whitespace-nowrap transition-all border flex items-center justify-center ${
                    isSelected
                      ? 'bg-[#B03A63] text-white border-[#B03A63] shadow-xs'
                      : 'bg-white text-[#3A2A30] border-[#F4B6C6] hover:bg-[#FBE4EA]'
                  }`}
                >
                  {chip}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-10">
        
        {/* Featured Banner for Crochet / Pipe-Cleaner Flower Bouquets */}
        <section className="rounded-3xl p-6 sm:p-10 mb-14 border border-[#F4B6C6] bg-gradient-to-r from-[#FBE4EA] via-[#FFF8F3] to-[#F4B6C6]/40 shadow-sm overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image showcase Left */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-64 sm:w-72 aspect-[4/5] rounded-[100px_100px_24px_24px] overflow-hidden shadow-xl border-2 border-white">
                <img
                  src="/assets/images/bouquets/red-tulip-bouquet.jpg"
                  alt="Chenille Velvet Red Tulips & Azure Forget-Me-Nots"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#B03A63] border border-[#F4B6C6]">
                  Signature Masterpiece
                </span>
              </div>
            </div>

            {/* Banner Text Right */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs uppercase font-bold tracking-widest text-[#B03A63] mb-1">
                Artisan Spotlight · Lahore | Pattoki
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 text-[#3A2A30]">
                Handmade Velvet Chenille Tulips &amp; Crochet Forget-Me-Nots
              </h2>
              <p className="text-sm text-[#3A2A30]/80 leading-relaxed mb-6">
                Our viral signature bouquet! Tactile plush red chenille tulips nestled with powder-blue florets and delicate warm fairy lights. These blooms never wither, never lose their charm, and remain a cherished room keepsake for years.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    const tulip = PRODUCTS.find((p) => p.id === 'chenille-tulip-forever-bouquet');
                    if (tulip) onSelectProduct(tulip);
                  }}
                  className="px-6 py-3 min-h-[44px] rounded-full text-xs font-semibold tracking-wide uppercase bg-[#B03A63] hover:bg-[#962B56] text-white shadow-sm flex items-center gap-2 transition-all"
                >
                  <span>Customize This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(
                    'Assalam-o-Alaikum! I want to order the Signature Velvet Red Tulip Forever Bouquet.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 min-h-[44px] rounded-full text-xs font-semibold tracking-wide uppercase bg-[#25D366] hover:bg-[#20ba59] text-white shadow-sm flex items-center gap-2 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Order via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid (3 cols desktop, 2 mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="rounded-3xl border border-[#F4B6C6]/60 bg-white p-3.5 sm:p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-lg group"
            >
              {/* Product Image */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-3.5 cursor-pointer bg-[#FBE4EA]/30"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {product.badge && (
                  <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#B03A63] text-white shadow-xs">
                    {product.badge}
                  </span>
                )}

                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[9px] font-semibold bg-white/90 text-[#3A2A30] border border-[#F4B6C6]/50">
                  Customizable
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-1">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-[#B03A63] mb-0.5">
                  {product.subCategory || 'Everlasting Bloom'}
                </span>
                <h3
                  onClick={() => onSelectProduct(product)}
                  className="font-serif text-sm sm:text-lg font-bold leading-snug line-clamp-2 cursor-pointer hover:text-[#B03A63] transition-colors mb-1 text-[#3A2A30]"
                >
                  {product.name}
                </h3>
                <p className="text-xs text-[#3A2A30]/75 line-clamp-2 mb-3 leading-relaxed">
                  {product.tagline}
                </p>

                {/* Bottom Row */}
                <div className="mt-auto pt-3 border-t border-[#F4B6C6]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#3A2A30]/60 uppercase font-semibold">Pricing</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#B03A63]">
                      Price on request, DM to order
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="p-2 min-h-[40px] min-w-[40px] rounded-full border border-[#F4B6C6] hover:bg-[#FBE4EA] text-[#3A2A30] text-xs flex items-center justify-center transition-colors"
                      title="Customize details"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={`https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(
                        `Assalam-o-Alaikum Mini Makers! I want to order the ${product.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 min-h-[40px] rounded-full text-xs font-semibold flex items-center justify-center gap-1 transition-all bg-[#B03A63] hover:bg-[#962B56] text-white shadow-xs"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>Order via DM</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Sticky Bottom Bar with right offset for floating buttons */}
      <div className="fixed bottom-0 inset-x-0 z-30 py-3 px-4 pr-20 sm:pr-24 border-t border-[#F4B6C6] bg-white/95 backdrop-blur-md shadow-lg text-[#3A2A30]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <div className="w-8 h-8 rounded-full bg-[#FBE4EA] text-[#B03A63] hidden sm:flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-[#C9A66B]" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#3A2A30]">
                Need a Custom Bouquet? Let’s Design It Together!
              </p>
              <p className="text-[11px] text-[#3A2A30]/75 hidden sm:block">
                Choose custom flower stems, wrap shades, fairy lights &amp; personalized Urdu notes.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(
                'Assalam-o-Alaikum! I need a custom bouquet arrangement with specific colors.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 min-h-[44px] rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Inquire on WhatsApp (0341-4655335)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
