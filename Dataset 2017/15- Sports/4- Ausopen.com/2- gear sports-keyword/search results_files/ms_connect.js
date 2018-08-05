var client;
var decryptionKey = 'jop8c8np38hvn390vnh39uv890u3n90fnv90n239vn90239jnv9nkd89jn389uf4';
var messagesight_port = 8000;
/*
* Called when we want to connect to message sight
* TODO : Confirm with hosting if clientIds (3rd param) need to be unique
* This passed a callback to onConnect which is called when we connect into the system
*/
function connectToMessageSight(){
try{
if(window.location.protocol == "https:") {
messagesight_port = 443;
}
client = new Messaging.Client(messagesight_host, messagesight_port, "MSMIP" + createClientId()); 
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
client.connect(
{
onSuccess:onConnect,
onFailure:onConnectFailure,
useSSL: (window.location.protocol == "https:"),
userName: 'scoreboard',
password: 'PA16h9lD3J7F1d2'
}
);
client.startTrace();
} catch(e) {
traceError('connectToMessageSight ERROR - '+e);
}
}
function createClientId(){
try{
var randomClientId = String(new Date().getTime()); 
var randomNumber = Math.floor((Math.random()*1000)+1);
randomClientId += String(randomNumber); 
return randomClientId;
} catch(e) {
traceError('createClientId ERROR - '+e);
}
}
/*
* Called when the message sight client loses it's connection
* Here we are just reconnecting into the service
*/
function onConnectionLost(responseObject){
try{
if (responseObject.errorCode !== 0){
traceInfo("ConnectionLost:"+responseObject.errorMessage);
traceInfo(client.getTraceLog());
}
client.stopTrace();
connectToMessageSight();
} catch(e) {
traceError('onConnectionLost ERROR - '+e);
}
}
/*
* Called by the client when we get a message to which we have subscribed, we decrypt it
* then call the right sub method based on the topic passed in
*/
function onMessageArrived(message){
try{
//var messageData = decryptMessage(message.payloadString);
//var messageData = decodeURIComponent(escape(window.atob(message.payloadString)));
var messageData = base64_decode(message.payloadString);
traceInfo(message.destinationName + ' : ' + messageData);
if(message.destinationName.indexOf('/tennis/score/') != -1){
scoreUpdate(messageData, message.destinationName);
}else if(message.destinationName.indexOf('/tennis/mip') != -1){
mipUpdate(messageData);
}else if(message.destinationName.indexOf('/tennis/stat') != -1){
statsUpdate(messageData);
}else if(message.destinationName.indexOf('/tennis/pointstream') != -1){
momentumUpdate(messageData);
}
} catch(e){
traceError('onMessageArrived ERROR - '+e);
}
}
/*
* Upon connection we subscribe to the base topics for scores and mip updates
*/
function onConnect(){
try{
traceInfo('onConnect: connection success');
traceInfo('onConnect: score_page - '+score_page);
client.subscribe('events/'+siteMessagePath+'/tennis/mip');
/*
* for ipad slamtracker and ios scores detail page, 
* subscribe to specific messages.
*/
if(score_page == 'ipad_detail' || score_page == 'ios_detail'){
if(st_court != ""){ 
client.subscribe('events/'+siteMessagePath+'/tennis/score/'+st_court);
client.subscribe('events/'+siteMessagePath+'/tennis/stat/'+st_court);
}
} 
/*
* for mobile scores, subscribe to score and stat
* messages for all courts
*/
else if (score_page == 'mobile'){
/* for mobile scores, subscribe to score and stat messages for all courts */
client.subscribe('events/'+siteMessagePath+'/tennis/score/#');
client.subscribe('events/'+siteMessagePath+'/tennis/stat/#');
} 
/*
* desktop, subscribe to score messages for all courts
*/
else {
client.subscribe('events/'+siteMessagePath+'/tennis/score/#');
}
} catch(e){
traceError('onConnect ERROR - '+e);
}
}
function onConnectFailure(data){
try{
traceInfo('onConnectFailure: error code = '+data.errorCode);
traceInfo('onConnectFailure: error message = '+data.errorMessage);
msConnectFailure();
} catch(e){
traceError('onConnectFailure ERROR - '+e);
}
}
/*
* This function is used to decrypt the message, we use a character math magic trick to do this, see inline comments
*/
function decryptMessage(payload){
try{
// Create a plain text string
var decryptedMessage = ''; 
// init us to the start of the decryption key
var keyPosition = 0;
for (var i =0 ; i < payload.length; i++){
// Find the char at the current position we are looping through for the decrytion key
var keyChar = decryptionKey.charCodeAt(keyPosition);
// Run our math to get our adjustment number
var mod = parseInt((keyChar % 10) / 2);
// Adjust the character by the value calculated above and get the new character
var charOut = String.fromCharCode(payload.charCodeAt(i) + mod);
// Append the character to the plain text string
decryptedMessage += charOut;
// Increase out key position, if we are at the length of the key, start over to repeat
keyPosition++;
if(keyPosition == decryptionKey.length){
keyPosition = 0;
}
}
// Scoring sends ? instead of spaces, so let's replace those here
decryptedMessage = decryptedMessage.replace(/\?/g, " ");
// Return the plain text
return decryptedMessage;
} catch(e){
traceError('decryptMessage ERROR - '+e);
}
}
function webSocketsSupport(){
try{
var wsSupport = false;
/* Firefox removed
if(typeof WebSocket != "undefined" && !navigator.userAgent.match(/Firefox/)){
wsSupport = true;
}
*/
/* firefox enabled */
if(typeof WebSocket != "undefined"){
wsSupport = true;
}
return wsSupport;
} catch(e){
traceError('webSocketsSupport ERROR - '+e);
}
}
function supportsWebSockets(){ 
try{
var browserName = navigator.appName;
var browserVersion = navigator.appVersion;
var userAgent = navigator.userAgent;
var supportsWebSockets = false;
// We support IE 10 and above
if((browserName.indexOf("Internet Explorer")!= -1) && (browserVersion.indexOf("MSIE 1") != -1)){ 
supportsWebSockets = true;
}
// Firefox 20 and above
else if(userAgent.match(/Firefox\/2\d{1}/)){
if(!userAgent.match(/Android/)){
supportsWebSockets = true;
}
}
// Chrome 14 and above
else if(userAgent.match(/Chrome\/1[4-9]/) || userAgent.match(/Chrome\/2\d{1}/) || userAgent.match(/Chrome\/3\d{1}/)){
supportsWebSockets = true;
}
// Safari 6 and and 7
else if(userAgent.match(/Version\/6.0 Safari/) || userAgent.match(/Version\/7.0 Safari/)){
supportsWebSockets = true;
}
// ipad on Mobile Safari 6, 6.1 and 7
else if((userAgent.indexOf('iPad') != -1) && ((userAgent.indexOf('Version/6.0') != -1) || (userAgent.indexOf('Version/6.1') != -1) | (userAgent.indexOf('Version/7.0') != -1))){
supportsWebSockets = true;
}
return supportsWebSockets;
} catch(e){
traceError('webSocketsSupport ERROR - '+e);
}
}
