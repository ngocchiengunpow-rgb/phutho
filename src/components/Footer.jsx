import React from 'react';

export default function Footer({ setActivePage }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-950 text-white pt-14 pb-8 border-t border-forest-900/60 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-forest-900/40">
          {/* Col 1: About & Slogan */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo_biochar_phutho_light.png" 
                alt="Than sinh học (Biochar) từ bã chè" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-charcoal-300 leading-relaxed pr-4 text-pretty">
              Dự án khởi nghiệp của sinh viên ĐH Hùng Vương (Đội Hùng Vương Đất Tổ): Thiết lập chuỗi cung ứng xanh khép kín từ phế phụ phẩm ngành trà Phú Thọ (cọng già, cám bụi, bã chè ẩm) thành Than sinh học cải tạo đất Biochar-Microbe và Than hoạt tính lọc nước kỹ thuật cao.
            </p>
            <div className="p-3.5 rounded-2xl bg-forest-950/60 border border-forest-900/60 text-xs text-charcoal-200 space-y-1">
              <div className="text-forest-300 font-bold">
                Ý TƯỞNG KHỞI NGHIỆP SINH VIÊN HÙNG VƯƠNG 2026
              </div>
              <p className="text-charcoal-400">
                Đội thi: Hùng Vương Đất Tổ • Trường Đại Học Hùng Vương
              </p>
              <p className="text-emerald-400 text-[11px]">
                Giảng viên cố vấn: Th.s Dương Thị Dung
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
                <button onClick={() => handleNav('trace')} className="hover:text-forest-200 transition">Tra Cứu Mã QR Carbon</button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-forest-200 transition">Hồ Sơ & Tài Chính</button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-forest-200 transition">Cẩm Nang Kỹ Thuật</button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Products */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Dòng Sản Phẩm</h4>
            <ul className="space-y-2 text-xs text-charcoal-300">
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('shop')}>
                Biochar Cải Tạo Đất Đất Tổ (15tr/tấn)
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('shop')}>
                Biochar-Microbe Bọc Vi Sinh Trichoderma
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('shop')}>
                Than Hoạt Tính Kỹ Thuật Lọc Nước (20tr/tấn)
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('shop')}>
                Viên Nén Mini Cho Sen Đá & Cây Cảnh
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('shop')}>
                Combo Sống Xanh Đất Tổ Đô Thị
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
                <p className="text-forest-300 font-bold mt-0.5">Hotline: 0365.542.212</p>
                <p className="text-charcoal-400 text-[11px] break-all">nnmlan2006@gmail.com</p>
              </div>

              <div className="pt-2 border-t border-forest-900/60">
                <span className="text-charcoal-400">Kế toán & Tài chính: </span>
                <span className="text-white font-medium">Lưu Tuyết Anh</span>
                <p className="text-charcoal-400 text-[11px]">SĐT: 0964.135.205</p>
              </div>

              <div className="pt-2 border-t border-forest-900/60">
                <span className="text-charcoal-400">Xưởng Pilot thực nghiệm: </span>
                <p className="text-charcoal-300 text-[11px]">Huyện Thanh Sơn, Tỉnh Phú Thọ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-charcoal-400 gap-4">
          <p>© 2026 Dự án Than Sinh Học Từ Phế Phẩm Chè Phú Thọ. Đội thi Hùng Vương Đất Tổ.</p>
          <div className="flex items-center space-x-6">
            <span>Đại Học Hùng Vương</span>
            <span>Viện Nghiên Cứu Chè Phú Thọ</span>
            <span className="text-emerald-400">Net Zero 2050</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
