-- اجرا در Supabase SQL Editor (Dashboard → SQL Editor)
-- بعد از ساخت پروژه رایگان در https://supabase.com

-- جدول رویدادها
create table if not exists analytics_events (
  id uuid default gen_random_uuid() primary key,
  visitor_id text not null,
  event_type text not null,
  payload jsonb default '{}',
  session_duration_seconds int,
  created_at timestamptz default now()
);

-- ایندکس برای کوئری‌های رایج
create index if not exists idx_analytics_visitor on analytics_events(visitor_id);
create index if not exists idx_analytics_created on analytics_events(created_at);
create index if not exists idx_analytics_type on analytics_events(event_type);

-- RLS: فقط درج برای همه (بازدیدکنندگان)، خواندن فقط با لاگین
alter table analytics_events enable row level security;

drop policy if exists "Allow insert anon" on analytics_events;
create policy "Allow insert anon" on analytics_events
  for insert to anon with check (true);

drop policy if exists "Allow select authenticated" on analytics_events;
create policy "Allow select authenticated" on analytics_events
  for select to authenticated using (true);

-- برای دیدن لاگ‌ها: در داشبورد Supabase وارد شو و جدول analytics_events را باز کن
-- یا خروجی CSV: Table → Export as CSV
