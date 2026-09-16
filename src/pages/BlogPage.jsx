import React, { useState } from 'react';
import { BookOpen, Calendar, User, Clock, ArrowRight, ArrowLeft, Leaf } from 'lucide-react';
import { blogArticles } from '../data/blog';

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  if (selectedArticle) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <button
          onClick={() => setSelectedArticle(null)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-800 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2} /> Quay lại danh sách cẩm nang
        </button>

        {/* Article Header */}
        <div className="space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-2.5 py-1 rounded-full border border-forest-200">
            {selectedArticle.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-forest-950 leading-tight tracking-tight">
            {selectedArticle.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-charcoal-400 pt-2 border-b border-chalk-200 pb-4 font-mono">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-forest-700" strokeWidth={1.75} /> {selectedArticle.date}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-forest-700" strokeWidth={1.75} /> {selectedArticle.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-forest-700" strokeWidth={1.75} /> {selectedArticle.readTime}
            </span>
          </div>
        </div>

        {/* Hero image */}
        <div className="aspect-video w-full rounded-3xl overflow-hidden bg-chalk-100 shadow-md">
          <img
            src={selectedArticle.image}
            alt={selectedArticle.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article body */}
        <div className="prose prose-slate max-w-none text-charcoal-700 text-xs sm:text-sm leading-relaxed space-y-4">
          <div className="p-4 rounded-2xl bg-forest-50/70 border border-forest-100 text-forest-950 font-medium italic text-xs sm:text-sm">
            "{selectedArticle.summary}"
          </div>

          <div className="whitespace-pre-line leading-relaxed">
            {selectedArticle.content}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-6 rounded-3xl bg-white border border-forest-950/5 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-forest-950 text-sm">Bạn cần tư vấn kỹ thuật bón Biochar cho đất của mình?</h4>
            <p className="text-xs text-charcoal-500">Đội ngũ kỹ sư và giảng viên cố vấn hỗ trợ kiểm tra mẫu đất miễn phí.</p>
          </div>
          <a
            href="tel:0986728916"
            className="px-5 py-2.5 rounded-full bg-forest-950 text-white font-bold text-xs shrink-0 hover:bg-forest-900 transition btn-press"
          >
            Hotline: 0986.728.916
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-forest-900">
        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-800/80 text-forest-200 text-xs font-semibold border border-forest-700/60">
            <BookOpen className="w-3.5 h-3.5 text-forest-300" strokeWidth={1.75} />
            CẨM NANG NÔNG NGHIỆP TUẦN HOÀN
          </span>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
            Kiến Thức Cải Tạo Đất & Công Nghệ Than Sinh Học
          </h1>
          <p className="text-forest-200 text-xs sm:text-sm leading-relaxed">
            Tổng hợp các bài viết hướng dẫn thực địa, kết quả phân tích thổ nhưỡng đồi chè Phú Thọ và giải pháp xử lý nước sạch từ nhóm nghiên cứu Đại học Hùng Vương.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogArticles.map((art) => (
          <div
            key={art.id}
            className="bg-white rounded-3xl overflow-hidden border border-forest-950/5 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
            onClick={() => {
              setSelectedArticle(art);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="aspect-16/10 overflow-hidden bg-chalk-100">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-forest-800">
                  {art.category}
                </span>
                <h3 className="font-bold text-forest-950 text-base leading-snug group-hover:text-forest-700 transition">
                  {art.title}
                </h3>
                <p className="text-xs text-charcoal-500 line-clamp-3 leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-chalk-200 flex items-center justify-between text-xs text-charcoal-400 font-mono">
                <span>{art.date}</span>
                <span className="text-forest-800 font-bold font-sans flex items-center gap-1 group-hover:translate-x-0.5 transition">
                  Đọc tiếp <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
