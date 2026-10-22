import React from 'react';
import { products } from '../data/products';
import { teamMembers, advisors, startupMetrics } from '../data/team';
import BiocharCalculator from '../components/BiocharCalculator';
import SoilComparisonShowcase from '../components/SoilComparisonShowcase';

export default function HomePage({ setActivePage, onSelectProduct, onAddToCart }) {
  const featuredProduct = products[0]; // Than sinh học cải tạo đất
  const companionProducts = products.slice(1, 4);

  return (
    <div className="space-y-24 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90dvh] flex items-center bg-gradient-to-b from-[#faf8f5] via-[#f7f9f7] to-[#faf8f5] overflow-hidden border-b border-forest-950/5">
        {/* Subtle background landscape */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img
            src="/images/hero_tea_hills.jpg"
            alt="Đồi chè Phú Thọ"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Focused Copy Stack */}
            <div className="lg:col-span-7 space-y-6">
              {/* Element 1: Eyebrow Badge */}
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-forest-100/90 text-forest-900 text-xs font-semibold border border-forest-200/60 shadow-xs">
                <span>{startupMetrics.teamName} • {startupMetrics.contest}</span>
              </div>

              {/* Element 2: Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-5xl font-bold tracking-tight text-forest-950 leading-[1.18] text-balance">
                <span className="inline-block">Than Sinh Học Từ Phế Phẩm Chè:</span>{' '}
                <span className="inline-block text-forest-700 font-semibold">{startupMetrics.slogan}</span>
              </h1>

              {/* Element 3: Subtext */}
              <p className="text-base sm:text-lg text-charcoal-600 font-normal leading-relaxed max-w-xl text-pretty">
                Thiết lập chuỗi cung ứng xanh tuần hoàn: Chế biến 27.000 tấn phụ phẩm ngành trà Phú Thọ thành Than sinh học cải tạo đất Biochar-Microbe và Than hoạt tính lọc nước kỹ thuật cao.
              </p>

              {/* Element 4: Clean CTAs */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActivePage('shop')}
                    className="px-7 py-3.5 rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold text-xs sm:text-sm shadow-md transition-all btn-press"
                  >
                    Khám Phá Cửa Hàng
                  </button>

                  <button
                    onClick={() => setActivePage('b2b')}
                    className="px-7 py-3.5 rounded-full bg-white hover:bg-forest-50 text-forest-950 font-semibold text-xs sm:text-sm border border-forest-950/15 shadow-xs transition-all btn-press"
                  >
                    Đổi Phế Phẩm Lấy Vật Tư
                  </button>
                </div>

                {/* Micro trust highlights */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-charcoal-500 pt-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-700"></span>
                    Thu gom từ 60 cơ sở & 15 HTX chè
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-700"></span>
                    Tuần hoàn Syngas tiết kiệm 80% chất đốt
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-700"></span>
                    Cô lập 2,5 - 3 tấn CO₂e / tấn Biochar
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-forest-600/15 via-emerald-500/10 to-amber-500/10 rounded-full blur-3xl opacity-70 pointer-events-none" />

              <div className="relative mx-auto max-w-md rounded-3xl p-3.5 bg-white shadow-2xl border border-forest-950/10 group">
                <div className="relative overflow-hidden rounded-2xl bg-chalk-100">
                  <img
                    src="/images/product_biochar.jpg"
                    alt="Than Sinh Học Cải Tạo Đất Đất Tổ"
                    className="w-full rounded-2xl object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-forest-950/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                    Sản Phẩm Cốt Lõi Pilot
                  </div>
                </div>

                <div className="p-4 bg-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-forest-950">{featuredProduct.name}</span>
                    <span className="text-base font-bold text-forest-800 tabular-nums">{featuredProduct.basePrice.toLocaleString()} đ / 5kg</span>
                  </div>

                  {/* Specification pills */}
                  <div className="flex flex-wrap gap-1.5 text-[11px]">
                    <span className="px-2.5 py-0.5 rounded-full bg-forest-50 text-forest-800 font-semibold border border-forest-200">
                      pH 8.5 - 9.5 (Kiềm tự nhiên hạ chua)
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-forest-50 text-forest-800 font-semibold border border-forest-200">
                      Diện tích BET &gt; 400 m²/g
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 font-semibold border border-amber-200">
                      Khóa Carbon 2,5 - 3t CO₂e
                    </span>
                  </div>

                  <p className="text-xs text-charcoal-500 leading-relaxed text-pretty">
                    Cấu trúc mô sợi bã chè siêu xốp giữ ẩm và lưu giữ phân bón, hạ chua cho đất đồi dốc đang bị tụt dưới pH 4.0 tại Phú Thọ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL TRUST STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-forest-950/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400 shrink-0">
            Cố Vấn Khoa Học & Mạng Lưới Đối Tác
          </span>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-8 text-xs font-semibold text-charcoal-700">
            <span className="px-3 py-1.5 rounded-full bg-chalk-100 border border-chalk-200">
              Trường Đại Học Hùng Vương
            </span>
            <span className="px-3 py-1.5 rounded-full bg-chalk-100 border border-chalk-200">
              Viện Nghiên Cứu Chè Phú Thọ
            </span>
            <span className="px-3 py-1.5 rounded-full bg-chalk-100 border border-chalk-200">
              60 Cơ Sở & 15 HTX Chè Phú Thọ
            </span>
            <span className="px-3 py-1.5 rounded-full bg-chalk-100 border border-chalk-200">
              KCN Thụy Vân & KCN Cẩm Khê
            </span>
          </div>
        </div>
      </section>

      {/* 3. KEY METRICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-forest-950 text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl border border-forest-900">
            <span className="text-xs font-semibold uppercase tracking-wider text-forest-300">Phế phẩm bã chè</span>
            <div className="my-3">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight tabular-nums">27.000</span>
              <span className="text-xs text-forest-300 ml-1.5 font-semibold">Tấn / Năm</span>
            </div>
            <p className="text-xs text-forest-200/80 leading-relaxed text-pretty">Nguồn cọng già, cám bụi và bã ẩm từ 60 cơ sở & 15 HTX chế biến tại Phú Thọ.</p>
          </div>

          <div className="bg-gradient-to-br from-[#fdfbf7] to-[#fef6ea] rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-amber-300/70 shadow-md">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">Thủ phủ chè Đất Tổ</span>
            <div className="my-3">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-amber-900 tabular-nums">&gt;14.500</span>
              <span className="text-xs text-amber-700 ml-1.5 font-semibold">Héc-ta</span>
            </div>
            <p className="text-xs text-amber-900/80 leading-relaxed text-pretty">Sản lượng trên 180.000 tấn búp tươi, đất đang bị chua hóa nặng dưới pH 4.0.</p>
          </div>

          <div className="bg-gradient-to-br from-forest-900 to-forest-950 text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl border border-forest-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Tuần hoàn khí Syngas</span>
            <div className="my-3">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-400 tabular-nums">80%</span>
              <span className="text-xs text-emerald-200 ml-1.5 font-semibold">Tiết Kiệm Chất Đốt</span>
            </div>
            <p className="text-xs text-forest-200/80 leading-relaxed text-pretty">Khí sinh học tuần hoàn đốt ngược tự nuôi lò và sấy nhiệt dư gối đầu.</p>
          </div>

          <div className="bg-gradient-to-br from-[#f7faf8] to-[#edf7f0] rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-emerald-300/70 shadow-md">
            <span className="text-xs font-semibold uppercase tracking-wider text-forest-800">Hiệu quả tài chính</span>
            <div className="my-3">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-forest-950 tabular-nums">56,85%</span>
              <span className="text-xs text-forest-700 ml-1.5 font-semibold">Biên Lợi Nhuận ST</span>
            </div>
            <p className="text-xs text-forest-900/80 leading-relaxed text-pretty">Doanh thu Năm 1: 691,2 triệu đ; Hoàn vốn chỉ sau ~9 tháng vận hành.</p>
          </div>
        </div>
      </section>

      {/* 4. THE PROBLEM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-forest-950/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Real survey infographic */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                KHỦNG HOẢNG & NỖI ĐAU THỰC TẾ
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-forest-950 tracking-tight">
                Gánh Nặng Rác Thải 27.000 Tấn & Thổ Nhưỡng Chua Hóa
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Khác với vỏ trấu dễ đốt hay gáo dừa khô, bã chè tươi có độ ẩm cao (&gt;60% - 70%) và dễ lên men thối mốc chỉ sau 24 - 48 giờ. Ba phương thức xử lý cũ đang gây thiệt hại lớn:
              </p>
              <div className="rounded-2xl overflow-hidden border border-chalk-200 bg-[#faf8f5] p-2">
                <img
                  src="/images/diagram_waste_problem.jpg"
                  alt="Thực trạng xử lý bã chè tại Phú Thọ"
                  className="w-full rounded-xl object-contain"
                />
              </div>
            </div>

            {/* Right: Clean numbered pain points */}
            <div className="lg:col-span-5 space-y-3">
              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-chalk-200 space-y-1">
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider block">
                  01. Chi phí chôn lấp đắt đỏ
                </span>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Các nhà máy nước giải khát và chế biến chè phải trả 500.000đ - 1.000.000đ/tấn để vận chuyển chôn lấp bã ẩm, chiếm dụng mặt bằng và sinh mùi hôi.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-chalk-200 space-y-1">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
                  02. Chua hóa đất chè nghiêm trọng
                </span>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Cây chè ưa pH 4.5 - 5.5, nhưng thói quen lạm dụng phân vô cơ gốc axit nhiều thập kỷ đã kéo pH tụt dưới 4.0, làm chai cứng đất và nghẹt rễ non.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-chalk-200 space-y-1">
                <span className="text-xs font-bold text-charcoal-800 uppercase tracking-wider block">
                  03. Đốt tự do gây ô nhiễm môi trường
                </span>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Đốt thô sơ giải phóng khí nhà kính CH₄, CO₂ và khói bụi mịn, đối mặt với các chế tài xử phạt hành chính nghiêm ngặt của Luật Môi trường.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 5-STEP STANDARD INDUSTRIAL PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-100/80 px-3 py-1 rounded-full">
            QUY TRÌNH KỸ THUẬT TIÊU CHUẨN
          </span>
          <h2 className="text-3xl font-bold text-forest-950 mt-2 tracking-tight">
            Quy Trình Sản Xuất 5 Bước Công Nghiệp
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
            Khép kín 100% dòng sinh khối: từ khâu logistics thu gom 300.000đ/tấn đến chế biến sâu Biochar-Microbe và than hoạt tính.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-forest-950/5 mb-8">
          <img
            src="/images/diagram_circular_model.jpg"
            alt="Mô hình kinh tế tuần hoàn khép kín tại Phú Thọ"
            className="w-full rounded-2xl object-contain max-h-[460px] mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-5 rounded-2xl bg-[#faf6f0] border border-amber-300/70 shadow-xs hover:shadow-md transition-all space-y-1.5">
            <span className="text-xs font-bold text-amber-800 block tracking-wide">BƯỚC 1: THU GOM</span>
            <h4 className="font-bold text-charcoal-900 text-sm">Tiếp nhận & Logistics</h4>
            <p className="text-xs text-charcoal-600 leading-relaxed text-pretty">Xe tải tập kết cọng chè khô và bã ẩm từ 60 cơ sở & 15 HTX về xưởng Thanh Sơn (hạch toán 300.000đ/tấn).</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#fff8f0] border border-orange-300/70 shadow-xs hover:shadow-md transition-all space-y-1.5">
            <span className="text-xs font-bold text-orange-800 block tracking-wide">BƯỚC 2: HẠ ẨM</span>
            <h4 className="font-bold text-charcoal-900 text-sm">Vắt ép & Sấy nhiệt dư</h4>
            <p className="text-xs text-charcoal-600 leading-relaxed text-pretty">Xử lý dưới 12h: máy vắt ép trục vít hạ ẩm &lt;35%, dẫn khí nóng nhiệt dư lò sấy gối đầu đạt &lt;10%.</p>
          </div>

          <div className="p-5 rounded-2xl bg-forest-950 text-white shadow-xl border border-forest-800 ring-1 ring-forest-700/60 space-y-1.5">
            <span className="text-xs font-bold text-emerald-400 block tracking-wide">BƯỚC 3: NHIỆT PHÂN</span>
            <h4 className="font-bold text-white text-sm">Yếm khí 350°C - 450°C</h4>
            <p className="text-xs text-forest-200/90 leading-relaxed text-pretty">Lò nhiệt phân chậm 45 - 60 phút. Hệ thống ống dẫn khí Syngas tự tuần hoàn nuôi lò, tiết kiệm 80% chất đốt.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f0f9f3] border border-emerald-300/70 shadow-xs hover:shadow-md transition-all space-y-1.5">
            <span className="text-xs font-bold text-forest-800 block tracking-wide">BƯỚC 4: CHẾ BIẾN SÂU</span>
            <h4 className="font-bold text-charcoal-900 text-sm">Vi sinh & Hoạt hóa</h4>
            <p className="text-xs text-charcoal-600 leading-relaxed text-pretty">Phân khúc Nông nghiệp: Phun vi sinh Trichoderma & ép viên nén mini. Công nghiệp: Nung hoạt hóa 400 - 600°C rửa trung hòa pH 7.</p>
          </div>

          <div className="p-5 rounded-2xl bg-forest-900 text-white shadow-xl border border-forest-700 space-y-1.5">
            <span className="text-xs font-bold text-forest-200 block tracking-wide">BƯỚC 5: KIỂM ĐỊNH</span>
            <h4 className="font-bold text-white text-sm">Chứng nhận & Mã QR</h4>
            <p className="text-xs text-forest-200/90 leading-relaxed text-pretty">Kiểm nghiệm lý hóa (pH, BET &gt;400 m²/g), đóng bao chống ẩm gắn mã QR minh bạch lượng carbon đã cô lập.</p>
          </div>
        </div>
      </section>

      {/* 6. REAL FIELD EXPERIMENT: SOIL REGENERATION BEFORE & AFTER SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SoilComparisonShowcase onCalculateClick={() => setActivePage('shop')} />
      </section>

      {/* 7. FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-forest-950 tracking-tight">
              Các Dòng Sản Phẩm Cốt Lõi Dự Án
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-500 mt-0.5">
              Cung cấp dòng sản phẩm Than sinh học cải tạo đất Biochar-Microbe và Than hoạt tính lọc nước.
            </p>
          </div>

          <button
            onClick={() => setActivePage('shop')}
            className="mt-3 sm:mt-0 text-xs font-bold text-forest-800 hover:text-forest-950 underline underline-offset-4"
          >
            Xem toàn bộ cửa hàng
          </button>
        </div>

        {/* Bento Grid: 1 Large Hero Card + 3 Companion Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Hero Card (Biochar) */}
          <div className="lg:col-span-6 bg-white rounded-3xl overflow-hidden border border-forest-950/5 shadow-xl flex flex-col justify-between group">
            <div 
              className="relative aspect-16/10 overflow-hidden bg-chalk-100 cursor-pointer"
              onClick={() => onSelectProduct(featuredProduct)}
            >
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-4 left-4 bg-forest-950 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                Sản phẩm chủ lực
              </span>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-forest-800">
                  {featuredProduct.categoryName}
                </span>
                <h3 
                  onClick={() => onSelectProduct(featuredProduct)}
                  className="text-xl font-bold text-forest-950 hover:text-forest-800 cursor-pointer mt-1"
                >
                  {featuredProduct.name}
                </h3>
                <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                  {featuredProduct.description}
                </p>
              </div>

              <div className="pt-4 border-t border-chalk-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-charcoal-400 block">Đơn giá ({featuredProduct.priceUnit})</span>
                  <span className="text-2xl font-bold text-forest-950 tabular-nums">
                    {featuredProduct.basePrice.toLocaleString()} đ
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => onSelectProduct(featuredProduct)}
                    className="px-4 py-2 rounded-full border border-chalk-300 text-charcoal-800 hover:bg-chalk-50 text-xs font-semibold transition btn-press"
                  >
                    Xem Chi Tiết
                  </button>
                  <button
                    onClick={() => onAddToCart({
                      id: featuredProduct.id,
                      name: featuredProduct.name,
                      variantId: featuredProduct.variants[0].id,
                      variantLabel: featuredProduct.variants[0].label,
                      price: featuredProduct.variants[0].price,
                      quantity: 1,
                      image: featuredProduct.image
                    })}
                    className="px-4 py-2 rounded-full bg-forest-950 hover:bg-forest-900 text-white text-xs font-semibold shadow-md transition btn-press"
                  >
                    Thêm Nhanh
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Companion Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-4">
            {companionProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-3xl p-4 sm:p-5 border border-forest-950/5 shadow-md flex gap-4 items-center group cursor-pointer hover:shadow-lg transition-all"
                onClick={() => onSelectProduct(p)}
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-chalk-100 shrink-0 border border-forest-950/5">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-forest-800">
                    {p.categoryName}
                  </span>
                  <h4 className="font-bold text-forest-950 text-sm sm:text-base truncate group-hover:text-forest-700 transition">
                    {p.name}
                  </h4>
                  <p className="text-xs text-charcoal-500 line-clamp-1 mt-0.5">
                    {p.subTitle}
                  </p>
                  <div className="mt-2 text-sm font-bold text-forest-950 tabular-nums">
                    {p.basePrice.toLocaleString()} đ <span className="text-[10px] font-normal text-charcoal-400">/ {p.priceUnit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE BIOCHAR CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BiocharCalculator onAddToCart={onAddToCart} />
      </section>

      {/* 9. COMPETITIVE ADVANTAGE TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-forest-950 tracking-tight">
            Tính Độc Đáo & Khả Năng Cạnh Tranh
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
            So sánh trực quan giữa Than sinh học bã chè và các sản phẩm than, phân bón hiện hữu trên thị trường.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-forest-950/5 overflow-x-auto">
          <table className="w-full min-w-[780px] text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#f3f1eb] text-charcoal-700">
                <th className="p-4 sm:p-5 font-bold w-[18%]">Tiêu chí so sánh</th>
                <th className="p-4 sm:p-5 font-bold text-forest-950 bg-forest-100/70 border-x border-forest-300 w-[24%]">
                  Biochar Bã Chè (Hùng Vương Đất Tổ)
                </th>
                <th className="p-4 sm:p-5 font-semibold w-[19%]">Phân vô cơ (NPK)</th>
                <th className="p-4 sm:p-5 font-semibold w-[19%]">Vôi bột khử chua</th>
                <th className="p-4 sm:p-5 font-semibold w-[20%]">Biochar Vỏ Trấu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-chalk-200">
              <tr>
                <td className="p-4 sm:p-5 font-bold text-charcoal-800">Chi phí nguyên liệu</td>
                <td className="p-4 sm:p-5 font-bold text-forest-900 bg-forest-50/40 border-x border-forest-200">
                  Cực thấp (Phế phụ phẩm 27.000 tấn)
                </td>
                <td className="p-4 sm:p-5 text-charcoal-500">Giá cao và biến động theo dầu mỏ</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Rẻ nhưng tốn công bón liên tục</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Cạnh tranh thu mua và cồng kềnh</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-charcoal-800">Cấu trúc vi mô & Giữ ẩm</td>
                <td className="p-4 sm:p-5 font-bold text-forest-900 bg-forest-50/40 border-x border-forest-200">
                  Mô sợi bã chè siêu xốp (BET &gt; 400 m²/g)
                </td>
                <td className="p-4 sm:p-5 text-charcoal-500">Tan nhanh, rửa trôi &gt;60% khi mưa</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Không có cấu trúc xốp giữ nước</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Giàu silica, độ xốp vừa phải</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-charcoal-800">Hạ chua đất đồi chè</td>
                <td className="p-4 sm:p-5 font-bold text-forest-900 bg-forest-50/40 border-x border-forest-200">
                  pH kiềm tự nhiên 8.5 - 9.5 (êm dịu bền bỉ)
                </td>
                <td className="p-4 sm:p-5 text-charcoal-500">Gốc axit kéo pH tụt dưới 4.0</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Hạ chua sốc, làm đất chai cứng</td>
                <td className="p-4 sm:p-5 text-charcoal-500">pH kiềm nhẹ 7.0 - 7.5</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-charcoal-800">Đa dạng hóa sản phẩm</td>
                <td className="p-4 sm:p-5 font-bold text-forest-900 bg-forest-50/40 border-x border-forest-200">
                  Biochar-Microbe Trichoderma + Than lọc nước KCN
                </td>
                <td className="p-4 sm:p-5 text-charcoal-500">Chỉ bổ sung khoáng vô cơ</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Chỉ khử chua tức thời</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Chủ yếu xuất thô hoặc giá thể</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-charcoal-800">Cô lập Carbon & ESG</td>
                <td className="p-4 sm:p-5 font-bold text-forest-900 bg-forest-50/40 border-x border-forest-200">
                  Khóa 2,5 - 3t CO₂e/tấn, đón đầu Net Zero 2050
                </td>
                <td className="p-4 sm:p-5 text-charcoal-500">Phát thải carbon lớn trong sản xuất</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Phát thải CO₂ khi nung vôi</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Tỷ lệ cố định carbon thấp hơn</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 10. FOUNDING TEAM & ADVISOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-100/80 px-3 py-1 rounded-full">
            ĐỘI THI: {startupMetrics.teamName}
          </span>
          <h2 className="text-3xl font-bold text-forest-950 mt-2 tracking-tight">
            Nhóm Khởi Nghiệp Sinh Viên ĐH Hùng Vương
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-1 text-pretty">
            Đội ngũ sinh viên năm 1 và năm 3 kết hợp chuyên môn Kế toán tài chính, Sư phạm Ngữ văn và Sư phạm Tiếng Anh dưới sự dẫn dắt của Giảng viên cố vấn.
          </p>
        </div>

        {/* Advisor Feature */}
        {advisors.length > 0 && (
          <div className="mb-8 bg-forest-950 text-white rounded-3xl p-6 sm:p-8 border border-forest-900 shadow-xl flex flex-col md:flex-row items-center gap-6">
            <img
              src={advisors[0].avatar}
              alt={advisors[0].name}
              className="w-20 h-20 rounded-full object-cover border-2 border-emerald-400 shadow-md shrink-0"
            />
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {advisors[0].role}
              </span>
              <h3 className="text-lg font-bold text-white">{advisors[0].name}</h3>
              <p className="text-xs text-forest-200">{advisors[0].organization}</p>
              <p className="text-xs text-charcoal-300 leading-relaxed pt-1">
                {advisors[0].bio}
              </p>
            </div>
          </div>
        )}

        {/* 5 Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-5 border shadow-xs flex flex-col justify-between text-center ${
                member.isLeader ? 'border-forest-700 bg-forest-50/30' : 'border-forest-950/5'
              }`}
            >
              <div>
                <div className="w-18 h-18 rounded-full overflow-hidden mx-auto mb-3 border-2 border-white shadow-md">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-forest-950 text-sm">{member.name}</h4>
                <p className="text-[11px] font-semibold text-forest-700 mt-0.5">{member.role}</p>
                <p className="text-[10px] text-charcoal-400 mt-1">{member.classEdu}</p>
              </div>

              <div className="mt-3 pt-3 border-t border-chalk-200 space-y-1 text-left">
                <p className="text-[11px] text-charcoal-600 leading-relaxed">
                  <strong>Nhiệm vụ:</strong> {member.bio}
                </p>
                <p className="text-[10px] text-forest-800 font-medium">
                  <strong>Cam kết:</strong> {member.readiness}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-forest-900">
          <div className="space-y-3 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight text-balance">
              Cùng Chung Tay Vì Một Phú Thọ Xanh & Net Zero
            </h3>
            <p className="text-forest-200 text-xs sm:text-sm leading-relaxed text-pretty">
              Tham gia cơ chế <strong>"Đổi phế phẩm lấy vật tư"</strong> để giải phóng bã chè với chi phí 0đ và nhận chiết khấu 15% - 20% khi mua Than sinh học bón lại đồi chè, hoặc hợp tác bao tiêu than lọc nước thải cho KCN.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => setActivePage('b2b')}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-forest-50 text-forest-950 font-bold text-xs sm:text-sm shadow-md transition btn-press"
            >
              Đăng Ký Hợp Tác B2B
            </button>
            <button
              onClick={() => setActivePage('contact')}
              className="px-6 py-3.5 rounded-full bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs sm:text-sm border border-forest-700 transition btn-press"
            >
              Liên Hệ Trưởng Nhóm
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
