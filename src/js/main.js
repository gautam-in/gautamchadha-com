'use strict';
(function (window) {
    
     (function() {
        // helpers
        var regExp = function(name) {
            return new RegExp('(^| )'+ name +'( |$)');
        };
        var forEach = function(list, fn, scope) {
            for (var i = 0; i < list.length; i++) {
                fn.call(scope, list[i]);
            }
        };

        // class list object with basic methods
        function ClassList(element) {
            this.element = element;
        }

        ClassList.prototype = {
            add: function() {
                forEach(arguments, function(name) {
                    if (!this.contains(name)) {
                        this.element.className += this.element.className.length > 0 ? ' ' + name : name;
                    }
                }, this);
            },
            remove: function() {
                forEach(arguments, function(name) {
                    this.element.className =
                        this.element.className.replace(regExp(name), '');
                }, this);
            },
            toggle: function(name) {
                return this.contains(name) 
                    ? (this.remove(name), false) : (this.add(name), true);
            },
            contains: function(name) {
                return regExp(name).test(this.element.className);
            },
            // bonus..
            replace: function(oldName, newName) {
                this.remove(oldName), this.add(newName);
            }
        };

        // IE8/9, Safari
        if (!('classList' in Element.prototype)) {
            Object.defineProperty(Element.prototype, 'classList', {
                get: function() {
                    return new ClassList(this);
                }
            });
        }

        // replace() support for others
        if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {
            DOMTokenList.prototype.replace = ClassList.prototype.replace;
        }
    })();

    if ( 'serviceWorker' in navigator ) {
        navigator.serviceWorker.register( '/sw.js', { scope: '/' } ).then( function( reg ) {
            if( reg.installing ) {
                console.log( 'Service worker installing' );
            } else if ( reg.waiting ) {
                console.log( 'Service worker waiting' );
            } else if ( reg.active ) {
                console.log( 'Service worker active' );
            }
        } ).catch( function( error ) {
            console.error( 'Registration failed with ' + error );
        } );
    }
    
    var API = (function () {

        var cache = {},
            data = {},
            selectors = {
                fixedClass: 'is-fixed'
            };

        function initializeAPI () {
            cache.header = document.querySelector( '.header' );
            cache.body = document.querySelector( 'body' );
            data.headerTop = 30;
            data.classAdded = false;
            if ( false === navigator.onLine ) {
                cache.body.classList.add( 'offline' );
            }
        }

        function bindEvents () {
            window.addEventListener( 'scroll', handleWindowScroll );
        }

        function handleWindowScroll () {
            var windowTop = window.scrollY;
            if ( windowTop >= data.headerTop ) {
                if ( false === data.classAdded ) {
                    cache.body.classList.add( selectors.fixedClass );
                    data.classAdded = true;
                }
            } else {
                if ( true === data.classAdded ) {
                    cache.body.classList.remove( selectors.fixedClass );
                    data.classAdded = false;
                }
            }
        }

        function handleOffline() {
            cache.body.classList.add( 'offline' );
        }

        function handleOnline() {
            cache.body.classList.remove( 'offline' );
        }

        return  {
            init: initializeAPI,
            bind: bindEvents,
            handleOffline: handleOffline,
            handleOnline: handleOnline
        }
    }());
    
    window.document.addEventListener( 'DOMContentLoaded', function() {
        API.init();
        API.bind();
        window.addEventListener('online', API.handleOnline );
		window.addEventListener('offline', API.handleOffline );
    } );
}(window));