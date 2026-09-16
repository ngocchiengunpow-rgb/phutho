import React, { useState } from 'react';

export default function BiocharCalculator({ onAddToCart }) {
  const [cropType, setCropType] = useState('tea');
  const [areaUnit, setAreaUnit] = useState('sao'); // 'ha', 'sao', 'm2', 'trees'
  const [areaValue, setAreaValue] = useState(3); // default 3 sao

  // Crop configuration
  const crops = {
    tea: {
      name: 'Đồi Chè Phú Thọ (Thanh Sơn, Tân Sơn, Yên Lập)',
      ratePerHaKg: 1200,
      npkSavingPercent: 30,
      soilBenefit: 'Tăng 0.8 đến 1.2 độ pH, giữ ẩm mùa khô, tannin tự nhiên ngăn nấm rễ.',
    },
    grapefruit: {
      name: 'Bưởi Đoan Hùng & Cây Ăn Quả (Cam, Ổi, Xoài)',
      ratePerHaKg: 1000,
      ratePerTreeKg: 3.5,
      npkSavingPercent: 25,
      soilBenefit: 'Bung rễ tơ trắng, chống nghẹt rễ đất chua, ngọt quả đậm vị.',
    },
    vegetables: {
      name: 'Rau Màu & Dược Liệu VietGAP',
      ratePerHaKg: 800,
      npkSavingPercent: 30,
      soilBenefit: 'Xốp đất, giảm tồn dư nitrat, hạn chế rửa trôi phân bón khi mưa to.',
    },
    urban: {
      name: 'Hoa Hồng, Sen Đá & Nông Nghiệp Đô Thị',
      ratePerHaKg: 600,
      npkSavingPercent: 35,
      soilBenefit: 'Thoát nước siêu tốc chống úng rễ, không mùi hôi, giữ mùn lâu bền.',
    }
  };

  // Compute area in Hectares
  let haEquivalent = 0;
  if (areaUnit === 'ha') {
    haEquivalent = Number(areaValue) || 0;
  } else if (areaUnit === 'sao') {
    haEquivalent = (Number(areaValue) || 0) * 0.036;
  } else if (areaUnit === 'm2') {
    haEquivalent = (Number(areaValue) || 0) / 10000;
  } else if (areaUnit === 'trees') {
    haEquivalent = (Number(areaValue) || 0) / 350;
  }

  const currentCrop = crops[cropType];
  let requiredBiocharKg = 0;

  if (cropType === 'grapefruit' && areaUnit === 'trees') {
    requiredBiocharKg = Math.round((Number(areaValue) || 0) * currentCrop.ratePerTreeKg);
  } else {
    requiredBiocharKg = Math.round(haEquivalent * currentCrop.ratePerHaKg);
  }

  if (requiredBiocharKg < 5 && areaValue > 0) requiredBiocharKg = 5;

  const totalNpkCost = haEquivalent * 18000000;
  const estimatedSavingVnd = Math.round(totalNpkCost * (currentCrop.npkSavingPercent / 100));
  const carbonOffsetKg = Math.round(requiredBiocharKg * 2.1);
  const bags25kg = Math.ceil(requiredBiocharKg / 25);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-forest-950/5 relative overflow-hidden">
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-forest-950 tracking-tight">
          Máy Tính Định Lượng Biochar Cho Đất Trồng
        </h3>
        <p className="text-xs text-charcoal-500 mt-1">
          Dựa trên định mức thử nghiệm khoa học tại Viện Nghiên Cứu Chè & ĐH Hùng Vương
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input parameters */}
        <div className="lg:col-span-6 space-y-6">
          {/* Step 1: Select crop */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-600 mb-2">
              1. Chọn loại cây trồng và thổ nhưỡng:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.entries(crops).map(([key, crop]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setCropType(key)}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-150 btn-press ${
                    cropType === key
                      ? 'border-forest-700 bg-forest-50 text-forest-950 font-semibold shadow-xs ring-1 ring-forest-700'
                      : 'border-chalk-200 hover:border-chalk-300 text-charcoal-700 bg-[#faf8f5]'
                  }`}
                >
                  <span className="text-xs font-semibold leading-snug">{crop.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Input area */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-600 mb-2">
              2. Nhập quy mô diện tích canh tác:
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                min="1"
                step="any"
                value={areaValue}
                onChange={(e) => setAreaValue(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-1/2 p-3 text-base font-bold text-charcoal-950 bg-[#faf8f5] border border-chalk-200 rounded-2xl focus:ring-2 focus:ring-forest-700 focus:outline-none tabular-nums"
                placeholder="Nhập số..."
              />
              <select
                value={areaUnit}
                onChange={(e) => setAreaUnit(e.target.value)}
                className="w-1/2 p-3 text-xs sm:text-sm font-semibold text-charcoal-800 bg-[#faf8f5] border border-chalk-200 rounded-2xl focus:ring-2 focus:ring-forest-700 focus:outline-none cursor-pointer"
              >
                <option value="sao">Sào Bắc Bộ (360 m2)</option>
                <option value="ha">Héc-ta (Hectare, ha)</option>
                <option value="m2">Mét vuông (m2)</option>
                {cropType === 'grapefruit' && <option value="trees">Số gốc cây</option>}
              </select>
            </div>
          </div>

          {/* Soil benefit explanation */}
          <div className="p-4 rounded-2xl bg-forest-50/70 border border-forest-100 text-xs text-forest-950 space-y-1">
            <span className="font-bold block text-forest-900">
              Lợi ích trực tiếp cho đất {crops[cropType].name}:
            </span>
            <p className="text-charcoal-600 leading-relaxed">{currentCrop.soilBenefit}</p>
          </div>
        </div>

        {/* Calculation Results Card */}
        <div className="lg:col-span-6 bg-forest-950 text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl border border-forest-900/50">
          <div className="space-y-5">
            <span className="inline-block px-3 py-1 rounded-full bg-forest-800/80 text-forest-200 text-xs font-semibold tracking-wider uppercase border border-forest-700/60">
              KẾT QUẢ ĐỊNH LƯỢNG TỐI ƯU
            </span>

            <div>
              <span className="text-xs text-forest-300 font-medium block">
                Lượng Biochar bã chè khuyến nghị:
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white tabular-nums">
                  {requiredBiocharKg >= 1000
                    ? `${(requiredBiocharKg / 1000).toFixed(2)} Tấn`
                    : `${requiredBiocharKg.toLocaleString()} kg`}
                </span>
                <span className="text-xs text-forest-200">
                  (Khoảng {bags25kg} bao 25kg)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-forest-900">
              <div className="bg-forest-900/60 rounded-2xl p-3.5 border border-forest-800/50">
                <span className="text-xs text-forest-200 block font-medium">
                  Tiết kiệm phân NPK:
                </span>
                <div className="text-base font-bold text-amber-300 mt-1 tabular-nums">
                  {estimatedSavingVnd > 0 ? `${estimatedSavingVnd.toLocaleString()} đ` : '30% chi phí'}
                </div>
                <span className="text-[10px] text-forest-300 block">mỗi năm canh tác</span>
              </div>

              <div className="bg-forest-900/60 rounded-2xl p-3.5 border border-forest-800/50">
                <span className="text-xs text-forest-200 block font-medium">
                  Cô lập Carbon (CO2e):
                </span>
                <div className="text-base font-bold text-forest-200 mt-1 tabular-nums">
                  {carbonOffsetKg.toLocaleString()} kg
                </div>
                <span className="text-[10px] text-forest-300 block">Khóa vào đất trên 100 năm</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-forest-900">
            <button
              onClick={() => {
                if (onAddToCart) {
                  onAddToCart({
                    id: 'biochar-cai-tao-dat',
                    name: 'Biochar Bã Chè Cải Tạo Đất',
                    variantId: '25kg',
                    variantLabel: `Bao 25kg (Định lượng máy tính: ${bags25kg} bao)`,
                    price: 320000,
                    quantity: Math.max(1, bags25kg),
                    image: '/images/product_biochar.jpg'
                  });
                }
              }}
              className="w-full py-3.5 px-4 rounded-full bg-white hover:bg-forest-50 text-forest-950 font-semibold text-xs sm:text-sm shadow-md transition-all btn-press"
            >
              Thêm {bags25kg} Bao ({(bags25kg * 25).toLocaleString()} kg) Vào Giỏ Hàng
            </button>
            <p className="text-[11px] text-center text-forest-300/80 mt-2">
              Đơn hàng từ 1 Tấn trở lên được áp dụng giá sỉ B2B và hỗ trợ vận chuyển tận đồi chè.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
