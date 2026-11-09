import { getWhatsAppUrl } from "@/lib/site-config";

export function FloatingWhatsApp() {
  const href = getWhatsAppUrl(
    "Hello The Accommodation Guru, I would like to make an enquiry.",
  );

  return (
    <a
      className="floating-whatsapp"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with The Accommodation Guru on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M16.02 3.2A12.65 12.65 0 0 0 5.13 22.3L3.4 28.6l6.45-1.69A12.67 12.67 0 1 0 16.02 3.2Zm0 23.08c-1.92 0-3.8-.51-5.45-1.48l-.39-.23-3.83 1 1.02-3.73-.25-.4a10.38 10.38 0 1 1 8.9 4.84Zm5.7-7.78c-.31-.16-1.84-.91-2.13-1.01-.29-.1-.5-.16-.71.16-.21.31-.81 1.01-.99 1.22-.18.21-.37.24-.68.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.33-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.22 3.39 5.37 4.75.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z"
        />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
