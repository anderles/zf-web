/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.drawing.ui.Tooltip"],["require","dojox.drawing.plugins._Plugin"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.drawing.ui.Tooltip"]){_4._hasResource["dojox.drawing.ui.Tooltip"]=true;_4.provide("dojox.drawing.ui.Tooltip");_4.require("dojox.drawing.plugins._Plugin");(function(){var _7=null;var _8=_6.drawing.util.oo.declare(_6.drawing.plugins._Plugin,function(_9){this.createDom();},{show:function(_a,_b){this.domNode.innerHTML=_b;var dx=30,dy=30;var px=_a.data.x+_a.data.width;var py=_a.data.y+_a.data.height;var x=px+this.mouse.origin.x+dx;var y=py+this.mouse.origin.y+dx;_4.style(this.domNode,{display:"inline",left:x+"px",top:y+"px"});var _c=_4.marginBox(this.domNode);this.createShape(x-this.mouse.origin.x,y-this.mouse.origin.y,_c.w,_c.h);},createShape:function(x,y,w,h){this.balloon&&this.balloon.destroy();var r=5,x2=x+w,y2=y+h,_d=[];var _e=function(){for(var i=0;i<arguments.length;i++){_d.push(arguments[i]);}};_e({x:x,y:y+5},{t:"Q",x:x,y:y},{x:x+r,y:y});_e({t:"L",x:x2-r,y:y});_e({t:"Q",x:x2,y:y},{x:x2,y:y+r});_e({t:"L",x:x2,y:y2-r});_e({t:"Q",x:x2,y:y2},{x:x2-r,y:y2});_e({t:"L",x:x+r,y:y2});_e({t:"Q",x:x,y:y2},{x:x,y:y2-r});_e({t:"L",x:x,y:y+r});this.balloon=this.drawing.addUI("path",{points:_d});},createDom:function(){this.domNode=_4.create("span",{"class":"drawingTooltip"},document.body);_4.style(this.domNode,{display:"none",position:"absolute"});}});_6.drawing.ui.Tooltip=_6.drawing.util.oo.declare(_6.drawing.plugins._Plugin,function(_f){if(!_7){_7=new _8(_f);}if(_f.stencil){}else{if(this.button){this.connect(this.button,"onOver",this,"onOver");this.connect(this.button,"onOut",this,"onOut");}}},{width:300,height:200,onOver:function(){_7.show(this.button,this.data.text);},onOut:function(){}});_6.drawing.register({name:"dojox.drawing.ui.Tooltip"},"stencil");})();}}};});