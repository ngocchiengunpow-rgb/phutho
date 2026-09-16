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

  // Filter products
  let filtered = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  // Sort products
  if (sortBy === 'price-low') {
    filtered = [...filtered].sort((a, b) => a.basePrice - b.basePrice);
  } else if (sortBy === 'price-high') {
    filtered = [...filtered].sort((a, b) => b.basePrice - a.basePrice);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Shop Header Banner */}
      <div className="bg-gradient-eco text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-tea-200 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Vật Tư Xanh Khép Vòng Kinh Tế Phú Thọ
          </span>
          <h1 className="text-3xl sm:text-4xl font-black">
            Cửa Hàng Sinh Thái Biochar Bã Chè
          </h1>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Đặt mua trực tiếp từ xưởng sản xuất thực nghiệm Thanh Sơn. Toàn bộ sản phẩm được kiểm định chất lượng tại Viện Nghiên Cứu Chè Phú Thọ và Đại học Hùng Vương.
          </p>
        </div>

        <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none hidden md:block">
          <img src="/images/product_biochar.jpg" alt="Bag" className="w-96 transform translate-x-12 translate-y-12" />
        </div>
      </div>

      {/* Filter and Sorting Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-200">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                selectedCategory === c.id
                  ? 'bg-tea-800 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Sort drop down */}
        <div className="flex items-center gap-2 text-xs text-slate-500 self-end sm:self-auto">
          <span>Sắp xếp theo:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 rounded-lg bg-slate-100 border border-slate-300 font-semibold text-slate-800 text-xs focus:outline-none"
          >
            <option value="featured">Nổi bật nhất</option>
            <option value="price-low">Giá thấp đến cao</option>
            <option value="price-high">Giá cao đến thấp</option>
            <option value="rating">Đánh giá cao nhất</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col group"
          >
            {/* Image & Badges */}
            <div
              className="relative aspect-4/3 overflow-hidden bg-slate-100 cursor-pointer"
              onClick={() => onSelectProduct(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-tea-800/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-xs">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-tea-700 uppercase tracking-wider">
                    {product.categoryName}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{product.rating}</span>
                    <span className="text-slate-400">({product.reviewsCount})</span>
                  </div>
                </div>

                <h3
                  onClick={() => onSelectProduct(product)}
                  className="text-lg font-bold text-slate-900 group-hover:text-tea-800 transition cursor-pointer"
                >
                  {product.name}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2">
                  {product.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1 pt-1 text-xs text-slate-600">
                  {product.highlightFeatures?.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-tea-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block">Đơn giá ({product.priceUnit})</span>
                  <span className="text-xl font-black text-tea-900">
                    {product.basePrice.toLocaleString()} đ
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition"
                  >
                    Xem Chi Tiết
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
                    className="p-2.5 rounded-xl bg-tea-800 hover:bg-tea-900 text-white text-xs font-bold shadow-md shadow-tea-900/20 transition flex items-center gap-1"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delivery and Guarantee Info Box */}
      <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-tea-100 text-tea-800 flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-slate-900 text-sm block">Vận chuyển chuyên nghiệp</span>
            <span>Giao hàng tận nơi toàn tỉnh Phú Thọ và các tỉnh Trung du Bắc Bộ. Đơn hàng từ 1 Tấn hỗ trợ xe tải vận chuyển tận đồi chè.</span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-tea-100 text-tea-800 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-slate-900 text-sm block">Cam kết chất lượng</span>
            <span>100% nguyên liệu sinh khối bã chè tự nhiên, kiểm nghiệm độ kiềm pH, diện tích bề mặt và vi sinh vật đối kháng định kỳ.</span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-tea-100 text-tea-800 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-slate-900 text-sm block">Hỗ trợ kỹ thuật thực địa</span>
            <span>Đội ngũ sinh viên & cố vấn khoa học đồng hành hướng dẫn kỹ thuật bón lót, tư vấn liều lượng phù hợp từng chất đất.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
