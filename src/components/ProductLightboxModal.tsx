import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export interface ProductLightboxModalProps {
  isOpen: boolean;
  initialIndex?: number;
  images: string[];
  productName: string;
  onClose: () => void;
}

export const ProductLightboxModal: React.FC<ProductLightboxModalProps> = ({
  isOpen,
  initialIndex = 0,
  images,
  productName,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [panPosition, setPanPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const panStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const hasMovedRef = useRef<boolean>(false);
  const touchStartSwipeRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Sync index when initialIndex changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(Math.min(Math.max(0, initialIndex), Math.max(0, images.length - 1)));
      setIsZoomed(false);
      setPanPosition({ x: 0, y: 0 });
    }
  }, [isOpen, initialIndex, images.length]);

  // Manage body scroll lock and overlay-open class to hide floating action buttons
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('overlay-open');

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.classList.remove('overlay-open');
    };
  }, [isOpen]);

  const resetZoom = useCallback(() => {
    setIsZoomed(false);
    setPanPosition({ x: 0, y: 0 });
  }, []);

  const goToNext = useCallback(() => {
    if (images.length <= 1) return;
    resetZoom();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length, resetZoom]);

  const goToPrev = useCallback(() => {
    if (images.length <= 1) return;
    resetZoom();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length, resetZoom]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, goToNext, goToPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  // Mouse pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    hasMovedRef.current = false;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    panStartRef.current = { ...panPosition };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;

    if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
      hasMovedRef.current = true;
    }

    if (isZoomed) {
      // Bound pan position reasonably
      const maxPan = 320;
      setPanPosition({
        x: Math.min(Math.max(panStartRef.current.x + deltaX, -maxPan), maxPan),
        y: Math.min(Math.max(panStartRef.current.y + deltaY, -maxPan), maxPan),
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile swipe & touch pan
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      hasMovedRef.current = false;
      dragStartRef.current = { x: touch.clientX, y: touch.clientY };
      touchStartSwipeRef.current = { x: touch.clientX, y: touch.clientY };
      panStartRef.current = { ...panPosition };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - dragStartRef.current.x;
    const deltaY = touch.clientY - dragStartRef.current.y;

    if (Math.abs(deltaX) > 6 || Math.abs(deltaY) > 6) {
      hasMovedRef.current = true;
    }

    if (isZoomed) {
      const maxPan = 320;
      setPanPosition({
        x: Math.min(Math.max(panStartRef.current.x + deltaX, -maxPan), maxPan),
        y: Math.min(Math.max(panStartRef.current.y + deltaY, -maxPan), maxPan),
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsDragging(false);
    if (!isZoomed && hasMovedRef.current && e.changedTouches.length > 0) {
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartSwipeRef.current.x;
      const deltaY = touch.clientY - touchStartSwipeRef.current.y;
      // If horizontal swipe is prominent (> 45px) and greater than vertical movement
      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) {
          goToNext();
        } else {
          goToPrev();
        }
      }
    }
  };

  const toggleZoom = () => {
    if (isZoomed) {
      resetZoom();
    } else {
      setIsZoomed(true);
      setPanPosition({ x: 0, y: 0 });
    }
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Only toggle zoom if user clicked without dragging
    if (!hasMovedRef.current) {
      toggleZoom();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${productName} image viewer`}
      className="fixed inset-0 z-50 flex flex-col justify-between select-none bg-[#0F0A0D]/95 backdrop-blur-md animate-fade-in text-[#FFF8F3]"
      onClick={(e) => {
        // Tapping backdrop outside controls closes the modal
        if (e.target === e.currentTarget && !hasMovedRef.current) {
          onClose();
        }
      }}
    >
      {/* Top Action Bar */}
      <header
        className="w-full px-4 py-3 sm:px-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/60 to-transparent pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Product title and image counter */}
        <div className="flex items-center gap-2.5 min-w-0 pr-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[#F4B6C6] border border-white/15 backdrop-blur-xs shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
            <span>
              {currentIndex + 1} / {images.length}
            </span>
          </span>
          <h2 className="text-sm sm:text-base font-serif italic text-white/90 truncate max-w-[180px] sm:max-w-sm">
            {productName}
          </h2>
        </div>

        {/* Right: Zoom Toggle and Close Button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={toggleZoom}
            aria-label={isZoomed ? 'Zoom out to original fit' : 'Zoom into image details'}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#F4B6C6]"
            title={isZoomed ? 'Zoom out' : 'Zoom in (2.5x)'}
          >
            {isZoomed ? (
              <ZoomOut className="w-5 h-5 text-[#F4B6C6]" />
            ) : (
              <ZoomIn className="w-5 h-5 text-white" />
            )}
          </button>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-red-500/30 active:scale-95 text-white border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#F4B6C6]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Stage Viewport */}
      <main
        className="relative flex-1 w-full flex items-center justify-center overflow-hidden p-2 sm:p-6"
        onClick={(e) => {
          if (e.target === e.currentTarget && !hasMovedRef.current) {
            onClose();
          }
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Chevrons */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-6 z-20 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-xs transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#F4B6C6]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-6 z-20 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-xs transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#F4B6C6]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Zoomable Image Container */}
        <div
          className="relative max-w-full max-h-full flex items-center justify-center"
          onClick={handleImageClick}
        >
          <img
            src={currentImage}
            alt={`${productName} view ${currentIndex + 1}`}
            draggable={false}
            className={`max-w-[92vw] max-h-[66vh] sm:max-h-[72vh] object-contain rounded-2xl shadow-2xl transition-transform duration-200 will-change-transform ${
              isZoomed
                ? 'cursor-grab active:cursor-grabbing scale-[2.5]'
                : 'cursor-zoom-in hover:opacity-95'
            }`}
            style={{
              transform: isZoomed
                ? `scale(2.5) translate3d(${panPosition.x / 2.5}px, ${panPosition.y / 2.5}px, 0)`
                : 'scale(1)',
              touchAction: isZoomed ? 'none' : 'pan-y',
            }}
          />
        </div>

        {/* Tap to Zoom / Drag Hint Badge */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-black/60 text-white/90 border border-white/20 backdrop-blur-xs">
            {isZoomed ? 'Drag to pan details • Click to zoom out' : 'Click image to zoom 2.5x • Tap outside to close'}
          </span>
        </div>
      </main>

      {/* Bottom Thumbnail Strip */}
      <footer
        className="w-full px-4 py-3 sm:py-4 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-xl mx-auto flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-1 scrollbar-none">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                resetZoom();
                setCurrentIndex(idx);
              }}
              aria-label={`Show image ${idx + 1}`}
              className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                currentIndex === idx
                  ? 'border-[#F4B6C6] ring-2 ring-[#B03A63] scale-105 opacity-100'
                  : 'border-white/20 opacity-60 hover:opacity-90'
              }`}
            >
              <img
                src={img}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
};
