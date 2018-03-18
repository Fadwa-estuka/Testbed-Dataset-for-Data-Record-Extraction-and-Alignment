/*global jQuery, BOM:true */
(function ($) {
    'use strict';

    BOM = BOM || {};
    BOM.Data = BOM.Data || {};

    BOM.Data.StorageToFillForm = function (oConf) {
        this.conf = $.extend({
            form: null,
            sType: 'session',
            sNamespace: 'authentication',
            submitSerializedForm: false
        }, oConf || {});

        if (this.conf.form === null || this.conf.sNamespace === '') {
            return false;
        }

        // We erase BOM.User.userid to retrieve session data from "visitor" pool
        var savedUserId = BOM.User.userid;
        BOM.User.userid = null;

        this.storage = new BOM.Data.Storage(this.conf.sType, this.conf.sNamespace);

        // We restore the BOM.User.userid
        BOM.User.userid = savedUserId;

        return this.getForm();
    };

    BOM.Data.StorageToFillForm.prototype = {
        getForm: function () {
            var action = this.storage.remove('formAction');
            var method = this.storage.remove('formMethod');

            var output = '<form action="' + action + '" method="' + method + '" class="h">';
            var serializedForm = this.storage.remove('formToSubmit');
            if (serializedForm) {
                var unserializedElements = $.unserializeForStorage(serializedForm);
                for (var i = 0; i < unserializedElements.length; i++) {
                    if (unserializedElements[i].name !== 'timestamp') {
                        output += this.createField(unserializedElements[i].name, unserializedElements[i].value);
                    }
                }
            }

            output += '</form>';
            return $(output);
        },
        createField: function (name, value) {
            value = this.sanitizeValue(value);
            return '<input type="hidden" name="' + decodeURIComponent(name) + '" value="' + value + '"/>';
        },
        sanitizeValue: function (value) {
            return value.replace(/"/g, "&quot;");
        }
    };

    BOM.Data.StorageToFillForm.initModule = function (oConf) {
        oConf = oConf || BOM.Data.StorageToFillFormConf || {};
        new BOM.Data.StorageToFillForm(oConf);
    };
}(jQuery));