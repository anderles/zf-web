/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.editor.plugins.UploadImage"],["require","dijit._editor._Plugin"],["require","dojox.form.FileUploader"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.editor.plugins.UploadImage"]){_4._hasResource["dojox.editor.plugins.UploadImage"]=true;_4.provide("dojox.editor.plugins.UploadImage");_4.require("dijit._editor._Plugin");_4.require("dojox.form.FileUploader");_4.experimental("dojox.editor.plugins.UploadImage");_4.declare("dojox.editor.plugins.UploadImage",_5._editor._Plugin,{tempImageUrl:"",iconClassPrefix:"editorIcon",useDefaultCommand:false,uploadUrl:"",button:null,label:"Upload",setToolbar:function(_7){this.button.destroy();this.createFileInput();_7.addChild(this.button);},_initButton:function(){this.command="uploadImage";this.editor.commands[this.command]="Upload Image";this.inherited("_initButton",arguments);delete this.command;},createFileInput:function(){var _8=_4.create("span",{innerHTML:"."},document.body);_4.style(_8,{width:"40px",height:"20px",paddingLeft:"8px",paddingRight:"8px"});this.button=new _6.form.FileUploader({isDebug:true,uploadUrl:this.uploadUrl,uploadOnChange:true,selectMultipleFiles:false,baseClass:"dojoxEditorUploadNorm",hoverClass:"dojoxEditorUploadHover",activeClass:"dojoxEditorUploadActive",disabledClass:"dojoxEditorUploadDisabled"},_8);this.connect(this.button,"onChange","insertTempImage");this.connect(this.button,"onComplete","onComplete");},onComplete:function(_9,_a,_b){_9=_9[0];var _c=_4.withGlobal(this.editor.window,"byId",_4,[this.currentImageId]);var _d;if(this.downloadPath){_d=this.downloadPath+_9.name;}else{_d=_9.file;}_c.src=_d;_4.attr(_c,"_djrealurl",_d);if(_9.width){_c.width=_9.width;_c.height=_9.height;}},insertTempImage:function(){this.currentImageId="img_"+(new Date().getTime());var _e="<img id=\""+this.currentImageId+"\" src=\""+this.tempImageUrl+"\" width=\"32\" height=\"32\"/>";this.editor.execCommand("inserthtml",_e);}});_4.subscribe(_5._scopeName+".Editor.getPlugin",null,function(o){if(o.plugin){return;}switch(o.args.name){case "uploadImage":o.plugin=new _6.editor.plugins.UploadImage({url:o.args.url});}});}}};});