export interface Skill {
  name: string;
  category?: string;
}

export const skills: Skill[] = [
  // موبایل
  { name: "Kotlin", category: "موبایل" },
  { name: "Jetpack Compose", category: "موبایل" },
  { name: "Compose Multiplatform", category: "موبایل" },
  { name: "Flutter", category: "موبایل" },
  { name: "Swift", category: "موبایل" },
  { name: "Java (Android)", category: "موبایل" },
  { name: "Android TV", category: "موبایل" },
  { name: "Bloc", category: "موبایل" },
  { name: "Chopper", category: "موبایل" },
  // وب و فرانت
  { name: "React.js", category: "وب" },
  { name: "Next.js", category: "وب" },
  { name: "TypeScript", category: "وب" },
  { name: "Tailwind CSS", category: "وب" },
  { name: "Chart.js", category: "وب" },
  // بک‌اند
  { name: "C# / .NET", category: "بک‌اند" },
  { name: "ASP.NET Core", category: "بک‌اند" },
  { name: "REST API", category: "بک‌اند" },
  { name: "SQL Server", category: "بک‌اند" },
  { name: "Entity Framework Core", category: "بک‌اند" },
  { name: "Dapper", category: "بک‌اند" },
  // معماری و الگوها
  { name: "Clean Architecture", category: "معماری" },
  { name: "Clean Code", category: "معماری" },
  { name: "MVVM", category: "معماری" },
  { name: "MVI", category: "معماری" },
  { name: "DDD", category: "معماری" },
  { name: "CQRS", category: "معماری" },
  { name: "Modular Monolith", category: "معماری" },
  { name: "Event Sourcing", category: "معماری" },
  { name: "RBAC", category: "معماری" },
  // بات‌ها
  { name: "بات تلگرام", category: "بات‌ها" },
  { name: "بات بله", category: "بات‌ها" },
  { name: "Telegram API", category: "بات‌ها" },
  // ابزار و دواپس
  { name: "Git", category: "ابزارها" },
  { name: "GitHub", category: "ابزارها" },
  { name: "GitLab", category: "ابزارها" },
  { name: "Docker", category: "ابزارها" },
  { name: "MediatR", category: "ابزارها" },
  { name: "FluentValidation", category: "ابزارها" },
  { name: "IdentityServer4", category: "ابزارها" },
  { name: "Quartz.NET", category: "ابزارها" },
  { name: "Swagger", category: "ابزارها" },
  { name: "Serilog", category: "ابزارها" },
];
