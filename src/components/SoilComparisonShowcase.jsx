import React, { useState } from 'react';

export default function SoilComparisonShowcase({ onCalculateClick }) {
  const [activeTab, setActiveTab] = useState('compare'); // 'before' | 'after' | 'compare'

  const soilMetrics = [
    {
      label: 'Độ chua thổ nhưỡng (pH)',
      beforeVal: 'pH 4.0 - 4.3',
      afterVal: 'pH 6.2 - 6.5',
      beforeNote: 'Chua nặng, rễ chè bị nghẹt và ngộ độc sắt/nhôm',
      afterNote: 'Trung tính lý tưởng, bộ rễ hấp thu trọn vẹn khoáng chất',
      diffText: '+2.2 pH (Đạt chuẩn canh tác chè đặc sản)',
      beforePercent: 35,
      afterPercent: 85,
    },
    {
      label: 'Độ tơi xốp & Khả năng giữ ẩm',
      beforeVal: 'Thất thoát 75% nước',
      afterVal: 'Giữ ẩm kéo dài 14 - 21 ngày',
      beforeNote: 'Đất chai cứng, mùa mưa rửa trôi, mùa khô nứt nẻ',
      afterNote: 'Cấu trúc xốp vi mô giữ nước như miếng bọt biển sinh học',
      diffText: 'Giảm 40% công tưới trong mùa khô hạn',
      beforePercent: 25,
      afterPercent: 88,
    },
    {
      label: 'Mật độ vi sinh vật đối kháng (Bacillus & Trichoderma)',
      beforeVal: 'Cạn kiệt (< 10³ CFU/g)',
      afterVal: 'Bùng nổ (> 10⁷ CFU/g)',
      beforeNote: 'Nấm bệnh rễ lây lan, cây chè vàng lá cằn cỗi',
      afterNote: 'Than làm "ngôi nhà vi sinh", tiêu diệt mầm nấm hại',
      diffText: 'Kháng nấm rễ tự nhiên, không cần thuốc BVTV',
      beforePercent: 15,
      afterPercent: 92,
    },
    {
      label: 'Chi phí phân bón vô cơ (NPK)',
      beforeVal: 'Tốn 100% chi phí bón',
      afterVal: 'Cắt giảm 25% - 30%',
      beforeNote: 'Phân bị rửa trôi hơn 60% sau các trận mưa rào',
      afterNote: 'Biochar hấp phụ và giải phóng dinh dưỡng chậm rãi',
      diffText: 'Tiết kiệm 8 - 12 triệu VNĐ / hecta chè mỗi năm',
      beforePercent: 95,
      afterPercent: 35,
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#faf8f5] via-[#f4f7f4] to-[#faf8f5] rounded-3xl p-6 sm:p-10 lg:p-12 border border-forest-950/10 shadow-xl space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-100/90 px-3.5 py-1 rounded-full border border-forest-200">
            KẾT QUẢ KHẢO SÁT THỰC ĐỊA
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-950 tracking-tight text-balance">
            Thực Nghiệm Đất: Trước & Sau Khi Cải Tạo Bằng Biochar
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed text-pretty">
            Kết quả quan trắc thổ nhưỡng thực tế tại các đồi chè thoái hóa thuộc huyện Thanh Sơn và Tân Sơn (Phú Thọ) sau chu kỳ 60 ngày thử nghiệm.
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
                <span className="text-xs font-semibold text-charcoal-400">Đất đồi dốc chua hóa</span>
              </div>

              <div className="aspect-16/9 rounded-2xl overflow-hidden bg-amber-100/40 relative border border-amber-200/60">
                <img
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"
                  alt="Đất đồi chai cứng bạc màu"
                  className="w-full h-full object-cover grayscale-[30%] contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white text-xs space-y-0.5">
                    <p className="font-bold text-amber-200">Đất chai cứng, nứt nẻ, bạc màu</p>
                    <p className="text-white/80 text-[11px]">pH &lt; 4.3 • Thiếu hụt mùn vi sinh • Rễ chè còi cọc</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-charcoal-900 text-sm">Hệ quả canh tác truyền thống:</h4>
                <ul className="space-y-2 text-xs text-charcoal-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold shrink-0">•</span>
                    <span>Bón nhiều NPK làm đất ngày càng chua và nén chặt, dinh dưỡng bị kết tủa rễ không hút được.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold shrink-0">•</span>
                    <span>Mùa khô đất mất ẩm nhanh chóng, cây héo lá, năng suất búp loại 1 giảm sút 25%.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold shrink-0">•</span>
                    <span>Nấm bệnh tuyến trùng hoành hành gây chết cây con và làm thoái hóa cả vùng đồi chè.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 font-medium">
              Khuyến cáo: Cần bón lót từ 1.5 đến 2 tấn Biochar/ha để giải độc nhôm và phục hồi đệm sinh học.
            </div>
          </div>
        )}

        {/* Right Visual Card: Đất Sau Khi Cải Tạo */}
        {(activeTab === 'after' || activeTab === 'compare') && (
          <div className={`${activeTab === 'compare' ? 'lg:col-span-6' : 'lg:col-span-12'} bg-white rounded-3xl p-6 sm:p-7 border border-forest-800/20 shadow-xl flex flex-col justify-between space-y-6 transition-all ring-1 ring-forest-700/10`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-chalk-200">
                <span className="text-xs font-bold uppercase tracking-wider text-forest-900 bg-forest-100 px-3 py-1 rounded-full border border-forest-200">
                  Sau 60 ngày ứng dụng Biochar
                </span>
                <span className="text-xs font-bold text-forest-700">Đã kiểm nghiệm thổ nhưỡng</span>
              </div>

              <div className="aspect-16/9 rounded-2xl overflow-hidden bg-forest-100/40 relative border border-forest-200">
                <img
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80"
                  alt="Đất màu mỡ tơi xốp với búp chè xanh tốt"
                  className="w-full h-full object-cover contrast-110 saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white text-xs space-y-0.5">
                    <p className="font-bold text-forest-200">Đất đen tơi xốp, giữ ẩm và rễ khỏe</p>
                    <p className="text-white/90 text-[11px]">pH ổn định 6.2 - 6.5 • Búp chè mập dày • Đạt chuẩn OCOP</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-forest-950 text-sm">Hiệu quả đột phá thực tế:</h4>
                <ul className="space-y-2 text-xs text-charcoal-700">
                  <li className="flex items-start gap-2">
                    <span className="text-forest-700 font-bold shrink-0">✓</span>
                    <span><strong>Nâng pH tự nhiên:</strong> Than bã chè giàu khoáng kiềm nhẹ nâng pH từ 4.2 lên 6.5 mà không gây sốc đất như bón vôi sống.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest-700 font-bold shrink-0">✓</span>
                    <span><strong>Giữ ẩm bền bỉ:</strong> Cấu trúc mao quản vi xốp 420 m²/g giữ nước và dưỡng chất, giúp đồi chè xanh mướt qua mùa khô hạn.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest-700 font-bold shrink-0">✓</span>
                    <span><strong>Tăng năng suất:</strong> Búp chè dày hơn, tăng 18 - 22% sản lượng chè búp tươi, tiết kiệm 30% tiền mua phân NPK.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-forest-50 border border-forest-200 text-xs text-forest-950 font-medium flex items-center justify-between">
              <span>Độ bền cải tạo: Duy trì hiệu lực dưỡng đất từ 3 đến 5 năm chỉ sau một lần bón.</span>
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
                    <span>Sau 60 ngày: <strong className="text-forest-900 font-bold">{m.afterVal}</strong></span>
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
