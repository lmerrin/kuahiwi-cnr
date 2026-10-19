# Kuahiwi website v8

Complete revised package; use instead of v1-v7. No migration, DNS, live Wix or hosting changes.

## Requested changes
- Swapped the service photos: red bicycle above wheel detail.
- Replaced privacy draft with the policy wording supplied and requested by Lilia. It still describes the current email-draft form; file upload remains unconnected.
- Service rates now use nine category selectors with one detail panel. Every rate, description, inclusion and service label is preserved. All content remains visible if JavaScript is unavailable.
- Owner paragraphs distribute across the height of the uncropped portrait on desktop. On mobile they return to normal paragraph flow.
- Mobile navigation uses three bars that change to an X when open; accessible labels remain available to screen readers.
- Responsive styling covers narrow phones, tablets and wide desktops. Actual browser/device visual QA remains pending.

SERVICE_RATES_PREVIEW.png is a static design concept, not a browser screenshot. It does not need uploading.

## GitHub
Upload index.html, privacy-policy.html, 404.html, robots.txt, sitemap.xml and the whole assets folder at repository root. No build or install needed. Documentation/preview PNGs can be skipped. _headers and _redirects apply on Cloudflare Pages, not GitHub Pages.

Commit: Redesign service rates, balance owner section, update privacy policy, and improve mobile navigation.

## Before launch
Preview stays noindex. Confirm business details, prices, email, policy practices, file/photo/font permissions and the final form workflow. Uploads are not yet enabled. Complete mobile/desktop browser checks and mail-client handoff testing. Plan the Wix transfer separately, including URLs/redirects, DNS/email records and search indexing, before changing the live domain.

## Version 9 — English / Pidgin
Use this package instead of v8. The header language buttons appear on the homepage, privacy policy and 404 page. English is the initial default; visitors can choose Pidgin and their browser remembers the choice. No translation API or additional external request is required.

Edit `assets/translations.js` to change a translation. `PIDGIN_REVIEW.md` provides the English and Pidgin draft side by side. The English keys must continue to match the English website copy. Review the draft wording with Shaydon before launch. Check both languages on desktop and mobile, including the menu, service rate tabs, FAQ search, video controls and contact form.

The contact form still opens an email draft. File uploads are not connected. Preview noindex settings remain enabled; no domain transfer or deployment is included.
