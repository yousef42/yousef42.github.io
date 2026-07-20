export interface Project {
  slug: string;
  title: string;
  type: string;
  logo: string;
  image: string;
  imageFit?: "cover" | "contain";
  shortDescription: string;
  description: string;
  myRole: string;
  technologies: string[];
  images: string[];
  demoUrl?: string;
  videoUrl?: string;
  demoGif?: string;
  cafeBazaarUrl?: string;
  myketUrl?: string;
}

const navaImages = [
  "/images/projects/nava/ir.navayeheiat-13322134221۲.jpg.webp",
  "/images/projects/nava/ir.navayeheiat-28603304715.webp",
  "/images/projects/nava/ir.navayeheiat-286033047151.jpg-2.webp",
  "/images/projects/nava/ir.navayeheiat-293649528069.webp",
  "/images/projects/nava/ir.navayeheiat-908676167.webp",
  "/images/projects/nava/ir.navayeheiat-90867616731.webp",
  "/images/projects/nava/ir.navayeheiat-91786824661.webp",
];

const gift20Images = [
  "/images/projects/گیفت ۲۰/35af939b-1381-4a4a-bc23-800eac1cdf37.png.webp",
  "/images/projects/گیفت ۲۰/56151ba8-8b9b-4c06-a8cd-11330af7709a.png.webp",
  "/images/projects/گیفت ۲۰/6f454a5d-b82b-4d4b-a909-1003edeaf837.png.webp",
  "/images/projects/گیفت ۲۰/832d8aa0-9f16-4805-a4ec-d6eb14375c99.png.webp",
  "/images/projects/گیفت ۲۰/bf7bb875-a225-4005-9472-ff1f495c46ce.png.webp",
  "/images/projects/گیفت ۲۰/e373e0f4-b05d-4daf-955e-6be04559f4d1.png.webp",
];

const bimehImages = [
  "/images/projects/bimeh/Screenshot 1404-11-19 at 20.24.22.png",
  "/images/projects/bimeh/Screenshot 1404-11-19 at 20.28.14.png",
  "/images/projects/bimeh/Screenshot 1404-11-19 at 20.28.25.png",
];

const refahNamaImages = [
  "/images/projects/refahNama/photo_1404-11-19 20.11.03.jpeg",
  "/images/projects/refahNama/photo_1404-11-19 20.11.08.jpeg",
  "/images/projects/refahNama/photo_1404-11-19 20.11.30.jpeg",
  "/images/projects/refahNama/photo_1404-11-19 20.11.41.jpeg",
  "/images/projects/refahNama/photo_1404-11-19 20.11.59.jpeg",
  "/images/projects/refahNama/photo_1404-11-19 20.12.06.jpeg",
  "/images/projects/refahNama/photo_1404-11-19 20.13.45.jpeg",
  "/images/projects/refahNama/photo_1404-11-19 20.14.07.jpeg",
];

const safarmalImages = [
  "/images/projects/safarmal/Screenshot 1404-11-19 at 17.28.40.png",
  "/images/projects/safarmal/Screenshot 1404-11-19 at 17.28.47.png",
  "/images/projects/safarmal/Screenshot 1404-11-19 at 17.45.07.png",
  "/images/projects/safarmal/Screenshot 1404-11-19 at 17.46.43.png",
  "/images/projects/safarmal/Screenshot 1404-11-19 at 17.46.54.png",
  "/images/projects/safarmal/Screenshot 1404-11-19 at 17.47.12.png",
  "/images/projects/safarmal/Screenshot 1404-11-19 at 17.52.58.png",
  "/images/projects/safarmal/Screenshot 1404-11-19 at 17.53.09.png",
  "/images/projects/safarmal/Screenshot 1404-11-19 at 17.53.52.png",
  "/images/projects/safarmal/Screenshot_20260208-171101_SafarMal.jpg",
  "/images/projects/safarmal/Screenshot_20260208-171116_SafarMal.jpg",
  "/images/projects/safarmal/Screenshot_20260208-171128_SafarMal.jpg",
  "/images/projects/safarmal/Screenshot_20260208-171139_SafarMal.jpg",
  "/images/projects/safarmal/Screenshot_20260208-171151_SafarMal.jpg",
  "/images/projects/safarmal/Screenshot_20260208-171158_SafarMal.jpg",
  "/images/projects/safarmal/Screenshot_20260208-171223_SafarMal.jpg",
];

const miniAppEmojiFyImages = [
  "/images/projects/MiniApp-EmojiFy/Screenshot 1404-12-09 at 16.37.12.png",
  "/images/projects/MiniApp-EmojiFy/Screenshot 1404-12-09 at 16.37.21.png",
  "/images/projects/MiniApp-EmojiFy/Screenshot 1404-12-09 at 16.37.30.png",
  "/images/projects/MiniApp-EmojiFy/Screenshot 1404-12-09 at 16.37.40.png",
  "/images/projects/MiniApp-EmojiFy/Screenshot 1404-12-09 at 16.37.57.png",
  "/images/projects/MiniApp-EmojiFy/Screenshot 1404-12-09 at 16.38.08.png",
  "/images/projects/MiniApp-EmojiFy/Screenshot 1404-12-09 at 16.38.43.png",
];

const kargoshaImages = [
  "/images/projects/kargosha/k-argosha.png",
];

const nadRevivalImages = [
  "/images/projects/nadrevival/home.png",
  "/images/projects/nadrevival/product.png",
  "/images/projects/nadrevival/cart.png",
  "/images/projects/nadrevival/checkout.png",
  "/images/projects/nadrevival/blog.png",
];

const shinancePanelImages = [
  "/images/projects/shinance-panel/logo.png",
];

export const projects: Project[] = [
  {
    slug: "shinance-panel",
    title: "Shinance Panel",
    type: "پنل کاربری صرافی رمزارز و سامانه معاملات آنلاین",
    logo: shinancePanelImages[0],
    image: shinancePanelImages[0],
    imageFit: "contain",
    shortDescription:
      "پنل جامع صرافی رمزارز با بازار و معاملات Real-time، سفارش‌های Limit و Market، معامله سریع، مدیریت کیف پول، واریز و برداشت، احراز هویت و گزارش‌های مالی.",
    description:
      "Shinance Panel وب‌اپلیکیشن اصلی کاربران صرافی Shinance است و چرخه کامل فعالیت کاربر در یک پلتفرم معاملاتی را پوشش می‌دهد. داشبورد، ارزش کل دارایی و موجودی قابل معامله را نمایش می‌دهد و بخش بازارها امکان مشاهده جفت‌ارزها، قیمت و تغییرات ۲۴ ساعته و افزودن بازارهای منتخب را فراهم می‌کند. در صفحه معامله، دفتر سفارش و معاملات انجام‌شده به‌صورت Real-time با SignalR به‌روزرسانی می‌شوند و کاربران می‌توانند سفارش Limit یا Market ثبت و سفارش‌های باز را مدیریت کنند. معامله سریع، کیف پول تفکیک‌شده دارایی‌ها، واریز و برداشت ریالی، واریز و برداشت رمزارز بر اساس شبکه، تاریخچه گردش حساب، درخواست‌ها و گزارش کامل سفارش‌ها از دیگر جریان‌های اصلی سامانه هستند. فرایندهای ثبت‌نام و ورود با OTP، refresh token و مدیریت session، احراز هویت و بارگذاری مدارک، تایید ایمیل و حساب بانکی، مدیریت سطح کاربری، ورود دومرحله‌ای و کد امنیتی برداشت در پنل پیاده‌سازی شده‌اند. سیستم تیکت و پاسخ پشتیبانی، معرفی دوستان، راهنمای تعاملی صفحات، اعلان‌های Firebase و رابط چندزبانه RTL/LTR نیز بخشی از تجربه کاربری پروژه هستند. ساختار Front-end شامل routing ماژولار و lazy loading، مدیریت state عمومی با Redux و Thunk، مدیریت server state با React Query و یک لایه متمرکز Axios برای REST API، refresh خودکار توکن و صف‌کردن درخواست‌های هم‌زمان است؛ پروژه با Vite برای محیط production ساخته می‌شود.",
    myRole:
      "توسعه و نگهداری Front-end پنل کاربری، یکپارچه‌سازی REST API و قابلیت‌های معاملاتی Real-time",
    technologies: [
      "React 18, JavaScript, TypeScript",
      "Vite",
      "Redux, Redux Thunk",
      "React Query (Server State)",
      "React Router, Lazy Loading",
      "Material UI, SCSS, RTL/LTR",
      "Axios, REST API, Refresh Token Interceptor",
      "SignalR (داده‌های معاملاتی Real-time)",
      "Firebase Messaging, Analytics, Performance",
      "JWT, OTP, Two-Factor Authentication",
      "Formik, Yup",
      "ApexCharts, ECharts, TradingView",
      "i18n (فارسی، انگلیسی و زبان‌های دیگر)",
      "Responsive Web Application",
    ],
    images: shinancePanelImages,
    demoUrl: "https://panel.shinance.net",
  },
  {
    slug: "nad-revival",
    title: "NAD+ Revival",
    type: "فروشگاه آنلاین WordPress و WooCommerce برای بازار بریتانیا",
    logo: nadRevivalImages[0],
    image: nadRevivalImages[0],
    shortDescription:
      "فروشگاه آنلاین انگلیسی‌زبان برای بازار بریتانیا با قالب اختصاصی WordPress، تجربه خرید سفارشی WooCommerce، پرداخت Stripe و Apple Pay، اشتراک محصولات و وبلاگ محتوایی.",
    description:
      "NAD+ Revival یک وب‌سایت فروشگاهی انگلیسی‌زبان برای عرضه محصولات NAD+ در بازار بریتانیاست. رابط کاربری پروژه با یک قالب اختصاصی WordPress و طراحی واکنش‌گرا پیاده‌سازی شده و مسیر کامل خرید، از معرفی محصول و گالری تصاویر تا مدیریت تعداد، سبد خرید، محاسبه ارسال، ثبت سفارش و پرداخت آنلاین را پوشش می‌دهد. صفحات اصلی، فروشگاه، جزئیات محصول، سبد خرید، تسویه‌حساب، حساب کاربری و ایمیل‌های سفارش WooCommerce متناسب با هویت بصری برند سفارشی‌سازی شده‌اند. درگاه Stripe امکان پرداخت با کارت و Apple Pay را فراهم می‌کند و افزونه‌های WooCommerce Subscriptions و All Products for Subscriptions برای فروش دوره‌ای و اشتراکی در ساختار پروژه قرار دارند. وبلاگ پروژه با دسته‌بندی، فیلتر و مرتب‌سازی مقالات برای بازاریابی محتوایی توسعه یافته است. ثبت نظر محصول و به‌روزرسانی سبد خرید به‌صورت AJAX، خبرنامه اختصاصی، فرم تماس، ارسال ایمیل با SMTP، مدیریت رضایت کوکی و بهینه‌سازی سرعت و کش نیز بخشی از امکانات فنی پروژه هستند.",
    myRole:
      "طراحی و توسعه قالب اختصاصی WordPress، سفارشی‌سازی WooCommerce و پیاده‌سازی تجربه کامل فروشگاه",
    technologies: [
      "PHP, WordPress",
      "WooCommerce",
      "قالب اختصاصی WordPress",
      "WooCommerce Template Overrides",
      "JavaScript, AJAX",
      "HTML5, CSS3, Tailwind CSS",
      "MySQL",
      "Stripe, Apple Pay",
      "WooCommerce Subscriptions",
      "طراحی واکنش‌گرا (Responsive Design)",
      "Blog, SEO, Content Marketing",
      "WP Mail SMTP",
      "Cookie Consent",
      "WP Rocket, LiteSpeed",
    ],
    images: nadRevivalImages,
    demoUrl: "https://nadrevival.com",
  },
  {
    slug: "kar-gosha",
    title: "کارگشا",
    type: "پلتفرم معرفی کسب‌وکار، شبکه اجتماعی و ارتباط Real-time",
    logo: kargoshaImages[0],
    image: kargoshaImages[0],
    imageFit: "contain",
    shortDescription:
      "پلتفرم جامع ثبت و جست‌وجوی کسب‌وکار با نقشه نشان، فید و استوری، پیام مستقیم و تماس صوتی Real-time؛ توسعه Full-stack با Next.js، Node.js، Express، MongoDB، Socket.IO و WebRTC.",
    description:
      "کارگشا یک پلتفرم جامع برای ثبت، معرفی و کشف کسب‌وکارهاست. کاربران با OTP یا رمز عبور وارد می‌شوند، پروفایل شخصی یا تجاری می‌سازند و کسب‌وکارها را بر اساس دسته‌بندی، شهر، جست‌وجوی متنی و نقشه نشان پیدا می‌کنند. بخش اجتماعی شامل فید محتوا، استوری و هایلایت، دنبال‌کردن و درخواست فالو، لایک، نظر، امتیاز و نقد، ذخیره رسانه یا کسب‌وکار و گزارش محتوای نامناسب است. پیام‌رسان داخلی از گفتگو، ارسال فایل و پیام صوتی و ویرایش یا حذف پیام پشتیبانی می‌کند؛ تماس صوتی نیز با WebRTC و Socket.IO به‌صورت Real-time پیاده‌سازی شده و برای تماس‌های ورودی از Firebase Cloud Messaging استفاده می‌شود. مدل درآمدی پروژه شامل پکیج و اشتراک، ارتقای حساب PRO، تمدید کسب‌وکار، کد تخفیف و پرداخت آنلاین زرین‌پال است. علاوه بر پنل کاربر، پنل مدیریت مبتنی بر RBAC برای مدیریت کاربران، مدیران و نقش‌ها، دسته‌بندی‌ها، زبان و ترجمه‌ها، پرداخت‌ها، اشتراک‌ها، گزارش‌ها، نظرات، استوری‌ها و تنظیمات سیستم وجود دارد. پنل بازاریاب نیز کاربران معرفی‌شده، کیف پول و محاسبه پورسانت را مدیریت می‌کند.",
    myRole: "طراحی و توسعه Full-stack، REST API، پنل مدیریت و قابلیت‌های Real-time",
    technologies: [
      "JavaScript",
      "Next.js 16, React 19, Tailwind CSS 4",
      "Node.js, Express.js (REST API)",
      "MongoDB, Mongoose",
      "Socket.IO + WebRTC (پیام و تماس صوتی Real-time)",
      "Firebase Cloud Messaging (Push Notification)",
      "JWT, OTP, bcrypt, Kavenegar",
      "Neshan Maps, OpenLayers",
      "Zarinpal Payment Gateway",
      "RBAC (ادمین، نقش‌ها و Permissionها)",
      "Multer, Sharp, FFmpeg (پردازش تصویر، ویدئو و فایل)",
      "چندزبانه و مدیریت ترجمه‌ها",
      "Recharts (داشبورد و گزارش‌ها)",
      "Nginx / Linux deployment",
    ],
    images: kargoshaImages,
    demoUrl: "https://kar-gosha.com",
  },
  {
    slug: "safarmal",
    title: "سفرمال",
    type: "اپ موبایل و وب (اندروید، iOS، وب)",
    logo: "/placeholder.svg",
    image: safarmalImages[9],
    shortDescription:
      "اپ سفر با کلاینت اندروید (Kotlin Compose)، iOS (Swift) و وب (React.js + Tailwind). بک‌اند .NET به‌صورت مایکروسرویس با Modular Monolith، SQL Server و داکر.",
    description:
      "سفرمال یک پلتفرم اپ موبایل و وب است. اپ اندروید با Kotlin و Jetpack Compose (آخرین تکنولوژی گوگل برای اندروید)، اپ iOS با Swift، و نسخه وب با React.js و Tailwind پیاده‌سازی شده است. بک‌اند با .NET 9 به‌صورت مایکروسرویس توسعه یافته و هر موجودیت ماژول جداگانه خود را دارد. دیتابیس SQL Server و معماری بک‌اند به‌صورت Modular Monolith است و کل سیستم داکرایز شده است.",
    myRole: "توسعه‌دهنده (اندروید، iOS، وب، بک‌اند)",
    technologies: [
      "Android: Kotlin, Jetpack Compose",
      "iOS: Swift",
      "Web: React.js, Tailwind CSS",
      ".NET 8, C#, ASP.NET Core (REST API)",
      "SQL Server, Entity Framework Core, Dapper",
      "CQRS, MediatR, FluentValidation",
      "IdentityServer4 (احراز هویت / JWT)",
      "Event Sourcing (ماژول Payments با SQL Stream Store)",
      "Quartz.NET (پردازش پس‌زمینه، Outbox/Inbox)",
      "Autofac (IoC), Serilog, Swagger, Docker",
      "Modular Monolith, DDD, Clean Architecture",
      "RBAC (نقش و Permission)",
    ],
    images: safarmalImages,
  },
  {
    slug: "nava",
    title: "نوا",
    type: "اپ چندپلتفرمه (اندروید، iOS، Android TV، macOS، ویندوز)",
    logo: "/placeholder.svg",
    image: navaImages[0],
    shortDescription:
      "اپ چندپلتفرمه با Compose Multiplatform؛ خروجی اندروید، iOS، macOS و ویندوز از یک codebase. نسخه Android TV با ویجت‌های اختصاصی و پشتیبانی از ریموت. معماری تمیز و MVVM.",
    description:
      "نوا در کافه‌بازار و مایکت در دسترس است و بیش از یک میلیون کاربر دارد. این اپلیکیشن چندپلتفرمه با Compose Multiplatform توسعه داده شده و از یک codebase واحد خروجی اندروید، iOS، macOS و ویندوز تولید می‌کند. نسخه اندروید تی‌وی به‌صورت جداگانه با Compose پیاده‌سازی شده و از ویجت‌های رسمی پلتفرم Android TV برای تعامل با ریموت و کنترل تلویزیون استفاده می‌کند. در این پروژه از معماری تمیز (Clean Architecture) و الگوی MVVM پیروی شده است: هر View به ViewModel متصل است، ViewModelها به UseCaseها و UseCaseها به Repositoryها و در نهایت Repositoryها به DataSourceها وصل هستند. کدنویسی بر اساس اصول Clean Code انجام شده تا خوانایی، تست‌پذیری و نگه‌داری کد در طول زمان تضمین شود.",
    myRole: "برنامه‌نویس اندروید، iOS و Android TV",
    technologies: [
      "Kotlin, Compose Multiplatform",
      "Android, iOS, macOS, Windows (از یک codebase)",
      "Android TV (Compose + ویجت‌های پلتفرم)",
      "Clean Architecture",
      "MVVM",
      "Clean Code",
      "View → ViewModel → UseCase → Repository → DataSource",
    ],
    images: navaImages,
    cafeBazaarUrl: "https://cafebazaar.ir/app/ir.navayeheiat",
    myketUrl: "https://myket.ir/app/ir.navayeheiat",
  },
  {
    slug: "gift20",
    title: "گیفت ۲۰",
    type: "اپ بازی محور (اندروید، iOS، وب)",
    logo: "/placeholder.svg",
    image: gift20Images[0],
    shortDescription:
      "اپ بازی سوال‌محور با Flutter؛ خروجی اندروید، iOS و وب. کاربران با شرکت در بازی‌ها امتیاز جمع می‌کنند، شارژ می‌خرند و به پول واقعی تبدیل می‌کنند. پنل ادمین با .NET و Chart.js.",
    description:
      "گیفت ۲۰ یک اپلیکیشن بازی‌محور و سوال‌محور است که با Flutter توسعه داده شده و از یک codebase خروجی اندروید، iOS و وب تولید می‌کند. چند نوع بازی پرسش‌وپاسخ در اپ تعریف شده و کاربران با شرکت در آن‌ها امتیاز کسب می‌کنند، شارژ تهیه می‌کنند و می‌توانند امتیاز را به پول واقعی تبدیل کنند. از امکانات اپ می‌توان به پروفایل کاربری، رنکینگ کاربران و فیچر پیش‌بینی اشاره کرد که با چارت‌های مختلف درصدها و آمار به کاربر نمایش داده می‌شود. معماری اپ به‌صورت Clean Architecture است؛ از Bloc برای مدیریت state و Chopper برای فراخوانی API استفاده شده است. پنل مدیریت با .NET توسط من پیاده‌سازی شده و با Chart.js چارت‌های متنوع برای نمایش دسته‌بندی‌ها و آمار استفاده شده است. در پنل امکان مدیریت محتوا، کاربران، بازی‌ها، سوال‌ها و سایر موارد وجود دارد.",
    myRole: "توسعه‌دهنده اپ (Flutter) و پنل ادمین (.NET)",
    technologies: [
      "Flutter (اندروید، iOS، وب)",
      "Clean Architecture",
      "Bloc (مدیریت state)",
      "Chopper (شبکه و API)",
      ".NET (پنل مدیریت)",
      "Chart.js (داشبورد و آمار)",
      "مدیریت محتوا، کاربران، بازی‌ها و سوال‌ها",
    ],
    images: gift20Images,
  },
  {
    slug: "refah-nama",
    title: "رفاه نما",
    type: "اپ دسکتاپ و موبایل (Flutter — وب و موبایل)",
    logo: "/placeholder.svg",
    image: refahNamaImages[0],
    shortDescription:
      "اپ اختصاصی کارکنان وزارت رفاه با Flutter؛ حالت دسکتاپ و موبایل و خروجی وب و موبایل. رزرو آرایشگاه، مامورسرا، متل، جاهای دیدنی و بخش اخبار. معماری تمیز، Bloc و Chopper.",
    description:
      "رفاه نما اپلیکیشنی است برای کارکنان وزارت رفاه که با فریم‌ورک Flutter توسعه داده شده و در هر دو حالت دسکتاپ و موبایل قابل استفاده است؛ خروجی وب و موبایل از یک codebase تولید می‌شود. اپ بخش‌های متعددی دارد: رزرو آرایشگاه، رزرو مامورسرا و متل، معرفی و دسترسی به جاهای دیدنی، و بخش اخبار. معماری پروژه بر اساس Clean Code است؛ از Bloc برای مدیریت state استفاده شده و کدنویسی به‌صورت تمیز، قابل نگه‌داری و قابل تست انجام شده است. برای فراخوانی داده‌ها از Chopper استفاده شده است.",
    myRole: "توسعه‌دهنده (Flutter)",
    technologies: [
      "Flutter (دسکتاپ، موبایل، وب)",
      "Clean Code / Clean Architecture",
      "Bloc (مدیریت state)",
      "Chopper (شبکه و API)",
      "رزرو آرایشگاه، مامورسرا، متل",
      "جاهای دیدنی، اخبار",
    ],
    images: refahNamaImages,
  },
  {
    slug: "miniapp-emojify",
    title: "EmojiFy ",
    type: "بات تلگرام + Telegram Mini App",
    logo: "/placeholder.svg",
    image: miniAppEmojiFyImages[0],
    shortDescription:
      "بات تلگرام برای ساخت استیکر/ایموجی متحرک از قالب‌های Lottie (JSON/TGS) و لوگوی SVG. توسعه با Python و Telegram Bot API به‌همراه Mini App برای انتخاب پلن، تنظیم رنگ و پرداخت Stars.",
    description:
      "EmojiFy (Lottie Bot) یک بات تلگرام برای ساخت مجموعه استیکر و ایموجی متحرک است. هسته پروژه با Python نوشته شده و با Telegram Bot API (python-telegram-bot) جریان کامل گفتگو، فرمان‌ها، callbackها، آپلود فایل‌ها و پرداخت مدیریت می‌شود. در منطق پردازش، بات فایل‌های Lottie با فرمت JSON/TGS را گرفته، مقادیر لایه‌ها (text/fill/stroke/path/timing/json_path) را جایگزین می‌کند، لوگوی SVG را به‌صورت rule-based داخل انیمیشن تزریق می‌کند و خروجی نهایی را به TGS تبدیل می‌کند. علاوه بر بات، یک Telegram Mini App با HTML/CSS/JavaScript پیاده‌سازی شده تا کاربر بتواند استیکرها را انتخاب کند، رنگ‌ها و تنظیمات را تغییر دهد و سفارش را با Telegram Stars نهایی کند.",
    myRole: "طراحی و پیاده‌سازی کامل بات و Mini App (Python + Telegram APIs)",
    technologies: [
      "Python 3",
      "python-telegram-bot (Telegram Bot API)",
      "Telegram Mini App / WebApp API",
      "Lottie JSON/TGS Processing (gzip)",
      "SVG Logo Injection (rule-based)",
      "SQLite (users/templates/orders/payments)",
      "Telegram Payments (PRO + Stars)",
      "aiohttp (WebApp server/API)",
      "HTML, CSS, JavaScript (Mini App UI)",
    ],
    images: miniAppEmojiFyImages,
  },
  {
    slug: "babiame",
    title: "بابیمه",
    type: "اپ بیمه (اندروید)",
    logo: bimehImages[2],
    image: bimehImages[0],
    shortDescription:
      "اپ خرید بیمه از شرکت‌های مختلف؛ توسعه با جاوا. در زمان خود برترین اپ بیمه‌ای. فرم‌های داینامیک بر اساس نوع بیمه برای جمع‌آوری اطلاعات کاربر.",
    description:
      "بابیمه اپلیکیشن بیمه‌ای است که با جاوا برای پلتفرم اندروید توسعه داده شده و امکان خرید انواع بیمه از شرکت‌های بیمه‌ای مختلف را فراهم می‌کند. این اپ در دوران فعالیت خود به‌عنوان برترین اپ بیمه‌ای شناخته می‌شد. از ویژگی‌های فنی آن استفاده از فرم‌های داینامیک است: بسته به نوع و فرمول بیمه‌ی انتخاب‌شده، فرم مربوطه به‌صورت پویا نمایش داده می‌شود و تنها فیلدهای لازم برای همان بیمه از کاربر دریافت می‌شود، تا هم تجربهٔ کاربری ساده‌تر باشد و هم داده‌ها دقیق و مطابق نیاز هر محصول بیمه‌ای جمع‌آوری شوند.",
    myRole: "توسعه‌دهنده اندروید (جاوا)",
    technologies: [
      "Java (Android)",
      "فرم‌های داینامیک",
      "اتصال به چند شرکت بیمه‌ای",
      "خرید و مدیریت بیمه‌نامه",
    ],
    images: bimehImages,
  },
 
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
