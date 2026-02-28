import type { HowIThinkStep } from "@/data/howIThink";

export function HowIThinkSection({ steps }: { steps: HowIThinkStep[] }) {
  return (
    <section id="how-i-think" className="scroll-mt-20 space-y-4 rounded-2xl p-5 bg-foreground/[0.03] dark:bg-foreground/[0.06] border border-foreground/5">
      <h2 className="section-heading">چگونه فکر می‌کنم</h2>
      <p className="text-sm text-foreground/70 leading-relaxed">
        رویکرد من فقط تحویل فیچر نیست؛ از روز اول، تصمیم‌های فنی را با هدف توسعه‌پذیری، نگه‌داری
        ساده‌تر و رشد محصول می‌گیرم.
      </p>
      <ol className="space-y-3">
        {steps.map((step, i) => (
          <li
            key={i}
            className="rounded-xl border border-foreground/10 bg-background px-4 py-4"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-sm font-bold text-foreground">
                {i + 1}
              </span>
              <div className="space-y-1.5 min-w-0">
                <h3 className="text-sm sm:text-base font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">{step.detail}</p>
                <p className="text-xs text-foreground/65">
                  خروجی: <span className="text-foreground/85 font-medium">{step.output}</span>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
