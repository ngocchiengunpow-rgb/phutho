export const products = [
  {
    id: 'biochar-cai-tao-dat',
    name: 'Biochar Bã Chè Nguyên Chất Đất Tổ',
    subTitle: 'Than sinh học xốp vi mô cải tạo đất chua thoái hóa & cố định carbon',
    category: 'soil',
    categoryName: 'Cải Tạo Đất',
    badge: 'Bán chạy nhất',
    rating: 4.9,
    reviewsCount: 128,
    image: '/images/product_biochar.jpg',
    basePrice: 85000,
    priceUnit: 'Bao 5kg',
    description: 'Chế tạo từ 100% bã chè phế phẩm Phú Thọ qua công nghệ nhiệt phân chậm yếm khí 350°C - 450°C. Cấu trúc vi mô siêu xốp giúp đất giữ ẩm gấp 3 lần, giải độc chua, giữ phân bón không bị rửa trôi và khóa carbon hơn 100 năm.',
    highlightFeatures: [
      'Nâng pH đất từ chua (pH 4.0 - 4.5) lên trung tính (pH 6.0 - 6.8)',
      'Tăng dung tích hấp thu cation (CEC > 38 meq/100g), chống chai cứng đất',
      'Chứa tannin tự nhiên của chè giúp ức chế tuyến trùng và nấm rễ',
      'Giảm 30% lượng phân bón NPK cần dùng mỗi vụ'
    ],
    specifications: [
      { label: 'Hàm lượng Carbon cố định', value: '> 68%' },
      { label: 'Độ pH (H2O 1:5)', value: '7.8 - 8.5' },
      { label: 'Diện tích bề mặt riêng (BET)', value: '> 400 m²/g' },
      { label: 'Độ ẩm nguyên liệu', value: '< 8%' },
      { label: 'Dung tích trao đổi cation (CEC)', value: '38.5 meq/100g' },
      { label: 'Chứng nhận chất lượng', value: 'TCVN / Tiêu chuẩn IBI quốc tế' }
    ],
    variants: [
      { id: '1kg', label: 'Túi 1kg (Dùng thử / Trồng chậu)', price: 25000, inStock: true },
      { id: '5kg', label: 'Bao 5kg (Tiết kiệm cho nhà vườn)', price: 85000, inStock: true },
      { id: '25kg', label: 'Bao 25kg (Canh tác trang trại)', price: 320000, inStock: true },
      { id: '1ton', label: 'Đóng bao Jumbo 1 Tấn (B2B HTX & Doanh nghiệp)', price: 9500000, inStock: true }
    ],
    dosageGuide: {
      tea: 'Bón lót hoặc xới quanh gốc chè: 1.0 - 1.5 tấn/ha/năm (khoảng 35 - 50kg/sào Bắc Bộ 360m²).',
      fruit: 'Cây ăn quả (Bưởi Đoan Hùng, cam, ổi): 2 - 4 kg/gốc/năm kết hợp phân hữu cơ.',
      vegetables: 'Rau màu và hoa kiểng: Phối trộn 10% - 15% thể tích giá thể đất trồng.'
    }
  },
  {
    id: 'biochar-microbe-vi-sinh',
    name: 'Phân Hữu Cơ Vi Sinh Biochar-Microbe',
    subTitle: 'Phối trộn vi sinh vật bản địa Đất Tổ (Bacillus & Trichoderma)',
    category: 'microbe',
    categoryName: 'Phân Vi Sinh',
    badge: 'Công nghệ độc quyền',
    rating: 5.0,
    reviewsCount: 96,
    image: '/images/product_microbe.jpg',
    basePrice: 120000,
    priceUnit: 'Bao 5kg',
    description: 'Sự kết hợp hoàn hảo giữa tổ ong xốp của than sinh học bã chè và các chủng vi sinh vật bản địa tuyển chọn từ đất rừng Phú Thọ. Than sinh học đóng vai trò là "ngôi nhà trú ẩn an toàn" giúp vi khuẩn có ích sống sót bền bỉ và nhân sinh khối cực nhanh trong đất.',
    highlightFeatures: [
      'Chủng Bacillus subtilis (10⁸ CFU/g) phân giải lân khó tiêu và xenlulo',
      'Chủng Trichoderma harzianum (10⁷ CFU/g) tiêu diệt nấm Phytophthora gây thối rễ',
      'Kích thích bung rễ tơ trắng xóa, búp chè non mập mạp và dày lá',
      'Đạt chuẩn hữu cơ sinh học khép kín, an toàn tuyệt đối cho người và vật nuôi'
    ],
    specifications: [
      { label: 'Chất hữu cơ', value: '> 35%' },
      { label: 'Mật độ vi sinh vật có ích', value: '≥ 1.0 x 10⁸ CFU/g' },
      { label: 'Chủng đối kháng', value: 'Trichoderma spp., Bacillus spp.' },
      { label: 'Axit Humic sinh học', value: '3.5%' },
      { label: 'Độ ẩm', value: '≤ 25%' },
      { label: 'Quy cách', value: 'Dạng bột / Dạng hạt tiêu chuẩn' }
    ],
    variants: [
      { id: '1kg', label: 'Túi 1kg (Cây cảnh & Rau ban công)', price: 35000, inStock: true },
      { id: '5kg', label: 'Bao 5kg (Bón thúc đồi chè & hoa hồng)', price: 120000, inStock: true },
      { id: '25kg', label: 'Bao 25kg (Chuyên trang trại VietGAP)', price: 480000, inStock: true },
      { id: '1ton', label: '1 Tấn (Hợp đồng cung ứng vụ mùa)', price: 14000000, inStock: true }
    ],
    dosageGuide: {
      tea: 'Bón thúc vào các đợt thu búp: 200 - 300kg/ha/lứa chè.',
      fruit: 'Bưởi Đoan Hùng: Bón đón hoa và sau thu hoạch: 3 - 5kg/cây lớn.',
      urban: 'Bón lót 100 - 200g cho chậu hoa hồng, sen đá, rải mặt chậu.'
    }
  },
  {
    id: 'than-hoat-tinh-loc-nuoc',
    name: 'Than Hoạt Tính Bã Chè Lọc Nước Sạch',
    subTitle: 'Hấp phụ kim loại nặng, khử độc clo, phèn & xử lý nước thải công nghiệp',
    category: 'carbon',
    categoryName: 'Xử Lý Nước',
    badge: 'Giá rẻ hơn 60% thị trường',
    rating: 4.8,
    reviewsCount: 74,
    image: '/images/product_carbon.jpg',
    basePrice: 45000,
    priceUnit: 'Túi 500g',
    description: 'Chế phẩm than hoạt tính kỹ thuật cao hoạt hóa từ bã chè. Nhờ tận dụng nguồn nguyên liệu đầu vào 0 đồng và nhiệt khí Syngas tuần hoàn, sản phẩm mang lại khả năng hấp phụ vượt trội với giá thành chỉ 12.000 - 15.000đ/kg bán buôn (rẻ bằng 1/3 so với than gáo dừa hoặc than đá ngoại nhập).',
    highlightFeatures: [
      'Chỉ số hấp phụ Iodine cực cao (> 800 mg/g), khử sạch màu vàng phèn và mùi tanh',
      'Hấp phụ chọn lọc ion kim loại nặng chì, asen, cadmi và dư lượng thuốc BVTV',
      'Thay thế hoàn hảo lõi lọc thô, bể lọc nước giếng khoan vùng trung du Phú Thọ',
      'Cung cấp quy mô lớn theo tấn cho trạm xử lý nước thải 7 KCN tỉnh Phú Thọ'
    ],
    specifications: [
      { label: 'Chỉ số I-ốt (Iodine Number)', value: '> 850 mg/g' },
      { label: 'Độ hấp phụ Methylene Blue', value: '> 140 mg/g' },
      { label: 'Kích thước hạt', value: 'Mesh 8x30 / 12x40' },
      { label: 'Độ tro', value: '< 6%' },
      { label: 'Độ cứng cơ học', value: '> 92%' },
      { label: 'Ứng dụng', value: 'Bể lọc gia đình, Lõi lọc RO, Nước thải dệt nhuộm' }
    ],
    variants: [
      { id: '200g', label: 'Túi 200g (Hút mùi tủ lạnh, phòng ngủ, lọc mini)', price: 20000, inStock: true },
      { id: '500g', label: 'Túi 500g (Vật liệu lọc bể cá, bình lọc nước)', price: 45000, inStock: true },
      { id: '1kg', label: 'Túi 1kg (Lọc nước giếng khoan gia đình)', price: 75000, inStock: true },
      { id: '25kg', label: 'Bao 25kg (Bể lọc tổng sinh hoạt nông thôn)', price: 420000, inStock: true },
      { id: 'b2b', label: 'Hợp đồng KCN (> 500kg)', price: 14000, priceNote: '/kg (Liên hệ B2B)', inStock: true }
    ],
    dosageGuide: {
      domestic: 'Bể lọc giếng khoan gia đình: Đổ lớp dày 15 - 25cm làm lớp vật liệu lọc thô khử mùi và phèn.',
      industrial: 'Cột lọc công nghiệp: Tính toán theo công suất dòng chảy và nồng độ COD/BOD.',
      odor: 'Khử mùi: Đặt túi 200g vào tủ lạnh, tủ giày hoặc xe hơi, thay sau 3 - 6 tháng.'
    }
  },
  {
    id: 'dam-go-sinh-hoc-ba-che',
    name: 'Dấm Gỗ Sinh Học Bã Chè (Wood Vinegar)',
    subTitle: 'Chế phẩm xua đuổi côn trùng, phòng trừ nấm lá & kích rễ tự nhiên',
    category: 'byproduct',
    categoryName: 'Chế Phẩm Sinh Học',
    badge: '100% Hữu cơ tự nhiên',
    rating: 4.9,
    reviewsCount: 52,
    image: '/images/product_vinegar.jpg',
    basePrice: 45000,
    priceUnit: 'Chai xịt 500ml',
    description: 'Dung dịch dấm gỗ thu hồi từ quá trình ngưng tụ khí khói trong buồng nhiệt phân yếm khí khép kín. Chứa hơn 200 hợp chất hữu cơ tự nhiên (axit axetic sinh học, phenol thực vật, guaiacol...) giúp xua đuổi sâu rầy, kháng khuẩn và kích sinh trưởng.',
    highlightFeatures: [
      'Xua đuổi rầy xanh, bọ xít muỗi, bọ trĩ phá hoại búp chè non và cây có múi',
      'Phun phòng nấm phấn trắng, đốm lá, rỉ sắt trên hoa hồng và cây ăn quả',
      'Khử mùi chuồng trại chăn nuôi và tăng tốc độ ủ phân hữu cơ gấp đôi',
      'An toàn cho trẻ nhỏ và vật nuôi, không cần thời gian cách ly khi thu hoạch'
    ],
    specifications: [
      { label: 'Thành phần chính', value: 'Axit Acetic sinh học (3-5%), Phenols thực vật' },
      { label: 'Màu sắc', value: 'Hổ phách trong suốt tự nhiên' },
      { label: 'Độ pH', value: '2.8 - 3.2' },
      { label: 'Tỷ trọng', value: '1.015 g/cm³' },
      { label: 'Hạn sử dụng', value: '24 tháng bảo quản nơi râm mát' },
      { label: 'Đóng gói', value: 'Chai xịt 500ml / Can 2L / Can 10L' }
    ],
    variants: [
      { id: '500ml', label: 'Chai xịt phun sương tiện lợi 500ml', price: 45000, inStock: true },
      { id: '2l', label: 'Can 2 Lít (Dành cho nhà vườn nhỏ)', price: 160000, inStock: true },
      { id: '10l', label: 'Can 10 Lít (Canh tác đồi chè diện tích lớn)', price: 650000, inStock: true }
    ],
    dosageGuide: {
      foliar: 'Phun lá phòng trừ sâu nấm: Pha tỷ lệ 1:200 - 1:300 với nước sạch, phun vào sáng sớm hoặc chiều mát định kỳ 7 - 10 ngày/lần.',
      soil: 'Tưới gốc cải tạo & kích rễ: Pha tỷ lệ 1:500 tưới ẩm quanh vùng rễ non.',
      odor: 'Khử mùi rác hữu cơ, chuồng trại: Pha tỷ lệ 1:50 phun trực tiếp.'
    }
  },
  {
    id: 'combo-nong-nghiep-do-thi',
    name: 'Combo "Sống Xanh Đất Tổ" Cho Hoa & Cây Cảnh',
    subTitle: 'Bộ giải pháp trọn gói cho sen đá, hoa hồng, rau sân thượng ban công',
    category: 'combo',
    categoryName: 'Combo Ưu Đãi',
    badge: 'Tiết kiệm 25%',
    rating: 5.0,
    reviewsCount: 88,
    image: '/images/product_biochar.jpg',
    basePrice: 99000,
    priceUnit: 'Combo 3 món',
    description: 'Bộ sản phẩm thiết kế riêng cho người yêu thiên nhiên đô thị: 1 Túi Biochar bã chè xốp nhẹ giúp đất thoát nước tuyệt hảo, 1 Túi Phân hữu cơ vi sinh bọc dinh dưỡng, và 1 Chai xịt Dấm gỗ sinh học 500ml bảo vệ cây xanh không lo muỗi bọ.',
    highlightFeatures: [
      'Giải quyết triệt để nỗi lo úng rễ của người trồng sen đá và kiểng lá',
      'Đầy đủ dinh dưỡng nuôi cây suốt 6 tháng mà không sợ nóng xót rễ',
      'Bao bì xinh xắn, sạch sẽ, không mùi hôi khó chịu trong chung cư',
      'Tặng kèm thìa gỗ đong định lượng và cẩm nang chăm sóc độc quyền'
    ],
    specifications: [
      { label: 'Thành phần gồm có', value: '1kg Biochar + 1kg Phân vi sinh + 1 Chai dấm gỗ 500ml' },
      { label: 'Phù hợp', value: 'Hoa hồng, sen đá, bonsai mini, rau mầm thủy canh' },
      { label: 'Đặc quyền', value: 'Tặng kèm cẩm nang sống xanh & mã QR tích điểm' }
    ],
    variants: [
      { id: 'standard', label: 'Bộ tiêu chuẩn 3 món trọn gói', price: 99000, inStock: true }
    ],
    dosageGuide: {
      standard: 'Trộn 1 phần Biochar + 1 phần Phân vi sinh + 3 phần đất màu hoặc xơ dừa làm giá thể hoàn hảo.'
    }
  }
];
