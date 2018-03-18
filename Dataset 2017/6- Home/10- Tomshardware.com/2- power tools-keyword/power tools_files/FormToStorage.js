/*global jQuery, BOM:true */
(function ($) {
    'use strict';

    BOM = BOM || {};
    BOM.Data = BOM.Data || {};

    BOM.Data.FormToStorage = function (oConf) {
        this.conf = $.extend({
            form: null,
            sType: 'session',
            sNamespace: 'authentication',
            timestamp: new Date().getTime() + (1000 * 60 * 60 * 24) // 24h later
        }, oConf || {});

        this.storage = new BOM.Data.Storage(this.conf.sType, this.conf.sNamespace);
        if (this.conf.init !== false) {
            this.init();
        }
    };

    BOM.Data.FormToStorage.prototype = {
        init: function () {
            if (this.conf.form !== null) {
                var $form = $(this.conf.form);
                this.storage.set('formToSubmit', $form.serializeForStorage(this.conf.timestamp));
                this.storage.set('formAction', $form.attr('action'));
                this.storage.set('formMethod', $form.attr('method'));
            }
        }
    };

    BOM.Data.FormToStorage.initModule = function (oConf) {
        oConf = oConf || BOM.Data.FormToStorageConf || {};
        new BOM.Data.FormToStorage(oConf);
    };
}(jQuery));