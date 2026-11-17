"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import {
  selectedWorkProjects,
  type WorkMedia,
  type WorkProject,
} from "@/data/selectedWork";

import { ModalShell } from "@/components/ui/ModalShell";

type AvailableMedia = WorkMedia & {
  src: string;
};

type GalleryProps = {
  project: WorkProject;
  title: string;
};

function ArrowButton({
  direction,
  label,
  onClick,
}: {
  direction: "previous" | "next";
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid h-10 w-11 shrink-0 place-items-center border border-[#a7aba1] transition-colors duration-200 hover:bg-forest hover:text-white focus-visible:outline-2 focus-visible:outline-forest"
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
        {direction === "previous" ? (
          <>
            <path d="M19 12H5" />
            <path d="m11 18-6-6 6-6" />
          </>
        ) : (
          <>
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </>
        )}
      </svg>
    </button>
  );
}

/* MOBILE — native swipe, no controls or modal */

function MobileGallery({ project, title }: GalleryProps) {
  const t = useTranslations("SelectedWork");

  const media = project.media.filter(
    (item): item is AvailableMedia =>
      typeof item.src === "string" && item.src.length > 0,
  );

  if (media.length === 0) {
    return (
      <div className="flex aspect-[4/3] flex-col justify-between bg-[#dcd9d0] p-[5%] text-[#687167]">
        <span className="text-[9px] tracking-[.14em] uppercase">
          WONDER / {t("caseLabel")}
        </span>

        <span className="font-editorial text-[90px] leading-none tracking-[-.06em]">
          {project.area}
          <span className="ml-2 text-lg tracking-normal">m²</span>
        </span>

        <span className="text-[9px] tracking-[.12em] uppercase">
          {t("mediaPending")}
        </span>
      </div>
    );
  }

  return (
    <div
      role="region"
      aria-label={t("galleryLabel", {
        project: title,
      })}
      tabIndex={media.length > 1 ? 0 : undefined}
      className="flex w-[calc(100%+20px)] gap-3 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-smooth pr-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-forest"
    >
      {media.map((item, index) => {
        const type = t(`mediaTypes.${item.type}`);

        return (
          <figure key={item.id} className="m-0 w-[90%] shrink-0 snap-start">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#dcd9d0]">
              <Image
                src={item.src}
                alt={t("mediaAlt", {
                  type,
                  project: title,
                })}
                fill
                sizes="84vw"
                style={{
                  objectPosition: item.position ?? "center",
                }}
                className={
                  item.type === "plan" ? "object-contain" : "object-cover"
                }
              />
            </div>

            <figcaption className="mt-3 flex items-center justify-between gap-3 text-[10px] leading-[1.5] tracking-[.1em] text-[#777b74] uppercase">
              <span>{type}</span>

              <span className="shrink-0 tabular-nums">
                {String(index + 1).padStart(2, "0")}
                {" / "}
                {String(media.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

/* DESKTOP — original gallery with thumbnails and modal */

function DesktopGallery({ project, title }: GalleryProps) {
  const t = useTranslations("SelectedWork");

  const [activeIndex, setActiveIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const media = project.media;
  const current = media[activeIndex];

  const actualImages = media.filter((item): item is AvailableMedia =>
    Boolean(item.src),
  );

  const previewImage =
    previewIndex !== null ? actualImages[previewIndex] : null;

  useEffect(() => {
    if (previewIndex === null || actualImages.length < 2) {
      return;
    }

    const handleKeys = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setPreviewIndex((index) =>
          index === null
            ? null
            : (index - 1 + actualImages.length) % actualImages.length,
        );
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setPreviewIndex((index) =>
          index === null ? null : (index + 1) % actualImages.length,
        );
      }
    };

    document.addEventListener("keydown", handleKeys);

    return () => {
      document.removeEventListener("keydown", handleKeys);
    };
  }, [previewIndex, actualImages.length]);

  if (!current) return null;

  const currentType = t(`mediaTypes.${current.type}`);

  const previous = () => {
    setActiveIndex((index) => (index - 1 + media.length) % media.length);
  };

  const next = () => {
    setActiveIndex((index) => (index + 1) % media.length);
  };

  const openPreview = () => {
    if (!current.src) return;

    const index = actualImages.findIndex((item) => item.id === current.id);

    if (index >= 0) {
      setPreviewIndex(index);
    }
  };

  const closePreview = () => {
    if (previewImage) {
      const index = media.findIndex((item) => item.id === previewImage.id);

      if (index >= 0) {
        setActiveIndex(index);
      }
    }

    setPreviewIndex(null);
  };

  const changePreview = (step: number) => {
    setPreviewIndex((index) =>
      index === null
        ? null
        : (index + step + actualImages.length) % actualImages.length,
    );
  };

  return (
    <div className="min-w-0" aria-label={t("galleryLabel", { project: title })}>
      {/* Main image — original desktop layout */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#dcd9d0]">
        {current.src ? (
          <button
            type="button"
            onClick={openPreview}
            aria-label={t("openImage", {
              type: currentType,
            })}
            className="group absolute inset-0 block h-full w-full cursor-zoom-in overflow-hidden text-left"
          >
            <Image
              src={current.src}
              alt={t("mediaAlt", {
                type: currentType,
                project: title,
              })}
              fill
              sizes="(max-width: 780px) 100vw, 55vw"
              style={{
                objectPosition: current.position ?? "center",
              }}
              className={
                current.type === "plan"
                  ? "object-contain"
                  : "object-cover transition-transform duration-700 group-hover:scale-[1.015] motion-reduce:transition-none"
              }
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/55 to-transparent px-5 py-5 text-[9px] tracking-[.1em] text-white uppercase">
              <span>{currentType}</span>
              <span className="flex items-center gap-2">
                {t("viewImage")}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  className="h-4 w-4"
                >
                  <path d="M7 17 17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </span>
            </div>
          </button>
        ) : (
          <div className="flex h-full flex-col justify-between p-[5%] text-[#687167]">
            <div className="flex justify-between gap-3 text-[9px] tracking-[.13em] uppercase">
              <span>WONDER / {currentType}</span>
              <span>{project.area} m²</span>
            </div>

            <div className="font-editorial text-[clamp(90px,12vw,170px)] leading-none tracking-[-.07em]">
              {project.area}
              <span className="ml-2 text-[18px] tracking-normal">m²</span>
            </div>

            <p className="text-[9px] tracking-[.12em] uppercase">
              {t("mediaPending")}
            </p>
          </div>
        )}
      </div>

      {/* Original thumbnails */}
      <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1">
        {media.map((item, index) => {
          const type = t(`mediaTypes.${item.type}`);

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${index + 1}. ${type}`}
              aria-pressed={index === activeIndex}
              className={`relative h-[76px] w-[112px] shrink-0 overflow-hidden border-2 transition-colors duration-200 ${
                index === activeIndex
                  ? "border-[#303d33]"
                  : "border-transparent hover:border-[#aaa99f]"
              }`}
            >
              {item.src ? (
                <Image
                  src={item.src}
                  alt=""
                  fill
                  sizes="112px"
                  className={
                    item.type === "plan"
                      ? "bg-[#dcd9d0] object-contain"
                      : "object-cover"
                  }
                />
              ) : (
                <span className="flex h-full w-full flex-col items-center justify-center gap-1 bg-[#dcd9d0] px-1 text-center text-[#687167]">
                  <span className="text-[10px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[8px] leading-[1.2]">{type}</span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Original gallery controls */}
      <div className="mt-4 flex items-center justify-between gap-4">
        <span className="text-[10px] tracking-[.1em] text-[#737a71]">
          {t("imageCounter", {
            current: String(activeIndex + 1).padStart(2, "0"),
            total: String(media.length).padStart(2, "0"),
          })}
        </span>

        {media.length > 1 && (
          <div className="flex gap-2">
            <ArrowButton
              direction="previous"
              label={t("previousImage")}
              onClick={previous}
            />

            <ArrowButton
              direction="next"
              label={t("nextImage")}
              onClick={next}
            />
          </div>
        )}
      </div>

      {/* Original desktop fullscreen modal */}
      {previewImage && previewIndex !== null && (
        <ModalShell
          label={t("galleryLabel", { project: title })}
          onClose={closePreview}
          className="w-[min(1200px,95vw)] p-3"
        >
          <button
            data-modal-close
            type="button"
            onClick={closePreview}
            aria-label={t("closeImage")}
            className="absolute top-4 right-4 z-20 grid h-10 w-10 place-items-center bg-[#f6f4ef] text-ink transition-colors hover:bg-forest hover:text-white"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              className="h-4 w-4"
            >
              <path d="M6 6 18 18" />
              <path d="M18 6 6 18" />
            </svg>
          </button>

          <div className="relative h-[min(72dvh,720px)] w-full overflow-hidden bg-[#d7d5cf]">
            <Image
              src={previewImage.src}
              alt={t("mediaAlt", {
                type: t(`mediaTypes.${previewImage.type}`),
                project: title,
              })}
              fill
              sizes="95vw"
              className="object-contain"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 px-2 pt-4 pb-1">
            <div className="flex flex-col gap-1">
              <span className="font-editorial text-[23px]">{title}</span>

              <span className="text-[10px] tracking-[.08em] text-[#737a71]">
                {t(`mediaTypes.${previewImage.type}`)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {actualImages.length > 1 && (
                <ArrowButton
                  direction="previous"
                  label={t("previousImage")}
                  onClick={() => changePreview(-1)}
                />
              )}

              <span className="min-w-[52px] text-center text-[10px]">
                {t("imageCounter", {
                  current: String(previewIndex + 1).padStart(2, "0"),
                  total: String(actualImages.length).padStart(2, "0"),
                })}
              </span>

              {actualImages.length > 1 && (
                <ArrowButton
                  direction="next"
                  label={t("nextImage")}
                  onClick={() => changePreview(1)}
                />
              )}
            </div>
          </div>
        </ModalShell>
      )}
    </div>
  );
}

/* Shared project structure — original layout */

function ProjectCase({
  project,
  index,
}: {
  project: WorkProject;
  index: number;
}) {
  const t = useTranslations("SelectedWork");
  const title = t(`projects.${project.id}.title`);

  return (
    <article
      aria-label={title}
      className="grid grid-cols-[minmax(0,1.12fr)_minmax(0,.88fr)] items-start gap-[5.5vw] max-md:grid-cols-1 max-md:gap-9"
    >
      <div
        className={`min-w-0 max-md:order-2 ${
          index % 2 === 1 ? "md:order-2" : ""
        }`}
      >
        {/* Mobile only */}
        <div className="md:hidden">
          <MobileGallery project={project} title={title} />
        </div>

        {/* Desktop only — original viewer */}
        <div className="hidden md:block">
          <DesktopGallery project={project} title={title} />
        </div>
      </div>

      <div
        className={`flex min-w-0 flex-col items-start max-md:order-1 ${
          index % 2 === 1 ? "md:order-1" : ""
        }`}
      >
        <div className="mb-8 flex w-full justify-between gap-4 border-b border-wonder-line pb-4 text-[9px] tracking-[.13em] text-[#777b74] uppercase">
          <span>
            {String(index + 1).padStart(2, "0")} / {t("caseLabel")}
          </span>

          <span>{project.area} m²</span>
        </div>

        <h3 className="font-editorial text-[clamp(40px,4.2vw,70px)] leading-[1.04] tracking-[-.045em] max-md:text-[clamp(40px,9vw,60px)]">
          {title}
        </h3>

        <p className="mt-7 max-w-[440px] text-base leading-[1.7] text-[#626861]">
          {t(`projects.${project.id}.description`)}
        </p>

        <div className="mt-9 flex flex-wrap gap-2">
          {(["focus1", "focus2", "focus3"] as const).map((key) => (
            <span
              key={key}
              className="border border-[#c8c9c0] px-3 py-2 text-[10px] text-[#626861]"
            >
              {t(`projects.${project.id}.${key}`)}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function SelectedWork() {
  const t = useTranslations("SelectedWork");

  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-heading"
      className="bg-paper-soft px-[4.5%] pt-[76px] pb-[110px] max-md:px-5 max-md:pt-[60px] max-md:pb-[76px]"
    >
      <div className="flex justify-between gap-5 border-b border-wonder-line pb-[21px] text-[9px] tracking-[.15em] text-[#777b74] uppercase">
        <span>{t("sectionLabel")}</span>
        <span className="text-right">{t("sectionRight")}</span>
      </div>

      <div className="mt-[62px] grid grid-cols-2 items-end gap-10 max-md:mt-[42px] max-md:grid-cols-1 max-md:gap-6">
        <h2
          id="selected-work-heading"
          className="font-editorial text-[clamp(60px,6.3vw,108px)] leading-[.91] tracking-[-.052em] max-md:text-[clamp(53px,11vw,83px)]"
        >
          {t("headingLine1")}
          <br />
          <em className="font-normal text-[#687368]">{t("headingLine2")}</em>
        </h2>

        <p className="max-w-[460px] pb-2 text-base leading-[1.65] text-[#626861] max-md:pb-0">
          {t("intro")}
        </p>
      </div>

      <div className="mt-[86px] flex flex-col gap-[110px] max-md:mt-[54px] max-md:gap-[80px]">
        {selectedWorkProjects.map((project, index) => (
          <ProjectCase key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
