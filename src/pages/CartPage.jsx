import React, { useState } from 'react';
import { Trash2, ShoppingBag, ArrowLeft, CheckCircle2, ShieldCheck, Tag, QrCode, Phone, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartPage({ cart, onUpdateQuantity, onRemoveItem, onClearCart, setActivePage }) {
  const [couponCode, setCouponCode] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');
  
  // Checkout Form State
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [province, setProvince] = useState('Phú Thọ');
  const [district, setDistrict] = useState('Huyện Thanh Sơn');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cod'); // 'cod' or 'vietqr'
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);
  const [submittedOrderDetails, setSubmittedOrderDetails] = useState(null);

  // Subtotal calculation
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = subtotal >= 500000 || subtotal === 0 ? 0 : 30000;
  const finalTotal = Math.max(0, subtotal - couponDiscount + shippingFee);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'KHUYENCONG2026') {
      const discount = Math.round(subtotal * 0.1);
      setCouponDiscount(discount);
      setCouponMessage('Đã áp dụng mã Khuyến công 2026: Giảm 10% tổng giá trị sản phẩm!');
    } else if (code === 'DATTO2026') {
      setCouponDiscount(20000);
      setCouponMessage('Đã áp dụng mã Đất Tổ: Giảm 20.000đ!');
    } else {
      setCouponDiscount(0);
      setCouponMessage('Mã ưu đãi không hợp lệ. Hãy thử KHUYENCONG2026');
    }
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (!customerName || !phone || !address) {
      alert('Vui lòng điền đầy đủ Họ tên, Số điện thoại và Địa chỉ nhận hàng!');
      return;
    }

    const orderId = 'BT-' + Math.floor(100000 + Math.random() * 900000);
    const orderData = {
      orderId,
      customerName,
      phone,
      address: `${address}, ${district}, ${province}`,
      notes,
      items: cart,
      subtotal,
      discount: couponDiscount,
      shippingFee,
      finalTotal,
      paymentMethod,
      orderDate: new Date().toLocaleString('vi-VN')
    };

    setSubmittedOrderDetails(orderData);
    setIsOrderSubmitted(true);
    onClearCart();

    // Trigger confetti celebration
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  // If order was successfully submitted, show celebration & receipt
  if (isOrderSubmitted && submittedOrderDetails) {
    const vietQrUrl = `https://img.vietqr.io/image/MB-0986728916-compact2.png?amount=${submittedOrderDetails.finalTotal}&addInfo=${submittedOrderDetails.orderId}&accountName=NGUYEN%20NGOC%20MAI%20LAN`;

    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-100 text-center space-y-6">
          <div className="w-16 h-16 bg-tea-100 text-tea-800 rounded-full flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-10 h-10 text-tea-700" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-tea-700">ĐẶT HÀNG THÀNH CÔNG</span>
            <h2 className="text-3xl font-black text-slate-900">
              Cảm Ơn Bạn Đã Đồng Hành Cùng Nông Nghiệp Xanh!
            </h2>
            <p className="text-sm text-slate-500">
              Mã đơn hàng: <strong className="text-tea-800 text-base">{submittedOrderDetails.orderId}</strong>
            </p>
          </div>

          {/* Receipt overview */}
          <div className="bg-slate-50 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2 border border-slate-200">
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Người nhận:</span>
              <span className="font-bold text-slate-800">{submittedOrderDetails.customerName} ({submittedOrderDetails.phone})</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Địa chỉ giao:</span>
              <span className="font-semibold text-slate-800 text-right max-w-xs">{submittedOrderDetails.address}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Phương thức:</span>
              <span className="font-bold text-tea-800">
                {submittedOrderDetails.paymentMethod === 'cod' ? 'Thanh toán tiền mặt khi nhận hàng (COD)' : 'Chuyển khoản VietQR'}
              </span>
            </div>
            <div className="flex justify-between pt-2 text-base font-black text-slate-900">
              <span>Tổng thanh toán:</span>
              <span className="text-tea-800">{submittedOrderDetails.finalTotal.toLocaleString()} đ</span>
            </div>
          </div>

          {/* If VietQR payment was selected */}
          {submittedOrderDetails.paymentMethod === 'vietqr' && (
            <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-4">
              <div className="text-xs font-bold text-amber-900 uppercase flex items-center justify-center gap-1.5">
                <QrCode className="w-4 h-4 text-amber-700" />
                MÃ VIETQR THANH TOÁN TỰ ĐỘNG
              </div>
              <img
                src={vietQrUrl}
                alt="VietQR Chuyển Khoản"
                className="w-56 h-auto mx-auto rounded-xl shadow-md border border-slate-200"
              />
              <div className="text-xs text-slate-600 space-y-0.5">
                <p>Chủ tài khoản: <strong>NGUYỄN NGỌC MAI LAN</strong> (Trưởng nhóm)</p>
                <p>Số tài khoản / SĐT: <strong>0986728916</strong> – Ngân hàng Quân Đội (MBBank)</p>
                <p className="text-amber-800 font-semibold">Nội dung chuyển khoản: {submittedOrderDetails.orderId}</p>
              </div>
            </div>
          )}

          {/* Quick Direct Actions */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://zalo.me/0986728916?text=${encodeURIComponent(`Chào bạn Mai Lan, mình vừa đặt đơn hàng ${submittedOrderDetails.orderId} trên web Biochar Bã Chè Đất Tổ (${submittedOrderDetails.finalTotal.toLocaleString()}đ). Nhờ nhóm xác nhận giúp mình nhé!`)}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition"
            >
              <MessageSquare className="w-4 h-4" />
              Nhắn Tin Zalo Xác Nhận Nhanh
            </a>

            <button
              onClick={() => setActivePage('shop')}
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition"
            >
              Tiếp Tục Mua Sắm
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If cart is empty
  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-20 h-20 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Giỏ hàng của bạn đang trống</h2>
        <p className="text-sm text-slate-500">
          Hãy khám phá các sản phẩm Biochar cải tạo đất, phân vi sinh và than hoạt tính lọc nước!
        </p>
        <button
          onClick={() => setActivePage('shop')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-tea-800 hover:bg-tea-900 text-white font-bold text-sm shadow-md transition"
        >
          <ArrowLeft className="w-4 h-4" /> Đến Cửa Hàng Ngay
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <button
            onClick={() => setActivePage('shop')}
            className="text-xs text-tea-700 font-bold flex items-center gap-1 hover:underline mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Quay lại cửa hàng
          </button>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            Giỏ Hàng & Thanh Toán ({cart.length} sản phẩm)
          </h1>
        </div>

        <button
          onClick={onClearCart}
          className="text-xs text-red-600 hover:underline flex items-center gap-1 font-semibold"
        >
          <Trash2 className="w-3.5 h-3.5" /> Xóa tất cả
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Items in cart */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 divide-y divide-slate-100">
            {cart.map((item, idx) => (
              <div key={`${item.id}-${item.variantId}-${idx}`} className="py-4 first:pt-0 last:pb-0 flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover bg-slate-100 border border-slate-200 shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                    {item.name}
                  </h4>
                  <span className="text-xs text-slate-500 block truncate">
                    Quy cách: {item.variantLabel}
                  </span>
                  <div className="text-xs sm:text-sm font-black text-tea-800 mt-1">
                    {item.price.toLocaleString()} đ
                  </div>
                </div>

                {/* Quantity adjustments */}
                <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50 shrink-0">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.variantId, item.quantity - 1)}
                    className="px-2.5 py-1 text-slate-600 hover:text-slate-900 font-bold text-xs"
                  >
                    -
                  </button>
                  <span className="px-2 py-1 text-xs font-bold text-slate-800 w-8 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.variantId, item.quantity + 1)}
                    className="px-2.5 py-1 text-slate-600 hover:text-slate-900 font-bold text-xs"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id, item.variantId)}
                  className="p-2 text-slate-400 hover:text-red-600 transition shrink-0"
                  title="Xóa món này"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Coupon Code input */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Nhập mã giảm giá (VD: KHUYENCONG2026)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-tea-600 font-medium uppercase"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm transition"
              >
                Áp Dụng
              </button>
            </form>
            {couponMessage && (
              <p className="text-xs text-tea-700 font-semibold mt-2 pl-1">
                {couponMessage}
              </p>
            )}
          </div>
        </div>

        {/* Right: Checkout details form */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 space-y-5">
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-100 pb-3">
              Thông Tin Giao Hàng & Đặt Hàng
            </h3>

            <form onSubmit={handleCheckoutSubmit} className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Họ và tên người nhận <span className="text-red-500">*</span>:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn Hùng"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-tea-600"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Số điện thoại nhận hàng <span className="text-red-500">*</span>:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ví dụ: 0912 345 678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-tea-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Tỉnh / Thành:</label>
                  <select
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-tea-600"
                  >
                    <option value="Phú Thọ">Phú Thọ</option>
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="Yên Bái">Yên Bái</option>
                    <option value="Tuyên Quang">Tuyên Quang</option>
                    <option value="Hòa Bình">Hòa Bình</option>
                    <option value="Tỉnh khác">Tỉnh khác</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Huyện / Thị xã:</label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-tea-600"
                  >
                    <option value="Huyện Thanh Sơn">Thanh Sơn</option>
                    <option value="Huyện Tân Sơn">Tân Sơn</option>
                    <option value="Huyện Đoan Hùng">Đoan Hùng</option>
                    <option value="TP. Việt Trì">TP. Việt Trì</option>
                    <option value="Huyện Cẩm Khê">Cẩm Khê</option>
                    <option value="Huyện Lâm Thao">Lâm Thao</option>
                    <option value="Huyện Tam Nông">Tam Nông</option>
                    <option value="Huyện Thanh Ba">Thanh Ba</option>
                    <option value="Huyện Phù Ninh">Phù Ninh</option>
                    <option value="Huyện Hạ Hòa">Hạ Hòa</option>
                    <option value="Huyện Yên Lập">Yên Lập</option>
                    <option value="Huyện Thanh Thủy">Thanh Thủy</option>
                    <option value="TX. Phú Thọ">TX. Phú Thọ</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Địa chỉ chi tiết (Thôn/Xóm/Số nhà) <span className="text-red-500">*</span>:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Khu 4, Xã Địch Quả (Gần Đồi Chè)"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-tea-600"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Ghi chú vận chuyển:</label>
                <textarea
                  rows="2"
                  placeholder="Đường vào vườn, giờ nhận hàng thuận tiện..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-tea-600"
                />
              </div>

              {/* Payment Method Selection */}
              <div>
                <label className="block font-bold text-slate-700 mb-1.5">
                  Phương thức thanh toán:
                </label>
                <div className="space-y-2">
                  <label className={`flex items-center p-3 rounded-xl border cursor-pointer transition ${
                    paymentMethod === 'cod' ? 'border-tea-600 bg-tea-50/70 font-semibold' : 'border-slate-200'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="text-tea-700 focus:ring-tea-500 mr-3"
                    />
                    <span>Thanh toán tiền mặt khi nhận hàng (COD)</span>
                  </label>

                  <label className={`flex items-center p-3 rounded-xl border cursor-pointer transition ${
                    paymentMethod === 'vietqr' ? 'border-tea-600 bg-tea-50/70 font-semibold' : 'border-slate-200'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="vietqr"
                      checked={paymentMethod === 'vietqr'}
                      onChange={() => setPaymentMethod('vietqr')}
                      className="text-tea-700 focus:ring-tea-500 mr-3"
                    />
                    <span>Chuyển khoản VietQR Ngân Hàng (Tự động)</span>
                  </label>
                </div>
              </div>

              {/* Cost calculation summary */}
              <div className="pt-3 border-t border-slate-100 space-y-1 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Tạm tính:</span>
                  <span>{subtotal.toLocaleString()} đ</span>
                </div>
                {couponDiscount > 0 && (
                  <div className="flex justify-between text-tea-700 font-semibold">
                    <span>Mã giảm giá:</span>
                    <span>-{couponDiscount.toLocaleString()} đ</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-500">
                  <span>Phí vận chuyển:</span>
                  <span>{shippingFee === 0 ? 'Miễn phí' : `${shippingFee.toLocaleString()} đ`}</span>
                </div>
                <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                  <span>Tổng tiền thanh toán:</span>
                  <span className="text-tea-800">{finalTotal.toLocaleString()} đ</span>
                </div>
              </div>

              {/* Submit CTA button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-tea-700 to-tea-800 hover:from-tea-800 hover:to-tea-900 text-white font-extrabold text-base shadow-lg shadow-tea-900/30 active:scale-98 transition flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                Xác Nhận Đặt Hàng Ngay
              </button>

              <div className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-tea-600" />
                Thông tin được bảo mật và xác nhận trực tiếp bởi Trưởng nhóm Mai Lan
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
