# Kuahiwi website - standalone preview v1

Built from the public website content and supplied branding. This is a recreation, not Wix editor/source export, and is not pixel-exact. No live website was changed or deployed.

## What is included
- Responsive homepage with services, all published individual rates, tune-up/overhaul inclusions, process, bike types, vintage/project gallery, owner story, testimonials and 15 FAQs.
- Local photos and actual Edo SZ / Rockwell Bold / Rockwell Nova Light fonts.
- Mobile menu, native expandable pricing/FAQs, keyboard-accessible image dialog.
- Email-draft inquiry tool (not a server form), policy review draft, 404, metadata, favicon, robots, sitemap and Cloudflare headers.
- DESIGN.md and image provenance.

## Preview locally
Open index.html in a browser. For a local server, from this folder run `python3 -m http.server 8000` and open http://localhost:8000.

## GitHub Pages preview
1. Create/open the intended repository.
2. Upload the CONTENTS of this folder, including index.html and assets. Do not upload the ZIP itself as your website.
3. In Settings > Pages, select the correct branch and root folder, then save.
4. Open the provided Pages address once GitHub finishes deployment.

No npm install, build command or dependencies are required. Relative assets support a repository subdirectory.

## Inquiry workflow
The form opens the visitor's email client with a prefilled message. The visitor must press Send there. Nothing is stored or sent by this site; file uploads are not available. Visitors can add attachments in their mail app. If direct form delivery is required, connect an approved backend and update its privacy notice and CSP. Never place email service secrets in browser JavaScript.

## Required review before going live
- Confirm official company name and whether Rice Street Retros remains an active sub-brand or is just a former name.
- Confirm the email directly with Shaydon: two research retrievals differed. This package uses shaydon.kbcr@gmail.com throughout. Update all HTML and assets/site.js together if needed.
- Confirm address, telephone, all rates, parts inclusions, service availability, walk-ins, payment methods, pickup/delivery, shipping, turnaround and warranty.
- Confirm testimonial/photo permission; approve photo captions and identify the owner portrait. Review all copy.
- Verify supplied font licensing permits web embedding; possession of a font ZIP does not establish a web license.
- Approve the privacy notice for actual hosting/form practices. It is currently labeled as a draft.
- Test mobile layout, keyboard navigation, image crops and the entire inquiry flow on real browsers. Browser QA was unavailable in the build environment.

## Launch changes
1. Resolve the review items above.
2. Replace the email-draft flow if needed; test delivery.
3. Remove preview banner. Remove `noindex, nofollow` from index.html and the approved policy; keep 404 noindex.
4. Change robots.txt to `User-agent: *` / `Allow: /` and add `Sitemap: https://www.kuahiwibikecnr.com/sitemap.xml`.
5. Confirm production domain in canonical/OG tags and sitemap. On GitHub preview these intentionally still reference the intended production domain; keep the preview noindex.
6. Add approved business schema only after name/address/contact details are confirmed. Verify the OG image URL after deployment.
7. Cloudflare Pages: upload the CONTENTS as a static site, or connect the repository with no build command and output directory set to the repository root. _headers and _redirects are Cloudflare-specific and do not apply on GitHub Pages.
8. Connect the domain only after the production version has been checked; submit the sitemap in Search Console.

## Updating
HTML contains content/rates/FAQ. assets/styles.css contains layout/brand tokens. assets/site.js contains menu/dialog/email behavior. Preserve unique versioned ZIP names for future handoffs.
