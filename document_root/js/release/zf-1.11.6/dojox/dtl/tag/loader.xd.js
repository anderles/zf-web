/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.dtl.tag.loader"],["require","dojox.dtl._base"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.dtl.tag.loader"]){_4._hasResource["dojox.dtl.tag.loader"]=true;_4.provide("dojox.dtl.tag.loader");_4.require("dojox.dtl._base");(function(){var dd=_6.dtl;var _7=dd.tag.loader;_7.BlockNode=_4.extend(function(_8,_9){this.name=_8;this.nodelist=_9;},{"super":function(){if(this.parent){var _a=this.parent.nodelist.dummyRender(this.context,null,true);if(typeof _a=="string"){_a=new String(_a);}_a.safe=true;return _a;}return "";},render:function(_b,_c){var _d=this.name;var _e=this.nodelist;var _f;if(_c.blocks){var _10=_c.blocks[_d];if(_10){_f=_10.parent;_e=_10.nodelist;_10.used=true;}}this.rendered=_e;_b=_b.push();this.context=_b;this.parent=null;if(_e!=this.nodelist){this.parent=this;}_b.block=this;if(_c.getParent){var _11=_c.getParent();var _12=_4.connect(_c,"onSetParent",function(_13,up,_14){if(up&&_14){_c.setParent(_11);}});}_c=_e.render(_b,_c,this);_12&&_4.disconnect(_12);_b=_b.pop();return _c;},unrender:function(_15,_16){return this.rendered.unrender(_15,_16);},clone:function(_17){return new this.constructor(this.name,this.nodelist.clone(_17));},toString:function(){return "dojox.dtl.tag.loader.BlockNode";}});_7.ExtendsNode=_4.extend(function(_18,_19,_1a,_1b,key){this.getTemplate=_18;this.nodelist=_19;this.shared=_1a;this.parent=_1b;this.key=key;},{parents:{},getParent:function(_1c){var _1d=this.parent;if(!_1d){var _1e;_1d=this.parent=_1c.get(this.key,false);if(!_1d){throw new Error("extends tag used a variable that did not resolve");}if(typeof _1d=="object"){var url=_1d.url||_1d.templatePath;if(_1d.shared){this.shared=true;}if(url){_1d=this.parent=url.toString();}else{if(_1d.templateString){_1e=_1d.templateString;_1d=this.parent=" ";}else{_1d=this.parent=this.parent.toString();}}}if(_1d&&_1d.indexOf("shared:")===0){this.shared=true;_1d=this.parent=_1d.substring(7,_1d.length);}}if(!_1d){throw new Error("Invalid template name in 'extends' tag.");}if(_1d.render){return _1d;}if(this.parents[_1d]){return this.parents[_1d];}this.parent=this.getTemplate(_1e||_6.dtl.text.getTemplateString(_1d));if(this.shared){this.parents[_1d]=this.parent;}return this.parent;},render:function(_1f,_20){var _21=this.getParent(_1f);_21.blocks=_21.blocks||{};_20.blocks=_20.blocks||{};for(var i=0,_22;_22=this.nodelist.contents[i];i++){if(_22 instanceof _6.dtl.tag.loader.BlockNode){var old=_21.blocks[_22.name];if(old&&old.nodelist!=_22.nodelist){_20=old.nodelist.unrender(_1f,_20);}_21.blocks[_22.name]=_20.blocks[_22.name]={shared:this.shared,nodelist:_22.nodelist,used:false};}}this.rendered=_21;return _21.nodelist.render(_1f,_20,this);},unrender:function(_23,_24){return this.rendered.unrender(_23,_24,this);},toString:function(){return "dojox.dtl.block.ExtendsNode";}});_7.IncludeNode=_4.extend(function(_25,_26,_27,_28,_29){this._path=_25;this.constant=_26;this.path=(_26)?_25:new dd._Filter(_25);this.getTemplate=_27;this.text=_28;this.parsed=(arguments.length==5)?_29:true;},{_cache:[{},{}],render:function(_2a,_2b){var _2c=((this.constant)?this.path:this.path.resolve(_2a)).toString();var _2d=Number(this.parsed);var _2e=false;if(_2c!=this.last){_2e=true;if(this.last){_2b=this.unrender(_2a,_2b);}this.last=_2c;}var _2f=this._cache[_2d];if(_2d){if(!_2f[_2c]){_2f[_2c]=dd.text._resolveTemplateArg(_2c,true);}if(_2e){var _30=this.getTemplate(_2f[_2c]);this.rendered=_30.nodelist;}return this.rendered.render(_2a,_2b,this);}else{if(this.text instanceof dd._TextNode){if(_2e){this.rendered=this.text;this.rendered.set(dd.text._resolveTemplateArg(_2c,true));}return this.rendered.render(_2a,_2b);}else{if(!_2f[_2c]){var _31=[];var div=document.createElement("div");div.innerHTML=dd.text._resolveTemplateArg(_2c,true);var _32=div.childNodes;while(_32.length){var _33=div.removeChild(_32[0]);_31.push(_33);}_2f[_2c]=_31;}if(_2e){this.nodelist=[];var _34=true;for(var i=0,_35;_35=_2f[_2c][i];i++){this.nodelist.push(_35.cloneNode(true));}}for(var i=0,_36;_36=this.nodelist[i];i++){_2b=_2b.concat(_36);}}}return _2b;},unrender:function(_37,_38){if(this.rendered){_38=this.rendered.unrender(_37,_38);}if(this.nodelist){for(var i=0,_39;_39=this.nodelist[i];i++){_38=_38.remove(_39);}}return _38;},clone:function(_3a){return new this.constructor(this._path,this.constant,this.getTemplate,this.text.clone(_3a),this.parsed);}});_4.mixin(_7,{block:function(_3b,_3c){var _3d=_3c.contents.split();var _3e=_3d[1];_3b._blocks=_3b._blocks||{};_3b._blocks[_3e]=_3b._blocks[_3e]||[];_3b._blocks[_3e].push(_3e);var _3f=_3b.parse(["endblock","endblock "+_3e]).rtrim();_3b.next_token();return new _6.dtl.tag.loader.BlockNode(_3e,_3f);},extends_:function(_40,_41){var _42=_41.contents.split();var _43=false;var _44=null;var key=null;if(_42[1].charAt(0)=="\""||_42[1].charAt(0)=="'"){_44=_42[1].substring(1,_42[1].length-1);}else{key=_42[1];}if(_44&&_44.indexOf("shared:")==0){_43=true;_44=_44.substring(7,_44.length);}var _45=_40.parse();return new _6.dtl.tag.loader.ExtendsNode(_40.getTemplate,_45,_43,_44,key);},include:function(_46,_47){var _48=_47.contents.split();if(_48.length!=2){throw new Error(_48[0]+" tag takes one argument: the name of the template to be included");}var _49=_48[1];var _4a=false;if((_49.charAt(0)=="\""||_49.slice(-1)=="'")&&_49.charAt(0)==_49.slice(-1)){_49=_49.slice(1,-1);_4a=true;}return new _7.IncludeNode(_49,_4a,_46.getTemplate,_46.create_text_node());},ssi:function(_4b,_4c){var _4d=_4c.contents.split();var _4e=false;if(_4d.length==3){_4e=(_4d.pop()=="parsed");if(!_4e){throw new Error("Second (optional) argument to ssi tag must be 'parsed'");}}var _4f=_7.include(_4b,new dd.Token(_4c.token_type,_4d.join(" ")));_4f.parsed=_4e;return _4f;}});})();}}};});