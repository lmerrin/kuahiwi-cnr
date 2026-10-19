'use strict';
(() => {
  const dictionary = window.KUAHIWI_PIDGIN || {};
  const storageKey = 'kuahiwi-language';
  let language = 'en';
  try { if (localStorage.getItem(storageKey) === 'hwc') language = 'hwc'; } catch (_) { /* Preference storage may be disabled. */ }
  const controls = [...document.querySelectorAll('[data-language]')];
  const textRecords = [];
  const attributeRecords = [];
  const isExcluded = element => element?.closest('script, style, noscript, .language-switch, [role="status"]');
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!node.nodeValue.trim() || isExcluded(node.parentElement)) continue;
    textRecords.push({node, original: node.nodeValue});
  }
  const titleNode = document.querySelector('title')?.firstChild;
  if (titleNode) textRecords.push({node: titleNode, original: titleNode.nodeValue});
  document.querySelectorAll('[aria-label], [placeholder], img[alt], meta[name="description"], meta[property="og:title"], meta[property="og:description"]').forEach(element => {
    if (isExcluded(element)) return;
    for (const attribute of ['aria-label', 'placeholder', 'alt', 'content']) {
      if (element.hasAttribute(attribute)) attributeRecords.push({element, attribute, original: element.getAttribute(attribute)});
    }
  });
  function translated(value) {
    if (language === 'en') return value;
    const key = value.trim();
    if (!Object.prototype.hasOwnProperty.call(dictionary, key)) return value;
    return value.replace(key, dictionary[key]);
  }
  function setLanguage(next, remember = true) {
    language = next === 'hwc' ? 'hwc' : 'en';
    document.documentElement.lang = language;
    textRecords.forEach(record => { record.node.nodeValue = translated(record.original); });
    attributeRecords.forEach(record => { record.element.setAttribute(record.attribute, translated(record.original)); });
    controls.forEach(button => {
      const selected = button.dataset.language === language;
      button.setAttribute('aria-pressed', String(selected));
    });
    if (remember) { try { localStorage.setItem(storageKey, language); } catch (_) { /* Toggle still works without storage. */ } }
    document.dispatchEvent(new CustomEvent('kuahiwi:languagechange', {detail: {language}}));
  }
  window.kuahiwiLanguage = {text: translated, set: setLanguage, get: () => language};
  controls.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  setLanguage(language, false);
  window.addEventListener('storage', event => {
    if (event.key === storageKey) setLanguage(event.newValue === 'hwc' ? 'hwc' : 'en', false);
  });
})();
