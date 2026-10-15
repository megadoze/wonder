// All copy and project details are kept separate from the page UI for easy editing.
export const navigation = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Spaces' },
  { href: '#approach', label: 'Approach' },
  { href: '#studio', label: 'Studio' },
  { href: '#contact', label: 'Contact' },
] as const;

export const services = [
  {
    title: 'Interior Design',
    short: 'Complete interior concepts from vision to refined details.',
    description:
      'A complete interior direction that brings layout, atmosphere, colour, furniture, lighting and detail into one coherent whole.',
    features: ['Concept & visual direction', 'Room-by-room design', 'Colour, lighting & atmosphere'],
  },
  {
    title: 'Space Planning',
    short: 'Thoughtful layouts tailored to the way you live.',
    description:
      'A focused study of how the space should work — improving flow, proportion, furniture placement and everyday function.',
    features: ['Functional zoning', 'Furniture layouts', 'Movement, scale & proportion'],
  },
  {
    title: 'Furniture & Materials',
    short: 'Curated furniture, finishes and lighting with a clear point of view.',
    description:
      'A curated material and furnishing direction that gives the interior depth, character and visual consistency.',
    features: ['Furniture selection', 'Materials & finishes', 'Decorative lighting & details'],
  },
  {
    title: 'Design Support',
    short: 'Focused guidance when you need an experienced design perspective.',
    description:
      'A flexible design perspective for clients who are developing or implementing ideas and want expert input at key moments.',
    features: ['Design consultations', 'Review of selections', 'Direction & consistency'],
  },
] as const;

export const projects = [
  {
    title: 'Light & Atmosphere',
    descriptor: 'INTERIOR STUDY',
    src: '/images/interior-study-light.webp',
    alt: 'Contemporary dining interior with layered lighting and warm wood details',
    width: 1536,
    height: 1024,
  },
  {
    title: 'Form & Material',
    descriptor: 'INTERIOR STUDY',
    src: '/images/interior-study-form.webp',
    alt: 'Minimal contemporary kitchen with strong lines and a sculptural central island',
    width: 1536,
    height: 1024,
  },
  {
    title: 'Privacy & Calm',
    descriptor: 'INTERIOR STUDY',
    src: '/images/interior-study-calm.webp',
    alt: 'Peaceful bedroom with thoughtful furniture, soft textiles, and filtered natural daylight',
    width: 1536,
    height: 1024,
  },
] as const;

export const processSteps = [
  {
    title: 'Discover',
    body: 'How you live, what matters, what needs to change and what the space should feel like.',
  },
  {
    title: 'Plan',
    body: 'Layout, circulation, scale and the spatial logic that makes everyday life work better.',
  },
  {
    title: 'Define',
    body: 'Colour, furniture, materials, lighting and details shaped into one clear design direction.',
  },
  {
    title: 'Refine',
    body: 'Selections are resolved, questions are reviewed and the concept stays coherent as decisions are made.',
  },
] as const;

export const formatIndex = (index: number) => String(index + 1).padStart(2, '0');
