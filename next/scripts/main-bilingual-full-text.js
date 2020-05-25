"use strict";function Delegate(e){this.listenerMap=[{},{}],e&&this.root(e),this.handle=Delegate.prototype.handle.bind(this)}function matchesTag(e,t){return e.toLowerCase()===t.tagName.toLowerCase()}function matchesRoot(e,t){return this.rootElement===window?t===document:this.rootElement===t}function matchesId(e,t){return e===t.id}Delegate.prototype.root=function(e){var t,n=this.listenerMap;if(this.rootElement){for(t in n[1])n[1].hasOwnProperty(t)&&this.rootElement.removeEventListener(t,this.handle,!0);for(t in n[0])n[0].hasOwnProperty(t)&&this.rootElement.removeEventListener(t,this.handle,!1)}if(!e||!e.addEventListener)return this.rootElement&&delete this.rootElement,this;this.rootElement=e;for(t in n[1])n[1].hasOwnProperty(t)&&this.rootElement.addEventListener(t,this.handle,!0);for(t in n[0])n[0].hasOwnProperty(t)&&this.rootElement.addEventListener(t,this.handle,!1);return this},Delegate.prototype.captureForType=function(e){return["blur","error","focus","load","resize","scroll"].indexOf(e)!==-1},Delegate.prototype.on=function(e,t,n,r){var a,o,i,l;if(!e)throw new TypeError("Invalid event type: "+e);if("function"==typeof t&&(r=n,n=t,t=null),void 0===r&&(r=this.captureForType(e)),"function"!=typeof n)throw new TypeError("Handler must be a type of Function");return a=this.rootElement,o=this.listenerMap[r?1:0],o[e]||(a&&a.addEventListener(e,this.handle,r),o[e]=[]),t?/^[a-z]+$/i.test(t)?(l=t,i=matchesTag):/^#[a-z0-9\-_]+$/i.test(t)?(l=t.slice(1),i=matchesId):(l=t,i=matches):(l=null,i=matchesRoot.bind(this)),o[e].push({selector:t,handler:n,matcher:i,matcherParam:l}),this},Delegate.prototype.off=function(e,t,n,r){var a,o,i,l,s;if("function"==typeof t&&(r=n,n=t,t=null),void 0===r)return this.off(e,t,n,!0),this.off(e,t,n,!1),this;if(i=this.listenerMap[r?1:0],!e){for(s in i)i.hasOwnProperty(s)&&this.off(s,t,n);return this}if(!(l=i[e])||!l.length)return this;for(a=l.length-1;a>=0;a--)o=l[a],t&&t!==o.selector||n&&n!==o.handler||l.splice(a,1);return l.length||(delete i[e],this.rootElement&&this.rootElement.removeEventListener(e,this.handle,r)),this},Delegate.prototype.handle=function(e){var t,n,r,a,o,i,l=e.type,s=[];if(e.ftLabsDelegateIgnore!==!0){switch(i=e.target,3===i.nodeType&&(i=i.parentNode),r=this.rootElement,e.eventPhase||(e.target!==e.currentTarget?3:2)){case 1:s=this.listenerMap[1][l];break;case 2:this.listenerMap[0]&&this.listenerMap[0][l]&&(s=s.concat(this.listenerMap[0][l])),this.listenerMap[1]&&this.listenerMap[1][l]&&(s=s.concat(this.listenerMap[1][l]));break;case 3:s=this.listenerMap[0][l]}for(n=s.length;i&&n;){for(t=0;t<n&&(a=s[t]);t++)if(a.matcher.call(i,a.matcherParam,i)&&(o=this.fire(e,i,a)),o===!1)return e.ftLabsDelegateIgnore=!0,void e.preventDefault();if(i===r)break;n=s.length,i=i.parentElement}}},Delegate.prototype.fire=function(e,t,n){return n.handler.call(t,e,t)};var matches=function(e){if(e){var t=e.prototype;return t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector}}(Element);Delegate.prototype.destroy=function(){this.off(),this.root()},function(){function e(e,t){for(var n=e.split("\n"),r=[],a=!1,o=!1,i="original"===t?"Related Link":"相关链接",l=0;l<n.length;l++){var s=n[l].replace(/\*/g,"").replace(/^(http.+\.(jpeg|gif|jpg|png))$/g,'<img src="$1">').replace(/\[[\s]*?(http[\S]+) (.*)\]/g,'<a href="$1" target="_blank">$2</a>').replace(/^(http.*)$/g,'<a href="$1" target="_blank">'+i+"</a>").replace(/^(&gt;|>)\s*(.*)$/g,'<blockquote class="n-content-blockquote"><p>$2</p></blockquote>');s.indexOf("ITV")>=0&&console.log(s),/[\.。] *$/.test(s)?(a=!0,o=!0,r.push(s)):a!==!1||""===s||/^[\s]+$/.test(s)?a&&o===!1&&""!==s&&!/^[\s]+$/.test(s)?o=!0:""===s||/^[\s]+$/.test(s)||r.push(s):a=!0}return r}function t(e){for(var t=document.body.className,n=document.querySelectorAll("#translation-display-preference div"),r=0;r<n.length;r++){var a=n[r].getAttribute("data-translation");t=t.replace("translation-"+a,"")}t=t.trim()+" translation-"+e,document.body.className=t;var o=document.getElementById("confirm-translation-preference").className;document.getElementById("confirm-translation-preference").className=o.replace(/disabled/g,"")}var n=new Delegate(document.body);n.on("click",".preference-selection div",function(){for(var e=this.parentNode.querySelectorAll("div"),t=0;t<e.length;t++){var n=e[t].className;e[t].className=n.replace(/ selected/g,"")}this.className+=" selected";var r=document.getElementById("confirm-translation-preference").className;document.getElementById("confirm-translation-preference").className=r.replace(/disabled/g,"").trim()}),n.on("click","#confirm-translation-preference",function(){if(!(this.className.indexOf("disabled")>=0)){var e=document.querySelector(".preference-selection div.selected"),n=e.getAttribute("data-translation");SetCookie("translation",n,"","/",null),t(n);var r=document.getElementById("overlay-news-preference"),a=r.className;r.className=a.replace(/ on/g,"")}}),n.on("click",".changePreference, .change-translation-preference, .btn-change-translation-preference",function(){document.getElementById("overlay-news-preference").className+=" on";for(var e=GetCookie("translation"),t=document.querySelectorAll("#translation-display-preference div"),n=0;n<t.length;n++)t[n].getAttribute("data-translation")===e&&(t[n].className+=" selected")});for(var r=document.querySelectorAll(".item-container.bilingual-full-text"),a=0;a<r.length;a++){for(var o=r[a].querySelector(".body-container"),i=r[a].querySelector(".body-container .original"),l=e(i.innerHTML,"original"),s=r[a].querySelector(".body-container .translations"),c=s.innerHTML.split("-|-"),h=0;h<c.length;h++)c[h]=e(c[h],"translation");for(var d="",f=0;f<l.length;f++){for(var m="<div>"+l[f]+"</div>",u=0;u<Math.min(1,c.length);u++)f<c[u].length&&(m+='<div class="translations rendered">'+c[u][f]+"</div>");d+='<div class="body-container">'+m+"</div>"}o.outerHTML=d;var p=r[a].querySelector(".title-container .translations"),g=p.innerHTML.split("-|-");p.innerHTML=g[0],p.className+=" rendered"}!function(){for(var e=document.querySelectorAll(".time-container"),t=0;t<e.length;t++){var n=e[t],r=n.getAttribute("data-original-time");if(""!==r){var a=parseInt(r,10),o=(new Date).getTime()/1e3,i=Math.floor(o-a),l={},s="";if(console.log(i),i<60)l={en:i+" seconds ago",ch:i+"秒前"};else if(i<3600){var c=Math.floor(i/60);s=1===c?"s":"",l={en:c+" minute"+s+" ago",ch:c+"分钟前"}}else if(i<86400){var h=Math.floor(i/3600);s=1===h?"s":"",l={en:h+" hour"+s+" ago",ch:h+"小时前"}}else if(i<604800){var d=Math.floor(i/86400);s=1===d?"s":"",l={en:d+" day"+s+" ago",ch:d+"天前"}}else{var f=new Date(1e3*a),m=f.getFullYear(),u=f.getMonth()+1,p=f.getDate();l={en:m+"-"+u+"-"+p,ch:m+"年"+u+"月"+p+"日"}}console.log(l),e[t].innerHTML='<div class="item-time highlight original">'+l.en+'</div><div class="item-time highlight">'+l.ch+"</div>"}}}(),function(){if(null!==GetCookie("USER_ID")||"www.chineseft.com"!==location.hostname){var e=GetCookie("translation");e?t(e):document.getElementById("overlay-news-preference").className+=" on",document.querySelector(".cover-lead").innerHTML+='<div class="changePreference">修改我对译文的偏好</div>';for(var n=document.querySelectorAll(".visitor-box, .member-box"),r=0;r<n.length;r++)n[r].innerHTML='<a class="change-translation-preference">译文偏好</a>'+n[r].innerHTML;var a=document.querySelector(".o-nav__search");a&&(a.innerHTML='<button class="btn-change-translation-preference"></button>')}}()}();