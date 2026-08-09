import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gositez-website.vercel.app"),

  title: {
    default: "Gositez | Premium Web Design Agency in Dubai",
    template: "%s | Gositez",
  },

  description:
    "Gositez is a Dubai-based digital agency creating premium websites, Shopify stores, branding, and automation for modern businesses.",

  keywords: [
    "Gositez",
    "Gositez AE",
    "Gositez UAE",
    "Gositez Dubai",
    "Gositez website",
    "Gositez web design",
    "Gositez web development",
    "web design Dubai",
    "web development Dubai",
    "Shopify website design Dubai",
    "branding Dubai",
    "digital agency Dubai",
  ],

  authors: [
    {
      name: "Gavin De Silva",
    },
  ],

  creator: "Gavin De Silva",
  publisher: "Gositez",

  verification: {
    google: "MN5gh4wAOuXWAZask4fvPZHcrtCki2dM0gheRVb5VWw",
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://gositez-website.vercel.app",
    siteName: "Gositez",
    title: "Gositez | Premium Web Design Agency in Dubai",
    description:
      "Gositez is a Dubai-based digital agency creating premium websites, Shopify stores, branding, and automation for modern businesses.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gositez | Premium Web Design Agency in Dubai",
    description:
      "Gositez is a Dubai-based digital agency creating premium websites, Shopify stores, branding, and automation for modern businesses.",
  },

  other: {
    "instagram:site": "@gositez",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://gositez-website.vercel.app/#organization",
      name: "Gositez",
      url: "https://gositez-website.vercel.app",
      description:
        "Gositez is a Dubai-based digital agency creating premium websites, Shopify stores, branding, and automation for modern businesses.",
      founder: {
        "@id": "https://gositez-website.vercel.app/#gavin-de-silva",
      },
      sameAs: ["https://www.instagram.com/gositez/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://gositez-website.vercel.app/#website",
      url: "https://gositez-website.vercel.app",
      name: "Gositez",
      publisher: {
        "@id": "https://gositez-website.vercel.app/#organization",
      },
    },
    {
      "@type": "Person",
      "@id": "https://gositez-website.vercel.app/#gavin-de-silva",
      name: "Gavin De Silva",
      jobTitle: "Founder",
      worksFor: {
        "@id": "https://gositez-website.vercel.app/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body>
        <Navbar />

        {children}

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}