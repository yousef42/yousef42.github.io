import { StickyNav } from "@/components/StickyNav";
import { Hero } from "@/components/Hero";
import { ImpactSection } from "@/components/ImpactSection";
import { SignatureSection } from "@/components/SignatureSection";
import { HowIThinkSection } from "@/components/HowIThinkSection";
import { Skills } from "@/components/Skills";
import { AvailableForSection } from "@/components/AvailableForSection";
import { TrustSignalsSection } from "@/components/TrustSignalsSection";
import { ProjectCard } from "@/components/ProjectCard";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { About } from "@/components/About";
import { FeedbackSection } from "@/components/FeedbackSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { profile } from "@/data/profile";
import { impacts } from "@/data/impacts";
import { howIThinkSteps } from "@/data/howIThink";
import { skills } from "@/data/skills";
import { architectureFocusItems } from "@/data/architecture";
import { availableForItems } from "@/data/availableFor";
import { trustSignals } from "@/data/trustSignals";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <StickyNav name={profile.name} />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <Hero data={profile} />
        <div className="mt-12 space-y-12">
          <ScrollReveal>
            <ImpactSection items={impacts} />
          </ScrollReveal>
          <ScrollReveal>
            <About about={profile.about} />
          </ScrollReveal>
          <ScrollReveal>
            <ArchitectureSection items={architectureFocusItems} />
          </ScrollReveal>
          <ScrollReveal>
            <HowIThinkSection steps={howIThinkSteps} />
          </ScrollReveal>
          <ScrollReveal>
            <Skills items={skills} />
          </ScrollReveal>
          <ScrollReveal>
            <AvailableForSection items={availableForItems} />
          </ScrollReveal>
          <ScrollReveal>
            <TrustSignalsSection
              signals={trustSignals}
              github={profile.github}
              linkedin={profile.linkedin}
            />
          </ScrollReveal>
          <ScrollReveal>
            <section id="projects" className="scroll-mt-20 space-y-5">
              <h2 className="section-heading">پروژه‌ها</h2>
              <ul className="grid gap-6 sm:grid-cols-2">
                {projects.map((project) => (
                  <li key={project.slug}>
                    <ProjectCard project={project} />
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>
          <ScrollReveal>
            <SignatureSection signature={profile.signature} />
          </ScrollReveal>
          <ScrollReveal>
            <FeedbackSection />
          </ScrollReveal>
        </div>
      </main>
    </div>
  );
}
