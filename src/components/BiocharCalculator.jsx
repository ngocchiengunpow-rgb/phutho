import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2, TrendingUp, CloudRain, ShoppingBag, ArrowRight } from 'lucide-react';

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
      soilBenefit: 'Tăng 0.8 - 1.2 độ pH, giữ ẩm mùa khô, tannin tự nhiên ngăn nấm rễ.',
      icon: '🌱'
    },
    grapefruit: {
      name: 'Bưởi Đoan Hùng & Cây Ăn Quả (Cam, Ổi, Xoài)',
      ratePerHaKg: 1000,
      ratePerTreeKg: 3.5,
      npkSavingPercent: 25,
      soilBenefit: 'Bung rễ tơ trắng, chống nghẹt rễ đất chua, ngọt quả đậm vị.',
      icon: '🍊'
    },
    vegetables: {
      name: 'Rau Màu & Dược Liệu VietGAP',
      ratePerHaKg: 800,
      npkSavingPercent: 30,
      soilBenefit: 'Xốp đất, giảm tồn dư nitrat, hạn chế rửa trôi phân bón khi mưa to.',
      icon: '🥬'
    },
    urban: {
      name: 'Hoa Hồng, Sen Đá & Nông Nghiệp Đô Thị',
      ratePerHaKg: 600,
      npkSavingPercent: 35,
      soilBenefit: 'Thoát nước siêu tốc chống úng rễ, không mùi hôi, giữ chất mùn lâu bền.',
      icon: '🌸'
    }
  };

  // Compute area in Hectares
  let haEquivalent = 0;
  if (areaUnit === 'ha') {
    haEquivalent = Number(areaValue) || 0;
  } else if (areaUnit === 'sao') {
    // 1 sào Bắc Bộ = 360 m2 = 0.036 ha
    haEquivalent = (Number(areaValue) || 0) * 0.036;
  } else if (areaUnit === 'm2') {
    haEquivalent = (Number(areaValue) || 0) / 10000;
  } else if (areaUnit === 'trees') {
    // 1 ha roughly 350 - 400 fruit trees
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

  // Approximate cost & savings
  // Average NPK fertilizer cost per ha ~ 18,000,000đ/year
  const totalNpkCost = haEquivalent * 18000000;
  const estimatedSavingVnd = Math.round(totalNpkCost * (currentCrop.npkSavingPercent / 100));

  // Carbon sequestered: 1 ton biochar ~ 2.1 ton CO2e
  const carbonOffsetKg = Math.round(requiredBiocharKg * 2.1);

  // Suggested packages: 25kg bags or 5kg bags
  const bags25kg = Math.ceil(requiredBiocharKg / 25);
  const estimatedCostVnd = bags25kg * 320000;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-tea-100 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none" />

      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-tea-700 text-white flex items-center justify-center shadow-md shadow-tea-900/20">
          <Calculator className="w-6 h-6 text-tea-200" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Máy Tính Định Lượng Biochar Cho Đất Trồng
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Dựa trên định mức thử nghiệm khoa học tại Viện Nghiên Cứu Chè & ĐH Hùng Vương
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input parameters */}
        <div className="lg:col-span-6 space-y-6">
          {/* Step 1: Select crop */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              1. Chọn loại cây trồng & thổ nhưỡng:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.entries(crops).map(([key, crop]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setCropType(key)}
                  className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    cropType === key
                      ? 'border-tea-600 bg-tea-50/80 text-tea-900 font-semibold shadow-xs ring-2 ring-tea-500/20'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <span className="text-2xl">{crop.icon}</span>
                  <span className="text-xs sm:text-sm leading-tight">{crop.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Input area */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              2. Nhập quy mô diện tích canh tác:
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                min="1"
                step="any"
                value={areaValue}
                onChange={(e) => setAreaValue(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-1/2 p-3 text-lg font-bold text-slate-900 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-tea-500 focus:outline-none"
                placeholder="Nhập số..."
              />
              <select
                value={areaUnit}
                onChange={(e) => setAreaUnit(e.target.value)}
                className="w-1/2 p-3 text-sm font-semibold text-slate-800 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-tea-500 focus:outline-none cursor-pointer"
              >
                <option value="sao">Sào Bắc Bộ (360 m²)</option>
                <option value="ha">Héc-ta (Hectare - ha)</option>
                <option value="m2">Mét vuông (m²)</option>
                {cropType === 'grapefruit' && <option value="trees">Số gốc cây</option>}
              </select>
            </div>
          </div>

          {/* Soil benefit explanation */}
          <div className="p-4 rounded-xl bg-tea-50/60 border border-tea-200/60 text-xs sm:text-sm text-tea-900 space-y-1">
            <span className="font-bold flex items-center gap-1.5 text-tea-800">
              <CheckCircle2 className="w-4 h-4 text-tea-600" />
              Lợi ích trực tiếp cho đất {crops[cropType].name}:
            </span>
            <p className="text-slate-600 pl-5">{currentCrop.soilBenefit}</p>
          </div>
        </div>

        {/* Calculation Results Card */}
        <div className="lg:col-span-6 bg-gradient-to-br from-tea-900 via-tea-950 to-carbon-900 text-white rounded-2xl p-6 flex flex-col justify-between shadow-xl">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-full bg-tea-800/80 text-tea-200 text-xs font-semibold mb-4 border border-tea-700">
              KẾT QUẢ ĐỊNH LƯỢNG TỐI ƯU
            </span>

            <div className="space-y-4">
              <div>
                <span className="text-xs text-tea-300 uppercase tracking-wider font-semibold">
                  Lượng Biochar bã chè khuyến nghị:
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">
                    {requiredBiocharKg >= 1000
                      ? `${(requiredBiocharKg / 1000).toFixed(2)} Tấn`
                      : `${requiredBiocharKg.toLocaleString()} kg`}
                  </span>
                  <span className="text-xs text-tea-200">
                    (Tương đương ~{bags25kg} bao 25kg)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-tea-800/60">
                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-xs">
                  <span className="text-xs text-tea-200 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                    Tiết kiệm phân NPK:
                  </span>
                  <div className="text-base sm:text-lg font-bold text-amber-300 mt-1">
                    ~{estimatedSavingVnd > 0 ? `${estimatedSavingVnd.toLocaleString()} đ` : '30% chi phí'}
                  </div>
                  <span className="text-[10px] text-slate-300 block">/mỗi năm canh tác</span>
                </div>

                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-xs">
                  <span className="text-xs text-tea-200 flex items-center gap-1">
                    <CloudRain className="w-3.5 h-3.5 text-tea-300" />
                    Cô lập Carbon (CO₂e):
                  </span>
                  <div className="text-base sm:text-lg font-bold text-tea-300 mt-1">
                    {carbonOffsetKg.toLocaleString()} kg
                  </div>
                  <span className="text-[10px] text-slate-300 block">Khóa vào đất &gt;100 năm</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-tea-800/80">
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
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-tea-500 to-tea-600 hover:from-tea-400 hover:to-tea-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-tea-950/40 active:scale-98 transition"
            >
              <ShoppingBag className="w-4 h-4" />
              Thêm {bags25kg} Bao ({(bags25kg * 25).toLocaleString()} kg) Vào Giỏ Hàng
            </button>
            <p className="text-[11px] text-center text-tea-300/80 mt-2">
              * Đơn hàng từ 1 Tấn trở lên được áp dụng giá sỉ B2B và hỗ trợ vận chuyển tận đồi chè.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
