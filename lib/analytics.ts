const VISITOR_ID_KEY = "resume_visitor_id";

export function getOrCreateVisitorId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem(VISITOR_ID_KEY);
  if (!id) {
    id = "v_" + crypto.randomUUID();
    localStorage.setItem(VISITOR_ID_KEY, id);
  }
  return id;
}

export type EventType = "page_view" | "click" | "session_end";

export interface AnalyticsEvent {
  visitor_id: string;
  event_type: EventType;
  payload?: Record<string, unknown>;
  session_duration_seconds?: number;
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function isLocal(): boolean {
  if (typeof window === "undefined") return false;
  const h = window.location.hostname;
  return h === "localhost" || h === "127.0.0.1";
}

export function sendEvent(event: Omit<AnalyticsEvent, "visitor_id">): void {
  if (isLocal() || !SUPABASE_URL || !SUPABASE_ANON_KEY) return;
  const visitor_id = getOrCreateVisitorId();
  const body: AnalyticsEvent = { ...event, visitor_id };
  fetch(`${SUPABASE_URL}/rest/v1/analytics_events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify(body),
    keepalive: true,
  }).catch(() => {});
}

export function sendEventKeepalive(event: Omit<AnalyticsEvent, "visitor_id">): void {
  if (isLocal() || !SUPABASE_URL || !SUPABASE_ANON_KEY) return;
  const visitor_id = getOrCreateVisitorId();
  const body = JSON.stringify({ ...event, visitor_id });
  fetch(`${SUPABASE_URL}/rest/v1/analytics_events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: "return=minimal",
    },
    body,
    keepalive: true,
  }).catch(() => {});
}
