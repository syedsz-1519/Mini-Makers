/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActionButtons } from './components/FloatingActionButtons';
import { InquiryDrawer } from './components/InquiryDrawer';
import { SearchModal } from './components/SearchModal';
import { HomeScreen } from './screens/HomeScreen';
import { BouquetsScreen } from './screens/BouquetsScreen';
import { WeddingScreen } from './screens/WeddingScreen';
import { GiftBoxesScreen } from './screens/GiftBoxesScreen';
import { FramesBasketsScreen } from './screens/FramesBasketsScreen';
import { ProductDetailScreen } from './screens/ProductDetailScreen';
import { HowToOrderScreen } from './screens/HowToOrderScreen';
import { ReviewsGalleryScreen } from './screens/ReviewsGalleryScreen';
import { CustomOrderScreen } from './screens/CustomOrderScreen';
import { PRODUCTS } from './data/catalog';
import { Product, CustomOrderItem } from './types';

export default function App() {
  // Navigation state
  const [currentScreen, setCurrentScreen] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);

  // Inquiry Cart state
  const [inquiryItems, setInquiryItems] = useState<CustomOrderItem[]>([
    {
      product: PRODUCTS[0],
      selectedOccasion: 'Birthday',
      selectedColor: 'Blush Rose & Cream',
      selectedRibbon: 'Mauve Satin',
      customNote: 'Happy Birthday! Wishing you endless smiles.',
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentScreen('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (customItem: CustomOrderItem) => {
    setInquiryItems((prev) => [...prev, customItem]);
    setIsCartOpen(true);
  };

  const handleRemoveCartItem = (index: number) => {
    setInquiryItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpdateCartQuantity = (index: number, quantity: number) => {
    setInquiryItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, quantity } : item))
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F3] text-[#3A2A30] font-sans antialiased selection:bg-[#FBE4EA] selection:text-[#B03A63]">
      {/* Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        cartCount={inquiryItems.reduce((acc, curr) => acc + curr.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentScreen === 'bouquets' && (
          <BouquetsScreen
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentScreen === 'wedding' && (
          <WeddingScreen
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentScreen === 'gift-boxes' && (
          <GiftBoxesScreen
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentScreen === 'frames-baskets' && (
          <FramesBasketsScreen
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentScreen === 'product-detail' && (
          <ProductDetailScreen
            product={selectedProduct}
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentScreen === 'how-to-order' && (
          <HowToOrderScreen
            onNavigate={handleNavigate}
          />
        )}

        {currentScreen === 'reviews' && (
          <ReviewsGalleryScreen
            onNavigate={handleNavigate}
          />
        )}

        {currentScreen === 'custom-order' && (
          <CustomOrderScreen
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
      />

      {/* Persistent Floating Dual Action Buttons (Instagram on top, WhatsApp on bottom) */}
      <FloatingActionButtons />

      {/* Inquiry Cart Drawer */}
      <InquiryDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={inquiryItems}
        onRemoveItem={handleRemoveCartItem}
        onUpdateQuantity={handleUpdateCartQuantity}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}
