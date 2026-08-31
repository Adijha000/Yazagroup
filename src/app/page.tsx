import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { ConsultingFirst } from "@/components/sections/ConsultingFirst";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { WhyYaza } from "@/components/sections/WhyYaza";
import { OurWork } from "@/components/sections/OurWork";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <ConsultingFirst />
        <WhatWeDo />
        <Ecosystem />
        <HowWeWork />
        <WhoWeWorkWith />
        <WhyYaza />
        <OurWork />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
