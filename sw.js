const version = 2.0;
const cacheName = 'khutbah-cache-v' + version;
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        '/jummah-khutbah/',
        '/jummah-khutbah/index.html',
        '/jummah-khutbah/myscript.js',
        '/jummah-khutbah/sw.js',
        '/jummah-khutbah/assets/jquery-3.1.0.js',
        '/jummah-khutbah/style.css',
        '/jummah-khutbah/manifest.json',
        '/jummah-khutbah/assets/icon_192.png',
        '/jummah-khutbah/assets/icon_512.png',
        '/jummah-khutbah/assets/al-qalam-quran-majeed.ttf',
        '/jummah-khutbah/assets/PatuaOne-Regular.ttf'
      ]);
    })
  );
  // self.skipWaiting();
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request).then(response => {
        return caches.open(cacheName)
        .then(cache => {
          cache.put(e.request.url, response.clone());
          return response;
        });
      });
    })
    .catch(error => {
      console.log('Error Fetching Files!', 'Error:', error);
    })
  );
});

// code source: https://github.com/ahmedazhar05/guess-who/blob/master/service-worker.js
self.onactivate = event => {
  const cacheAllowlist = [cacheName];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheAllowlist.indexOf(cacheName) === -1)
            return caches.delete(cacheName);
        })
      );
    })
  );
};