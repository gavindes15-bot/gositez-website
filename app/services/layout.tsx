import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Web Design, Branding & Automation",
  description:
    "Explore Gositez services including premium web development, AI and DM automation, and branding for modern businesses in Dubai and the UAE.",
  keywords: [
    "Gositez services",
    "Gositez Dubai",
    "Gositez UAE",
    "Gositez website",
    "web design Dubai",
    "web development Dubai",
    "AI automation Dubai",
    "DM automation Dubai",
    "branding Dubai",
    "digital agency UAE",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Web Design, Branding & Automation | Gositez",
    description:
      "Explore Gositez services including premium web development, AI and DM automation, and branding for modern businesses in Dubai and the UAE.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Web Design, Branding & Automation | Gositez",
    description:
      "Explore Gositez services including premium web development, AI and DM automation, and branding for modern businesses in Dubai and the UAE.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}