/**
 * Creates the ORACLE namespace.  Derived from yahoo.js.
 */

if (typeof ORACLE == "undefined" || !ORACLE) {
    /**
     * The ORACLE global namespace object.  If ORACLE is already defined, the
     * existing ORACLE object will not be overwritten so that defined
     * namespaces are preserved.
     * @class ORACLE
     * @static
     */
    var ORACLE = {};
}


/**
 * Returns the namespace specified and creates it if it doesn't exist
 * <pre>
 * ORACLE.namespace("property.package");
 * ORACLE.namespace("ORACLE.property.package");
 * </pre>
 * Either of the above would create ORACLE.property, then
 * ORACLE.property.package
 *
 * Be careful when naming packages. Reserved words may work in some browsers
 * and not others. For instance, the following will fail in Safari:
 * <pre>
 * ORACLE.namespace("really.long.nested.namespace");
 * </pre>
 * This fails because "long" is a future reserved word in ECMAScript
 *
 * @method namespace
 * @static
 * @param  {String*} arguments 1-n namespaces to create 
 * @return {Object}  A reference to the last namespace object created
 */
ORACLE.namespace = function() {
    var a=arguments, o=null, i, j, d;
    for (i=0; i<a.length; i=i+1) {
        d=a[i].split(".");
        o=ORACLE;

        // ORACLE is implied, so it is ignored if it is included
        for (j=(d[0] == "ORACLE") ? 1 : 0; j<d.length; j=j+1) {
            o[d[j]]=o[d[j]] || {};
            o=o[d[j]];
        }
    }

    return o;
};

/*
 * Initializes the global by creating the default namespace for SES.
 *
 * Then create aliases for Bubbling Library functions.
 */
(function() {
    ORACLE.namespace("ses","ses.util");


    if (typeof YAHOO.Bubbling.subscribe === 'function' &&
        typeof YAHOO.Bubbling.fire === 'function' &&
        typeof YAHOO.Bubbling.addLayer === 'function')
    {
        ORACLE.ses.subscribe = function(layer, bh, scope) {
            YAHOO.Bubbling.subscribe(layer, bh, scope);
        }
        ORACLE.ses.on = ORACLE.ses.subscribe;
        ORACLE.ses.fire = function(layer, obj) {
            YAHOO.Bubbling.fire(layer, obj);
        }
        ORACLE.ses.addLayer = function(layers, scope) {
            YAHOO.Bubbling.addLayer(layers, scope);
        }
    }
})();


/*
 * An alias for ORACLE.ses.  Deprecated, but kept for backwards compatibility!
 */
var ses = ses || ORACLE.ses;
