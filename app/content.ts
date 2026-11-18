// Сайтын бүх текстийг эндээс засна. mn = монгол, en = англи.

export type Lang = "mn" | "en";

export const brand = {
  name: "KHUSLENTS.ARM",
  motto: "Built to be a champion",
};

export const images = {
  logo: "/tselogo.jpg",
  hero: "/hero.jpeg",
  journey: "/journey.jpeg",
};

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/khuslents.arm/" },
  { label: "TikTok", href: "https://www.tiktok.com/@khuslentsogtpurev" },
  { label: "Facebook", href: "https://www.facebook.com/Khuslentsogtpurev" },
  { label: "Email", href: "mailto:khuslentsogtpurev@gmail.com" },
];

export const contactHref = "mailto:khuslentsogtpurev@gmail.com";
export const phone = "94204294";
export const videoHref = "https://www.instagram.com/khuslents.arm/";
/* Дэлгүүр — захиалга Messenger/утсаар.
   orderMessenger / orderPhone хоосон бол «Залгаж захиалах» товч харагдахгүй. */
export const orderMessenger = "https://m.me/Khuslentsogtpurev"; // Facebook хуудас бол: "https://m.me/<хуудасны нэр>". Хоосон бол товч харагдахгүй.
export const orderInstagram = "https://ig.me/m/khuslents.arm";
export const orderPhone = "+97694204294";

/* Бараанууд. Зургийг public/shop/ хавтсанд хийгээд image: "/shop/hoodie.jpg" гэж бичнэ.
   price: тоогоор (₮). 0 бол «Үнэ тодорхойгүй» гэж гарна. sizes: хоосон бол хэмжээ сонгохгүй. */
export const products = [
  {
    id: "hoodie",
    category: "merch",
    image: "",
    price: 0,
    sizes: ["S", "M", "L", "XL", "XXL"],
    mn: { name: "KHUSLENTS.ARM Hoodie", text: "Нэрийн hoodie. Бэлтгэл болон өдөр тутамд." },
    en: { name: "KHUSLENTS.ARM Hoodie", text: "Branded hoodie for training and everyday wear." },
  },
  {
    id: "tshirt",
    category: "merch",
    image: "",
    price: 0,
    sizes: ["S", "M", "L", "XL", "XXL"],
    mn: { name: "KHUSLENTS.ARM Подволк", text: "Нэрийн подволк (футболк)." },
    en: { name: "KHUSLENTS.ARM T-shirt", text: "Branded t-shirt." },
  },
  {
    id: "strap",
    category: "gear",
    image: "",
    price: 0,
    sizes: [],
    mn: { name: "Бугуйн тууз", text: "Гар барилдааны бэлтгэлд зориулсан бугуйн тууз." },
    en: { name: "Wrist strap", text: "Wrist strap for arm wrestling training." },
  },
  {
    id: "handle",
    category: "gear",
    image: "",
    price: 0,
    sizes: [],
    mn: { name: "Бэлтгэлийн бариул", text: "Бугуй, хурууны хүчийг хөгжүүлэх бариул." },
    en: { name: "Training handle", text: "Handle for building wrist and finger strength." },
  },
];

export const schedulePlace = "https://maps.google.com/?q=Ulaanbaatar";

const mn = {
  nav: [
    { label: "Сургалт", href: "/training" },
    { label: "Бэлтгэлийн систем", href: "/system" },
    { label: "Дэлгүүр", href: "/shop" },
    { label: "Холбоо барих", href: "/contact" },
  ],
  login: "Нэвтрэх",
  hero: {
    register: "Бүртгүүлэх",
    intro: "Танилцуулга",
  },
  features: [
    { icon: "dumbbell", label: "Сургалт", href: "/training" },
    { icon: "layers", label: "Систем", href: "/system" },
    { icon: "trophy", label: "Амжилт", href: "#journey" },
  ],
  programs: {
    title: "Сургалтын хөтөлбөр",
    items: [
      { icon: "users", title: "Танхимын сургалт", text: "Дасгалжуулагчтай биечлэн, ширээн дээр техникээ сайжруулна.", badge: "Зөвхөн 20 хүн авна", image: images.journey },
      { icon: "headset", title: "Онлайн сургалт", text: "Байршлаас үл хамааран онлайнаар заавар, зөвлөгөө авна.", badge: "", image: images.hero },
      { icon: "layers", title: "Бэлтгэлийн систем", text: "Хүч, шөрмөс, техникийн долоо хоног бүрийн төлөвлөгөө.", badge: "", image: "" },
    ],
  },
  journey: {
    eyebrow: "Тамирчны тухай",
    title: "Хамгийн сайнаараа хичээ, чиний өдөр ирнэ.",
    name: "Хүслэн",
    subtitle: "Амжилт",
    items: [
      { year: "3 удаагийн", text: "Улсын аварга" },
      { year: "Мастер", text: "Олон улсын хэмжээний спортын мастер" },
      { year: "2025", text: "Азийн аварга шалгаруулах тэмцээн — хоёр мөнгөн медаль" },
      { year: "2026", text: "Азийн цом — алт, мөнгөн медаль" },
      { year: "2026", text: "Дэлхийн цом — хоёр алтан медаль" },
      { year: "Бүс", text: "Дэлхийн цомын аваргын бүс — Монголд цорын ганц" },
      { year: "2026", text: "Дэлхийн аварга шалгаруулах тэмцээн — 4-р байр" },
      { year: "2025", text: "Монголын Гар Барилдааны Нэгдсэн Холбооны шилдэг тамирчин" },
    ],
  },
  statement: {
    eyebrow: "Аварга",
    big: "Монголын гар барилдааныг дэлхийд.",
    italic: "Ялалт бэлтгэлээс эхэлдэг.",
  },
  video: {
    eyebrow: "Видео",
    title: "Танилцуулга",
    text: "Бэлтгэл, тэмцээний видеонуудыг манай сошиал хуудаснаас үзээрэй.",
    cta: "Видео үзэх",
  },
  schedule: {
    eyebrow: "Хуваарь",
    title: "Бэлтгэлийн цаг",
    text: "Долоо хоног бүр дараах цагуудад бэлтгэл хийгдэнэ. Анх удаа ирэх бол урьдчилан бүртгүүлээрэй.",
    map: "Байршил харах",
    items: [
      { time: "18:00", title: "Анхан шатны бэлтгэл", place: "Даваа, Лхагва, Баасан", mapUrl: "https://maps.google.com/?q=Ulaanbaatar" },
      { time: "20:00", title: "Тэмцээний бэлтгэл", place: "Мягмар, Пүрэв, Бямба", mapUrl: "https://maps.google.com/?q=Ulaanbaatar" },
    ],
  },
  closing: {
    title: "Бүртгүүлэхэд бэлэн үү?",
    text: "Бүртгүүлээд эхний бэлтгэлдээ ирээрэй. Насны болон түвшний хязгааргүй.",
  },
  footer: {
    tagline: "Гар барилдааны бэлтгэл, тэмцээн, чансаа — Монголд.",
    menu: "Цэс",
    social: "Сошиал",
    rights: "Бүх эрх хуулиар хамгаалагдсан.",
    legal: ["Үйлчилгээний нөхцөл", "Нууцлалын бодлого"],
  },
  pages: {
    training: {
      eyebrow: "Сургалт",
      title: "Ширээн дээр сурч, ширээн дээр ялна.",
      text: "Гар барилдааны спортоор хичээллэж, өөрийн хүч чадал, тэсвэр хатуужил, сахилга батыг хөгжүүлэхийг хүссэн хүн бүрийг урьж байна.",
      limit: "Сургалтад зөвхөн 20 хүн авна",
      limitText: "Дасгалжуулагч хүн бүртэй анхаарал хандуулж ажиллахын тулд бүлгийг 20 хүнээр хязгаарласан. Эрт бүртгүүлээрэй.",
      price: { title: "Төлбөр", label: "Сургалтын төлбөр", amount: "120,000₮", per: "/ сар", note: "Заалны төлбөр үүнд ороогүй, тусдаа төлнө." },
      online: {
        title: "Онлайн сургалт",
        text: "Байршлаас үл хамааран гар барилдаанаар хичээллэх хүсэлтэй хүмүүст онлайнаар заавар, зөвлөгөө өгч ажиллана.",
        items: [
          "Бэлтгэлийн төлөвлөгөө, чиглэл өгнө",
          "Техник, арга барилын талаар зөвлөгөө өгнө",
          "Бэлтгэлийн явц, ахиц дэвшилд зөвлөгөө өгнө",
          "Тогтмол холбоотой байж, асуултад хариулна",
        ],
      },
      benefitsTitle: "Сургалтын давуу тал",
      benefits: [
        { icon: "trophy", title: "Зөв техник, арга барил", text: "Гар барилдааны зөв техник, арга барилд суралцана." },
        { icon: "cap", title: "Анхан шатнаас эхэлнэ", text: "Урьд нь хичээллэж байгаагүй ч анхан шатнаас нь эхэлж заана." },
        { icon: "users", title: "Нас, биеийн онцлогт тохирсон", text: "Нас, биеийн онцлогт тохируулсан бэлтгэл хийнэ." },
        { icon: "layers", title: "Хариуцлага, сахилга бат", text: "Хариуцлага, сахилга бат, тууштай байдлыг төлөвшүүлнэ." },
      ],
    },
    system: {
      eyebrow: "Бэлтгэлийн систем",
      title: "Хүч бол санамсаргүй зүйл биш.",
      text: "Энэхүү бэлтгэлийн системийг би өөрийн 3 жилийн турш хийсэн судалгаа, туршилт болон олон чадварлаг тамирчид, мэдлэг туршлагатай хүмүүсийн зөвлөгөө, тусламжид үндэслэн боловсруулсан.",
      price: { title: "Төлбөр", label: "Бэлтгэлийн систем", amount: "100,000₮", per: "", note: "Сургалтаас тусдаа, төлбөртэйгөөр санал болгоно." },
      buy: "Захиалах",
      pillarsTitle: "Дөрвөн тулгуур",
      pillars: [
        { icon: "dumbbell", title: "Хүч", text: "Гар, бугуй, мөрний хүчийг үе шаттайгаар нэмэгдүүлнэ." },
        { icon: "layers", title: "Шөрмөс", text: "Шөрмөс, холбоосыг бэхжүүлж гэмтлээс сэргийлнэ." },
        { icon: "trophy", title: "Техник", text: "Хук, топ ролл, пресс — барилдааны үндсэн техникүүд." },
        { icon: "chart", title: "Сэргэлт", text: "Амралт, хооллолт, ачааллын зөв хуваарилалт." },
      ],
      stepsTitle: "Хэрхэн ажилладаг вэ",
      steps: [
        { title: "Түвшин тогтоох", text: "Эхний бэлтгэл дээр хүч, техникийн түвшинг тань үнэлнэ." },
        { title: "Хувийн төлөвлөгөө", text: "Зорилгод тань тааруулсан долоо хоногийн хөтөлбөр гаргана." },
        { title: "Хяналт", text: "Ахиц дэвшлийг тань тогтмол хянаж, төлөвлөгөөг шинэчилнэ." },
      ],
    },
    shop: {
      eyebrow: "Дэлгүүр",
      title: "Аваргын хэрэгсэл.",
      text: "KHUSLENTS.ARM нэрийн хувцас болон гар барилдааны хэрэгсэл. Сонгоод Messenger, Instagram эсвэл утсаар захиална уу.",
      size: "Хэмжээ",
      qty: "Тоо",
      noPrice: "Үнэ тодорхойгүй",
      order: "Messenger-ээр захиалах",
      call: "Залгаж захиалах · 9420-4294",
      instagram: "Instagram-аар захиалах",
      howTitle: "Хэрхэн захиалах вэ",
      how: [
        "Бараа, хэмжээ, тоогоо сонгоно.",
        "«Messenger-ээр захиалах» товч дарахад захиалгын мессеж бэлэн болно. Эсвэл Instagram-аар бичих, 9420-4294 дугаарт залгаж болно.",
        "Бид тантай холбогдож төлбөр, хүргэлтийг тохирно.",
      ],
      messageIntro: "Сайн байна уу, дараах барааг захиалмаар байна:",
      categories: { merch: "Нэрийн хувцас", gear: "Гар барилдааны хэрэгсэл" },
    },
    contact: {
      eyebrow: "Холбоо барих",
      title: "Бидэнтэй холбогдоорой.",
      text: "Бүртгэл, сургалт, захиалгын талаар асуух зүйл байвал доорх сувгаар холбогдоно уу.",
      email: "Имэйл",
      social: "Сошиал",
      location: "Байршил",
      phone: "Утас",
    },
  },
  bottomNav: [
    { icon: "home", label: "Нүүр", href: "/" },
    { icon: "cap", label: "Сургалт", href: "/training" },
    { icon: "layers", label: "Систем", href: "/system" },
    { icon: "bag", label: "Дэлгүүр", href: "/shop" },
    { icon: "mail", label: "Холбоо", href: "/contact" },
  ],
};

const en: typeof mn = {
  nav: [
    { label: "Training", href: "/training" },
    { label: "Training system", href: "/system" },
    { label: "Shop", href: "/shop" },
    { label: "Contact", href: "/contact" },
  ],
  login: "Log in",
  hero: {
    register: "Sign up",
    intro: "Introduction",
  },
  features: [
    { icon: "dumbbell", label: "Training", href: "/training" },
    { icon: "layers", label: "System", href: "/system" },
    { icon: "trophy", label: "Achievements", href: "#journey" },
  ],
  programs: {
    title: "Our programs",
    items: [
      { icon: "users", title: "In-person training", text: "Train face to face with a coach and sharpen your technique at the table.", badge: "Only 20 spots", image: images.journey },
      { icon: "headset", title: "Online coaching", text: "Coaching and advice online, wherever you are.", badge: "", image: images.hero },
      { icon: "layers", title: "Training system", text: "Weekly plans for strength, tendons and technique.", badge: "", image: "" },
    ],
  },
  journey: {
    eyebrow: "About the athlete",
    title: "Give it your best — your day will come.",
    name: "Khuslen",
    subtitle: "Achievements",
    items: [
      { year: "3-time", text: "National champion" },
      { year: "Master", text: "International Master of Sport" },
      { year: "2025", text: "Asian Championships — two silver medals" },
      { year: "2026", text: "Asian Cup — gold and silver medals" },
      { year: "2026", text: "World Cup — two gold medals" },
      { year: "Belt", text: "World Cup champion's belt — the only one in Mongolia" },
      { year: "2026", text: "World Championships — 4th place" },
      { year: "2025", text: "Best athlete of the year, Mongolian Armwrestling Federation" },
    ],
  },
  statement: {
    eyebrow: "Champion",
    big: "Mongolian arm wrestling on the world stage.",
    italic: "Victory starts in training.",
  },
  video: {
    eyebrow: "Video",
    title: "Introduction",
    text: "Watch our training and competition videos on social media.",
    cta: "Watch video",
  },
  schedule: {
    eyebrow: "Schedule",
    title: "Training hours",
    text: "Weekly sessions run at the times below. First time? Please sign up in advance.",
    map: "Directions",
    items: [
      { time: "18:00", title: "Beginner training", place: "Mon, Wed, Fri", mapUrl: "https://maps.google.com/?q=Ulaanbaatar" },
      { time: "20:00", title: "Competition training", place: "Tue, Thu, Sat", mapUrl: "https://maps.google.com/?q=Ulaanbaatar" },
    ],
  },
  closing: {
    title: "Ready to take a seat at the table?",
    text: "Sign up and come to your first session. All ages and levels welcome.",
  },
  footer: {
    tagline: "Arm wrestling training, competitions and rankings in Mongolia.",
    menu: "Menu",
    social: "Social",
    rights: "All rights reserved.",
    legal: ["Terms of use", "Privacy policy"],
  },
  pages: {
    training: {
      eyebrow: "Training",
      title: "Learn at the table. Win at the table.",
      text: "We welcome everyone who wants to take up arm wrestling and build their strength, endurance, toughness and discipline.",
      limit: "Only 20 people per group",
      limitText: "Groups are capped at 20 so the coach can give everyone real attention. Sign up early.",
      price: { title: "Pricing", label: "Training fee", amount: "120,000₮", per: "/ month", note: "Gym fee is not included and is paid separately." },
      online: {
        title: "Online coaching",
        text: "Wherever you live, if you want to take up arm wrestling, we coach and advise you online.",
        items: [
          "A training plan and clear direction",
          "Advice on technique and tactics",
          "Feedback on your training and progress",
          "Regular contact and answers to your questions",
        ],
      },
      benefitsTitle: "Why train with us",
      benefits: [
        { icon: "trophy", title: "Correct technique", text: "Learn proper arm wrestling technique and tactics." },
        { icon: "cap", title: "Start from zero", text: "No experience needed — we start from the basics." },
        { icon: "users", title: "Tailored to you", text: "Training adapted to your age and body." },
        { icon: "layers", title: "Responsibility & discipline", text: "Build responsibility, discipline and perseverance." },
      ],
    },
    system: {
      eyebrow: "Training system",
      title: "Strength is no accident.",
      text: "I developed this training system from three years of my own research and testing, together with advice and help from many skilled athletes and experienced people.",
      price: { title: "Pricing", label: "Training system", amount: "100,000₮", per: "", note: "Offered separately from the training, for a fee." },
      buy: "Order",
      pillarsTitle: "Four pillars",
      pillars: [
        { icon: "dumbbell", title: "Strength", text: "Build arm, wrist and shoulder strength step by step." },
        { icon: "layers", title: "Tendons", text: "Strengthen tendons and ligaments to prevent injury." },
        { icon: "trophy", title: "Technique", text: "Hook, top roll, press — the core techniques of the sport." },
        { icon: "chart", title: "Recovery", text: "Rest, nutrition and smart load management." },
      ],
      stepsTitle: "How it works",
      steps: [
        { title: "Assessment", text: "We assess your strength and technique at the first session." },
        { title: "Personal plan", text: "You get a weekly program built around your goals." },
        { title: "Follow-up", text: "We track your progress and update the plan regularly." },
      ],
    },
    shop: {
      eyebrow: "Shop",
      title: "Gear for champions.",
      text: "KHUSLENTS.ARM merch and arm wrestling equipment. Pick what you want and order via Messenger, Instagram or phone.",
      size: "Size",
      qty: "Qty",
      noPrice: "Price TBA",
      order: "Order via Messenger",
      call: "Call to order · 9420-4294",
      instagram: "Order via Instagram",
      howTitle: "How to order",
      how: [
        "Choose the item, size and quantity.",
        "Tap “Order via Messenger” and your order message is ready. You can also message us on Instagram or call 9420-4294.",
        "We contact you to arrange payment and delivery.",
      ],
      messageIntro: "Hi, I would like to order:",
      categories: { merch: "Merch", gear: "Arm wrestling gear" },
    },
    contact: {
      eyebrow: "Contact",
      title: "Get in touch.",
      text: "Questions about signing up, training or orders? Reach us through any channel below.",
      email: "Email",
      social: "Social",
      location: "Location",
      phone: "Phone",
    },
  },
  bottomNav: [
    { icon: "home", label: "Home", href: "/" },
    { icon: "cap", label: "Training", href: "/training" },
    { icon: "layers", label: "System", href: "/system" },
    { icon: "bag", label: "Shop", href: "/shop" },
    { icon: "mail", label: "Contact", href: "/contact" },
  ],
};

export const content = { mn, en };
export type Content = typeof mn;
