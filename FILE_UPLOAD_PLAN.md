# Five-file inquiry uploads - proposed integration

The current mailto form cannot transfer selected files into an email automatically. A live upload feature requires a hosted form service or custom backend; a file input alone is insufficient.

Simplest operational option: connect a hosted form provider with file uploads, for example an upload-capable Formspree plan. The visitor selects up to five files, reviews their filenames/removes unwanted selections, and submits one inquiry. The provider stores/processes the submission and sends the owner a notification with access to the files. Confirm plan, retention, notification format and owner email before implementation. Provider charges may apply.

Validate a five-file maximum, accepted file types and per-file/total size limits in the browser and backend/provider. Show real progress/errors and only confirm success after the server confirms receipt. Add spam protection and update the privacy notice to name the actual processor and retention practices. Keep file access private or through controlled links.

A Cloudflare-native alternative uses a Worker to validate the inquiry and private R2 for storage, with an email notification service. This needs more implementation and ongoing maintenance than a hosted form tool.

Official references:
https://help.formspree.io/articles/building-your-form/file-uploads
https://help.formspree.io/articles/form-and-project-settings/system-limits
https://developers.cloudflare.com/r2/api/s3/presigned-urls/

No service was purchased, connected or deployed; no working upload or pretend upload control has been added. The current email-draft flow stays explicit until a real backend is configured.
