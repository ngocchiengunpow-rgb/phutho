import React from 'react';
import { 
  RefreshCw, Flame, Wind, Layers, Cpu, ShieldCheck, Factory, 
  Leaf, Award, CheckCircle2, ArrowRight, Gauge, BarChart, Sparkles 
} from 'lucide-react';

export default function CircularTechPage({ setActivePage }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Hero Header */}
      <div className="bg-gradient-eco text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-tea-300 text-xs font-semibold">
            <RefreshCw className="w-3.5 h-3.5 text-tea-400" />
            CÔNG NGHỆ NHIỆT PHÂN CHẬM & KINH TẾ TUẦN HOÀN
          </span>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight">
            Mô Hình "Từ Đất Tổ – Trả Lại Đất Tổ"
          </h1>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Dự án ứng dụng công nghệ nhiệt phân chậm (Slow Pyrolysis) ở dải nhiệt 350°C – 450°C trong điều kiện yếm khí khép kín, biến bã chè phế thải thành vật tư giá trị gia tăng cao và cô lập carbon hàng trăm năm trong lòng đất.
          </p>
        </div>
      </div>

      {/* 1. SƠ ĐỒ CHUỖI GIÁ TRỊ TUẦN HOÀN KHÉP KÍN */}
      <section className="space-y-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-tea-700 bg-tea-100 px-3 py-1 rounded-full">
            SƠ ĐỒ NGUYÊN LÝ
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Chu Trình Tuần Hoàn Sinh Khối Chè Phú Thọ
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Khép kín 100% dòng vật chất và dòng năng lượng tại chỗ, không phát thải thứ cấp ra môi trường.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200">
          <img
            src="/images/diagram_circular_model.jpg"
            alt="Mô hình kinh tế tuần hoàn địa phương"
            className="w-full rounded-2xl max-h-[550px] object-contain mx-auto"
          />
        </div>
      </section>

      {/* 2. CÔNG NGHỆ LÒ NHIỆT PHÂN NỘI ĐỊA CẢI TIẾN */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-tea-400">
              ĐỘT PHÁ CÔNG NGHỆ NỘI ĐỊA
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Hệ Thống Lò Nhiệt Phân Liên Tục Tự Cấp Nhiệt Khí Syngas
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Thay vì chọn lò nhập khẩu đắt đỏ (350 - 500 triệu VNĐ) khó căn chỉnh với bã chè hạt mịn, nhóm sáng lập lựa chọn thiết kế <strong>Lò cải tiến nội địa (126 triệu VNĐ)</strong> với trục vít nạp liệu chuyên dụng và ống dẫn tuần hoàn khí Syngas.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
                <Flame className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Tự tuần hoàn năng lượng (Syngas loop):</span>
                  Khí sinh khối (CO, H2, CH4) thoát ra trong buồng kín được dẫn ngược lại buồng đốt để sấy sơ bộ bã chè và duy trì nhiệt độ lò, giúp tiết kiệm 80% chất đốt so với thông thường.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
                <Gauge className="w-5 h-5 text-tea-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Kiểm soát nhiệt độ yếm khí 350°C - 450°C:</span>
                  Dải nhiệt độ vàng giúp bảo toàn các khoáng chất vi lượng (N, P, K tự nhiên của chè) và tối đa hóa cấu trúc xốp vi mô (BET &gt; 400 m²/g) mà không làm tro hóa sản phẩm.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
                <Cpu className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Thời gian lưu tối ưu 45 - 60 phút:</span>
                  Đạt hiệu suất thu hồi (yield) biochar lên tới 71% - 77%, công suất thiết kế 150kg nguyên liệu/giờ, cho ra 80 - 100kg biochar thành phẩm/ngày.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4">
              <h4 className="font-bold text-sm text-tea-300 uppercase tracking-wider flex items-center gap-2">
                <BarChart className="w-4 h-4 text-tea-400" />
                Bảng So Sánh Hiệu Suất Kỹ Thuật
              </h4>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex justify-between font-bold text-white">
                    <span>1. Thiết bị than hóa cải tiến nội địa:</span>
                    <span className="text-tea-400 font-black">Hiệu suất ~71%</span>
                  </div>
                  <p className="text-slate-400 mt-1">
                    Đặc tính: Tỷ trọng hạt vừa phải, giữ nguyên khoáng chất vi lượng N, P, K tự nhiên. Phù hợp nhất cho phối trộn phân vi sinh bón đồi chè và cây ăn quả.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex justify-between font-bold text-white">
                    <span>2. Lò nung yếm khí nhiệt độ cao:</span>
                    <span className="text-tea-400 font-black">Hiệu suất ~77%</span>
                  </div>
                  <p className="text-slate-400 mt-1">
                    Đặc tính: Diện tích bề mặt cực đại (&gt;400 m²/g), dung tích hấp thu cation (CEC) cao. Phù hợp làm than hoạt tính lọc nước thải KCN và nước giếng khoan.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-tea-950/80 border border-tea-800 text-[11px] text-tea-200">
                💡 <strong>Tiết kiệm chi phí đầu tư (Capex):</strong> Dự toán thiết bị cố định chỉ 126.000.000 VNĐ, tổng vốn ban đầu 215.000.000 VNĐ – hoàn toàn khả thi và an toàn tài chính cho startup sinh viên.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TUYÊN BỐ GIÁ TRỊ 3 TRỤ CỘT (TRIPLE VALUE CREATION) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-tea-700 bg-tea-100 px-3 py-1 rounded-full">
            HIỆU QUẢ KINH TẾ & MÔI TRƯỜNG
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Tuyên Bố Giá Trị Cốt Lõi Cho Các Bên
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-black">
              <Factory className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">Với Nhà Máy Chế Biến Chè</h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tea-600 shrink-0 mt-0.5" />
                <span>Giải quyết 100% bãi thải bã chè tại nhà máy, tránh rủi ro phạt môi trường.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tea-600 shrink-0 mt-0.5" />
                <span>Tiết kiệm 500.000đ – 1.000.000đ chi phí xử lý rác cho mỗi tấn bã chè xả ra.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tea-600 shrink-0 mt-0.5" />
                <span>Được ưu đãi giảm 30% khi mua vật tư cải tạo đất cho vùng chè nguyên liệu.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-tea-100 text-tea-800 flex items-center justify-center font-black">
              <Leaf className="w-6 h-6 text-tea-700" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">Với Bà Con Nông Dân</h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tea-600 shrink-0 mt-0.5" />
                <span>Nâng pH đất chua, giải độc nhôm sắt, giữ ẩm đồi chè dốc suốt mùa khô hạn.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tea-600 shrink-0 mt-0.5" />
                <span>Giảm từ 25% – 30% lượng phân bón hóa học NPK đắt đỏ mỗi năm.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tea-600 shrink-0 mt-0.5" />
                <span>Tannin tự nhiên của chè giúp rễ kháng nấm, hạn chế bệnh vàng lá thối rễ.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-black">
              <ShieldCheck className="w-6 h-6 text-blue-700" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">Với Môi Trường & ESG</h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tea-600 shrink-0 mt-0.5" />
                <span>Triệt tiêu lượng khí mê-tan ($CH_4$) sinh ra khi bã chè thối rữa tại bãi rác.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tea-600 shrink-0 mt-0.5" />
                <span>Khóa chặt 50% carbon sinh khối vào lòng đất trong hơn 100 năm.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tea-600 shrink-0 mt-0.5" />
                <span>Tạo tiềm năng phát hành Tín chỉ Carbon (Carbon Credits) và đáp ứng CBAM.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <div className="text-center pt-8">
        <button
          onClick={() => setActivePage('b2b')}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-tea-800 hover:bg-tea-900 text-white font-extrabold text-base shadow-xl shadow-tea-900/30 transition"
        >
          Hợp Tác Thu Gom Bã Chè & Cung Ứng Vật Tư <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
