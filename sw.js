// VanBerto's — Service Worker
// Sempre que alterares ficheiros essenciais (index.html, css, js), sobe este número
// para forçar todos os telemóveis a atualizar a cache guardada.
const CACHE_VERSION = 'vanbertos-v20';

// Ficheiros essenciais para a app abrir mesmo sem internet.
// Usa exatamente os mesmos caminhos que o index.html usa.
const CORE_ASSETS = [
  './',
  'index.html',
  'css/main.css',
  'js/app.js?v=20260904a',
  'manifest.json',
  'images/logo_passaporte.png',
  'images/icons/icon-192.png',
  'images/icons/icon-512.png',
  'images/icons/apple-touch-icon.png',
  'images/icons/favicon-32x32.png',
  'images/icons/favicon-16x16.png',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

// Instalação: guarda logo o essencial em cache. Pede tudo em modo 'cors'
// explícito — os ficheiros de fora (unpkg.com, cdn.maptiler.com) são
// carregados no HTML com crossorigin="", ou seja, em modo 'cors'; se aqui
// os guardássemos em modo 'no-cors' (o que 'cache.addAll' faz por defeito
// com URLs em string), ficavam guardados como resposta "opaque", e o browser
// recusa-se a usar uma resposta "opaque" para responder a um pedido 'cors' —
// foi isto que estava a rebentar o carregamento do leaflet.css.
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) =>
      Promise.all(
        CORE_ASSETS.map((url) => {
          const req = new Request(url, { mode: 'cors' });
          return fetch(req)
            .then((res) => {
              if (res && res.ok) return cache.put(req, res);
            })
            .catch(() => {
              // Um ficheiro a falhar (ex: sem internet neste preciso
              // momento) não deve impedir a instalação dos restantes.
            });
        })
      )
    )
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
