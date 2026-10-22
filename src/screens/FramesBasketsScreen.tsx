import React, { useState } from 'react';
import {
  MessageCircle,
  Sparkles,
  ChevronRight,
  Frame,
  ShoppingBag,
  Scissors,
} from 'lucide-react';
import { BRAND, PRODUCTS } from '../data/catalog';
import { Product } from '../types';

interface FramesBasketsScreenProps {
  onNavigate: (screen: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const FramesBasketsScreen: React.FC<FramesBasketsScreenProps> = ({
  onNavigate,
  onSelectProduct,
}) => {
  const [activeTab, setActiveTab] = useState<'frames' | 'baskets' | 'accessories'>('frames');

  const frames = PRODUCTS.filter((p) => p.category === 'frames');
  const baskets = PRODUCTS.filter((p) => p.category === 'baskets');
  const accessories = PRODUCTS.filter((p) => p.category === 'accessories');

  return (
    <div className="w-full pb-10 sm:pb-16 bg-[#FFF8F3] text-[#3A2A30] overflow-x-clip">
      {/* Header */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-[#FBE4EA]/50">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-1.5 text-xs text-[#3A2A30]/70 mb-3" aria-label="Breadcrumb">
            <button onClick={() => onNavigate('home')} className="hover:text-[#B03A63] transition-colors min-h-[44px] flex items-center">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="font-semibold text-[#B03A63]">Frames, Baskets &amp; Accessories</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              {/* Gold eyebrow with frame SVG */}
              <div className="flex items-center gap-2 mb-1.5 font-serif italic text-sm sm:text-base font-medium text-[#C9A66B] tracking-wide">
                <img
                  src="/assets/icons/headings/frame-heading.svg"
                  alt=""
                  className="w-6 h-6 sm:w-7 sm:h-7 inline-block object-contain"
                  width={28}
                  height={28}
                />
                <span>cherished memories &amp; gifts</span>
              </div>

              <h1 className="font-serif italic font-bold tracking-tight fluid-h1 text-[#3A2A30]">
                Keepsake <span className="highlight-marker">Frames &amp; Baskets</span>
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
                Cherish sacred milestones with personalized floating frames, handwoven Punjab cane baskets, and handcrafted gota accessories.
              </p>
            </div>

            {/* 3 Interactive Tabs: Swipeable on mobile to prevent squishing */}
            <div className="mobile-swipe-ribbon p-1 rounded-2xl sm:rounded-full border border-[#F4B6C6] bg-white gap-1 shadow-xs max-w-full">
              <button
                onClick={() => setActiveTab('frames')}
                className={`px-3.5 sm:px-4 py-2 min-h-[44px] rounded-xl sm:rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap shrink-0 ${
                  activeTab === 'frames'
                    ? 'bg-[#B03A63] text-white shadow-xs'
                    : 'text-[#3A2A30] hover:bg-[#FBE4EA]'
                }`}
              >
                <Frame className="w-3.5 h-3.5" />
                <span>Customized Frames</span>
              </button>
              <button
                onClick={() => setActiveTab('baskets')}
                className={`px-3.5 sm:px-4 py-2 min-h-[44px] rounded-xl sm:rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap shrink-0 ${
                  activeTab === 'baskets'
                    ? 'bg-[#B03A63] text-white shadow-xs'
                    : 'text-[#3A2A30] hover:bg-[#FBE4EA]'
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Baskets</span>
              </button>
              <button
                onClick={() => setActiveTab('accessories')}
                className={`px-3.5 sm:px-4 py-2 min-h-[44px] rounded-xl sm:rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap shrink-0 ${
                  activeTab === 'accessories'
                    ? 'bg-[#B03A63] text-white shadow-xs'
                    : 'text-[#3A2A30] hover:bg-[#FBE4EA]'
                }`}
              >
                <Scissors className="w-3.5 h-3.5" />
                <span>Accessories</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-10">
        
        {/* TAB 1: CUSTOMIZED FRAMES */}
        {activeTab === 'frames' && (
          <section className="space-y-6">
            <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-2 mb-1.5 font-serif italic text-sm font-medium text-[#C9A66B] tracking-wide">
                <img
                  src="/assets/icons/headings/frame-heading.svg"
                  alt=""
                  className="w-6 h-6 inline-block object-contain"
                  width={24}
                  height={24}
                />
                <span>archival preservation</span>
              </div>
              <h2 className="font-serif italic text-xl sm:text-3xl font-bold text-[#3A2A30] fluid-h2">
                Preserve Every Memory in <span className="highlight-marker">Gold &amp; Glass</span>
              </h2>
              <div className="flex items-center justify-center my-2.5" aria-hidden="true">
                <img
                  src="/assets/icons/headings/divider-ornament.svg"
                  alt=""
                  className="h-4 w-auto max-w-[180px] opacity-80"
                  width={180}
                  height={16}
                />
              </div>
              <p className="text-xs text-[#3A2A30]/75">
                Nikkah certificates, baby birth announcements, and couple anniversary dates pressed between archival floating panes.
              </p>
            </div>

            <div className="adaptive-catalog-grid">
              {frames.map((item) => (
                <article
                  key={item.id}
                  className="rounded-3xl border border-[#F4B6C6]/60 bg-white p-3.5 sm:p-4 flex flex-col h-full shadow-xs hover:shadow-lg transition-all group"
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
                  </div>

                  <div className="flex flex-col flex-1">
                    <span className="text-[10px] uppercase font-semibold text-[#B03A63] tracking-wider mb-0.5">
                      {item.subCategory}
                    </span>
                    <h3
                      onClick={() => onSelectProduct(item)}
                      className="font-serif text-sm sm:text-base font-bold hover:text-[#B03A63] cursor-pointer transition-colors mb-1 text-[#3A2A30] line-clamp-2"
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
                          `Assalam-o-Alaikum! I want to order customized frame: ${item.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-3 py-1.5 min-h-[44px] rounded-full text-xs font-semibold bg-[#B03A63] hover:bg-[#962B56] text-white shadow-xs flex items-center justify-center gap-1.5 transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Order</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* TAB 2: CURATED BASKETS */}
        {activeTab === 'baskets' && (
          <section className="space-y-6">
            <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-2 mb-1.5 font-serif italic text-sm font-medium text-[#C9A66B] tracking-wide">
                <img
                  src="/assets/icons/headings/basket-heading.svg"
                  alt=""
                  className="w-6 h-6 inline-block object-contain"
                  width={24}
                  height={24}
                />
                <span>traditional woven wicker</span>
              </div>
              <h2 className="font-serif italic text-xl sm:text-3xl font-bold text-[#3A2A30] fluid-h2">
                Handcrafted <span className="highlight-marker">Cane Baskets</span>
              </h2>
              <div className="flex items-center justify-center my-2.5" aria-hidden="true">
                <img
                  src="/assets/icons/headings/divider-ornament.svg"
                  alt=""
                  className="h-4 w-auto max-w-[180px] opacity-80"
                  width={180}
                  height={16}
                />
              </div>
              <p className="text-xs text-[#3A2A30]/75">
                Newborn baby welcome hampers, festive Eid mithai baskets, and luxury fruit crates wrapped with organza frills.
              </p>
            </div>

            <div className="adaptive-catalog-grid">
              {baskets.map((item) => (
                <article
                  key={item.id}
                  className="rounded-3xl border border-[#F4B6C6]/60 bg-white p-3.5 sm:p-4 flex flex-col h-full shadow-xs hover:shadow-lg transition-all group"
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
                  </div>

                  <div className="flex flex-col flex-1">
                    <span className="text-[10px] uppercase font-semibold text-[#B03A63] tracking-wider mb-0.5">
                      {item.subCategory}
                    </span>
                    <h3
                      onClick={() => onSelectProduct(item)}
                      className="font-serif text-sm sm:text-base font-bold hover:text-[#B03A63] cursor-pointer transition-colors mb-1 text-[#3A2A30] line-clamp-2"
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
                          `Assalam-o-Alaikum! I want to order handcrafted basket: ${item.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-3 py-1.5 min-h-[44px] rounded-full text-xs font-semibold bg-[#B03A63] hover:bg-[#962B56] text-white shadow-xs flex items-center justify-center gap-1.5 transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Order</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* TAB 3: ACCESSORIES */}
        {activeTab === 'accessories' && (
          <section className="space-y-6">
            <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-2 mb-1.5 font-serif italic text-sm font-medium text-[#C9A66B] tracking-wide">
                <img
                  src="/assets/icons/headings/accessory-heading.svg"
                  alt=""
                  className="w-6 h-6 inline-block object-contain"
                  width={24}
                  height={24}
                />
                <span>embellished details</span>
              </div>
              <h2 className="font-serif italic text-xl sm:text-3xl font-bold text-[#3A2A30] fluid-h2">
                Handmade <span className="highlight-marker">Hair Pins &amp; Scrunchies</span>
              </h2>
              <div className="flex items-center justify-center my-2.5" aria-hidden="true">
                <img
                  src="/assets/icons/headings/divider-ornament.svg"
                  alt=""
                  className="h-4 w-auto max-w-[180px] opacity-80"
                  width={180}
                  height={16}
                />
              </div>
              <p className="text-xs text-[#3A2A30]/75">
                Delicate pearl hair clips, hand-pleated satin scrunchies, and woven friendship bead bracelets.
              </p>
            </div>

            <div className="adaptive-catalog-grid">
              {accessories.map((item) => (
                <article
                  key={item.id}
                  className="rounded-3xl border border-[#F4B6C6]/60 bg-white p-3.5 sm:p-4 flex flex-col h-full shadow-xs hover:shadow-lg transition-all group"
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
                  </div>

                  <div className="flex flex-col flex-1">
                    <span className="text-[10px] uppercase font-semibold text-[#B03A63] tracking-wider mb-0.5">
                      {item.subCategory}
                    </span>
                    <h3
                      onClick={() => onSelectProduct(item)}
                      className="font-serif text-sm sm:text-base font-bold hover:text-[#B03A63] cursor-pointer transition-colors mb-1 text-[#3A2A30] line-clamp-2"
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
                          `Assalam-o-Alaikum! I want to order accessory: ${item.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-3 py-1.5 min-h-[44px] rounded-full text-xs font-semibold bg-[#B03A63] hover:bg-[#962B56] text-white shadow-xs flex items-center justify-center gap-1.5 transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Order</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
