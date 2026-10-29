import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Accommodation Guru | Find Your Stay in Kenya",
  description: "Discover sample holiday homes and enquire about a stay in Kenya. The Accommodation Guru helps guests and property owners start a conversation.",
  applicationName: "The Accommodation Guru",
  openGraph: { title: "The Accommodation Guru", description: "A more personal way to find your next stay in Kenya.", type: "website" },
  icons: { icon: "/icon.svg" },
  robots: { index: false, follow: false }
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#FBF8F3" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
