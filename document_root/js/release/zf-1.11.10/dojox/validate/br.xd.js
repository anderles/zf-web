/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.validate.br"],["require","dojox.validate._base"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.validate.br"]){_4._hasResource["dojox.validate.br"]=true;_4.provide("dojox.validate.br");_4.require("dojox.validate._base");_6.validate.br.isValidCnpj=function(_7){if(!_4.isString(_7)){if(!_7){return false;}_7=_7+"";while(_7.length<14){_7="0"+_7;}}var _8={format:["##.###.###/####-##","########/####-##","############-##","##############"]};if(_6.validate.isNumberFormat(_7,_8)){_7=_7.replace("/","").replace(/\./g,"").replace("-","");var _9=[];var dv=[];var i,j,_a;for(i=0;i<10;i++){_a="";for(j=0;j<_7.length;j++){_a+=""+i;}if(_7===_a){return false;}}for(i=0;i<12;i++){_9.push(parseInt(_7.charAt(i),10));}for(i=12;i<14;i++){dv.push(parseInt(_7.charAt(i),10));}var _b=[9,8,7,6,5,4,3,2,9,8,7,6].reverse();var _c=0;for(i=0;i<_9.length;i++){_c+=_9[i]*_b[i];}var _d=_c%11;if(_d==dv[0]){_c=0;_b=[9,8,7,6,5,4,3,2,9,8,7,6,5].reverse();_9.push(_d);for(i=0;i<_9.length;i++){_c+=_9[i]*_b[i];}var _e=_c%11;if(_e===dv[1]){return true;}}}return false;};_6.validate.br.computeCnpjDv=function(_f){if(!_4.isString(_f)){if(!_f){return "";}_f=_f+"";while(_f.length<12){_f="0"+_f;}}var _10={format:["##.###.###/####","########/####","############"]};if(_6.validate.isNumberFormat(_f,_10)){_f=_f.replace("/","").replace(/\./g,"");var cgc=[];var i,j,tmp;for(i=0;i<10;i++){tmp="";for(j=0;j<_f.length;j++){tmp+=""+i;}if(_f===tmp){return "";}}for(i=0;i<_f.length;i++){cgc.push(parseInt(_f.charAt(i),10));}var _11=[9,8,7,6,5,4,3,2,9,8,7,6].reverse();var sum=0;for(i=0;i<cgc.length;i++){sum+=cgc[i]*_11[i];}var dv0=sum%11;sum=0;_11=[9,8,7,6,5,4,3,2,9,8,7,6,5].reverse();cgc.push(dv0);for(i=0;i<cgc.length;i++){sum+=cgc[i]*_11[i];}var dv1=sum%11;return (""+dv0)+dv1;}return "";};_6.validate.br.isValidCpf=function(_12){if(!_4.isString(_12)){if(!_12){return false;}_12=_12+"";while(_12.length<11){_12="0"+_12;}}var _13={format:["###.###.###-##","#########-##","###########"]};if(_6.validate.isNumberFormat(_12,_13)){_12=_12.replace("-","").replace(/\./g,"");var cpf=[];var dv=[];var i,j,tmp;for(i=0;i<10;i++){tmp="";for(j=0;j<_12.length;j++){tmp+=""+i;}if(_12===tmp){return false;}}for(i=0;i<9;i++){cpf.push(parseInt(_12.charAt(i),10));}for(i=9;i<12;i++){dv.push(parseInt(_12.charAt(i),10));}var _14=[9,8,7,6,5,4,3,2,1].reverse();var sum=0;for(i=0;i<cpf.length;i++){sum+=cpf[i]*_14[i];}var dv0=sum%11;if(dv0==dv[0]){sum=0;_14=[9,8,7,6,5,4,3,2,1,0].reverse();cpf.push(dv0);for(i=0;i<cpf.length;i++){sum+=cpf[i]*_14[i];}var dv1=sum%11;if(dv1===dv[1]){return true;}}}return false;};_6.validate.br.computeCpfDv=function(_15){if(!_4.isString(_15)){if(!_15){return "";}_15=_15+"";while(_15.length<9){_15="0"+_15;}}var _16={format:["###.###.###","#########"]};if(_6.validate.isNumberFormat(_15,_16)){_15=_15.replace(/\./g,"");var cpf=[];for(i=0;i<10;i++){tmp="";for(j=0;j<_15.length;j++){tmp+=""+i;}if(_15===tmp){return "";}}for(i=0;i<_15.length;i++){cpf.push(parseInt(_15.charAt(i),10));}var _17=[9,8,7,6,5,4,3,2,1].reverse();var sum=0;for(i=0;i<cpf.length;i++){sum+=cpf[i]*_17[i];}var dv0=sum%11;sum=0;_17=[9,8,7,6,5,4,3,2,1,0].reverse();cpf.push(dv0);for(i=0;i<cpf.length;i++){sum+=cpf[i]*_17[i];}var dv1=sum%11;return (""+dv0)+dv1;}return "";};}}};});