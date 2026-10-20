# Kuahiwi SEO and migration checklist

## Included in v12
- Real supplied logo favicon: PNG, ICO and Apple touch formats; cream background keeps dark logo visible. Full logo detail is naturally small at favicon size.
- Unique page titles/descriptions; production canonical URLs; social metadata; semantic sections and crawlable links.
- Organization, WebSite, WebPage and homepage Service JSON-LD using known facts. CSP allows the exact JSON-LD hashes. Organization data is not a promise of a local rich result. No address, hours, ratings or event year invented.
- Sitemap for homepage, Events and privacy policy; 404 excluded.
- Optimized images, deferred video, minimal scripts and responsive styles retained.
- English is the source content. Pidgin is a visitor toggle, not a separately indexed language edition.

## Keep preview separate
All preview HTML remains noindex, nofollow. robots.txt permits crawling so crawlers can read noindex. This is not access protection. Do not submit preview URLs to search engines.

## Before migration
1. Verify the existing domain property in Google Search Console and record indexed URLs, top queries/pages and current traffic. Keep the current Wix website live.
2. Export/crawl the Wix sitemap and list all existing URLs, including any old blog, shop, event and legal pages. Preserve those URLs or prepare one-to-one permanent redirects. Do not redirect every missing page to the homepage. Existing redirect file is only a starting point, not a complete Wix URL audit.
3. Confirm public business name, phone, email, address/service area and real hours with Shaydon. Add an address only if approved for publication. Confirm Google Business Profile matches.
4. Review both languages, all prices, privacy terms, mobile menu, carousel, video and contact workflow. The form still opens an email draft; uploads are not connected.
5. Test hosted preview visually on phones and desktop. Run PageSpeed Insights on mobile; investigate actual LCP, INP and CLS results. Performance has not been measured here.

## Prepare production — only when approved for launch
Run locally from this package: `python3 prepare-production.py /absolute/path/to/new-production-folder`.
It creates a separate folder, removes noindex from real pages, keeps the 404 noindex, adds the production sitemap to robots.txt, and changes internal links to Cloudflare clean paths. It does not deploy or change DNS. Upload only the new folder contents to the production project. Keep review hosts noindex or access controlled.

## Launch validation
- Keep www.kuahiwibikecnr.com as preferred HTTPS hostname. Configure apex-to-www, HTTP-to-HTTPS and preview/pages.dev redirects or indexing controls in Cloudflare. No loop or redirect chain.
- Verify actual URL behavior: /, /events and /privacy-policy return 200; .html variants and /index.html resolve to preferred URLs; unknown paths return real HTTP 404. Canonical and sitemap must match final 200 URLs.
- Confirm no noindex or X-Robots-Tag blocks real production pages; robots.txt permits crawling, logo assets are crawlable and HTTPS certificates work.
- Verify every old Wix URL and its redirect before cancelling Wix. Preserve email DNS records while changing hosting.
- Test structured data with Schema Markup Validator / Google Rich Results Test; check CSP in browser console.
- Submit https://www.kuahiwibikecnr.com/sitemap.xml to Google Search Console and Bing Webmaster Tools. Inspect homepage and Events; request indexing where available.
- Monitor indexing, 404s, redirects and traffic after launch. A same-domain hosting move does not require Google's Change of Address tool. Search rankings can fluctuate.

## Ongoing local SEO
Complete and verify Shaydon's Google Business Profile: accurate category, services, contact information, hours and website. Add real work photos, request honest reviews, reply to reviews and earn relevant local links (cycling groups, partners, community event coverage). Do not buy reviews or stuff the business name with keywords. Useful service pages may be added later when Shaydon can supply distinct substantive copy; avoid thin duplicate location pages.

## Primary references
https://developers.google.com/search/docs/fundamentals/seo-starter-guide
https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes
https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes
https://developers.google.com/search/docs/appearance/favicon-in-search
https://support.google.com/business/answer/7091
https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
