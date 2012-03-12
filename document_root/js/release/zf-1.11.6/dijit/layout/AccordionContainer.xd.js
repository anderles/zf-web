/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dijit.layout.AccordionContainer"],["require","dojo.fx"],["require","dijit._Container"],["require","dijit._Templated"],["require","dijit._CssStateMixin"],["require","dijit.layout.StackContainer"],["require","dijit.layout.ContentPane"],["require","dijit.layout.AccordionPane"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dijit.layout.AccordionContainer"]){_4._hasResource["dijit.layout.AccordionContainer"]=true;_4.provide("dijit.layout.AccordionContainer");_4.require("dojo.fx");_4.require("dijit._Container");_4.require("dijit._Templated");_4.require("dijit._CssStateMixin");_4.require("dijit.layout.StackContainer");_4.require("dijit.layout.ContentPane");_4.require("dijit.layout.AccordionPane");_4.declare("dijit.layout.AccordionContainer",_5.layout.StackContainer,{duration:_5.defaultDuration,buttonWidget:"dijit.layout._AccordionButton",_verticalSpace:0,baseClass:"dijitAccordionContainer",postCreate:function(){this.domNode.style.overflow="hidden";this.inherited(arguments);_5.setWaiRole(this.domNode,"tablist");},startup:function(){if(this._started){return;}this.inherited(arguments);if(this.selectedChildWidget){var _7=this.selectedChildWidget.containerNode.style;_7.display="";_7.overflow="auto";this.selectedChildWidget._wrapperWidget.attr("selected",true);}},_getTargetHeight:function(_8){var cs=_4.getComputedStyle(_8);return Math.max(this._verticalSpace-_4._getPadBorderExtents(_8,cs).h-_4._getMarginExtents(_8,cs).h,0);},layout:function(){var _9=this.selectedChildWidget,_a=_9._wrapperWidget.domNode,_b=_4._getMarginExtents(_a),_c=_4._getPadBorderExtents(_a),_d=this._contentBox;var _e=0;_4.forEach(this.getChildren(),function(_f){if(_f!=_9){_e+=_4.marginBox(_f._wrapperWidget.domNode).h;}});this._verticalSpace=_d.h-_e-_b.h-_c.h-_9._buttonWidget.getTitleHeight();this._containerContentBox={h:this._verticalSpace,w:this._contentBox.w-_b.w-_c.w};if(_9){_9.resize(this._containerContentBox);}},_setupChild:function(_10){_10._wrapperWidget=new _5.layout._AccordionInnerContainer({contentWidget:_10,buttonWidget:this.buttonWidget,id:_10.id+"_wrapper",parent:this});this.inherited(arguments);},addChild:function(_11,_12){if(this._started){_4.place(_11.domNode,this.containerNode,_12);if(!_11._started){_11.startup();}this._setupChild(_11);_4.publish(this.id+"-addChild",[_11,_12]);this.layout();if(!this.selectedChildWidget){this.selectChild(_11);}}else{this.inherited(arguments);}},removeChild:function(_13){this.inherited(arguments);_13._wrapperWidget.destroy();delete _13._wrapperWidget;_4.removeClass(_13.domNode,"dijitHidden");},getChildren:function(){return _4.map(this.inherited(arguments),function(_14){return _14.declaredClass=="dijit.layout._AccordionInnerContainer"?_14.contentWidget:_14;},this);},destroy:function(){_4.forEach(this.getChildren(),function(_15){_15._wrapperWidget.destroy();});this.inherited(arguments);},_transition:function(_16,_17){if(this._inTransition){return;}this._inTransition=true;var _18=[];var _19=this._verticalSpace;if(_16){_16._wrapperWidget.attr("selected",true);this._showChild(_16);if(this.doLayout&&_16.resize){_16.resize(this._containerContentBox);}var _1a=_16.domNode;_4.addClass(_1a,"dijitVisible");_4.removeClass(_1a,"dijitHidden");var _1b=_1a.style.overflow;_1a.style.overflow="hidden";_18.push(_4.animateProperty({node:_1a,duration:this.duration,properties:{height:{start:1,end:this._getTargetHeight(_1a)}},onEnd:_4.hitch(this,function(){_1a.style.overflow=_1b;delete this._inTransition;})}));}if(_17){_17._wrapperWidget.attr("selected",false);var _1c=_17.domNode,_1d=_1c.style.overflow;_1c.style.overflow="hidden";_18.push(_4.animateProperty({node:_1c,duration:this.duration,properties:{height:{start:this._getTargetHeight(_1c),end:1}},onEnd:function(){_4.addClass(_1c,"dijitHidden");_4.removeClass(_1c,"dijitVisible");_1c.style.overflow=_1d;if(_17.onHide){_17.onHide();}}}));}_4.fx.combine(_18).play();},_onKeyPress:function(e,_1e){if(this._inTransition||this.disabled||e.altKey||!(_1e||e.ctrlKey)){if(this._inTransition){_4.stopEvent(e);}return;}var k=_4.keys,c=e.charOrCode;if((_1e&&(c==k.LEFT_ARROW||c==k.UP_ARROW))||(e.ctrlKey&&c==k.PAGE_UP)){this._adjacent(false)._buttonWidget._onTitleClick();_4.stopEvent(e);}else{if((_1e&&(c==k.RIGHT_ARROW||c==k.DOWN_ARROW))||(e.ctrlKey&&(c==k.PAGE_DOWN||c==k.TAB))){this._adjacent(true)._buttonWidget._onTitleClick();_4.stopEvent(e);}}}});_4.declare("dijit.layout._AccordionInnerContainer",[_5._Widget,_5._CssStateMixin],{baseClass:"dijitAccordionInnerContainer",isContainer:true,isLayoutContainer:true,buildRendering:function(){this.domNode=_4.place("<div class='"+this.baseClass+"'>",this.contentWidget.domNode,"after");var _1f=this.contentWidget,cls=_4.getObject(this.buttonWidget);this.button=_1f._buttonWidget=(new cls({contentWidget:_1f,label:_1f.title,title:_1f.tooltip,iconClass:_1f.iconClass,id:_1f.id+"_button",parent:this.parent})).placeAt(this.domNode);_4.place(this.contentWidget.domNode,this.domNode);},postCreate:function(){this.inherited(arguments);this.connect(this.contentWidget,"attr",function(_20,_21){if(arguments.length==2){var _22={title:"label",tooltip:"title",iconClass:"iconClass"}[_20];if(_22){this.button.attr(_22,_21);}}},this);},_setSelectedAttr:function(_23){this.selected=_23;this.button.attr("selected",_23);if(_23){var cw=this.contentWidget;if(cw.onSelected){cw.onSelected();}}},startup:function(){this.contentWidget.startup();},destroy:function(){this.button.destroyRecursive();delete this.contentWidget._buttonWidget;delete this.contentWidget._wrapperWidget;this.inherited(arguments);},destroyDescendants:function(){this.contentWidget.destroyRecursive();}});_4.declare("dijit.layout._AccordionButton",[_5._Widget,_5._Templated,_5._CssStateMixin],{templateString:_4.cache("dijit.layout","templates/AccordionButton.html","<div dojoAttachPoint='titleNode,focusNode' dojoAttachEvent='ondijitclick:_onTitleClick,onkeypress:_onTitleKeyPress'\n\t\tclass='dijitAccordionTitle' wairole=\"tab\" waiState=\"expanded-false\"\n\t\t><span class='dijitInline dijitAccordionArrow' waiRole=\"presentation\"></span\n\t\t><span class='arrowTextUp' waiRole=\"presentation\">+</span\n\t\t><span class='arrowTextDown' waiRole=\"presentation\">-</span\n\t\t><img src=\"${_blankGif}\" alt=\"\" dojoAttachPoint='iconNode' style=\"vertical-align: middle\" waiRole=\"presentation\"/>\n\t\t<span waiRole=\"presentation\" dojoAttachPoint='titleTextNode' class='dijitAccordionText'></span>\n</div>\n"),attributeMap:_4.mixin(_4.clone(_5.layout.ContentPane.prototype.attributeMap),{label:{node:"titleTextNode",type:"innerHTML"},title:{node:"titleTextNode",type:"attribute",attribute:"title"},iconClass:{node:"iconNode",type:"class"}}),baseClass:"dijitAccordionTitle",getParent:function(){return this.parent;},postCreate:function(){this.inherited(arguments);_4.setSelectable(this.domNode,false);var _24=_4.attr(this.domNode,"id").replace(" ","_");_4.attr(this.titleTextNode,"id",_24+"_title");_5.setWaiState(this.focusNode,"labelledby",_4.attr(this.titleTextNode,"id"));},getTitleHeight:function(){return _4.marginBox(this.titleNode).h;},_onTitleClick:function(){var _25=this.getParent();if(!_25._inTransition){_25.selectChild(this.contentWidget);_5.focus(this.focusNode);}},_onTitleKeyPress:function(evt){return this.getParent()._onKeyPress(evt,this.contentWidget);},_setSelectedAttr:function(_26){this.selected=_26;_5.setWaiState(this.focusNode,"expanded",_26);_5.setWaiState(this.focusNode,"selected",_26);this.focusNode.setAttribute("tabIndex",_26?"0":"-1");}});}}};});