import React from 'react';
import { teamMembers, startupMetrics } from '../data/team';

export default function AboutPage({ setActivePage }) {
  const milestones = [
    {
      phase: 'Giai Đoạn 1 (0 đến 6 Tháng)',
      title: 'Hoàn Thiện Pilot & Kiểm Nghiệm Lab',
      desc: 'Thiết kế hệ thống lò nhiệt phân cải tiến nội địa 126 triệu VNĐ, kiểm nghiệm chỉ tiêu pH, CEC và thử nghiệm trên 3ha đồi chè Thanh Sơn.'
    },
    {
      phase: 'Giai Đoạn 2 (6 đến 18 Tháng)',
      title: 'Mở Rộng Kênh B2B & Chuẩn Hóa OCOP',
      desc: 'Ký hợp đồng thu gom bã chè với 15 HTX lớn, phân phối biochar và phân vi sinh qua hệ thống đại lý vật tư nông nghiệp Trung du.'
    },
    {
      phase: 'Giai Đoạn 3 (18 đến 36 Tháng)',
      title: 'Đa Dạng Sản Phẩm & Tín Chỉ Carbon',
      desc: 'Mở rộng dây chuyền than hoạt tính cho các KCN Phú Thọ, nghiên cứu đăng ký hồ sơ tín chỉ carbon theo chuẩn quốc tế.'
    },
    {
      phase: 'Giai Đoạn 4 (Trên 36 Tháng)',
      title: 'Công Nghiệp Hóa & Chuẩn CBAM',
      desc: 'Xây dựng nhà máy nhiệt phân tự động hóa quy mô 5.000 tấn/năm, liên kết xuất khẩu nông sản hữu cơ đạt chuẩn CBAM sang thị trường Châu Âu.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Hero Header */}
      <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-forest-900">
        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-forest-800/80 text-amber-400 text-xs font-semibold border border-forest-700/60">
            CÂU CHUYỆN KHỞI NGHIỆP TỪ ĐẤT TỔ
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
            Từ Giảng Đường Hùng Vương Đến Khát Vọng Net Zero
          </h1>
          <p className="text-forest-200 text-xs sm:text-sm leading-relaxed">
            Dự án ra đời từ niềm trăn trở của nhóm sinh viên Đại học Hùng Vương trước những đồi chè quê hương đang bị thoái hóa đất chua và hàng chục nghìn tấn bã chè bị đốt bỏ lãng phí mỗi năm.
          </p>
        </div>
      </div>

      {/* Origin Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-forest-950 leading-snug tracking-tight">
            Khép Kín Vòng Đời Búp Chè Phú Thọ
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Phú Thọ là nôi chè của cả nước với gần 16.000 ha, nhưng cũng phải gánh chịu lượng phế thải bã chè khổng lồ 15.000 đến 27.000 tấn mỗi năm. Đất đồi dốc trung du bị chua hóa và thoái hóa sau nhiều năm lạm dụng phân bón vô cơ, chi phí canh tác của nông dân ngày một tăng cao.
          </p>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Nhóm sinh viên Đại học Hùng Vương đã nghiên cứu và phát triển thành công sản phẩm mẫu MVP: <strong>Than sinh học (Biochar) xốp vi mô từ bã chè</strong> kết hợp vi sinh vật bản địa, hiện thực hóa triết lý kinh tế tuần hoàn: <em>"Búp chè sinh ra từ đất Phú Thọ, sau khi chắt lọc tinh hoa sẽ trở lại làm màu mỡ cho chính mảnh đất ấy."</em>
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-forest-950/5 space-y-4 shadow-md">
            <h3 className="font-bold text-forest-950 text-sm sm:text-base">
              Thông Tin Hồ Sơ Dự Án Khởi Nghiệp
            </h3>
            <div className="divide-y divide-chalk-200 text-xs">
              <div className="py-2.5 flex justify-between">
                <span className="text-charcoal-500">Cuộc thi:</span>
                <span className="font-bold text-charcoal-900 text-right">{startupMetrics.contest}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-charcoal-500">Đơn vị chủ quản:</span>
                <span className="font-bold text-forest-900 text-right">{startupMetrics.university}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-charcoal-500">Giai đoạn:</span>
                <span className="font-semibold text-charcoal-900 text-right">{startupMetrics.projectStage}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-charcoal-500">Tổng vốn ban đầu:</span>
                <span className="font-bold text-forest-950 text-right">{startupMetrics.initialCapital}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-charcoal-500">Thời gian hòa vốn kỳ vọng:</span>
                <span className="font-bold text-forest-800 text-right">{startupMetrics.breakEvenPeriod}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Details */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-forest-950 tracking-tight">
            Thành Viên Nhóm Dự Án (ĐH Hùng Vương)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-6 border shadow-sm flex flex-col justify-between space-y-4 ${
                member.isLeader ? 'border-forest-700 bg-forest-50/20' : 'border-forest-950/5'
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
                    <h4 className="font-bold text-forest-950 text-sm sm:text-base">{member.name}</h4>
                    <span className="text-xs font-semibold text-forest-700 block">{member.role}</span>
                    <span className="text-[11px] text-charcoal-400 block">{member.classEdu}</span>
                  </div>
                </div>

                <p className="text-xs text-charcoal-600 leading-relaxed pt-2 border-t border-chalk-200">
                  {member.bio}
                </p>
              </div>

              {member.contact && (
                <div className="pt-3 border-t border-chalk-200 text-xs space-y-1 text-charcoal-500">
                  <div>Hotline: <strong className="text-forest-900">{member.contact.phone}</strong></div>
                  <div>Email: <strong className="text-charcoal-800">{member.contact.email}</strong></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Roadmap */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-forest-950 tracking-tight">
            Kế Hoạch Phát Triển 4 Giai Đoạn
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {milestones.map((m, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-forest-950/5 shadow-xs space-y-2">
              <span className="text-[11px] font-bold text-forest-800 uppercase block">{m.phase}</span>
              <h4 className="font-bold text-forest-950 text-sm leading-snug">{m.title}</h4>
              <p className="text-xs text-charcoal-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
