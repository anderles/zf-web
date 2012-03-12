/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dijit.tree.TreeStoreModel"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dijit.tree.TreeStoreModel"]){_4._hasResource["dijit.tree.TreeStoreModel"]=true;_4.provide("dijit.tree.TreeStoreModel");_4.declare("dijit.tree.TreeStoreModel",null,{store:null,childrenAttrs:["children"],newItemIdAttr:"id",labelAttr:"",root:null,query:null,deferItemLoadingUntilExpand:false,constructor:function(_7){_4.mixin(this,_7);this.connects=[];var _8=this.store;if(!_8.getFeatures()["dojo.data.api.Identity"]){throw new Error("dijit.Tree: store must support dojo.data.Identity");}if(_8.getFeatures()["dojo.data.api.Notification"]){this.connects=this.connects.concat([_4.connect(_8,"onNew",this,"onNewItem"),_4.connect(_8,"onDelete",this,"onDeleteItem"),_4.connect(_8,"onSet",this,"onSetItem")]);}},destroy:function(){_4.forEach(this.connects,_4.disconnect);},getRoot:function(_9,_a){if(this.root){_9(this.root);}else{this.store.fetch({query:this.query,onComplete:_4.hitch(this,function(_b){if(_b.length!=1){throw new Error(this.declaredClass+": query "+_4.toJson(this.query)+" returned "+_b.length+" items, but must return exactly one item");}this.root=_b[0];_9(this.root);}),onError:_a});}},mayHaveChildren:function(_c){return _4.some(this.childrenAttrs,function(_d){return this.store.hasAttribute(_c,_d);},this);},getChildren:function(_e,_f,_10){var _11=this.store;if(!_11.isItemLoaded(_e)){var _12=_4.hitch(this,arguments.callee);_11.loadItem({item:_e,onItem:function(_13){_12(_13,_f,_10);},onError:_10});return;}var _14=[];for(var i=0;i<this.childrenAttrs.length;i++){var _15=_11.getValues(_e,this.childrenAttrs[i]);_14=_14.concat(_15);}var _16=0;if(!this.deferItemLoadingUntilExpand){_4.forEach(_14,function(_17){if(!_11.isItemLoaded(_17)){_16++;}});}if(_16==0){_f(_14);}else{_4.forEach(_14,function(_18,idx){if(!_11.isItemLoaded(_18)){_11.loadItem({item:function onItem(_19){_14[idx]=_19;if(--_16==0){_f(_14);}},onItem:onItem,onError:_10});}});}},isItem:function(_1a){return this.store.isItem(_1a);},fetchItemByIdentity:function(_1b){this.store.fetchItemByIdentity(_1b);},getIdentity:function(_1c){return this.store.getIdentity(_1c);},getLabel:function(_1d){if(this.labelAttr){return this.store.getValue(_1d,this.labelAttr);}else{return this.store.getLabel(_1d);}},newItem:function(_1e,_1f,_20){var _21={parent:_1f,attribute:this.childrenAttrs[0],insertIndex:_20};if(this.newItemIdAttr&&_1e[this.newItemIdAttr]){this.fetchItemByIdentity({identity:_1e[this.newItemIdAttr],scope:this,onItem:function(_22){if(_22){this.pasteItem(_22,null,_1f,true,_20);}else{this.store.newItem(_1e,_21);}}});}else{this.store.newItem(_1e,_21);}},pasteItem:function(_23,_24,_25,_26,_27){var _28=this.store,_29=this.childrenAttrs[0];if(_24){_4.forEach(this.childrenAttrs,function(_2a){if(_28.containsValue(_24,_2a,_23)){if(!_26){var _2b=_4.filter(_28.getValues(_24,_2a),function(x){return x!=_23;});_28.setValues(_24,_2a,_2b);}_29=_2a;}});}if(_25){if(typeof _27=="number"){var _2c=_28.getValues(_25,_29);_2c.splice(_27,0,_23);_28.setValues(_25,_29,_2c);}else{_28.setValues(_25,_29,_28.getValues(_25,_29).concat(_23));}}},onChange:function(_2d){},onChildrenChange:function(_2e,_2f){},onDelete:function(_30,_31){},onNewItem:function(_32,_33){if(!_33){return;}this.getChildren(_33.item,_4.hitch(this,function(_34){this.onChildrenChange(_33.item,_34);}));},onDeleteItem:function(_35){this.onDelete(_35);},onSetItem:function(_36,_37,_38,_39){if(_4.indexOf(this.childrenAttrs,_37)!=-1){this.getChildren(_36,_4.hitch(this,function(_3a){this.onChildrenChange(_36,_3a);}));}else{this.onChange(_36);}}});}}};});