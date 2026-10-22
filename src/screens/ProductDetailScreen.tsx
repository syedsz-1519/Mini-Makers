import React, { useState } from 'react';
import {
  MessageCircle,
  Instagram,
  Sparkles,
  ChevronRight,
  Heart,
  Truck,
  Clock,
  ChevronDown,
  ShoppingBag,
  ArrowLeft,
  Share2,
} from 'lucide-react';
import { BRAND, PRODUCTS } from '../data/catalog';
import { Product, CustomOrderItem } from '../types';

interface ProductDetailScreenProps {
  product: Product;
  onNavigate: (screen: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (item: CustomOrderItem) => void;
}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  product,
  onNavigate,
  onSelectProduct,
  onAddToCart,
}) => {
  // Gallery thumbnails
  const gallery = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [
        product.image,
        '/assets/images/bouquets/red-tulip-bouquet.jpg',
        '/assets/images/wedding/doodh-pilai-glass.jpg',
        '/assets/images/specialty/alphabetic-snack-box.jpg',
      ];

  const [selectedImage, setSelectedImage] = useState(gallery[0]);

  // Customization selections
  const occasions = product.customizationOptions?.occasions || [
    'Birthday',
    'Anniversary',
    'Nikkah / Shadi',
    'Graduation',
    'Just Because',
  ];
  const colors = product.customizationOptions?.colors || [
    'Blush Rose & Cream',
    'Velvet Scarlet Red',
    'Lavender & Lilac',
    'Midnight Black & Gold',
  ];
  const ribbons = product.customizationOptions?.ribbons || [
    'Mauve Satin Bow',
    'Golden Organza Ribbon',
    'Dusty Pink Grosgrain',
  ];

  const [selectedOccasion, setSelectedOccasion] = useState(occasions[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedRibbon, setSelectedRibbon] = useState(ribbons[0]);
  const [personalNote, setPersonalNote] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  // Accordion state
  const [openAccordion, setOpenAccordion] = useState<string>('included');

  const toggleAccordion = (name: string) => {
    setOpenAccordion(openAccordion === name ? '' : name);
  };

  const handleOrderWhatsApp = () => {
    let msg = `Assalam-o-Alaikum Mini Makers! I want to order the "${product.name}".\n`;
    msg += `• Occasion: ${selectedOccasion}\n`;
    msg += `• Palette / Color: ${selectedColor}\n`;
    msg += `• Ribbon Style: ${selectedRibbon}\n`;
    msg += `• Quantity: ${quantity}\n`;
    if (recipientName.trim()) msg += `• Recipient: ${recipientName.trim()}\n`;
    if (personalNote.trim()) msg += `• Handwritten Note: "${personalNote.trim()}"\n`;
    msg += `\nPlease let me know the price and dispatch timeline for my city.`;

    const url = `https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAddToCart = () => {
    onAddToCart({
      product,
      selectedOccasion,
      selectedColor,
      selectedRibbon,
      recipientName,
      customNote: personalNote,
      quantity,
    });
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  // Related products from the same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="w-full pb-24 bg-[#FFF8F3] text-[#3A2A30]">
      {/* Top Breadcrumb & Back bar */}
      <div className="py-4 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => onNavigate(product.category)}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#B03A63] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to {product.category}</span>
          </button>

          <nav className="hidden sm:flex items-center gap-1.5 text-xs text-[#3A2A30]/70" aria-label="Breadcrumb">
            <button onClick={() => onNavigate('home')} className="hover:text-[#B03A63]">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <button onClick={() => onNavigate(product.category)} className="hover:text-[#B03A63] capitalize">
              {product.category}
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="font-semibold text-[#B03A63] truncate max-w-xs">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* Main Stage Image */}
            <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden border border-[#F4B6C6] bg-white shadow-md p-2">
              <div className="w-full h-full rounded-[22px] overflow-hidden relative group">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#B03A63] text-white shadow-xs">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="flex items-center justify-center gap-3 mt-4 overflow-x-auto w-full py-2">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 p-0.5 transition-all shrink-0 ${
                    selectedImage === img
                      ? 'border-[#B03A63] ring-2 ring-[#B03A63]/30 scale-105'
                      : 'border-[#F4B6C6] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover rounded-xl" />
                </button>
              ))}
            </div>

            {/* Quality Guarantees */}
            <div className="mt-6 p-4 rounded-2xl border border-[#F4B6C6]/60 bg-white grid grid-cols-3 gap-2 text-center text-xs shadow-xs w-full">
              <div className="flex flex-col items-center">
                <Sparkles className="w-4 h-4 text-[#C9A66B] mb-1" />
                <span className="font-semibold text-[#3A2A30]">100% Everlasting</span>
                <span className="text-[10px] text-[#3A2A30]/70">Never wilts</span>
              </div>
              <div className="flex flex-col items-center">
                <Truck className="w-4 h-4 text-emerald-600 mb-1" />
                <span className="font-semibold text-[#3A2A30]">Safe Crating</span>
                <span className="text-[10px] text-[#3A2A30]/70">Across Pakistan</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-4 h-4 text-[#B03A63] mb-1" />
                <span className="font-semibold text-[#3A2A30]">2-4 Days Craft</span>
                <span className="text-[10px] text-[#3A2A30]/70">Lahore express</span>
              </div>
            </div>
          </div>

          {/* Right Column: Customization Studio & Order CTAs */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B03A63] mb-1">
              {product.subCategory || 'Bespoke Atelier Piece'}
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-2 text-[#3A2A30]">
              {product.name}
            </h1>

            <span className="font-serif italic text-sm text-[#C9A66B] font-semibold mb-3">
              Handcrafted Boutique Keepsake · Lahore | Pattoki
            </span>

            <p className="text-sm text-[#3A2A30]/80 leading-relaxed mb-5">
              {product.description}
            </p>

            {/* Price on request banner */}
            <div className="p-4 rounded-2xl border border-[#F4B6C6] bg-[#FBE4EA]/60 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div>
                <span className="text-xs text-[#3A2A30]/70 uppercase tracking-wide block font-semibold">Pricing Policy</span>
                <span className="font-serif text-lg font-bold text-[#B03A63]">
                  {BRAND.pricingNote}
                </span>
              </div>
              <span className="text-xs px-3 py-1.5 rounded-full bg-emerald-600/10 text-emerald-700 font-bold border border-emerald-600/20 text-center">
                Instant Quote via WhatsApp
              </span>
            </div>

            {/* Customization 1: Occasion Pills */}
            <div className="mb-5">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#3A2A30]/80 block mb-2">
                1. Select Celebration Occasion:
              </label>
              <div className="flex flex-wrap gap-2">
                {occasions.map((occ) => {
                  const selected = selectedOccasion === occ;
                  return (
                    <button
                      key={occ}
                      onClick={() => setSelectedOccasion(occ)}
                      className={`px-3.5 py-2 min-h-[44px] rounded-full text-xs font-semibold transition-all border flex items-center justify-center ${
                        selected
                          ? 'bg-[#B03A63] text-white border-[#B03A63] shadow-xs'
                          : 'bg-white border-[#F4B6C6] text-[#3A2A30] hover:bg-[#FBE4EA]'
                      }`}
                    >
                      {occ}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Customization 2: Color Palette */}
            <div className="mb-5">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#3A2A30]/80 block mb-2">
                2. Choose Flower / Wrapping Palette:
              </label>
              <div className="flex flex-wrap gap-2">
                {colors.map((col) => {
                  const selected = selectedColor === col;
                  return (
                    <button
                      key={col}
                      onClick={() => setSelectedColor(col)}
                      className={`px-3.5 py-2 min-h-[44px] rounded-full text-xs font-semibold transition-all border flex items-center justify-center ${
                        selected
                          ? 'bg-[#B03A63] text-white border-[#B03A63] shadow-xs'
                          : 'bg-white border-[#F4B6C6] text-[#3A2A30] hover:bg-[#FBE4EA]'
                      }`}
                    >
                      {col}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Customization 3: Ribbon Style */}
            <div className="mb-5">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#3A2A30]/80 block mb-2">
                3. Select Satin Ribbon Style:
              </label>
              <div className="flex flex-wrap gap-2">
                {ribbons.map((rib) => {
                  const selected = selectedRibbon === rib;
                  return (
                    <button
                      key={rib}
                      onClick={() => setSelectedRibbon(rib)}
                      className={`px-3.5 py-2 min-h-[44px] rounded-full text-xs font-semibold transition-all border flex items-center justify-center ${
                        selected
                          ? 'bg-[#B03A63] text-white border-[#B03A63] shadow-xs'
                          : 'bg-white border-[#F4B6C6] text-[#3A2A30] hover:bg-[#FBE4EA]'
                      }`}
                    >
                      {rib}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Customization 4: Recipient Name & Personal Note */}
            <div className="mb-6 space-y-3">
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#3A2A30]/80 block mb-1">
                  Recipient Name (Optional):
                </label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="e.g. Fatima / Ayesha & Bilal"
                  className="w-full px-4 py-2.5 rounded-xl text-xs outline-none border border-[#F4B6C6] bg-white text-[#3A2A30] focus:border-[#B03A63]"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#3A2A30]/80 block mb-1">
                  Add Your Personal Note (Handwritten Card Included Free):
                </label>
                <textarea
                  rows={3}
                  value={personalNote}
                  onChange={(e) => setPersonalNote(e.target.value)}
                  placeholder="Write your heartfelt message in Urdu or English. We will handwrite this on a luxury textured card with wax seal..."
                  className="w-full px-4 py-2.5 rounded-xl text-xs outline-none border border-[#F4B6C6] bg-white text-[#3A2A30] focus:border-[#B03A63]"
                />
              </div>
            </div>

            {/* Order Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
              <button
                onClick={handleOrderWhatsApp}
                className="flex-1 py-3.5 min-h-[48px] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md shadow-[#25D366]/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </button>

              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 min-h-[48px] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border border-[#F4B6C6] bg-white text-[#B03A63] hover:bg-[#FBE4EA] transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>DM on Instagram</span>
              </a>
            </div>

            {/* Inquiry Bag Add-to-List Button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-3 min-h-[44px] rounded-full text-xs font-semibold border-2 border-[#B03A63] text-[#B03A63] hover:bg-[#FBE4EA] flex items-center justify-center gap-2 transition-all bg-white"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{addedToast ? 'Added to Inquiry Bag!' : 'Add to Inquiry Bag (Save for Later)'}</span>
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-[#F4B6C6]/40 pt-4 space-y-2">
              {/* Accordion 1 */}
              <div className="border-b border-[#F4B6C6]/30 pb-3">
                <button
                  onClick={() => toggleAccordion('included')}
                  className="w-full flex items-center justify-between text-xs font-semibold py-2 text-left"
                >
                  <span className="flex items-center gap-2 text-[#3A2A30]">
                    <Sparkles className="w-3.5 h-3.5 text-[#B03A63]" />
                    <span>What’s Included in This Gift</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'included' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'included' && (
                  <div className="text-xs text-[#3A2A30]/80 pt-2 pb-1 space-y-1.5 leading-relaxed">
                    <p>• Hand-pleated velvety forever blooms crafted with luxury materials.</p>
                    <p>• Complimentary handwritten calligraphy card with vintage wax seal stamp.</p>
                    <p>• Multi-layered waterproof Korean wrapping paper with premium satin bow.</p>
                    <p>• Integrated warm micro fairy lights with replaceable batteries.</p>
                  </div>
                )}
              </div>

              {/* Accordion 2 */}
              <div className="border-b border-[#F4B6C6]/30 pb-3">
                <button
                  onClick={() => toggleAccordion('delivery')}
                  className="w-full flex items-center justify-between text-xs font-semibold py-2 text-left"
                >
                  <span className="flex items-center gap-2 text-[#3A2A30]">
                    <Truck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Nationwide Delivery Details</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'delivery' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'delivery' && (
                  <div className="text-xs text-[#3A2A30]/80 pt-2 pb-1 space-y-1.5 leading-relaxed">
                    <p>• <strong>Lahore &amp; Pattoki:</strong> Same-day or next-day express hand delivery available.</p>
                    <p>• <strong>Karachi, Islamabad, Rawalpindi &amp; All Other Cities:</strong> 2-3 business days delivery via trusted courier services (TCS, Trax).</p>
                    <p>• Shipped inside custom shockproof wooden/corrugated crates to guarantee zero transit damage.</p>
                  </div>
                )}
              </div>

              {/* Accordion 3 */}
              <div className="border-b border-[#F4B6C6]/30 pb-3">
                <button
                  onClick={() => toggleAccordion('time')}
                  className="w-full flex items-center justify-between text-xs font-semibold py-2 text-left"
                >
                  <span className="flex items-center gap-2 text-[#3A2A30]">
                    <Clock className="w-3.5 h-3.5 text-[#C9A66B]" />
                    <span>Crafting &amp; Customization Time</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'time' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'time' && (
                  <div className="text-xs text-[#3A2A30]/80 pt-2 pb-1 space-y-1.5 leading-relaxed">
                    <p>• Standard handcrafted pieces require <strong>2 to 4 days</strong> to hand-mold and assemble.</p>
                    <p>• Emergency orders in Lahore can often be processed within 24 hours upon WhatsApp inquiry.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-[#F4B6C6]/40">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1.5 font-serif italic text-sm font-medium text-[#C9A66B] tracking-wide">
                <img
                  src="/assets/icons/headings/about-heart-heading.svg"
                  alt=""
                  className="w-6 h-6 inline-block object-contain"
                />
                <span>handpicked pairings</span>
              </div>
              <h3 className="font-serif italic text-2xl font-bold text-[#3A2A30]">
                You May Also <span className="highlight-marker">Adore</span>
              </h3>
              <div className="flex items-center my-2" aria-hidden="true">
                <img
                  src="/assets/icons/headings/divider-ornament.svg"
                  alt=""
                  className="h-4 w-auto max-w-[180px] opacity-80"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectProduct(rel)}
                  className="p-3 rounded-2xl border border-[#F4B6C6]/60 bg-white cursor-pointer hover:shadow-md transition-all flex flex-col"
                >
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className="w-full aspect-[4/3] rounded-xl object-cover mb-2"
                  />
                  <h4 className="font-serif text-sm font-bold truncate text-[#3A2A30]">{rel.name}</h4>
                  <span className="text-xs text-[#B03A63] font-semibold mt-1">
                    Price on request, DM to order
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
