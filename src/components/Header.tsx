import React, { useState, useEffect } from 'react';
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
  ArrowRight,
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
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'custom-order', label: 'Custom Request' },
  ];

  // Lock body scroll when mobile navigation drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (screenId: string) => {
    onNavigate(screenId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-xs bg-[#FFF8F3]">
      {/* Announcement Bar */}
      <div className="py-2 px-3 sm:px-4 text-xs font-medium text-center bg-[#FBE4EA] text-[#B03A63] border-b border-[#F4B6C6]/50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" />
          <span className="leading-tight">Free personalized card with every order</span>
          <span className="opacity-40 hidden sm:inline">·</span>
          <span className="font-serif italic font-semibold hidden sm:inline">
            {BRAND.tagline} · Lahore | Pattoki
          </span>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-[#FFF8F3]/95 backdrop-blur-md border-b border-[#F4B6C6]/40 text-[#3A2A30]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
          
          {/* Brand Logo & Name (Always Visible) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 text-left group shrink-0 min-h-[44px] focus:outline-none"
            aria-label="Mini Makers Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden p-0.5 border-2 border-[#F4B6C6] bg-white shadow-xs transition-transform duration-300 group-hover:scale-105 flex items-center justify-center shrink-0">
              <img
                src={BRAND.logoUrl}
                alt="Mini Makers Logo"
                className="w-full h-full object-contain rounded-full"
                width={44}
                height={44}
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#3A2A30] leading-none">
                {BRAND.name}
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-wider uppercase mt-1 font-semibold text-[#B03A63] leading-none">
                Lahore | Pattoki
              </span>
            </div>
          </button>

          {/* Desktop Nav Links (Visible only on screens 1024px and up for generous spacing) */}
          <nav
            className="hidden min-[1024px]:flex items-center gap-0.5 xl:gap-1 text-sm font-medium flex-wrap justify-center"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = currentScreen === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-full transition-all whitespace-nowrap text-[11px] xl:text-xs uppercase tracking-wider font-medium min-h-[44px] flex items-center justify-center ${
                    isActive
                      ? 'bg-[#B03A63] text-white shadow-xs font-semibold'
                      : 'text-[#3A2A30]/85 hover:text-[#B03A63] hover:bg-[#FBE4EA]/80'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
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

            {/* Direct WhatsApp CTA Button (Desktop only) */}
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on WhatsApp 0341-4655335"
              className="hidden min-[1024px]:inline-flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-full text-xs font-semibold tracking-wide uppercase transition-all bg-[#B03A63] hover:bg-[#962B56] text-white shadow-xs hover:shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order Now</span>
            </a>

            {/* Hamburger Button (Visible on screens below 1024px) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="min-[1024px]:hidden w-11 h-11 rounded-full border border-[#F4B6C6] flex items-center justify-center text-[#3A2A30] hover:bg-[#FBE4EA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B03A63]"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide-in Mobile Drawer (Slides in from Right) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 z-50 min-[1024px]:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          {/* Frosted Dark Backdrop (Closes on Outside Tap) */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel: Right Aligned, 320px to 380px wide max */}
          <div className="fixed inset-y-0 right-0 w-[min(85vw,360px)] bg-[#FFF8F3] shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300 border-l border-[#F4B6C6]/60">
            {/* Drawer Header */}
            <div className="p-4 border-b border-[#F4B6C6]/50 flex items-center justify-between bg-[#FBE4EA]/60">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full overflow-hidden p-0.5 border border-[#F4B6C6] bg-white">
                  <img
                    src={BRAND.logoUrl}
                    alt=""
                    className="w-full h-full object-contain rounded-full"
                    width={36}
                    height={36}
                  />
                </div>
                <div>
                  <span className="font-serif text-lg font-bold text-[#3A2A30] block leading-none">
                    {BRAND.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider font-semibold text-[#B03A63]">
                    Lahore | Pattoki
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-11 h-11 rounded-full border border-[#F4B6C6] bg-white flex items-center justify-center text-[#3A2A30] hover:text-[#B03A63] hover:bg-[#FBE4EA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B03A63]"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = currentScreen === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-4 py-2.5 min-h-[44px] rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-[#B03A63] text-white font-semibold shadow-xs'
                        : 'text-[#3A2A30] hover:bg-[#FBE4EA]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive ? (
                      <Heart className="w-3.5 h-3.5 fill-white text-white" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Drawer Bottom Actions: WhatsApp "Order Now" and Social Contacts */}
            <div className="p-4 border-t border-[#F4B6C6]/50 bg-white space-y-2.5">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 min-h-[48px] rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order Now on WhatsApp</span>
              </a>

              <button
                onClick={() => handleNavClick('custom-order')}
                className="w-full py-3 min-h-[44px] rounded-xl border border-[#B03A63] text-[#B03A63] hover:bg-[#FBE4EA] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
                <span>Custom Order Studio</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="py-2.5 min-h-[44px] rounded-lg border border-[#F4B6C6] bg-[#FFF8F3] text-[#B03A63] text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Contact Page</span>
                </button>

                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 min-h-[44px] rounded-lg border border-[#F4B6C6] bg-[#FFF8F3] text-[#3A2A30] text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#B03A63]" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
