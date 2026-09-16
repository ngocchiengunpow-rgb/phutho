import React from 'react';
import { 
  Leaf, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Factory, 
  TrendingUp, Award, Droplet, Flame, Users, ChevronRight, Star, 
  ExternalLink, Layers, RefreshCw, BarChart3, HelpCircle 
} from 'lucide-react';
import { products } from '../data/products';
import { teamMembers, advisors, startupMetrics } from '../data/team';
import BiocharCalculator from '../components/BiocharCalculator';

export default function HomePage({ setActivePage, onSelectProduct, onAddToCart }) {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-eco text-white pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Background tea hills image with gradient overlay */}
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
          <img
            src="/images/hero_tea_hills.jpg"
            alt="Đồi chè Phú Thọ"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-tea-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-tea-300">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Ý TƯỞNG KHỞI NGHIỆP SINH VIÊN HÙNG VƯƠNG 2026</span>
              </div>

              {/* Title & Slogan */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Than Sinh Học Từ Bã Chè <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tea-300 via-tea-200 to-amber-200">
                  "Từ Đất Tổ – Trả Lại Đất Tổ"
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
                Giải pháp kinh tế tuần hoàn khép kín tiên phong tại Phú Thọ: Chuyển hóa hàng chục nghìn tấn bã chè phế phẩm thành <strong>Than sinh học (Biochar)</strong> xốp vi mô cải tạo đất chua thoái hóa, phân vi sinh bản địa và than hoạt tính lọc nước sạch – mở ra cánh cửa đón đầu <strong>Tín chỉ Carbon & Net Zero 2050</strong>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3.5 pt-2">
                <button
                  onClick={() => setActivePage('shop')}
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-tea-500 to-tea-600 hover:from-tea-400 hover:to-tea-500 text-slate-950 font-extrabold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-tea-950/50 hover:shadow-xl transition active:scale-95"
                >
                  <Leaf className="w-5 h-5 text-slate-950" />
                  Khám Phá Sản Phẩm
                </button>

                <button
                  onClick={() => setActivePage('b2b')}
                  className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-sm flex items-center gap-2 transition active:scale-95"
                >
                  <Factory className="w-5 h-5 text-tea-300" />
                  Đổi Phế Phẩm Lấy Vật Tư
                </button>

                <button
                  onClick={() => setActivePage('trace')}
                  className="px-5 py-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-900/80 text-tea-200 font-semibold text-sm border border-tea-700/50 flex items-center gap-2 transition"
                >
                  Quét QR Lô Hàng
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-slate-300">
                <div>
                  <span className="block font-bold text-lg text-white">0 Đồng</span>
                  <span>Nguyên liệu đầu vào</span>
                </div>
                <div>
                  <span className="block font-bold text-lg text-amber-300">&gt; 100 Năm</span>
                  <span>Cố định Carbon trong đất</span>
                </div>
                <div>
                  <span className="block font-bold text-lg text-tea-300">Rẻ hơn 30%</span>
                  <span>So với vật tư truyền thống</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-3xl p-3 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                <img
                  src="/images/product_biochar.jpg"
                  alt="Biochar Bã Chè Đất Tổ"
                  className="w-full rounded-2xl object-cover shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-2xl shadow-xl max-w-xs text-xs text-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-tea-400 font-bold">
                    <Sparkles className="w-4 h-4" />
                    100% Phế Phẩm Bã Chè Phú Thọ
                  </div>
                  <p className="text-slate-300">
                    Cấu trúc vi xốp diện tích bề mặt &gt;400 m²/g, giữ ẩm và phục hồi độ phì nhiêu đồi chè cằn cỗi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & KEY METRICS (THE NUMBERS BEHIND THE IDEA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phế phẩm bã chè</span>
            <div className="my-2">
              <span className="text-3xl sm:text-4xl font-black text-slate-900">27.000</span>
              <span className="text-sm font-semibold text-tea-700 ml-1">Tấn/Năm</span>
            </div>
            <p className="text-xs text-slate-500">Từ 60 nhà máy và 15 HTX chế biến tại Phú Thọ cần được xử lý sạch.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Đất canh tác chua hóa</span>
            <div className="my-2">
              <span className="text-3xl sm:text-4xl font-black text-amber-600">120.000</span>
              <span className="text-sm font-semibold text-slate-700 ml-1">Héc-ta</span>
            </div>
            <p className="text-xs text-slate-500">Đất đồi dốc trung du bị chua (pH &lt; 4.5), chai cứng do lạm dụng phân vô cơ.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Lò nhiệt phân Syngas</span>
            <div className="my-2">
              <span className="text-3xl sm:text-4xl font-black text-tea-700">80%</span>
              <span className="text-sm font-semibold text-slate-700 ml-1">Tự Tiết Kiệm</span>
            </div>
            <p className="text-xs text-slate-500">Thu hồi tuần hoàn khí gas sinh khối tự nuôi lò nung, không phụ thuộc nhiên liệu ngoài.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Giá than lọc nước</span>
            <div className="my-2">
              <span className="text-3xl sm:text-4xl font-black text-slate-900">1/3</span>
              <span className="text-sm font-semibold text-tea-700 ml-1">Thị Trường</span>
            </div>
            <p className="text-xs text-slate-500">Chỉ 12.000 - 15.000đ/kg than hoạt tính xử lý nước thải công nghiệp và giếng khoan.</p>
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM: NỖI ĐAU THỰC TRẠNG TẠI PHÚ THỌ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-tea-700 bg-tea-100 px-3 py-1 rounded-full">
            NỖI ĐAU THỊ TRƯỜNG & MÔI TRƯỜNG
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
            Bã Chè Đang Là "Gánh Nặng Rác Thải" Của Ngành Chè Đất Tổ
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Tại Phú Thọ - cái nôi của ngành chè miền Bắc, lượng bã chè xả ra sau chế biến tinh khô chiếm 10% - 15% tổng sản lượng búp tươi, gây tổn thất lớn về chi phí và ô nhiễm môi trường.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Infographic image from docx */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-100">
            <img
              src="/images/diagram_waste_problem.jpg"
              alt="Thực trạng xử lý bã chè thải ra tại Phú Thọ"
              className="w-full rounded-2xl object-contain shadow-xs"
            />
            <p className="text-center text-xs text-slate-400 mt-3 italic">
              * Khảo sát thực trạng tại 60 cơ sở chế biến chè lớn tại Thanh Sơn, Tân Sơn, Đoan Hùng.
            </p>
          </div>

          {/* Detailed breakdown of 3 traditional pain points */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-red-50/80 border border-red-200">
              <div className="flex items-center gap-2 text-red-800 font-bold text-base">
                <Flame className="w-5 h-5 text-red-600" />
                1. Đốt bỏ thô sơ
              </div>
              <p className="text-xs sm:text-sm text-red-900/80 mt-1">
                Gây khói bụi ô nhiễm không khí nặng nề, lãng phí tài nguyên sinh khối và khiến doanh nghiệp đối mặt với các khoản phạt hành chính môi trường nghiêm khắc.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
                <Factory className="w-5 h-5 text-amber-700" />
                2. Chôn lấp tốn kém
              </div>
              <p className="text-xs sm:text-sm text-amber-900/80 mt-1">
                Chi phí bốc xếp và thuê bãi xử lý rác công nghiệp dao động từ <strong>500.000đ – 1.000.000đ/tấn</strong>, chiếm dụng diện tích mặt bằng sản xuất quý giá của nhà máy.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-base">
                <RefreshCw className="w-5 h-5 text-slate-600" />
                3. Ủ Compost truyền thống
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Mất từ 2 – 3 tháng, bốc mùi hôi thối, sinh khí mê-tan ($CH_4$) độc hại gấp 28 lần $CO_2$ và dễ làm nấm bệnh vùng rễ lây lan ngược lại vườn chè.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE SOLUTION: SƠ ĐỒ KINH TẾ TUẦN HOÀN 6 BƯỚC */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-tea-400 bg-tea-900/60 px-3.5 py-1.5 rounded-full border border-tea-700">
              GIẢI PHÁP ĐỘT PHÁ CỦA CHÚNG TÔI
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
              Mô Hình Kinh Tế Tuần Hoàn Khép Kín Địa Phương
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Dự án biến phế phẩm bã chè thành chuỗi giá trị tuần hoàn 100%: Từ búp chè Đất Tổ thu hoạch, qua nhà máy, chế biến thành biochar và bón trở lại nuôi dưỡng đồi chè xanh.
            </p>
          </div>

          <div className="bg-slate-800/80 rounded-3xl p-4 sm:p-8 border border-slate-700 shadow-2xl mb-12">
            <img
              src="/images/diagram_circular_model.jpg"
              alt="Sơ đồ chuỗi giá trị tuần hoàn khép kín tại Phú Thọ"
              className="w-full rounded-2xl object-contain max-h-[500px] mx-auto bg-white/5 p-2"
            />
          </div>

          {/* 6 Steps breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 border border-slate-700/60 p-5 rounded-2xl space-y-2">
              <span className="w-8 h-8 rounded-full bg-tea-700 text-white font-bold flex items-center justify-center text-sm">
                1
              </span>
              <h4 className="font-bold text-white text-base">Thu gom nguyên liệu 0đ</h4>
              <p className="text-xs text-slate-300">
                Ký hợp đồng thu gom bã chè tập trung từ 60 cơ sở chế biến tại Thanh Sơn, Tân Sơn, giúp nhà máy giải quyết 100% rác thải.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 p-5 rounded-2xl space-y-2">
              <span className="w-8 h-8 rounded-full bg-tea-700 text-white font-bold flex items-center justify-center text-sm">
                2
              </span>
              <h4 className="font-bold text-white text-base">Sơ chế & Phơi sấy hạ ẩm</h4>
              <p className="text-xs text-slate-300">
                Sử dụng năng lượng dư thừa từ ống khói Syngas để sấy khô bã chè xuống độ ẩm dưới 10%, chuẩn bị cho buồng nhiệt phân.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 p-5 rounded-2xl space-y-2">
              <span className="w-8 h-8 rounded-full bg-tea-700 text-white font-bold flex items-center justify-center text-sm">
                3
              </span>
              <h4 className="font-bold text-white text-base">Nhiệt phân chậm (350°C - 450°C)</h4>
              <p className="text-xs text-slate-300">
                Lò nhiệt phân cải tiến yếm khí kiểm soát oxy, thu hồi Biochar xốp vi mô và khí Syngas tự cấp nhiệt cho hệ thống.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 p-5 rounded-2xl space-y-2">
              <span className="w-8 h-8 rounded-full bg-tea-700 text-white font-bold flex items-center justify-center text-sm">
                4
              </span>
              <h4 className="font-bold text-white text-base">Hoạt hóa & Phối trộn vi sinh</h4>
              <p className="text-xs text-slate-300">
                Tạo 3 phân khúc: Biochar bón đất, Than hoạt tính lọc nước khử phèn và Phân vi sinh bổ sung chủng Bacillus, Trichoderma.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 p-5 rounded-2xl space-y-2">
              <span className="w-8 h-8 rounded-full bg-tea-700 text-white font-bold flex items-center justify-center text-sm">
                5
              </span>
              <h4 className="font-bold text-white text-base">Bón cho đất trồng chè Trung du</h4>
              <p className="text-xs text-slate-300">
                Cung ứng vật tư giá rẻ hơn 20-30% ngược lại cho các đồi chè, khử chua nâng pH, giữ nước và chống rửa trôi phân bón.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 p-5 rounded-2xl space-y-2">
              <span className="w-8 h-8 rounded-full bg-tea-700 text-white font-bold flex items-center justify-center text-sm">
                6
              </span>
              <h4 className="font-bold text-white text-base">Chè chất lượng cao – Khép chu trình</h4>
              <p className="text-xs text-slate-300">
                Đồi chè phát triển xanh tốt, búp mập đều đạt chuẩn VietGAP/OCOP, tạo nguồn nguyên liệu chất lượng cao cho vụ mùa tiếp theo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE PRODUCTS CATALOG WITH ADD-TO-CART */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-tea-700 bg-tea-100 px-3 py-1 rounded-full">
              DANH MỤC THÀNH PHẨM
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
              Các Dòng Sản Phẩm Cốt Lõi Từ Bã Chè
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Đa dạng hóa ứng dụng: Cải tạo đất, Phân vi sinh, Xử lý nước sạch và Bảo vệ thực vật sinh học.
            </p>
          </div>

          <button
            onClick={() => setActivePage('shop')}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-tea-700 hover:text-tea-800"
          >
            Xem tất cả sản phẩm <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col group"
            >
              {/* Image & Badge */}
              <div 
                className="relative aspect-square overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => onSelectProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-tea-800/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-tea-700">
                    {product.categoryName}
                  </span>
                  <h3 
                    onClick={() => onSelectProduct(product)}
                    className="font-bold text-slate-900 text-base leading-snug hover:text-tea-700 cursor-pointer line-clamp-2"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Giá từ ({product.priceUnit})</span>
                    <span className="text-lg font-black text-tea-900">
                      {product.basePrice.toLocaleString()} đ
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectProduct(product)}
                    className="p-2.5 rounded-xl bg-tea-50 hover:bg-tea-100 text-tea-800 font-semibold text-xs transition flex items-center gap-1"
                  >
                    Chi Tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INTERACTIVE BIOCHAR CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BiocharCalculator onAddToCart={onAddToCart} />
      </section>

      {/* 7. USP COMPARISON TABLE: TÍNH ĐỘC ĐÁO SO VỚI THỊ TRƯỜNG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-tea-700 bg-tea-100 px-3 py-1 rounded-full">
            LỢI THẾ CẠNH TRANH ĐỘC NHẤT (USP)
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
            Tại Sao Biochar Bã Chè Vượt Trội Hơn?
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            So sánh trực quan giữa dự án và các giải pháp cải tạo đất hiện có trên thị trường.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-600">
                <th className="p-4 sm:p-5 font-bold">Tiêu chí so sánh</th>
                <th className="p-4 sm:p-5 font-black text-tea-900 bg-tea-100/70 border-x-2 border-tea-600">
                  🌱 Biochar Bã Chè (Đội Hùng Vương)
                </th>
                <th className="p-4 sm:p-5 font-semibold">Phân bón vô cơ (NPK)</th>
                <th className="p-4 sm:p-5 font-semibold">Vôi bột cải tạo đất</th>
                <th className="p-4 sm:p-5 font-semibold">Biochar Trấu (Husk VN)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-4 sm:p-5 font-bold text-slate-700">Chi phí nguyên liệu</td>
                <td className="p-4 sm:p-5 font-bold text-tea-800 bg-tea-50/50 border-x-2 border-tea-600">
                  Cực thấp (0 đồng) – Hợp đồng 60 nhà máy
                </td>
                <td className="p-4 sm:p-5 text-slate-500">Giá cao, phụ thuộc nhập khẩu</td>
                <td className="p-4 sm:p-5 text-slate-500">Rẻ nhưng tốn công bón nhiều lần</td>
                <td className="p-4 sm:p-5 text-slate-500">Vận chuyển vỏ trấu cồng kềnh</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-slate-700">Hiệu quả cải tạo đất</td>
                <td className="p-4 sm:p-5 font-bold text-tea-800 bg-tea-50/50 border-x-2 border-tea-600">
                  Kép: Nâng pH, giữ ẩm x3, tannin kháng nấm
                </td>
                <td className="p-4 sm:p-5 text-slate-500">Nhanh nhưng làm chai cứng đất</td>
                <td className="p-4 sm:p-5 text-slate-500">Chỉ hạ chua tức thời, không bù mùn</td>
                <td className="p-4 sm:p-5 text-slate-500">Tốt, nhưng hàm lượng silica cao</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-slate-700">Đa dạng hóa sản phẩm</td>
                <td className="p-4 sm:p-5 font-bold text-tea-800 bg-tea-50/50 border-x-2 border-tea-600">
                  Xuất sắc: Biochar, Phân vi sinh, Than lọc nước
                </td>
                <td className="p-4 sm:p-5 text-slate-500">Đơn mục tiêu dinh dưỡng</td>
                <td className="p-4 sm:p-5 text-slate-500">Chỉ khử chua</td>
                <td className="p-4 sm:p-5 text-slate-500">Chủ yếu xuất thô hoặc giá thể</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-slate-700">Tín chỉ Carbon & ESG</td>
                <td className="p-4 sm:p-5 font-bold text-tea-800 bg-tea-50/50 border-x-2 border-tea-600">
                  Cố định Carbon &gt;100 năm, chuẩn Net Zero
                </td>
                <td className="p-4 sm:p-5 text-slate-500">Phát thải lớn trong sản xuất</td>
                <td className="p-4 sm:p-5 text-slate-500">Không có tín chỉ</td>
                <td className="p-4 sm:p-5 text-slate-500">Có bán tín chỉ carbon</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-slate-700">Bản sắc Đất Tổ</td>
                <td className="p-4 sm:p-5 font-bold text-tea-800 bg-tea-50/50 border-x-2 border-tea-600">
                  Tuyệt đối: 100% bã chè Phú Thọ Vua Hùng
                </td>
                <td className="p-4 sm:p-5 text-slate-500">Không có yếu tố văn hóa</td>
                <td className="p-4 sm:p-5 text-slate-500">Phổ thông thương mại</td>
                <td className="p-4 sm:p-5 text-slate-500">Tập trung ĐBSCL lúa gạo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. FOUNDING TEAM & ADVISORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-tea-700 bg-tea-100 px-3 py-1 rounded-full">
            ĐỘI THI KHỞI NGHIỆP SINH VIÊN
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
            Đội Ngũ Sáng Lập – Đại Học Hùng Vương
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Sự kết hợp đa ngành giữa Kế toán quản trị tài chính, Ngữ văn truyền thông, Sư phạm Anh hội nhập quốc tế và Cố vấn khoa học nông nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-5 border shadow-sm hover:shadow-md transition text-center flex flex-col items-center justify-between ${
                member.isLeader ? 'border-tea-500 ring-2 ring-tea-500/20 bg-tea-50/30' : 'border-slate-200'
              }`}
            >
              <div>
                <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-2 border-white shadow-md">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                  {member.isLeader && (
                    <span className="absolute bottom-0 inset-x-0 bg-tea-700 text-white text-[9px] font-bold py-0.5">
                      Trưởng Nhóm
                    </span>
                  )}
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">{member.name}</h4>
                <p className="text-[11px] font-semibold text-tea-700 mt-0.5">{member.role}</p>
                <p className="text-[10px] text-slate-400 mt-1">{member.classEdu}</p>
              </div>

              <p className="text-[11px] text-slate-600 mt-3 pt-3 border-t border-slate-100 italic leading-relaxed">
                "{member.bio}"
              </p>
            </div>
          ))}
        </div>

        {/* Advisors */}
        <div className="mt-8 bg-slate-50 rounded-3xl p-6 border border-slate-200">
          <div className="flex items-center gap-2 text-tea-900 font-bold text-sm mb-4">
            <Award className="w-5 h-5 text-amber-500" />
            BAN GIẢNG VIÊN CỐ VẤN KHOA HỌC & CÔNG NGHỆ
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advisors.map((adv, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
                <span className="font-bold text-slate-900 text-sm">{adv.name}</span>
                <span className="block text-xs font-semibold text-tea-700">{adv.title}</span>
                <span className="block text-[11px] text-slate-400">{adv.institution}</span>
                <p className="text-xs text-slate-600 mt-2">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION: ĐỔI PHẾ PHẨM & MẪU THỬ MIỄN PHÍ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-tea-800 via-tea-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-tea-300">
              HÀNH ĐỘNG VÌ ĐẤT TỔ XANH
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Bạn Là Nhà Máy Chế Biến Chè Hay Hộ Nông Dân Trung Du?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Đăng ký tham gia chương trình <strong>"Đổi phế phẩm lấy vật tư"</strong> để được thu gom bã chè miễn phí, hoặc nhận mẫu thử Biochar bón thử nghiệm 1 sào đất đồi chè hoàn toàn miễn phí.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => setActivePage('b2b')}
              className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-tea-900 font-extrabold text-sm shadow-md transition"
            >
              Đăng Ký Liên Kết B2B
            </button>
            <button
              onClick={() => setActivePage('contact')}
              className="px-6 py-3.5 rounded-2xl bg-tea-700 hover:bg-tea-600 text-white font-bold text-sm border border-tea-500 transition"
            >
              Liên Hệ Trưởng Nhóm
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
