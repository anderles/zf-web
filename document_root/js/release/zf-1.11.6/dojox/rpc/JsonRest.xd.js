/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.rpc.JsonRest"],["require","dojox.json.ref"],["require","dojox.rpc.Rest"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.rpc.JsonRest"]){_4._hasResource["dojox.rpc.JsonRest"]=true;_4.provide("dojox.rpc.JsonRest");_4.require("dojox.json.ref");_4.require("dojox.rpc.Rest");(function(){var _7=[];var _8=_6.rpc.Rest;var jr;function _9(_a,_b,_c,_d){var _e=_b.ioArgs&&_b.ioArgs.xhr&&_b.ioArgs.xhr.getResponseHeader("Last-Modified");if(_e&&_8._timeStamps){_8._timeStamps[_d]=_e;}var _f=_a._schema&&_a._schema.hrefProperty;if(_f){_6.json.ref.refAttribute=_f;}_c=_c&&_6.json.ref.resolveJson(_c,{defaultId:_d,index:_8._index,timeStamps:_e&&_8._timeStamps,time:_e,idPrefix:_a.servicePath.replace(/[^\/]*$/,""),idAttribute:jr.getIdAttribute(_a),schemas:jr.schemas,loader:jr._loader,idAsRef:_a.idAsRef,assignAbsoluteIds:true});_6.json.ref.refAttribute="$ref";return _c;};jr=_6.rpc.JsonRest={serviceClass:_6.rpc.Rest,conflictDateHeader:"If-Unmodified-Since",commit:function(_10){_10=_10||{};var _11=[];var _12={};var _13=[];for(var i=0;i<_7.length;i++){var _14=_7[i];var _15=_14.object;var old=_14.old;var _16=false;if(!(_10.service&&(_15||old)&&(_15||old).__id.indexOf(_10.service.servicePath))&&_14.save){delete _15.__isDirty;if(_15){if(old){var _17;if((_17=_15.__id.match(/(.*)#.*/))){_15=_8._index[_17[1]];}if(!(_15.__id in _12)){_12[_15.__id]=_15;if(_10.incrementalUpdates&&!_17){var _18=(typeof _10.incrementalUpdates=="function"?_10.incrementalUpdates:function(){_18={};for(var j in _15){if(_15.hasOwnProperty(j)){if(_15[j]!==old[j]){_18[j]=_15[j];}}else{if(old.hasOwnProperty(j)){return null;}}}return _18;})(_15,old);}if(_18){_11.push({method:"post",target:_15,content:_18});}else{_11.push({method:"put",target:_15,content:_15});}}}else{var _19=jr.getServiceAndId(_15.__id).service;var _1a=jr.getIdAttribute(_19);if((_1a in _15)&&!_10.alwaysPostNewItems){_11.push({method:"put",target:_15,content:_15});}else{_11.push({method:"post",target:{__id:_19.servicePath},content:_15});}}}else{if(old){_11.push({method:"delete",target:old});}}_13.push(_14);_7.splice(i--,1);}}_4.connect(_10,"onError",function(){if(_10.revertOnError!==false){var _1b=_7;_7=_13;var _1c=0;jr.revert();_7=_1b;}else{_7=dirtyObject.concat(_13);}});jr.sendToServer(_11,_10);return _11;},sendToServer:function(_1d,_1e){var _1f;var _20=_4.xhr;var _21=_1d.length;var i,_22;var _23;var _24=this.conflictDateHeader;_4.xhr=function(_25,_26){_26.headers=_26.headers||{};_26.headers["Transaction"]=_1d.length-1==i?"commit":"open";if(_24&&_23){_26.headers[_24]=_23;}if(_22){_26.headers["Content-ID"]="<"+_22+">";}return _20.apply(_4,arguments);};for(i=0;i<_1d.length;i++){var _27=_1d[i];_6.rpc.JsonRest._contentId=_27.content&&_27.content.__id;var _28=_27.method=="post";_23=_27.method=="put"&&_8._timeStamps[_27.content.__id];if(_23){_8._timeStamps[_27.content.__id]=(new Date())+"";}_22=_28&&_6.rpc.JsonRest._contentId;var _29=jr.getServiceAndId(_27.target.__id);var _2a=_29.service;var dfd=_27.deferred=_2a[_27.method](_29.id.replace(/#/,""),_6.json.ref.toJson(_27.content,false,_2a.servicePath,true));(function(_2b,dfd,_2c){dfd.addCallback(function(_2d){try{var _2e=dfd.ioArgs.xhr&&dfd.ioArgs.xhr.getResponseHeader("Location");if(_2e){var _2f=_2e.match(/(^\w+:\/\/)/)&&_2e.indexOf(_2c.servicePath);_2e=_2f>0?_2e.substring(_2f):(_2c.servicePath+_2e).replace(/^(.*\/)?(\w+:\/\/)|[^\/\.]+\/\.\.\/|^.*\/(\/)/,"$2$3");_2b.__id=_2e;_8._index[_2e]=_2b;}_2d=_9(_2c,dfd,_2d,_2b&&_2b.__id);}catch(e){}if(!(--_21)){if(_1e.onComplete){_1e.onComplete.call(_1e.scope,_1d);}}return _2d;});})(_27.content,dfd,_2a);dfd.addErrback(function(_30){_21=-1;_1e.onError.call(_1e.scope,_30);});}_4.xhr=_20;},getDirtyObjects:function(){return _7;},revert:function(_31){for(var i=_7.length;i>0;){i--;var _32=_7[i];var _33=_32.object;var old=_32.old;var _34=_6.data._getStoreForItem(_33||old);if(!(_31&&(_33||old)&&(_33||old).__id.indexOf(_31.servicePath))){if(_33&&old){for(var j in old){if(old.hasOwnProperty(j)&&_33[j]!==old[j]){if(_34){_34.onSet(_33,j,_33[j],old[j]);}_33[j]=old[j];}}for(j in _33){if(!old.hasOwnProperty(j)){if(_34){_34.onSet(_33,j,_33[j]);}delete _33[j];}}}else{if(!old){if(_34){_34.onDelete(_33);}}else{if(_34){_34.onNew(old);}}}delete (_33||old).__isDirty;_7.splice(i,1);}}},changing:function(_35,_36){if(!_35.__id){return;}_35.__isDirty=true;for(var i=0;i<_7.length;i++){var _37=_7[i];if(_35==_37.object){if(_36){_37.object=false;if(!this._saveNotNeeded){_37.save=true;}}return;}}var old=_35 instanceof Array?[]:{};for(i in _35){if(_35.hasOwnProperty(i)){old[i]=_35[i];}}_7.push({object:!_36&&_35,old:old,save:!this._saveNotNeeded});},deleteObject:function(_38){this.changing(_38,true);},getConstructor:function(_39,_3a){if(typeof _39=="string"){var _3b=_39;_39=new _6.rpc.Rest(_39,true);this.registerService(_39,_3b,_3a);}if(_39._constructor){return _39._constructor;}_39._constructor=function(_3c){var _3d=this;var _3e=arguments;var _3f;var _40;function _41(_42){if(_42){_41(_42["extends"]);_3f=_42.properties;for(var i in _3f){var _43=_3f[i];if(_43&&(typeof _43=="object")&&("default" in _43)){_3d[i]=_43["default"];}}}if(_42&&_42.prototype&&_42.prototype.initialize){_40=true;_42.prototype.initialize.apply(_3d,_3e);}};_41(_39._schema);if(!_40&&_3c&&typeof _3c=="object"){_4.mixin(_3d,_3c);}var _44=jr.getIdAttribute(_39);_8._index[this.__id=this.__clientId=_39.servicePath+(this[_44]||Math.random().toString(16).substring(2,14)+"@"+((_6.rpc.Client&&_6.rpc.Client.clientId)||"client"))]=this;if(_6.json.schema&&_3f){_6.json.schema.mustBeValid(_6.json.schema.validate(this,_39._schema));}_7.push({object:this,save:true});};return _4.mixin(_39._constructor,_39._schema,{load:_39});},fetch:function(_45){var _46=jr.getServiceAndId(_45);return this.byId(_46.service,_46.id);},getIdAttribute:function(_47){var _48=_47._schema;var _49;if(_48){if(!(_49=_48._idAttr)){for(var i in _48.properties){if(_48.properties[i].identity||(_48.properties[i].link=="self")){_48._idAttr=_49=i;}}}}return _49||"id";},getServiceAndId:function(_4a){var _4b="";for(var _4c in jr.services){if((_4a.substring(0,_4c.length)==_4c)&&(_4c.length>=_4b.length)){_4b=_4c;}}if(_4b){return {service:jr.services[_4b],id:_4a.substring(_4b.length)};}var _4d=_4a.match(/^(.*\/)([^\/]*)$/);return {service:new jr.serviceClass(_4d[1],true),id:_4d[2]};},services:{},schemas:{},registerService:function(_4e,_4f,_50){_4f=_4e.servicePath=_4f||_4e.servicePath;_4e._schema=jr.schemas[_4f]=_50||_4e._schema||{};jr.services[_4f]=_4e;},byId:function(_51,id){var _52,_53=_8._index[(_51.servicePath||"")+id];if(_53&&!_53._loadObject){_52=new _4.Deferred();_52.callback(_53);return _52;}return this.query(_51,id);},query:function(_54,id,_55){var _56=_54(id,_55);_56.addCallback(function(_57){if(_57.nodeType&&_57.cloneNode){return _57;}return _9(_54,_56,_57,typeof id!="string"||(_55&&(_55.start||_55.count))?undefined:id);});return _56;},_loader:function(_58){var _59=jr.getServiceAndId(this.__id);var _5a=this;jr.query(_59.service,_59.id).addBoth(function(_5b){if(_5b==_5a){delete _5b.$ref;delete _5b._loadObject;}else{_5a._loadObject=function(_5c){_5c(_5b);};}_58(_5b);});},isDirty:function(_5d){if(!_5d){return !!_7.length;}return _5d.__isDirty;}};})();}}};});