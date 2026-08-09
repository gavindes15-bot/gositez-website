import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & DM Automation | Lead Automation in Dubai",
  description:
    "Gositez creates AI and DM automation systems that help businesses capture leads, respond faster, and save time across Instagram and digital channels.",
  keywords: [
    "Gositez automation",
    "Gositez Dubai",
    "DM automation Dubai",
    "AI automation Dubai",
    "Instagram automation Dubai",
    "lead automation Dubai",
    "business automation UAE",
    "AI agency Dubai",
  ],
  alternates: {
    canonical: "/services/dm-automation",
  },
  openGraph: {
    title: "AI & DM Automation | Lead Automation in Dubai | Gositez",
    description:
      "Gositez creates AI and DM automation systems that help businesses capture leads, respond faster, and save time across Instagram and digital channels.",
    url: "/services/dm-automation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & DM Automation | Lead Automation in Dubai | Gositez",
    description:
      "Gositez creates AI and DM automation systems that help businesses capture leads, respond faster, and save time across Instagram and digital channels.",
  },
};

export default function DMAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}