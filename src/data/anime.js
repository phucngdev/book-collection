const animes = [
  {
    id: 1,
    title: "Thiên Sứ Nhà Bên - Tập 1",
    originalTitle:
      "Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken",
    genre: ["Romance", "Slice of Life", "Comedy"],
    description:
      "Hàng xóm kế bên căn hộ của Fujimiya Amane chính là nữ sinh xinh đẹp nhất trường cậu, Shiina Mahiru. Họ vốn chẳng có mối liên hệ nào cho đến một ngày mưa tầm tã, Amane tình nguyện đưa chiếc ô của mình cho cô bạn hàng xóm xinh đẹp tựa thiên thần, cả hai đã bắt đầu tương tác với nhau theo một cách kì quặc. Chẳng thể chịu được lối sinh hoạt cẩu thả khi sống một mình của Amane, Mahiru đã quyết định sẽ chăm sóc cậu từ những điều nhỏ nhất. Một Mahiru thiếu thốn sự gắn kết với gia đình đang dần mở lòng hơn, cùng với một Amane hay tự ti đang ngày một đổi thay theo chiều hướng tích cực. Khoảng cách giữa hai con người không chút thành thật ấy đang từng bước thu hẹp lại...",
    year: 2023,
    imageUrl:
      "https://product.hstatic.net/200000343865/product/8_0ac9b8bb628f461096a315d0eb1957d4_031dd5c1ab724e66a63c936bc95f4514_master.jpg",
    images: [
      "https://product.hstatic.net/200000343865/product/8_0ac9b8bb628f461096a315d0eb1957d4_031dd5c1ab724e66a63c936bc95f4514_master.jpg",
    ],
    author: "Saekisan Hanekoto",
    price: 85500, // Giá tiền (đơn vị USD)
    purchaseDate: "2025-01-01", // Ngày mua
    publisher: "Kim Đồng", // Nhà xuất bản
  },
  {
    id: 2,
    title: "Arya bàn bên thỉnh thoảng lại trêu ghẹo tôi bằng tiếng Nga - Tập 6",
    originalTitle: "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san",
    genre: ["Romance", "Slice of Life", "Comedy"],
    description: `“И наменятоже обрати внимание” “Eh, gì vậy?” “Chẳng có gì cả đâu? Mình chỉ vừa mới nói "Tên này đúng là ngốc thật mà" thôi” “Cậu có thể ngừng việc quăng ra mấy lời xúc phạm mình bằng tiếng Nga được không!?” Cô gái mang mái tóc bạch kim xinh đẹp tuyệt trần khó có ai có thể sánh bằng ấy đang ngồi cạnh tôi, Arya-san, nở một nụ cười đắc chí... nhưng, sự thật thì lại hoàn toàn khác. Vừa xong, cô ấy đã nói “Tớ cũng muốn được cậu chú ý nữa” bằng tiếng Nga! Thực ra, tôi, Kuze Masachika, sở hữu kỹ năng đọc-nghe-hiểu tiếng Nga đạt đến mức thượng thừa ngang người bản địa luôn rồi. Tôi không thể ngăn bản thân nở một nụ cười thích thú trước một Arya-san đang không hề hay biết gì về điều đó, người mà hôm nay, cũng đang nói ra những lời rất ngọt ngào bằng tiếng Nga!? Đây là một câu truyện romcom tuổi trẻ với một cô nàng JK người Nga siêu cao cấp, là đối tượng của sự ngưỡng mộ của mọi học sinh trong trường!`,
    year: 2024,
    imageUrl:
      "https://product.hstatic.net/200000343865/product/6_952c89aa38ea46d48cc79e1cacc2edb0_compact.jpg",
    images: [
      "https://product.hstatic.net/200000343865/product/6_952c89aa38ea46d48cc79e1cacc2edb0_compact.jpg",
      "https://product.hstatic.net/200000343865/product/inh-thoang-lai-treu-gheo-toi-bang-tieng-nga_tap-6_ban-pho-thong_poster_70366f4e07e84d98b5aaae6a2773b45f_compact.jpg",
      "https://product.hstatic.net/200000343865/product/6---boxset_b32f1a616085484b99a8c33a62e714e2_master.jpg",
    ],
    author: "Sunsunsun & Momoco",
    price: 85500, // Giá tiền (đơn vị USD)
    purchaseDate: "2025-01-11", // Ngày mua
    publisher: "Kim Đồng", // Nhà xuất bản
  },
  {
    id: 3,
    title: "Arya bàn bên thỉnh thoảng lại trêu ghẹo tôi bằng tiếng Nga - Tập 4",
    originalTitle: "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san",
    genre: ["Romance", "Slice of Life", "Comedy"],
    description: `“И наменятоже обрати внимание” “Eh, gì vậy?” “Chẳng có gì cả đâu? Mình chỉ vừa mới nói "Tên này đúng là ngốc thật mà" thôi” “Cậu có thể ngừng việc quăng ra mấy lời xúc phạm mình bằng tiếng Nga được không!?” Cô gái mang mái tóc bạch kim xinh đẹp tuyệt trần khó có ai có thể sánh bằng ấy đang ngồi cạnh tôi, Arya-san, nở một nụ cười đắc chí... nhưng, sự thật thì lại hoàn toàn khác. Vừa xong, cô ấy đã nói “Tớ cũng muốn được cậu chú ý nữa” bằng tiếng Nga! Thực ra, tôi, Kuze Masachika, sở hữu kỹ năng đọc-nghe-hiểu tiếng Nga đạt đến mức thượng thừa ngang người bản địa luôn rồi. Tôi không thể ngăn bản thân nở một nụ cười thích thú trước một Arya-san đang không hề hay biết gì về điều đó, người mà hôm nay, cũng đang nói ra những lời rất ngọt ngào bằng tiếng Nga!? Đây là một câu truyện romcom tuổi trẻ với một cô nàng JK người Nga siêu cao cấp, là đối tượng của sự ngưỡng mộ của mọi học sinh trong trường!`,
    year: 2024,
    imageUrl:
      "https://product.hstatic.net/200000343865/product/4_0ea49fd672634c02838dbd8133e3ff8f_4c8cbc94ea4e4f98925598c1e2ca043f_compact.jpg",
    images: [
      "https://product.hstatic.net/200000343865/product/4_0ea49fd672634c02838dbd8133e3ff8f_4c8cbc94ea4e4f98925598c1e2ca043f_compact.jpg",
    ],
    author: "Sunsunsun & Momoco",
    price: 85500, // Giá tiền (đơn vị USD)
    purchaseDate: "2025-01-11", // Ngày mua
    publisher: "Kim Đồng", // Nhà xuất bản
  },
];

export default animes;
