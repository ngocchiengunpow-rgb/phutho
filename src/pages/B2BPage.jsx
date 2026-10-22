import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function B2BPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [partnerType, setPartnerType] = useState('tea-factory');
  const [volume, setVolume] = useState('5 đến 10 tấn/tháng');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!companyName || !phone || !contactName) {
      alert('Vui lòng điền tên đơn vị, người liên hệ và số điện thoại!');
      return;
    }

    setFormSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Hero Header */}
      <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-forest-900">
        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-forest-800/80 text-forest-200 text-xs font-semibold border border-forest-700/60">
            HỢP TÁC DOANH NGHIỆP, HTX & KHU CÔNG NGHIỆP
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
            Liên Kết Phát Triển Chuỗi Giá Trị Xanh Phú Thọ
          </h1>
          <p className="text-forest-200 text-xs sm:text-sm leading-relaxed">
            Dự án triển khai 3 mũi nhọn liên kết chiến lược: Cơ chế "Đổi phế phẩm lấy vật tư" với 60 cơ sở & 15 HTX chế biến chè; Cung ứng Than sinh học cải tạo đất Biochar-Microbe theo giá sỉ chuẩn; và Chào thầu Than hoạt tính kỹ thuật lọc nước thải cho KCN Thụy Vân, Cẩm Khê.
          </p>
        </div>
      </div>

      {/* 3 Strategic Programs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Program 1 */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-forest-950/5 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-forest-800 block">Dành cho Nhà Máy & HTX Chè</span>
            <h3 className="text-lg font-bold text-forest-950 leading-snug">
              Cơ Chế "Đổi Phế Phẩm Lấy Vật Tư"
            </h3>
            <p className="text-xs text-charcoal-500 leading-relaxed">
              Ký hợp đồng bao tiêu rác thải hữu cơ dài hạn. Nhóm điều phối xe tải thu gom tận nơi (chi phí logistics hạch toán 300.000đ/tấn bã ẩm). Đổi lại, đơn vị được mua Than sinh học với chiết khấu ưu đãi 15% - 20% để bón lại đồi chè.
            </p>

            <ul className="space-y-2 text-xs text-charcoal-600 pt-3 border-t border-chalk-200">
              <li className="flex items-center gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Tiết kiệm 500k – 1tr đồng/tấn chi phí bãi rác</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Chiết khấu ưu đãi từ 15% - 20% vật tư Biochar</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Hỗ trợ hồ sơ canh tác VietGAP / OCOP xanh</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-chalk-200">
            <span className="text-[11px] font-bold text-forest-800 bg-forest-50 px-3 py-1 rounded-full block text-center border border-forest-200">
              Chiết khấu vật tư: 15% - 20%
            </span>
          </div>
        </div>

        {/* Program 2 */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-forest-950/5 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">Dành cho HTX & Vùng Cây Ăn Quả</span>
            <h3 className="text-lg font-bold text-forest-950 leading-snug">
              Cung Ứng Biochar-Microbe Bán Sỉ
            </h3>
            <p className="text-xs text-charcoal-500 leading-relaxed">
              Cung cấp Than sinh học bọc vi sinh Trichoderma đóng bao 25kg hoặc bao Jumbo 1 Tấn. Đơn giá bán sỉ chuẩn theo đề án: 15.000.000 VNĐ/tấn. Triển khai mô hình Demo Plot thực địa tại vườn chè và vườn bưởi Đoan Hùng.
            </p>

            <ul className="space-y-2 text-xs text-charcoal-600 pt-3 border-t border-chalk-200">
              <li className="flex items-center gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Đơn giá sỉ chuẩn: 15.000.000 VNĐ / Tấn</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Thực địa Demo Plot chứng minh hạ chua đất</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Tích hợp mã QR minh bạch lượng carbon cô lập</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-chalk-200">
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full block text-center border border-amber-200">
              Đơn giá sỉ: 15.000.000 đ/tấn
            </span>
          </div>
        </div>

        {/* Program 3 */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-forest-950/5 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-forest-800 block">Dành cho Nhà Máy KCN Phú Thọ</span>
            <h3 className="text-lg font-bold text-forest-950 leading-snug">
              Chào Thầu Than Hoạt Tính Kỹ Thuật
            </h3>
            <p className="text-xs text-charcoal-500 leading-relaxed">
              Than hoạt tính kỹ thuật cao hoạt hóa hóa học, nung yếm khí 400°C - 600°C và rửa trung hòa pH ~ 7. Đơn giá chào thầu 20.000.000 VNĐ/tấn phục vụ trạm xử lý nước thải dệt nhuộm, linh kiện, giấy tại KCN Thụy Vân và Cẩm Khê.
            </p>

            <ul className="space-y-2 text-xs text-charcoal-600 pt-3 border-t border-chalk-200">
              <li className="flex items-center gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Đơn giá chào thầu: 20.000.000 VNĐ / Tấn</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Diện tích bề mặt riêng BET &gt; 400 m²/g</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Hấp phụ chọn lọc kim loại nặng & màu dệt nhuộm</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-chalk-200">
            <span className="text-[11px] font-bold text-forest-800 bg-forest-50 px-3 py-1 rounded-full block text-center border border-forest-200">
              Đơn giá KCN: 20.000.000 đ/tấn
            </span>
          </div>
        </div>
      </div>

      {/* B2B Quotation Form */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-forest-950/5">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-forest-950 tracking-tight">
              Đăng Ký Hợp Tác Hoặc Yêu Cầu Báo Giá B2B
            </h2>
            <p className="text-charcoal-500 text-xs sm:text-sm">
              Bộ phận Đối ngoại B2B (Phạm Hồng Ngọc) & Trưởng nhóm (Nguyễn Ngọc Mai Lan) sẽ liên hệ phản hồi trong 24 giờ.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-forest-50 rounded-2xl p-8 border border-forest-200 text-center space-y-4 animate-fadeIn">
              <span className="inline-block px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider">
                Đăng Ký Thành Công
              </span>
              <h3 className="text-xl font-bold text-forest-950">Cảm Ơn Quý Đơn Vị {companyName}</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 max-w-md mx-auto">
                Chúng tôi đã ghi nhận yêu cầu từ <strong>{contactName}</strong> ({phone}). Nhóm sẽ liên hệ trực tiếp để trao đổi phương án thu gom bã chè hoặc cung ứng vật tư.
              </p>
              <div className="pt-2">
                <a
                  href={`https://zalo.me/0365542212?text=${encodeURIComponent(`Xin chào Mai Lan, tôi vừa gửi yêu cầu hợp tác B2B từ đơn vị: ${companyName}. Số điện thoại: ${phone}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-xs shadow-sm btn-press"
                >
                  Nhắn Zalo Với Trưởng Nhóm Ngay (0365.542.212)
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-charcoal-700 mb-1">
                    Tên Doanh Nghiệp, HTX, Nhà Máy <span className="text-red-500">*</span>:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: HTX Chè Thanh Sơn / Nhà máy KCN Thụy Vân"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full p-3 bg-[#faf8f5] border border-chalk-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-800"
                  />
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 mb-1">
                    Người đại diện liên hệ <span className="text-red-500">*</span>:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Anh Nguyễn Văn Tuấn"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full p-3 bg-[#faf8f5] border border-chalk-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-charcoal-700 mb-1">
                    Số điện thoại liên hệ <span className="text-red-500">*</span>:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0912 888 999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 bg-[#faf8f5] border border-chalk-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-800"
                  />
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 mb-1">
                    Email nhận hồ sơ báo giá:
                  </label>
                  <input
                    type="email"
                    placeholder="Ví dụ: contact@htxche.vn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-[#faf8f5] border border-chalk-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-charcoal-700 mb-1">Chương trình quan tâm:</label>
                  <select
                    value={partnerType}
                    onChange={(e) => setPartnerType(e.target.value)}
                    className="w-full p-3 bg-[#faf8f5] border border-chalk-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-800 cursor-pointer"
                  >
                    <option value="tea-factory">Cơ chế "Đổi phế phẩm lấy vật tư" (Nhà máy & HTX chè)</option>
                    <option value="wholesale-biochar">Mua sỉ Than sinh học Biochar-Microbe (15tr/tấn)</option>
                    <option value="water-carbon">Mua Than hoạt tính lọc nước thải KCN (20tr/tấn)</option>
                    <option value="demo-plot">Đăng ký làm mô hình trình diễn Demo Plot thực địa</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 mb-1">Quy mô dự kiến:</label>
                  <select
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full p-3 bg-[#faf8f5] border border-chalk-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-800 cursor-pointer"
                  >
                    <option value="1-5 tấn">1 đến 5 Tấn</option>
                    <option value="5 đến 10 tấn/tháng">5 đến 10 Tấn/tháng</option>
                    <option value="trên 20 tấn/tháng">Trên 20 Tấn/tháng (Hợp đồng dài hạn)</option>
                    <option value="demo-plot">Thử nghiệm Demo Plot (1 - 2 sào đất chè / bưởi)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-charcoal-700 mb-1">Ghi chú thêm:</label>
                <textarea
                  rows="3"
                  placeholder="Địa điểm kho bãi, đặc điểm bã chè tươi/khô, yêu cầu độ ẩm hoặc chỉ tiêu kiểm nghiệm nước thải..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 bg-[#faf8f5] border border-chalk-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-800"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold text-sm shadow-md transition btn-press"
              >
                Gửi Yêu Cầu Hợp Tác B2B
              </button>
            </form>
          )}

          {/* Direct Hotline Box */}
          <div className="pt-6 border-t border-chalk-200 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 gap-3">
            <div>
              <span>Trưởng nhóm điều hành: </span>
              <a href="tel:0365542212" className="text-forest-950 font-bold hover:underline">
                0365.542.212 (Nguyễn Ngọc Mai Lan)
              </a>
            </div>
            <div>
              <span>Đối ngoại B2B: </span>
              <a href="tel:0379780232" className="text-forest-950 font-bold hover:underline">
                0379.780.232 (Phạm Hồng Ngọc)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
