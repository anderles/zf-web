/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dijit.form.ValidationTextBox"],["require","dojo.i18n"],["require","dijit.form.TextBox"],["require","dijit.Tooltip"],["requireLocalization","dijit.form","validate",null,"ROOT,ar,ca,cs,da,de,el,es,fi,fr,he,hu,it,ja,ko,nb,nl,pl,pt,pt-pt,ru,sk,sl,sv,th,tr,zh,zh-tw","ROOT,ar,ca,cs,da,de,el,es,fi,fr,he,hu,it,ja,ko,nb,nl,pl,pt,pt-pt,ru,sk,sl,sv,th,tr,zh,zh-tw"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dijit.form.ValidationTextBox"]){_4._hasResource["dijit.form.ValidationTextBox"]=true;_4.provide("dijit.form.ValidationTextBox");_4.require("dojo.i18n");_4.require("dijit.form.TextBox");_4.require("dijit.Tooltip");_4.declare("dijit.form.ValidationTextBox",_5.form.TextBox,{templateString:_4.cache("dijit.form","templates/ValidationTextBox.html","<div class=\"dijit dijitReset dijitInlineTable dijitLeft\"\n\tid=\"widget_${id}\" waiRole=\"presentation\"\n\t><div style=\"overflow:hidden;\"\n\t\t><div class=\"dijitReset dijitValidationIcon\"><br></div\n\t\t><div class=\"dijitReset dijitValidationIconText\">&Chi;</div\n\t\t><div class=\"dijitReset dijitInputField\"\n\t\t\t><input class=\"dijitReset\" dojoAttachPoint='textbox,focusNode' autocomplete=\"off\"\n\t\t\t${nameAttrSetting} type='${type}'\n\t\t/></div\n\t></div\n></div>\n"),baseClass:"dijitTextBox dijitValidationTextBox",required:false,promptMessage:"",invalidMessage:"$_unset_$",constraints:{},regExp:".*",regExpGen:function(_7){return this.regExp;},state:"",tooltipPosition:[],_setValueAttr:function(){this.inherited(arguments);this.validate(this._focused);},validator:function(_8,_9){return (new RegExp("^(?:"+this.regExpGen(_9)+")"+(this.required?"":"?")+"$")).test(_8)&&(!this.required||!this._isEmpty(_8))&&(this._isEmpty(_8)||this.parse(_8,_9)!==undefined);},_isValidSubset:function(){return this.textbox.value.search(this._partialre)==0;},isValid:function(_a){return this.validator(this.textbox.value,this.constraints);},_isEmpty:function(_b){return /^\s*$/.test(_b);},getErrorMessage:function(_c){return this.invalidMessage;},getPromptMessage:function(_d){return this.promptMessage;},_maskValidSubsetError:true,validate:function(_e){var _f="";var _10=this.disabled||this.isValid(_e);if(_10){this._maskValidSubsetError=true;}var _11=!_10&&_e&&this._isValidSubset();var _12=this._isEmpty(this.textbox.value);if(_12){this._maskValidSubsetError=true;}this.state=(_10||(!this._hasBeenBlurred&&_12)||_11)?"":"Error";if(this.state=="Error"){this._maskValidSubsetError=false;}this._setStateClass();_5.setWaiState(this.focusNode,"invalid",_10?"false":"true");if(_e){if(_12){_f=this.getPromptMessage(true);}if(!_f&&(this.state=="Error"||(_11&&!this._maskValidSubsetError))){_f=this.getErrorMessage(true);}}this.displayMessage(_f);return _10;},_message:"",displayMessage:function(_13){if(this._message==_13){return;}this._message=_13;_5.hideTooltip(this.domNode);if(_13){_5.showTooltip(_13,this.domNode,this.tooltipPosition);}},_refreshState:function(){this.validate(this._focused);this.inherited(arguments);},constructor:function(){this.constraints={};},postMixInProperties:function(){this.inherited(arguments);this.constraints.locale=this.lang;this.messages=_4.i18n.getLocalization("dijit.form","validate",this.lang);if(this.invalidMessage=="$_unset_$"){this.invalidMessage=this.messages.invalidMessage;}var p=this.regExpGen(this.constraints);this.regExp=p;var _14="";if(p!=".*"){this.regExp.replace(/\\.|\[\]|\[.*?[^\\]{1}\]|\{.*?\}|\(\?[=:!]|./g,function(re){switch(re.charAt(0)){case "{":case "+":case "?":case "*":case "^":case "$":case "|":case "(":_14+=re;break;case ")":_14+="|$)";break;default:_14+="(?:"+re+"|$)";break;}});}try{"".search(_14);}catch(e){_14=this.regExp;console.warn("RegExp error in "+this.declaredClass+": "+this.regExp);}this._partialre="^(?:"+_14+")$";},_setDisabledAttr:function(_15){this.inherited(arguments);this._refreshState();},_setRequiredAttr:function(_16){this.required=_16;_5.setWaiState(this.focusNode,"required",_16);this._refreshState();},postCreate:function(){if(_4.isIE){var s=_4.getComputedStyle(this.focusNode);if(s){var ff=s.fontFamily;if(ff){this.focusNode.style.fontFamily=ff;}}}this.inherited(arguments);},reset:function(){this._maskValidSubsetError=true;this.inherited(arguments);},_onBlur:function(){this.displayMessage("");this.inherited(arguments);}});_4.declare("dijit.form.MappedTextBox",_5.form.ValidationTextBox,{postMixInProperties:function(){this.inherited(arguments);this.nameAttrSetting="";},serialize:function(val,_17){return val.toString?val.toString():"";},toString:function(){var val=this.filter(this.attr("value"));return val!=null?(typeof val=="string"?val:this.serialize(val,this.constraints)):"";},validate:function(){this.valueNode.value=this.toString();return this.inherited(arguments);},buildRendering:function(){this.inherited(arguments);this.valueNode=_4.place("<input type='hidden'"+(this.name?" name='"+this.name+"'":"")+">",this.textbox,"after");},reset:function(){this.valueNode.value="";this.inherited(arguments);}});_4.declare("dijit.form.RangeBoundTextBox",_5.form.MappedTextBox,{rangeMessage:"",rangeCheck:function(_18,_19){return ("min" in _19?(this.compare(_18,_19.min)>=0):true)&&("max" in _19?(this.compare(_18,_19.max)<=0):true);},isInRange:function(_1a){return this.rangeCheck(this.attr("value"),this.constraints);},_isDefinitelyOutOfRange:function(){var val=this.attr("value");var _1b=false;var _1c=false;if("min" in this.constraints){var min=this.constraints.min;min=this.compare(val,((typeof min=="number")&&min>=0&&val!=0)?0:min);_1b=(typeof min=="number")&&min<0;}if("max" in this.constraints){var max=this.constraints.max;max=this.compare(val,((typeof max!="number")||max>0)?max:0);_1c=(typeof max=="number")&&max>0;}return _1b||_1c;},_isValidSubset:function(){return this.inherited(arguments)&&!this._isDefinitelyOutOfRange();},isValid:function(_1d){return this.inherited(arguments)&&((this._isEmpty(this.textbox.value)&&!this.required)||this.isInRange(_1d));},getErrorMessage:function(_1e){var v=this.attr("value");if(v!==null&&v!==""&&v!==undefined&&!this.isInRange(_1e)){return this.rangeMessage;}return this.inherited(arguments);},postMixInProperties:function(){this.inherited(arguments);if(!this.rangeMessage){this.messages=_4.i18n.getLocalization("dijit.form","validate",this.lang);this.rangeMessage=this.messages.rangeMessage;}},postCreate:function(){this.inherited(arguments);if(this.constraints.min!==undefined){_5.setWaiState(this.focusNode,"valuemin",this.constraints.min);}if(this.constraints.max!==undefined){_5.setWaiState(this.focusNode,"valuemax",this.constraints.max);}},_setValueAttr:function(_1f,_20){_5.setWaiState(this.focusNode,"valuenow",_1f);this.inherited(arguments);}});}}};});