_satellite.pushAsyncScript(function(event, target, $variables){
  try{
  setTimeout(function(){
    sessionStorage.setItem('hotJarID',hj.pageVisit.property.get('userId').split("-").shift());
  },2000);
}
catch(e){
}
});
