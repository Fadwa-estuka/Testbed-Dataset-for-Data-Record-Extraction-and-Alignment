/*global BOM:true, $, document*/
(function iife() {
  BOM = BOM || {};
  BOM.Forum = BOM.Forum || {};

  BOM.Forum.SuggestedTopics = function (conf) {
    this.conf = $.extend({
      fieldAccessor    : null,
      containerAccessor: null,
      event            : 'blur',
      url              : null,
      topicCbAccessor  : null,
      loadedClass      : 'content-loaded',
      collapseClass    : 'icon-chevron-down',
      ajaxLoaderClass  : 'ajaxLoader'
    }, conf || {});

    if (this.conf.init !== false) {
      this.init();
    }
  };

  BOM.Forum.SuggestedTopics.prototype = {
    init: function () {
      if (this.conf.fieldAccessor !== null &&
          this.conf.containerAccessor !== null &&
          this.conf.url !== null &&
          this.conf.topicCbAccessor !== null) {
        $(document).on(this.conf.event, this.conf.fieldAccessor, $.proxy(this.getSuggestedTopics, this));
        $(this.conf.containerAccessor).on('change', this.conf.topicCbAccessor, $.proxy(this.getSuggestedTopicResponse, this));
      }
    },

    getSuggestedTopics: function (event) {
      var text = $(event.target).val();

      if (text.match(/(\w+)/g).length < 3) {
        this.injectSuggestedTopics('');
        return;
      }

      $.ajax({
        url: this.conf.url,
        data: { query: text }
      })
        .done($.proxy(this.injectSuggestedTopics, this));
    },

    injectSuggestedTopics: function (html) {
      $(this.conf.containerAccessor).html(html);
    },

    getSuggestedTopicResponse: function (event) {
      var $input = $(event.target);
      var targetId = $input.data('target');

      // We are binded on the change event but we only want to do the ajax call if the checkbox is checked
      // and we don't want to download a content alreayd loaded (notified by the presence of the "content-loaded" class)
      if ($input.is(':checked') && !$('#' + targetId).hasClass(this.conf.loadedClass)) {

        // Replacing the collapseIcon with a spinner
        var $collapseIcon = $input.next('label[for=' + $input.attr('id') + ']').find('.' + this.conf.collapseClass);
        $collapseIcon.removeClass(this.conf.collapseClass).addClass(this.conf.ajaxLoaderClass);

        $.ajax({
          url: $input.data('href')
        })
          .done($.proxy(this.injectSuggestedTopicResponse, this, $input.data('target')))
          .always($.proxy(function () {
              // Removing the spinner
              $collapseIcon.removeClass(this.conf.ajaxLoaderClass).addClass(this.conf.collapseClass);
          }, this));
      }
    },

    injectSuggestedTopicResponse: function (targetId, html) {
      var $target = $('#' + targetId);
      $target.html(html);
      $target.addClass(this.conf.loadedClass);
    }
  };

  BOM.Forum.SuggestedTopics.initModule = function (conf) {
    conf = conf || BOM.Forum.SuggestedTopicsConf;
    new BOM.Forum.SuggestedTopics(conf);
  };
}());