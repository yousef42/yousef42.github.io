const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export interface FeedbackComment {
  id: string;
  name: string | null;
  phone: string | null;
  job: string | null;
  comment: string;
  created_at: string;
}

export interface NewComment {
  name?: string;
  phone?: string;
  job?: string;
  comment: string;
}

export async function fetchComments(): Promise<FeedbackComment[]> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return [];
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/feedback_comments?order=created_at.desc`,
    {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    }
  );
  if (!res.ok) return [];
  return res.json();
}

export async function submitComment(data: NewComment): Promise<boolean> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return false;
  const res = await fetch(`${SUPABASE_URL}/rest/v1/feedback_comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name: data.name?.trim() || null,
      phone: data.phone?.trim() || null,
      job: data.job?.trim() || null,
      comment: data.comment.trim(),
    }),
  });
  return res.ok;
}
