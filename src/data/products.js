export const products = [
  {
    id: 'biochar-cai-tao-dat',
    name: 'Than Sinh Học Cải Tạo Đất Biochar Đất Tổ',
    subTitle: 'Than sinh học xốp vi mô hạ chua đất, giữ ẩm & tích hợp vi sinh Trichoderma',
    category: 'soil',
    categoryName: 'Cải Tạo Đất',
    badge: 'Chủ lực Nông nghiệp',
    rating: 4.9,
    reviewsCount: 128,
    image: '/images/product_biochar.jpg',
    basePrice: 75000,
    priceUnit: 'Bao 5kg',
    description: 'Chế tạo từ 100% phế phụ phẩm ngành trà Phú Thọ (cọng già, cám bụi chè, bã chè ẩm) qua công nghệ nhiệt phân chậm yếm khí 350°C - 450°C, tích hợp chủng vi sinh vật đối kháng Trichoderma. Cấu trúc mô sợi bã chè giữ lại khung lignin siêu xốp giúp hạ chua mạnh mẽ cho đất đồi chai cứng, giữ ẩm gấp 3 lần và cô lập carbon hàng trăm năm.',
    highlightFeatures: [
      'Độ pH kiềm tự nhiên (8.5 - 9.5) hạ chua nhanh cho đất đồi dốc (vốn đang bị tụt dưới pH 4.0)',
      'Diện tích bề mặt riêng cực lớn (> 400 m²/g), lưu giữ phân bón NPK và nước tưới tối ưu',
      'Tích hợp chủng vi sinh đối kháng Trichoderma ngăn ngừa nấm bệnh thối rễ, kích rễ tơ bung trắng',
      'Khóa chặt hơn 50% carbon hữu cơ, mỗi tấn giúp giảm phát thải 2,5 - 3 tấn CO₂e'
    ],
    specifications: [
      { label: 'Hàm lượng Carbon cố định', value: '> 70%' },
      { label: 'Độ pH kiềm tự nhiên', value: '8.5 - 9.5' },
      { label: 'Diện tích bề mặt riêng (BET)', value: '> 400 m²/g' },
      { label: 'Mật độ vi sinh Trichoderma', value: '≥ 1.0 x 10⁸ CFU/g' },
      { label: 'Độ ẩm nguyên liệu nung', value: '< 10%' },
      { label: 'Đơn giá sỉ chuẩn', value: '15.000.000 VNĐ / Tấn (15.000đ/kg)' }
    ],
    variants: [
      { id: '1kg', label: 'Túi 1kg (Dùng thử / Cây cảnh)', price: 15000, inStock: true },
      { id: '5kg', label: 'Bao 5kg (Tiết kiệm cho nhà vườn)', price: 75000, inStock: true },
      { id: '25kg', label: 'Bao 25kg (Bón đồi chè & trang trại)', price: 375000, inStock: true },
      { id: '1ton', label: '1 Tấn B2B (Đơn giá chuẩn dự án: 15.000.000đ/tấn)', price: 15000000, inStock: true }
    ],
    dosageGuide: {
      tea: 'Đồi chè: Bón lót hoặc rải rãnh quanh tán chè 1.0 - 1.2 tấn/ha/năm (khoảng 35 - 45kg/sào Bắc Bộ 360m²).',
      fruit: 'Cây ăn quả (Bưởi Đoan Hùng, cam, ổi): 2 - 4 kg/gốc/năm kết hợp phân hữu cơ.',
      vegetables: 'Rau màu và hoa kiểng đô thị: Phối trộn 10% - 15% thể tích giá thể đất trồng.'
    }
  },
  {
    id: 'than-hoat-tinh-loc-nuoc',
    name: 'Than Hoạt Tính Kỹ Thuật Lọc Nước Thải & Sinh Hoạt',
    subTitle: 'Hoạt hóa hóa học, nung yếm khí 400°C - 600°C, rửa trung hòa pH 7',
    category: 'carbon',
    categoryName: 'Xử Lý Nước KCN',
    badge: 'Xử lý nước KCN',
    rating: 4.8,
    reviewsCount: 82,
    image: '/images/product_carbon.jpg',
    basePrice: 20000,
    priceUnit: 'Túi 1kg',
    description: 'Chế phẩm than hoạt tính kỹ thuật cao chế biến sâu từ than bã chè. Than được ngâm tẩm hóa chất (H2SO4 hoặc KOH loãng) từ 12 - 24 tiếng, nung hoạt hóa chuyên dụng ở nhiệt độ 400°C - 600°C, sau đó rửa nhiều lần bằng nước sạch đạt độ pH trung tính (~7). Diện tích bề mặt riêng > 400 m²/g giúp xử lý nước thải công nghiệp dệt nhuộm, linh kiện điện tử và nước giếng khoan phèn.',
    highlightFeatures: [
      'Công nghệ hoạt hóa hóa học kết hợp nung yếm khí 400°C - 600°C mở rộng tối đa mao quản',
      'Được rửa sạch hóa chất tồn dư và tro mịn, kiểm định độ pH trung tính ~ 7 an toàn tuyệt đối',
      'Đơn giá chuẩn: 20.000 VNĐ / Túi 1kg (20.000.000 VNĐ/tấn chào thầu cho KCN Thụy Vân, Cẩm Khê)',
      'Hấp phụ cực mạnh ion kim loại nặng, asen, clo dư và màu nước thải dệt nhuộm'
    ],
    specifications: [
      { label: 'Phương pháp hoạt hóa', value: 'Hóa học (H2SO4/KOH loãng) + Nung 400°C - 600°C' },
      { label: 'Diện tích bề mặt riêng (BET)', value: '> 400 m²/g' },
      { label: 'Độ pH nước rửa', value: 'pH 6.8 - 7.2 (Trung tính)' },
      { label: 'Độ tro', value: '< 5%' },
      { label: 'Đơn giá sỉ chuẩn', value: '20.000.000 VNĐ / Tấn (20.000đ/kg)' },
      { label: 'Thị trường mục tiêu', value: 'KCN Thụy Vân, Cẩm Khê & Bể lọc nước sinh hoạt' }
    ],
    variants: [
      { id: '1kg', label: 'Túi 1kg (Lọc nước sinh hoạt & dùng thử)', price: 20000, inStock: true },
      { id: '5kg', label: 'Bao 5kg (Bể lọc gia đình)', price: 100000, inStock: true },
      { id: '25kg', label: 'Bao 25kg (Bể lọc tổng sinh hoạt & cụm công nghiệp)', price: 500000, inStock: true },
      { id: '1ton-kcn', label: '1 Tấn Hợp đồng B2B KCN (Đơn giá chuẩn: 20.000.000đ/tấn)', price: 20000000, inStock: true }
    ],
    dosageGuide: {
      domestic: 'Bể lọc giếng khoan gia đình: Đổ lớp than dày 15 - 20cm để khử mùi tanh, khử phèn và màu.',
      industrial: 'Cột lọc công nghiệp KCN: Thiết kế theo lưu lượng dòng xả và nồng độ COD/BOD của nhà máy.',
      odor: 'Khử mùi: Đặt túi 200g - 500g vào góc phòng, tủ giày, tủ lạnh, thay mới sau 4 - 6 tháng.'
    }
  }
];
