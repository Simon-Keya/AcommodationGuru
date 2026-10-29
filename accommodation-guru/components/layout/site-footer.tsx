import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-white/80 py-12 sm:py-16">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-charcoal text-sm font-serif font-semibold">
                AG
              </span>
              <span className="font-serif text-xl text-white">
                The Accommodation Guru
              </span>
            </div>
            <p className="text-sm text-white/60 max-w-xs">
              Connecting discerning travellers with exceptional private homes in Kenya.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-6">
            <div>
              <p className="text-xs tracking-widest uppercase text-white/40 mb-3">
                Explore
              </p>
              <ul className="space-y-2 text-sm">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-white/40 mb-3">
                Contact
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="text-white/50">{siteConfig.email}</li>
                <li className="text-white/50">{siteConfig.phone}</li>
              </ul>
              <p className="mt-2 text-[11px] text-white/30">
                Contact details are placeholders
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} The Accommodation Guru. All rights reserved.</p>
          <p>Sample content · Replace before launch</p>
        </div>
      </div>
    </footer>
  );
}
