/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.drawing.tools.TextBlock"],["require","dojox.drawing.stencil.Text"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.drawing.tools.TextBlock"]){_4._hasResource["dojox.drawing.tools.TextBlock"]=true;_4.provide("dojox.drawing.tools.TextBlock");_4.require("dojox.drawing.stencil.Text");(function(){var _7;_4.addOnLoad(function(){_7=_4.byId("conEdit");if(!_7){console.error("A contenteditable div is missing from the main document. See 'dojox.drawing.tools.TextBlock'");}else{_7.parentNode.removeChild(_7);}});_6.drawing.tools.TextBlock=_6.drawing.util.oo.declare(_6.drawing.stencil.Text,function(_8){if(_8.data){var d=_8.data;var w=!d.width?this.style.text.minWidth:d.width=="auto"?"auto":Math.max(d.width,this.style.text.minWidth);var h=this._lineHeight;if(d.text&&w=="auto"){var o=this.measureText(this.cleanText(d.text,false),w);w=o.w;h=o.h;}else{this._text="";}this.points=[{x:d.x,y:d.y},{x:d.x+w,y:d.y},{x:d.x+w,y:d.y+h},{x:d.x,y:d.y+h}];if(d.showEmpty||d.text){this.editMode=true;_4.disconnect(this._postRenderCon);this._postRenderCon=null;this.connect(this,"render",this,"onRender",true);if(d.showEmpty){this._text=d.text||"";this.edit();}else{if(d.text&&d.editMode){this._text="";this.edit();}else{if(d.text){this.render(d.text);}}}setTimeout(_4.hitch(this,function(){this.editMode=false;}),100);}}else{this.connectMouse();this._postRenderCon=_4.connect(this,"render",this,"_onPostRender");}},{draws:true,baseRender:false,type:"dojox.drawing.tools.TextBlock",selectOnExec:true,showEmpty:false,onDrag:function(_9){if(!this.parentNode){this.showParent(_9);}var s=this._startdrag,e=_9.page;this._box.left=(s.x<e.x?s.x:e.x);this._box.top=s.y;this._box.width=(s.x<e.x?e.x-s.x:s.x-e.x)+this.style.text.pad;_4.style(this.parentNode,this._box.toPx());},onUp:function(_a){if(!this._downOnCanvas){return;}this._downOnCanvas=false;var c=_4.connect(this,"render",this,function(){_4.disconnect(c);this.onRender(this);});this.editMode=true;this.showParent(_a);this.created=true;this.createTextField();this.connectTextField();},showParent:function(_b){if(this.parentNode){return;}var x=_b.pageX||10;var y=_b.pageY||10;this.parentNode=_4.doc.createElement("div");this.parentNode.id=this.id;var d=this.style.textMode.create;this._box={left:x,top:y,width:_b.width||1,height:_b.height&&_b.height>8?_b.height:this._lineHeight,border:d.width+"px "+d.style+" "+d.color,position:"absolute",zIndex:500,toPx:function(){var o={};for(var nm in this){o[nm]=typeof (this[nm])=="number"&&nm!="zIndex"?this[nm]+"px":this[nm];}return o;}};_4.style(this.parentNode,this._box);document.body.appendChild(this.parentNode);},createTextField:function(_c){var d=this.style.textMode.edit;this._box.border=d.width+"px "+d.style+" "+d.color;this._box.height="auto";this._box.width=Math.max(this._box.width,this.style.text.minWidth*this.mouse.zoom);_4.style(this.parentNode,this._box.toPx());this.parentNode.appendChild(_7);_4.style(_7,{height:_c?"auto":this._lineHeight+"px",fontSize:(this.textSize/this.mouse.zoom)+"px",fontFamily:this.style.text.family});_7.innerHTML=_c||"";return _7;},connectTextField:function(){if(this._textConnected){return;}this._textConnected=true;this.mouse.setEventMode("TEXT");this.keys.editMode(true);var _d,_e,_f,kc4,_10=this,_11=false,_12=function(){_4.forEach([_d,_e,_f,kc4],function(c){_4.disconnect(c);});_10._textConnected=false;_10.keys.editMode(false);_10.mouse.setEventMode();_10.execText();};_d=_4.connect(_7,"keyup",this,function(evt){if(_4.trim(_7.innerHTML)&&!_11){_4.style(_7,"height","auto");_11=true;}else{if(_4.trim(_7.innerHTML).length<2&&_11){_4.style(_7,"height",this._lineHeight+"px");_11=false;}}if(evt.keyCode==13||evt.keyCode==27){_4.stopEvent(evt);_12();}});_e=_4.connect(_7,"keydown",this,function(evt){if(evt.keyCode==13||evt.keyCode==27){_4.stopEvent(evt);}});_f=_4.connect(document,"mouseup",this,function(evt){if(!this._onAnchor&&evt.target.id!="conEdit"){_4.stopEvent(evt);_12();}else{_7.blur();setTimeout(function(){_7.focus();},200);}});this.createAnchors();kc4=_4.connect(this.mouse,"setZoom",this,function(evt){_12();});_7.focus();this.onDown=function(){};this.onDrag=function(){};var _10=this;setTimeout(_4.hitch(this,function(){_7.focus();this.onUp=function(){if(!_10._onAnchor&&this.parentNode){_10.disconnectMouse();_12();_10.onUp=function(){};}};}),500);},execText:function(){var d=_4.marginBox(this.parentNode);var w=Math.max(d.w,this.style.text.minWidth);var txt=this.cleanText(_7.innerHTML,true);_7.innerHTML="";_7.blur();this.destroyAnchors();var o=this.measureText(txt,w);var sc=this.mouse.scrollOffset();var org=this.mouse.origin;var x=this._box.left+sc.left-org.x;var y=this._box.top+sc.top-org.y;x*=this.mouse.zoom;y*=this.mouse.zoom;w*=this.mouse.zoom;o.h*=this.mouse.zoom;this.points=[{x:x,y:y},{x:x+w,y:y},{x:x+w,y:y+o.h},{x:x,y:y+o.h}];this.editMode=false;console.log("EXEC TEXT::::",this._postRenderCon);if(!o.text){this._text="";this._textArray=[];}this.render(o.text);this.onChangeText(txt);},edit:function(){this.editMode=true;console.log("EDIT TEXT:",this._text," ",this._text.replace("/n"," "));if(this.parentNode||!this.points){return;}var d=this.pointsToData();var sc=this.mouse.scrollOffset();var org=this.mouse.origin;var obj={pageX:(d.x)/this.mouse.zoom-sc.left+org.x,pageY:(d.y)/this.mouse.zoom-sc.top+org.y,width:d.width/this.mouse.zoom,height:d.height/this.mouse.zoom};this.remove(this.shape,this.hit);this.showParent(obj);this.createTextField(this._text.replace("/n"," "));this.connectTextField();if(this._text){this.setSelection(_7,"end");}},cleanText:function(txt,_13){var _14=function(str){var _15={"&lt;":"<","&gt;":">","&amp;":"&"};for(var nm in _15){str=str.replace(new RegExp(nm,"gi"),_15[nm]);}return str;};if(_13){_4.forEach(["<br>","<br/>","<br />","\\n","\\r"],function(br){txt=txt.replace(new RegExp(br,"gi")," ");});}txt=txt.replace(/&nbsp;/g," ");txt=_14(txt);txt=_4.trim(txt);txt=txt.replace(/\s{2,}/g," ");return txt;},measureText:function(str,_16){var r="(<br\\s*/*>)|(\\n)|(\\r)";this.showParent({width:_16||"auto",height:"auto"});this.createTextField(str);var txt="";var el=_7;el.innerHTML="X";var h=_4.marginBox(el).h;el.innerHTML=str;if(!_16||new RegExp(r,"gi").test(str)){txt=str.replace(new RegExp(r,"gi"),"\n");el.innerHTML=str.replace(new RegExp(r,"gi"),"<br/>");}else{if(_4.marginBox(el).h==h){txt=str;}else{var ar=str.split(" ");var _17=[[]];var _18=0;el.innerHTML="";while(ar.length){var _19=ar.shift();el.innerHTML+=_19+" ";if(_4.marginBox(el).h>h){_18++;_17[_18]=[];el.innerHTML=_19+" ";}_17[_18].push(_19);}_4.forEach(_17,function(ar,i){_17[i]=ar.join(" ");});txt=_17.join("\n");el.innerHTML=txt.replace("\n","<br/>");}}var dim=_4.marginBox(el);_7.parentNode.removeChild(_7);_4.destroy(this.parentNode);this.parentNode=null;return {h:dim.h,w:dim.w,text:txt};},_downOnCanvas:false,onDown:function(obj){this._startdrag={x:obj.pageX,y:obj.pageY};_4.disconnect(this._postRenderCon);this._postRenderCon=null;this._downOnCanvas=true;},createAnchors:function(){this._anchors={};var _1a=this;var d=this.style.anchors,b=d.width,w=d.size-b*2,h=d.size-b*2,p=(d.size)/2*-1+"px";var s={position:"absolute",width:w+"px",height:h+"px",backgroundColor:d.fill,border:b+"px "+d.style+" "+d.color};if(_4.isIE){s.paddingLeft=w+"px";s.fontSize=w+"px";}var ss=[{top:p,left:p},{top:p,right:p},{bottom:p,right:p},{bottom:p,left:p}];for(var i=0;i<4;i++){var _1b=(i==0)||(i==3);var id=this.util.uid(_1b?"left_anchor":"right_anchor");var a=_4.create("div",{id:id},this.parentNode);_4.style(a,_4.mixin(_4.clone(s),ss[i]));var md,mm,mu;var md=_4.connect(a,"mousedown",this,function(evt){_1b=evt.target.id.indexOf("left")>-1;_1a._onAnchor=true;var _1c=evt.pageX;var _1d=this._box.width;_4.stopEvent(evt);mm=_4.connect(document,"mousemove",this,function(evt){var x=evt.pageX;if(_1b){this._box.left=x;this._box.width=_1d+_1c-x;}else{this._box.width=x+_1d-_1c;}_4.style(this.parentNode,this._box.toPx());});mu=_4.connect(document,"mouseup",this,function(evt){_1c=this._box.left;_1d=this._box.width;_4.disconnect(mm);_4.disconnect(mu);_1a._onAnchor=false;_7.focus();_4.stopEvent(evt);});});this._anchors[id]={a:a,cons:[md]};}},destroyAnchors:function(){for(var n in this._anchors){_4.forEach(this._anchors[n].con,_4.disconnect,_4);_4.destroy(this._anchors[n].a);}},setSelection:function(_1e,_1f){console.warn("setSelection:");if(_4.doc.selection){var r=_4.body().createTextRange();r.moveToElementText(_1e);r.collapse(false);r.select();}else{var _20=function(_21,_22){_22=_22||[];for(var i=0;i<_21.childNodes.length;i++){var n=_21.childNodes[i];if(n.nodeType==3){_22.push(n);}else{if(n.tagName&&n.tagName.toLowerCase()=="img"){_22.push(n);}}if(n.childNodes&&n.childNodes.length){_20(n,_22);}}return _22;};console.log("ff node:",_1e);_1e.focus();var _23=_4.global.getSelection();_23.removeAllRanges();console.log(1);var r=_4.doc.createRange();r.selectNodeContents(_1e);console.log(2);var _24=_20(_1e);console.log(3);if(_1f=="end"){console.log("len:",_24[_24.length-1].textContent.length);r.setStart(_24[_24.length-1],_24[_24.length-1].textContent.length);r.setEnd(_24[_24.length-1],_24[_24.length-1].textContent.length);}else{if(_1f=="beg"||_1f=="start"){r.setStart(_24[0],0);r.setEnd(_24[0],0);}else{if(_1f=="all"){r.setStart(_24[0],0);r.setEnd(_24[_24.length-1],_24[_24.length-1].textContent.length);}}}_23.addRange(r);console.log("sel ",_1f," on ",_1e);}}});_6.drawing.tools.TextBlock.setup={name:"dojox.drawing.tools.TextBlock",tooltip:"Text Tool",iconClass:"iconText"};_6.drawing.register(_6.drawing.tools.TextBlock.setup,"tool");})();}}};});