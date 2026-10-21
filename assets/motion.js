'use strict';
(() => {
  const text = value => window.kuahiwiLanguage?.text(value) || value;
  const steps = [...document.querySelectorAll('.process-frame ol > li')];
  if (steps.length && 'IntersectionObserver' in window) {
    const visible = new Set();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
      const current = [...visible].sort((a,b) => Math.abs(a.getBoundingClientRect().top - innerHeight * .4) - Math.abs(b.getBoundingClientRect().top - innerHeight * .4))[0];
      steps.forEach(step => step.classList.toggle('route-current', step === current));
    }, {rootMargin:'-15% 0px -35% 0px', threshold:[0,.25,.75]});
    steps.forEach(step => observer.observe(step));
  }

  document.querySelectorAll('.event-gallery').forEach(gallery => {
    const track = gallery.querySelector('.event-track');
    const links = [...track.querySelectorAll('.event-photo-link')];
    const counter = gallery.querySelector('.photo-counter');
    const images = links.map(link => link.querySelector('img'));
    if (!images.length) return;
    counter.hidden = false;
    let scheduled = false;
    const update = () => {
      scheduled = false;
      const left = track.getBoundingClientRect().left;
      const distances = links.map(link => Math.abs(link.getBoundingClientRect().left - left));
      const index = distances.indexOf(Math.min(...distances));
      counter.textContent = `${index + 1} / ${images.length}`;
    };
    track.addEventListener('scroll', () => { if (!scheduled) {scheduled = true; requestAnimationFrame(update);} }, {passive:true});
    window.addEventListener('resize', update);
    update();
    if (typeof HTMLDialogElement === 'undefined') return;
    const dialog = document.createElement('dialog');
    dialog.className = 'photo-dialog';
    dialog.innerHTML = '<div class="photo-dialog-head"><span class="viewer-count" aria-live="polite"></span><button type="button" class="viewer-close" autofocus><span aria-hidden="true">×</span></button></div><img class="viewer-image" alt=""><div class="photo-dialog-controls"><button type="button" class="viewer-previous"><span aria-hidden="true">←</span></button><button type="button" class="viewer-next"><span aria-hidden="true">→</span></button></div>';
    document.body.append(dialog);
    const close = dialog.querySelector('.viewer-close');
    const previous = dialog.querySelector('.viewer-previous');
    const next = dialog.querySelector('.viewer-next');
    const image = dialog.querySelector('.viewer-image');
    let active = 0;
    let opener = null;
    const labels = () => {
      dialog.setAttribute('aria-label',text('Event photo viewer'));
      close.setAttribute('aria-label',text('Close photo viewer'));
      previous.setAttribute('aria-label',text('Previous event photos'));
      next.setAttribute('aria-label',text('Next event photos'));
      if (dialog.open) image.alt = images[active].alt;
    };
    const show = index => {
      active = (index + images.length) % images.length;
      image.src = links[active].href;
      image.alt = images[active].alt;
      dialog.querySelector('.viewer-count').textContent = `${active + 1} / ${images.length}`;
    };
    labels();
    links.forEach((link,index) => link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button > 0) return;
      event.preventDefault();
      opener = link; show(index); dialog.showModal();
    }));
    close.addEventListener('click', () => dialog.close());
    previous.addEventListener('click', () => show(active - 1));
    next.addEventListener('click', () => show(active + 1));
    dialog.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault(); show(active + (event.key === 'ArrowRight' ? 1 : -1));
      }
    });
    dialog.addEventListener('click', event => { if (event.target === dialog) {
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    }});
    dialog.addEventListener('close', () => opener?.focus({preventScroll:true}));
    document.addEventListener('kuahiwi:languagechange', labels);
  });
})();

// v15: reveal readable content once, without hiding it before enhancement.
(() => {
 const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
 const running = new Set();
 const play = (element, frames, options) => {
   if (reduced.matches || !element.animate) return;
   const animation = element.animate(frames, options); running.add(animation);
   animation.finished.then(() => running.delete(animation), () => running.delete(animation));
 };
 reduced.addEventListener('change', () => { if (reduced.matches) {running.forEach(animation => animation.cancel()); running.clear();} });
 const reveal = elements => elements.forEach((element,index) => play(element,
   [{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],
   {duration:450,delay:index*65,easing:'cubic-bezier(.2,.65,.3,1)',fill:'backwards'}));
 if ('IntersectionObserver' in window) {
   const observer = new IntersectionObserver(entries => entries.forEach(entry => {
     if (!entry.isIntersecting) return;
     observer.unobserve(entry.target);
     reveal(entry.target.matches('.service-grid') ? [...entry.target.children] : [entry.target]);
   }), {threshold:.08});
   document.querySelectorAll('.service-grid,.about-grid').forEach(element => observer.observe(element));
 }
 document.querySelectorAll('.service-grid article').forEach(article => { article.tabIndex = 0; });
 const menu = document.querySelector('.menu-toggle');
 menu?.addEventListener('click', () => {
   menu.querySelectorAll('.bike-wheel').forEach(wheel => play(wheel,
     [{transform:'rotate(0deg)'},{transform:'rotate(180deg)'}],
     {duration:380,easing:'cubic-bezier(.2,.65,.3,1)'}));
 });
 const tabs = document.querySelector('#rate-tabs');
 if (!tabs) return;
 const marker = document.createElement('span');marker.className='rate-moving-marker';marker.setAttribute('aria-hidden','true');tabs.append(marker);
 let previous = null;
 let movement = null;
 const position = () => {
   const selected = tabs.querySelector('[aria-selected="true"]');
   if (!selected || tabs.hidden) return;
   const parent = tabs.getBoundingClientRect(), box = selected.getBoundingClientRect();
   const transform = `translate(${box.left-parent.left}px,${box.top-parent.top+8}px) scaleY(${Math.max(1,box.height-16)})`;
   movement?.cancel();
   if (marker.animate) movement = marker.animate([{transform:previous || transform},{transform}],{duration:reduced.matches || !previous ? 0 : 220,easing:'ease-out',fill:'forwards'});
   previous = transform;
 };
 const mutation = new MutationObserver(position);mutation.observe(tabs,{subtree:true,attributes:true,attributeFilter:['aria-selected','hidden']});
 if ('ResizeObserver' in window) {const resize = new ResizeObserver(position);resize.observe(tabs);} else window.addEventListener('resize',position);
 document.addEventListener('kuahiwi:languagechange',position);
 reduced.addEventListener('change',position);
 position();
})();
