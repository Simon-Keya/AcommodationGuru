export const siteConfig = {
  name: "The Accommodation Guru",
  tagline: "Exceptional private homes in Kenya",
  whatsappNumber: "254700000000", // REPLACE BEFORE LAUNCH
  email: "hello@theaccommodationguru.com", // PLACEHOLDER
  phone: "+254 700 000 000", // PLACEHOLDER
  nav: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Homes", href: "#homes" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
  ],
} as const;

export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
