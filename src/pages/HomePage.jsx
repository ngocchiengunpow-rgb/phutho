import React from 'react';
import { 
  Leaf, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Factory, 
  TrendingUp, Award, Droplet, Flame, Users, Star, 
  RefreshCw, BarChart3, ChevronRight 
} from 'lucide-react';
import { products } from '../data/products';
import { teamMembers, advisors, startupMetrics } from '../data/team';
import BiocharCalculator from '../components/BiocharCalculator';

export default function HomePage({ setActivePage, onSelectProduct, onAddToCart }) {
  const featuredProduct = products[0]; // Biochar bã chè
  const companionProducts = products.slice(1, 4);

  return (
    <div className="space-y-24 pb-24">
      {/* 1. HERO SECTION (VIEWPORT DISCIPLINE: min-h-[100dvh], max 2 lines headline, max 20 words subtext) */}
      <section className="relative min-h-[92dvh] flex items-center bg-[#faf8f5] overflow-hidden border-b border-forest-950/5">
        {/* Subtle background landscape */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src="/images/hero_tea_hills.jpg"
            alt="Đồi chè Long Cốc Phú Thọ"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-forest-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Focused Copy Stack (Max 4 elements) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Element 1: Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100/90 text-forest-900 text-xs font-semibold border border-forest-200/60">
                <Sparkles className="w-3.5 h-3.5 text-forest-700" strokeWidth={1.75} />
                <span>Ý Tưởng Khởi Nghiệp Sinh Viên Hùng Vương 2026</span>
              </div>

              {/* Element 2: Headline (Strictly 2 lines at desktop) */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-forest-950 leading-[1.08]">
                Than Sinh Học Từ Bã Chè: <br />
                <span className="text-forest-700">Từ Đất Tổ, Trả Lại Đất Tổ</span>
              </h1>

              {/* Element 3: Subtext (Concise, under 20 words) */}
              <p className="text-base sm:text-lg text-charcoal-600 font-normal leading-relaxed max-w-xl">
                Chuyển hóa hàng chục nghìn tấn bã chè phế phẩm Phú Thọ thành than sinh học cải tạo đất chua, phân vi sinh và than hoạt tính lọc nước.
              </p>

              {/* Element 4: Standardized CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setActivePage('shop')}
                  className="px-6 py-3.5 rounded-full bg-forest-950 hover:bg-forest-900 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-forest-950/20 transition-all btn-press"
                >
                  <Leaf className="w-4 h-4 text-forest-300" strokeWidth={1.75} />
                  Khám Phá Sản Phẩm
                </button>

                <button
                  onClick={() => setActivePage('b2b')}
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-forest-50 text-forest-950 font-bold text-xs sm:text-sm border border-forest-950/15 shadow-xs transition-all btn-press"
                >
                  <Factory className="w-4 h-4 text-forest-800" strokeWidth={1.75} />
                  Đổi Phế Phẩm Lấy Vật Tư
                </button>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-3xl p-3 bg-white shadow-2xl border border-forest-950/10">
                <img
                  src="/images/product_biochar.jpg"
                  alt="Biochar Bã Chè Đất Tổ"
                  className="w-full rounded-2xl object-cover"
                />
                <div className="p-4 bg-white space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-forest-950">Biochar Bã Chè Đất Tổ</span>
                    <span className="text-xs font-mono font-bold text-forest-700">85.000 đ/5kg</span>
                  </div>
                  <p className="text-[11px] text-charcoal-500">
                    Cấu trúc vi xốp diện tích bề mặt trên 400 m2/g, nâng pH và khóa carbon hơn 100 năm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL TRUST STRIP (UNDER HERO) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-forest-950/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400 shrink-0">
            Hợp Tác Khoa Học & Nghiên Cứu
          </span>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-10 text-xs font-bold text-charcoal-700">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-forest-700" strokeWidth={1.75} />
              <span>Trường Đại Học Hùng Vương</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-forest-700" strokeWidth={1.75} />
              <span>Viện KHKT Nông Lâm Nghiệp (NOMAFSI)</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-forest-700" strokeWidth={1.75} />
              <span>60 Cơ Sở & 15 HTX Chè Phú Thọ</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY METRICS (TABULAR NUMBERS, NO GENERIC AI CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-forest-950 text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-md">
            <span className="text-xs font-medium text-forest-300">Phế phẩm bã chè</span>
            <div className="my-3">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight tabular-nums">27.000</span>
              <span className="text-xs text-forest-300 ml-1 font-semibold">Tấn/Năm</span>
            </div>
            <p className="text-xs text-forest-200/80 leading-relaxed">Từ 60 nhà máy và 15 HTX chế biến tại Phú Thọ cần được xử lý sạch.</p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-forest-950/5 shadow-md">
            <span className="text-xs font-medium text-charcoal-500">Đất canh tác thoái hóa</span>
            <div className="my-3">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-amber-600 tabular-nums">120.000</span>
              <span className="text-xs text-charcoal-500 ml-1 font-semibold">Héc-ta</span>
            </div>
            <p className="text-xs text-charcoal-500 leading-relaxed">Đất đồi dốc trung du bị chua hóa do lạm dụng phân vô cơ nhiều năm.</p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-forest-950/5 shadow-md">
            <span className="text-xs font-medium text-charcoal-500">Lò nhiệt phân Syngas</span>
            <div className="my-3">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-forest-800 tabular-nums">80%</span>
              <span className="text-xs text-charcoal-500 ml-1 font-semibold">Tự Nuôi Lò</span>
            </div>
            <p className="text-xs text-charcoal-500 leading-relaxed">Thu hồi tuần hoàn khí sinh khối tự đốt sấy, tiết kiệm tối đa chất đốt.</p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-forest-950/5 shadow-md">
            <span className="text-xs font-medium text-charcoal-500">Giá than lọc nước</span>
            <div className="my-3">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-forest-950 tabular-nums">1/3</span>
              <span className="text-xs text-forest-700 ml-1 font-semibold">Thị Trường</span>
            </div>
            <p className="text-xs text-charcoal-500 leading-relaxed">Chỉ 12.000 đến 15.000đ/kg than hoạt tính xử lý nước thải công nghiệp.</p>
          </div>
        </div>
      </section>

      {/* 4. THE PROBLEM: NỖI ĐAU THỰC TRẠNG (ASYMMETRIC 2-COLUMN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-forest-950/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Real survey infographic from docx */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-forest-950 tracking-tight">
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

            {/* Right: Concrete pain points */}
            <div className="lg:col-span-5 space-y-3">
              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-chalk-200 space-y-1">
                <div className="flex items-center gap-2 text-red-700 font-bold text-xs sm:text-sm">
                  <Flame className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                  <span>Đốt bỏ thô sơ</span>
                </div>
                <p className="text-xs text-charcoal-600 pl-6">
                  Ô nhiễm khói bụi khí quyển, lãng phí sinh khối và nguy cơ bị phạt hành chính môi trường.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-chalk-200 space-y-1">
                <div className="flex items-center gap-2 text-amber-700 font-bold text-xs sm:text-sm">
                  <Factory className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                  <span>Chôn lấp tốn kém</span>
                </div>
                <p className="text-xs text-charcoal-600 pl-6">
                  Chi phí xử lý rác từ 500.000đ đến 1.000.000đ cho mỗi tấn, chiếm dụng diện tích mặt bằng sản xuất.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-chalk-200 space-y-1">
                <div className="flex items-center gap-2 text-charcoal-800 font-bold text-xs sm:text-sm">
                  <RefreshCw className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                  <span>Ủ Compost truyền thống</span>
                </div>
                <p className="text-xs text-charcoal-600 pl-6">
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
          <h2 className="text-3xl font-black text-forest-950 mt-2 tracking-tight">
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
          <div className="p-5 rounded-2xl bg-white border border-forest-950/5 shadow-xs space-y-1.5">
            <span className="font-mono text-xs font-bold text-forest-700 block">01 / THU GOM 0 ĐỒNG</span>
            <h4 className="font-bold text-forest-950 text-sm">Thu gom từ 60 cơ sở chế biến</h4>
            <p className="text-xs text-charcoal-500">Giúp nhà máy giải quyết 100% rác thải với chi phí tối thiểu.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-forest-950/5 shadow-xs space-y-1.5">
            <span className="font-mono text-xs font-bold text-forest-700 block">02 / SƠ CHẾ & SẤY KHÔ</span>
            <h4 className="font-bold text-forest-950 text-sm">Hạ độ ẩm dưới 10%</h4>
            <p className="text-xs text-charcoal-500">Dùng nhiệt dư của khí Syngas sấy khô bã chè tự động.</p>
          </div>

          <div className="p-5 rounded-2xl bg-forest-950 text-white shadow-md space-y-1.5">
            <span className="font-mono text-xs font-bold text-forest-300 block">03 / NHIỆT PHÂN CHẬM</span>
            <h4 className="font-bold text-white text-sm">Dải nhiệt 350°C đến 450°C</h4>
            <p className="text-xs text-forest-200/80">Lò yếm khí thu hồi Biochar xốp vi mô và khí Syngas tự nuôi nhiệt.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-forest-950/5 shadow-xs space-y-1.5">
            <span className="font-mono text-xs font-bold text-forest-700 block">04 / PHỐI TRỘN VI SINH</span>
            <h4 className="font-bold text-forest-950 text-sm">Chủng Bacillus & Trichoderma</h4>
            <p className="text-xs text-charcoal-500">Hoạt hóa thành 3 dòng: Biochar, Phân vi sinh và Than hoạt tính.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-forest-950/5 shadow-xs space-y-1.5">
            <span className="font-mono text-xs font-bold text-forest-700 block">05 / BÓN CHO ĐẤT CHÈ</span>
            <h4 className="font-bold text-forest-950 text-sm">Cải tạo đất chua đồi dốc</h4>
            <p className="text-xs text-charcoal-500">Cung ứng vật tư xanh rẻ hơn 20 đến 30% cho bà con nông dân.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-forest-950/5 shadow-xs space-y-1.5">
            <span className="font-mono text-xs font-bold text-forest-700 block">06 / KHÉP CHU TRÌNH</span>
            <h4 className="font-bold text-forest-950 text-sm">Búp chè chất lượng cao</h4>
            <p className="text-xs text-charcoal-500">Chè đạt chuẩn VietGAP/OCOP phục vụ thị trường và xuất khẩu.</p>
          </div>
        </div>
      </section>

      {/* 6. FEATURED PRODUCTS (ASYMMETRIC BENTO GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black text-forest-950 tracking-tight">
              Các Dòng Sản Phẩm Cốt Lõi
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-500 mt-0.5">
              Tối ưu hóa giá trị từ một nguồn nguyên liệu bã chè Phú Thọ.
            </p>
          </div>

          <button
            onClick={() => setActivePage('shop')}
            className="mt-3 sm:mt-0 text-xs font-bold text-forest-800 hover:text-forest-950 flex items-center gap-1"
          >
            Xem toàn bộ cửa hàng <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
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
                  <span className="text-2xl font-black font-mono text-forest-950 tabular-nums">
                    {featuredProduct.basePrice.toLocaleString()} đ
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => onSelectProduct(featuredProduct)}
                    className="px-4 py-2 rounded-full border border-chalk-300 text-charcoal-800 hover:bg-chalk-50 text-xs font-bold transition btn-press"
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
                    className="px-4 py-2 rounded-full bg-forest-950 hover:bg-forest-900 text-white text-xs font-bold shadow-md transition btn-press"
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
                  <div className="mt-2 font-mono text-sm font-black text-forest-950 tabular-nums">
                    {p.basePrice.toLocaleString()} đ <span className="text-[10px] font-sans font-normal text-charcoal-400">/ {p.priceUnit}</span>
                  </div>
                </div>

                <ChevronRight className="w-5 h-5 text-charcoal-300 group-hover:text-forest-800 group-hover:translate-x-0.5 transition shrink-0" />
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
          <h2 className="text-3xl font-black text-forest-950 tracking-tight">
            Lợi Thế Vượt Trội Của Biochar Bã Chè
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
            So sánh trực quan giữa dự án và các giải pháp cải tạo đất thông thường.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-forest-950/5 overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#f3f1eb] text-charcoal-700">
                <th className="p-4 sm:p-5 font-bold">Tiêu chí so sánh</th>
                <th className="p-4 sm:p-5 font-black text-forest-950 bg-forest-100/70 border-x border-forest-300">
                  Biochar Bã Chè (Đội Hùng Vương)
                </th>
                <th className="p-4 sm:p-5 font-semibold">Phân vô cơ (NPK)</th>
                <th className="p-4 sm:p-5 font-semibold">Vôi bột cải tạo đất</th>
                <th className="p-4 sm:p-5 font-semibold">Biochar Vỏ Trấu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-chalk-200">
              <tr>
                <td className="p-4 sm:p-5 font-bold text-charcoal-800">Chi phí nguyên liệu</td>
                <td className="p-4 sm:p-5 font-bold text-forest-900 bg-forest-50/40 border-x border-forest-200">
                  Cực thấp (0 đồng nguyên liệu bã chè)
                </td>
                <td className="p-4 sm:p-5 text-charcoal-500">Giá cao và biến động theo dầu mỏ</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Rẻ nhưng tốn công bón nhiều lần</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Chi phí vận chuyển vỏ trấu cao</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-charcoal-800">Hiệu quả cải tạo đất</td>
                <td className="p-4 sm:p-5 font-bold text-forest-900 bg-forest-50/40 border-x border-forest-200">
                  Tác động kép: Nâng pH, giữ ẩm, kháng nấm
                </td>
                <td className="p-4 sm:p-5 text-charcoal-500">Nhanh nhưng làm chai cứng đất</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Chỉ hạ chua tức thời, không bù mùn</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Giữ ẩm tốt, hàm lượng silica cao</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-charcoal-800">Đa dạng hóa sản phẩm</td>
                <td className="p-4 sm:p-5 font-bold text-forest-900 bg-forest-50/40 border-x border-forest-200">
                  Biochar bón đất, Phân vi sinh, Than lọc nước
                </td>
                <td className="p-4 sm:p-5 text-charcoal-500">Chỉ bổ sung dinh dưỡng vô cơ</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Chỉ khử chua đất</td>
                <td className="p-4 sm:p-5 text-charcoal-500">Chủ yếu xuất thô hoặc giá thể</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-charcoal-800">Tín chỉ Carbon & ESG</td>
                <td className="p-4 sm:p-5 font-bold text-forest-900 bg-forest-50/40 border-x border-forest-200">
                  Cố định Carbon trên 100 năm, chuẩn Net Zero
                </td>
                <td className="p-4 sm:p-5 text-charcoal-500">Phát thải lớn trong sản xuất</td>
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
          <h2 className="text-3xl font-black text-forest-950 tracking-tight">
            Đội Ngũ Sáng Lập ĐH Hùng Vương
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
            Sinh viên K22, K24 và các chuyên gia cố vấn khoa học nông nghiệp đồng hành.
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

              <p className="text-[11px] text-charcoal-600 mt-3 pt-3 border-t border-chalk-200 italic leading-relaxed">
                "{member.bio}"
              </p>
            </div>
          ))}
        </div>

        {/* Advisors */}
        <div className="mt-8 bg-[#f3f1eb] rounded-3xl p-6 sm:p-8 border border-forest-950/5">
          <div className="flex items-center gap-2 text-forest-950 font-bold text-xs uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-amber-500" strokeWidth={1.75} />
            BAN GIẢNG VIÊN CỐ VẤN KHOA HỌC & CÔNG NGHỆ
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advisors.map((adv, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-forest-950/5 shadow-xs">
                <span className="font-bold text-forest-950 text-sm block">{adv.name}</span>
                <span className="text-xs font-semibold text-forest-700 block">{adv.title}</span>
                <span className="text-[11px] text-charcoal-400 block">{adv.institution}</span>
                <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION (NO GIMMICKS, CLEAN PROPOSITION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-forest-900">
          <div className="space-y-3 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Đồng Hành Phát Triển Nông Nghiệp Xanh Phú Thọ
            </h3>
            <p className="text-forest-200 text-xs sm:text-sm leading-relaxed">
              Đăng ký tham gia chương trình <strong>Đổi phế phẩm lấy vật tư</strong> để giải phóng rác thải bã chè miễn phí, hoặc liên hệ nhận mẫu thử nghiệm Biochar cho diện tích vườn chè của bạn.
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
