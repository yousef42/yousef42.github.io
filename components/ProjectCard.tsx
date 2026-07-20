import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const hasDemo =
    project.demoUrl || project.videoUrl || project.cafeBazaarUrl || project.myketUrl;
  return (
    <div className="group rounded-2xl border border-foreground/10 overflow-hidden bg-foreground/[0.02] hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-200">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-video bg-foreground/5 overflow-hidden">
          {project.demoGif ? (
            <Image
              src={project.demoGif}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized
            />
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={`${
                project.imageFit === "contain" ? "object-contain p-8" : "object-cover"
              } group-hover:scale-105 transition-transform duration-300`}
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized
            />
          )}
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
        </div>
      </Link>
      <div className="px-4 pb-4 flex flex-wrap items-center gap-2">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm text-foreground/60 hover:text-foreground transition-colors"
        >
          جزئیات
          <span className="group-hover:translate-x-0.5 transition-transform inline-block">←</span>
        </Link>
        {hasDemo && (
          <>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-3 py-1 rounded-lg bg-foreground/10 hover:bg-foreground/15 text-foreground transition-colors"
              >
                وب‌سایت
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-3 py-1 rounded-lg bg-foreground/10 hover:bg-foreground/15 text-foreground transition-colors"
              >
                ویدئو
              </a>
            )}
            {project.cafeBazaarUrl && (
              <a
                href={project.cafeBazaarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-3 py-1 rounded-lg bg-foreground/10 hover:bg-foreground/15 text-foreground transition-colors"
              >
                کافه‌بازار
              </a>
            )}
            {project.myketUrl && (
              <a
                href={project.myketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-3 py-1 rounded-lg bg-foreground/10 hover:bg-foreground/15 text-foreground transition-colors"
              >
                مایکت
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}
