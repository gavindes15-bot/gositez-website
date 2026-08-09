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
      name: "Gavin DeSilva",
    },
  ],

  creator: "Gavin DeSilva",
  publisher: "Gositez",

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
      </body>
    </html>
  );
}