import React, { useEffect } from 'react';
import {
  MessageCircle,
  Instagram,
  Sparkles,
  Heart,
  Palette,
  Truck,
  Users,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { BRAND, CATEGORIES } from '../data/catalog';

interface AboutScreenProps {
  onNavigate: (screen: string) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'About Us - Handmade with Love and Care | Mini Makers';
  }, []);

  const values = [
    {
      title: 'Handmade',
      icon: Palette,
      desc: 'Each bloom, frame, and gift hamper is crafted by hand in our workshop with genuine care and dedication to detail.',
    },
    {
      title: 'Personalized',
      icon: Sparkles,
      desc: 'Customized to your exact vision—from custom color swatches and Arabic calligraphy to handwritten personal notes.',
    },
    {
      title: 'Made with Love',
      icon: Heart,
      desc: 'We believe thoughtful gifts create lasting memories. Every single creation is packaged as if it were for our own family.',
    },
  ];

  const whatWeMake = [
    { id: 'bouquets', label: 'Everlasting Bouquets', image: '/assets/images/bouquets/red-tulip-bouquet.jpg' },
    { id: 'wedding', label: 'Wedding & Nikkah Sets', image: '/assets/images/wedding/doodh-pilai-glass.jpg' },
    { id: 'gift-boxes', label: 'Specialty Gift Boxes', image: '/assets/images/specialty/alphabetic-snack-box.jpg' },
    { id: 'frames-baskets', label: 'Customized Frames', image: '/assets/images/frames/photo-frame.jpg' },
    { id: 'frames-baskets', label: 'Curated Baskets', image: '/assets/images/baskets/gift-basket.jpg' },
    { id: 'frames-baskets', label: 'Handmade Accessories', image: '/assets/images/accessories/bracelets.jpg' },
  ];

  const behindTheScenes = [
    { title: 'Artisan Workshop Crafting', img: '/assets/images/events/stall-winter-bazaar.jpg' },
    { title: 'Ribbon & Organza Packaging', img: '/assets/images/hero/hero-bouquet.jpg' },
    { title: 'Community Pop-Up & Stalls', img: '/assets/images/events/stall-daachi.jpg' },
    { title: 'Safe Crating & Dispatch', img: '/assets/images/events/stall-pet-show.jpg' },
  ];

  return (
    <div className="w-full pb-10 sm:pb-16 bg-[#FFF8F3] text-[#3A2A30] overflow-x-clip">
      {/* 1. HERO SECTION */}
      <section className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-gradient-to-b from-[#FFF8F3] via-[#FBE4EA]/50 to-[#FFF8F3]">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-[#3A2A30]/70 mb-4" aria-label="Breadcrumb">
            <button onClick={() => onNavigate('home')} className="hover:text-[#B03A63] transition-colors min-h-[44px] flex items-center">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="font-semibold text-[#B03A63]">About Us</span>
          </nav>

          <div className="grid grid-cols-1 min-[900px]:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Text */}
            <div className="min-[900px]:col-span-7 flex flex-col items-center min-[900px]:items-start text-center min-[900px]:text-left">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-2 font-serif italic text-sm sm:text-base font-medium text-[#C9A66B] tracking-wide">
                <img
                  src="/assets/icons/headings/about-heart-heading.svg"
                  alt=""
                  className="w-6 h-6 sm:w-7 sm:h-7 inline-block object-contain"
                  width={28}
                  height={28}
                />
                <span>our story</span>
              </div>

              <h1 className="font-serif italic font-bold tracking-tight fluid-h1 mb-2 text-[#3A2A30]">
                Crafted with <span className="text-[#C9A66B]">Love</span>,<br />
                Made for <span className="highlight-marker">Memories</span>
              </h1>

              {/* Floral decorative divider */}
              <div className="flex items-center justify-center min-[900px]:justify-start my-2.5" aria-hidden="true">
                <img
                  src="/assets/icons/headings/divider-ornament.svg"
                  alt=""
                  className="h-4 sm:h-5 w-auto max-w-[180px] sm:max-w-[200px] opacity-80"
                  width={180}
                  height={20}
                />
              </div>

              <p className="text-sm sm:text-base text-[#3A2A30]/85 leading-relaxed max-w-xl mb-6">
                <strong>Mini Makers</strong> is a boutique handmade personalized gift atelier rooted in <strong>Lahore | Pattoki</strong>, Pakistan. We transform heartfelt emotions into forever keepsakes—handcrafting eternal flower arrangements, royal wedding decor, personalized memory frames, and bespoke confections with boundless warmth.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 min-h-[48px] rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md shadow-[#25D366]/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </a>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 min-h-[48px] rounded-full text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 border border-[#F4B6C6] bg-white text-[#B03A63] hover:bg-[#FBE4EA] transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Follow on Instagram</span>
                </a>
              </div>
            </div>

            {/* Right Side Image (Stacked on mobile) */}
            <div className="min-[900px]:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden p-2 border-2 border-[#F4B6C6] bg-white shadow-lg">
                <img
                  src="/assets/images/events/stall-winter-bazaar.jpg"
                  alt="Mini Makers Handmade Studio Showcase"
                  className="w-full h-full object-cover rounded-2xl"
                  width={384}
                  height={480}
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-xs border border-[#F4B6C6]/60 shadow-xs text-center">
                  <span className="font-serif italic text-xs font-bold text-[#B03A63] block">
                    Handmade with Love &amp; Care
                  </span>
                  <span className="text-[11px] text-[#3A2A30]/75">
                    Lahore | Pattoki, Punjab, Pakistan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY (Warm editable placeholder paragraph) */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-[#FFF8F3]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B03A63]">
            How We Began
          </span>
          <h2 className="font-serif italic text-2xl sm:text-4xl font-bold tracking-tight mt-1 mb-3 text-[#3A2A30] fluid-h2">
            Every Gift Tells a Story
          </h2>
          <div className="flex items-center justify-center my-3" aria-hidden="true">
            <img
              src="/assets/icons/headings/divider-ornament.svg"
              alt=""
              className="h-4 sm:h-5 w-auto max-w-[200px] opacity-80"
              width={200}
              height={20}
            />
          </div>
          <div className="text-xs sm:text-sm text-[#3A2A30]/85 leading-relaxed space-y-4 text-left sm:text-center mt-4">
            <p>
              [Editable Story: At Mini Makers, every gift begins with a personal conversation. Whether it is an everlasting chenille tulip arrangement that never wilts or a customized Nikkah pen embellished with delicate pearls, we believe true luxury lies in the touch of human hands.]
            </p>
            <p>
              [Editable Story: Founded in Lahore | Pattoki, we set out with a simple promise: to replace mass-produced factory gifts with authentic hand-stitched, sculpted, and personalized treasures. We hand-select premium ribbons, archival frames, imported chocolates, and delicate embellishments to make your milestones truly unforgettable.]
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE MAKE (6 Category Cards) */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-[#FBE4EA]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B03A63]">
              Our Creations
            </span>
            <h2 className="font-serif italic text-2xl sm:text-3xl font-bold mt-1 text-[#3A2A30] fluid-h2">
              What We Make
            </h2>
            <p className="text-xs sm:text-sm text-[#3A2A30]/80 mt-1">
              Select any collection to browse handmade designs or request custom color palettes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {whatWeMake.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onNavigate(cat.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-3 rounded-2xl border border-[#F4B6C6]/60 bg-white hover:bg-[#FBE4EA] transition-all flex flex-col items-center text-center shadow-xs hover:shadow-md group min-h-[140px] justify-center"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden mb-2 border border-[#F4B6C6]/50 bg-[#FBE4EA]/40">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    width={56}
                    height={56}
                  />
                </div>
                <span className="font-serif text-xs font-bold text-[#3A2A30] group-hover:text-[#B03A63] transition-colors leading-tight">
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VALUES (3 Icon Cards) */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-[#FFF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B03A63]">
              Guiding Principles
            </span>
            <h2 className="font-serif italic text-2xl sm:text-3xl font-bold mt-1 text-[#3A2A30] fluid-h2">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl border border-[#F4B6C6]/60 bg-white shadow-xs flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#FBE4EA] text-[#B03A63] flex items-center justify-center mb-4">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#3A2A30] mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-[#3A2A30]/80 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. BEHIND THE SCENES (Mobile swipeable row) */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-[#FBE4EA]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8 text-center sm:text-left">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#B03A63]">
                Studio Glimpse
              </span>
              <h2 className="font-serif italic text-2xl sm:text-3xl font-bold mt-1 text-[#3A2A30] fluid-h2">
                Behind the Scenes
              </h2>
            </div>
            <span className="text-xs text-[#3A2A30]/70">
              Ribbons, packaging, stalls, and exhibitions
            </span>
          </div>

          {/* Swipeable row on mobile */}
          <div className="mobile-swipe-ribbon gap-3 sm:gap-4">
            {behindTheScenes.map((item, idx) => (
              <div
                key={idx}
                className="w-64 sm:w-72 rounded-2xl overflow-hidden border border-[#F4B6C6]/60 bg-white shadow-xs shrink-0 flex flex-col"
              >
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    width={288}
                    height={216}
                  />
                </div>
                <div className="p-3 text-center">
                  <span className="text-xs font-semibold text-[#3A2A30]">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STATS ROW */}
      <section className="py-10 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 min-[900px]:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-[#FFF8F3] border border-[#F4B6C6]/50">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#B03A63] block">
              445+
            </span>
            <span className="text-xs font-semibold text-[#3A2A30]/80 mt-1 block">
              Creations Shared
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-[#FFF8F3] border border-[#F4B6C6]/50">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#B03A63] block">
              1.2K+
            </span>
            <span className="text-xs font-semibold text-[#3A2A30]/80 mt-1 block">
              Instagram Family
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-[#FFF8F3] border border-[#F4B6C6]/50">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C9A66B] block">
              Lahore | Pattoki
            </span>
            <span className="text-xs font-semibold text-[#3A2A30]/80 mt-1 block">
              Artisan Workshop
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-[#FFF8F3] border border-[#F4B6C6]/50">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-emerald-600 block">
              Safe Delivery
            </span>
            <span className="text-xs font-semibold text-[#3A2A30]/80 mt-1 block">
              Across Pakistan
            </span>
          </div>
        </div>
      </section>

      {/* 7. QUOTE SECTION */}
      <section className="py-14 px-4 sm:px-6 lg:px-12 text-center bg-[#FFF8F3]">
        <div className="max-w-2xl mx-auto">
          <Heart className="w-8 h-8 text-[#B03A63] fill-[#B03A63] mx-auto mb-3 opacity-90" />
          <blockquote className="font-serif italic text-2xl sm:text-3xl font-bold text-[#3A2A30] leading-snug">
            “Every product is made with love, just for you.”
          </blockquote>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C9A66B] block mt-3">
            Mini Makers · Lahore | Pattoki
          </span>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-10 px-4 sm:px-6 lg:px-12 border-t border-[#F4B6C6]/40 bg-[#FBE4EA]/50">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3A2A30]">
              Ready to create your custom gift?
            </h3>
            <p className="text-xs sm:text-sm text-[#3A2A30]/80 mt-0.5">
              Chat directly with our artisan workshop on WhatsApp or send a DM on Instagram.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 min-h-[48px] rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 min-h-[48px] rounded-full text-xs sm:text-sm font-semibold border-2 border-[#B03A63] text-[#B03A63] hover:bg-[#FBE4EA] flex items-center justify-center gap-2 bg-white"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
