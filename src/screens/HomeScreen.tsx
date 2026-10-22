import React, { useState } from 'react';
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  Heart,
  Palette,
  Truck,
  Users,
  Instagram,
  CheckCircle2,
  Gift,
} from 'lucide-react';
import { BRAND, CATEGORIES, PRODUCTS } from '../data/catalog';
import { Product } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectProduct,
}) => {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');

  const filterChips = [
    { id: 'all', label: 'All Occasions' },
    { id: 'bouquets', label: 'Everlasting Bouquets' },
    { id: 'wedding', label: 'Pakistani Weddings' },
    { id: 'gift-boxes', label: 'Specialty Boxes' },
    { id: 'frames', label: 'Custom Frames' },
    { id: 'baskets', label: 'Curated Baskets' },
  ];

  const filteredCategories =
    selectedCategoryFilter === 'all'
      ? CATEGORIES
      : CATEGORIES.filter(
          (c) =>
            c.id === selectedCategoryFilter ||
            (selectedCategoryFilter === 'wedding' && c.id === 'accessories')
        );

  const featuredBespoke = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="w-full overflow-hidden bg-[#FFF8F3] text-[#3A2A30]">
      {/* ======================================================== */}
      {/* SCREEN 1: HERO SECTION                                   */}
      {/* ======================================================== */}
      <section className="relative px-4 sm:px-6 lg:px-12 pt-8 pb-16 lg:pb-24">
        {/* Soft Warm Boutique Background Ornaments */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#FBE4EA]/60 blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-24 right-10 w-80 h-80 rounded-full bg-[#F4B6C6]/30 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column (7 cols desktop, stacked first on mobile) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Tag / Micro-kicker */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 border border-[#F4B6C6] bg-[#FBE4EA] text-[#B03A63] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
              <span>Handcrafted in Lahore | Pattoki · Bespoke Keepsakes</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-4 text-[#3A2A30]">
              Crafted with{' '}
              <span className="italic font-normal text-[#B03A63]">
                Love
              </span>
              ,<br />
              Made for{' '}
              <span className="italic font-normal text-[#C9A66B]">
                Memories
              </span>
            </h1>

            {/* Poetic Secondary Line Banner */}
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full mb-5 border border-[#F4B6C6]/60 bg-white text-[#3A2A30] shadow-xs">
              <span className="font-serif italic font-semibold text-[#B03A63] text-sm">
                Gifts that speak from the heart
              </span>
              <span className="opacity-30">|</span>
              <span className="text-xs text-[#3A2A30]/75">Personalized gifts for every occasion</span>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#3A2A30]/80 leading-relaxed max-w-xl mb-8">
              Welcome to <strong>Mini Makers</strong>, an artisan gift studio based in <strong>Lahore | Pattoki</strong>. We hand-create everlasting velvet flower bouquets, royal Pakistani wedding keepsakes, personalized acrylic frames, and customized snack crates tailored with your heartfelt notes.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10">
              <button
                onClick={() => {
                  onNavigate('bouquets');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 min-h-[48px] rounded-full text-sm font-semibold tracking-wide uppercase transition-all bg-[#B03A63] hover:bg-[#962B56] text-white shadow-md shadow-[#B03A63]/25 flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 min-h-[48px] rounded-full text-sm font-semibold tracking-wide uppercase transition-all bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md shadow-[#25D366]/20 flex items-center justify-center gap-2 active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 min-h-[48px] rounded-full text-sm font-semibold tracking-wide transition-all border border-[#F4B6C6] bg-white text-[#B03A63] hover:bg-[#FBE4EA] flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                <span>DM on Instagram</span>
              </a>
            </div>

            {/* Trust Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-2xl pt-5 border-t border-[#F4B6C6]/40">
              <div className="p-3 rounded-2xl border border-[#F4B6C6]/50 bg-white flex items-center gap-2 shadow-xs">
                <Palette className="w-4 h-4 text-[#B03A63] shrink-0" />
                <span className="text-xs font-semibold">100% Handmade</span>
              </div>
              <div className="p-3 rounded-2xl border border-[#F4B6C6]/50 bg-white flex items-center gap-2 shadow-xs">
                <Sparkles className="w-4 h-4 text-[#C9A66B] shrink-0" />
                <span className="text-xs font-semibold">Fully Customizable</span>
              </div>
              <div className="p-3 rounded-2xl border border-[#F4B6C6]/50 bg-white flex items-center gap-2 shadow-xs">
                <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold">Delivery Across PK</span>
              </div>
              <div className="p-3 rounded-2xl border border-[#F4B6C6]/50 bg-white flex items-center gap-2 shadow-xs">
                <Users className="w-4 h-4 text-[#B03A63] shrink-0" />
                <span className="text-xs font-semibold">1.2K+ IG Family</span>
              </div>
            </div>
          </div>

          {/* Right Collage Column (5 cols): 3 rounded collage images */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-md aspect-[4/5] flex items-center justify-center">
              
              {/* Backing Ambient Arch */}
              <div className="absolute inset-2 sm:inset-3 rounded-[140px] bg-gradient-to-b from-[#FBE4EA] via-[#FFF8F3] to-[#F4B6C6]/50 -rotate-2 -z-10" />

              {/* 1. Main Center Arched Card: Handmade Flower Bouquet */}
              <div
                onClick={() => onSelectProduct(PRODUCTS[0])}
                className="relative z-10 w-72 h-[390px] sm:h-[410px] rounded-t-[140px] rounded-b-[32px] overflow-hidden p-2 cursor-pointer transition-transform duration-300 hover:scale-102 border-2 border-[#F4B6C6] bg-white shadow-xl"
              >
                <div className="w-full h-full rounded-t-[132px] rounded-b-[24px] overflow-hidden relative group">
                  <img
                    src="/assets/images/hero/hero-bouquet.jpg"
                    alt="Handmade Everlasting Flower Bouquet"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#B03A63] inline-block mb-1">
                      Everlasting Blooms
                    </span>
                    <h4 className="font-serif text-base font-bold leading-tight">
                      Plush Chenille Red Tulip Bouquet
                    </h4>
                    <p className="text-xs text-pink-100 mt-0.5">Price on request, DM to order</p>
                  </div>
                </div>
              </div>

              {/* 2. Left Overlapping Card: Customized Photo / Nikkah Frame */}
              <div
                onClick={() => onSelectProduct(PRODUCTS[6])}
                className="absolute -left-3 sm:-left-6 bottom-6 sm:bottom-8 z-20 w-40 sm:w-44 h-52 sm:h-56 rounded-t-[90px] rounded-b-2xl overflow-hidden p-1.5 -rotate-6 transition-all duration-300 hover:rotate-0 hover:scale-105 cursor-pointer border border-[#F4B6C6] bg-white shadow-lg"
              >
                <div className="w-full h-full rounded-t-[84px] rounded-b-xl overflow-hidden relative group">
                  <img
                    src="/assets/images/hero/hero-frame.jpg"
                    alt="Customized Shadi Keepsake Glass"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#C9A66B] font-bold inline-block">
                      Shadi Special
                    </span>
                    <p className="font-serif text-xs font-semibold leading-tight mt-1 truncate">
                      Royal Doodh Pilai Glass
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Right Overlapping Card: Alphabet Gift Box */}
              <div
                onClick={() => onSelectProduct(PRODUCTS[10])}
                className="absolute -right-2 sm:-right-4 top-8 sm:top-10 z-20 w-36 sm:w-40 h-48 sm:h-52 rounded-2xl overflow-hidden p-1.5 rotate-6 transition-all duration-300 hover:rotate-0 hover:scale-105 cursor-pointer border border-[#F4B6C6] bg-white shadow-lg"
              >
                <div className="w-full h-full rounded-xl overflow-hidden relative group">
                  <img
                    src="/assets/images/hero/hero-snack-box.jpg"
                    alt="Personalized Alphabetic Gift Box"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-white text-center">
                    <span className="text-[9px] font-bold text-pink-200 uppercase tracking-wide">
                      Alphabet Keepsake
                    </span>
                    <p className="font-serif text-xs font-semibold truncate">Custom Snack Box</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SCREEN 2: SHOP BY CATEGORY                               */}
      {/* ======================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 border-t border-[#F4B6C6]/40 bg-[#FFF8F3]">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 text-[#B03A63]">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
              <span>Explore Our Punjab Atelier</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-3 text-[#3A2A30]">
              Gifts for Every Occasion
            </h2>
            <p className="text-sm text-[#3A2A30]/80 leading-relaxed">
              Thoughtfully hand-stitched, sculpted, and personalized in our Lahore | Pattoki workshops. Click any category to browse or customize with your colors.
            </p>

            {/* Pill-shaped Category Chip Row for Quick Filtering */}
            <div className="flex items-center justify-start sm:justify-center gap-2 mt-6 overflow-x-auto pb-2 scrollbar-none px-2">
              {filterChips.map((chip) => {
                const isSelected = selectedCategoryFilter === chip.id;
                return (
                  <button
                    key={chip.id}
                    onClick={() => setSelectedCategoryFilter(chip.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border min-h-[44px] flex items-center justify-center ${
                      isSelected
                        ? 'bg-[#B03A63] text-white border-[#B03A63] shadow-xs'
                        : 'bg-white text-[#3A2A30] border-[#F4B6C6] hover:bg-[#FBE4EA]'
                    }`}
                  >
                    {chip.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid of 6 Large Rounded Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCategories.slice(0, 6).map((cat) => (
              <div
                key={cat.id}
                onClick={() => {
                  if (cat.id === 'bouquets') onNavigate('bouquets');
                  else if (cat.id === 'wedding') onNavigate('wedding');
                  else if (cat.id === 'gift-boxes') onNavigate('gift-boxes');
                  else onNavigate('frames-baskets');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative rounded-[28px] overflow-hidden p-4 border border-[#F4B6C6]/60 bg-[#FBE4EA]/50 hover:bg-white cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl"
              >
                {/* Arched Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-[22px] overflow-hidden mb-4">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />
                  
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md bg-black/40 text-white border border-white/20">
                    {cat.itemCount} Designs
                  </div>

                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="font-serif italic text-xs font-semibold text-pink-200">
                      {cat.urdu}
                    </span>
                  </div>
                </div>

                {/* Card Text & Action */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-serif text-xl font-bold tracking-tight text-[#3A2A30] group-hover:text-[#B03A63] transition-colors">
                      {cat.name}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white text-[#B03A63] flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-xs">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs text-[#3A2A30]/75 line-clamp-2 leading-relaxed mb-3">
                    {cat.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between text-xs font-medium pt-2 border-t border-[#F4B6C6]/40">
                    <span className="text-[#B03A63] font-semibold">View Collection</span>
                    <span className="text-[#3A2A30]/60">Price on request, DM to order</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Handmade Accessories Strip */}
          <div className="mt-10 p-5 rounded-2xl border border-[#C9A66B]/50 bg-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-[#FBE4EA] text-[#B03A63] flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-[#C9A66B]" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C9A66B]">
                  Dainty Embellishments
                </span>
                <h4 className="font-serif text-lg font-bold text-[#3A2A30]">
                  Handmade Accessories &amp; Gota Hair Pins
                </h4>
                <p className="text-xs text-[#3A2A30]/80">
                  Pearl wrist corsages, silk scrunchies, and custom hair brooches for bridal squads.
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                onNavigate('frames-baskets');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-2.5 min-h-[44px] rounded-full text-xs font-semibold uppercase tracking-wider border-2 border-[#B03A63] text-[#B03A63] hover:bg-[#B03A63] hover:text-white shrink-0 transition-all"
            >
              Explore Accessories
            </button>
          </div>

          {/* Featured Masterpieces Carousel/Grid */}
          <div className="mt-16">
            <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B03A63]">
                  Staff Picks
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-[#3A2A30]">
                  Signature Personalized Pieces
                </h3>
              </div>
              <button
                onClick={() => onNavigate('bouquets')}
                className="text-xs font-semibold text-[#B03A63] hover:underline mt-2 sm:mt-0 flex items-center gap-1"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredBespoke.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectProduct(item)}
                  className="rounded-2xl overflow-hidden border border-[#F4B6C6]/50 bg-white p-3 flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md"
                >
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {item.badge && (
                      <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-[#B03A63] text-white shadow-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-[#B03A63] tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-base font-bold truncate mt-0.5 mb-1 text-[#3A2A30]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#3A2A30]/75 line-clamp-2 mb-3">{item.tagline}</p>
                  <div className="mt-auto pt-2 border-t border-[#F4B6C6]/30 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#B03A63]">
                      Price on request, DM to order
                    </span>
                    <span className="text-[11px] font-medium text-[#C9A66B] underline hover:text-[#B03A63]">
                      Inquire →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
