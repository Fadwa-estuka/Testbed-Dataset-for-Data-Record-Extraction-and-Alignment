window.oiq_uid = window.oiq_uid || 'Q' + ((Date.now() / 1000 | 0) - 946713600) + Math.floor(((Math.random() * 1147483647) + 1000000000)) + 'J';function isImageOk(img) { if (!img.complete) { return false; } if (typeof img.naturalWidth != 'undefined' && img.naturalWidth == 0) { return false; } return true; }
var oiq_b = document.getElementsByTagName("body")[0];
if (typeof oiq_b != 'undefined') {var oiq_f = document.createDocumentFragment();
oiq_img_loaded = false;
var oiq_img_src_0 = "https://px.owneriq.net/ep?sid%5B%5D=4756269564&sid%5B%5D=4756269569&sid%5B%5D=4756269574&sid%5B%5D=1204606434&sid%5B%5D=3858244024&pt=newegg";
if(window.oiq_uid) { oiq_img_src_0 += '&uid=' + window.oiq_uid; } 
if(typeof(_oiq_fps_js) != 'undefined' && _oiq_fps_js === true){ oiq_img_src_0 += '&jcs=1'; }var oiq_i_0 = document.createElement("img");
oiq_i_0.setAttribute("src", oiq_img_src_0);
oiq_i_0.setAttribute("width", "1");
oiq_i_0.setAttribute("height", "1");
oiq_i_0.setAttribute("style", "display:none");
oiq_f.appendChild(oiq_i_0);
oiq_b.appendChild(oiq_f);
function oiq_check_images() {
if (isImageOk(oiq_i_0)) { oiq_img_loaded = true; }
}
var oiq_int = setInterval(oiq_check_images, 50);
setTimeout(function() { clearInterval(oiq_int); },1900);
}
