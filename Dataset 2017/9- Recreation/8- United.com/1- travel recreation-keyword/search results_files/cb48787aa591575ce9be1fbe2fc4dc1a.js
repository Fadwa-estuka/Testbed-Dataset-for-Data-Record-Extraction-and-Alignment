Bootstrapper.bindDOMParsed(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;if($("#footerText \x3e a:nth-child(12)").text()=="Privacy Policy")$("#footerText \x3e a:nth-child(12)").text("Updated Privacy Policy")},921011,327685);
Bootstrapper.bindDOMLoaded(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;var eventLabel="Digital 1.0";$('ul[id\x3d"top-nav-menu"]').find('li[class\x3d"top-nav-links-li dropdown-travel-info"],li[class\x3d"top-nav-links-li dropdown-travel-info selected"]').find('div[class\x3d"top-nav-dropdown-links feature-messaging"]').bind("click",function(){var action="Travel Information|Feature-Messaging:"+$(this).children().attr("href")+"|"+$(document).attr("title");
ga("send","event","Top Navigation",action,eventLabel)});$('ul[id\x3d"top-nav-menu"]').find('li[class\x3d"top-nav-links-li dropdown-deals"],li[class\x3d"top-nav-links-li dropdown-deals selected"]').find('div[class\x3d"top-nav-dropdown-links feature-messaging"]').bind("click",function(){var action="Deals \x26 Offers|Feature-Messaging:"+$(this).children().attr("href")+"|"+$(document).attr("title");ga("send","event","Top Navigation",action,eventLabel)});$('ul[id\x3d"top-nav-menu"]').find('li[class\x3d"top-nav-links-li dropdown-mp"],li[class\x3d"top-nav-links-li dropdown-mp selected"]').find('div[class\x3d"top-nav-dropdown-links feature-messaging mp-ad"]').bind("click",
function(){var action="MileagePlus|Feature-Messaging:"+$(this).find('div[class\x3d"mp-ad-message"]').children().attr("href")+"|"+$(document).attr("title");ga("send","event","Top Navigation",action,eventLabel)});$('ul[id\x3d"top-nav-menu"]').find('li[class\x3d"top-nav-links-li dropdown-reservations"],li[class\x3d"top-nav-links-li dropdown-reservations selected"]').find('div[class\x3d"top-nav-dropdown-links"] a').bind("click",function(){var action="Reservations|"+$(this).text()+":"+$(this).attr("href")+
"|"+$(document).attr("title");ga("send","event","Top Navigation",action,eventLabel)});$('ul[id\x3d"top-nav-menu"]').find('li[class\x3d"top-nav-links-li  dropdown-travel-info"],li[class\x3d"top-nav-links-li  dropdown-travel-info selected"]').find('div[class\x3d"top-nav-dropdown-links"] a').bind("click",function(){var action="Travel Information|"+$(this).text()+":"+$(this).attr("href")+"|"+$(document).attr("title");ga("send","event","Top Navigation",action,eventLabel)});$('ul[id\x3d"top-nav-menu"]').find('li[class\x3d"top-nav-links-li dropdown-deals"],li[class\x3d"top-nav-links-li dropdown-deals selected"]').find('div[class\x3d"top-nav-dropdown-links"] a').bind("click",
function(){var action="Deals \x26 Offers|"+$(this).text()+":"+$(this).attr("href")+"|"+$(document).attr("title");ga("send","event","Top Navigation",action,eventLabel)});$('ul[id\x3d"top-nav-menu"]').find('li[class\x3d"top-nav-links-li dropdown-mp"],li[class\x3d"top-nav-links-li dropdown-mp selected"]').find('div[class\x3d"top-nav-dropdown-links"] a').bind("click",function(){var action="MileagePlus|"+$(this).text()+":"+$(this).attr("href")+"|"+$(document).attr("title");ga("send","event","Top Navigation",
action,eventLabel)})},1369904,357692);