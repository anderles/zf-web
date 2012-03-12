/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.drawing.tools.Pencil"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.drawing.tools.Pencil"]){_4._hasResource["dojox.drawing.tools.Pencil"]=true;_4.provide("dojox.drawing.tools.Pencil");_6.drawing.tools.Pencil=_6.drawing.util.oo.declare(_6.drawing.stencil.Path,function(){this._started=false;},{draws:true,minDist:15,onDown:function(_7){this._started=true;var p={x:_7.x,y:_7.y};this.points=[p];this.lastPoint=p;this.revertRenderHit=this.renderHit;this.renderHit=false;this.closePath=false;},onDrag:function(_8){if(!this._started||this.minDist>this.util.distance(_8.x,_8.y,this.lastPoint.x,this.lastPoint.y)){return;}var p={x:_8.x,y:_8.y};this.points.push(p);this.render();this.checkClosePoint(this.points[0],_8);this.lastPoint=p;},onUp:function(_9){if(!this._started){return;}if(!this.points||this.points.length<2){this._started=false;this.points=[];return;}var _a=this.getBounds();if(_a.w<this.minimumSize&&_a.h<this.minimumSize){this.remove(this.hit,this.shape,this.closeGuide);this._started=false;this.setPoints([]);return;}if(this.checkClosePoint(this.points[0],_9,true)){this.closePath=true;}this.renderHit=this.revertRenderHit;this.renderedOnce=true;this.render();this.onRender(this);}});_6.drawing.tools.Pencil.setup={name:"dojox.drawing.tools.Pencil",tooltip:"Pencil Tool",iconClass:"iconLine"};_6.drawing.register(_6.drawing.tools.Pencil.setup,"tool");}}};});