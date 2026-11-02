import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Accommodation Guru | Find Your Perfect Home Away From Home",
  description:
    "Discover exceptional holiday homes, private villas, beautiful cottages and short-stay apartments across Kenya. Personalized matching and dedicated booking assistance.",
  openGraph: {
    title: "The Accommodation Guru | Find Your Perfect Home Away From Home",
    description:
      "Find your perfect home away from home. The Accommodation Guru connects travellers with exceptional stays across Kenya.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
