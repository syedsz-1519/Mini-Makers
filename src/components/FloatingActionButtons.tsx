import React from 'react';
import { BRAND } from '../data/catalog';

export const FloatingActionButtons: React.FC = () => {
  return (
    <aside
      aria-label="Contact Mini Makers via WhatsApp and Instagram"
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 pointer-events-auto"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* Top Button: Instagram (gradient pink-to-purple, white Instagram icon) */}
      <div className="relative group flex items-center justify-end">
        {/* Desktop Tooltip */}
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-[#3A2A30] px-3 py-1.5 text-xs font-semibold text-white shadow-md opacity-0 transition-opacity duration-200 group-hover:opacity-100 hidden sm:block"
        >
          DM on Instagram
        </span>
        <a
          href={BRAND.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="DM us on Instagram @minimakers4"
          className="w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-pink-300"
          style={{
            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
          }}
        >
          <img
            src="/assets/icons/instagram.svg"
            alt=""
            aria-hidden="true"
            className="w-7 h-7 sm:w-8 sm:h-8 filter brightness-0 invert"
          />
        </a>
      </div>

      {/* Bottom Button: WhatsApp (green #25D366, white WhatsApp icon, gentle pulse animation) */}
      <div className="relative group flex items-center justify-end">
        {/* Desktop Tooltip */}
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-[#3A2A30] px-3 py-1.5 text-xs font-semibold text-white shadow-md opacity-0 transition-opacity duration-200 group-hover:opacity-100 hidden sm:block"
        >
          Chat on WhatsApp
        </span>
        <a
          href={BRAND.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Mini Makers on WhatsApp 0341-4655335"
          className="relative w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full flex items-center justify-center text-white bg-[#25D366] shadow-lg shadow-emerald-600/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        >
          {/* Subtle gentle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10" />
          <img
            src="/assets/icons/whatsapp.svg"
            alt=""
            aria-hidden="true"
            className="w-7 h-7 sm:w-8 sm:h-8 filter brightness-0 invert"
          />
        </a>
      </div>
    </aside>
  );
};

// Also keep export as FloatingWhatsApp for backwards compatibility if needed
export const FloatingWhatsApp = FloatingActionButtons;
export default FloatingActionButtons;
