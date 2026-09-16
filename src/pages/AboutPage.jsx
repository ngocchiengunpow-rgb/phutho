import React from 'react';
import { 
  Users, Award, Target, Compass, Heart, ShieldCheck, 
  Leaf, Calendar, DollarSign, ArrowRight 
} from 'lucide-react';
import { teamMembers, advisors, startupMetrics } from '../data/team';

export default function AboutPage({ setActivePage }) {
  const milestones = [
    {
      phase: 'Giai Đoạn 1 (0 – 6 Tháng)',
      title: 'Hoàn Thiện Pilot & Kiểm Nghiệm Lab',
      desc: 'Thiết kế hệ thống lò nung nhiệt phân cải tiến nội địa 126 triệu VNĐ, kiểm nghiệm chỉ tiêu pH, CEC và thử nghiệm trên 3ha đồi chè Thanh Sơn.'
    },
    {
      phase: 'Giai Đoạn 2 (6 – 18 Tháng)',
      title: 'Mở Rộng Kênh B2B & Chuẩn Hóa OCOP',
      desc: 'Ký kết hợp đồng thu gom bã chè với 15 HTX lớn, phân phối biochar và phân vi sinh qua hệ thống đại lý vật tư nông nghiệp Trung du.'
    },
    {
      phase: 'Giai Đoạn 3 (18 – 36 Tháng)',
      title: 'Đa Dạng Sản Phẩm & Tín Chỉ Carbon',
      desc: 'Mở rộng dây chuyền than hoạt tính kỹ thuật cao cho các KCN Phú Thọ, nghiên cứu đăng ký hồ sơ tín chỉ carbon theo chuẩn IBI.'
    },
    {
      phase: 'Giai Đoạn 4 (36+ Tháng)',
      title: 'Công Nghiệp Hóa & Vươn Tầm Quốc Tế',
      desc: 'Xây dựng nhà máy nhiệt phân tự động hóa quy mô 5.000 tấn/năm, liên kết xuất khẩu nông sản hữu cơ đạt chuẩn CBAM sang thị trường Châu Âu.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Hero Header */}
      <div className="bg-gradient-eco text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 fill-current" />
            CÂU CHUYỆN KHỞI NGHIỆP TỪ ĐẤT TỔ
          </span>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight">
            Từ Giảng Đường Hùng Vương Đến Khát Vọng Net Zero
          </h1>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Dự án ra đời từ niềm trăn trở của nhóm sinh viên Đại học Hùng Vương trước những đồi chè quê hương đang bị thoái hóa đất chua và hàng chục nghìn tấn bã chè bị đốt bỏ lãng phí mỗi năm.
          </p>
        </div>
      </div>

      {/* Origin Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-tea-700 bg-tea-100 px-3 py-1 rounded-full">
            SỨ MỆNH & TẦM NHÌN
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
            Khép Kín Vòng Đời Búp Chè Phú Thọ
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Phú Thọ là nôi chè của cả nước với gần 16.000 ha, nhưng cũng phải gánh chịu lượng phế thải bã chè khổng lồ 15.000 – 27.000 tấn mỗi năm. Đất đồi dốc trung du bị chua hóa và thoái hóa sau nhiều năm lạm dụng phân bón vô cơ, chi phí canh tác của nông dân ngày một tăng cao.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Nhóm sinh viên Đại học Hùng Vương đã nghiên cứu và phát triển thành công sản phẩm mẫu MVP: <strong>Than sinh học (Biochar) xốp vi mô từ bã chè</strong> kết hợp vi sinh vật bản địa, hiện thực hóa triết lý kinh tế tuần hoàn: <em>"Búp chè sinh ra từ đất Phú Thọ, sau khi chắt lọc tinh hoa sẽ trở lại làm màu mỡ cho chính mảnh đất ấy."</em>
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4 shadow-sm">
            <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              Thông Tin Hồ Sơ Dự Án Khởi Nghiệp
            </h3>
            <div className="divide-y divide-slate-200 text-xs sm:text-sm">
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500">Cuộc thi:</span>
                <span className="font-bold text-slate-800 text-right">{startupMetrics.contest}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500">Đơn vị chủ quản:</span>
                <span className="font-bold text-tea-800 text-right">{startupMetrics.university}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500">Giai đoạn dự án:</span>
                <span className="font-semibold text-slate-800 text-right">{startupMetrics.projectStage}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500">Tổng vốn đầu tư ban đầu:</span>
                <span className="font-bold text-slate-900 text-right">{startupMetrics.initialCapital}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500">Thời gian hòa vốn kỳ vọng:</span>
                <span className="font-bold text-green-700 text-right">{startupMetrics.breakEvenPeriod}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Details */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-tea-700 bg-tea-100 px-3 py-1 rounded-full">
            NHÂN SỰ SÁNG LẬP
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Thành Viên Nhóm Dự Án (ĐH Hùng Vương)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-6 border shadow-sm flex flex-col justify-between space-y-4 ${
                member.isLeader ? 'border-tea-500 ring-2 ring-tea-500/20 bg-tea-50/20' : 'border-slate-200'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <h4 className="font-black text-slate-900 text-base">{member.name}</h4>
                    <span className="text-xs font-bold text-tea-700 block">{member.role}</span>
                    <span className="text-[11px] text-slate-400 block">{member.classEdu}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {member.bio}
                </p>
              </div>

              {member.contact && (
                <div className="pt-3 border-t border-slate-100 text-xs space-y-1 text-slate-500">
                  <div>Hotline: <strong className="text-tea-800">{member.contact.phone}</strong></div>
                  <div>Email: <strong className="text-slate-700">{member.contact.email}</strong></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap / Milestones */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-tea-700 bg-tea-100 px-3 py-1 rounded-full">
            LỘ TRÌNH CHIẾN LƯỢC
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Kế Hoạch Phát Triển 4 Giai Đoạn
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-2">
              <span className="text-xs font-extrabold text-tea-700 block">{m.phase}</span>
              <h4 className="font-bold text-slate-900 text-sm leading-snug">{m.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
