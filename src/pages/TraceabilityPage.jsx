import React, { useState } from 'react';
import { 
  QrCode, Search, ShieldCheck, CheckCircle2, Leaf, Award, 
  Clock, MapPin, BarChart3, CloudRain, ExternalLink 
} from 'lucide-react';
import { traceBatches } from '../data/blog';

export default function TraceabilityPage() {
  const [searchCode, setSearchCode] = useState('BATCH-TS2026-01');
  const [activeBatch, setActiveBatch] = useState(traceBatches[0]);

  const handleSearch = (e) => {
    e.preventDefault();
    const found = traceBatches.find(b => b.code.toLowerCase() === searchCode.trim().toLowerCase());
    if (found) {
      setActiveBatch(found);
    } else {
      alert('Không tìm thấy mã lô này. Hãy thử bấm chọn BATCH-TS2026-01 hoặc BATCH-DH2026-08');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="bg-gradient-eco text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-tea-300 text-xs font-semibold">
            <QrCode className="w-3.5 h-3.5 text-amber-400" />
            MINH BẠCH SỐ & TIÊU CHUẨN ESG
          </span>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight">
            Truy Xuất Nguồn Gốc Lô Sản Phẩm Biochar
          </h1>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Mỗi bao sản phẩm Biochar bã chè đều được gắn mã QR định danh độc bản. Khách hàng và đối tác quốc tế có thể dễ dàng quét mã để tra cứu vùng nguyên liệu thu gom, thông số lò than hóa và lượng carbon đã cô lập.
          </p>
        </div>
      </div>

      {/* Interactive Search Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Nhập mã lô sản xuất (VD: BATCH-TS2026-01)..."
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl font-mono text-sm uppercase focus:outline-none focus:ring-2 focus:ring-tea-600"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-2xl bg-tea-800 hover:bg-tea-900 text-white font-bold text-sm shadow-md transition shrink-0"
          >
            Tra Cứu Thông Tin
          </button>
        </form>

        <div className="flex flex-wrap items-center gap-2 mt-4 text-xs text-slate-500">
          <span>Hoặc chọn mã mẫu thử nghiệm:</span>
          {traceBatches.map((b) => (
            <button
              key={b.code}
              type="button"
              onClick={() => {
                setSearchCode(b.code);
                setActiveBatch(b);
              }}
              className={`px-3 py-1 rounded-lg border font-mono font-bold transition ${
                activeBatch.code === b.code
                  ? 'bg-tea-50 border-tea-600 text-tea-800'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {b.code}
            </button>
          ))}
        </div>
      </div>

      {/* Batch Details Card */}
      {activeBatch && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 space-y-8 animate-fadeIn">
          {/* Batch Title bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-tea-700 bg-tea-50 px-2.5 py-1 rounded">
                CHỨNG THỰC LÔ HÀNG ĐẠT CHUẨN
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 font-mono">
                MÃ LÔ: {activeBatch.code}
              </h2>
              <p className="text-sm font-semibold text-slate-600 mt-0.5">
                {activeBatch.product}
              </p>
            </div>

            <div className="text-right">
              <span className="text-xs text-slate-400 block">Ngày xuất xưởng:</span>
              <span className="font-bold text-slate-900 text-base">{activeBatch.productionDate}</span>
            </div>
          </div>

          {/* Grid of details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Origin */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-tea-800 uppercase">
                <MapPin className="w-4 h-4 text-tea-600" />
                Vùng Bã Chè Nguyên Liệu
              </div>
              <p className="font-bold text-slate-900 text-sm">{activeBatch.teaOrigin}</p>
              <p className="text-xs text-slate-500">Khối lượng bã chè tươi thu gom: {activeBatch.rawMaterialWeight}</p>
            </div>

            {/* Pyrolysis Tech */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase">
                <Clock className="w-4 h-4 text-amber-600" />
                Thông Số Lò Nhiệt Phân
              </div>
              <p className="font-bold text-slate-900 text-sm">Nhiệt độ: {activeBatch.pyrolysisTemp}</p>
              <p className="text-xs text-slate-500">Thời gian lưu yếm khí: {activeBatch.retentionTime}</p>
            </div>

            {/* Carbon Offset */}
            <div className="p-5 rounded-2xl bg-tea-900 text-white space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-tea-300 uppercase">
                <CloudRain className="w-4 h-4 text-tea-400" />
                Giá Trị Giảm Phát Thải CO₂e
              </div>
              <p className="font-extrabold text-white text-sm leading-snug">{activeBatch.carbonOffsetKg}</p>
              <p className="text-[11px] text-tea-200">Chuẩn bị cấp mã số tín chỉ carbon cho dự án.</p>
            </div>
          </div>

          {/* Test Results Table */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-tea-700" />
              Kết Quả Kiểm Nghiệm Phòng Lab (TCVN & Chuẩn Quốc Tế IBI)
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Object.entries(activeBatch.testResults).map(([key, val]) => (
                <div key={key} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-400 capitalize block">{key}:</span>
                  <span className="text-sm sm:text-base font-bold text-tea-900 mt-1 block">{val}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-green-50/80 border border-green-200 text-xs text-green-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-700 shrink-0" />
              <span>Đơn vị kiểm nghiệm độc lập: <strong>{activeBatch.certifiedBy}</strong></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
