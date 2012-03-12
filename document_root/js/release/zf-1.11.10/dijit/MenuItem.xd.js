/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dijit.MenuItem"],["require","dijit._Widget"],["require","dijit._Templated"],["require","dijit._Contained"],["require","dijit._CssStateMixin"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dijit.MenuItem"]){_4._hasResource["dijit.MenuItem"]=true;_4.provide("dijit.MenuItem");_4.require("dijit._Widget");_4.require("dijit._Templated");_4.require("dijit._Contained");_4.require("dijit._CssStateMixin");_4.declare("dijit.MenuItem",[_5._Widget,_5._Templated,_5._Contained,_5._CssStateMixin],{templateString:_4.cache("dijit","templates/MenuItem.html","<tr class=\"dijitReset dijitMenuItem\" dojoAttachPoint=\"focusNode\" waiRole=\"menuitem\" tabIndex=\"-1\"\n\t\tdojoAttachEvent=\"onmouseenter:_onHover,onmouseleave:_onUnhover,ondijitclick:_onClick\">\n\t<td class=\"dijitReset\" waiRole=\"presentation\">\n\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitMenuItemIcon\" dojoAttachPoint=\"iconNode\">\n\t</td>\n\t<td class=\"dijitReset dijitMenuItemLabel\" colspan=\"2\" dojoAttachPoint=\"containerNode\"></td>\n\t<td class=\"dijitReset dijitMenuItemAccelKey\" style=\"display: none\" dojoAttachPoint=\"accelKeyNode\"></td>\n\t<td class=\"dijitReset dijitMenuArrowCell\" waiRole=\"presentation\">\n\t\t<div dojoAttachPoint=\"arrowWrapper\" style=\"visibility: hidden\">\n\t\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitMenuExpand\">\n\t\t\t<span class=\"dijitMenuExpandA11y\">+</span>\n\t\t</div>\n\t</td>\n</tr>\n"),attributeMap:_4.delegate(_5._Widget.prototype.attributeMap,{label:{node:"containerNode",type:"innerHTML"},iconClass:{node:"iconNode",type:"class"}}),baseClass:"dijitMenuItem",label:"",iconClass:"",accelKey:"",disabled:false,_fillContent:function(_7){if(_7&&!("label" in this.params)){this.attr("label",_7.innerHTML);}},postCreate:function(){this.inherited(arguments);_4.setSelectable(this.domNode,false);var _8=this.id+"_text";_4.attr(this.containerNode,"id",_8);if(this.accelKeyNode){_4.attr(this.accelKeyNode,"id",this.id+"_accel");_8+=" "+this.id+"_accel";}_5.setWaiState(this.domNode,"labelledby",_8);},_onHover:function(){this.getParent().onItemHover(this);},_onUnhover:function(){this.getParent().onItemUnhover(this);this._hovering=false;this._setStateClass();},_onClick:function(_9){this.getParent().onItemClick(this,_9);_4.stopEvent(_9);},onClick:function(_a){},focus:function(){try{if(_4.isIE==8){this.containerNode.focus();}_5.focus(this.focusNode);}catch(e){}},_onFocus:function(){this._setSelected(true);this.getParent()._onItemFocus(this);this.inherited(arguments);},_setSelected:function(_b){_4.toggleClass(this.domNode,"dijitMenuItemSelected",_b);},setLabel:function(_c){_4.deprecated("dijit.MenuItem.setLabel() is deprecated.  Use attr('label', ...) instead.","","2.0");this.attr("label",_c);},setDisabled:function(_d){_4.deprecated("dijit.Menu.setDisabled() is deprecated.  Use attr('disabled', bool) instead.","","2.0");this.attr("disabled",_d);},_setDisabledAttr:function(_e){this.disabled=_e;_5.setWaiState(this.focusNode,"disabled",_e?"true":"false");},_setAccelKeyAttr:function(_f){this.accelKey=_f;this.accelKeyNode.style.display=_f?"":"none";this.accelKeyNode.innerHTML=_f;_4.attr(this.containerNode,"colSpan",_f?"1":"2");}});}}};});