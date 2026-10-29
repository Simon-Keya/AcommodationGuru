"use client";

import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "For Guests",
    description: "Tell us your dream stay — location, dates, style, and any special requirements.",
  },
  {
    number: "02",
    title: "Matching",
    description: "We connect you with the perfect owner based on your preferences and our curated network.",
  },
  {
    number: "03",
    title: "Experience",
    description: "Enjoy a seamless, private vacation with personal support throughout your stay.",
  },
];

type Props = {
  onStart: () => void;
};

export function HowItWorks({ onStart }: Props) {
  return (
    <section id="how-it-works" className="section-padding bg-ivory">
      <div className="container-page">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-ocean/70 text-sm tracking-[0.15em] uppercase mb-3 font-medium">
            The process
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
            How it works
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            A simple, personal journey from inquiry to arrival.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(100%+0.5rem)] w-[calc(100%-1rem)] h-px bg-sand" />
              )}
              <div className="text-gold font-serif text-3xl mb-4">{step.number}</div>
              <h3 className="font-serif text-xl sm:text-2xl text-charcoal mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <Button variant="primary" size="lg" onClick={onStart}>
            Start Finding Your Stay
          </Button>
        </div>
      </div>
    </section>
  );
}
