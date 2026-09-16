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
            HỢP TÁC DOANH NGHIỆP & HỢP TÁC XÃ
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
            Liên Kết Phát Triển Kinh Tế Xanh Phú Thọ
          </h1>
          <p className="text-forest-200 text-xs sm:text-sm leading-relaxed">
            Dự án cung cấp 3 chương trình hợp tác chiến lược: Thu gom bã chè 0đ với cơ sở chế biến, cung ứng phân bón sỉ theo tấn cho HTX nông nghiệp, và cung cấp than lọc nước thải cho các KCN với giá rẻ bằng 1/3 thị trường.
          </p>
        </div>
      </div>

      {/* 3 Strategic Programs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Program 1 */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-forest-950/5 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-forest-800 block">Dành cho Nhà Máy Chè</span>
            <h3 className="text-lg font-bold text-forest-950 leading-snug">
              Chương Trình "Đổi Phế Phẩm Lấy Vật Tư"
            </h3>
            <p className="text-xs text-charcoal-500 leading-relaxed">
              Giải quyết triệt để 100% bã chè xả ra mỗi ngày. Startup bố trí xe tải thu gom tận nơi với chi phí 0đ, đồng thời chiết khấu 30% khi nhà máy mua biochar bón lại cho vùng chè liên kết.
            </p>

            <ul className="space-y-2 text-xs text-charcoal-600 pt-3 border-t border-chalk-200">
              <li className="flex items-center gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Tiết kiệm 500k đến 1tr đồng/tấn phí bãi rác</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Ký hợp đồng bao tiêu phế phẩm dài hạn</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Hỗ trợ hồ sơ xanh đạt chuẩn OCOP & ESG</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-chalk-200">
            <span className="text-[11px] font-bold text-forest-800 bg-forest-50 px-3 py-1 rounded-full block text-center border border-forest-200">
              Chi phí thu gom: 0 VNĐ
            </span>
          </div>
        </div>

        {/* Program 2 */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-forest-950/5 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">Dành cho HTX & Trang Trại</span>
            <h3 className="text-lg font-bold text-forest-950 leading-snug">
              Cung Ứng Biochar & Phân Vi Sinh Theo Tấn
            </h3>
            <p className="text-xs text-charcoal-500 leading-relaxed">
              Cung cấp biochar bón đất và phân vi sinh dạng bao 25kg hoặc bao Jumbo 1 Tấn với mức chiết khấu bán buôn cao nhất. Hỗ trợ kỹ sư đồng hành làm mô hình ruộng thử nghiệm (Demo Plot) miễn phí.
            </p>

            <ul className="space-y-2 text-xs text-charcoal-600 pt-3 border-t border-chalk-200">
              <li className="flex items-center gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Giá sỉ chỉ từ 9.500.000đ/tấn Biochar</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Hỗ trợ xét nghiệm pH đất đồi miễn phí</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Cam kết giao hàng đúng vụ mùa bón lót</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-chalk-200">
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full block text-center border border-amber-200">
              Chiết khấu đến 35% cho đại lý
            </span>
          </div>
        </div>

        {/* Program 3 */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-forest-950/5 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-forest-800 block">Dành cho 7 KCN Phú Thọ</span>
            <h3 className="text-lg font-bold text-forest-950 leading-snug">
              Than Hoạt Tính Lọc Nước Thải Giá Rẻ
            </h3>
            <p className="text-xs text-charcoal-500 leading-relaxed">
              Giải pháp tối ưu chi phí vận hành cho các trạm xử lý nước thải công nghiệp dệt nhuộm, giấy, linh kiện điện tử tại KCN Thụy Vân, Cẩm Khê, Phú Hà với chỉ số hấp phụ Iodine trên 800 mg/g.
            </p>

            <ul className="space-y-2 text-xs text-charcoal-600 pt-3 border-t border-chalk-200">
              <li className="flex items-center gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Giá chỉ 12.000 đến 15.000đ/kg (rẻ bằng 1/3)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Hấp thụ ion kim loại nặng và màu nước</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Có giấy kiểm định hàm lượng tro & lưu huỳnh</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-chalk-200">
            <span className="text-[11px] font-bold text-forest-800 bg-forest-50 px-3 py-1 rounded-full block text-center border border-forest-200">
              Rẻ bằng 1/3 than hoạt tính gáo dừa
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
              Trưởng nhóm Nguyễn Ngọc Mai Lan và ban điều hành sẽ liên hệ phản hồi trong vòng 24 giờ.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-forest-50 rounded-2xl p-8 border border-forest-200 text-center space-y-4 animate-fadeIn">
              <span className="inline-block px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider">
                Đăng Ký Thành Công
              </span>
              <h3 className="text-xl font-bold text-forest-950">Cảm Ơn Đơn Vị {companyName}</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 max-w-md mx-auto">
                Chúng tôi đã ghi nhận yêu cầu từ <strong>{contactName}</strong> ({phone}). Trưởng nhóm Mai Lan sẽ liên hệ trực tiếp trong thời gian sớm nhất.
              </p>
              <div className="pt-2">
                <a
                  href={`https://zalo.me/0964135205?text=${encodeURIComponent(`Xin chào Mai Lan, tôi vừa gửi yêu cầu hợp tác B2B từ đơn vị: ${companyName}. Số điện thoại: ${phone}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-xs shadow-sm btn-press"
                >
                  Nhắn Zalo Với Trưởng Nhóm Ngay
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
                    placeholder="Ví dụ: HTX Chè Hảo Thơ Thanh Sơn"
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
                    Email nhận báo giá:
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
                    <option value="tea-factory">Đổi phế phẩm bã chè lấy phân bón (Nhà máy chè)</option>
                    <option value="wholesale-biochar">Mua sỉ Biochar hoặc Phân vi sinh trên 1 Tấn</option>
                    <option value="water-carbon">Mua Than hoạt tính lọc nước thải KCN</option>
                    <option value="demo-plot">Đăng ký làm ruộng thử nghiệm Demo Plot miễn phí</option>
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
                    <option value="trên 20 tấn/tháng">Trên 20 Tấn/tháng</option>
                    <option value="demo-plot">Thử nghiệm 1 đến 2 sào đất</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-charcoal-700 mb-1">Ghi chú thêm:</label>
                <textarea
                  rows="3"
                  placeholder="Địa điểm kho bãi, đặc điểm bã chè, yêu cầu độ ẩm hoặc chỉ tiêu kiểm nghiệm..."
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
              <span>Trao đổi trực tiếp với Trưởng nhóm: </span>
              <a href="tel:0964135205" className="text-forest-950 font-bold hover:underline">
                0964.135.205 (Nguyễn Ngọc Mai Lan)
              </a>
            </div>
            <div>
              <span>Email: nguyenngocmailan.biochar@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
