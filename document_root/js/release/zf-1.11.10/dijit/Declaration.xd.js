/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dijit.Declaration"],["require","dijit._Widget"],["require","dijit._Templated"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dijit.Declaration"]){_4._hasResource["dijit.Declaration"]=true;_4.provide("dijit.Declaration");_4.require("dijit._Widget");_4.require("dijit._Templated");_4.declare("dijit.Declaration",_5._Widget,{_noScript:true,widgetClass:"",defaults:null,mixins:[],buildRendering:function(){var _7=this.srcNodeRef.parentNode.removeChild(this.srcNodeRef),_8=_4.query("> script[type^='dojo/method'][event]",_7).orphan(),_9=_4.query("> script[type^='dojo/method']",_7).orphan(),_a=_4.query("> script[type^='dojo/connect']",_7).orphan(),_b=_7.nodeName;var _c=this.defaults||{};_4.forEach(_8,function(s){var _d=s.getAttribute("event"),_e=_4.parser._functionFromScript(s);_c[_d]=_e;});this.mixins=this.mixins.length?_4.map(this.mixins,function(_f){return _4.getObject(_f);}):[_5._Widget,_5._Templated];_c.widgetsInTemplate=true;_c._skipNodeCache=true;_c.templateString="<"+_b+" class='"+_7.className+"' dojoAttachPoint='"+(_7.getAttribute("dojoAttachPoint")||"")+"' dojoAttachEvent='"+(_7.getAttribute("dojoAttachEvent")||"")+"' >"+_7.innerHTML.replace(/\%7B/g,"{").replace(/\%7D/g,"}")+"</"+_b+">";_4.query("[dojoType]",_7).forEach(function(_10){_10.removeAttribute("dojoType");});var wc=_4.declare(this.widgetClass,this.mixins,_c);var _11=_a.concat(_9);_4.forEach(_11,function(s){var evt=s.getAttribute("event")||"postscript",_12=_4.parser._functionFromScript(s);_4.connect(wc.prototype,evt,_12);});}});}}};});