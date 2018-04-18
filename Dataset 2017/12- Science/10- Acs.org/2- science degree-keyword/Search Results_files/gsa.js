/*jshint jquery: true, devel: true */
/*global searchAsYouType: true */
// duckpunch Googles security violatin codes
var _old_XH_XmlHttpPOST = XH_XmlHttpPOST,

    XH_XmlHttpPOST = function (xmlHttp, url, data, handler) {
      xmlHttp.open("POST", url, true);
      xmlHttp.onreadystatechange = handler;
      xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      XH_XmlHttpSend(xmlHttp, data);
    };


(function () {
    var curatedSearch = {
        getCuratedSearchPath: function () {
            var rootDomain = "https://www.acs.org";
            if (acs && acs.sso && acs.sso.loginUrl && acs.sso.loginUrl.indexOf("/bin/acs/sso/login") > -1) {
                rootDomain = acs.sso.loginUrl.replace("/bin/acs/sso/login", "").replace("https:", "http:").replace("http:", window.location.protocol).replace("cmswwwtst", "aemwwwtst");
            }
            return rootDomain + "/etc/designs/acs/curated/acs/_jcr_content.json?cachebuster";
        },
        getParameterByName: function (name) {
            var url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
            var results = regex.exec(url);
            if (!results) {
              return null;
            }
            if (!results[2]) {
              return "";
            }
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        },
        injectCuratedText: function (_text) {
            if ($("#top-navigation").length > 0) {
                return $("#top-navigation").after(_text);
            } else {
                $(".top-sep-bar").parent().find("hr").last().remove()
                return $(".top-sep-bar").parent().find("span").last().html(_text);
            }
        },
        searchByKeywordPromise: function (_searchPath, _searchTerm) {
            var _promise = new $.Deferred();
            var parseResults = function(json){
              var matchedResult = _.find(json.results, function (pg) {
                  return (pg && pg.curatedTag && pg.curatedTag.toUpperCase() === _searchTerm);
              });
              if (matchedResult && matchedResult.hasResultsSnippet) {
                  _promise.resolve(matchedResult);
              } else {
                  _promise.reject("Curated Search - match not found for given search term '" + _searchTerm + "'");
              }
            };
            if (amplify.store("curatedResultSet")) {
              parseResults(amplify.store("curatedResultSet"));
            }else{
              $.getJSON(_searchPath).done(function (json) {
                  amplify.store("curatedResultSet", json, { expires: 86400000 }); //one day expiration
                  parseResults(json);
              }).fail(_promise.reject); // pipe the failure to curatedMatchPromise failure
            }
            return _promise;
        }
    };

    var searchTerm = curatedSearch.getParameterByName("q"); // find the current search term which is already in the dom
    if (searchTerm) {
        searchTerm = searchTerm.toUpperCase();
        curatedSearch.searchByKeywordPromise(curatedSearch.getCuratedSearchPath(), searchTerm).done(function (guy) {
            console.log("Curated Search loaded, injecting content snippet from curated result at path " + guy.path);
            // wait for doc ready before attempting to inject
            $(document).ready(function () {
                var newText = "<div  id='curatedSearchResultsContainer'><div class='container searchCurated'>  <div class='well well-sm' > <div class='legend'>Suggested Results</div>";
                newText = newText + guy.snippet;
                newText = newText + "</div></div></div>";
                return curatedSearch.injectCuratedText(newText);
            });
        }).fail(function (msg) {
            console.log(msg);
        });
    }

}());