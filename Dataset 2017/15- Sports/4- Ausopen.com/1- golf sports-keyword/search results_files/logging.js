//***************************************************
// accept logging calls from flash
//***************************************************
var log;
function flashLog(type,message){
message = unescape(message);
if (ibmdebug && log){
switch (type){
case "trace": log.trace(message); break;
case "debug": log.debug(message); break;
case "info": log.info(message); break;
case "warn": log.warn(message); break;
case "error": log.error(message); break;
case "fatal": log.fatal(message); break;
default: break;
}
}
}
function traceTrace(msg,arg,isTrace){
if (ibmdebug && log){
if (arg == undefined || arg==null) {
flashLog("trace","JS - " + msg);
} else {
if (msg=="") {msg="";} else {msg=": " + msg;};
if (isTrace && arg.callee.caller!=null) {
flashLog("trace","JS - " + arg.callee.name + " called by " + arg.callee.caller.name + msg);
} else {
flashLog("trace","JS - " + arg.callee.name + msg);
}
}
}
}
function traceDebug(msg,arg,isTrace){
if (ibmdebug && log){
if (arg == undefined || arg==null) {
flashLog("debug","JS - " + msg);
} else {
if (msg=="") {msg="";} else {msg=": " + msg;};
if (isTrace && arg.callee.caller!=null) {
flashLog("debug","JS - " + arg.callee.name + " called by " + arg.callee.caller.name + msg);
} else {
flashLog("debug","JS - " + arg.callee.name + msg);
}
}
}
}
function traceInfo(msg,arg,isTrace){
if (ibmdebug && log){
if (arg == undefined || arg==null) {
//flashLog("info","JS - [" + new Date().getTime() + "] " + msg);
flashLog("info","JS - " + msg);
} else {
if (msg=="") {msg="";} else {msg=": " + msg;};
if (isTrace && arg.callee.caller!=null) {
flashLog("info","JS - " + arg.callee.name + " called by " + arg.callee.caller.name + msg);
} else {
flashLog("info","JS - " + arg.callee.name + msg);
}
}
}
}
function traceWarn(msg,arg,isTrace){
if (ibmdebug && log){
if (arg == undefined || arg==null) {
flashLog("warn","JS - " + msg);
} else {
if (msg=="") {msg="";} else {msg=": " + msg;};
if (isTrace && arg.callee.caller!=null) {
flashLog("warn","JS - " + arg.callee.name + " called by " + arg.callee.caller.name + msg);
} else {
flashLog("warn","JS - " + arg.callee.name + msg);
}
}
}
}
function traceError(msg,arg,isTrace){
if (ibmdebug && log){
if (arg == undefined || arg==null) {
flashLog("error","JS - " + msg);
} else {
if (msg=="") {msg="";} else {msg=": " + msg;};
if (isTrace && arg.callee.caller!=null) {
flashLog("error","JS - " + arg.callee.name + " called by " + arg.callee.caller.name + msg);
} else {
flashLog("error","JS - " + arg.callee.name + msg);
}
}
}
}
function traceFatal(msg,arg,isTrace){
if (ibmdebug && log){
if (arg == undefined || arg==null) {
flashLog("fatal","JS - " + msg);
} else {
if (msg=="") {msg="";} else {msg=": " + msg;};
if (isTrace && arg.callee.caller!=null) {
flashLog("fatal","JS - " + arg.callee.name + " called by " + arg.callee.caller.name + msg);
} else {
flashLog("fatal","JS - " + arg.callee.name + msg);
}
}
}
}
//*******************************
// Initialize log4javascript logger
//*******************************
function startLogging(){
log = log4javascript.getLogger("mylogger");
// Create a PopUpAppender with default options
var popUpAppender = new log4javascript.PopUpAppender();
// Change the desired configuration options
//popUpAppender.setFocusPopUp(true);
//popUpAppender.setNewestMessageAtTop(true);
// Add the appender to the logger
log.addAppender(popUpAppender);
// Test the logger
log.info("DEBUG init");
window.focus();
}
if (ibmdebug){
var e = document.createElement("script");
e.src = "/aus/js/log4javascript.js";
e.type="text/javascript";
document.getElementsByTagName("head")[0].appendChild(e);
}