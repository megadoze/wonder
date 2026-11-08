"use client";

import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode } from "react";
import { ProjectDialog } from "./ProjectDialog";

type ExperienceContextValue = {
  openProject: (index: number) => void;
  goToService: (index: number) => void;
  expandedService: number | null;
  toggleService: (index: number) => void;
};

const ExperienceContext = createContext<ExperienceContextValue | null>(null);

export function useExperience() {
  const context = useContext(ExperienceContext);

  if (!context) {
    throw new Error("useExperience must be used within ExperienceProvider");
  }

  return context;
}

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [projectOpen, setProjectOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);

  const [expandedService, setExpandedService] = useState<number | null>(0);

  const openProject = useCallback((index: number) => {
    setProjectIndex(index);
    setProjectOpen(true);
  }, []);

  const closeProject = useCallback(() => {
    setProjectOpen(false);
  }, []);

  const toggleService = useCallback((index: number) => {
    setExpandedService((current) => (current === index ? null : index));
  }, []);

  const goToService = useCallback((index: number) => {
    setExpandedService(index);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    document.getElementById("service-details")?.scrollIntoView({
      behavior: reduceMotion ? "instant" : "smooth",
      block: "start",
    });

    window.setTimeout(
      () => {
        document
          .querySelector<HTMLElement>(`[data-service-summary="${index}"]`)
          ?.focus({ preventScroll: true });
      },
      reduceMotion ? 0 : 450,
    );
  }, []);

  return (
    <ExperienceContext.Provider
      value={{
        openProject,
        goToService,
        expandedService,
        toggleService,
      }}
    >
      {children}

      {projectOpen && (
        <ProjectDialog
          projectIndex={projectIndex}
          onChange={setProjectIndex}
          onClose={closeProject}
        />
      )}
    </ExperienceContext.Provider>
  );
}
