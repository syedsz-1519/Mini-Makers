import React, { useState } from 'react';
import {
  MessageCircle,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Eye,
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
    <div className="w-full pb-20 bg-[#FFF8F3] text-[#3A2A30] overflow-x-clip">
      {/* Header with Breadcrumb & Title */}
      <section className="py-6 sm:py-10 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-[#FBE4EA]/40">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-[#3A2A30]/70 mb-3" aria-label="Breadcrumb">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#B03A63] transition-colors min-h-[44px] flex items-center"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="font-semibold text-[#B03A63]">Bouquets Collection</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              {/* Gold eyebrow with bouquet SVG */}
              <div className="flex items-center gap-2 mb-1.5 font-serif italic text-sm sm:text-base font-medium text-[#C9A66B] tracking-wide">
                <img
                  src="/assets/icons/headings/bouquet-heading.svg"
                  alt=""
                  className="w-6 h-6 sm:w-7 sm:h-7 inline-block object-contain"
                  width={28}
                  height={28}
                />
                <span>eternal floral art</span>
              </div>
              <h1 className="font-serif italic font-bold tracking-tight fluid-h1 text-[#3A2A30]">
                Handmade <span className="highlight-marker">Bouquets</span>
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
                Bespoke chenille velvet tulips, satin folded roses, Lindt &amp; Ferrero chocolates, and crisp currency origami. Crafted with love in Lahore | Pattoki.
              </p>
            </div>

            <div className="text-xs font-medium text-[#3A2A30]/75">
              Showing <span className="font-bold text-[#B03A63]">{filteredProducts.length}</span> handcrafted arrangements
            </div>
          </div>

          {/* Filter Chips Ribbon: Horizontal swipe with scroll-snap and hidden scrollbars */}
          <div className="mobile-swipe-ribbon gap-2 mt-6">
            {filterChips.map((chip) => {
              const isSelected = selectedFilter === chip;
              return (
                <button
                  key={chip}
                  onClick={() => setSelectedFilter(chip)}
                  className={`px-4 py-2 min-h-[44px] rounded-full text-xs font-semibold whitespace-nowrap transition-all border flex items-center justify-center shrink-0 ${
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-10">
        
        {/* Featured Banner for Crochet / Pipe-Cleaner Flower Bouquets */}
        <section className="rounded-3xl p-5 sm:p-8 lg:p-10 mb-10 sm:mb-14 border border-[#F4B6C6] bg-gradient-to-r from-[#FBE4EA] via-[#FFF8F3] to-[#F4B6C6]/40 shadow-xs overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Image showcase Left */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[280px] sm:max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border-2 border-white shadow-lg relative group bg-white">
                <img
                  src="/assets/images/bouquets/red-tulip-bouquet.jpg"
                  alt="Red Tulip Handcrafted Bouquet"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={384}
                  height={480}
                />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#B03A63] text-white shadow-xs">
                  Bestseller
                </span>
              </div>
            </div>

            {/* Banner Text Right */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-3 bg-white text-[#B03A63] border border-[#F4B6C6]">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
                <span>Velvet Chenille Craft</span>
              </div>
              <h2 className="font-serif italic text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-[#3A2A30]">
                Signature Velvet Red Tulip <span className="highlight-marker">Forever Bouquet</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#3A2A30]/80 leading-relaxed mb-4">
                Unlike natural flowers that wilt in 3 days, our handcrafted chenille pipe-cleaner tulips stay vibrant forever. Wrapped in luxury Korean matte waterproof paper and finished with satin ribbons.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full max-w-lg mb-6 text-xs text-[#3A2A30]">
                <div className="p-2.5 rounded-xl bg-white border border-[#F4B6C6]/60">
                  <span className="font-bold block text-[#B03A63]">Never Wilts</span>
                  <span className="text-[11px] text-[#3A2A30]/70">Everlasting memory</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#F4B6C6]/60">
                  <span className="font-bold block text-[#B03A63]">Custom Colors</span>
                  <span className="text-[11px] text-[#3A2A30]/70">Red, pink, lavender</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#F4B6C6]/60 col-span-2 sm:col-span-1">
                  <span className="font-bold block text-[#B03A63]">Nationwide</span>
                  <span className="text-[11px] text-[#3A2A30]/70">Safe courier box</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => onSelectProduct(PRODUCTS[0])}
                  className="px-6 py-3 min-h-[48px] rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase bg-[#B03A63] hover:bg-[#962B56] text-white shadow-xs flex items-center justify-center gap-2 transition-all"
                >
                  <span>Customize &amp; Price</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/923414655335?text=${encodeURIComponent(
                    'Assalam-o-Alaikum! I want to order the Signature Velvet Red Tulip Forever Bouquet.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 min-h-[48px] rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xs flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Adaptive Product Grid (Priority 5: 2 cols phone, 3 tablet, 4 desktop) */}
        <div className="adaptive-catalog-grid">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="rounded-3xl border border-[#F4B6C6]/60 bg-white p-3 sm:p-4 flex flex-col h-full transition-all duration-300 shadow-xs hover:shadow-lg group"
            >
              {/* Product Image */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-3 cursor-pointer bg-[#FBE4EA]/30"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={280}
                  height={350}
                />
                
                {product.badge && (
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#B03A63] text-white shadow-xs">
                    {product.badge}
                  </span>
                )}

                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-semibold bg-white/95 text-[#3A2A30] border border-[#F4B6C6]/50">
                  Customizable
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-1">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#B03A63] mb-0.5">
                  {product.subCategory || 'Everlasting Bloom'}
                </span>
                <h3
                  onClick={() => onSelectProduct(product)}
                  className="font-serif text-xs sm:text-base font-bold leading-snug line-clamp-2 cursor-pointer hover:text-[#B03A63] transition-colors mb-1 text-[#3A2A30]"
                >
                  {product.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#3A2A30]/75 line-clamp-2 mb-3 leading-relaxed">
                  {product.tagline}
                </p>

                {/* Bottom Row */}
                <div className="mt-auto pt-2.5 border-t border-[#F4B6C6]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div className="flex flex-col">
                    <span className="text-[9px] sm:text-[10px] text-[#3A2A30]/60 uppercase font-semibold">Pricing</span>
                    <span className="text-xs font-semibold text-[#B03A63]">
                      Price on request, DM
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full sm:w-auto px-3 py-1.5 min-h-[44px] rounded-full text-[11px] font-semibold bg-[#FBE4EA] text-[#B03A63] hover:bg-[#B03A63] hover:text-white transition-colors flex items-center justify-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
