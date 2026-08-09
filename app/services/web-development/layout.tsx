import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development | Premium Websites in Dubai",
  description:
    "Gositez creates premium, responsive websites with modern design, fast performance, and experiences built to help businesses grow in Dubai and the UAE.",
  keywords: [
    "Gositez web development",
    "Gositez website",
    "web development Dubai",
    "web design Dubai",
    "website development UAE",
    "website design UAE",
    "premium websites Dubai",
    "business website Dubai",
  ],
  alternates: {
    canonical: "/services/web-development",
  },
  openGraph: {
    title: "Web Development | Premium Websites in Dubai | Gositez",
    description:
      "Gositez creates premium, responsive websites with modern design, fast performance, and experiences built to help businesses grow in Dubai and the UAE.",
    url: "/services/web-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development | Premium Websites in Dubai | Gositez",
    description:
      "Gositez creates premium, responsive websites with modern design, fast performance, and experiences built to help businesses grow in Dubai and the UAE.",
  },
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}