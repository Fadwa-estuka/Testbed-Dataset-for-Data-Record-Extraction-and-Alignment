Bootstrapper.bindDependencyDOMLoaded(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;var searchResults=$("#main-content \x3e p:nth-child(1) \x3e strong");if(searchResults.length>0)if(searchResults.text().toLowerCase().indexOf("no results")>-1){var qryArr=document.location.search.replace(/^\?/,"").split("\x26");var searchTerm="";$.each(qryArr,function(ndx,val){var paramArr=val.split("\x3d");if(paramArr.length===2)if(paramArr[0]==="q"){searchTerm=
paramArr[1];return false}});if(searchTerm.length>0)Bootstrapper._GAMT.__TrackIt(["send","event","search","search - no results",decodeURIComponent(searchTerm).toLowerCase(),{"nonInteraction":1}])}},1688056,[1812914],425174,[265954]);