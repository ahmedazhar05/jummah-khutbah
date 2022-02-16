var version = 1.0;
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('khutbah-off-v' + version).then(function(cache) {
      return cache.addAll([
        './',
        './assets',
        './index.html',
        './myscript.js',
        './sw.js',
        './assets/jquery-3.1.0.js',
        './style.css',
        './manifest.json',
        './assets/icon_192.png',
        './assets/icon_512.png',
        './assets/al-qalam-quran-majeed.ttf',
        './assets/PatuaOne-Regular.ttf'
      ]);
    })
  );
  self.skipWaiting();
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});