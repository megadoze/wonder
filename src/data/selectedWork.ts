// Temporary demo content for testing Selected Work galleries.
// Replace all photos and the sample plan with your actual materials before publishing.

export type WorkMediaType = "plan" | "visualization" | "realization" | "detail";

export type WorkMedia = {
  id: string;
  type: WorkMediaType;
  src: string | null;
  position?: string;
};

export type WorkProject = {
  id: "apartment82" | "apartment42";
  area: number;
  media: WorkMedia[];
};

export const selectedWorkProjects: WorkProject[] = [
  {
    id: "apartment82",
    area: 82,
    media: [
      {
        id: "visualization-01",
        type: "visualization",
        src: "/images/work/apartment-82/visualization-01.webp",
      },
      {
        id: "plan-01",
        type: "plan",
        src: "/images/work/apartment-82/plan-01.webp",
      },
      {
        id: "visualization-02",
        type: "visualization",
        src: "/images/work/apartment-82/visualization-02.webp",
      },
      {
        id: "detail-01",
        type: "detail",
        src: "/images/work/apartment-82/detail-01.webp",
      },
    ],
  },
  {
    id: "apartment42",
    area: 42,
    media: [
      {
        id: "kitchen-01",
        type: "realization",
        src: "/images/work/apartment-42/kitchen-01.webp",
      },
      {
        id: "detail-01",
        type: "detail",
        src: "/images/work/apartment-42/detail-01.webp",
      },
      {
        id: "detail-02",
        type: "detail",
        src: "/images/work/apartment-42/detail-02.webp",
      },
    ],
  },
];
