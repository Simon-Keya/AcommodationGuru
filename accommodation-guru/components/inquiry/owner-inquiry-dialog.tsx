"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/site-config";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function OwnerInquiryDialog({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    propertyType: "villa",
    location: "",
    bedrooms: "3",
    notes: "",
  });

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open) {
      el.showModal();
      setSubmitted(false);
    } else {
      el.close();
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.location) return;

    const lines = [
      "Hello Accommodation Guru,",
      "",
      "I am interested in listing my property.",
      "",
      `Name: ${form.fullName}`,
      `Property type: ${form.propertyType}`,
      `Location: ${form.location}`,
      `Bedrooms: ${form.bedrooms}`,
      form.notes ? `Notes: ${form.notes}` : null,
      "",
      "Please let me know the next steps.",
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
      className="fixed inset-0 z-[80] w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-ivory p-0 shadow-xl backdrop:bg-charcoal/50"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div className="sticky top-0 bg-ivory border-b border-border px-6 py-4 flex items-center justify-between">
        <h2 className="font-serif text-xl text-charcoal">
          {submitted ? "Almost there" : "Partner with us"}
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
            Your partnership enquiry has been prepared. WhatsApp should open so you can send the message.
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
              Property type *
            </label>
            <select
              value={form.propertyType}
              onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
              className="w-full h-11 px-3 rounded-md border border-border bg-white text-charcoal focus:ring-2 focus:ring-ocean/30 focus:border-ocean"
            >
              <option value="villa">Villa</option>
              <option value="cottage">Cottage</option>
              <option value="beach-house">Beach house</option>
              <option value="apartment">Apartment</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              Property location *
            </label>
            <input
              required
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              placeholder="e.g. Diani, Karen"
              className="w-full h-11 px-3 rounded-md border border-border bg-white text-charcoal focus:ring-2 focus:ring-ocean/30 focus:border-ocean"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              Number of bedrooms
            </label>
            <input
              type="number"
              min={1}
              max={20}
              value={form.bedrooms}
              onChange={(e) => setForm({ ...form, bedrooms: e.target.value })}
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
        </form>
      )}
    </dialog>
  );
}
