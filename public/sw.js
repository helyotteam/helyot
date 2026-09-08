/* Bump CACHE_VERSION on every deploy that changes assets — the activate handler
   deletes all caches that aren't in the current set, so returning visitors get
   the fresh site + images instead of stale precached copies. */
const CACHE_VERSION = 'v17-helyot';
const STATIC_CACHE  = `helyot-static-${CACHE_VERSION}`;
const IMAGE_CACHE   = `helyot-images-${CACHE_VERSION}`;
const PAGES_CACHE   = `helyot-pages-${CACHE_VERSION}`;
const OFFLINE_URL   = '/offline.html';

const STATIC_ASSETS = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/favicon.svg',
];

// ─── Install ────────────────────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// ─── Activate ───────────────────────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  const current = new Set([STATIC_CACHE, IMAGE_CACHE, PAGES_CACHE]);
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => !current.has(k)).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// ─── Fetch ──────────────────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and cross-origin (except fonts)
  if (request.method !== 'GET') return;
  if (url.origin !== self.location.origin && !url.href.includes('fonts.googleapis.com') && !url.href.includes('fonts.gstatic.com')) return;

  // Images — cache-first
  if (request.destination === 'image') {
    event.respondWith(cacheFirst(IMAGE_CACHE, request));
    return;
  }

  // Static assets (_astro, fonts, icons) — cache-first
  if (url.pathname.startsWith('/_astro/') || url.pathname.startsWith('/fonts/') || url.pathname.startsWith('/icons/')) {
    event.respondWith(cacheFirst(STATIC_CACHE, request));
    return;
  }

  // HTML pages — network-first.
  // Stale-while-revalidate served the previous copy on every first load, so a
  // deploy (or any edit in dev) only appeared on the SECOND visit, and the
  // fresh HTML could arrive paired with the old hashed CSS. Pages are small;
  // fetching them first costs little and guarantees visitors see the current
  // site. The cache stays as the offline fallback.
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirst(PAGES_CACHE, request));
    return;
  }

  // Everything else — network-first with fallback
  event.respondWith(networkFirst(STATIC_CACHE, request));
});

// ─── Strategies ─────────────────────────────────────────────────────────────
async function cacheFirst(cacheName, request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Network error', { status: 408 });
  }
}

async function staleWhileRevalidate(cacheName, request) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(async () => {
      const offline = await caches.match(OFFLINE_URL);
      return offline ?? new Response('Offline', { status: 503 });
    });

  return cached ?? fetchPromise;
}

async function networkFirst(cacheName, request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    // A page request with nothing cached should land on the offline page
    // rather than a bare 503.
    if (request.mode === 'navigate') {
      const offline = await caches.match(OFFLINE_URL);
      if (offline) return offline;
    }
    return new Response('Network error', { status: 503 });
  }
}
