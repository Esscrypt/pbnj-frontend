import type { Metadata } from "next"
import Link from "next/link"
import { TelegramIcon } from "@/components/TelegramIcon"
import { TwitterIcon } from "@/components/TwitterIcon"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Get in touch",
  description:
    "Contact Peanut Butter AND JAM — JAM protocol implementation by Esscrypt Ltd.",
}

const TELEGRAM_URL = "https://t.me/mihail_kirov"
const TWITTER_URL = "https://twitter.com/mihail_kirov"

export default function GetInTouchPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-cartoony mb-2 text-3xl font-bold text-[var(--pbj-brown)] sm:text-4xl">
        Get in touch
      </h1>
      <p className="mb-8 text-[var(--pbj-brown)]/90">
        Questions, feedback, or collaboration? Use the form below or reach out
        on Telegram or Twitter.
      </p>

      <section className="mb-10">
        <h2 className="font-cartoony mb-4 text-xl font-semibold text-[var(--pbj-brown)]">
          Contact form
        </h2>
        <ContactForm />
      </section>

      <section>
        <h2 className="font-cartoony mb-4 text-xl font-semibold text-[var(--pbj-brown)]">
          Or find us here
        </h2>
        <div className="flex flex-wrap items-center gap-6">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border-2 border-[var(--pbj-brown)] bg-[#0088cc]/10 px-4 py-3 font-cartoony font-semibold text-[var(--pbj-brown)] shadow-[var(--pbj-shadow)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--pbj-brown)]"
            aria-label="Telegram: @mihail_kirov"
          >
            <TelegramIcon className="h-6 w-6 text-[#0088cc]" />
            <span>@mihail_kirov</span>
          </a>
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border-2 border-[var(--pbj-brown)] bg-black/5 px-4 py-3 font-cartoony font-semibold text-[var(--pbj-brown)] shadow-[var(--pbj-shadow)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--pbj-brown)]"
            aria-label="Twitter: @mihail_kirov"
          >
            <TwitterIcon className="h-6 w-6" />
            <span>@mihail_kirov</span>
          </a>
        </div>
      </section>
    </div>
  )
}
