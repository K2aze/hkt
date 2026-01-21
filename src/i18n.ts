import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        top: "Home",
        ecotourism: "Ecotourism",
        tourist_spots: "Tourist Attractions",
        sdgs: "SDGs",
        language: "Language",
        hero_text: "Travel to shape the future.",
        what_is_ecotourism: "What is Ecotourism",
        ecotourism_description_title:
          "A journey connecting with people while cherishing nature and culture",
        ecotourism_description:
          "A sustainable tourism style that enjoys and preserves nature and local culture.",
        panel_title: "Tourist Attractions in Okayama that Embrace Ecotourism",
        hiruzen_cycling: "Hiruzen Plateau Cycling",
        hiruzen_cycling_description:
          "A 30km cycling road circles the entire Hiruzen Plateau. Enjoy a refreshing ride while taking in magnificent scenery. Rental facilities for bicycles are available throughout the area, including sports bikes and electric-assist bicycles.",
        canoe_ecotour: "Peach Boat",
        canoe_ecotour_description:
          "Just 10 minutes from JR Okayama Station, you can enjoy a unique perspective of famous spots such as Okayama Korakuen Garden (one of Japan’s Three Great Gardens) and Okayama Castle on the Peach Boat. Relax as you float down the Asahi River between these landmarks—feel like Momotaro himself! Swan boats and rowboats are also available.",
        kurashiki_panel_title: "Kurashiki Bikan Historical Quarter",
        kurashiki_panel_title_description:
          "A beautiful historic district with white-walled storehouses and willow-lined streets. Perfect for strolling, shopping, and enjoying local cuisine.",
        korakuen_panel_title: "Okayama Korakuen Garden & Okayama Castle",
        korakuen_panel_title_description:
          "One of Japan’s Three Great Gardens, offering stunning seasonal scenery. Enjoy a leisurely walk through the expansive grounds with ponds, teahouses, and peaceful landscapes.",
        ushimado_panel_title: "Ushimado & Maejima Island",
        ushimado_panel_title_description:
          "Known as the 'Aegean Sea of Japan,' this charming port town offers ferry rides to Maejima Island. There, you can enjoy tranquil coastal scenery, cycling, and relaxing walks surrounded by nature.",
        sdgs_initiatives: "SDGs Initiatives",
        sdgs_full_form: "Sustainable Development Goals",
        read_more: "Read More",
        reservation_text:
          "Book your nature-based ecotourism experience here",
        book_now: "Book Now",
      },
    },
    ja: {
      translation: {
        top: "トップ",
        ecotourism: "エコツーリズム",
        tourist_spots: "観光名所",
        sdgs: "SDGs",
        language: "言語",
        hero_text: "旅することが、未来をつくる。",
        what_is_ecotourism: "エコツーリズムとは",
        ecotourism_description_title:
          "自然環境や文化を大切にしながらそこに住む人たちとつながる旅",
        ecotourism_description:
          "自然や地域文化を守りながら楽しむ、持続可能な観光のスタイルです。",
        panel_title: "エコツーリズムを取り入れた岡山県の観光名所",
        hiruzen_cycling: "蒜山高原サイクリング",
        hiruzen_cycling_description:
          "蒜山高原内をぐるりと一周できる全長約30kmの自転車道路が整備されています。雄大な景色を眺めながら自転車で爽快にサイクリング。心身ともにリフレッシュできます。自転車のレンタル施設も各所に整備されており、スポーツバイクや電動アシスト付自転車のレンタルも行っています。",
        canoe_ecotour: "桃ボート",
        canoe_ecotour_description:
          "JR岡山駅から10分という好アクセスで、「日本三名園」の一つ岡山後楽園や「日本100名城」岡山城などの観光スポットを、陸上とは全く異なる視点で楽しめる桃ボート。岡山後楽園と岡山城の間を流れる旭川を桃型ボートに乗ってのんびり水上散歩しよう。桃太郎気分が味わえるかも?!その他にも、スワンボート、手漕ぎボートもあります。",
        kurashiki_panel_title: "倉敷美観地区",
        kurashiki_panel_title_description:
          "白壁の蔵屋敷と柳並木が美しい、歴史情緒あふれる人気観光地です。散策やグルメも楽しめます。",
        korakuen_panel_title: "岡山後楽園・岡山城",
        korakuen_panel_title_description:
          "日本三名園の一つに数えられる、四季折々の景観が楽しめる大名庭園です。広々とした園内では、池や茶屋を巡りながらゆったりとした時間を過ごせます。",
        ushimado_panel_title: "牛窓・前島",
        ushimado_panel_title_description:
          "「日本のエーゲ海」とも呼ばれる美しい港町で、前島へのフェリーも楽しめます。前島では穏やかな海と自然が広がり、サイクリングや散策でのんびりと過ごせます。",
        sdgs_initiatives: "SDGsの取り組み",
        sdgs_full_form:
          "持続可能な開発目標（Sustainable Development Goals）",
        read_more: "続きを読む",
        reservation_text: "自然体験型エコツーリズムのご予約はこちらから",
        book_now: "ご予約はこちら",
      },
    },
    vi: {
      translation: {
        top: "Trang chủ",
        ecotourism: "Du lịch sinh thái",
        tourist_spots: "Địa điểm du lịch",
        sdgs: "SDGs",
        language: "Ngôn ngữ",
        hero_text: "Du lịch để kiến tạo tương lai.",
        what_is_ecotourism: "Du lịch sinh thái là gì",
        ecotourism_description_title:
          "Hành trình gắn kết với con người, tôn trọng thiên nhiên và văn hóa",
        ecotourism_description:
          "Một phong cách du lịch bền vững, vừa tận hưởng thiên nhiên và văn hóa địa phương, vừa bảo tồn chúng.",
        panel_title:
          "Các điểm du lịch ở Okayama kết hợp du lịch sinh thái",
        hiruzen_cycling: "Đạp xe tại cao nguyên Hiruzen",
        hiruzen_cycling_description:
          "Tuyến đường đạp xe dài 30km bao quanh toàn bộ cao nguyên Hiruzen. Tận hưởng cảm giác sảng khoái khi đạp xe giữa khung cảnh hùng vĩ. Nhiều cơ sở cho thuê xe đạp, bao gồm cả xe thể thao và xe điện, được bố trí khắp khu vực.",
        canoe_ecotour: "Thuyền đào (Peach Boat)",
        canoe_ecotour_description:
          "Chỉ cách ga JR Okayama 10 phút, bạn có thể chiêm ngưỡng những điểm nổi tiếng như vườn Korakuen (một trong ba khu vườn nổi tiếng nhất Nhật Bản) và lâu đài Okayama từ góc nhìn hoàn toàn mới trên thuyền đào. Thư giãn khi trôi dọc sông Asahi giữa hai địa danh – cảm giác như Momotaro thật sự! Ngoài ra còn có thuyền thiên nga và thuyền chèo tay.",
        kurashiki_panel_title: "Khu phố cổ Kurashiki Bikan",
        kurashiki_panel_title_description:
          "Khu phố cổ tuyệt đẹp với những nhà kho tường trắng và hàng liễu xanh. Rất lý tưởng để dạo chơi, mua sắm và thưởng thức ẩm thực địa phương.",
        korakuen_panel_title: "Vườn Korakuen & Lâu đài Okayama",
        korakuen_panel_title_description:
          "Một trong ba khu vườn nổi tiếng nhất Nhật Bản, nơi bạn có thể thưởng thức cảnh sắc thay đổi theo bốn mùa. Dạo bước qua những ao hồ, trà thất và khu vườn rộng lớn mang đến cảm giác thanh bình.",
        ushimado_panel_title: "Ushimado & Đảo Maejima",
        ushimado_panel_title_description:
          "Được mệnh danh là 'Biển Aegean của Nhật Bản', thị trấn cảng xinh đẹp này có chuyến phà ra đảo Maejima, nơi bạn có thể tận hưởng cảnh biển yên bình, đạp xe và tản bộ giữa thiên nhiên trong lành.",
        sdgs_initiatives: "Các hoạt động SDGs",
        sdgs_full_form:
          "Mục tiêu Phát triển Bền vững (Sustainable Development Goals)",
        read_more: "Đọc thêm",
        reservation_text:
          "Đặt chỗ cho trải nghiệm du lịch sinh thái gần gũi thiên nhiên tại đây",
        book_now: "Đặt ngay",
      },
    },
  },
  lng: "ja",
  fallbackLng: "ja",
  interpolation: { escapeValue: false },
});

export default i18n;
