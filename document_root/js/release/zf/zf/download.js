/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["zf.download"]){dojo._hasResource["zf.download"]=true;dojo.provide("zf.download");(function(){zf.download.imagePath="/images/download/";zf.download.images={"zs-download-button":{"toggled":zf.download.imagePath+"/download_button_over.png","untoggled":zf.download.imagePath+"/download_button.png"},"readme-arrow":{"toggled":zf.download.imagePath+"/readme_arrow_down_over.gif","untoggled":zf.download.imagePath+"/readme_arrow_down.gif"},"readme-arrow-dropdown":{"toggled":zf.download.imagePath+"/readme_arrow_up_over.gif","untoggled":zf.download.imagePath+"/readme_arrow_up.gif"}};zf.download.toggleButton=function(_1){if(dojo.hasClass(_1,"toggled")){_1.src=zf.download.images[_1.id].untoggled;}else{_1.src=zf.download.images[_1.id].toggled;}dojo.toggleClass(_1,"toggled");};zf.download.toggleArrow=function(_2){var id=_2.id+(dojo.hasClass(_2,"dropdown")?"-dropdown":"");if(dojo.hasClass(_2,"toggled")){_2.src=zf.download.images[id].untoggled;}else{_2.src=zf.download.images[id].toggled;}dojo.toggleClass(_2,"toggled");};dojo.addOnLoad(function(){dojo.query("#readme-arrow").onmouseover(function(e){var _3=e.target;zf.download.toggleArrow(_3);}).onmouseout(function(e){var _4=e.target;zf.download.toggleArrow(_4);}).onclick(function(e){var _5=e.target;dojo.toggleClass(_5,"dropdown");zf.download.toggleArrow(_5);dojo.query(".readme.content").toggleClass("show");});dojo.query("#zs-download-button").attr("onmouseover",function(e){var _6=e.target;zf.download.toggleButton(_6);}).attr("onmouseout",function(e){var _7=e.target;zf.download.toggleButton(_7);});});})();}