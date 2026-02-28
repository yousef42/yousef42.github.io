export interface Profile {
  name: string;
  email: string;
  phone: string;
  photo: string;
  stackOverflow: string;
  github: string;
  linkedin: string;
  about: string;
  heroTitle: string;
  heroSummary: string;
  signature: string;
}

export const profile: Profile = {
  name: "یوسف عبدل زاده",
  email: "abyousef42@gmail.com",
  phone: "09120590191",
  photo: "/images/projects/profile/profile.jpeg",
  stackOverflow: "https://stackoverflow.com/users/8553955/yousef-abbdolzadeh",
  github: "https://github.com/yousef42",
  linkedin: "https://www.linkedin.com/in/yousef-abdolzadeh/",
  heroTitle: "مهندس ارشد موبایل و بک‌اند",
  heroSummary: "1M+ نصب فعال | Kotlin / Flutter / .NET | Architecture-first Delivery",
  signature: "سیستم می‌سازم، نه فقط اپ",
  about:
    "کارشناسی مهندسی نرم‌افزار.\nاز سال ۱۳۹۷ مسیر حرفه‌ای من با .NET و Android Native شروع شد و خیلی زود وارد پروژه‌های واقعی و تجاری شدم. در ادامه، با Flutter، Compose Multiplatform، iOS و وب کار کردم تا بتوانم برای نیازهای متفاوت کسب‌وکار، راهکار چندسکویی و قابل نگه‌داری ارائه دهم.\nتمرکز من «تحویل سریع بدون قربانی‌کردن کیفیت معماری» است. در پروژه‌ها بسته به فاز محصول از Modular Monolith، Clean/Onion، CQRS و Event Sourcing استفاده می‌کنم و مرزهای دامنه را طوری طراحی می‌کنم که در صورت نیاز، مسیر مهاجرت به Microservices باز باشد.\nدر سمت موبایل نیز الگوهای MVVM و MVI را با Jetpack Compose و Flutter به‌کار می‌گیرم تا state-management، تست‌پذیری و توسعه‌پذیری بلندمدت محصول حفظ شود. هدف من ساخت سیستم‌هایی است که هم امروز جواب بدهند و هم فردا قابل توسعه باشند.",
};
