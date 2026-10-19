# Kuahiwi website v3 - original Wix layout reference

Upload this version instead of v1 or v2. It is a complete standalone static package; no prior files are needed.

## What changed
- Rebuilt the composition from the three supplied desktop screenshots.
- Centered logo over a video hero; capsule navigation; original hero tagline.
- Original five service icons, split services/photo section, nine rounded pricing rows.
- Original two rider photos, five illustrated process steps, Rice Street Retros graphic and bike photo.
- Owner story with the portrait on the right, searchable FAQ panel with 15 questions, centered contact panel and navy footer.
- Removed testimonials and the footer address block as requested.
- Full photographs use their original proportions rather than cover cropping. This can make their heights differ from the Wix screenshot, which cropped some placements.

## Important video distinction
The supplied IMG_4441.MOV is a 22.3-second vertical clip of cyclists by the harbor. It has been converted to silent, browser-compatible H.264 MP4 and used as the hero background. The original screenshot shows a workshop video; that workshop clip was not provided. Replace assets/video/harbor-ride.mp4 and the matching poster when the intended workshop footage is available, or update the HTML paths. This is a closer recreation, not a verified pixel-exact export of Wix.

Background video fills the hero with cover sizing, which crops the vertical clip on wide screens. All still photographs are uncropped. A matching landscape workshop clip will fit the desktop hero more naturally. Video pauses for reduced-motion preferences; a play/pause control is provided. Audio has been removed for background use.

## GitHub preview - simple steps
1. Unzip this package.
2. Open the intended repository.
3. Upload the CONTENTS of the folder, including index.html and the assets folder. Do not upload the ZIP as the website or wrap the files in another folder.
4. Commit with: Restore original Kuahiwi layout and add video - v3.
5. If Pages is not enabled: Settings > Pages > Deploy from a branch > main > / (root) > Save.
6. Wait for deployment and review the Pages link.

No build command or npm installation is required. To review locally, open index.html, or run python3 -m http.server 8000 from this folder.

## Contact form
The original Wix backend does not transfer with standalone HTML. This form intentionally opens an email draft; the visitor reviews and sends it in their mail app. It does not upload files or send/store messages on the website. Photos can be attached in the mail app. Direct form delivery and upload require an approved backend; do not put secrets in browser JavaScript.

## Before production launch
Confirm official business name, contact email (retrievals differed), service rates/parts inclusions, operating details, warranty and the Rice Street Retros relationship. Confirm photo and webfont licensing. Review the policy draft. Add the correct workshop video if desired. Test desktop/mobile, keyboard controls, video playback, menu, FAQ search and mail-client draft on real devices. Original screenshots are desktop-only; mobile styling is an adaptation.

The preview is intentionally noindex. Before production: remove noindex from approved pages, change robots.txt to Allow: / and add the sitemap URL, remove policy draft warnings only after review, confirm canonical/OG/sitemap URLs and deploy to the intended host. Keep 404 noindex. _headers and _redirects are for Cloudflare Pages; GitHub Pages does not use them.

No live Wix site, GitHub repository or hosting configuration was changed. All v3 modifications are in this ZIP.
