function sendImpToThirdParty(t,e,r){if("string"==typeof t){"object"!=typeof window.parent.gTrackThirdParyImpression&&(window.parent.gTrackThirdParyImpression={});var n=0,a=t,i=!1,o=function(){var t=arguments[0]||"",e=arguments[1]||"",n=arguments[2]||"",a="G"+Math.round(1e12*Math.random());try{window.parent.gtag("event",e,{event_label:n,event_category:t,non_interaction:!0})}catch(o){var i=new Image;i.src="http://www.ftchinese.com/index.php/ft/hit/"+r+"/2?ec="+t+"&ea="+e+"&el="+encodeURIComponent(n)+"&r="+a}},c=function(){var d,s="IMG"+Math.round(1e12*Math.random()),p=(new Date).getTime(),h=t;try{d=arguments[0]||""}catch(t){d=""}h.indexOf("?")<0&&(h+="?"),h=h.replace("ord=[timestamp]","ord="+p)+"&"+s+"&ftctime="+p,n>0&&(0===a.indexOf("https")?(h=h.replace("https://ad.doubleclick.net","http://ad.doubleclick.net"),h=h.replace("https://v.admaster.com.cn","http://v.admaster.com.cn")):(h=h.replace("http://ad.doubleclick.net","https://ad.doubleclick.net"),h=h.replace("http://v.admaster.com.cn","https://v.admaster.com.cn"))),a=h,window.parent.gTrackThirdParyImpression[s]=new Image,window.parent.gTrackThirdParyImpression[s].src=h,window.parent.gTrackThirdParyImpression[s].title=e+" ("+r+")",window.parent.gTrackThirdParyImpression[s].alt=t,window.parent.gTrackThirdParyImpression[s].onload=function(){var t="";t=0===n?"Success":""!==d?"Success on Retry"+d:"Success on Retry"+n,o(this.title,t,this.alt),delete window.parent.gTrackThirdParyImpression[s],i=!0},window.parent.gTrackThirdParyImpression[s].onerror=function(){var t="";if(t=0===n?"Fail":""!==d?"Fail on Retry"+d:"Fail on Retry"+n,o(this.title,t,this.alt),"string"==typeof window.uaString)try{window.parent._hmt.push(["_trackEvent",this.title,"Fail",window.uaString])}catch(t){}++n<=3&&setTimeout(c,100*n*n*n)}};c(),setTimeout(function(){if(i===!1&&0===n){n=2;c(" from Pending"),o(e+" ("+r+")","Request from Pending",t)}},1e4),o(e+" ("+r+")","Request",t)}}