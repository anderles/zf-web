/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.grid.enhanced.plugins.IndirectSelection"],["require","dojox.grid.cells.dijit"],["require","dojox.grid.cells._base"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.grid.enhanced.plugins.IndirectSelection"]){_4._hasResource["dojox.grid.enhanced.plugins.IndirectSelection"]=true;_4.provide("dojox.grid.enhanced.plugins.IndirectSelection");_4.require("dojox.grid.cells.dijit");_4.require("dojox.grid.cells._base");_4.declare("dojox.grid.enhanced.plugins.IndirectSelection",null,{constructor:function(_7){this.grid=_7;_4.connect(_7.layout,"setStructure",_4.hitch(_7.layout,this.addRowSelectCell));},addRowSelectCell:function(){if(!this.grid.indirectSelection||this.grid.selectionMode=="none"){return;}var _8=false,_9=["get","formatter","field","fields"],_a={type:_6.grid.cells.DijitMultipleRowSelector,name:"",editable:true,width:"30px",styles:"text-align: center;"};_4.forEach(this.structure,_4.hitch(this,function(_b){var _c=_b.cells;if(_c&&_c.length>0&&!_8){var _d=_c[0];if(_d[0]&&_d[0]["isRowSelector"]){console.debug("addRowSelectCell() - row selector cells already added, return.");_8=true;return;}var _e,_f=this.grid.selectionMode=="single"?_6.grid.cells.DijitSingleRowSelector:_6.grid.cells.DijitMultipleRowSelector;if(!_4.isObject(this.grid.indirectSelection)){_e=_4.mixin(_a,{type:_f});}else{_e=_4.mixin(_a,this.grid.indirectSelection,{type:_f,editable:true});_4.forEach(_9,function(_10){if(_10 in _e){delete _e[_10];}});}_c.length>1&&(_e["rowSpan"]=_c.length);_4.forEach(this.cells,function(_11,i){if(_11.index>=0){_11.index+=1;}else{console.debug("Error:IndirectSelection.addRowSelectCell()-  cell "+i+" has no index!");}});var _12=this.addCellDef(0,0,_e);_12.index=0;_d.unshift(_12);this.cells.unshift(_12);this.grid.rowSelectCell=_12;_8=true;}}));this.cellCount=this.cells.length;}});_4.declare("dojox.grid.cells._SingleRowSelectorMixin",null,{alwaysEditing:true,widgetMap:{},widget:null,isRowSelector:true,defaultValue:false,formatEditing:function(_13,_14){this.needFormatNode(_13,_14);},_formatNode:function(_15,_16){this.formatNode(_15,_16);},setValue:function(_17,_18){return;},get:function(_19){var _1a=this.widgetMap[this.view.id]?this.widgetMap[this.view.id][_19]:null;var _1b=_1a?_1a.attr("checked"):"";return _1b;},_fireSelectionChanged:function(){_4.publish(this.grid.rowSelectionChangedTopic,[this]);},_selectionChanged:function(obj){if(obj==this){return;}for(var i in this.widgetMap[this.view.id]){var idx=new Number(i);var _1c=this.widgetMap[this.view.id][idx];var _1d=!!this.grid.selection.selected[idx];_1c.attr("checked",_1d);}this.defaultValue=false;this.grid.edit.isEditing()&&this.grid.edit.apply();},_toggleSingleRow:function(idx,_1e){var _1f;_4.hitch(this.grid.selection,_6.grid.Selection.prototype[_1e?"addToSelection":"deselect"])(idx);if(this.widgetMap[this.view.id]&&(_1f=this.widgetMap[this.view.id][idx])){_1f.attr("checked",_1e);}this._fireSelectionChanged();},inIndirectSelectionMode:function(){},toggleAllSelection:function(){}});_4.declare("dojox.grid.cells._MultipleRowSelectorMixin",null,{swipeStartRowIndex:-1,swipeMinRowIndex:-1,swipeMaxRowIndex:-1,toSelect:false,lastClickRowIdx:-1,toggleAllTrigerred:false,_inDndSelection:false,domousedown:function(e){if(e.target.tagName=="INPUT"){this._startSelection(e.rowIndex);}_4.stopEvent(e);},domousemove:function(e){this._updateSelection(e,0);},onRowMouseOver:function(e){this._updateSelection(e,0);if(this.grid.dnd){this._inDndSelection=this.grid.select.isInSelectingMode("row");}},domouseup:function(e){_4.isIE&&this.view.content.decorateEvent(e);var _20=e.cellIndex>=0&&(this.inIndirectSelectionMode()||this._inDndSelection)&&!this.grid.edit.isEditRow(e.rowIndex);_20&&this._focusEndingCell(e.rowIndex,e.cellIndex);this._finisheSelect();},dokeyup:function(e){if(!e.shiftKey){this._finisheSelect();}},_startSelection:function(_21){this.swipeStartRowIndex=this.swipeMinRowIndex=this.swipeMaxRowIndex=_21;this.toSelect=!this.widgetMap[this.view.id][_21].attr("checked");},_updateSelection:function(e,_22){if(this.swipeStartRowIndex<0){return;}var _23=_22!=0;var _24=e.rowIndex-this.swipeStartRowIndex+_22;_24>0&&(this.swipeMaxRowIndex<e.rowIndex+_22)&&(this.swipeMaxRowIndex=e.rowIndex+_22);_24<0&&(this.swipeMinRowIndex>e.rowIndex+_22)&&(this.swipeMinRowIndex=e.rowIndex+_22);if(this.swipeMinRowIndex!=this.swipeMaxRowIndex){for(var i in this.widgetMap[this.view.id]){var idx=new Number(i);var _25=(idx>=(_24>0?this.swipeStartRowIndex:e.rowIndex+_22)&&idx<=(_24>0?e.rowIndex+_22:this.swipeStartRowIndex));var _26=(idx>=this.swipeMinRowIndex&&idx<=this.swipeMaxRowIndex);if(_25&&!(_24==0&&!this.toSelect)){(this.widgetMap[this.view.id][idx]).attr("checked",this.toSelect);_4.hitch(this.grid.selection,_6.grid.Selection.prototype[this.toSelect?"addToSelection":"deselect"])(idx);}else{if(_26&&!_23){(this.widgetMap[this.view.id][idx]).attr("checked",!this.toSelect);_4.hitch(this.grid.selection,_6.grid.Selection.prototype[!this.toSelect?"addToSelection":"deselect"])(idx);}}}}this._fireSelectionChanged();},swipeSelectionByKey:function(e,_27){if(this.swipeStartRowIndex<0){this.swipeStartRowIndex=e.rowIndex;if(_27>0){this.swipeMaxRowIndex=e.rowIndex+_27;this.swipeMinRowIndex=e.rowIndex;}else{this.swipeMinRowIndex=e.rowIndex+_27;this.swipeMaxRowIndex=e.rowIndex;}this.toSelect=this.widgetMap[this.view.id][e.rowIndex].attr("checked");}this._updateSelection(e,_27);},_finisheSelect:function(){this.swipeStartRowIndex=-1;this.swipeMinRowIndex=-1;this.swipeMaxRowIndex=-1;this.toSelect=false;},inIndirectSelectionMode:function(){return this.swipeStartRowIndex>=0;},toggleAllSelection:function(_28){for(var i in this.widgetMap[this.view.id]){var idx=new Number(i);var _29=this.widgetMap[this.view.id][idx];_29.attr("checked",_28);_4.hitch(this.grid.selection,_6.grid.Selection.prototype[_28?"addToSelection":"deselect"])(idx);}!_28&&this.grid.selection.deselectAll();this.defaultValue=_28;this.toggleAllTrigerred=true;this._fireSelectionChanged();}});_4.declare("dojox.grid.cells.DijitSingleRowSelector",[_6.grid.cells._Widget,_6.grid.cells._SingleRowSelectorMixin],{widgetClass:_5.form.RadioButton,constructor:function(){_4.subscribe(this.grid.rowSelectionChangedTopic,this,this._selectionChanged);_4.subscribe(this.grid.sortRowSelectionChangedTopic,this,this._selectionChanged);this.grid.indirectSelector=this;},formatNode:function(_2a,_2b){if(!this.widgetClass){return _2a;}!this.widgetMap[this.view.id]&&(this.widgetMap[this.view.id]={});var _2c=this.widgetMap[this.view.id][_2b];var _2d=this.getNode(_2b);if(!_2d){return;}var _2e=!_2d.firstChild||(_2c&&_2c.domNode!=_2d.firstChild);var _2f=_2e&&!_2d.firstChild?_2d.appendChild(_4.create("div")):_2d.firstChild;if(!_2c||_4.isIE){!this.widgetProps&&(this.widgetProps={});this.widgetProps.name="select_"+this.view.id;var _30=this.getDefaultValue(_2c,_2b);this.widget=_2c=this.createWidget(_2f,_2a,_2b);this.widgetMap[this.view.id][_2b]=_2c;this.widget.attr("checked",_30);_4.connect(_2c,"_onClick",_4.hitch(this,function(e){this._selectRow(e,_2b);}));_4.connect(_2c.domNode,"onkeyup",_4.hitch(this,function(e){e.keyCode==_4.keys.SPACE&&this._selectRow(e,_2b,true);}));_4.hitch(this.grid.selection,_6.grid.Selection.prototype[_30?"addToSelection":"deselect"])(_2b);}else{this.widget=_2c;_4.addClass(this.widget.domNode,"dojoxGridWidgetHidden");_2e&&this.attachWidget(_2f,_2a,_2b);}this.grid.rowHeightChanged(_2b);_4.removeClass(this.widget.domNode,"dojoxGridWidgetHidden");(_2b==this.grid.lastRenderingRowIdx)&&_4.removeClass(this.grid.domNode,"dojoxGridSortInProgress");},getDefaultValue:function(_31,_32){var _33=_31?_31.attr("checked"):this.defaultValue;if(!_31){if(this.grid.nestedSorting){_33=_33||this.grid.getStoreSelectedValue(_32);}_33=this.grid.selection.isSelected(_32)?true:_33;}return _33;},focus:function(_34){var _35=this.widgetMap[this.view.id][_34];if(_35){setTimeout(_4.hitch(_35,function(){_6.grid.util.fire(this,"focus");}),0);}},_focusEndingCell:function(_36,_37){var _38=this.grid.getCell(_37);this.grid.focus.setFocusCell(_38,_36);this.grid.isDndSelectEnable&&this.grid.focus._blurRowBar();},_selectRow:function(e,_39,_3a){if(_4.isMoz&&_3a){return;}_4.stopEvent(e);this._focusEndingCell(_39,0);var _3b=!this.grid.selection.selected[_39];this.grid.selection.deselectAll();this.grid.selection.addToSelection(_39);if(!_4.isMoz){var _3c=this.widgetMap[this.view.id][_39];_3c.attr("checked",true);}this._fireSelectionChanged();},toggleRow:function(idx,_3d){var _3e=_4.hitch(this.grid.selection,_6.grid.Selection.prototype.getFirstSelected)();if(idx!=_3e&&!_3d||idx==_3e&&_3d){return;}var _3f;if(idx!=_3e&&_3d&&this.widgetMap[this.view.id]&&(_3f=this.widgetMap[this.view.id][_3e])){_3f.attr("checked",false);}this.grid.selection.deselectAll();this._toggleSingleRow(idx,_3d);},setDisabled:function(idx,_40){if(this.widgetMap[this.view.id]){var _41=this.widgetMap[this.view.id][idx];_41&&_41.attr("disabled",_40);}}});_4.declare("dojox.grid.cells.DijitMultipleRowSelector",[_6.grid.cells.DijitSingleRowSelector,_6.grid.cells._MultipleRowSelectorMixin],{widgetClass:_5.form.CheckBox,constructor:function(){_4.connect(_4.doc,"onmouseup",this,"domouseup");this.grid.indirectSelector=this;},_selectRow:function(e,_42,_43){_4.stopEvent(e);this._focusEndingCell(_42,0);var _44=_42-this.lastClickRowIdx;if(this.lastClickRowIdx>=0&&!e.ctrlKey&&!e.altKey&&e.shiftKey){var _45=this.widgetMap[this.view.id][_42].attr("checked");_45=_43?!_45:_45;for(var i in this.widgetMap[this.view.id]){var idx=new Number(i);var _46=(idx>=(_44>0?this.lastClickRowIdx:_42)&&idx<=(_44>0?_42:this.lastClickRowIdx));if(_46){var _47=this.widgetMap[this.view.id][idx];_47.attr("checked",_45);_4.hitch(this.grid.selection,_6.grid.Selection.prototype[_45?"addToSelection":"deselect"])(idx);}}}else{var _48=!this.grid.selection.selected[_42];var _47=this.widgetMap[this.view.id][_42];_47.attr("checked",_48);_4.hitch(this.grid.selection,_6.grid.Selection.prototype[_48?"addToSelection":"deselect"])(_42);}this.lastClickRowIdx=_42;this._fireSelectionChanged();},toggleRow:function(idx,_49){this._toggleSingleRow(idx,_49);}});}}};});