/** Professional portrait URLs for site testimonials (optional). */
const portrait = (id: string) =>
  `https://images.unsplash.com/${id}?w=256&h=256&fit=crop&crop=face&auto=format&q=80`;

export const TESTIMONIAL_AVATAR_URLS = {
  abid: portrait("photo-1560250097-0b93528c311a"),
  akImpression: portrait("photo-1573497019940-1c28c88b4f3e"),
} as const;
