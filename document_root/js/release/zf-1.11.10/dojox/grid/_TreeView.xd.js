/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.grid._TreeView"],["require","dijit._Widget"],["require","dijit._Templated"],["require","dojox.grid._View"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.grid._TreeView"]){_4._hasResource["dojox.grid._TreeView"]=true;_4.provide("dojox.grid._TreeView");_4.require("dijit._Widget");_4.require("dijit._Templated");_4.require("dojox.grid._View");_4.declare("dojox.grid._Expando",[_5._Widget,_5._Templated],{open:false,toggleClass:"",itemId:"",cellIdx:-1,view:null,rowNode:null,rowIdx:-1,expandoCell:null,level:0,templateString:"<div class=\"dojoxGridExpando\"\n\t><div class=\"dojoxGridExpandoNode\" dojoAttachEvent=\"onclick:onToggle\"\n\t\t><div class=\"dojoxGridExpandoNodeInner\" dojoAttachPoint=\"expandoInner\"></div\n\t></div\n></div>\n",_toggleRows:function(_7,_8){if(!_7||!this.rowNode){return;}if(_4.query("table.dojoxGridRowTableNeedsRowUpdate").length){if(this._initialized){this.view.grid.updateRow(this.rowIdx);}return;}var _9=this;var g=this.view.grid;if(g.treeModel){var p=this._tableRow?_4.attr(this._tableRow,"dojoxTreeGridPath"):"";if(p){_4.query("tr[dojoxTreeGridPath^=\""+p+"/\"]",this.rowNode).forEach(function(n){var en=_4.query(".dojoxGridExpando",n)[0];if(en&&en.parentNode&&en.parentNode.parentNode&&!_4.hasClass(en.parentNode.parentNode,"dojoxGridNoChildren")){var ew=_5.byNode(en);if(ew){ew._toggleRows(_7,ew.open&&_8);}}n.style.display=_8?"":"none";});}}else{_4.query("tr."+_7,this.rowNode).forEach(function(n){if(_4.hasClass(n,"dojoxGridExpandoRow")){var en=_4.query(".dojoxGridExpando",n)[0];if(en){var ew=_5.byNode(en);var _a=ew?ew.toggleClass:en.getAttribute("toggleClass");var _b=ew?ew.open:_9.expandoCell.getOpenState(en.getAttribute("itemId"));_9._toggleRows(_a,_b&&_8);}}n.style.display=_8?"":"none";});}},setOpen:function(_c){if(_c&&_4.hasClass(this.domNode,"dojoxGridExpandoLoading")){_c=false;}var _d=this.view;var _e=_d.grid;var _f=_e.store;var _10=_e.treeModel;var d=this;var idx=this.rowIdx;var me=_e._by_idx[idx];if(!me){return;}if(_10&&!this._loadedChildren){if(_c){var itm=_e.getItem(_4.attr(this._tableRow,"dojoxTreeGridPath"));if(itm){this.expandoInner.innerHTML="o";_4.addClass(this.domNode,"dojoxGridExpandoLoading");_10.getChildren(itm,function(_11){d._loadedChildren=true;d._setOpen(_c);});}else{this._setOpen(_c);}}else{this._setOpen(_c);}}else{if(!_10&&_f){if(_c){var _12=_e._by_idx[this.rowIdx];if(_12&&!_f.isItemLoaded(_12.item)){this.expandoInner.innerHTML="o";_4.addClass(this.domNode,"dojoxGridExpandoLoading");_f.loadItem({item:_12.item,onItem:_4.hitch(this,function(i){var _13=_f.getIdentity(i);_e._by_idty[_13]=_e._by_idx[this.rowIdx]={idty:_13,item:i};this._setOpen(_c);})});}else{this._setOpen(_c);}}else{this._setOpen(_c);}}else{this._setOpen(_c);}}},_setOpen:function(_14){if(_14&&this._tableRow&&_4.hasClass(this._tableRow,"dojoxGridNoChildren")){this._setOpen(false);return;}this.expandoInner.innerHTML=_14?"-":"+";_4.removeClass(this.domNode,"dojoxGridExpandoLoading");_4.toggleClass(this.domNode,"dojoxGridExpandoOpened",_14);if(this._tableRow){_4.toggleClass(this._tableRow,"dojoxGridRowCollapsed",!_14);var _15=_4.attr(this._tableRow,"dojoxTreeGridBaseClasses");var _16="";if(_14){_16=_4.trim((" "+_15+" ").replace(" dojoxGridRowCollapsed "," "));}else{if((" "+_15+" ").indexOf(" dojoxGridRowCollapsed ")<0){_16=_15+(_15?" ":"")+"dojoxGridRowCollapsed";}else{_16=_15;}}_4.attr(this._tableRow,"dojoxTreeGridBaseClasses",_16);}var _17=(this.open!==_14);this.open=_14;if(this.expandoCell&&this.itemId){this.expandoCell.openStates[this.itemId]=_14;}var v=this.view;var g=v.grid;if(this.toggleClass&&_17){if(!this._tableRow||!this._tableRow.style.display){this._toggleRows(this.toggleClass,_14);}}if(v&&this._initialized&&this.rowIdx>=0){g.rowHeightChanged(this.rowIdx);g.postresize();v.hasVScrollbar(true);}this._initialized=true;},onToggle:function(e){this.setOpen(!this.open);_4.stopEvent(e);},setRowNode:function(_18,_19,_1a){if(this.cellIdx<0||!this.itemId){return false;}this._initialized=false;this.view=_1a;this.rowNode=_19;this.rowIdx=_18;this.expandoCell=_1a.structure.cells[0][this.cellIdx];var d=this.domNode;if(d&&d.parentNode&&d.parentNode.parentNode){this._tableRow=d.parentNode.parentNode;}this.open=this.expandoCell.getOpenState(this.itemId);if(_1a.grid.treeModel){_4.style(this.domNode,"marginLeft",(this.level*18)+"px");if(this.domNode.parentNode){_4.style(this.domNode.parentNode,"backgroundPosition",((this.level*18)+(3))+"px");}}this.setOpen(this.open);return true;}});_4.declare("dojox.grid._TreeContentBuilder",_6.grid._ContentBuilder,{generateHtml:function(_1b,_1c){var _1d=this.getTableArray(),v=this.view,row=v.structure.cells[0],_1e=this.grid.getItem(_1c),_1f=this.grid,_20=this.grid.store;_6.grid.util.fire(this.view,"onBeforeRow",[_1c,[row]]);var _21=function(_22,_23,_24,_25,_26,_27){if(!_27){if(_1d[0].indexOf("dojoxGridRowTableNeedsRowUpdate")==-1){_1d[0]=_1d[0].replace("dojoxGridRowTable","dojoxGridRowTable dojoxGridRowTableNeedsRowUpdate");}return;}var _28=_1d.length;_25=_25||[];var _29=_25.join("|");var _2a=_25[_25.length-1];var _2b=_2a+(_24?" dojoxGridSummaryRow":"");var _2c="";if(_1f.treeModel&&_23&&!_1f.treeModel.mayHaveChildren(_23)){_2b+=" dojoxGridNoChildren";}_1d.push("<tr style=\""+_2c+"\" class=\""+_2b+"\" dojoxTreeGridPath=\""+_26.join("/")+"\" dojoxTreeGridBaseClasses=\""+_2b+"\">");var _2d=_22+1;var _2e=null;for(var i=0,_2f;(_2f=row[i]);i++){var m=_2f.markup,cc=_2f.customClasses=[],cs=_2f.customStyles=[];m[5]=_2f.formatAtLevel(_26,_23,_22,_24,_2a,cc);m[1]=cc.join(" ");m[3]=cs.join(";");_1d.push.apply(_1d,m);if(!_2e&&_2f.level===_2d&&_2f.parentCell){_2e=_2f.parentCell;}}_1d.push("</tr>");if(_23&&_20&&_20.isItem(_23)){var _30=_20.getIdentity(_23);if(typeof _1f._by_idty_paths[_30]=="undefined"){_1f._by_idty_paths[_30]=_26.join("/");}}var _31;var _32;var _33;var _34;var _35=_26.concat([]);if(_1f.treeModel&&_23){if(_1f.treeModel.mayHaveChildren(_23)){_31=v.structure.cells[0][_1f.expandoCell||0];_32=_31.getOpenState(_23)&&_27;_33=new _6.grid.TreePath(_26.join("/"),_1f);_34=_33.children(true)||[];_4.forEach(_34,function(_36,idx){var _37=_29.split("|");_37.push(_37[_37.length-1]+"-"+idx);_35.push(idx);_21(_2d,_36,false,_37,_35,_32);_35.pop();});}}else{if(_23&&_2e&&!_24){_31=v.structure.cells[0][_2e.level];_32=_31.getOpenState(_23)&&_27;if(_20.hasAttribute(_23,_2e.field)){var _38=_29.split("|");_38.pop();_33=new _6.grid.TreePath(_26.join("/"),_1f);_34=_33.children(true)||[];if(_34.length){_1d[_28]="<tr class=\""+_38.join(" ")+" dojoxGridExpandoRow\" dojoxTreeGridPath=\""+_26.join("/")+"\">";_4.forEach(_34,function(_39,idx){var _3a=_29.split("|");_3a.push(_3a[_3a.length-1]+"-"+idx);_35.push(idx);_21(_2d,_39,false,_3a,_35,_32);_35.pop();});_35.push(_34.length);_21(_22,_23,true,_25,_35,_32);}else{_1d[_28]="<tr class=\""+_2a+" dojoxGridNoChildren\" dojoxTreeGridPath=\""+_26.join("/")+"\">";}}else{if(!_20.isItemLoaded(_23)){_1d[0]=_1d[0].replace("dojoxGridRowTable","dojoxGridRowTable dojoxGridRowTableNeedsRowUpdate");}else{_1d[_28]="<tr class=\""+_2a+" dojoxGridNoChildren\" dojoxTreeGridPath=\""+_26.join("/")+"\">";}}}else{if(_23&&!_24&&_25.length>1){_1d[_28]="<tr class=\""+_25[_25.length-2]+"\" dojoxTreeGridPath=\""+_26.join("/")+"\">";}}}};_21(0,_1e,false,["dojoxGridRowToggle-"+_1c],[_1c],true);_1d.push("</table>");return _1d.join("");},findTarget:function(_3b,_3c){var n=_3b;while(n&&(n!=this.domNode)){if(n.tagName&&n.tagName.toLowerCase()=="tr"){break;}n=n.parentNode;}return (n!=this.domNode)?n:null;},getCellNode:function(_3d,_3e){var _3f=_4.query("td[idx='"+_3e+"']",_3d)[0];if(_3f&&_3f.parentNode&&!_4.hasClass(_3f.parentNode,"dojoxGridSummaryRow")){return _3f;}},decorateEvent:function(e){e.rowNode=this.findRowTarget(e.target);if(!e.rowNode){return false;}e.rowIndex=_4.attr(e.rowNode,"dojoxTreeGridPath");this.baseDecorateEvent(e);e.cell=this.grid.getCell(e.cellIndex);return true;}});_4.declare("dojox.grid._TreeView",[_6.grid._View],{_contentBuilderClass:_6.grid._TreeContentBuilder,_onDndDrop:function(_40,_41,_42){if(this.grid&&this.grid.aggregator){this.grid.aggregator.clearSubtotalCache();}this.inherited(arguments);},postCreate:function(){this.inherited(arguments);this.connect(this.grid,"_cleanupExpandoCache","_cleanupExpandoCache");},_cleanupExpandoCache:function(_43,_44,_45){if(_43==-1){return;}_4.forEach(this.grid.layout.cells,function(_46){if(typeof _46["openStates"]!="undefined"){if(_44 in _46.openStates){delete _46.openStates[_44];}}});if(typeof _43=="string"&&_43.indexOf("/")>-1){var _47=new _6.grid.TreePath(_43,this.grid);var _48=_47.parent();while(_48){_47=_48;_48=_47.parent();}var _49=_47.item();if(!_49){return;}var _4a=this.grid.store.getIdentity(_49);if(typeof this._expandos[_4a]!="undefined"){for(var i in this._expandos[_4a]){var exp=this._expandos[_4a][i];if(exp){exp.destroy();}delete this._expandos[_4a][i];}delete this._expandos[_4a];}}else{for(var i in this._expandos){if(typeof this._expandos[i]!="undefined"){for(var j in this._expandos[i]){var exp=this._expandos[i][j];if(exp){exp.destroy();}}}}this._expandos={};}},postMixInProperties:function(){this.inherited(arguments);this._expandos={};},onBeforeRow:function(_4b,_4c){var g=this.grid;if(g._by_idx&&g._by_idx[_4b]&&g._by_idx[_4b].idty){var _4d=g._by_idx[_4b].idty;this._expandos[_4d]=this._expandos[_4d]||{};}this.inherited(arguments);},onAfterRow:function(_4e,_4f,_50){_4.forEach(_4.query("span.dojoxGridExpando",_50),function(n){if(n&&n.parentNode){var tc=n.getAttribute("toggleClass");var _51;var _52;var g=this.grid;if(g._by_idx&&g._by_idx[_4e]&&g._by_idx[_4e].idty){_51=g._by_idx[_4e].idty;_52=this._expandos[_51][tc];}if(_52){_4.place(_52.domNode,n,"replace");_52.itemId=n.getAttribute("itemId");_52.cellIdx=parseInt(n.getAttribute("cellIdx"),10);if(isNaN(_52.cellIdx)){_52.cellIdx=-1;}}else{_52=_4.parser.parse(n.parentNode)[0];if(_51){this._expandos[_51][tc]=_52;}}if(!_52.setRowNode(_4e,_50,this)){_52.domNode.parentNode.removeChild(_52.domNode);}}},this);var alt=false;var _53=this;_4.query("tr[dojoxTreeGridPath]",_50).forEach(function(n){_4.toggleClass(n,"dojoxGridSubRowAlt",alt);_4.attr(n,"dojoxTreeGridBaseClasses",n.className);alt=!alt;_53.grid.rows.styleRowNode(_4.attr(n,"dojoxTreeGridPath"),n);});this.inherited(arguments);},updateRowStyles:function(_54){var _55=_4.query("tr[dojoxTreeGridPath='"+_54+"']",this.domNode);if(_55.length){this.styleRowNode(_54,_55[0]);}},getCellNode:function(_56,_57){var row=_4.query("tr[dojoxTreeGridPath='"+_56+"']",this.domNode)[0];if(row){return this.content.getCellNode(row,_57);}}});}}};});