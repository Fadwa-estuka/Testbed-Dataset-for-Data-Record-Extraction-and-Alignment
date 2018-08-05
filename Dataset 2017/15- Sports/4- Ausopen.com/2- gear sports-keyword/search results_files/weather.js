var currentTemp;
function startWeather() {
$.ajax( {
url : "/en_AU/xml/gen/weather/weather.xml",
//url : "/en_AU/featured.xml",
type :'GET',
dataType :'xml',
timeout :10000,
async:false,
error : function() {
//if (console && console.error) { console.error('Error loading weather.xml document') };
},
success : function(xml) {
loadWeather(xml);
displayWeather();
}
});
}
function loadWeather(xmlDoc) {
$(xmlDoc).find("current").each(function() {
currentTemp = new tempObj();
currentTemp.celcius = Math.round($(this).attr('temp'));
currentTemp.fahrenheit = convertToFahrenheit($(this).attr('temp'));
//currentTemp.forecast_high = Math.round($(this).attr('forecast_high'));
//currentTemp.forecast_low = Math.round($(this).attr('forecast_low'));
currentTemp.icon=$(this).attr('icon');
currentTemp.iconalt=$(this).attr('iconalt');
});
}
function tempObj() {
this.celcius;
this.fahrenheit;
}
function convertToFahrenheit(ctemp){
var ftemp = (9/5)*ctemp+32;
return Math.round(ftemp);
}
function displayWeather() {
//jQuery('.celciusContainer').bind('click', function() {
//$('.fahrenheitTemp').html("");
//$('.celciusTemp').html(currentTemp.celcius);
//$('.fahrenheitContainer').addClass('inactiveTemp');
//$('.fahrenheitContainer').removeClass('activeTemp');
//$('.celciusContainer').removeClass('inactiveTemp');
//$('.celciusContainer').addClass('activeTemp');
//$('.highTemp').html(highTemp);
//$('.lowTemp').html(lowTemp);
//});
//jQuery('.fahrenheitContainer').bind('click', function() {
//$('.celciusTemp').html("");
//$('.fahrenheitTemp').html(currentTemp.fahrenheit);
//$('.fahrenheitContainer').removeClass('inactiveTemp');
//$('.fahrenheitContainer').addClass('activeTemp');
//$('.celciusContainer').addClass('inactiveTemp');
//$('.celciusContainer').removeClass('activeTemp');
//$('.highTemp').html(convertToFahrenheit(highTemp));
//$('.lowTemp').html(convertToFahrenheit(lowTemp));
//});
$('.celciusTemp').html(currentTemp.celcius);
$('.farenheitTemp').html(currentTemp.fahrenheit);
//$('.highTemp').html(currentTemp.forecast_high);
//$('.lowTemp').html(currentTemp.forecast_low);
$('.weatherIcon').attr('src','/images/misc/weather/'+currentTemp.icon);
$('.weatherIcon').attr('alt',currentTemp.iconalt);
//var highTemp = $('.highTemp').html();
//var lowTemp = $('.lowTemp').html();
}
$(document).ready(function(){
});
startWeather(); 
