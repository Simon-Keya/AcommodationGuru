"use client";

import { sampleProperties, type SampleProperty } from "@/lib/properties";
import { PropertyCard } from "@/components/property/property-card";

type Props = {
  onInquire: (property: SampleProperty) => void;
};

export function FeaturedHomes({ onInquire }: Props) {
  return (
    <section id="homes" className="section-padding bg-ivory">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex justify-center mb-3">
            <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8 6 4 9.5 4 13a8 8 0 0016 0c0-3.5-4-7-8-11z" opacity="0.9"/>
            </svg>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
            Featured Vacation Homes
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Handpicked properties in Kenya&apos;s most desirable destinations
          </p>
          <p className="mt-2 text-xs text-muted-foreground/80">
            Sample listings — replace with real inventory before launch
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {sampleProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onInquire={onInquire}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
