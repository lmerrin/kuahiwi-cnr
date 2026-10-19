# v4 asset optimization

Asset folder bytes: v3 11,610,254; v4 2,050,343. Reduction: 82.3%. These are aggregate packaged asset sizes, not measured first-page transfer, Lighthouse scores or Core Web Vitals.

The old harbor background alone was about 8.1 MiB. The new workshop source is about 33.7 MB and 3m14s long. v4 uses seconds 2-26 as a silent 24-second H.264 MP4 background loop, with faststart metadata. New encoded video size: 1,075,099 bytes.

Poster loads first; video source is assigned after window load and an idle interval. Reduced-motion and save-data users see the poster until they explicitly press Play. Icons and process images are resized for their displayed size, logo changed to transparent WebP, large photos compressed without cropping, below-fold imagery lazy-loaded. No extra frameworks or trackers.

Browser playback and live PageSpeed tests are pending. The cause of any slowdown on the current live Wix site was not measured here. This optimization applies to the downloadable static package.

V5 adds one compressed WebP service photograph. Earlier v4 measurements refer to v4 only; no live performance measurement has been taken.
