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
