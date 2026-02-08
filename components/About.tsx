import type { Profile } from "@/data/profile";

export function About({ about }: { about: Profile["about"] }) {
  const paragraphs = about.split("\n").filter(Boolean);
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold border-b border-foreground/10 pb-2">
        درباره من
      </h2>
      <div className="text-foreground/90 leading-relaxed space-y-2">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
