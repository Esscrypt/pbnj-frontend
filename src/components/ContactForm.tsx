"use client"

import { useState } from "react"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  )

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = (data.get("name") as string)?.trim()
    const email = (data.get("email") as string)?.trim()
    const message = (data.get("message") as string)?.trim()
    if (!name || !email || !message) return
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })
      if (res.ok) {
        setStatus("sent")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-md flex-col gap-4 font-cartoony"
    >
      <div>
        <label
          htmlFor="contact-name"
          className="mb-1 block text-sm font-semibold text-[var(--pbj-brown)]"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl border-2 border-[var(--pbj-brown)] bg-[var(--pbj-cream)] px-4 py-2 text-[var(--pbj-brown)] focus:outline-none focus:ring-2 focus:ring-[var(--pbj-orange)]"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="mb-1 block text-sm font-semibold text-[var(--pbj-brown)]"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border-2 border-[var(--pbj-brown)] bg-[var(--pbj-cream)] px-4 py-2 text-[var(--pbj-brown)] focus:outline-none focus:ring-2 focus:ring-[var(--pbj-orange)]"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="mb-1 block text-sm font-semibold text-[var(--pbj-brown)]"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className="w-full resize-y rounded-xl border-2 border-[var(--pbj-brown)] bg-[var(--pbj-cream)] px-4 py-2 text-[var(--pbj-brown)] focus:outline-none focus:ring-2 focus:ring-[var(--pbj-orange)]"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-xl border-2 border-[var(--pbj-brown)] bg-[var(--pbj-red)] px-6 py-3 font-cartoony font-semibold text-white shadow-[var(--pbj-shadow)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--pbj-brown)] disabled:opacity-60"
      >
        {status === "sending"
          ? "Sending…"
          : status === "sent"
            ? "Sent"
            : "Send"}
      </button>
      {status === "sent" && (
        <p className="text-sm font-medium text-[var(--pbj-brown)]">
          Thanks, we’ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-[var(--pbj-red)]">
          Something went wrong. Try again or reach out via Telegram/Twitter.
        </p>
      )}
    </form>
  )
}
