"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

type HeroProps = {
  onBrowse: () => void;
  onList: () => void;
};

export function HeroSection({ onBrowse, onList }: HeroProps) {
  return (
    <section className="relative min-h-[88vh] sm:min-h-[92vh] flex items-end sm:items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Luxury modern villa with infinity pool overlooking the ocean at golden hour"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={92}
        />
        {/* Stronger left-to-right and bottom gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/30" />
      </div>

      <div className="container-page relative z-10 pb-16 sm:pb-24 pt-28 sm:pt-32">
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="font-serif text-[2.35rem] sm:text-5xl lg:text-6xl xl:text-[3.75rem] text-white leading-[1.1] tracking-tight text-balance">
            Find Your Perfect Home Away From Home
          </h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-lg">
            We connect discerning travelers with exceptional private homes in Kenya.
          </p>

          <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row gap-3">
            <Button
              variant="gold"
              size="lg"
              onClick={onBrowse}
              className="w-full sm:w-auto min-w-[160px] font-medium tracking-wide"
            >
              Browse Homes
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={onList}
              className="w-full sm:w-auto min-w-[160px] border-white/45 text-white hover:bg-white/10 bg-transparent"
            >
              List Your Property
            </Button>
          </div>

          <div className="mt-9 sm:mt-10 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-white/70">
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gold" />
              Verified Owners
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gold" />
              Instant Booking Support
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gold" />
              Personalized Matching
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
