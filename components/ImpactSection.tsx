import type { Impact } from "@/data/impacts";

export function ImpactSection({ items }: { items: Impact[] }) {
  return (
    <section id="impact" className="scroll-mt-20 space-y-4 rounded-2xl p-5 bg-foreground/[0.03] dark:bg-foreground/[0.06] border border-foreground/5">
      <h2 className="section-heading">دستاوردها</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-foreground/10 bg-background p-4 hover:border-foreground/20 transition-colors"
          >
            <p className="text-2xl font-bold text-foreground mb-1">{item.metric}</p>
            <p className="text-sm text-foreground/80">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
