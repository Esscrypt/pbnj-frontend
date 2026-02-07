import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <section className="flex min-h-[min(75vh,640px)] w-full max-w-full flex-col items-center gap-8 overflow-hidden lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-8">
        {/* Mobile: stacked, centered. Desktop: left column — logo only */}
        <div className="flex min-h-[40vh] w-full min-w-0 shrink flex-col items-center justify-center lg:min-h-0 lg:max-w-[50%] lg:justify-start">
          <Image
            src="/logo.png"
            alt="Peanut Butter AND JAM"
            width={640}
            height={280}
            className="h-auto w-full max-w-[90vw] object-contain object-center animate-bounce-pbj lg:max-w-full lg:object-left"
            priority
            unoptimized
          />
        </div>
        {/* Mobile: centered. Desktop: right column — text + CTA below */}
        <div className="flex w-full min-w-0 flex-col items-center justify-center px-4 py-10 text-center lg:max-w-[50%] lg:shrink-0 lg:items-center lg:px-12 lg:py-16">
          <h1 className="font-cartoony text-4xl font-bold tracking-tight text-[var(--pbj-brown)] drop-shadow-sm sm:text-5xl md:text-6xl">
            Friendliest JAM implementation
          </h1>
          <p className="mt-4 font-cartoony text-lg text-[var(--pbj-brown)]/90 sm:text-xl">
            A welcoming, Gray Paper–aligned stack: type-safe consensus, PVM, and
            tooling in TypeScript. Run on Node, Bun, or in the browser—one codebase,
            shared with your apps, built to get you shipping.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/get-in-touch"
              className="rounded-xl border-2 border-[var(--pbj-brown)] bg-[var(--pbj-purple)] px-5 py-2.5 font-cartoony text-base font-semibold text-white shadow-[var(--pbj-shadow)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--pbj-brown)] lg:px-8 lg:py-4 lg:text-xl"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section
        id="tech"
        className="border-t-4 border-dashed border-[var(--pbj-brown)]/40 bg-white/50 py-12 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-cartoony mb-2 text-center text-3xl font-bold text-[var(--pbj-brown)] sm:text-4xl">
            Why PBNJ
          </h2>
          <p className="font-cartoony mb-10 text-center text-lg text-[var(--pbj-brown)]/80">
            Gray Paper–aligned building blocks that are easy to integrate and verify.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TechCard
              title="Safrole"
              color="yellow"
              description="Battle-tested consensus: ticket generation, sealing, and epoch markers with fallback sealing so your chain keeps going when it matters."
            />
            <TechCard
              title="PVM"
              color="red"
              description="Gray Paper–compliant PVM that runs the same everywhere—host functions, RAM, and refinement invocations with no spec surprises."
            />
            <TechCard
              title="JAMNP-S"
              color="purple"
              description="Modern networking over QUIC and TLS 1.3: block announcement, work packages, ticket distribution, and audits without the protocol headaches."
            />
            <TechCard
              title="Codec & types"
              color="orange"
              description="One type system and serialization story: blob and program decoding, extrinsic hashing, and shared types that stay in sync with the spec."
            />
            <TechCard
              title="Erasure & assurance"
              color="brown"
              description="Data availability you can verify: erasure coding and assurance tooling that match the Gray Paper so you can trust the data."
            />
            <TechCard
              title="RPC & tooling"
              color="cream"
              description="Production-ready JIP-2 RPC, WebSocket subscriptions, and node services for validators, guarantors, and builders—integrate and go."
            />
          </div>
          <p className="mt-10 text-center font-medium text-[var(--pbj-brown)]/80">
            We follow the Gray Paper as the authoritative spec and prove it with
            official jamtestvectors—so you get compliance without the guesswork.
          </p>
        </div>
      </section>
    </>
  )
}

function TechCard({
  title,
  color,
  description,
}: {
  title: string
  color: "yellow" | "red" | "purple" | "orange" | "brown" | "cream"
  description: string
}) {
  const bgMap = {
    yellow: "bg-[var(--pbj-yellow)]",
    red: "bg-[var(--pbj-red)] text-white",
    purple: "bg-[var(--pbj-purple)] text-white",
    orange: "bg-[var(--pbj-orange)]",
    brown: "bg-[var(--pbj-brown)] text-[var(--pbj-cream)]",
    cream: "bg-[var(--pbj-cream)] border-2 border-[var(--pbj-brown)]",
  }
  return (
    <div
      className={`card-inflated ${bgMap[color]} animate-drip rounded-[var(--pbj-radius)] p-5 font-cartoony`}
    >
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-sm leading-relaxed opacity-95">{description}</p>
    </div>
  )
}
