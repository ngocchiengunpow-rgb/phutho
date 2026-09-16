import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Phone, Leaf, Sparkles, QrCode, Building2, BookOpen, Users, Compass } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, cartCount, openCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Trang Chủ' },
    { id: 'shop', label: 'Cửa Hàng', badge: 'Mới' },
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      {/* Top micro-bar */}
      <div className="bg-tea-900 text-tea-100 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amberGold-500" />
              Dự án Ý tưởng Khởi nghiệp Sinh viên Hùng Vương 2026
            </span>
            <span className="text-tea-400">|</span>
            <span>Mô hình kinh tế tuần hoàn "Từ Đất Tổ – Trả lại Đất Tổ"</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:0986728916" className="flex items-center gap-1 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-tea-400" />
              Hotline Trưởng nhóm: <span className="font-semibold text-white">0986.728.916</span>
            </a>
            <span className="text-tea-400">|</span>
            <span className="text-tea-200">ĐH Hùng Vương – Phú Thọ</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tea-700 via-tea-800 to-tea-950 flex items-center justify-center text-white shadow-md shadow-tea-900/20 group-hover:scale-105 transition">
              <Leaf className="w-7 h-7 text-tea-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-tea-950">BIOCHAR</span>
                <span className="text-xs uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold border border-amber-300">
                  Đất Tổ
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium tracking-wide">
                Than Sinh Học Từ Bã Chè Phú Thọ
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
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-tea-800 bg-tea-50 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-tea-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1 px-1.5 py-0.2 text-[10px] bg-red-500 text-white font-bold rounded-full animate-pulse">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-tea-700 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Cart */}
          <div className="flex items-center space-x-3">
            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2.5 rounded-xl text-slate-700 hover:text-tea-800 hover:bg-tea-50 border border-slate-200 transition flex items-center gap-2"
              title="Xem giỏ hàng"
            >
              <ShoppingBag className="w-5 h-5 text-tea-800" />
              <span className="text-xs font-bold text-slate-700 hidden sm:inline">Giỏ hàng</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-tea-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick Consultation CTA */}
            <button
              onClick={() => handleNavClick('b2b')}
              className="hidden md:inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-tea-800 hover:bg-tea-900 text-white text-sm font-semibold shadow-md shadow-tea-900/20 hover:shadow-lg transition active:scale-95"
            >
              Hợp Tác B2B
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-xl animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                activePage === item.id
                  ? 'bg-tea-50 text-tea-800 font-bold border-l-4 border-tea-700'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <a
              href="tel:0986728916"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-100 text-slate-800 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-tea-700" />
              Gọi Trưởng nhóm: 0986.728.916
            </a>
            <button
              onClick={() => handleNavClick('b2b')}
              className="w-full py-3 rounded-xl bg-tea-800 text-white font-semibold text-sm shadow-md"
            >
              Đăng Ký Đổi Phế Phẩm Lấy Vật Tư
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
