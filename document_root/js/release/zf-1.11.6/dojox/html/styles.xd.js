/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.html.styles"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.html.styles"]){_4._hasResource["dojox.html.styles"]=true;_4.provide("dojox.html.styles");(function(){var _7={};var _8={};var _9=[];var _a=[];_6.html.insertCssRule=function(_b,_c,_d){var ss=_6.html.getDynamicStyleSheet(_d);var _e=_b+" {"+_c+"}";console.log("insertRule:",_e);if(_4.isIE){ss.cssText+=_e;console.log("ss.cssText:",ss.cssText);}else{if(ss.sheet){ss.sheet.insertRule(_e,ss._indicies.length);}else{ss.appendChild(_4.doc.createTextNode(_e));}}ss._indicies.push(_b+" "+_c);return _b;};_6.html.removeCssRule=function(_f,_10,_11){var ss;var _12=-1;for(var nm in _7){if(_11&&_11!=nm){continue;}ss=_7[nm];for(var i=0;i<ss._indicies.length;i++){if(_f+" "+_10==ss._indicies[i]){_12=i;break;}}if(_12>-1){break;}}if(!ss){console.log("No dynamic style sheet has been created from which to remove a rule.");return false;}if(_12==-1){console.log("The css rule was not found and could not be removed.");return false;}ss._indicies.splice(_12,1);if(_4.isIE){ss.removeRule(_12);}else{if(ss.sheet){ss.sheet.deleteRule(_12);}else{if(document.styleSheets[0]){console.log("what browser hath useth thith?");}}}return true;};_6.html.getStyleSheet=function(_13){if(_7[_13||"default"]){return _7[_13||"default"];}if(!_13){return false;}var _14=_6.html.getStyleSheets();if(_14[_13]){return _6.html.getStyleSheets()[_13];}for(var nm in _14){if(_14[nm].href&&_14[nm].href.indexOf(_13)>-1){return _14[nm];}}return false;};_6.html.getDynamicStyleSheet=function(_15){if(!_15){_15="default";}if(!_7[_15]){if(_4.doc.createStyleSheet){_7[_15]=_4.doc.createStyleSheet();_7[_15].title=_15;}else{_7[_15]=_4.doc.createElement("style");_7[_15].setAttribute("type","text/css");_4.doc.getElementsByTagName("head")[0].appendChild(_7[_15]);console.log(_15," ss created: ",_7[_15].sheet);}_7[_15]._indicies=[];}return _7[_15];};_6.html.enableStyleSheet=function(_16){var ss=_6.html.getStyleSheet(_16);if(ss){if(ss.sheet){ss.sheet.disabled=false;}else{ss.disabled=false;}}};_6.html.disableStyleSheet=function(_17){var ss=_6.html.getStyleSheet(_17);if(ss){if(ss.sheet){ss.sheet.disabled=true;}else{ss.disabled=true;}}};_6.html.activeStyleSheet=function(_18){var _19=_6.html.getToggledStyleSheets();if(arguments.length==1){_4.forEach(_19,function(s){s.disabled=(s.title==_18)?false:true;});}else{for(var i=0;i<_19.length;i++){if(_19[i].disabled==false){return _19[i];}}}return true;};_6.html.getPreferredStyleSheet=function(){};_6.html.getToggledStyleSheets=function(){if(!_9.length){var _1a=_6.html.getStyleSheets();for(var nm in _1a){if(_1a[nm].title){_9.push(_1a[nm]);}}}return _9;};_6.html.getStyleSheets=function(){if(_8.collected){return _8;}var _1b=_4.doc.styleSheets;_4.forEach(_1b,function(n){var s=(n.sheet)?n.sheet:n;var _1c=s.title||s.href;if(_4.isIE){if(s.cssText.indexOf("#default#VML")==-1){if(s.href){_8[_1c]=s;}else{if(s.imports.length){_4.forEach(s.imports,function(si){_8[si.title||si.href]=si;});}else{_8[_1c]=s;}}}}else{_8[_1c]=s;_8[_1c].id=s.ownerNode.id;_4.forEach(s.cssRules,function(r){if(r.href){_8[r.href]=r.styleSheet;_8[r.href].id=s.ownerNode.id;}});}});_8.collected=true;return _8;};})();}}};});