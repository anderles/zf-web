/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.dtl.dom"],["require","dojox.dtl._base"],["require","dojox.dtl.Context"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.dtl.dom"]){_4._hasResource["dojox.dtl.dom"]=true;_4.provide("dojox.dtl.dom");_4.require("dojox.dtl._base");_4.require("dojox.dtl.Context");(function(){var dd=_6.dtl;dd.BOOLS={checked:1,disabled:1,readonly:1};dd.TOKEN_CHANGE=-11;dd.TOKEN_ATTR=-12;dd.TOKEN_CUSTOM=-13;dd.TOKEN_NODE=1;var _7=dd.text;var _8=dd.dom={_attributes:{},_uppers:{},_re4:/^function anonymous\(\)\s*{\s*(.*)\s*}$/,_reTrim:/(?:^[\n\s]*(\{%)?\s*|\s*(%\})?[\n\s]*$)/g,_reSplit:/\s*%\}[\n\s]*\{%\s*/g,getTemplate:function(_9){if(typeof this._commentable=="undefined"){this._commentable=false;var _a=document.createElement("div");_a.innerHTML="<!--Test comment handling, and long comments, using comments whenever possible.-->";if(_a.childNodes.length&&_a.childNodes[0].nodeType==8&&_a.childNodes[0].data=="comment"){this._commentable=true;}}if(!this._commentable){_9=_9.replace(/<!--({({|%).*?(%|})})-->/g,"$1");}if(_4.isIE){_9=_9.replace(/\b(checked|disabled|readonly|style)="/g,"t$1=\"");}_9=_9.replace(/\bstyle="/g,"tstyle=\"");var _b;var _c=_4.isWebKit;var _d=[[true,"select","option"],[_c,"tr","td|th"],[_c,"thead","tr","th"],[_c,"tbody","tr","td"],[_c,"table","tbody|thead|tr","tr","td"]];var _e=[];for(var i=0,_f;_f=_d[i];i++){if(!_f[0]){continue;}if(_9.indexOf("<"+_f[1])!=-1){var _10=new RegExp("<"+_f[1]+"(?:.|\n)*?>((?:.|\n)+?)</"+_f[1]+">","ig");tagLoop:while(_b=_10.exec(_9)){var _11=_f[2].split("|");var _12=[];for(var j=0,_13;_13=_11[j];j++){_12.push("<"+_13+"(?:.|\n)*?>(?:.|\n)*?</"+_13+">");}var _14=[];var _15=_6.string.tokenize(_b[1],new RegExp("("+_12.join("|")+")","ig"),function(_16){var tag=/<(\w+)/.exec(_16)[1];if(!_14[tag]){_14[tag]=true;_14.push(tag);}return {data:_16};});if(_14.length){var tag=(_14.length==1)?_14[0]:_f[2].split("|")[0];var _17=[];for(var j=0,jl=_15.length;j<jl;j++){var _18=_15[j];if(_4.isObject(_18)){_17.push(_18.data);}else{var _19=_18.replace(this._reTrim,"");if(!_19){continue;}_18=_19.split(this._reSplit);for(var k=0,kl=_18.length;k<kl;k++){var _1a="";for(var p=2,pl=_f.length;p<pl;p++){if(p==2){_1a+="<"+tag+" dtlinstruction=\"{% "+_18[k].replace("\"","\\\"")+" %}\">";}else{if(tag==_f[p]){continue;}else{_1a+="<"+_f[p]+">";}}}_1a+="DTL";for(var p=_f.length-1;p>1;p--){if(p==2){_1a+="</"+tag+">";}else{if(tag==_f[p]){continue;}else{_1a+="</"+_f[p]+">";}}}_17.push("ÿ"+_e.length);_e.push(_1a);}}}_9=_9.replace(_b[1],_17.join(""));}}}}for(var i=_e.length;i--;){_9=_9.replace("ÿ"+i,_e[i]);}var re=/\b([a-zA-Z_:][a-zA-Z0-9_\-\.:]*)=['"]/g;while(_b=re.exec(_9)){var _1b=_b[1].toLowerCase();if(_1b=="dtlinstruction"){continue;}if(_1b!=_b[1]){this._uppers[_1b]=_b[1];}this._attributes[_1b]=true;}var _a=document.createElement("div");_a.innerHTML=_9;var _1c={nodes:[]};while(_a.childNodes.length){_1c.nodes.push(_a.removeChild(_a.childNodes[0]));}return _1c;},tokenize:function(_1d){var _1e=[];for(var i=0,_1f;_1f=_1d[i++];){if(_1f.nodeType!=1){this.__tokenize(_1f,_1e);}else{this._tokenize(_1f,_1e);}}return _1e;},_swallowed:[],_tokenize:function(_20,_21){var _22=false;var _23=this._swallowed;var i,j,tag,_24;if(!_21.first){_22=_21.first=true;var _25=dd.register.getAttributeTags();for(i=0;tag=_25[i];i++){try{(tag[2])({swallowNode:function(){throw 1;}},new dd.Token(dd.TOKEN_ATTR,""));}catch(e){_23.push(tag);}}}for(i=0;tag=_23[i];i++){var _26=_20.getAttribute(tag[0]);if(_26){var _23=false;var _27=(tag[2])({swallowNode:function(){_23=true;return _20;}},new dd.Token(dd.TOKEN_ATTR,tag[0]+" "+_26));if(_23){if(_20.parentNode&&_20.parentNode.removeChild){_20.parentNode.removeChild(_20);}_21.push([dd.TOKEN_CUSTOM,_27]);return;}}}var _28=[];if(_4.isIE&&_20.tagName=="SCRIPT"){_28.push({nodeType:3,data:_20.text});_20.text="";}else{for(i=0;_24=_20.childNodes[i];i++){_28.push(_24);}}_21.push([dd.TOKEN_NODE,_20]);var _29=false;if(_28.length){_21.push([dd.TOKEN_CHANGE,_20]);_29=true;}for(var key in this._attributes){var _2a=false;var _2b="";if(key=="class"){_2b=_20.className||_2b;}else{if(key=="for"){_2b=_20.htmlFor||_2b;}else{if(key=="value"&&_20.value==_20.innerHTML){continue;}else{if(_20.getAttribute){_2b=_20.getAttribute(key,2)||_2b;if(key=="href"||key=="src"){if(_4.isIE){var _2c=location.href.lastIndexOf(location.hash);var _2d=location.href.substring(0,_2c).split("/");_2d.pop();_2d=_2d.join("/")+"/";if(_2b.indexOf(_2d)==0){_2b=_2b.replace(_2d,"");}_2b=decodeURIComponent(_2b);}}else{if(key=="tstyle"){_2a=key;key="style";}else{if(dd.BOOLS[key.slice(1)]&&_4.trim(_2b)){key=key.slice(1);}else{if(this._uppers[key]&&_4.trim(_2b)){_2a=this._uppers[key];}}}}}}}}if(_2a){_20.setAttribute(_2a,"");_20.removeAttribute(_2a);}if(typeof _2b=="function"){_2b=_2b.toString().replace(this._re4,"$1");}if(!_29){_21.push([dd.TOKEN_CHANGE,_20]);_29=true;}_21.push([dd.TOKEN_ATTR,_20,key,_2b]);}for(i=0,_24;_24=_28[i];i++){if(_24.nodeType==1){var _2e=_24.getAttribute("dtlinstruction");if(_2e){_24.parentNode.removeChild(_24);_24={nodeType:8,data:_2e};}}this.__tokenize(_24,_21);}if(!_22&&_20.parentNode&&_20.parentNode.tagName){if(_29){_21.push([dd.TOKEN_CHANGE,_20,true]);}_21.push([dd.TOKEN_CHANGE,_20.parentNode]);_20.parentNode.removeChild(_20);}else{_21.push([dd.TOKEN_CHANGE,_20,true,true]);}},__tokenize:function(_2f,_30){var _31=_2f.data;switch(_2f.nodeType){case 1:this._tokenize(_2f,_30);return;case 3:if(_31.match(/[^\s\n]/)&&(_31.indexOf("{{")!=-1||_31.indexOf("{%")!=-1)){var _32=_7.tokenize(_31);for(var j=0,_33;_33=_32[j];j++){if(typeof _33=="string"){_30.push([dd.TOKEN_TEXT,_33]);}else{_30.push(_33);}}}else{_30.push([_2f.nodeType,_2f]);}if(_2f.parentNode){_2f.parentNode.removeChild(_2f);}return;case 8:if(_31.indexOf("{%")==0){var _33=_4.trim(_31.slice(2,-2));if(_33.substr(0,5)=="load "){var _34=_4.trim(_33).split(/\s+/g);for(var i=1,_35;_35=_34[i];i++){_4["require"](_35);}}_30.push([dd.TOKEN_BLOCK,_33]);}if(_31.indexOf("{{")==0){_30.push([dd.TOKEN_VAR,_4.trim(_31.slice(2,-2))]);}if(_2f.parentNode){_2f.parentNode.removeChild(_2f);}return;}}};dd.DomTemplate=_4.extend(function(obj){if(!obj.nodes){var _36=_4.byId(obj);if(_36&&_36.nodeType==1){_4.forEach(["class","src","href","name","value"],function(_37){_8._attributes[_37]=true;});obj={nodes:[_36]};}else{if(typeof obj=="object"){obj=_7.getTemplateString(obj);}obj=_8.getTemplate(obj);}}var _38=_8.tokenize(obj.nodes);if(dd.tests){this.tokens=_38.slice(0);}var _39=new dd._DomParser(_38);this.nodelist=_39.parse();},{_count:0,_re:/\bdojo:([a-zA-Z0-9_]+)\b/g,setClass:function(str){this.getRootNode().className=str;},getRootNode:function(){return this.buffer.rootNode;},getBuffer:function(){return new dd.DomBuffer();},render:function(_3a,_3b){_3b=this.buffer=_3b||this.getBuffer();this.rootNode=null;var _3c=this.nodelist.render(_3a||new dd.Context({}),_3b);for(var i=0,_3d;_3d=_3b._cache[i];i++){if(_3d._cache){_3d._cache.length=0;}}return _3c;},unrender:function(_3e,_3f){return this.nodelist.unrender(_3e,_3f);}});dd.DomBuffer=_4.extend(function(_40){this._parent=_40;this._cache=[];},{concat:function(_41){var _42=this._parent;if(_42&&_41.parentNode&&_41.parentNode===_42&&!_42._dirty){return this;}if(_41.nodeType==1&&!this.rootNode){this.rootNode=_41||true;return this;}if(!_42){if(_41.nodeType==3&&_4.trim(_41.data)){throw new Error("Text should not exist outside of the root node in template");}return this;}if(this._closed){if(_41.nodeType==3&&!_4.trim(_41.data)){return this;}else{throw new Error("Content should not exist outside of the root node in template");}}if(_42._dirty){if(_41._drawn&&_41.parentNode==_42){var _43=_42._cache;if(_43){for(var i=0,_44;_44=_43[i];i++){this.onAddNode&&this.onAddNode(_44);_42.insertBefore(_44,_41);this.onAddNodeComplete&&this.onAddNodeComplete(_44);}_43.length=0;}}_42._dirty=false;}if(!_42._cache){_42._cache=[];this._cache.push(_42);}_42._dirty=true;_42._cache.push(_41);return this;},remove:function(obj){if(typeof obj=="string"){if(this._parent){this._parent.removeAttribute(obj);}}else{if(obj.nodeType==1&&!this.getRootNode()&&!this._removed){this._removed=true;return this;}if(obj.parentNode){this.onRemoveNode&&this.onRemoveNode(obj);if(obj.parentNode){obj.parentNode.removeChild(obj);}}}return this;},setAttribute:function(key,_45){var old=_4.attr(this._parent,key);if(this.onChangeAttribute&&old!=_45){this.onChangeAttribute(this._parent,key,old,_45);}if(key=="style"){this._parent.style.cssText=_45;}else{_4.attr(this._parent,key,_45);}return this;},addEvent:function(_46,_47,fn,_48){if(!_46.getThis()){throw new Error("You must use Context.setObject(instance)");}this.onAddEvent&&this.onAddEvent(this.getParent(),_47,fn);var _49=fn;if(_4.isArray(_48)){_49=function(e){this[fn].apply(this,[e].concat(_48));};}return _4.connect(this.getParent(),_47,_46.getThis(),_49);},setParent:function(_4a,up,_4b){if(!this._parent){this._parent=this._first=_4a;}if(up&&_4b&&_4a===this._first){this._closed=true;}if(up){var _4c=this._parent;var _4d="";var ie=_4.isIE&&_4c.tagName=="SCRIPT";if(ie){_4c.text="";}if(_4c._dirty){var _4e=_4c._cache;var _4f=(_4c.tagName=="SELECT"&&!_4c.options.length);for(var i=0,_50;_50=_4e[i];i++){if(_50!==_4c){this.onAddNode&&this.onAddNode(_50);if(ie){_4d+=_50.data;}else{_4c.appendChild(_50);if(_4f&&_50.defaultSelected&&i){_4f=i;}}this.onAddNodeComplete&&this.onAddNodeComplete(_50);}}if(_4f){_4c.options.selectedIndex=(typeof _4f=="number")?_4f:0;}_4e.length=0;_4c._dirty=false;}if(ie){_4c.text=_4d;}}this._parent=_4a;this.onSetParent&&this.onSetParent(_4a,up,_4b);return this;},getParent:function(){return this._parent;},getRootNode:function(){return this.rootNode;}});dd._DomNode=_4.extend(function(_51){this.contents=_51;},{render:function(_52,_53){this._rendered=true;return _53.concat(this.contents);},unrender:function(_54,_55){if(!this._rendered){return _55;}this._rendered=false;return _55.remove(this.contents);},clone:function(_56){return new this.constructor(this.contents);}});dd._DomNodeList=_4.extend(function(_57){this.contents=_57||[];},{push:function(_58){this.contents.push(_58);},unshift:function(_59){this.contents.unshift(_59);},render:function(_5a,_5b,_5c){_5b=_5b||dd.DomTemplate.prototype.getBuffer();if(_5c){var _5d=_5b.getParent();}for(var i=0;i<this.contents.length;i++){_5b=this.contents[i].render(_5a,_5b);if(!_5b){throw new Error("Template node render functions must return their buffer");}}if(_5d){_5b.setParent(_5d);}return _5b;},dummyRender:function(_5e,_5f,_60){var div=document.createElement("div");var _61=_5f.getParent();var old=_61._clone;_61._clone=div;var _62=this.clone(_5f,div);if(old){_61._clone=old;}else{_61._clone=null;}_5f=dd.DomTemplate.prototype.getBuffer();_62.unshift(new dd.ChangeNode(div));_62.unshift(new dd._DomNode(div));_62.push(new dd.ChangeNode(div,true));_62.render(_5e,_5f);if(_60){return _5f.getRootNode();}var _63=div.innerHTML;return (_4.isIE)?_63.replace(/\s*_(dirty|clone)="[^"]*"/g,""):_63;},unrender:function(_64,_65,_66){if(_66){var _67=_65.getParent();}for(var i=0;i<this.contents.length;i++){_65=this.contents[i].unrender(_64,_65);if(!_65){throw new Error("Template node render functions must return their buffer");}}if(_67){_65.setParent(_67);}return _65;},clone:function(_68){var _69=_68.getParent();var _6a=this.contents;var _6b=new dd._DomNodeList();var _6c=[];for(var i=0;i<_6a.length;i++){var _6d=_6a[i].clone(_68);if(_6d instanceof dd.ChangeNode||_6d instanceof dd._DomNode){var _6e=_6d.contents._clone;if(_6e){_6d.contents=_6e;}else{if(_69!=_6d.contents&&_6d instanceof dd._DomNode){var _6f=_6d.contents;_6d.contents=_6d.contents.cloneNode(false);_68.onClone&&_68.onClone(_6f,_6d.contents);_6c.push(_6f);_6f._clone=_6d.contents;}}}_6b.push(_6d);}for(var i=0,_6d;_6d=_6c[i];i++){_6d._clone=null;}return _6b;},rtrim:function(){while(1){var i=this.contents.length-1;if(this.contents[i] instanceof dd._DomTextNode&&this.contents[i].isEmpty()){this.contents.pop();}else{break;}}return this;}});dd._DomVarNode=_4.extend(function(str){this.contents=new dd._Filter(str);},{render:function(_70,_71){var str=this.contents.resolve(_70);var _72="text";if(str){if(str.render&&str.getRootNode){_72="injection";}else{if(str.safe){if(str.nodeType){_72="node";}else{if(str.toString){str=str.toString();_72="html";}}}}}if(this._type&&_72!=this._type){this.unrender(_70,_71);}this._type=_72;switch(_72){case "text":this._rendered=true;this._txt=this._txt||document.createTextNode(str);if(this._txt.data!=str){var old=this._txt.data;this._txt.data=str;_71.onChangeData&&_71.onChangeData(this._txt,old,this._txt.data);}return _71.concat(this._txt);case "injection":var _73=str.getRootNode();if(this._rendered&&_73!=this._root){_71=this.unrender(_70,_71);}this._root=_73;var _74=this._injected=new dd._DomNodeList();_74.push(new dd.ChangeNode(_71.getParent()));_74.push(new dd._DomNode(_73));_74.push(str);_74.push(new dd.ChangeNode(_71.getParent()));this._rendered=true;return _74.render(_70,_71);case "node":this._rendered=true;if(this._node&&this._node!=str&&this._node.parentNode&&this._node.parentNode===_71.getParent()){this._node.parentNode.removeChild(this._node);}this._node=str;return _71.concat(str);case "html":if(this._rendered&&this._src!=str){_71=this.unrender(_70,_71);}this._src=str;if(!this._rendered){this._rendered=true;this._html=this._html||[];var div=(this._div=this._div||document.createElement("div"));div.innerHTML=str;var _75=div.childNodes;while(_75.length){var _76=div.removeChild(_75[0]);this._html.push(_76);_71=_71.concat(_76);}}return _71;default:return _71;}},unrender:function(_77,_78){if(!this._rendered){return _78;}this._rendered=false;switch(this._type){case "text":return _78.remove(this._txt);case "injection":return this._injection.unrender(_77,_78);case "node":if(this._node.parentNode===_78.getParent()){return _78.remove(this._node);}return _78;case "html":for(var i=0,l=this._html.length;i<l;i++){_78=_78.remove(this._html[i]);}return _78;default:return _78;}},clone:function(){return new this.constructor(this.contents.getExpression());}});dd.ChangeNode=_4.extend(function(_79,up,_7a){this.contents=_79;this.up=up;this.root=_7a;},{render:function(_7b,_7c){return _7c.setParent(this.contents,this.up,this.root);},unrender:function(_7d,_7e){if(!_7e.getParent()){return _7e;}return _7e.setParent(this.contents);},clone:function(){return new this.constructor(this.contents,this.up,this.root);}});dd.AttributeNode=_4.extend(function(key,_7f){this.key=key;this.value=_7f;this.contents=_7f;if(this._pool[_7f]){this.nodelist=this._pool[_7f];}else{if(!(this.nodelist=dd.quickFilter(_7f))){this.nodelist=(new dd.Template(_7f,true)).nodelist;}this._pool[_7f]=this.nodelist;}this.contents="";},{_pool:{},render:function(_80,_81){var key=this.key;var _82=this.nodelist.dummyRender(_80);if(dd.BOOLS[key]){_82=!(_82=="false"||_82=="undefined"||!_82);}if(_82!==this.contents){this.contents=_82;return _81.setAttribute(key,_82);}return _81;},unrender:function(_83,_84){this.contents="";return _84.remove(this.key);},clone:function(_85){return new this.constructor(this.key,this.value);}});dd._DomTextNode=_4.extend(function(str){this.contents=document.createTextNode(str);this.upcoming=str;},{set:function(_86){this.upcoming=_86;return this;},render:function(_87,_88){if(this.contents.data!=this.upcoming){var old=this.contents.data;this.contents.data=this.upcoming;_88.onChangeData&&_88.onChangeData(this.contents,old,this.upcoming);}return _88.concat(this.contents);},unrender:function(_89,_8a){return _8a.remove(this.contents);},isEmpty:function(){return !_4.trim(this.contents.data);},clone:function(){return new this.constructor(this.contents.data);}});dd._DomParser=_4.extend(function(_8b){this.contents=_8b;},{i:0,parse:function(_8c){var _8d={};var _8e=this.contents;if(!_8c){_8c=[];}for(var i=0;i<_8c.length;i++){_8d[_8c[i]]=true;}var _8f=new dd._DomNodeList();while(this.i<_8e.length){var _90=_8e[this.i++];var _91=_90[0];var _92=_90[1];if(_91==dd.TOKEN_CUSTOM){_8f.push(_92);}else{if(_91==dd.TOKEN_CHANGE){var _93=new dd.ChangeNode(_92,_90[2],_90[3]);_92[_93.attr]=_93;_8f.push(_93);}else{if(_91==dd.TOKEN_ATTR){var fn=_7.getTag("attr:"+_90[2],true);if(fn&&_90[3]){if(_90[3].indexOf("{%")!=-1||_90[3].indexOf("{{")!=-1){_92.setAttribute(_90[2],"");}_8f.push(fn(null,new dd.Token(_91,_90[2]+" "+_90[3])));}else{if(_4.isString(_90[3])){if(_90[2]=="style"||_90[3].indexOf("{%")!=-1||_90[3].indexOf("{{")!=-1){_8f.push(new dd.AttributeNode(_90[2],_90[3]));}else{if(_4.trim(_90[3])){try{_4.attr(_92,_90[2],_90[3]);}catch(e){}}}}}}else{if(_91==dd.TOKEN_NODE){var fn=_7.getTag("node:"+_92.tagName.toLowerCase(),true);if(fn){_8f.push(fn(null,new dd.Token(_91,_92),_92.tagName.toLowerCase()));}_8f.push(new dd._DomNode(_92));}else{if(_91==dd.TOKEN_VAR){_8f.push(new dd._DomVarNode(_92));}else{if(_91==dd.TOKEN_TEXT){_8f.push(new dd._DomTextNode(_92.data||_92));}else{if(_91==dd.TOKEN_BLOCK){if(_8d[_92]){--this.i;return _8f;}var cmd=_92.split(/\s+/g);if(cmd.length){cmd=cmd[0];var fn=_7.getTag(cmd);if(typeof fn!="function"){throw new Error("Function not found for "+cmd);}var tpl=fn(this,new dd.Token(_91,_92));if(tpl){_8f.push(tpl);}}}}}}}}}}if(_8c.length){throw new Error("Could not find closing tag(s): "+_8c.toString());}return _8f;},next_token:function(){var _94=this.contents[this.i++];return new dd.Token(_94[0],_94[1]);},delete_first_token:function(){this.i++;},skip_past:function(_95){return dd._Parser.prototype.skip_past.call(this,_95);},create_variable_node:function(_96){return new dd._DomVarNode(_96);},create_text_node:function(_97){return new dd._DomTextNode(_97||"");},getTemplate:function(loc){return new dd.DomTemplate(_8.getTemplate(loc));}});})();}}};});