import Image from "next/image";
import type { Profile } from "@/data/profile";

const socialIcons = {
  stackOverflow: (
    <Image
      src="/images/projects/profile/Stack_Overflow_icon.svg.png"
      alt=""
      width={20}
      height={20}
      className="opacity-90 hover:opacity-100"
      unoptimized
    />
  ),
  github: (
    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
    </svg>
  ),
  linkedin: (
    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.54h3.42v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.74zM5.34 6.43c-1.14 0-2.06-.93-2.06-2.06s.92-2.06 2.06-2.06 2.06.93 2.06 2.06-.92 2.06-2.06 2.06zM7.17 20.45H3.6V8.54h3.57v11.91zM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
};

export function ProfileHeader({ data }: { data: Profile }) {
  return (
    <header className="flex flex-col items-center gap-7 pb-10 border-b border-foreground/10">
      <div className="relative size-32 rounded-full overflow-hidden bg-foreground/10 shrink-0 ring-2 ring-foreground/10 ring-offset-2 ring-offset-background">
        <Image
          src={data.photo}
          alt={data.name}
          fill
          className="object-cover"
          sizes="128px"
          unoptimized
        />
      </div>
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {data.name}
        </h1>
        <a
          href={`mailto:${data.email}`}
          className="text-foreground/70 hover:text-foreground block text-sm transition-colors"
        >
          {data.email}
        </a>
        <a
          href={`tel:${data.phone.replace(/\s/g, "")}`}
          className="text-foreground/70 hover:text-foreground block text-sm transition-colors"
        >
          {data.phone}
        </a>
      </div>
      <nav
        className="flex items-center gap-2"
        aria-label="شبکه‌های اجتماعی"
      >
        <a
          href={data.stackOverflow}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-foreground p-2.5 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-colors"
          title="Stack Overflow"
        >
          {socialIcons.stackOverflow}
        </a>
        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-foreground p-2.5 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-colors"
          title="GitHub"
        >
          {socialIcons.github}
        </a>
        <a
          href={data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-foreground p-2.5 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-colors"
          title="LinkedIn"
        >
          {socialIcons.linkedin}
        </a>
      </nav>
    </header>
  );
}
