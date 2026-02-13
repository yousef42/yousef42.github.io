import { ProfileHeader } from "@/components/ProfileHeader";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { ProjectCard } from "@/components/ProjectCard";
import { FeedbackSection } from "@/components/FeedbackSection";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <ProfileHeader data={profile} />
        <div className="mt-12 space-y-12">
          <About about={profile.about} />
          <Skills items={skills} />
          <section className="space-y-5">
            <h2 className="section-heading">آخرین پروژه‌ها</h2>
            <ul className="grid gap-6 sm:grid-cols-2">
              {projects.map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </section>
          <FeedbackSection />
        </div>
      </main>
    </div>
  );
}
