import React from 'react';
import { Leaf } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0c1410] text-[#a7b5ad] pt-16 pb-12 border-t border-forest-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-forest-900/40">
          {/* Col 1: About & Slogan */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-forest-800 text-white flex items-center justify-center shadow-sm">
                <Leaf className="w-5 h-5 text-forest-200" strokeWidth={1.75} />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">BIOCHAR BÃ CHÈ ĐẤT TỔ</span>
                <span className="block text-xs text-forest-300 font-semibold uppercase">
                  Mô hình Kinh tế Tuần hoàn Khép kín
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-300 leading-relaxed pr-4">
              Dự án khởi nghiệp của sinh viên Đại học Hùng Vương, Phú Thọ: Chuyển hóa hàng chục nghìn tấn bã chè phế phẩm thành than sinh học xốp vi mô cải tạo đất thoái hóa, phân vi sinh bản địa và than hoạt tính lọc nước sạch.
            </p>
            <div className="p-3.5 rounded-2xl bg-forest-950/60 border border-forest-900/60 text-xs text-charcoal-200 space-y-1">
              <div className="text-forest-300 font-bold">
                Ý TƯỞNG KHỞI NGHIỆP SINH VIÊN HÙNG VƯƠNG 2026
              </div>
              <p className="text-charcoal-400">
                Trường Đại Học Hùng Vương, Tỉnh Phú Thọ
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Khám Phá Dự Án</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-forest-200 transition">Trang Chủ</button>
              </li>
              <li>
                <button onClick={() => handleNav('shop')} className="hover:text-forest-200 transition">Cửa Hàng Sản Phẩm</button>
              </li>
              <li>
                <button onClick={() => handleNav('circular')} className="hover:text-forest-200 transition">Mô Hình Tuần Hoàn</button>
              </li>
              <li>
                <button onClick={() => handleNav('b2b')} className="hover:text-forest-200 transition">Chương Trình Đổi Phế Phẩm</button>
              </li>
              <li>
                <button onClick={() => handleNav('trace')} className="hover:text-forest-200 transition">Tra Cứu Mã QR Lô Hàng</button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-forest-200 transition">Cẩm Nang Đất & Cây Chè</button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Products */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Dòng Sản Phẩm</h4>
            <ul className="space-y-2 text-xs text-charcoal-300">
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('shop')}>
                Biochar Bã Chè Cải Tạo Đất
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('shop')}>
                Phân Vi Sinh Biochar Microbe
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('shop')}>
                Than Hoạt Tính Lọc Nước Thải & Phèn
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('shop')}>
                Dấm Gỗ Sinh Học Bã Chè
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('shop')}>
                Combo Sống Xanh Nông Nghiệp Đô Thị
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Leader Info */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Thông Tin Liên Hệ</h4>
            <div className="space-y-2 text-xs text-charcoal-200">
              <div>
                <span className="font-semibold text-white">Trưởng nhóm: Nguyễn Ngọc Mai Lan</span>
                <p className="text-charcoal-400">Lớp K22 Kế Toán B, ĐH Hùng Vương</p>
              </div>

              <div>
                <span className="text-charcoal-400">Hotline: </span>
                <a href="tel:0964135205" className="text-forest-200 font-bold hover:underline">
                  0964.135.205
                </a>
              </div>

              <div>
                <span className="text-charcoal-400">Email: </span>
                <span className="text-charcoal-300 break-all">nguyenngocmailan.biochar@gmail.com</span>
              </div>

              <div>
                <span className="text-charcoal-400">Xưởng SX: </span>
                <span>CCN Giáp Lai, Thanh Sơn, Phú Thọ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-charcoal-400 gap-4">
          <p>© 2026 Dự án Than sinh học (Biochar) từ bã chè. Đội thi Đại học Hùng Vương, Phú Thọ.</p>
          <div className="flex items-center gap-4">
            <span>Tiêu chuẩn IBI & Net Zero 2050</span>
            <span>•</span>
            <span>Kinh tế tuần hoàn: Từ Đất Tổ, Trả Lại Đất Tổ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
