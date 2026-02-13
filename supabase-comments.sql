-- اجرا در Supabase SQL Editor
-- جدول نظرات بازدیدکنندگان

create table if not exists feedback_comments (
  id uuid default gen_random_uuid() primary key,
  name text,
  phone text,
  job text,
  comment text not null,
  created_at timestamptz default now()
);

create index if not exists idx_feedback_created on feedback_comments(created_at desc);

alter table feedback_comments enable row level security;

drop policy if exists "Allow insert anon" on feedback_comments;
create policy "Allow insert anon" on feedback_comments
  for insert to anon with check (true);

drop policy if exists "Allow select anon" on feedback_comments;
create policy "Allow select anon" on feedback_comments
  for select to anon using (true);
