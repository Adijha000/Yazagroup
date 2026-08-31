import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Yaza Group",
  description:
    "Research backed guidance on staff augmentation, contract to hire, and building technology teams that deliver. Written by Yaza Group.",
};

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Blog"
          title="The Yaza Group Blog."
          copy="Practical, decision ready guidance on staffing, project augmentation, and building technology teams that deliver."
        />

        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {blogPosts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.08}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col gap-3 py-10 transition-colors"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.12em] text-amber-deep">
                      <span>{post.category}</span>
                      <span className="text-ink/25" aria-hidden="true">
                        •
                      </span>
                      <time dateTime={post.date} className="text-ink/40">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                      <span className="text-ink/25" aria-hidden="true">
                        •
                      </span>
                      <span className="text-ink/40">{post.readTime}</span>
                    </div>
                    <h2 className="font-display text-2xl font-medium leading-snug text-ink transition-colors group-hover:text-amber-deep sm:text-3xl">
                      {post.title}
                    </h2>
                    <p className="max-w-2xl text-base leading-relaxed text-ink/55">
                      {post.description}
                    </p>
                    <span className="text-sm font-medium text-ink/40 transition-colors group-hover:text-amber-deep">
                      Read the article →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
