/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.layout.GridContainer"],["require","dijit._base.focus"],["require","dijit._Templated"],["require","dijit._Container"],["require","dijit._Contained"],["require","dojo.dnd.move"],["require","dojox.layout.dnd.PlottedDnd"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.layout.GridContainer"]){_4._hasResource["dojox.layout.GridContainer"]=true;_4.provide("dojox.layout.GridContainer");_4.experimental("dojox.layout.GridContainer");_4.require("dijit._base.focus");_4.require("dijit._Templated");_4.require("dijit._Container");_4.require("dijit._Contained");_4.require("dojo.dnd.move");_4.require("dojox.layout.dnd.PlottedDnd");_4.declare("dojox.layout.GridContainer",[_5._Widget,_5._Templated,_5._Container,_5._Contained],{templateString:_4.cache("dojox.layout","resources/GridContainer.html","<div id=\"${id}\" class=\"gridContainer\" dojoAttachPoint=\"containerNode\" tabIndex=\"0\" dojoAttachEvent=\"onkeypress:_selectFocus\">\n\t<table class=\"gridContainerTable\" dojoAttachPoint=\"gridContainerTable\" cellspacing=\"0\" cellpadding=\"0\">\n\t\t<tbody class=\"gridContainerBody\">\n\t\t\t<tr class=\"gridContainerRow\" dojoAttachPoint=\"gridNode\"></tr>\n\t\t</tbody>\n\t</table>\n</div>\n"),isContainer:true,isAutoOrganized:true,isRightFixed:false,isLeftFixed:false,hasResizableColumns:true,nbZones:1,opacity:1,colWidths:[],minColWidth:20,minChildWidth:150,acceptTypes:[],mode:"right",allowAutoScroll:false,timeDisplayPopup:1500,isOffset:false,offsetDrag:{},withHandles:false,handleClasses:[],_draggedWidget:null,_isResized:false,_activeGrip:null,_a11yOn:false,_canDisplayPopup:true,constructor:function(_7,_8){_7=_7||{};this.acceptTypes=_7.acceptTypes||["dijit.layout.ContentPane"];this.offsetDrag=_7.offsetDrag||_7.dragOffset||{x:0,y:0};},postCreate:function(){this.inherited(arguments);if(this.nbZones===0){this.nbZones=1;}if(_4.isIE&&_4.marginBox(this.gridNode).height){var _9=document.createTextNode(" ");this.gridNode.appendChild(_9);}for(var i=0;i<this.nbZones;i++){var _a=_4.create("td",{id:this.id+"_dz"+i,className:"gridContainerZone",style:{width:this._getColWidth(i)+"%"}},this.gridNode);}},startup:function(){this.grid=this._createGrid();this.connect(_4.global,"onresize","onResized");this.connect(this,"onDndDrop","_placeGrips");this.dropHandler=_4.subscribe("/dnd/drop",this,"_placeGrips");this._oldwidth=this.domNode.offsetWidth;if(this.hasResizableColumns){this._initPlaceGrips();this._placeGrips();}if(this.usepref!==true){this[(this.isAutoOrganized?"_organizeServices":"_organizeServicesManually")]();}for(var j=0;j<this.grid.length;j++){var dz=this.grid[j];_4.forEach(dz.node.childNodes,function(_b){dz.setItem(_b.id,{data:_b,type:[_b.getAttribute("dndType")]});});}this.inherited(arguments);},destroy:function(){for(var i=0;i<this.handleDndStart;i++){_4.disconnect(this.handleDndStart[i]);}_4.unsubscribe(this.dropHandler);this.inherited(arguments);},resize:function(){_4.forEach(this.getChildren(),function(_c){_c.resize&&_c.resize();});},getZones:function(){return _4.query(".gridContainerZone",this.containerNode);},getNewChildren:function(){return _4.query("> [widgetId]",this.containerNode).map(_5.byNode);},getChildren:function(){var _d=_4.query(".gridContainerZone > [widgetId]",this.containerNode).map(_5.byNode);return _d;},onResized:function(){if(this.hasResizableColumns){this._placeGrips();}},_organizeServices:function(){var _e=this.nbZones,_f=this.getNewChildren(),nbs=_f.length,res=Math.floor(nbs/_e),mod=nbs%_e,i=0;for(var z=0;z<_e;z++){for(var r=0;r<res;r++){this._insertService(z,i,_f[i],true);i++;}if(mod>0){try{this._insertService(z,i,_f[i],true);i++;}catch(e){console.error("Unable to insert service in grid container",e,_f);}mod--;}else{if(res===0){break;}}}},_organizeServicesManually:function(){var _10=this.getNewChildren();for(var i=0;i<_10.length;i++){try{this._insertService(_10[i].column-1,i,_10[i],true);}catch(e){console.error("Unable to insert service in grid container",e,_10[i]);}}},_insertService:function(z,p,_11,_12){if(_11===undefined){return;}var _13=this.getZones()[z];var _14=_13.childNodes.length;if(p===undefined||p>_14){p=_14;}var _15=_4.place(_11.domNode,_13,p);_11.domNode.setAttribute("tabIndex",0);if(!_11.dragRestriction){_4.addClass(_11.domNode,"dojoDndItem");}if(!_11.domNode.getAttribute("dndType")){_11.domNode.setAttribute("dndType",_11.declaredClass);}_6.layout.dnd._setGcDndHandle(_11,this.withHandles,this.handleClasses,_12);if(this.hasResizableColumns){if(_11.onLoad){this.connect(_11,"onLoad","_placeGrips");}if(_11.onExecError){this.connect(_11,"onExecError","_placeGrips");}if(_11.onUnLoad){this.connect(_11,"onUnLoad","_placeGrips");}}this._placeGrips();return _11.id;},addService:function(_16,z,p){return this.addChild(_16,z,p);},addChild:function(_17,z,p){_17.domNode.id=_17.id;if(z<=0){z=0;}var _18=z||0;if(p<=0){p=0;}var row=p||0;var _19=this._insertService(_18,row,_17);if(this._started&&!_17._started){this.grid[z].setItem(_17.id,{data:_17.domNode,type:[_17.domNode.getAttribute("dndType")]});_17.startup();}return _19;},_createGrid:function(){var _1a=[];var i=0;while(i<this.nbZones){var _1b=this._createZone(this.getZones()[i]);if(this.hasResizableColumns&&i!=(this.nbZones-1)){this._createGrip(_1b);}_1a.push(_1b);i++;}if(this.hasResizableColumns){this.handleDndStart=[];for(var j=0;j<_1a.length;j++){var dz=_1a[j];var _1c=this;this.handleDndStart.push(_4.connect(dz,"onDndStart",dz,function(_1d){if(_1d==this){_1c.handleDndInsertNodes=[];for(i=0;i<_1c.grid.length;i++){_1c.handleDndInsertNodes.push(_4.connect(_1c.grid[i],"insertNodes",_1c,function(){_1c._disconnectDnd();}));}_1c.handleDndInsertNodes.push(_4.connect(dz,"onDndCancel",_1c,_1c._disconnectDnd));_1c.onResized();}}));}}return _1a;},_disconnectDnd:function(){_4.forEach(this.handleDndInsertNodes,_4.disconnect);setTimeout(_4.hitch(this,"onResized"),0);},_createZone:function(_1e){var dz=new _6.layout.dnd.PlottedDnd(_1e.id,{accept:this.acceptTypes,withHandles:this.withHandles,handleClasses:this.handleClasses,singular:true,hideSource:true,opacity:this.opacity,dom:this.domNode,allowAutoScroll:this.allowAutoScroll,isOffset:this.isOffset,offsetDrag:this.offsetDrag});this.connect(dz,"insertDashedZone","_placeGrips");this.connect(dz,"deleteDashedZone","_placeGrips");return dz;},_createGrip:function(dz){var _1f=document.createElement("div");_1f.className="gridContainerGrip";_1f.setAttribute("tabIndex","0");var _20=this;this.onMouseOver=this.connect(_1f,"onmouseover",function(e){var _21=false;for(var i=0;i<_20.grid.length-1;i++){if(_4.hasClass(_20.grid[i].grip,"gridContainerGripShow")){_21=true;break;}}if(!_21){_4.removeClass(e.target,"gridContainerGrip");_4.addClass(e.target,"gridContainerGripShow");}});this.connect(_1f,"onmouseout",function(e){if(!_20._isResized){_4.removeClass(e.target,"gridContainerGripShow");_4.addClass(e.target,"gridContainerGrip");}});this.connect(_1f,"onmousedown",function(e){_20._a11yOn=false;_20._activeGrip=e.target;_20.resizeColumnOn(e);});this.domNode.appendChild(_1f);dz.grip=_1f;},_initPlaceGrips:function(){var dcs=_4.getComputedStyle(this.domNode);this._x=parseInt(dcs.paddingLeft);var _22=parseInt(dcs.paddingTop);if(_4.isIE||_4.getComputedStyle(this.gridContainerTable).borderCollapse!="collapse"){var ex=_4._getBorderExtents(this.gridContainerTable);this._x+=ex.l;_22+=ex.t;}_22+="px";for(var z=0;z<this.grid.length;z++){var _23=this.grid[z];if(_23.grip){var _24=_23.grip;if(!_4.isIE){_23.pad=_4._getPadBorderExtents(_23.node).w;}_24.style.top=_22;}}},_placeGrips:function(){var _25;var _26=this._x;_4.forEach(this.grid,function(_27){if(_27.grip){if(_25===undefined){if(this.allowAutoScroll){_25=this.gridNode.scrollHeight;}else{_25=_4.contentBox(this.gridNode).h;}}var _28=_27.grip;_26+=_4[(_4.isIE?"marginBox":"contentBox")](_27.node).w+(_4.isIE?0:_27.pad);_4.style(_28,{left:_26+"px",height:_25+"px"});}},this);},_getZoneByIndex:function(n){return this.grid[(n>=0&&n<this.grid.length?n:0)];},getIndexZone:function(_29){for(var z=0;z<this.grid.length;z++){if(this.grid[z].node.id==_29.id){return z;}}return -1;},resizeColumnOn:function(e){var k=_4.keys;var i;if(!(this._a11yOn&&e.keyCode!=k.LEFT_ARROW&&e.keyCode!=k.RIGHT_ARROW)){e.preventDefault();_4.body().style.cursor="ew-resize";this._isResized=true;this.initX=e.pageX;var _2a=[];for(i=0;i<this.grid.length;i++){_2a[i]=_4.contentBox(this.grid[i].node).w;}this.oldTabSize=_2a;for(i=0;i<this.grid.length;i++){if(this._activeGrip==this.grid[i].grip){this.currentColumn=this.grid[i].node;this.currentColumnWidth=_2a[i];this.nextColumn=this.currentColumn.nextSibling;this.nextColumnWidth=_2a[i+1];}this.grid[i].node.style.width=_2a[i]+"px";}var _2b=function(_2c,_2d){var _2e=0;var _2f=0;_4.forEach(_2c,function(_30){if(_30.nodeType==1){var _31=_4.getComputedStyle(_30);var _32=(_4.isIE?_2d:parseInt(_31.minWidth));_2f=_32+parseInt(_31.marginLeft)+parseInt(_31.marginRight);if(_2e<_2f){_2e=_2f;}}});return _2e;};var _33=_2b(this.currentColumn.childNodes,this.minChildWidth);var _34=_2b(this.nextColumn.childNodes,this.minChildWidth);var _35=Math.round((_4.marginBox(this.gridContainerTable).w*this.minColWidth)/100);this.currentMinCol=_33;this.nextMinCol=_34;if(_35>this.currentMinCol){this.currentMinCol=_35;}if(_35>this.nextMinCol){this.nextMinCol=_35;}if(this._a11yOn){this.connectResizeColumnMove=this.connect(_4.doc,"onkeypress","resizeColumnMove");}else{this.connectResizeColumnMove=this.connect(_4.doc,"onmousemove","resizeColumnMove");this.connectResizeColumnOff=this.connect(document,"onmouseup","resizeColumnOff");}}},resizeColumnMove:function(e){var d=0;if(this._a11yOn){var k=_4.keys;switch(e.keyCode){case k.LEFT_ARROW:d=-10;break;case k.RIGHT_ARROW:d=10;break;}}else{e.preventDefault();d=e.pageX-this.initX;}if(d==0){return;}if(!(this.currentColumnWidth+d<this.currentMinCol||this.nextColumnWidth-d<this.nextMinCol)){this.currentColumnWidth+=d;this.nextColumnWidth-=d;this.initX=e.pageX;this.currentColumn.style["width"]=this.currentColumnWidth+"px";this.nextColumn.style["width"]=this.nextColumnWidth+"px";this._activeGrip.style.left=parseInt(this._activeGrip.style.left)+d+"px";this._placeGrips();}if(this._a11yOn){this.resizeColumnOff(e);}},resizeColumnOff:function(e){_4.body().style.cursor="default";if(this._a11yOn){this.disconnect(this.connectResizeColumnMove);this._a11yOn=false;}else{this.disconnect(this.connectResizeColumnMove);this.disconnect(this.connectResizeColumnOff);}var _36=[];var _37=[];var _38=this.gridContainerTable.clientWidth;var i;for(i=0;i<this.grid.length;i++){var _39=_4.contentBox(this.grid[i].node);if(_4.isIE){_36[i]=_4.marginBox(this.grid[i].node).w;_37[i]=_39.w;}else{_36[i]=_39.w;_37=_36;}}var _3a=false;for(i=0;i<_37.length;i++){if(_37[i]!=this.oldTabSize[i]){_3a=true;break;}}if(_3a){var mul=_4.isIE?100:10000;for(i=0;i<this.grid.length;i++){this.grid[i].node.style.width=Math.round((100*mul*_36[i])/_38)/mul+"%";}this._placeGrips();}if(this._activeGrip){_4.removeClass(this._activeGrip,"gridContainerGripShow");_4.addClass(this._activeGrip,"gridContainerGrip");}this._isResized=false;},setColumns:function(_3b){var _3c;if(_3b>0){var _3d=this.grid.length-_3b;if(_3d>0){var _3e=[];var _3f,end,z,_40,j;if(this.mode=="right"){end=(this.isLeftFixed&&this.grid.length>0)?1:0;_3f=this.grid.length-(this.isRightFixed?2:1);for(z=_3f;z>=end;z--){_40=0;_3c=this.grid[z].node;for(j=0;j<_3c.childNodes.length;j++){if(_3c.childNodes[j].nodeType==1&&!(_3c.childNodes[j].id=="")){_40++;break;}}if(_40==0){_3e[_3e.length]=z;}if(_3e.length>=_3d){this._deleteColumn(_3e);break;}}if(_3e.length<_3d){console.error("Move boxes in first columns, in all tabs before changing the organization of the page");}}else{_3f=(this.isLeftFixed&&this.grid.length>0)?1:0;end=this.grid.length;if(this.isRightFixed){end--;}for(z=_3f;z<end;z++){_40=0;_3c=this.grid[z].node;for(j=0;j<_3c.childNodes.length;j++){if(_3c.childNodes[j].nodeType==1&&!(_3c.childNodes[j].id=="")){_40++;break;}}if(_40==0){_3e[_3e.length]=z;}if(_3e.length>=_3d){this._deleteColumn(_3e);break;}}if(_3e.length<_3d){console.warn("Move boxes in last columns, in all tabs before changing the organization of the page");}}}else{if(_3d<0){this._addColumn(Math.abs(_3d));}}this._initPlaceGrips();this._placeGrips();}},_addColumn:function(_41){var _42;if(this.hasResizableColumns&&!this.isRightFixed&&this.mode=="right"){_42=this.grid[this.grid.length-1];this._createGrip(_42);}for(var i=0;i<_41;i++){_42=_4.doc.createElement("td");_4.addClass(_42,"gridContainerZone");_42.id=this.id+"_dz"+this.nbZones;var dz;if(this.mode=="right"){if(this.isRightFixed){this.grid[this.grid.length-1].node.parentNode.insertBefore(_42,this.grid[this.grid.length-1].node);dz=this._createZone(_42);this.grid.splice(this.grid.length-1,0,dz);}else{var _43=this.gridNode.appendChild(_42);dz=this._createZone(_42);this.grid.push(dz);}}else{if(this.isLeftFixed){(this.grid.length==1)?this.grid[0].node.parentNode.appendChild(_42,this.grid[0].node):this.grid[1].node.parentNode.insertBefore(_42,this.grid[1].node);dz=this._createZone(_42);this.grid.splice(1,0,dz);}else{this.grid[this.grid.length-this.nbZones].node.parentNode.insertBefore(_42,this.grid[this.grid.length-this.nbZones].node);dz=this._createZone(_42);this.grid.splice(this.grid.length-this.nbZones,0,dz);}}if(this.hasResizableColumns){var _44=this;var _45=_4.connect(dz,"onDndStart",dz,function(_46){if(_46==this){_44.handleDndInsertNodes=[];for(var o=0;o<_44.grid.length;o++){_44.handleDndInsertNodes.push(_4.connect(_44.grid[o],"insertNodes",_44,function(){_44._disconnectDnd();}));}_44.handleDndInsertNodes.push(_4.connect(dz,"onDndCancel",_44,_44._disconnectDnd));_44.onResized();}});if(this.mode=="right"){if(this.isRightFixed){this.handleDndStart.splice(this.handleDndStart.length-1,0,_45);}else{this.handleDndStart.push(_45);}}else{if(this.isLeftFixed){this.handleDndStart.splice(1,0,_45);}else{this.handleDndStart.splice(this.handleDndStart.length-this.nbZones,0,_45);}}this._createGrip(dz);}this.nbZones++;}this._updateColumnsWidth();},_deleteColumn:function(_47){var _48,_49,_4a;_4a=0;for(var i=0;i<_47.length;i++){var idx=_47[i];if(this.mode=="right"){_48=this.grid[idx];}else{_48=this.grid[idx-_4a];}for(var j=0;j<_48.node.childNodes.length;j++){if(_48.node.childNodes[j].nodeType!=1){continue;}_49=_5.byId(_48.node.childNodes[j].id);for(var x=0;x<this.getChildren().length;x++){if(this.getChildren()[x]===_49){this.getChildren().splice(x,1);break;}}}_48.node.parentNode.removeChild(_48.node);if(this.mode=="right"){if(this.hasResizableColumns){_4.disconnect(this.handleDndStart[idx]);}this.grid.splice(idx,1);}else{if(this.hasResizableColumns){_4.disconnect(this.handleDndStart[idx-_4a]);}this.grid.splice(idx-_4a,1);}this.nbZones--;_4a++;if(_48.grip){this.domNode.removeChild(_48.grip);}}this._updateColumnsWidth();},_getColWidth:function(idx){if(idx<this.colWidths.length){return this.colWidths[idx];}var _4b=100;_4.forEach(this.colWidths,function(_4c){_4b-=_4c;});return _4b/(this.nbZones-this.colWidths.length);},_updateColumnsWidth:function(){var _4d;for(var z=0;z<this.grid.length;z++){this.grid[z].node.style.width=this._getColWidth(z)+"%";}},_selectFocus:function(_4e){var e=_4e.keyCode;var _4f=null;var _50=_5.getFocus();var _51=_50.node;var k=_4.keys;var i,_52,_53,r,z,_54;var _55=(e==k.UP_ARROW||e==k.LEFT_ARROW)?"lastChild":"firstChild";var pos=(e==k.UP_ARROW||e==k.LEFT_ARROW)?"previousSibling":"nextSibling";if(_51==this.containerNode){switch(e){case k.DOWN_ARROW:case k.RIGHT_ARROW:for(i=0;i<this.gridNode.childNodes.length;i++){_4f=this.gridNode.childNodes[i].firstChild;_52=false;while(!_52){if(_4f!=null){if(_4f.style.display!=="none"){_5.focus(_4f);_4.stopEvent(_4e);_52=true;}else{_4f=_4f[pos];}}else{break;}}if(_52){break;}}break;case k.UP_ARROW:case k.LEFT_ARROW:for(i=this.gridNode.childNodes.length-1;i>=0;i--){_4f=this.gridNode.childNodes[i].lastChild;_52=false;while(!_52){if(_4f!=null){if(_4f.style.display!=="none"){_5.focus(_4f);_4.stopEvent(_4e);_52=true;}else{_4f=_4f[pos];}}else{break;}}if(_52){break;}}break;}}else{if(_51.parentNode.parentNode==this.gridNode){switch(e){case k.UP_ARROW:case k.DOWN_ARROW:_4.stopEvent(_4e);var _56=0;_4.forEach(_51.parentNode.childNodes,function(_57){if(_57.style.display!=="none"){_56++;}});if(_56==1){return;}_52=false;_4f=_51[pos];while(!_52){if(_4f==null){_4f=_51.parentNode[_55];if(_4f.style.display!=="none"){_52=true;}else{_4f=_4f[pos];}}else{if(_4f.style.display!=="none"){_52=true;}else{_4f=_4f[pos];}}}if(_4e.shiftKey){if(_5.byNode(_51).dragRestriction){return;}_54=_51.getAttribute("dndtype");_53=false;for(i=0;i<this.acceptTypes.length;i++){if(_54==this.acceptTypes[i]){_53=true;break;}}if(_53){var _58=_51.parentNode;var _59=_58.firstChild;var _5a=_58.lastChild;while(_59.style.display=="none"||_5a.style.display=="none"){if(_59.style.display=="none"){_59=_59.nextSibling;}if(_5a.style.display=="none"){_5a=_5a.previousSibling;}}if(e==k.UP_ARROW){r=_58.removeChild(_51);if(r==_59){_58.appendChild(r);}else{_58.insertBefore(r,_4f);}r.setAttribute("tabIndex","0");_5.focus(r);}else{if(_51==_5a){r=_58.removeChild(_51);_58.insertBefore(r,_4f);r.setAttribute("tabIndex","0");_5.focus(r);}else{r=_58.removeChild(_4f);_58.insertBefore(r,_51);_51.setAttribute("tabIndex","0");_5.focus(_51);}}}else{this._displayPopup();}}else{_5.focus(_4f);}break;case k.RIGHT_ARROW:case k.LEFT_ARROW:_4.stopEvent(_4e);if(_4e.shiftKey){if(_5.byNode(_51).dragRestriction){return;}z=0;if(_51.parentNode[pos]==null){if(e==k.LEFT_ARROW){z=this.gridNode.childNodes.length-1;}}else{if(_51.parentNode[pos].nodeType==3){z=this.gridNode.childNodes.length-2;}else{for(i=0;i<this.gridNode.childNodes.length;i++){if(_51.parentNode[pos]==this.gridNode.childNodes[i]){break;}z++;}}}_54=_51.getAttribute("dndtype");_53=false;for(i=0;i<this.acceptTypes.length;i++){if(_54==this.acceptTypes[i]){_53=true;break;}}if(_53){var _5b=_51.parentNode;var _5c=_5.byNode(_51);r=_5b.removeChild(_51);var _5d=(e==k.RIGHT_ARROW?0:this.gridNode.childNodes[z].length);this.addService(_5c,z,_5d);r.setAttribute("tabIndex","0");_5.focus(r);this._placeGrips();}else{this._displayPopup();}}else{var _5e=_51.parentNode;while(_4f===null){if(_5e[pos]!==null&&_5e[pos].nodeType!==3){_5e=_5e[pos];}else{if(pos==="previousSibling"){_5e=_5e.parentNode.childNodes[_5e.parentNode.childNodes.length-1];}else{_5e=_5e.parentNode.childNodes[0];}}_52=false;var _5f=_5e[_55];while(!_52){if(_5f!=null){if(_5f.style.display!=="none"){_4f=_5f;_52=true;}else{_5f=_5f[pos];}}else{break;}}}_5.focus(_4f);}break;}}else{if(_4.hasClass(_51,"gridContainerGrip")||_4.hasClass(_51,"gridContainerGripShow")){this._activeGrip=_4e.target;this._a11yOn=true;this.resizeColumnOn(_4e);}}}},_displayPopup:function(){if(this._canDisplayPopup){var _60=_4.doc.createElement("div");_4.addClass(_60,"gridContainerPopup");_60.innerHTML="this widget type is not accepted to be moved!";var _61=this.containerNode.appendChild(_60);this._canDisplayPopup=false;setTimeout(_4.hitch(this,function(){this.containerNode.removeChild(_61);_4.destroy(_61);this._canDisplayPopup=true;}),this.timeDisplayPopup);}}});_4.extend(_5._Widget,{dragRestriction:false,column:"1",group:""});}}};});