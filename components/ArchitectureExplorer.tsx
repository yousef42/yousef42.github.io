"use client";

import { useEffect, useState } from "react";
import mermaid from "mermaid";
import { architectureDiagrams } from "@/data/architecture";

export function ArchitectureExplorer() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>(architectureDiagrams[0].id);
  const [svgs, setSvgs] = useState<Record<string, string | null>>({});

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      themeVariables: {
        primaryColor: "#3b82f6",
        primaryTextColor: "#e5e7eb",
        primaryBorderColor: "#4b5563",
        lineColor: "#6b7280",
        secondaryColor: "#374151",
        tertiaryColor: "#1f2937",
      },
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;

    const renderAllDiagrams = async () => {
      const next: Record<string, string | null> = {};
      for (const [index, diagram] of architectureDiagrams.entries()) {
        try {
          const { svg } = await mermaid.render(
            `arch-${diagram.id}-${Date.now()}-${index}`,
            diagram.mermaid
          );
          next[diagram.id] = svg;
        } catch {
          next[diagram.id] = null;
        }
      }
      if (!cancelled) {
        setSvgs(next);
      }
    };

    renderAllDiagrams();
    return () => {
      cancelled = true;
    };
  }, [open]);

  const activeDiagram =
    architectureDiagrams.find((diagram) => diagram.id === activeId) ?? architectureDiagrams[0];
  const activeSvg = svgs[activeDiagram.id];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-foreground/10 hover:bg-foreground/15 border border-foreground/10 text-xs sm:text-sm font-medium transition-colors"
      >
        دیاگرام‌های معماری
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="نمودار معماری"
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-auto rounded-2xl bg-background border border-foreground/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-foreground/10 bg-background">
              <h3 className="text-lg font-semibold">نمودار معماری</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-foreground/10 text-foreground/70 hover:text-foreground"
                aria-label="بستن"
              >
                <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-wrap border-b border-foreground/10">
              {architectureDiagrams.map((diagram) => (
                <button
                  key={diagram.id}
                  type="button"
                  onClick={() => setActiveId(diagram.id)}
                  className={`px-4 py-3 text-sm font-medium transition-colors ${
                    activeId === diagram.id
                      ? "text-foreground border-b-2 border-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {diagram.label}
                </button>
              ))}
            </div>
            <div className="p-6 overflow-auto">
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {activeDiagram.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeDiagram.focus.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-lg bg-foreground/10 border border-foreground/10 text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center [&_svg]:max-w-full">
                  {activeSvg ? (
                    <div dangerouslySetInnerHTML={{ __html: activeSvg }} />
                  ) : (
                    <p className="text-muted py-8">در حال بارگذاری...</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
