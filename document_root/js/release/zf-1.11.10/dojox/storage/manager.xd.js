/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.storage.manager"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.storage.manager"]){_4._hasResource["dojox.storage.manager"]=true;_4.provide("dojox.storage.manager");_6.storage.manager=new function(){this.currentProvider=null;this.available=false;this.providers=[];this._initialized=false;this._onLoadListeners=[];this.initialize=function(){this.autodetect();};this.register=function(_7,_8){this.providers.push(_8);this.providers[_7]=_8;};this.setProvider=function(_9){};this.autodetect=function(){if(this._initialized){return;}var _a=_4.config["forceStorageProvider"]||false;var _b;for(var i=0;i<this.providers.length;i++){_b=this.providers[i];if(_a&&_a==_b.declaredClass){_b.isAvailable();break;}else{if(!_a&&_b.isAvailable()){break;}}}if(!_b){this._initialized=true;this.available=false;this.currentProvider=null;console.warn("No storage provider found for this platform");this.loaded();return;}this.currentProvider=_b;_4.mixin(_6.storage,this.currentProvider);_6.storage.initialize();this._initialized=true;this.available=true;};this.isAvailable=function(){return this.available;};this.addOnLoad=function(_c){this._onLoadListeners.push(_c);if(this.isInitialized()){this._fireLoaded();}};this.removeOnLoad=function(_d){for(var i=0;i<this._onLoadListeners.length;i++){if(_d==this._onLoadListeners[i]){this._onLoadListeners=this._onLoadListeners.splice(i,1);break;}}};this.isInitialized=function(){if(this.currentProvider!=null&&this.currentProvider.declaredClass=="dojox.storage.FlashStorageProvider"&&_6.flash.ready==false){return false;}else{return this._initialized;}};this.supportsProvider=function(_e){try{var _f=eval("new "+_e+"()");var _10=_f.isAvailable();if(!_10){return false;}return _10;}catch(e){return false;}};this.getProvider=function(){return this.currentProvider;};this.loaded=function(){this._fireLoaded();};this._fireLoaded=function(){_4.forEach(this._onLoadListeners,function(i){try{i();}catch(e){console.debug(e);}});};this.getResourceList=function(){var _11=[];_4.forEach(_6.storage.manager.providers,function(_12){_11=_11.concat(_12.getResourceList());});return _11;};};}}};});