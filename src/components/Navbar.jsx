import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Phone, Leaf, Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, cartCount, openCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Trang Chủ' },
    { id: 'shop', label: 'Cửa Hàng' },
    { id: 'circular', label: 'Mô Hình Tuần Hoàn' },
    { id: 'b2b', label: 'Đối Tác B2B' },
    { id: 'trace', label: 'Tra Cứu QR' },
    { id: 'about', label: 'Giới Thiệu' },
    { id: 'blog', label: 'Cẩm Nang' },
    { id: 'contact', label: 'Liên Hệ' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#faf8f5]/95 backdrop-blur-md border-b border-forest-950/5 transition-all">
      {/* Top micro-bar */}
      <div className="bg-forest-950 text-forest-100 text-xs py-1.5 px-4 hidden md:block border-b border-forest-900/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-tight">
          <div className="flex items-center space-x-3">
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" strokeWidth={1.75} />
              Ý Tưởng Khởi Nghiệp Sinh Viên Hùng Vương 2026
            </span>
            <span className="text-forest-700">•</span>
            <span className="text-forest-200">Kinh tế tuần hoàn: Từ Đất Tổ, Trả Lại Đất Tổ</span>
          </div>
          <div className="flex items-center space-x-5">
            <a href="tel:0986728916" className="flex items-center gap-1.5 hover:text-white transition">
              <Phone className="w-3 h-3 text-forest-300" strokeWidth={1.75} />
              <span>Hotline Trưởng nhóm: <strong className="text-white font-semibold">0986.728.916</strong></span>
            </a>
            <span className="text-forest-700">•</span>
            <span className="text-forest-300">Đại học Hùng Vương, Phú Thọ</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-forest-950 text-white flex items-center justify-center shadow-md shadow-forest-950/15 group-hover:scale-105 transition-transform duration-200">
              <Leaf className="w-5 h-5 text-forest-300" strokeWidth={1.75} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black tracking-tight text-forest-950 font-sans">BIOCHAR</span>
                <span className="text-[10px] uppercase px-1.5 py-0.5 rounded-full bg-forest-100 text-forest-800 font-bold border border-forest-200">
                  Đất Tổ
                </span>
              </div>
              <p className="text-[11px] text-charcoal-500 font-medium tracking-wide">
                Than Sinh Học Từ Bã Chè
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-150 ${
                    isActive
                      ? 'text-forest-950 bg-forest-100/80 font-bold shadow-xs'
                      : 'text-charcoal-700 hover:text-forest-950 hover:bg-forest-50/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Cart */}
          <div className="flex items-center space-x-2.5">
            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2 rounded-full text-charcoal-800 hover:text-forest-950 hover:bg-forest-50 border border-forest-950/10 transition-colors flex items-center gap-1.5 btn-press"
              title="Xem giỏ hàng"
            >
              <ShoppingBag className="w-4 h-4 text-forest-900" strokeWidth={1.75} />
              <span className="text-xs font-bold text-charcoal-800 hidden sm:inline px-1">Giỏ hàng</span>
              {cartCount > 0 && (
                <span className="bg-forest-900 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick Consultation CTA */}
            <button
              onClick={() => handleNavClick('b2b')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full bg-forest-950 hover:bg-forest-900 text-white text-xs font-bold shadow-sm hover:shadow transition-all btn-press"
            >
              Hợp Tác B2B
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-charcoal-800 hover:bg-forest-50"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" strokeWidth={1.75} /> : <Menu className="w-5 h-5" strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f5] border-b border-forest-950/10 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                activePage === item.id
                  ? 'bg-forest-100 text-forest-950 font-bold'
                  : 'text-charcoal-700 hover:bg-forest-50'
              }`}
            >
              <span>{item.label}</span>
            </button>
          ))}
          <div className="pt-3 border-t border-forest-950/10 space-y-2">
            <a
              href="tel:0986728916"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-forest-50 text-forest-950 font-bold text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-forest-800" strokeWidth={1.75} />
              Hotline Trưởng nhóm: 0986.728.916
            </a>
            <button
              onClick={() => handleNavClick('b2b')}
              className="w-full py-2.5 rounded-full bg-forest-950 text-white font-bold text-xs shadow-sm"
            >
              Đăng Ký Đổi Phế Phẩm Lấy Vật Tư
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
