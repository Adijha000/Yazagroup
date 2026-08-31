import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/BlogPost";
import { getPostBySlug } from "@/lib/blog";

const post = getPostBySlug("contract-to-hire-vs-permanent-hiring")!;

export const metadata: Metadata = {
  title: `${post.title} — Yaza Group`,
  description: post.description,
  alternates: { canonical: "/blog/contract-to-hire-vs-permanent-hiring" },
  openGraph: {
    title: post.title,
    description: post.description,
    type: "article",
    publishedTime: post.date,
  },
};

const faqs = [
  {
    q: "What is contract to hire?",
    a: "Contract to hire is an engagement model where a professional works on a defined contract, typically three to six months, with an agreed path to a permanent offer if both sides want to continue. You evaluate real, on the job performance before committing to a permanent role, rather than relying only on interviews.",
  },
  {
    q: "Is contract to hire more expensive than hiring permanently?",
    a: "The contract phase typically carries a higher effective rate than a permanent salary, because it includes flexibility for both sides. But it is usually cheaper than the full cost of a bad permanent hire, which includes severance, lost productivity, and the time spent hiring again. For roles where fit is uncertain, contract to hire reduces that risk at a predictable cost.",
  },
  {
    q: "How long should a contract to hire period last?",
    a: "Most technology roles need three to six months to reveal whether someone is genuinely a fit, long enough to see them work through at least one full delivery cycle, short enough that both sides are not left in limbo. Highly specialized or senior roles sometimes warrant a longer window.",
  },
  {
    q: "When is permanent hiring the better choice from the start?",
    a: "When the role is well defined, the need is long term and certain, and you are hiring for a function your team already knows how to evaluate well, permanent hiring is usually faster and simpler. Contract to hire earns its cost when uncertainty is the real issue, not when the role itself is unclear.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.description,
  datePublished: post.date,
  author: { "@type": "Organization", name: "Yaza Group" },
  publisher: { "@type": "Organization", name: "Yaza Group" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://yazagroup.com/blog/contract-to-hire-vs-permanent-hiring",
  },
};

export default function Page() {
  return (
    <BlogPostLayout post={post} faqs={faqs} jsonLd={jsonLd}>
      <p>
        <strong>
          Contract to hire is the better choice when fit is genuinely
          uncertain. Permanent hiring is the better choice when the role is
          well defined and the need is stable.
        </strong>{" "}
        The mistake most teams make is picking one model as a default
        policy, rather than deciding case by case based on what is actually
        uncertain about the hire.
      </p>

      <h2>Why permanent hiring asks you to decide too early</h2>
      <p>
        A standard hiring process, resume, interviews, references, asks you
        to predict how someone will perform on your team based on
        conversations and a handful of technical exercises. For senior or
        highly specialized roles, that prediction gets harder, not easier,
        because the work itself is harder to simulate in an interview
        room. Contract to hire replaces prediction with observation. You
        watch someone work through real deadlines, real ambiguity, and
        real team dynamics before making a long term commitment.
      </p>

      <h2>What contract to hire is not</h2>
      <p>
        Contract to hire is not a way to get a trial run on the cheap, and
        it is not a way to avoid making a real offer. Treated that way, it
        damages trust with candidates and with your own team. Treated
        properly, it is a genuine two way evaluation: the professional is
        also deciding whether your team, your process, and your leadership
        are worth committing to permanently. The best contract to hire
        engagements are transparent about that from day one.
      </p>

      <h2>A simple framework for the decision</h2>
      <table className="w-full border-collapse text-left text-base">
        <thead>
          <tr className="border-b border-ink/15">
            <th className="py-3 pr-4 font-display font-medium text-ink">
              Situation
            </th>
            <th className="py-3 font-display font-medium text-ink">
              Better fit
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink/10 text-ink/65">
          <tr>
            <td className="py-3 pr-4">Role and scope are well understood</td>
            <td className="py-3">Permanent hiring</td>
          </tr>
          <tr>
            <td className="py-3 pr-4">
              Team fit or working style is the real unknown
            </td>
            <td className="py-3">Contract to hire</td>
          </tr>
          <tr>
            <td className="py-3 pr-4">
              Need is confirmed but timing is not final
            </td>
            <td className="py-3">Contract to hire</td>
          </tr>
          <tr>
            <td className="py-3 pr-4">
              Hiring for a highly specialized or senior technical role
            </td>
            <td className="py-3">Contract to hire</td>
          </tr>
          <tr>
            <td className="py-3 pr-4">
              Your team has hired this type of role successfully before
            </td>
            <td className="py-3">Permanent hiring</td>
          </tr>
        </tbody>
      </table>

      <h2>What good contract to hire looks like in practice</h2>
      <p>
        The strongest contract to hire engagements share three
        characteristics. First, the evaluation criteria are set before the
        contract starts, both sides know what &ldquo;working out&rdquo;
        actually means. Second, the professional is genuinely integrated
        into the team, not held at arm&rsquo;s length until the decision
        point. Third, the conversation about a permanent offer happens
        early, not as a surprise at the end of the contract term. This is
        exactly how we{" "}
        <Link href="/services" className="text-amber-deep underline underline-offset-2">
          structure engagement models
        </Link>{" "}
        for clients who are not yet certain whether a role should be
        permanent from day one.
      </p>

      <h2>The takeaway</h2>
      <p>
        Contract to hire is not a hedge against making a decision, it is a
        better way to make one. It replaces a guess with evidence, at a
        cost that is usually lower than the cost of a permanent hire that
        does not work out. If the role is well understood and the need is
        certain, hire permanently and move fast. If either of those is in
        question,{" "}
        <Link href="/solutions" className="text-amber-deep underline underline-offset-2">
          shape the engagement around what you actually need to learn
        </Link>{" "}
        before you commit.
      </p>
    </BlogPostLayout>
  );
}
