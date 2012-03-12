/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.layout.ToggleSplitter"],["require","dijit.layout.BorderContainer"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.layout.ToggleSplitter"]){_4._hasResource["dojox.layout.ToggleSplitter"]=true;_4.provide("dojox.layout.ToggleSplitter");_4.experimental("dojox.layout.ToggleSplitter");_4.require("dijit.layout.BorderContainer");_4.declare("dojox.layout.ToggleSplitter",[_5.layout._Splitter],{open:true,closedThreshold:5,openSize:"",_closedSize:"0",templateString:"<div class=\"dijitSplitter dojoxToggleSplitter\" dojoAttachEvent=\"onkeypress:_onKeyPress,onmousedown:_onMouseDown\" tabIndex=\"0\" waiRole=\"separator\"><div dojoAttachPoint=\"toggleNode\" class=\"dijitSplitterThumb dojoxToggleSplitterIcon\"></div></div>",postCreate:function(){this._started=false;this.inherited(arguments);var _7=this.region;_4.addClass(this.domNode,"dojoxToggleSplitter"+_7.charAt(0).toUpperCase()+_7.substring(1));this.connect(this,"onDblClick","_toggleMe");},startup:function(){this.inherited(arguments);var _8=this.child.domNode,_9=_4.style(_8,(this.horizontal?"height":"width"));_4.forEach(["toggleSplitterOpen","toggleSplitterClosedThreshold","toggleSplitterOpenSize"],function(_a){var _b=_a.substring("toggleSplitter".length);_b=_b.charAt(0).toLowerCase()+_b.substring(1);if(_a in this.child){this[_b]=this.child[_a];}},this);if(!this.openSize){this.openSize=(this.open)?_9+"px":"75px";}this._openStyleProps=this._getStyleProps(_8,true);this._started=true;this.attr("open",this.open);return this;},_onMouseUp:function(_c){_4.disconnect(this._onMoveHandle);_4.disconnect(this._onUpHandle);delete this._onMoveHandle;delete this._onUpHandle;delete this._startPosn;},_onPrelimMouseMove:function(_d){var _e=this._startPosn||0;var _f=3;var _10=Math.abs(_e-(this.horizontal?_d.clientY:_d.clientX));if(_10>=_f){_4.disconnect(this._onMoveHandle);this._startDrag(_d);}},_onMouseDown:function(evt){if(!this.open){return;}if(!this._onUpHandle){this._onUpHandle=_4.connect(_4.body(),"onmouseup",this,"_onMouseUp");}if(!this._onMoveHandle){this._startPosn=this.horizontal?evt.clientY:evt.clientX;this._onMoveHandle=_4.connect(_4.body(),"onmousemove",this,"_onPrelimMouseMove");}},_handleOnChange:function(){var _11=this.child.domNode,_12,dim=this.horizontal?"height":"width";if(this.open){var _13=_4.mixin({display:"block",overflow:"auto",visibility:"visible"},this._openStyleProps);_13[dim]=(this._openStyleProps&&this._openStyleProps[dim])?this._openStyleProps[dim]:this.openSize;_4.style(_11,_13);this.connect(this.domNode,"onmousedown","_onMouseDown");}else{var _14=_4.getComputedStyle(_11);_12=this._getStyleProps(_11,true,_14);var _15=this._getStyleProps(_11,false,_14);this._openStyleProps=_12;_4.style(_11,_15);}this._setStateClass();if(this.container._started){this.container._layoutChildren(this.region);}},_getStyleProps:function(_16,_17,_18){if(!_18){_18=_4.getComputedStyle(_16);}var _19={},dim=this.horizontal?"height":"width";_19["overflow"]=(_17)?_18["overflow"]:"hidden";_19["visibility"]=(_17)?_18["visibility"]:"hidden";_19[dim]=(_17)?_16.style[dim]||_18[dim]:this._closedSize;var _1a=["Top","Right","Bottom","Left"];_4.forEach(["padding","margin","border"],function(_1b){for(var i=0;i<_1a.length;i++){var _1c=_1b+_1a[i];if(_1b=="border"){_1b+="Width";}if(undefined!==_18[_1c]){_19[_1c]=(_17)?_18[_1c]:0;}}});return _19;},_setStateClass:function(){if(this.open){_4.removeClass(this.domNode,"dojoxToggleSplitterClosed");_4.addClass(this.domNode,"dojoxToggleSplitterOpen");_4.removeClass(this.toggleNode,"dojoxToggleSplitterIconClosed");_4.addClass(this.toggleNode,"dojoxToggleSplitterIconOpen");}else{_4.addClass(this.domNode,"dojoxToggleSplitterClosed");_4.removeClass(this.domNode,"dojoxToggleSplitterOpen");_4.addClass(this.toggleNode,"dojoxToggleSplitterIconClosed");_4.removeClass(this.toggleNode,"dojoxToggleSplitterIconOpen");}},_setOpenAttr:function(_1d){if(!this._started){return;}this.open=_1d;this._handleOnChange(_1d,true);var evt=this.open?"onOpen":"onClose";this[evt](this.child);},onOpen:function(){},onClose:function(){},_toggleMe:function(evt){if(evt){_4.stopEvent(evt);}this.attr("open",!this.open);},_onKeyPress:function(e){this.inherited(arguments);}});_4.extend(_5._Widget,{toggleSplitterOpen:true,toggleSplitterClosedThreshold:5,toggleSplitterOpenSize:""});}}};});