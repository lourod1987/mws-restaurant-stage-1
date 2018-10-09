console.log('Service Worker');

const cachedFiles = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg'
];

self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open('v1.0').then( cache => cache.addAll(cachedFiles))
    );
});

self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then( response => {
            if (response) {
                console.log(`${evt.request} is already in cache`);
                return response;
            } else {
                console.log(`${evt.request} is not found in cache. Fetching now.`);
                return fetch(evt.request)
                    .then( response => {
                        let responseCopy = response.clone();
                        caches.open('v1.0').then( cache => {
                            cache.put(evt.request, responseCopy);
                        })
                        return response;
                    })
                    .catch( error => console.log(error));
            }
        })
    );
});