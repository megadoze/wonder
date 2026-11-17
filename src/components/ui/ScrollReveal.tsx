"use client";

import { useEffect } from "react";

const sectionIds = [
  "studio",
  "work",
  "selected-work",
  "materials",
  "approach",
  "philosophy",
  "service-details",
  "pricing",
  "contact",
];

export function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const section = entry.target as HTMLElement;

          section.dataset.scrollReveal = "visible";

          observer.unobserve(section);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);

      if (!section) return;

      const rect = section.getBoundingClientRect();

      // Sections already on screen remain visible.
      // Animate only sections further down the page.
      if (rect.top < window.innerHeight * 0.92) {
        return;
      }

      section.dataset.scrollReveal = "pending";

      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
