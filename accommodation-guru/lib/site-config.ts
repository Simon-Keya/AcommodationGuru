export const siteConfig = {
  name: "The Accommodation Guru",
  tagline: "Connecting you to exceptional stays and unforgettable experiences.",
  whatsappNumber: "254112307490",
  email: "bookings@theaccommodationguru.com",
  phone: "0112307490",
  location: "Kenya",
  nav: [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "About Us", href: "/#why-us" },
    { label: "Contact Us", href: "/contact" },
  ],
} as const;

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
