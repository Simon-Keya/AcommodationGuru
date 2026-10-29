export const siteConfig = {
  name: "Accommodation Guru",
  tagline: "Better Stays. Greater Experiences.",
  whatsappNumber: "254700000000", // REPLACE BEFORE LAUNCH
  email: "hello@theaccommodationguru.com", // PLACEHOLDER
  phone: "+254 700 000 000", // PLACEHOLDER
  nav: [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
