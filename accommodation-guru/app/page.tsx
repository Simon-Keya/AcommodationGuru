"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BedDouble, Check, ChevronLeft,
  ChevronRight, Compass, House, Menu, MessageCircle, Sparkles, X, MapPin,
  Users, Waves, KeyRound, Copy, ExternalLink, Search
} from "lucide-react";
import { z } from "zod";

type Property = {
  id: string; name: string; location: string; bedrooms: number; price: string;
  image: string; imageAlt: string; type: string;
};

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254700000000";
const WHATSAPP_IS_PLACEHOLDER = !process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || !/^\d{8,15}$/.test(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER) || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER === "254700000000";

const properties: Property[] = [
  { id: "diani", name: "Diani Beach House", location: "Kwale · Coast", bedrooms: 5, price: "KES 45,000–70,000 / night", image: "/images/diani-house.svg", imageAlt: "Illustrative architectural scene of a coastal beach house with palms", type: "Beach house" },
  { id: "karen", name: "Karen Hillside Villa", location: "Nairobi", bedrooms: 4, price: "KES 30,000–50,000 / night", image: "/images/karen-villa.svg", imageAlt: "Illustrative architectural scene of a contemporary hillside villa", type: "Villa" },
  { id: "naivasha", name: "Naivasha Lakeside Cottage", location: "Naivasha · Rift Valley", bedrooms: 3, price: "KES 18,000–28,000 / night", image: "/images/naivasha-cottage.svg", imageAlt: "Illustrative lakeside cottage scene with trees and distant hills", type: "Cottage" },
  { id: "watamu", name: "Watamu Sea-view Apartment", location: "Watamu · Coast", bedrooms: 2, price: "KES 12,000–20,000 / night", image: "/images/watamu-apartment.svg", imageAlt: "Illustrative modern apartment balcony overlooking the sea", type: "Apartment" }
];

const guestSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  location: z.string().trim().min(2, "Tell us your preferred location."),
  checkIn: z.string().min(1, "Choose a check-in date."),
  checkOut: z.string().min(1, "Choose a check-out date."),
  guests: z.coerce.number().int().min(1, "At least one guest is required.").max(40, "Please contact us for groups above 40."),
  bedrooms: z.string().min(1, "Choose your preferred bedrooms."),
  budget: z.string().min(1, "Choose a budget range."),
  notes: z.string().max(1000, "Keep your notes under 1,000 characters.")
}).superRefine((value, ctx) => {
  for (const key of ["checkIn", "checkOut"] as const) {
    const raw = value[key];
    if (raw && !/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: [key], message: "Choose a valid date." });
    } else if (raw) {
      const parsed = new Date(`${raw}T00:00:00`);
      const roundTrip = !Number.isNaN(parsed.getTime())
        ? `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, "0")}-${String(parsed.getDate()).padStart(2, "0")}`
        : "";
      if (!roundTrip || roundTrip !== raw) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: [key], message: "Choose a valid date." });
      }
    }
  }
  if (value.checkIn && value.checkOut && value.checkOut <= value.checkIn) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["checkOut"], message: "Check-out must be after check-in." });
  }
  if (value.checkIn) {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const date = new Date(`${value.checkIn}T00:00:00`);
    if (!Number.isNaN(date.getTime()) && date < today) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["checkIn"], message: "Check-in cannot be in the past." });
    }
  }
});

const ownerSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  propertyType: z.string().min(1, "Choose a property type."),
  location: z.string().trim().min(2, "Enter the property's location."),
  bedrooms: z.coerce.number().int().min(1, "Enter at least one bedroom.").max(100, "Enter a valid bedroom count."),
  notes: z.string().max(1000, "Keep your notes under 1,000 characters.")
});
type GuestForm = z.infer<typeof guestSchema>;
type OwnerForm = z.infer<typeof ownerSchema>;
type FieldErrors = Record<string, string>;

function localDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function makeWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Brand({ footer = false }: { footer?: boolean }) {
  return <a href="#home" className={`brand ${footer ? "brand-footer" : ""}`} aria-label="The Accommodation Guru home">
    <span className="brand-mark" aria-hidden="true"><House size={21} strokeWidth={1.5} /><span /></span>
    <span className="brand-copy"><span className="brand-name">the accommodation</span><span className="brand-name brand-name-second">guru<span className="brand-dot">.</span></span></span>
  </a>;
}

function Modal({ type, property, onClose }: { type: "guest" | "owner"; property: Property | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [guest, setGuest] = useState<GuestForm>({
    fullName: "", location: property?.location.split(" · ")[0] ?? "", checkIn: "", checkOut: "",
    guests: 2, bedrooms: property ? String(property.bedrooms) : "Any", budget: "", notes: ""
  });
  const [owner, setOwner] = useState<OwnerForm>({ fullName: "", propertyType: property?.type ?? "", location: "", bedrooms: 1, notes: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [preparedMessage, setPreparedMessage] = useState("");
  const [preparedUrl, setPreparedUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const priorFocus = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]');
        if (!focusable.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = oldOverflow; document.removeEventListener("keydown", onKeyDown); priorFocus?.focus(); };
  }, [onClose]);

  function handleGuestSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = guestSchema.safeParse(guest);
    if (!result.success) {
      const next: FieldErrors = {};
      result.error.issues.forEach(issue => { next[String(issue.path[0])] = issue.message; });
      setErrors(next); return;
    }
    setErrors({});
    const propertyLine = property
      ? `Property of interest: ${property.name} (sample listing; availability and price need confirmation)`
      : "Property of interest: Open to suggestions";
    const message = [
      "Hello The Accommodation Guru, I would like to enquire about a stay.",
      `Name: ${result.data.fullName}`, `Preferred location: ${result.data.location}`,
      `Check-in: ${result.data.checkIn}`, `Check-out: ${result.data.checkOut}`,
      `Guests: ${result.data.guests}`, `Bedrooms: ${result.data.bedrooms}`,
      `Budget: ${result.data.budget}`, propertyLine,
      `Additional notes: ${result.data.notes || "None"}`
    ].join("\n");
    setPreparedMessage(message); setPreparedUrl(makeWhatsAppUrl(message));
  }

  function handleOwnerSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = ownerSchema.safeParse(owner);
    if (!result.success) {
      const next: FieldErrors = {};
      result.error.issues.forEach(issue => { next[String(issue.path[0])] = issue.message; });
      setErrors(next); return;
    }
    setErrors({});
    const message = [
      "Hello The Accommodation Guru, I am interested in discussing a property partnership.",
      `Name: ${result.data.fullName}`, `Property type: ${result.data.propertyType}`,
      `Location: ${result.data.location}`, `Bedrooms: ${result.data.bedrooms}`,
      `Additional notes: ${result.data.notes || "None"}`
    ].join("\n");
    setPreparedMessage(message); setPreparedUrl(makeWhatsAppUrl(message));
  }

  async function copyMessage() {
    try { await navigator.clipboard.writeText(preparedMessage); setCopied(true); }
    catch { setCopied(false); }
  }

  return <div className="modal-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title" ref={dialogRef}>
      <button className="modal-close icon-button" onClick={onClose} aria-label="Close enquiry form" ref={closeRef}><X size={20} /></button>
      {!preparedMessage ? <>
        <div className="eyebrow"><span className="eyebrow-line" />{type === "guest" ? "YOUR NEXT STAY" : "OWNER PARTNERSHIPS"}</div>
        <h2 id="modal-title">{type === "guest" ? "Tell us what you have in mind." : "Tell us about your property."}</h2>
        <p className="modal-intro">{type === "guest" ? "Share a few details and prepare an enquiry for WhatsApp. We’ll use your preferences to start the conversation." : "Introduce your home and prepare a partnership enquiry for WhatsApp."}</p>
        {WHATSAPP_IS_PLACEHOLDER && <p className="config-notice"><strong>Setup notice:</strong> the WhatsApp number is a placeholder and must be configured before launch.</p>}
        {type === "guest" ? <form onSubmit={handleGuestSubmit} noValidate>
          <div className="form-grid">
            <label className="field field-wide">Full name <span>*</span><input value={guest.fullName} onChange={e => setGuest({ ...guest, fullName: e.target.value })} autoComplete="name" aria-invalid={!!errors.fullName} />{errors.fullName && <small className="field-error">{errors.fullName}</small>}</label>
            <label className="field">Preferred location <span>*</span><input value={guest.location} onChange={e => setGuest({ ...guest, location: e.target.value })} placeholder="e.g. Diani, Naivasha" aria-invalid={!!errors.location} />{errors.location && <small className="field-error">{errors.location}</small>}</label>
            <label className="field">Number of guests <span>*</span><input type="number" min="1" max="40" value={guest.guests} onChange={e => setGuest({ ...guest, guests: Number(e.target.value) })} aria-invalid={!!errors.guests} />{errors.guests && <small className="field-error">{errors.guests}</small>}</label>
            <label className="field">Check-in <span>*</span><input type="date" min={localDateString()} value={guest.checkIn} onChange={e => setGuest({ ...guest, checkIn: e.target.value, checkOut: guest.checkOut && guest.checkOut <= e.target.value ? "" : guest.checkOut })} aria-invalid={!!errors.checkIn} />{errors.checkIn && <small className="field-error">{errors.checkIn}</small>}</label>
            <label className="field">Check-out <span>*</span><input type="date" min={guest.checkIn || localDateString()} value={guest.checkOut} onChange={e => setGuest({ ...guest, checkOut: e.target.value })} aria-invalid={!!errors.checkOut} />{errors.checkOut && <small className="field-error">{errors.checkOut}</small>}</label>
            <label className="field">Preferred bedrooms <span>*</span><select value={guest.bedrooms} onChange={e => setGuest({ ...guest, bedrooms: e.target.value })}><option value="Any">Flexible / any</option>{[1,2,3,4,5,6,7,8].map(n => <option key={n} value={String(n)}>{n} {n === 1 ? "bedroom" : "bedrooms"}</option>)}</select>{errors.bedrooms && <small className="field-error">{errors.bedrooms}</small>}</label>
            <label className="field">Budget per night <span>*</span><select value={guest.budget} onChange={e => setGuest({ ...guest, budget: e.target.value })}><option value="">Select a range</option><option>Under KES 12,000</option><option>KES 12,000–25,000</option><option>KES 25,000–50,000</option><option>KES 50,000+</option><option>Flexible</option></select>{errors.budget && <small className="field-error">{errors.budget}</small>}</label>
            <label className="field field-wide">Additional notes <textarea rows={3} value={guest.notes} onChange={e => setGuest({ ...guest, notes: e.target.value })} placeholder="Occasion, preferences, or anything else we should know." />{errors.notes && <small className="field-error">{errors.notes}</small>}</label>
          </div>
          <button className="button button-primary modal-submit" type="submit">Prepare WhatsApp enquiry <ArrowRight size={17} /></button>
        </form> : <form onSubmit={handleOwnerSubmit} noValidate>
          <div className="form-grid">
            <label className="field field-wide">Full name <span>*</span><input value={owner.fullName} onChange={e => setOwner({ ...owner, fullName: e.target.value })} autoComplete="name" aria-invalid={!!errors.fullName} />{errors.fullName && <small className="field-error">{errors.fullName}</small>}</label>
            <label className="field">Property type <span>*</span><select value={owner.propertyType} onChange={e => setOwner({ ...owner, propertyType: e.target.value })}><option value="">Select type</option>{["Villa", "Cottage", "Beach house", "Apartment"].map(x => <option key={x}>{x}</option>)}</select>{errors.propertyType && <small className="field-error">{errors.propertyType}</small>}</label>
            <label className="field">Bedrooms <span>*</span><input type="number" min="1" max="100" value={owner.bedrooms} onChange={e => setOwner({ ...owner, bedrooms: Number(e.target.value) })} aria-invalid={!!errors.bedrooms} />{errors.bedrooms && <small className="field-error">{errors.bedrooms}</small>}</label>
            <label className="field field-wide">Property location <span>*</span><input value={owner.location} onChange={e => setOwner({ ...owner, location: e.target.value })} placeholder="Town, area or county" aria-invalid={!!errors.location} />{errors.location && <small className="field-error">{errors.location}</small>}</label>
            <label className="field field-wide">Additional notes <textarea rows={3} value={owner.notes} onChange={e => setOwner({ ...owner, notes: e.target.value })} placeholder="Tell us a little about the property." />{errors.notes && <small className="field-error">{errors.notes}</small>}</label>
          </div>
          <button className="button button-primary modal-submit" type="submit">Prepare owner enquiry <ArrowRight size={17} /></button>
        </form>}
        <p className="privacy-note">Your details are used to prepare this message in your browser. Nothing is sent automatically.</p>
      </> : <>
        <div className="success-icon"><Check size={25} /></div>
        <div className="eyebrow"><span className="eyebrow-line" />READY FOR YOUR REVIEW</div>
        <h2 id="modal-title">Your message is prepared.</h2>
        <p className="modal-intro">Review the message below, then continue to WhatsApp. You still need to press Send in WhatsApp.</p>
        {WHATSAPP_IS_PLACEHOLDER && <p className="config-notice"><strong>Setup notice:</strong> replace the placeholder WhatsApp number before launch. The generated link will not reach the business yet.</p>}
        <pre className="message-preview">{preparedMessage}</pre>
        <div className="success-actions">
          <button className="button button-primary" disabled={WHATSAPP_IS_PLACEHOLDER} onClick={() => window.open(preparedUrl, "_blank", "noopener,noreferrer")} title={WHATSAPP_IS_PLACEHOLDER ? "Configure the business WhatsApp number before using this link" : undefined}>Continue to WhatsApp <ExternalLink size={16} /></button>
          <button className="button button-outline" onClick={copyMessage}><Copy size={16} /> {copied ? "Copied" : "Copy message"}</button>
        </div>
        {WHATSAPP_IS_PLACEHOLDER && <p className="field-error">WhatsApp is not configured yet. Copy the message and contact the business through its confirmed channel.</p>}
        <p className="privacy-note">This confirms only that the message was prepared. It does not mean a WhatsApp message was sent or delivered.</p>
      </>}
    </div>
  </div>;
}

export default function HomePage() {
  const [modalType, setModalType] = useState<"guest" | "owner" | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [homeIndex, setHomeIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyTypeFilter, setPropertyTypeFilter] = useState("All types");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialPaused, setTestimonialPaused] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    const sections = ["how-it-works", "homes", "why-us", "testimonials"];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: "-25% 0px -65% 0px" });
    sections.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (testimonialPaused) return;
    const timer = window.setInterval(() => setTestimonialIndex(index => (index + 1) % 3), 6500);
    return () => window.clearInterval(timer);
  }, [testimonialPaused]);

  function openGuest(property: Property | null = null) { setSelectedProperty(property); setModalType("guest"); setMenuOpen(false); }
  function openOwner() { setSelectedProperty(null); setModalType("owner"); setMenuOpen(false); }
  function closeModal() { setModalType(null); setSelectedProperty(null); }

  const filteredProperties = properties.filter(property => {
    const query = searchTerm.trim().toLowerCase();
    const matchesQuery = !query || `${property.name} ${property.location} ${property.type}`.toLowerCase().includes(query);
    const matchesType = propertyTypeFilter === "All types" || property.type === propertyTypeFilter;
    return matchesQuery && matchesType;
  });

  const testimonials = [
    { quote: "“The team helped me clarify the kind of stay I wanted. The conversation felt personal from the start.”", name: "Guest name placeholder", role: "Sample guest testimonial" },
    { quote: "“A thoughtful introduction made it easier to explain what I was looking for before making a decision.”", name: "Guest name placeholder", role: "Sample guest testimonial" },
    { quote: "“I appreciated having a clear way to introduce my property and ask questions about the process.”", name: "Owner name placeholder", role: "Sample property-owner testimonial" }
  ];

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner"><Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {[["how-it-works","How it works"],["homes","Homes"],["why-us","Why us"],["testimonials","Testimonials"]].map(([id,label]) => <a key={id} className={activeSection === id ? "active" : ""} href={`#${id}`}>{label}</a>)}
        </nav>
        <button className="button button-header" onClick={() => openGuest()}><MessageCircle size={16} /> Let’s talk</button>
        <button className="mobile-menu-button icon-button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`} aria-hidden={!menuOpen}>
        {[["how-it-works","How it works"],["homes","Homes"],["why-us","Why us"],["testimonials","Testimonials"]].map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>{label}<ArrowUpRight size={17} /></a>)}
        <button className="button button-primary" onClick={() => openGuest()}>Start an enquiry <ArrowRight size={17} /></button>
      </div>
    </header>

    <main id="main-content">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-art" aria-hidden="true"><div className="hero-sun" /><div className="hero-horizon" /><div className="hero-palm hero-palm-one" /><div className="hero-palm hero-palm-two" /><div className="hero-pool" /><div className="hero-house"><div className="house-roof" /><div className="house-body"><span /><span /><span /></div></div></div>
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="hero-kicker"><span /> STAYS, THOUGHTFULLY MATCHED <span className="kicker-rule" /></div>
          <h1 id="hero-title">Find your perfect<br /><em>home away</em> from home.</h1>
          <p className="hero-subtitle">We help connect you with private homes and places to stay across Kenya, with a personal conversation at the heart of every enquiry.</p>
          <div className="hero-actions"><a className="button button-primary" href="#homes">Explore sample homes <ArrowDownRight size={17} /></a><button className="button button-light" onClick={openOwner}>List your property <ArrowUpRight size={16} /></button></div>
          <div className="hero-note"><span className="note-icon"><Compass size={17} /></span><span><strong>A more personal way to plan a stay</strong><small>Explore ideas, then enquire directly.</small></span></div>
        </div>
        <div className="hero-caption"><span>01 / 04</span><span>KENYA · PRIVATE STAYS</span><span className="caption-line" /></div>
        <a href="#how-it-works" className="scroll-cue" aria-label="Scroll to how it works"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16} /></a>
      </section>

      <section className="intro-strip" aria-label="A note about the service">
        <p>Good stays begin with <em>a good conversation.</em></p>
        <span>GUESTS &amp; PROPERTY OWNERS · KENYA</span>
      </section>

      <section className="section how-section" id="how-it-works">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> A SIMPLE START</div><h2>Less searching.<br /><em>More feeling at home.</em></h2></div><p>We make it easier to explain what matters to you and begin a conversation about a stay that fits.</p></div>
        <div className="steps">
          <article className="step"><span className="step-number">01</span><div className="step-icon"><MessageCircle size={22} strokeWidth={1.5} /></div><h3>Tell us your plans</h3><p>Share where you want to go, when you’re travelling and the kind of space you have in mind.</p><span className="step-bottom">THE FIRST CONVERSATION <ArrowRight size={15} /></span></article>
          <article className="step step-featured"><span className="step-number">02</span><div className="step-icon"><Compass size={22} strokeWidth={1.5} /></div><h3>Explore a possible match</h3><p>We can discuss your preferences and help you explore suitable options. Details and availability need to be confirmed.</p><span className="step-bottom">A MORE PERSONAL APPROACH <ArrowRight size={15} /></span></article>
          <article className="step"><span className="step-number">03</span><div className="step-icon"><KeyRound size={22} strokeWidth={1.5} /></div><h3>Speak before you decide</h3><p>Use the enquiry to ask questions and understand next steps before making any arrangements.</p><span className="step-bottom">YOUR CHOICE, YOUR PACE <ArrowRight size={15} /></span></article>
        </div>
        <div className="section-cta"><button className="text-link" onClick={() => openGuest()}>Start finding your stay <ArrowRight size={17} /></button><span>NO ONLINE BOOKING OR PAYMENT ON THIS SITE</span></div>
      </section>

      <section className="homes-section" id="homes">
        <div className="homes-top"><div><div className="eyebrow"><span className="eyebrow-line" /> A FEW PLACES TO IMAGINE</div><h2>Somewhere that<br /><em>feels like yours.</em></h2></div><div className="homes-aside"><p>Explore a few illustrative stay concepts. These are sample listings, not confirmed properties; names, images, prices and availability must be verified before any booking.</p><div className="carousel-controls"><button className="icon-button" onClick={() => setHomeIndex(index => (index + 3) % 4)} aria-label="Previous sample homes"><ChevronLeft /></button><button className="icon-button" onClick={() => setHomeIndex(index => (index + 1) % 4)} aria-label="Next sample homes"><ChevronRight /></button></div></div></div>
        <div className="property-filters" role="search" aria-label="Filter sample accommodation">
          <label className="property-search"><Search size={17} aria-hidden="true" /><span className="sr-only">Search sample homes</span><input value={searchTerm} onChange={event => setSearchTerm(event.target.value)} placeholder="Search by name or location" /></label>
          <label className="property-type-filter"><span className="sr-only">Filter by property type</span><select value={propertyTypeFilter} onChange={event => setPropertyTypeFilter(event.target.value)}><option>All types</option>{Array.from(new Set(properties.map(property => property.type))).map(type => <option key={type}>{type}</option>)}</select></label>
          <span className="results-count" aria-live="polite">{filteredProperties.length} sample {filteredProperties.length === 1 ? "stay" : "stays"}</span>
        </div>
        {filteredProperties.length ? <div className="property-grid" style={{ "--home-offset": homeIndex } as React.CSSProperties}>
          {filteredProperties.map((property,index) => <article className={`property-card ${properties.findIndex(item => item.id === property.id) === homeIndex ? "property-card-current" : ""}`} key={property.id}>
            <div className="property-image-button">
              <img src={property.image} alt={property.imageAlt} loading={index === 0 ? "eager" : "lazy"} />
              <span className="sample-badge">Illustrative sample</span><button className="image-arrow" onClick={() => openGuest(property)} aria-label={`Enquire about ${property.name}`}><ArrowUpRight size={19} /></button>
            </div>
            <div className="property-details"><div className="property-location"><MapPin size={13} /> {property.location}</div><h3>{property.name}</h3><div className="property-meta"><span><BedDouble size={15} /> {property.bedrooms} bedrooms</span><span>{property.type}</span></div><div className="property-bottom"><span className="property-price">{property.price}</span><button className="inquire-link" onClick={() => openGuest(property)}>Enquire <ArrowRight size={15} /></button></div></div>
          </article>)}
        </div> : <div className="property-empty"><h3>No sample stays match that search.</h3><p>Try another location or reset the filters to explore all sample concepts.</p><button className="button button-outline" onClick={() => { setSearchTerm(""); setPropertyTypeFilter("All types"); }}>Clear filters</button></div>}
        <div className="sample-disclaimer"><span><Sparkles size={15} /> Sample information only</span><p>These concepts and price ranges are illustrative placeholders, not live inventory or confirmed rates. Please enquire to discuss actual options.</p></div>
      </section>

      <section className="why-section" id="why-us">
        <div className="why-image"><div className="why-image-sky" /><div className="why-arch" /><div className="why-plant" /><div className="why-image-caption">A STAY THAT STARTS WITH YOU</div></div>
        <div className="why-content"><div className="eyebrow"><span className="eyebrow-line" /> THE HUMAN SIDE OF TRAVEL</div><h2>Space to slow down.<br /><em>People to help you begin.</em></h2><p className="why-lead">Finding a place to stay should feel clear, considered and personal — from the first question to the details you need to confirm.</p>
          <div className="benefit-list">
            <article><span className="benefit-icon"><Compass size={19} /></span><div><h3>Personalised conversation</h3><p>Tell us what matters, from location and space to the feel of your trip.</p></div></article>
            <article><span className="benefit-icon"><Users size={19} /></span><div><h3>A clear way to make an enquiry</h3><p>Share your requirements and ask questions before you make arrangements.</p></div></article>
            <article><span className="benefit-icon"><Waves size={19} /></span><div><h3>Ideas for different kinds of stays</h3><p>From coastal escapes to countryside retreats, explore the possibilities.</p></div></article>
            <article><span className="benefit-icon"><MessageCircle size={19} /></span><div><h3>Continue the conversation on WhatsApp</h3><p>Review a prepared message and choose whether to send it in WhatsApp.</p></div></article>
          </div>
          <button className="button button-primary" onClick={() => openGuest()}>Tell us what you need <ArrowRight size={17} /></button>
        </div>
      </section>

      <section className="testimonial-section" id="testimonials" onMouseEnter={() => setTestimonialPaused(true)} onMouseLeave={() => setTestimonialPaused(false)} onFocusCapture={() => setTestimonialPaused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setTestimonialPaused(false); }}>
        <div className="testimonial-heading"><div className="eyebrow"><span className="eyebrow-line" /> WORDS TO REPLACE BEFORE LAUNCH</div><h2>Trust is built<br /><em>through the details.</em></h2><p>The examples below are placeholders for layout only. Replace them with permissioned, genuine feedback before publishing.</p></div>
        <div className="testimonial-cards">
          {testimonials.map((item,index) => <article className={`testimonial-card ${testimonialIndex === index ? "testimonial-card-active" : ""}`} key={item.name + index}><div className="quote-mark">“</div><p className="testimonial-quote">{item.quote.replace(/^“|”$/g, "")}</p><div className="testimonial-person"><div className="avatar">{index === 2 ? "PO" : "G"}</div><div><strong>{item.name}</strong><small>{item.role}</small></div></div><span className="testimonial-placeholder">SAMPLE COPY · NOT A REAL REVIEW</span></article>)}
        </div>
        <div className="testimonial-controls"><button className="icon-button" onClick={() => setTestimonialIndex(index => (index + 2) % 3)} aria-label="Previous sample testimonial"><ChevronLeft /></button><span>0{testimonialIndex + 1} <i /> 03</span><button className="icon-button" onClick={() => setTestimonialIndex(index => (index + 1) % 3)} aria-label="Next sample testimonial"><ChevronRight /></button></div>
      </section>

      <section className="closing-section"><div className="closing-art" aria-hidden="true"><div className="closing-sun" /><div className="closing-line" /><div className="closing-building" /></div><div className="closing-content"><div className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT CHAPTER</div><h2>Ready to find<br />your next <em>escape?</em></h2><p>Tell us what you’re looking for, or introduce a property you’d like to discuss.</p><div className="closing-actions"><button className="button button-primary" onClick={() => openGuest()}>Start your enquiry <ArrowRight size={17} /></button><button className="button button-outline" onClick={openOwner}>Partner as an owner <ArrowUpRight size={16} /></button></div></div><div className="closing-side-note">MAKE ROOM FOR A DIFFERENT PACE.</div></section>
    </main>

    <footer className="site-footer"><div className="footer-main"><div className="footer-brand-col"><Brand footer /><p>A more personal way to begin finding your place in Kenya.</p><span className="footer-placeholder">Contact details to be confirmed before launch.</span></div><div className="footer-links"><span className="footer-label">EXPLORE</span><a href="#how-it-works">How it works</a><a href="#homes">Sample homes</a><a href="#why-us">Why us</a><a href="#testimonials">Testimonials</a></div><div className="footer-links"><span className="footer-label">START A CONVERSATION</span><button onClick={() => openGuest()}>Looking for a stay <ArrowUpRight size={15} /></button><button onClick={openOwner}>Own a property <ArrowUpRight size={15} /></button><span className="footer-placeholder">Email and phone not yet supplied.</span></div><div className="footer-note"><span className="footer-label">A NOTE ON ENQUIRIES</span><p>This website prepares enquiries; it does not confirm property availability, reservations, payments or owner verification.</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} The Accommodation Guru</span><span>MADE FOR MORE PERSONAL STAYS <span className="footer-dot">●</span> KENYA</span></div></footer>

    <button className="floating-whatsapp" onClick={() => openGuest()} aria-label="Start a general accommodation enquiry"><MessageCircle size={21} /><span>Make an enquiry</span></button>
    {modalType && <Modal key={`${modalType}-${selectedProperty?.id ?? "general"}`} type={modalType} property={selectedProperty} onClose={closeModal} />}
  </>;
}
