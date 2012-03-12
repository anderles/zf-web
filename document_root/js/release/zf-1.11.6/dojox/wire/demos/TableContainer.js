/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.wire.demos.TableContainer"]){dojo._hasResource["dojox.wire.demos.TableContainer"]=true;dojo.provide("dojox.wire.demos.TableContainer");dojo.require("dojo.parser");dojo.require("dijit._Widget");dojo.require("dijit._Templated");dojo.declare("dojox.wire.demos.TableContainer",[dijit._Widget,dijit._Templated,dijit._Container],{templateString:"<table class='tablecontainer'><tbody dojoAttachPoint='tableContainer'></tbody></table>",rowCount:0,headers:"",addRow:function(_1){try{var _2=document.createElement("tr");if((this.rowCount%2)===0){dojo.addClass(_2,"alternate");}this.rowCount++;for(var i in _1){var _3=document.createElement("td");var _4=document.createTextNode(_1[i]);_3.appendChild(_4);_2.appendChild(_3);}this.tableContainer.appendChild(_2);}catch(e){console.debug(e);}},clearTable:function(){while(this.tableContainer.firstChild.nextSibling){this.tableContainer.removeChild(this.tableContainer.firstChild.nextSibling);}this.rowCount=0;},postCreate:function(){var _5=this.headers.split(",");var tr=document.createElement("tr");for(i in _5){var _6=_5[i];var th=document.createElement("th");var _7=document.createTextNode(_6);th.appendChild(_7);tr.appendChild(th);}this.tableContainer.appendChild(tr);}});}