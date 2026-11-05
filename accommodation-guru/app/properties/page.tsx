import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function PropertiesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="guru-catalogue-hero" aria-labelledby="catalogue-title">
          <Image
            src="/images/hero-coastal-villa.webp"
            alt="A contemporary tropical holiday villa with a private swimming pool, lush palms and open-air living spaces"
            fill
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="guru-catalogue-hero-content">
            <p className="guru-kicker">The Accommodation Guru · Kenya</p>
            <h1 id="catalogue-title">
              Explore Our <em>Getaways</em>
            </h1>
            <p>
              Tell us where you would love to go and what your ideal stay looks
              like. We will help you explore suitable accommodation and connect
              with the relevant property owners.
            </p>
            <Link className="guru-button guru-button-gold" href="/contact">
              Find Your Stay <span aria-hidden="true">↗</span>
            </Link>
            <span className="guru-catalogue-hero-note">
              PRIVATE VILLAS · COASTAL ESCAPES · COUNTRY RETREATS
            </span>
          </div>
        </section>

        <section className="guru-catalogue-empty container-page">
          <p className="guru-kicker">A considered collection</p>
          <h2>
            Every great stay begins
            <br />
            <em>with the right conversation.</em>
          </h2>
          <p>
            Our featured property details are being confirmed with owners. In
            the meantime, share your destination, dates and preferences and our
            team can help identify suitable options.
          </p>
          <Link className="guru-button guru-button-dark" href="/contact">
            Make an Enquiry <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
