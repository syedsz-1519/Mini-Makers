import React from 'react';

export type HeadingIllustrationType =
  | 'bouquet'
  | 'wedding'
  | 'giftbox'
  | 'envelope'
  | 'frame'
  | 'basket'
  | 'accessory'
  | 'order-path'
  | 'review'
  | 'custom-order'
  | 'about-heart';

interface IllustratedHeadingProps {
  as?: 'h1' | 'h2';
  eyebrow?: string;
  icon?: HeadingIllustrationType;
  titleBefore?: string;
  highlightWord?: string;
  titleAfter?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  highlightStyle?: 'marker' | 'brush';
}

const ICON_MAP: Record<HeadingIllustrationType, string> = {
  bouquet: '/assets/icons/headings/bouquet-heading.svg',
  wedding: '/assets/icons/headings/wedding-heading.svg',
  giftbox: '/assets/icons/headings/giftbox-heading.svg',
  envelope: '/assets/icons/headings/envelope-heading.svg',
  frame: '/assets/icons/headings/frame-heading.svg',
  basket: '/assets/icons/headings/basket-heading.svg',
  accessory: '/assets/icons/headings/accessory-heading.svg',
  'order-path': '/assets/icons/headings/order-path-heading.svg',
  review: '/assets/icons/headings/review-heading.svg',
  'custom-order': '/assets/icons/headings/custom-order-heading.svg',
  'about-heart': '/assets/icons/headings/about-heart-heading.svg',
};

export const IllustratedHeading: React.FC<IllustratedHeadingProps> = ({
  as: Component = 'h2',
  eyebrow,
  icon,
  titleBefore = '',
  highlightWord,
  titleAfter = '',
  subtitle,
  centered = true,
  className = '',
  highlightStyle = 'marker',
}) => {
  const iconSrc = icon ? ICON_MAP[icon] : undefined;

  return (
    <div
      className={`relative ${
        centered ? 'text-center mx-auto' : 'text-center md:text-left'
      } ${className}`}
    >
      {/* Floating subtle sparkles and petals */}
      <div
        className="absolute -top-3 left-4 pointer-events-none select-none animate-float hidden sm:block opacity-60 text-[#C9A66B]"
        aria-hidden="true"
      >
        ✦
      </div>
      <div
        className="absolute -top-1 right-6 pointer-events-none select-none animate-float-reverse hidden sm:block opacity-50 text-[#F4B6C6]"
        aria-hidden="true"
      >
        🌸
      </div>

      {/* Script-style gold eyebrow */}
      {eyebrow && (
        <div className="flex items-center justify-center md:justify-start gap-1.5 mb-2 font-serif italic text-sm sm:text-base font-medium text-[#C9A66B] tracking-wide">
          {iconSrc && (
            <img
              src={iconSrc}
              alt=""
              className="w-7 h-7 inline-block object-contain"
            />
          )}
          <span>{eyebrow}</span>
        </div>
      )}

      {/* Heading with fluid clamp & italic serif font */}
      <Component
        className={`font-serif italic font-bold tracking-tight text-[#3A2A30] ${
          Component === 'h1' ? 'fluid-h1' : 'fluid-h2'
        }`}
      >
        {titleBefore && <span>{titleBefore} </span>}
        {highlightWord && (
          <span
            className={
              highlightStyle === 'marker' ? 'highlight-marker' : 'brush-underline'
            }
          >
            {highlightWord}
          </span>
        )}
        {titleAfter && <span> {titleAfter}</span>}
      </Component>

      {/* Decorative floral and diamond divider under heading */}
      <div
        className={`flex items-center justify-center my-3 ${
          centered ? 'mx-auto' : 'md:justify-start'
        }`}
        aria-hidden="true"
      >
        <img
          src="/assets/icons/headings/divider-ornament.svg"
          alt=""
          className="h-5 w-auto max-w-[200px] sm:max-w-[240px] opacity-80"
        />
      </div>

      {/* Optional Subtitle */}
      {subtitle && (
        <p className="text-xs sm:text-sm text-[#3A2A30]/80 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
