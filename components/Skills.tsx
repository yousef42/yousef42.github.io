import type { Skill } from "@/data/skills";

export function Skills({ items }: { items: Skill[] }) {
  const byCategory = items.reduce<Record<string, Skill[]>>((acc, skill) => {
    const cat = skill.category ?? "سایر";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold border-b border-foreground/10 pb-2">
        مهارت‌ها
      </h2>
      <div className="flex flex-wrap gap-3">
        {Object.entries(byCategory).map(([category, skillsInCat]) => (
          <div key={category} className="flex flex-wrap items-center gap-2">
            {category !== "سایر" && (
              <span className="text-foreground/60 text-sm">{category}:</span>
            )}
            {skillsInCat.map((s) => (
              <span
                key={s.name}
                className="px-3 py-1 rounded-full bg-foreground/10 text-sm"
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
