"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { sampleProperties, type PropertyType } from "@/lib/properties";

const propertyTypes: Array<"All Types" | PropertyType> = ["All Types", "Villa", "Apartment", "Lodge", "Guest House"];
const amenityOptions = ["Wi-Fi", "Parking", "Pool", "Air Conditioning", "Kitchen"];

export default function PropertiesPage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<(typeof propertyTypes)[number]>("All Types");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);

  const homes = useMemo(() => sampleProperties.filter((property) => {
    const matchesQuery = `${property.name} ${property.location}`.toLowerCase().includes(query.toLowerCase());
    const matchesType = type === "All Types" || property.type === type;
    const matchesPrice = property.price <= maxPrice;
    const matchesAmenities = amenities.every((amenity) => property.amenities.includes(amenity));
    return matchesQuery && matchesType && matchesPrice && matchesAmenities;
  }), [query, type, maxPrice, amenities]);

  const clearFilters = () => {
    setQuery("");
    setType("All Types");
    setMaxPrice(100000);
    setAmenities([]);
    setCheckIn("");
    setCheckOut("");
  };

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="page-banner listing-banner">
          <span className="banner-kicker">A considered collection of places to stay</span>
          <h1>Find your ideal stay.</h1>
          <p>From slow coastal mornings to quiet countryside retreats, discover a place that fits your way of travelling.</p>
        </section>

        <form className="search-panel listing-search" onSubmit={(event) => { event.preventDefault(); document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>
          <div className="search-field">
            <label htmlFor="property-query">Destination or property</label>
            <input id="property-query" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try Diani, Nairobi, or villa" />
          </div>
          <div className="search-field">
            <label htmlFor="property-kind">Property type</label>
            <select id="property-kind" value={type} onChange={(event) => setType(event.target.value as (typeof propertyTypes)[number])}>
              {propertyTypes.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
          <div className="search-field">
            <label htmlFor="listing-checkin">Check-in</label>
            <input id="listing-checkin" type="date" value={checkIn} onChange={(event) => setCheckIn(event.target.value)} />
          </div>
          <div className="search-field">
            <label htmlFor="listing-checkout">Check-out</label>
            <input id="listing-checkout" type="date" min={checkIn || undefined} value={checkOut} onChange={(event) => setCheckOut(event.target.value)} />
          </div>
          <button className="search-submit" type="submit">Explore stays <span aria-hidden="true">→</span></button>
        </form>

        <div className="content-shell listing-layout">
          <aside className="filters" aria-label="Filter properties">
            <div className="filter-title-row"><h2>Refine your search</h2><button className="clear-filter-button" onClick={clearFilters} type="button">Clear all</button></div>
            <div className="filter-group">
              <h3>Property type</h3>
              {propertyTypes.map((item) => (
                <label className="filter-option" key={item}>
                  <input type="radio" name="propertyType" checked={type === item} onChange={() => setType(item)} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <div className="filter-group">
              <div className="range-label-row"><h3>Maximum nightly rate</h3><strong>KSh {maxPrice.toLocaleString()}</strong></div>
              <input aria-label="Maximum nightly rate" className="price-range" type="range" min="25000" max="100000" step="5000" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} />
              <div className="range-ends"><span>KSh 25,000</span><span>KSh 100,000+</span></div>
            </div>
            <div className="filter-group">
              <h3>Essential amenities</h3>
              {amenityOptions.map((amenity) => (
                <label className="filter-option" key={amenity}>
                  <input type="checkbox" checked={amenities.includes(amenity)} onChange={(event) => setAmenities((current) => event.target.checked ? [...current, amenity] : current.filter((item) => item !== amenity))} />
                  <span>{amenity}</span>
                </label>
              ))}
            </div>
          </aside>

          <section id="results" className="listing-results">
            <div className="results-head"><div><span className="results-kicker">THE COLLECTION</span><h2>{homes.length} {homes.length === 1 ? "stay" : "stays"} to explore</h2></div><span className="results-note">Thoughtfully selected across Kenya</span></div>
            {homes.length ? <div className="property-grid listing-property-grid">
              {homes.map((property) => (
                <article className="property-card" key={property.id}>
                  <Link className="listing-image-link" href={`/properties/${property.id}`} aria-label={`View ${property.name}`}>
                    <div className="property-image"><Image src={property.image} alt={property.name} fill sizes="(max-width:760px) 100vw, (max-width:1100px) 50vw, 34vw" /><span className="property-badge">{property.type}</span></div>
                  </Link>
                  <button type="button" className="favorite-button" aria-label={favorites.includes(property.id) ? "Remove from saved stays" : "Save this stay"} onClick={() => setFavorites((current) => current.includes(property.id) ? current.filter((id) => id !== property.id) : [...current, property.id])}>{favorites.includes(property.id) ? "♥" : "♡"}</button>
                  <div className="property-body">
                    <p className="property-location">{property.location}</p>
                    <h3><Link href={`/properties/${property.id}`}>{property.name}</Link></h3>
                    <p className="listing-description">{property.description}</p>
                    <div className="listing-card-bottom"><div className="property-price">KSh {property.price.toLocaleString()}<small> / night*</small></div><span>{property.bedrooms} beds · {property.guests} guests</span></div>
                  </div>
                </article>
              ))}
            </div> : <div className="no-results"><h3>No stays match those filters.</h3><p>Try a different destination or widen your price range.</p><button className="gold-button" type="button" onClick={clearFilters}>Reset filters</button></div>}
            <p className="pricing-note">*Indicative sample rates for demonstration. Please enquire to confirm actual pricing and availability.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
