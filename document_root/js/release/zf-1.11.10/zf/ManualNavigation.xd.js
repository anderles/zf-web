/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","zf.ManualNavigation"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["zf.ManualNavigation"]){_4._hasResource["zf.ManualNavigation"]=true;_4.provide("zf.ManualNavigation");(function(){var d=_4;d.mixin(zf,{ManualNavigation:{generate:function(){var _7=0;var _8=function(){var _9="dojo_blocked",id;do{id=_9+"_"+(++_7);}while(_4.byId(id));return id;};var _a=function(_b,_c,_d){if(typeof (_b)==="undefined"||_b===null||!_b){return;}if(!_4.hasAttr(_b,"id")){_4.attr(_b,"id",_8());}var ul=_4.create("ul");var _e=function(_f){if(typeof (_f)==="undefined"||_f===null||!_f){return;}if(!_4.hasAttr(_f,"id")){_4.attr(_f,"id",_8());}var li=_4.create("li");var _10=_4.create("a",{href:"#"+_4.attr(_f,"id")});var _11=_4.query("#"+_4.attr(_f,"id").replace(/(:|\.)/g,"\\$1")+" h1.title:eq(0)");if(!_11.length){return;}var _12=_11.shift();_4.attr(_10,"innerHTML",_4.attr(_12,"innerHTML"));_4.place(_10,li,"last");_4.place(li,ul,"last");_a(_f,li,"0 0 0 15px");};var _13=function(_14){if(typeof (_14)==="undefined"||_14===null||!_14){return;}if(!_4.hasAttr(_14,"name")){return;}var _15=_4.query("#"+_4.attr(_14,"id").replace(/(:|\.)/g,"\\$1")+" h1.title:eq(0)");if(!_15.length){return;}var _16=_15.shift();_16.innerHTML+=" <a href=\"#"+_4.attr(_14,"name")+"\" class=\"title-link-anchor\">¶</a>";};var _17=function(_18){_e(_18);_13(_18);};_4.query("#"+_4.attr(_b,"id").replace(/(:|\.)/g,"\\$1")+" > .section[id^=\"zend.\"]").forEach(_17);_4.query("#"+_4.attr(_b,"id").replace(/(:|\.)/g,"\\$1")+" > .section[id^=\"learning.\"]").forEach(_17);if(_4.query("li",ul).length){_4.style(ul,{margin:_d,padding:0});_4.place(ul,_c,"last");}};var _19=_4.byId("manual-container");var _1a=_4.create("div",{"class":"block"});_4.create("h2",{"class":"navigation",innerHTML:"Page Navigation"},_1a,"last");var _1b=_4.create("div",{"class":"block-in"},_1a,"last");_a(_19,_1b,0);if(_4.query("ul li",_1b).length){_4.place(_1a,_4.query("div.right-nav").shift(),"last");}}}});})();}}};});