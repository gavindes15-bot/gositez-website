import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding | Professional Brand Identity in Dubai",
  description:
    "Gositez creates professional brand identities, logos, visual systems, and digital assets that help businesses stand out in Dubai and across the UAE.",
  keywords: [
    "Gositez branding",
    "Gositez Dubai",
    "branding Dubai",
    "brand identity Dubai",
    "logo design Dubai",
    "branding UAE",
    "brand design UAE",
    "digital branding Dubai",
  ],
  alternates: {
    canonical: "/services/branding",
  },
  openGraph: {
    title: "Branding | Professional Brand Identity in Dubai | Gositez",
    description:
      "Gositez creates professional brand identities, logos, visual systems, and digital assets that help businesses stand out in Dubai and across the UAE.",
    url: "/services/branding",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding | Professional Brand Identity in Dubai | Gositez",
    description:
      "Gositez creates professional brand identities, logos, visual systems, and digital assets that help businesses stand out in Dubai and across the UAE.",
  },
};

export default function BrandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}