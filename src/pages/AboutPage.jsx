import React, { useState } from 'react';
import { teamMembers, advisors, startupMetrics } from '../data/team';

export default function AboutPage({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'finance' | 'market' | 'roadmap' | 'legal'

  const milestones = [
    {
      phase: 'Giai Đoạn 1 (0 – 18 Tháng / Năm 1 – 2)',
      title: 'Thâm Nhập & Định Vị Thị Trường Ngách Phú Thọ',
      desc: 'Hoàn thiện xưởng Pilot công suất 30kg đầu ra/giờ (43,2 tấn/năm) tại Thanh Sơn. Triển khai mô hình Demo Plot tại đồi chè và vườn bưởi Đoan Hùng; kích hoạt cơ chế "Đổi phế phẩm lấy vật tư" (chiết khấu 15-20%). Cán mốc hòa vốn vào tháng thứ 9.',
      revenue: 'Doanh thu: 691,2 triệu đ • Lợi nhuận ST: 392,96 triệu đ'
    },
    {
      phase: 'Giai Đoạn 2 (18 – 36 Tháng / Năm 3 – 4)',
      title: 'Chuẩn Hóa & Nhân Rộng Module Xưởng Vùng Trung Du',
      desc: 'Trích lợi nhuận tích lũy nâng công suất ca lò chạy tịnh tiến. Chuẩn hóa quy trình kỹ thuật để chuyển giao, nhân rộng mô hình module xưởng sản xuất tại các vùng chè lân cận như Yên Bái, Tuyên Quang, Thái Nguyên.',
      revenue: 'Doanh thu kỳ vọng: 3 – 5 tỷ đồng/năm'
    },
    {
      phase: 'Giai Đoạn 3 (Từ 36 Tháng Trở Đi / Từ Năm 5+)',
      title: 'Bứt Phá, Quốc Tế Hóa & Thương Mại Tín Chỉ Carbon',
      desc: 'Nâng cấp nhà xưởng lên quy mô công nghiệp lớn. Kiểm định các chỉ số giảm phát thải (2,5 - 3t CO₂e/tấn Biochar) để đăng ký tham gia thị trường thương mại hóa tín chỉ lưu trữ carbon (Carbon Removal Credits), đồng hành cùng mục tiêu Net Zero 2050 và chuẩn CBAM.',
      revenue: 'Dòng doanh thu kép từ sản phẩm vật lý & chứng chỉ carbon quốc tế'
    }
  ];

  const legalPhases = [
    {
      phase: 'Giai đoạn A — Hồ sơ nghiên cứu & phê duyệt',
      items: [
        { code: 'PL01', name: 'Xác định tên đề tài, mục tiêu và phạm vi nghiên cứu', status: 'Đã có' },
        { code: 'PL02', name: 'Hoàn thiện đề cương nghiên cứu phiên bản mới nhất', status: 'Đã có' },
        { code: 'PL03', name: 'Xác nhận giảng viên hướng dẫn (Th.s Dương Thị Dung)', status: 'Đã có' },
        { code: 'PL04', name: 'Xác minh tình trạng nộp / phê duyệt đề tài', status: 'Đã có' },
        { code: 'PL05', name: 'Xác định địa điểm, thiết bị và đơn vị phối hợp', status: 'Dự kiến' }
      ]
    },
    {
      phase: 'Giai đoạn B — Nguồn nguyên liệu & lấy mẫu',
      items: [
        { code: 'PL06', name: 'Xác định nguồn và đặc điểm phụ phẩm chè (60 cơ sở & 15 HTX)', status: 'Đã có' },
        { code: 'PL07', name: 'Xác nhận quyền tiếp cận / thu gom nguyên liệu (Thỏa thuận)', status: 'Đang thực hiện' },
        { code: 'PL08', name: 'Lập kế hoạch lấy mẫu và bảo quản bã ẩm (<12h)', status: 'Đang thực hiện' },
        { code: 'PL09', name: 'Đánh giá rủi ro thu gom, PPE và an toàn vận chuyển', status: 'Đã có' },
        { code: 'PL10', name: 'Rà soát yêu cầu môi trường khí thải, bụi, nước xả', status: 'Đang thực hiện' }
      ]
    },
    {
      phase: 'Giai đoạn C — Chuẩn bị & tiến hành thử nghiệm',
      items: [
        { code: 'PL11', name: 'Xây dựng quy trình tạo than sinh học yếm khí 350-450°C', status: 'Đã có' },
        { code: 'PL12', name: 'Quy trình xử lý vi sinh Trichoderma & hoạt hóa hóa học', status: 'Dự kiến' },
        { code: 'PL13', name: 'Xác nhận điều kiện phòng thí nghiệm ĐH Hùng Vương & Viện Chè', status: 'Dự kiến' },
        { code: 'PL14', name: 'Chốt chỉ tiêu và phương pháp phân tích lý hóa', status: 'Dự kiến' },
        { code: 'PL15-17', name: 'Tiến hành thử nghiệm, lưu trữ nhật ký & quản lý an toàn', status: 'Dự kiến' }
      ]
    },
    {
      phase: 'Giai đoạn D — Đánh giá chất lượng & phân loại',
      items: [
        { code: 'PL18', name: 'Đánh giá đặc tính than sinh học (pH, diện tích BET > 400 m²/g)', status: 'Dự kiến' },
        { code: 'PL19-20', name: 'Đánh giá vật liệu làm phân bón & rủi ro thổ nhưỡng / cây trồng', status: 'Dự kiến' },
        { code: 'PL21-22', name: 'Đối chiếu tiêu chuẩn, quy chuẩn nông nghiệp hiện hành', status: 'Đã có' }
      ]
    },
    {
      phase: 'Giai đoạn E & F — Thương mại hóa & lưu trữ hồ sơ',
      items: [
        { code: 'PL23-25', name: 'Mô hình Pilot, rà soát điều kiện sản xuất & khảo nghiệm', status: 'Chờ xác minh' },
        { code: 'PL26', name: 'Chuẩn bị hồ sơ kỹ thuật, dán nhãn tích hợp mã QR carbon', status: 'Dự kiến' },
        { code: 'PL27-31', name: 'Nghĩa vụ môi trường, tổng hợp báo cáo và nghiệm thu', status: 'Dự kiến' }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Hero Header */}
      <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-forest-900">
        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-forest-800/80 text-amber-400 text-xs font-semibold border border-forest-700/60">
            {startupMetrics.teamName} • {startupMetrics.contest}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Kế Hoạch Kinh Doanh Sản Phẩm Than Sinh Học Từ Phế Phẩm Chè Phú Thọ
          </h1>
          <p className="text-forest-200 text-xs sm:text-sm leading-relaxed">
            Dự án tiên phong thiết lập chuỗi giá trị tuần hoàn xanh <em>"{startupMetrics.slogan}"</em>: Biến 27.000 tấn phụ phẩm ngành trà thành nguồn vật tư cải tạo đất chua và than hoạt tính lọc nước, đón đầu xu hướng đầu tư ESG và Net Zero 2050.
          </p>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-chalk-300">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
            activeTab === 'overview'
              ? 'bg-forest-950 text-white shadow-xs'
              : 'bg-white border border-chalk-300 text-charcoal-700 hover:bg-forest-50'
          }`}
        >
          Tổng Quan & Đội Nhóm
        </button>
        <button
          onClick={() => setActiveTab('finance')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
            activeTab === 'finance'
              ? 'bg-forest-950 text-white shadow-xs'
              : 'bg-white border border-chalk-300 text-charcoal-700 hover:bg-forest-50'
          }`}
        >
          Kế Hoạch Tài Chính & Vốn 300Tr
        </button>
        <button
          onClick={() => setActiveTab('market')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
            activeTab === 'market'
              ? 'bg-forest-950 text-white shadow-xs'
              : 'bg-white border border-chalk-300 text-charcoal-700 hover:bg-forest-50'
          }`}
        >
          Thị Trường TAM - SAM - SOM
        </button>
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
            activeTab === 'roadmap'
              ? 'bg-forest-950 text-white shadow-xs'
              : 'bg-white border border-chalk-300 text-charcoal-700 hover:bg-forest-50'
          }`}
        >
          Lộ Trình Tăng Trưởng (5 Năm)
        </button>
        <button
          onClick={() => setActiveTab('legal')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
            activeTab === 'legal'
              ? 'bg-forest-950 text-white shadow-xs'
              : 'bg-white border border-chalk-300 text-charcoal-700 hover:bg-forest-50'
          }`}
        >
          Lộ Trình Pháp Lý & ESG
        </button>
      </div>

      {/* TAB 1: OVERVIEW & TEAM */}
      {activeTab === 'overview' && (
        <div className="space-y-12 animate-fadeIn">
          {/* Executive Summary Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-forest-950/5 shadow-md space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                  Tóm Tắt Dự Án
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-forest-950">
                  Mô Hình Chuỗi Cung Ứng Xanh Khép Kín Tại Phú Thọ
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  Dự án tập trung chế biến nguồn phế phụ phẩm sinh khối công nghiệp ngành trà (cọng già, cám bụi chè từ nhà máy tinh chế và bã chè ẩm từ nhà máy nước giải khát) bằng công nghệ nhiệt phân chậm yếm khí tự chủ năng lượng (350°C - 450°C).
                </p>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  Sản phẩm đầu ra gồm: <strong>Than sinh học cải tạo đất Biochar-Microbe</strong> (phun trộn chủng vi sinh vật đối kháng Trichoderma) giúp hạ chua đất đồi và <strong>Than hoạt tính lọc nước kỹ thuật cao</strong> (hoạt hóa hóa học, nung 400°C - 600°C, rửa trung hòa pH 7) phục vụ nước thải KCN Thụy Vân, Cẩm Khê.
                </p>
              </div>

              <div className="pt-4 border-t border-chalk-200 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-2xl bg-[#faf8f5]">
                  <span className="text-charcoal-400 block text-[11px]">Lĩnh vực:</span>
                  <strong className="text-forest-950">Kinh tế tuần hoàn, Nông nghiệp xanh</strong>
                </div>
                <div className="p-3 rounded-2xl bg-[#faf8f5]">
                  <span className="text-charcoal-400 block text-[11px]">Cơ sở liên kết:</span>
                  <strong className="text-forest-950">60 cơ sở & 15 HTX chế biến</strong>
                </div>
                <div className="p-3 rounded-2xl bg-[#faf8f5] col-span-2 sm:col-span-1">
                  <span className="text-charcoal-400 block text-[11px]">Giảm phát thải:</span>
                  <strong className="text-emerald-700">2,5 - 3t CO₂e / tấn Biochar</strong>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-forest-950 text-white p-6 sm:p-8 rounded-3xl border border-forest-900 shadow-md space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Hồ Sơ Cuộc Thi Khởi Nghiệp
                </span>
                <h3 className="text-lg font-bold text-white">Chỉ Số Trọng Yếu Năm Thứ Nhất</h3>
                <div className="divide-y divide-forest-900 text-xs">
                  <div className="py-2 flex justify-between">
                    <span className="text-forest-300">Tổng vốn ban đầu:</span>
                    <span className="font-bold text-white">{startupMetrics.initialCapital.split(' ')[0]}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-forest-300">Vốn đầu tư thiết bị:</span>
                    <span className="font-bold text-white">100.000.000 VNĐ</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-forest-300">Doanh thu Năm 1:</span>
                    <span className="font-bold text-amber-300">691.200.000 VNĐ</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-forest-300">Tổng chi phí vận hành:</span>
                    <span className="font-bold text-forest-200">200.000.000 VNĐ</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-forest-300">Lợi nhuận sau thuế:</span>
                    <span className="font-bold text-emerald-300">392.960.000 VNĐ</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-forest-300">Biên lợi nhuận ròng:</span>
                    <span className="font-bold text-emerald-400">{startupMetrics.netProfitMargin}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-forest-300">Thời gian hoàn vốn:</span>
                    <span className="font-bold text-white">{startupMetrics.breakEvenPeriod}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-forest-900/60 border border-forest-800 text-[11px] text-forest-200">
                Web application chính thức của dự án: <strong className="text-white underline">https://phutho-ten.vercel.app/</strong>
              </div>
            </div>
          </div>

          {/* Advisor Feature Card */}
          {advisors.length > 0 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-950/5 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img
                  src={advisors[0].avatar}
                  alt={advisors[0].name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-forest-700 shadow-md shrink-0"
                />
                <div className="space-y-1.5 text-center sm:text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                    {advisors[0].role}
                  </span>
                  <h3 className="text-lg font-bold text-forest-950">{advisors[0].name}</h3>
                  <p className="text-xs font-semibold text-charcoal-500">{advisors[0].organization}</p>
                  <p className="text-xs text-charcoal-600 leading-relaxed pt-1 max-w-xl">
                    {advisors[0].bio}
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex flex-col items-center p-3.5 bg-[#faf8f5] rounded-2xl border border-chalk-200 text-center">
                <img 
                  src="/images/logo_hung_vuong.png" 
                  alt="Trường ĐH Hùng Vương" 
                  className="w-16 h-16 object-contain"
                />
                <span className="text-[10px] font-bold text-forest-950 mt-1 uppercase tracking-tight">ĐH Hùng Vương</span>
              </div>
            </div>
          )}

          {/* Team Members Grid - Table 8.1 */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                BẢNG 8.1: BỘ MÁY NHÂN SỰ & TÍNH SẴN SÀNG
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-forest-950 mt-2">
                Đội Ngũ Sáng Lập Sinh Viên ĐH Hùng Vương
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl p-6 border shadow-sm flex flex-col justify-between space-y-4 ${
                    member.isLeader ? 'border-forest-700 bg-forest-50/20 ring-1 ring-forest-700/30' : 'border-forest-950/5'
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

                    <div className="pt-2 border-t border-chalk-200 space-y-1.5 text-xs">
                      <div>
                        <span className="font-bold text-charcoal-800">Nhiệm vụ: </span>
                        <span className="text-charcoal-600 leading-relaxed">{member.bio}</span>
                      </div>
                      <div>
                        <span className="font-bold text-forest-900">Tính sẵn sàng: </span>
                        <span className="text-charcoal-600 leading-relaxed">{member.readiness}</span>
                      </div>
                    </div>
                  </div>

                  {member.contact && (
                    <div className="pt-3 border-t border-chalk-200 text-xs space-y-1 text-charcoal-500">
                      <div>SĐT: <strong className="text-forest-900">{member.contact.phone}</strong></div>
                      <div>Email: <strong className="text-charcoal-800 break-all">{member.contact.email}</strong></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sơ đồ danh mục và quản trị rủi ro */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-950/5 shadow-md space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                QUẢN TRỊ RỦI RO THỰC TẾ
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-forest-950 mt-2">
                Sơ Đồ Danh Mục Và Quản Trị Rủi Ro Dự Án
              </h3>
              <p className="text-xs text-charcoal-500 mt-1">
                Kế hoạch phòng ngừa và ứng phó với 3 nhóm rủi ro: Nguyên liệu ẩm, Lò nhiệt phân yếm khí, và Tâm lý thị trường.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-chalk-200 bg-[#faf8f5] p-2">
              <img
                src="/images/diagram_risk_management.jpg"
                alt="Sơ đồ danh mục và quản trị rủi ro"
                className="w-full rounded-xl object-contain max-h-[580px] mx-auto"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: FINANCIAL PLAN & 300M CAPITAL */}
      {activeTab === 'finance' && (
        <div className="space-y-10 animate-fadeIn">
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-forest-950 text-white p-5 rounded-3xl border border-forest-900">
              <span className="text-xs text-forest-300 font-semibold block">Vốn đầu tư ban đầu</span>
              <span className="text-2xl font-bold mt-1 block">300.000.000 đ</span>
              <span className="text-[11px] text-forest-400">100tr tự có + 100tr vay + 100tr đối tác</span>
            </div>
            <div className="bg-white p-5 rounded-3xl border border-forest-950/5 shadow-sm">
              <span className="text-xs text-charcoal-400 font-semibold block">Doanh thu Năm 1</span>
              <span className="text-2xl font-bold text-forest-950 mt-1 block">691.200.000 đ</span>
              <span className="text-[11px] text-charcoal-500">43,2 tấn sản phẩm (80% Biochar + 20% Than lọc)</span>
            </div>
            <div className="bg-white p-5 rounded-3xl border border-forest-950/5 shadow-sm">
              <span className="text-xs text-charcoal-400 font-semibold block">Lợi nhuận sau thuế</span>
              <span className="text-2xl font-bold text-emerald-700 mt-1 block">392.960.000 đ</span>
              <span className="text-[11px] text-charcoal-500">Biên LNST: 56,85%</span>
            </div>
            <div className="bg-emerald-900 text-white p-5 rounded-3xl border border-emerald-800">
              <span className="text-xs text-emerald-200 font-semibold block">Thời gian hòa vốn</span>
              <span className="text-2xl font-bold mt-1 block">~9 Tháng</span>
              <span className="text-[11px] text-emerald-300">Dòng tiền thuần: 412,96 triệu/năm</span>
            </div>
          </div>

          {/* Table 7.1: Projected Commercial Revenue */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-950/5 shadow-md space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              BẢNG 7.1: DỰ KIẾN DOANH THU THƯƠNG MẠI NĂM THỨ NHẤT
            </span>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#faf8f5] text-charcoal-700 border-b border-chalk-300 font-bold">
                    <th className="p-3.5">STT</th>
                    <th className="p-3.5">Dòng sản phẩm thương mại</th>
                    <th className="p-3.5">Sản lượng tiêu thụ (Tấn)</th>
                    <th className="p-3.5">Đơn giá bán sỉ (VNĐ/Tấn)</th>
                    <th className="p-3.5 text-right">Tổng doanh thu (VNĐ)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-chalk-200 text-charcoal-700">
                  <tr>
                    <td className="p-3.5 font-bold">1</td>
                    <td className="p-3.5 font-semibold text-forest-950">
                      Than sinh học cải tạo đất Biochar-Microbe (Bột thô bọc vi sinh / Viên nén mini)
                    </td>
                    <td className="p-3.5 font-bold">34,56 tấn (80%)</td>
                    <td className="p-3.5">15.000.000 đ/tấn</td>
                    <td className="p-3.5 text-right font-bold text-forest-900">518.400.000 đ</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold">2</td>
                    <td className="p-3.5 font-semibold text-forest-950">
                      Than hoạt tính kỹ thuật lọc nước (Phục vụ xử lý nước thải KCN)
                    </td>
                    <td className="p-3.5 font-bold">8,64 tấn (20%)</td>
                    <td className="p-3.5">20.000.000 đ/tấn</td>
                    <td className="p-3.5 text-right font-bold text-forest-900">172.800.000 đ</td>
                  </tr>
                  <tr className="bg-forest-50 font-bold text-forest-950">
                    <td className="p-3.5" colSpan={2}>TỔNG DOANH THU NĂM 1</td>
                    <td className="p-3.5">43,2 tấn</td>
                    <td className="p-3.5">—</td>
                    <td className="p-3.5 text-right text-base text-forest-900">691.200.000 VNĐ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Table 7.2: Opex breakdown */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-950/5 shadow-md space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              BẢNG 7.2: TÍNH TOÁN CHI PHÍ VẬN HÀNH NĂM THỨ NHẤT (TỔNG 200 TRIỆU Đ)
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              {/* I. Biến phí */}
              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-chalk-200 space-y-2">
                <div className="flex justify-between items-center font-bold text-forest-950 pb-2 border-b border-chalk-300">
                  <span>I. Chi Phí Biến Đổi</span>
                  <span className="text-emerald-700">75.800.000 đ</span>
                </div>
                <ul className="space-y-1.5 text-charcoal-600">
                  <li className="flex justify-between"><span>• Logistics thu gom (86,4t × 300k):</span><strong>25.920.000 đ</strong></li>
                  <li className="flex justify-between"><span>• Men vi sinh & hóa chất hoạt hóa:</span><strong>19.200.000 đ</strong></li>
                  <li className="flex justify-between"><span>• Bao bì PP in mã QR (43,2t × 200k):</span><strong>8.640.000 đ</strong></li>
                  <li className="flex justify-between"><span>• Khí LPG mồi lò (300 ca × 24k):</span><strong>7.200.000 đ</strong></li>
                  <li className="flex justify-between"><span>• Điện năng vận hành (motor & thanh sấy):</span><strong>6.000.000 đ</strong></li>
                  <li className="flex justify-between"><span>• Bảo dưỡng & BHLĐ:</span><strong>3.840.000 đ</strong></li>
                  <li className="flex justify-between"><span>• Dự phòng hao hụt nguyên liệu:</span><strong>3.000.000 đ</strong></li>
                  <li className="flex justify-between"><span>• Nước sạch bể rửa trung hòa:</span><strong>2.000.000 đ</strong></li>
                </ul>
              </div>

              {/* II. Định phí */}
              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-chalk-200 space-y-2">
                <div className="flex justify-between items-center font-bold text-forest-950 pb-2 border-b border-chalk-300">
                  <span>II. Chi Phí Cố Định</span>
                  <span className="text-emerald-700">118.200.000 đ</span>
                </div>
                <ul className="space-y-1.5 text-charcoal-600">
                  <li className="flex justify-between"><span>• Chi phí nhân công (sản xuất + bốc dỡ):</span><strong>60.000.000 đ</strong></li>
                  <li className="flex justify-between"><span>• Khấu hao tài sản (Lò & máy vắt / 5 năm):</span><strong>20.000.000 đ</strong></li>
                  <li className="flex justify-between"><span>• Thuê kho bãi Thanh Sơn (1.5tr × 12th):</span><strong>18.000.000 đ</strong></li>
                  <li className="flex justify-between"><span>• Demo Plot & Marketing thực địa:</span><strong>8.000.000 đ</strong></li>
                  <li className="flex justify-between"><span>• Kiểm nghiệm Viện Nghiên Cứu Chè:</span><strong>5.000.000 đ</strong></li>
                  <li className="flex justify-between"><span>• Chi phí bảo trì định kỳ cuối tháng:</span><strong>4.200.000 đ</strong></li>
                  <li className="flex justify-between"><span>• Chi phí quản lý hành chính:</span><strong>3.000.000 đ</strong></li>
                </ul>
              </div>

              {/* III. Chi phí tài chính & Tổng */}
              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-chalk-200 space-y-2">
                <div className="flex justify-between items-center font-bold text-forest-950 pb-2 border-b border-chalk-300">
                  <span>III. Chi Phí Tài Chính</span>
                  <span className="text-emerald-700">6.000.000 đ</span>
                </div>
                <p className="text-charcoal-600">
                  Lãi vay gói khuyến công 100.000.000 đ với lãi suất ưu đãi cố định 6%/năm = <strong>6.000.000 VNĐ</strong>.
                </p>

                <div className="pt-3 mt-3 border-t border-chalk-300 space-y-1.5">
                  <div className="flex justify-between font-bold text-forest-950">
                    <span>Tổng Chi Phí Năm 1:</span>
                    <span className="text-forest-900 text-sm">200.000.000 đ</span>
                  </div>
                  <div className="flex justify-between font-bold text-forest-950">
                    <span>Lợi Nhuận Trước Thuế:</span>
                    <span className="text-emerald-700 text-sm">491.200.000 đ</span>
                  </div>
                  <div className="flex justify-between text-charcoal-500">
                    <span>Thuế TNDN (20%):</span>
                    <span>98.240.000 đ</span>
                  </div>
                  <div className="flex justify-between font-bold text-emerald-800 text-sm pt-1 border-t border-chalk-200">
                    <span>Lợi Nhuận Sau Thuế:</span>
                    <span>392.960.000 đ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table 7.3 & 8.2: Equipment & Funding Structure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Capex 100tr */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-forest-950/5 shadow-md space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                BẢNG 7.3: PHÂN BỔ VỐN THIẾT BỊ (100 TRIỆU Đ)
              </span>
              <div className="divide-y divide-chalk-200 text-xs">
                <div className="py-2.5 flex justify-between">
                  <div>
                    <strong className="text-forest-950 block">Cụm lò nhiệt phân yếm khí cải tiến:</strong>
                    <span className="text-charcoal-500 text-[11px]">Thu hồi Syngas tuần hoàn + buồng đốt ngược tận dụng nhiệt dư</span>
                  </div>
                  <span className="font-bold text-forest-900 shrink-0 ml-2">60.000.000 đ</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <div>
                    <strong className="text-forest-950 block">Máy vắt ép cơ học trục vít:</strong>
                    <span className="text-charcoal-500 text-[11px]">Tách nước bã chè ẩm về &lt;35% trước khi sấy</span>
                  </div>
                  <span className="font-bold text-forest-900 shrink-0 ml-2">20.000.000 đ</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <div>
                    <strong className="text-forest-950 block">Máy trộn nguyên liệu:</strong>
                    <span className="text-charcoal-500 text-[11px]">Phối trộn phụ gia và hỗ trợ phun chủng vi sinh Trichoderma</span>
                  </div>
                  <span className="font-bold text-forest-900 shrink-0 ml-2">10.000.000 đ</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <div>
                    <strong className="text-forest-950 block">Máy đóng gói bán tự động:</strong>
                    <span className="text-charcoal-500 text-[11px]">Định lượng và đóng bao thành phẩm quy mô Pilot</span>
                  </div>
                  <span className="font-bold text-forest-900 shrink-0 ml-2">10.000.000 đ</span>
                </div>
              </div>
            </div>

            {/* Funding structure 300tr */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-forest-950/5 shadow-md space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                BẢNG 8.2: CƠ CẤU HUY ĐỘNG VỐN (300 TRIỆU Đ)
              </span>
              <div className="divide-y divide-chalk-200 text-xs">
                <div className="py-2.5 flex justify-between items-start">
                  <div>
                    <strong className="text-forest-950 block">1. Vốn tự có & bảo trợ gia đình (33,33%):</strong>
                    <span className="text-charcoal-500 text-[11px]">Tiền tiết kiệm, tiền thưởng NCKH và quỹ bảo trợ không lãi suất</span>
                  </div>
                  <span className="font-bold text-forest-900 shrink-0 ml-2">100.000.000 đ</span>
                </div>
                <div className="py-2.5 flex justify-between items-start">
                  <div>
                    <strong className="text-forest-950 block">2. Gói vay ưu đãi khuyến công Phú Thọ (33,33%):</strong>
                    <span className="text-charcoal-500 text-[11px]">Vay ưu đãi lãi suất 6%/năm, tài sản bảo đảm bằng chính cụm lò cải tiến</span>
                  </div>
                  <span className="font-bold text-forest-900 shrink-0 ml-2">100.000.000 đ</span>
                </div>
                <div className="py-2.5 flex justify-between items-start">
                  <div>
                    <strong className="text-forest-950 block">3. Gọi vốn Nhà đầu tư thiên thần & đối tác (33,33%):</strong>
                    <span className="text-charcoal-500 text-[11px]">Quyền lợi: Nhà đầu tư được ưu tiên mua Than sinh học với chiết khấu 20%</span>
                  </div>
                  <span className="font-bold text-forest-900 shrink-0 ml-2">100.000.000 đ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: TAM - SAM - SOM MARKET ANALYSIS */}
      {activeTab === 'market' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-950/5 shadow-md space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              BẢNG 5.1: DUNG LƯỢNG THỊ TRƯỜNG THEO MÔ HÌNH TAM - SAM - SOM
            </span>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#faf8f5] text-charcoal-700 border-b border-chalk-300 font-bold">
                    <th className="p-4 w-[20%]">Mô hình</th>
                    <th className="p-4 w-[40%] text-forest-950">Phân khúc 1: Nông nghiệp sinh thái (Biochar-Microbe)</th>
                    <th className="p-4 w-[40%] text-emerald-900">Phân khúc 2: Công nghiệp & Môi trường (Than lọc KCN)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-chalk-200 text-charcoal-700">
                  <tr>
                    <td className="p-4 font-bold text-forest-950">
                      Thị trường tổng thể (TAM)
                    </td>
                    <td className="p-4 space-y-1">
                      <strong className="text-forest-900 block text-sm">1.500 Tỷ VNĐ / Năm</strong>
                      <p className="text-charcoal-500">Nhu cầu phân bón hữu cơ sinh học, giá thể vi sinh và chất cải tạo đất chua cho cây công nghiệp (chè, cà phê) và cây ăn quả tại Việt Nam vượt rào thuế carbon.</p>
                    </td>
                    <td className="p-4 space-y-1">
                      <strong className="text-emerald-900 block text-sm">1.000 Tỷ VNĐ / Năm</strong>
                      <p className="text-charcoal-500">Nhu cầu vật liệu hấp phụ xốp phục vụ hệ thống xử lý nước thải dệt nhuộm, linh kiện, hóa chất và giấy trên toàn quốc theo chuẩn ESG.</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-forest-950">
                      Thị trường tiếp cận (SAM)
                    </td>
                    <td className="p-4 space-y-1">
                      <strong className="text-forest-900 block text-sm">95 Tỷ VNĐ / Năm</strong>
                      <p className="text-charcoal-500">Nhu cầu hạ chua, phục hồi thổ nhưỡng tại thủ phủ chè Phú Thọ (&gt;14.500 ha chè) và &gt;5.000 ha bưởi Đoan Hùng qua mạng lưới 60 cơ sở & 15 HTX chế biến lớn.</p>
                    </td>
                    <td className="p-4 space-y-1">
                      <strong className="text-emerald-900 block text-sm">90 Tỷ VNĐ / Năm</strong>
                      <p className="text-charcoal-500">Nhu cầu mua sắm thay thế vật liệu lọc nước thải định kỳ của các doanh nghiệp đang xả thải tập trung tại KCN Thụy Vân và KCN Cẩm Khê.</p>
                    </td>
                  </tr>
                  <tr className="bg-forest-50/60">
                    <td className="p-4 font-bold text-forest-950">
                      Thị trường chiếm lĩnh Năm 1 (SOM)
                    </td>
                    <td className="p-4 space-y-1">
                      <strong className="text-forest-900 block text-sm">518.400.000 VNĐ (34,56 Tấn)</strong>
                      <p className="text-charcoal-600">Chiếm 80% công suất lò Pilot; chiếm lĩnh 0.54% thị phần SAM tỉnh thông qua mô hình liên kết độc quyền "Đổi phế phẩm lấy vật tư" và Demo Plot.</p>
                    </td>
                    <td className="p-4 space-y-1">
                      <strong className="text-emerald-900 block text-sm">172.800.000 VNĐ (8,64 Tấn)</strong>
                      <p className="text-charcoal-600">Chiếm 20% công suất lò; cung ứng trực tiếp dưới dạng chào thầu vật liệu lọc giá rẻ cho các đơn vị xử lý nước thải nội tỉnh.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: 5-YEAR STRATEGIC ROADMAP */}
      {activeTab === 'roadmap' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              BẢNG 6.1 & 7.5: LỘ TRÌNH TĂNG TRƯỞNG QUY MÔ (5 NĂM)
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-forest-950 tracking-tight mt-2">
              Kế Hoạch Mở Rộng 3 Giai Đoạn
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-forest-950/5 shadow-md flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-forest-800 uppercase block tracking-wide">{m.phase}</span>
                  <h4 className="font-bold text-forest-950 text-base leading-snug">{m.title}</h4>
                  <p className="text-xs text-charcoal-600 leading-relaxed">{m.desc}</p>
                </div>
                <div className="pt-3 border-t border-chalk-200 text-xs font-bold text-emerald-800 bg-emerald-50/50 p-2.5 rounded-xl">
                  {m.revenue}
                </div>
              </div>
            ))}
          </div>

          {/* Social and Environmental Impact - Table 7.6 */}
          <div className="bg-forest-950 text-white rounded-3xl p-6 sm:p-8 border border-forest-900 space-y-4 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              BẢNG 7.6: TỔNG HỢP TÁC ĐỘNG XÃ HỘI VÀ MÔI TRƯỜNG
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-forest-200">
              <div className="space-y-1.5 p-4 rounded-2xl bg-forest-900/60 border border-forest-800">
                <strong className="text-white text-sm block">1. Chuyển Dịch Nông Nghiệp</strong>
                <p className="leading-relaxed">
                  Giúp các vùng chè trọng điểm tại Phú Thọ phục hồi nền đất chua hóa lâu năm, tạo lớp keo đất giữ nước hữu hiệu, hỗ trợ các nông trại chuyển đổi sang chứng nhận Organic hữu cơ xuất khẩu sạch.
                </p>
              </div>
              <div className="space-y-1.5 p-4 rounded-2xl bg-forest-900/60 border border-forest-800">
                <strong className="text-white text-sm block">2. Giải Quyết Việc Làm</strong>
                <p className="leading-relaxed">
                  Tạo thu nhập cho 02 lao động trực xưởng (40tr), nhân công bốc xếp (20tr), huy động 15-20 lượt SV ĐH Hùng Vương trong chiến dịch "Ngày thứ Bảy xanh", tạo sinh kế phụ cho 8-12 hộ dân vận chuyển chặng ngắn.
                </p>
              </div>
              <div className="space-y-1.5 p-4 rounded-2xl bg-forest-900/60 border border-forest-800">
                <strong className="text-white text-sm block">3. Đóng Góp Mục Tiêu Quốc Gia</strong>
                <p className="leading-relaxed">
                  Khóa chặt carbon hữu cơ trong đất hàng trăm năm. Mỗi tấn Biochar giảm phát thải 2,5 - 3 tấn CO₂e ra khí quyển, đóng góp vào mục tiêu Net Zero 2050 và vượt rào thuế carbon CBAM sang EU.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: LEGAL ROADMAP & COMPLIANCE */}
      {activeTab === 'legal' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-950/5 shadow-md space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                MỤC 4.1: LỘ TRÌNH PHÁP LÝ & HỒ SƠ TUÂN THỦ DỰ ÁN (PL01 – PL31)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-forest-950 mt-2">
                Hệ Thống Tiêu Chuẩn Thực Nghiệm 6 Giai Đoạn
              </h3>
            </div>

            <div className="space-y-6">
              {legalPhases.map((phase, pIdx) => (
                <div key={pIdx} className="space-y-3">
                  <h4 className="font-bold text-forest-900 text-sm bg-forest-50/80 px-3 py-1.5 rounded-xl border border-forest-200">
                    {phase.phase}
                  </h4>
                  <div className="divide-y divide-chalk-200 text-xs pl-2">
                    {phase.items.map((item, iIdx) => (
                      <div key={iIdx} className="py-2 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-forest-800 text-[11px] bg-chalk-100 px-2 py-0.5 rounded">
                            {item.code}
                          </span>
                          <span className="text-charcoal-700">{item.name}</span>
                        </div>
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full shrink-0 ${
                          item.status === 'Đã có'
                            ? 'bg-emerald-100 text-emerald-800'
                            : item.status === 'Đang thực hiện'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-chalk-200 text-charcoal-600'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sơ đồ danh mục và quản trị rủi ro */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-950/5 shadow-md space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                QUẢN TRỊ RỦI RO THỰC TẾ
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-forest-950 mt-2">
                Sơ Đồ Danh Mục Và Quản Trị Rủi Ro Dự Án
              </h3>
              <p className="text-xs text-charcoal-500 mt-1">
                Kế hoạch phòng ngừa và ứng phó với 3 nhóm rủi ro: Nguyên liệu ẩm, Lò nhiệt phân yếm khí, và Tâm lý thị trường.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-chalk-200 bg-[#faf8f5] p-2">
              <img
                src="/images/diagram_risk_management.jpg"
                alt="Sơ đồ danh mục và quản trị rủi ro"
                className="w-full rounded-xl object-contain max-h-[580px] mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
