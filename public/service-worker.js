// public/service-worker.js
const CACHE_NAME = 'my-cache';
const urlsToCache = [
    '/',
    '/index.html',
    // adicione outras URLs de recursos que deseja cachear
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});