/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.date.islamic.locale"],["require","dojox.date.islamic.Date"],["require","dojo.regexp"],["require","dojo.string"],["require","dojo.i18n"],["requireLocalization","dojo.cldr","islamic",null,"ROOT,ar,he","ROOT,ar,he"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.date.islamic.locale"]){_4._hasResource["dojox.date.islamic.locale"]=true;_4.provide("dojox.date.islamic.locale");_4.experimental("dojox.date.islamic.locale");_4.require("dojox.date.islamic.Date");_4.require("dojo.regexp");_4.require("dojo.string");_4.require("dojo.i18n");(function(){function _7(_8,_9,_a,_b,_c){return _c.replace(/([a-z])\1*/ig,function(_d){var s,_e;var c=_d.charAt(0);var l=_d.length;var _f=["abbr","wide","narrow"];switch(c){case "G":s=_9["eraAbbr"][0];break;case "y":s=String(_8.getFullYear());break;case "M":var m=_8.getMonth();if(l<3){s=m+1;_e=true;}else{var _10=["months","format",_f[l-3]].join("-");s=_9[_10][m];}break;case "d":s=_8.getDate(true);_e=true;break;case "E":var d=_8.getDay();if(l<3){s=d+1;_e=true;}else{var _11=["days","format",_f[l-3]].join("-");s=_9[_11][d];}break;case "a":var _12=(_8.getHours()<12)?"am":"pm";s=_9[_12];break;case "h":case "H":case "K":case "k":var h=_8.getHours();switch(c){case "h":s=(h%12)||12;break;case "H":s=h;break;case "K":s=(h%12);break;case "k":s=h||24;break;}_e=true;break;case "m":s=_8.getMinutes();_e=true;break;case "s":s=_8.getSeconds();_e=true;break;case "S":s=Math.round(_8.getMilliseconds()*Math.pow(10,l-3));_e=true;break;default:throw new Error("dojox.date.islamic.locale.formatPattern: invalid pattern char: "+_c);}if(_e){s=_4.string.pad(s,l);}return s;});};_6.date.islamic.locale.format=function(_13,_14){_14=_14||{};var _15=_4.i18n.normalizeLocale(_14.locale);var _16=_14.formatLength||"short";var _17=_6.date.islamic.locale._getIslamicBundle(_15);var str=[];var _18=_4.hitch(this,_7,_13,_17,_15,_14.fullYear);if(_14.selector=="year"){var _19=_13.getFullYear();return _19;}if(_14.selector!="time"){var _1a=_14.datePattern||_17["dateFormat-"+_16];if(_1a){str.push(_1b(_1a,_18));}}if(_14.selector!="date"){var _1c=_14.timePattern||_17["timeFormat-"+_16];if(_1c){str.push(_1b(_1c,_18));}}var _1d=str.join(" ");return _1d;};_6.date.islamic.locale.regexp=function(_1e){return _6.date.islamic.locale._parseInfo(_1e).regexp;};_6.date.islamic.locale._parseInfo=function(_1f){_1f=_1f||{};var _20=_4.i18n.normalizeLocale(_1f.locale);var _21=_6.date.islamic.locale._getIslamicBundle(_20);var _22=_1f.formatLength||"short";var _23=_1f.datePattern||_21["dateFormat-"+_22];var _24=_1f.timePattern||_21["timeFormat-"+_22];var _25;if(_1f.selector=="date"){_25=_23;}else{if(_1f.selector=="time"){_25=_24;}else{_25=(typeof (_24)=="undefined")?_23:_23+" "+_24;}}var _26=[];var re=_1b(_25,_4.hitch(this,_27,_26,_21,_1f));return {regexp:re,tokens:_26,bundle:_21};};_6.date.islamic.locale.parse=function(_28,_29){_28=_28.replace(/[\u200E\u200F\u202A-\u202E]/g,"");if(!_29){_29={};}var _2a=_6.date.islamic.locale._parseInfo(_29);var _2b=_2a.tokens,_2c=_2a.bundle;var re=new RegExp("^"+_2a.regexp+"$");var _2d=re.exec(_28);var _2e=_4.i18n.normalizeLocale(_29.locale);if(!_2d){console.debug("dojox.date.islamic.locale.parse: value  "+_28+" doesn't match pattern   "+re);return null;}var _2f,_30;var _31=[1389,0,1,0,0,0,0];var _32="";var _33=0;var _34=["abbr","wide","narrow"];var _35=_4.every(_2d,function(v,i){if(!i){return true;}var _36=_2b[i-1];var l=_36.length;switch(_36.charAt(0)){case "y":_31[0]=Number(v);break;case "M":if(l>2){var _37=_2c["months-format-"+_34[l-3]].concat();if(!_29.strict){v=v.replace(".","").toLowerCase();_37=_4.map(_37,function(s){return s?s.replace(".","").toLowerCase():s;});}v=_4.indexOf(_37,v);if(v==-1){return false;}_33=l;}else{v--;}_31[1]=Number(v);break;case "D":_31[1]=0;case "d":_31[2]=Number(v);break;case "a":var am=_29.am||_2c.am;var pm=_29.pm||_2c.pm;if(!_29.strict){var _38=/\./g;v=v.replace(_38,"").toLowerCase();am=am.replace(_38,"").toLowerCase();pm=pm.replace(_38,"").toLowerCase();}if(_29.strict&&v!=am&&v!=pm){return false;}_32=(v==pm)?"p":(v==am)?"a":"";break;case "K":if(v==24){v=0;}case "h":case "H":case "k":_31[3]=Number(v);break;case "m":_31[4]=Number(v);break;case "s":_31[5]=Number(v);break;case "S":_31[6]=Number(v);}return true;});var _39=+_31[3];if(_32==="p"&&_39<12){_31[3]=_39+12;}else{if(_32==="a"&&_39==12){_31[3]=0;}}var _3a=new _6.date.islamic.Date(_31[0],_31[1],_31[2],_31[3],_31[4],_31[5],_31[6]);return _3a;};function _1b(_3b,_3c,_3d,_3e){var _3f=function(x){return x;};_3c=_3c||_3f;_3d=_3d||_3f;_3e=_3e||_3f;var _40=_3b.match(/(''|[^'])+/g);var _41=_3b.charAt(0)=="'";_4.forEach(_40,function(_42,i){if(!_42){_40[i]="";}else{_40[i]=(_41?_3d:_3c)(_42);_41=!_41;}});return _3e(_40.join(""));};function _27(_43,_44,_45,_46){_46=_4.regexp.escapeString(_46);var _47=_4.i18n.normalizeLocale(_45.locale);return _46.replace(/([a-z])\1*/ig,function(_48){var s;var c=_48.charAt(0);var l=_48.length;var p2="",p3="";if(_45.strict){if(l>1){p2="0"+"{"+(l-1)+"}";}if(l>2){p3="0"+"{"+(l-2)+"}";}}else{p2="0?";p3="0{0,2}";}switch(c){case "y":s="\\d+";break;case "M":s=(l>2)?"\\S+":p2+"[1-9]|1[0-2]";break;case "d":s="[12]\\d|"+p2+"[1-9]|3[01]";break;case "E":s="\\S+";break;case "h":s=p2+"[1-9]|1[0-2]";break;case "k":s=p2+"\\d|1[01]";break;case "H":s=p2+"\\d|1\\d|2[0-3]";break;case "K":s=p2+"[1-9]|1\\d|2[0-4]";break;case "m":case "s":s=p2+"\\d|[0-5]\\d";break;case "S":s="\\d{"+l+"}";break;case "a":var am=_45.am||_44.am||"AM";var pm=_45.pm||_44.pm||"PM";if(_45.strict){s=am+"|"+pm;}else{s=am+"|"+pm;if(am!=am.toLowerCase()){s+="|"+am.toLowerCase();}if(pm!=pm.toLowerCase()){s+="|"+pm.toLowerCase();}}break;default:s=".*";}if(_43){_43.push(_48);}return "("+s+")";}).replace(/[\xa0 ]/g,"[\\s\\xa0]");};})();(function(){var _49=[];_6.date.islamic.locale.addCustomFormats=function(_4a,_4b){_49.push({pkg:_4a,name:_4b});};_6.date.islamic.locale._getIslamicBundle=function(_4c){var _4d={};_4.forEach(_49,function(_4e){var _4f=_4.i18n.getLocalization(_4e.pkg,_4e.name,_4c);_4d=_4.mixin(_4d,_4f);},this);return _4d;};})();_6.date.islamic.locale.addCustomFormats("dojo.cldr","islamic");_6.date.islamic.locale.getNames=function(_50,_51,_52,_53,_54){var _55;var _56=_6.date.islamic.locale._getIslamicBundle;var _57=[_50,_52,_51];if(_52=="standAlone"){var key=_57.join("-");_55=_56(_53)[key];if(_55===_56("ROOT")[key]){_55=undefined;}}_57[1]="format";return (_55||_56(_53)[_57.join("-")]).concat();};_6.date.islamic.locale.weekDays=_6.date.islamic.locale.getNames("days","wide","format");_6.date.islamic.locale.months=_6.date.islamic.locale.getNames("months","wide","format");}}};});