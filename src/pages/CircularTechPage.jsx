import React from 'react';
import { 
  RefreshCw, Flame, Wind, Layers, Cpu, ShieldCheck, Factory, 
  Leaf, Award, CheckCircle2, ArrowRight, Gauge, BarChart, Sparkles 
} from 'lucide-react';

export default function CircularTechPage({ setActivePage }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Hero Header */}
      <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-forest-900">
        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-800/80 text-forest-200 text-xs font-semibold border border-forest-700/60">
            <RefreshCw className="w-3.5 h-3.5 text-forest-300" strokeWidth={1.75} />
            CÔNG NGHỆ NHIỆT PHÂN CHẬM & KINH TẾ TUẦN HOÀN
          </span>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
            Mô Hình: Từ Đất Tổ, Trả Lại Đất Tổ
          </h1>
          <p className="text-forest-200 text-xs sm:text-sm leading-relaxed">
            Dự án ứng dụng công nghệ nhiệt phân chậm (Slow Pyrolysis) ở dải nhiệt 350°C đến 450°C trong điều kiện yếm khí khép kín, biến bã chè phế thải thành vật tư giá trị gia tăng cao và cô lập carbon hàng trăm năm trong lòng đất.
          </p>
        </div>
      </div>

      {/* 1. SƠ ĐỒ CHUỖI GIÁ TRỊ TUẦN HOÀN */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-forest-950 tracking-tight">
            Chu Trình Tuần Hoàn Sinh Khối Chè Phú Thọ
          </h2>
          <p className="text-charcoal-500 text-xs sm:text-sm mt-1">
            Khép kín 100% dòng vật chất và dòng năng lượng tại chỗ, không phát thải thứ cấp ra môi trường.
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

      {/* 2. CÔNG NGHỆ LÒ NHIỆT PHÂN NỘI ĐỊA CẢI TIẾN */}
      <section className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 border border-forest-900 space-y-8 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-300">
              ĐỘT PHÁ CÔNG NGHỆ NỘI ĐỊA
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Lò Nhiệt Phân Liên Tục Tự Cấp Nhiệt Khí Syngas
            </h2>
            <p className="text-forest-200 text-xs sm:text-sm leading-relaxed">
              Thay vì chọn lò nhập khẩu đắt đỏ (350 đến 500 triệu VNĐ) khó căn chỉnh với bã chè hạt mịn, nhóm sáng lập lựa chọn thiết kế <strong>Lò cải tiến nội địa (126 triệu VNĐ)</strong> với trục vít nạp liệu chuyên dụng và ống dẫn tuần hoàn khí Syngas.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-forest-900/60 border border-forest-800 text-xs">
                <Flame className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <span className="font-bold text-white block mb-0.5">Tự tuần hoàn năng lượng (Syngas loop):</span>
                  Khí sinh khối thoát ra trong buồng kín được dẫn ngược lại buồng đốt để sấy sơ bộ bã chè và duy trì nhiệt độ lò, giúp tiết kiệm 80% chất đốt.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-forest-900/60 border border-forest-800 text-xs">
                <Gauge className="w-5 h-5 text-forest-300 shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <span className="font-bold text-white block mb-0.5">Kiểm soát nhiệt độ yếm khí 350°C đến 450°C:</span>
                  Dải nhiệt độ vàng giúp bảo toàn khoáng chất vi lượng (N, P, K tự nhiên của chè) và tối đa hóa cấu trúc xốp vi mô (BET trên 400 m2/g).
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-forest-900/60 border border-forest-800 text-xs">
                <Cpu className="w-5 h-5 text-forest-200 shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <span className="font-bold text-white block mb-0.5">Thời gian lưu tối ưu 45 đến 60 phút:</span>
                  Đạt hiệu suất thu hồi biochar lên tới 71% đến 77%, công suất thiết kế 150kg nguyên liệu/giờ, cho ra 80 đến 100kg biochar thành phẩm/ngày.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="bg-forest-900/50 p-6 rounded-3xl border border-forest-800 space-y-4">
              <h4 className="font-bold text-xs text-forest-200 uppercase tracking-wider flex items-center gap-2">
                <BarChart className="w-4 h-4 text-forest-300" strokeWidth={1.75} />
                Bảng So Sánh Hiệu Suất Kỹ Thuật
              </h4>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-forest-950/80 border border-forest-800">
                  <div className="flex justify-between font-bold text-white">
                    <span>1. Thiết bị than hóa cải tiến nội địa:</span>
                    <span className="text-forest-300 font-mono">Hiệu suất ~71%</span>
                  </div>
                  <p className="text-forest-200/80 mt-1">
                    Đặc tính: Tỷ trọng hạt vừa phải, giữ nguyên khoáng chất tự nhiên. Phù hợp nhất cho phối trộn phân vi sinh bón đồi chè và cây ăn quả.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-forest-950/80 border border-forest-800">
                  <div className="flex justify-between font-bold text-white">
                    <span>2. Lò nung yếm khí nhiệt độ cao:</span>
                    <span className="text-forest-300 font-mono">Hiệu suất ~77%</span>
                  </div>
                  <p className="text-forest-200/80 mt-1">
                    Đặc tính: Diện tích bề mặt cực đại (trên 400 m2/g), dung tích hấp thu cation (CEC) cao. Phù hợp làm than hoạt tính lọc nước thải và nước giếng khoan.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-forest-950 border border-forest-800 text-xs text-forest-200">
                💡 <strong>Tiết kiệm vốn đầu tư (Capex):</strong> Dự toán thiết bị cố định chỉ 126.000.000 VNĐ, tổng vốn ban đầu 215.000.000 VNĐ, hoàn toàn an toàn tài chính cho startup sinh viên.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRIPLE VALUE CREATION */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-forest-950 tracking-tight">
            Tuyên Bố Giá Trị Cốt Lõi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-md border border-forest-950/5 space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-black">
              <Factory className="w-5 h-5 text-amber-700" strokeWidth={1.75} />
            </div>
            <h3 className="font-extrabold text-forest-950 text-base">Với Nhà Máy Chế Biến Chè</h3>
            <ul className="space-y-2 text-xs text-charcoal-600">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" strokeWidth={1.75} />
                <span>Giải quyết 100% bãi thải bã chè tại nhà máy, tránh rủi ro phạt môi trường.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" strokeWidth={1.75} />
                <span>Tiết kiệm 500.000đ đến 1.000.000đ chi phí xử lý rác cho mỗi tấn bã chè.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" strokeWidth={1.75} />
                <span>Được ưu đãi giảm 30% khi mua vật tư cải tạo đất cho vùng chè nguyên liệu.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-md border border-forest-950/5 space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center font-black">
              <Leaf className="w-5 h-5 text-forest-700" strokeWidth={1.75} />
            </div>
            <h3 className="font-extrabold text-forest-950 text-base">Với Bà Con Nông Dân</h3>
            <ul className="space-y-2 text-xs text-charcoal-600">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" strokeWidth={1.75} />
                <span>Nâng pH đất chua, giải độc nhôm sắt, giữ ẩm đồi chè suốt mùa khô hạn.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" strokeWidth={1.75} />
                <span>Giảm từ 25% đến 30% lượng phân bón hóa học NPK đắt đỏ mỗi năm.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" strokeWidth={1.75} />
                <span>Tannin tự nhiên của chè giúp rễ kháng nấm, hạn chế bệnh vàng lá thối rễ.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-md border border-forest-950/5 space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center font-black">
              <ShieldCheck className="w-5 h-5 text-forest-700" strokeWidth={1.75} />
            </div>
            <h3 className="font-extrabold text-forest-950 text-base">Với Môi Trường & ESG</h3>
            <ul className="space-y-2 text-xs text-charcoal-600">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" strokeWidth={1.75} />
                <span>Triệt tiêu khí mê-tan sinh ra khi bã chè tự phân hủy tại bãi rác.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" strokeWidth={1.75} />
                <span>Khóa chặt 50% carbon sinh khối vào lòng đất trong hơn 100 năm.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" strokeWidth={1.75} />
                <span>Tạo tiềm năng phát hành Tín chỉ Carbon và đáp ứng tiêu chuẩn CBAM.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <div className="text-center pt-4">
        <button
          onClick={() => setActivePage('b2b')}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-forest-950 hover:bg-forest-900 text-white font-bold text-xs sm:text-sm shadow-lg transition btn-press"
        >
          Hợp Tác Thu Gom Bã Chè & Cung Ứng Vật Tư <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
