import React, { useState } from 'react';
import {
  MessageCircle,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Search,
  Camera,
  FileText,
  CreditCard,
  CheckCircle,
  Truck,
  HelpCircle,
} from 'lucide-react';
import { BRAND, HOW_TO_ORDER_STEPS, FAQS } from '../data/catalog';

interface HowToOrderScreenProps {
  onNavigate: (screen: string) => void;
}

export const HowToOrderScreen: React.FC<HowToOrderScreenProps> = ({
  onNavigate,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const icons = [Search, Camera, FileText, CreditCard, CheckCircle, Truck];

  return (
    <div className="w-full pb-24 bg-[#FFF8F3] text-[#3A2A30]">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-[#FBE4EA]/50">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          <nav className="flex items-center justify-center gap-1.5 text-xs text-[#3A2A30]/70 mb-3" aria-label="Breadcrumb">
            <button onClick={() => onNavigate('home')} className="hover:text-[#B03A63] transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="font-semibold text-[#B03A63]">How to Order</span>
          </nav>

          {/* Script-style gold eyebrow with order path SVG */}
          <div className="flex items-center justify-center gap-2 mb-2 font-serif italic text-sm sm:text-base font-medium text-[#C9A66B] tracking-wide">
            <img
              src="/assets/icons/headings/order-path-heading.svg"
              alt=""
              className="w-7 h-7 inline-block object-contain"
            />
            <span>our simple process</span>
          </div>

          <h1 className="font-serif italic font-bold tracking-tight fluid-h1 mb-2 text-[#3A2A30]">
            How to <span className="highlight-marker">Order</span> from Mini Makers
          </h1>

          {/* Floral decorative divider */}
          <div className="flex items-center justify-center my-3" aria-hidden="true">
            <img
              src="/assets/icons/headings/divider-ornament.svg"
              alt=""
              className="h-5 w-auto max-w-[220px] opacity-80"
            />
          </div>

          <p className="text-sm text-[#3A2A30]/80 leading-relaxed max-w-2xl mx-auto">
            Every creation is bespoke. Here is how our seamless WhatsApp-assisted ordering journey works — from your initial inspiration to safe bubble-wrapped doorstep delivery.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-14">
        
        {/* 6-Step Visual Timeline with Rose-Pink Circles Connected by Dotted Line */}
        <div className="relative">
          {/* Desktop Central/Horizontal Dotted Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 border-t-2 border-dashed border-[#F4B6C6] -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {HOW_TO_ORDER_STEPS.map((item, index) => {
              const StepIcon = icons[index % icons.length];
              return (
                <div
                  key={item.step}
                  className="rounded-3xl p-6 border border-[#F4B6C6]/60 bg-white shadow-xs hover:shadow-lg flex flex-col items-start relative transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Step Circle with Icon */}
                  <div className="flex items-center justify-between w-full mb-4">
                    <div className="w-14 h-14 rounded-full bg-[#B03A63] text-white flex items-center justify-center shadow-md shadow-[#B03A63]/25 shrink-0">
                      <StepIcon className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-3xl font-black text-[#F4B6C6]">
                      0{item.step}
                    </span>
                  </div>

                  <span className="font-serif italic text-xs text-[#B03A63] font-semibold mb-1">
                    {item.urdu}
                  </span>

                  <h3 className="font-serif text-xl font-bold mb-2 text-[#3A2A30]">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#3A2A30]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQs Section */}
        <section className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B03A63] flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#C9A66B]" />
              <span>Got Questions?</span>
            </span>
            <h2 className="font-serif text-3xl font-bold mt-1 text-[#3A2A30]">Frequently Asked Questions</h2>
            <p className="text-xs text-[#3A2A30]/75 mt-1">
              Clear answers regarding advance deposits, delivery times, and customization guidelines.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#F4B6C6]/60 bg-white transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#3A2A30]">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 text-[#B03A63] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-0 text-xs sm:text-sm text-[#3A2A30]/80 leading-relaxed border-t border-[#F4B6C6]/30 mt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Final CTA Bar: "Start Your Order on WhatsApp" */}
        <div className="mt-16 p-8 sm:p-12 rounded-[32px] border border-[#F4B6C6] bg-gradient-to-r from-[#FBE4EA] via-white to-[#FBE4EA] text-center relative overflow-hidden shadow-sm">
          <div className="max-w-2xl mx-auto">
            <span className="px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#FBE4EA] text-[#B03A63] border border-[#F4B6C6] mb-3 inline-block">
              Fastest Way to Inquire
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-3 text-[#3A2A30]">
              Ready to Craft Something Magical?
            </h2>
            <p className="text-sm text-[#3A2A30]/85 leading-relaxed mb-6">
              Our artisan team in Lahore | Pattoki is ready to discuss your color palette, couple initials, and delivery timelines. Free consultation!
            </p>

            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 min-h-[48px] rounded-full text-sm font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md shadow-[#25D366]/25 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start Your Order on WhatsApp (0341-4655335)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
