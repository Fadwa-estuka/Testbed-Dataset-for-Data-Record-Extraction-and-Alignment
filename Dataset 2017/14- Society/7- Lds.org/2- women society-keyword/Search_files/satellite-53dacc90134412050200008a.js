_satellite.pushAsyncScript(function(event, target, $variables){
  (function(){
if (typeof (ClickTaleCreateDOMElement) != "function")
{
	ClickTaleCreateDOMElement = function(tagName)
	{
		if (document.createElementNS)
		{
			return document.createElementNS('http://www.w3.org/1999/xhtml', tagName);
		}
		return document.createElement(tagName);
	}
}
var scriptElement = ClickTaleCreateDOMElement('script');
scriptElement.type = "text/javascript";
scriptElement.src = (document.location.protocol=='https:'?
'https://cdnssl.clicktale.net/www11/ptc/f059fd05-fcd9-4478-9176-4e19827b3c04.js':
'http://cdn.clicktale.net/www11/ptc/f059fd05-fcd9-4478-9176-4e19827b3c04.js');
document.body.appendChild(scriptElement);
})();

});
