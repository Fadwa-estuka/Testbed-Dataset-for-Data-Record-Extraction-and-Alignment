/*global jQuery, BOM */
(function ($) {
  'use strict';


  BOM.Tags = BOM.Tags || {};
  BOM.Tags.PredictCollection = BOM.Tags.PredictCollection ||{};
  var $self = null;

  BOM.Tags.Predict = function (oConf) {
    $self = this;
    this._conf = $.extend({
      titleSel:    '',
      contentSel:  '',
      targetSel:  '',
      triggerSel:  '',
      onEvent:     'blur',
      predictUrl:   null,
      init:   true,
      predictOnInit: false,
      cId : 'default'
    }, oConf || {});

    BOM.Tags.PredictCollection[this._conf.cId] = $self;

    $self._title    =   $($self._conf.titleSel);
    $self._content  =   $($self._conf.contentSel);
    $self._target   =   $($self._conf.targetSel);
    $self._trigger  =   $($self._conf.triggerSel);


    if (this._conf.init !== false) {
      this.init();
    }
  };

  BOM.Tags.Predict.prototype = {

    init: function () {
      $self._trigger.bind($self._conf.onEvent, function() {
        var $extract = true;
        $self._title.add($self._content).each(function(idx, elm){
          var $elm = $(elm);
          if($elm.val() === '' || $elm.hasClass('invalid'))
          {
            $extract = false;
            return false;
          }
        });

        if($extract === true)
        {
          $self.extractTagsAndAddThemToTagField($self._title.val(), $self._content.val(), $self.updateTokenizedTags);
        }
      });


      if($self._conf.predictOnInit === true && $self._title.val() && $self._content.val()) {
        $self.extractTagsAndAddThemToTagField($self._title.val(), $self._content.val(), $self.updateTokenizedTags);
      }
    },

    extractTagsAndAddThemToTagField: function (txtTitle, txtContent, cb, cbError) {
      var tagSuggestParams = {docs:[{'title': txtTitle, 'content': txtContent, createdAt: ''}]};

      var predictUrl = BOM.Utils.decode($self._conf.predictUrl);

      $.post( predictUrl,
            JSON.stringify(tagSuggestParams),
            $.proxy(cb, $self)
      )
      .fail(function() {
        if(typeof cbError === 'function'){
          cbError.call();
        }
      });
    },

    updateTokenizedTags: function (tagsResult) {
      var tags = tagsResult.tags[0];

      $(tags).each(function(idx, tagVal){
        $($self._target).each(function() {
          $(this).tokenInput("add", {name: tagVal});
        });
      });
    },

    predictAndSubmitFormOnEmptyTags: function(formSel){
      var $form = $(formSel);
      if(!$self._target.val())
      {
        $self.extractTagsAndAddThemToTagField($self._title.val(), $self._content.val(),function(tagsResult){
          $self.updateTokenizedTags(tagsResult);
          $form.unbind('submit');
          $form.submit();
        },
        function(){
          $form.unbind('submit');
          $form.submit();
        });
        return false;
      }
      else
      {
        return true;
      }
    }
  };

  BOM.Tags.Predict.initModule = function (oConf) {
    oConf = oConf || BOM.Tags.PredictConf;
    return new BOM.Tags.Predict(oConf);
  };
}(jQuery));