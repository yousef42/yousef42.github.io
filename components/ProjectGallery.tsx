"use client";

import { useState, useCallback, useEffect } from "react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const goPrev = useCallback(() => {
    if (openIndex === null) return;
    setOpenIndex(openIndex === 0 ? images.length - 1 : openIndex - 1);
  }, [openIndex, images.length]);

  const goNext = useCallback(() => {
    if (openIndex === null) return;
    setOpenIndex(openIndex === images.length - 1 ? 0 : openIndex + 1);
  }, [openIndex, images.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [openIndex, goNext, goPrev]);

  if (images.length === 0) return null;

  return (
    <>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((src, i) => (
          <li key={i} className="rounded-lg overflow-hidden bg-foreground/5">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="w-full text-start focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:ring-offset-2 rounded-lg"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${title} - تصویر ${i + 1}`}
                className="w-full h-auto block cursor-pointer hover:opacity-90 transition"
              />
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="نمایش تصویر"
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 size-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center shrink-0"
              aria-label="تصویر قبلی"
            >
              <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex-1 flex justify-center items-center min-w-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[openIndex]}
                alt={`${title} - تصویر ${openIndex + 1}`}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            <button
              type="button"
              onClick={goNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 size-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center shrink-0"
              aria-label="تصویر بعدی"
            >
              <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {openIndex + 1} / {images.length}
          </div>

          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white text-sm"
            aria-label="بستن"
          >
            بستن
          </button>
        </div>
      )}
    </>
  );
}
