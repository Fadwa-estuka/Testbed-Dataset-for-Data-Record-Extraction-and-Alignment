$(document).ready(function() {
	var div = document.getElementsByClassName('rightSection');
	var div = div[0];
	div.innerHTML = div.innerHTML + '<div style="width: 45px; height: 50px; display: block; float: left; padding-right: 1.15em; overflow: hidden;"><a href="http://www.ikea.com/webapp/wcs/stores/servlet/InterestItemDisplay?storeId=3&langId=-15"><img style="height: 50px; width: 90px; margin-left: 4px;" src="http://www.ikea-canada.com/header/images/shopping_list_left.png" alt="IKEA Shopping List" title="Shopping List"></a></div>'; 
    div.innerHTML = div.innerHTML + '<div style="width: 45px; height: 50px; display: block; float: left; padding-right: 1.15em; overflow: hidden;"><a href="http://www.ikea.com/webapp/wcs/stores/servlet/OrderItemDisplay?storeId=3&langId=-15&catalogId=11001&orderId=.&priceexclvat=&newLinks=true"><img style="height: 50px; width: 90px; margin-left: -45px;" src="http://www.ikea-canada.com/header/images/shopping_cart_right.png" alt="IKEA Shopping Cart" title="Shopping Cart"></a></div>';

});

