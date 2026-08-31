export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "staff-augmentation-vs-project-outsourcing",
    title: "Staff Augmentation vs Project Outsourcing: How to Choose in 2026",
    description:
      "A practical framework for deciding between staff augmentation and full project outsourcing, based on control, timeline, and internal capacity, not budget alone.",
    category: "Project Augmentation",
    date: "2026-08-20",
    readTime: "8 min read",
  },
  {
    slug: "contract-to-hire-vs-permanent-hiring",
    title: "Contract to Hire vs Permanent Hiring: A Decision Framework for Technology Teams",
    description:
      "When contract to hire reduces risk and when permanent hiring is the faster, cheaper path. A clear framework for technology leaders making the call.",
    category: "Engagement Models",
    date: "2026-08-27",
    readTime: "9 min read",
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
