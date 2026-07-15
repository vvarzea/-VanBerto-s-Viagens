// VanBerto's — Service Worker
// Sempre que alterares ficheiros essenciais (index.html, css, js), sobe este número
// para forçar todos os telemóveis a atualizar a cache guardada.
const CACHE_VERSION = 'vanbertos-v1';

// Ficheiros essenciais para a app abrir mesmo sem internet.
// Usa exatamente os mesmos caminhos que o index.html usa.
const CORE_ASSETS = [
  './',
  'index.html',
  'css/main.css',
  'js/app.js?v=20260714c',
  'manifest.json',
  'images/logo_passaporte.png',
  'images/icons/icon-192.png',
  'images/icons/icon-512.png',
  'images/icons/apple-touch-icon.png',
  'images/icons/favicon-32x32.png',
  'images/icons/favicon-16x16.png'
];

// Instalação: guarda logo o essencial em cache.
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(CORE_ASSETS))
  );
});

// Ativação: apaga caches de versões antigas.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Pedidos: responde da cache imediatamente (rápido, funciona offline)
// e atualiza a cache em segundo plano sempre que há internet.
self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const networkFetch = fetch(request)
        .then((networkResponse) => {
          const isCacheable =
            networkResponse &&
            (networkResponse.status === 200 || networkResponse.type === 'opaque');
          if (isCacheable) {
            const clone = networkResponse.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || networkFetch;
    })
  );
});
