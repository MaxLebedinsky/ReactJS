self.addEventListener('install', function(event) {
    console.log('sw install');
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/src/index.jsx'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
      if (response !== undefined) {
        console.log('caches.match: reading from cache... ', response);
        return response;
      } else {
        return fetch(event.request).then(function (response) {
          let responseClone = response.clone();        
          caches.open('v1').then(function (cache) {
            cache.put(event.request, responseClone);
          });
          return response;
        }).catch(function () {
          return caches.match('/src/images/icon-128x128');
        });
      }
    }));
  });

self.addEventListener('activate', (event) => {
    console.log('sw activated');
 });