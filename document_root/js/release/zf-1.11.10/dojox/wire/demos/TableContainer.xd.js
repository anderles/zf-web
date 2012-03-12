/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.wire.demos.TableContainer"],["require","dojo.parser"],["require","dijit._Widget"],["require","dijit._Templated"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.wire.demos.TableContainer"]){_4._hasResource["dojox.wire.demos.TableContainer"]=true;_4.provide("dojox.wire.demos.TableContainer");_4.require("dojo.parser");_4.require("dijit._Widget");_4.require("dijit._Templated");_4.declare("dojox.wire.demos.TableContainer",[_5._Widget,_5._Templated,_5._Container],{templateString:"<table class='tablecontainer'><tbody dojoAttachPoint='tableContainer'></tbody></table>",rowCount:0,headers:"",addRow:function(_7){try{var _8=document.createElement("tr");if((this.rowCount%2)===0){_4.addClass(_8,"alternate");}this.rowCount++;for(var i in _7){var _9=document.createElement("td");var _a=document.createTextNode(_7[i]);_9.appendChild(_a);_8.appendChild(_9);}this.tableContainer.appendChild(_8);}catch(e){console.debug(e);}},clearTable:function(){while(this.tableContainer.firstChild.nextSibling){this.tableContainer.removeChild(this.tableContainer.firstChild.nextSibling);}this.rowCount=0;},postCreate:function(){var _b=this.headers.split(",");var tr=document.createElement("tr");for(i in _b){var _c=_b[i];var th=document.createElement("th");var _d=document.createTextNode(_c);th.appendChild(_d);tr.appendChild(th);}this.tableContainer.appendChild(tr);}});}}};});