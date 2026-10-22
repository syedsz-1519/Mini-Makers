import React from 'react';
import {
  MessageCircle,
  Instagram,
  Sparkles,
  ChevronRight,
  Star,
  CheckCheck,
  Play,
  Heart,
  MapPin,
} from 'lucide-react';
import { BRAND, REVIEWS, INSTAGRAM_POSTS, STALL_PHOTOS } from '../data/catalog';

interface ReviewsGalleryScreenProps {
  onNavigate: (screen: string) => void;
}

export const ReviewsGalleryScreen: React.FC<ReviewsGalleryScreenProps> = ({
  onNavigate,
}) => {
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
            <span className="font-semibold text-[#B03A63]">Happy Customers &amp; Gallery</span>
          </nav>

          <span className="text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 text-[#B03A63]">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
            <span>Customer Love &amp; Trust · Lahore | Pattoki</span>
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-3 text-[#3A2A30]">
            Words From Our Mini Makers Family
          </h1>

          {/* Star Rating Summary */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="font-bold text-sm text-[#3A2A30]">5.0 Star Rating</span>
            <span className="text-[#3A2A30]/60 text-xs">· Over 650+ Handcrafted Orders Delivered</span>
          </div>

          <p className="text-sm text-[#3A2A30]/80 leading-relaxed">
            Real feedback from brides, sisters, husbands, and celebration planners across Lahore, Karachi, Islamabad, and all of Pakistan.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12">
        
        {/* SECTION 1: WhatsApp-Style Review Chat Cards */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-700 flex items-center gap-1.5">
              <CheckCheck className="w-4 h-4" />
              <span>Verified WhatsApp Feedback</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-[#3A2A30]">
              Direct From Customer WhatsApp Chats
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-3xl border border-[#F4B6C6]/60 bg-white flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-xl"
              >
                <div>
                  {/* WhatsApp chat bubble replica */}
                  <div className="p-4 rounded-2xl rounded-tl-sm mb-4 border border-emerald-200 bg-[#E7F8EE] text-[#0F3821] relative">
                    <p className="text-xs sm:text-sm italic font-medium leading-relaxed">
                      "{rev.chatSnippet || rev.reviewText}"
                    </p>
                    <div className="flex items-center justify-end gap-1 text-[10px] text-emerald-800 opacity-80 mt-2">
                      <span>{rev.date}</span>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
                    </div>
                  </div>

                  {/* Customer Full Review */}
                  <div className="flex items-center text-amber-500 mb-2">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#3A2A30]/85 leading-relaxed mb-4">
                    {rev.reviewText}
                  </p>
                </div>

                {/* Customer Details Strip */}
                <div className="pt-4 border-t border-[#F4B6C6]/30 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#3A2A30]">{rev.customerName}</h4>
                    <span className="text-[#3A2A30]/70 text-[11px] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#B03A63]" />
                      <span>{rev.location}</span>
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-[#B03A63] block">
                      Ordered:
                    </span>
                    <span className="text-[11px] font-medium text-[#3A2A30]/90">{rev.productName}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: "From Our Instagram" 9 Square Grid */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#B03A63] flex items-center gap-1.5">
                <Instagram className="w-4 h-4" />
                <span>Join Our 1.2K+ Instagram Community</span>
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-[#3A2A30]">
                From Our Instagram Feed
              </h2>
              <p className="text-xs text-[#3A2A30]/75 mt-1">
                Behind-the-scenes crafting videos, reel highlights, and customer unboxing stories.
              </p>
            </div>

            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 min-h-[44px] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-[#B03A63] text-[#B03A63] hover:bg-[#FBE4EA] transition-all bg-white"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow @minimakers4</span>
            </a>
          </div>

          {/* 9-Square Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden border border-[#F4B6C6]/50 bg-white block shadow-xs"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-white text-center">
                  {post.type === 'reel' ? (
                    <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center mb-2">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  ) : (
                    <Instagram className="w-8 h-8 mb-2" />
                  )}
                  <p className="text-xs font-serif font-bold line-clamp-2">{post.title}</p>
                  <span className="text-[10px] text-pink-200 mt-1 flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-pink-400 text-pink-400" />
                    <span>{post.likes} likes</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* SECTION 3: "Seen at our stalls" Event Photos */}
        <section className="p-6 sm:p-10 rounded-[32px] border border-[#F4B6C6] bg-white shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C9A66B] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#C9A66B]" />
              <span>Lahore Pop-Ups &amp; Exhibitions</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-[#3A2A30]">
              Seen at Our Stalls &amp; Bazaars
            </h2>
            <p className="text-xs text-[#3A2A30]/80 mt-1">
              Meeting our customers in person at Lahore’s leading craft festivals and pet shows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STALL_PHOTOS.map((stall) => (
              <div
                key={stall.id}
                className="rounded-2xl overflow-hidden border border-[#F4B6C6]/50 bg-[#FFF8F3] flex flex-col shadow-xs"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={stall.image}
                    alt={stall.event}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-[10px] font-bold text-[#B03A63] uppercase tracking-wide">
                    {stall.venue}
                  </span>
                  <h4 className="font-serif text-base font-bold mt-0.5 mb-2 text-[#3A2A30]">{stall.event}</h4>
                  <p className="text-xs text-[#3A2A30]/75 mt-auto">{stall.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
