import React from 'react';
import { BRAND } from '../data/catalog';

export interface FloatingActionButtonsProps {
  isHidden?: boolean;
}

export const FloatingActionButtons: React.FC<FloatingActionButtonsProps> = ({ isHidden = false }) => {
  return (
    <aside
      aria-label="Direct Contact via WhatsApp and Instagram"
      className={`floating-fab-container fixed z-30 flex flex-col items-end pointer-events-auto ${
        isHidden ? 'is-hidden' : ''
      }`}
      style={{
        bottom: 'calc(14px + env(safe-area-inset-bottom, 0px))',
        right: 'calc(14px + env(safe-area-inset-right, 0px))',
        opacity: isHidden ? 0 : 1,
        visibility: isHidden ? 'hidden' : 'visible',
        pointerEvents: isHidden ? 'none' : 'auto',
        transform: isHidden ? 'scale(0.8)' : 'scale(1)',
      }}
    >
      {/* Top Button: Instagram */}
      <div className="relative group flex items-center justify-end">
        {/* Desktop-only Tooltip (hidden on touch devices) */}
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-2.5 whitespace-nowrap rounded-full bg-[#3A2A30] px-3 py-1.5 text-xs font-semibold text-white shadow-md opacity-0 transition-opacity duration-200 group-hover:opacity-100 hidden min-[900px]:block"
        >
          DM on Instagram
        </span>
        <a
          href={BRAND.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="DM us on Instagram @minimakers4"
          className="fab-button rounded-full flex items-center justify-center text-white transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-300"
          style={{
            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
          }}
        >
          <img
            src="/assets/icons/instagram.svg"
            alt=""
            aria-hidden="true"
            className="fab-icon filter brightness-0 invert object-contain"
            width={22}
            height={22}
          />
        </a>
      </div>

      {/* Bottom Button: WhatsApp with subtle gentle pulse */}
      <div className="relative group flex items-center justify-end">
        {/* Desktop-only Tooltip */}
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-2.5 whitespace-nowrap rounded-full bg-[#3A2A30] px-3 py-1.5 text-xs font-semibold text-white shadow-md opacity-0 transition-opacity duration-200 group-hover:opacity-100 hidden min-[900px]:block"
        >
          Chat on WhatsApp
        </span>
        <a
          href={BRAND.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Mini Makers on WhatsApp 0341-4655335"
          className="fab-button fab-subtle-pulse rounded-full flex items-center justify-center text-white bg-[#25D366] transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          <img
            src="/assets/icons/whatsapp.svg"
            alt=""
            aria-hidden="true"
            className="fab-icon filter brightness-0 invert object-contain"
            width={22}
            height={22}
          />
        </a>
      </div>
    </aside>
  );
};

export const FloatingWhatsApp = FloatingActionButtons;
export default FloatingActionButtons;
