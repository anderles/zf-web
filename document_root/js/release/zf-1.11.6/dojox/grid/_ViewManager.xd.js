/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.grid._ViewManager"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.grid._ViewManager"]){_4._hasResource["dojox.grid._ViewManager"]=true;_4.provide("dojox.grid._ViewManager");_4.declare("dojox.grid._ViewManager",null,{constructor:function(_7){this.grid=_7;},defaultWidth:200,views:[],resize:function(){this.onEach("resize");},render:function(){this.onEach("render");},addView:function(_8){_8.idx=this.views.length;this.views.push(_8);},destroyViews:function(){for(var i=0,v;v=this.views[i];i++){v.destroy();}this.views=[];},getContentNodes:function(){var _9=[];for(var i=0,v;v=this.views[i];i++){_9.push(v.contentNode);}return _9;},forEach:function(_a){for(var i=0,v;v=this.views[i];i++){_a(v,i);}},onEach:function(_b,_c){_c=_c||[];for(var i=0,v;v=this.views[i];i++){if(_b in v){v[_b].apply(v,_c);}}},normalizeHeaderNodeHeight:function(){var _d=[];for(var i=0,v;(v=this.views[i]);i++){if(v.headerContentNode.firstChild){_d.push(v.headerContentNode);}}this.normalizeRowNodeHeights(_d);},normalizeRowNodeHeights:function(_e){var h=0;var _f=[];if(this.grid.rowHeight){h=this.grid.rowHeight;}else{if(_e.length<=1){return;}for(var i=0,n;(n=_e[i]);i++){if(!_4.hasClass(n,"dojoxGridNonNormalizedCell")){_f[i]=n.firstChild.offsetHeight;h=Math.max(h,_f[i]);}}h=(h>=0?h:0);if(_4.isMoz&&h){h++;}}for(i=0;(n=_e[i]);i++){if(_f[i]!=h){n.firstChild.style.height=h+"px";}}},resetHeaderNodeHeight:function(){for(var i=0,v,n;(v=this.views[i]);i++){n=v.headerContentNode.firstChild;if(n){n.style.height="";}}},renormalizeRow:function(_10){var _11=[];for(var i=0,v,n;(v=this.views[i])&&(n=v.getRowNode(_10));i++){n.firstChild.style.height="";_11.push(n);}this.normalizeRowNodeHeights(_11);},getViewWidth:function(_12){return this.views[_12].getWidth()||this.defaultWidth;},measureHeader:function(){this.resetHeaderNodeHeight();this.forEach(function(_13){_13.headerContentNode.style.height="";});var h=0;this.forEach(function(_14){h=Math.max(_14.headerNode.offsetHeight,h);});return h;},measureContent:function(){var h=0;this.forEach(function(_15){h=Math.max(_15.domNode.offsetHeight,h);});return h;},findClient:function(_16){var c=this.grid.elasticView||-1;if(c<0){for(var i=1,v;(v=this.views[i]);i++){if(v.viewWidth){for(i=1;(v=this.views[i]);i++){if(!v.viewWidth){c=i;break;}}break;}}}if(c<0){c=Math.floor(this.views.length/2);}return c;},arrange:function(l,w){var i,v,vw,len=this.views.length;var c=(w<=0?len:this.findClient());var _17=function(v,l){var ds=v.domNode.style;var hs=v.headerNode.style;if(!_4._isBodyLtr()){ds.right=l+"px";if(_4.isMoz){hs.right=l+v.getScrollbarWidth()+"px";hs.width=parseInt(hs.width,10)-v.getScrollbarWidth()+"px";}else{hs.right=l+"px";}}else{ds.left=l+"px";hs.left=l+"px";}ds.top=0+"px";hs.top=0;};for(i=0;(v=this.views[i])&&(i<c);i++){vw=this.getViewWidth(i);v.setSize(vw,0);_17(v,l);if(v.headerContentNode&&v.headerContentNode.firstChild){vw=v.getColumnsWidth()+v.getScrollbarWidth();}else{vw=v.domNode.offsetWidth;}l+=vw;}i++;var r=w;for(var j=len-1;(v=this.views[j])&&(i<=j);j--){vw=this.getViewWidth(j);v.setSize(vw,0);vw=v.domNode.offsetWidth;r-=vw;_17(v,r);}if(c<len){v=this.views[c];vw=Math.max(1,r-l);v.setSize(vw+"px",0);_17(v,l);}return l;},renderRow:function(_18,_19,_1a){var _1b=[];for(var i=0,v,n,_1c;(v=this.views[i])&&(n=_19[i]);i++){_1c=v.renderRow(_18);n.appendChild(_1c);_1b.push(_1c);}if(!_1a){this.normalizeRowNodeHeights(_1b);}},rowRemoved:function(_1d){this.onEach("rowRemoved",[_1d]);},updateRow:function(_1e,_1f){for(var i=0,v;v=this.views[i];i++){v.updateRow(_1e);}if(!_1f){this.renormalizeRow(_1e);}},updateRowStyles:function(_20){this.onEach("updateRowStyles",[_20]);},setScrollTop:function(_21){var top=_21;for(var i=0,v;v=this.views[i];i++){top=v.setScrollTop(_21);if(_4.isIE&&v.headerNode&&v.scrollboxNode){v.headerNode.scrollLeft=v.scrollboxNode.scrollLeft;}}return top;},getFirstScrollingView:function(){for(var i=0,v;(v=this.views[i]);i++){if(v.hasHScrollbar()||v.hasVScrollbar()){return v;}}return null;}});}}};});