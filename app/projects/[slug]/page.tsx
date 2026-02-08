import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug } from "@/data/projects";
import { ProjectGallery } from "@/components/ProjectGallery";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-foreground/70 hover:text-foreground mb-8"
        >
          ← بازگشت
        </Link>
        <article className="space-y-6">
          <header className="flex flex-wrap items-center gap-3">
            <span className="relative w-12 h-12 shrink-0 inline-block">
              <Image
                src={project.logo}
                alt=""
                fill
                className="object-contain"
                unoptimized
              />
            </span>
            <div>
              <h1 className="text-2xl font-bold">{project.title}</h1>
              <p className="text-foreground/60 text-sm">{project.type}</p>
            </div>
          </header>
          <section>
            <h2 className="text-sm font-semibold text-foreground/70 mb-1">
              نقش من در پروژه
            </h2>
            <p>{project.myRole}</p>
          </section>
          <section>
            <h2 className="text-sm font-semibold text-foreground/70 mb-1">
              توضیحات
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              {project.description}
            </p>
          </section>
          <section>
            <h2 className="text-sm font-semibold text-foreground/70 mb-2">
              تکنولوژی‌ها
            </h2>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="px-3 py-1 rounded-full bg-foreground/10 text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>
          {project.images.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold text-foreground/70 mb-3">
                تصاویر پروژه
              </h2>
              <ProjectGallery images={project.images} title={project.title} />
            </section>
          )}
        </article>
      </main>
    </div>
  );
}
