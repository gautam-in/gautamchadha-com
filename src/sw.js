( function( sw ) {
    sw.addEventListener( 'install', function( event ) {
        event.waitUntil(
            caches.open( 'v1' ).then( function( cache ) {
                return cache.addAll( [
                    '/',
                    '/index.html',
                    '/css/style.css',
                    '/css/style.css.min',
                    '/js/main.js'
                ] );
            } )
        );
        sw.addEventListener( 'fetch', function( event ) {
            var response;
            event.respondWith(caches.match(event.request).catch(function() {
                return fetch(event.request);
            }).then(function(r) {
                response = r;
                caches.open('v1').then(function(cache) {
                    cache.put(event.request, response);
                });
                return response.clone();
            }).catch(function() {

            }));
        } );
    } );
} ( this ) );