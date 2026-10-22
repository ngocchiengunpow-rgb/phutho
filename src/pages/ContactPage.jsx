import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { teamMembers, advisors } from '../data/team';

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
            Chúng tôi luôn sẵn sàng lắng nghe mọi phản hồi, tư vấn kỹ thuật bón Biochar hạ chua đất thực địa cho bà con nông dân và tiếp nhận đề nghị hợp tác thu gom bã chè từ các cơ sở, HTX và nhà máy.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Contact Info Cards */}
        <div className="lg:col-span-5 space-y-5">
          {/* Card Leader */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-forest-950/5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 block">
              Trưởng Nhóm Điều Hành
            </span>
            <div className="flex items-center gap-4 pb-4 border-b border-chalk-200">
              <img
                src={teamMembers[0].avatar}
                alt="Mai Lan"
                className="w-16 h-16 rounded-full object-cover border-2 border-forest-700 shadow-md"
              />
              <div>
                <h3 className="text-base sm:text-lg font-bold text-forest-950">{teamMembers[0].name}</h3>
                <span className="text-xs font-semibold text-forest-700 block">{teamMembers[0].role}</span>
                <span className="text-[11px] text-charcoal-400">{teamMembers[0].classEdu}</span>
              </div>
            </div>

            <div className="space-y-3 text-xs text-charcoal-700">
              <div>
                <span className="text-charcoal-400 text-[11px] block">Hotline / Zalo chính:</span>
                <a href={`tel:${teamMembers[0].contact.phone.replace(/\./g, '')}`} className="font-bold text-forest-950 hover:underline text-sm">
                  {teamMembers[0].contact.phone}
                </a>
              </div>

              <div>
                <span className="text-charcoal-400 text-[11px] block">Email chính thức:</span>
                <span className="font-semibold text-charcoal-900 break-all">{teamMembers[0].contact.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://zalo.me/${teamMembers[0].contact.zalo}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition btn-press"
              >
                Nhắn tin Zalo trực tiếp: {teamMembers[0].contact.phone}
              </a>
            </div>
          </div>

          {/* Other Members Contacts */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-forest-950/5 space-y-3 text-xs">
            <h4 className="font-bold text-forest-950 text-sm">
              Đầu Mối Liên Hệ Theo Chuyên Môn
            </h4>
            <div className="divide-y divide-chalk-200">
              {teamMembers.slice(1).map((m, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between">
                  <div>
                    <strong className="text-forest-950 block">{m.name}</strong>
                    <span className="text-charcoal-400 text-[11px]">{m.role}</span>
                  </div>
                  <div className="text-right">
                    <a href={`tel:${m.contact.phone.replace(/\./g, '')}`} className="font-bold text-forest-900 hover:underline">
                      {m.contact.phone}
                    </a>
                    <span className="text-[10px] text-charcoal-400 block">{m.contact.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-forest-950/5 space-y-4 text-xs">
            <h4 className="font-bold text-forest-950 text-sm">
              Địa Điểm Hoạt Động
            </h4>

            <div className="space-y-3 text-charcoal-600">
              <div className="p-3.5 rounded-2xl bg-[#faf8f5] border border-chalk-200">
                <strong className="text-forest-950 block mb-0.5 font-bold">Xưởng sản xuất Pilot & Kho trữ:</strong>
                <span>Huyện Thanh Sơn, Tỉnh Phú Thọ.</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#faf8f5] border border-chalk-200">
                <strong className="text-forest-950 block mb-0.5 font-bold">Cố vấn chuyên môn & R&D:</strong>
                <span>Trường Đại học Hùng Vương & Viện Nghiên Cứu Chè Phú Thọ.</span>
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
                    placeholder="Ví dụ: Bác Trần Văn Nam (Chủ đồi chè Thanh Sơn)"
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
                    placeholder="Ví dụ: 0912 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 bg-[#faf8f5] border border-chalk-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-800"
                  />
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 mb-1">
                    Nhu cầu cần hỗ trợ:
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-3 bg-[#faf8f5] border border-chalk-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-800 cursor-pointer"
                  >
                    <option value="Tư vấn cải tạo đất">Tư vấn kỹ thuật hạ chua đồi chè & vườn bưởi</option>
                    <option value="Hợp tác thu gom bã chè">Hợp tác cơ chế "Đổi phế phẩm lấy vật tư" (Nhà máy chè)</option>
                    <option value="Mua than hoạt tính">Mua Than hoạt tính kỹ thuật lọc nước thải KCN</option>
                    <option value="Đăng ký đại lý">Đăng ký làm đại lý phân phối Than sinh học</option>
                    <option value="Tham gia Demo Plot">Đăng ký tham quan mô hình trình diễn Demo Plot</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 mb-1">
                    Nội dung lời nhắn:
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Mô tả diện tích đất canh tác, tình trạng chua đất, lượng bã chè xả ra mỗi ngày hoặc câu hỏi kỹ thuật..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 bg-[#faf8f5] border border-chalk-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold text-sm shadow-md transition btn-press"
                >
                  Gửi Lời Nhắn Đến Ban Điều Hành
                </button>
              </form>
            )}

            {/* Quick Note */}
            <div className="p-4 rounded-2xl bg-[#faf8f5] border border-chalk-200 text-xs text-charcoal-600 leading-relaxed">
              <strong>Cam kết hỗ trợ nông dân:</strong> Nhóm luôn sẵn sàng đến tận vườn khảo sát đo độ pH đất và hướng dẫn kỹ thuật bón thử nghiệm miễn phí cho bà con nông dân Phú Thọ.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
