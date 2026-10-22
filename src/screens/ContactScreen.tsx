import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Phone,
  Instagram,
  MapPin,
  Clock,
  Send,
  ChevronRight,
  ChevronDown,
  Sparkles,
  HelpCircle,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { BRAND } from '../data/catalog';

interface ContactScreenProps {
  onNavigate: (screen: string) => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = "Contact Us - Let's Make Something Special | Mini Makers";
  }, []);

  // Quick message form state
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSent, setIsSent] = useState(false);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<string | null>('delivery');

  const toggleFaq = (key: string) => {
    setOpenFaq(openFaq === key ? null : key);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    // Validate Pakistani phone format (e.g., 03001234567 or 0300-1234567)
    const cleanNumber = whatsapp.replace(/[-\s]/g, '');
    if (!/^03\d{9}$/.test(cleanNumber)) {
      setError('Please enter a valid 11-digit Pakistani mobile number (03XX-XXXXXXX).');
      return;
    }
    if (!message.trim()) {
      setError('Please enter your message or custom request details.');
      return;
    }

    setError('');
    const fullMsg = `Assalam-o-Alaikum Mini Makers!\n\n*Name:* ${name.trim()}\n*WhatsApp Number:* ${cleanNumber}\n*Message / Inquiry:* ${message.trim()}\n\nI would like to order or discuss a personalized gift.`;
    const waUrl = `https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(fullMsg)}`;
    setIsSent(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const contactCards = [
    {
      title: 'WhatsApp',
      handle: '0341-4655335',
      desc: 'Instant replies & photo sharing',
      icon: MessageCircle,
      href: 'https://wa.me/923414655335?text=Assalam%20o%20Alaikum!%20I%20would%20like%20to%20order%20from%20Mini%20Makers.',
      color: 'bg-[#25D366] text-white',
      borderColor: 'border-emerald-300',
    },
    {
      title: 'Direct Call',
      handle: '0341-4655335',
      desc: 'Urgent celebration questions',
      icon: Phone,
      href: 'tel:+923414655335',
      color: 'bg-[#B03A63] text-white',
      borderColor: 'border-[#F4B6C6]',
    },
    {
      title: 'Instagram',
      handle: '@minimakers4',
      desc: 'Reels, designs & direct messages',
      icon: Instagram,
      href: 'https://www.instagram.com/minimakers4?rpxt=bTY2cGplaWptNjk4',
      color: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white',
      borderColor: 'border-pink-300',
    },
    {
      title: 'TikTok',
      handle: '@minimakers_4',
      desc: 'Packing videos & DIY craft',
      icon: Sparkles,
      href: 'https://tiktok.com/@minimakers_4',
      color: 'bg-black text-white',
      borderColor: 'border-slate-300',
    },
    {
      title: 'Facebook',
      handle: 'Mini Makers Page',
      desc: 'Community albums & reviews',
      icon: ArrowRight,
      // Clear placeholder href user can replace
      href: 'https://facebook.com/your-facebook-page',
      color: 'bg-[#1877F2] text-white',
      borderColor: 'border-blue-300',
    },
    {
      title: 'Workshop',
      handle: 'Lahore | Pattoki',
      desc: 'Handmade atelier, Punjab, PK',
      icon: MapPin,
      href: '#location-details',
      color: 'bg-[#C9A66B] text-white',
      borderColor: 'border-amber-300',
    },
  ];

  const miniSteps = [
    { num: '1', title: 'Browse' },
    { num: '2', title: 'Send Pictures' },
    { num: '3', title: 'Share Details' },
    { num: '4', title: 'Pay' },
    { num: '5', title: 'Delivery' },
  ];

  return (
    <div className="w-full pb-10 sm:pb-16 bg-[#FFF8F3] text-[#3A2A30] overflow-x-clip">
      {/* 1. HEADER */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-gradient-to-b from-[#FFF8F3] via-[#FBE4EA]/50 to-[#FFF8F3]">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-1.5 text-xs text-[#3A2A30]/70 mb-3" aria-label="Breadcrumb">
            <button onClick={() => onNavigate('home')} className="hover:text-[#B03A63] transition-colors min-h-[44px] flex items-center">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="font-semibold text-[#B03A63]">Contact Us</span>
          </nav>

          {/* Illustrated heading with envelope icon */}
          <div className="flex items-center justify-center gap-2 mb-2 font-serif italic text-sm sm:text-base font-medium text-[#C9A66B] tracking-wide">
            <img
              src="/assets/icons/headings/envelope-heading.svg"
              alt=""
              className="w-7 h-7 inline-block object-contain"
              width={28}
              height={28}
            />
            <span>get in touch</span>
          </div>

          <h1 className="font-serif italic font-bold tracking-tight fluid-h1 mb-2 text-[#3A2A30]">
            Let’s Make Something <span className="highlight-marker">Special</span>
          </h1>

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

          <p className="text-xs sm:text-base text-[#3A2A30]/85 leading-relaxed max-w-xl mx-auto">
            Have a custom gift design, Pinterest reference, or urgent celebration deadline? Reach out directly via WhatsApp, call us, or send a message below.
          </p>
        </div>
      </section>

      {/* 2. CONTACT CARDS (2 cols on mobile, 4 on desktop) */}
      <section className="py-10 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-[#FFF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {contactCards.map((card, idx) => {
              const IconComp = card.icon;
              const isAnchor = card.href.startsWith('http') || card.href.startsWith('tel:');
              return (
                <a
                  key={idx}
                  href={card.href}
                  target={isAnchor && card.href.startsWith('http') ? '_blank' : undefined}
                  rel={isAnchor && card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-4 rounded-2xl border ${card.borderColor} bg-white hover:bg-[#FBE4EA]/50 transition-all flex flex-col items-center text-center shadow-xs hover:shadow-md group min-h-[140px] justify-between`}
                >
                  <div className={`w-11 h-11 rounded-full ${card.color} flex items-center justify-center shadow-xs mb-2 transition-transform group-hover:scale-105 shrink-0`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#B03A63] tracking-wider block">
                      {card.title}
                    </span>
                    <span className="font-serif text-xs sm:text-sm font-bold text-[#3A2A30] block leading-tight mt-0.5 truncate">
                      {card.handle}
                    </span>
                    <span className="text-[10px] text-[#3A2A30]/70 mt-1 block line-clamp-1">
                      {card.desc}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. QUICK MESSAGE FORM + LOCATION & HOURS */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-[#FBE4EA]/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Quick Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#F4B6C6]/60 p-6 sm:p-8 shadow-xs">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B03A63] block mb-1">
              Direct Inquiry
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#3A2A30] mb-2">
              Send a Quick Message
            </h2>
            <p className="text-xs text-[#3A2A30]/80 mb-6">
              Submitting formats your request and opens WhatsApp instantly with our artisan team.
            </p>

            <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
              {error && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-300 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {isSent && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Your message was prepared and opened in WhatsApp!</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3A2A30] mb-1">
                  Your Full Name <span className="text-[#B03A63]">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Fatima Tariq"
                  className="w-full px-4 py-3 rounded-2xl border border-[#F4B6C6] bg-[#FFF8F3]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B03A63] text-base min-h-[48px]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3A2A30] mb-1">
                  WhatsApp Number (03XX-XXXXXXX) <span className="text-[#B03A63]">*</span>
                </label>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="0341-4655335"
                  className="w-full px-4 py-3 rounded-2xl border border-[#F4B6C6] bg-[#FFF8F3]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B03A63] text-base min-h-[48px]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3A2A30] mb-1">
                  Your Message or Custom Request <span className="text-[#B03A63]">*</span>
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about the occasion, color palette, delivery city, or any special requests..."
                  className="w-full px-4 py-3 rounded-2xl border border-[#F4B6C6] bg-[#FFF8F3]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B03A63] text-base min-h-[48px]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 min-h-[48px] rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm tracking-wide uppercase shadow-md flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Right: Blush Location Card & Hours */}
          <div id="location-details" className="lg:col-span-5 space-y-6">
            {/* Blush Location Card */}
            <div className="p-6 rounded-3xl border border-[#F4B6C6] bg-gradient-to-br from-[#FBE4EA] to-[#FFF8F3] shadow-xs">
              <div className="w-12 h-12 rounded-full bg-white text-[#B03A63] flex items-center justify-center mb-3 shadow-xs border border-[#F4B6C6]/50">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#B03A63] block">
                Artisan Workshop
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#3A2A30] mt-0.5">
                Lahore | Pattoki
              </h3>
              <p className="text-xs sm:text-sm text-[#3A2A30]/80 mt-2 leading-relaxed">
                Handcrafted locally in Punjab, Pakistan. We offer same-day express rider hand-delivery across Lahore &amp; Pattoki, and safe crate shipping to Karachi, Islamabad, and all cities nationwide.
              </p>
              <div className="mt-4 pt-3 border-t border-[#F4B6C6]/50 flex items-center gap-2 text-xs text-[#3A2A30]/85 font-medium">
                <span className="font-bold text-[#B03A63]">Delivery:</span>
                <span>Across Pakistan via trusted couriers</span>
              </div>
            </div>

            {/* Opening Hours Placeholder Card */}
            <div className="p-6 rounded-3xl border border-[#F4B6C6]/60 bg-white shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-[#C9A66B]">
                <Clock className="w-5 h-5" />
                <h4 className="font-serif text-lg font-bold text-[#3A2A30]">Workshop Timings</h4>
              </div>
              <div className="text-xs text-[#3A2A30]/80 space-y-1.5 leading-relaxed">
                <p>
                  <strong>Customer Support &amp; WhatsApp:</strong><br />
                  [Editable hours: e.g., Monday – Saturday: 10:00 AM – 9:00 PM | Sunday: 12:00 PM – 7:00 PM]
                </p>
                <p className="text-[11px] text-[#3A2A30]/65 pt-2 border-t border-[#F4B6C6]/40">
                  Note: WhatsApp inquiries received after hours are answered first thing the next morning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "HOW TO ORDER" MINI STRIP */}
      <section className="py-10 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 text-center sm:text-left">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#B03A63]">
                Simple 5-Step Process
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3A2A30]">
                How to Order with Us
              </h3>
            </div>
            <button
              onClick={() => {
                onNavigate('how-to-order');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-2 min-h-[44px] rounded-full text-xs font-semibold border border-[#B03A63] text-[#B03A63] hover:bg-[#FBE4EA] flex items-center justify-center gap-1.5 transition-all"
            >
              <span>View Full Order Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            {miniSteps.map((s, i) => (
              <div key={i} className="p-3 rounded-2xl bg-[#FFF8F3] border border-[#F4B6C6]/60 flex flex-col items-center">
                <span className="w-7 h-7 rounded-full bg-[#B03A63] text-white text-xs font-bold flex items-center justify-center mb-1.5">
                  {s.num}
                </span>
                <span className="text-xs font-bold text-[#3A2A30]">{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHORT FAQ ACCORDION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-[#FFF8F3]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B03A63]">
              Quick Help
            </span>
            <h2 className="font-serif italic text-2xl sm:text-3xl font-bold mt-1 text-[#3A2A30] fluid-h2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {/* Delivery FAQ */}
            <div className="rounded-2xl border border-[#F4B6C6]/60 bg-white overflow-hidden shadow-xs">
              <button
                onClick={() => toggleFaq('delivery')}
                className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-[#3A2A30] hover:text-[#B03A63] min-h-[44px]"
              >
                <span>How does delivery work across Pakistan?</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === 'delivery' ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 'delivery' && (
                <div className="px-4 pb-4 text-xs text-[#3A2A30]/80 leading-relaxed border-t border-[#F4B6C6]/30 pt-3">
                  [Editable Answer: In Lahore &amp; Pattoki, we offer same-day or next-day express hand delivery by personal rider. For all other cities (Karachi, Islamabad, Rawalpindi, Peshawar, Multan, etc.), parcels are shipped inside double-bubble-wrapped reinforced wooden crates with reliable couriers in 2 to 3 days.]
                </div>
              )}
            </div>

            {/* Customization FAQ */}
            <div className="rounded-2xl border border-[#F4B6C6]/60 bg-white overflow-hidden shadow-xs">
              <button
                onClick={() => toggleFaq('custom')}
                className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-[#3A2A30] hover:text-[#B03A63] min-h-[44px]"
              >
                <span>Can I customize colors, flowers, and names?</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === 'custom' ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 'custom' && (
                <div className="px-4 pb-4 text-xs text-[#3A2A30]/80 leading-relaxed border-t border-[#F4B6C6]/30 pt-3">
                  [Editable Answer: Absolutely! 100% of our products can be customized. You can send us your dress color palette swatch, names in English or Arabic script, custom chocolate choices, and specific card notes.]
                </div>
              )}
            </div>

            {/* Payment FAQ */}
            <div className="rounded-2xl border border-[#F4B6C6]/60 bg-white overflow-hidden shadow-xs">
              <button
                onClick={() => toggleFaq('payment')}
                className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-[#3A2A30] hover:text-[#B03A63] min-h-[44px]"
              >
                <span>What payment methods do you accept?</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === 'payment' ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 'payment' && (
                <div className="px-4 pb-4 text-xs text-[#3A2A30]/80 leading-relaxed border-t border-[#F4B6C6]/30 pt-3">
                  [Editable Answer: Because each gift is custom handmade with personalized names, we require an advance confirmation deposit via JazzCash, EasyPaisa, Nayapay, Sadapay, or online bank transfer (Meezan, HBL, Allied).]
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
