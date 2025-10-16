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
        hiruzen_cycling: "Hiruzen Plateau Cycling",
        hiruzen_cycling_description:
          "From June to late autumn, a 30km cycling path is available at Hiruzen Plateau. Experience nature through birch tree-lined paths while cycling, walking, jogging, or horseback riding. Bicycles can be rented at discounted rates from plateau facilities. Whether for a girls' trip, family, honeymoon, or solo adventure, cycling here is always satisfying and fun.",
        canoe_ecotour: "Canoe Ecotour",
        canoe_ecotour_description:
          "Just 110 minutes from JR Okayama Station, this canoe tour offers excellent access to nature. Certified as one of the 'Top 100 Natural Sites,' enjoy the vibrant autumn foliage and the contrast of blue and white landscapes from the water. Operating on weekdays, the tour includes camping and free activities, offering a fresh experience. Paddle through clear rivers for a refreshing escape. Carefully planned for a perfect ecotour adventure!",
        traditional_lodging: "Traditional Lodging",
        traditional_lodging_description:
          "An experience blending traditional architecture with modern comfort.",
        sdgs_initiatives: "SDGs Initiatives",
        sdgs_full_form: "Sustainable Development Goals",
        read_more: "Read More",
        reservation_text: "Book your nature-based ecotourism experience here",
        book_now: "Book Now",
      },
    },
    ja: {
      translation: {
        top: "トップ",
        ecotourism: "エコツーリズム",
        tourist_spots: "観光名所",
        sdgs: "SDGs",
        language: "langugage",
        hero_text: "旅することが、未来をつくる。",
        what_is_ecotourism: "エコツーリズムとは",
        ecotourism_description_title:
          "自然環境や文化を大切にしながらそこに住む人たちとつながる旅",
        ecotourism_description:
          "自然や地域文化を守りながら楽しむ、持続可能な観光のスタイルです。",
        hiruzen_cycling: "蒜山高原サイクリング",
        hiruzen_cycling_description:
          "蒜山高原界では6月から晩秋に至る長期間にわたり30km圏の自転車道が整備されています。 豊かな自然を感受できる白樺並木を通り、 サイクリング、ウォーキング、ジョッギング、乗馬などのリクリエーションを楽しめます。 自転車は高原の施設店舗をお得に利用される料金でレンタルできます。 女子旅やファミリー、ハニーケーション、一人旅どんなスタイルでも満足してサイクリングを楽しいです。",
        canoe_ecotour: "カヌーエコツアー",
        canoe_ecotour_description:
          "JR岡山駅から110分という好アクセス。「自然志 向通り、カヌー講座追求を得て」「自然100選」に認定 感じる紅葉のコントラスト、青と白さを風景をまる 水面にしぶる秋晴れ・エコツアー。平日昼営業の キャンプイン構想・ライフワークを図りそして自由、 気。秋の夜で新鮮い晴れをヨウベウでい新鮮い 気。カヌーで秋高いかを気分清流な方ながら素で 受けられいこでい。平静時の計画と上体協調整備 整理でかカヌー・エコツアー の総配がお好ます！",
        traditional_lodging: "古民家宿泊施設",
        traditional_lodging_description:
          "伝統的な建築と現代的な快適さを融合した宿泊施設での体験",
        sdgs_initiatives: "SDGsの取り組み",
        sdgs_full_form: "持続可能な開発目標（Sustainable Development Goals）",
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
          "Một phong cách du lịch bền vững, tận hưởng thiên nhiên và văn hóa địa phương đồng thời bảo vệ chúng.",
        hiruzen_cycling: "Đạp xe cao nguyên Hiruzen",
        hiruzen_cycling_description:
          "Tại cao nguyên Hiruzen, từ tháng 6 đến cuối thu, có tuyến đường đạp xe dài 30km được xây dựng. Du khách có thể trải nghiệm thiên nhiên qua hàng cây bạch dương, tham gia đạp xe, đi bộ, chạy bộ hoặc cưỡi ngựa. Xe đạp có thể được thuê với giá ưu đãi tại các cơ sở trên cao nguyên. Dù là chuyến đi dành cho bạn gái, gia đình, tuần trăng mật hay một mình, đạp xe luôn mang lại sự hài lòng và niềm vui.",
        canoe_ecotour: "Tour du lịch sinh thái bằng ca nô",
        canoe_ecotour_description:
          "Cách ga JR Okayama chỉ 110 phút, tour ca nô mang đến trải nghiệm thiên nhiên tuyệt vời. Được công nhận trong 'Top 100 điểm đến tự nhiên', du khách sẽ chiêm ngưỡng sắc thu rực rỡ, sự tương phản giữa màu xanh và trắng của cảnh quan từ mặt nước. Tour diễn ra vào các ngày trong tuần, kết hợp cắm trại và các hoạt động tự do, mang lại cảm giác mới mẻ. Một chuyến đi bằng ca nô trên dòng sông trong lành sẽ làm tâm hồn bạn thư thái. Mọi kế hoạch được chuẩn bị kỹ lưỡng để mang đến trải nghiệm tuyệt vời!",
        traditional_lodging: "Lưu trú tại nhà truyền thống",
        traditional_lodging_description:
          "Trải nghiệm lưu trú kết hợp kiến trúc truyền thống với tiện nghi hiện đại.",
        sdgs_initiatives: "Các sáng kiến SDGs",
        sdgs_full_form:
          "Mục tiêu Phát triển Bền vững (Sustainable Development Goals)",
        read_more: "Đọc thêm",
        reservation_text: "Đặt chỗ cho trải nghiệm du lịch sinh thái tại đây",
        book_now: "Đặt ngay",
      },
    },
  },
  lng: "ja",
  fallbackLng: "ja",
  interpolation: { escapeValue: false },
});

export default i18n;
