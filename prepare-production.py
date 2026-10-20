"""Run locally: python3 prepare-production.py /absolute/path/to/new-production-folder
Does not deploy. Destination must not exist. Upload only destination contents at launch.
"""
from pathlib import Path
import shutil,sys
source=Path(__file__).resolve().parent
target=Path(sys.argv[1]).resolve() if len(sys.argv)==2 else None
if target is None or target.exists() or source==target or source in target.parents:
 raise SystemExit('Provide a new, nonexistent output folder outside this preview folder.')
shutil.copytree(source,target,ignore=shutil.ignore_patterns('*.md','*.py','*PREVIEW.png'))
for page in target.glob('*.html'):
 text=page.read_text()
 if page.name!='404.html':text=text.replace('<meta name="robots" content="noindex, nofollow">','<meta name="robots" content="index, follow">')
 text=text.replace('index.html#','/#').replace('href="index.html"','href="/"').replace('href="events.html"','href="/events"').replace('href="privacy-policy.html"','href="/privacy-policy"')
 page.write_text(text)
(target/'robots.txt').write_text('User-agent: *\nAllow: /\nSitemap: https://www.kuahiwibikecnr.com/sitemap.xml\n')
print('Production files prepared at',target,'— not deployed. Complete SEO_LAUNCH_CHECKLIST.md before connecting the domain.')
