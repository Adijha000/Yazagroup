"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-paper/70">
          Requirement
        </label>
        <textarea
          name="requirement"
          rows={5}
          required
          className="w-full rounded-2xl border border-paper/15 bg-transparent px-4 py-3 text-paper placeholder:text-paper/30 focus:border-amber focus:outline-none"
          placeholder="Tell us about the role, project, or team you're building."
        />
      </div>

      <button
        type="submit"
        disabled={submitted}
        className="inline-flex items-center rounded-full bg-amber px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-amber-soft disabled:opacity-60"
      >
        {submitted ? "Thank you — we'll be in touch" : "Send Requirement"}
      </button>

      {submitted && (
        <p className="text-sm text-paper/50">
          This form is not yet connected to a live inbox. Configure a
          submission endpoint before launch.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-paper/70">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-2xl border border-paper/15 bg-transparent px-4 py-3 text-paper placeholder:text-paper/30 focus:border-amber focus:outline-none"
      />
    </div>
  );
}
