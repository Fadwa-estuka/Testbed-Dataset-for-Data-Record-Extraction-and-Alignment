/* 
 * function for simple A/B us vs them recommendation test.
 * 
 function baynote_policyLoaded()
{

   if(BaynoteAPI.getPolicy("guide","ok")){
      if(document.getElementById("bn_baynote_recs")) 
		(document.getElementById("bn_baynote_recs")).style.display = "block";
	  if(document.getElementById("bn_non_baynote_recs"))
		(document.getElementById("bn_non_baynote_recs")).style.display = "none";
   } else {
	if(document.getElementById("bn_non_baynote_recs"))
		(document.getElementById("bn_non_baynote_recs")).style.display = "block";
      if(document.getElementById("bn_baynote_recs")) 
		(document.getElementById("bn_baynote_recs")).style.display = "none";
		}	 
	
}
 * */

 
//Custom method to find meta content by meta name
function bn_getMeta(meta_name) {
	var metas = document.getElementsByTagName("meta");
	if (!metas) return;
	for (var i = 0; i < metas.length; i++) {
		if (!metas[i]) return;
		if (metas[i].name.toLowerCase() == meta_name.toLowerCase()) {
			return metas[i].content;
		}
	}
}

function bn_escapeValue(value) {
	value = value.replace(/([^\\])"/g, '$1\\\"');
	value = value.replace(/([^\\])'/g, "$1");
	return value;
}

function bn_setCategories(tag) {
	var entityUpdates = [];
	tag.docAttrs = tag.docAttrs || {};
	var description = bn_getMeta("description");
	if ( BaynoteAPI.isNotEmpty(description) ){
		entityUpdates.push({
			"name":"document",
			"id":location.href,
			"attr":"description",
			"values":[bn_escapeValue(description)]});
		tag.docAttrs.description = description;
	}
	else {
		entityUpdates.push({
			"name":"document",
			"id":location.href,
			"attr":"description",
			"values":['']});
		tag.docAttrs.description = '';
	}
	var catRegex = new RegExp("^http://[^.]+\.delta\.com/content/www/[a-z_A-Z]{5}/(traveling-with-us|skymiles)(?:\.html|/([^/.]+)(?:\.html|/([^/.]+)(?:\.html|/([^/.]+)\.html)))");
	var match = [];
	match = catRegex.exec(location.href);
	if (match) {
		if (typeof match[1] != "undefined") {
			entityUpdates.push({
				"name":"document",
				"id":location.href,
				"attr":"ParentCat",
				"values":[bn_escapeValue(match[1])]});
		}
		if (typeof match[2] != "undefined") {
			entityUpdates.push({
				"name":"document",
				"id":location.href,
				"attr":"SubCategoryLevel1",
				"values":[bn_escapeValue(match[2])]});
		}
		if (typeof match[3] != "undefined") {
			entityUpdates.push({
				"name":"document",
				"id":location.href,
				"attr":"SubCategoryLevel2",
				"values":[bn_escapeValue(match[3])]});
		}
		if (typeof match[4] != "undefined") {
			entityUpdates.push({
				"name":"document",
				"id":location.href,
				"attr":"SubCategoryLevel3",
				"values":[bn_escapeValue(match[4])]});
		}
	}
	// Code to exclude ": Delta Air Lines" OR "| Delta Air Lines" from the title tag
	var getTitleTag = document.getElementsByTagName("title")[0];
	var captureOnlyTitlePart = getTitleTag.innerHTML;
	var title;
	if (captureOnlyTitlePart.includes(':')) {
		title = captureOnlyTitlePart.split(" : ")[0];
	} else if(captureOnlyTitlePart.includes('|')) {
		title = captureOnlyTitlePart.split(" | ")[0];
	}
	else
		title = captureOnlyTitlePart;
	entityUpdates.push({
		"name":"document",
		"id":location.href,
		"attr":"title",
		"values":[bn_escapeValue(title)]});
	bnObserver.soEnabled = true;
	bnObserver.registerEntityUpdates(entityUpdates);
}
  
 

function myPreHandler(tag) { 

	if (typeof tag != 'undefined' &&  typeof tag.type != 'undefined' && tag.type==bnConstants.OBSERVER_TAG)   {	
		//bnMessenger.eventDetailsLimit = 0; // prevent bn_ec from being set
		bn_setCategories(tag);
	} // code that runs before the observer fires

    return true;      
} 

function myPostHandler(tag) {
/*
	if (typeof tag != 'undefined' &&  typeof tag.type != 'undefined' && tag.type==bnConstants.GUIDE_TAG)   {	
		//do stuff after recs have loaded
		}
*/
	return true;
}

   // register the event handler
baynote_globals.onBeforeTagShow.push(myPreHandler);
baynote_globals.onTagShow.push(myPostHandler); 
bnResourceManager.registerResource(baynote_globals.ScriptResourceId); 