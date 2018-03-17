/* Last Updated 12/19/16 Elvis - Adding Text Drivers to virtual pages*/
/* Updated 12/01/16 Elvis - Adding Segvar Tracking for 141 Ads and Lazy Loading 141*/
/* Updated 11/21/16 Elvis - Changing 141 logic to avoid collision */
/* Updated 11/17/16 JS - add 300x1050 and 300x600 sizes to 910 on MTV pages */
/* Updated 11/13/16 SC - D&D responsive ads */
/* Updated 10/20/16 JS - First pass of edits for D&D responsive ads */
/* Updated 10/12/16 JS - add 300x400 size to 1122 pos mobile */
/* Updated 9/22/16 JS - Hack to shut off 1520 and 1122 swap on interactive quiz, case challenge, and article */
/* Updated 9/9/16 JS - Set level 2 ad unit for MedscapeTV & Introduced new mobile pos and desktop pos sizes for MTV & Stick Vlas MTV*/
/* Updated 8/14/16 by Elvis  Updating in-language 1st level dfp ad units */
/* Updated 8/9/16 by Elvis  Adding PBS and PBP values to AD call during virtual refresh*/
/* Updated 8/3/16 by KJL - Serve 300x250 ads as interstitial slide in mobile slideshows */
/* Updated 8/3/16 by Elvis Removing Testing Target value "s_test" */


/* Start Shared consumer framework */
// webmd.ads2.js
// DEPENDENCIES: jQuery
// This library is used on WebMD, Boots, O&O, and Medscape
var googletag, webmd;

// Create webmd object if it doesn't already exist
webmd = window.webmd || {};

// NOTE: developers should not directly call google code, they should only use functions in webmd.ads namespace.  If
// additional functionality is needed, it should be added to webmd.ads namespace so we can have a single interface into
// the google code.

// Set up array of functions to run after the Google code loads.
// google.cmd is the array of functions to run.
// You must use google.cmd.push() to add functions (don't do this directly, use webmd.ads.googleDefer instead).
// After the Google code loads, it replaces the push() function so instead of adding to the array,
// it runs the function immediately.
googletag = googletag || {};
googletag.cmd = googletag.cmd || [];


/**
 * Ads framework
 */
webmd.ads2 = {


    /**
     * Storage for ads that have been defined.
     * @private
     */
    ads: {},


    /**
     * Ad target values for all ads on the page.
     * This is an array of strings that will be concatenated to form the ad target.
     * For example, if you want the ad slot /1234/travel/asia/food, then the array
     * would be ['travel','asia','food'].
     *
     * <p>This parameter can be overridden, or more values can be added, but you
     * must do so before calling defineAd()</p>
     *
     * @example
     * // Override the ad target
     * webmd.ads2.adTarget = ['consumer', 'rxlist'];
     *
     * @example
     * // Override the second part of the target
     * webmd.ads2.adTarget[1] = 'rxlist';
     *
     * @example
     * // Set sensitive topic exclusion for consumer webmd
     * webmd.ads2.adTarget[2] = 'st-conwbmd';
     */
    adTarget: ['consumer', 'webmd'],


    /**
     * Google network code that is sent with each ad.
     * This, along with the adTarget parameter, is used when defining the ad slots.
     */
    networkCode: function () {
        var networkId = '4312434'; //default live network id
        if (window.location.href.indexOf(".proddev.") > -1)
            networkId = '8668145' //sandbox network id
        return networkId;
    },

    /**
     * Storage for the page targets that have been set for all ads.
     * We don't technically need to save these, but this can be used
     * for reference after ads have been set up.
     * In particular it is used to determine when certain ads should be
     * blocked due to "safe select" requirements.
     *
     * @example
     * if (webmd.ads2.pageTargets.pt == '1623') { ... }
     */
    pageTargets: {},


    /**
     * Storage for the page exclusions that have been set for all ads.
     * We don't technically need to save these, but this can be used
     * for reference after ads have been set up.
     * In particular it is used to determine when certain ads should be
     * blocked due to "safe select" requirements.
     *
     * @example
     * if (webmd.ads2.pageExclusions.age11)) { ... }
     */
    pageExclusions: {},


    /**
     * Size overrides for individual ad positions.
     * This is an object with key/value pairs where the key is a pos value,
     * and the value is a size array like those passed into webmd.ads2.defineAd()
     *
     * <p>
     * This can be used to set default sizes for all the ad positions
     * so you do not have to pass the size when you define the ad.
     * </p>
     *
     * <p>
     * It can also be used to define size overrides, in case you define an
     * ad with a set of sizes, but on certain pages you want to override those sizes.
     * In this case you must set the size override before defining the ad.
     * </p>
     *
     * <p>
     * Note: if a size is set here, any size passed to defineAd() is ignored.
     * </p>
     *
     * @example
     * // Set sizes for various ad positions
     * webmd.ads2.sizes = {
     *   101: [ [300, 250], [300,600] ],
     *   121: [ 300, 250 ]
     * };
     * // ...
     * webmd.ads2.defineAd({pos:101, id:'ads2-pos-101'});
     *
     * @example
     * // Override the size for a single ad on this page
     * webmd.ads2.sizes['101'] = [300,250];
     */
    sizes: {

        // posValue: sizesArray,
        // ...

    },


    /*==================================================
     * START OF FUNCTIONS
     *==================================================*/

    /**
     * Function to call once to initialize the ads framework.
     * Can be done at the top or bottom of the page.
     * Calling this multiple times will have no ill effects.
     */
    init: function () {

        // Do a check to make sure nobody tries to run init twice,
        // because that might really screw things up.
        if (this.init.flag) {
            return;
        }
        this.init.flag = true;

        // Load the javascript library from google
        this.googleLoad();

        // Allow this function to be chained
        return this;
    },


    /**
     * Function to tell if init() has already been called.
     * You can use this to determine if DFP ads are defined on the page.
     * NOTE: this must be called after webmd.ads2.init() has been called,
     * otherwise it will report that DFP ads are not on the page.
     * @returns Boolean
     */
    isInitialized: function () {
        return Boolean(this.init.flag);
    },


    /**
     * Add a function to the google asynchronous command queue.
     *
     * @param Function f Function to run after google code has loaded.
     * @param Number i Index for the new function to be pushed into.
     */
    googleDefer: function (f) {
        // Push the function onto the command array so google can run it later.
        //
        // NOTE: After the google code loads, it actually overrides the push() function
        // so instead of adding to the array, it runs the function immediately.
        // Because of this you should only modify the array using the push() function,
        // you should not attempt to add functions to the queue any other way.
        googletag.cmd.push(f);

        // Allow this function to be chained
        return this;
    },


    /**
     * Call this once to load the google code.
     * For best results call this near the top of the page.
     * This function is called automatically by init()
     */
    googleLoad: function () {
        var gads, node, useSSL;

        // Asynchronously load the google code
        gads = document.createElement("script");
        gads.async = true;
        gads.type = "text/javascript";
        useSSL = "https:" === document.location.protocol;
        gads.src = (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
        node = document.getElementsByTagName("script")[0];
        node.parentNode.insertBefore(gads, node);

        // Allow this function to be chained
        return this;
    },


    /**
     * Set a page-level key/value target that will be used for all ads.
     * This function can set a single key/value, or multiple key/value pairs.
     * The value can be a single value, or an array of values.
     *
     * @param String|Object key The name of the key to add, or an object containing multiple key/value pairs.
     *
     * @param String|Array [value] If the "key" parameter is a string, then this is the value for the single key to set.
     * If the "key" parameter is an object, this parameter is not used.
     * The value can be a string, or an array of values.
     * The value cannot be a number, however it can be an array of numbers (possible bug in google code?)
     *
     * @example
     * // Set a single key/value
     * webmd.ads2.setPageTarget('xpg', '1234');
     *
     * @example
     * // Set a single key with multiple values
     * webmd.ads2.setPageTarget('xpg', ['1234', '5678']);
     *
     * @example
     * // Set multiple key/value pairs all at once
     * webmd.ads2.setPageTarget({xpg:'1234', gender:'male', m:[1,2,5]});
     */
    setPageTarget: function (key, value) {

        var self;

        self = this;

        // We can't call the google code until it is loaded,
        // so we'll add a command to the queue to run later
        self.googleDefer(function () {

            // Check if "key" is an object
            if ($.isPlainObject(key)) {

                // Loop through multiple key/value pairs
                $.each(key, function (key, value) {

                    value = String(self.fixTarget(key, value));
                    // Add the key and value
                    // Note: for some reason the DFP code does not allow
                    // numeric values, so cast the value to a String
                    googletag.pubads().setTargeting(key, value);

                    // Save the key and value for later reference
                    self.pageTargets[key] = value;
                });

            } else { // Add a single key and value

                value = String(self.fixTarget(key, value));
                googletag.pubads().setTargeting(key, value);
                self.pageTargets[key] = value;

            }

        });

        // Allow this function to be chained
        return this;
    },
    fixTarget: function (key, value) {

        // Fix some of the targets because runtime sends some extraneous text that we don't want
        if (key === 'env') {
            value = value.replace(/&amp;env=/, '');
        }
        if (key === 'leaf') {
            value = value.replace(/&amp;leaf=/, '');
        }
        if (key === 'uri') {
            value = decodeURIComponent(value);
        }

        return value;
    },


    /**
     * Set multiple page-level key/value targets that will be used for all ads,
     * based on a URL-encoded string that contains multiple key=value pairs.
     *
     * <p>This function is provided to more easily support legacy systems
     * that are already outputing a URL-encoded string. It should not be used
     * for new code.</p>
     *
     * @param {String} url A URL-encoded value (sort of). This must contain
     * key=value pairs, separated by '&amp;'. Note it will not work if the
     * key=value pairs are separated by '&'.
     *
     * @example
     * webmd.ads2.setPageTargetUrl('key1=val1&amp;key2=val2');
     */
    setPageTargetUrl: function (url) {

        var i, key, keyValueArray, keyValuePairs, value;

        // Make sure url is actually passed in as a string
        url = url || '';

        // Split the string on '&amp;'
        keyValuePairs = url.split('&amp;');

        // Loop through the key=value pairs
        for (i = 0; i < keyValuePairs.length; i++) {

            // Split into [key,value]
            keyValueArray = keyValuePairs[i].split('=');
            key = decodeURIComponent(keyValueArray[0] || '');
            value = decodeURIComponent(keyValueArray[1] || '');

            // If we got a key, set the page target
            if (key) {
                this.setPageTarget(key, value);
            }
        }

        // Allow this function to be chained
        return this;
    },


    /**
     * Sets a "category exclusion" for all ads on the page.
     *
     * <p>Note we currently do not support setting a category exclusion just for a single ad.</p>
     *
     * @param String|Array label The name of the category exclusion label, or an array of names.
     *
     * @example
     * webmd.ads2.setPageExclusion('gen2');
     *
     * @example
     * webmd.ads2.setPageExclusion('gen2', 'age11');
     */
    setPageExclusion: function (label) {

        var self;

        self = this;

        // Turn label into an array if it is not already an array
        label = $.isArray(label) ? label : [label];

        // Wait for google code to be loaded
        self.googleDefer(function () {

            // Loop through the array of labels and set a category exclusion for each one
            $.each(label, function (i, label) {
                googletag.pubads().setCategoryExclusion(label);

                // Save the exclusion label for later reference
                self.pageExclusions[label] = true;
            });

        });

        // Allow this function to be chained
        return self;
    },


    /**
     * Sets multiple "category exclusions" based on a concatenated string.
     * This is provided for legacy systems that used to pass a value like
     * "_label1_label2_" to the ad server. This function will break apart
     * the string into multiple exclusion labels.
     *
     * @param String labels A string containing one or more labels separated
     * by an underscore character.
     *
     * @example
     * webmd.ads2.setPageExclusionUnderscore('_gen2_m32_h16_o92_age11_age121_age122_');
     */
    setPageExclusionUnderscore: function (labels) {

        var self;

        self = this;

        // Make sure we actually got a string
        labels = labels || '';

        $.each(labels.split('_'), function (i, label) {

            if (label) {
                self.setPageExclusion(label);
            }
        });

        // Allow this function to be chained
        return this;
    },


    /**
     * Define an ad slot on the page. Generally you will have already created a div on the page as the ad placeholder,
     * then call this function and pass in the id of that div.    However, you can call this function if necessary before
     * the div has been created.
     *
     * @param Object settings A set of key/value pairs that configures the ad.
     *
     * @param Boolean [settings.collapseAfter] Set this to true if you want the ad to collapse when
     * the ad server returns a blank. If this is not specified then the ad will use
     * the page default behavior (which is to not collapse the ad).
     *
     * @param Boolean [settings.collapseBefore] Set this to true if you want the ad to be
     * collapsed immediately. The ad will expand if the ad server returns an ad.
     * If this is not specified then the ad will use the page default behavior
     * (which is to not collapse the ad).
     *
     * @param String settings.id The id attribute for the ad placeholder div.
     * Each ad must have a unique id. For example, 'ads2-pos-5000'.
     *
     * @param Boolean [settings.immediate=false] Immediately display the ad you defined.
     * This only has an effect if you are defining a new ad after the initial ad call has already been made.
     * It refreshes only the ad that is being defined. If you need to refresh other ads on the
     * page you should not use this.
     *
     * @param Object [settings.keys] Optional set of key/value pairs to set targeting only for
     * this individual ad. Note we typically do not set targeting for individual ads,
     * so use setPageTarget() if you want to set a global target used by all ads.
     *
     * @param String settings.pos The POS value for the ad. Each ad on the page must have a POS
     * value that is unique on the page. For example, '5000'.
     *
     * @param Object [settings.refresh=true] Set this to false if this ad should
     * not be refreshed when calling the webmd.ads2.refresh() function.
     *
     * @param Array [settings.sizes=webmd.ads2.sizes] An array of sizes for the ad.
     * This can be width height values, or multiple width/height pairs.
     * For example, [350,250] or [[300,250],[300,600]].
     * If a value is set within webmd.ads2.sizes for the POS value of this ad, then this parameter
     * is ignored, and the value within webmd.ads2.sizes is used instead.
     * A size must be defined using one of these methods or an error will occur.
     *
     * @example
     * // Ad that supports a single size
     * webmd.ads2.defineAd({id:'ads2-pos-5000', pos:5000, sizes:[300,250]});
     *
     * @example
     * // Ad that supports two different sizes
     * webmd.ads2.defineAd({id:'ads2-pos-5000', pos:5000, sizes:[[300,250], [300,600]]});
     *
     * @example
     * // Create an ad that should not be refreshed
     * webmd.ads2.defineAd({id:'ads2-pos-5000', pos:5000, sizes:[300,250], refresh:false});
     *
     * @example
     * // Set default ad size so the size does not have to be supplied in the defineAd function
     * webmd.ads2.sizes['5000'] = [300,600];
     * // ...
     * webmd.ads2.defineAd({id:'ads2-pos-5000', pos:5000});
     *
     * @example
     * // Override an ad size
     * webmd.ads2.sizes['5000'] = [300,600];
     * // ...
     * webmd.ads2.defineAd({id:'ads2-pos-5000', pos:5000, sizes:[300,250]});
     * // Result: ad will use sizes [300,600] instead of [300,250]
     *
     * @example
     * // Define a new ad after the other ads have already loaded,
     * // and immediately load that ad plus refresh the other ads
     * webmd.ads2.defineAd({id:'my-new-ad', pos:121, sizes:[300,250]}).refresh()
     *
     * @example
     * // Define a new ad after the other ads have already loaded,
     * // and immediately load only that ad
     * webmd.ads2.defineAd({id:'my-new-ad', pos:121, sizes:[300,250]}).refresh({id:'my-new-ad'})
     */
    defineAd: function (settings) {

        var ignore, self, sizes;

        self = this;

        // Make sure settings is an object
        settings = settings || {};

        // Check if this ad should be ignored based on a global override.
        // Uses a global variable "ads2_ignore", which must be an object
        // where the key is the pos value of the ad that should be ignored,
        // and the value is a boolean (true=ignore the ad).
        // This is used by certain products such as Answers that
        // need to deploy a single template with multiple ads,
        // then show or hide various ads based on back-end logic.
        //
        // Examples:
        //
        // // Ignore ad position 101
        // var ads2_ignore = { 101: true };
        //
        // // Ignore all the ads
        // var ads2_ignore = { all:true };


        ignore = window.ads2_ignore || {};

        if (ignore.all || ignore[settings.pos]) {
            return;
        }

        // Check if sizes were provided.
        // If webmd.ads2.sizes contains sizes for this POS value, use that to override the size.
        // Otherwise use the sizes that are passed into this function settings.sizes
        settings.sizes = self.sizes[settings.pos] || settings.sizes;

        // Check for required settings
        if (!(settings.id && settings.sizes && settings.pos)) {
            throw ('Missing id, pos, or sizes for defineAd');
        }

        // Save these settings because we will use them later to actually display the ads
        self.ads[settings.id] = settings;

        // Add to the google command queue
        self.googleDefer(function () {


            //webmd.debug('define ad');

            var adUnit, adSlot;

            adUnit = '/' + self.networkCode() + '/' + self.adTarget.join('/');

            // Create the ad slot and set the "pos" key
            adSlot = googletag.defineSlot(adUnit, settings.sizes, settings.id)

            // Ads can have different services associated with them, so add a service
                .addService(googletag.pubads())

                // Set the pos key for this individual ad
                .setTargeting('pos', settings.pos);

            // Save the ad slot for future use when we refresh ads
            settings.slot = adSlot;

            // Set extra individual targeting keys if any were provided
            if (settings.keys) {
                $.each(settings.keys, function (key, value) {
                    adSlot.setTargeting(key, value);
                });
            }

            // Override the page-default collapse behavior
            // (only if one of these is set to true)
            if (settings.collapseAfter || settings.collapseBefore) {
                adSlot.setCollapseEmptyDiv(settings.collapseAfter, settings.collapseBefore);
            }

            // Special case: if we define an ad after webmd.ads2.display() has been called,
            // then we need to tell DFP to display the ad immediately.
            // Note this does not make a call to fetch the ad from DFP unless you set
            // the "immediate" flag, it only initializes the ad space.
            // Otherwise you must call refresh() to fetch the ad
            if (self.display.flag) {

                googletag.display(settings.id);

                // Determine if we should immediately fetch this new ad.
                // If we do not immediately fetch the ad, you must later
                // call refresh() to refresh this ad (or refresh all ads).
                if (settings.immediate) {
                    self.refresh({
                        id: settings.id
                    });
                }
            }
        });
        // Allow this function to be chained
        return this;
    },

    slotRenderEnded: function () {
        this.googleDefer(function () {
            googletag.pubads().addEventListener('slotRenderEnded', function (event) {
                if (typeof webmd.ads2.slots !== 'undefined') {
                    totCalledSlots = webmd.ads2.slots.length;
                } else {
                    var totCalledSlots = 0;
                    for (var slotK in webmd.ads2.ads) {
                        if (webmd.ads2.ads.hasOwnProperty(slotK)) {
                            ++totCalledSlots;
                        }
                    }
                }
                slotCount++;
                if (totCalledSlots == slotCount) {
                    slotCount = 0;
                    $(document).trigger("dfpRenderComp");
                }
            });
        });

        // Allow this function to be chained
        return this;

    },

    /**
     * Disables the initial fetch of ads from Google when the page is first loaded.
     * Calls to refresh() can be used later to display the ads.
     * This must be called before display() is called so it can block the initial load.
     */
    disableInitialLoad: function () {

        this.googleDefer(function () {
            googletag.pubads().disableInitialLoad();
        });

        // Allow this function to be chained
        return this;
    },


    /**
     * used to store the state of display function
     */
    displayCalled: false,
    displayCalledCount: 0,

    /**
     * Make the ad call to get all ads, then display the ads.
     * This must be called after all ads have been defined on the page
     * with a call to defineAd() for each one.
     *
     * <p>If you call disableInitialLoad() before calling this function, then the ads will be initialized but will not
     * be loaded and displayed. Then you can call refresh() to later display the ads. This is useful in cases where you
     * need to wait for some other event (for example, to set targeting values) before you load the ads.</p>
     */
    display: function () {

        var self;

        self = this;

        self.googleDefer(function () {

            //display has been called
            self.displayCalled = true;
            //increment the count
            self.displayCalledCount++;

            //trigger DFP_DISPLAY_CALLED only first time the display is called
            if (self.displayCalledCount === 1) {
                $(document).trigger('DFP_DISPLAY_CALLED');
            }

            //webmd.debug('display');

            // Directs the publisher ads service to make a single request
            // when fetching content for multiple ad slots.
            // This should be called prior to enabling the service.
            googletag.pubads().enableSingleRequest();

            // Enables all Google Publisher Tag services that have been defined for ad slots on the page.
            // This is only needed once per page but including it multiple times will not cause any harm.
            googletag.enableServices();

            // Call display on the ads.
            // Since we are doing enableSingleRequest, the call to display() the first add will make
            // the call to DFP to fetch all the ads. But we must still call display() for each ad on the page.
            $.each(self.ads, function (id, adSettings) {

                googletag.display(id);

                // Set a flag so we know that "display" has already been called.
                // This is used when we add another ad on the page: if display has already been called
                // we must call display() on the ad right when we define the ad.
                self.display.flag = true;
            });

        });

        // Allow this function to be chained
        return this;
    },


    /**
     * Refresh some or all ads on the page. The ads must have been created with a call to webmd.ads2.defineAd()
     *
     * @param Object [settings] A set of key/value pairs that configure which ads to refresh.
     *
     * @param Object [settings.keys] Optional set of key/value pairs to set page targeting.
     * Refer to setPageTarget() for more information.
     *
     * @param String|Array [settings.id] The id of an ad to refresh,
     * or an object with several ad ids to refresh.
     * If this parameter is used, then only the ads specified here will be refreshed.
     * If the id is in this list, then even if the ad was defined with refresh:false setting,
     * it will force a refresh.
     *
     * @param String|Array [settings.idSkip] The id of an ad to exclude from refresh,
     * or an object with several ad ids to exclude from refresh.
     * This parameter cannot be used if the settings.id parameter is used.
     *
     * @param String|Array [settings.pos] The POS value of an ad to refresh,
     * or an object with several ad positions to refresh.
     * If this parameter is used, then only the ads specified here will be refreshed.
     * If the pos value is in this list, then even if the ad was defined with refresh:false setting,
     * it will force a refresh.
     *
     * @param String|Array [settings.posSkip] The POS value of an ad to exclude from refresh,
     * or an object with several ad positions to exclude from refresh.
     * This parameter cannot be used if the settings.pos parameter is used.
     *
     * @example
     * // Refresh all ads except those that were defined with refresh:false
     * webmd.ads2.refresh()
     *
     * @example
     * // Refresh all ads except those that were defined with refresh:false,
     * // and change the page targeting before refreshing the ads
     * webmd.ads2.refresh({keys:{xpg:"1012"}})
     *
     * @example
     * // Refresh a single ad position
     * webmd.ads2.refresh({pos:5000});
     *
     * @example
     * // Refresh several ad positions
     * webmd.ads2.refresh({pos:{5000:true,5001:true}});
     *
     * @example
     * // Refresh all ads except for one ad position
     * webmd.ads2.refresh({posSkip:5000});
     *
     * @example
     * // Refresh all ads except for several ad positions
     * webmd.ads2.refresh({posSkip:{5000:true,5001:true}});
     */
    refresh: function (settings, correlatorBoo) {
        var self;

        self = this;

        // Make sure this is an object in case nothing was passed in
        settings = settings || {};

        function invokeRefreshLogic() {

            //webmd.debug('refresh');

            // Create an array of slots to send to refresh function.
            self.slots = [];

            // Set page targeting if new keys were provided
            if (settings.keys) {
                self.setPageTarget(settings.keys);
            }

            // Loop through all the ads that were defined using webmd.ads2.defineAd()
            // so we can gather an array of ads to refresh
            $.each(self.ads, function (id, adSettings) {

                var pos, slot;

                slot = adSettings.slot;
                pos = adSettings.pos;

                // Check if we should refresh only certain ad positions
                // Note: you cannot use both settings.pos and settings.id
                if (typeof settings.pos !== 'undefined') {

                    // Check of the pos values were provided as an object or a single pos
                    if ($.isPlainObject(settings.pos)) {

                        // It is an object, so see if the pos value of this ad is in the list
                        if (settings.pos[pos] === true) {
                            // Show this ad position
                            self.slots.push(slot);
                        }

                    } else {

                        // settings.pos is a single ad position,
                        // so only refresh that one position
                        if (String(pos) === String(settings.pos)) {
                            self.slots.push(slot);
                        }
                    }

                    // Check if we should refresh only certain ad ids
                    // Note: you cannot use both settings.pos and settings.id
                } else if (typeof settings.id !== 'undefined') {

                    // Check of the pos values were provided as an object or a single pos
                    if ($.isPlainObject(settings.id)) {

                        // It is an object, so see if the pos value of this ad is in the list
                        if (settings.id[id] === true) {
                            // Show this ad position
                            self.slots.push(slot);
                        }

                    } else {

                        // settings.id is a single ad id,
                        // so only refresh that one ad
                        if (String(id) === String(settings.id)) {
                            self.slots.push(slot);
                        }
                    }

                } else {

                    // There was not a list of ads to refresh, so we will
                    // refresh each ad unless it was defined as a non-refreshable ad,
                    // and unless it was listed in the posSkip parameter.

                    // If this ad was defined with refresh:false then it should not be refreshed.
                    // Refer to defineAd() for more info.
                    if (adSettings.refresh === false) {
                        // Move on to the next ad in the list
                        return true;
                    }

                    // If this ad pos is in the settings.posSkip list then it should not be refreshed
                    if (typeof settings.posSkip !== 'undefined') {

                        // Check of the posSkip values were provided as an object or a single pos
                        if ($.isPlainObject(settings.posSkip)) {

                            if (settings.posSkip[pos] === true) {
                                // Skip this ad position
                                return true;
                            }

                        } else {

                            // settings.posSkip is a single ad position so only skip that one position
                            if (String(pos) === String(settings.posSkip)) {
                                // Skip this ad position
                                return true;
                            }
                        }
                    }

                    // If this ad id is in the settings.idSkip list then it should not be refreshed
                    if (typeof settings.idSkip !== 'undefined') {

                        // Check of the idSkip values were provided as an object or a single id
                        if ($.isPlainObject(settings.idSkip)) {

                            if (settings.idSkip[id] === true) {
                                // Skip this ad
                                return true;
                            }

                        } else {

                            // settings.idSkip is a single ad id so only skip that one ad
                            if (String(id) === String(settings.idSkip)) {
                                // Skip this ad
                                return true;
                            }
                        }
                    }

                    // If we get here, then the ad should not be skipped,
                    // so add it to the list of ads to be refreshed
                    self.slots.push(slot);
                }
            });
            if (correlatorBoo == null) {
                googletag.pubads().refresh(self.slots);
            } else {
                googletag.pubads().refresh(self.slots, {changeCorrelator: correlatorBoo});
            }
            //webmd.debug('refresh - inside timeout');

        }

        //if display was called before this,
        //fire invokeRefreshLogic
        if (self.displayCalled) {
            //webmd.debug('invoking refresh not using event');
            invokeRefreshLogic();
        }

        //otherwise, wait for DFP_DISPLAY_CALLED and then
        //fire invokeRefreshLogic
        else {
            $(document).on('DFP_DISPLAY_CALLED', function () {
                //webmd.debug('invoking refresh using event');
                //using setTimeout to skip curerent frame before invoking
                setTimeout(invokeRefreshLogic, 1);
            });
        }

        // Allow this function to be chained
        return this;

    }
};
/* End Shared consumer framework */

/* Start of Prof Ads Framework */
var profads;
profads = window.profads || {};
/* Variable for the Current Page URL as we use this data many times */
var pageCurrentURL = window.location.href.toLowerCase();
var s_pageview_id;
var AjaxTargetKeys;
var slotCount = 0;

// PPE-51921 - true enables swap rules for 1520 and 1122
var bUse_1520_1122_SwapRules = ($.inArray(DFPTargetKeys.pageSegVars.cg, ["502", "503", "504", "505", "508"]) != -1 || pageCurrentURL.indexOf('viewarticle') !== -1 || DFPTargetKeys.webSegVars.pc === 'hp') && DFPTargetKeys.reqHeaders.device == "MOBILE" && (locale == 'us') && true;

/* HACK to block interactive quiz from 1520 and 1122 swap */
var xmlConTyp = $('meta[name=xml-type]').attr("content");

if (xmlConTyp == "interactive quiz" || "case challenge" || "article") {
    bUse_1520_1122_SwapRules = false;
}

/* (END) HACK to block interactive quiz from 1520 and 1122 swap */


/**
 * Prof Ads framework
 */
if (typeof s_responsive_design === 'undefined') {
    var s_responsive_design = false;
}

if (s_responsive_design) {
    if ($.inArray(DFPTargetKeys.pageSegVars.cg, ["501", "502", "503", "504", "505", "508"]) != -1) {
        bUse_1520_1122_SwapRules = false;
    }
}

profads.ads2 = {
    profAdsSettings: {
        proGate: true,
        llGate: true,
        AdPrediction: true
    },
    /**
     * Function to call once to initialize the ads framework.
     * Can be done at the top or bottom of the page.
     */
    init: function () {

        var self = this;
        // Do a check to make sure nobody tries to run init twice,
        if (self.init.flag) {
            return;
        }
        self.init.flag = true;

        GenPVID();



        self.SetProfSizes();

        profads.ads2.ProfAdsIgnore();

        if (DFPTargetKeys.reqHeaders.domainCategory != 'cme' && DFPTargetKeys.reqHeaders.device == 'PC'
            && DFPTargetKeys.webSegVars.pc.indexOf('slideshow') !== -1) {
            $(document).ready(function () {
                // Init from shared WebMD framework to load the google code and set up
                webmd.ads2.init();

                webmd.ads2.slotRenderEnded();

                if (self.KillSwitch()) {
                    self.MakeAdCall();
                }
            });
        }
        else {
            // Init from shared WebMD framework to load the google code and set up
            webmd.ads2.init();

            webmd.ads2.slotRenderEnded();

            if (self.KillSwitch()) {
                self.MakeAdCall();
            }
        }
    },
    getBrkPnt: function() {
        if (window.innerWidth <= 767) {
            return "320-767";
        }else if(window.innerWidth >= 768 && window.innerWidth <= 1023 ) {
            return "768-1023";
        } else if(window.innerWidth >= 1024 && window.innerWidth <= 1280) {
            return "1024-1279";
        } else {
            return "1280-greater";
        }
    },
    SetProfSizes: function () {
        //Init size setting.  Possible to override on page specific JS templates before display
        webmd.ads2.sizes = {
            '101': [
                [728, 90],
                [970, 250],
                [970, 90]
            ],
            /*[970,90], */
            '104': [
                [728, 90],
                [970, 90],
                [970, 250]
            ],
            /*  */
            '141': [
                [728, 90],
                [728, 91]
            ],
            '122': [
                [300, 250],
                [300, 600],
                [300, 350]
            ],
            '910': [
                [1, 2],
                [300, 250],
                [300, 251]
            ],
            '420': [
                [1, 3]
            ],
            '520': [
                [1, 5]
            ],
            '421': [
                [1, 4]
            ],
            '712': [
                [728, 90],
                [970, 90]
            ],
            '124': [
                [300, 250]
            ],
            '126': [
                [300, 250]
            ],
            '2017': [
                [1, 4]
            ],
            '1004': [
                [300, 50],
                [320, 50]
            ],
            '1005': [
                [1, 2],
                [300, 50],
                [300, 51],
                [320, 50],
                [320, 51],
                [300, 251],
                [300, 252]
            ],
            '1122': [
                [300, 250],
                [300, 400]
            ],
            '1712': [
                [300, 250]
            ],
            '1703': [
                [300, 250]
            ],
            '1520': [
                [1, 5],
                [300, 253]
            ],
            '1420': [
                [2, 3]
            ],
            '2122': [
                [300, 250]
            ],
            '2520': [
                [1, 5]
            ],
            '2420': [
                [2, 3]
            ],
            '615': [
                [10, 10]
            ],
            '319': [
                [10, 10]
            ]
        };
        if (pageCurrentURL.indexOf('viewarticle') !== -1 || $.inArray(DFPTargetKeys.pageSegVars.cg, ["502", "503", "504", "505", "508"]) != -1) {
            webmd.ads2.sizes[420] = [
                [1, 3],
                [2, 3]
            ];
        }
        if (pageCurrentURL.indexOf('/mtv/') !== -1) {
            webmd.ads2.sizes[910] = [
                [1, 2],
                [300, 250],
                [300, 251],
                [300, 600],
                [300, 1050]
            ];
        }
        if (pageCurrentURL.indexOf('slideshow') !== -1) {
            webmd.ads2.sizes[1005] = [
                [300, 50],
                [300, 51],
                [320, 50],
                [320, 51]
            ];

        }
        if (($.inArray(DFPTargetKeys.pageSegVars.cg, ["502", "503", "504", "505", "508"]) != -1 || pageCurrentURL.indexOf('viewarticle') !== -1 || DFPTargetKeys.webSegVars.pc === 'hp') && DFPTargetKeys.reqHeaders.device == "MOBILE") {
            webmd.ads2.sizes[1005] = [
                [1, 2]
            ];
            webmd.ads2.sizes[1122] = [
                [300, 250],
                [300, 400],
                [300, 50],
                [300, 51],
                [320, 50],
                [320, 51]
            ];
        }

        if (bUse_1520_1122_SwapRules) {
            webmd.ads2.sizes[1520] = [
                [300, 250],
                [300, 50],
                [300, 51],
                [320, 50],
                [320, 51]
            ];
        }
        if (s_responsive_design) {
            /* Set sizes for emed diesease and condition articles to only pass long form into 420 and 1420 */
            if ($.inArray(DFPTargetKeys.pageSegVars.cg, ["502", "503", "504", "505", "508"]) != -1) {
                webmd.ads2.sizes[420] = [
                    [2, 3]
                ];
                webmd.ads2.sizes[520] = [
                    [2, 3]
                ];
                webmd.ads2.sizes[1420] = [
                    [2, 3]
                ];
                webmd.ads2.sizes[1520] = [
                    [2, 3]
                ];
            }
        }
        return webmd.ads2.sizes;
    },
    KillSwitch: function () {
        var killSwRes = false;
        if (typeof DFPTargetKeys !== 'undefined') {
            var enabledDomains = $.trim(DFPTargetKeys.reqHeaders.enableDomain).split(",");
            $(enabledDomains).each(function (index, value) {
                var tempRegEx = new RegExp(value);
                if ($.trim(DFPTargetKeys.reqHeaders.enableDomain) !== '' && tempRegEx.test(pageCurrentURL)) {
                    killSwRes = true;
                }
            });
            return killSwRes;
        } else {
            profads.ads2.KillSwitchAjax();
        }
    },
    KillSwitchAjax: function () {
        $.ajax({
            url: 'http://www' + profads.ads2.SetSubDOMenv() + '.medscape.com/pagemetadata?outputFormat=json&callback=?',
            dataType: 'json',
            success: function (AjaxReturn) {
                AjaxTargetKeys = AjaxReturn;
                if (typeof AjaxTargetKeys !== 'undefined') {
                    var enabledDomains = $.trim(AjaxTargetKeys.reqHeaders.enableDomain).split(",");
                    $(enabledDomains).each(function (index, value) {
                        var tempRegEx = new RegExp(value);
                        if ($.trim(AjaxTargetKeys.reqHeaders.enableDomain) !== '' && tempRegEx.test(pageCurrentURL)) {
                            profads.ads2.MakeAdCall();
                        }
                    });
                }

            }
        });
    },
    ProfAdsIgnore: function () {
        //Always block the 2122 ad until business needs
        window.ads2_ignore["2122"] = "true";

        if (typeof window.ads2_ignore !== "undefined") {
            setTimeout(function () {
                var ignore = window.ads2_ignore;
                if (ignore.all) {
                    $('.AdUnit').hide();
                } else {
                    var keyPOS = [];
                    $.each(window.ads2_ignore, function (index, value) {
                        keyPOS.push(index);
                    });
                    for (var i = 0; i < keyPOS.length; i++) {
                        $('#ads-pos-' + keyPOS[i].toString()).hide();
                    }
                }
            }, 1000);
        }
        if (s_responsive_design) {
            if ($.inArray(DFPTargetKeys.pageSegVars.cg, ["501", "502", "503", "504", "505", "508"]) != -1) {
                if (DFPTargetKeys.reqHeaders.device == 'MOBILE' || profads.ads2.getBrkPnt() == '320-767') {
                    window.ads2_ignore["101"] = "true";
                    window.ads2_ignore["420"] = "true";
                    window.ads2_ignore["520"] = "true";
                    window.ads2_ignore["910"] = "true";
                    window.ads2_ignore["122"] = "true";
                    window.ads2_ignore["141"] = "true";
                } else if (DFPTargetKeys.reqHeaders.device == 'PC' || DFPTargetKeys.reqHeaders.device == 'IPAD') {
                    window.ads2_ignore["1420"] = "true";
                    window.ads2_ignore["1520"] = "true";
                    window.ads2_ignore["1122"] = "true";
                    window.ads2_ignore["2017"] = "true";
                }
            }
        } else {
            if ($.inArray(DFPTargetKeys.pageSegVars.cg, ["502", "503", "504", "505", "508"]) != -1) {
                window.ads2_ignore["420"] = "true";
                window.ads2_ignore["520"] = "true";
                window.ads2_ignore["1420"] = "true";
                window.ads2_ignore["1520"] = "true";
                window.ads2_ignore["1122"] = "true";
            }
        }
        if (pageCurrentURL.indexOf('viewcollection') != -1 && DFPTargetKeys.reqHeaders.device == "MOBILE") {
            window.ads2_ignore["1005"] = "true";
        }
        if (DFPTargetKeys.lazyLoad != null) {
            if (DFPTargetKeys.lazyLoad.blb != null) {
                if (DFPTargetKeys.lazyLoad.blb && bNews) {
                    window.ads2_ignore["141"] = "true";
                    lazyLoadBlb.init();
                }
            }
        }

        if (bUse_1520_1122_SwapRules) {
            window.ads2_ignore["1122"] = "true";
        }
    },
    adCollideTest: function (adTopPos) {
        console.log(adTopPos.top);
        if (adTopPos.top < 1100) {
            return Boolean(true);
        } else {
            return Boolean(false);
        }
    },
    ProfAdsDisplay: function (DevTypeObj) {

        if (bUse_1520_1122_SwapRules) {

            // unsuppress it
            window.ads2_ignore["1122"] = false;

            // check for 1122 in dom
            $adsPos1122 = $("#ads-pos-1122");

            // if no 1122 in the dom use media unit size when it's defined later
            if ($adsPos1122.length <= 0) {
                webmd.ads2.sizes[1122] = [
                    [300, 250],
                    [300, 50],
                    [300, 51],
                    [320, 50],
                    [320, 51]
                ];
            }

            // if 1122 exist and above 1520, use regular media unit size. Some situations 1122 is above 1522 on reference pages
            else if ($adsPos1122.nextAll("#ads-pos-1520").length > 0) {
                webmd.ads2.sizes[1122] = [
                    [300, 250],
                    [300, 50],
                    [300, 51],
                    [320, 50],
                    [320, 51]
                ];

                // define the 1122 again
                webmd.ads2.defineAd({
                    id: 'ads-pos-1122',
                    pos: '1122',
                    collapseAfter: true
                });
            }

            // if 1122 exist somewhere within the content, use text driver sizes
            else if ($adsPos1122.nextAll("p").length > 0) {
                webmd.ads2.sizes[1122] = [
                    [1, 5],
                    [300, 253]
                ];

                // emedicine / reference articles define the 1122 slot later
                if ($.inArray(DFPTargetKeys.pageSegVars.cg, ["502", "503", "504", "505", "508"]) === -1) {
                    // define the 1122 again
                    webmd.ads2.defineAd({
                        id: 'ads-pos-1122',
                        pos: '1122',
                        collapseAfter: true
                    });
                }
            }

            // if 1122 is not somewhere within content use it's default media unit sizes
            else {
                webmd.ads2.sizes[1122] = [
                    [300, 250],
                    [300, 50],
                    [300, 51],
                    [320, 50],
                    [320, 51]
                ];

                if ($.inArray(DFPTargetKeys.pageSegVars.cg, ["502", "503", "504", "505", "508"]) === -1) {
                    webmd.ads2.defineAd({
                        id: 'ads-pos-1122',
                        pos: '1122',
                        collapseAfter: true
                    });
                }
            }

        }

        if ($.inArray(DFPTargetKeys.pageSegVars.cg, ["502", "503", "504", "505", "508", "501"]) != -1) {
            if (s_responsive_design) {
                webmd.ads2.disableInitialLoad();
                if (typeof ads2_suppress === "undefined") {
                    if (DevTypeObj.isMobile || profads.ads2.getBrkPnt() == '320-767') {

                        $('#plcHold-141').remove();

                        if (window.location.hash == "" || $("#content_" + window.location.hash.split('#')[1]).index() == 0) {

                            // ad placement when no ads load from backend code
                            /*if ($(".refsection_content .AdUnit").length == 0) {
                                var nextAdpos = parseInt($(".inContentAd").eq(0).attr('rel')) + 1;
                                $(".inContentAd[rel='" + nextAdpos + "']").after('<div id="ads-pos-1520" class="AdUnit"></div>');
                                $(".inContentAd[rel='" + (nextAdpos + 1) + "']").after('<div id="ads-pos-1122" class="AdUnit"></div>');
                                $(".inContentAd[rel='" + (nextAdpos + 2) + "']").after('<div id="ads-pos-1420" class="AdUnit"></div>');
                                $(".inContentAd[rel='" + nextAdpos + "']").remove();
                            }*/

                            /*if ($('#ads-pos-1420').length > 0) {
                                webmd.ads2.defineAd({
                                    id: 'ads-pos-1420',
                                    pos: '1420',
                                    collapseAfter: true
                                });
                            } else {
                                // place 1420 if missing on fristload and 1122 is present
                                if ($('.refsection_content #ads-pos-1122').length > 0) {
                                    $(".inContentAd").eq(1).html('<div id="ads-pos-1420" class="AdUnit"></div>');
                                    $(".inContentAd").eq(1).addClass("noAdDiv");
                                    if ($('#ads-pos-1420').length > 0) {
                                        webmd.ads2.defineAd({
                                            id: 'ads-pos-1420',
                                            pos: '1420',
                                            collapseAfter: true
                                        });
                                    }
                                }
                            }*/
                            /*if ($('#ads-pos-1520').length > 0) {
                                webmd.ads2.defineAd({
                                    id: 'ads-pos-1520',
                                    pos: '1520',
                                    collapseAfter: true
                                });
                            }*/
                            /*if ($('#ads-pos-1122').length > 0) {
                                webmd.ads2.defineAd({
                                    id: 'ads-pos-1122',
                                    pos: '1122',
                                    collapseAfter: true
                                });
                            }*/ //else {
                                // If no 1122 of page load add 1122 above sharelinks
                                /*$('<div id="ads-pos-1122" class="AdUnit"></div>').insertBefore($("#rel-links-container"));
                                if ($('#ads-pos-1122').length > 0) {
                                    webmd.ads2.defineAd({
                                        id: 'ads-pos-1122',
                                        pos: '1122',
                                        collapseAfter: true
                                    });
                                }
                                // add noAd marker on last two placeholders in they're appear on same screen
                                if ($(".inContentAd").length != 0 && $("#ads-pos-1122").offset().top - $(".inContentAd").eq(-1).offset().top < $(window).height()) {
                                    $(".inContentAd").eq(-1).addClass("noAdDiv");
                                    if ($("#ads-pos-1122").offset().top - $(".inContentAd").eq(-2).offset().top < $(window).height()) {
                                        $(".inContentAd").eq(-2).addClass("noAdDiv");
                                    }
                                }*/
                            //}

                            webmd.ads2.display();
                            webmd.ads2.refresh();
                            var passIsMob = DevTypeObj.isMobile;
                            profads.ads2.ResizeTemplateAds(passIsMob);

                        } else {
                            delete window.ads2_ignore["1122"];
                            delete window.ads2_ignore["1420"];
                            delete window.ads2_ignore["1520"];
                            window.ads2_ignore["1004"] = "true";
                        }
                    } else {
                        if (document.location.hash == "") {

                            if ($(".refsection_content").first().has('#ads-pos-141').length == 0) {

                                if ($(".refsection_content:eq( 0 ) div.inContentAd:eq( 7 )").length != 0) {

                                    var inAdPos = $(".refsection_content:eq( 0 ) div.inContentAd:eq( 7 )").position();
                                    if (profads.ads2.adCollideTest(inAdPos)) {
										webmd.ads2.setPageTarget('al', 'bl_mid');
                                        $("#rel-links").prepend('<div class="adSpcHolder"><div id="ads-pos-141" class="AdUnit"></div></div>');
                                    } else {
										webmd.ads2.setPageTarget('al', 'bl_high');
                                        $(".refsection_content:eq( 0 ) div.inContentAd:eq( 7 )").append('<div class="adSpcHolder"><div id="ads-pos-141" class="AdUnit"></div></div>');
                                    }

                                } else {
                                    webmd.ads2.setPageTarget('al', 'bl_low');
                                    $("#rel-links").prepend('<div class="adSpcHolder"><div id="ads-pos-141" class="AdUnit"></div></div>');

                                }
                                webmd.ads2.defineAd({id:'ads-pos-141',pos: 141});
                            } else {
                                var inAdPos = $("#plcHold-141").position();
								webmd.ads2.setPageTarget('al', 'bl_high');
                                    if (profads.ads2.adCollideTest(inAdPos)) {
										webmd.ads2.setPageTarget('al', 'bl_mid');
                                        $("#plcHold-141").remove();
                                        $("#rel-links").prepend('<div class="adSpcHolder"><div id="ads-pos-141" class="AdUnit"></div></div>');
                                    }
                                }

                            webmd.ads2.display();
                            webmd.ads2.refresh();
                        } else {
                            window.ads2_ignore["141"] = "true";
                            window.ads2_ignore["520"] = "true";
                            window.ads2_ignore["420"] = "true";
                        }

                        var passIsMob = DevTypeObj.isMobile;
                        profads.ads2.ResizeTemplateAds(passIsMob);

                    }
                }
            } else {

                webmd.ads2.disableInitialLoad();
                if (typeof ads2_suppress === "undefined") {
                    //               window.ads2_ignore = {};
                    if (DevTypeObj.isMobile) {
                        if (window.location.hash == "" || $("#content_" + window.location.hash.split('#')[1]).index() == 0) {
                            window.ads2_ignore = {};
                            // ad placement when no ads load from backend code
                            if ($(".refsection_content .AdUnit").length == 0) {
                                $(".floatingAd").eq(0).after('<div id="ads-pos-1520" class="AdUnit"></div>');
                                var nextAdpos = parseInt($(".floatingAd").eq(0).attr('rel')) + 1;
                                $(".inContentAd[rel='" + nextAdpos + "']").after('<div id="ads-pos-1122" class="AdUnit"></div>');
                                $(".inContentAd[rel='" + (nextAdpos + 1) + "']").after('<div id="ads-pos-1420" class="AdUnit"></div>');
                                if ($(".floatingAd").eq(0).attr('rel') != 0) {
                                    for (i = 0; i < $(".floatingAd").eq(0).attr('rel'); i++) {
                                        $(".inContentAd[rel='" + i + "']").remove();
                                    }
                                }
                                $(".floatingAd").eq(0).remove();
                                $(".inContentAd[rel='" + nextAdpos + "']").remove();
                                //  $(".inContentAd[rel='"+(nextAdpos+1)+"']").remove();
                            }

                            if ($('#ads-pos-1420').length > 0) {
                                webmd.ads2.defineAd({
                                    id: 'ads-pos-1420',
                                    pos: '1420',
                                    collapseAfter: true
                                });
                            } else {
                                // place 1420 if missing on fristload and 1122 is present
                                if ($('.refsection_content #ads-pos-1122').length > 0) {
                                    $(".inContentAd").eq(1).html('<div id="ads-pos-1420" class="AdUnit"></div>');
                                    $(".inContentAd").eq(1).addClass("noAdDiv");
                                    if ($('#ads-pos-1420').length > 0) {
                                        webmd.ads2.defineAd({
                                            id: 'ads-pos-1420',
                                            pos: '1420',
                                            collapseAfter: true
                                        });
                                    }
                                }
                            }
                            if ($('#ads-pos-1520').length > 0) {
                                webmd.ads2.defineAd({
                                    id: 'ads-pos-1520',
                                    pos: '1520',
                                    collapseAfter: true
                                });
                            }
                            if ($('#ads-pos-1122').length > 0) {
                                webmd.ads2.defineAd({
                                    id: 'ads-pos-1122',
                                    pos: '1122',
                                    collapseAfter: true
                                });
                            } else {
                                // If no 1122 of page load add 1122 above sharelinks
                                $('<div id="ads-pos-1122" class="AdUnit"></div>').insertBefore($("#shareLinks"));
                                if ($('#ads-pos-1122').length > 0) {
                                    webmd.ads2.defineAd({
                                        id: 'ads-pos-1122',
                                        pos: '1122',
                                        collapseAfter: true
                                    });
                                }
                                // add noAd marker on last two placeholders in they're appear on same screen
                                if ($(".inContentAd").length != 0 && $("#ads-pos-1122").offset().top - $(".inContentAd").eq(-1).offset().top < $(window).height()) {
                                    $(".inContentAd").eq(-1).addClass("noAdDiv");
                                    if ($("#ads-pos-1122").offset().top - $(".inContentAd").eq(-2).offset().top < $(window).height()) {
                                        $(".inContentAd").eq(-2).addClass("noAdDiv");
                                    }
                                }
                            }
                            webmd.ads2.display();
                            webmd.ads2.refresh();
                            var passIsMob = DevTypeObj.isMobile;
                            profads.ads2.ResizeTemplateAds(passIsMob);

                        } else {
                            window.ads2_ignore["1004"] = "true";
                        }
                    } else {
                        window.ads2_ignore = {};

                        if ($('#ads-pos-420').length > 0) {
                            webmd.ads2.defineAd({
                                id: 'ads-pos-420',
                                pos: '420',
                                collapseAfter: true
                            });
                        }
                        if ($('#ads-pos-520').length > 0) {
                            webmd.ads2.defineAd({
                                id: 'ads-pos-520',
                                pos: '520',
                                collapseAfter: true
                            });
                        }

                        if (window.location.hash == "") {
                            var _elemH = $(".drugdbsectioncontent div").eq(0).height();
                        } else {
                            var _elemH = $("#content_" + window.location.hash.split('#')[1]).height();
                        }
                        if (_elemH + $("#drugdb").height() > 1000) {
                            $("#ads-pos-141").insertBefore("#link_leftcol");
                            webmd.ads2.setPageTarget('al', 'bl_high');
                            webmd.ads2.display();
                            $(document).one('dfpRenderComp', function () {
                                if ($(".rightAd").eq(1).offset().top + $(".rightAd").eq(1).height() >= $("#link_leftcol").eq(0).offset().top) {
                                    var _margin = ($(".rightAd").eq(1).offset().top + $(".rightAd").eq(1).height()) - $("#link_leftcol").eq(0).offset().top;
                                    $("#link_leftcol").css("margin-top", _margin + 30);
                                }
                            });
                        } else {
                            webmd.ads2.setPageTarget('al', 'bl_low');
                            webmd.ads2.display();
                        }
                        webmd.ads2.refresh();
                    }
                }
                //  webmd.ads2.display();
                //  webmd.ads2.refresh();
                if (DevTypeObj.isDesktop || DevTypeObj.isTablet) {
                    profads.ads2.desktopAdPositioning();
                }
            }
        } else {
            if (pageCurrentURL.indexOf('viewarticle') !== -1 && DFPTargetKeys.reqHeaders.domainCategory != 'cme') {
                if (DevTypeObj.isDesktop || DevTypeObj.isTablet) {
                    if ($('#abBottom').position().top > 1000) {
                        $("#ads-pos-141").prependTo("#abBottom");
                        webmd.ads2.setPageTarget('al', 'bl_high');
                        webmd.ads2.display();
                        $(document).one('dfpRenderComp', function () {
                            if ($(".rightAd").eq(1).offset().top + $(".rightAd").eq(1).height() >= $("#abBottom").eq(0).offset().top) {
                                var _margin = ($(".rightAd").eq(1).offset().top + $(".rightAd").eq(1).height()) - $("#abBottom").eq(0).offset().top;
                                $("#abBottom").css("margin-top", _margin + 30);
                            }
                        });
                    } else {
                        webmd.ads2.setPageTarget('al', 'bl_low');
                        webmd.ads2.display();
                    }
                } else {
                    if (!$('#ads-pos-1122').length > 0 && !isMscpApp) {
                        // If no 1122 of page load add 1122 above sharelinks
                        $('<div id="ads-pos-1122" class="AdUnit"></div>').insertBefore($("#abBottom"));
                        if ($('#ads-pos-1122').length > 0) {
                            webmd.ads2.defineAd({
                                id: 'ads-pos-1122',
                                pos: '1122',
                                collapseAfter: true
                            });
                        }
                        // add noAd marker on last two placeholders in they're appear on same screen
                        if ($(".incontentAdUnit").length != 0 && $("#ads-pos-1122").offset().top - $(".incontentAdUnit").eq(-1).offset().top < $(window).height()) {
                            $(".incontentAdUnit").eq(-1).addClass("noAdDiv");
                            if ($("#ads-pos-1122").offset().top - $(".incontentAdUnit").eq(-2).offset().top < $(window).height()) {
                                $(".incontentAdUnit").eq(-2).addClass("noAdDiv");
                            }
                        }
                    }
                    webmd.ads2.display();
                }
            } else {
                webmd.ads2.display();

            }
            if (DevTypeObj.isDesktop || DevTypeObj.isTablet) {
                profads.ads2.desktopAdPositioning();
            }
            var passIsMob = DevTypeObj.isMobile;
            profads.ads2.ResizeTemplateAds(passIsMob);
        }

        // use original media unit sizes for lazyloaded 1122.
        if (bUse_1520_1122_SwapRules) {
            webmd.ads2.sizes[1122] = [
                [300, 250],
                [300, 50],
                [300, 51],
                [320, 50],
                [320, 51]
            ];
        }
        if (s_responsive_design) {
            //starting to handle hiding ad labels for responsive
            if (DFPTargetKeys.reqHeaders.device == 'MOBILE' || profads.ads2.getBrkPnt() == '320-767') {
                $('#ads-pos-420').hide();
                $('#ads-pos-520').hide();
                $('#ads-pos-122').hide();
                $('#ads-pos-910').hide();
                $('#ads-pos-101').hide();
                $('#ads-pos-104').hide();
                $('#ads-pos-141').hide();
                $('#ads-pos-421').hide();
            } else if (DFPTargetKeys.reqHeaders.device == 'PC' || DFPTargetKeys.reqHeaders.device == 'IPAD') {
                $('#ads-pos-1420').hide();
                $('#ads-pos-1520').hide();
                $('#ads-pos-1122').hide();
                $('#ads-pos-1004').hide();
                $('#ads-pos-1005').hide();
                $('#ads-pos-2017').hide();
            }
        }
    },
    MakeAdCall: function () {
        var adself = this;
        // Do a check to make sure nobody tries to run this twice,
        if (adself.MakeAdCall.flag) {
            return;
        }
        adself.MakeAdCall.flag = true;

        var DevTypeObj = {};
        var SubD_D_Obj = {};

        profads.ads2.TestAdUnitL1L2(profads.ads2.DetectUA(DevTypeObj), profads.ads2.DetectSubD_D(SubD_D_Obj));

        //Build Exclusion List
        profads.ads2.ExclusionList(SubD_D_Obj);

        // Set page targets for all ads
        webmd.ads2.setPageTarget(profads.ads2.CapTargetKeys());

        $(document).ready(function () {
            if (DevTypeObj.isMobile) {
                profads.ads2.mobileAdPlacement();
            }

            profads.ads2.ProfAdsDisplay(DevTypeObj);

        });
    },
    mobileAdPlacement: function () {
        if (DFPTargetKeys.webSegVars.pc === 'hp') {
            if ($('#specialtyNews ul li').length > 1) {
                if ($(".businessmedicine").length > 0) {
                    $('#perspective ul li:eq(1)').after('<div id="ads-pos-1122" class="AdUnit"></div>');
                } else {
                    $('#specialtyNews ul li:eq(1)').after('<div id="ads-pos-1122" class="AdUnit"></div>');
                }
                //   if($('#specialtyNews .bucketL ul li').length > 0) {
                //       $('#specialtyNews .bucketL ul li:eq(0)').after('<div id="ads-pos-1122" class="AdUnit"></div>');
            } else {
                if ($("#tools").length != 0) {
                    $("#tools").after('<div id="ads-pos-1122" class="AdUnit"></div>');
                } else {
                    $("#bodypadding").append('<div id="ads-pos-1122" class="AdUnit"></div>');
                }
            }
            webmd.ads2.defineAd({
                id: 'ads-pos-1122',
                pos: '1122',
                collapseAfter: true
            });
            setTimeout(function () {
                var shouldMoveBA = false;
                if ($('#specialtyNews .bucketL ul > li:eq(2)').hasClass("brandAlert") && !profads.ads2.isEmpty($('#ads-pos-1122 iframe').contents().find("body"))) {
                    if ($('#ads-pos-1122 iframe').contents().find("body#ProfBlankAd").length == 0) {
                        var firstBA = $('#specialtyNews .bucketL ul > li:eq(2)');
                        //  var firstBA = $('#specialtyNews  li).eq(2)');
                        $('#specialtyNews .bucketL ul > li:eq(2)').remove();
                        if ($('#specialtyNews .bucketL ul > li:eq(2)').length > 0) {
                            $('#specialtyNews .bucketL ul > li:eq(2)').after(firstBA);
                        } else {
                            $('#specialtyNews .bucketR ul > li:eq(0)').after(firstBA);
                        }
                        shouldMoveBA = true;
                    }
                }
                if (shouldMoveBA) {
                    var secondBA = $('ul li:eq(1).brandAlert');
                    $('ul li:eq(1).brandAlert').remove();
                    if ($('#specialtyNews .bucketL ul > li:eq(3)').length > 0) {
                        $('#specialtyNews .bucketR ul > li:eq(1)').after(secondBA);
                    } else {
                        $('#specialtyNews .bucketR ul > li:eq(4)').after(secondBA);
                    }
                }
            }, 1750);
        } else if (pageCurrentURL.indexOf('viewcollection') != -1 && $('.confsection').length > 0 && DFPTargetKeys.reqHeaders.device == "MOBILE" && !isMscpApp) {
            window.ads2_ignore = {};
            webmd.ads2.sizes[1005] = [
                [1, 2]
            ];
            webmd.ads2.sizes[1122] = [
                [300, 250],
                [300, 50],
                [300, 51],
                [320, 50],
                [320, 51]
            ];
            if ($('.confsection').length == 1) {
                $('.confsection li:eq(1)').after('<div id="ads-pos-1122" class="AdUnit" style="padding-bottom: 7px"></div>');
            } else {
                $('.confsection:eq(0)').after('<div id="ads-pos-1122" class="AdUnit"></div>');
            }
            webmd.ads2.defineAd({
                id: 'ads-pos-1122',
                pos: '1122',
                collapseAfter: true
            });
            webmd.ads2.defineAd({
                id: 'ads-pos-1005',
                pos: '1005',
                collapseAfter: true
            });

        }
    },
    desktopAdPositioning: function () {
        if (pageCurrentURL.indexOf('viewarticle') !== -1) {
            setTimeout(function () {
                if ($('#ads-pos-420').length > 0) {
                    if ($('#ads-pos-420').position().top < $('#articleSidebar').outerHeight(true) + $('#articleSidebar').position().top) {
                        if ($('#ads-pos-420 iframe').contents().find("div#textDriverLong").length > 0) {
                            $('#ads-pos-420').hide();
                            var iF420Name = $('#ads-pos-420 iframe').attr("id");
                            var longFormContent = $('#ads-pos-420 iframe').contents().find("div#textDriverLong");
                            var links = document.getElementById(iF420Name).contentWindow.document.getElementsByTagName('link');
                            $(links).each(function () {
                                if ($(this).attr('href').indexOf('long') != -1) {
                                    var txtLongCSSpath = $(this).attr('href');
                                    $("head").append('<link rel="stylesheet" href="' + txtLongCSSpath + '" type="text/css" media="all">');
                                }
                            });
                            $('<div class="spacer"></div><div id="btm420"></div>').insertAfter($('#articleContent'));
                            $('#ads-pos-420').html('');
                            $('#btm420').html(longFormContent);
                        }
                    }
                }
            }, 1500);
        } else if (pageCurrentURL.indexOf('medline') !== -1) {
            if ($('#ads-pos-420').length > 0) {
                $('#ads-pos-420').hide();
                setTimeout(function () {
                    if (($('#articlecontent').height() >= 500 && $('#articlecontent > *').length >= 9) || $('#hidden1').prev().outerHeight(true) >= 250) {
                        $('#ads-pos-420').hide();
                        runningHght = 0;
                        goalHght = 250;
                        var $artContKids = $('#articlecontent > *');
                        for (var adPos = ($artContKids.length - 4); runningHght < goalHght; adPos--) {
                            runningHght += $artContKids.eq(adPos).outerHeight();
                        }
                        var iF420Name = $('#ads-pos-420 iframe').attr("id");
                        var longFormContent = $('#ads-pos-420 iframe').contents().find("body").html();
                        $('#ads-pos-420 iframe').contents().find("body").empty();
                        var links = document.getElementById(iF420Name).contentWindow.document.getElementsByTagName('link');
                        $(links).each(function () {
                            if ($(this).attr('href').indexOf('ads') != -1) {
                                var txtLongCSSpath = $(this).attr('href');
                                $("head").append('<link rel="stylesheet" href="' + txtLongCSSpath + '" type="text/css" media="all">');
                            }
                        });
                        $('<span id="medline420"></span>').insertAfter($('#articlecontent > *:eq(' + adPos + ')'));
                        $('#medline420').css('float', 'right').css('margin', '0  5px 10px 10px');
                        $('#medline420').html(longFormContent);

                    } else {
                        $('#ads-pos-420').show();
                    }
                }, 1500);
            }
        } else if (pageCurrentURL.indexOf('emedicine') !== -1 || pageCurrentURL.indexOf('reference') !== -1) {
            if (!s_responsive_design) {
                setTimeout(function () {
                    if ($('#ads-pos-420').length > 0) {

                        if ($('#ads-pos-420').position().top < $('#leftnav').outerHeight(true) + $('#leftnav').position().top) {
                            if ($('#ads-pos-420 iframe').contents().find("div#textDriverLong").length > 0) {
                                $('#ads-pos-420').hide();
                                var iF420Name = $('#ads-pos-420 iframe').attr("id");
                                var longFormContent = $('#ads-pos-420 iframe').contents().find("div#textDriverLong");
                                var links = document.getElementById(iF420Name).contentWindow.document.getElementsByTagName('link');
                                $(links).each(function () {
                                    if ($(this).attr('href').indexOf('long') != -1) {
                                        var txtLongCSSpath = $(this).attr('href');
                                        $("head").append('<link rel="stylesheet" href="' + txtLongCSSpath + '" type="text/css" media="all">');
                                    }
                                });
                                $('<div class="spacer"></div><div id="btm420"></div>').insertAfter($('.drugdbsectioncontent'));
                                $('#ads-pos-420').html('');
                                $('#btm420').html(longFormContent);
                            }
                        }
                    }
                }, 1500);
            }
        }
    },
    isEmpty: function (el) {
        return !$.trim(el.html());
    },
    isElementVisible: function (elementToBeChecked) {
        var TopView = $(window).scrollTop();
        var BotView = TopView + $(window).height();
        var TopElement = $(elementToBeChecked).offset().top;
        var BotElement = TopElement + $(elementToBeChecked).height();
        return ((BotElement <= BotView) && (TopElement >= TopView));
    },
    calcBottomArtCont: function (ipn) {
        var i = 0,
            runningHght = 0,
            goalHght = 115;
        var $artContKids;

        if ($('div[id^=pageN_]').length > 0) {
            $artContKids = $('#articleContent > #pageN_' + ipn + ' > *');
        } else {
            $artContKids = $('#articleContent > *');
        }
        for (i = $artContKids.length; runningHght < goalHght; i--) {
            runningHght += $artContKids.eq(i).height();
        }
        return $artContKids[i];
    },
    ResizeTextAds: function () {
        if ($('#ads-pos-1420').length > 0) {
            $('#ads-pos-1420 iframe').attr('width', '300');
            if ($('#ads-pos-1420 iframe').contents().find("#textDriverLong").length > 0) {
                $('#ads-pos-1420 iframe').contents().find("#textDriverLong").css('width', '278px');
                setTimeout(function () {
                    var adHeight = $('#ads-pos-1420 iframe').contents().find("div#textDriverLong").outerHeight();
                    $('#ads-pos-1420 iframe').attr('height', adHeight);
                }, 500);
            }
        }
        if ($('#ads-pos-2420').length > 0) {
            $('#ads-pos-2420 iframe').attr('width', '300');
            if ($('#ads-pos-2420 iframe').contents().find("#textDriverLong").length > 0) {
                $('#ads-pos-2420 iframe').contents().find("#textDriverLong").css('width', '278px');
                setTimeout(function () {
                    var adHeight = $('#ads-pos-2420 iframe').contents().find("div#textDriverLong").outerHeight();
                    $('#ads-pos-2420 iframe').attr('height', adHeight);
                }, 500);
            }
        }
        if ($('#ads-pos-1520').length > 0) {
            if (s_responsive_design) {
                if ($.inArray(DFPTargetKeys.pageSegVars.cg, ["502", "503", "504", "505", "508"]) != -1) {
                    $('#ads-pos-1520').css({
                        'width': 'auto',
                        'float': 'none',
                        'padding': '0 0 10px 0',
                        'margin-right': '0'
                    });

                    $('#ads-pos-1520 iframe').attr('width', '300');
                    $("#ads-pos-1520").removeClass("AdUnit"); // remove the ADVERTISEMENT label
                    if ($('#ads-pos-1520 iframe').contents().find("#textDriverLong").length > 0) {
                        $('#ads-pos-1520 iframe').contents().find("#textDriverLong").css('width', '278px');
                        setTimeout(function () {
                            var adHeight = $('#ads-pos-1520 iframe').contents().find("div#textDriverLong").outerHeight();
                            $('#ads-pos-1520 iframe').attr('height', adHeight);
                        }, 500);
                    }
                } else {
                    $('#ads-pos-1520 iframe').attr('width', '145');
                    if ($('#ads-pos-1520 iframe').contents().find("#textDriverShort").length > 0) {
                        $("#ads-pos-1520").removeClass("AdUnit"); // remove the ADVERTISEMENT label
                        setTimeout(function () {
                            var adHeight = $('#ads-pos-1520 iframe').contents().find("#textDriverShort").outerHeight();
                            $('#ads-pos-1520 iframe').attr('height', adHeight);
                            $('#ads-pos-1520 iframe').css('width', '145px');
                            $('#ads-pos-1520').css('float', 'right');
                            $('#ads-pos-1520').css('padding', '0 0 10px 10px');
                        }, 500);
                    }
                    else $('#ads-pos-1520 iframe').attr('width', '300');
                }
            } else {
                $('#ads-pos-1520 iframe').attr('width', '145');
                if ($('#ads-pos-1520 iframe').contents().find("#textDriverShort").length > 0) {
                    $("#ads-pos-1520").removeClass("AdUnit"); // remove the ADVERTISEMENT label
                    setTimeout(function () {
                        var adHeight = $('#ads-pos-1520 iframe').contents().find("#textDriverShort").outerHeight();
                        $('#ads-pos-1520 iframe').attr('height', adHeight);
                        $('#ads-pos-1520 iframe').css('width', '145px');
                        $('#ads-pos-1520').css('float', 'right');
                        $('#ads-pos-1520').css('padding', '0 0 10px 10px');
                    }, 500);
                }
                else $('#ads-pos-1520 iframe').attr('width', '300');

            }
        }
        // PPE-51921 - Swap 1520 & first 1122 position on mobile article pages
        // check for short form text driver in first 1122 and set the styles
        if (bUse_1520_1122_SwapRules) {
            if ($('#ads-pos-1122').length > 0) {
                $('#ads-pos-1122 iframe').attr('width', '145');
                if ($('#ads-pos-1122 iframe').contents().find("#textDriverShort").length > 0) {
                    $("#ads-pos-1122").removeClass("AdUnit"); // remove the ADVERTISEMENT label
                    setTimeout(function () {
                        var adHeight = $('#ads-pos-1122 iframe').contents().find("#textDriverShort").outerHeight();
                        $('#ads-pos-1122 iframe').attr('height', adHeight);
                        $('#ads-pos-1122 iframe').css('width', '145px');
                        $('#ads-pos-1122').css('float', 'right');
                        $('#ads-pos-1122').css('padding', '0 0 10px 10px')
                        $('#ads-pos-1122').css('margin', '0 0 0px 0px')
                    }, 500);
                }
                else {
                    $('#ads-pos-1122 iframe').attr('width', '300');
                }
            }
        } // end if(bUse_1520_1122_SwapRules)

        if ($('#ads-pos-2520').length > 0) {
            $('#ads-pos-2520 iframe').attr('width', '145');
            if ($('#ads-pos-2520 iframe').contents().find("#textDriverShort").length > 0) {
                setTimeout(function () {
                    var adHeight = $('#ads-pos-2520 iframe').contents().find("#textDriverShort").outerHeight();
                    $('#ads-pos-2520 iframe').attr('height', adHeight);
                }, 500);
            }
        }
        if ($('div[id^="ads-pos-420"]').length > 0) {
            var DFP420 = $('div[id^="ads-pos-420"] iframe').attr('id');
            if (pageCurrentURL.indexOf('medline') != -1 || pageCurrentURL.indexOf('/viewarticle/') != -1 || pageCurrentURL.indexOf('search.') != -1) {
                $('div[id^="ads-pos-420"] iframe').attr('width', '240');
                if ($('div[id^="ads-pos-420"] iframe').contents().find("div#textAd1").length > 0) {
                    $('head', window.frames[DFP420].document).append('<link rel="stylesheet" href="http://img.medscapestatic.com/medcss/ads/dfp/text-ads.css" type="text/css" media="all">');
                    $('div[id^="ads-pos-420"] iframe').contents().find("div#textAd1").css('width', '217px');
                    $('div[id^="ads-pos-420"]').css('float', 'right');
                    $('div[id^="ads-pos-420"]').css('padding-left', '10px');
                    setTimeout(function () {
                        var adHeight = $('div[id^="ads-pos-420"] iframe').contents().find("div#textAd1").outerHeight();
                        $('div[id^="ads-pos-420"] iframe').attr('height', adHeight);
                    }, 250);
                } else if ($('div[id^="ads-pos-420"] iframe').contents().find("div#sponsorad").length > 0) {
                    $('head', window.frames[DFP420].document).append('<link rel="stylesheet" href="http://img.medscapestatic.com/medcss/ads/dfp/text-ads.css" type="text/css" media="all">');
                    $('div[id^="ads-pos-420"] iframe').contents().find("div#sponsorad").css('width', '214px');
                    $('div[id^="ads-pos-420"]').css('float', 'right');
                    $('div[id^="ads-pos-420"]').css('padding-left', '10px');
                    setTimeout(function () {
                        var adHeight = $('div[id^="ads-pos-420"] iframe').contents().find("div#sponsorad").outerHeight();
                        $('div[id^="ads-pos-420"] iframe').attr('height', adHeight);
                    }, 250);
                } else if ($('div[id^="ads-pos-420"] iframe').contents().find("div#textDriverLong").length > 0) {
                    $('div[id^="ads-pos-420"] iframe').attr('width', '600');
                    $('div[id^="ads-pos-420"] iframe').contents().find("div#textDriverLong").css('width', '578px');
                    setTimeout(function () {
                        var adHeight = $('div[id^="ads-pos-420"] iframe').contents().find("div#textDriverLong").outerHeight();
                        $('div[id^="ads-pos-420"] iframe').attr('height', adHeight);
                    }, 250);
                } else if ($('div[id^="ads-pos-420"] iframe').contents().find("body#ProfBlankAd").length > 0) {
                    $('div[id^="ads-pos-420"]').hide();
                }
            } else if ($.inArray(DFPTargetKeys.pageSegVars.cg, ["502", "503", "504", "505", "508"]) != -1 || pageCurrentURL.indexOf('/news') != -1) {
                $('div[id^="ads-pos-420"] iframe').attr('width', '300');
                if ($('div[id^="ads-pos-420"] iframe').contents().find("div#textAd1").length > 0) {
                    $('head', window.frames[DFP420].document).append('<link rel="stylesheet" href="http://img.medscapestatic.com/medcss/ads/dfp/text-ads.css" type="text/css" media="all">');
                    $('div[id^="ads-pos-420"] iframe').contents().find("div#textAd1").css('width', '277px');
                    $('div[id^="ads-pos-420"]').css('float', 'right');
                    $('div[id^="ads-pos-420"]').css('padding-left', '10px');
                    setTimeout(function () {
                        var adHeight = $('div[id^="ads-pos-420"] iframe').contents().find("div#textAd1").outerHeight();
                        $('div[id^="ads-pos-420"] iframe').attr('height', adHeight);
                    }, 250);
                } else if ($('div[id^="ads-pos-420"] iframe').contents().find("div#sponsorad").length > 0) {
                    $('head', window.frames[DFP420].document).append('<link rel="stylesheet" href="http://img.medscapestatic.com/medcss/ads/dfp/text-ads.css" type="text/css" media="all">');
                    $('div[id^="ads-pos-420"] iframe').contents().find("div#sponsorad").css('width', '274px');
                    $('div[id^="ads-pos-420"]').css('float', 'right');
                    $('div[id^="ads-pos-420"]').css('padding-left', '10px');
                    setTimeout(function () {
                        var adHeight = $('div[id^="ads-pos-420"] iframe').contents().find("div#sponsorad").outerHeight();
                        $('div[id^="ads-pos-420"] iframe').attr('height', adHeight);
                    }, 250);
                } else if ($('div[id^="ads-pos-420"] iframe').contents().find("div#textDriverLong").length > 0) {
                    if (s_responsive_design) {
                        $('div[id^="ads-pos-420"] iframe').attr('width', '300');
                        $('div[id^="ads-pos-420"] iframe').contents().find("div#textDriverLong").css('width', '278px');
                    } else {
                        $('div[id^="ads-pos-420"] iframe').attr('width', '600');
                        $('div[id^="ads-pos-420"] iframe').contents().find("div#textDriverLong").css('width', '456px');
                    }
                    setTimeout(function () {
                        var adHeight = $('div[id^="ads-pos-420"] iframe').contents().find("div#textDriverLong").outerHeight();
                        $('div[id^="ads-pos-420"] iframe').attr('height', adHeight);
                        if (s_responsive_design) {
                            $('div[id^="ads-pos-420"]').css('height', adHeight + 92 + 'px');
                        }
                    }, 250);
                }
            }
        }
        if ($('div[id^="ads-pos-520"]').length > 0) {
            if (s_responsive_design) {
                if ($.inArray(DFPTargetKeys.pageSegVars.cg, ["502", "503", "504", "505", "508"]) != -1) {
                    if ($('div[id^="ads-pos-520"] iframe').contents().find("div#textDriverLong").length > 0) {
                        $('div[id^="ads-pos-520"] iframe').attr('width', '300');
                        $('div[id^="ads-pos-520"] iframe').contents().find("div#textDriverLong").css('width', '278px');
                        setTimeout(function () {
                            var adHeight = $('div[id^="ads-pos-520"] iframe').contents().find("div#textDriverLong").outerHeight();
                            $('div[id^="ads-pos-520"] iframe').attr('height', adHeight);
                            $('div[id^="ads-pos-520"]').css('height', adHeight + 92 + 'px');

                        }, 250);
                    }
                }
                else {
                    $('div[id^="ads-pos-520"] iframe').attr('width', '220');
                    if ($('div[id^="ads-pos-520"] iframe').contents().find("#textDriverShort").length > 0) {
                        setTimeout(function () {
                            var adHeight = $('div[id^="ads-pos-520"] iframe').contents().find("#textDriverShort").outerHeight();
                            $('div[id^="ads-pos-520"] iframe').attr('height', adHeight);
                        }, 250);
                    }
                }
            } else {
                $('div[id^="ads-pos-520"] iframe').attr('width', '220');
                if ($('div[id^="ads-pos-520"] iframe').contents().find("#textDriverShort").length > 0) {
                    setTimeout(function () {
                        var adHeight = $('div[id^="ads-pos-520"] iframe').contents().find("#textDriverShort").outerHeight();
                        $('div[id^="ads-pos-520"] iframe').attr('height', adHeight);
                    }, 250);
                }
            }
        }
    },
    ResizeTemplateAds: function (isMob) {

        var pos421ifrm = $('#ads-pos-421 iframe');
        var pos2017ifrm = $('#ads-pos-2017 iframe');
        if (isMob) {
            setTimeout(function () {
                if ($('#ads-pos-2017').length > 0) {
                    pos2017ifrm.attr('width', '100%');
                    if (pos2017ifrm.contents().find("#gne_services_link").length > 0) {
                        setTimeout(function () {
                            var adHeight = pos2017ifrm.contents().find("#gne_services_link").children('div').outerHeight();
                            pos2017ifrm.attr('height', adHeight);
                        }, 250);
                    } else if (pos2017ifrm.contents().find("#pfizercorp_services_link").length > 0) {
                        setTimeout(function () {
                            var adHeight = pos2017ifrm.contents().find("#pfizercorp_services_link").children('div').outerHeight();
                            pos2017ifrm.attr('height', adHeight);
                        }, 250);
                    }
                }
            }, 3500);
        } else {

            setTimeout(function () {
                if ($('#ads-pos-421').length > 0) {
                    pos421ifrm.attr('width', '660');

                    if (pos421ifrm.contents().find("#gne_services_link").length > 0) {
                        setTimeout(function () {
                            var adHeight = pos421ifrm.contents().find("#gne_services_link").outerHeight();
                            if (s_responsive_design) {
                                pos421ifrm.attr('height', '100%');
                                pos421ifrm.css('height', '100%');
                                    pos421ifrm.attr('width', '100%');
                                    pos421ifrm.contents().find("body").attr('style','width:auto;');
                                    pos421ifrm.contents().find("div#ref_sponsorbox").attr('style','width:auto;');
                                    pos421ifrm.contents().find("div#ref_sponsorbox .ref_sponsortitle").attr('style','width:55%;');
                                    pos421ifrm.contents().find("div#image").attr('style','margin-top:-50px; margin-right: 8px;');
                                    $('#adSpaceMfs').css('min-height','2.5%');
                            } else {
                                pos421ifrm.attr('height', adHeight);
                            }
                        }, 250);
                    } else if (pos421ifrm.contents().find("#pfizercorp_services_link").length > 0) {
                        setTimeout(function () {
                            var adHeight = pos421ifrm.contents().find("#pfizercorp_services_link").outerHeight();
                            if (s_responsive_design) {
                                pos421ifrm.attr('height', '100%');
                                pos421ifrm.css('height', '100%');
                                    pos421ifrm.attr('width', '100%');
                                    pos421ifrm.contents().find("body").attr('style','width:auto;');
                                    pos421ifrm.contents().find("div#ref_sponsorbox").attr('style','width:auto;');
                                    pos421ifrm.contents().find("div#ref_sponsorbox .ref_sponsortitle").attr('style','width:55%;');
                                    pos421ifrm.contents().find("div#image").attr('style','margin-top:-50px; margin-right: 8px;');
                                    $('#adSpaceMfs').css('min-height','2.5%');

                            } else {
                                pos421ifrm.attr('height', adHeight);
                            }
                        }, 250);
                    }

                    }
            }, 3500);
        }
    },
    ExclusionList: function (SubD_D_Obj) {

        var ExCList = $.merge(profads.ads2.PageExclusion(), profads.ads2.SSGexclusion(SubD_D_Obj));
        if (ExCList.length > 0) {
            webmd.ads2.setPageExclusion(ExCList);
        }
    },
    PageExclusion: function () {
        var PExVal;
        if (typeof DFPTargetKeys !== "undefined") {
            PExVal = DFPTargetKeys.exclusionCategories;
        } else if (typeof AjaxTargetKeys !== "undefined") {
            PExVal = AjaxTargetKeys.exclusionCategories;
        }
        return PExVal;
    },
    SSGexclusion: function (SubD_D_Obj) {
        var SSGWebVars;
        var SSGTPageVars;
        var SSGBol;
        if (SubD_D_Obj.ProfEdu || SubD_D_Obj.ProfEduFR || SubD_D_Obj.ProfEduDE || SubD_D_Obj.ProfEduES) {
            SSGBol = ["ssg"];
            return SSGBol;
        } else if (locale == "fr" || locale == "de" || locale == "es" || locale == "pt") {

            if (DFPTargetKeys.webSegVars.pc == "slideshow" || DFPTargetKeys.webSegVars.pc == "content") {
                SSGBol = ["ssg"];
                return SSGBol;
            }
            else {
                SSGBol = [""];
                return SSGBol;
            }
        } else {

            if (typeof DFPTargetKeys !== "undefined") {
                SSGWebVars = DFPTargetKeys.webSegVars;
                SSGTPageVars = DFPTargetKeys.pageSegVars;
            } else if (typeof AjaxTargetKeys !== "undefined") {
                SSGWebVars = AjaxTargetKeys.webSegVars;
                SSGTPageVars = AjaxTargetKeys.pageSegVars;
            }
            if (typeof SSGWebVars !== "undefined" && typeof SSGTPageVars !== "undefined") {
                if (SSGWebVars.pc === 'hp' || SSGWebVars.pc === 'rc' || SSGWebVars.pc === 'medline' || SSGWebVars.pc === 'news-today' || SSGTPageVars.cg === '501') {
                    SSGBol = ["ssg"];
                } else {
                    SSGBol = [];
                }
                return SSGBol;
            }
        }
    },
    SetSubDOMenv: function () {
        var subDOMenv;
        if (typeof DFPTargetKeys !== "undefined") {
            if (DFPTargetKeys.reqHeaders.requestEnv == '') {
                subDOMenv = DFPTargetKeys.reqHeaders.requestEnv;
            } else {
                subDOMenv = "." + DFPTargetKeys.reqHeaders.requestEnv;
            }
        } else {
            if (/qa02/i.test(pageCurrentURL)) {
                if (/staging/i.test(pageCurrentURL)) {
                    subDOMenv = ".staging.qa02";
                } else {
                    subDOMenv = ".qa02";
                }
            } else if (/qa01/i.test(pageCurrentURL)) {
                if (/staging/i.test(pageCurrentURL)) {
                    subDOMenv = ".staging.qa01";
                } else {
                    subDOMenv = ".qa01";
                }
            } else if (/qa00/i.test(pageCurrentURL)) {
                if (/staging/i.test(pageCurrentURL)) {
                    subDOMenv = ".staging.qa00";
                } else {
                    subDOMenv = ".qa00";
                }
            } else if (/proddev/i.test(pageCurrentURL)) {
                subDOMenv = ".proddev";
            } else if (/staging/i.test(pageCurrentURL)) {
                subDOMenv = ".staging";
            } else {
                subDOMenv = "";
            }
        }
        return subDOMenv;
    },
    DetectUA: function (DevTypeObj) {
        var reqHeaderTest;
        if (typeof DFPTargetKeys !== "undefined") {
            reqHeaderTest = DFPTargetKeys.reqHeaders.device;
        } else if (typeof AjaxTargetKeys !== "undefined") {
            reqHeaderTest = AjaxTargetKeys.reqHeaders.device;
        }
        /* Commented out becasue we are no longer manually test for these values.
         else {
         if (/android|webos|iphone|ipod|blackberry|iemobile|opera mini|windows ce|windows phone/i.test(navigator.userAgent.toLowerCase())) {
         DevTypeObj.isMobile = true;
         DevTypeObj.isTablet = false;
         DevTypeObj.isDesktop = false;
         } else if (/ipad/i.test(navigator.userAgent.toLowerCase())) {
         DevTypeObj.isMobile = false;
         DevTypeObj.isTablet = true;
         DevTypeObj.isDesktop = false;
         } else {
         DevTypeObj.isMobile = false;
         DevTypeObj.isTablet = false;
         DevTypeObj.isDesktop = true;
         }
         }
         */
        if (typeof reqHeaderTest !== "undefined") {
            if (/mobile/i.test(reqHeaderTest.toLowerCase())) {
                DevTypeObj.isMobile = true;
                DevTypeObj.isTablet = false;
                DevTypeObj.isDesktop = false;
            } else if (/ipad/i.test(reqHeaderTest.toLowerCase())) {
                DevTypeObj.isMobile = false;
                DevTypeObj.isTablet = true;
                DevTypeObj.isDesktop = false;
            } else if (/pc/i.test(reqHeaderTest.toLowerCase())) {
                DevTypeObj.isMobile = false;
                DevTypeObj.isTablet = false;
                DevTypeObj.isDesktop = true;
            } else {
                DevTypeObj.isMobile = false;
                DevTypeObj.isTablet = false;
                DevTypeObj.isDesktop = true;
            }
            return DevTypeObj;
        }
    },
    DetectSubD_D: function (SubD_D_Obj) {

        var subDOMenv = profads.ads2.SetSubDOMenv();

        var ProfMTVDOM = new RegExp('www' + subDOMenv + '.medscape.com/mtv');
        var ProfNewsDOM = new RegExp('prepub' + subDOMenv + '.medscape.com|www' + subDOMenv + '.medscape.com|wp' + subDOMenv + '.medscape.com|search' + subDOMenv + '.medscape.com|profreg' + subDOMenv + '.medscape.com|directory' + subDOMenv + '.medscape.com');
        var ProfLoginDOM = new RegExp('login' + subDOMenv + '.medscape.com');
        var ProfRefDOM = new RegExp('reference' + subDOMenv + '.medscape.com|emedicine' + subDOMenv + '.medscape.com');
        var ProfMfrDOM = new RegExp('francais' + subDOMenv + '.medscape.com|search' + subDOMenv + '.medscape.com/search/fr');
        var ProfMdeDOM = new RegExp('deutsch' + subDOMenv + '.medscape.com|search' + subDOMenv + '.medscape.com/search/de');
        var ProfMdePraxDOM = new RegExp('praxis' + subDOMenv + '.medscapemedizin.de');
        var ProfUGCDOM = new RegExp('boards' + subDOMenv + '.medscape.com');
        var ProfMesDOM = new RegExp('espanol' + subDOMenv + '.medscape.com|search' + subDOMenv + '.medscape.com/search/es');
        var ProfMptDOM = new RegExp('portugues' + subDOMenv + '.medscape.com|search' + subDOMenv + '.medscape.com/search/pt');
        var ProfEduDOM = new RegExp('www' + subDOMenv + '.medscape.org');
        var ProfEduFRDOM = new RegExp('www' + subDOMenv + '.medscape.org/francais');
        var ProfEduDEDOM = new RegExp('www' + subDOMenv + '.medscape.org/deutsch');
        var ProfEduESDOM = new RegExp('www' + subDOMenv + '.medscape.org/espanol');
        var ProfEduPTDOM = new RegExp('www' + subDOMenv + '.medscape.org/portugues');

        SubD_D_Obj.ProfPromoNews = false;
        SubD_D_Obj.ProfPromoLogin = false;
        SubD_D_Obj.ProfPromoRef = false;
        SubD_D_Obj.ProfMFR = false;
        SubD_D_Obj.ProfMDENews = false;
        SubD_D_Obj.ProfMDEPraxis = false;
        SubD_D_Obj.ProfUGC = false;
        SubD_D_Obj.ProfMES = false;
        SubD_D_Obj.ProfEdu = false;
        SubD_D_Obj.ProfEduFR = false;
        SubD_D_Obj.ProfEduDE = false;
        SubD_D_Obj.ProfEduES = false;
        SubD_D_Obj.ProfEduPT = false;
        SubD_D_Obj.ProfMPT = false;
        SubD_D_Obj.ProfMTV = false;

        if (typeof(locale) == "undefined") {
            locale = "us";
        }
        if (ProfLoginDOM.test(pageCurrentURL)) {
            SubD_D_Obj.ProfPromoLogin = true;
        } else if (ProfRefDOM.test(pageCurrentURL)) {
            SubD_D_Obj.ProfPromoRef = true;
        } else if (ProfMfrDOM.test(pageCurrentURL)) {
            SubD_D_Obj.ProfMFR = true;
        } else if (ProfMdeDOM.test(pageCurrentURL)) {
            SubD_D_Obj.ProfMDENews = true;
        } else if (ProfMdePraxDOM.test(pageCurrentURL)) {
            SubD_D_Obj.ProfMDEPraxis = true;
        } else if (ProfUGCDOM.test(pageCurrentURL)) {
            SubD_D_Obj.ProfUGC = true;
        } else if (ProfMesDOM.test(pageCurrentURL)) {
            SubD_D_Obj.ProfMES = true;
        } else if (ProfEduFRDOM.test(pageCurrentURL)) {
            SubD_D_Obj.ProfEduFR = true;
        } else if (ProfEduDEDOM.test(pageCurrentURL)) {
            SubD_D_Obj.ProfEduDE = true;
        } else if (ProfEduESDOM.test(pageCurrentURL)) {
            SubD_D_Obj.ProfEduES = true;
        } else if (ProfEduPTDOM.test(pageCurrentURL)) {
            SubD_D_Obj.ProfEduPT = true;
        } else if (ProfMptDOM.test(pageCurrentURL)) {
            SubD_D_Obj.ProfMPT = true;
        } else if (ProfNewsDOM.test(pageCurrentURL)) {
            if (ProfMTVDOM.test(pageCurrentURL)) {
                SubD_D_Obj.ProfMTV = true;
            } else if (locale == "fr") {
                SubD_D_Obj.ProfMFR = true;
            } else if (locale == "de") {
                SubD_D_Obj.ProfMDENews = true;
            } else if (locale == "pt") {
                SubD_D_Obj.ProfMPT = true;
            } else if (locale == "es") {
                SubD_D_Obj.ProfMES = true;
            } else {
                SubD_D_Obj.ProfPromoNews = true;
            }
        } else if (ProfEduDOM.test(pageCurrentURL)) {
            if (locale == "fr") {
                SubD_D_Obj.ProfEduFR = true;
            } else if (locale == "de") {
                SubD_D_Obj.ProfEduDE = true;
            } else if (locale == "pt") {
                SubD_D_Obj.ProfEduPT = true;
            } else if (locale == "es") {
                SubD_D_Obj.ProfEduES = true;
            } else {
                SubD_D_Obj.ProfEdu = true;
            }
        }
        else {
            SubD_D_Obj.ProfMTV = false;
            SubD_D_Obj.ProfPromoNews = false;
            SubD_D_Obj.ProfPromoLogin = false;
            SubD_D_Obj.ProfPromoRef = false;
            SubD_D_Obj.ProfEdu = false;
            SubD_D_Obj.ProfMFR = false;
            SubD_D_Obj.ProfMDENews = false;
            SubD_D_Obj.ProfMDEPraxis = false;
            SubD_D_Obj.ProfUGC = false;
            SubD_D_Obj.ProfMES = false;
            SubD_D_Obj.ProfMPT = false;
            SubD_D_Obj.ProfEduFR = false;
            SubD_D_Obj.ProfEduDE = false;
            SubD_D_Obj.ProfEduES = false;
        }
        return SubD_D_Obj;
    },
    TestAdUnitL1L2: function (DevTObj, SubDDObj) {
        if (DevTObj.isDesktop || DevTObj.isTablet) {
            if (SubDDObj.ProfMTV) {
                webmd.ads2.adTarget = ['profpromo', 'medscptvdesktop'];
            } else if (SubDDObj.ProfPromoNews) {
                webmd.ads2.adTarget = ['profpromo', 'medscpnewsdesktop'];
            } else if (SubDDObj.ProfPromoLogin) {
                webmd.ads2.adTarget = ['proflogin'];
            } else if (SubDDObj.ProfPromoRef) {
                webmd.ads2.adTarget = ['profpromo', 'medscprefdesktop'];
            } else if (SubDDObj.ProfMFR) {
                webmd.ads2.adTarget = ['profpromo', 'mfrnewsdesktop'];
            } else if (SubDDObj.ProfMDENews) {
                webmd.ads2.adTarget = ['profpromo', 'mdenewsdesktop'];
            } else if (SubDDObj.ProfMDEPraxis) {
                webmd.ads2.adTarget = ['profpromo', 'mdepraxisdesktop'];
            } else if (SubDDObj.ProfEduES) {
                webmd.ads2.adTarget = ['profedu', 'mesedudesktop'];
            } else if (SubDDObj.ProfUGC) {
                webmd.ads2.adTarget = ['profugc', 'messageboards'];
            } else if (SubDDObj.ProfMES) {
                webmd.ads2.adTarget = ['profpromo', 'mesnewsdesktop'];
            } else if (SubDDObj.ProfMPT) {
                webmd.ads2.adTarget = ['profpromo', 'mpornewsdesktop'];
            } else if (SubDDObj.ProfEduFR) {
                webmd.ads2.adTarget = ['profedu', 'mfredudesktop'];
            } else if (SubDDObj.ProfEduDE) {
                webmd.ads2.adTarget = ['profedu', 'mdeedudesktop'];
            } else if (SubDDObj.ProfEduPT) {
                webmd.ads2.adTarget = ['profedu', 'mporedudesktop'];
            } else if (SubDDObj.ProfEdu) {
                webmd.ads2.adTarget = ['profedu', 'profedudesktop'];
            }
        } else if (DevTObj.isMobile) {
            if (SubDDObj.ProfMTV) {
                webmd.ads2.adTarget = ['profpromomobileweb', 'medscptvmobileweb'];
            } else if (SubDDObj.ProfPromoNews) {
                webmd.ads2.adTarget = ['profpromomobileweb', 'medscpnewsmobileweb'];
            } else if (SubDDObj.ProfPromoLogin) {
                webmd.ads2.adTarget = ['proflogin'];
            } else if (SubDDObj.ProfPromoRef) {
                webmd.ads2.adTarget = ['profpromomobileweb', 'medscprefmobileweb'];
            } else if (SubDDObj.ProfMFR) {
                webmd.ads2.adTarget = ['profpromomobileweb', 'mfrnewsmobileweb'];
            } else if (SubDDObj.ProfMDENews) {
                webmd.ads2.adTarget = ['profpromomobileweb', 'mdenewsmobileweb'];
            } else if (SubDDObj.ProfMDEPraxis) {
                webmd.ads2.adTarget = ['profpromomobileweb', 'mdepraxismobileweb'];
            } else if (SubDDObj.ProfUGC) {
                webmd.ads2.adTarget = ['profugc', 'messageboards'];
            } else if (SubDDObj.ProfMES) {
                webmd.ads2.adTarget = ['profpromomobileweb', 'mesnewsmobileweb'];
            } else if (SubDDObj.ProfMPT) {
                webmd.ads2.adTarget = ['profpromomobileweb', 'mpornewsmobileweb'];
            } else if (SubDDObj.ProfEduFR) {
                webmd.ads2.adTarget = ['profedu', 'mfredumobileweb'];
            } else if (SubDDObj.ProfEduDE) {
                webmd.ads2.adTarget = ['profedu', 'mdeedumobileweb'];
            } else if (SubDDObj.ProfEduES) {
                webmd.ads2.adTarget = ['profedu', 'mesedumobileweb'];
            } else if (SubDDObj.ProfEduPT) {
                webmd.ads2.adTarget = ['profedu', 'mporedumobileweb'];
            } else if (SubDDObj.ProfEdu) {
                webmd.ads2.adTarget = ['profedu', 'profedumobileweb'];
            }
        } else {
            webmd.ads2.adTarget = ['BLANK', 'BLANK'];
        }
    },
    DfpUatCap: function () {
        var urlQstringCap = window.location.href.split('?');
        var QVals = [];
        var KeyValPs = urlQstringCap[1].split("&");
        var TestAdObj = {};
        for (var i = 0; i < KeyValPs.length; i++) {
            QVals[i] = KeyValPs[i].split('=');
            TestAdObj[QVals[i][0]] = QVals[i][1];
        }
        var DfpUatVals = {
            tar: TestAdObj.tar,
            tc: TestAdObj.tc,
            pf: TestAdObj.pf,
            /*ssp:TestAdObj.ssp,ct:TestAdObj.ct,st:TestAdObj.st,*/
            usp: TestAdObj.usp,
            occ: TestAdObj.occ,
            val: TestAdObj.val
        };
        if (TestAdObj.hasOwnProperty("pb")) {
            DfpUatVals.pb = TestAdObj.pb;
        }
        if (TestAdObj.hasOwnProperty("dt")) {
            DfpUatVals.dt = TestAdObj.dt;
        }
        return DfpUatVals;
    },
    medscapeRefresh: function () {

        if (profads.ads2.profAdsSettings.AdPrediction) {
            var qObj = profads.ads2.proclivityKeys();

            if (profads.ads2.profAdsSettings.proGate) {
                qObj.requestedSteps = ['pb', 'blbll'];
                var pObjStr = JSON.stringify(qObj);
            } else if (profads.ads2.profAdsSettings.llGate) {
                qObj.requestedSteps = ['blbll'];
                var pObjStr = JSON.stringify(qObj);
            } else {

            }

            var proApiUrl;
            if (DFPTargetKeys.webSegVars.envp === 'prod') {
                proApiUrl = "api.medscape.com/adpredictionservice/transform";
            } else if (DFPTargetKeys.webSegVars.envp === 'qa00') {
                proApiUrl = "adpredictionservice-app-qa00.prf.iad1.medscape.com:8080/adpredictionservice/transform";
            } else if (DFPTargetKeys.webSegVars.envp === 'qa01') {
                proApiUrl = "adpredictionservice71-app-qa01.prf.iad1.medscape.com:8080/adpredictionservice/transform"
            } else {
                proApiUrl = "api.medscape.com/adpredictionservice/transform";
            }

            $.ajax({
                type: "GET",
                url: "http://" + proApiUrl,
                jsonp: "callback",
                dataType: "jsonp",

                data: {
                    q: pObjStr
                },
                error: function (xhr, status, error) {
                    profads.ads2.profAdsSettings.AdPrediction = false;
                    $(document).trigger("refreshMedAds", [0, false]);
                },
                success: function (response, status, xhr) {
                    if (xhr.status === 200) {
                        if ($.inArray("pb", response.refresh) === -1) {
                            profads.ads2.profAdsSettings.proGate = false;
                        }
                        if ($.inArray("blbll", response.refresh) === -1) {
                            profads.ads2.profAdsSettings.llGate = false;
                        }
                        if ($.inArray("_all", response.refresh) !== -1 || response.refresh.length === 0) {
                            profads.ads2.profAdsSettings.AdPrediction = false;
                        }
                        var bLL = (bNews) ? response.data.lazyLoad.blb : false;

                        webmd.ads2.setPageTarget("pbs", response.data.userSegVars.pbs);
                        webmd.ads2.setPageTarget("pbp", response.data.userSegVars.pbp);
                        $(document).trigger("refreshMedAds", [response.data.userSegVars.pb, bLL]);
                    } else {
                        profads.ads2.profAdsSettings.AdPrediction = false;
                        $(document).trigger("refreshMedAds", [0, false]);
                    }
                }
            });
        } else {
            profads.ads2.profAdsSettings.AdPrediction = false;
            $(document).trigger("refreshMedAds", [0, false]);
        }

        webmd.ads2.setPageTarget("vp", 1);
    },
    proclivityKeys: function () {

        var q = {};
        var tempDfpData = {};
        var pSegVar = {};
        var reqHeads = {};
        var uSegVar = {};
        var WSegVar = {};

        if (typeof DFPTargetKeys !== "undefined") {

            var pSetKeys = DFPTargetKeys;

        } else if (typeof AjaxTargetKeys !== "undefined") {

            var pSetKeys = AjaxTargetKeys;

        }
        if (typeof pSetKeys !== "undefined") {
            pSegVar.art = pSetKeys.pageSegVars.art;
            pSegVar.cg = pSetKeys.pageSegVars.cg;
            pSegVar.pub = pSetKeys.pageSegVars.pub;
            pSegVar.scg = pSetKeys.pageSegVars.scg;
            pSegVar.ssp = pSetKeys.pageSegVars.ssp;

            reqHeads.device = pSetKeys.reqHeaders.device;
            reqHeads.domain = pSetKeys.reqHeaders.domain;
            reqHeads.domainCategory = pSetKeys.reqHeaders.domainCategory;
            reqHeads.ep = pSetKeys.reqHeaders.ep;

            var subDOMenv = profads.ads2.SetSubDOMenv();
            var kwKeys = {};
            /* Capture The User Search Term for Key Word targeting key */
            var ProfSearchDOM = new RegExp('search' + subDOMenv + '.medscape.com');
            if (ProfSearchDOM.test(pageCurrentURL)) {
                if (window.location.search.length > 1) {
                    var KeyValPs = [];
                    var QVals = [];
                    KeyValPs = window.location.search.substr(1, window.location.search.length).split("&");
                    for (var i = 0; i < KeyValPs.length; i++) {
                        QVals[i] = KeyValPs[i].split('=');
                        if (QVals[i][0] === 'q') {
                            kwKeys.kw = QVals[i][1].replace(/%20/g, ' ');
                        }
                        else if (QVals[i][0] === 'queryText') {
                            kwKeys.kw = QVals[i][1].replace(/\+/g, ' ');
                        }
                    }
                }
            }
            else {
                kwKeys.kw = '';
            }
            reqHeads = $.extend({}, reqHeads, kwKeys);

            uSegVar.pf = pSetKeys.userSegVars.pf;
            uSegVar.usp = pSetKeys.userSegVars.usp;
            if (typeof pSetKeys.userSegVars.dt !== "undefined") {
                uSegVar.dt = pSetKeys.userSegVars.dt;
            }

            WSegVar.pc = pSetKeys.webSegVars.pc;
            WSegVar.spon = pSetKeys.webSegVars.spon;

            tempDfpData.pageSegVars = pSegVar;
            tempDfpData.reqHeaders = reqHeads;
            tempDfpData.userSegVars = uSegVar;
            tempDfpData.webSegVars = WSegVar;

            q.dfpData = tempDfpData;

        }
        return q;
    },
    CapTargetKeys: function (TKeysObj) {

        var subDOMenv = profads.ads2.SetSubDOMenv();

        if (typeof DFPTargetKeys !== "undefined") {

            TKeysObj = $.extend({}, DFPTargetKeys.userSegVars, DFPTargetKeys.pageSegVars);

            TKeysObj = $.extend({}, TKeysObj, DFPTargetKeys.webSegVars);

            TKeysObj.ep = DFPTargetKeys.reqHeaders.ep;

        } else if (typeof AjaxTargetKeys !== "undefined") {

            TKeysObj = $.extend({}, AjaxTargetKeys.userSegVars, AjaxTargetKeys.pageSegVars);

            TKeysObj = $.extend({}, TKeysObj, AjaxTargetKeys.webSegVars);

            TKeysObj.ep = AjaxTargetKeys.reqHeaders.ep;

        }

        /* Test for Directory Target Keys */
        var ProfDirDOM = new RegExp('directory' + subDOMenv + '.medscape.com');
        if (ProfDirDOM.test(pageCurrentURL)) {
            if (typeof DirTargetKeys !== "undefined") {
                TKeysObj.spon = DirTargetKeys.webSegVars.spon;
            }
        }

        TKeysObj.pvid = s_pageview_id;

        /* Capture The User Search Term for Key Word targeting key */
        var ProfSearchDOM = new RegExp('search' + subDOMenv + '.medscape.com');
        if (ProfSearchDOM.test(pageCurrentURL)) {
            if (window.location.search.length > 1) {
                var KeyValPs = [];
                var QVals = [];
                KeyValPs = window.location.search.substr(1, window.location.search.length).split("&");
                for (var i = 0; i < KeyValPs.length; i++) {
                    QVals[i] = KeyValPs[i].split('=');
                    if (QVals[i][0] === 'q') {
                        TKeysObj.kw = QVals[i][1].replace(/%20/g, ' ');
                    }
                    else if (QVals[i][0] === 'queryText') {
                        TKeysObj.kw = QVals[i][1].replace(/\+/g, ' ');
                    }
                }
            }
            if (window.location.pathname.indexOf('/search') != -1) {
                TKeysObj['sssp'] = TKeysObj['ssp'];
                TKeysObj['sscg'] = TKeysObj['scg'];
                delete TKeysObj['ssp'];
                delete TKeysObj['scg'];
            }
        }

        TKeysObj.stick = '0';
        if (DFPTargetKeys.reqHeaders.domainCategory != 'cme' && DFPTargetKeys.reqHeaders.device == 'PC') {
            if (pageCurrentURL.indexOf('viewarticle') !== -1) {
                TKeysObj.stick = '7,31';
            }
            else if (DFPTargetKeys.webSegVars.pc.indexOf('slideshow') !== -1) {
                if (locale == 'us') {
                    TKeysObj.stick = '23';
                }
            }
            else if (DFPTargetKeys.pageSegVars.art != "0") {
                if (pageCurrentURL.indexOf('emedicine') !== -1 || pageCurrentURL.indexOf('reference') !== -1) {
                    TKeysObj.stick = '16,41';
                    if (typeof s_test1 !== 'undefined') {
                        if (s_test1 == "ott-tlb_ctrl")
                            TKeysObj.stick = '51,41';
                        else if (s_test1 == "ott-tlb_test1")
                            TKeysObj.stick = '52,41';
                    }
                }
            }
        }
        if (pageCurrentURL.indexOf('mtv') !== -1) {
            if (DFPTargetKeys.reqHeaders.device == 'MOBILE') {
                TKeysObj.stick = '61';
            } else if (DFPTargetKeys.reqHeaders.device == 'PC') {
                TKeysObj.stick = '63';
            } else if (DFPTargetKeys.reqHeaders.device == 'IPAD') {
                TKeysObj.stick = '62';
            } else {
                TKeysObj.stick = '63';
            }
        }

        // pass msi parameter to the ad call to determine the test and experience
        if (DFPTargetKeys.reqHeaders.domainCategory != 'cme' && DFPTargetKeys.reqHeaders.device == 'MOBILE') {
            if (DFPTargetKeys.webSegVars.pc.indexOf('slideshow') !== -1) {
                if (typeof s_test2 !== 'undefined') {
                    if (s_test2 == "ott-msi_ctrl")
                        TKeysObj.msi = '0';
                    else if (s_test2 == "ott-msi_test1")
                        TKeysObj.msi = '1';
                    else if (s_test2 == "ott-msi_test2")
                        TKeysObj.msi = '2';
                    else if (s_test2 == "ott-msi_test3")
                        TKeysObj.msi = '3';
                } // end if
            } // end if
        } // end if


        // non virtual page
        TKeysObj.vp = '0';

        if (window.location.href.indexOf("DfpUat") !== -1) {
            var NewUATVals = profads.ads2.DfpUatCap();
            TKeysObj.occ = NewUATVals.occ;
            TKeysObj.pf = NewUATVals.pf;
            TKeysObj.tar = NewUATVals.tar;
            TKeysObj.tc = NewUATVals.tc;
            if (NewUATVals.usp !== '0') {
                TKeysObj.usp = NewUATVals.usp;
            }
            if (NewUATVals.hasOwnProperty("pb")) {
                TKeysObj.pb = NewUATVals.pb;
            }
            if (NewUATVals.hasOwnProperty("dt")) {
                TKeysObj.dt = NewUATVals.dt;
            }

            TKeysObj.val = NewUATVals.val;
        }
        if (s_responsive_design) {
            TKeysObj.bp = profads.ads2.getBrkPnt();
        }
        //console.log(TKeysObj);

        //alert(JSON.stringify(TKeysObj));

        return TKeysObj;
    }
};
/* New namespace with its own methods for lasy loading the bottom leaderboard */
var lazyLoadBlb;

// lazy load on emedicine, reference and viewarticle only
var bNews = false;
if (typeof DFPTargetKeys !== "undefined" && typeof DFPTargetKeys.reqHeaders !== "undefined") {
    if (DFPTargetKeys.reqHeaders.domainCategory !== 'cme') {
        if (pageCurrentURL.indexOf('viewarticle') !== -1||pageCurrentURL.indexOf('emedicine') !== -1 || pageCurrentURL.indexOf('reference') !== -1) {
            bNews = true;
        }
    }
}
lazyLoadBlb = window.lazyLoadBlb || {};
lazyLoadBlb = {
    lazyLoadBlbSettings: {
        $window: $(window),
        lazyLoadHeight: -90,
        refresh: false,
        isiPad: false
    },

    init: function () {
       
        if (!bNews)
            return;
        
        
        
        lazyLoadBlb.isiPad = navigator.userAgent.match(/iPad/i);
        
        if ($('div[id^="ads-pos-141"]').length > 0) {
            var id141 = $('div[id^="ads-pos-141"]').attr("id");
            webmd.ads2.defineAd({
                id: id141,
                pos: '141',
                collapseAfter: true
            });
        }


        $(window).on('scroll', lazyLoadBlb.lazyLoadBlbscrollHandler);
    },

    refresh: function () {
        if (!bNews)
            return;
        $(window).on('scroll', lazyLoadBlb.lazyLoadBlbscrollHandler);
        lazyLoadBlb.lazyLoadBlbSettings.refresh = true;
    },

    isTriggerPointofElementInViewPort: function (el, pt) {
        // get the bounding rect for the element
        var el = el[0];
        var rect = el.getBoundingClientRect();

        // get the viewport dimensions of the document
        var width = $(window).width();
        var height = $(window).height();

        // if ipad use the screen dimensions
        if (lazyLoadBlb.isiPad) {
            // check the orientation and adjust the height
            if (window.innerHeight < window.innerWidth)
                height = screen.width; // for landscape
            else height = window.innerHeight; // for portrait
        } // end if

        // compute trigger point and test if it's in viewport
        pt = (rect.top - pt);
        return (pt >= 0 && pt <= (height));
    },

    lazyLoadBlbscrollHandler: function () {
        var blb = $('div[id^="ads-pos-141"]');
        if (blb.length) {
            // make sure the #ads-pos-141 div container is showing to get the proper offset
            // According to jQuery documentation, offset does not work if an element has a
            // display none
            blb.show();
            if (lazyLoadBlb.isTriggerPointofElementInViewPort(blb, lazyLoadBlb.lazyLoadBlbSettings.lazyLoadHeight)) {
                lazyLoadBlb.disableLazyLoadBlb();
                if (lazyLoadBlb.lazyLoadBlbSettings.refresh) {
                    webmd.ads2.refresh({pos: 141}, false);
                    lazyLoadBlb.lazyLoadBlbSettings.refresh = false;
                }
                else {
                    if (window.ads2_ignore["141"] === "true") {
                        window.ads2_ignore = {};
                        var id141 = $('div[id^="ads-pos-141"]').attr("id");
                        webmd.ads2.defineAd({id: id141,pos: '141'});
                        
                        if ($.inArray(DFPTargetKeys.pageSegVars.cg, ["501", "502", "503", "504", "505", "508"]) != -1) {
                            webmd.ads2.refresh({id: id141});
                        }
                    }
                    else {
                        var id141 = $('div[id^="ads-pos-141"]').attr("id");
                        webmd.ads2.defineAd({id: id141,pos: '141'});
                        
                        if ($.inArray(DFPTargetKeys.pageSegVars.cg, ["501", "502", "503", "504", "505", "508"]) != -1) {
                            webmd.ads2.refresh({pos: 141});
                        }
                    }
                }
            }
        }
    },
    disableLazyLoadBlb: function () {
        $(window).off('scroll', lazyLoadBlb.lazyLoadBlbscrollHandler);
    }
};