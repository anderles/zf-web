/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.collections.ArrayList"],["require","dojox.collections._base"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.collections.ArrayList"]){_4._hasResource["dojox.collections.ArrayList"]=true;_4.provide("dojox.collections.ArrayList");_4.require("dojox.collections._base");_6.collections.ArrayList=function(_7){var _8=[];if(_7){_8=_8.concat(_7);}this.count=_8.length;this.add=function(_9){_8.push(_9);this.count=_8.length;};this.addRange=function(a){if(a.getIterator){var e=a.getIterator();while(!e.atEnd()){this.add(e.get());}this.count=_8.length;}else{for(var i=0;i<a.length;i++){_8.push(a[i]);}this.count=_8.length;}};this.clear=function(){_8.splice(0,_8.length);this.count=0;};this.clone=function(){return new _6.collections.ArrayList(_8);};this.contains=function(_a){for(var i=0;i<_8.length;i++){if(_8[i]==_a){return true;}}return false;};this.forEach=function(fn,_b){_4.forEach(_8,fn,_b);};this.getIterator=function(){return new _6.collections.Iterator(_8);};this.indexOf=function(_c){for(var i=0;i<_8.length;i++){if(_8[i]==_c){return i;}}return -1;};this.insert=function(i,_d){_8.splice(i,0,_d);this.count=_8.length;};this.item=function(i){return _8[i];};this.remove=function(_e){var i=this.indexOf(_e);if(i>=0){_8.splice(i,1);}this.count=_8.length;};this.removeAt=function(i){_8.splice(i,1);this.count=_8.length;};this.reverse=function(){_8.reverse();};this.sort=function(fn){if(fn){_8.sort(fn);}else{_8.sort();}};this.setByIndex=function(i,_f){_8[i]=_f;this.count=_8.length;};this.toArray=function(){return [].concat(_8);};this.toString=function(_10){return _8.join((_10||","));};};}}};});