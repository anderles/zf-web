/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.form.Rating"],["require","dijit.form._FormWidget"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.form.Rating"]){_4._hasResource["dojox.form.Rating"]=true;_4.provide("dojox.form.Rating");_4.require("dijit.form._FormWidget");_4.declare("dojox.form.Rating",_5.form._FormWidget,{templateString:null,numStars:3,value:0,constructor:function(_7){_4.mixin(this,_7);var _8="<div dojoAttachPoint=\"domNode\" class=\"dojoxRating dijitInline\">"+"<input type=\"hidden\" value=\"0\" dojoAttachPoint=\"focusNode\" /><ul>${stars}</ul>"+"</div>";var _9="<li class=\"dojoxRatingStar dijitInline\" dojoAttachEvent=\"onclick:onStarClick,onmouseover:_onMouse,onmouseout:_onMouse\" value=\"${value}\"></li>";var _a="";for(var i=0;i<this.numStars;i++){_a+=_4.string.substitute(_9,{value:i+1});}this.templateString=_4.string.substitute(_8,{stars:_a});},postCreate:function(){this.inherited(arguments);this._renderStars(this.value);},_onMouse:function(_b){this.inherited(arguments);if(this._hovering){var _c=+_4.attr(_b.target,"value");this.onMouseOver(_b,_c);this._renderStars(_c,true);}else{this._renderStars(this.value);}},_renderStars:function(_d,_e){_4.query(".dojoxRatingStar",this.domNode).forEach(function(_f,i){if(i+1>_d){_4.removeClass(_f,"dojoxRatingStarHover");_4.removeClass(_f,"dojoxRatingStarChecked");}else{_4.removeClass(_f,"dojoxRatingStar"+(_e?"Checked":"Hover"));_4.addClass(_f,"dojoxRatingStar"+(_e?"Hover":"Checked"));}});},onStarClick:function(evt){var _10=+_4.attr(evt.target,"value");this.setAttribute("value",_10==this.value?0:_10);this._renderStars(this.value);this.onChange(this.value);},onMouseOver:function(){},setAttribute:function(key,_11){this.inherited("setAttribute",arguments);if(key=="value"){this._renderStars(this.value);this.onChange(this.value);}}});}}};});