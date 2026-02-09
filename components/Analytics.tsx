"use client";

import { useEffect, useRef } from "react";
import { sendEvent, sendEventKeepalive } from "@/lib/analytics";

export function Analytics() {
  const startTime = useRef<number>(Date.now());
  const sentEnd = useRef(false);

  useEffect(() => {
    startTime.current = Date.now();
    sendEvent({
      event_type: "page_view",
      payload: {
        path: typeof window !== "undefined" ? window.location.pathname : "",
        referrer: typeof document !== "undefined" ? document.referrer || null : null,
      },
    });

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      sendEvent({
        event_type: "click",
        payload: {
          href,
          path: window.location.pathname,
          text: link.textContent?.slice(0, 100) ?? null,
        },
      });
    };

    const handleEnd = () => {
      if (sentEnd.current) return;
      sentEnd.current = true;
      const duration = Math.round((Date.now() - startTime.current) / 1000);
      sendEventKeepalive({
        event_type: "session_end",
        payload: { path: window.location.pathname },
        session_duration_seconds: duration,
      });
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("pagehide", handleEnd);
    window.addEventListener("beforeunload", handleEnd);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("pagehide", handleEnd);
      window.removeEventListener("beforeunload", handleEnd);
      handleEnd();
    };
  }, []);

  return null;
}
