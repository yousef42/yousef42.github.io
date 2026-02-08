import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { ProjectGallery } from "@/components/ProjectGallery";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

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
      <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-foreground/70 hover:text-foreground mb-8 px-3 py-2 rounded-xl hover:bg-foreground/5 transition-colors text-sm"
        >
          ← بازگشت
        </Link>
        <article className="space-y-8">
          <header className="flex flex-wrap items-center gap-4 rounded-2xl p-5 bg-foreground/[0.03] dark:bg-foreground/[0.06] border border-foreground/5">
            <span className="relative w-14 h-14 shrink-0 inline-block rounded-xl overflow-hidden bg-foreground/10">
              <Image
                src={project.logo}
                alt=""
                fill
                className="object-contain"
                unoptimized
              />
            </span>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {project.title}
              </h1>
              <p className="text-foreground/55 text-sm mt-0.5">{project.type}</p>
            </div>
          </header>
          <section className="rounded-2xl p-5 bg-foreground/[0.03] dark:bg-foreground/[0.06] border border-foreground/5">
            <h2 className="text-sm font-semibold text-foreground/70 mb-2">
              نقش من در پروژه
            </h2>
            <p className="text-foreground/90">{project.myRole}</p>
          </section>
          <section className="rounded-2xl p-5 bg-foreground/[0.03] dark:bg-foreground/[0.06] border border-foreground/5">
            <h2 className="text-sm font-semibold text-foreground/70 mb-2">
              توضیحات
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              {project.description}
            </p>
          </section>
          <section className="rounded-2xl p-5 bg-foreground/[0.03] dark:bg-foreground/[0.06] border border-foreground/5">
            <h2 className="text-sm font-semibold text-foreground/70 mb-3">
              تکنولوژی‌ها
            </h2>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-foreground/10 border border-foreground/5 text-sm"
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
