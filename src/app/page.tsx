import Image from "next/image"

export default function Home() {
  return (
    <>
      <section className="flex min-h-[min(75vh,640px)] flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-8">
        {/* Mobile: stacked, centered. Desktop: left column */}
        <div className="flex min-h-[40vh] w-full shrink-0 items-center justify-center lg:min-h-0 lg:max-w-[50%] lg:justify-start">
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
        {/* Mobile: centered. Desktop: right column, text next to logo */}
        <div className="flex w-full flex-col items-center justify-center px-4 py-10 text-center lg:max-w-[50%] lg:shrink-0 lg:px-12 lg:py-16 lg:text-center">
          <h1 className="font-cartoony text-4xl font-bold tracking-tight text-[var(--pbj-brown)] drop-shadow-sm sm:text-5xl md:text-6xl">
            The JAM protocol.
          </h1>
          <p className="mt-4 font-cartoony text-lg text-[var(--pbj-brown)]/90 sm:text-xl">
            Join-Accumulate Machine — consensus, PVM, and tooling aligned with
            the Gray Paper. Built to get the next layer of infrastructure
            right.
          </p>
        </div>
      </section>

      <section
        id="tech"
        className="border-t-4 border-dashed border-[var(--pbj-brown)]/40 bg-white/50 py-12 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-cartoony mb-10 text-center text-3xl font-bold text-[var(--pbj-brown)] sm:text-4xl">
            Tech direction
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TechCard
              title="Safrole"
              color="yellow"
              description="Consensus protocol as specified in Gray Paper Section 3 (safrole.tex). Ticket generation, sealing, epoch markers, and fallback sealing."
            />
            <TechCard
              title="PVM"
              color="red"
              description="Para Virtual Machine per pvm.tex. Gray Paper–compliant PVM with host functions, instructions, RAM, and refinement invocations."
            />
            <TechCard
              title="JAMNP-S"
              color="purple"
              description="JAM Simple Networking Protocol over QUIC and TLS 1.3. Block announcement, state/work requests, ticket distribution, work packages, and audits."
            />
            <TechCard
              title="Codec & types"
              color="orange"
              description="Serialization and types aligned with Gray Paper (serialization.tex, definitions.tex). Blob/program decoding, extrinsic hashing, and shared type definitions."
            />
            <TechCard
              title="Erasure & assurance"
              color="brown"
              description="Erasure coding (erasure_coding.tex) and reporting assurance (reporting_assurance.tex). Data availability and verification tooling."
            />
            <TechCard
              title="RPC & tooling"
              color="cream"
              description="JIP-2 Node RPC server (Elysia), WebSocket subscriptions, and node services: validators, guarantors, builders, networking."
            />
          </div>
          <p className="mt-10 text-center font-medium text-[var(--pbj-brown)]/80">
            Implementation follows the Gray Paper as the authoritative spec.
            Test vectors from jamtestvectors validate compliance.
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
