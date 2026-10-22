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
    <div className="w-full max-w-full overflow-x-clip bg-[#FFF8F3] text-[#3A2A30]">
      {/* ======================================================== */}
      {/* SCREEN 1: HERO SECTION                                   */}
      {/* Stacks vertically below 900px, side by side 900px up     */}
      {/* ======================================================== */}
      <section className="relative px-4 sm:px-6 lg:px-12 pt-6 sm:pt-8 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
        {/* Contained Soft Warm Boutique Background Ornaments */}
        <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#FBE4EA]/50 blur-3xl pointer-events-none -z-10 max-w-full" />
        <div className="absolute top-24 right-4 sm:right-10 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#F4B6C6]/25 blur-3xl pointer-events-none -z-10 max-w-full" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 min-[900px]:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column: Stacked first on mobile, centered text below 600px */}
          <div className="min-[900px]:col-span-7 flex flex-col items-center min-[900px]:items-start text-center min-[900px]:text-left z-10 w-full">
            {/* Tag / Micro-kicker */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-4 border border-[#F4B6C6] bg-[#FBE4EA] text-[#B03A63] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" />
              <span>Handcrafted in Lahore | Pattoki</span>
            </div>

            {/* Fluid H1 Headline */}
            <h1 className="font-serif italic font-bold tracking-tight fluid-h1 mb-3 text-[#3A2A30] w-full">
              Crafted with{' '}
              <span className="text-[#C9A66B]">Love</span>,<br />
              Made for{' '}
              <span className="highlight-marker">Memories</span>
            </h1>

            {/* Floral decorative divider */}
            <div className="flex items-center justify-center min-[900px]:justify-start mb-4 w-full" aria-hidden="true">
              <img
                src="/assets/icons/headings/divider-ornament.svg"
                alt=""
                className="h-4 sm:h-5 w-auto max-w-[180px] sm:max-w-[200px] opacity-80"
                width={180}
                height={20}
              />
            </div>

            {/* Poetic Secondary Line Banner */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 border border-[#F4B6C6]/60 bg-white text-[#3A2A30] shadow-xs text-xs sm:text-sm">
              <span className="font-serif italic font-semibold text-[#B03A63]">
                Gifts from the heart
              </span>
              <span className="opacity-30">|</span>
              <span className="text-[#3A2A30]/75">Handmade for every moment</span>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#3A2A30]/85 leading-relaxed max-w-xl mb-6 sm:mb-8">
              Welcome to <strong>Mini Makers</strong>, an artisan gift studio based in <strong>Lahore | Pattoki</strong>. We hand-create everlasting velvet flower bouquets, royal Pakistani wedding keepsakes, personalized acrylic frames, and customized snack crates tailored with your heartfelt notes.
            </p>

            {/* Hero CTAs: Full width on mobile (<600px), row on desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8 sm:mb-10">
              <button
                onClick={() => {
                  onNavigate('bouquets');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-3.5 min-h-[48px] rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all bg-[#B03A63] hover:bg-[#962B56] text-white shadow-md shadow-[#B03A63]/25 flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 min-h-[48px] rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md shadow-[#25D366]/20 flex items-center justify-center gap-2 active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 min-h-[48px] rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all border border-[#F4B6C6] bg-white text-[#B03A63] hover:bg-[#FBE4EA] flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                <span>DM on Instagram</span>
              </a>
            </div>

            {/* Trust Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-2xl pt-4 border-t border-[#F4B6C6]/40 text-left">
              <div className="p-2.5 rounded-2xl border border-[#F4B6C6]/50 bg-white flex items-center gap-2 shadow-xs">
                <Palette className="w-4 h-4 text-[#B03A63] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold">100% Handmade</span>
              </div>
              <div className="p-2.5 rounded-2xl border border-[#F4B6C6]/50 bg-white flex items-center gap-2 shadow-xs">
                <Sparkles className="w-4 h-4 text-[#C9A66B] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold">Customizable</span>
              </div>
              <div className="p-2.5 rounded-2xl border border-[#F4B6C6]/50 bg-white flex items-center gap-2 shadow-xs">
                <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold">Across Pakistan</span>
              </div>
              <div className="p-2.5 rounded-2xl border border-[#F4B6C6]/50 bg-white flex items-center gap-2 shadow-xs">
                <Users className="w-4 h-4 text-[#B03A63] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold">1.2K+ IG Family</span>
              </div>
            </div>
          </div>

          {/* Right Collage Column: Contained, fluid width on small screens to prevent overflow */}
          <div className="min-[900px]:col-span-5 relative flex items-center justify-center mt-4 min-[900px]:mt-0 w-full overflow-visible">
            <div className="relative w-full max-w-[340px] sm:max-w-md aspect-[4/5] flex items-center justify-center mx-auto">
              
              {/* Backing Ambient Arch */}
              <div className="absolute inset-2 sm:inset-3 rounded-[100px] sm:rounded-[140px] bg-gradient-to-b from-[#FBE4EA] via-[#FFF8F3] to-[#F4B6C6]/50 -rotate-2 -z-10" />

              {/* 1. Main Center Arched Card: Handmade Flower Bouquet */}
              <div
                onClick={() => onSelectProduct(PRODUCTS[0])}
                className="relative z-10 w-[72%] sm:w-72 h-[340px] sm:h-[410px] rounded-t-[100px] sm:rounded-t-[140px] rounded-b-[24px] sm:rounded-b-[32px] overflow-hidden p-1.5 sm:p-2 cursor-pointer transition-transform duration-300 border-2 border-[#F4B6C6] bg-white shadow-xl"
              >
                <div className="w-full h-full rounded-t-[94px] sm:rounded-t-[132px] rounded-b-[20px] sm:rounded-b-[24px] overflow-hidden relative group">
                  <img
                    src="/assets/images/hero/hero-bouquet.jpg"
                    alt="Handmade Everlasting Flower Bouquet"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={288}
                    height={410}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                    <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#B03A63] inline-block mb-1">
                      Everlasting Blooms
                    </span>
                    <h4 className="font-serif text-sm sm:text-base font-bold leading-tight line-clamp-1">
                      Plush Chenille Red Tulip Bouquet
                    </h4>
                    <p className="text-[11px] text-pink-100 mt-0.5">Price on request, DM to order</p>
                  </div>
                </div>
              </div>

              {/* 2. Left Overlapping Card: Customized Shadi Keepsake */}
              <div
                onClick={() => onSelectProduct(PRODUCTS[6])}
                className="absolute -left-1 sm:-left-4 bottom-3 sm:bottom-8 z-20 w-[42%] sm:w-44 h-40 sm:h-56 rounded-t-[70px] sm:rounded-t-[90px] rounded-b-xl sm:rounded-b-2xl overflow-hidden p-1 sm:p-1.5 -rotate-6 cursor-pointer border border-[#F4B6C6] bg-white shadow-lg"
              >
                <div className="w-full h-full rounded-t-[66px] sm:rounded-t-[84px] rounded-b-lg sm:rounded-b-xl overflow-hidden relative group">
                  <img
                    src="/assets/images/hero/hero-frame.jpg"
                    alt="Customized Shadi Keepsake Glass"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={176}
                    height={224}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-white">
                    <span className="text-[8px] sm:text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#C9A66B] font-bold inline-block">
                      Shadi Special
                    </span>
                    <p className="font-serif text-[10px] sm:text-xs font-semibold leading-tight mt-0.5 truncate">
                      Royal Doodh Pilai Glass
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Right Overlapping Card: Alphabet Gift Box */}
              <div
                onClick={() => onSelectProduct(PRODUCTS[10])}
                className="absolute -right-1 sm:-right-3 top-4 sm:top-10 z-20 w-[38%] sm:w-40 h-36 sm:h-52 rounded-xl sm:rounded-2xl overflow-hidden p-1 sm:p-1.5 rotate-6 cursor-pointer border border-[#F4B6C6] bg-white shadow-lg"
              >
                <div className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden relative group">
                  <img
                    src="/assets/images/hero/hero-snack-box.jpg"
                    alt="Personalized Alphabetic Gift Box"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={160}
                    height={208}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 text-white text-center">
                    <span className="text-[8px] sm:text-[9px] font-bold text-pink-200 uppercase tracking-wide">
                      Alphabet Keepsake
                    </span>
                    <p className="font-serif text-[10px] sm:text-xs font-semibold truncate">Custom Snack Box</p>
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 border-t border-[#F4B6C6]/40 bg-[#FFF8F3]">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header: Centered on mobile */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-2 mb-2 font-serif italic text-sm sm:text-base font-medium text-[#C9A66B] tracking-wide">
              <img
                src="/assets/icons/headings/giftbox-heading.svg"
                alt=""
                className="w-6 h-6 sm:w-7 sm:h-7 inline-block object-contain"
                width={28}
                height={28}
              />
              <span>our collection</span>
            </div>
            <h2 className="font-serif italic text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-1 mb-2 text-[#3A2A30] fluid-h2">
              Gifts for <span className="highlight-marker">Every Occasion</span>
            </h2>

            {/* Floral decorative divider */}
            <div className="flex items-center justify-center my-3" aria-hidden="true">
              <img
                src="/assets/icons/headings/divider-ornament.svg"
                alt=""
                className="h-4 sm:h-5 w-auto max-w-[200px] opacity-80"
                width={200}
                height={20}
              />
            </div>
            <p className="text-xs sm:text-sm text-[#3A2A30]/80 leading-relaxed px-2">
              Thoughtfully hand-stitched, sculpted, and personalized in our Lahore | Pattoki workshops. Click any category to browse or customize with your colors.
            </p>

            {/* Category Chip Ribbon: Smooth horizontal swipe with scroll-snap and hidden scrollbars (Priority 10) */}
            <div className="mobile-swipe-ribbon gap-2 mt-6 justify-start sm:justify-center px-1">
              {filterChips.map((chip) => {
                const isSelected = selectedCategoryFilter === chip.id;
                return (
                  <button
                    key={chip.id}
                    onClick={() => setSelectedCategoryFilter(chip.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border min-h-[44px] flex items-center justify-center shrink-0 ${
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

          {/* Grid of Large Rounded Category Cards (Priority 5: 2 cols phones, 3 tablets, 3 desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                className="group relative rounded-3xl overflow-hidden p-3.5 sm:p-4 border border-[#F4B6C6]/60 bg-[#FBE4EA]/50 hover:bg-white cursor-pointer transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col h-full"
              >
                {/* Arched Image Container with aspect ratio */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3.5 bg-[#FFF8F3]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider backdrop-blur-md bg-black/50 text-white border border-white/20">
                    {cat.itemCount} Designs
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 text-white">
                    <span className="font-serif italic text-xs font-semibold text-pink-200">
                      {cat.urdu}
                    </span>
                  </div>
                </div>

                {/* Card Text & Action */}
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#3A2A30] group-hover:text-[#B03A63] transition-colors">
                      {cat.name}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white text-[#B03A63] flex items-center justify-center shrink-0 shadow-xs">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs text-[#3A2A30]/75 line-clamp-2 leading-relaxed mb-3">
                    {cat.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between text-xs font-medium pt-2 border-t border-[#F4B6C6]/40">
                    <span className="text-[#B03A63] font-semibold">View Collection</span>
                    <span className="text-[#3A2A30]/60">Price on request, DM</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Handmade Accessories Strip: Stacks on mobile */}
          <div className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-2xl border border-[#C9A66B]/50 bg-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FBE4EA] text-[#B03A63] flex items-center justify-center shrink-0">
                <img
                  src="/assets/icons/headings/accessory-heading.svg"
                  alt=""
                  className="w-7 h-7 object-contain"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C9A66B]">
                  Dainty Embellishments
                </span>
                <h4 className="font-serif italic text-base sm:text-lg font-bold text-[#3A2A30]">
                  Handmade Accessories &amp; <span className="highlight-marker">Gota Pins</span>
                </h4>
                <p className="text-xs text-[#3A2A30]/80 mt-0.5">
                  Pearl wrist corsages, silk scrunchies, and custom hair brooches for bridal squads.
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                onNavigate('frames-baskets');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 py-2.5 min-h-[44px] rounded-full text-xs font-semibold uppercase tracking-wider border-2 border-[#B03A63] text-[#B03A63] hover:bg-[#B03A63] hover:text-white shrink-0 transition-all"
            >
              Explore Accessories
            </button>
          </div>

          {/* Featured Masterpieces Adaptive Product Grid (Priority 5: 2 cols phone, 3 tablet, 4 desktop) */}
          <div className="mt-12 sm:mt-16">
            <div className="flex flex-col sm:flex-row items-center sm:items-baseline justify-between mb-6 sm:mb-8 text-center sm:text-left">
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1 font-serif italic text-sm font-medium text-[#C9A66B] tracking-wide">
                  <img
                    src="/assets/icons/headings/about-heart-heading.svg"
                    alt=""
                    className="w-6 h-6 inline-block object-contain"
                    width={24}
                    height={24}
                  />
                  <span>artisan craft</span>
                </div>
                <h3 className="font-serif italic text-xl sm:text-3xl font-bold text-[#3A2A30]">
                  Signature <span className="highlight-marker">Personalized Pieces</span>
                </h3>
                <div className="flex items-center justify-center sm:justify-start my-2" aria-hidden="true">
                  <img
                    src="/assets/icons/headings/divider-ornament.svg"
                    alt=""
                    className="h-4 w-auto max-w-[180px] opacity-80"
                    width={180}
                    height={16}
                  />
                </div>
              </div>
              <button
                onClick={() => onNavigate('bouquets')}
                className="text-xs font-semibold text-[#B03A63] hover:underline mt-2 sm:mt-0 flex items-center justify-center gap-1 min-h-[44px]"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 2 columns on phones, 3 on tablets, 4 on desktop with equal heights */}
            <div className="adaptive-catalog-grid">
              {featuredBespoke.map((item) => (
                <article
                  key={item.id}
                  onClick={() => onSelectProduct(item)}
                  className="rounded-2xl overflow-hidden border border-[#F4B6C6]/50 bg-white p-3 flex flex-col h-full cursor-pointer transition-all duration-300 shadow-xs hover:shadow-md"
                >
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-2.5 bg-[#FBE4EA]/30">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500"
                      loading="lazy"
                      width={280}
                      height={350}
                    />
                    {item.badge && (
                      <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wide bg-[#B03A63] text-white shadow-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-[#B03A63] tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-xs sm:text-base font-bold truncate mt-0.5 mb-1 text-[#3A2A30]">
                    {item.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#3A2A30]/75 line-clamp-2 mb-2 leading-relaxed">
                    {item.tagline}
                  </p>
                  <div className="mt-auto pt-2 border-t border-[#F4B6C6]/30 flex flex-col min-[480px]:flex-row min-[480px]:items-center justify-between gap-1">
                    <span className="text-[11px] sm:text-xs font-semibold text-[#B03A63]">
                      Price on request, DM
                    </span>
                    <span className="text-[11px] font-medium text-[#C9A66B] underline hover:text-[#B03A63]">
                      Inquire →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
