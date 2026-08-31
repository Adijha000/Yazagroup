import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhyYaza } from "@/components/sections/WhyYaza";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Why Choose Us — Yaza Group",
  description: "A partner who understands the work. Consulting led, globally reaching, precise, reliable.",
};

export default function WhyUsPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-paper pt-24">
          <WhyYaza />
        </div>
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
