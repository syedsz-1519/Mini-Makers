# Mini Makers — Mobile-First Responsive Optimization Plan

Comprehensive mobile-first refactoring of the Mini Makers handmade personalized gift web application to guarantee zero horizontal scroll, perfect usability, and fluid responsiveness across all screen sizes (320px, 360px, 390px, 768px, 1024px, and 1440px+) while preserving the boutique aesthetic, colors, fonts, and assets.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following user preferences were confirmed during clarification and will govern the mobile layout:
> - **Navigation Drawer**: Collapses below 900px into a hamburger button and opens as a right-side slide-in drawer with backdrop, close button, outside tap dismiss, and locked body scroll.
> - **Category Navigation Chips**: Rendered as a smooth horizontal swipe ribbon with hidden scrollbars, momentum scrolling (`-webkit-overflow-scrolling: touch`), and subtle edge fade.
> - **Floating Contact Buttons**: Arranged as a vertical stack (Instagram over WhatsApp) anchored at the bottom-right corner with 56px touch circles, `env(safe-area-inset-bottom)` spacing, and hover-only tooltips.

---

### 1. Overview & Core Concept

- **What It Does**: Transforms the desktop-centric storefront into a fully responsive, mobile-first e-commerce experience. Eliminates horizontal overflows, introduces a collapsible navigation drawer, implements adaptive CSS grids (2 cols on phones, 3 on tablets, 4 on desktop), and streamlines the multi-step custom order wizard for small screens.
- **Target Audience / Persona**: Pakistani shoppers on mobile smartphones (iPhone, Samsung, Xiaomi) browsing from Lahore, Karachi, Islamabad, and across Pakistan over mobile networks.
- **Key Value**: Flawless, friction-free gift browsing and custom WhatsApp ordering on screens as narrow as 320px without layout breakage, clipped text, or accidental page sliding.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. *Mobile Navigation Flow*: Shopper taps the hamburger icon at $\le 900\text{px}$; the drawer smoothly slides in from the right over a frosted backdrop; body scroll is locked; tapping any category link or "WhatsApp Order" navigates and cleanly closes the drawer.
  2. *Product Discovery Flow*: Category chips swipe horizontally without overflowing the page; products display in an elegant 2-column grid on mobile with equal card heights, $4:5$ aspect-ratio images, and clear price inquiry tags.
  3. *Custom Order Flow*: On mobile ($<600\text{px}$), the multi-step wizard hides the bulky circle row and displays a clean progress bar with "Step X of 5" and step title. Inputs are $\ge 48\text{px}$ tall with $16\text{px}$ font to prevent iOS viewport auto-zoom. Back and Continue buttons stack vertically.
  4. *Direct WhatsApp Ordering*: Floating WhatsApp and Instagram buttons remain fixed at bottom-right with safe-area insets, never covering text, submit buttons, or drawer controls.

- **Visual Identity & Theme**:
  - *Palette*: Warm Cream canvas (`#FFF8F3`), Soft Blush structural surfaces (`#FBE4EA`), Antique Gold highlights (`#C9A66B`), Deep Maroon/Rose primary accent (`#B03A63`), and Charcoal text (`#3A2A30`). Strictly light mode.
  - *Typography*: Playfair Display (Serif display headlines), DM Sans / Poppins (clean body sans), and Noto Nastaliq Urdu (Urdu accents). Fluid clamp sizing: H1 `clamp(2rem, 7vw, 4rem)`, H2 `clamp(1.6rem, 4.5vw, 2.6rem)`, body `16px` minimum.
  - *Spacing & Spatial Math*: Section vertical padding `clamp(2rem, 6vw, 5rem)`, horizontal padding `16px` on mobile (`px-4 sm:px-6 lg:px-12`).

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Breakpoint Strategy (320px+, 600px, 900px, 1200px)**
  - *Chosen Approach*: Adopt mobile-first utility classes and media queries matching the requested breakpoints: Base ($320\text{px}\text{--}599\text{px}$), Tablet portrait ($600\text{px}\text{--}899\text{px}$), Tablet landscape / small laptop ($900\text{px}\text{--}1199\text{px}$), and Desktop ($1200\text{px}+$ and $1440\text{px}$).
  - *Why*: Perfectly aligns navigation collapse ($<900\text{px}$), wizard compaction ($<600\text{px}$), and grid scaling.
- **Decision 2: Global Box Sizing & Overflow Protection**
  - *Chosen Approach*: Add `*, *::before, *::after { box-sizing: border-box; }`, `img, video, svg { max-width: 100%; height: auto; }`, and `overflow-x: clip` on `body` in `index.css`. Replace any `100vw` or fixed-width card elements with `100%` and fluid max-widths.
  - *Why*: Eliminates all horizontal scroll triggers at the root without breaking sticky navigation or position fixed elements.
- **Decision 3: Zero Redesign Guarantee**
  - *Chosen Approach*: Maintain all existing component structures, colors, copy, and asset paths (`/assets/...`). Refactor purely layout, flex/grid, spacing, and sizing rules.
  - *Why*: Satisfies the strict user rule to fix responsiveness as fast as possible without altering the visual brand identity.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                          Mini Makers Web App                           │
├──────────────────────────────────┬─────────────────────────────────────┤
│ Responsive CSS Architecture      │ Component Breakpoint Matrix         │
│ (src/index.css)                  │                                     │
│  - box-sizing: border-box        │ ┌─────────────────────────────────┐ │
│  - overflow-x: clip on body      │ │ Header (sticky top)             │ │
│  - fluid clamp() typography      │ │  < 900px: Hamburger + Drawer    │ │
│  - fluid clamp() spacing         │ │  >= 900px: Inline text links    │ │
│  - @media (hover: hover) guards  │ └─────────────────────────────────┘ │
│  - prefers-reduced-motion        │ ┌─────────────────────────────────┐ │
│  - iOS 16px/48px input rule      │ │ Hero Section                    │ │
│                                  │ │  < 900px: Stacked (text + art)  │ │
│                                  │ │  >= 900px: Side-by-side 12-cols │ │
│                                  │ └─────────────────────────────────┘ │
│                                  │ ┌─────────────────────────────────┐ │
│                                  │ │ Catalog Grids (auto-fit)        │ │
│                                  │ │  < 600px: 2 columns (min 150px) │ │
│                                  │ │  600-899px: 3 columns           │ │
│                                  │ │  >= 900px: 4 columns            │ │
│                                  │ └─────────────────────────────────┘ │
│                                  │ ┌─────────────────────────────────┐ │
│                                  │ │ Custom Order Wizard             │ │
│                                  │ │  < 600px: Compact bar + stacked │ │
│                                  │ │  >= 600px: Full step circles    │ │
│                                  │ └─────────────────────────────────┘ │
│                                  │ ┌─────────────────────────────────┐ │
│                                  │ │ Floating Action Buttons         │ │
│                                  │ │  Fixed 56px + safe-area insets  │ │
│                                  │ └─────────────────────────────────┘ │
└──────────────────────────────────┴─────────────────────────────────────┘
```

#### File Refactoring Scope
1. **`src/index.css`**: Global reset, box-sizing, fluid clamp typography, touch target utilities, iOS input styling, safe-area footer spacing, and scrollbar styling.
2. **`src/components/Header.tsx`**: Collapse at 900px, right slide-in drawer with dark/blurred backdrop, body scroll lock (`overflow: hidden`), outside tap handler, accessibility attributes (`aria-expanded`, `aria-label`).
3. **`src/components/FloatingActionButtons.tsx`**: 56px touch circles on mobile, safe-area inset bottom padding, hover-only tooltips.
4. **`src/components/Footer.tsx`**: Mobile-responsive single column collapsing with 2-column quick links grid, generous bottom spacing so floating buttons never overlap copy.
5. **`src/screens/HomeScreen.tsx`**: Vertically stacked hero below 900px, constrained collage cards to prevent overflow, fluid typography, 2-column mobile category/product grids.
6. **`src/screens/CustomOrderScreen.tsx`**: Compact mobile stepper below 600px, 48px/16px form controls, stacked full-width Back/Continue buttons.
7. **`src/screens/BouquetsScreen.tsx`**, **`WeddingScreen.tsx`**, **`GiftBoxesScreen.tsx`**, **`FramesBasketsScreen.tsx`**, **`ReviewsGalleryScreen.tsx`**, **`ProductDetailScreen.tsx`**: Fluid grids (2 cols phone, 3 tablet, 4 desktop), swipeable filter ribbons with hidden scrollbars, responsive checkout action cards.
