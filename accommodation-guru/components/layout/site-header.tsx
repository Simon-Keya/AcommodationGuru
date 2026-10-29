"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-ivory/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container-page flex h-16 sm:h-18 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setMobileOpen(false)}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ocean text-white text-sm font-serif font-semibold">
              ⌂
            </span>
            <span
              className={cn(
                "font-serif text-lg sm:text-xl tracking-tight transition-colors",
                scrolled ? "text-charcoal" : "text-white drop-shadow-sm"
              )}
            >
              The Accommodation Guru
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:opacity-80",
                  scrolled ? "text-charcoal/80" : "text-white/90"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello, I'd like to enquire about a stay.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled ? "text-ocean" : "text-white"
              )}
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            className={cn(
              "md:hidden p-2 rounded-md",
              scrolled ? "text-charcoal" : "text-white"
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-charcoal/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-ivory shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <span className="font-serif text-lg text-charcoal">Menu</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2 text-charcoal"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col p-5 gap-1">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-base font-medium text-charcoal hover:text-ocean"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center h-11 px-6 rounded-md bg-ocean text-white text-sm font-medium"
              >
                Chat on WhatsApp
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
