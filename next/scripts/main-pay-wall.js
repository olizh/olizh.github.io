function payWall(){if(!isReqSuccess&&i<3){var e=new XMLHttpRequest;e.open("get","/index.php/jsapi/paywall"),e.setRequestHeader("Content-Type","application/text"),e.onload=function(){if(200===e.status){isReqSuccess=!0;var n=e.responseText,t=JSON.parse(n);t.paywall>=1?updateUnlockClass():(isPremium=t.premium>=1,!isPremium&&isEditorChoiceChannel()?updateUnlockClass():updateLockClass()),window.htmlClass=document.documentElement.className,window.htmlClass=window.htmlClass.replace(/\ is\-subscriber/g,"").replace(/\ is\-premium/g,"").replace(/\ is\-standard/g,"");var a="noneSubscriber";0===t.paywall&&(1===t.premium?(window.htmlClass+=" is-subscriber is-premium",a="premium"):(window.htmlClass+=" is-subscriber is-standard",a="standard"));var o="";t.expire&&(o=t.expire);var s=t.campaign_code||"",l=t.latest_duration||"",r="WebSite",c="",d=navigator.userAgent||navigator.vendor||"";if(window.location.href.indexOf("webview=ftcapp")>=0)if(/iphone|ipod|ipad/i.test(d)){r="iOSApp";try{c=paravalue(window.location.href,"pendingRenewal")}catch(e){}}else r="AndroidApp";var u=new XMLHttpRequest;u.open("get","/m/corp/partial.html?include=promoboxone&type="+a+"&expire="+o+"&ccode="+s+"&duration="+l+"&platform="+r+"&pendingRenewal="+c),u.setRequestHeader("Content-Type","application/text"),u.onload=function(){if(200===u.status){var e=u.responseText;if(""!==e){var n=document.getElementById("promo-box-container");n.innerHTML=e,startCountdown(n,o),sendTracking(n)}}},u.send(null),document.documentElement.className=window.htmlClass}else isReqSuccess=!1,i++,setTimeout(function(){payWall()},500),console.log("fail to request:"+i)},e.send(null)}}function startCountdown(e,n){if(n>0){var t=e.querySelector(".countdown-hour"),a=e.querySelector(".countdown-minute"),o=e.querySelector(".countdown-second");t&&a&&o&&setInterval(function(){var e=Math.round((new Date).getTime()/1e3),i=n-e,s=Math.floor(i/3600);s=s>999?999:s,s=("0"+s).slice(-2);var l=Math.floor(i/60)%60;l=("0"+l).slice(-2);var r=i%60;r=("0"+r).slice(-2),t.innerHTML=s,a.innerHTML=l,o.innerHTML=r},1e3)}}function sendTracking(e){var n=e.querySelector(".subscription-promo-box");if(n){var t=n.getAttribute("data-promo-id");t&&""!==t&&gtag("event","Display",{event_label:t,event_category:"PromoBox",non_interaction:!0})}}function isEditorChoiceChannel(){return location.search.substring(1).indexOf("issue=EditorChoice")>=0}function getPayStory(e){for(var n=document.querySelectorAll(".item-headline"),t=[],a=0;a<n.length;a++)for(var o=n[a].children,i=0;i<o.length;i++)hasClass(o[i],e)&&t.push(o[i]);return t}function updateLockClass(){var e=getPayStory("locked");if(e.length>0)for(var n=0;n<e.length;n++)removeClass(e[n],"locked"),addClass(e[n],"unlocked")}function updateUnlockClass(){var e=getPayStory("unlocked");if(e.length>0)for(var n=0;n<e.length;n++)removeClass(e[n],"unlocked"),addClass(e[n],"locked")}function hasClass(e,n){return n=n||"",0!==n.replace(/\s/g,"").length&&new RegExp(" "+n+" ").test(" "+e.className+" ")}function addClass(e,n){hasClass(e,n)||(e.className=""===e.className?n:e.className+" "+n)}function removeClass(e,n){if(hasClass(e,n)){for(var t=" "+e.className.replace(/[\t\r\n]/g,"")+" ";t.indexOf(" "+n+" ")>=0;)t=t.replace(" "+n+" "," ");e.className=t.replace(/^\s+|\s+$/g,"")}}function showPaywallHint(){if(document.getElementById("paywall-hint-container")){var e=document.getElementById("paywall-overlay-shadow"),n=document.getElementById("paywall-hint-container");e.onclick=function(){n.style.display="none"}}}function openHint(){var e=location.search.substring(1),n=location.href;if(e.indexOf("issue=EditorChoice")>=0||n.indexOf("speedread")>=0){var t=document.getElementById("paywall-hint-container"),a=document.querySelectorAll('[data-hint="dataHint"]');if(a.length>0)for(var o=0,i=a.length;o<i;o++)a[o].onclick=function(){t.style.display="block",gtag("event","view_promotion",{promotions:[{id:window.gSubscriptionEventLabel,name:window.gSubscriptionEventLabel,creative_name:location.href,creative_slot:"become a member"}]}),gtag("event","Display",{event_label:window.gSubscriptionEventLabel,event_category:"Web Privileges"})}}}var isReqSuccess=!1,i=0,isPremium=!1,userId1=GetCookie("USER_ID");null!==userId1&&payWall(),showPaywallHint(),openHint();