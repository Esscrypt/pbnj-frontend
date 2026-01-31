"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-[var(--pbj-brown)] bg-[var(--pbj-cream)]/95 backdrop-blur-sm bubble-shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center transition-transform hover:scale-[1.02] active:scale-[0.98]"
          aria-label="Peanut Butter AND JAM – Home"
        >
          <Image
            src="/logo.png"
            alt="Peanut Butter AND JAM"
            width={240}
            height={100}
            className="h-14 w-auto object-contain object-left sm:h-16 md:h-20"
            priority
          />
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link
            href="#tech"
            className="rounded-xl border-2 border-[var(--pbj-brown)] bg-[var(--pbj-yellow)] px-4 py-2 font-cartoony text-sm font-semibold text-[var(--pbj-brown)] shadow-[var(--pbj-shadow)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--pbj-brown)] sm:text-base"
          >
            Tech
          </Link>
          <Link
            href="https://github.com/gavofyork/graypaper"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border-2 border-[var(--pbj-brown)] bg-[var(--pbj-red)] px-4 py-2 font-cartoony text-sm font-semibold text-white shadow-[var(--pbj-shadow)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--pbj-brown)] sm:text-base"
          >
            Gray Paper
          </Link>
        </nav>
      </div>
    </header>
  )
}
