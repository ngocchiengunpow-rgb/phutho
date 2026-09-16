import React, { useState } from 'react';
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
      alert('Không tìm thấy mã lô này. Hãy thử chọn BATCH-TS2026-01 hoặc BATCH-DH2026-08');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-forest-900">
        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-forest-800/80 text-forest-200 text-xs font-semibold border border-forest-700/60">
            MINH BẠCH SỐ & TIÊU CHUẨN ESG
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
            Truy Xuất Nguồn Gốc Lô Sản Phẩm Biochar
          </h1>
          <p className="text-forest-200 text-xs sm:text-sm leading-relaxed">
            Mỗi bao sản phẩm Biochar bã chè đều được gắn mã QR định danh độc bản. Khách hàng và đối tác có thể dễ dàng quét mã để tra cứu vùng nguyên liệu thu gom, thông số lò than hóa và lượng carbon đã cô lập.
          </p>
        </div>
      </div>

      {/* Interactive Search Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-forest-950/5">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Nhập mã lô sản xuất (VD: BATCH-TS2026-01)..."
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              className="w-full px-4 py-3 bg-[#faf8f5] border border-chalk-300 rounded-2xl text-xs sm:text-sm uppercase focus:outline-none focus:ring-2 focus:ring-forest-800"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold text-xs sm:text-sm shadow-md transition shrink-0 btn-press"
          >
            Tra Cứu Thông Tin
          </button>
        </form>

        <div className="flex flex-wrap items-center gap-2 mt-4 text-xs text-charcoal-500">
          <span>Hoặc bấm mã mẫu thử nghiệm:</span>
          {traceBatches.map((b) => (
            <button
              key={b.code}
              type="button"
              onClick={() => {
                setSearchCode(b.code);
                setActiveBatch(b);
              }}
              className={`px-3 py-1 rounded-lg border font-bold text-xs transition duration-150 ${
                activeBatch.code === b.code
                  ? 'bg-forest-50 border-forest-700 text-forest-900'
                  : 'bg-[#faf8f5] border-chalk-300 text-charcoal-600 hover:border-chalk-400'
              }`}
            >
              {b.code}
            </button>
          ))}
        </div>
      </div>

      {/* Batch Details Card */}
      {activeBatch && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-forest-950/5 space-y-8 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-chalk-200 gap-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-2.5 py-1 rounded-full border border-forest-200">
                CHỨNG THỰC LÔ HÀNG ĐẠT CHUẨN
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-forest-950 mt-2 tracking-tight">
                MÃ LÔ: {activeBatch.code}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-charcoal-600 mt-0.5">
                {activeBatch.product}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-charcoal-400 block">Ngày xuất xưởng:</span>
              <span className="font-bold text-forest-950 text-sm sm:text-base">{activeBatch.productionDate}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-[#faf8f5] border border-chalk-200 space-y-2">
              <span className="text-xs font-bold text-forest-800 uppercase block">
                Vùng Bã Chè Nguyên Liệu
              </span>
              <p className="font-bold text-forest-950 text-xs sm:text-sm">{activeBatch.teaOrigin}</p>
              <p className="text-xs text-charcoal-500">Khối lượng bã chè tươi: {activeBatch.rawMaterialWeight}</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#faf8f5] border border-chalk-200 space-y-2">
              <span className="text-xs font-bold text-amber-800 uppercase block">
                Thông Số Lò Nhiệt Phân
              </span>
              <p className="font-bold text-forest-950 text-xs sm:text-sm">Nhiệt độ: {activeBatch.pyrolysisTemp}</p>
              <p className="text-xs text-charcoal-500">Thời gian lưu yếm khí: {activeBatch.retentionTime}</p>
            </div>

            <div className="p-5 rounded-2xl bg-forest-950 text-white space-y-2 border border-forest-900">
              <span className="text-xs font-bold text-forest-300 uppercase block">
                Giảm Phát Thải CO2e
              </span>
              <p className="font-bold text-white text-xs sm:text-sm leading-snug">{activeBatch.carbonOffsetKg}</p>
              <p className="text-[11px] text-forest-200">Đã khóa vĩnh viễn trong đất canh tác.</p>
            </div>
          </div>

          {/* Test Results Table */}
          <div className="space-y-4">
            <h4 className="font-bold text-forest-950 text-sm sm:text-base">
              Kết Quả Kiểm Nghiệm Phòng Lab (TCVN & Chuẩn Quốc Tế IBI)
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {Object.entries(activeBatch.testResults).map(([key, val]) => (
                <div key={key} className="p-3.5 rounded-2xl bg-[#faf8f5] border border-chalk-200">
                  <span className="text-[11px] text-charcoal-400 capitalize block">{key}:</span>
                  <span className="text-xs sm:text-sm font-bold text-forest-950 mt-1 block tabular-nums">{val}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-forest-50 border border-forest-200 text-xs text-forest-950">
              <span>Đơn vị kiểm nghiệm độc lập: <strong>{activeBatch.certifiedBy}</strong></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
