"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { SampleProperty } from "@/lib/properties";

type Props = {
  property: SampleProperty;
  onInquire: (property: SampleProperty) => void;
};

export function PropertyCard({ property, onInquire }: Props) {
  return (
    <article className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-soft border border-border/50 hover:shadow-card transition-all duration-300">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/95 text-[11px] font-medium tracking-wide text-charcoal/70 border border-sand/60">
            Sample
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="font-serif text-xl text-charcoal group-hover:text-ocean transition-colors">
          {property.name}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          {property.location}
        </p>
        <div className="mt-3 flex items-center gap-3 text-sm text-charcoal/80">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            {property.bedrooms} Bedrooms
          </span>
          <span className="text-border">|</span>
          <span className="text-muted-foreground text-xs">{property.view}</span>
        </div>
        <p className="mt-2 text-sm font-medium text-ocean">{property.priceRange}</p>
        <div className="mt-5">
          <Button
            variant="primary"
            size="sm"
            className="w-full"
            onClick={() => onInquire(property)}
          >
            Inquire →
          </Button>
        </div>
      </div>
    </article>
  );
}
