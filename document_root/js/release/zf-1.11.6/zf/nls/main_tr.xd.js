dojo._xdResourceLoaded(function(dojo, dijit, dojox){
return {depends: [["provide", "zf.nls.main_tr"],
["provide", "dijit.nls.loading"],
["provide", "dijit.nls.loading.tr"],
["provide", "dijit.nls.common"],
["provide", "dijit.nls.common.tr"]],
defineResource: function(dojo, dijit, dojox){dojo.provide("zf.nls.main_tr");dojo.provide("dijit.nls.loading");dijit.nls.loading._built=true;dojo.provide("dijit.nls.loading.tr");dijit.nls.loading.tr={"loadingState":"Yükleniyor...","errorState":"Üzgünüz, bir hata oluştu"};dojo.provide("dijit.nls.common");dijit.nls.common._built=true;dojo.provide("dijit.nls.common.tr");dijit.nls.common.tr={"buttonOk":"Tamam","buttonCancel":"İptal","buttonSave":"Kaydet","itemClose":"Kapat"};

}};});