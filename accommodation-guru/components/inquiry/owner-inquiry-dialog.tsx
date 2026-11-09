"use client";

import { useEffect, useRef, useState } from "react";
import { getWhatsAppUrl } from "@/lib/site-config";

const propertyTypes = [
  "Private Villa",
  "Holiday Home",
  "Cottage",
  "Beach House",
  "Short-Stay Apartment",
];

type OwnerForm = {
  name: string;
  type: string;
  location: string;
  beds: string;
  notes: string;
};

export function OwnerInquiryDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [ready, setReady] = useState(false);
  const [url, setUrl] = useState("");
  const [form, setForm] = useState<OwnerForm>({
    name: "",
    type: "Private Villa",
    location: "",
    beds: "",
    notes: "",
  });

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
      setReady(false);
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  const updateForm = (field: keyof OwnerForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Hello The Accommodation Guru,",
      "",
      "I am interested in partnering with you and listing my property.",
      `Owner name: ${form.name}`,
      `Property type: ${form.type}`,
      `Property location: ${form.location}`,
      `Number of beds: ${form.beds}`,
      `Additional property information: ${form.notes}`,
      "",
      "Please let me know the next steps.",
    ].join("\n");

    const nextUrl = getWhatsAppUrl(message);
    setUrl(nextUrl);
    setReady(true);
    window.open(nextUrl, "_blank", "noopener,noreferrer");
  };

  if (!open) return null;

  return (
    <dialog
      ref={ref}
      className="guru-dialog"
      aria-labelledby="owner-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
    >
      <div className="guru-dialog-head">
        <div>
          <p className="guru-kicker">Grow with The Accommodation Guru</p>
          <h2 id="owner-dialog-title">
            {ready ? "Your enquiry is ready" : "Partner With Us as an Owner"}
          </h2>
        </div>
        <button
          type="button"
          className="guru-dialog-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>
      </div>

      {ready ? (
        <div className="guru-dialog-body">
          <p>
            Your property partnership enquiry has been prepared. Review the
            message in WhatsApp and press send to contact our team.
          </p>
          <a
            className="guru-button guru-button-dark guru-full"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Continue to WhatsApp ↗
          </a>
          <button
            type="button"
            className="guru-button guru-button-outline"
            style={{ color: "#0F3D44", borderColor: "#0F3D44" }}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      ) : (
        <form className="guru-dialog-body" onSubmit={submit}>
          <p className="guru-form-intro">
            Tell us about your accommodation so our team can understand your
            property and follow up with you about the next steps.
          </p>

          <label htmlFor="owner-name">
            Full name <span aria-hidden="true">*</span>
            <input
              id="owner-name"
              name="name"
              required
              autoComplete="name"
              value={form.name}
              onChange={(event) => updateForm("name", event.target.value)}
            />
          </label>

          <label htmlFor="owner-property-type">
            Property type <span aria-hidden="true">*</span>
            <select
              id="owner-property-type"
              name="propertyType"
              required
              value={form.type}
              onChange={(event) => updateForm("type", event.target.value)}
            >
              {propertyTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="owner-location">
            Property location <span aria-hidden="true">*</span>
            <input
              id="owner-location"
              name="location"
              required
              autoComplete="address-level2"
              placeholder="Town, area or destination"
              value={form.location}
              onChange={(event) => updateForm("location", event.target.value)}
            />
          </label>

          <label htmlFor="owner-beds">
            Number of beds <span aria-hidden="true">*</span>
            <input
              id="owner-beds"
              name="beds"
              type="number"
              inputMode="numeric"
              min="1"
              max="100"
              step="1"
              required
              placeholder="e.g. 4"
              value={form.beds}
              onChange={(event) => updateForm("beds", event.target.value)}
            />
          </label>

          <label htmlFor="owner-property-information">
            Additional property information <span aria-hidden="true">*</span>
            <textarea
              id="owner-property-information"
              name="additionalPropertyInformation"
              rows={4}
              required
              minLength={10}
              placeholder="Describe the property, its amenities, sleeping arrangements and any details you would like us to know."
              value={form.notes}
              onChange={(event) => updateForm("notes", event.target.value)}
            />
            <span className="guru-field-hint">
              Please provide at least a short description (10 characters or
              more).
            </span>
          </label>

          <button className="guru-button guru-button-dark guru-full" type="submit">
            Prepare Owner Enquiry ↗
          </button>
          <p className="guru-form-note">
            Your message is not sent automatically. You will review and send it
            in WhatsApp.
          </p>
        </form>
      )}
    </dialog>
  );
}
