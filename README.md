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

## Version 10 — Events
Upload this package instead of v9. Events is a separate page, linked from the header and footer. Upcoming events has an empty state; the past event includes the supplied flyer and 11 photos. Photos are optimized WebP, lazy loaded and fully framed; supplied social-media overlays remain part of the original photos. The event year is not inferred from the flyer. The attached MOV is not added because this update requests a photo carousel.

Pidgin navigation hides the Projects link (translated as Our Bikes); English navigation and homepage project content remain. Both languages link to Events. To add an event, edit events.html and add its translations in assets/translations.js. Preserve separate upcoming and past sections.

## Version 11
Use this package instead of v10. Mobile navigation now uses an outline bicycle icon and switches to a close icon while the menu is open. All v10 Events and language updates are included.

## Version 12 — Favicon and SEO preparation
Use v12 instead of v11 for review. Read SEO_LAUNCH_CHECKLIST.md. Preview stays noindex. prepare-production.py creates separate launch files only when ready; no migration has occurred.

## Version 13 — Consistent inquiry subject
Email drafts use Kuahiwi Website Inquiry — Customer Full Name — Subject, with General inquiry when blank. The fixed prefix stays English in both language modes for Gmail filtering. The visitor must still send the email from their mail app. Use v13 instead of v12.

## Version 14 — Motion and Events viewer
Use v14 instead of v13. Adds one-time hero entrance, bicycle wheel/menu feedback, navigation underlines, pricing-panel fade, a vertical process route with active stops, event photo counter and a larger photo viewer. Viewer supports previous/next buttons, arrow keys, Escape and focus return; native photo links remain available without JavaScript or dialog support. Motion honors reduced-motion preferences. No dependencies added. Preview remains noindex; launch preparation and standardized inquiry subjects retained.

## Version 15
Completes service stagger and red hover/keyboard-focus accent, coordinated owner reveal, moving pricing marker and bicycle wheel rotation on click/tap/keyboard activation. Reduced-motion settings suppress movement. All v14 content and behavior retained. Before/after slider still needs matched photos; draggable 3D element remains outside this update.

## Version 16
Use v16 instead of v15. Circular white-outline back-to-top arrow added at the far right of every footer. Opaque navy fill, keyboard-accessible label and reduced-motion scrolling included. All previous updates retained.

## Version 17
Use v17 instead of v16. Removes process route dots, line and active-step scroll tracking. Vertical cards, text and images remain; quiet hover/focus-within tint retained. Includes footer back-to-top button and all earlier changes.

## Version 18
Use v18 instead of v17. Back-to-top is now in the upper navy footer beside Contact, above the divider. Includes process-dot removal and all previous updates.

## Version 19
Use v19 instead of v18. Desktop Contact moved to far right, language switch directly to its left, menu links spaced farther apart. Includes upper-footer arrow and process-dot removal.
