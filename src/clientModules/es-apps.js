// Loads the shared ES launcher (es-apps.js) only after React has hydrated the page.
// Loaded as a plain <script>, it ran first and edited the server HTML (moved <es-tabbar>, added "opens in a new tab"
// icons), so React saw a mismatch (error #418), threw the page away and rendered it again: the visible double load.
let loaded = false;

export function onRouteDidUpdate() {
  if (loaded || typeof document === 'undefined') return;
  loaded = true;
  const s = document.createElement('script');
  s.src = '/es-apps.js';
  s.async = true;
  document.head.appendChild(s);
}
