var queryFieldSelector = "#search-bar #query";
var queryFieldSelectorWithTypeahead = "#search-bar #query.typeahead-enabled";

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
  }

function ready() {
  var affiliate_name = $.urlParam('affiliate')

  var engine = new Bloodhound({
    initialize: false,
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: ['hello', 'world'],
    remote: {
      url: "https://search.usa.gov/sayt?name=" + affiliate_name + "&q=%QUERY",
      wildcard: "%QUERY"
    }
  });

  engine.initialize()
    .done(setupTypeaheadWithEngine)
    .fail(function() { console.log('Failed to initialize typeahead.js!'); })

  function setupTypeaheadWithEngine() {
    $(queryFieldSelectorWithTypeahead).typeahead({
        minLength: 2,
        hint: false
      },
      {
        source: engine,
        limit: 1000,
        templates: {
          suggestion: function(data) {
            var typedQuery = $(queryFieldSelectorWithTypeahead).val();
            if (data.indexOf(typedQuery) == -1) { // if the typedQuery is not in the suggestion (i.e. it's misspelled)
              return "<div><strong>" + data + "</strong></div>";
            } else {
              var suggestionSuffix = data.substr(typedQuery.length);
              return "<div>" + typedQuery + "<strong>" + suggestionSuffix + "</strong></div>";
            }
          }
        }
      }
    );
  }

  $(window).resize(function() {
    if ($(window).width() < 400) {
      $(".section--nav-menu").show();
    }
    if ($(window).width() > 400) {
      $('.section--nav-menu').css('display', '');
    }
  });
};

$(document).ready(function() {
  $("#skiplink").click(function(){
    var skipTo="#"+this.href.split('#')[1];

    $("skipTo").attr('tabindex', -1).on('blur focusout', function () {
        $(this).removeAttr('tabindex');
    }).focus();
  });
});

$(document).ready(ready);
$(document).on('page:load', ready);

$(document).on('keypress', queryFieldSelector, submitForm);

function submitForm(e) {
  if (e.keyCode && e.keyCode == 13) {
    e.preventDefault();
    $('#search-bar').submit();
  }
}

$(document).on('typeahead:open', queryFieldSelectorWithTypeahead);

$(document).on('typeahead:selected', queryFieldSelectorWithTypeahead, whenSelected);

function whenSelected() {
  $('#search-bar').submit();
}

function onloadFocus(){
    setTimeout(function() {
        document.getElementById('query').focus()
    }, 10);
}

$(document).ready(function() {
  $query = $('#query'),
    val = $query.val();

  $('#skiplink').click(function(){
    onloadFocus();
  });
  if (val && val.length === 0) {
    onloadFocus();
  }
});


$(document).ready(function() {
  $("#jobs-toggle-link").click(function(){
    $("#jobs-toggle-content").toggle(500);
    $("#jobs-caret-up").toggle();
    $("#jobs-caret-down").toggle();
  });
});
