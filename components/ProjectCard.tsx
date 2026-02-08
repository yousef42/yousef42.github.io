import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-xl border border-foreground/10 overflow-hidden bg-background hover:border-foreground/20 hover:shadow-md transition"
    >
      <div className="relative aspect-video bg-foreground/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-[1.02] transition"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-foreground/60">
            {project.type}
          </span>
          <span className="relative w-6 h-6 shrink-0 inline-block">
            <Image
              src={project.logo}
              alt=""
              fill
              className="object-contain"
              unoptimized
            />
          </span>
        </div>
        <h3 className="font-semibold">{project.title}</h3>
        <p className="text-sm text-foreground/80 line-clamp-2">
          {project.shortDescription}
        </p>
        <span className="inline-block text-sm text-foreground/60 group-hover:text-foreground">
          جزئیات →
        </span>
      </div>
    </Link>
  );
}
