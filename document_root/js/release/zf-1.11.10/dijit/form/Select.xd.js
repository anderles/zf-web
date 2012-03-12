/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dijit.form.Select"],["require","dijit.form._FormSelectWidget"],["require","dijit._HasDropDown"],["require","dijit.Menu"],["requireLocalization","dijit.form","validate",null,"ROOT,ar,ca,cs,da,de,el,es,fi,fr,he,hu,it,ja,ko,nb,nl,pl,pt,pt-pt,ru,sk,sl,sv,th,tr,zh,zh-tw","ROOT,ar,ca,cs,da,de,el,es,fi,fr,he,hu,it,ja,ko,nb,nl,pl,pt,pt-pt,ru,sk,sl,sv,th,tr,zh,zh-tw"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dijit.form.Select"]){_4._hasResource["dijit.form.Select"]=true;_4.provide("dijit.form.Select");_4.require("dijit.form._FormSelectWidget");_4.require("dijit._HasDropDown");_4.require("dijit.Menu");_4.declare("dijit.form._SelectMenu",_5.Menu,{buildRendering:function(){this.inherited(arguments);var o=(this.menuTableNode=this.domNode);var n=(this.domNode=_4.doc.createElement("div"));if(o.parentNode){o.parentNode.replaceChild(n,o);}_4.removeClass(o,"dijitMenuTable");n.className=o.className+" dijitSelectMenu";o.className="dijitReset dijitMenuTable";_5.setWaiRole(o,"listbox");_5.setWaiRole(n,"presentation");n.appendChild(o);this.tabIndex=null;},resize:function(mb){if(mb){_4.marginBox(this.domNode,mb);var w=_4.contentBox(this.domNode).w;if(_4.isMoz&&this.domNode.scrollHeight>this.domNode.clientHeight){w--;}else{if(_4.isIE<8||(_4.isIE&&_4.isQuirks)){w-=16;}}_4.marginBox(this.menuTableNode,{w:w});}}});_4.declare("dijit.form.Select",[_5.form._FormSelectWidget,_5._HasDropDown],{baseClass:"dijitSelect",templateString:_4.cache("dijit.form","templates/Select.html","<table class='dijit dijitReset dijitInline dijitLeft'\n\tdojoAttachPoint=\"_buttonNode,tableNode\" cellspacing='0' cellpadding='0' waiRole=\"presentation\"\n\t><tbody waiRole=\"presentation\"><tr waiRole=\"presentation\"\n\t\t><td class=\"dijitReset dijitStretch dijitButtonContents dijitButtonNode\" dojoAttachPoint=\"focusNode\"\n\t\t\twaiRole=\"combobox\" waiState=\"haspopup-true\"\n\t\t\t><span class=\"dijitReset dijitInline dijitButtonText\"  dojoAttachPoint=\"containerNode,_popupStateNode\"></span\n\t\t\t><input type=\"hidden\" ${nameAttrSetting} dojoAttachPoint=\"valueNode\" value=\"${value}\" waiState=\"hidden-true\" />\n\t\t</td><td class=\"dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton\"\n\t\t\t\tdojoAttachPoint=\"titleNode\" waiRole=\"presentation\"\n\t\t\t><div class=\"dijitReset dijitArrowButtonInner\" waiRole=\"presentation\">&thinsp;</div\n\t\t\t><div class=\"dijitReset dijitArrowButtonChar\" waiRole=\"presentation\">&#9660;</div\n\t\t></td\n\t></tr></tbody\n></table>\n"),attributeMap:_4.mixin(_4.clone(_5.form._FormSelectWidget.prototype.attributeMap),{style:"tableNode"}),required:false,state:"",tooltipPosition:[],emptyLabel:"",_isLoaded:false,_childrenLoaded:false,_fillContent:function(){this.inherited(arguments);if(this.options.length&&!this.value&&this.srcNodeRef){var si=this.srcNodeRef.selectedIndex;this.value=this.options[si!=-1?si:0].value;}this.dropDown=new _5.form._SelectMenu();_4.addClass(this.dropDown.domNode,this.baseClass+"Menu");},_getMenuItemForOption:function(_7){if(!_7.value){return new _5.MenuSeparator();}else{var _8=_4.hitch(this,"_setValueAttr",_7);var _9=new _5.MenuItem({option:_7,label:_7.label,onClick:_8,disabled:_7.disabled||false});_5.setWaiRole(_9.focusNode,"listitem");return _9;}},_addOptionItem:function(_a){if(this.dropDown){this.dropDown.addChild(this._getMenuItemForOption(_a));}},_getChildren:function(){if(!this.dropDown){return [];}return this.dropDown.getChildren();},_loadChildren:function(_b){if(_b===true){if(this.dropDown){delete this.dropDown.focusedChild;}if(this.options.length){this.inherited(arguments);}else{_4.forEach(this._getChildren(),function(_c){_c.destroyRecursive();});var _d=new _5.MenuItem({label:"&nbsp;"});this.dropDown.addChild(_d);}}else{this._updateSelection();}var _e=this.options.length;this._isLoaded=false;this._childrenLoaded=true;if(!this._loadingStore){this._setValueAttr(this.value);}},_setValueAttr:function(_f){this.inherited(arguments);_4.attr(this.valueNode,"value",this.attr("value"));},_setDisplay:function(_10){this.containerNode.innerHTML="<span class=\"dijitReset dijitInline "+this.baseClass+"Label\">"+(_10||this.emptyLabel||"&nbsp;")+"</span>";_5.setWaiState(this.focusNode,"valuenow",(_10||this.emptyLabel||"&nbsp;"));},validate:function(_11){var _12=this.isValid(_11);this.state=_12?"":"Error";this._setStateClass();_5.setWaiState(this.focusNode,"invalid",_12?"false":"true");var _13=_12?"":this._missingMsg;if(this._message!==_13){this._message=_13;_5.hideTooltip(this.domNode);if(_13){_5.showTooltip(_13,this.domNode,this.tooltipPosition);}}return _12;},isValid:function(_14){return (!this.required||!(/^\s*$/.test(this.value)));},reset:function(){this.inherited(arguments);_5.hideTooltip(this.domNode);this.state="";this._setStateClass();delete this._message;},postMixInProperties:function(){this.inherited(arguments);this._missingMsg=_4.i18n.getLocalization("dijit.form","validate",this.lang).missingMessage;},postCreate:function(){this.inherited(arguments);if(this.tableNode.style.width){_4.addClass(this.domNode,this.baseClass+"FixedWidth");}},isLoaded:function(){return this._isLoaded;},loadDropDown:function(_15){this._loadChildren(true);this._isLoaded=true;_15();},uninitialize:function(_16){if(this.dropDown&&!this.dropDown._destroyed){this.dropDown.destroyRecursive(_16);delete this.dropDown;}this.inherited(arguments);}});}}};});