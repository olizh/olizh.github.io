!function(){function e(){var e=document.createElement("DIV");e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.right="0",e.style.bottom="0",e.style.background="#FFF1E0",e.style.zIndex=99999999999999;var o=/iphone|ipad|ipod/i.test(t)?"https://thumbor.ftacademy.cn/unsafe/picture/2/000084162_piclink.jpg":"https://thumbor.ftacademy.cn/unsafe/picture/3/000084163_piclink.jpg";e.innerHTML='<img src="'+o+'" max-width="100%">',document.body.appendChild(e)}var t=navigator.userAgent||navigator.vendor||"",o=!1,n=/iphone|ipad|ipod/i.test(t)?"Safari":"手机默认浏览器",a='<div style="padding: 0 15px;"><p><b>重要提示：</b></p><p style="margin-bottom: 1em;">这是一篇需要付费订阅才能阅读的内容。但是由于微信不能识别和记录您的FT中文网用户和支付信息，请点击这里在FT中文网App或'+n+'中打开本页，来完成订阅或者使用您已经购买的订阅权限。</p><p style="margin-bottom: 1em;"><a href="https://a.app.qq.com/o/simple.jsp?pkgname=com.ft">您也可以下载FT中文网的App</a>，了解FT中文网的更多优秀内容。</p></div>',i=/micromessenger/i.test(t);if(window.onload=function(){o=!0},setTimeout(function(){o===!1&&i?(window.stop(),setTimeout(function(){if("object"==typeof oAds){for(var e in oAds.slots)if(oAds.slots.hasOwnProperty(e)&&!/fullscreen|lazyLoadingObservers/.test(e))try{oAds.slots[e].refresh()}catch(e){}gtag("event","reload ad",{event_label:"t10",event_category:"WeChatLoadTrack",non_interaction:!0})}for(var t=document.querySelectorAll("img"),o=!1,n=0;n<t.length;n++){var a=t[n];if(a.complete===!1){var i=a.parentElement;if(i){var r=i.getAttribute("data-url");r&&(a.src=r,o=!0)}}}o&&gtag("event","reload image",{event_label:"t10",event_category:"WeChatLoadTrack",non_interaction:!0})},1e3),gtag("event","stop",{event_label:"t10",event_category:"WeChatLoadTrack",non_interaction:!0})):o?gtag("event","success",{event_label:"t10",event_category:"WeChatLoadTrack",non_interaction:!0}):gtag("event","ignore",{event_label:"t10",event_category:"WeChatLoadTrack",non_interaction:!0})},1e4),window.gPaywallShowed===!0){var r=document.querySelector(".lock-block");if(r){var c=window.location.pathname,l="";if(window.audioUrl&&""!==window.audioUrl){l="?audio="+window.atob(window.audioUrl),c=c.replace("interactive","audio")}else c=c.replace("interactive","gym");var s="ftchinese:/"+c+l;window.location.href=s,i&&(r.innerHTML=a,r.onclick=function(){e()},document.querySelector(".subscribe-lock-container").style.height="450px")}}}();