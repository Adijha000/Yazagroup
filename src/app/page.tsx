import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Problem } from "@/components/sections/Problem";
import { ConsultingFirst } from "@/components/sections/ConsultingFirst";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhyBusinesses } from "@/components/sections/WhyBusinesses";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { WhyYaza } from "@/components/sections/WhyYaza";
import { OurWork } from "@/components/sections/OurWork";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Problem />
        <ConsultingFirst />
        <WhatWeDo />
        <WhyBusinesses />
        <Ecosystem />
        <HowWeWork />
        <WhyYaza />
        <OurWork />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
