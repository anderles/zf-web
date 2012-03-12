/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.widget.Iterator"],["require","dijit.Declaration"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.widget.Iterator"]){_4._hasResource["dojox.widget.Iterator"]=true;_4.provide("dojox.widget.Iterator");_4.require("dijit.Declaration");_4.experimental("dojox.widget.Iterator");_4.declare("dojox.widget.Iterator",[_5.Declaration],{constructor:(function(){var _7=0;return function(){this.attrs=[];this.children=[];this.widgetClass="dojox.widget.Iterator._classes._"+(_7++);};})(),start:0,fetchMax:1000,query:{name:"*"},attrs:[],defaultValue:"",widgetCtor:null,dataValues:[],data:null,store:null,_srcIndex:0,_srcParent:null,_setSrcIndex:function(s){this._srcIndex=0;this._srcParent=s.parentNode;var ts=s;while(ts.previousSibling){this._srcIndex++;ts=ts.previousSibling;}},postscript:function(p,s){this._setSrcIndex(s);this.inherited("postscript",arguments);var wc=this.widgetCtor=_4.getObject(this.widgetClass);this.attrs=_4.map(wc.prototype.templateString.match(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g),function(s){return s.slice(2,-1);});_4.forEach(this.attrs,function(m){wc.prototype[m]="";});this.update();},clear:function(){if(this.children.length){this._setSrcIndex(this.children[0].domNode);}_4.forEach(this.children,"item.destroy();");this.children=[];},update:function(){if(this.store){this.fetch();}else{this.onDataAvailable(this.data||this.dataValues);}},_addItem:function(_8,_9){if(_4.isString(_8)){_8={value:_8};}var _a=new this.widgetCtor(_8);this.children.push(_a);_4.place(_a.domNode,this._srcParent,this._srcIndex+_9);},getAttrValuesObj:function(_b){var _c={};if(_4.isString(_b)){_4.forEach(this.attrs,function(_d){_c[_d]=(_d=="value")?_b:this.defaultValue;},this);}else{_4.forEach(this.attrs,function(_e){if(this.store){_c[_e]=this.store.getValue(_b,_e)||this.defaultValue;}else{_c[_e]=_b[_e]||this.defaultValue;}},this);}return _c;},onDataAvailable:function(_f){this.clear();_4.forEach(_f,function(_10,idx){this._addItem(this.getAttrValuesObj(_10),idx);},this);},fetch:function(_11,_12,end){this.store.fetch({query:_11||this.query,start:_12||this.start,count:end||this.fetchMax,onComplete:_4.hitch(this,"onDataAvailable")});}});_6.widget.Iterator._classes={};}}};});