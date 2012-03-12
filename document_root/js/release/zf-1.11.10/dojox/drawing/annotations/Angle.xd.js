/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.drawing.annotations.Angle"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.drawing.annotations.Angle"]){_4._hasResource["dojox.drawing.annotations.Angle"]=true;_4.provide("dojox.drawing.annotations.Angle");_6.drawing.annotations.Angle=_6.drawing.util.oo.declare(function(_7){this.stencil=_7.stencil;this.util=_7.stencil.util;this.mouse=_7.stencil.mouse;this.stencil.connectMult([["onDrag",this,"showAngle"],["onUp",this,"hideAngle"],["onTransformBegin",this,"showAngle"],["onTransform",this,"showAngle"],["onTransformEnd",this,"hideAngle"]]);},{type:"dojox.drawing.tools.custom",angle:0,showAngle:function(){if(!this.stencil.selected&&this.stencil.created){return;}if(this.stencil.getRadius()<this.stencil.minimumSize){this.hideAngle();return;}var _8=this.getAngleNode();var d=this.stencil.pointsToData();var pt=_6.drawing.util.positioning.angle({x:d.x1,y:d.y1},{x:d.x2,y:d.y2});var sc=this.mouse.scrollOffset();var mx=this.stencil.getTransform();var dx=mx.dx/this.mouse.zoom;var dy=mx.dy/this.mouse.zoom;pt.x/=this.mouse.zoom;pt.y/=this.mouse.zoom;var x=this.stencil._offX+pt.x-sc.left+dx;var y=this.stencil._offY+pt.y-sc.top+dy;_4.style(_8,{left:x+"px",top:y+"px",align:pt.align});_8.innerHTML=Math.ceil(this.stencil.getAngle());},getAngleNode:function(){if(!this._angleNode){this._angleNode=_4.create("span",null,_4.body());_4.addClass(this._angleNode,"textAnnotation");_4.style(this._angleNode,"opacity",1);}return this._angleNode;},hideAngle:function(){if(this._angleNode&&_4.style(this._angleNode,"opacity")>0.9){_4.fadeOut({node:this._angleNode,duration:500,onEnd:function(_9){_4.destroy(_9);}}).play();this._angleNode=null;}}});}}};});