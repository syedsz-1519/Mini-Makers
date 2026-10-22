import React, { useState } from 'react';
import {
  MessageCircle,
  Sparkles,
  ChevronRight,
  Frame,
  ShoppingBag,
  Scissors,
  Gift,
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
  const greetingBoxes = PRODUCTS.filter((p) => p.category === 'greeting-boxes');

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
            <span className="font-semibold text-[#B03A63]">Frames, Baskets &amp; Accessories</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              {/* Script-style gold eyebrow with frame SVG */}
              <div className="flex items-center gap-2 mb-2 font-serif italic text-sm sm:text-base font-medium text-[#C9A66B] tracking-wide">
                <img
                  src="/assets/icons/headings/frame-heading.svg"
                  alt=""
                  className="w-7 h-7 inline-block object-contain"
                />
                <span>cherished memories &amp; gifts</span>
              </div>

              <h1 className="font-serif italic font-bold tracking-tight fluid-h1 text-[#3A2A30]">
                Keepsake <span className="highlight-marker">Frames &amp; Baskets</span>
              </h1>

              {/* Floral decorative divider */}
              <div className="flex items-center my-3" aria-hidden="true">
                <img
                  src="/assets/icons/headings/divider-ornament.svg"
                  alt=""
                  className="h-5 w-auto max-w-[200px] opacity-80"
                />
              </div>

              <p className="text-sm text-[#3A2A30]/80 mt-1 max-w-xl leading-relaxed">
                Cherish sacred milestones with personalized floating frames, handwoven Punjab cane baskets, and handcrafted gota accessories.
              </p>
            </div>

            {/* 3 Interactive Tabs */}
            <div className="p-1 rounded-full border border-[#F4B6C6] bg-white flex items-center gap-1 shadow-xs">
              <button
                onClick={() => setActiveTab('frames')}
                className={`px-4 py-2 min-h-[44px] rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
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
                className={`px-4 py-2 min-h-[44px] rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
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
                className={`px-4 py-2 min-h-[44px] rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-10">
        
        {/* TAB 1: CUSTOMIZED FRAMES */}
        {activeTab === 'frames' && (
          <section className="space-y-6">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="flex items-center justify-center gap-2 mb-1.5 font-serif italic text-sm font-medium text-[#C9A66B] tracking-wide">
                <img
                  src="/assets/icons/headings/frame-heading.svg"
                  alt=""
                  className="w-6 h-6 inline-block object-contain"
                />
                <span>archival preservation</span>
              </div>
              <h2 className="font-serif italic text-2xl sm:text-3xl font-bold text-[#3A2A30]">
                Preserve Every Memory in <span className="highlight-marker">Gold &amp; Glass</span>
              </h2>
              {/* Decorative Floral / Diamond Divider */}
              <div className="flex items-center justify-center my-3" aria-hidden="true">
                <img
                  src="/assets/icons/headings/divider-ornament.svg"
                  alt=""
                  className="h-4 w-auto max-w-[200px] opacity-80"
                />
              </div>
              <p className="text-xs text-[#3A2A30]/75">
                Nikkah certificates, baby birth announcements, and couple anniversary dates pressed between archival floating panes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {frames.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectProduct(item)}
                  className="rounded-3xl p-4 border border-[#F4B6C6]/60 bg-white flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-[#FBE4EA]/30">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-md text-white">
                      Archival Glass
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-1 text-[#3A2A30]">{item.name}</h3>
                  <p className="text-xs text-[#3A2A30]/75 line-clamp-2 mb-3">{item.description}</p>
                  <div className="mt-auto pt-2 border-t border-[#F4B6C6]/40 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#B03A63]">Price on request, DM to order</span>
                    <span className="text-xs font-semibold underline text-[#C9A66B] hover:text-[#B03A63]">Order Frame →</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 2: BASKETS */}
        {activeTab === 'baskets' && (
          <section className="space-y-6">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="flex items-center justify-center gap-2 mb-1.5 font-serif italic text-sm font-medium text-[#C9A66B] tracking-wide">
                <img
                  src="/assets/icons/headings/basket-heading.svg"
                  alt=""
                  className="w-6 h-6 inline-block object-contain"
                />
                <span>woven with affection</span>
              </div>
              <h2 className="font-serif italic text-2xl sm:text-3xl font-bold text-[#3A2A30]">
                Handwoven Punjab Cane &amp; <span className="highlight-marker">Treat Baskets</span>
              </h2>
              <div className="flex items-center justify-center my-3" aria-hidden="true">
                <img
                  src="/assets/icons/headings/divider-ornament.svg"
                  alt=""
                  className="h-4 w-auto max-w-[200px] opacity-80"
                />
              </div>
              <p className="text-xs text-[#3A2A30]/75">
                Snack baskets, newborn welcome hampers, and celebration trays trimmed with satin ribbons and baby’s breath.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {baskets.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectProduct(item)}
                  className="rounded-3xl p-4 border border-[#F4B6C6]/60 bg-white flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-[#FBE4EA]/30">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-1 text-[#3A2A30]">{item.name}</h3>
                  <p className="text-xs text-[#3A2A30]/75 line-clamp-2 mb-3">{item.description}</p>
                  <div className="mt-auto pt-2 border-t border-[#F4B6C6]/40 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#B03A63]">Price on request, DM to order</span>
                    <span className="text-xs font-semibold underline text-[#C9A66B] hover:text-[#B03A63]">Inquire Basket →</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 3: ACCESSORIES */}
        {activeTab === 'accessories' && (
          <section className="space-y-6">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="flex items-center justify-center gap-2 mb-1.5 font-serif italic text-sm font-medium text-[#C9A66B] tracking-wide">
                <img
                  src="/assets/icons/headings/accessory-heading.svg"
                  alt=""
                  className="w-6 h-6 inline-block object-contain"
                />
                <span>dainty wedding adornments</span>
              </div>
              <h2 className="font-serif italic text-2xl sm:text-3xl font-bold text-[#3A2A30]">
                Handcrafted Gota &amp; <span className="highlight-marker">Pearl Adornments</span>
              </h2>
              <div className="flex items-center justify-center my-3" aria-hidden="true">
                <img
                  src="/assets/icons/headings/divider-ornament.svg"
                  alt=""
                  className="h-4 w-auto max-w-[200px] opacity-80"
                />
              </div>
              <p className="text-xs text-[#3A2A30]/75">
                Gota flower hair pins, silk scrunchies, and wedding wrist corsages hand-stitched for sisters and brides.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {accessories.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectProduct(item)}
                  className="rounded-3xl p-4 border border-[#F4B6C6]/60 bg-white flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-[#FBE4EA]/30">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-1 text-[#3A2A30]">{item.name}</h3>
                  <p className="text-xs text-[#3A2A30]/75 line-clamp-2 mb-3">{item.description}</p>
                  <div className="mt-auto pt-2 border-t border-[#F4B6C6]/40 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#B03A63]">Price on request, DM to order</span>
                    <span className="text-xs font-semibold underline text-[#C9A66B] hover:text-[#B03A63]">Order via DM →</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Greeting Boxes Strip (Eidi Treasure, Flower Basket) */}
        <section className="mt-16 p-6 sm:p-8 rounded-3xl border border-[#F4B6C6] bg-gradient-to-r from-[#FBE4EA]/60 via-white to-[#FBE4EA]/40 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#B03A63] flex items-center gap-1.5">
                <Gift className="w-4 h-4 text-[#C9A66B]" />
                <span>Festive &amp; Eidi Keepsakes</span>
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-[#3A2A30]">
                Greeting Boxes &amp; Eidi Treasure Chests
              </h2>
              <p className="text-xs text-[#3A2A30]/80 mt-1 max-w-xl">
                Make Eid, Chaand Raat, and family reunions memorable with engraved wooden treasure chests and floral greeting boxes.
              </p>
            </div>
            <a
              href={`https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(
                'Assalam-o-Alaikum! I want to inquire about custom Eidi Treasure Boxes and Greeting Hampers.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 min-h-[44px] rounded-full text-xs font-semibold bg-[#25D366] hover:bg-[#20ba59] text-white shrink-0 flex items-center gap-1.5 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Eidi Boxes on WhatsApp</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {greetingBoxes.map((box) => (
              <div
                key={box.id}
                onClick={() => onSelectProduct(box)}
                className="p-4 rounded-2xl border border-[#F4B6C6]/60 bg-white flex items-center gap-4 cursor-pointer hover:border-[#B03A63] transition-all shadow-xs"
              >
                <img
                  src={box.image}
                  alt={box.name}
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />
                <div className="flex flex-col">
                  <h4 className="font-serif text-base font-bold leading-tight text-[#3A2A30]">{box.name}</h4>
                  <p className="text-xs text-[#3A2A30]/75 line-clamp-2 mt-1">{box.description}</p>
                  <span className="text-xs font-semibold text-[#B03A63] mt-2">
                    Price on request, DM to order
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
