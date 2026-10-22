import React, { useState } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/catalog';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const popularKeywords = [
    '#NikkahPlatters',
    '#ChenilleTulips',
    '#DoodhPilaiGlass',
    '#EidiChest',
    '#SnackBox',
    '#RibbonBouquet',
  ];

  const filtered = PRODUCTS.filter((p) => {
    if (!query.trim()) return false;
    const q = query.toLowerCase().trim();
    return (
      p.name.toLowerCase().includes(q) ||
      (p.urduName && p.urduName.toLowerCase().includes(q)) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex items-start justify-center text-[#3A2A30]">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl rounded-3xl border border-[#F4B6C6] bg-white shadow-2xl overflow-hidden z-10">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#F4B6C6]/40 flex items-center gap-3 bg-[#FFF8F3]">
          <Search className="w-5 h-5 text-[#B03A63] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search bouquets, doodh pilai glass, nikkah pens, snack boxes..."
            className="flex-1 bg-transparent text-sm sm:text-base outline-none text-[#3A2A30] placeholder:text-[#3A2A30]/50"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full hover:bg-[#FBE4EA] text-[#3A2A30]/70"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-[#F4B6C6] flex items-center justify-center hover:bg-[#FBE4EA] text-xs font-semibold"
          >
            Esc
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
          {/* If No Query: Suggest Popular Keywords & Quick Links */}
          {!query.trim() && (
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#B03A63] block mb-3">
                Trending Searches in Lahore
              </span>
              <div className="flex flex-wrap gap-2 mb-6">
                {popularKeywords.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag.replace('#', ''))}
                    className="px-3.5 py-1.5 min-h-[38px] rounded-full text-xs font-semibold border border-[#F4B6C6] bg-[#FFF8F3] hover:bg-[#FBE4EA] text-[#3A2A30] transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-2xl border border-[#F4B6C6]/50 bg-[#FBE4EA]/40 text-xs">
                <div className="flex items-center gap-2 font-bold mb-1 text-[#B03A63]">
                  <Sparkles className="w-4 h-4 text-[#C9A66B]" />
                  <span>Looking for Something Custom?</span>
                </div>
                <p className="text-[#3A2A30]/80">
                  Send screenshots directly on WhatsApp (0341-4655335) or Instagram (@minimakers4). We create made-to-order keepsakes tailored for you.
                </p>
              </div>
            </div>
          )}

          {/* Search Results */}
          {query.trim() && filtered.length === 0 && (
            <div className="py-12 text-center">
              <Search className="w-10 h-10 text-[#B03A63]/30 mx-auto mb-2" />
              <h4 className="font-serif text-base font-bold text-[#3A2A30]">No exact designs found</h4>
              <p className="text-xs text-[#3A2A30]/75 mt-1 max-w-sm mx-auto">
                Don’t worry! We can handcraft almost any bouquet or gift box you show us on WhatsApp.
              </p>
            </div>
          )}

          {query.trim() && filtered.length > 0 && (
            <div className="space-y-3">
              <span className="text-xs font-semibold text-[#3A2A30]/70 block mb-2">
                Found {filtered.length} design(s)
              </span>
              {filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                  }}
                  className="p-3 rounded-2xl border border-[#F4B6C6]/60 bg-[#FFF8F3] hover:bg-white flex items-center justify-between gap-3 cursor-pointer transition-all hover:border-[#B03A63] shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-xl object-cover shrink-0 border border-[#F4B6C6]/40"
                    />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#B03A63]">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-sm font-bold text-[#3A2A30]">{item.name}</h4>
                      <p className="text-xs text-[#3A2A30]/70 line-clamp-1">{item.tagline}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-semibold text-[#B03A63] hidden sm:inline">
                      Price on request
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#B03A63]" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
