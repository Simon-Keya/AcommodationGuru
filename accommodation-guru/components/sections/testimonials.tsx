const testimonials = [
  {
    quote:
      "The team found us a beautiful villa that matched exactly what we described. Communication was clear and the stay felt completely private.",
    name: "A.K.",
    role: "Guest · Sample",
  },
  {
    quote:
      "We needed a quiet family house near the coast. They understood the brief and made the introduction seamless.",
    name: "S.M.",
    role: "Guest · Sample",
  },
  {
    quote:
      "As an owner, I appreciate the thoughtful matching. Guests arrive prepared and the process feels professional.",
    name: "J.O.",
    role: "Property Owner · Sample",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-mist/40">
      <div className="container-page">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-ocean/70 text-sm tracking-[0.15em] uppercase mb-3 font-medium">
            Voices
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
            What people say
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Sample testimonials for layout and tone. Replace with real guest and owner feedback before launch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="bg-white rounded-lg p-6 sm:p-8 border border-border/70 shadow-soft flex flex-col"
            >
              <div className="flex gap-1 mb-4 text-gold" aria-hidden>
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-sm">
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-charcoal/90 leading-relaxed flex-1 font-serif text-lg">
                “{t.quote}”
              </p>
              <footer className="mt-6 pt-4 border-t border-border/60">
                <cite className="not-italic">
                  <span className="font-medium text-charcoal">{t.name}</span>
                  <span className="block text-sm text-muted-foreground mt-0.5">
                    {t.role}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
