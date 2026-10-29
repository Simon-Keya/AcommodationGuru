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
    <article className="group flex flex-col bg-white rounded-xl overflow-hidden border border-border/40 shadow-soft hover:shadow-card transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand/30">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-medium tracking-wider uppercase text-charcoal/60 border border-white/50">
            Sample
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-serif text-lg sm:text-xl text-charcoal leading-snug group-hover:text-ocean transition-colors">
          {property.name}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          {property.location}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-charcoal/75">
          <span>{property.bedrooms} Bedrooms</span>
          <span className="text-border">·</span>
          <span className="text-muted-foreground text-xs">{property.view}</span>
        </div>

        <p className="mt-2.5 text-sm font-medium text-ocean">
          {property.priceRange}
        </p>

        <div className="mt-5 pt-1">
          <Button
            variant="primary"
            size="sm"
            className="w-full rounded-md"
            onClick={() => onInquire(property)}
          >
            Inquire
          </Button>
        </div>
      </div>
    </article>
  );
}
