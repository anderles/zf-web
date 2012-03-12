/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.charting.Theme"],["require","dojox.color"],["require","dojox.color.Palette"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.charting.Theme"]){_4._hasResource["dojox.charting.Theme"]=true;_4.provide("dojox.charting.Theme");_4.require("dojox.color");_4.require("dojox.color.Palette");(function(){var _7=_6.charting;_7.Theme=function(_8){_8=_8||{};var _9=_7.Theme._def;_4.forEach(["chart","plotarea","axis","series","marker"],function(n){this[n]=_4.delegate(_9[n],_8[n]||{});},this);this.markers=_4.delegate(_7.Theme.Markers,_8.markers||{});this.colors=[];this.antiAlias=("antiAlias" in _8)?_8.antiAlias:true;this.assignColors=("assignColors" in _8)?_8.assignColors:true;this.assignMarkers=("assignMarkers" in _8)?_8.assignMarkers:true;_8.colors=_8.colors||_9.colors;_4.forEach(_8.colors,function(_a){this.colors.push(_a);},this);this._current={color:0,marker:0};this._markers=[];this._buildMarkerArray();};_7.Theme.Markers={CIRCLE:"m-3,0 c0,-4 6,-4 6,0 m-6,0 c0,4 6,4 6,0",SQUARE:"m-3,-3 l0,6 6,0 0,-6 z",DIAMOND:"m0,-3 l3,3 -3,3 -3,-3 z",CROSS:"m0,-3 l0,6 m-3,-3 l6,0",X:"m-3,-3 l6,6 m0,-6 l-6,6",TRIANGLE:"m-3,3 l3,-6 3,6 z",TRIANGLE_INVERTED:"m-3,-3 l3,6 3,-6 z"};_7.Theme._def={chart:{stroke:null,fill:"white"},plotarea:{stroke:null,fill:"white"},axis:{stroke:{color:"#333",width:1},majorTick:{color:"#666",width:1,length:6,position:"center"},minorTick:{color:"#666",width:0.8,length:3,position:"center"},microTick:{color:"#666",width:0.5,length:1,position:"center"},font:"normal normal normal 7pt Tahoma",fontColor:"#333"},series:{outline:{width:0.1,color:"#ccc"},stroke:{width:1.5,color:"#333"},fill:"#ccc",font:"normal normal normal 7pt Tahoma",fontColor:"#000"},marker:{stroke:{width:1},fill:"#333",font:"normal normal normal 7pt Tahoma",fontColor:"#000"},colors:["#54544c","#858e94","#6e767a","#948585","#474747"]};_4.extend(_7.Theme,{defineColors:function(_b){var _c=_b||{};var c=[],n=_c.num||5;if(_c.colors){var l=_c.colors.length;for(var i=0;i<n;i++){c.push(_c.colors[i%l]);}this.colors=c;}else{if(_c.hue){var s=_c.saturation||100;var st=_c.low||30;var _d=_c.high||90;var l=(_d+st)/2;this.colors=_6.color.Palette.generate(_6.color.fromHsv(_c.hue,s,l),"monochromatic").colors;}else{if(_c.generator){this.colors=_6.color.Palette.generate(_c.base,_c.generator).colors;}}}},_buildMarkerArray:function(){this._markers=[];for(var p in this.markers){this._markers.push(this.markers[p]);}this._current.marker=0;},_clone:function(){return new _7.Theme({chart:this.chart,plotarea:this.plotarea,axis:this.axis,series:this.series,marker:this.marker,antiAlias:this.antiAlias,assignColors:this.assignColors,assignMarkers:this.assigneMarkers,colors:_4.delegate(this.colors)});},addMarker:function(_e,_f){this.markers[_e]=_f;this._buildMarkerArray();},setMarkers:function(obj){this.markers=obj;this._buildMarkerArray();},next:function(_10){if(_10=="marker"){return this._markers[this._current.marker++%this._markers.length];}else{return this.colors[this._current.color++%this.colors.length];}},clear:function(){this._current={color:0,marker:0};}});})();}}};});