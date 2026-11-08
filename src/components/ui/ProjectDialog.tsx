"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import type { Dispatch, SetStateAction } from "react";
import { formatIndex, projects } from "@/data/content";
import { ModalShell } from "./ModalShell";

type ProjectDialogProps = {
  projectIndex: number;
  onChange: Dispatch<SetStateAction<number>>;
  onClose: () => void;
};

export function ProjectDialog({
  projectIndex,
  onChange,
  onClose,
}: ProjectDialogProps) {
  const t = useTranslations("InteriorStudies");

  useEffect(() => {
    function handleArrowKeys(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();

        onChange((index) => (index - 1 + projects.length) % projects.length);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();

        onChange((index) => (index + 1) % projects.length);
      }
    }

    document.addEventListener("keydown", handleArrowKeys);

    return () => {
      document.removeEventListener("keydown", handleArrowKeys);
    };
  }, [onChange]);

  const project = projects[projectIndex];

  const projectTitle = t(`projects.${project.id}.title`);

  const projectAlt = t(`projects.${project.id}.alt`);

  function previousProject() {
    onChange((index) => (index - 1 + projects.length) % projects.length);
  }

  function nextProject() {
    onChange((index) => (index + 1) % projects.length);
  }

  return (
    <ModalShell
      label={t("previewLabel")}
      onClose={onClose}
      className="w-[min(1100px,92vw)] p-3 max-md:w-[calc(100vw-18px)] max-md:p-2"
    >
      {/* Close button */}
      <button
        data-modal-close
        type="button"
        aria-label={t("closeImage")}
        onClick={onClose}
        className="absolute top-5 right-5 z-10 inline-flex items-center gap-2 bg-[#f6f4ef] px-3 py-2.5 text-[9px] tracking-[.1em] transition-colors hover:bg-forest hover:text-white"
      >
        <span>{t("close")}</span>

        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          className="h-[13px] w-[13px]"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      {/* Project image */}
      <Image
        alt={projectAlt}
        src={project.src}
        width={project.width}
        height={project.height}
        sizes="92vw"
        className="h-[min(70dvh,720px)] w-full bg-[#d7d5cf] object-contain max-md:h-auto max-md:max-h-[67dvh]"
      />

      {/* Project navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-2 pt-4 pb-1">
        <p className="font-editorial text-[23px] max-md:text-[19px]">
          {formatIndex(projectIndex)} — {projectTitle}
        </p>

        <div className="flex items-center gap-3">
          {/* Previous */}
          <button
            type="button"
            aria-label={t("previousImage")}
            onClick={previousProject}
            className="grid h-9 w-10 place-items-center border border-[#8a8f86] transition-colors hover:bg-forest hover:text-white"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[18px] w-[18px]"
            >
              <path d="M19 12H5" />
              <path d="m11 18-6-6 6-6" />
            </svg>
          </button>

          {/* Counter */}
          <span className="text-[9px] tracking-[.12em]">
            {formatIndex(projectIndex)} / {formatIndex(projects.length - 1)}
          </span>

          {/* Next */}
          <button
            type="button"
            aria-label={t("nextImage")}
            onClick={nextProject}
            className="grid h-9 w-10 place-items-center border border-[#8a8f86] transition-colors hover:bg-forest hover:text-white"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[18px] w-[18px]"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Conceptual imagery disclaimer */}
      <small className="block px-2 py-2 text-[8px] leading-[1.6] tracking-[.12em] text-[#797d76]">
        {t("modalDisclaimer")}
      </small>
    </ModalShell>
  );
}
