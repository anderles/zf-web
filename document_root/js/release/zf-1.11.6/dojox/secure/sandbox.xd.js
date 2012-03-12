/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.secure.sandbox"],["require","dojox.secure.DOM"],["require","dojox.secure.capability"],["require","dojo.NodeList-fx"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.secure.sandbox"]){_4._hasResource["dojox.secure.sandbox"]=true;_4.provide("dojox.secure.sandbox");_4.require("dojox.secure.DOM");_4.require("dojox.secure.capability");_4.require("dojo.NodeList-fx");(function(){var _7=setTimeout;var _8=setInterval;if({}.__proto__){var _9=function(_a){var _b=Array.prototype[_a];if(_b&&!_b.fixed){(Array.prototype[_a]=function(){if(this==window){throw new TypeError("Called with wrong this");}return _b.apply(this,arguments);}).fixed=true;}};_9("concat");_9("reverse");_9("sort");_9("slice");_9("forEach");_9("filter");_9("reduce");_9("reduceRight");_9("every");_9("map");_9("some");}var _c=function(){return _4.xhrGet.apply(_4,arguments);};_6.secure.sandbox=function(_d){var _e=_6.secure.DOM(_d);_d=_e(_d);var _f=_d.ownerDocument;var _10,_4=_6.secure._safeDojoFunctions(_d,_e);var _11=[];var _12=["isNaN","isFinite","parseInt","parseFloat","escape","unescape","encodeURI","encodeURIComponent","decodeURI","decodeURIComponent","alert","confirm","prompt","Error","EvalError","RangeError","ReferenceError","SyntaxError","TypeError","Date","RegExp","Number","Object","Array","String","Math","setTimeout","setInterval","clearTimeout","clearInterval","dojo","get","set","forEach","load","evaluate"];for(var i in _4){_12.push(i);_11.push("var "+i+"=dojo."+i);}eval(_11.join(";"));function get(obj,_13){_13=""+_13;if(_6.secure.badProps.test(_13)){throw new Error("bad property access");}if(obj.__get__){return obj.__get__(_13);}return obj[_13];};function set(obj,_14,_15){_14=""+_14;get(obj,_14);if(obj.__set){return obj.__set(_14);}obj[_14]=_15;return _15;};function _16(obj,fun){if(typeof fun!="function"){throw new TypeError();}if("length" in obj){if(obj.__get__){var len=obj.__get__("length");for(var i=0;i<len;i++){if(i in obj){fun.call(obj,obj.__get__(i),i,obj);}}}else{len=obj.length;for(i=0;i<len;i++){if(i in obj){fun.call(obj,obj[i],i,obj);}}}}else{for(i in obj){fun.call(obj,get(obj,i),i,obj);}}};function _17(_18,_19,_1a){var _1b,_1c,_1d;var arg;for(var i=0,l=arguments.length;typeof (arg=arguments[i])=="function"&&i<l;i++){if(_1b){_10(_1b,arg.prototype);}else{_1c=arg;var F=function(){};F.prototype=arg.prototype;_1b=new F;}}if(arg){for(var j in arg){var _1e=arg[j];if(typeof _1e=="function"){arg[j]=function(){if(this instanceof _17){return arguments.callee.__rawMethod__.apply(this,arguments);}throw new Error("Method called on wrong object");};arg[j].__rawMethod__=_1e;}}if(arg.hasOwnProperty("constructor")){_1d=arg.constructor;}}_1b=_1b?_10(_1b,arg):arg;function _17(){if(_1c){_1c.apply(this,arguments);}if(_1d){_1d.apply(this,arguments);}};_10(_17,arguments[i]);_1b.constructor=_17;_17.prototype=_1b;return _17;};function _1f(_20){if(typeof _20!="function"){throw new Error("String is not allowed in setTimeout/setInterval");}};function _21(_22,_23){_1f(_22);return _7(_22,_23);};function _24(_25,_26){_1f(_25);return _8(_25,_26);};function _27(_28){return _e.evaluate(_28);};var _29=_e.load=function(url){if(url.match(/^[\w\s]*:/)){throw new Error("Access denied to cross-site requests");}return _c({url:(new _4._Url(_e.rootUrl,url))+"",secure:true});};_e.evaluate=function(_2a){_6.secure.capability.validate(_2a,_12,{document:1,element:1});if(_2a.match(/^\s*[\[\{]/)){var _2b=eval("("+_2a+")");}else{eval(_2a);}};return {loadJS:function(url){_e.rootUrl=url;return _c({url:url,secure:true}).addCallback(function(_2c){_27(_2c,_d);});},loadHTML:function(url){_e.rootUrl=url;return _c({url:url,secure:true}).addCallback(function(_2d){_d.innerHTML=_2d;});},evaluate:function(_2e){return _e.evaluate(_2e);}};};})();_6.secure._safeDojoFunctions=function(_2f,_30){var _31=["mixin","require","isString","isArray","isFunction","isObject","isArrayLike","isAlien","hitch","delegate","partial","trim","disconnect","subscribe","unsubscribe","Deferred","toJson","style","attr"];var doc=_2f.ownerDocument;var _32=_6.secure.unwrap;_4.NodeList.prototype.addContent.safetyCheck=function(_33){_30.safeHTML(_33);};_4.NodeList.prototype.style.safetyCheck=function(_34,_35){if(_34=="behavior"){throw new Error("Can not set behavior");}_30.safeCSS(_35);};_4.NodeList.prototype.attr.safetyCheck=function(_36,_37){if(_37&&(_36=="src"||_36=="href"||_36=="style")){throw new Error("Illegal to set "+_36);}};var _38={query:function(_39,_3a){return _30(_4.query(_39,_32(_3a||_2f)));},connect:function(el,_3b){var obj=el;arguments[0]=_32(el);if(obj!=arguments[0]&&_3b.substring(0,2)!="on"){throw new Error("Invalid event name for element");}return _4.connect.apply(_4,arguments);},body:function(){return _2f;},byId:function(id){return _2f.ownerDocument.getElementById(id);},fromJson:function(str){_6.secure.capability.validate(str,[],{});return _4.fromJson(str);}};for(var i=0;i<_31.length;i++){_38[_31[i]]=_4[_31[i]];}return _38;};}}};});