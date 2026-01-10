const CACHE_NAME = 'cartabino-v1';
const ASSETS = [
  'index.html',
  'poster.png',
  'icon-192.png',
  'manifest.json'
];

// Installation du Service Worker et mise en cache des fichiers
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Récupération des fichiers depuis le cache si on est hors-ligne
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
