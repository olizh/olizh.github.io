function GetCookie(e){var n=document.cookie.indexOf(e+"="),i=n+e.length+1,o=document.cookie.indexOf(";",i);return n||e===document.cookie.substring(0,e.length)?n===-1?null:(o===-1&&(o=document.cookie.length),decodeURIComponent(document.cookie.substring(i,o))):null}function SetCookie(e,n,i,o,t){var r=SetCookie.arguments,a=SetCookie.arguments.length,d=new Date,s=a>5&&r[5];o=a>3?r[3]:null,t=a>4?r[4]:null,null===i||""===i?i=5184e7:i*=1e3,d.setTime(d.getTime()+i),document.cookie=e+"="+escape(n)+(null===d?"":"; expires="+d.toGMTString())+(null===o?"/":"; path="+o)+(null===t?"":"; domain="+t)+(s===!0?"; secure":"")}function DeleteCookie(e){var n=new Date,i=GetCookie(e);n.setTime(n.getTime()-1),document.cookie=e+"="+i+"; expires="+n.toGMTString()}function paravalue(e,n){var i,o;return e.indexOf(n+"=")>1?(i=e.indexOf(n+"=")+n.length+1,o=e.substring(i,e.length),o=o.replace(/[\&\#].*/g,"")):o="",o}function guid(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}function updateSubscriberStatus(){var e=GetCookie("paywall");return null!==e?"premium"===e?(" is-subscriber is-premium","VIP"):(" is-subscriber is-standard","Subscriber"):null}function updateClientIdLinks(){window.gClientId=GetCookie("_ga");for(var e=document.querySelectorAll(".o-client-id-link"),n=0;n<e.length;n++){var i=e[n],o=i.href;if(o&&"string"==typeof o&&o.indexOf("/")>=0){var t=o.indexOf("?")>0?"&":"?",r=i.className;i.href=o+t+"clientId="+window.gClientId,i.className=r.replace(/o-client-id-link/g,"")}}}function trackerNew(){function e(e,n){gtag("config",gaMeasurementId,e),gtag("config",gaMeasurementId2,n)}var n,i,o,t,r,a,d,s,c,l={},u={},m=window.location.href,g="",p="",y={},f=GetCookie("USER_NAME")||GetCookie("USER_NAME_FT")||"",v=GetCookie("USER_ID")||"",h=GetCookie("ccode")||"",_=0,I=updateSubscriberStatus();void 0===window.languagePreference&&(window.languagePreference=GetCookie("LanguagePreference")||0),l.linker={domains:["ftacademy.cn","ft.com","ftchinese.com"]},l.custom_map={metric1:"engagement_score",metric2:"copy_text",metric4:"read_to_half",dimension2:"user_type",dimension4:"page_type",dimension5:"ftc_team",dimension6:"author",dimension7:"phone_version",dimension8:"story_genre",dimension9:"story_area",dimension10:"story_industry",dimension11:"main_topic",dimension12:"sub_topic",dimension13:"visiting_source",dimension14:"cm_user_id",dimension15:"reader_type",dimension16:"use_block",dimension17:"prefer_language",dimension18:"screen_type"},w>0&&(_=w>1220?"XL: above 1220":w>980?"Large: 981-1220":w>690?"Medium: 691-981":w>490?"Small: 491-690":"Phone: under 491",l.screen_type=_),c=/ipad/i.test(ua)?"iPad":/OS [0-9]+\_/i.test(ua)&&/iphone|ipod/i.test(ua)?"iPhone":/android/i.test(ua)?"Android":isTouchDevice()===!0?"Other Touch Device":"Desktop",c="Page by "+c,l.contentGroup4=c,g=paravalue(m,"ccode"),m.indexOf("gift_id")>0?(i="marketing",g="GiftArticle"):m.indexOf("isappinstalled")>0&&m.indexOf("code")<0?(i="marketing",g="2G178002"):m.indexOf("#s=d")>0?(i="DailyEmail",g="1D110215"):m.indexOf("#s=n")>0?(i="DailyEmail",g="1D130201"):m.indexOf("#s=o")>0?(i="DailyEmail",g="1D130202"):m.indexOf("#s=p")>0?(i="PMEmail",g="1P110215"):m.indexOf("#s=w")>0?(i="WeeklyEmail",g="1W110215"):m.indexOf("?wt")>0?(i="Marketing",g="WeChatNewsQuiz"):"1D110215"===g?i="DailyEmail":"1P110215"===g?i="PMEmail":"1W110215"===g?i="WeeklyEmail":"1R110215"===g?i="RSS":"1Z120420"===g?i="Zacker":m.indexOf("utm_campaign")>=0?(g=paravalue(m,"utm_campaign"),i=paravalue(m,"utm_source")):""===g?(g=GetCookie("ccode")||"",i="Other"):i="Other";try{""!==g&&g!==h&&(SetCookie("ccode",g,864e4,"/",".ftchinese.com"),SetCookie("ccode",g,864e4,"/"))}catch(e){}t="marketing",r="campaign",/micromessenger/i.test(ua)?(t="WeChat",r="Social"):i.indexOf("Email")>=0?(t="EmailNewsletter",r="referral"):i.indexOf("RSS")>=0?(t="RSS",r="referral"):i.indexOf("Zacker")>=0&&(t="Zacker",r="referral");try{l.AllowAnchor=!0,""!==g&&m.indexOf("utm_campaign")<0&&(l.campaign={name:g,source:t,medium:r},m=window.location.href)}catch(e){}if("string"==typeof window.interactiveType)try{l.contentGroup1=window.interactiveType}catch(e){}o=I&&"string"==typeof I&&""!==I?I:""===f?"visitor":"member",window.androidUserInfo&&(v=window.androidUserInfo.id||v,f=window.androidUserInfo.userName||f,o=window.androidUserInfo.isMember?"premium"===window.androidUserInfo.membership.tier?"VIP":"Subscriber":"member"),gUserType=o,""!==v&&(l.user_id=v,l.cm_user_id=v,u.user_id=v),l.user_type=gUserType,l.visiting_source=i;try{n=window.gKeyTag,n=n.replace(/白底|靠右|单页|插图|透明|高清|置顶|沉底|资料|突发/g,"").replace(/,+/g,",")}catch(e){}p="",s="",m.indexOf("story")>=0?p="Story":m.indexOf("interactive")>=0?(p="Interactive",s="product"):m.indexOf("photo")>=0?(p="Photo",s="product"):m.indexOf("video")>=0?(p="Video",s="video"):p=m.indexOf("search")>=0?"Search":m.indexOf("channel")>=0?"Channel":m.indexOf("comment")>=0?"coment":m.indexOf("column")>=0?"Column":m.indexOf("tag")>=0?"Tag":m.indexOf("topic")>=0?"Topic":"/"===m||"/?refresh="===m||m.indexOf("index.php")>=0?"Home":"Other",l.page_type=p,void 0===window.ftcteam||null===window.ftcteam||""===window.ftcteam?""!==s&&(l.ftc_team=s):l.ftc_team=window.ftcteam,void 0!==window.gauthor&&null!==window.gauthor&&""!==window.gauthor&&(l.author=window.gauthor),void 0!==window.storyGenre&&null!==window.storyGenre&&""!==window.storyGenre&&(l.story_genre=window.storyGenre),void 0!==window.storyArea&&null!==window.storyArea&&""!==window.storyArea&&(l.story_area=window.storyArea),void 0!==window.storyIndustry&&null!==window.storyIndustry&&""!==window.storyIndustry&&(l.story_industry=window.storyIndustry),void 0!==window.mainTopic&&null!==window.mainTopic&&""!==window.mainTopic&&(l.main_topic=window.mainTopic),void 0!==window.subTopic&&null!==window.subTopic&&""!==window.subTopic&&(l.sub_topic=window.subTopic),updateClientIdLinks(),y={UserType:o},gtag("set","user_properties",y),"yes"===window.isBlocked||"yes"===window.bBlocked?l.use_block="yes":"no"===window.isBlocked&&(l.use_block="no"),void 0!==window.bpage&&0!==window.bpage&&null!==window.bpage?(a=m,a=void 0!==window.virtualPage?window.virtualPage:a.replace(/^.*\/story/g,"story"),void 0!==window.metaInfo&&(a=a+"?"+window.metaInfo),a="/barrier/"+window.bpage+"/"+a,e(l,u)):void 0!==window.virtualPage?(d=m,d=d.replace(/^.*\/(story|video|interactive)\/[0-9]+/g,"").replace(/^.*\.com[\/]*/g,"").replace(/search\/.*$/g,""),void 0!==window.metaInfo?d=/\?.*\#/i.test(d)?d.replace(/#/g,"&"+window.metaInfo+"#"):d.indexOf("?")>=0?d+"&"+window.metaInfo:d.indexOf("#")>=0?d.replace(/#/g,"?"+window.metaInfo+"#"):d+"?"+window.metaInfo:/\?/i.test(d)&&(d=d.replace(/\?/g,"&")),void 0===window.gAutoStart&&(l.page_path=window.virtualPage+d,e(l,u))):void 0===window.gAutoStart&&e(l,u)}function isTouchDevice(){return"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0}function showOverlay(e){document.getElementById(e).className="overlay-container on"}function closeOverlay(e){void 0!==e?document.getElementById(e).className="overlay-container":(document.getElementById("pop-ad").style.display="none",document.getElementById("pop-ad").innerHTML="")}function showWarningMessage(e){var n="red"===e?"membership-red-card-prompt":"membership-yellow-card-prompt",i=document.getElementById(n);if(i){i.className=i.className.replace(/ hide/g,"");var o=i.querySelector(".email-link");o&&(o.href="mailto: subscriber.service@ftchinese.com?subject=Appeal For "+window.userId),gtag("event","Show",{event_label:window.userId,event_category:"Subscription Warning: "+e,non_interaction:!0})}}function checkUserWarnings(){if(""!==window.userId){var e=window.gYellowCardUserIds||"",n=window.gRedCardUserIds||"";window.cardType="clear",n.indexOf(window.userId)>=0?(showWarningMessage("red"),window.cardType="red",DeleteCookie("paywall"),DeleteCookie("paywall_expire")):e.indexOf(window.userId)>=0&&(window.cardType="yellow",showWarningMessage("yellow"));try{var i={userId:window.userId,cardType:window.cardType};webkit.messageHandlers.card.postMessage(i)}catch(e){}}}function parseUrlSearch(){var e=location.search;if(e){e=e.substring(1),e=decodeURIComponent(e);return e.split("&")}}function getUrlParams(e){var n="",i=parseUrlSearch();if(i&&i.length>0){for(var o=[],t=0,r=i.length;t<r;t++)i[t].indexOf(e)>-1&&(o=i[t].split("="),o.length>1&&(n=o[1]));return n}return n}function start(){var e=document.getElementById("english-text");document.getElementById("story-body-container").innerHTML=e.value,e.style.display="none",document.getElementById("start-button").style.display="none",document.querySelector(".sidebar").style.display="grid"}function finish(){for(var e=document.getElementById("english-words").value.replace(/[\n\r]+/g,"-|-").split("-|-"),n=document.getElementById("chinese-words").value.replace(/[\n\r]+/g,"-|-").split("-|-"),i=[],o=0;o<e.length;o++){var t=n[o],r=e[o];t&&r&&""!==r&&""!==t&&i.push(r+"|"+t)}var a=i.join("\n");if(window.opener){var d=document.getElementById("questions-text").value;window.opener.document.getElementById("cbody").value=d,window.opener.document.getElementById("clongleadbody").value=a,window.close()}}var w=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,ua=navigator.userAgent||navigator.vendor||"",gUserType="visitor",gaMeasurementId="UA-1608715-1",gaMeasurementId2="G-PDY0XG13PH",username=GetCookie("USER_NAME")||GetCookie("USER_NAME_FT")||"",userId=GetCookie("USER_ID")||"",ccodeCookie=GetCookie("ccode")||"",user_name=GetCookie("USER_NAME")||GetCookie("USER_NAME_FT");if(null!==user_name&&(document.documentElement.className+=" is-member"),window.ccodeValue=getUrlParams("ccode")||getUrlParams("utm_campaign")||GetCookie("ccode"),window.opener){var englishText=window.opener.document.getElementById("ebody").value;document.getElementById("english-text").value=englishText;var questions=window.opener.document.getElementById("cbody").value;document.getElementById("questions-text").value=questions,start()}