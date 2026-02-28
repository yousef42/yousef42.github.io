import { ArchitectureExplorer } from "@/components/ArchitectureExplorer";
import type { ArchitectureFocusItem } from "@/data/architecture";

export function ArchitectureSection({ items }: { items: ArchitectureFocusItem[] }) {
  return (
    <section
      id="architecture"
      className="scroll-mt-20 space-y-4 rounded-2xl p-5 bg-foreground/[0.03] dark:bg-foreground/[0.06] border border-foreground/5"
    >
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h2 className="section-heading mb-0">تمرکز معماری</h2>
        <ArchitectureExplorer />
      </div>
      <p className="text-sm text-foreground/75 leading-relaxed">
        رویکرد معماری من وابسته به مرحله محصول است: برای تحویل سریع و کنترل پیچیدگی با
        <span className="font-medium text-foreground"> Modular Monolith </span>
        شروع می‌کنم، مرزها را بر پایه دامنه نگه می‌دارم، و از ابتدا مسیر مهاجرت به
        <span className="font-medium text-foreground"> Microservices </span>
        را باز می‌گذارم. در کلاینت هم معماری‌های
        <span className="font-medium text-foreground"> Clean / MVVM / MVI </span>
        را برای پایداری کد دنبال می‌کنم.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-foreground/10 bg-background p-4 space-y-3"
          >
            <h3 className="text-sm sm:text-base font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">{item.summary}</p>

            <div className="space-y-2">
              <p className="text-xs text-foreground/60">Patternها</p>
              <div className="flex flex-wrap gap-1.5">
                {item.patterns.map((pattern) => (
                  <span
                    key={pattern}
                    className="px-2.5 py-1 rounded-lg bg-foreground/8 border border-foreground/10 text-xs text-foreground/85"
                  >
                    {pattern}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs text-foreground/60">نمونه پروژه‌ها</p>
              <p className="text-sm text-foreground/85">{item.relatedProjects.join(" • ")}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
