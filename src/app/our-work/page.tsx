import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OurWork } from "@/components/sections/OurWork";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Our Work — Yaza Group",
  description: "Proof is in the placement. Where Yaza Group has delivered.",
};

export default function OurWorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-ink pt-20">
          <OurWork />
        </div>
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
