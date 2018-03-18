/*global jQuery, BOM:true, window */
(function ($) {
  'use strict';

  BOM = BOM || {};
  BOM.User = BOM.User || {};

  BOM.User.inlineSignin = function (oConf, startImmediately) {
    this.conf = $.extend({
      'initTriggerSel': '',
      'url': null,
      'inlineFormSel':'',
      'sNamespace': '',
      'init': true
    }, oConf || {});

    this.$initTrigger = this.conf.initTriggerSel && $(this.conf.initTriggerSel);

    if (this.conf.init !== false) {
      this.init(startImmediately);
    }
  };

  BOM.User.inlineSignin.prototype = {

    init: function (startImmediately) {
      if (true === BOM.User.isConnected || !this.conf.url) {
        return true;
      }
      this.bindInlineFormSubmit(startImmediately);
    },


    generateElementSelector: function (jqElement) {
      var selector = '', id = jqElement.attr("id");

      if (id) {
        selector += "#" + id;

      } else {
        selector = jqElement
          .parents()
          .map(function () { return this.tagName; })
          .get()
          .reverse()
          .concat([this.nodeName])
          .join(">");

        var classNames = jqElement.attr("class");
        if (classNames) {
          selector += "." + $.trim(classNames).replace(/\s/gi, ".");
        }
      }
      return selector;
    },

    bindInlineFormSubmit: function (startImmediately) {
      // first we check the selector supplied in "inlineFormSel" otherwise we create a selector for the parent form
      var formSelector = this.conf.inlineFormSel;
      if (!formSelector && this.$initTrigger) {
        var $form = this.$initTrigger.parents('form');
        formSelector = this.generateElementSelector($form);
      }

      var self = this;
      if (startImmediately) {
        self.backupContentAndRedirect(formSelector, self.conf.sNamespace, self.conf.url);
      } else if (this.$initTrigger) {
        this.$initTrigger.unbind('click').click(function () {
          self.backupContentAndRedirect(formSelector, self.conf.sNamespace, self.conf.url);
        });
      } else {
        // Error
        throw new Error('InlineSignin : invalid form selectors !');
      }
    },

    backupContentAndRedirect: function(formSelector, namespace, encodedUrl) {
      new BOM.User.BackupUnsavedContent({
        'form': formSelector,
        'sNamespace': namespace || 'unsubmitted'
      });
      window.location = BOM.Utils.decode(encodedUrl);
    }
  };


  BOM.User.inlineSignin.initModule = function (oConf, startImmediately) {
    oConf = oConf || BOM.User.inlineSigninConf || {};
    new BOM.User.inlineSignin(oConf, startImmediately);
  };

}(jQuery));