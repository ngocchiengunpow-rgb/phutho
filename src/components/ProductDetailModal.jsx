import React, { useState } from 'react';
import { X, Check, Star, Shield, Truck, Phone, ShoppingBag, Leaf } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-[#faf8f5] w-full max-w-4xl rounded-3xl shadow-2xl border border-forest-950/10 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-charcoal-700 transition shadow-sm border border-forest-950/5"
        >
          <X className="w-5 h-5" strokeWidth={1.75} />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Product Image */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white border border-forest-950/5 shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-forest-950 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="mt-3 text-center text-xs text-charcoal-500 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-forest-700" strokeWidth={1.75} />
                100% Nguồn Gốc Bã Chè Phú Thọ: Kiểm Nghiệm Viện Nghiên Cứu
              </div>
            </div>

            {/* Product Info */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-forest-800 bg-forest-100/80 px-2.5 py-0.5 rounded-full">
                  {product.categoryName}
                </span>
                <h2 className="text-2xl font-black text-forest-950 mt-2 tracking-tight">
                  {product.name}
                </h2>
                <p className="text-xs text-charcoal-500 mt-1">
                  {product.subTitle}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-charcoal-900 font-mono">{product.rating}</span>
                  <span className="text-xs text-charcoal-400">({product.reviewsCount} đánh giá thực tế)</span>
                </div>
              </div>

              {/* Price */}
              <div className="p-4 rounded-2xl bg-white border border-forest-950/5 flex items-baseline justify-between shadow-xs">
                <div>
                  <span className="text-[11px] text-charcoal-500 block">Đơn giá theo quy cách:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-forest-950 tabular-nums">
                      {selectedVariant.price.toLocaleString()} đ
                    </span>
                    {selectedVariant.priceNote && (
                      <span className="text-xs font-medium text-charcoal-500">{selectedVariant.priceNote}</span>
                    )}
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-forest-50 text-forest-800 font-semibold border border-forest-200">
                  Còn hàng tại xưởng
                </span>
              </div>

              {/* Select Variant */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-600 mb-2">
                  Chọn quy cách đóng gói:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariant(v)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all duration-150 flex justify-between items-center ${
                        selectedVariant.id === v.id
                          ? 'border-forest-800 bg-forest-50 text-forest-950 font-bold ring-1 ring-forest-800'
                          : 'border-chalk-200 text-charcoal-700 bg-white hover:border-chalk-300'
                      }`}
                    >
                      <span>{v.label}</span>
                      {selectedVariant.id === v.id && (
                        <Check className="w-4 h-4 text-forest-800 shrink-0" strokeWidth={2} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity selector & Actions */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center border border-chalk-200 rounded-full bg-white px-1">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-charcoal-600 hover:text-charcoal-950 font-bold text-xs"
                  >
                    -
                  </button>
                  <span className="px-2 py-2 text-xs font-bold font-mono text-charcoal-900 w-8 text-center tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-charcoal-600 hover:text-charcoal-950 font-bold text-xs"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-4 rounded-full bg-forest-100 hover:bg-forest-200 text-forest-950 font-bold text-xs flex items-center justify-center gap-2 transition btn-press"
                >
                  <ShoppingBag className="w-4 h-4 text-forest-900" strokeWidth={1.75} />
                  Thêm Vào Giỏ
                </button>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="flex-1 py-3 px-4 rounded-full bg-forest-950 hover:bg-forest-900 text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-md shadow-forest-950/15 btn-press"
                >
                  Mua Ngay
                </button>
              </div>

              <div className="text-[11px] text-charcoal-500 flex items-center gap-4 pt-1">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-forest-700" strokeWidth={1.75} /> Giao hàng toàn quốc
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-forest-700" strokeWidth={1.75} /> Tư vấn: 0986.728.916
                </span>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="pt-4 border-t border-chalk-200">
            <div className="flex border-b border-chalk-200 gap-6">
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-3 text-xs font-bold transition-all relative ${
                  activeTab === 'specs' ? 'text-forest-950 border-b-2 border-forest-900' : 'text-charcoal-500 hover:text-charcoal-800'
                }`}
              >
                Thông Số Kỹ Thuật
              </button>
              <button
                onClick={() => setActiveTab('guide')}
                className={`pb-3 text-xs font-bold transition-all relative ${
                  activeTab === 'guide' ? 'text-forest-950 border-b-2 border-forest-900' : 'text-charcoal-500 hover:text-charcoal-800'
                }`}
              >
                Hướng Dẫn Sử Dụng
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`pb-3 text-xs font-bold transition-all relative ${
                  activeTab === 'features' ? 'text-forest-950 border-b-2 border-forest-900' : 'text-charcoal-500 hover:text-charcoal-800'
                }`}
              >
                Đặc Điểm Nổi Bật
              </button>
            </div>

            <div className="pt-4">
              {activeTab === 'specs' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.specifications?.map((s, idx) => (
                    <div key={idx} className="flex justify-between py-2 px-3 bg-white rounded-xl text-xs border border-forest-950/5">
                      <span className="text-charcoal-500">{s.label}:</span>
                      <span className="font-bold font-mono text-charcoal-900">{s.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'guide' && (
                <div className="space-y-2.5 text-xs text-charcoal-700 bg-white p-4 rounded-2xl border border-forest-950/5">
                  {Object.entries(product.dosageGuide || {}).map(([k, text]) => (
                    <div key={k} className="flex items-start gap-2">
                      <Leaf className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" strokeWidth={1.75} />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'features' && (
                <ul className="space-y-2 text-xs text-charcoal-700 bg-white p-4 rounded-2xl border border-forest-950/5">
                  {product.highlightFeatures?.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" strokeWidth={2} />
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
