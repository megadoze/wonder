"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { services } from "@/data/content";
import { ModalShell } from "./ModalShell";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactDialog({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const isSubmitting = status === "submitting";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const values = new FormData(form);

    const enquiry = {
      name: String(values.get("name") ?? "").trim(),
      email: String(values.get("email") ?? "").trim(),
      service: String(values.get("service") ?? ""),
      project: String(values.get("project") ?? "").trim(),
      website: String(values.get("website") ?? ""),
    };

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiry),
      });

      if (!response.ok) {
        throw new Error("Enquiry submission failed");
      }

      form.reset();
      setStatus("success");
      setFeedback(
        "Thank you. Your enquiry has been submitted. WONDER will be in touch by email.",
      );
    } catch {
      setStatus("error");
      setFeedback(
        "Something went wrong. Your enquiry has not been confirmed. Please try again.",
      );
    }
  }

  return (
    <ModalShell
      labelledBy="contact-dialog-heading"
      onClose={onClose}
      className="w-[min(620px,92vw)] p-[52px] max-md:p-[24px]"
    >
      <button
        data-modal-close
        type="button"
        aria-label="Close contact form"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-paper-soft px-3 py-2.5 text-[9px] tracking-[.1em] transition-colors hover:bg-forest hover:text-white"
      >
        CLOSE ✕
      </button>

      <p className="mb-[18px] text-[9px] tracking-[.15em] text-[#777b74] uppercase">
        WONDER / PROJECT ENQUIRY
      </p>

      <h2
        id="contact-dialog-heading"
        className="mb-6 font-editorial text-[clamp(44px,8vw,60px)] leading-[.9] tracking-[-.035em]"
      >
        Tell us about
        <br />
        <em className="font-normal text-[#5e695f]">your space.</em>
      </h2>

      <p className="max-w-[450px] text-xs leading-[1.7] text-[#73776f]">
        Share a few details about your project. WONDER will get back to you by
        email to discuss the next steps.
      </p>

      <form
        onSubmit={submit}
        aria-busy={isSubmitting}
        className="mt-7 grid gap-4"
      >
        {/* Spam honeypot */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label>
            Website
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <label className="block text-[9px] tracking-[.1em] text-[#6d716a] uppercase">
          Your name
          <input
            autoComplete="name"
            name="name"
            required
            maxLength={120}
            type="text"
            placeholder="Name"
            className="mt-2 block w-full rounded-none border-0 border-b border-[#9da198] bg-transparent px-0 py-2.5 text-base normal-case tracking-normal text-ink outline-offset-2 md:text-sm"
          />
        </label>

        <label className="block text-[9px] tracking-[.1em] text-[#6d716a] uppercase">
          Email address
          <input
            autoComplete="email"
            name="email"
            required
            maxLength={254}
            type="email"
            placeholder="Email"
            className="mt-2 block w-full rounded-none border-0 border-b border-[#9da198] bg-transparent px-0 py-2.5 text-base normal-case tracking-normal text-ink outline-offset-2 md:text-sm"
          />
        </label>

        <label className="block text-[9px] tracking-[.1em] text-[#6d716a] uppercase">
          How can we help?
          <select
            name="service"
            defaultValue="Interior Design"
            className="mt-2 block w-full rounded-none border-0 border-b border-[#9da198] bg-transparent px-0 py-2.5 text-base normal-case tracking-normal text-ink outline-offset-2 md:text-sm"
          >
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-[9px] tracking-[.1em] text-[#6d716a] uppercase">
          About your space
          <textarea
            name="project"
            required
            minLength={10}
            maxLength={4000}
            rows={4}
            placeholder="Tell us about the space, what you want to change and where you are in the process…"
            className="mt-2 block w-full resize-y rounded-none border-0 border-b border-[#9da198] bg-transparent px-0 py-2.5 text-base normal-case tracking-normal text-ink outline-offset-2 md:text-sm"
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group mt-2 flex w-fit min-w-[180px] items-center justify-between gap-6 rounded-full border border-forest bg-forest px-5 py-3 text-sm text-white transition-colors hover:bg-[#2a382f] disabled:cursor-wait disabled:opacity-60"
        >
          <span>{isSubmitting ? "Sending…" : "Send enquiry"}</span>

          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-[17px] shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
          >
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
          </svg>
        </button>

        <p
          aria-live="polite"
          role={status === "error" ? "alert" : "status"}
          className="min-h-[18px] text-[11px] leading-[1.6] text-[#5f655d]"
        >
          {feedback}
        </p>
      </form>
    </ModalShell>
  );
}
