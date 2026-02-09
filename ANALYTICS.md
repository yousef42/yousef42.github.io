# راه‌اندازی آنالیتیکس رزومه

با این سیستم هر بازدید و هر کلیک لاگ می‌شود. هر کاربر با یک **visitor_id** (در localStorage) شناسایی می‌شود؛ اگر همان نفر دوباره بیاید، همان ID ثبت می‌شود و دو بار شمرده نمی‌شود.

## چه چیزهایی ذخیره می‌شود؟

| رویداد        | توضیح |
|---------------|--------|
| `page_view`   | ورود به هر صفحه (path، referrer) |
| `click`       | کلیک روی هر لینک (href، path، متن لینک) |
| `session_end` | خروج یا بستن تب (مدت ماندن در ثانیه) |

## مراحل راه‌اندازی

### ۱. ساخت پروژه Supabase (رایگان)

1. برو به [supabase.com](https://supabase.com) و ثبت‌نام کن.
2. **New project** بزن، نام و پسورد دیتابیس بگذار، Region انتخاب کن.
3. بعد از ساخته شدن پروژه، برو به **Project Settings** (آیکون چرخ‌دنده) → **API**.
4. این دو مقدار را کپی کن:
   - **Project URL**
   - **anon public** (کلید عمومی)

### ۲. ساخت جدول لاگ

1. در داشبورد Supabase برو به **SQL Editor**.
2. محتوای فایل `supabase-analytics.sql` همین ریپو را کپی کن و **Run** بزن.

### ۳. تنظیم متغیرهای محیط برای بیلد

برای اجرای لوکال و بیلد (مثلاً GitHub Actions) این دو متغیر را تنظیم کن:

- `NEXT_PUBLIC_SUPABASE_URL` = آدرس پروژه (مثل `https://xxxx.supabase.co`)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = کلید anon public

**لوکال:** در root پروژه فایل `.env.local` بساز و همین دو خط را بگذار (مقادیر واقعی را جایگزین کن):

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

**GitHub Actions:** در ریپو برو **Settings → Secrets and variables → Actions** و دو تا **Repository secret** اضافه کن با همین نام‌ها. بعد در workflow از آنها استفاده کن (الان در بیلد از env استفاده می‌شود؛ اگر خالی باشند آنالیتیکس غیرفعال است).

### ۴. دیدن لاگ‌ها

- در Supabase: **Table Editor** → جدول **analytics_events**. می‌توانی فیلتر و مرتب‌سازی کنی.
- خروجی متنی/CSV: روی جدول **Export as CSV** یا با یک کوئری SQL خروجی بگیر.

**نمونه کوئری برای خلاصه:**

- تعداد بازدید یکتا (تعداد کاربر):  
  `select count(distinct visitor_id) from analytics_events where event_type = 'page_view';`
- میانگین مدت ماندن:  
  `select avg(session_duration_seconds) from analytics_events where event_type = 'session_end' and session_duration_seconds is not null;`

اگر `NEXT_PUBLIC_SUPABASE_URL` یا `NEXT_PUBLIC_SUPABASE_ANON_KEY` را ست نکنی، هیچ رویدادی ارسال نمی‌شود و سایت عادی کار می‌کند.
