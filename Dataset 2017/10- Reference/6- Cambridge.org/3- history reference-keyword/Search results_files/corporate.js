$(document).ready(function(){$(".homeTeasers").hover(function(){},function(){$('.homeTeasers>li').fadeTo(150,1.0);});$(".homeTeasers>li").hoverIntent(function(){$(this).addClass("Current");$(this).siblings().fadeTo(150,0.5);$(this).fadeTo(150,1.0);},function(){$(this).removeClass("current");$(this).fadeTo(50,1.0);});$(".navLocation a").on('click',function(){setTimeout(function(){$('#dk_container_select-region').focus();},500)});});