import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Accommodation Guru | Exceptional Private Homes in Kenya",
  description:
    "We connect discerning travelers with exceptional private homes, villas, cottages and beach houses across Kenya. Personalized matching and booking support.",
  openGraph: {
    title: "The Accommodation Guru | Exceptional Private Homes in Kenya",
    description:
      "Discover curated private vacation homes in Kenya. Personalized matching between travellers and property owners.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans bg-ivory text-charcoal antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-ocean focus:text-white focus:rounded-md"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
