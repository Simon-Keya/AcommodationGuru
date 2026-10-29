"use client";

import { useState, type FormEvent } from "react";
import { getWhatsAppUrl } from "@/lib/site-config";

type PropertyEnquiryFormProps = { propertyName: string; location: string; maxGuests: number };

export function PropertyEnquiryForm({ propertyName, location, maxGuests }: PropertyEnquiryFormProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(String(Math.min(maxGuests, 2)));
  const [message, setMessage] = useState(`Hello, I am interested in ${propertyName}. Please share more information about availability and booking options.`);

  const sendEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const details = `Hello, I would like to enquire about ${propertyName} in ${location}. Please share current availability, final rates and booking arrangements.\nCheck-in: ${checkIn || "Not selected"}\nCheck-out: ${checkOut || "Not selected"}\nGuests: ${guests}\nMessage: ${message || "Please share more information."}`;
    window.open(getWhatsAppUrl(details), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <form onSubmit={sendEnquiry}>
        <label>Check-in<input name="checkin" type="date" value={checkIn} onChange={(event) => setCheckIn(event.target.value)} /></label>
        <label>Check-out<input name="checkout" type="date" min={checkIn || undefined} value={checkOut} onChange={(event) => setCheckOut(event.target.value)} /></label>
        <label>Guests<select name="guests" value={guests} onChange={(event) => setGuests(event.target.value)}>{Array.from({ length: Math.min(maxGuests, 10) }, (_, index) => index + 1).map((count) => <option value={count} key={count}>{count} {count === 1 ? "guest" : "guests"}</option>)}</select></label>
        <label>Message<textarea name="message" value={message} onChange={(event) => setMessage(event.target.value)} /></label>
        <button className="gold-button" type="submit">Send an enquiry <span aria-hidden="true">→</span></button>
      </form>
      <a className="whatsapp-button" href={getWhatsAppUrl(`Hello, I would like to enquire about ${propertyName} in ${location}. Please share current availability and booking options.`)} target="_blank" rel="noreferrer">Chat with us on WhatsApp</a>
    </>
  );
}
