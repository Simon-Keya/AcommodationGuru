import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { sampleProperties } from "@/lib/properties";
import { PropertyEnquiryForm } from "@/components/property/property-enquiry-form";

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = sampleProperties.find((item) => item.id === id);
  if (!property) notFound();

  const gallery = [property.image, "/images/karen.jpg", "/images/naivasha.jpg"]
    .filter((image, index, all) => all.indexOf(image) === index);

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="content-shell property-detail-shell">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/properties">Properties</Link><span aria-hidden="true">/</span><span aria-current="page">{property.name}</span>
        </nav>

        <div className="detail-gallery">
          <div className="detail-main-image"><Image src={property.image} alt={`${property.name} — main property view`} fill priority sizes="(max-width:760px) 100vw, 70vw" /></div>
          <div className="detail-side-images">
            {gallery.slice(1, 3).map((image, index) => <div key={image}><Image src={image} alt={`${property.name} — additional view ${index + 1}`} fill sizes="(max-width:760px) 40vw, 28vw" /></div>)}
          </div>
        </div>

        <div className="detail-layout">
          <section className="property-detail-main">
            <div className="detail-title-row">
              <div><span className="detail-type-kicker">{property.type} · {property.view}</span><h1>{property.name}</h1><p className="detail-location">{property.location}, Kenya</p></div>
              <div className="detail-price">KSh {property.price.toLocaleString()}<small> / night*</small></div>
            </div>
            <div className="detail-facts">
              <span><strong>{property.guests}</strong><small>Guests</small></span>
              <span><strong>{property.bedrooms}</strong><small>Bedrooms</small></span>
              <span><strong>{property.bathrooms}</strong><small>Bathrooms</small></span>
              <span><strong>{property.amenities.includes("Pool") ? "Yes" : "—"}</strong><small>Pool</small></span>
              <span><strong>{property.amenities.includes("Wi-Fi") ? "Yes" : "—"}</strong><small>Wi-Fi</small></span>
            </div>

            <section className="detail-copy-section"><h2>About this stay</h2><p className="detail-description">{property.description} The details and arrangements can vary by property, so speak with our team to confirm what is included and whether the stay suits your trip.</p></section>
            <section className="detail-copy-section"><h2>Thoughtful essentials</h2><p className="detail-description">Explore the features currently listed for this stay. Please confirm any essential requirements directly before making arrangements.</p><div className="amenities-grid">{property.amenities.map((amenity) => <span key={amenity}><i aria-hidden="true">✓</i>{amenity}</span>)}</div></section>
            <div className="detail-lower-images"><Image src="/images/diani.jpg" alt="Coastal accommodation inspiration" width={500} height={300}/><Image src="/images/karen.jpg" alt="A peaceful countryside stay in Kenya" width={500} height={300}/></div>
            <section className="detail-copy-section"><h2>Location</h2><p className="detail-description">{property.location}, Kenya. Contact our team for directions, nearby recommendations and practical details for your arrival.</p></section>
            <section className="detail-copy-section"><h2>Availability and rates</h2><p className="detail-description">Rates shown are indicative sample data. Availability is not checked live on this website; send an enquiry to confirm your dates, final price and booking arrangements.</p></section>
            <p className="pricing-note">*Illustrative listing information. Confirm current pricing, inclusions and availability with the accommodation provider.</p>
          </section>

          <aside className="enquiry-panel"><span className="enquiry-kicker">PERSONAL ENQUIRY</span><h3>Make this stay yours.</h3><p className="enquiry-intro">Tell us a little about your plans and our team can help with the next steps.</p>
            <PropertyEnquiryForm propertyName={property.name} location={property.location} maxGuests={property.guests} />
            <small>Enquiries are not reservations. We will help you confirm the details.</small>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
