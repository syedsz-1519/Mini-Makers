# Product Gallery Lightbox & High-Definition Craft Imagery

A full-screen interactive product gallery lightbox with tap/click zoom, drag-panning, and thumbnail ribbon navigation, paired with high-definition handcrafted stitch, floral embroidery, and atelier keepsake assets for Mini Makers.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following decisions were confirmed through Phase 1 requirements clarification and guide the implementation:
> - **Zoom Interaction**: Click or tap anywhere on the active image to toggle between standard fitted view and 2.5x high-magnification zoom, with natural drag-panning on mouse and touch.
> - **Navigation Controls**: Clean floating Next/Previous chevron arrows, top action bar with image counter (`Image 1 of 4`) and close button, plus a swipeable thumbnail ribbon pinned to the bottom.
> - **Image Quality & Stitch Details**: Upgrade lower-resolution embroidery, hoop, and frame assets with crisp, studio-lit high-definition assets highlighting delicate yarn stitches, ribbon petals, and velvet textures.
> - **Overlay Dismissal & Accessibility**: Tapping or clicking the backdrop instantly dismisses the lightbox. Pressing `Escape` or swiping down also safely closes the viewer. Body scrolling is locked, and floating action buttons automatically hide during lightbox inspection.

---

## 1. Overview & Core Concept

- **What It Does**: Enhances the Mini Makers product experience by allowing shoppers to tap any gallery image on the Product Detail page to open an immersive, dark frosted full-screen lightbox. Users can toggle zoom, drag across fine handcrafted details (like hand-embroidered French knots, chenille yarn loops, and gold foil calligraphy), cycle through product angles with arrows or a bottom thumbnail ribbon, and tap outside to close.
- **Target Audience / Persona**: Gift buyers, brides, and celebratory shoppers seeking authentic handcrafted Pakistani keepsakes who want to inspect the texture, finish, and craftsmanship before inquiring on WhatsApp.
- **Key Value**: Bridges the tactile gap of online handmade boutique shopping, elevating confidence and aesthetic admiration before WhatsApp order hand-off.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Entry Point**: On `ProductDetailScreen`, the main stage image displays a subtle magnifying glass pill on hover/tap (`"Tap to inspect details"`). Clicking the image or zoom badge launches the lightbox.
2. **Immersive Viewing**: The screen transitions smoothly into a full-screen ambient backdrop (`rgba(15, 10, 13, 0.94)` with subtle frosted blur). The product photo is centered at full display resolution without distortion.
3. **Zoom & Pan Interaction**:
   - Single click or tap toggles 2.5x magnification. The cursor becomes a grab hand (`cursor-grab` / `cursor-grabbing`).
   - Dragging or panning moves the zoomed image freely within boundary limits.
   - Double-clicking or clicking again resets back to 1x fitted scale.
4. **Gallery Navigation**:
   - Left and right circular chevron buttons (`min-w-[44px] min-h-[44px]`) allow seamless previous/next transitions with subtle cross-fades.
   - A bottom thumbnail carousel displays all available angles, with the active thumbnail outlined in warm gold and blush rose.
5. **Dismissal**:
   - Tapping the backdrop, clicking the top-right close `X` button, or pressing the `Escape` key immediately closes the lightbox with a 200ms scale-down transition.

### Visual Identity & Theme
- **Backdrop Tone**: Deep espresso plum scrim (`#1A0C14` at 95% opacity with `backdrop-blur-md`) providing maximum contrast for delicate light rose, white gypsophila, and pastel fabrics.
- **Toolbar & Badges**: Clean unboxed typography (`Playfair Display` italic image counter, e.g., *"Photo 2 of 4"*), circular buttons with 1px blush borders (`border-[#F4B6C6]/40`), and gold accents (`#C9A66B`).
- **Touch Targets**: All interactive targets (prev/next, close, thumbnails) meet or exceed the 44px mobile touch requirement.
- **Floating Button Coordination**: Triggers `body.overlay-open` so floating WhatsApp/Instagram buttons smoothly fade out and never obstruct lightbox controls.

---

## 3. Key Product Decisions & Trade-Offs

### Decision 1: Toggle Zoom with Drag-Panning vs. Pinch-Only
- **Chosen Approach**: Click/tap toggle to 2.5x with instant drag-panning, paired with keyboard arrow support and double-click reset.
- **Why**: Click-to-zoom is intuitive and reliable across all device categories (desktop mouse clicks, laptop trackpads, and mobile taps) without conflicting with mobile browser gesture navigation.
- **Alternatives Considered**: Pinch-only zoom can conflict with browser viewport gestures in iframe sandboxes.

### Decision 2: Thumbnail Carousel Placement
- **Chosen Approach**: Fixed floating thumbnail ribbon along the bottom edge, elevated above the backdrop with `scroll-snap` and touch swipe.
- **Why**: Keeps all available photo angles instantly reachable with one tap while leaving the primary stage area open for the enlarged photograph.
- **Alternatives Considered**: Sidebar drawer for thumbnails crowds mobile viewports and shrinks active product dimensions.

### Decision 3: High-Definition Asset Curation for Stitch & Craft Details
- **Chosen Approach**: Introduce studio-lit, high-fidelity imagery for personalized embroidery hoops, hand-stitched floral lettering, and shadow box frames, augmenting the catalog gallery arrays with multi-angle shots.
- **Why**: Handcrafted embroidery and chenille flowers rely heavily on close-up texture clarity. High-res imagery showcases the authentic handmade artisan quality of Lahore & Pattoki makers.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────┐
│               ProductDetailScreen.tsx                  │
│  - Stage Image Viewport (tap to trigger lightbox)      │
│  - Thumbnail Strip & Product Specifications            │
└───────────────────────────┬────────────────────────────┘
                            │
               opens with (imageIndex, images[])
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│             ProductLightboxModal.tsx                   │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Top Action Bar: Counter ("2 of 4") · Zoom · Close│  │
│  └──────────────────────────────────────────────────┘  │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Viewport Container (click backdrop to dismiss)   │  │
│  │   [Prev Arrow]   <Active Zoomable Image>   [Next]│  │
│  └──────────────────────────────────────────────────┘  │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Bottom Thumbnail Ribbon (swipeable with snap)    │  │
│  └──────────────────────────────────────────────────┘  │
└───────────────────────────┬────────────────────────────┘
                            │
              syncs with App / Body State
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│      FloatingActionButtons & Body Scroll Governance    │
│  - Adds body.overlay-open (hides WhatsApp/IG FABs)     │
│  - Locks body scroll (overflow: hidden)                │
└────────────────────────────────────────────────────────┘
```

### Component & State Mapping
1. **`src/components/ProductLightboxModal.tsx`**:
   - Manages `activeIndex`, `isZoomed`, `panPosition { x, y }`, `isDragging`, and `dragStart`.
   - Backdrop click detection with `e.target === e.currentTarget` check to prevent accidental closes while dragging the image.
   - Keyboard listener for `Escape`, `ArrowLeft`, and `ArrowRight`.
   - Touch drag handlers (`onTouchStart`, `onTouchMove`, `onTouchEnd`) for smooth panning while zoomed.
2. **`src/screens/ProductDetailScreen.tsx`**:
   - Adds `isLightboxOpen` and `lightboxIndex` state.
   - Clicking main product image or gallery thumbnails opens `ProductLightboxModal`.
3. **`src/data/catalog.ts`**:
   - Enriches frame, hoop, and stitch products with detailed multi-image galleries featuring high-resolution close-ups.
