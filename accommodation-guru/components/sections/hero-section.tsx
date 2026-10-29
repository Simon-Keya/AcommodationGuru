"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

type HeroProps = {
  onBrowse: () => void;
  onList: () => void;
};

export function HeroSection({ onBrowse, onList }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-end sm:items-center overflow-hidden">
      {/* Real cinematic hero image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Luxury modern villa with infinity pool overlooking the ocean at golden hour"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        {/* Dark overlay for text readability — matches the visual */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      <div className="container-page relative z-10 pb-16 sm:pb-24 pt-28 sm:pt-32">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] text-white leading-[1.08] tracking-tight text-balance">
            Find Your Perfect Home Away From Home
          </h1>
          <p className="mt-5 sm:mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-xl">
            We connect discerning travelers with exceptional private homes in Kenya.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={onBrowse}
              className="w-full sm:w-auto font-medium"
            >
              Browse Homes
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={onList}
              className="w-full sm:w-auto border-white/50 text-white hover:bg-white/10 bg-transparent"
            >
              List Your Property
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Verified Owners
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A17.919 17.919 0 012.25 12c0-.993.074-1.967.22-2.922.234-.847 1.058-1.354 1.938-1.354H6.75z" />
              </svg>
              Instant Booking Support
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              Personalized Matching
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
