import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl border border-foreground/10 overflow-hidden bg-foreground/[0.02] hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-200"
    >
      <div className="relative aspect-video bg-foreground/5 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
      </div>
      <div className="p-4 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-foreground/55 uppercase tracking-wide">
            {project.type}
          </span>
          <span className="relative w-5 h-5 shrink-0 inline-block opacity-80">
            <Image
              src={project.logo}
              alt=""
              fill
              className="object-contain"
              unoptimized
            />
          </span>
        </div>
        <h3 className="font-semibold text-foreground">{project.title}</h3>
        <p className="text-sm text-foreground/75 line-clamp-2 leading-relaxed">
          {project.shortDescription}
        </p>
        <span className="inline-flex items-center gap-1 text-sm text-foreground/60 group-hover:text-foreground transition-colors">
          جزئیات
          <span className="group-hover:translate-x-0.5 transition-transform inline-block">←</span>
        </span>
      </div>
    </Link>
  );
}
