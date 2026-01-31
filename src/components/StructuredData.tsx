import { getSiteUrl } from "@/lib/site-url"

const SITE_URL = getSiteUrl()

export function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Peanut Butter AND JAM",
    url: SITE_URL,
    description:
      "Join-Accumulate Machine protocol implementation. Safrole consensus, PVM, Gray Paper–aligned.",
    sameAs: [
      "https://graypaper.com",
      "https://github.com/gavofyork/graypaper",
      "https://docs.jamcha.in",
      "https://esscrypt.com",
    ],
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Peanut Butter AND JAM",
    url: SITE_URL,
    description:
      "Join-Accumulate Machine protocol implementation. Safrole consensus, PVM, Gray Paper–aligned.",
    publisher: { "@id": `${SITE_URL}#organization` },
    inLanguage: "en",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ ...organization, "@id": `${SITE_URL}#organization` }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}
