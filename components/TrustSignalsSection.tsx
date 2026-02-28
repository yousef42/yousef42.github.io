import type { TrustSignals } from "@/data/trustSignals";

const CafeBazaarLogo = () => (
  <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

const MyketLogo = () => (
  <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
  </svg>
);

export function TrustSignalsSection({
  signals,
  github,
  linkedin,
}: {
  signals: TrustSignals;
  github: string;
  linkedin: string;
}) {
  return (
    <section id="trust" className="scroll-mt-20 space-y-4 rounded-2xl p-5 bg-foreground/[0.03] dark:bg-foreground/[0.06] border border-foreground/5">
      <h2 className="section-heading">نشانه‌های اعتماد</h2>
      <div className="flex flex-wrap items-center gap-6">
        {signals.cafeBazaar && (
          <a
            href={signals.cafeBazaar.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 transition-colors"
          >
            <CafeBazaarLogo />
            <span className="text-sm font-medium">کافه‌بازار</span>
            <span className="text-muted text-xs">({signals.cafeBazaar.appName})</span>
          </a>
        )}
        {signals.myket && (
          <a
            href={signals.myket.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 transition-colors"
          >
            <MyketLogo />
            <span className="text-sm font-medium">مایکت</span>
            <span className="text-muted text-xs">({signals.myket.appName})</span>
          </a>
        )}
        {signals.installCount && (
          <span className="px-4 py-2 rounded-xl bg-foreground/5 border border-foreground/10 text-sm font-medium">
            {signals.installCount} نصب
          </span>
        )}
        {signals.rating && (
          <span className="px-4 py-2 rounded-xl bg-foreground/5 border border-foreground/10 text-sm font-medium">
            امتیاز {signals.rating}
          </span>
        )}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 transition-colors"
        >
          <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
          </svg>
          <span className="text-sm font-medium">GitHub</span>
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 transition-colors"
        >
          <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.54h3.42v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.74zM5.34 6.43c-1.14 0-2.06-.93-2.06-2.06s.92-2.06 2.06-2.06 2.06.93 2.06 2.06-.92 2.06-2.06 2.06zM7.17 20.45H3.6V8.54h3.57v11.91zM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
          </svg>
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
