import React, { useState } from 'react';
import {
  X,
  Trash2,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  Truck,
  Plus,
  Minus,
} from 'lucide-react';
import { BRAND } from '../data/catalog';
import { CustomOrderItem } from '../types';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CustomOrderItem[];
  onRemoveItem: (index: number) => void;
  onUpdateQuantity: (index: number, quantity: number) => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQuantity,
}) => {
  const [selectedCity, setSelectedCity] = useState('Lahore');

  if (!isOpen) return null;

  const handleSendWhatsApp = () => {
    const lines: string[] = [
      `🌸 *Bulk Inquiry Bag - Mini Makers Web Boutique* 🌸`,
      `----------------------------------------`,
      `📍 *Delivery City:* ${selectedCity}`,
      `📦 *Total Items:* ${items.reduce((acc, curr) => acc + curr.quantity, 0)}`,
      `----------------------------------------`,
    ];

    items.forEach((item, i) => {
      lines.push(`${i + 1}. *${item.product.name}* (x${item.quantity})`);
      if (item.selectedOccasion) lines.push(`   • Occasion: ${item.selectedOccasion}`);
      if (item.selectedColor) lines.push(`   • Palette: ${item.selectedColor}`);
      if (item.selectedRibbon) lines.push(`   • Ribbon: ${item.selectedRibbon}`);
      if (item.recipientName) lines.push(`   • Recipient: ${item.recipientName}`);
      if (item.customNote) lines.push(`   • Card Note: "${item.customNote}"`);
    });

    lines.push(`----------------------------------------`);
    lines.push(`✨ *Pricing Policy:* Price on request, DM to order`);
    lines.push(`🚚 *Delivery Destination:* ${selectedCity}`);
    lines.push(`----------------------------------------`);
    lines.push(`Assalam-o-Alaikum Mini Makers! Please provide an exact quote and confirm dispatch availability for these items.`);

    const url = `https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden text-[#3A2A30]">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md flex flex-col shadow-2xl border-l border-[#F4B6C6] bg-[#FFF8F3] text-[#3A2A30]">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#F4B6C6]/40 flex items-center justify-between bg-[#FBE4EA]/50">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#B03A63] text-white flex items-center justify-center shadow-xs">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#3A2A30]">Inquiry Bag</h3>
                <span className="text-xs text-[#3A2A30]/70">
                  {items.length} Custom Selection(s) · {BRAND.name}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FBE4EA] text-[#3A2A30] transition-colors"
              aria-label="Close Inquiry Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center">
                <ShoppingBag className="w-12 h-12 text-[#B03A63]/40 mx-auto mb-3" />
                <h4 className="font-serif text-lg font-bold mb-1 text-[#3A2A30]">Your Bag is Empty</h4>
                <p className="text-xs text-[#3A2A30]/75 max-w-xs mx-auto mb-6">
                  Browse our bouquets, wedding platters, and specialty boxes to customize items for your bag.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 min-h-[44px] rounded-full text-xs font-semibold uppercase bg-[#B03A63] hover:bg-[#962B56] text-white shadow-xs"
                >
                  Explore Catalog
                </button>
              </div>
            ) : (
              items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-[#F4B6C6]/60 bg-white flex gap-3.5 relative shadow-xs"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-20 rounded-xl object-cover shrink-0 border border-[#F4B6C6]/40"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-sm font-bold line-clamp-1 text-[#3A2A30]">{item.product.name}</h4>
                      <p className="text-[11px] text-[#B03A63] font-semibold">{item.selectedColor || 'Custom Theme'}</p>
                      {item.selectedOccasion && (
                        <span className="text-[10px] text-[#3A2A30]/70 block">Occasion: {item.selectedOccasion}</span>
                      )}
                      {item.customNote && (
                        <p className="text-[10px] italic text-[#3A2A30]/75 line-clamp-1 mt-0.5">"{item.customNote}"</p>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#F4B6C6]/30 mt-2">
                      <span className="text-[11px] font-semibold text-[#B03A63]">
                        Price on request, DM to order
                      </span>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center border border-[#F4B6C6] rounded-full px-2 py-0.5 bg-[#FFF8F3]">
                          <button
                            onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                            className="p-0.5 hover:text-[#B03A63]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                            className="p-0.5 hover:text-[#B03A63]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(idx)}
                          className="p-1 text-red-500 hover:bg-red-50 rounded-full"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout via WhatsApp */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-[#F4B6C6]/40 bg-white space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#3A2A30]/80 block mb-1">
                  Delivery Destination:
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl text-xs outline-none border border-[#F4B6C6] bg-[#FFF8F3] text-[#3A2A30]"
                >
                  <option value="Lahore">Lahore (Hand Delivery / Express)</option>
                  <option value="Pattoki">Pattoki (Hand Delivery / Express)</option>
                  <option value="Karachi">Karachi (Courier)</option>
                  <option value="Islamabad">Islamabad (Courier)</option>
                  <option value="Rawalpindi">Rawalpindi (Courier)</option>
                  <option value="Other PK City">Other PK City (Nationwide)</option>
                </select>
              </div>

              <div className="p-3 rounded-xl bg-[#FBE4EA] text-xs space-y-1 text-[#3A2A30]">
                <div className="flex justify-between font-medium">
                  <span>Selected items:</span>
                  <span className="font-bold">{items.reduce((acc, curr) => acc + curr.quantity, 0)}</span>
                </div>
                <div className="flex justify-between font-bold text-[#B03A63]">
                  <span>Quote Status:</span>
                  <span>Price on request, DM to order</span>
                </div>
              </div>

              <button
                onClick={handleSendWhatsApp}
                className="w-full py-3.5 min-h-[48px] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md shadow-[#25D366]/20 transition-all active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Entire Bag to WhatsApp (0341-4655335)</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
