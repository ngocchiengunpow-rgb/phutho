import React, { useState } from 'react';
import { X, Check, Star, Shield, Truck, Phone, ShoppingBag, Leaf, HelpCircle } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onAddToCart, onBuyNow }) {
  if (!product) return null;

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs', 'guide', 'features'

  const handleAddToCart = () => {
    onAddToCart({
      id: product.id,
      name: product.name,
      variantId: selectedVariant.id,
      variantLabel: selectedVariant.label,
      price: selectedVariant.price,
      quantity: quantity,
      image: product.image
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    if (onBuyNow) onBuyNow();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-slate-100 text-slate-600 transition shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Product Image */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-tea-700 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="mt-3 text-center text-xs text-slate-500 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-tea-600" />
                100% Nguồn Gốc Bã Chè Phú Thọ – Kiểm Nghiệm Viện Nghiên Cứu
              </div>
            </div>

            {/* Product Info */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-tea-700 bg-tea-50 px-2 py-0.5 rounded">
                  {product.categoryName}
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                  {product.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {product.subTitle}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                  <span className="text-xs text-slate-400">({product.reviewsCount} đánh giá thực tế)</span>
                </div>
              </div>

              {/* Price */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-500 block">Đơn giá theo quy cách:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-tea-800">
                      {selectedVariant.price.toLocaleString()} đ
                    </span>
                    {selectedVariant.priceNote && (
                      <span className="text-xs font-medium text-slate-500">{selectedVariant.priceNote}</span>
                    )}
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-green-100 text-green-800 font-semibold">
                  Còn hàng tại xưởng
                </span>
              </div>

              {/* Select Variant */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Chọn quy cách đóng gói:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariant(v)}
                      className={`p-2.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex justify-between items-center ${
                        selectedVariant.id === v.id
                          ? 'border-tea-600 bg-tea-50 text-tea-900 font-semibold ring-1 ring-tea-600'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span>{v.label}</span>
                      {selectedVariant.id === v.id && (
                        <Check className="w-4 h-4 text-tea-600 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity selector & Actions */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-slate-600 hover:text-slate-900 font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-sm font-bold text-slate-800 w-10 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-slate-600 hover:text-slate-900 font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-4 rounded-xl bg-tea-100 hover:bg-tea-200 text-tea-900 font-bold text-sm flex items-center justify-center gap-2 transition"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Thêm Vào Giỏ
                </button>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="flex-1 py-3 px-4 rounded-xl bg-tea-800 hover:bg-tea-900 text-white font-bold text-sm flex items-center justify-center gap-2 transition shadow-md shadow-tea-900/20"
                >
                  Mua Ngay
                </button>
              </div>

              <div className="text-[11px] text-slate-500 flex items-center gap-4 pt-1">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-tea-600" /> Giao hàng toàn quốc
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-tea-600" /> Tư vấn: 0986.728.916 (Mai Lan)
                </span>
              </div>
            </div>
          </div>

          {/* Product Tabs (Specs, Guides, Benefits) */}
          <div className="pt-4 border-t border-slate-200">
            <div className="flex border-b border-slate-200 gap-6">
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-3 text-sm font-bold transition-all relative ${
                  activeTab === 'specs' ? 'text-tea-800 border-b-2 border-tea-700' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Thông Số Kỹ Thuật
              </button>
              <button
                onClick={() => setActiveTab('guide')}
                className={`pb-3 text-sm font-bold transition-all relative ${
                  activeTab === 'guide' ? 'text-tea-800 border-b-2 border-tea-700' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Hướng Dẫn Sử Dụng
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`pb-3 text-sm font-bold transition-all relative ${
                  activeTab === 'features' ? 'text-tea-800 border-b-2 border-tea-700' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Đặc Điểm Nổi Bật
              </button>
            </div>

            <div className="pt-4">
              {activeTab === 'specs' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.specifications?.map((s, idx) => (
                    <div key={idx} className="flex justify-between py-2 px-3 bg-slate-50 rounded-lg text-xs">
                      <span className="text-slate-500">{s.label}:</span>
                      <span className="font-bold text-slate-800">{s.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'guide' && (
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-xl">
                  {Object.entries(product.dosageGuide || {}).map(([k, text]) => (
                    <div key={k} className="flex items-start gap-2">
                      <Leaf className="w-4 h-4 text-tea-600 shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'features' && (
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-xl">
                  {product.highlightFeatures?.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-tea-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
