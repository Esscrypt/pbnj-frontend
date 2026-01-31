const DEFAULT_SITE_URL = "https://peanutbutterandjam.io"

/**
 * Returns the site URL with protocol. Ensures a valid URL for metadataBase, canonical, etc.
 * If NEXT_PUBLIC_SITE_URL is set without a protocol (e.g. "peanutbutterandjam.xyz"), prepends "https://".
 */
export function getSiteUrl(): string {
  const raw =
    typeof process.env.NEXT_PUBLIC_SITE_URL === "string" &&
    process.env.NEXT_PUBLIC_SITE_URL.length > 0
      ? process.env.NEXT_PUBLIC_SITE_URL
      : DEFAULT_SITE_URL
  if (raw.startsWith("http://") || raw.startsWith("https://")) {
    return raw
  }
  return `https://${raw}`
}
