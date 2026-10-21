# v8 validation

Passed: every local HTML/media/font reference and internal anchor resolves; unique IDs and one H1 per page. All nine price categories preserve exact normalized content versus v7. Services, biography, process, FAQ and inquiry text retained. Service image order reversed. JS syntax checked. Pricing interaction tests confirm initial selection, one visible panel, clicking categories, Home/End and arrow-key wrapping. Menu no longer replaces icon markup with visible Menu/Close text. Privacy policy body replaced.

Responsive CSS reviewed for 320/375/768/1024px and wide desktop: category panels stack, long price rows wrap, mobile menu has a 48px control, owner copy flows naturally on mobile, and still photos retain their proportions. This is a code review, not a rendered browser test. Live rendering, browser/device interaction, Core Web Vitals and email handoff remain unverified. No backend uploads or migration changes.

## Version 9 checks
- All three JavaScript files passed Node syntax checks.
- All local HTML asset references resolved; all three pages have language controls.
- Mock DOM tests passed for English default, stored Pidgin preference, translated text and attributes, selected button state, exact English restoration, preserved prices/names and operation when local storage is blocked.
- Privacy policy now discloses browser storage of the language preference.
- Browser visual and interaction testing remains pending. Mobile fit and both language versions should be reviewed in the hosted preview before launch.

## Version 10 checks
Passed: JavaScript syntax; all four pages have language controls and header/footer Events links; unique IDs; all local references and fragment targets resolve; 11 carousel photos; distinct upcoming/past sections; homepage remains a landing page. Browser visual QA remains pending, including mobile swipe, keyboard scrolling and both languages. No migration or deployment performed.

Mock DOM checks also passed for carousel movement, boundary button states, reduced motion, saved language preference, exact English restoration and blocked preference storage.

## Version 11
All four pages checked for bicycle/close SVG icons and retained accessible menu state/label attributes. Existing menu JavaScript remains unchanged. Visual review on a mobile browser is still pending.

## Version 12
Passed: local asset references, sitemap XML, structured data JSON and matching CSP hashes, favicon square dimensions, preview noindex on all pages. Production preparation executed in a temporary folder and verified to remove noindex only from real pages. No deployment, live indexing, Google account setup, mobile browser QA or PageSpeed measurements performed. Existing Wix URL inventory and redirect audit still required before migration.

## Version 13
JavaScript syntax passed. Contact handler tests passed for full name, provided subject, blank/whitespace fallback, special-character encoding, correct recipient and preserved message. Real email-app handoff remains a manual browser check.

## Version 14
Passed Node syntax checks for site.js and motion.js, all local asset references, script inclusion on all four pages, 11 photo links, 5 process steps, existing structured-data CSP hashes and preview noindex. Desktop browser verified Events counter, larger viewer opening, next photo, Escape dismissal and focus return; verified Pidgin switching and process route highlight. Viewed desktop hero and process layout. Mobile viewport, reduced-motion OS setting and live PageSpeed measurements remain pending. No external motion dependencies added; motion.js is approximately 4.4 KB uncompressed. No migration performed.

## Version 15
Passed JavaScript syntax and local asset reference checks. Browser verified selected Wheels tab, its correct pricing panel and rendered moving indicator. Added native once-only service/owner reveals, focusable service accents and actual menu activation wheel animation. No additional animation dependency. Reduced motion disables new movement; real mobile device and OS reduced-motion visual testing remain pending. Existing preview noindex retained.

## Version 16
All four pages verified to have one footer back-to-top link and one matching page-top target. Native anchors work without JavaScript; language dictionary includes label; existing reduced-motion scrolling rule retained. Mobile visual review remains pending.

## Version 17
Verified route marker CSS and process observer removed. JavaScript syntax checked; process content unchanged. No browser visual test in this revision.

## Version 18
All four pages checked: one back-to-top anchor inside upper footer grid, none in lower footer, matching page-top target retained. Mobile visual check remains pending.

## Version 19
All four pages checked for desktop Contact anchor and retained mobile Contact link. Responsive CSS hides the duplicate according to viewport. Browser visual test remains pending.
