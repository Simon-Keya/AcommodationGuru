"use client";
import Link from "next/link";
import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/site-config";
const nav = [{label:"Home",href:"/"},{label:"Properties",href:"/properties"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"}];
export function SiteHeader(){
 const [open,setOpen]=useState(false);
 return <>
  <header className="site-header"><div className="header-inner">
   <Link href="/" className="brand"><span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><path d="M5 18.5 20 5l15 13.5M9.5 17v17h21V17M16 34V23h8v11M4 18.5h7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M27 9V5h5v8" stroke="currentColor" strokeWidth="2.2"/></svg></span><span className="brand-name">Accommodation<br/>Guru</span></Link>
   <nav className="desktop-nav">{nav.map(n=><Link key={n.href} href={n.href}>{n.label}</Link>)}</nav>
   <div className="header-actions"><Link aria-label="Search properties" className="search-icon" href="/properties"><svg viewBox="0 0 24 24" fill="none"><circle cx="10.8" cy="10.8" r="6.2" stroke="currentColor" strokeWidth="1.7"/><path d="m15.4 15.4 4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg></Link><a className="gold-button header-cta" href={getWhatsAppUrl("Hello, I would like to enquire about a stay.")} target="_blank" rel="noreferrer">Enquire Now</a><button className="menu-toggle" onClick={()=>setOpen(true)} aria-label="Open navigation"><svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg></button></div>
  </div></header>
  {open&&<div className="mobile-drawer-wrap"><button className="drawer-scrim" aria-label="Close menu" onClick={()=>setOpen(false)}/><aside className="mobile-drawer"><div className="drawer-head"><span className="brand-name">Accommodation<br/>Guru</span><button onClick={()=>setOpen(false)} aria-label="Close navigation">×</button></div><nav>{nav.map(n=><Link key={n.href} href={n.href} onClick={()=>setOpen(false)}>{n.label}<span>›</span></Link>)}</nav><a className="gold-button drawer-cta" href={getWhatsAppUrl("Hello, I would like to enquire about a stay.")}>Enquire Now</a><div className="drawer-photo"><span>DISCOVER YOUR PERFECT STAY</span><h2>Exceptional<br/>Accommodation<br/>Experiences</h2></div></aside></div>}
 </>
}
