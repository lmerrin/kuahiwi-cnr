# Kuahiwi website v5

Complete revised package; use this instead of v1-v4. No Wix-to-Cloudflare transfer, DNS change or deployment was performed.

## Changes
- v5: added the supplied red bicycle photo directly below the wheel photo, with no gap and no image-panel padding. Both photographs retain their full proportions.

- What we do: same five headings, descriptions, icons, order and wheel photograph. Reorganized into five aligned rows; no service information added or removed.
- Header: correct workshop footage from the supplied ScreenRecording MOV, using a 24-second silent excerpt (seconds 2-26). The full 3m14s recording is not downloaded by visitors.
- Smaller images and video. Poster-first loading and delayed background video request; reduced-motion/save-data support and a pause/play control.
- Rest of the screenshot-based layout retained. No testimonials or footer address block.

The service image column now contains two photos. Its exact height follows the photo proportions and the responsive text layout.

## What to upload to GitHub
Unzip, then upload index.html, privacy-policy.html, 404.html, robots.txt, sitemap.xml and the entire assets folder at the repository root. Do not upload the ZIP itself as the website. _headers and _redirects are for Cloudflare Pages and are ignored by GitHub Pages. Markdown files and SERVICES_DESIGN_PREVIEW.png are handoff documentation only.

Commit message: Add second photo beneath the services image.

No build command, npm install or previous package required. To view locally open index.html, or run python3 -m http.server 8000 in this folder.

## Video controls
A silent looping workshop video sits behind the logo. Its source loads after the page/poster. With reduced-motion or save-data enabled, the poster remains until Play is pressed. Autoplay can also be restricted by the visitor’s browser. The background uses cover sizing, while still photographs retain full proportions.

## Contact form
This version prepares an email draft in the visitor’s mail app. It does not send/store messages or upload attachments from the website. Visitors attach images and send from their mail app. An approved backend is needed for direct delivery/uploads.

## Before migration
First finish reviewing the website and confirming business details, contact email, pricing, photo/font usage permissions, policies and form workflow. Browser/device QA and real form delivery tests are pending. Preview remains noindex. Do not change DNS or remove Wix until a migration plan covers existing URLs, redirects, search indexing, domain ownership and any email records. This package does not perform those changes.

When ready for production: review privacy draft, robots and noindex; confirm canonical/social/sitemap URLs and approved business details. _headers and _redirects apply only on Cloudflare Pages. Full transfer steps can be prepared once the site is approved and the domain/DNS setup is known.
