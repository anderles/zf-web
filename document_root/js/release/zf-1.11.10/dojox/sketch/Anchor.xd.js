/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.sketch.Anchor"],["require","dojox.gfx"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.sketch.Anchor"]){_4._hasResource["dojox.sketch.Anchor"]=true;_4.provide("dojox.sketch.Anchor");_4.require("dojox.gfx");(function(){var ta=_6.sketch;ta.Anchor=function(an,id,_7){var _8=this;var _9=4;var _a=null;this.type=function(){return "Anchor";};this.annotation=an;this.id=id;this._key="anchor-"+ta.Anchor.count++;this.shape=null;this.isControl=(_7!=null)?_7:true;this.beginEdit=function(){this.annotation.beginEdit(ta.CommandTypes.Modify);};this.endEdit=function(){this.annotation.endEdit();};this.zoom=function(_b){if(this.shape){var rs=Math.floor(_9/_b);var _c=_6.gfx.renderer=="vml"?1:1/_b;this.shape.setShape({x:an[id].x-rs,y:an[id].y-rs,width:rs*2,height:rs*2}).setStroke({color:"black",width:_c});}};this.setBinding=function(pt){an[id]={x:an[id].x+pt.dx,y:an[id].y+pt.dy};an.draw();an.drawBBox();};this.setUndo=function(){an.setUndo();};this.enable=function(){if(!an.shape){return;}an.figure._add(this);_a={x:an[id].x-_9,y:an[id].y-_9,width:_9*2,height:_9*2};this.shape=an.shape.createRect(_a).setFill([255,255,255,0.35]);this.shape.getEventSource().setAttribute("id",_8._key);this.shape.getEventSource().setAttribute("shape-rendering","crispEdges");this.zoom(an.figure.zoomFactor);};this.disable=function(){an.figure._remove(this);if(an.shape){an.shape.remove(this.shape);}this.shape=null;_a=null;};};ta.Anchor.count=0;})();}}};});