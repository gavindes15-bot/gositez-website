import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trusted from "@/components/Trusted";
import Services from "@/components/Services";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import Results from "@/components/Results";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Services />
      <WhoWeWorkWith />
      <Results />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}