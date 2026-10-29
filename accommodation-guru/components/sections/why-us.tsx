const benefits = [
  {
    title: "Personalized Matching",
    description:
      "We take time to understand your preferences and match you with homes that fit your style, group size, and desired experience.",
  },
  {
    title: "Direct Owner Communication",
    description:
      "Once matched, we facilitate clear communication with the property owner so expectations are aligned before you arrive.",
  },
  {
    title: "Curated Selection",
    description:
      "We work with a carefully chosen network of private homes rather than an open marketplace of every available listing.",
  },
  {
    title: "24/7 Support",
    description:
      "Support is available around the clock during your stay. (Service hours and response commitments to be confirmed before launch.)",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-ivory">
      <div className="container-page">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-ocean/70 text-sm tracking-[0.15em] uppercase mb-3 font-medium">
            Why book through us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
            A more personal way to stay
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((item) => (
            <div key={item.title} className="flex gap-5">
              <div className="flex-shrink-0 mt-1">
                <div className="h-10 w-10 rounded-full border border-sand flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-gold" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
