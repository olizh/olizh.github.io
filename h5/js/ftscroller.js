var FTScroller,CubicBezier;!function(){"use strict";var e,n,t,r,o,i,l,s,a;void 0!==document.createElement("div").style.transform?(e="",n="",t="transform"):window.opera&&"[object Opera]"===Object.prototype.toString.call(window.opera)?(e="-o-",n="O",t="OTransform"):void 0!==document.documentElement.style.MozTransform?(e="-moz-",n="Moz",t="MozTransform"):void 0!==document.documentElement.style.webkitTransform?(e="-webkit-",n="webkit",t="-webkit-transform"):"string"==typeof navigator.cpuClass&&(e="-ms-",n="ms",t="-ms-transform"),"pointerEnabled"in window.navigator?(r=!1,s=window.navigator.pointerEnabled,o="setPointerCapture",i="releasePointerCapture",l="lostpointercapture",a="touch"):"msPointerEnabled"in window.navigator&&(r=!0,s=window.navigator.msPointerEnabled,o="msSetPointerCapture",i="msReleasePointerCapture",l="MSLostPointerCapture",a=2);var c=!1,u=!1;("propertyIsEnumerable"in window||"hasOwnProperty"in window.document)&&(u=!s&&(window.propertyIsEnumerable("ontouchstart")||window.document.hasOwnProperty("ontouchstart")));var d=!1;"hasOwnProperty"in window&&(d=!window.hasOwnProperty("ArrayBuffer"));var p=window.Selection&&window.Selection.prototype.removeAllRanges;d||void 0!==document.createElement("div").style[n+(n?"P":"p")+"erspective"]||(d=!0);var f=n+(n?"T":"t")+"ransform",h=n+(n?"T":"t")+"ransition",y=d?"translate(":"translate3d(",m={x:"",y:"0,"},w={x:",0"+(d?")":",0)"),y:d?")":",0)"},x=.998,g=.01;!function(){var n,t,r=document.getElementsByTagName("head")[0]||document.documentElement,o=document.createElement("style");o.type="text/css",n=d?e+"transform-style: preserve-3d;":e+"transform: translateZ(0);",t=[".ftscroller_container { overflow: hidden; position: relative; max-height: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); -ms-touch-action: none }",".ftscroller_hwaccelerated { "+n+" }",".ftscroller_x, .ftscroller_y { position: relative; min-width: 100%; min-height: 100%; overflow: hidden }",".ftscroller_x { display: inline-block }",".ftscroller_scrollbar { pointer-events: none; position: absolute; width: 5px; height: 5px; border: 1px solid rgba(255, 255, 255, 0.3); -webkit-border-radius: 3px; border-radius: 6px; opacity: 0; "+e+"transition: opacity 350ms; z-index: 10; -webkit-box-sizing: content-box; -moz-box-sizing: content-box; box-sizing: content-box }",".ftscroller_scrollbarx { bottom: 2px; left: 2px }",".ftscroller_scrollbary { right: 2px; top: 2px }",".ftscroller_scrollbarinner { height: 100%; background: #000; -webkit-border-radius: 2px; border-radius: 4px / 6px }",".ftscroller_scrollbar.active { opacity: 0.5; "+e+"transition: none; -o-transition: all 0 none }"],o.styleSheet?o.styleSheet.cssText=t.join("\n"):o.appendChild(document.createTextNode(t.join("\n"))),r.insertBefore(o,r.firstChild)}(),FTScroller=function(d,v){var b,M,C,E,S,T,_,F,z,O,B,L,P,A,X,Y,D,N,R,I,k,H,j,W,q,U,K,Z,G,V,J,Q,$,en,nn,tn,rn,on,ln,sn,an,cn,un,dn,pn,fn,hn,yn,mn,wn,xn,gn,vn,bn,Mn,Cn,En,Sn,Tn,_n,Fn={scrollbars:!0,scrollingX:!0,scrollingY:!0,scrollBoundary:1,scrollResponseBoundary:1,alwaysScroll:!1,contentWidth:void 0,contentHeight:void 0,snapping:!1,snapSizeX:void 0,snapSizeY:void 0,singlePageScrolls:!1,bouncing:!0,flinging:!0,updateOnChanges:!0,updateOnWindowResize:!1,baseAlignments:{x:-1,y:-1},windowScrollingActiveFlag:void 0,hwAccelerationClass:"ftscroller_hwaccelerated",enableRequestAnimationFrameSupport:!0,maxFlingDuration:1e3,disabledInputMethods:{mouse:!1,touch:!1,scroll:!1,pointer:!1,focus:!1},scrollingClassName:void 0,flingBezier:new CubicBezier(.103,.389,.307,.966),bounceDecelerationBezier:new CubicBezier(0,.5,.5,1),bounceBezier:new CubicBezier(.7,0,.9,.6)},zn=this,On=d,Bn={x:null,y:null},Ln={x:null,y:null},Pn={container:{x:null,y:null},content:{x:null,y:null,rawX:null,rawY:null},scrollEnd:{x:null,y:null}},An={x:!1,y:!1,userX:!1,userY:!1},Xn={x:0,y:0},Yn={x:0,y:0},Dn={x:0,y:0},Nn=!1,Rn=0,In=!1,kn=!1,Hn=!1,jn=!1,Wn={x:0,y:0},qn={x:0,y:0},Un={x:0,y:0},Kn={x:null,y:null},Zn=!1,Gn=[],Vn=!1,Jn={},Qn={x:!0,y:!0},$n={x:0,y:0,t:0},et={x:0,y:0},nt=[],tt=!1,rt=!1,ot=!1,it=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||!1,lt=window.cancelAnimationFrame||window.cancelRequestAnimationFrame||window.mozCancelAnimationFrame||window.mozCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.msCancelAnimationFrame||window.msCancelRequestAnimationFrame||!1,st={scrollstart:[],scroll:[],scrollend:[],segmentwillchange:[],segmentdidchange:[],reachedstart:[],reachedend:[],scrollinteractionend:[]};if("object"==typeof FTScrollerOptions&&FTScrollerOptions)for(b in FTScrollerOptions)FTScrollerOptions.hasOwnProperty(b)&&Fn.hasOwnProperty(b)&&(Fn[b]=FTScrollerOptions[b]);if(v){for(b in v)if(v.hasOwnProperty(b)){if("paginatedSnap"===b){console.warn('FTScroller: "paginatedSnap" is deprecated; converting to "singlePageScrolls"'),Fn.singlePageScrolls=v.paginatedSnap;continue}Fn.hasOwnProperty(b)&&(Fn[b]=v[b])}v.hasOwnProperty("snapSizeX")&&!isNaN(v.snapSizeX)&&(An.userX=An.x=v.snapSizeX),v.hasOwnProperty("snapSizeY")&&!isNaN(v.snapSizeY)&&(An.userY=An.y=v.snapSizeY),v.contentWidth&&v.contentHeight&&(v.updateOnChanges=!1)}return Fn.scrollResponseBoundary=Math.min(Fn.scrollBoundary,Fn.scrollResponseBoundary),Fn.scrollingX&&(Jn.x=!0),Fn.scrollingY&&(Jn.y=!0),it=Fn.enableRequestAnimationFrameSupport&&it,lt=it&&lt,M=function(e){var n,t;for(ln(),rn(),tt&&(window.clearTimeout(tt),tt=!1),n=0,t=Gn.length;t>n;n+=1)window.clearTimeout(Gn[n]);if(Gn.length=0,e&&On){for(;Tn.firstChild;)On.appendChild(Tn.firstChild);On.removeChild(Sn)}On=null,Sn=null,Tn=null,Bn.x=null,Bn.y=null,Ln.x=null,Ln.y=null;for(n in st)st.hasOwnProperty(n)&&(st[n].length=0);c&&c===zn&&(c=!1,Fn.windowScrollingActiveFlag&&(window[Fn.windowScrollingActiveFlag]=!1))},C=function(e,n){An.userX=e,An.userY=n,An.x=e,An.y=n,Pn.content.x=Math.ceil(Pn.content.rawX/e)*e,Pn.content.y=Math.ceil(Pn.content.rawY/n)*n,Pn.scrollEnd.x=Pn.container.x-Pn.content.x,Pn.scrollEnd.y=Pn.container.y-Pn.content.y,q(),Y(),K(!0)},E=function(e,n,t){var r,o,i,l,s=0,a={};L(Date.now()),i={x:-e,y:-n};for(l in Jn)if(Jn.hasOwnProperty(l)){if(r=i[l],r===!1)continue;r=Math.min(0,Math.max(Pn.scrollEnd[l],r)),Fn.snapping&&An[l]&&(r=Math.round(r/An[l])*An[l]),o=t||0,o===!0&&(o=20*Math.sqrt(Math.abs(Wn[l]-r))),Z(l,r,o),a[l]=r,s=Math.max(s,o)}(Wn.x!==i.x||Wn.y!==i.y)&&(Vn=!0,J("scrollstart",G()),J("scroll",G())),s?Gn.push(setTimeout(function(){var e;for(e in a)a.hasOwnProperty(e)&&(qn[e]=a[e]);P()},s)):P()},S=function(e,n,t){E(parseFloat(e)-Wn.x,parseFloat(n)-Wn.y,t)},T=function(e,n,t){v.contentWidth=e||v.contentWidth,v.contentHeight=n||v.contentHeight,W(!!t)},_=function(e,n){return st.hasOwnProperty(e)?(st[e].push(n),!0):!1},F=function(e,n){var t;if(!st.hasOwnProperty(e))return!1;for(t=st[e].length;t>=0;t-=1)st[e][t]===n&&st[e].splice(t,1);return!0},z=function(e){var n,t;for(n in Fn.disabledInputMethods)e[n]=!!e[n],Fn.disabledInputMethods[n]!==e[n]&&(t=!0),Fn.disabledInputMethods[n]=e[n];t&&sn()},O=function(e,n,t,r){var o=jn;return 0>=t&&(t=Date.now()),Fn.windowScrollingActiveFlag&&window[Fn.windowScrollingActiveFlag]?!1:(o?A():Zn=!1,$n.x=e,$n.y=n,$n.t=t,Un.x=qn.x,Un.y=qn.y,nt.length=0,nt.push({x:e,y:n,t:t}),o&&B(e,n,t,r,o),!0)},B=function(e,n,t,r,o){var i,l,s,a=!1,u={x:e-$n.x,y:n-$n.y};if(0>=t&&(t=Date.now()),Un.x=Wn.x+u.x,Un.y=Wn.y+u.y,!kn&&(c&&c!==zn?l=!0:Fn.windowScrollingActiveFlag&&window[Fn.windowScrollingActiveFlag]&&(l=!0),l))return Mn(),Nn=!1,void(Hn&&(rn(),Y(!0)||P(!0)));if(Hn)r.preventDefault();else{if(s=en(Un),(Fn.bouncing||o||Qn.x&&u.x&&s.x<0||Qn.y&&u.y&&s.y<0)&&r.preventDefault(),!o&&(!Qn.x||Math.abs(u.x)<Fn.scrollResponseBoundary)&&(!Qn.y||Math.abs(u.y)<Fn.scrollResponseBoundary))return;if(!(Fn.bouncing||o||Qn.x&&u.x&&!(s.x>0)||Qn.y&&u.y&&!(s.y>0)))return void(Zn=!0);nn(),Hn=!0,Vn=!0,jn=!0,a=!0}if(kn||(o&&Fn.snapping||Qn.x&&Math.abs(u.x)>=Fn.scrollBoundary||Qn.y&&Math.abs(u.y)>=Fn.scrollBoundary)&&(kn=!0,Zn=!0,c=zn,Fn.windowScrollingActiveFlag&&(window[Fn.windowScrollingActiveFlag]=zn),J("scrollstart",G())),kn&&bn(),p&&window.getSelection().removeAllRanges(),R(),a&&(u.x>0?Wn.x-=Fn.scrollResponseBoundary:u.x<0&&(Wn.x+=Fn.scrollResponseBoundary),u.y>0?Wn.y-=Fn.scrollResponseBoundary:u.y<0&&(Wn.y+=Fn.scrollResponseBoundary),Un.x=Wn.x+u.x,Un.y=Wn.y+u.y,Fn.scrollingClassName&&(Sn.className+=" "+Fn.scrollingClassName),Fn.scrollbars))for(i in Qn)Qn.hasOwnProperty(i)&&(Ln[i].className+=" active");nt.push({x:e,y:n,t:t}),nt.length>30&&nt.splice(0,15)},L=function(e,n){return Mn(),Nn=!1,rn(),J("scrollinteractionend",{}),kn?(nt[nt.length-1].t=e,kn=!1,Hn=!1,c=!1,Fn.windowScrollingActiveFlag&&(window[Fn.windowScrollingActiveFlag]=!1),n&&n.preventDefault(),void(X()||Y()||P())):void(!Y(!0)&&Hn&&P(!0))},P=function(e){var n,t,r,o,i;if(jn=!1,Hn=!1,Fn.scrollingClassName&&(i=new RegExp("(?:^|\\s)"+Fn.scrollingClassName+"(?!\\S)","g"),Sn.className=Sn.className.replace(i,"")),Fn.scrollbars)for(r in Qn)Qn.hasOwnProperty(r)&&(Ln[r].className=Ln[r].className.replace(/ ?active/g,""));Wn.x=qn.x,Wn.y=qn.y,o=G(),e||(J("scroll",o),K(!0)),o.cancelled=e,J("scrollend",o);for(r in Qn)Qn.hasOwnProperty(r)&&(Bn[r].style[h]="",Fn.scrollbars&&(Ln[r].style[h]=""));for(n=0,t=Gn.length;t>n;n+=1)window.clearTimeout(Gn[n]);Gn.length=0},A=function(){var e,n,t;jn=!1,U();for(e in Qn)Qn.hasOwnProperty(e)&&Z(e,Wn[e],16,Fn.bounceDecelerationBezier);for(K(!1),n=0,t=Gn.length;t>n;n+=1)window.clearTimeout(Gn[n]);Gn.length=0},X=function(){var e,n,t,r,o,i,l,s,a,c,u,d,p,f,h,y,m,w,v,b,M,C=0,E=!1,S={};if(1===nt.length||!Fn.flinging||"scrollwheel"===Nn)return!1;for(n in Qn)if(Qn.hasOwnProperty(n)){for(d=350,u=0,f=!1,p=!1,w=void 0,y=Fn.flingBezier,o=nt[nt.length-1],i=nt[nt.length-2],e=nt.length-3;e>=0&&!(o.t-nt[e].t>100);e-=1)i=nt[e];if(t=o.t-i.t,t||(t=16),r=(o[n]-i[n])/t,Math.abs(r)<g?(l=0,s=0):(l=Math.log(g/Math.abs(r))/Math.log(x),s=r*(1-Math.pow(x,l+1))/(1-x)),a=Math.floor(qn[n]+s),Fn.bouncing||(0===qn[n]&&a>0?a=0:qn[n]===Pn.scrollEnd[n]&&a<qn[n]&&(a=qn[n])),Fn.singlePageScrolls&&Fn.snapping?(v=-qn[n]/An[n],v=Yn[n]<v?Math.floor(v):Math.ceil(v),a>-(Yn[n]-1)*An[n]?u=a+(Yn[n]-1)*An[n]:a<-(Yn[n]+1)*An[n]?u=a+(Yn[n]+1)*An[n]:Math.abs(r)>g&&(a=0>r?Math.floor(qn[n]/An[n])*An[n]:Math.ceil(qn[n]/An[n])*An[n],l=Math.min(Fn.maxFlingDuration,l*(a-qn[n])/s))):Fn.snapping&&(u=a-Math.round(a/An[n])*An[n]),a-u>0?(u=a,f=!0):a-u<Pn.scrollEnd[n]&&(u=a-Pn.scrollEnd[n],f=!0),u&&(f&&Fn.bouncing&&s?(s=Math.floor(s),b=a>0?a-Math.max(0,qn[n]):a-Math.min(Pn.scrollEnd[n],qn[n]),M=s-b,s&&l?(m=y._getCoordinateForT(y.getTForY((s-b)/s,1/l),y._p1.x,y._p2.x),w=m*l):m=0,h=Math.ceil(b/8),Math.abs(h)>Pn.container[n]/2&&(h=0>h?-Math.floor(Pn.container[n]/2):Math.floor(Pn.container[n]/2)),p=a>0?0:Pn.scrollEnd[n],0===m?(l/=6,a=qn[n]+M+h,c=l):(c=(m+(1-m)/6)*l,V(n,qn[n]+M+h,(1-m)*l/6,Fn.bounceDecelerationBezier,w),y=y.divideAtX(c/l,1/l)[0],l=c,a=qn[n]+M+h)):0>s&&s>u||s>0&&u>s?(a-=Math.floor(s/2),u-=Math.floor(s/2),d=50*Math.sqrt(Math.abs(u)),p=a-u,l=350,c=.97*l):(a-=u,s?(0>s&&0>u||s>0&&u>0)&&(m=y._getCoordinateForT(y.getTForY((Math.abs(s)-Math.abs(u))/Math.abs(s),1/l),y._p1.x,y._p2.x),y=y.divideAtX(m,1/l)[0],l=Math.round(l*m)):l=d,u=0,d=0)),a===qn[n]&&!u)continue;E=!0,Z(n,a,l,y,w),u&&d&&V(n,p,d,Fn.bounceBezier,c),C=Math.max(C,u?c+d:l),S[n]=p===!1?a:p}return E&&C&&Gn.push(setTimeout(function(){var e;for(e in S)S.hasOwnProperty(e)&&(qn[e]=S[e]);P()},C)),E},Y=function(e){var n,t=e?100:350,r=qn;Fn.snapping&&(Xn=N(r),r=D(Xn,r)),r=I(r);var o=!1;for(n in Jn)Jn.hasOwnProperty(n)&&r[n]!==qn[n]&&(o=!0);if(!o)return!1;for(n in Jn)Jn.hasOwnProperty(n)&&Z(n,r[n],t);return Gn.push(setTimeout(function(){qn=r,P(e)},t)),!0},N=function(e){var n,t={x:0,y:0};for(n in Qn)Qn.hasOwnProperty(n)&&An[n]&&(t[n]=Math.round(e[n]/An[n]));return t},D=function(e,n){var t,r={x:n.x,y:n.y};for(t in Qn)Qn.hasOwnProperty(t)&&(r[t]=e[t]*An[t]);return r},R=function(){var e,n,t;for(e in Qn)Qn.hasOwnProperty(e)&&(n=0,t=Pn.scrollEnd[e],Fn.singlePageScrolls&&Fn.snapping&&(n=Math.min(n,-(Yn[e]-1)*An[e]),t=Math.max(t,-(Yn[e]+1)*An[e])),Un[e]>n?Un[e]=n+$(Un[e]-n,e):Un[e]<t&&(Un[e]=t+$(Un[e]-t,e)));it||tn()},I=function(e){var n,t={x:e.x,y:e.y};for(n in Qn)if(Qn.hasOwnProperty(n)){if(e[n]>0){t[n]=0;continue}if(e[n]<Pn.scrollEnd[n]){t[n]=Pn.scrollEnd[n];continue}}return t},k=function(){var e,n,t;if(!H()){for(e=On.ownerDocument.createDocumentFragment(),n=document.createElement("DIV"),e.appendChild(n),n.innerHTML=FTScroller.prototype.getPrependedHTML(!Fn.scrollingX,!Fn.scrollingY,Fn.hwAccelerationClass)+FTScroller.prototype.getAppendedHTML(!Fn.scrollingX,!Fn.scrollingY,Fn.hwAccelerationClass,Fn.scrollbars),Sn=n.firstElementChild,t=Sn,Fn.scrollingX&&(Bn.x=Sn.firstElementChild,t=Bn.x,Fn.scrollbars&&(Ln.x=Sn.getElementsByClassName("ftscroller_scrollbarx")[0])),Fn.scrollingY?(Bn.y=t.firstElementChild,Fn.scrollbars&&(Ln.y=Sn.getElementsByClassName("ftscroller_scrollbary")[0]),Tn=Bn.y):Tn=Bn.x;On.firstChild;)Tn.appendChild(On.firstChild);On.appendChild(Sn)}},H=function(){var e,n,t,r,o,i,l,s,a;if(e=On.firstElementChild,e&&-1!==e.className.indexOf("ftscroller_container")){if(Fn.scrollingX){if(n=e.firstElementChild,!n||-1===n.className.indexOf("ftscroller_x"))return;if(r=n,Fn.scrollbars){if(l=e.getElementsByClassName("ftscroller_scrollbarx"))for(s=0,a=l.length;a>s;s+=1)if(l[s].parentNode===e){o=l[s];break}if(!o)return}}else r=e;if(Fn.scrollingY){if(t=r.firstElementChild,!t||-1===t.className.indexOf("ftscroller_y"))return;if(Fn.scrollbars){if(l=e.getElementsByClassName("ftscroller_scrollbary"))for(s=0,a=l.length;a>s;s+=1)if(l[s].parentNode===e){i=l[s];break}if(!i)return}}return Sn=e,n&&(Bn.x=n),t&&(Bn.y=t),o&&(Ln.x=o),i&&(Ln.y=i),Tn=Fn.scrollingY?t:n,!0}},j=function(e){tt&&window.clearTimeout(tt),e&&"resize"===e.type?W():tt=setTimeout(function(){W()},100)},W=function(e){var n;if(!Sn||!Tn)return!1;tt&&(window.clearTimeout(tt),tt=!1);var t,r,o;o={x:!1,y:!1};for(n in o)o.hasOwnProperty(n)&&(0===qn[n]?o[n]=-1:qn[n]<=Pn.scrollEnd[n]?o[n]=1:2*qn[n]<=Pn.scrollEnd[n]+5&&2*qn[n]>=Pn.scrollEnd[n]-5&&(o[n]=0));t=Sn.offsetWidth,r=Sn.offsetHeight;var i=v.contentWidth||Tn.offsetWidth,l=v.contentHeight||Tn.offsetHeight,s=i,a=l,c={x:qn.x,y:qn.y};if(An.userX||(An.x=t),An.userY||(An.y=r),Fn.snapping&&(s=An.userX?Math.ceil(s/An.userX)*An.userX:Math.ceil(s/An.x)*An.x,a=An.userY?Math.ceil(a/An.userY)*An.userY:Math.ceil(a/An.y)*An.y),Pn.container.x!==t||Pn.container.y!==r||Pn.content.x!==s||Pn.content.y!==a)if(Pn.container.x=t,Pn.container.y=r,Pn.content.x=s,Pn.content.rawX=i,Pn.content.y=a,Pn.content.rawY=l,Pn.scrollEnd.x=t-s,Pn.scrollEnd.y=r-a,q(),kn)qn.x--,qn.y--,R();else{!e&&Fn.snapping&&(K(),c=D(Xn,qn));for(n in c)if(c.hasOwnProperty(n)){if(Pn.container[n]<Pn.content[n]&&Vn&&Fn.baseAlignments[n]!==o[n])continue;1===Fn.baseAlignments[n]?c[n]=Pn.scrollEnd[n]:0===Fn.baseAlignments[n]?c[n]=Math.floor(Pn.scrollEnd[n]/2):-1===Fn.baseAlignments[n]&&(c[n]=0)}c=I(c),Fn.scrollingX&&c.x!==qn.x&&(Z("x",c.x,0),Wn.x=c.x),Fn.scrollingY&&c.y!==qn.y&&(Z("y",c.y,0),Wn.y=c.y)}},q=function(){Fn.scrollbars&&(Fn.scrollingX&&(Ln.x.style.width=Math.max(6,Math.round(Pn.container.x*(Pn.container.x/Pn.content.x)-4))+"px"),Fn.scrollingY&&(Ln.y.style.height=Math.max(6,Math.round(Pn.container.y*(Pn.container.y/Pn.content.y)-4))+"px")),Qn={},Fn.scrollingX&&(Pn.content.x>Pn.container.x||Fn.alwaysScroll)&&(Qn.x=!0),Fn.scrollingY&&(Pn.content.y>Pn.container.y||Fn.alwaysScroll)&&(Qn.y=!0)},U=function(){var e,n,r;for(e in Qn)Qn.hasOwnProperty(e)&&(n=window.getComputedStyle(Bn[e],null)[t],r=n.split(", "),Wn[e]=6===r.length?parseInt(r["y"===e?5:4],10):parseInt(r["y"===e?13:12],10),qn[e]=Wn[e])},K=function(e){var n,t={x:0,y:0};if(Fn.snapping){for(n in Qn)Qn.hasOwnProperty(n)&&(t[n]=Math.max(0,Math.min(Math.ceil(Pn.content[n]/An[n])-1,Math.round(-qn[n]/An[n]))));(t.x!==Dn.x||t.y!==Dn.y)&&(Dn.x=t.x,Dn.y=t.y,J("segmentwillchange",{segmentX:t.x,segmentY:t.y})),e&&(t.x!==Yn.x||t.y!==Yn.y)&&(Yn.x=t.x,Yn.y=t.y,J("segmentdidchange",{segmentX:t.x,segmentY:t.y}))}},Z=function(n,t,r,o,i){var l,s=null;return Bn[n]?(r?(o||(o=Fn.flingBezier),l=e+"transform "+r+"ms "+o.toString()):l="",Bn[n].style[h]=l,Fn.scrollbars&&(Ln[n].style[h]=l),Bn[n].style[f]=y+m[n]+t+"px"+w[n],Fn.scrollbars&&(Ln[n].style[f]=y+m[n]+-t*Pn.container[n]/Pn.content[n]+"px"+w[n]),t>=0?s="start":t<=Pn.scrollEnd[n]&&(s="end"),s!==Kn[n]&&(null!==s&&(r?Gn.push(setTimeout(function(){J("reached"+s,{axis:n})},i||r)):J("reached"+s,{axis:n})),Kn[n]=s),void(r||(qn[n]=t))):!1},G=function(){return{scrollLeft:-qn.x,scrollTop:-qn.y}},V=function(e,n,t,r,o){Gn.push(setTimeout(function(){Z(e,n,t,r)},o))},J=function(e,n){var t,r;for(n.srcObject=En,t=0,r=st[e].length;r>t;t+=1)try{st[e][t](n)}catch(o){window.console&&window.console.error&&(o.message?window.console.error(o.message+" ("+o.sourceURL+", line "+o.line+")"):(window.console.error("Error encountered executing FTScroller event listener callback for ["+e+']. Add a "debugger" statement here to obtain a full backtrace.'),window.console.dir&&window.console.dir(o)))}},Q=function(e){var n,t,r,o=Cn(e.target),i=Cn(Sn),l={x:"left",y:"top"},s={x:"right",y:"bottom"},a={x:"width",y:"height"};if(Nn===!1){for(t in Qn)if(Qn.hasOwnProperty(t)){if(o[l[t]]>=i[l[t]]&&o[s[t]]<=i[s[t]])continue;if(o[a[t]]>i[a[t]]&&(r=o[a[t]]-Math.max(0,i[l[t]]-o[l[t]])-Math.max(0,o[s[t]]-i[s[t]]),r>=i[a[t]]/2))continue;n=-Math.round(o[a[t]]/2-qn[t]+o[l[t]]-i[l[t]]-i[a[t]]/2),n=Math.min(0,Math.max(Pn.scrollEnd[t],n)),Z(t,n,0),Wn[t]=n}J("scroll",G())}},$=function(e,n){if(!Fn.bouncing)return 0;var t=Math.exp(e/Pn.container[n]);return Math.round(.6*Pn.container[n]*(t-1)/(t+1))},en=function(e){var n,t,r={};for(n in e)e.hasOwnProperty(n)&&(t=e[n],r[n]=t>=0?t:t>Pn.scrollEnd[n]?-1:Pn.scrollEnd[n]-t);return r},nn=function(){it&&(rn(),ot=it(tn))},tn=function at(){var e,n;it&&(ot=it(at));for(e in Qn)Qn.hasOwnProperty(e)&&Un[e]!==qn[e]&&(Z(e,Un[e]),n=!0);kn&&n&&(J("scroll",G()),K(!1))},rn=function(){ot!==!1&&lt&&(lt(ot),ot=!1)},sn=function(){ln(),on()},on=function(){var e;Sn&&(s&&!Fn.disabledInputMethods.pointer?r?(Sn.addEventListener("MSPointerDown",hn),Sn.addEventListener("MSPointerMove",yn),Sn.addEventListener("MSPointerUp",mn),Sn.addEventListener("MSPointerCancel",wn)):(Sn.addEventListener("pointerdown",hn),Sn.addEventListener("pointermove",yn),Sn.addEventListener("pointerup",mn),Sn.addEventListener("pointercancel",wn)):(u&&!Fn.disabledInputMethods.touch&&(Sn.addEventListener("touchstart",an),Sn.addEventListener("touchmove",cn),Sn.addEventListener("touchend",un),Sn.addEventListener("touchcancel",un)),Fn.disabledInputMethods.mouse||Sn.addEventListener("mousedown",dn)),Fn.disabledInputMethods.scroll||(Sn.addEventListener("DOMMouseScroll",vn),Sn.addEventListener("mousewheel",vn)),Fn.disabledInputMethods.mouse&&Fn.disabledInputMethods.touch&&Fn.disabledInputMethods.pointer||(s?document.addEventListener("click",gn,!0):Sn.addEventListener("click",gn,!0)),Fn.disabledInputMethods.focus||Tn.addEventListener("focus",Q),Fn.updateOnChanges&&(_n||(e=window.MutationObserver||window.WebKitMutationObserver||window[n+"MutationObserver"],e&&(_n=new e(j))),_n?_n.observe(Tn,{childList:!0,characterData:!0,subtree:!0}):Tn.addEventListener("DOMSubtreeModified",function(e){(!e||e.srcElement!==Tn&&-1===e.srcElement.className.indexOf("ftscroller_"))&&j()},!0),Tn.addEventListener("load",j)),Fn.updateOnWindowResize&&window.addEventListener("resize",j))},ln=function(){Sn&&(Sn.removeEventListener("MSPointerDown",hn),Sn.removeEventListener("MSPointerMove",yn),Sn.removeEventListener("MSPointerUp",mn),Sn.removeEventListener("MSPointerCancel",wn),Sn.removeEventListener("pointerdown",hn),Sn.removeEventListener("pointermove",yn),Sn.removeEventListener("pointerup",mn),Sn.removeEventListener("pointercancel",wn),Sn.removeEventListener("touchstart",an),Sn.removeEventListener("touchmove",cn),Sn.removeEventListener("touchend",un),Sn.removeEventListener("touchcancel",un),Sn.removeEventListener("mousedown",dn),Sn.removeEventListener("DOMMouseScroll",vn),Sn.removeEventListener("mousewheel",vn),Sn.removeEventListener("click",gn,!0)),Tn&&(Tn.removeEventListener("focus",Q),Tn.removeEventListener("DOMSubtreeModified",j),Tn.removeEventListener("load",j)),_n&&_n.disconnect(),document.removeEventListener("mousemove",pn),document.removeEventListener("mouseup",fn),document.removeEventListener("click",gn,!0),window.removeEventListener("resize",j)},an=function(e){var n,t,r;if(Nn)for(n=0,t=e.touches.length;t>n;n+=1)e.touches[n].identifier===Nn&&(Rn=n);else r=e.touches[0],Nn=r.identifier,Rn=0,O(r.clientX,r.clientY,e.timeStamp,e)},cn=function(e){if(Nn!==!1){var n=e.touches[Rn];B(n.clientX,n.clientY,e.timeStamp,e)}},un=function(e){var n,t;if(e.touches)for(n=0,t=e.touches.length;t>n;n+=1)if(e.touches[n].identifier===Nn)return void(Rn=n);L(e.timeStamp,e)},dn=function(e){e.button&&2===e.button||e.ctrlKey||(Sn.setCapture&&Sn.setCapture(),document.addEventListener("mousemove",pn,!0),document.addEventListener("mouseup",fn,!0),Nn=e.button||1,Rn=0,O(e.clientX,e.clientY,e.timeStamp,e))},pn=function(e){Nn&&B(e.clientX,e.clientY,e.timeStamp,e)},fn=function ct(e){e.button&&e.button!==Nn||(document.removeEventListener("mousemove",pn,!0),document.removeEventListener("mouseup",ct,!0),Sn.releaseCapture&&Sn.releaseCapture(),L(e.timeStamp,e))},hn=function(e){if(!Nn||e.isPrimary){if(e.pointerType===a){if(Fn.disabledInputMethods.touch)return}else if(Fn.disabledInputMethods.mouse)return;Nn=e.pointerId,O(e.clientX,e.clientY,e.timeStamp,e)}},yn=function(e){Nn===e.pointerId&&B(e.clientX,e.clientY,e.timeStamp,e)},mn=function(e){Nn===e.pointerId&&L(e.timeStamp,e)},wn=function(e){L(e.timeStamp,e)},xn=function(){In=!1},gn=function(e){return Zn?(e.preventDefault(),e.stopPropagation(),Nn||(Zn=!1),!1):!0},vn=function(e){var n,t;if("scrollwheel"!==Nn){if(Nn!==!1)return!0;if(Nn="scrollwheel",et.x=0,et.y=0,!O(e.clientX,e.clientY,Date.now(),e))return}e.wheelDelta?e.wheelDeltaX?(n=e.wheelDeltaX/2,t=e.wheelDeltaY/2):(n=0,t=e.wheelDelta/2):e.axis&&e.axis===e.HORIZONTAL_AXIS?(n=-10*e.detail,t=0):(n=0,t=-10*e.detail),Fn.scrollingY||n||(n=t,t=0),et.x=Math.round(et.x+n),et.y=Math.round(et.y+t),B($n.x+et.x,$n.y+et.y,e.timeStamp,e),rt&&clearTimeout(rt),rt=setTimeout(function(){Mn(),Nn=!1,kn=!1,Zn=!1,Hn=!1,c=!1,Fn.windowScrollingActiveFlag&&(window[Fn.windowScrollingActiveFlag]=!1),rn(),Y()||P()},300)},bn=function(){In||Nn===!1||"scrollwheel"===Nn||(s&&(Sn[o](Nn),Sn.addEventListener(l,xn,!1)),In=!0)},Mn=function(){In&&(s&&(Sn.removeEventListener(l,xn,!1),Sn[i](Nn)),In=!1)},Cn=function(e){if(e.getBoundingClientRect)return e.getBoundingClientRect();for(var n=0,t=0,r=e;r;)n=n+r.offsetLeft-r.scrollLeft,t=t+r.offsetTop-r.scrollTop,r=r.offsetParent;return{left:n,top:t,width:e.offsetWidth,height:e.offsetHeight}},k(),W(),on(),En={destroy:M,setSnapSize:C,scrollTo:E,scrollBy:S,updateDimensions:T,addEventListener:_,removeEventListener:F,setDisabledInputMethods:z},Object.defineProperties&&Object.defineProperties(En,{scrollHeight:{get:function(){return Pn.content.y},set:function(e){throw new SyntaxError("scrollHeight is currently read-only - ignoring "+e)}},scrollLeft:{get:function(){return-qn.x},set:function(e){return E(e,!1,!1),-qn.x}},scrollTop:{get:function(){return-qn.y},set:function(e){return E(!1,e,!1),-qn.y}},scrollWidth:{get:function(){return Pn.content.x},set:function(e){throw new SyntaxError("scrollWidth is currently read-only - ignoring "+e)}},segmentCount:{get:function(){return Fn.snapping?{x:Math.ceil(Pn.content.x/An.x),y:Math.ceil(Pn.content.y/An.y)}:{x:0/0,y:0/0}},set:function(e){throw new SyntaxError("segmentCount is currently read-only - ignoring "+e)}},currentSegment:{get:function(){return{x:Dn.x,y:Dn.y}},set:function(e){throw new SyntaxError("currentSegment is currently read-only - ignoring "+e)}},contentContainerNode:{get:function(){return Tn},set:function(e){throw new SyntaxError("contentContainerNode is currently read-only - ignoring "+e)}}}),En},FTScroller.prototype.getPrependedHTML=function(e,n,t){t||(t="object"==typeof FTScrollerOptions&&FTScrollerOptions.hwAccelerationClass?FTScrollerOptions.hwAccelerationClass:"ftscroller_hwaccelerated");var r='<div class="ftscroller_container">';return e||(r+='<div class="ftscroller_x '+t+'">'),n||(r+='<div class="ftscroller_y '+t+'">'),r},FTScroller.prototype.getAppendedHTML=function(e,n,t,r){t||(t="object"==typeof FTScrollerOptions&&FTScrollerOptions.hwAccelerationClass?FTScrollerOptions.hwAccelerationClass:"ftscroller_hwaccelerated");var o="";return e||(o+="</div>"),n||(o+="</div>"),r&&(e||(o+='<div class="ftscroller_scrollbar ftscroller_scrollbarx '+t+'"><div class="ftscroller_scrollbarinner"></div></div>'),n||(o+='<div class="ftscroller_scrollbar ftscroller_scrollbary '+t+'"><div class="ftscroller_scrollbarinner"></div></div>')),o+="</div>"}}(),function(){"use strict";function e(e,n){throw new RangeError('"'+e+'" must be a number between 0 and 1. Got '+n+" instead.")}CubicBezier=function(n,t,r,o){n>=0&&1>=n||e("p1x",n),t>=0&&1>=t||e("p1y",t),r>=0&&1>=r||e("p2x",r),o>=0&&1>=o||e("p2y",o),this._p1={x:n,y:t},this._p2={x:r,y:o}},CubicBezier.prototype._getCoordinateForT=function(e,n,t){var r=3*n,o=3*(t-n)-r,i=1-r-o;return((i*e+o)*e+r)*e},CubicBezier.prototype._getCoordinateDerivateForT=function(e,n,t){var r=3*n,o=3*(t-n)-r,i=1-r-o;return(3*i*e+2*o)*e+r},CubicBezier.prototype._getTForCoordinate=function(e,n,t,r){if(!isFinite(r)||0>=r)throw new RangeError('"epsilon" must be a number greater than 0.');var o,i,l,s;for(o=e,i=0;8>i;i+=1){if(l=this._getCoordinateForT(o,n,t)-e,Math.abs(l)<r)return o;if(s=this._getCoordinateDerivateForT(o,n,t),Math.abs(s)<1e-6)break;o-=l/s}o=e;var a=0,c=1;if(a>o)return a;if(o>c)return c;for(;c>a;){if(l=this._getCoordinateForT(o,n,t),Math.abs(l-e)<r)return o;e>l?a=o:c=o,o=.5*(c-a)+a}return o},CubicBezier.prototype.getPointForT=function(n){return 0===n||1===n?{x:n,y:n}:((0>n||n>1)&&e("t",n),{x:this._getCoordinateForT(n,this._p1.x,this._p2.x),y:this._getCoordinateForT(n,this._p1.y,this._p2.y)})},CubicBezier.prototype.getTForX=function(e,n){return this._getTForCoordinate(e,this._p1.x,this._p2.x,n)},CubicBezier.prototype.getTForY=function(e,n){return this._getTForCoordinate(e,this._p1.y,this._p2.y,n)},CubicBezier.prototype._getAuxPoints=function(n){(0>=n||n>=1)&&e("t",n);var t={x:n*this._p1.x,y:n*this._p1.y},r={x:this._p1.x+n*(this._p2.x-this._p1.x),y:this._p1.y+n*(this._p2.y-this._p1.y)},o={x:this._p2.x+n*(1-this._p2.x),y:this._p2.y+n*(1-this._p2.y)},i={x:t.x+n*(r.x-t.x),y:t.y+n*(r.y-t.y)},l={x:r.x+n*(o.x-r.x),y:r.y+n*(o.y-r.y)},s={x:i.x+n*(l.x-i.x),y:i.y+n*(l.y-i.y)};return{i0:t,i1:r,i2:o,j0:i,j1:l,k:s}},CubicBezier.prototype.divideAtT=function(n){if((0>n||n>1)&&e("t",n),0===n||1===n){var t=[];return t[n]=CubicBezier.linear(),t[1-n]=this.clone(),t}var r={},o={},i=this._getAuxPoints(n),l=i.i0,s=i.i2,a=i.j0,c=i.j1,u=i.k,d=u.x,p=u.y;return r.p1={x:l.x/d,y:l.y/p},r.p2={x:a.x/d,y:a.y/p},o.p1={x:(c.x-d)/(1-d),y:(c.y-p)/(1-p)},o.p2={x:(s.x-d)/(1-d),y:(s.y-p)/(1-p)},[new CubicBezier(r.p1.x,r.p1.y,r.p2.x,r.p2.y),new CubicBezier(o.p1.x,o.p1.y,o.p2.x,o.p2.y)]},CubicBezier.prototype.divideAtX=function(n,t){(0>n||n>1)&&e("x",n);var r=this.getTForX(n,t);return this.divideAtT(r)},CubicBezier.prototype.divideAtY=function(n,t){(0>n||n>1)&&e("y",n);var r=this.getTForY(n,t);return this.divideAtT(r)},CubicBezier.prototype.clone=function(){return new CubicBezier(this._p1.x,this._p1.y,this._p2.x,this._p2.y)},CubicBezier.prototype.toString=function(){return"cubic-bezier("+[this._p1.x,this._p1.y,this._p2.x,this._p2.y].join(", ")+")"},CubicBezier.linear=function(){return new CubicBezier},CubicBezier.ease=function(){return new CubicBezier(.25,.1,.25,1)},CubicBezier.linear=function(){return new CubicBezier(0,0,1,1)},CubicBezier.easeIn=function(){return new CubicBezier(.42,0,1,1)},CubicBezier.easeOut=function(){return new CubicBezier(0,0,.58,1)},CubicBezier.easeInOut=function(){return new CubicBezier(.42,0,.58,1)}}(),"undefined"!=typeof define&&define.amd?define(function(){"use strict";return{FTScroller:FTScroller,CubicBezier:CubicBezier}}):"undefined"!=typeof module&&module.exports&&(module.exports=function(e,n){"use strict";return new FTScroller(e,n)},module.exports.FTScroller=FTScroller,module.exports.CubicBezier=CubicBezier);