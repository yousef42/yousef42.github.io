export interface Impact {
  metric: string;
  description: string;
}

export const impacts: Impact[] = [
  {
    metric: "1M+",
    description: "نصب فعال در اندروید (نوا در کافه‌بازار و مایکت)",
  },
  {
    metric: "۵ پلتفرم",
    description: "خروجی اندروید، iOS، macOS، ویندوز و Android TV از یک codebase (نوا)",
  },
  {
    metric: "Architecture-First",
    description: "پیاده‌سازی عملی Clean/Onion، Modular Monolith، CQRS و Event Sourcing",
  },
  {
    metric: "Bot + Mini App",
    description: "طراحی و توسعه Lottie Bot با Telegram API، پرداخت Stars و تولید TGS",
  },
];
