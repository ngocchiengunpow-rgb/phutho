import React, { useState } from 'react';
import { BookOpen, Calendar, User, Clock, ArrowRight, ArrowLeft, Share2, Leaf } from 'lucide-react';
import { blogArticles } from '../data/blog';

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  if (selectedArticle) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <button
          onClick={() => setSelectedArticle(null)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-tea-700 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại danh sách cẩm nang
        </button>

        {/* Article Header */}
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-tea-700 bg-tea-50 px-2.5 py-1 rounded">
            {selectedArticle.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
            {selectedArticle.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 border-b border-slate-200 pb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {selectedArticle.date}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" /> {selectedArticle.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {selectedArticle.readTime}
            </span>
          </div>
        </div>

        {/* Hero image */}
        <div className="aspect-video w-full rounded-3xl overflow-hidden bg-slate-100 shadow-md">
          <img
            src={selectedArticle.image}
            alt={selectedArticle.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Markdown-like article body */}
        <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
          <div className="p-4 rounded-2xl bg-tea-50/80 border border-tea-200 text-tea-900 font-medium italic text-sm">
            "{selectedArticle.summary}"
          </div>

          <div className="whitespace-pre-line">
            {selectedArticle.content}
          </div>
        </div>

        {/* Article Footer CTA */}
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Bạn cần tư vấn kỹ thuật bón Biochar cho đất của mình?</h4>
            <p className="text-xs text-slate-500">Đội ngũ kỹ sư và giảng viên cố vấn hỗ trợ kiểm tra mẫu đất miễn phí.</p>
          </div>
          <a
            href="tel:0986728916"
            className="px-5 py-2.5 rounded-xl bg-tea-800 text-white font-bold text-xs shrink-0 hover:bg-tea-900 transition"
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
      <div className="bg-gradient-eco text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-tea-300 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            CẨM NANG NÔNG NGHIỆP TUẦN HOÀN
          </span>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight">
            Kiến Thức Cải Tạo Đất & Công Nghệ Than Sinh Học
          </h1>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Tổng hợp các bài viết hướng dẫn thực địa, kết quả phân tích thổ nhưỡng đồi chè Phú Thọ và giải pháp xử lý nước sạch từ nhóm nghiên cứu Đại học Hùng Vương.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogArticles.map((art) => (
          <div
            key={art.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col group cursor-pointer"
            onClick={() => {
              setSelectedArticle(art);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="aspect-16/10 overflow-hidden bg-slate-100">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-tea-700">
                  {art.category}
                </span>
                <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-tea-800 transition">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-3">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>{art.date}</span>
                <span className="text-tea-800 font-bold flex items-center gap-1 group-hover:translate-x-1 transition">
                  Đọc tiếp <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
