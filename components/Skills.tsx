import type { Skill } from "@/data/skills";

export function Skills({ items }: { items: Skill[] }) {
  const byCategory = items.reduce<Record<string, Skill[]>>((acc, skill) => {
    const cat = skill.category ?? "سایر";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  return (
    <section className="space-y-4 rounded-2xl p-5 bg-foreground/[0.03] dark:bg-foreground/[0.06] border border-foreground/5">
      <h2 className="section-heading">مهارت‌ها</h2>
      <div className="flex flex-wrap gap-x-2 gap-y-3">
        {Object.entries(byCategory).map(([category, skillsInCat]) => (
          <div key={category} className="flex flex-wrap items-center gap-2">
            {category !== "سایر" && (
              <span className="text-foreground/50 text-xs font-medium me-1">
                {category}:
              </span>
            )}
            {skillsInCat.map((s) => (
              <span
                key={s.name}
                className="px-3 py-1.5 rounded-lg bg-foreground/10 hover:bg-foreground/15 text-sm transition-colors border border-foreground/5"
              >
                {s.name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
