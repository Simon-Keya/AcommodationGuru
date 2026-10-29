"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { GuestInquiryDialog } from "@/components/inquiry/guest-inquiry-dialog";
import { OwnerInquiryDialog } from "@/components/inquiry/owner-inquiry-dialog";
import { sampleProperties, type SampleProperty } from "@/lib/properties";
import { siteConfig, getWhatsAppUrl } from "@/lib/site-config";

function Pin(){return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>}
function Bed(){return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 20V5m0 10h18v5M3 10h18v5M7 10V7h5v3m2 0V7h5v3"/></svg>}
export default function HomePage(){
 const [guestOpen,setGuestOpen]=useState(false);const [ownerOpen,setOwnerOpen]=useState(false);const [selected,setSelected]=useState<SampleProperty|null>(null);const [location,setLocation]=useState("");const [kind,setKind]=useState("All Types");const [checkIn,setCheckIn]=useState("");const [checkOut,setCheckOut]=useState("");const [favorites,setFavorites]=useState<string[]>([]);
 const filtered=useMemo(()=>sampleProperties.filter(p=>(!location||`${p.name} ${p.location}`.toLowerCase().includes(location.toLowerCase()))&&(kind==="All Types"||p.view.toLowerCase().includes(kind.toLowerCase())||p.name.toLowerCase().includes(kind.toLowerCase()))),[location,kind]);
 const inquire=(p?:SampleProperty)=>{setSelected(p??null);setGuestOpen(true)};
 const search=()=>{document.getElementById("homes")?.scrollIntoView({behavior:"smooth"})};
 return <><SiteHeader/><main id="main-content">
  <section className="home-hero"><div className="hero-photo"/><div className="hero-content"><div className="eyebrow">Discover your perfect stay</div><h1>Exceptional<br/>Accommodation<br/>Experiences</h1><p>Find the perfect place to stay, whether it’s a relaxing getaway, a business trip or a long-term stay.</p></div></section>
  <form className="search-panel" onSubmit={e=>{e.preventDefault();search()}}>
   <div className="search-field"><label htmlFor="location-search">⌕ &nbsp;Search by name or location</label><input id="location-search" value={location} onChange={e=>setLocation(e.target.value)} placeholder="e.g. Nairobi, Beach, Villa"/></div>
   <div className="search-field"><label htmlFor="property-type">♧ &nbsp;Property Type</label><select id="property-type" value={kind} onChange={e=>setKind(e.target.value)}><option>All Types</option><option>Ocean</option><option>Hillside</option><option>Lakeside</option><option>Sea</option></select></div>
   <div className="search-field"><label htmlFor="check-in">▦ &nbsp;Check In</label><input id="check-in" type="date" value={checkIn} onChange={e=>setCheckIn(e.target.value)} aria-label="Check-in date"/></div>
   <div className="search-field"><label htmlFor="check-out">▦ &nbsp;Check Out</label><input id="check-out" type="date" min={checkIn||undefined} value={checkOut} onChange={e=>setCheckOut(e.target.value)} aria-label="Check-out date"/></div>
   <button className="search-submit" type="submit">⌕ &nbsp;Search</button>
  </form>
  <section id="homes" className="featured-wrap"><div className="container-page"><div className="section-heading-row"><div><h2 className="section-heading">Featured Properties</h2><p className="section-subtitle">Handpicked accommodations for an unforgettable stay</p></div><Link className="text-link" href="/properties">View All&nbsp; →</Link></div>
   <div className="property-grid">{filtered.slice(0,3).map((p,i)=><article className="property-card" key={p.id}><div className="property-image"><Image src={p.image} alt={p.name} fill sizes="(max-width:760px) 50vw, 33vw" priority={i===0}/><span className="property-badge">{i===0?"Villa":i===1?"Apartment":"Lodge"}</span><button className="favorite-button" aria-label={favorites.includes(p.id)?"Remove from favorites":"Add to favorites"} onClick={()=>setFavorites(f=>f.includes(p.id)?f.filter(x=>x!==p.id):[...f,p.id])}>{favorites.includes(p.id)?"♥":"♡"}</button></div><div className="property-body"><h3>{p.name}</h3><p className="property-location"><Pin/>{p.location}</p><p className="property-price">{i===0?"$150":i===1?"$80":"$120"}<small> / night</small></p><div className="property-meta"><span><b>♙</b> {i===0?4:i===1?2:4} Guests</span><span><Bed/> {p.bedrooms} Bedrooms</span><span><b>♧</b> {i===0?3:2} Bathrooms</span></div><button className="card-inquire" onClick={()=>inquire(p)}>Enquire about stay</button></div></article>)}</div>
   {filtered.length===0&&<div className="no-results">No sample properties match that search. Try another location or select All Types.</div>}
  </div></section>
  <section className="below-section"><div className="container-page below-grid"><div className="below-photo"><Image src="/images/featured-section.jpg" alt="A beautiful coastal holiday destination" width={900} height={620}/></div><div className="below-copy"><div className="eyebrow" style={{color:"#b98522"}}>Stay somewhere special</div><h2>Find a place that feels like yours.</h2><p>From coastal escapes to peaceful countryside retreats, Accommodation Guru helps you discover thoughtfully selected places to stay across Kenya. Tell us what you need and our team can help you find a stay that fits.</p><a className="gold-button" href={getWhatsAppUrl("Hello, please help me find the right accommodation.")}>Let us help you find a stay</a></div></div></section>
  <section className="section-padding"><div className="container-page"><div className="section-heading-row"><div><h2 className="section-heading">A better way to find your stay</h2><p className="section-subtitle">Personal support from first enquiry to check-in.</p></div></div><div className="value-grid"><article><span>01</span><h3>Tell us what you need</h3><p>Share your destination, dates, group size and the kind of stay you have in mind.</p></article><article><span>02</span><h3>Explore handpicked homes</h3><p>Review suitable options and ask questions before choosing your accommodation.</p></article><article><span>03</span><h3>Enquire with confidence</h3><p>Connect with our team to discuss details and confirm arrangements directly.</p></article></div></div></section>
  <section className="final-strip"><div className="container-page final-strip-inner"><div><p className="eyebrow">Your next getaway starts here</p><h2>Ready to find your perfect stay?</h2></div><button className="gold-button" onClick={()=>inquire()}>Send an Enquiry</button></div></section>
 </main><SiteFooter/><a className="floating-whatsapp" href={getWhatsAppUrl("Hello, I'd like to enquire about a stay with The Accommodation Guru.")} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">✆</a><GuestInquiryDialog open={guestOpen} onClose={()=>setGuestOpen(false)} preselected={selected}/><OwnerInquiryDialog open={ownerOpen} onClose={()=>setOwnerOpen(false)}/></>
}
