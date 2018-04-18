// Copyright 2011 Google Inc. All Rights Reserved.

// This is glue code integrating Documill Floating Previewer to GSA default
// UI. It looks through search results and prepares those results that are
// supported file types and finally calls api of Floating previewer to turn
// on preview functionality.

(function($) {

  $(document).ready(function() {

    // Set localized message strings to Floating previewer
    if (window.previewer_i18n_messages) {
      DPS.uiStrings = window.previewer_i18n_messages;
    }

    DPS.disableHighlights = true;

    // page_query is global JS variable in GSA default stylesheet
    var query = window.page_query || '';

    $('p.g').each(function() {
      var self = $(this);
      var siblings = self.add(self.nextUntil('.g, p'));
      siblings.wrapAll('<div class="result-item" />');
    });

    $('.result-item').each(function() {
      var self = $(this);
      var type = self.find('p.g font b').text();

      switch ($.trim(type))
      {
      case '[DOCX]':
      case '[MS POWERPOINT]':
      case '[MS WORD]':
      case '[PDF]':
      case '[PPTX]':
        initPreviewer(self, query);
        break;
      default:
        // Non-previewable content type
        break;
      }

    });

    DPS.FP.setPositioningFunction(customPositioner);

    //Enable previews by default
    DPS.FP.togglePreviews('result-item');
  });

  function initPreviewer($resultItem, query) {
    $resultItem.css('position', 'relative');

    var url = $resultItem.find('a').first().attr('href');

    // SMB and Database urls are rewritten by stylesheet. Change into form
    // they would be if they exist in PreviewData
    if (url.indexOf("smb/") == 0) {
      url = 'smb://' + url.substr(4);
    } else if (url.indexOf("db/") == 0) {
      url = 'googledb://' + url.substr(3);
    }
    if (url.indexOf("file://") == 0 && window.PreviewData && !PreviewData[url]) {
      url = 'unc' + url.substr(4);
    }

    // If data exists it is stored to global variable by stylesheet
    if (window.PreviewData) {
      if (PreviewData[url]) {
        $resultItem.append(buildDpsViewerDiv(PreviewData[url], query, url));
        // Add magnifying glass indicators only to those results items
        // which can be previewed
        preparePreviewer($resultItem);
      }
    }
  }

  // Add magnifying glass next to result item, bind handlers.
  function preparePreviewer($resultItem) {
    // Also add magnifying glass icons next to result title
    $resultItem.find('p.g a:first').after(previewIconTemplate.clone().click(function() {
      DPS.FP.togglePreviews('result-item');
      if ($('body').is('.previews-enabled'))
        DPS.FP.showFloatingViewer($resultItem);
    }));

    $resultItem.hover(function() {
      $resultItem.addClass('result-item-hover');
    },function() {
      $resultItem.removeClass('result-item-hover');
    });
  }

  var previewIconTemplate =
    $('<span>&nbsp;</span>').addClass('toggle-preview');

  function buildDpsViewerDiv(jsonString, query, url) {
    var div = $('<div class="dps-viewer"/>');
    div.attr({
      query: JSON.stringify(query),
      service: '/',
      view: 'singlepageviewer',
      url: JSON.stringify(url),
      dps: JSON.stringify(jsonString)
    });
    return div;
  }

  // Custom positioner determines where floating previewer will be displayed
  // relative to its parent element.
  function customPositioner(viewer, parent) {
    var $viewer = $(viewer);
    var $parent = parent ? $(parent) : $viewer.parent();
    var parent_offset = $parent.offset();
    var table = $parent.find('table:first');
    var table_offset = table.offset();

    var scrollBarWidth = 20; // approximation
    var viewport_width = $(window).width() - scrollBarWidth;
    var viewport_height = $(window).height();
    var viewport_top = $(document).scrollTop();
    var viewport_bottom = viewport_top + viewport_height;

    // Choose horizontal position relative to table
    var left = table.width() + table_offset.left - parent_offset.left;

    // Choose vertical position relative to parent
    var top = -100;

    // Make best effort to keep that previewer within the viewport
    var right_edge = parent_offset.left + left + $viewer.width();
    if (right_edge > viewport_width) {
      left -= Math.min(right_edge - viewport_width, table.width());
    }

    var top_edge = parent_offset.top + top;
    var bottom_edge = top_edge + $viewer.outerHeight();

    if (top_edge < viewport_top) {
      // 100 is arbitrary minimum that previewer top must be above parent top
      top += Math.min(viewport_top - top_edge, 100);
    }
    else if (bottom_edge > viewport_bottom) {
      top -= Math.min(bottom_edge - viewport_bottom,
                      top_edge - viewport_top,
                      ($viewer.height() + top - $parent.height()));
    }

    $viewer.css({ top: top, left: left });

    // Arrow should be positioned vertically in middle of parent element
    var arrow = $viewer.find('.floating-viewer-arrow');
    var arrow_width = 25;
    var arrow_height = 35;
    var arrow_top = -top + ($parent.height() - arrow_height) / 2;

    arrow.css({ top: arrow_top, left: -arrow_width });
  }

})(DPS.jQuery);
