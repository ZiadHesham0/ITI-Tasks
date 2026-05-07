const filesToCache = [
  "CSS/main.css",
  "js/main.js",
  "pages/404.html",
  "CSS/404.css",
  "pages/offline.html",
  "CSS/offline.css",
];

const CacheName = "Files";

self.addEventListener("install", function (event) {
  console.log("service Worker installing ", event);
  self.skipWaiting(); ///aqr2 el gded daimn w w overiride 3la el adem
  event.waitUntil(
    self.caches.open(CacheName).then((cache) => {
      return cache.addAll(filesToCache);
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CacheName) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Fetching Request....", event.request.url);
  const isPage2 = event.request.url.includes("page2.html");

  
  event.respondWith(
    caches.match(event.request).then((cacheResponse) => {
      if (cacheResponse) {
        console.log("request found in the cache");
        return cacheResponse;
      }
      console.log("connection to the server to get files");
      return fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse.status === 404) {
            return caches.match("pages/404.html");
          }
          if (isPage2) {
            return networkResponse;
          }

          return caches.open(CacheName).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          return caches.match("pages/offline.html");
        });
    }),
  );
});
