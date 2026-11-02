"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GuestInquiryDialog } from "@/components/inquiry/guest-inquiry-dialog";
import { OwnerInquiryDialog } from "@/components/inquiry/owner-inquiry-dialog";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

const steps = [
  { n: "01", image: "/images/generated-step-coast.jpg", imageAlt: "A guest browsing holiday accommodation on a laptop from a tropical terrace", title: "Tell Us What You're Looking For", body: "Share your destination, preferred dates, number of guests and the kind of experience you're looking for." },
  { n: "02", image: "/images/generated-step-country.jpg", imageAlt: "A bright, comfortable tropical villa bedroom with garden views", title: "We Find Your Perfect Match", body: "We help you explore suitable properties and connect with the respective owners to discuss availability and booking arrangements." },
  { n: "03", image: "/images/generated-step-sunset.jpg", imageAlt: "A family enjoying a relaxing stay together at a tropical coastal villa", title: "Enjoy Your Getaway", body: "Finalize your booking, prepare for your trip and look forward to an enjoyable stay in a space that feels like home." },
];
const benefits = [
  { n: "01", title: "Personalized Property Matching", body: "We take time to understand your travel needs, preferences and budget before helping you identify suitable accommodation." },
  { n: "02", title: "Curated Property Selection", body: "Discover a selection of holiday homes and private accommodation suited to different travel experiences and budgets." },
  { n: "03", title: "Direct Owner Communication", body: "We connect you with property owners to discuss availability, pricing, property details and booking arrangements." },
  { n: "04", title: "Dedicated Booking Assistance", body: "From your initial inquiry to coordinating your booking, we're here to make finding your next stay easier." },
];
export default function HomePage() {
  const [guestOpen, setGuestOpen] = useState(false);
  const [ownerOpen, setOwnerOpen] = useState(false);
  return <>
    <SiteHeader onGuest={() => setGuestOpen(true)} onOwner={() => setOwnerOpen(true)} />
    <main id="main-content">
      <section className="guru-hero">
        <Image src="/images/hero-coastal-villa.webp" alt="A private tropical coastal villa with an ocean-facing pool and palm-fringed terrace" fill priority sizes="100vw" className="guru-hero-image" />
        <div className="guru-hero-shade" />
        <div className="guru-hero-content container-page">
          <p className="guru-eyebrow">Exceptional stays across Kenya</p>
          <h1>Find Your Perfect<br/><em>Home Away From Home</em></h1>
          <p className="guru-hero-copy">Discover exceptional holiday homes, private villas, beautiful cottages and exclusive short-stay apartments across Kenya. Whether you're planning a relaxing coastal escape, a romantic getaway, a family holiday, corporate stay, or a weekend retreat, The Accommodation Guru connects you with spaces that make every stay memorable.</p>
          <div className="guru-actions"><button type="button" className="guru-button guru-button-gold" aria-haspopup="dialog" aria-label="Find Your Stay — open guest enquiry form" onClick={() => setGuestOpen(true)}>Find Your Stay <span aria-hidden="true">↗</span></button><button className="guru-button guru-button-outline" onClick={() => setOwnerOpen(true)}>List Your Property</button></div>
          <div className="guru-trust"><span>Verified Owners</span><i/> <span>Personalized Matching</span><i/> <span>Dedicated Booking Assistance</span></div>
          
        </div>
        <div className="guru-hero-index"><span>01</span><span className="guru-index-line"/><span>KENYA · STAYS</span></div>
      </section>

      <section className="guru-intro-band"><div className="container-page guru-intro-inner"><p>THE ART OF GETTING AWAY</p><h2>Beautiful places.<br/><em>Memorable moments.</em></h2><span>From the coast to the countryside, let the right stay shape your next escape.</span></div></section>

      <section id="how-it-works" className="guru-section guru-how"><div className="container-page"><div className="guru-section-heading"><p className="guru-kicker">A simpler way to stay</p><h2>Your Perfect Stay,<br/><em>Made Simple.</em></h2><p>Finding the right holiday accommodation shouldn&apos;t be complicated. We make the process easy by connecting you with suitable property owners and helping you find a space that matches your preferences, budget and travel plans.</p></div>
        <div className="guru-steps">{steps.map((s,i)=><article className="guru-step" key={s.n}><div className="guru-step-image"><Image src={s.image} alt={s.imageAlt} fill sizes="(max-width:760px) 100vw, 30vw"/></div><div className="guru-step-top"><span>{s.n}</span><span className="guru-step-mark" aria-hidden="true">{i===0?"⌖":i===1?"✳":"↗"}</span></div><h3>{s.title}</h3><p>{s.body}</p></article>)}</div>
        <div className="guru-center-action"><button className="guru-button guru-button-dark" onClick={() => setGuestOpen(true)}>Start Finding Your Stay <span>↗</span></button></div>
      </div></section>

      <section id="homes" className="guru-featured"><div className="container-page"><div className="guru-featured-head"><div><p className="guru-kicker">Places to make memories</p><h2>Explore Our <em>Featured Getaways</em></h2><p>From breathtaking beachfront villas to peaceful countryside retreats, discover beautiful spaces designed to make your next escape extraordinary. Explore some of the properties available through The Accommodation Guru.</p></div><span className="guru-featured-count">01 <i/> 03</span></div>
        <div className="guru-image-trio"><article className="guru-image-card guru-image-large"><Image src="/images/favorite-coastal-villa.jpg" alt="A private coastal villa with a swimming pool and ocean views" fill sizes="(max-width:760px) 100vw, 55vw"/><div><span>01 / COASTAL ESCAPES</span><h3>By the water</h3></div></article><article className="guru-image-card"><Image src="/images/favorite-stone-cottage.jpg" alt="A stone cottage set in a landscaped garden" fill sizes="(max-width:760px) 100vw, 35vw"/><div><span>02 / PRIVATE RETREATS</span><h3>Find your quiet</h3></div></article><article className="guru-image-card"><Image src="/images/favorite-garden-retreat.jpg" alt="A landscaped garden retreat with outdoor seating and a swimming pool" fill sizes="(max-width:760px) 100vw, 35vw"/><div><span>03 / OPEN SPACES</span><h3>Room to unwind</h3></div></article></div>
        <p className="guru-image-note">Photography shown for inspiration. Specific property listings, details, rates and availability are shared on enquiry and must be confirmed with the property owner.</p>
        <div className="guru-center-action"><Link className="guru-button guru-button-dark" href="/properties">Explore All Properties <span>↗</span></Link></div>
      </div></section>

      <section id="why-us" className="guru-why"><div className="container-page guru-why-grid"><div className="guru-why-visual"><Image src="/images/why-us-lakeside-retreat.webp" alt="A welcoming lakeside retreat surrounded by lush gardens and tranquil water" fill sizes="(max-width:760px) 100vw, 48vw"/><div className="guru-why-caption"><span>THE ACCOMMODATION GURU</span><strong>Stay well.<br/>Travel beautifully.</strong></div></div><div className="guru-why-copy"><p className="guru-kicker">The difference is personal</p><h2>More Than Accommodation.<br/><em>An Experience Worth Remembering.</em></h2><p className="guru-why-intro">We believe every great holiday begins with finding the right place to stay. That&apos;s why we take a personalized approach to helping you discover accommodation that suits your needs.</p><div className="guru-benefits">{benefits.map(b=><article key={b.n}><span>{b.n}</span><div><h3>{b.title}</h3><p>{b.body}</p></div></article>)}</div></div></div></section>

      <section className="guru-final"><Image src="/images/hero.jpg" alt="A quiet beachfront retreat with palms, soft sand and ocean views" fill sizes="100vw"/><div className="guru-final-overlay"/><div className="container-page guru-final-content"><p className="guru-kicker">Your next chapter starts here</p><h2>Ready to Find<br/><em>Your Next Escape?</em></h2><p>Your next unforgettable getaway is closer than you think. Whether you&apos;re searching for a peaceful weekend retreat, a family holiday home or a luxurious private villa, let The Accommodation Guru help you find the perfect place.</p><div className="guru-actions"><button className="guru-button guru-button-gold" onClick={() => setGuestOpen(true)}>Start Your Search <span>↗</span></button><button className="guru-button guru-button-outline" onClick={() => setOwnerOpen(true)}>Partner With Us as an Owner</button></div></div></section>
    </main>
    <SiteFooter />
    <GuestInquiryDialog open={guestOpen} onClose={() => setGuestOpen(false)} />
    <OwnerInquiryDialog open={ownerOpen} onClose={() => setOwnerOpen(false)} />
  </>;
}
