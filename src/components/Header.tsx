import React, { useState } from 'react';
import {
  MessageCircle,
  Instagram,
  ShoppingBag,
  Menu,
  X,
  Sparkles,
  Search,
  Phone,
  Heart,
} from 'lucide-react';
import { BRAND } from '../data/catalog';

interface HeaderProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'bouquets', label: 'Bouquets' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'gift-boxes', label: 'Gift Boxes' },
    { id: 'frames-baskets', label: 'Frames & Baskets' },
    { id: 'how-to-order', label: 'How to Order' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'custom-order', label: 'Custom Request' },
  ];

  const handleNavClick = (screenId: string) => {
    onNavigate(screenId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-xs">
      {/* Announcement Bar */}
      <div className="py-2 px-4 text-xs font-medium text-center bg-[#FBE4EA] text-[#B03A63] border-b border-[#F4B6C6]/50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" />
          <span>Free handwritten personalized card with every order</span>
          <span className="opacity-40">·</span>
          <span className="font-serif italic font-semibold">
            {BRAND.tagline} · Lahore | Pattoki
          </span>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="px-4 lg:px-8 py-3.5 bg-[#FFF8F3]/95 backdrop-blur-md border-b border-[#F4B6C6]/40 text-[#3A2A30]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group shrink-0 focus:outline-none"
            aria-label="Mini Makers Home"
          >
            <div className="w-11 h-11 rounded-full overflow-hidden p-0.5 border-2 border-[#F4B6C6] bg-white shadow-sm transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
              <img
                src={BRAND.logoUrl}
                alt="Mini Makers Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#3A2A30] leading-none">
                {BRAND.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase mt-1 font-semibold text-[#B03A63]">
                Lahore | Pattoki · Handmade
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1.5 text-sm font-medium" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentScreen === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap text-xs uppercase tracking-wider font-medium min-h-[44px] flex items-center justify-center ${
                    isActive
                      ? 'bg-[#B03A63] text-white shadow-sm font-semibold'
                      : 'text-[#3A2A30]/80 hover:text-[#B03A63] hover:bg-[#FBE4EA]/80'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-[#FBE4EA] text-[#3A2A30]/80 hover:text-[#B03A63] focus:outline-none focus:ring-2 focus:ring-[#F4B6C6]"
              title="Search catalog"
              aria-label="Search items"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Inquiry / Cart Bag */}
            <button
              onClick={onOpenCart}
              className="relative w-11 h-11 rounded-full border border-[#F4B6C6] bg-white text-[#B03A63] hover:bg-[#FBE4EA] flex items-center justify-center transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#B03A63]"
              title="View Inquiry Bag"
              aria-label="View Inquiry Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#B03A63] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on WhatsApp 0341-4655335"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full text-xs font-semibold tracking-wide uppercase transition-all bg-[#B03A63] hover:bg-[#962B56] text-white shadow-sm hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            {/* Instagram Quick Link */}
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex w-11 h-11 rounded-full border border-[#F4B6C6]/70 text-[#3A2A30]/75 hover:text-[#B03A63] hover:bg-[#FBE4EA] items-center justify-center transition-colors"
              title="Follow @minimakers4 on Instagram"
              aria-label="Instagram profile"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-11 h-11 rounded-full border border-[#F4B6C6] flex items-center justify-center text-[#3A2A30] hover:bg-[#FBE4EA] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-[#F4B6C6]/40 bg-[#FFF8F3] px-5 py-6 space-y-4 animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = currentScreen === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 min-h-[44px] rounded-2xl text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#B03A63] text-white font-semibold shadow-xs'
                      : 'text-[#3A2A30] hover:bg-[#FBE4EA]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <Heart className="w-3.5 h-3.5 fill-white text-white" />}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#F4B6C6]/40 flex flex-col gap-3">
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 min-h-[44px] rounded-2xl bg-[#25D366] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: 0341-4655335</span>
            </a>

            <div className="grid grid-cols-3 gap-2">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 min-h-[44px] rounded-xl border border-[#F4B6C6] bg-white text-[#B03A63] text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>

              <a
                href={BRAND.phoneCall}
                className="py-2.5 min-h-[44px] rounded-xl border border-[#F4B6C6] bg-white text-[#3A2A30] text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#B03A63]" />
                <span>Call Us</span>
              </a>

              <a
                href={BRAND.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 min-h-[44px] rounded-xl border border-[#F4B6C6] bg-white text-[#3A2A30] text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <span className="font-bold text-xs">TikTok</span>
              </a>
            </div>

            <div className="text-center text-xs text-[#3A2A30]/70 pt-2 font-serif italic">
              Crafted with Love, Made for Memories · Lahore | Pattoki
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
