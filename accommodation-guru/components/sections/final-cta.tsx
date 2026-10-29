"use client";

import { Button } from "@/components/ui/button";

type Props = {
  onGuest: () => void;
  onOwner: () => void;
};

export function FinalCta({ onGuest, onOwner }: Props) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ocean via-[#0c353b] to-[#082a2f]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-200/10 to-transparent" />
      </div>

      <div className="container-page relative z-10 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight text-balance max-w-2xl mx-auto">
          Ready to find your next escape?
        </h2>
        <p className="mt-5 text-white/80 text-lg max-w-lg mx-auto">
          Whether you are planning a stay or sharing a home, we are here to make the connection.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" size="lg" onClick={onGuest}>
            Start Your Search
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={onOwner}
            className="border-white/40 text-white hover:bg-white/10"
          >
            Partner With Us as an Owner
          </Button>
        </div>
      </div>
    </section>
  );
}
