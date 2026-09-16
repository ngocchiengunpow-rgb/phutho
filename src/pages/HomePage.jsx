import React from 'react';
import { products } from '../data/products';
import { teamMembers } from '../data/team';
import BiocharCalculator from '../components/BiocharCalculator';
import SoilComparisonShowcase from '../components/SoilComparisonShowcase';

export default function HomePage({ setActivePage, onSelectProduct, onAddToCart }) {
  const featuredProduct = products[0]; // Biochar bã chè
  const companionProducts = products.slice(1, 4);

  return (
    <div className="space-y-24 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90dvh] flex items-center bg-gradient-to-b from-[#faf8f5] via-[#f7f9f7] to-[#faf8f5] overflow-hidden border-b border-forest-950/5">
        {/* Subtle background landscape */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img
            src="/images/hero_tea_hills.jpg"
            alt="Đồi chè Long Cốc Phú Thọ"
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
                <span>Dự Án Khởi Nghiệp Sinh Viên ĐH Hùng Vương 2026</span>
              </div>

              {/* Element 2: Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-5xl font-bold tracking-tight text-forest-950 leading-[1.18] text-balance">
                <span className="inline-block">Than Sinh Học Từ Bã&nbsp;Chè:</span>{' '}
                <span className="inline-block text-forest-700 font-semibold">Từ Đất Tổ, Trả Lại Đất&nbsp;Tổ</span>
              </h1>

              {/* Element 3: Subtext */}
              <p className="text-base sm:text-lg text-charcoal-600 font-normal leading-relaxed max-w-xl text-pretty">
                Chuyển hóa hàng chục nghìn tấn bã chè phế phẩm Phú Thọ thành than sinh học cải tạo đất chua, phân vi sinh và than hoạt tính lọc&nbsp;nước.
              </p>

              {/* Element 4: Clean CTAs */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActivePage('shop')}
                    className="px-7 py-3.5 rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold text-xs sm:text-sm shadow-md transition-all btn-press"
                  >
                    Khám Phá Sản Phẩm
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
                    100% Nguồn bã chè Phú Thọ
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-700"></span>
                    Nhiệt phân Syngas tự nuôi lò
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-700"></span>
                    Cắt giảm 30% phân NPK
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 relative">
              {/* Soft ambient aura */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-forest-600/15 via-emerald-500/10 to-amber-500/10 rounded-full blur-3xl opacity-70 pointer-events-none" />

              <div className="relative mx-auto max-w-md rounded-3xl p-3.5 bg-white shadow-2xl border border-forest-950/10 group">
                <div className="relative overflow-hidden rounded-2xl bg-chalk-100">
                  <img
                    src="/images/product_biochar.jpg"
                    alt="Biochar Bã Chè Đất Tổ"
                    className="w-full rounded-2xl object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-forest-950/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                    Mẫu Thử Nghiệm MVP 2026
                  </div>
                </div>

                <div className="p-4 bg-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-forest-950">Biochar Bã Chè Đất Tổ</span>
                    <span className="text-base font-bold text-forest-800 tabular-nums">85.000 đ / 5kg</span>
                  </div>

                  {/* Specification pills */}
                  <div className="flex flex-wrap gap-1.5 text-[11px]">
                    <span className="px-2.5 py-0.5 rounded-full bg-forest-50 text-forest-800 font-semibold border border-forest-200">
                      pH 8.5 - 9.5 (Kiềm tự nhiên)
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-forest-50 text-forest-800 font-semibold border border-forest-200">
                      Diện tích 420 m²/g
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 font-semibold border border-amber-200">
                      Khóa Carbon 100+ năm
                    </span>
                  </div>

                  <p className="text-xs text-charcoal-500 leading-relaxed text-pretty">
                    Cấu trúc vi xốp mao quản giữ ẩm và giải phóng dinh dưỡng từ từ, giải độc nhôm sắt cho đất đồi dốc Phú&nbsp;Thọ.
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
            Hợp Tác Khoa Học & Nghiên Cứu
          </span>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-8 text-xs font-semibold text-charcoal-700">
            <span className="px-3 py-1.5 rounded-full bg-chalk-100 border border-chalk-200">
              Trường Đại Học Hùng Vương
            </span>
            <span className="px-3 py-1.5 rounded-full bg-chalk-100 border border-chalk-200">
              Viện KHKT Nông Lâm Nghiệp (NOMAFSI)
            </span>
            <span className="px-3 py-1.5 rounded-full bg-chalk-100 border border-chalk-200">
              60 Cơ Sở & 15 HTX Chè Phú Thọ
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
            <p className="text-xs text-forest-200/80 leading-relaxed text-pretty">Từ 60 nhà máy và 15 HTX chế biến tại Phú Thọ cần được xử lý&nbsp;sạch.</p>
          </div>

          <div className="bg-gradient-to-br from-[#fdfbf7] to-[#fef6ea] rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-amber-300/70 shadow-md">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">Đất canh tác thoái hóa</span>
            <div className="my-3">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-amber-900 tabular-nums">120.000</span>
              <span className="text-xs text-amber-700 ml-1.5 font-semibold">Héc-ta</span>
            </div>
            <p className="text-xs text-amber-900/80 leading-relaxed text-pretty">Đất đồi dốc trung du bị chua hóa do lạm dụng phân vô cơ nhiều&nbsp;năm.</p>
          </div>

          <div className="bg-gradient-to-br from-forest-900 to-forest-950 text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl border border-forest-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Lò nhiệt phân Syngas</span>
            <div className="my-3">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-400 tabular-nums">80%</span>
              <span className="text-xs text-emerald-200 ml-1.5 font-semibold">Tự Nuôi Lò</span>
            </div>
            <p className="text-xs text-forest-200/80 leading-relaxed text-pretty">Thu hồi tuần hoàn khí sinh khối tự đốt sấy, tiết kiệm tối đa chất&nbsp;đốt.</p>
          </div>

          <div className="bg-gradient-to-br from-[#f7faf8] to-[#edf7f0] rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-emerald-300/70 shadow-md">
            <span className="text-xs font-semibold uppercase tracking-wider text-forest-800">Giá than lọc nước</span>
            <div className="my-3">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-forest-950 tabular-nums">1/3</span>
              <span className="text-xs text-forest-700 ml-1.5 font-semibold">Thị Trường</span>
            </div>
            <p className="text-xs text-forest-900/80 leading-relaxed text-pretty">Chỉ 12.000 đến 15.000đ/kg than hoạt tính xử lý nước thải công&nbsp;nghiệp.</p>
          </div>
        </div>
      </section>

      {/* 4. THE PROBLEM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-forest-950/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Real survey infographic */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-forest-950 tracking-tight">
                Gánh Nặng Rác Thải Của Ngành Chè Đất Tổ
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Tại Phú Thọ, lượng bã chè xả ra sau chế biến chiếm từ 10% đến 15% sản lượng búp tươi. Ba phương thức xử lý truyền thống đều bộc lộ hạn chế lớn:
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
                  01. Đốt bỏ thô sơ
                </span>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Ô nhiễm khói bụi khí quyển, lãng phí sinh khối và nguy cơ bị phạt hành chính môi trường.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-chalk-200 space-y-1">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
                  02. Chôn lấp tốn kém
                </span>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Chi phí xử lý rác từ 500.000đ đến 1.000.000đ cho mỗi tấn, chiếm dụng diện tích mặt bằng sản xuất.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-chalk-200 space-y-1">
                <span className="text-xs font-bold text-charcoal-800 uppercase tracking-wider block">
                  03. Ủ Compost truyền thống
                </span>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Mất 2 đến 3 tháng, sinh mùi hôi, giải phóng khí mê-tan và làm nấm bệnh lây lan ngược lại đồi chè.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE CIRCULAR SOLUTION: 6 STEPS (VISUAL BENTO FLOW) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-100/80 px-3 py-1 rounded-full">
            CHU TRÌNH TUẦN HOÀN KHÉP KÍN
          </span>
          <h2 className="text-3xl font-bold text-forest-950 mt-2 tracking-tight">
            Mô Hình Kinh Tế Tuần Hoàn Địa Phương
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
            Khép kín 100% dòng sinh khối: Thu gom bã chè 0đ, nhiệt phân và bón trở lại nuôi dưỡng đồi chè Trung du.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-forest-950/5 mb-8">
          <img
            src="/images/diagram_circular_model.jpg"
            alt="Mô hình kinh tế tuần hoàn khép kín tại Phú Thọ"
            className="w-full rounded-2xl object-contain max-h-[460px] mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#faf6f0] border border-amber-300/70 shadow-xs hover:shadow-md transition-all space-y-1.5">
            <span className="text-xs font-bold text-amber-800 block tracking-wide">01. THU GOM NGUYÊN LIỆU</span>
            <h4 className="font-bold text-charcoal-900 text-sm">Thu gom từ 60 cơ sở chế biến</h4>
            <p className="text-xs text-charcoal-600 leading-relaxed text-pretty">Giải quyết triệt để vấn đề rác thải bã chè xả ra môi trường Phú&nbsp;Thọ.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#fff8f0] border border-orange-300/70 shadow-xs hover:shadow-md transition-all space-y-1.5">
            <span className="text-xs font-bold text-orange-800 block tracking-wide">02. SƠ CHẾ & SẤY KHÔ</span>
            <h4 className="font-bold text-charcoal-900 text-sm">Hạ độ ẩm dưới 10%</h4>
            <p className="text-xs text-charcoal-600 leading-relaxed text-pretty">Tận dụng nhiệt dư từ khí Syngas sấy khô bã chè tự động, tiết kiệm chất&nbsp;đốt.</p>
          </div>

          <div className="p-5 rounded-2xl bg-forest-950 text-white shadow-xl border border-forest-800 ring-1 ring-forest-700/60 space-y-1.5">
            <span className="text-xs font-bold text-emerald-400 block tracking-wide">03. NHIỆT PHÂN CHẬM</span>
            <h4 className="font-bold text-white text-sm">Dải nhiệt 350°C đến 450°C</h4>
            <p className="text-xs text-forest-200/90 leading-relaxed text-pretty">Lò yếm khí thu hồi Biochar xốp vi mô và tự tuần hoàn khí Syngas nuôi&nbsp;lò.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f0f9f3] border border-emerald-300/70 shadow-xs hover:shadow-md transition-all space-y-1.5">
            <span className="text-xs font-bold text-forest-800 block tracking-wide">04. PHỐI TRỘN VI SINH</span>
            <h4 className="font-bold text-charcoal-900 text-sm">Chủng Bacillus & Trichoderma</h4>
            <p className="text-xs text-charcoal-600 leading-relaxed text-pretty">Hoạt hóa thành 3 dòng: Biochar bón lót, Phân vi sinh và Than hoạt&nbsp;tính.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#fbf7f2] border border-stone-300/80 shadow-xs hover:shadow-md transition-all space-y-1.5">
            <span className="text-xs font-bold text-amber-900 block tracking-wide">05. BÓN CHO ĐẤT CHÈ</span>
            <h4 className="font-bold text-charcoal-900 text-sm">Cải tạo đất chua đồi dốc</h4>
            <p className="text-xs text-charcoal-600 leading-relaxed text-pretty">Cung ứng vật tư xanh rẻ hơn 20 đến 30% cho bà con nông dân địa&nbsp;phương.</p>
          </div>

          <div className="p-5 rounded-2xl bg-forest-900 text-white shadow-xl border border-forest-700 space-y-1.5">
            <span className="text-xs font-bold text-forest-200 block tracking-wide">06. KHÉP CHU TRÌNH</span>
            <h4 className="font-bold text-white text-sm">Búp chè chất lượng cao</h4>
            <p className="text-xs text-forest-200/90 leading-relaxed text-pretty">Búp chè đạt chuẩn VietGAP/OCOP phục vụ người tiêu dùng và xuất&nbsp;khẩu.</p>
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
              Các Dòng Sản Phẩm Cốt Lõi
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-500 mt-0.5">
              Tối ưu hóa giá trị từ một nguồn nguyên liệu bã chè Phú Thọ.
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

      {/* 7. INTERACTIVE BIOCHAR CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BiocharCalculator onAddToCart={onAddToCart} />
      </section>

      {/* 8. COMPETITIVE ADVANTAGE (USP TABLE WITHOUT EXCESSIVE BORDERS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-forest-950 tracking-tight">
            Lợi Thế Vượt Trội Của Biochar Bã Chè
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
            So sánh trực quan giữa dự án và các giải pháp cải tạo đất thông thường.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-forest-950/5 overflow-x-auto">
          <table className="w-full min-w-[780px] text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#f3f1eb] text-charcoal-700">
                <th className="p-4 sm:p-5 font-bold w-[18%]">Tiêu chí so sánh</th>
                <th className="p-4 sm:p-5 font-bold text-forest-950 bg-forest-100/70 border-x border-forest-300 w-[24%]">
                  Biochar Bã Chè (Đội Hùng&nbsp;Vương)
                </th>
                <th className="p-4 sm:p-5 font-semibold w-[19%]">Phân vô cơ (NPK)</th>
                <th className="p-4 sm:p-5 font-semibold w-[19%]">Vôi bột cải tạo đất</th>
                <th className="p-4 sm:p-5 font-semibold w-[20%]">Biochar Vỏ Trấu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-chalk-200">
              <tr>
                <td className="p-4 sm:p-5 font-bold text-charcoal-800">Chi phí nguyên liệu</td>
                <td className="p-4 sm:p-5 font-bold text-forest-900 bg-forest-50/40 border-x border-forest-200">
                  Cực thấp
                </td>
                <td className="p-4 sm:p-5 text-charcoal-500">Giá cao và biến động theo dầu&nbsp;mỏ</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Rẻ nhưng tốn công bón nhiều&nbsp;lần</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Chi phí vận chuyển vỏ trấu&nbsp;cao</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-charcoal-800">Hiệu quả cải tạo đất</td>
                <td className="p-4 sm:p-5 font-bold text-forest-900 bg-forest-50/40 border-x border-forest-200">
                  Tác động kép: Nâng pH, giữ ẩm, kháng&nbsp;nấm
                </td>
                <td className="p-4 sm:p-5 text-charcoal-500">Nhanh nhưng làm chai cứng&nbsp;đất</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Chỉ hạ chua tức thời, không bù&nbsp;mùn</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Giữ ẩm tốt, hàm lượng silica&nbsp;cao</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-charcoal-800">Đa dạng hóa sản phẩm</td>
                <td className="p-4 sm:p-5 font-bold text-forest-900 bg-forest-50/40 border-x border-forest-200">
                  Biochar bón đất, Phân vi sinh, Than lọc&nbsp;nước
                </td>
                <td className="p-4 sm:p-5 text-charcoal-500">Chỉ bổ sung dinh dưỡng vô&nbsp;cơ</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Chỉ khử chua&nbsp;đất</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Chủ yếu xuất thô hoặc giá&nbsp;thể</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-charcoal-800">Tín chỉ Carbon & ESG</td>
                <td className="p-4 sm:p-5 font-bold text-forest-900 bg-forest-50/40 border-x border-forest-200">
                  Cố định Carbon trên 100 năm, chuẩn Net&nbsp;Zero
                </td>
                <td className="p-4 sm:p-5 text-charcoal-500">Phát thải lớn trong sản&nbsp;xuất</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Không tạo tín chỉ carbon</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Có bán tín chỉ carbon</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. FOUNDING TEAM & ADVISORS (HUMAN-CENTERED EDITORIAL LAYOUT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-forest-950 tracking-tight">
            Đội Ngũ Sáng Lập ĐH Hùng Vương
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-1 text-pretty">
            Sinh viên K22, K24 tâm huyết với nông nghiệp sinh thái tuần hoàn Phú&nbsp;Thọ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
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

              <p className="text-[11px] text-charcoal-600 mt-3 pt-3 border-t border-chalk-200 italic leading-relaxed text-pretty">
                "{member.bio}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CALL TO ACTION (NO GIMMICKS, CLEAN PROPOSITION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-forest-900">
          <div className="space-y-3 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight text-balance">
              Đồng Hành Phát Triển Nông Nghiệp Xanh Phú&nbsp;Thọ
            </h3>
            <p className="text-forest-200 text-xs sm:text-sm leading-relaxed text-pretty">
              Đăng ký tham gia chương trình <strong>Đổi phế phẩm lấy vật tư</strong> để giải phóng rác thải bã chè miễn phí, hoặc liên hệ nhận mẫu thử nghiệm Biochar cho diện tích vườn chè của&nbsp;bạn.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => setActivePage('b2b')}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-forest-50 text-forest-950 font-bold text-xs sm:text-sm shadow-md transition btn-press"
            >
              Đăng Ký Liên Kết B2B
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
