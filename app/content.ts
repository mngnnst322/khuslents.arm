// Сайтын бүх текстийг эндээс засна. mn = монгол, en = англи.

export type Lang = "mn" | "en";

export const brand = {
  name: "KHUSLENTS.ARM",
  motto: "Built to be a champion",
};

export const images = {
  hero: "/hero.jpeg",
  journey: "/journey.jpeg",
};

export const socials = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "TikTok", href: "https://tiktok.com/" },
  { label: "Facebook", href: "https://facebook.com/" },
  { label: "Email", href: "mailto:info@example.com" },
];

export const contactHref = "mailto:info@example.com";
export const videoHref = "https://tiktok.com/";

const mn = {
  nav: [
    { label: "Сургалт", href: "#programs" },
    { label: "Амжилт", href: "#journey" },
    { label: "Хуваарь", href: "#schedule" },
    { label: "Холбоо барих", href: "#contact" },
  ],
  login: "Нэвтрэх",
  hero: {
    register: "Бүртгүүлэх",
    intro: "Танилцуулга",
  },
  features: [
    { icon: "dumbbell", label: "Сургалт", href: "#programs" },
    { icon: "layers", label: "Систем", href: "#programs" },
    { icon: "trophy", label: "Амжилт", href: "#journey" },
    { icon: "chart", label: "Чансаа", href: "#journey" },
  ],
  programs: {
    title: "Сургалтын хөтөлбөр",
    items: [
      { icon: "users", title: "Танхимын сургалт", text: "Дасгалжуулагчтай биечлэн, ширээн дээр техникээ сайжруулна.", badge: "20 сурагч сонгон авна", image: images.journey },
      { icon: "headset", title: "Онлайн сургалт", text: "Хаанаас ч хамаагүй видео заавар, хувийн зөвлөгөөтэй.", badge: "", image: images.hero },
      { icon: "layers", title: "Бэлтгэлийн систем", text: "Хүч, шөрмөс, техникийн долоо хоног бүрийн төлөвлөгөө.", badge: "", image: "" },
    ],
  },
  journey: {
    eyebrow: "Тамирчны тухай",
    title: "Ширээн дээр бүх зүйлээ зориулна.",
    name: "Хүслэн",
    subtitle: "Амжилт",
    items: [
      { year: "3×", text: "Улсын аварга" },
      { year: "Мастер", text: "Олон улсын хэмжээний спортын мастер" },
      { year: "Ази", text: "Азийн аварга шалгаруулах тэмцээн — хоёр мөнгөн медаль" },
      { year: "Азийн цом", text: "Азийн цом — алт, мөнгөн медаль" },
      { year: "Дэлхийн цом", text: "Дэлхийн цом — хоёр алтан медаль" },
      { year: "Бүс", text: "Дэлхийн цомын аваргын бүс — Монголд цорын ганц" },
      { year: "Дэлхий", text: "Дэлхийн аварга шалгаруулах тэмцээн — 4-р байр" },
      { year: "2025", text: "Монголын Гар Барилдааны Нэгдсэн Холбооны шилдэг тамирчин" },
      { year: "Дасгалжуулагч", text: "Монголын гар барилдааны албан ёсны дасгалжуулагч" },
    ],
  },
  statement: {
    eyebrow: "Зорилго",
    big: "Монголын гар барилдааныг дэлхийд.",
    italic: "Ялалт бэлтгэлээс эхэлдэг.",
    glow: "Аварга болохоор төрсөн.",
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
    title: "Ширээнд суухад бэлэн үү?",
    text: "Бүртгүүлээд эхний бэлтгэлдээ ирээрэй. Насны болон түвшний хязгааргүй.",
  },
  footer: {
    tagline: "Гар барилдааны бэлтгэл, тэмцээн, чансаа — Монголд.",
    menu: "Цэс",
    social: "Сошиал",
    rights: "Бүх эрх хуулиар хамгаалагдсан.",
    legal: ["Үйлчилгээний нөхцөл", "Нууцлалын бодлого"],
  },
  bottomNav: [
    { icon: "home", label: "Нүүр", href: "#top" },
    { icon: "cap", label: "Сургалт", href: "#programs" },
    { icon: "play", label: "Видео", href: "#video" },
    { icon: "trophy", label: "Чансаа", href: "#journey" },
    { icon: "user", label: "Нэвтрэх", href: "#contact" },
  ],
};

const en: typeof mn = {
  nav: [
    { label: "Training", href: "#programs" },
    { label: "Achievements", href: "#journey" },
    { label: "Schedule", href: "#schedule" },
    { label: "Contact", href: "#contact" },
  ],
  login: "Log in",
  hero: {
    register: "Sign up",
    intro: "Introduction",
  },
  features: [
    { icon: "dumbbell", label: "Training", href: "#programs" },
    { icon: "layers", label: "System", href: "#programs" },
    { icon: "trophy", label: "Achievements", href: "#journey" },
    { icon: "chart", label: "Ranking", href: "#journey" },
  ],
  programs: {
    title: "Our programs",
    items: [
      { icon: "users", title: "In-person training", text: "Train face to face with a coach and sharpen your technique at the table.", badge: "Only 20 spots", image: images.journey },
      { icon: "headset", title: "Online coaching", text: "Video lessons and personal feedback from anywhere.", badge: "", image: images.hero },
      { icon: "layers", title: "Training system", text: "Weekly plans for strength, tendons and technique.", badge: "", image: "" },
    ],
  },
  journey: {
    eyebrow: "About the athlete",
    title: "Everything goes on the table.",
    name: "Khuslen",
    subtitle: "Achievements",
    items: [
      { year: "3×", text: "National champion" },
      { year: "Master", text: "International Master of Sport" },
      { year: "Asia", text: "Asian Championships — two silver medals" },
      { year: "Asian Cup", text: "Asian Cup — gold and silver medals" },
      { year: "World Cup", text: "World Cup — two gold medals" },
      { year: "Belt", text: "World Cup champion's belt — the only one in Mongolia" },
      { year: "World", text: "World Championships — 4th place" },
      { year: "2025", text: "Best athlete of the year, Mongolian Armwrestling Federation" },
      { year: "Coach", text: "Official coach of Mongolian arm wrestling" },
    ],
  },
  statement: {
    eyebrow: "Mission",
    big: "Mongolian arm wrestling on the world stage.",
    italic: "Victory starts in training.",
    glow: "Built to be a champion.",
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
  bottomNav: [
    { icon: "home", label: "Home", href: "#top" },
    { icon: "cap", label: "Training", href: "#programs" },
    { icon: "play", label: "Video", href: "#video" },
    { icon: "trophy", label: "Ranking", href: "#journey" },
    { icon: "user", label: "Log in", href: "#contact" },
  ],
};

export const content = { mn, en };
export type Content = typeof mn;
