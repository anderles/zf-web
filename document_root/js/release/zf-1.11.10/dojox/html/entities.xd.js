/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.html.entities"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.html.entities"]){_4._hasResource["dojox.html.entities"]=true;_4.provide("dojox.html.entities");(function(){var _7=function(_8,_9){var _a,_b;if(_9._encCache&&_9._encCache.regexp&&_9._encCache.mapper&&_9.length==_9._encCache.length){_a=_9._encCache.mapper;_b=_9._encCache.regexp;}else{_a={};_b=["["];var i;for(i=0;i<_9.length;i++){_a[_9[i][0]]="&"+_9[i][1]+";";_b.push(_9[i][0]);}_b.push("]");_b=new RegExp(_b.join(""),"g");_9._encCache={mapper:_a,regexp:_b,length:_9.length};}_8=_8.replace(_b,function(c){return _a[c];});return _8;};var _c=function(_d,_e){var _f,_10;if(_e._decCache&&_e._decCache.regexp&&_e._decCache.mapper&&_e.length==_e._decCache.length){_f=_e._decCache.mapper;_10=_e._decCache.regexp;}else{_f={};_10=["("];var i;for(i=0;i<_e.length;i++){var e="&"+_e[i][1]+";";if(i){_10.push("|");}_f[e]=_e[i][0];_10.push(e);}_10.push(")");_10=new RegExp(_10.join(""),"g");_e._decCache={mapper:_f,regexp:_10,length:_e.length};}_d=_d.replace(_10,function(c){return _f[c];});return _d;};_6.html.entities.html=[["&","amp"],["\"","quot"],["<","lt"],[">","gt"],[" ","nbsp"]];_6.html.entities.latin=[["¡","iexcl"],["¢","cent"],["£","pound"],["€","euro"],["¤","curren"],["¥","yen"],["¦","brvbar"],["§","sect"],["¨","uml"],["©","copy"],["ª","ordf"],["«","laquo"],["¬","not"],["­","shy"],["®","reg"],["¯","macr"],["°","deg"],["±","plusmn"],["²","sup2"],["³","sup3"],["´","acute"],["µ","micro"],["¶","para"],["·","middot"],["¸","cedil"],["¹","sup1"],["º","ordm"],["»","raquo"],["¼","frac14"],["½","frac12"],["¾","frac34"],["¿","iquest"],["À","Agrave"],["Á","Aacute"],["Â","Acirc"],["Ã","Atilde"],["Ä","Auml"],["Å","Aring"],["Æ","AElig"],["Ç","Ccedil"],["È","Egrave"],["É","Eacute"],["Ê","Ecirc"],["Ë","Euml"],["Ì","Igrave"],["Í","Iacute"],["Î","Icirc"],["Ï","Iuml"],["Ð","ETH"],["Ñ","Ntilde"],["Ò","Ograve"],["Ó","Oacute"],["Ô","Ocirc"],["Õ","Otilde"],["Ö","Ouml"],["×","times"],["Ø","Oslash"],["Ù","Ugrave"],["Ú","Uacute"],["Û","Ucirc"],["Ü","Uuml"],["Ý","Yacute"],["Þ","THORN"],["ß","szlig"],["à","agrave"],["á","aacute"],["â","acirc"],["ã","atilde"],["ä","auml"],["å","aring"],["æ","aelig"],["ç","ccedil"],["è","egrave"],["é","eacute"],["ê","ecirc"],["ë","euml"],["ì","igrave"],["í","iacute"],["î","icirc"],["ï","iuml"],["ð","eth"],["ñ","ntilde"],["ò","ograve"],["ó","oacute"],["ô","ocirc"],["õ","otilde"],["ö","ouml"],["÷","divide"],["ø","oslash"],["ù","ugrave"],["ú","uacute"],["û","ucirc"],["ü","uuml"],["ý","yacute"],["þ","thorn"],["ÿ","yuml"],["ƒ","fnof"],["Α","Alpha"],["Β","Beta"],["Γ","Gamma"],["Δ","Delta"],["Ε","Epsilon"],["Ζ","Zeta"],["Η","Eta"],["Θ","Theta"],["Ι","Iota"],["Κ","Kappa"],["Λ","Lambda"],["Μ","Mu"],["Ν","Nu"],["Ξ","Xi"],["Ο","Omicron"],["Π","Pi"],["Ρ","Rho"],["Σ","Sigma"],["Τ","Tau"],["Υ","Upsilon"],["Φ","Phi"],["Χ","Chi"],["Ψ","Psi"],["Ω","Omega"],["α","alpha"],["β","beta"],["γ","gamma"],["δ","delta"],["ε","epsilon"],["ζ","zeta"],["η","eta"],["θ","theta"],["ι","iota"],["κ","kappa"],["λ","lambda"],["μ","mu"],["ν","nu"],["ξ","xi"],["ο","omicron"],["π","pi"],["ρ","rho"],["ς","sigmaf"],["σ","sigma"],["τ","tau"],["υ","upsilon"],["φ","phi"],["χ","chi"],["ψ","psi"],["ω","omega"],["ϑ","thetasym"],["ϒ","upsih"],["ϖ","piv"],["•","bull"],["…","hellip"],["′","prime"],["″","Prime"],["‾","oline"],["⁄","frasl"],["℘","weierp"],["ℑ","image"],["ℜ","real"],["™","trade"],["ℵ","alefsym"],["←","larr"],["↑","uarr"],["→","rarr"],["↓","darr"],["↔","harr"],["↵","crarr"],["⇐","lArr"],["⇑","uArr"],["⇒","rArr"],["⇓","dArr"],["⇔","hArr"],["∀","forall"],["∂","part"],["∃","exist"],["∅","empty"],["∇","nabla"],["∈","isin"],["∉","notin"],["∋","ni"],["∏","prod"],["∑","sum"],["−","minus"],["∗","lowast"],["√","radic"],["∝","prop"],["∞","infin"],["∠","ang"],["∧","and"],["∨","or"],["∩","cap"],["∪","cup"],["∫","int"],["∴","there4"],["∼","sim"],["≅","cong"],["≈","asymp"],["≠","ne"],["≡","equiv"],["≤","le"],["≥","ge"],["⊂","sub"],["⊃","sup"],["⊄","nsub"],["⊆","sube"],["⊇","supe"],["⊕","oplus"],["⊗","otimes"],["⊥","perp"],["⋅","sdot"],["⌈","lceil"],["⌉","rceil"],["⌊","lfloor"],["⌋","rfloor"],["〈","lang"],["〉","rang"],["◊","loz"],["♠","spades"],["♣","clubs"],["♥","hearts"],["♦","diams"],["Œ","Elig"],["œ","oelig"],["Š","Scaron"],["š","scaron"],["Ÿ","Yuml"],["ˆ","circ"],["˜","tilde"],[" ","ensp"],[" ","emsp"],[" ","thinsp"],["‌","zwnj"],["‍","zwj"],["‎","lrm"],["‏","rlm"],["–","ndash"],["—","mdash"],["‘","lsquo"],["’","rsquo"],["‚","sbquo"],["“","ldquo"],["”","rdquo"],["„","bdquo"],["†","dagger"],["‡","Dagger"],["‰","permil"],["‹","lsaquo"],["›","rsaquo"]];_6.html.entities.encode=function(str,m){if(str){if(!m){str=_7(str,_6.html.entities.html);str=_7(str,_6.html.entities.latin);}else{str=_7(str,m);}}return str;};_6.html.entities.decode=function(str,m){if(str){if(!m){str=_c(str,_6.html.entities.html);str=_c(str,_6.html.entities.latin);}else{str=_c(str,m);}}return str;};})();}}};});