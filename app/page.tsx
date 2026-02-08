import { ProfileHeader } from "@/components/ProfileHeader";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { ProjectCard } from "@/components/ProjectCard";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <ProfileHeader data={profile} />
        <div className="mt-10 space-y-10">
          <About about={profile.about} />
          <Skills items={skills} />
          <section className="space-y-4">
            <h2 className="text-lg font-semibold border-b border-foreground/10 pb-2">
              پروژه‌ها
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2">
              {projects.map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
