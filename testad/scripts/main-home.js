function getftdata(t){t=t.replace(/:/g,"%3A").replace(/\s/g,"").replace(/\%E2\%80\%8E/g,"");var a=document.createElement("script");a.setAttribute("src","http://markets.ft.com/markets/data/getSymbolHover.asp?s="+t+"&callback=updateContent&..contentType..=text%2Fjavascript&context=window._wsodSymbolHover&"),document.body.appendChild(a)}function wtd(t,a,e){var d="",i="",s="",n=t.substring(1,20).replace(/\-mh\-/g,":").replace(/\-dot\-/g,".").replace(/\-at\-/g,"@"),l="p"+t,r="";return 1===e?(r='<td class="placeholder-td">&nbsp;</td>',d=" secondary-column",s="</tr>"):i="<tr>",i+r+'<td class="text'+d+'"><a target="_blank"  href="http://markets.ft.com/tearsheets/performance.asp?s='+n+'">'+a+'</a></td><td class="last'+d+'"><span class="dataValue" id='+t+'>...</span></td><td class="pct-change'+d+'"><span class="dataValue" id='+l+">...</span></td>"+s}function tab1(){var t="",a="全球股市",e="/channel/stock.html";return t+=wtd("iSHI-mh-SHH","上证综指",0),t+=wtd("iHSI-mh-HKG","香港恒生",1),t+=wtd("iDJI-mh-DJI","道琼斯",0),t+=wtd("iINX-mh-IOM","标普500",1),t+=wtd("iCOMP-mh-NAS","纳斯达克",0),t+=wtd("iIXTA-mh-TAI","台湾加权",1),t+=wtd("in225-mh-NIK","日经225",0),t+=wtd("iDAXX-mh-GER","DAX",1),'<div class="list-container XL4 L12 M12 S12 P12 side-by-side"><div class="list-inner"><h2 class="list-title"><a class="list-link" href="'+e+'">'+a+'</a></h2><div class="items"><div class="item-container side-by-side no-image"><div class="item-inner" id="markets-stock"><table class="markets-data">'+t+"</table></div></div></div></div></div>"}function tab2(){var t="",a="重要汇率",e="/channel/forex.html";return t+=wtd("iUSDCNY","美元/人民币",0),t+=wtd("iUSDJPY","美元/日元",1),t+=wtd("iEURUSD","欧元/美元",0),t+=wtd("iGBPUSD","英镑/美元",1),t+=wtd("iUSDCHF","美元/瑞郎",0),t+=wtd("iUSDHKD","美元/港元",1),t+=wtd("iAUDUSD","澳元/美元",0),t+=wtd("iUSDCAD","美元/加元",1),'<div class="list-container XL4 L12 M12 S12 P12 side-by-side"><div class="list-inner"><h2 class="list-title"><a class="list-link" href="'+e+'">'+a+'</a></h2><div class="items"><div class="item-container side-by-side no-image"><div class="item-inner" id="markets-stock"><table class="markets-data">'+t+"</table></div></div></div></div></div>"}function tab3(){var t="",a="大宗商品",e="/channel/forex.html";return t+=wtd("iIB-dot-1-mh-IEU","布伦特原油",0),t+=wtd("iCL-dot-1-mh-NYM","WTI原油",1),t+=wtd("iUS-at-RB-dot-1-mh-NYM","RBOB汽油",0),t+=wtd("iGC-dot-1-mh-CMX","黄金",1),t+=wtd("iUS-at-SI-dot-1-mh-CMX","银",0),t+=wtd("iUS-at-HG-dot-1-mh-CMX","铜",1),t+=wtd("iSC1-mh-CBT","大豆",0),t+=wtd("iWC1-mh-CBT","小麦",1),'<div class="list-container XL4 L12 M12 S12 P12 side-by-side"><div class="list-inner"><h2 class="list-title"><a class="list-link" href="'+e+'">'+a+'</a></h2><div class="items"><div class="item-container side-by-side no-image"><div class="item-inner" id="markets-stock"><table class="markets-data">'+t+"</table></div></div></div></div></div>"}function updatetab1(){getftdata("SHI:SHH"),getftdata("HSI:HKG"),getftdata("DJI:DJI"),getftdata("INX:IOM"),getftdata("IXTA:TAI"),getftdata("n225:NIK"),getftdata("COMP:NAS"),getftdata("DAXX:GER")}function updatetab2(){getftdata("USDCNY"),getftdata("USDJPY"),getftdata("EURUSD"),getftdata("GBPUSD"),getftdata("USDCHF"),getftdata("USDHKD"),getftdata("AUDUSD"),getftdata("USDCAD")}function updatetab3(){getftdata("IB.1:IEU"),getftdata("CL.1:NYM"),getftdata("US@RB.1:NYM"),getftdata("GC.1:CMX"),getftdata("US@SI.1:CMX"),getftdata("US@HG.1:CMX"),getftdata("SC1:CBT"),getftdata("WC1:CBT")}function refreshData(){var t=findTop(marketsDataEle),a=marketsDataEle.offsetHeight;(scrollTop+bodyHeight-t>-900&&scrollTop-a-t<0||marketsDataDelivered===!1)&&(updatetab1(),updatetab2(),updatetab3(),marketsDataDelivered=!0)}var marketsDataEle=document.getElementById("markets-data"),marketsDataDelivered=!1;window._wsodSymbolHover={},window._wsodSymbolHover.updateContent=function(t,a){var e,d=a.replace(/.*lastPrice.{1,5}span[^>]*>([^<^>]*)<.*/g,"$1"),i="",s="",n="";a.indexOf("%")>0&&(i=a.replace(/.*>([^<]*\%)<.*/g,"$1")),a.indexOf("currently unavailable")>0||(s="i"+t.replace(/:/g,"-mh-").replace(/\./g,"-dot-").replace(/\@/g,"-at-"),n="p"+s,document.getElementById(s).innerHTML=d,document.getElementById(n).innerHTML=i),e=document.getElementById("pi"+t.replace(/:/g,"-mh-").replace(/\./g,"-dot-").replace(/\@/g,"-at-")),a.indexOf("negChange")>0?e.className="dataValue negChange":a.indexOf("posChange")>0&&(e.className="dataValue posChange")},marketsDataEle.innerHTML=tab1()+tab2()+tab3()+'<div class="clearfloat"></div><div class="item-lead item-note">以上数据由巨灵财经和FT.com提供</div>',refreshData(),setInterval(function(){refreshData()},3e4);