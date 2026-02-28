export function AvailableForSection({ items }: { items: string[] }) {
  return (
    <section id="available-for" className="scroll-mt-20 space-y-4 rounded-2xl p-5 bg-foreground/[0.03] dark:bg-foreground/[0.06] border border-foreground/5">
      <h2 className="section-heading">آماده برای</h2>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className="px-4 py-2 rounded-xl bg-foreground/10 border border-foreground/5 text-sm font-medium text-foreground hover:bg-foreground/15 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
