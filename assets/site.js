'use strict';
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu(returnFocus = false) {
  if (!toggle || !nav) return;
  nav.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = 'Menu';
  if (returnFocus) toggle.focus();
}
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  window.matchMedia('(min-width: 801px)').addEventListener('change', () => closeMenu());
}
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
const form = document.querySelector('#inquiry-form');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const f = new FormData(form);
  const body = ['Name: ' + f.get('name') + ' ' + f.get('lastName'), 'Email: ' + f.get('email'),
    'Phone: ' + (f.get('phone') || 'Not supplied'), '', String(f.get('message')),
    '', 'Photos can be attached to this email before sending.'].join('\n');
  window.location.href = 'mailto:shaydon.kbcr@gmail.com?subject=' + encodeURIComponent('Bike inquiry: ' + (f.get('service') || 'Kuahiwi')) + '&body=' + encodeURIComponent(body);
  document.querySelector('#form-status').textContent = 'Your mail app should open with a draft. Review it and send it there. Nothing has been submitted by this website.';
});
const search = document.querySelector('#faq-search');
if (search) search.addEventListener('input', () => {
  const term = search.value.trim().toLowerCase();
  let matches = 0;
  document.querySelectorAll('.faq-list details').forEach(item => {
    const match = item.textContent.toLowerCase().includes(term);
    item.hidden = !match;
    if (match) matches++;
  });
  document.querySelector('#faq-empty').hidden = matches !== 0;
});
const video = document.querySelector('#hero-video');
const videoToggle = document.querySelector('#video-toggle');
if (video && videoToggle) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let loaded = false;
  let manuallyPaused = false;
  function syncVideoButton() {
    const label = video.paused ? 'Play video' : 'Pause video';
    videoToggle.textContent = label;
    videoToggle.setAttribute('aria-label', label + ' background');
  }
  function startVideo() {
    if (!loaded) {
      const source = video.querySelector('source');
      source.src = source.dataset.src;
      video.load();
      loaded = true;
    }
    video.play().catch(syncVideoButton);
  }
  video.addEventListener('play', syncVideoButton);
  video.addEventListener('pause', syncVideoButton);
  function scheduleBackground() {
    if (reduceMotion.matches || manuallyPaused || navigator.connection?.saveData) return;
    const begin = () => { if (!reduceMotion.matches && !manuallyPaused) startVideo(); };
    if ('requestIdleCallback' in window) window.requestIdleCallback(begin, {timeout: 1800});
    else window.setTimeout(begin, 700);
  }
  if (document.readyState === 'complete') scheduleBackground();
  else window.addEventListener('load', scheduleBackground, {once: true});
  reduceMotion.addEventListener('change', event => { if (event.matches) video.pause(); });
  videoToggle.addEventListener('click', () => {
    if (video.paused) { manuallyPaused = false; startVideo(); }
    else { manuallyPaused = true; video.pause(); }
  });
  syncVideoButton();
}
