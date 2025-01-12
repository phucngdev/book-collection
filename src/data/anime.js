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
    price: 85500,
    purchaseDate: "2025-01-01",
    publisher: "Kim Đồng",
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
    price: 85500,
    purchaseDate: "2025-01-11",
    publisher: "Kim Đồng",
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
    price: 85500,
    purchaseDate: "2025-01-11",
    publisher: "Kim Đồng",
  },
  {
    id: 4,
    title: "Pháp Sư Tiễn Táng Frieren - Tập 1",
    originalTitle: "Sousou no Frieren, Frieren: Beyond Journey's End",
    genre: ["Fantasy", "Slice of Life", "Drama"],
    description:
      "Tổ đội anh hùng đã đánh bại được quỷ vương và kết thúc cuộc hành trình của họ. Nhưng thế chưa phải là hết, cuộc đời của cô nàng pháp sư Elf này sẽ còn rất dài, hơn cả những người đồng đội cũ của cô, một cuộc phiêu lưu mới để cô trải qua nhiều cung bậc cảm xúc, cũng như là học hỏi thêm về con người.",
    year: 2024,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5524.jpeg?alt=media&token=77e12037-4713-4f43-a26e-79a76cc4c2ad",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5524.jpeg?alt=media&token=77e12037-4713-4f43-a26e-79a76cc4c2ad",
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5525.jpeg?alt=media&token=1b5fc5d4-108b-4fcb-86f1-973a8dd09ec1",
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5527.jpeg?alt=media&token=d01042b9-0df1-442c-b59b-c7df13f3a9d4",
    ],
    author: "Saitou Keiichirou",
    price: 45000,
    purchaseDate: "2025-01-11",
    publisher: "Kim Đồng",
  },
  {
    id: 5,
    title: "Pháp Sư Tiễn Táng Frieren - Tập 2",
    originalTitle: "Sousou no Frieren, Frieren: Beyond Journey's End",
    genre: ["Fantasy", "Slice of Life", "Drama"],
    description:
      "Tổ đội anh hùng đã đánh bại được quỷ vương và kết thúc cuộc hành trình của họ. Nhưng thế chưa phải là hết, cuộc đời của cô nàng pháp sư Elf này sẽ còn rất dài, hơn cả những người đồng đội cũ của cô, một cuộc phiêu lưu mới để cô trải qua nhiều cung bậc cảm xúc, cũng như là học hỏi thêm về con người.",
    year: 2024,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5528.jpeg?alt=media&token=e1b0ea86-555e-430d-9a2b-d2bb12b97421",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5528.jpeg?alt=media&token=e1b0ea86-555e-430d-9a2b-d2bb12b97421",
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5529.jpeg?alt=media&token=1901043c-13c3-4688-a7d7-3ae5dab5a2cf",
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5530.jpeg?alt=media&token=6929f90f-60ad-444a-986a-84e1bd21f2e8",
    ],
    author: "Saitou Keiichirou",
    price: 45000,
    purchaseDate: "2025-01-11",
    publisher: "Kim Đồng",
  },
  {
    id: 6,
    title: "Pháp Sư Tiễn Táng Frieren - Tập 3",
    originalTitle: "Sousou no Frieren, Frieren: Beyond Journey's End",
    genre: ["Fantasy", "Slice of Life", "Drama"],
    description:
      "Tổ đội anh hùng đã đánh bại được quỷ vương và kết thúc cuộc hành trình của họ. Nhưng thế chưa phải là hết, cuộc đời của cô nàng pháp sư Elf này sẽ còn rất dài, hơn cả những người đồng đội cũ của cô, một cuộc phiêu lưu mới để cô trải qua nhiều cung bậc cảm xúc, cũng như là học hỏi thêm về con người.",
    year: 2024,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5531.jpeg?alt=media&token=540d4cd8-2ff8-4b7e-a196-3b62edf4f0d8",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5531.jpeg?alt=media&token=540d4cd8-2ff8-4b7e-a196-3b62edf4f0d8",
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5532.jpeg?alt=media&token=2f8bae35-b706-42cc-8a79-45e4f60965a8",
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5533.jpeg?alt=media&token=4e93fde3-28ba-4fee-a88b-e2d6eda8bd87",
    ],
    author: "Saitou Keiichirou",
    price: 45000,
    purchaseDate: "2025-01-11",
    publisher: "Kim Đồng",
  },
  {
    id: 7,
    title: "Pháp Sư Tiễn Táng Frieren - Tập 4",
    originalTitle: "Sousou no Frieren, Frieren: Beyond Journey's End",
    genre: ["Fantasy", "Slice of Life", "Drama"],
    description:
      "Tổ đội anh hùng đã đánh bại được quỷ vương và kết thúc cuộc hành trình của họ. Nhưng thế chưa phải là hết, cuộc đời của cô nàng pháp sư Elf này sẽ còn rất dài, hơn cả những người đồng đội cũ của cô, một cuộc phiêu lưu mới để cô trải qua nhiều cung bậc cảm xúc, cũng như là học hỏi thêm về con người.",
    year: 2024,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5534.jpeg?alt=media&token=49ed0298-b06a-46d2-9444-77aa07f6b981",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5534.jpeg?alt=media&token=49ed0298-b06a-46d2-9444-77aa07f6b981",
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5535.jpeg?alt=media&token=912a4b4d-84ba-4d2e-bc81-3735870ddab6",
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5536.jpeg?alt=media&token=0c721cbc-6e90-4386-8161-e6c78649601d",
    ],
    author: "Saitou Keiichirou",
    price: 45000,
    purchaseDate: "2025-01-11",
    publisher: "Kim Đồng",
  },
  {
    id: 8,
    title: "Pháp Sư Tiễn Táng Frieren - Tập 5",
    originalTitle: "Sousou no Frieren, Frieren: Beyond Journey's End",
    genre: ["Fantasy", "Slice of Life", "Drama"],
    description:
      "Tổ đội anh hùng đã đánh bại được quỷ vương và kết thúc cuộc hành trình của họ. Nhưng thế chưa phải là hết, cuộc đời của cô nàng pháp sư Elf này sẽ còn rất dài, hơn cả những người đồng đội cũ của cô, một cuộc phiêu lưu mới để cô trải qua nhiều cung bậc cảm xúc, cũng như là học hỏi thêm về con người.",
    year: 2024,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5537.jpeg?alt=media&token=cc74728b-57a1-483b-8d3c-8b1df16f0b09",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5537.jpeg?alt=media&token=cc74728b-57a1-483b-8d3c-8b1df16f0b09",
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5538.jpeg?alt=media&token=55b78a7c-b8dc-4669-9b0e-20ddfd7d0e16",
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5539.jpeg?alt=media&token=505809ce-9e4c-480b-9fe2-a93e5017284e",
    ],
    author: "Saitou Keiichirou",
    price: 45000,
    purchaseDate: "2025-01-11",
    publisher: "Kim Đồng",
  },
  {
    id: 9,
    title: "Pháp Sư Tiễn Táng Frieren - Tập 6",
    originalTitle: "Sousou no Frieren, Frieren: Beyond Journey's End",
    genre: ["Fantasy", "Slice of Life", "Drama"],
    description:
      "Tổ đội anh hùng đã đánh bại được quỷ vương và kết thúc cuộc hành trình của họ. Nhưng thế chưa phải là hết, cuộc đời của cô nàng pháp sư Elf này sẽ còn rất dài, hơn cả những người đồng đội cũ của cô, một cuộc phiêu lưu mới để cô trải qua nhiều cung bậc cảm xúc, cũng như là học hỏi thêm về con người.",
    year: 2024,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5540.jpeg?alt=media&token=fe4ac79b-5b5d-4461-aee2-d7322b61bc09",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5540.jpeg?alt=media&token=fe4ac79b-5b5d-4461-aee2-d7322b61bc09",
      "https://firebasestorage.googleapis.com/v0/b/store-teelab.appspot.com/o/products%2FIMG_5541.jpeg?alt=media&token=f8935b0d-9d4f-440e-b009-36ed30cbb5e9",
    ],
    author: "Saitou Keiichirou",
    price: 45000,
    purchaseDate: "2025-01-11",
    publisher: "Kim Đồng",
  },
];

export default animes;
