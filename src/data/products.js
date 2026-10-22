export const products = [
  {
    id: 'biochar-cai-tao-dat',
    name: 'Than Sinh Học Cải Tạo Đất Biochar Đất Tổ',
    subTitle: 'Than sinh học xốp vi mô hạ chua đất, giữ ẩm & cố định carbon lâu dài',
    category: 'soil',
    categoryName: 'Cải Tạo Đất',
    badge: 'Chủ lực Nông nghiệp',
    rating: 4.9,
    reviewsCount: 128,
    image: '/images/product_biochar.jpg',
    basePrice: 75000,
    priceUnit: 'Bao 5kg',
    description: 'Chế tạo từ 100% phế phụ phẩm ngành trà Phú Thọ (cọng già, cám bụi chè, bã chè ẩm) qua công nghệ nhiệt phân chậm yếm khí 350°C - 450°C. Cấu trúc mô sợi bã chè giữ lại khung lignin siêu xốp giúp hạ chua mạnh mẽ cho đất đồi chai cứng, giữ ẩm gấp 3 lần và cô lập carbon hàng trăm năm.',
    highlightFeatures: [
      'Độ pH kiềm tự nhiên (8.5 - 9.5) hạ chua nhanh cho đất đồi dốc (vốn đang bị tụt dưới pH 4.0)',
      'Diện tích bề mặt riêng cực lớn (> 400 m²/g), lưu giữ phân bón NPK và nước tưới tối ưu',
      'Khóa chặt hơn 50% carbon hữu cơ, mỗi tấn giúp giảm phát thải 2,5 - 3 tấn CO₂e',
      'Được kiểm định độc lập tại Viện Nghiên Cứu Chè Phú Thọ và Đại học Hùng Vương'
    ],
    specifications: [
      { label: 'Hàm lượng Carbon cố định', value: '> 70%' },
      { label: 'Độ pH kiềm tự nhiên', value: '8.5 - 9.5' },
      { label: 'Diện tích bề mặt riêng (BET)', value: '> 400 m²/g' },
      { label: 'Độ ẩm nguyên liệu nung', value: '< 10%' },
      { label: 'Dung tích trao đổi cation (CEC)', value: '> 38 meq/100g' },
      { label: 'Cô lập carbon tương đương', value: '2,5 - 3,0 tấn CO₂e / tấn' }
    ],
    variants: [
      { id: '1kg', label: 'Túi 1kg (Cây cảnh & Sen đá đô thị)', price: 20000, inStock: true },
      { id: '5kg', label: 'Bao 5kg (Tiết kiệm cho nhà vườn)', price: 75000, inStock: true },
      { id: '25kg', label: 'Bao 25kg (Bón đồi chè & trang trại)', price: 350000, inStock: true },
      { id: '1ton', label: '1 Tấn B2B (Đơn giá chuẩn dự án: 15.000đ/kg)', price: 15000000, inStock: true }
    ],
    dosageGuide: {
      tea: 'Đồi chè: Bón lót hoặc rải rãnh quanh tán chè 1.0 - 1.2 tấn/ha/năm (khoảng 35 - 45kg/sào Bắc Bộ 360m²).',
      fruit: 'Cây ăn quả (Bưởi Đoan Hùng, cam, ổi): 2 - 4 kg/gốc/năm kết hợp phân hữu cơ.',
      vegetables: 'Rau màu và hoa kiểng đô thị: Phối trộn 10% - 15% thể tích giá thể đất trồng.'
    }
  },
  {
    id: 'biochar-microbe-vi-sinh',
    name: 'Than Sinh Học Bọc Vi Sinh Biochar-Microbe',
    subTitle: 'Phun trộn chủng vi sinh vật bản địa đối kháng Trichoderma bọc trong lõi xốp',
    category: 'microbe',
    categoryName: 'Phân Vi Sinh Cải Tạo',
    badge: 'Đột phá vi sinh',
    rating: 5.0,
    reviewsCount: 104,
    image: '/images/product_microbe.jpg',
    basePrice: 90000,
    priceUnit: 'Bao 5kg',
    description: 'Dòng sản phẩm chế biến sâu cốt lõi của dự án dành cho nông nghiệp sinh thái. Hệ vi mao quản xốp của than sinh học bã chè đóng vai trò là "ngôi nhà trú ẩn an toàn", bảo vệ chủng vi sinh bản địa Trichoderma sống sót lâu dài trong đất, kích rễ tơ và tiêu diệt nấm bệnh thối rễ.',
    highlightFeatures: [
      'Phun trộn chủng vi sinh vật đối kháng Trichoderma ngay tại chặng làm nguội đầu ra',
      'Được sản xuất dưới 2 dạng: Bột thô đóng bao bón đồi chè và Viên nén mini tiện lợi cho cây cảnh',
      'Tiêu diệt vi nấm gây thối rễ, kích thích bung rễ tơ trắng, chè ra búp dày và đều',
      'Giúp các trang trại vượt qua rào cản thuế carbon và đạt tiêu chuẩn VietGAP / Organic xuất khẩu'
    ],
    specifications: [
      { label: 'Quy cách thành phẩm', value: 'Dạng bột thô bọc vi sinh / Viên nén mini' },
      { label: 'Chủng vi sinh tích hợp', value: 'Chủng bản địa đối kháng Trichoderma spp.' },
      { label: 'Mật độ vi sinh hữu hiệu', value: '≥ 1.0 x 10⁸ CFU/g' },
      { label: 'Độ pH dung dịch', value: '7.5 - 8.5' },
      { label: 'Độ ẩm bảo quản', value: '< 20%' },
      { label: 'Đơn giá bán sỉ chuẩn', value: '15.000.000 VNĐ / Tấn' }
    ],
    variants: [
      { id: '1kg-pellet', label: 'Túi 1kg Viên nén mini (Trồng hoa hồng, sen đá)', price: 30000, inStock: true },
      { id: '5kg', label: 'Bao 5kg (Bón thúc đồi chè & hoa kiểng)', price: 90000, inStock: true },
      { id: '25kg', label: 'Bao 25kg (Chuyên trang trại VietGAP)', price: 390000, inStock: true },
      { id: '1ton', label: 'Bao Jumbo 1 Tấn (Hợp đồng B2B HTX & Nhà máy)', price: 15000000, inStock: true }
    ],
    dosageGuide: {
      tea: 'Bón thúc vào các đợt phát lứa búp non: 250 - 350kg/ha/lứa chè.',
      fruit: 'Bưởi Đoan Hùng: Bón đón hoa và sau thu hoạch: 3 - 5kg/cây trưởng thành.',
      urban: 'Cây cảnh, sen đá, hoa hồng: Rải 100 - 150g viên nén mini quanh gốc hoặc trộn 15% vào đất.'
    }
  },
  {
    id: 'than-hoat-tinh-loc-nuoc',
    name: 'Than Hoạt Tính Kỹ Thuật Lọc Nước Thải & Sinh Hoạt',
    subTitle: 'Hoạt hóa hóa học, nung yếm khí 400°C - 600°C, rửa trung hòa pH 7',
    category: 'carbon',
    categoryName: 'Xử Lý Nước KCN',
    badge: 'Giá cạnh tranh KCN',
    rating: 4.8,
    reviewsCount: 82,
    image: '/images/product_carbon.jpg',
    basePrice: 50000,
    priceUnit: 'Túi 1kg',
    description: 'Chế phẩm than hoạt tính kỹ thuật cao chế biến sâu từ than bã chè. Than được ngâm tẩm hóa chất (H2SO4 hoặc KOH loãng) từ 12 - 24 tiếng, nung hoạt hóa chuyên dụng ở nhiệt độ 400°C - 600°C, sau đó rửa nhiều lần bằng nước sạch đạt độ pH trung tính (~7). Diện tích bề mặt riêng > 400 m²/g giúp xử lý nước thải công nghiệp dệt nhuộm, linh kiện điện tử và nước giếng khoan phèn.',
    highlightFeatures: [
      'Công nghệ hoạt hóa hóa học kết hợp nung yếm khí 400°C - 600°C mở rộng tối đa mao quản',
      'Được rửa sạch hóa chất tồn dư và tro mịn, kiểm định độ pH trung tính ~ 7 an toàn tuyệt đối',
      'Chào thầu giá rẻ cho nhà máy KCN Thụy Vân, Cẩm Khê: 20.000.000 VNĐ/tấn (tiết kiệm đáng kể so với than đá/than dừa)',
      'Hấp phụ cực mạnh ion kim loại nặng, asen, clo dư và màu nước thải dệt nhuộm'
    ],
    specifications: [
      { label: 'Phương pháp hoạt hóa', value: 'Hóa học (H2SO4/KOH loãng) + Nung 400°C - 600°C' },
      { label: 'Diện tích bề mặt riêng (BET)', value: '> 400 m²/g' },
      { label: 'Độ pH nước rửa', value: 'pH 6.8 - 7.2 (Trung tính)' },
      { label: 'Độ tro', value: '< 5%' },
      { label: 'Đơn giá sỉ chào thầu', value: '20.000.000 VNĐ / Tấn (20.000đ/kg)' },
      { label: 'Thị trường mục tiêu', value: 'KCN Thụy Vân, Cẩm Khê & Bể lọc nước sinh hoạt' }
    ],
    variants: [
      { id: '200g', label: 'Túi 200g (Khử mùi tủ lạnh, xe hơi, lọc mini)', price: 20000, inStock: true },
      { id: '1kg', label: 'Túi 1kg (Lọc nước giếng khoan gia đình)', price: 50000, inStock: true },
      { id: '25kg', label: 'Bao 25kg (Bể lọc tổng sinh hoạt & cụm công nghiệp)', price: 500000, inStock: true },
      { id: '1ton-kcn', label: '1 Tấn Hợp đồng B2B KCN (Đơn giá chuẩn: 20.000đ/kg)', price: 20000000, inStock: true }
    ],
    dosageGuide: {
      domestic: 'Bể lọc giếng khoan gia đình: Đổ lớp than dày 15 - 20cm để khử mùi tanh, khử phèn và màu.',
      industrial: 'Cột lọc công nghiệp KCN: Thiết kế theo lưu lượng dòng xả và nồng độ COD/BOD của nhà máy.',
      odor: 'Khử mùi: Đặt túi 200g vào góc phòng, tủ giày, tủ lạnh, thay mới sau 4 - 6 tháng.'
    }
  },
  {
    id: 'vien-nen-mini-sen-da',
    name: 'Than Sinh Học Viên Nén Mini Cho Cây Cảnh & Sen Đá',
    subTitle: 'Đóng gói tiện lợi cho nông nghiệp đô thị, chống úng rễ & tơi xốp giá thể',
    category: 'soil',
    categoryName: 'Cải Tạo Đất',
    badge: 'Nông nghiệp đô thị',
    rating: 4.9,
    reviewsCount: 65,
    image: '/images/product_vinegar.jpg',
    basePrice: 35000,
    priceUnit: 'Túi 1kg',
    description: 'Sản phẩm Than sinh học bọc vi sinh được ép viên nén mini chuyên dụng phục vụ giới trẻ và các hộ gia đình yêu thích hoa hồng, sen đá, tiểu cảnh ban công chung cư. Sản phẩm sạch sẽ, không bụi đen, không mùi khó chịu, giải quyết triệt để nỗi lo úng rễ thối thân.',
    highlightFeatures: [
      'Định dạng viên nén mini gọn gàng, sạch sẽ, tối ưu cho chậu hoa hồng và sen đá',
      'Giải phóng dinh dưỡng từ từ, tạo khe thoáng khí cho rễ thở mạnh',
      'Tích hợp vi sinh Trichoderma ngăn ngừa hiện tượng đen thân úng rễ',
      'Được bán trực tiếp trên gian hàng Shopee, TikTok Shop và Vercel của dự án'
    ],
    specifications: [
      { label: 'Quy cách', value: 'Viên nén trụ tròn mini (đường kính 4 - 6mm)' },
      { label: 'Hàm lượng Biochar bã chè', value: '85%' },
      { label: 'Phụ gia kết dính & vi sinh', value: '15% (Chủng vi sinh Trichoderma + hữu cơ)' },
      { label: 'Độ ẩm', value: '< 12%' },
      { label: 'Kênh phân phối', value: 'Shopee, TikTok Shop, Vercel Mall' }
    ],
    variants: [
      { id: '1kg', label: 'Túi zip 1kg tiện lợi', price: 35000, inStock: true },
      { id: '3kg', label: 'Gói combo 3kg tiết kiệm', price: 95000, inStock: true }
    ],
    dosageGuide: {
      succulent: 'Sen đá, xương rồng: Phối trộn 20% - 30% viên nén mini vào đất perlite làm giá thể.',
      rose: 'Hoa hồng, kiểng lá: Rải 1 lớp dưới đáy chậu chống úng và rải quanh gốc giữ ẩm.'
    }
  },
  {
    id: 'combo-nong-nghiep-do-thi',
    name: 'Combo "Sống Xanh Đất Tổ" Cho Hoa & Kiểng Lá',
    subTitle: 'Bộ giải pháp trọn gói: Viên nén mini + Than bột bọc vi sinh Trichoderma',
    category: 'combo',
    categoryName: 'Combo Ưu Đãi',
    badge: 'Tiết kiệm 20%',
    rating: 5.0,
    reviewsCount: 88,
    image: '/images/product_biochar.jpg',
    basePrice: 99000,
    priceUnit: 'Combo 2 sản phẩm',
    description: 'Bộ sản phẩm thiết kế riêng cho người yêu nông nghiệp xanh đô thị: 1 Túi Than sinh học viên nén mini 1kg thoát nước chống úng và 1 Bao Than sinh học bọc vi sinh Trichoderma 2kg cung cấp dưỡng chất, phục hồi đất chậu chai cứng.',
    highlightFeatures: [
      'Giải quyết triệt để nỗi lo úng rễ của người trồng sen đá và kiểng lá trong nhà',
      'Đầy đủ dinh dưỡng và vi sinh đối kháng nấm bệnh rễ suốt 6 tháng',
      'Bao bì chống ẩm in logo thương hiệu có tích hợp mã QR truy xuất carbon',
      'Tặng kèm thìa gỗ đong định lượng và cẩm nang sống xanh Đất Tổ'
    ],
    specifications: [
      { label: 'Thành phần gồm có', value: '1kg Viên nén mini + 2kg Biochar-Microbe bọc vi sinh' },
      { label: 'Phù hợp', value: 'Hoa hồng, sen đá, bonsai mini, rau sạch sân thượng' },
      { label: 'Đặc quyền', value: 'Tích hợp mã QR truy xuất lượng carbon cô lập' }
    ],
    variants: [
      { id: 'standard', label: 'Bộ combo trọn gói tiêu chuẩn', price: 99000, inStock: true }
    ],
    dosageGuide: {
      standard: 'Lót đáy chậu bằng viên nén mini, trộn 15% bột bọc vi sinh Trichoderma vào đất trồng.'
    }
  }
];
