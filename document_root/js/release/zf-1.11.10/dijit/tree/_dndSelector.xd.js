/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dijit.tree._dndSelector"],["require","dojo.dnd.common"],["require","dijit.tree._dndContainer"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dijit.tree._dndSelector"]){_4._hasResource["dijit.tree._dndSelector"]=true;_4.provide("dijit.tree._dndSelector");_4.require("dojo.dnd.common");_4.require("dijit.tree._dndContainer");_4.declare("dijit.tree._dndSelector",_5.tree._dndContainer,{constructor:function(_7,_8){this.selection={};this.anchor=null;this.simpleSelection=false;this.events.push(_4.connect(this.tree.domNode,"onmousedown",this,"onMouseDown"),_4.connect(this.tree.domNode,"onmouseup",this,"onMouseUp"),_4.connect(this.tree.domNode,"onmousemove",this,"onMouseMove"));},singular:false,getSelectedNodes:function(){return this.selection;},selectNone:function(){return this._removeSelection()._removeAnchor();},destroy:function(){this.inherited(arguments);this.selection=this.anchor=null;},onMouseDown:function(e){if(!this.current){return;}if(e.button==_4.mouseButtons.RIGHT){return;}var _9=_5.getEnclosingWidget(this.current),id=_9.id+"-dnd";if(!_4.hasAttr(this.current,"id")){_4.attr(this.current,"id",id);}if(!this.singular&&!_4.isCopyKey(e)&&!e.shiftKey&&(this.current.id in this.selection)){this.simpleSelection=true;_4.stopEvent(e);return;}if(this.singular){if(this.anchor==this.current){if(_4.isCopyKey(e)){this.selectNone();}}else{this.selectNone();this.anchor=this.current;this._addItemClass(this.anchor,"Anchor");this.selection[this.current.id]=this.current;}}else{if(!this.singular&&e.shiftKey){if(_4.isCopyKey(e)){}else{}}else{if(_4.isCopyKey(e)){if(this.anchor==this.current){delete this.selection[this.anchor.id];this._removeAnchor();}else{if(this.current.id in this.selection){this._removeItemClass(this.current,"Selected");delete this.selection[this.current.id];}else{if(this.anchor){this._removeItemClass(this.anchor,"Anchor");this._addItemClass(this.anchor,"Selected");}this.anchor=this.current;this._addItemClass(this.current,"Anchor");this.selection[this.current.id]=this.current;}}}else{if(!(id in this.selection)){this.selectNone();this.anchor=this.current;this._addItemClass(this.current,"Anchor");this.selection[id]=this.current;}}}}_4.stopEvent(e);},onMouseUp:function(e){if(!this.simpleSelection){return;}this.simpleSelection=false;this.selectNone();if(this.current){this.anchor=this.current;this._addItemClass(this.anchor,"Anchor");this.selection[this.current.id]=this.current;}},onMouseMove:function(e){this.simpleSelection=false;},_removeSelection:function(){var e=_4.dnd._empty;for(var i in this.selection){if(i in e){continue;}var _a=_4.byId(i);if(_a){this._removeItemClass(_a,"Selected");}}this.selection={};return this;},_removeAnchor:function(){if(this.anchor){this._removeItemClass(this.anchor,"Anchor");this.anchor=null;}return this;},forInSelectedItems:function(f,o){o=o||_4.global;for(var id in this.selection){console.log("selected item id: "+id);f.call(o,this.getItem(id),id,this);}}});}}};});