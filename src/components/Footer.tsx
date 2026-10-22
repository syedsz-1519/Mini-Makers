import React from 'react';
import {
  MessageCircle,
  Instagram,
  Heart,
  MapPin,
  Sparkles,
  Phone,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { BRAND } from '../data/catalog';

interface FooterProps {
  onNavigate: (screen: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-[#F4B6C6]/50 bg-[#FFF8F3] text-[#3A2A30] transition-colors pb-28 sm:pb-32">
      {/* Upper Inquiry Banner: Stacks vertically on mobile */}
      <div className="py-8 sm:py-10 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-[#FBE4EA]/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest font-semibold flex items-center justify-center md:justify-start gap-1.5 text-[#B03A63]">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
              <span>Personalized Memory Atelier · Lahore | Pattoki</span>
            </span>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mt-1 text-[#3A2A30]">
              Have a Custom Gift Idea or Pinterest Board?
            </h3>
            <p className="text-xs sm:text-sm mt-2 text-[#3A2A30]/80">
              Send us your screenshots, names, colors, and event date on WhatsApp or Instagram. We turn your heartfelt feelings into handcrafted keepsakes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 min-h-[48px] rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase flex items-center justify-center gap-2 transition-all bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md shadow-[#25D366]/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: 0341-4655335</span>
            </a>
            <button
              onClick={() => {
                onNavigate('custom-order');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 py-3 min-h-[48px] rounded-full text-xs sm:text-sm font-semibold border-2 border-[#B03A63] text-[#B03A63] hover:bg-[#FBE4EA] transition-all bg-white"
            >
              Custom Request Form
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links: Stacks on mobile, with collections in a 2-column grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          
          {/* Brand Info (2 cols desktop) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden p-0.5 border-2 border-[#F4B6C6] bg-white shadow-xs shrink-0">
                <img
                  src={BRAND.logoUrl}
                  alt="Mini Makers"
                  className="w-full h-full object-contain rounded-full"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight block text-[#3A2A30]">
                  {BRAND.name}
                </span>
                <span className="text-xs italic text-[#B03A63] font-serif">
                  {BRAND.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#3A2A30]/80 leading-relaxed max-w-sm mb-5">
              Pakistani boutique handmade personalized gift brand based in <strong>Lahore | Pattoki</strong>. Crafting everlasting chenille flower bouquets, royal shadi accessories, doodh pilai sets, bespoke letters, and memory frames.
            </p>

            {/* Direct Contact Links */}
            <div className="flex flex-col gap-2.5 text-xs text-[#3A2A30]/90 w-full max-w-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B03A63] shrink-0" />
                <span>Workshop: <strong>Lahore | Pattoki</strong>, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B03A63] shrink-0" />
                <a href={BRAND.phoneCall} className="hover:underline font-semibold text-[#B03A63]">
                  Direct Hotline: 0341-4655335
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#B03A63] shrink-0" />
                <span>Nationwide Courier: Lahore, Karachi, Islamabad &amp; all cities</span>
              </div>
            </div>

            {/* Social Channels Strip */}
            <div className="flex items-center gap-2.5 mt-5">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Mini Makers"
                className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs hover:scale-105 transition-transform"
                title="WhatsApp 0341-4655335"
              >
                <img src="/assets/icons/whatsapp.svg" alt="" className="w-5 h-5 filter brightness-0 invert" width={20} height={20} />
              </a>

              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @minimakers4"
                className="w-11 h-11 rounded-full text-white flex items-center justify-center shadow-xs hover:scale-105 transition-transform"
                style={{
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                }}
                title="Instagram @minimakers4"
              >
                <img src="/assets/icons/instagram.svg" alt="" className="w-5 h-5 filter brightness-0 invert" width={20} height={20} />
              </a>

              <a
                href={BRAND.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok @minimakers_4"
                className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center shadow-xs hover:scale-105 transition-transform"
                title="TikTok @minimakers_4"
              >
                <img src="/assets/icons/tiktok.svg" alt="" className="w-5 h-5 filter brightness-0 invert" width={20} height={20} />
              </a>

              <a
                href={BRAND.phoneCall}
                aria-label="Phone Call Mini Makers"
                className="w-11 h-11 rounded-full border border-[#F4B6C6] bg-white text-[#B03A63] flex items-center justify-center shadow-xs hover:scale-105 transition-transform"
                title="Call 0341-4655335"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links & Customer Care: 2-column grid on mobile (Priority 11) */}
          <div className="grid grid-cols-2 gap-6 md:contents">
            {/* Collections */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-[#B03A63]">
                Collections
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#3A2A30]/80">
                <li>
                  <button
                    onClick={() => onNavigate('bouquets')}
                    className="hover:text-[#B03A63] transition-colors text-left"
                  >
                    Everlasting Bouquets
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('wedding')}
                    className="hover:text-[#B03A63] transition-colors text-left"
                  >
                    Wedding &amp; Nikkah
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('gift-boxes')}
                    className="hover:text-[#B03A63] transition-colors text-left"
                  >
                    Specialty Snack Boxes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('frames-baskets')}
                    className="hover:text-[#B03A63] transition-colors text-left"
                  >
                    Customized Frames
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('frames-baskets')}
                    className="hover:text-[#B03A63] transition-colors text-left"
                  >
                    Baskets &amp; Corsages
                  </button>
                </li>
              </ul>
            </div>

            {/* How We Work */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-[#B03A63]">
                How We Work
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#3A2A30]/80">
                <li>
                  <button
                    onClick={() => onNavigate('how-to-order')}
                    className="hover:text-[#B03A63] transition-colors text-left"
                  >
                    6-Step Order Flow
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('reviews')}
                    className="hover:text-[#B03A63] transition-colors text-left"
                  >
                    WhatsApp Reviews
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('how-to-order')}
                    className="hover:text-[#B03A63] transition-colors text-left"
                  >
                    JazzCash &amp; EasyPaisa
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('custom-order')}
                    className="hover:text-[#B03A63] transition-colors text-left"
                  >
                    Express Dispatch
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Trust & Safe Delivery */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-[#B03A63]">
              Safe Dispatch
            </h4>
            <div className="p-4 rounded-2xl border border-[#F4B6C6]/60 bg-white text-xs leading-relaxed space-y-2 shadow-xs">
              <div className="flex items-center gap-1.5 font-semibold text-emerald-600">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>100% Damage Protection</span>
              </div>
              <p className="text-[#3A2A30]/80">
                Reinforced outer crates and double-bubble wrap layers for glass and delicate flower petals.
              </p>
              <div className="pt-2 border-t border-[#F4B6C6]/30 flex items-center gap-2 flex-wrap font-medium">
                <span className="text-[#B03A63]">JazzCash</span>
                <span>·</span>
                <span className="text-emerald-600">EasyPaisa</span>
                <span>·</span>
                <span>Bank Transfer</span>
              </div>
            </div>

            <div className="mt-3 p-3 rounded-xl bg-[#FBE4EA] text-xs text-[#B03A63] text-center font-medium">
              📩 DM Us to Order on WhatsApp or Instagram
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#F4B6C6]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#3A2A30]/75 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Mini Makers. Crafted with Love, Made for Memories.</p>
          <div className="flex items-center justify-center gap-1.5">
            <span>Handmade with</span>
            <Heart className="w-3.5 h-3.5 text-[#B03A63] fill-[#B03A63] inline" />
            <span>in <strong>Lahore | Pattoki</strong>, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
