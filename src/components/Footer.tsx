"use client"

import Link from "next/link"

const EXSCRYPT_URL = "https://esscrypt.com/"
const M1_FUZZER_RELEASES_URL =
  "https://github.com/Esscrypt/pbnj-fuzzer-releases/releases"
const MILESTONE_DELIVERY_PR_URL =
  "https://github.com/w3f/jam-milestone-delivery/pull/25"

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t-4 border-[var(--pbj-brown)] bg-[var(--pbj-brown)] text-[var(--pbj-cream)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <p className="font-cartoony text-sm font-medium sm:text-base">
          Peanut Butter AND JAM · JAM Protocol
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link
            href="#tech"
            className="rounded-lg px-2 py-1 font-medium transition-colors hover:bg-white/10 hover:text-white"
          >
            Tech
          </Link>
          <Link
            href="/get-in-touch"
            className="rounded-lg px-2 py-1 font-medium transition-colors hover:bg-white/10 hover:text-white"
          >
            Get in touch
          </Link>
          <a
            href="https://graypaper.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-2 py-1 font-medium transition-colors hover:bg-white/10 hover:text-white"
          >
            Gray Paper
          </a>
          <a
            href="https://docs.jamcha.in"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-2 py-1 font-medium transition-colors hover:bg-white/10 hover:text-white"
          >
            Docs
          </a>
          <a
            href={MILESTONE_DELIVERY_PR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-2 py-1 font-medium transition-colors hover:bg-white/10 hover:text-white"
          >
            M1 Delivery
          </a>
          <a
            href={M1_FUZZER_RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-2 py-1 font-medium transition-colors hover:bg-white/10 hover:text-white"
          >
            M1 Fuzzer
          </a>
        </nav>
        <div className="flex flex-col items-center gap-1 text-xs text-[var(--pbj-cream)]/80 sm:items-end">
          <p>
            Built with the Gray Paper as the authoritative spec.
          </p>
          <p>
            <a
              href={EXSCRYPT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--pbj-cream)] transition-colors hover:text-white"
            >
              Built by Esscrypt Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
