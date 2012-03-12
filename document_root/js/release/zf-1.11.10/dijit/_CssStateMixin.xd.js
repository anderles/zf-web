/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dijit._CssStateMixin"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dijit._CssStateMixin"]){_4._hasResource["dijit._CssStateMixin"]=true;_4.provide("dijit._CssStateMixin");_4.declare("dijit._CssStateMixin",[],{baseClass:"",cssStateNodes:{},postCreate:function(){this.inherited(arguments);_4.forEach(["onmouseenter","onmouseleave","onmousedown"],function(e){this.connect(this.domNode,e,"_cssMouseEvent");},this);this.connect(this,"attr",function(_7,_8){if(arguments.length==2&&{disabled:true,readOnly:true,checked:true,selected:true}[_7]){this._setStateClass();}});_4.forEach(["_onFocus","_onBlur"],function(ap){this.connect(this,ap,"_setStateClass");},this);for(var ap in this.cssStateNodes){this._trackMouseState(this[ap],this.cssStateNodes[ap]);}this._setStateClass();},_cssMouseEvent:function(_9){if(!this.disabled){switch(_9.type){case "mouseenter":case "mouseover":this._hovering=true;this._active=this._mouseDown;break;case "mouseleave":case "mouseout":this._hovering=false;this._active=false;break;case "mousedown":this._active=true;this._mouseDown=true;var _a=this.connect(_4.body(),"onmouseup",function(){this._active=false;this._mouseDown=false;this._setStateClass();this.disconnect(_a);});break;}this._setStateClass();}},_setStateClass:function(){var _b=this.baseClass.split(" ");function _c(_d){_b=_b.concat(_4.map(_b,function(c){return c+_d;}),"dijit"+_d);};if(this.checked){_c("Checked");}if(this.state){_c(this.state);}if(this.selected){_c("Selected");}if(this.disabled){_c("Disabled");}else{if(this.readOnly){_c("ReadOnly");}else{if(this._active){_c("Active");}else{if(this._hovering){_c("Hover");}}if(this._focused){_c("Focused");}}}var tn=this.stateNode||this.domNode,_e={};_4.forEach(tn.className.split(" "),function(c){_e[c]=true;});if("_stateClasses" in this){_4.forEach(this._stateClasses,function(c){delete _e[c];});}_4.forEach(_b,function(c){_e[c]=true;});var _f=[];for(var c in _e){_f.push(c);}tn.className=_f.join(" ");this._stateClasses=_b;},_trackMouseState:function(_10,_11){var _12=false,_13=false,_14=false;var _15=this,cn=_4.hitch(this,"connect",_10);function _16(){var _17=("disabled" in _15&&_15.disabled)||("readonly" in _15&&_15.readonly);_4.toggleClass(_10,_11+"Hover",_12&&!_13&&!_17);_4.toggleClass(_10,_11+"Active",_13&&!_17);_4.toggleClass(_10,_11+"Focused",_14&&!_17);};cn("onmouseenter",function(){_12=true;_16();});cn("onmouseleave",function(){_12=false;_13=false;_16();});cn("onmousedown",function(){_13=true;_16();});cn("onmouseup",function(){_13=false;_16();});cn("onfocus",function(){_14=true;_16();});cn("onblur",function(){_14=false;_16();});this.connect(this,"attr",function(_18,_19){if(arguments.length==2&&(_18=="disabled"||_18=="readOnly")){_16();}});}});}}};});