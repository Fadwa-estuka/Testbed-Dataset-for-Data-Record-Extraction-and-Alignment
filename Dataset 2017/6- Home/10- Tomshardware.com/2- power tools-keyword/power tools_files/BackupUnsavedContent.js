/*global jQuery, BOM:true*/
(function ($) {
  'use strict';

  BOM = BOM || {};
  BOM.User = BOM.User || {};

  BOM.User.BackupUnsavedContent = function (oConf) {
    this.conf = $.extend({
      'form': null,
      'sType': 'local',
      'sNamespace' : 'unsubmitted'
    }, oConf || {});

    if (this.conf.init !== false) {
      this.init();
    }
  };

  BOM.User.BackupUnsavedContent.prototype = {
    init: function () {
      this.formToStorage = new BOM.Data.FormToStorage(this.conf);
    },
    clear: function() {

    }
  };

  BOM.User.BackupUnsavedContent.initModule = function (oConf) {
    oConf = oConf || BOM.User.BackupUnsavedContentConf || {};
    new BOM.User.BackupUnsavedContent(oConf);
  };
}(jQuery));