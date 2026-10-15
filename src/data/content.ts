// All copy and project details are kept separate from the page UI for easy editing.
export const navigation = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Spaces" },
  { href: "#approach", label: "Approach" },
  { href: "#studio", label: "Studio" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Interior Design",
    short:
      "Complete interior concepts, from spatial planning to the finest details.",
    description:
      "A comprehensive design concept for a room or an entire home. From spatial organisation and visual direction to furniture, materials and lighting, each element is developed as part of a cohesive interior. The result is a clear design direction shaped by the space and the way it will be lived in.",
    features: [
      "Spatial concept & layouts",
      "Moodboards & visual direction",
      "Furniture, finishes & lighting",
    ],
  },
  {
    title: "Space Planning",
    short: "Intelligent layouts that make the most of every space.",
    description:
      "A focused exploration of how a space can work better. Through thoughtful zoning, circulation and furniture placement, WONDER develops layout solutions that improve everyday function while respecting the proportions and character of the interior.",
    features: [
      "Layout options",
      "Functional zoning",
      "Furniture placement & circulation",
    ],
  },
  {
    title: "Furniture & Materials",
    short: "Considered selections of furniture, finishes and lighting.",
    description:
      "For spaces where the layout is already established, WONDER brings together furniture, materials, finishes and decorative lighting into a consistent visual direction. The focus is on creating balance, texture and character through carefully considered combinations.",
    features: [
      "Material & finish palettes",
      "Furniture selection",
      "Decorative lighting & details",
    ],
  },
  {
    title: "Design Support",
    short: "Focused design guidance for important decisions.",
    description:
      "Targeted design consultations for projects already taking shape. Whether reviewing a layout, considering material options or resolving a particular design challenge, WONDER provides an independent perspective and practical recommendations to help move the project forward with confidence.",
    features: [
      "Individual consultations",
      "Review of layouts & selections",
      "Design recommendations",
    ],
  },
] as const;

export const projects = [
  {
    title: "Light & Atmosphere",
    descriptor: "INTERIOR STUDY",
    src: "/images/interior-study-light.webp",
    alt: "Contemporary dining interior with layered lighting and warm wood details",
    width: 1536,
    height: 1024,
  },
  {
    title: "Form & Material",
    descriptor: "INTERIOR STUDY",
    src: "/images/interior-study-form.webp",
    alt: "Minimal contemporary kitchen with strong lines and a sculptural central island",
    width: 1536,
    height: 1024,
  },
  {
    title: "Privacy & Calm",
    descriptor: "INTERIOR STUDY",
    src: "/images/interior-study-calm.webp",
    alt: "Peaceful bedroom with thoughtful furniture, soft textiles, and filtered natural daylight",
    width: 1536,
    height: 1024,
  },
] as const;

export const processSteps = [
  {
    title: "Discover",
    body: "Understanding the space, its possibilities, the project brief and what matters most.",
  },
  {
    title: "Define",
    body: "Establishing the spatial concept, key priorities and a clear visual direction.",
  },
  {
    title: "Develop",
    body: "Bringing together materials, furniture, lighting and details into a coherent design.",
  },
  {
    title: "Refine",
    body: "Reviewing decisions, making final adjustments and preparing the agreed design materials.",
  },
];

export const formatIndex = (index: number) =>
  String(index + 1).padStart(2, "0");
