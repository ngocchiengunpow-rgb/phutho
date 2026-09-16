import React, { useState } from 'react';
import { 
  Building2, Factory, Handshake, CheckCircle2, ShieldCheck, 
  ArrowRight, Phone, Mail, FileText, Send, Sparkles, Truck, Droplets 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function B2BPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [partnerType, setPartnerType] = useState('tea-factory');
  const [volume, setVolume] = useState('5-10 tấn/tháng');
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
      <div className="bg-gradient-eco text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold">
            <Handshake className="w-3.5 h-3.5" />
            HỢP TÁC DOANH NGHIỆP & HỢP TÁC XÃ
          </span>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight">
            Liên Kết Phát Triển Kinh Tế Xanh Phú Thọ
          </h1>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Dự án cung cấp 3 chương trình hợp tác chiến lược: Ký hợp đồng thu gom bã chè 0đ với cơ sở chế biến, cung ứng phân bón sỉ theo tấn cho HTX nông nghiệp, và cung cấp than lọc nước thải cho các KCN với giá rẻ bằng 1/3 thị trường.
          </p>
        </div>
      </div>

      {/* 3 Strategic Programs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Program 1 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-tea-100 text-tea-800 flex items-center justify-center font-bold">
              <Factory className="w-6 h-6 text-tea-700" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-tea-700 block">Dành cho Nhà Máy Chè</span>
            <h3 className="text-xl font-black text-slate-900 leading-snug">
              Chương Trình "Đổi Phế Phẩm Lấy Vật Tư"
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Giải quyết triệt để 100% bã chè xả ra mỗi ngày. Startup bố trí xe tải thu gom tận nơi với chi phí 0đ, đồng thời chiết khấu 30% khi nhà máy mua biochar bón lại cho vùng chè liên kết.
            </p>

            <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tea-600 shrink-0" />
                <span>Tiết kiệm 500k - 1tr đồng/tấn phí bãi rác</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tea-600 shrink-0" />
                <span>Ký hợp đồng bao tiêu phế phẩm dài hạn</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tea-600 shrink-0" />
                <span>Hỗ trợ hồ sơ xanh đạt chuẩn OCOP & ESG</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <span className="text-[11px] font-bold text-tea-800 bg-tea-50 px-3 py-1 rounded-full block text-center">
              Chi phí thu gom: 0 VNĐ
            </span>
          </div>
        </div>

        {/* Program 2 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Truck className="w-6 h-6 text-amber-700" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">Dành cho HTX & Trang Trại</span>
            <h3 className="text-xl font-black text-slate-900 leading-snug">
              Cung Ứng Biochar & Phân Vi Sinh Theo Tấn
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Cung cấp biochar bón đất và phân vi sinh dạng bao 25kg hoặc bao Jumbo 1 Tấn với mức chiết khấu bán buôn cao nhất. Hỗ trợ kỹ sư đồng hành làm mô hình ruộng thử nghiệm (Demo Plot) miễn phí.
            </p>

            <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tea-600 shrink-0" />
                <span>Giá sỉ chỉ từ 9.500.000đ/tấn Biochar</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tea-600 shrink-0" />
                <span>Hỗ trợ xét nghiệm pH đất đồi miễn phí</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tea-600 shrink-0" />
                <span>Cam kết giao hàng đúng vụ mùa bón lót</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full block text-center">
              Chiết khấu đến 35% cho đại lý
            </span>
          </div>
        </div>

        {/* Program 3 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
              <Droplets className="w-6 h-6 text-blue-700" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800 block">Dành cho 7 KCN Phú Thọ</span>
            <h3 className="text-xl font-black text-slate-900 leading-snug">
              Than Hoạt Tính Lọc Nước Thải Giá Siêu Rẻ
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Giải pháp tối ưu chi phí vận hành cho các trạm xử lý nước thải công nghiệp dệt nhuộm, giấy, linh kiện điện tử tại KCN Thụy Vân, Cẩm Khê, Phú Hà với chỉ số hấp phụ Iodine &gt;800 mg/g.
            </p>

            <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tea-600 shrink-0" />
                <span>Giá chỉ 12.000 – 15.000đ/kg (rẻ bằng 1/3)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tea-600 shrink-0" />
                <span>Hấp thụ ion kim loại nặng và màu nước</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tea-600 shrink-0" />
                <span>Hóa đơn VAT và chứng nhận kỹ thuật đầy đủ</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full block text-center">
              Giá rẻ hơn 60% than đá/than gáo dừa
            </span>
          </div>
        </div>
      </div>

      {/* B2B Quotation Form */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-tea-700 bg-tea-100 px-3 py-1 rounded-full">
              KẾT NỐI TRỰC TIẾP
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Đăng Ký Hợp Tác Hoặc Yêu Cầu Báo Giá Sỉ B2B
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Trưởng nhóm Nguyễn Ngọc Mai Lan và ban điều hành sẽ liên hệ phản hồi trong vòng 24 giờ.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-tea-50 rounded-2xl p-8 border border-tea-200 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 bg-tea-700 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-tea-950">Đăng Ký Thành Công!</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Cảm ơn <strong>{companyName}</strong> ({contactName} - {phone}) đã gửi yêu cầu. Chúng tôi sẽ liên hệ lại ngay để thảo luận phương án hợp tác tối ưu nhất!
              </p>
              <div className="pt-2">
                <a
                  href={`https://zalo.me/0986728916?text=${encodeURIComponent(`Xin chào Mai Lan, tôi vừa gửi yêu cầu hợp tác B2B từ đơn vị: ${companyName}. Số điện thoại: ${phone}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md"
                >
                  Nhắn Zalo Với Trưởng Nhóm Ngay
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Tên Doanh Nghiệp / HTX / Nhà Máy <span className="text-red-500">*</span>:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: HTX Chè Hảo Thơ Thanh Sơn"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-tea-600"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Người đại diện liên hệ <span className="text-red-500">*</span>:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Anh Nguyễn Văn Tuấn (Giám đốc)"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-tea-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Số điện thoại liên hệ <span className="text-red-500">*</span>:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0912 888 999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-tea-600"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Email nhận báo giá:
                  </label>
                  <input
                    type="email"
                    placeholder="Ví dụ: contact@htxche.vn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-tea-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Chương trình quan tâm:</label>
                  <select
                    value={partnerType}
                    onChange={(e) => setPartnerType(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-tea-600"
                  >
                    <option value="tea-factory">Đổi phế phẩm bã chè lấy phân bón (Nhà máy chè)</option>
                    <option value="wholesale-biochar">Mua sỉ Biochar / Phân vi sinh (&gt; 1 Tấn)</option>
                    <option value="water-carbon">Mua Than hoạt tính lọc nước thải KCN</option>
                    <option value="demo-plot">Đăng ký làm ruộng thử nghiệm Demo Plot miễn phí</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Quy mô dự kiến:</label>
                  <select
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-tea-600"
                  >
                    <option value="1-5 tấn">1 - 5 Tấn</option>
                    <option value="5-10 tấn/tháng">5 - 10 Tấn / tháng</option>
                    <option value="&gt; 20 tấn/tháng">Trên 20 Tấn / tháng</option>
                    <option value="demo-plot">Thử nghiệm 1 - 2 sào đất</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Ghi chú thêm:</label>
                <textarea
                  rows="3"
                  placeholder="Địa điểm kho bãi, đặc điểm bã chè, yêu cầu độ ẩm hoặc chỉ tiêu kiểm nghiệm..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-tea-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-tea-800 hover:bg-tea-900 text-white font-extrabold text-base shadow-xl shadow-tea-900/30 transition flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Gửi Yêu Cầu Hợp Tác B2B
              </button>
            </form>
          )}

          {/* Direct Hotline Box */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-tea-600" />
              <span>Trao đổi trực tiếp với Trưởng nhóm:</span>
              <a href="tel:0986728916" className="text-tea-800 font-bold hover:underline">
                0986.728.916 (Nguyễn Ngọc Mai Lan)
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-tea-600" />
              <span>Email: nguyenngocmailan.biochar@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
