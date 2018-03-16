define(['searchbox/version'], function(version){
    require.config({
        paths: {
            'bbc-search/searchbox-app': '//search.files.bbci.co.uk/searchbox-app/'+version+'/app.min'
        },
    });
    require(['bbc-search/searchbox-app', 'istats-1', 'searchbox/accordian'], function (App, istats, accordian) {
        var config = {
            istats: istats,
            query: getParameterByName('q'),
            closeHandler: closeHandler,
            changeHandler: accordian,
            isResponsive: !window.searchboxIEVersion,
        }, InputWatchIntervalId;

        for (var field in window.SEARCHBOX) {
          config[field] = window.SEARCHBOX[field];
        }
        var searchboxApp = new App(config);
        searchboxApp.setQueryWithOutCallbacks(getParameterByName('q'));
        applyTouchClasses();
        setEventListeners();

        var input = getInputElement();
        if (!input.value) {
            input.focus();
        }

        function getInputElement() {
            return document.getElementById('se-searchbox-input-field');
        }

        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        function touchEnabled() {
            if (
                ('ontouchstart' in window) ||
                (window.DocumentTouch && document instanceof window.DocumentTouch) ||
                (window.hasOwnProperty &&
                    (
                        window.hasOwnProperty('ontouchstart') ||
                        (window.DocumentTouch && document instanceof window.DocumentTouch) ||
                        navigator.msMaxTouchPoints
                    )
                )
            ) {
                return true;
            }
            // Fallback for certain samsung devices that fail above but pass below... :/
            if ('ontouchstart' in window) {
                return true;
            }
            return false;
        }

        function applyTouchClasses() {
            if (touchEnabled()) {
                document.documentElement.className += ' se-touch';
            } else {
                document.documentElement.className += ' se-no-touch';
            }
        }

        function watchInput(input) {

            var oldval = input.value;
            function watch() {
                if (input.value !== oldval) {
                    oldval = input.value;
                    clearInterval(InputWatchIntervalId);
                    handleInput(input);
                }
            }
            InputWatchIntervalId = setInterval(watch, 100);
        };

        function handleInput(target) {
            var input = target;
            var drawerInput = getInputElement();
            drawerInput.focus();
            drawerInput.value = input.value;
            input.value = '';
            searchboxApp.setQuery(drawerInput.value);
            ieFocus(drawerInput);
        };

        function setEventListeners() {
            var inputElm = document.getElementById('orb-search-q');
            if (document.addEventListener) {
                inputElm.addEventListener('focus', function () {
                    watchInput(inputElm);
                });
                inputElm.addEventListener('blur', function () {
                    clearInterval(InputWatchIntervalId);
                });
            }
            else if (document.attachEvent) {
              inputElm.attachEvent('onfocus', function () {
                  watchInput(inputElm);
              });
              inputElm.attachEvent('onblur', function () {
                  clearInterval(InputWatchIntervalId);
              });
            }
        }

        // IE8/9 - setting focus on the pre-rendered input means that the
        // react component doesn't appear to bind until the focus is lost, at
        // which point the events are bound. To fix this we need to blur the input
        // once the app has loaded and re-focus. This will allow React to bind to the input.
        function ieFocus(drawerInput) {
            if (!window.searchboxIEVersion) return;
            drawerInput.blur();
            drawerInput.focus();
        }

        function closeHandler() {
            getInputElement().focus();
        }
    });
});
