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
  const fields = new FormData(form);
  const body = ['Name: ' + fields.get('name'), 'Email: ' + fields.get('email'),
    'Phone: ' + (fields.get('phone') || 'Not supplied'), '', String(fields.get('message')),
    '', 'I can attach photos to this email before sending.'].join('\n');
  const subject = 'Bike inquiry: ' + fields.get('service');
  window.location.href = 'mailto:shaydon.kbcr@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  document.querySelector('#form-status').textContent = 'Your mail app should open with a draft. Review it and press Send there. Nothing has been submitted by this website.';
});
const dialog = document.querySelector('#photo-dialog');
if (dialog) {
  let opener;
  document.querySelectorAll('.gallery-open').forEach(button => button.addEventListener('click', () => {
    opener = button;
    const image = dialog.querySelector('img');
    image.src = button.dataset.image;
    image.alt = button.querySelector('img').alt;
    dialog.showModal();
  }));
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { if (opener) opener.focus(); });
}
