/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojo.dnd.autoscroll"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojo.dnd.autoscroll"]){_4._hasResource["dojo.dnd.autoscroll"]=true;_4.provide("dojo.dnd.autoscroll");_4.dnd.getViewport=function(){var d=_4.doc,dd=d.documentElement,w=window,b=_4.body();if(_4.isMozilla){return {w:dd.clientWidth,h:w.innerHeight};}else{if(!_4.isOpera&&w.innerWidth){return {w:w.innerWidth,h:w.innerHeight};}else{if(!_4.isOpera&&dd&&dd.clientWidth){return {w:dd.clientWidth,h:dd.clientHeight};}else{if(b.clientWidth){return {w:b.clientWidth,h:b.clientHeight};}}}}return null;};_4.dnd.V_TRIGGER_AUTOSCROLL=32;_4.dnd.H_TRIGGER_AUTOSCROLL=32;_4.dnd.V_AUTOSCROLL_VALUE=16;_4.dnd.H_AUTOSCROLL_VALUE=16;_4.dnd.autoScroll=function(e){var v=_4.dnd.getViewport(),dx=0,dy=0;if(e.clientX<_4.dnd.H_TRIGGER_AUTOSCROLL){dx=-_4.dnd.H_AUTOSCROLL_VALUE;}else{if(e.clientX>v.w-_4.dnd.H_TRIGGER_AUTOSCROLL){dx=_4.dnd.H_AUTOSCROLL_VALUE;}}if(e.clientY<_4.dnd.V_TRIGGER_AUTOSCROLL){dy=-_4.dnd.V_AUTOSCROLL_VALUE;}else{if(e.clientY>v.h-_4.dnd.V_TRIGGER_AUTOSCROLL){dy=_4.dnd.V_AUTOSCROLL_VALUE;}}window.scrollBy(dx,dy);};_4.dnd._validNodes={"div":1,"p":1,"td":1};_4.dnd._validOverflow={"auto":1,"scroll":1};_4.dnd.autoScrollNodes=function(e){for(var n=e.target;n;){if(n.nodeType==1&&(n.tagName.toLowerCase() in _4.dnd._validNodes)){var s=_4.getComputedStyle(n);if(s.overflow.toLowerCase() in _4.dnd._validOverflow){var b=_4._getContentBox(n,s),t=_4.position(n,true);var w=Math.min(_4.dnd.H_TRIGGER_AUTOSCROLL,b.w/2),h=Math.min(_4.dnd.V_TRIGGER_AUTOSCROLL,b.h/2),rx=e.pageX-t.x,ry=e.pageY-t.y,dx=0,dy=0;if(_4.isWebKit||_4.isOpera){rx+=_4.body().scrollLeft,ry+=_4.body().scrollTop;}if(rx>0&&rx<b.w){if(rx<w){dx=-w;}else{if(rx>b.w-w){dx=w;}}}if(ry>0&&ry<b.h){if(ry<h){dy=-h;}else{if(ry>b.h-h){dy=h;}}}var _7=n.scrollLeft,_8=n.scrollTop;n.scrollLeft=n.scrollLeft+dx;n.scrollTop=n.scrollTop+dy;if(_7!=n.scrollLeft||_8!=n.scrollTop){return;}}}try{n=n.parentNode;}catch(x){n=null;}}_4.dnd.autoScroll(e);};}}};});