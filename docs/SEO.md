# SEO checklist

## Already in place

- **Metadata** (`layout.tsx`): `metadataBase`, title, description, keywords, authors, creator, publisher
- **Robots**: `index, follow`, `googleBot` in metadata
- **Open Graph**: type, locale, url, siteName, title, description, images (Facebook, LinkedIn)
- **Twitter**: card, title, description, images
- **Canonical**: `alternates.canonical` = site URL
- **Icons**: favicon, apple-touch-icon, manifest
- **robots.txt**: `Allow: /`, `Sitemap: /sitemap.xml`
- **sitemap.xml**: generated from `src/app/sitemap.ts` (home page)
- **Structured data**: JSON-LD Organization + WebSite in `StructuredData.tsx`
- **llms.txt**: `/llms.txt` for LLM crawlers

## You need to do

1. **Set `NEXT_PUBLIC_SITE_URL` in production**  
   Use your real domain (e.g. `https://peanutbutterandjam.io`) so canonical URL, sitemap, and OG/Twitter URLs are correct.

2. **Optional: dedicated OG image**  
   For best social previews, add a **1200×630** image (e.g. `public/og-image.png`) and point `openGraph.images` and `twitter.images` to `/og-image.png`. Right now they use `/logo.png`, which may be cropped on some platforms.

3. **More pages later**  
   When you add routes (e.g. `/about`, `/docs`), give each its own `metadata` or `generateMetadata` (title, description) and add those URLs to `sitemap.ts`.

## Quick checks

- [Google Rich Results Test](https://search.google.com/test/rich-results) – paste your live URL to validate structured data
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) – check OG tags
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) – check Twitter meta
