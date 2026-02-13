"use client";

import { useEffect, useState } from "react";
import {
  fetchComments,
  submitComment,
  type FeedbackComment,
  type NewComment,
} from "@/lib/comments";

function CommentItem({ c }: { c: FeedbackComment }) {
  const name = c.name?.trim() || "ناشناس";
  const date = new Date(c.created_at).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <article className="rounded-xl border border-foreground/10 bg-foreground/[0.03] dark:bg-foreground/[0.05] p-4 text-start min-w-[280px] max-w-[320px] shrink-0">
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="font-medium text-foreground text-sm">{name}</span>
        <time className="text-muted text-xs shrink-0" dateTime={c.created_at}>
          {date}
        </time>
      </div>
      <p className="text-foreground/90 text-sm leading-relaxed">{c.comment}</p>
    </article>
  );
}

export function FeedbackSection() {
  const [comments, setComments] = useState<FeedbackComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState<NewComment>({
    comment: "",
    name: "",
    phone: "",
    job: "",
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const data = await fetchComments();
      if (!cancelled) setComments(data);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = form.comment.trim();
    if (!trimmed) {
      setError("لطفاً نظر خود را بنویسید");
      return;
    }
    setError(null);
    setSubmitting(true);
    const ok = await submitComment({
      ...form,
      comment: trimmed,
    });
    setSubmitting(false);
    if (ok) {
      setSuccess(true);
      setForm({ comment: "", name: "", phone: "", job: "" });
      const updated = await fetchComments();
      setComments(updated);
    } else {
      setError("ارسال نظر با مشکل مواجه شد. دوباره تلاش کنید.");
    }
  };

  return (
    <section className="space-y-5 rounded-2xl p-5 bg-foreground/[0.03] dark:bg-foreground/[0.06] border border-foreground/5">
      <h2 className="section-heading">نظر شما</h2>
      <p className="text-sm text-muted">
        خوشحال می‌شوم نظرتان را بنویسید. نظر شما برای سایر بازدیدکنندگان هم نمایش داده می‌شود.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-xl border border-foreground/10 bg-background p-4"
      >
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-foreground mb-1.5">
            نظر شما <span className="text-red-500">*</span>
          </label>
          <textarea
            id="comment"
            value={form.comment}
            onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
            placeholder="نظر خود را اینجا بنویسید..."
            rows={4}
            className="w-full rounded-lg border border-foreground/20 bg-transparent px-3 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10"
            disabled={submitting}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <label htmlFor="name" className="block text-sm text-muted mb-1">
              نام <span className="text-muted/80">(اختیاری)</span>
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="نام شما"
              className="w-full rounded-lg border border-foreground/20 bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10"
              disabled={submitting}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm text-muted mb-1">
              شماره تلفن <span className="text-muted/80">(اختیاری)</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              placeholder="۰۹۱۲..."
              className="w-full rounded-lg border border-foreground/20 bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10"
              disabled={submitting}
            />
          </div>
          <div>
            <label htmlFor="job" className="block text-sm text-muted mb-1">
              شغل <span className="text-muted/80">(اختیاری)</span>
            </label>
            <input
              id="job"
              type="text"
              value={form.job}
              onChange={(e) => setForm((f) => ({ ...f, job: e.target.value }))}
              placeholder="مثال: توسعه‌دهنده"
              className="w-full rounded-lg border border-foreground/20 bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10"
              disabled={submitting}
            />
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
        )}
        {success && (
          <p className="text-sm text-green-600 dark:text-green-400">
            نظر شما با موفقیت ثبت شد. ممنون!
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="rounded-xl bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "در حال ارسال..." : "ثبت نظر"}
        </button>
      </form>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-foreground">نظرات بازدیدکنندگان</h3>
        {loading ? (
          <p className="text-sm text-muted">در حال بارگذاری...</p>
        ) : comments.length === 0 ? (
          <p className="text-sm text-muted py-4 rounded-xl border border-dashed border-foreground/20 text-center">
            هنوز نظری ثبت نشده. اولین نفر باشید!
          </p>
        ) : (
          <ul className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 scroll-smooth" dir="rtl">
            {comments.map((c) => (
              <li key={c.id}>
                <CommentItem c={c} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
