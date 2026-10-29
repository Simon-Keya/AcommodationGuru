"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/site-config";
import type { SampleProperty } from "@/lib/properties";

type Props = {
  open: boolean;
  onClose: () => void;
  preselected?: SampleProperty | null;
};

export function GuestInquiryDialog({ open, onClose, preselected }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    preferredLocation: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    bedrooms: "2",
    budgetRange: "",
    notes: "",
  });

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open) {
      el.showModal();
      setSubmitted(false);
      if (preselected) {
        setForm((f) => ({
          ...f,
          preferredLocation: preselected.location,
          bedrooms: String(preselected.bedrooms),
        }));
      }
    } else {
      el.close();
    }
  }, [open, preselected]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.checkIn || !form.checkOut) return;
    if (new Date(form.checkOut) <= new Date(form.checkIn)) {
      alert("Check-out must be after check-in");
      return;
    }

    const lines = [
      "Hello Accommodation Guru,",
      "",
      "I would like to enquire about a stay.",
      "",
      `Name: ${form.fullName}`,
      `Preferred location: ${form.preferredLocation || "Flexible"}`,
      `Check-in: ${form.checkIn}`,
      `Check-out: ${form.checkOut}`,
      `Guests: ${form.guests}`,
      `Bedrooms: ${form.bedrooms}`,
      form.budgetRange ? `Budget: ${form.budgetRange}` : null,
      preselected ? `Interested in: ${preselected.name}` : null,
      form.notes ? `Notes: ${form.notes}` : null,
      "",
      "Looking forward to hearing from you.",
    ]
      .filter(Boolean)
      .join("\n");

    const url = getWhatsAppUrl(lines);
    setWhatsappUrl(url);
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-[80] w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-ivory p-0 shadow-xl backdrop:bg-charcoal/50 open:flex open:flex-col"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div className="sticky top-0 bg-ivory border-b border-border px-6 py-4 flex items-center justify-between">
        <h2 className="font-serif text-xl text-charcoal">
          {submitted ? "Almost there" : "Tell us about your stay"}
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="p-2 text-charcoal/60 hover:text-charcoal"
          aria-label="Close"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 5l10 10M15 5L5 15" />
          </svg>
        </button>
      </div>

      {submitted ? (
        <div className="p-6 space-y-4">
          <p className="text-charcoal/90 leading-relaxed">
            Your enquiry has been prepared. WhatsApp should open in a new tab so you can send the message.
          </p>
          <p className="text-sm text-muted-foreground">
            If it did not open, use the button below.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-ocean text-white text-sm font-medium w-full"
          >
            Continue to WhatsApp
          </a>
          <Button variant="ghost" className="w-full" onClick={onClose}>
            Close
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {preselected && (
            <p className="text-sm text-ocean bg-mist rounded-md px-3 py-2">
              Enquiring about: <strong>{preselected.name}</strong>
            </p>
          )}

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              Full name *
            </label>
            <input
              required
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className="w-full h-11 px-3 rounded-md border border-border bg-white text-charcoal focus:ring-2 focus:ring-ocean/30 focus:border-ocean"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              Preferred location
            </label>
            <input
              value={form.preferredLocation}
              onChange={(e) =>
                setForm({ ...form, preferredLocation: e.target.value })
              }
              placeholder="e.g. Diani, Karen, Naivasha"
              className="w-full h-11 px-3 rounded-md border border-border bg-white text-charcoal focus:ring-2 focus:ring-ocean/30 focus:border-ocean"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Check-in *
              </label>
              <input
                type="date"
                required
                value={form.checkIn}
                onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                className="w-full h-11 px-3 rounded-md border border-border bg-white text-charcoal focus:ring-2 focus:ring-ocean/30 focus:border-ocean"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Check-out *
              </label>
              <input
                type="date"
                required
                value={form.checkOut}
                onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                className="w-full h-11 px-3 rounded-md border border-border bg-white text-charcoal focus:ring-2 focus:ring-ocean/30 focus:border-ocean"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Guests
              </label>
              <input
                type="number"
                min={1}
                max={20}
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className="w-full h-11 px-3 rounded-md border border-border bg-white text-charcoal focus:ring-2 focus:ring-ocean/30 focus:border-ocean"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Bedrooms
              </label>
              <input
                type="number"
                min={1}
                max={12}
                value={form.bedrooms}
                onChange={(e) => setForm({ ...form, bedrooms: e.target.value })}
                className="w-full h-11 px-3 rounded-md border border-border bg-white text-charcoal focus:ring-2 focus:ring-ocean/30 focus:border-ocean"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              Budget range (optional)
            </label>
            <input
              value={form.budgetRange}
              onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
              placeholder="e.g. KES 20,000 – 40,000 / night"
              className="w-full h-11 px-3 rounded-md border border-border bg-white text-charcoal focus:ring-2 focus:ring-ocean/30 focus:border-ocean"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              Additional notes
            </label>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full px-3 py-2 rounded-md border border-border bg-white text-charcoal focus:ring-2 focus:ring-ocean/30 focus:border-ocean resize-none"
            />
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full">
            Continue to WhatsApp
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            You will complete sending the message in WhatsApp.
          </p>
        </form>
      )}
    </dialog>
  );
}
