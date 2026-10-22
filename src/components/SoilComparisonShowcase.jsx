import React, { useState } from 'react';

export default function SoilComparisonShowcase({ onCalculateClick }) {
  const [activeTab, setActiveTab] = useState('compare'); // 'before' | 'after' | 'compare'

  const soilMetrics = [
    {
      label: 'Độ chua thổ nhưỡng (pH)',
      beforeVal: 'pH < 4.0 (Chua hóa nghiêm trọng)',
      afterVal: 'pH 4.8 - 5.5 (Dải tối ưu cho chè)',
      beforeNote: 'Tập quán thâm canh phân vô cơ làm pH tụt dưới 4.0, nghẹt rễ và chai hóa',
      afterNote: 'Biochar kiềm tự nhiên (pH 8.5 - 9.5) hạ chua an toàn, rễ bung tơ mạnh mẽ',
      diffText: 'Hạ chua êm dịu, đạt dải pH tối ưu 4.5 - 5.5 theo Viện Nghiên cứu Chè',
      beforePercent: 25,
      afterPercent: 88,
    },
    {
      label: 'Độ tơi xốp & Khả năng ngậm nước',
      beforeVal: 'Thất thoát 75% nước tưới',
      afterVal: 'Giữ ẩm kéo dài 14 - 21 ngày',
      beforeNote: 'Đất chai cứng, nghèo chất hữu cơ, mất khả năng giữ nước tự nhiên',
      afterNote: 'Khung Lignin mô sợi bã chè xốp vi mô (BET > 400 m²/g) giữ ẩm vượt trội',
      diffText: 'Tiết kiệm 40% công và nước tưới trong mùa khô trung du',
      beforePercent: 25,
      afterPercent: 90,
    },
    {
      label: 'Mật độ vi sinh vật đối kháng (Trichoderma bản địa)',
      beforeVal: 'Cạn kiệt (< 10³ CFU/g)',
      afterVal: 'Bùng nổ (≥ 10⁸ CFU/g)',
      beforeNote: 'Nấm Phytophthora gây thối rễ, búp chè xơ cằn và vàng lá',
      afterNote: 'Lõi than bọc chủng Trichoderma bản địa bảo vệ bộ rễ, kích đẻ nhánh',
      diffText: 'Kháng nấm rễ tự nhiên, giảm phụ thuộc thuốc trừ sâu hóa học',
      beforePercent: 15,
      afterPercent: 95,
    },
    {
      label: 'Chi phí phân bón vô cơ (NPK)',
      beforeVal: 'Tốn 100% chi phí phân vô cơ',
      afterVal: 'Cắt giảm 20% - 30% chi phí',
      beforeNote: 'Phân bón vô cơ gốc axit bị rửa trôi hơn 60% khi mưa to',
      afterNote: 'Than ngậm và giải phóng dinh dưỡng chậm rãi theo nhu cầu của cây',
      diffText: 'Tiết kiệm 8 - 12 triệu VNĐ / ha chè mỗi năm',
      beforePercent: 95,
      afterPercent: 30,
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#faf8f5] via-[#f4f7f4] to-[#faf8f5] rounded-3xl p-6 sm:p-10 lg:p-12 border border-forest-950/10 shadow-xl space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-100/90 px-3.5 py-1 rounded-full border border-forest-200">
            KẾT QUẢ KHẢO SÁT THỰC ĐỊA & DEMO PLOT
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-950 tracking-tight text-balance">
            Thực Nghiệm Đất: Trước & Sau Khi Cải Tạo Bằng Than Sinh Học Bã Chè
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed text-pretty">
            Khảo sát thực tế tại các vùng chè và vườn bưởi Đoan Hùng (Phú Thọ) theo báo cáo khoa học Viện Nghiên Cứu Chè và Đại học Hùng Vương sau chu kỳ thử nghiệm.
          </p>
        </div>

        {/* Interactive Mode Selector */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white border border-chalk-300 shadow-sm shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('compare')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === 'compare'
                ? 'bg-forest-950 text-white shadow-sm'
                : 'text-charcoal-600 hover:text-forest-950'
            }`}
          >
            So Sánh Song Song
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('before')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === 'before'
                ? 'bg-amber-800 text-white shadow-sm'
                : 'text-charcoal-600 hover:text-amber-800'
            }`}
          >
            Đất Chưa Cải Tạo
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('after')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === 'after'
                ? 'bg-forest-800 text-white shadow-sm'
                : 'text-charcoal-600 hover:text-forest-800'
            }`}
          >
            Đất Đã Phục Hồi
          </button>
        </div>
      </div>

      {/* Main Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Visual Card: Đất Thoái Hóa */}
        {(activeTab === 'before' || activeTab === 'compare') && (
          <div className={`${activeTab === 'compare' ? 'lg:col-span-6' : 'lg:col-span-12'} bg-white rounded-3xl p-6 sm:p-7 border border-amber-900/15 shadow-md flex flex-col justify-between space-y-6 transition-all`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-chalk-200">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Tình trạng ban đầu (Chưa bón)
                </span>
                <span className="text-xs font-semibold text-charcoal-400">Đất đồi dốc chua hóa &lt; 4.0</span>
              </div>

              <div className="aspect-16/9 rounded-2xl overflow-hidden bg-amber-100/40 relative border border-amber-200/60">
                <img
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"
                  alt="Đất đồi chai cứng bạc màu"
                  className="w-full h-full object-cover grayscale-[30%] contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white text-xs space-y-0.5">
                    <p className="font-bold text-amber-200">Đất chai cứng, nghẹt rễ, nghèo vi sinh</p>
                    <p className="text-white/80 text-[11px]">pH tụt dưới 4.0 • Mất khả năng giữ nước • Cây chè còi cọc</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-charcoal-900 text-sm">Hệ quả từ lạm dụng phân bón vô cơ gốc axit:</h4>
                <ul className="space-y-2 text-xs text-charcoal-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold shrink-0">•</span>
                    <span>Cây chè ưa chua nhẹ (pH 4.5 - 5.5), nhưng đất bị chua nặng (&lt; 4.0) làm nghẹt rễ và ngộ độc nhôm sắt.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold shrink-0">•</span>
                    <span>Mùa khô đất mất ẩm nhanh, mùa mưa rửa trôi mùn màu, búp chè xơ cứng giảm giá trị thương phẩm.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold shrink-0">•</span>
                    <span>Chi phí mua phân hóa học tăng cao nhưng cây không hấp thụ được do đất bị chai cứng.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 font-medium">
              Khuyến cáo: Cần bón lót từ 1.0 đến 1.2 tấn Biochar/ha kết hợp vi sinh Trichoderma để giải độc đất và giữ nước.
            </div>
          </div>
        )}

        {/* Right Visual Card: Đất Sau Khi Cải Tạo */}
        {(activeTab === 'after' || activeTab === 'compare') && (
          <div className={`${activeTab === 'compare' ? 'lg:col-span-6' : 'lg:col-span-12'} bg-white rounded-3xl p-6 sm:p-7 border border-forest-800/20 shadow-xl flex flex-col justify-between space-y-6 transition-all ring-1 ring-forest-700/10`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-chalk-200">
                <span className="text-xs font-bold uppercase tracking-wider text-forest-900 bg-forest-100 px-3 py-1 rounded-full border border-forest-200">
                  Sau khi ứng dụng Biochar bã chè
                </span>
                <span className="text-xs font-bold text-forest-700">Đã kiểm nghiệm thực địa</span>
              </div>

              <div className="aspect-16/9 rounded-2xl overflow-hidden bg-forest-100/40 relative border border-forest-200">
                <img
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80"
                  alt="Đất màu mỡ tơi xốp với búp chè xanh tốt"
                  className="w-full h-full object-cover contrast-110 saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white text-xs space-y-0.5">
                    <p className="font-bold text-forest-200">Đất đen tơi xốp, giữ ẩm và rễ bung khỏe</p>
                    <p className="text-white/90 text-[11px]">pH ổn định 4.8 - 5.5 • Búp chè non mập mạp • Chuẩn VietGAP</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-forest-950 text-sm">Hiệu quả đột phá thực tế:</h4>
                <ul className="space-y-2 text-xs text-charcoal-700">
                  <li className="flex items-start gap-2">
                    <span className="text-forest-700 font-bold shrink-0">✓</span>
                    <span><strong>Hạ chua tự nhiên:</strong> Than bã chè kiềm tự nhiên (pH 8.5 - 9.5) trung hòa êm dịu, đưa đất về dải pH lý tưởng 4.8 - 5.5.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest-700 font-bold shrink-0">✓</span>
                    <span><strong>Lõi vi sinh Trichoderma:</strong> Tiêu diệt nấm thối rễ, kích rễ tơ trắng bung mạnh, hấp thu phân bón tối đa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest-700 font-bold shrink-0">✓</span>
                    <span><strong>Cắt giảm 20% - 30% phân NPK:</strong> Diện tích bề mặt &gt; 400 m²/g lưu giữ phân bón không bị rửa trôi khi mưa rào.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-forest-50 border border-forest-200 text-xs text-forest-950 font-medium flex items-center justify-between">
              <span>Độ bền cải tạo: Than sinh học cô lập carbon hàng trăm năm, giữ đệm đất bền bỉ nhiều vụ mùa.</span>
            </div>
          </div>
        )}
      </div>

      {/* Metric Breakdown Table */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-forest-950/5 shadow-md space-y-6">
        <h4 className="font-bold text-forest-950 text-sm sm:text-base">
          Bảng Chi Tiết 4 Chỉ Số Thổ Nhưỡng Trước & Sau Thử Nghiệm
        </h4>

        <div className="space-y-5">
          {soilMetrics.map((m, idx) => (
            <div key={idx} className="space-y-2 pb-4 border-b border-chalk-200 last:border-0 last:pb-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <span className="font-bold text-forest-950 sm:text-sm">{m.label}</span>
                <span className="text-forest-700 font-semibold">{m.diffText}</span>
              </div>

              {/* Progress bars visual */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Before bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-charcoal-500">
                    <span>Trước: <strong className="text-charcoal-800">{m.beforeVal}</strong></span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-chalk-200 overflow-hidden">
                    <div
                      className="h-full bg-amber-600 rounded-full transition-all duration-500"
                      style={{ width: `${m.beforePercent}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-charcoal-400">{m.beforeNote}</p>
                </div>

                {/* After bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-forest-900">
                    <span>Sau ứng dụng: <strong className="text-forest-900 font-bold">{m.afterVal}</strong></span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-chalk-200 overflow-hidden">
                    <div
                      className="h-full bg-forest-800 rounded-full transition-all duration-500"
                      style={{ width: `${m.afterPercent}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-forest-700">{m.afterNote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
