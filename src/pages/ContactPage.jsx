import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Tư vấn cải tạo đất');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Vui lòng điền họ tên và số điện thoại!');
      return;
    }
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-forest-900">
        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-forest-800/80 text-forest-200 text-xs font-semibold border border-forest-700/60">
            KẾT NỐI VỚI CHÚNG TÔI
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
            Liên Hệ Ban Điều Hành Dự Án
          </h1>
          <p className="text-forest-200 text-xs sm:text-sm leading-relaxed">
            Chúng tôi luôn sẵn sàng lắng nghe mọi phản hồi, tư vấn kỹ thuật bón Biochar thực địa cho bà con nông dân và tiếp nhận đề nghị hợp tác thu gom bã chè từ các cơ sở sản xuất.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Contact Info Cards */}
        <div className="lg:col-span-5 space-y-5">
          {/* Card Leader */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-forest-950/5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 block">
              Trực Tiếp Phụ Trách
            </span>
            <div className="flex items-center gap-4 pb-4 border-b border-chalk-200">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                alt="Mai Lan"
                className="w-16 h-16 rounded-full object-cover border-2 border-forest-700 shadow-md"
              />
              <div>
                <h3 className="text-base sm:text-lg font-bold text-forest-950">Nguyễn Ngọc Mai Lan</h3>
                <span className="text-xs font-semibold text-forest-700 block">Trưởng Nhóm Sáng Lập</span>
                <span className="text-[11px] text-charcoal-400">Lớp K22 Kế Toán B, ĐH Hùng Vương</span>
              </div>
            </div>

            <div className="space-y-3 text-xs text-charcoal-700">
              <div>
                <span className="text-charcoal-400 text-[11px] block">Hotline / Zalo:</span>
                <a href="tel:0964135205" className="font-bold text-forest-950 hover:underline text-sm">
                  0964.135.205
                </a>
              </div>

              <div>
                <span className="text-charcoal-400 text-[11px] block">Email chính thức:</span>
                <span className="font-semibold text-charcoal-900 break-all">nguyenngocmailan.biochar@gmail.com</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://zalo.me/0964135205"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition btn-press"
              >
                Nhắn tin Zalo trực tiếp: 0964.135.205
              </a>
            </div>
          </div>

          {/* Locations */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-forest-950/5 space-y-4 text-xs">
            <h4 className="font-bold text-forest-950 text-sm">
              Địa Điểm Hoạt Động
            </h4>

            <div className="space-y-3 text-charcoal-600">
              <div className="p-3.5 rounded-2xl bg-[#faf8f5] border border-chalk-200">
                <strong className="text-forest-950 block mb-0.5 font-bold">Xưởng sản xuất & Kho trữ nguyên liệu:</strong>
                <span>Cụm Công nghiệp Giáp Lai, Huyện Thanh Sơn, Tỉnh Phú Thọ.</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#faf8f5] border border-chalk-200">
                <strong className="text-forest-950 block mb-0.5 font-bold">Văn phòng Dự án & Trung tâm R&D:</strong>
                <span>Trung tâm Khởi nghiệp & Đổi mới Sáng tạo, Trường Đại học Hùng Vương, Phường Nông Trang, TP. Việt Trì, Phú Thọ.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-forest-950/5 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-forest-950 tracking-tight">
                Gửi Tin Nhắn Cho Nhóm Dự Án
              </h3>
              <p className="text-xs text-charcoal-500 mt-1">
                Điền thông tin vào mẫu bên dưới, chúng tôi sẽ phản hồi trong ngày.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-forest-50 border border-forest-200 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-forest-800 text-white font-bold text-xl flex items-center justify-center mx-auto">
                  ✓
                </div>
                <h4 className="font-bold text-forest-950 text-base">Tin nhắn đã được gửi thành công</h4>
                <p className="text-xs text-charcoal-600">
                  Cảm ơn <strong>{fullName}</strong>. Trưởng nhóm Mai Lan sẽ liên hệ lại qua số điện thoại <strong>{phone}</strong> trong thời gian sớm nhất.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-bold text-charcoal-700 mb-1">
                    Họ và tên của bạn <span className="text-red-500">*</span>:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Bác Trần Văn Nam"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-3 bg-[#faf8f5] border border-chalk-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-800"
                  />
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 mb-1">
                    Số điện thoại liên hệ <span className="text-red-500">*</span>:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0988 123 456"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 bg-[#faf8f5] border border-chalk-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-800"
                  />
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 mb-1">Nhu cầu cần hỗ trợ:</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-3 bg-[#faf8f5] border border-chalk-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-800 cursor-pointer"
                  >
                    <option value="Tư vấn cải tạo đất">Tư vấn cải tạo đất chua đồi chè hoặc cây ăn quả</option>
                    <option value="Đặt mua biochar">Đặt mua số lượng lớn hoặc làm đại lý</option>
                    <option value="Thu gom bã chè">Cung cấp bã chè phế phẩm từ nhà máy</option>
                    <option value="Lọc nước giếng">Tư vấn than hoạt tính lọc nước giếng khoan</option>
                    <option value="Khác">Nội dung khác</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 mb-1">Nội dung tin nhắn:</label>
                  <textarea
                    rows="4"
                    placeholder="Chia sẻ diện tích đất, tình trạng cây trồng hoặc vấn đề nguồn nước cần giải quyết..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 bg-[#faf8f5] border border-chalk-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-forest-950 hover:bg-forest-900 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center btn-press"
                >
                  Gửi Tin Nhắn Ngay
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
