import type { Metadata } from "next";

import Hero from "@/components/Hero";
import Trusted from "@/components/Trusted";
import Services from "@/components/Services";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import Results from "@/components/Results";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Gositez | Premium Web Design Agency in Dubai",
  description:
    "Gositez is a Dubai-based digital agency creating premium websites, Shopify stores, branding, and automation for modern businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gositez | Premium Web Design Agency in Dubai",
    description:
      "Gositez is a Dubai-based digital agency creating premium websites, Shopify stores, branding, and automation for modern businesses.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gositez | Premium Web Design Agency in Dubai",
    description:
      "Gositez is a Dubai-based digital agency creating premium websites, Shopify stores, branding, and automation for modern businesses.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <Services />
      <WhoWeWorkWith />
      <Results />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}