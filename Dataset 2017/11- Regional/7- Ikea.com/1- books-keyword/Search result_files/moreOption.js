
    
    /**
* Calss DataStructure - maintain the data structure for moreOption
* jslint browser: document, $, IkeaMiniPip, Class, $$, jsonPartNumbers, PresentationLayer, Pintip, updateCheckbox, IowsCommon, AjaxRequestObject, Template, Iows, relatedProducts, window, irwStatPageFunctionality, storeId, langId, compareText, compareCont, removeProductToCompare, slideshow, addProductToCompare,dataIndex, formatDimension
* JSP Variables : js_fn_SLIDE_SHOW_ENABLED,js_fn_NLP_PREV_PRICE_CROSSOVER_ENABLED,
js_fn_TRO_PREV_PRICE_CROSSOVER_ENABLED,js_fn_INSTEAD_OF, Template, js_fn_MORE_OPTIONS, js_fn_MORE_OPTIONS_FOR, js_fn_CAL_URL_TEXT, js_fn_CAL_LEGAL_TEXT, js_fn_CAL_URL_REF, js_fn_CAL_MORE_INFO, js_fn_SLIDE_SHOW_IDS, js_fn_REGULAR_PRICE, js_fn_DISCLAIMER, irwStatPageFunctionality, irwstats_locale
**/
var DataStructure = (function () { 
    /*public variables*/
    var dataStructure = {};
    dataStructure.arrayOfNodes = new Array();    
    dataStructure.matchingNodes = new Array();    
    dataStructure.complementaryNodes = new Array();    
    dataStructure.wppExpressionMatchingArr;
    dataStructure.wppComplementaryArr;
    dataStructure.isMatchingTab;
    dataStructure.isCompleTab;        
    
    /**
    * Function for find the query string
    **/
    function getQuerystring(key) {    
        var regex, qs;
        key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
        qs = regex.exec(window.location.href);
        if (qs === null) {            
            return null;            
        } else {
            return qs[1];
        }
    }
    /**
    * Function for maintain the products
    **/    
    function createProdArray(pagNumber) {
        var productsArray, arrayLength, startPos, endPos, maxProd;
        maxProd = 25;
        productsArray = js_fn_SLIDE_SHOW_IDS;
        arrayLength = productsArray.length;           
        if (pagNumber !== null) {        
            startPos = ((pagNumber * maxProd) - maxProd);
            endPos = (startPos + maxProd);
            dataStructure.productsArray =   productsArray.slice(startPos, endPos);
        } else {
            dataStructure.productsArray =   productsArray.slice(0, maxProd);
        }        
    }
    /**
    * Doubly linked list defenition
    **/
    function DoublyLinkedList() {
        this.head = null;  
        this.tail = null;
        this.length = 0;
    }   
    /**
    * Inherting Doubly linked list
    **/    
    DoublyLinkedList.prototype = {
        constructor: DoublyLinkedList, 
        addData: function (data) { 
            if (data.data !== undefined) {  
                var node = data;                
            } else {                
                var node = { 
                    data: data, 
                    next: null,
                    prev: null
                };
            }            
            if (this.length === 0) {
                this.head = node;
                this.tail = node;
            } else {        
                //attach to the tail node
                this.tail.next = node;
                node.prev = this.tail;
                this.tail = node;
            }               
            this.length =  this.length + 1;    
        }        
    };
    /**
    * onClick of next arrow - new node will be created for the next item in the json array 
    * and added to the doubly linkedlist and Ajax request send
    **/
    dataStructure.updateNextInLinkedList = function () {   
        var splitStr, index, jsonArray, nodes, value, tempVar, dataIndex, length, count, strtIndex;
        splitStr = PresentationLayer.initialProdId.split('_');   
        index = splitStr[2];   
        jsonArray = dataStructure.getJsonArray();
        nodes = dataStructure.getNodeArray();
        //to get the wpp of current product
        value = jsonArray[index - 1];
        //to get node of current item
        tempVar = nodes[index - 1];   
        if (tempVar.data !== undefined) {                
            dataIndex = value.indexOf(tempVar.data);       
        } else {                   
            dataIndex = value.indexOf(tempVar.tail.data);                 
        }        
        length = value.length - dataIndex;
        if (length > 4) {
            length = dataIndex + 4;
        } else {
            length = value.length;
        }
        strtIndex = dataIndex;
        for (count = strtIndex; count < length; count += 1) {
            if (count === (strtIndex + 1)) {
                //send ajax request for next item
                dataStructure.triggerAjaxRequest(value[count], true, jsonArray, "next");
            } else {  
                 //send ajax requests for alternate clicks
                if ((strtIndex + 1) % 2 !== 0) {
                    dataStructure.triggerAjaxRequest(value[count], false);
                }
            }
        }
         // Send data to web analytics
        irwStatPageFunctionality("function>change style", "more options");
    };   
    /**
     * onClick of previous arrow - Ajax request is send for the previous node in the doubly linked list 
     **/    
    dataStructure.updatePrevInLinkedList = function () { 
        var splitStr, index, nodes, tempVar, prevValue, jsonArray;
        splitStr = PresentationLayer.initialProdId.split('_');   
        index = splitStr[2];
        jsonArray = dataStructure.getJsonArray();
        nodes = dataStructure.getNodeArray();
        tempVar = nodes[index - 1];
        //send ajax request for the item in the previous node
        if (tempVar.tail.prev !== null) {
            dataStructure.triggerAjaxRequest(tempVar.tail.prev.data, true, jsonArray, "prev");             
        } else {
            dataStructure.triggerAjaxRequest(tempVar.head.data, true, jsonArray, "prev");            
        }
         // Send data to web analytics
        irwStatPageFunctionality("function>change style", "more options");
    };
    /**
     * onLoad of page - node will be created for the default item in the json array 
     * and added the nodes are added to the array.
     **/
    dataStructure.loadPartNumbers = function (arrayOfpartNumbers, nodes, relatedProducts) {    
        var count, value, arrayLen, moreOptionEnabled, pagNumber;
        arrayLen = arrayOfpartNumbers.length;
        for (count = 0; count < arrayLen; count+= 1) {
            value = arrayOfpartNumbers[count]; 
            var node = { 
                    data: value[0], 
                    next: null,
                    prev: null
                };
            //add nodes of default item to the array
            nodes.push(node);
            if (relatedProducts !== null) {
                if (value[0] !== undefined && value[0] !== relatedProducts[count]) {
                    var valueLength = value.length;
                    for (var index = 0; index < valueLength; index++) {
                        if (value[index] === relatedProducts[count]) {
                            break;
                        } else {
                            dataStructure.updateLinkedList(count + 1, "next");
                        }
                    }                                
                }
            }
        }
        moreOptionEnabled = typeof (jsonPartNumbers) !== "undefined" && jsonPartNumbers.length !== 0 ? true : false;
        if (moreOptionEnabled) {
            pagNumber = getQuerystring('pageNumber');
            createProdArray(pagNumber);           
        }
    };
    /**
     * onClick of arrow - ajax request send for previous and next arrows.
     **/
    dataStructure.triggerAjaxRequest = function (partNumber, isResponseReq, jsonArray, action) {
        var locale, url, ajaxParams, inputParams, countryCode, languageCode; 
        countryCode = irwstats_locale.replace(/^[a-z]{2}_/, '').toLowerCase();
        languageCode = irwstats_locale.replace(/_[A-Z]+$/, '');
        locale = '/' + countryCode + '/' + languageCode + '/';
        url = locale + "catalog/products/" + partNumber;
        url = url + "?type=" + IowsCommon.type + "&dataset=" + IowsCommon.dataset;
        ajaxParams = {"url" : url, "contentType" : 'application/xml', "asyncFlag" : true, "singletonFlag" : false};
        inputParams = {"handlerId" : "moreOption", "isResponseReq" : isResponseReq, "partNumber" : partNumber, "jsonArray" : jsonArray, "action" : action};
        new AjaxRequestObject(ajaxParams, inputParams);
    };
    /**
     * onClick of arrow - ajax request send for previous and next arrows.
     **/
    dataStructure.getJsonArray = function () {
        var jsonArray; 
        if (dataStructure.isCompleTab) {            
            jsonArray = dataStructure.wppComplementaryArr;
        } else if (dataStructure.isMatchingTab) {
            jsonArray = dataStructure.wppExpressionMatchingArr;
        } else {
            jsonArray = jsonPartNumbers;
        }
        return jsonArray;
    };
    /**
     * onClick of arrow - ajax request send for previous and next arrows.
     **/
    dataStructure.getNodeArray = function () {
        var nodes;
        if (dataStructure.isCompleTab) {
            nodes = dataStructure.complementaryNodes;
        } else if (dataStructure.isMatchingTab) {
            nodes = dataStructure.matchingNodes;
        } else {
            nodes = dataStructure.arrayOfNodes;
        }
        return nodes;
    };
    /**
     * onClick of arrow - updating the linked list
     **/
    dataStructure.updateLinkedList = function (index, action) {
        var jsonArray, nodes, value, tempVar, dataIndex;
        jsonArray = dataStructure.getJsonArray();
        nodes = dataStructure.getNodeArray();
         //to get the wpp of current product
        value = jsonArray[index - 1];
        tempVar = nodes[index - 1];
        if (action === "next") {
            if (tempVar.data !== undefined) {
               //if the array contain node create a linked list and add node to it             
                var doublyLinkedList = new DoublyLinkedList();
                dataIndex = value.indexOf(tempVar.data);
                doublyLinkedList.addData(tempVar);
                doublyLinkedList.addData(value[dataIndex + 1]);
                nodes[index - 1] = doublyLinkedList;                  
            } else {
                //create node for next item and add it to linked list
                dataIndex = value.indexOf(tempVar.tail.data);
                tempVar.addData(value[dataIndex + 1]);
                nodes[index - 1] = tempVar;                     
            }
        } else {
            if (tempVar.tail.prev !== null) {
                prevValue = tempVar.tail.prev.prev;
                tempVar.tail =   tempVar.tail.prev;
                tempVar.tail.prev = prevValue;
            } else {
                tempVar.head.next = tempVar.head;
                tempVar.head = null;
            }
        }
        //update energy label
         energyLabelSmall();
                       
    };
    return dataStructure;
}());

/**
* Calss PresentationLayer - handle all the functions for presenation part of the moreOption
**/
var PresentationLayer = (function () {
    var presenation = {};
    presenation.initialProdId;
    /**
    * PRIVATE FUNCTIONS
    **/
    function StringBuffer() {
        this.__strings__ = new Array();
    }    
    StringBuffer.prototype.append = function (str) {
        this.__strings__.push(str);
    };
    StringBuffer.prototype.length = function () {
        return this.__strings__.join("").length;
    };
    StringBuffer.prototype.toString = function () {
        return this.__strings__.join("");
    };
    StringBuffer.prototype.indexOf = function (str) {
        return this.__strings__.join("").indexOf(str);
    };
    /**
    * Function for evaluating the price conditions  
    **/
    function evaluateDisplayConditions(item) { 
        if (item.prices.hasFamilyPrice) {
            item.prices.normal.priceNormal.nlp = false;
            item.prices.normal.priceNormal.tro = false;
            item.bti = false;
        } else if (item.prices.normal.priceNormal.tro) {
            item.prices.normal.priceNormal.nlp = false;
            item.bti = false;
        } else if (item.isNew || item.bti) {
            item.prices.normal.priceNormal.nlp = false;
        }
    }    
    /**
    * Tempalte for minipip  
    **/
    function baseProdDetailTemplate(miniPipString, item, pageStatus) {
        miniPipString.append('<div class=\"productPadding\">');                
        if (item.isNew === true) { 
            miniPipString.append('<img border=\"0\" class=\"newImgSmall\" alt=\"#{newImgAlt}\" src=\"#{newImgSrc}"/>');
        } else if (item.prices.normal.priceNormal.nlp) {
            miniPipString.append("<img class=\"nlpImage\" src=\"#{nlpImgSrc}\" border=\"0\"/>");
        }
        miniPipString.append("<a href=\"#{URL}\">");
        miniPipString.append("<div><img class=\"popupImg\" src=\"#{images.thumb[0]}\" /> </div> <div class=\"clear\"></div>");                    
        if (item.bti === true) {
            miniPipString.append("<div class=\"productBtiBack\" style=\"width:100px\"> <div class=\"productBtiFront\">");
        }
        miniPipString.append("<span class=\"prodName prodNameTro\" id=\"txtNameProduct_#{partNumber}\">#{name}</span> <div class=\"clear\"></div>");
        miniPipString.append("<span class=\"prodDesc\" id=\"txtDescrProduct_#{partNumber}\">#{facts} </span>");
        if (item.prices.hasFamilyPrice) {
            if (item.prices.normal.priceNormalPerUnit.unit !== null) {
                miniPipString.append("<div id=\"txtPriceFamily_#{partNumber}\" class=\"prodFamily\">#{keyFamily}</div><div class=\"prodPriceFamily\">#{prices.familyNormal.priceNormal.value}</div>");
            } else {
                miniPipString.append("<div id=\"txtPriceFamily_#{partNumber}\" class=\"prodFamily\">#{keyFamily}</div><div class=\"prodPriceFamily\">#{prices.familyNormal.priceNormal.value}</div>");
            }            
             if (item.prices.comparePriceExists) { 
                miniPipString.append("<div id=\"comparisonFamContainer\"><span>");
                if(item.prices.unitMeasureEnglish === js_fn_UNIT_MEASURE_EN){
                    miniPipString.append(js_fn_TXT_UNITPRICE)
                }else{
                    miniPipString.append(js_fn_TXT_PRICE+"#{prices.normal.priceNormalPerUnit.unit} ");
                }
                miniPipString.append("</span><span id=\"comparisonFamPrice\"> #{prices.familyNormal.familyComparisonPrice}</span></div>");
            }
            // START: 5.19, IKEA00745003 , namad4
            if (item.prices.hasTemporaryFamilyOffer) {                
                miniPipString.append("<div id=\"familyOfferDate\"  style=\"display: block;\" class=\"troDate\">#{prices.familyNormal.priceNormal.familyofferstartdate} - #{prices.familyNormal.priceNormal.familyofferenddate} <span>" + js_fn_DISCLAIMER + "</span></div>");
            }
            //END: 5.19, IKEA00745003 , namad4
            miniPipString.append("<div class=\"regularPriceHead\">" + js_fn_REGULAR_PRICE + " </div>");
        }
    if ((item.prices.normal.priceNormal.nlp && js_fn_NLP_PREV_PRICE_CROSSOVER_ENABLED ) || (item.prices.normal.priceNormal.tro && js_fn_TRO_PREV_PRICE_CROSSOVER_ENABLED)) {
         miniPipString.append("<span class=\"prevPrice\"> #{prices.normal.priceNormal.previousprice} </span>");
         if (item.prices.normal.priceNormal.perUnit !== null) {
             miniPipString.append("<span class=\"prevPrice\">/#{prices.normal.priceNormal.perUnit}</span>");
         }
     } else {
	  if ((item.prices.normal.priceNormal.nlp && !js_fn_NLP_PREV_PRICE_CROSSOVER_ENABLED ) || (item.prices.normal.priceNormal.tro && !js_fn_TRO_PREV_PRICE_CROSSOVER_ENABLED)){
         // Compare with prodinfo - Modified
		 
         miniPipString.append("<div class=\"prodNlpTroPrice\"><span>" + js_fn_INSTEAD_OF + " </span>#{prices.normal.priceNormal.previousprice} </div>");
         if (item.prices.normal.priceNormal.perUnit !== null) {
             miniPipString.append("<div class=\"prodNlpTroPrice\">/#{prices.normal.priceNormal.perUnit}</div>");
         }
     }
	 }
        miniPipString.append("</span>");
            //Generating html templates for TRO, NLP, Normal price and Family prices 
        if (item.prices.normal.priceNormal.nlp || item.prices.normal.priceNormal.tro) {
            if (item.prices.normal.priceNormal.nlp) { 
                miniPipString.append("<span class=\"prodPrice\" id=\"txtPriceProduct_#{partNumber}\">#{prices.normal.priceNormal.value}");
                if (item.prices.normal.priceNormal.perUnit !== null) {
                    miniPipString.append("<span class=\"perProduct\"> &nbsp;/#{prices.normal.priceNormal.perUnit}</span>");
                }
                if ((typeof (item.prices.normal.priceNormal.nlpstartdate) !== "undefined") && (typeof (item.prices.normal.priceNormal.nlpenddate) !== "undefined")) {
                    miniPipString.append("<div id=\"nlpPrice\"  style=\"display: block;\" class=\"nlpDate\">#{prices.normal.priceNormal.nlpstartdate} - #{prices.normal.priceNormal.nlpenddate} </div>");                
                } else if ((typeof (item.prices.normal.priceNormal.nlpstartdate) === "undefined") && (typeof (item.prices.normal.priceNormal.nlpenddate) !== "undefined")) {
                    miniPipString.append("<div id=\"nlpPrice\"  style=\"display: block;\" class=\"nlpDate\">#{prices.normal.priceNormal.nlpenddate} </div>");                
                } else if ((typeof (item.prices.normal.priceNormal.nlpstartdate) !== "undefined") && (typeof (item.prices.normal.priceNormal.nlpenddate) === "undefined")) {
                    miniPipString.append("<div id=\"nlpPrice\"  style=\"display: block;\" class=\"nlpDate\">#{prices.normal.priceNormal.nlpstartdate} </div>");                
                }
                miniPipString.append("</span> <div class=\"clear\"></div>");            
            } else { 
                miniPipString.append("<span class=\"prodNlpTroPrice\" id=\"txtPriceProduct#{partNumber}\">#{prices.normal.priceNormal.value}");
                if (item.prices.normal.priceNormal.perUnit !== null) {
                    miniPipString.append("<span class=\"troUnit\"><span class=\"perProduct\"> &nbsp;/#{prices.normal.priceNormal.perUnit}</span></span>");
                }
                miniPipString.append("</span>");
                miniPipString.append("<div id=\"troPrice\"  style=\"display: block;\" class=\"troDate\">#{prices.normal.priceNormal.trostartdate} - #{prices.normal.priceNormal.troenddate} <span>" + js_fn_DISCLAIMER + "</span></div>");                
            }
            miniPipString.append(item.prices.displayPrice);
        } else { 
            if (item.prices.isUnitPricePrimary) {
                miniPipString.append("<span class=\"prodPrice\" id=\"txtPriceProduct_#{partNumber}\">#{prices.normal.priceNormalPerUnit.value} /#{prices.normal.priceNormalPerUnit.unit}</span> <div class=\"clear\"></div>");
            } else if (item.prices.normal.priceNormal.perUnit !== null) {
                miniPipString.append("<span class=\"prodPrice\" id=\"txtPriceProduct_#{partNumber}\">#{prices.normal.priceNormal.value}<span class=\"perProduct\"> &nbsp;/#{prices.normal.priceNormal.perUnit}</span></span><div class=\"clear\"></div>");
            } else {
                miniPipString.append("<span class=\"prodPrice\" id=\"txtPriceProduct_#{partNumber}\">#{prices.normal.priceNormal.value}</span> <div class=\"clear\"></div>");
            }
        }
         if (item.prices.comparePriceExists) {
            miniPipString.append("<div id=\"comparisonContainer\"><span>");
            if(item.prices.unitMeasureEnglish === js_fn_UNIT_MEASURE_EN){
                miniPipString.append(js_fn_TXT_UNITPRICE)
            }else{
                miniPipString.append(js_fn_TXT_PRICE+"#{prices.normal.priceNormalPerUnit.unit} ");
            }
            miniPipString.append("</span><span id=\"comparisonPrice\">&nbsp;#{prices.normal.priceNormal.comparisonPrice}</span></div>");
        }  
        if (item.bti === true) {
            miniPipString.append("</div></div>");
        }            
        miniPipString.append("</a>");
        if (item.prices.isWeePrf) {// Compare with prodinfo - Modified
            miniPipString.append("<div id=\"prf#{partNumber}\" class=\"prfcontainer#{btiClass}\">");
            miniPipString.append("<div class=\"lessprice\">#{weee_less_prf} #{prices.normal.priceNormal.priceWithNoPrfCharge}/#{prices.normal.priceNormalPerUnit.unit}</div><div class=\"prflist\">");
            miniPipString.append("<a href=\"javascript:openPrfPopup('prf#{partNumber}')\">#{weee_prf}</a><span>&nbsp;#{prices.normal.priceNormal.prfCharge}/#{prices.normal.priceNormalPerUnit.unit}</span></div></div>");
        }
        miniPipString.append("</div>");
        return miniPipString;
    }
    /**
    * Tempalte for minipip with dimension, addtocat and save to list 
    **/
    function moreProdDetailTemplate(miniPipString, item, pageStatus) {
        var moreOptionsForTxt, measureDiv, dimensionTemplate;
        dimensionTemplate = new Template('<div class=\"prodDimension\">#{dimension}</div>');
        miniPipString.append("<div class=\"cartContainer moreInfo\">");
        if (item.warningDescAttr !== undefined && item.warningDescAttr !== null) { 
            miniPipString.append('<div id="warningsection"><img class="warningImg" src="#{warningDescAttr.attrImage1}" alt="#{warningDescAttr.attrValue}" border="0" />#{warningDescAttr.attrValue}</div>');
        }            
        if (item.isCalTitle20) {
            // Compare with prodinfo - Modified
            miniPipString.append("<div class='lightSource'>" + js_fn_CAL_LEGAL_TEXT + js_fn_CAL_URL_TEXT + "</div><div id='lightSourceMoreInfo'><a href='" + js_fn_CAL_URL_REF + "'>" + js_fn_CAL_MORE_INFO + "</a></div>");
        }
        measureDiv =  Iows.getMeasures(item.measure, dimensionTemplate);
        miniPipString.append(measureDiv);    
        if (item.isGPR) {
            moreOptionsForTxt = js_fn_MORE_OPTIONS_FOR;// Compare with prodinfo - Modified
            moreOptionsForTxt = moreOptionsForTxt.replace('{0}', '#{name} #{facts}');
            // Compare with prodinfo - Modified
            miniPipString.append("<a href=\"#{URL}\" id=\"lnkMoreOptProduct7\" class=\"moreOptions\" title=\"" + moreOptionsForTxt + "\">");
            miniPipString.append(js_fn_MORE_OPTIONS);// Compare with prodinfo - Modified
            miniPipString.append("</a>");
        }
        miniPipString.append("<div class=\"compare\" style=\"display: block;\">");
        miniPipString.append("<input type=\"checkbox\" id=\"#{compare}\" >");
        miniPipString.append("<label for=\"#{compare}\">" + compareText + "</label>");
        miniPipString.append("</div>");    
        miniPipString.append("<div class=\"buttonsContainer\">");
        // Compare with prodinfo - Modified
        if (item.isBuyable === true) {
            miniPipString.append("<div class=\"buttonContainer\"><a onclick=\"activateShopListPopup('addToCart',$('popupAddToCart#{partNumber}')," + storeId + "," + langId + "); return false;\" href=\"#\" class=\"button\" id=\"popupAddToCart#{partNumber}\"><div class=\"buttonLeft\">&nbsp;</div><div class=\"buttonCaption\">#{keyBuyOnline}</div><div class=\"buttonRight\">&nbsp;</div></a></div><div class=\"clear\"></div>");
        }                                              
        miniPipString.append("<div><a onclick=\"activateShopListPopup('add',$('popupShoppingList#{partNumber}')," + storeId + "," + langId + "); return false;\" class=\"listLink floatLeft\" id=\"popupShoppingList#{partNumber}\" href=\"#\">#{keySaveToList}</a></div><div class=\"clear\"></div>");
        if (item.ssc !== undefined) {
            miniPipString.append("<span class=\"linkContainer\">" + item.ssc + "</span>");
        }
        miniPipString.append("</div>");            
        miniPipString.append("</div>");            
        miniPipString.append("</div>");
        return miniPipString;
    }
    /**
    * Tempalte for minipip with dimension, addtocat and save to list for landing page
    **/
    function popupTempLandingPage(miniPipString, item) {
        var newProdList, prodId, moreOptionsForTxt, measureDiv, dimensionTemplate, array, strVal, arrayDimension, i, k; 
        prodId = 'prodId'; 
        newProdList = true;
        miniPipString.append('<div class=\"product\">'); 
        miniPipString.append(presenation.showMoreOption(prodId, newProdList));
        miniPipString.append('<div class=\"image\"><a onclick=\"irwStatTopProductClicked();\" class=\"productLink\" href=\"#{URL}\">');
        miniPipString.append('<img class=\"prodImg\" alt=\"\" src=\"#{images.normal[0]}\" id=\"imgThmbProduct3\">');
        miniPipString.append('</a></div>');
        miniPipString.append('<div class=\"productDetails\">');
        miniPipString.append('<a href=\"#{URL}\" onclick=\"irwStatTopProductClicked();\" style=\"color:#000000\">');
        if (item.isNew === true) { 
            miniPipString.append('<img border=\"0\" class=\"newImgSmall\" src=\"#{newImgSrc}" alt=\"#{newImgAlt}\"/>');
        } else if (item.prices.normal.priceNormal.nlp) {
            miniPipString.append("<img border=\"0\" class=\"nlpImage\" src=\"#{nlpImgSrc}\" />");
        }
        miniPipString.append('<div class=\"productTitle floatLeft\">#{name}</div>');
        miniPipString.append('<div class=\"productDesp\">#{facts}</div>');                
        if (item.prices.hasFamilyPrice) {
            if (item.prices.normal.priceNormalPerUnit.unit !== null) {
                miniPipString.append('<span class=\"prodFamily\">#{keyFamily}</span>');
                miniPipString.append('<span class=\"price\">#{prices.familyNormal.priceNormal.value}</span>');
            } else {
                miniPipString.append('<span class=\"prodFamily\">#{keyFamily}</span>');
                miniPipString.append('<span class=\"price\">#{prices.familyNormal.priceNormal.value}</span>');
            }                        
             if (item.prices.comparePriceExists) { 
                 miniPipString.append("<div id=\"comparisonFamContainer\"><span>");
                 if(item.prices.unitMeasureEnglish === js_fn_UNIT_MEASURE_EN){
                    miniPipString.append(js_fn_TXT_UNITPRICE)
                }else{
                    miniPipString.append(js_fn_TXT_PRICE+"#{prices.normal.priceNormalPerUnit.unit} ");
                }               
                miniPipString.append("</span><span id=\"comparisonFamPrice\">&nbsp #{prices.familyNormal.familyComparisonPrice}</span></div>");
            }
            // START: 5.19, IKEA00745003 , namad4
            if (item.prices.hasTemporaryFamilyOffer) {                
                miniPipString.append("<div id=\"familyOfferDate\"  style=\"display: block;\" class=\"troDate\">#{prices.familyNormal.priceNormal.familyofferstartdate} - #{prices.familyNormal.priceNormal.familyofferenddate} <span>" + js_fn_DISCLAIMER + "</span></div>");
            }
            //END: 5.19, IKEA00745003 , namad4
            miniPipString.append('<div class=\"regularPriceHead\">' + js_fn_REGULAR_PRICE + '</div>');
            // Energy Label Family 5.23
            if (item.prices.hasFamilyPrice && item.productFiche == "true") {
                if(item.energyLabel != null){
                    miniPipString.append('<a class="energy-small" href="javascript:energyLabelBox.open(\'#{partNumber}\');"><span class="energy-arrow-left-small"></span><span class="energy-class-small" value="'+ item.energyLabel +'"></span><span class="energy-class-plus-small"></span><div style="display:none">#{energyRangeNo}</div></a>');
                }
                miniPipString.append('<a class="productFicheSmall" href="javascript:energyLabelBox.open(\'#{partNumber}\');">'+ js_ENERGY_PRODUCT_FICHE +'</a>')
            }
        }
        if (item.bti === true) {
            miniPipString.append('<div class=\"clearAll\"></div>');
            miniPipString.append('<div class=\"btiSpace\"></div><div class=\"productBtiBack\"> <div class=\"productBtiFront\">');
        }
        if (!item.prices.normal.priceNormal.nlp) {
            miniPipString.append('<div class=\"price\">');
        } else {
            miniPipString.append('<div class=\"price floatLeft\">');
        }
        if (item.prices.normal.priceNormal.nlp || item.prices.normal.priceNormal.tro) {
            if (item.prices.normal.priceNormal.nlp) { 
                miniPipString.append('<div>#{prices.normal.priceNormal.value}');
                if (item.prices.normal.priceNormal.perUnit !== null) {
                    miniPipString.append('<span class=\"priceUnitNlp\"> &nbsp;/#{prices.normal.priceNormal.perUnit}</span>');
                }
                miniPipString.append('</div>');            
            } else { 
                miniPipString.append('<div class=\"redPrice floatLeft\">#{prices.normal.priceNormal.value}');
                if (item.prices.normal.priceNormal.perUnit !== null) {
                    miniPipString.append('<span class=\"priceUnitTro\"> /#{prices.normal.priceNormal.perUnit} </span>');
                }
                miniPipString.append('</div>');                            
            }
            miniPipString.append(item.prices.displayPrice);
        } else { 
            if (item.prices.isUnitPricePrimary) {
                miniPipString.append('<div class=\"price \">#{prices.normal.priceNormalPerUnit.value} /#{prices.normal.priceNormalPerUnit.unit}</div>');
                } else if (item.prices.normal.priceNormal.perUnit !== null) {
				if(item.prices.hasFamilyPrice != true && item.productFiche == "true") {
				miniPipString.append('<div class=\"price\">#{prices.normal.priceNormal.value}<span class=\"unit\"> &nbsp;/#{prices.normal.priceNormal.perUnit}</span> <a class="energy-small" href="javascript:energyLabelBox.open(\'#{partNumber}\');"><span class="energy-arrow-left-small"></span><span class="energy-class-small" value="'+ item.energyLabel +'"></span><span class="energy-class-plus-small"></span><div style="display:none">#{energyRangeNo}</div></a></div>');
				}
				else
                miniPipString.append('<div class=\"price\">#{prices.normal.priceNormal.value}<span class=\"unit\"> &nbsp;/#{prices.normal.priceNormal.perUnit}</span></div>');
            } else {
                miniPipString.append('<div class=\"price\">#{prices.normal.priceNormal.value}</div>');
            }
            //energy label start
            if (item.prices.hasFamilyPrice != true && item.productFiche == "true") {
                miniPipString.append('<a class="productFicheSmall" href="javascript:energyLabelBox.open(\'#{partNumber}\');">'+ js_ENERGY_PRODUCT_FICHE +'</a>');
            }
            if(item.bti === true && item.productFiche == "true"){
                if(item.energyLabel != null){
                    miniPipString.append('<a class="energy-small" href="javascript:energyLabelBox.open(\'#{partNumber}\');"><span class="energy-arrow-left-small"></span><span class="energy-class-small" value="'+ item.energyLabel +'"></span><span class="energy-class-plus-small"></span><div style="display:none">#{energyRangeNo}</div></a>');
                }
            }
             if (item.prices.comparePriceExists) {
                miniPipString.append('<div class=\"clearAll\"></div>');
                miniPipString.append("<div id=\"comparisonContainer\"><span>");
                if(item.prices.unitMeasureEnglish === js_fn_UNIT_MEASURE_EN){
                    miniPipString.append(js_fn_TXT_UNITPRICE)
                }else{
                    miniPipString.append(js_fn_TXT_PRICE+"#{prices.normal.priceNormalPerUnit.unit} ");
                }   
                miniPipString.append("</span><span id=\"comparisonPrice\">#{prices.normal.priceNormal.comparisonPrice}</span></div>");
            }
        }                        
        if (item.bti === true) {
            miniPipString.append('</div></div>');
            //Energy label Bti 5.23
            if (item.productFiche == "true") {
                miniPipString.append('<a class="productFicheSmall" href="#">'+ js_ENERGY_PRODUCT_FICHE +'</a>')
            }
        }
        if (item.prices.normal.priceNormal.nlp) {                    
         if (js_fn_NLP_PREV_PRICE_CROSSOVER_ENABLED) {
                     miniPipString.append('</div><div class=\"strikePriceNlp floatLeft\">#{prices.normal.priceNormal.previousprice}');
                if (item.prices.normal.priceNormal.perUnit !== null) {
                    miniPipString.append('<span>/#{prices.normal.priceNormal.perUnit}</span></div>');
                                      } else {
                    miniPipString.append('</div>');
                                                }
            } else {      
                                      
                               miniPipString.append('<div class=\"floatLeft previousPrice\">' + js_fn_INSTEAD_OF +'&nbsp;'+'#{prices.normal.priceNormal.previousprice}');
                if (item.prices.normal.priceNormal.perUnit !== null) {
                    miniPipString.append('<div>/#{prices.normal.priceNormal.perUnit}</div></div>');
                                    miniPipString.append('</div></div>');
                } else {
                                      miniPipString.append('</div></div>');
                             }
            }    
    
            miniPipString.append('<div class=\"clearAll\"></div>');
             if (item.prices.comparePriceExists) {
                miniPipString.append('<div class=\"clearAll\"></div>');
                miniPipString.append("<div id=\"comparisonContainer\"><span>");
                if(item.prices.unitMeasureEnglish === js_fn_UNIT_MEASURE_EN){
                    miniPipString.append(js_fn_TXT_UNITPRICE)
                }else{
                    miniPipString.append(js_fn_TXT_PRICE+"#{prices.normal.priceNormalPerUnit.unit} ");
                }
                miniPipString.append("</span><span  id=\"comparisonPrice\">#{prices.normal.priceNormal.comparisonPrice}</span></div>");
            }
        }
        if (item.prices.normal.priceNormal.tro) {
            if (js_fn_TRO_PREV_PRICE_CROSSOVER_ENABLED) {
                miniPipString.append('<div class=\"strikePrice floatLeft\">#{prices.normal.priceNormal.previousprice}');
                if (item.prices.normal.priceNormal.perUnit !== null) {
                    miniPipString.append('<span>/#{prices.normal.priceNormal.perUnit}</span></div>');
                } else {
                    miniPipString.append('</div>');
                }
            } else {
                miniPipString.append('<div class=\"floatLeft nlpPrevPrice\">' + js_fn_INSTEAD_OF + '#{prices.normal.priceNormal.previousprice} </span>');
                if (item.prices.normal.priceNormal.perUnit !== null) {
                    miniPipString.append('<div>/#{prices.normal.priceNormal.perUnit}</div>');
                }
            }
            miniPipString.append('</div>');
            if (item.prices.comparePriceExists) {
                miniPipString.append('<div class=\"clearAll\"></div>');
                miniPipString.append("<div id=\"comparisonContainer\"><span>");
                if(item.prices.unitMeasureEnglish === js_fn_UNIT_MEASURE_EN){
                    miniPipString.append(js_fn_TXT_UNITPRICE)
                }else{
                    miniPipString.append(js_fn_TXT_PRICE+"#{prices.normal.priceNormalPerUnit.unit} ");
                }
                miniPipString.append("</span><span  id=\"comparisonPrice\" >#{prices.normal.priceNormal.comparisonPrice}</span></div>");
            }
        }         
         
        if (item.prices.normal.priceNormal.nlp || item.prices.normal.priceNormal.tro) {
            if (!item.prices.normal.priceNormal.nlp) { 
                miniPipString.append('<div class=\"clearAll\"></div>');
                miniPipString.append('<div class=\"priceNote\">');
                miniPipString.append('<div class=\"date\">#{prices.normal.priceNormal.trostartdate} - #{prices.normal.priceNormal.troenddate}</div>');                
                miniPipString.append('<div class="detail\">' + js_fn_DISCLAIMER + '</div>');
                miniPipString.append('</div>');
            }
            if (item.prices.normal.priceNormal.nlp) { 
                miniPipString.append('<div class=\"clearAll\"></div>');
                miniPipString.append('<div class=\"priceNote\">');
                if ((typeof (item.prices.normal.priceNormal.nlpstartdate) !== "undefined") && (typeof (item.prices.normal.priceNormal.nlpenddate) !== "undefined")) {
                    miniPipString.append("<div class=\"date\">#{prices.normal.priceNormal.nlpstartdate} - #{prices.normal.priceNormal.nlpenddate} </div>");                
                } else if ((typeof (item.prices.normal.priceNormal.nlpstartdate) === "undefined") && (typeof (item.prices.normal.priceNormal.nlpenddate) !== "undefined")) {
                    miniPipString.append("<div class=\"date\">#{prices.normal.priceNormal.nlpenddate} </div>");                
                } else if ((typeof (item.prices.normal.priceNormal.nlpstartdate) !== "undefined") && (typeof (item.prices.normal.priceNormal.nlpenddate) === "undefined")) {
                    miniPipString.append("<div class=\"date\">#{prices.normal.priceNormal.nlpstartdate} </div>");                
                }
                miniPipString.append('</div>');
            }
        }
        if (!item.prices.normal.priceNormal.tro && !item.prices.normal.priceNormal.nlp) {
            miniPipString.append('</div>');
        }
        miniPipString.append('</a>');
        if (item.prices.isWeePrf) {
            miniPipString.append('<div class=\"prf\">#{weee_less_prf} #{prices.normal.priceNormal.priceWithNoPrfCharge}/#{prices.normal.priceNormalPerUnit.unit}</div>');
            miniPipString.append('<a href=\"javascript:openPrfPopup(\"prf#{partNumber}\")\">#{weee_prf}</a>&nbsp;#{prices.normal.priceNormal.prfCharge}/#{prices.normal.priceNormalPerUnit.unit}');
            miniPipString.append('</div>');
        }            
        if(item.prices.normal.priceNormal.ecoFee && !item.prices.normal.priceNormal.prfCharge){
        miniPipString.append("<div id=\"ecoIncludeTxt\">"+js_fn_FEE_INCLUDING_TXT+"</div>"+"<div class=\"prf\"><a href=javascript:loadFeesLightBox('#{partNumber}')>"+js_fn_ECO_FEE+"</a> "+item.prices.normal.priceNormal.ecoFee+"</div>");
        }//21
        if(item.prices.normal.priceNormal.prfCharge && !item.prices.normal.priceNormal.ecoFee){
        miniPipString.append("<div id=\"ecoIncludeTxt\">"+js_fn_FEE_INCLUDING_TXT+"</div>"+"<div class=\"prf\"><a href=javascript:loadFeesLightBox('#{partNumber}')>"+js_fn_WEE_PRF+"</a> "+item.prices.normal.priceNormal.prfCharge+"</div>");
        }//21
        if(item.prices.normal.priceNormal.ecoFee && item.prices.normal.priceNormal.prfCharge){
        miniPipString.append("<div id=\"ecoIncludeTxt\">"+js_fn_FEE_INCLUDING_TXT+"</div>"+"<div id=\"fees#{partNumber}\">"+"<div class=\"lessprice\"><a href=javascript:loadFeesLightBox('#{partNumber}')>"+js_fn_ECO_FEE+"</a> "+item.prices.normal.priceNormal.ecoFee+"</div><div class=\"lessprice\"><a href=javascript:loadFeesLightBox('#{partNumber}')>"+js_fn_WEE_PRF+"</a> "+item.prices.normal.priceNormal.prfCharge+"</div></div>");
        }//21
        miniPipString.append('<div class=\"moreInfo\">');  
		if(item.avg_rating)
        miniPipString.append('<div class="ratingsContainer"><div class="ratingStarsContainer" style="float: left;width: 80%;"><div class="ratingStarsOffLarge">\u2605\u2605\u2605\u2605\u2605</div><div class="ratingStarsOnLarge" style="width: ' + item.avg_rating + '%">\u2605\u2605\u2605\u2605\u2605</div></div><div class="ratingsCountContainer" style="float: left;width: 20%;display: table;"><a class="ratingsCount" href="'+item.URL+'?bvtab">(' + item.rating_count + ')</a></div></div>');
        if (item.warningDescAttr !== undefined && item.warningDescAttr !== null) { 
            miniPipString.append('<div id="legal"><img class="warningImg" src="#{warningDescAttr.attrImage1}" alt="#{warningDescAttr.attrValue}" border="0" />#{warningDescAttr.attrValue}</div>');
        }                 
        if (item.isCalTitle20) {
            miniPipString.append("<div class='legal'>" + js_fn_CAL_LEGAL_TEXT + js_fn_CAL_URL_TEXT + "</div><div id='lightSourceMoreInfo'><a href='" + js_fn_CAL_URL_REF + "'>" + js_fn_CAL_MORE_INFO + "</a></div>");
        }        
        array = formatDimension(item.measure);
        strVal =  "";
        for (i = 0; i < array.length; i++) {
            if (array[i] !== "null null" && array[i] !== "null") {
                arrayDimension = array[i].replace("<rm><m><d>", "").split(',');                    
                for (k = 0; k < arrayDimension.length; k++) {
                    strVal = strVal + arrayDimension[k];
                    if (k === 2 || arrayDimension.length < 2) {
                        miniPipString.append('<span class=\"size\">' + strVal + '</span>');
                        strVal = "";
                        break; 
                    } else {
                        strVal = strVal + ","; 
                    }
                }
            }
        }
        if (item.isGPR) {        
            moreOptionsForTxt = js_fn_MORE_OPTIONS_FOR;
            moreOptionsForTxt = moreOptionsForTxt.replace('{0}', '#{name} #{facts}');        
            miniPipString.append("<span class=\"options\"><a href=\"#{URL}\" id=\"lnkMoreOptProduct7\" class=\"moreOptions\" title=\"" + moreOptionsForTxt + "\">");
            miniPipString.append(js_fn_MORE_OPTIONS);
            miniPipString.append("</a></span>");
        }                
                
        miniPipString.append("<div class=\"buttonsContainer\">");
        if (item.isBuyable === true) {
           miniPipString.append("<a onclick=\"com.ikea.irw.shoppinglist.SaveToList.init(this.id);return false;\" href=\"#\" class=\"blueBtn\" id=\"popupAddToCart#{partNumber}\">#{keyBuyOnline}</a> ");
        }
        miniPipString.append("<a onclick=\"com.ikea.irw.shoppinglist.SaveToList.init(this.id);return false;\" class=\"orangeBtn\" id=\"popupShoppingList#{partNumber}\" href=\"#\">#{keySaveToList}</a>");  
        if(item.plannerUrl!="") {
            if(item.plannerUrl.endsWith(";_blank")) {
                item.plannerUrl = item.plannerUrl.sub(';_blank','');
                miniPipString.append('<div class="plannerButton" id="productListPlannerButton"><a href="'+item.plannerUrl+'#'+item.partNumber+'" id="innerLinkToPlannerBtn" onclick="irwStatLinkToPlannerClicked("innerLinkToPlannerBtn");vendor.updateProp44Value(&quot;innerLinkToPlanner&quot;, &quot;pip functions&quot;, true)" target="_blank"><img class="plannerButtonImg" src="/ms/img/plannerButton/plannerButton.png" border="0" width="25" height="25">'+js_fn_PLANNER_LINK_TEXT+'</a></div>');              
            }
            else{
                miniPipString.append('<div class="plannerButton" id="productListPlannerButton"><a href="'+item.plannerUrl+'#'+item.partNumber+'" id="innerLinkToPlannerBtn" onclick="irwStatLinkToPlannerClicked("innerLinkToPlannerBtn");vendor.updateProp44Value(&quot;innerLinkToPlanner&quot;, &quot;pip functions&quot;, true)" target="_self"><img class="plannerButtonImg" src="/ms/img/plannerButton/plannerButton.png" border="0" width="25" height="25">'+js_fn_PLANNER_LINK_TEXT+'</a></div>');              
            }
        }
        miniPipString.append('</div>');
        miniPipString.append('</div>');
        miniPipString.append('</div>');
        miniPipString.append('<div class="clearAll"></div>');
        miniPipString.append('</div>');    
    }
    function formatDimension(node) {
        var strVal, i; 
        if (node !== "null null" && node !== "null") {
            strVal = node.split("</v></m><m><d>");
            for (i = 0; i <= strVal.length; i++) {
                node = node.replace("</v></m><m><d>", "\,&nbsp;").replace("</d><v>", ": ");
            }
        }
        return node.split("</v></m></rm>");
    }
    /**
    * Template for moreoption buttons, this will be from IkeaMiniPip.initialize()  
    **/
    presenation.showMoreOption = function (prodId, newProdList) {
        var moreOpt;
        if (!newProdList) {
            if (prodId) {
                moreOpt = "<div id=\"moreOption_" + prodId + "\" class=\"moreOption\">" +
                    "<div id=\"previousButton\" class=\"prevDisabled\"><a href=\"javascript:void(0);\">&nbsp;</a></div>" +
                    "<div id=\"nextButton\" class=\"nextDisabled\"><a href=\"javascript:void(0);\">&nbsp;</a></div>" +
                    "</div>";
            } else {
                moreOpt = "<div id=\"moreOption_#{partNumber}\" class=\"moreOption\">" +
                    "<div id=\"previousButton\" class=\"prevDisabled\"><a href=\"javascript:void(0);\">&nbsp;</a></div>" +
                    "<div id=\"nextButton\" class=\"nextDisabled\"><a href=\"javascript:void(0);\">&nbsp;</a></div>" +
                    "</div>";
            }
        } else {
            moreOpt = "<div class=\"prevDisabled moreProduct\" id=\"previousButton\"><a href=\"javascript:void(0);\">&nbsp;</a></div>" +
                "<div class=\"nextDisabled moreProduct\" id=\"nextButton\"><a href=\"javascript:void(0);\">&nbsp;</a></div>";
        }
        return moreOpt;        
    };    
    /**
    * Template for minipip. 
    **/
    presenation.miniPipTemplate = function (item) {
        var miniPipString, myTemplate;
        evaluateDisplayConditions(item);        
        miniPipString = new StringBuffer();    
        if ($('prodInfoLanding') === null) {
            miniPipString.append('<div class=\"parentContainer\">');
            miniPipString.append(presenation.showMoreOption());
            miniPipString.append(baseProdDetailTemplate(miniPipString, item));        
            miniPipString.append(moreProdDetailTemplate(miniPipString, item));
            miniPipString.append(presenation.updateSlideShowIcon(item));            
            miniPipString.append("</div>"); 
            myTemplate = new Template(miniPipString);
        } else {
            miniPipString.append(popupTempLandingPage(miniPipString, item)); 
            myTemplate = new Template(miniPipString);
        }    
        return myTemplate;
    };
    /**
    * onproduct change - update the minipip with new product.
    * @param {object} item with currnt product details    
    **/
    presenation.changeProductInfo = function (item) {
        var index, prevProdNumber, miniPipTemp, prodInfo, currentId, checkCompare, moreOptionEnabled;
        index = PresentationLayer.initialProdId.split('_')[2];
        moreOptionEnabled = typeof (jsonPartNumbers) !== "undefined" && jsonPartNumbers.length !== 0 ? true : false;
        if (moreOptionEnabled) {
            if ($('prodInfoLanding') === null) {
                prevProdNumber = DataStructure.productsArray[index - 1];
                DataStructure.productsArray.splice((index - 1), 1, item.partNumber);        
                currentId = PresentationLayer.initialProdId.replace("item_", "");
                currentId = currentId.split("_")[0];
                compareCont = $('parent_compare_' + currentId).down('input');
                checkCompare = compareCont.checked ? true : false;
                if (checkCompare === true) {
                    removeProductToCompare(prevProdNumber);
                    addProductToCompare(item.partNumber);
                }
            }
        }
        if ($('prodInfoLanding') === null) {
            if ($('tabContainer') !== null) {
                miniPipTemp = relatedProducts.miniPipTemplate(item, 'moreOpt');
                relatedProducts.updateProduct(item.partNumber);
            } else {
                miniPipTemp = presenation.miniPipTemplate(item);
                slideshow.arrayUpdate(item.partNumber);            
            }    
            prodInfo = miniPipTemp.evaluate(item);
            $('miniPip').down('.productContainer').innerHTML = prodInfo;
            if (moreOptionEnabled) {
                presenation.updateCompareProducts(item.partNumber);   
            }
        } else {
            miniPipTemp = presenation.miniPipTemplate(item);        
            prodInfo = miniPipTemp.evaluate(item);
            $('prodInfoLanding').down('.productLists').innerHTML = prodInfo;

        }
        
        presenation.updateCurrentProduct(prodInfo);
    };
    /**
    * onproduct change - slideshow function wil be updated with new item id. 
    * @param {object} item with currnt itemnumber
    * @return {String} - return slideshow.
    **/
    presenation.updateSlideShowIcon = function (item) {
        var slideshow = "<a class=\"zoom\" title=\"Slideshow\"  href=\"javascript:slideshow.open('" + item.partNumber + "');\">";
        return slideshow;
    };
    
    /**
    * On suces of AJAX Request -  parent conatiner will be updated with latest product and the content.
    * @param {String} prodInfo for updating the initail product container
    **/
    presenation.updateCurrentProduct = function (prodInfo) {
        var elHeight, elObj; 
                    
        if ( $('prodInfoLanding') === null) {
            elObj =  $(PresentationLayer.initialProdId).up().up();
            if(elObj !== null && elObj !== "undefined"){
                if(elObj.id !== null && elObj.id.contains('ProductContainer')){
                    elObj =  $(PresentationLayer.initialProdId).up();
                }
            }
            elHeight = elObj.getHeight() - 10;
            $(PresentationLayer.initialProdId).style.height = elHeight + 'px';
        }
        $(presenation.initialProdId).innerHTML = prodInfo;
    };
    /**
    * changeHeight -  function handling the height of the row.
    **/
    presenation.changeHeight = function () {
        var elObj =  $(PresentationLayer.initialProdId);
        elObj.style.height = 'auto';
    };

    /**
    * On mouseover - read the content from the parent container to show the content inside the minipip.
    * @return {String} - return innerHTML.
    **/
    presenation.contentForMiniPip = function (prodId) {    
        var id  = 'item_' + prodId.split('_')[1] + '_' + prodId.split('_')[2];
        return $(id).innerHTML;
    };    

    /**
    * On mouseout - compare products wil be updated.
    * @param {String} itemNumber for prepare the unique ID for compare button .
    **/    
    presenation.updateCompareProducts = function (itemNumber) {
        var cmpId, compareBox, compareContainer, initialProd;
        cmpId = "display_compare_" + itemNumber;
        initialProd =  presenation.initialProdId.split("_")[1];
        compareContainer = $('parent_compare_' + initialProd);
        compareContainer.down('input').id = cmpId;
    };
    
    /**
    * On mouseover - Bind click events on moreOptionNavigation
    **/    
    presenation.bindClickOnMoreOption = function (obj) {
        var moreOpt, moreOptionEnabled, jsonArray, nodes, nextButton, prevButton, splitStr, index, tempVar, value, nextCount, prevCount;
        if ($('prodInfoLanding') === null) {
            moreOpt = $('miniPip').down('.moreOption');
            moreOptionEnabled = $(moreOpt);
        } else {
            moreOpt = $('prodInfoLanding').down('.moreProduct');
            moreOptionEnabled = $(moreOpt);
        }
        if ($('complementaryProductContainer') !== null) {
            DataStructure.isCompleTab = ($('complementaryProductContainer').getStyle('display') === 'block') ? true : false;
        } 
        if ($('matchingProductContainer') !== null) {
            DataStructure.isMatchingTab = ($('matchingProductContainer').getStyle('display') === 'block') ? true : false;
        }         
        if (DataStructure.isCompleTab) {
            nodes =  DataStructure.complementaryNodes;    
            jsonArray = DataStructure.wppComplementaryArr;
        } else if (DataStructure.isMatchingTab) {
            nodes =  DataStructure.matchingNodes;    
            jsonArray = DataStructure.wppExpressionMatchingArr;
        } else {
            nodes =  DataStructure.arrayOfNodes;    
            jsonArray = jsonPartNumbers;
        }
        if (typeof moreOptionEnabled !== 'undefined') {
            if ($('prodInfoLanding') === null) {
                nextButton = $(moreOpt).down('#nextButton');
                prevButton =  $(moreOpt).down('#previousButton');
            } else {
                nextButton = $('nextButton');
                prevButton =  $('previousButton');
            }
            splitStr = PresentationLayer.initialProdId.split('_');   
            index = splitStr[2];            
            tempVar = nodes[index - 1];
            value = jsonArray[index - 1]; 
            if (tempVar.tail !== undefined) {
                nextCount = value.indexOf(tempVar.tail.data) + 1;
            } else {
                nextCount = value.indexOf(tempVar.data) + 1;
            }           
            if (nextCount !== value.length) {
                if (nextButton.hasClassName('nextDisabled')) {
                    nextButton.removeClassName('nextDisabled');
                    nextButton.addClassName('next');
                    nextButton.observe("click", function () {
                        if ( $('prodInfoLanding') !== null) {
                            com.ikea.irw.shoppinglist.SaveToList.removeErrorMessage();
                        }
                        DataStructure.updateNextInLinkedList();
                    }.bind(this));
                }
            } else {
                if (nextButton.hasClassName('next')) {
                    nextButton.removeClassName('next');
                    nextButton.addClassName('nextDisabled');
                    nextButton.observe("click", function () {
                        DataStructure.updateNextInLinkedList();
                    }.bind(this));
                }
            }
            if (tempVar.tail !== undefined && tempVar.tail.prev !== null && (nextCount - 1) !== 0) {
                if (prevButton.hasClassName('prevDisabled')) {
                    prevButton.removeClassName('prevDisabled');
                    prevButton.addClassName('prev');
                    prevButton.observe("click", function () {
                        if ( $('prodInfoLanding') !== null) {
                            com.ikea.irw.shoppinglist.SaveToList.removeErrorMessage();
                        }
                        DataStructure.updatePrevInLinkedList();
                    }.bind(this));
                }
            } else {
                if (prevButton.hasClassName('prev')) {
                    prevButton.removeClassName('prev');
                    prevButton.addClassName('prevDisabled');
                    prevButton.observe("click", function () {
                        DataStructure.updatePrevInLinkedList();
                    }.bind(this));
                }
            }                 
        }
    };
    /**
    * RETURN PUBLIC FUNCTIONS
    **/
    return presenation;
}());
//Call this method while loading the page
document.observe("dom:loaded", function () {
          if(typeof (jsonPartNumbers) !== "undefined" && jsonPartNumbers.length !== 0){
    DataStructure.loadPartNumbers(jsonPartNumbers, DataStructure.arrayOfNodes, null); 
}   
});

var simple = new function(){

    this.getValue = function(xml,elementPath){
       var xmlDoc = xml;
        if(xmlDoc.evaluate){
        var val = simple.SelectSingleNode(xml,elementPath);
        if(val.attributes.length > 0){
            return val;
        }else{
            return val.textContent;    
        }
        
    }else if(window.ActiveXObject){
        var val = simple.SelectSingleNode(xml,elementPath);
        return val;
    }else
        return null;     
    },

    this.SelectSingleNode = function(xml,elementPath) {
        var xmlDoc = xml;
      if (xmlDoc.evaluate) {       
        var nodes = xmlDoc.evaluate(elementPath, xmlDoc, null, XPathResult.ANY_TYPE, null);
        var results = nodes.iterateNext();
         return results;
      }else if(window.ActiveXObject){      
        var nodes=xmlDoc.selectSingleNode(elementPath);
        if(nodes.attributes.length >0){
            return nodes;
        }else{
            return nodes.text;
        }
      }else
       return xmlDoc.selectSingleNode(elementPath); 
    }  

}

function whichtoShow(ping){
    if(((typeof(ping.getAttribute('prfCharge'))!='undefined') && ping.getAttribute('prfCharge') !=null)&&((typeof(ping.getAttribute('ecoFee'))=='undefined') || ping.getAttribute('ecoFee')==null)){
        return 'prf';
    }else if(((typeof(ping.getAttribute('ecoFee'))!='undefined') && ping.getAttribute('ecoFee') !=null )&&((typeof(ping.getAttribute('prfCharge'))=='undefined') || ping.getAttribute('prfCharge')==null)){    
        return 'eco';
    }else if(((typeof(ping.getAttribute('prfCharge')) !='undefined') && ping.getAttribute('prfCharge') !=null)&&((typeof(ping.getAttribute('ecoFee'))!='undefined') || ping.getAttribute('ecoFee')!=null)){
        return 'all';
    }

}


function theRest(textXML, priceXML){
    priceXML = priceXML.request.transport.responseXML
    textXML = textXML.request.transport.responseXML
    var ping = simple.getValue(priceXML,"//products/product/items/item/prices/normal/priceNormal");
    var totalCost =priceXML.getElementsByTagName('priceNormal')[0].firstChild.data;
    var ecoTexts = textXML;
    var eco = document.createElement('div');
    var show = whichtoShow(ping);
    switch(show){
        case 'all':
            eco.innerHTML ="<div class='ecoBorder'><div class='ecoHeader'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeHeader")+"</div><div class='ecoBody' ><div class='ecoPara'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeSection")+"</div><div class='ecoParaText'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeText")+"</div></div> <div class='ecoBody' ><div class='ecoPara'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeePrfSection")+"</div><div class='ecoParaText'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeePrfText")+"</div></div><div class='ecoPrices'><table id='ecoPricesTable' width='100%'><tr><td align='left'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeWithOutFee")+"</td><td align='right'>"+ping.getAttribute('priceExclFeesFormatted')+"</td></tr><tr><td align='left'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeWithFee")+"</td><td align='right'>"+ping.getAttribute('ecoFeeFormatted')+"</td></tr><tr><td align='left'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeWithPrf")+"</td><td align='right'>"+ping.getAttribute('prfChargeFormatted')+"</td></tr><tr><td align='left'><b>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeTotal")+"</b></td><td align='right'><b>"+totalCost+"</b></td></tr></table></div><div class='ecoLinks'><a href='"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeLinkURL")+"'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeLinkText")+"</a></div></div></div>";
        break;

        case 'prf':
            eco.innerHTML ="<div class='ecoBorder'><div class='ecoHeader'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeHeader")+"</div><div class='ecoBody' ><div class='ecoPara'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeePrfSection")+"</div><div class='ecoParaText'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeePrfText")+"</div></div><div class='ecoPrices'><table id='ecoPricesTable' width='100%'><tr><td align='left'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeWithOutFee")+"</td><td align='right'>"+ping.getAttribute('priceExclFeesFormatted')+"</td></tr><tr><td align='left'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeWithPrf")+"</td><td align='right'>"+ping.getAttribute('prfChargeFormatted')+"</td></tr><tr><td align='left'><b>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeTotal")+"</b></td><td align='right'><b>"+totalCost+"</b></td></tr></table></div><div class='ecoLinks'><a href='"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeLinkURL")+"'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeLinkText")+"</a></div></div></div>";
        break;

        case 'eco':
            eco.innerHTML ="<div class='ecoBorder'><div class='ecoHeader'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeHeader")+"</div><div class='ecoBody'><div class='ecoPara'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeSection")+"</div><div class='ecoParaText'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeText")+"</div></div><div class='ecoPrices'><table id='ecoPricesTable' width='100%'><tr><td align='left'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeWithOutFee")+"</td><td align='right'>"+ping.getAttribute('priceExclFeesFormatted')+"</td></tr><tr><td align='left'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeWithFee")+"</td><td align='right'>"+ping.getAttribute('ecoFeeFormatted')+"</td></tr><tr><td align='left'><b>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeTotal")+"</b></td><td align='right'><b>"+totalCost+"</b></td></tr></table></div><div class='ecoLinks'><a href='"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeLinkURL")+"'>"+simple.getValue(ecoTexts,"//EcoFee/ecoFeeLinkText")+"</a></div></div></div>";
        break;
    }    
    var lb = new Litebox({id:'ecoBox',maxWidth:'375px',content:eco.innerHTML});
    //Added this as the litebox inparameters dont works as described
    $('ecoBox').setStyle({zIndex:'16000'});
}

function loadFeesLightBox(id){
    callOne(id);
}
var jump = false;
var test, test1,language;
function callTwo(){
    if(!jump){
        language=document.getElementsByName('language')[0].content;
        var textUrl= '/ms/'+language.replace("-","_")+'/fees/fees.xml';
        test1 = new AjaxRequest(textUrl);  
        jump = true;  
    }else{
        theRest(test1,test);
    }

    
}
function callOne(id){
    var locale, url, countryCode, languageCode; 
    countryCode = irwstats_locale.replace(/^[a-z]{2}_/, '').toLowerCase();
    languageCode = irwstats_locale.replace(/_[A-Z]+$/, '');
    locale = '/' + countryCode + '/' + languageCode + '/';
    url = locale + "catalog/products/" + id;
    var priceUrl = url+'?type=xml&dataset=normal%2Cprices%2Callimages%2CparentCategories%2Cattributes'
    test = new AjaxRequest(priceUrl); 
}


Ajax.Request.prototype.abort = function() {    
    // prevent and state change callbacks from being issued    
    this.transport.onreadystatechange = Prototype.emptyFunction;  
        
    // abort the XHR    
    this.transport.abort();    
    // update the request counter    
    Ajax.activeRequestCount--;
};

var AjaxRequest = Class.create({

    // this is the constructor of the class 
    initialize: function (url) {
        var request;
        this.execute(url);
    },
    // function used to call createRequest from constructor
    execute: function (url,id) {    
        this.createRequest(url);
     },
    // function to send an ajax request
    createRequest: function (url,id) {
        
        // To destroy the existing request if the flag is set, so as to create a fresh request.
        if (this.request !== null && this.request !== undefined) {        
            this.request.abort();
        }
        
        this.request = new Ajax.Request(url, {
            contentType: 'application/xml',
            method: 'get',
            asynchronus:'false',
            onSuccess: function (response) {
                return response.responseXML;               
            
            },
            onFailure: function () {

            },
            onComplete: function () {
                callTwo();
            }
        });

    }     
});





 

