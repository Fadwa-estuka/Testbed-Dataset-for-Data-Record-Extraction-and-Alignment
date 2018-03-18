/*global jQuery, BOM:true*/
(function ($) {
  'use strict';

  BOM = BOM || {};
  BOM.User = BOM.User || {};

  BOM.User.RestoreUnsavedContent = function (oConf) {
    this.conf = $.extend({
      'form': null,
      'sType': 'local',
      'sNamespace' : 'unsubmitted',
      'submitSerializedForm': false
    }, oConf || {});

    if (this.conf.init !== false) {
      this.init();
    }
  };

  BOM.User.RestoreUnsavedContent.prototype = {
    init: function () {
      this.storage = new BOM.Data.Storage(this.conf.sType, this.conf.sNamespace);
      var savedContent = this.storage._storage.getItem(this.conf.sNamespace);
      var form = new BOM.Data.StorageToFillForm(this.conf);

      if (BOM.User.isConnected && form && this.storage && $.isEmptyObject(JSON.parse(savedContent)) === false) {
        $('body').append(form);
        form.submit();
      }
    }
  };

  BOM.User.RestoreUnsavedContent.initModule = function (oConf) {
    oConf = oConf || BOM.User.RestoreUnsavedContentConf || {};
    new BOM.User.RestoreUnsavedContent(oConf);
  };

  BOM.User.RestoreUnsavedContent.initModuleBulk = function (oConfList) {
    oConfList = oConfList || BOM.User.RestoreUnsavedContentConfList || [];
    for(var i= 0, l=oConfList.length; i<l; i++) {
      new BOM.User.RestoreUnsavedContent(oConfList[i]);
    }
  };
}(jQuery));
