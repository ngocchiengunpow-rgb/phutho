import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import CircularTechPage from './pages/CircularTechPage';
import B2BPage from './pages/B2BPage';
import TraceabilityPage from './pages/TraceabilityPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

import { Phone, MessageSquare, ShoppingBag, CheckCircle, ArrowUp } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('biochar_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('biochar_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Scroll to top tracking
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (ci) => ci.id === item.id && ci.variantId === item.variantId
      );
      if (existingIdx > -1) {
        const newCart = [...prevCart];
        newCart[existingIdx].quantity += item.quantity;
        return newCart;
      } else {
        return [...prevCart, item];
      }
    });

    showToast(`Đã thêm ${item.quantity} ${item.name} (${item.variantLabel}) vào giỏ hàng!`);
  };

  const handleUpdateQuantity = (productId, variantId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId, variantId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.variantId === variantId
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (productId, variantId) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.id === productId && item.variantId === variantId)
      )
    );
    showToast('Đã xóa sản phẩm khỏi giỏ hàng');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-tea-600 selection:text-white relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900/95 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm border border-slate-700 animate-bounce">
          <CheckCircle className="w-4 h-4 text-tea-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={totalCartCount}
        openCart={() => {
          setActivePage('cart');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={handleAddToCart}
          />
        )}
        {activePage === 'shop' && (
          <ShopPage
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={handleAddToCart}
          />
        )}
        {activePage === 'cart' && (
          <CartPage
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            setActivePage={setActivePage}
          />
        )}
        {activePage === 'circular' && (
          <CircularTechPage setActivePage={setActivePage} />
        )}
        {activePage === 'b2b' && <B2BPage />}
        {activePage === 'trace' && <TraceabilityPage />}
        {activePage === 'about' && (
          <AboutPage setActivePage={setActivePage} />
        )}
        {activePage === 'blog' && <BlogPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(item) => {
            handleAddToCart(item);
            setSelectedProduct(null);
          }}
          onBuyNow={() => {
            setSelectedProduct(null);
            setActivePage('cart');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Floating Action Buttons (Zalo, Hotline, Scroll-to-top) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Scroll to top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center shadow-lg hover:bg-slate-900 transition hover:scale-110"
            title="Lên đầu trang"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Cart Button (visible on mobile) */}
        {totalCartCount > 0 && (
          <button
            onClick={() => {
              setActivePage('cart');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="relative p-3 rounded-full bg-tea-700 text-white shadow-xl hover:bg-tea-800 transition md:hidden hover:scale-110"
            title="Xem giỏ hàng"
          >
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
              {totalCartCount}
            </span>
          </button>
        )}

        {/* Zalo Direct Chat */}
        <a
          href="https://zalo.me/0986728916"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-xl hover:scale-105 transition group"
          title="Chat Zalo với Trưởng nhóm Mai Lan"
        >
          <MessageSquare className="w-4 h-4 fill-current group-hover:animate-pulse" />
          <span className="hidden sm:inline">Chat Zalo Mai Lan</span>
        </a>

        {/* Phone Hotline Call */}
        <a
          href="tel:0986728916"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-tea-700 hover:bg-tea-800 text-white font-bold text-xs sm:text-sm shadow-xl hover:scale-105 transition"
          title="Gọi Hotline 0986.728.916"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span className="font-extrabold">0986.728.916</span>
        </a>
      </div>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
