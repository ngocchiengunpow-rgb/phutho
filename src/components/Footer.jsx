import React from 'react';
import { Leaf, Phone, Mail, MapPin, Award, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: About & Slogan */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-tea-700 flex items-center justify-center text-white shadow-lg">
                <Leaf className="w-6 h-6 text-tea-300" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">BIOCHAR BÃ CHÈ ĐẤT TỔ</span>
                <span className="block text-xs text-tea-400 font-semibold uppercase">
                  Mô hình Kinh tế Tuần hoàn Khép kín
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Dự án khởi nghiệp tiên phong của sinh viên Đại học Hùng Vương (Phú Thọ): Chuyển hóa hàng chục nghìn tấn bã chè phế phẩm thành than sinh học xốp vi mô cải tạo đất thoái hóa, phân vi sinh bản địa và than hoạt tính lọc nước sạch.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Award className="w-4 h-4" />
                HUNG VUONG STARTUP IDEA 2026
              </div>
              <p className="text-slate-400">
                Ý tưởng Khởi nghiệp Sinh viên – Trường Đại Học Hùng Vương (Phú Thọ)
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Khám Phá Dự Án</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-tea-400 transition">Trang Chủ</button>
              </li>
              <li>
                <button onClick={() => handleNav('shop')} className="hover:text-tea-400 transition">Cửa Hàng Sản Phẩm</button>
              </li>
              <li>
                <button onClick={() => handleNav('circular')} className="hover:text-tea-400 transition">Mô Hình Tuần Hoàn</button>
              </li>
              <li>
                <button onClick={() => handleNav('b2b')} className="hover:text-tea-400 transition">Chương Trình Đổi Phế Phẩm</button>
              </li>
              <li>
                <button onClick={() => handleNav('trace')} className="hover:text-tea-400 transition">Tra Cứu Mã QR Lô Hàng</button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-tea-400 transition">Cẩm Nang Đất & Cây Chè</button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Products */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Dòng Sản Phẩm</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('shop')}>
                Biochar Bã Chè Cải Tạo Đất
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('shop')}>
                Phân Vi Sinh Biochar-Microbe
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('shop')}>
                Than Hoạt Tính Lọc Nước Thải & Phèn
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('shop')}>
                Dấm Gỗ Sinh Học Xua Đuổi Côn Trùng
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('shop')}>
                Combo Sống Xanh Nông Nghiệp Đô Thị
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Leader Info */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Thông Tin Liên Hệ</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-tea-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Trưởng nhóm: Nguyễn Ngọc Mai Lan</span>
                  <p className="text-slate-400">Lớp K22 Kế Toán B – ĐH Hùng Vương</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-tea-400 shrink-0" />
                <a href="tel:0986728916" className="text-tea-300 font-bold hover:underline">
                  0986.728.916
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-tea-400 shrink-0" />
                <span className="text-slate-300 break-all">nguyenngocmailan.biochar@gmail.com</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-tea-400 shrink-0 mt-0.5" />
                <span>Xưởng thực nghiệm: CCN Giáp Lai, Thanh Sơn, Phú Thọ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2026 Dự án "Than sinh học (Biochar) từ bã chè" – Đội thi Đại học Hùng Vương, Phú Thọ.</p>
          <div className="flex items-center gap-6">
            <span>Tiêu chuẩn IBI & Net Zero 2050</span>
            <span>•</span>
            <span>Kinh tế tuần hoàn "Từ Đất Tổ – Trả lại Đất Tổ"</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
