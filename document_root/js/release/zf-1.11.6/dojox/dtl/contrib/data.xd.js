/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.dtl.contrib.data"],["require","dojox.dtl._base"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.dtl.contrib.data"]){_4._hasResource["dojox.dtl.contrib.data"]=true;_4.provide("dojox.dtl.contrib.data");_4.require("dojox.dtl._base");(function(){var dd=_6.dtl;var _7=dd.contrib.data;var _8=true;_7._BoundItem=_4.extend(function(_9,_a){this.item=_9;this.store=_a;},{get:function(_b){var _c=this.store;var _d=this.item;if(_b=="getLabel"){return _c.getLabel(_d);}else{if(_b=="getAttributes"){return _c.getAttributes(_d);}else{if(_b=="getIdentity"){if(_c.getIdentity){return _c.getIdentity(_d);}return "Store has no identity API";}else{if(!_c.hasAttribute(_d,_b)){if(_b.slice(-1)=="s"){if(_8){_8=false;_4.deprecated("You no longer need an extra s to call getValues, it can be figured out automatically");}_b=_b.slice(0,-1);}if(!_c.hasAttribute(_d,_b)){return;}}var _e=_c.getValues(_d,_b);if(!_e){return;}if(!_4.isArray(_e)){return new _7._BoundItem(_e,_c);}_e=_4.map(_e,function(_f){if(_4.isObject(_f)&&_c.isItem(_f)){return new _7._BoundItem(_f,_c);}return _f;});_e.get=_7._get;return _e;}}}}});_7._BoundItem.prototype.get.safe=true;_7.BindDataNode=_4.extend(function(_10,_11,_12,_13){this.items=_10&&new dd._Filter(_10);this.query=_11&&new dd._Filter(_11);this.store=new dd._Filter(_12);this.alias=_13;},{render:function(_14,_15){var _16=this.items&&this.items.resolve(_14);var _17=this.query&&this.query.resolve(_14);var _18=this.store.resolve(_14);if(!_18||!_18.getFeatures){throw new Error("data_bind didn't receive a store");}if(_17){var _19=false;_18.fetch({query:_17,sync:true,scope:this,onComplete:function(it){_19=true;_16=it;}});if(!_19){throw new Error("The bind_data tag only works with a query if the store executed synchronously");}}var _1a=[];if(_16){for(var i=0,_1b;_1b=_16[i];i++){_1a.push(new _7._BoundItem(_1b,_18));}}_14[this.alias]=_1a;return _15;},unrender:function(_1c,_1d){return _1d;},clone:function(){return this;}});_4.mixin(_7,{_get:function(key){if(this.length){return (this[0] instanceof _7._BoundItem)?this[0].get(key):this[0][key];}},bind_data:function(_1e,_1f){var _20=_1f.contents.split();if(_20[2]!="to"||_20[4]!="as"||!_20[5]){throw new Error("data_bind expects the format: 'data_bind items to store as varName'");}return new _7.BindDataNode(_20[1],null,_20[3],_20[5]);},bind_query:function(_21,_22){var _23=_22.contents.split();if(_23[2]!="to"||_23[4]!="as"||!_23[5]){throw new Error("data_bind expects the format: 'bind_query query to store as varName'");}return new _7.BindDataNode(null,_23[1],_23[3],_23[5]);}});_7._get.safe=true;dd.register.tags("dojox.dtl.contrib",{"data":["bind_data","bind_query"]});})();}}};});