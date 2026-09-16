import React, { useState } from 'react';
import { ShoppingBag, Star, Check, Filter, ShieldCheck, Truck, ArrowRight, Sparkles } from 'lucide-react';
import { products } from '../data/products';

export default function ShopPage({ onSelectProduct, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', label: 'Tất Cả Sản Phẩm' },
    { id: 'soil', label: 'Biochar Cải Tạo Đất' },
    { id: 'microbe', label: 'Phân Vi Sinh Biochar' },
    { id: 'carbon', label: 'Than Hoạt Tính Lọc Nước' },
    { id: 'byproduct', label: 'Dấm Gỗ Sinh Học' },
    { id: 'combo', label: 'Combo Ưu Đãi' },
  ];

  let filtered = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  if (sortBy === 'price-low') {
    filtered = [...filtered].sort((a, b) => a.basePrice - b.basePrice);
  } else if (sortBy === 'price-high') {
    filtered = [...filtered].sort((a, b) => b.basePrice - a.basePrice);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-forest-900">
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-800/80 text-forest-200 text-xs font-semibold border border-forest-700/60">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" strokeWidth={1.75} />
            Vật Tư Xanh Khép Vòng Kinh Tế Phú Thọ
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Cửa Hàng Sinh Thái Biochar Bã Chè
          </h1>
          <p className="text-forest-200 text-xs sm:text-sm leading-relaxed">
            Đặt mua trực tiếp từ xưởng sản xuất thực nghiệm Thanh Sơn. Toàn bộ sản phẩm được kiểm định chất lượng tại Viện Nghiên Cứu Chè Phú Thọ và Đại học Hùng Vương.
          </p>
        </div>
      </div>

      {/* Filter and Sorting Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-chalk-200">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-150 btn-press ${
                selectedCategory === c.id
                  ? 'bg-forest-950 text-white shadow-xs'
                  : 'bg-white border border-chalk-200 text-charcoal-700 hover:bg-chalk-50'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Sort drop down */}
        <div className="flex items-center gap-2 text-xs text-charcoal-500 self-end sm:self-auto">
          <span>Sắp xếp:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 rounded-xl bg-white border border-chalk-300 font-semibold text-charcoal-800 text-xs focus:outline-none cursor-pointer"
          >
            <option value="featured">Nổi bật nhất</option>
            <option value="price-low">Giá thấp đến cao</option>
            <option value="price-high">Giá cao đến thấp</option>
            <option value="rating">Đánh giá cao nhất</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl overflow-hidden border border-forest-950/5 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            {/* Image & Badges */}
            <div
              className="relative aspect-4/3 overflow-hidden bg-chalk-100 cursor-pointer"
              onClick={() => onSelectProduct(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-forest-950 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-forest-800 uppercase tracking-wider">
                    {product.categoryName}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="font-mono text-charcoal-800">{product.rating}</span>
                    <span className="text-charcoal-400">({product.reviewsCount})</span>
                  </div>
                </div>

                <h3
                  onClick={() => onSelectProduct(product)}
                  className="text-base sm:text-lg font-bold text-forest-950 group-hover:text-forest-700 transition cursor-pointer leading-snug"
                >
                  {product.name}
                </h3>

                <p className="text-xs text-charcoal-500 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1 pt-1 text-xs text-charcoal-600">
                  {product.highlightFeatures?.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="line-clamp-1">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-chalk-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-charcoal-400 block">Đơn giá ({product.priceUnit})</span>
                  <span className="text-xl font-black font-mono text-forest-950 tabular-nums">
                    {product.basePrice.toLocaleString()} đ
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="px-3.5 py-2 rounded-full border border-chalk-300 hover:bg-chalk-50 text-charcoal-800 text-xs font-bold transition btn-press"
                  >
                    Chi Tiết
                  </button>
                  <button
                    type="button"
                    onClick={() => onAddToCart({
                      id: product.id,
                      name: product.name,
                      variantId: product.variants[0].id,
                      variantLabel: product.variants[0].label,
                      price: product.variants[0].price,
                      quantity: 1,
                      image: product.image
                    })}
                    className="px-3.5 py-2 rounded-full bg-forest-950 hover:bg-forest-900 text-white text-xs font-bold shadow-sm transition flex items-center gap-1 btn-press"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.75} />
                    Thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info strip */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-950/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-charcoal-600">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5" strokeWidth={1.75} />
          </div>
          <div>
            <span className="font-bold text-forest-950 text-sm block">Vận chuyển chuyên nghiệp</span>
            <span className="text-charcoal-500">Giao hàng tận nơi toàn tỉnh Phú Thọ và các tỉnh Trung du. Đơn hàng từ 1 Tấn hỗ trợ xe tải vận chuyển tận nơi.</span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" strokeWidth={1.75} />
          </div>
          <div>
            <span className="font-bold text-forest-950 text-sm block">Cam kết chất lượng</span>
            <span className="text-charcoal-500">100% nguyên liệu sinh khối bã chè tự nhiên, kiểm nghiệm độ kiềm pH và vi sinh vật đối kháng định kỳ.</span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-forest-700" strokeWidth={1.75} />
          </div>
          <div>
            <span className="font-bold text-forest-950 text-sm block">Hỗ trợ kỹ thuật thực địa</span>
            <span className="text-charcoal-500">Đội ngũ sinh viên & cố vấn khoa học đồng hành hướng dẫn kỹ thuật bón lót, tư vấn liều lượng phù hợp từng chất đất.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
