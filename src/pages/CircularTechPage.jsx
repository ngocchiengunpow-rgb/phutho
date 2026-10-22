import React from 'react';

export default function CircularTechPage({ setActivePage }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Hero Header */}
      <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-forest-900">
        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-forest-800/80 text-forest-200 text-xs font-semibold border border-forest-700/60">
            CÔNG NGHỆ NHIỆT PHÂN CHẬM & KINH TẾ TUẦN HOÀN
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
            Mô Hình: Từ Đất Tổ, Trả Lại Đất Tổ
          </h1>
          <p className="text-forest-200 text-xs sm:text-sm leading-relaxed">
            Dự án ứng dụng công nghệ nhiệt phân chậm (Slow Pyrolysis) ở dải nhiệt 350°C đến 450°C trong môi trường yếm khí khép kín, biến bã chè phế phẩm thành Than sinh học cải tạo đất Biochar-Microbe và Than hoạt tính lọc nước, cô lập bền vững 2,5 – 3 tấn CO₂e cho mỗi tấn thành phẩm.
          </p>
        </div>
      </div>

      {/* 1. SƠ ĐỒ CHUỖI GIÁ TRỊ TUẦN HOÀN */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-forest-950 tracking-tight">
            Chu Trình Tuần Hoàn Sinh Khối Chè Phú Thọ
          </h2>
          <p className="text-charcoal-500 text-xs sm:text-sm mt-1">
            Khép kín 100% dòng vật chất và năng lượng tại chỗ: không phát sinh chất thải thứ cấp ra môi trường.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-forest-950/5">
          <img
            src="/images/diagram_circular_model.jpg"
            alt="Mô hình kinh tế tuần hoàn địa phương"
            className="w-full rounded-2xl max-h-[520px] object-contain mx-auto"
          />
        </div>
      </section>

      {/* 2. CÔNG NGHỆ LÒ NHIỆT PHÂN CẢI TIẾN & KHÍ SYNGAS */}
      <section className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 border border-forest-900 space-y-8 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              ĐỘT PHÁ CÔNG NGHỆ NỘI ĐỊA CẢI TIẾN
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Cụm Lò Nhiệt Phân Yếm Khí Tuần Hoàn Khí Syngas Tự Nuôi Lò
            </h2>
            <p className="text-forest-200 text-xs sm:text-sm leading-relaxed">
              Dự án đầu tư hệ thống lò nhiệt phân nội địa cơ bản có buồng sấy, sau đó bổ sung 2 module cải tiến then chốt dưới sự hướng dẫn của Viện Nghiên Cứu Chè và các kỹ sư: (1) Hệ thống ống dẫn thu hồi khí gas sinh học (Syngas) tự đốt nuôi lò; và (2) Hệ thống phun trộn chủng vi sinh vật đối kháng Trichoderma ngay ở chặng làm nguội đầu ra.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-forest-900/60 border border-forest-800 text-xs">
                <span className="font-bold text-white block mb-0.5">Tiết kiệm 80% chi phí chất đốt (Vòng lặp Syngas):</span>
                <p className="text-forest-200/80 leading-relaxed">
                  Thu hồi toàn bộ dòng khí gas sinh học (Syngas) sinh ra từ quá trình nhiệt phân yếm khí, quay vòng đốt ngược lại để tự nuôi lò và dẫn nhiệt dư sấy gối đầu bã chè ẩm, giúp kéo giảm tổng chi phí vận hành xuống 40% so với đối thủ.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-forest-900/60 border border-forest-800 text-xs">
                <span className="font-bold text-white block mb-0.5">Dải nhiệt độ kiểm soát tự động 350°C – 450°C:</span>
                <p className="text-forest-200/80 leading-relaxed">
                  Hệ thống cảm biến nhiệt và bảng điều khiển điện tử đảm bảo lò không bị "than sống" hoặc "cháy thành tro". Cấu trúc cellulose phân hủy hoàn toàn trong khi khung Lignin cứng của mô sợi bã chè được giữ lại, tạo diện tích bề mặt riêng BET &gt; 400 m²/g.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-forest-900/60 border border-forest-800 text-xs">
                <span className="font-bold text-white block mb-0.5">Xử lý hạ ẩm bã chè tươi trong vòng 12 giờ:</span>
                <p className="text-forest-200/80 leading-relaxed">
                  Bã chè tươi ẩm &gt;60% - 70% được đưa qua máy vắt ép trục vít hạ ẩm xuống &lt;35% rồi sấy nhiệt dư gối đầu xuống &lt;10% trước khi nạp qua trục vít tự động vào lò, ngăn ngừa hoàn toàn nguy cơ lên men chua thối.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="bg-forest-900/50 p-6 rounded-3xl border border-forest-800 space-y-4">
              <h4 className="font-bold text-xs text-forest-200 uppercase tracking-wider">
                Thông Số Kỹ Thuật Xưởng Pilot Thực Nghiệm (Thanh Sơn)
              </h4>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-forest-950/80 border border-forest-800">
                  <div className="flex justify-between font-bold text-white">
                    <span>Năng lực nạp liệu đầu vào:</span>
                    <span className="text-emerald-400 font-semibold">60 kg bã chè / giờ</span>
                  </div>
                  <p className="text-forest-200/80 mt-1">
                    Chế độ vận hành: 5 tiếng/ngày (4 tiếng sản xuất Than sinh học và 1 tiếng nung hoạt hóa Than lọc nước), 6 ngày/tuần.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-forest-950/80 border border-forest-800">
                  <div className="flex justify-between font-bold text-white">
                    <span>Hiệu suất thu hồi thành phẩm:</span>
                    <span className="text-emerald-400 font-semibold">~ 50% (30 kg đầu ra/giờ)</span>
                  </div>
                  <p className="text-forest-200/80 mt-1">
                    Sản lượng đạt ~120 kg thành phẩm/ngày trong 4 giờ sản xuất chính; sản lượng dự kiến toàn xưởng Pilot đạt <strong>43,2 tấn thành phẩm/năm</strong>.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-forest-950/80 border border-forest-800">
                  <div className="flex justify-between font-bold text-white">
                    <span>Vốn đầu tư thiết bị ban đầu (Capex):</span>
                    <span className="text-amber-300 font-semibold">100.000.000 VNĐ</span>
                  </div>
                  <p className="text-forest-200/80 mt-1">
                    Gồm cụm lò cải tiến Syngas (60tr), máy vắt ép trục vít (20tr), máy trộn nguyên liệu vi sinh (10tr) và máy đóng gói bán tự động (10tr).
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-forest-950 border border-forest-800 text-xs text-forest-200">
                <strong>Hiệu quả kinh tế & hoàn vốn:</strong> Tổng vốn 300 triệu đ, chi phí vận hành năm 1 chỉ 200 triệu đ nhờ Syngas tự nuôi lò, doanh thu 691,2 triệu đ, cán mốc hoàn vốn chỉ sau ~9 tháng.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SƠ ĐỒ DANH MỤC VÀ QUẢN TRỊ RỦI RO */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
            HỒ SƠ AN TOÀN VẬN HÀNH
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-forest-950 tracking-tight mt-2">
            Sơ Đồ Danh Mục & Quản Trị Rủi Ro Dự Án
          </h2>
          <p className="text-charcoal-500 text-xs sm:text-sm mt-1">
            Đánh giá xác suất và giải pháp kiểm soát 3 nhóm rủi ro: Nguyên liệu thô, Kỹ thuật công nghệ, và Thị trường.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-forest-950/5">
          <img
            src="/images/diagram_risk_management.jpg"
            alt="Sơ đồ danh mục và quản trị rủi ro dự án"
            className="w-full rounded-2xl max-h-[580px] object-contain mx-auto"
          />
        </div>
      </section>

      {/* 4. TUYÊN BỐ GIÁ TRỊ CỐT LÕI */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-forest-950 tracking-tight">
            Tuyên Bố Giá Trị Cốt Lõi Dự Án
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
            Mang lại lợi ích thiết thực và đo lường được cho các đối tác trong chuỗi tuần hoàn Đất Tổ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-md border border-forest-950/5 space-y-3">
            <span className="text-xs font-bold text-forest-800 uppercase tracking-wider block">
              Dành Cho
            </span>
            <h3 className="font-bold text-forest-950 text-base">Nhà Máy & HTX Chế Biến Chè</h3>
            <ul className="space-y-2 text-xs text-charcoal-600">
              <li className="flex items-start gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Giải quyết 100% bãi rác bã chè phế phẩm, tránh nguy cơ lên men thối trong 24-48h.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Tiết kiệm 500.000đ – 1.000.000đ chi phí chôn lấp rác cho mỗi tấn bã chè.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Được hưởng mức chiết khấu ưu đãi từ 15% - 20% khi mua Than sinh học bón lại đồi chè.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-md border border-forest-950/5 space-y-3">
            <span className="text-xs font-bold text-forest-800 uppercase tracking-wider block">
              Dành Cho
            </span>
            <h3 className="font-bold text-forest-950 text-base">Bà Con Nông Dân & Nhà Vườn</h3>
            <ul className="space-y-2 text-xs text-charcoal-600">
              <li className="flex items-start gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Hạ chua êm dịu, đưa độ pH đất đồi từ &lt; 4.0 về dải tối ưu 4.8 - 5.5 cho cây chè.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Cắt giảm 20% - 30% chi phí phân bón vô cơ NPK đắt đỏ nhờ khả năng giữ dinh dưỡng.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Chủng vi sinh bản địa đối kháng Trichoderma tiêu diệt nấm thối rễ, kích rễ tơ bung trắng.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-md border border-forest-950/5 space-y-3">
            <span className="text-xs font-bold text-forest-800 uppercase tracking-wider block">
              Dành Cho
            </span>
            <h3 className="font-bold text-forest-950 text-base">Môi Trường & Cam Kết Net Zero</h3>
            <ul className="space-y-2 text-xs text-charcoal-600">
              <li className="flex items-start gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Khóa chặt hơn 50% carbon hữu cơ trong đất, giảm phát thải 2,5 – 3 tấn CO₂e / tấn Biochar.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Triệt tiêu khí mê-tan (CH₄) và CO₂ phát thải tự do khi phế phẩm chè bị vứt bỏ bãi rác.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-700 font-bold">•</span>
                <span>Đón đầu thương mại hóa tín chỉ carbon và hỗ trợ nông sản vượt rào thuế carbon CBAM sang EU.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <div className="text-center pt-4">
        <button
          onClick={() => setActivePage('b2b')}
          className="px-8 py-3.5 rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold text-xs sm:text-sm shadow-md transition btn-press"
        >
          Liên Kết Tham Gia Chuỗi Cung Ứng Tuần Hoàn
        </button>
      </div>
    </div>
  );
}
