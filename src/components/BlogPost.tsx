import type { ReactNode } from "react";
import Link from "next/link";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";
import { FinalCta } from "./sections/FinalCta";
import type { BlogPost } from "@/lib/blog";

export function BlogPostLayout({
  post,
  faqs,
  jsonLd,
  children,
}: {
  post: BlogPost;
  faqs: { q: string; a: string }[];
  jsonLd: object;
  children: ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <article>
          <header className="relative overflow-hidden bg-ink pt-40 pb-16 md:pt-48 md:pb-20">
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-amber/10 blur-3xl" />
            </div>
            <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
              <Reveal>
                <Link
                  href="/blog"
                  className="text-xs font-medium uppercase tracking-[0.14em] text-paper/40 transition-colors hover:text-amber"
                >
                  ← Insights
                </Link>
                <p className="mt-6 text-xs font-medium uppercase tracking-[0.14em] text-amber">
                  {post.category}
                </p>
                <h1 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.15] text-paper sm:text-4xl md:text-5xl">
                  {post.title}
                </h1>
                <p className="mt-6 text-balance text-lg leading-relaxed text-paper/60">
                  {post.description}
                </p>
                <div className="mt-8 flex items-center gap-4 text-xs text-paper/40">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span aria-hidden="true">•</span>
                  <span>{post.readTime}</span>
                </div>
              </Reveal>
            </div>
          </header>

          <div className="bg-paper py-16 md:py-24">
            <div className="mx-auto max-w-3xl px-6 lg:px-10">
              <Reveal>
                <div className="prose-yaza space-y-7 text-lg leading-relaxed text-ink/70">
                  {children}
                </div>
              </Reveal>

              {faqs.length > 0 && (
                <Reveal delay={0.1} className="mt-16 border-t border-ink/10 pt-12">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber-deep">
                    Frequently Asked Questions
                  </p>
                  <div className="mt-6 space-y-8">
                    {faqs.map((f) => (
                      <div key={f.q}>
                        <h3 className="font-display text-xl font-medium leading-snug text-ink">
                          {f.q}
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-ink/60">
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </article>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
