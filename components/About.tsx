import type { Profile } from "@/data/profile";

export function About({ about }: { about: Profile["about"] }) {
  const paragraphs = about.split("\n").filter(Boolean);
  return (
    <section className="space-y-4 rounded-2xl p-5 bg-foreground/[0.03] dark:bg-foreground/[0.06] border border-foreground/5">
      <h2 className="section-heading">درباره من</h2>
      <div className="text-foreground/90 leading-relaxed space-y-3 text-sm">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
