var FTScroller,CubicBezier;(function(){"use strict";var e=false;var t=window.navigator.msPointerEnabled;var n=!t&&(window.propertyIsEnumerable("ontouchstart")||window.document.hasOwnProperty("ontouchstart"));var r=!window.hasOwnProperty("ArrayBuffer");var i=window.Selection&&window.Selection.prototype.removeAllRanges;var s,o,u;if(document.createElement("div").style.transform!==undefined){s="";o="";u="transform"}else if(window.opera&&Object.prototype.toString.call(window.opera)==="[object Opera]"){s="-o-";o="O";u="OTransform"}else if(document.documentElement.style.MozTransform!==undefined){s="-moz-";o="Moz";u="MozTransform"}else if(document.documentElement.style.webkitTransform!==undefined){s="-webkit-";o="webkit";u="-webkit-transform"}else if(typeof navigator.cpuClass==="string"){s="-ms-";o="ms";u="-ms-transform"}if(!r&&document.createElement("div").style[o+(o?"P":"p")+"erspective"]===undefined){r=true}var a=o+(o?"T":"t")+"ransform";var f=o+(o?"T":"t")+"ransition";var l=r?"translate(":"translate3d(";var c={x:"",y:"0,"};var h={x:",0"+(r?")":",0)"),y:r?")":",0)"};var p=.998;var d=.01;(function(){var e=document.getElementsByTagName("head")[0]||document.documentElement;var t=document.createElement("style");var n;var i;t.type="text/css";if(r){n=s+"transform-style: preserve-3d;"}else{n=s+"transform: translateZ(0);"}i=[".ftscroller_scrolling { "+s+"user-select: none; cursor: all-scroll !important }",".ftscroller_container { overflow: hidden; position: relative; max-height: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); -ms-touch-action: none }",".ftscroller_hwaccelerated { "+n+" }",".ftscroller_x, .ftscroller_y { position: relative; min-width: 100%; min-height: 100%; overflow: hidden }",".ftscroller_x { display: inline-block }",".ftscroller_scrollbar { pointer-events: none; position: absolute; width: 5px; height: 5px; border: 1px solid rgba(255, 255, 255, 0.15); -webkit-border-radius: 3px; border-radius: 6px; opacity: 0; "+s+"transition: opacity 350ms; z-index: 10 }",".ftscroller_scrollbarx { bottom: 2px; left: 2px }",".ftscroller_scrollbary { right: 2px; top: 2px }",".ftscroller_scrollbarinner { height: 100%; background: rgba(0,0,0,0.5); -webkit-border-radius: 2px; border-radius: 4px / 6px }",".ftscroller_scrolling .ftscroller_scrollbar { opacity: 1; "+s+"transition: none; -o-transition: all 0 none }",".ftscroller_scrolling .ftscroller_container .ftscroller_scrollbar { opacity: 0 }"];if(t.styleSheet){t.styleSheet.cssText=i.join("\n")}else{t.appendChild(document.createTextNode(i.join("\n")))}e.insertBefore(t,e.firstChild)})();FTScroller=function(r,v){var m;var g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X,V,$,J,K,Q,G,Y,Z,et,tt,nt,rt,it,st,ot,ut,at,ft,lt;var ct={scrollbars:true,scrollingX:true,scrollingY:true,scrollBoundary:1,scrollResponseBoundary:1,alwaysScroll:false,contentWidth:undefined,contentHeight:undefined,snapping:false,snapSizeX:undefined,snapSizeY:undefined,paginatedSnap:false,bouncing:true,updateOnChanges:true,updateOnWindowResize:false,baseAlignments:{x:-1,y:-1},windowScrollingActiveFlag:undefined,hwAccelerationClass:"ftscroller_hwaccelerated",enableRequestAnimationFrameSupport:true,maxFlingDuration:1e3};var ht;var pt=this;var dt=r;var vt;var mt;var gt={x:null,y:null};var yt={x:null,y:null};var bt={container:{x:null,y:null},content:{x:null,y:null,rawX:null,rawY:null},scrollEnd:{x:null,y:null}};var wt={x:false,y:false,userX:false,userY:false};var Et={x:0,y:0};var St={x:0,y:0};var xt=false;var Tt=0;var Nt=false;var Ct=false;var kt=false;var Lt=false;var At=false;var Ot={x:0,y:0};var Mt={x:0,y:0};var _t={x:null,y:null};var Dt=false;var Pt=[];var Ht=false;var Bt={};var jt={x:true,y:true};var Ft={x:0,y:0,t:0};var It={x:0,y:0};var qt=[];var Rt=new CubicBezier(.1,.4,.3,1);var Ut=new CubicBezier(.7,0,.9,.6);var zt=Rt.divideAtT(.97)[0];var Wt=new CubicBezier(0,.5,.5,1);var Xt=false;var Vt=false;var $t=false;var Jt={x:0,y:0};var Kt=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||false;var Qt=window.cancelAnimationFrame||window.cancelRequestAnimationFrame||window.mozCancelAnimationFrame||window.mozCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.msCancelAnimationFrame||window.msCancelRequestAnimationFrame||false;var Gt={scrollstart:[],scroll:[],scrollend:[],segmentwillchange:[],segmentdidchange:[],reachedstart:[],reachedend:[],scrollinteractionend:[]};var Yt;if(typeof FTScrollerOptions==="object"&&FTScrollerOptions){for(m in FTScrollerOptions){if(FTScrollerOptions.hasOwnProperty(m)&&ct.hasOwnProperty(m)){ct[m]=FTScrollerOptions[m]}}}if(v){for(m in v){if(v.hasOwnProperty(m)&&ct.hasOwnProperty(m)){ct[m]=v[m]}}if(v.hasOwnProperty("snapSizeX")&&!isNaN(v.snapSizeX)){wt.userX=wt.x=v.snapSizeX}if(v.hasOwnProperty("snapSizeY")&&!isNaN(v.snapSizeY)){wt.userY=wt.y=v.snapSizeY}if(v.contentWidth&&v.contentHeight){v.updateOnChanges=false}}ct.scrollResponseBoundary=Math.min(ct.scrollBoundary,ct.scrollResponseBoundary);if(ct.scrollingX){Bt.x=true}if(ct.scrollingY){Bt.y=true}g=function(n){var r,i;J(false);$();if(Xt){window.clearTimeout(Xt);Xt=false}for(r=0,i=Pt.length;r<i;r=r+1){window.clearTimeout(Pt[r])}Pt.length=0;if(n&&dt){while(mt.firstChild){dt.appendChild(mt.firstChild)}dt.removeChild(vt)}dt=null;vt=null;mt=null;gt.x=null;gt.y=null;yt.x=null;yt.y=null;for(r in Gt){if(Gt.hasOwnProperty(r)){Gt[r].length=0}}if(e&&e===pt){e=false;if(ct.windowScrollingActiveFlag){window[ct.windowScrollingActiveFlag]=false}}};y=function(t,n){wt.userX=t;wt.userY=n;wt.x=t;wt.y=n;bt.content.x=Math.ceil(bt.content.rawX/t)*t;bt.content.y=Math.ceil(bt.content.rawY/n)*n;bt.scrollEnd.x=bt.container.x-bt.content.x;bt.scrollEnd.y=bt.container.y-bt.content.y;B();O();F(true)};b=function(t,n,r){var i,s,o,u,a=0,f={};C(Date.now());o={x:-t,y:-n};for(u in Bt){if(Bt.hasOwnProperty(u)){i=o[u];if(i===false){continue}i=Math.min(0,Math.max(bt.scrollEnd[u],i));if(ct.snapping&&wt[u]){i=Math.round(i/wt[u])*wt[u]}s=r||0;if(s===true){s=Math.sqrt(Math.abs(Ot[u]-i))*20}I(u,i,s);f[u]=i;a=Math.max(a,s)}}if(Ot.x!==o.x||Ot.y!==o.y){Ht=true;R("scrollstart",{scrollLeft:-Ot.x,scrollTop:-Ot.y})}if(a){Pt.push(setTimeout(function(){var e;for(e in f){if(f.hasOwnProperty(e)){Mt[e]=f[e]}}k()},a))}else{k()}R("scroll",{scrollLeft:-Ot.x,scrollTop:-Ot.y})};w=function(t,n,r){b(parseFloat(t)-Ot.x,parseFloat(n)-Ot.y,r)};E=function(t,n,r){v.contentWidth=t||v.contentWidth;v.contentHeight=n||v.contentHeight;H(!!r)};S=function(t,n){if(!Gt.hasOwnProperty(t)){return false}Gt[t].push(n);return true};x=function(t,n){var r;if(!Gt.hasOwnProperty(t)){return false}for(r=Gt[t].length;r>=0;r=r-1){if(Gt[t][r]===n){Gt[t].splice(r,1)}}return true};T=function(t,n,r,i){var s=Lt;if(r<=0){r=Date.now()}if(ct.windowScrollingActiveFlag&&window[ct.windowScrollingActiveFlag]){return false}if(s){L()}else{Dt=false}Ft.x=t;Ft.y=n;Ft.t=r;Jt.x=Mt.x;Jt.y=Mt.y;qt.length=0;qt.push({x:t,y:n,t:r});if(s){N(t,n,r,i,s)}return true};N=function(n,r,s,o,u){var a,f;var l=false;var c={x:n-Ft.x,y:r-Ft.y};var h={x:Ot.x+c.x,y:Ot.y+c.y};var p=W(h);if(s<=0){s=Date.now()}if(!Ct){if(e&&e!==pt){f=true}else if(ct.windowScrollingActiveFlag&&window[ct.windowScrollingActiveFlag]){f=true}if(f){xt=false;ft();if(At){$();if(!O(true)){k(true)}}return}}if(!kt){if(ct.bouncing||u||jt.x&&c.x&&p.x<0||jt.y&&c.y&&p.y<0){o.preventDefault()}if(!(u&&ct.snapping)&&(!jt.x||Math.abs(c.x)<ct.scrollResponseBoundary)&&(!jt.y||Math.abs(c.y)<ct.scrollResponseBoundary)){return}if(!ct.bouncing&&!u&&(!jt.x||!c.x||p.x>0)&&(!jt.y||!c.y||p.y>0)){Dt=true;return}X();kt=true;Ht=true;Lt=true;l=true;At=true}else{o.preventDefault()}if(!Ct){if(u&&ct.snapping||jt.x&&Math.abs(c.x)>=ct.scrollBoundary||jt.y&&Math.abs(c.y)>=ct.scrollBoundary){Ct=true;e=pt;if(ct.windowScrollingActiveFlag){window[ct.windowScrollingActiveFlag]=pt}R("scrollstart",{scrollLeft:-Ot.x,scrollTop:-Ot.y})}}if(i){window.getSelection().removeAllRanges()}for(a in jt){if(jt.hasOwnProperty(a)){if(h[a]>0){h[a]=z(h[a],a)}else if(h[a]<bt.scrollEnd[a]){h[a]=bt.scrollEnd[a]+z(h[a]-bt.scrollEnd[a],a)}if(Kt){Jt[a]=h[a]}else{I(a,h[a])}}}if(l){if(vt.className.indexOf("ftscroller_scrolling")===-1){vt.className+=" ftscroller_scrolling"}}if(Ct){R("scroll",{scrollLeft:-h.x,scrollTop:-h.y});F(false)}qt.push({x:n,y:r,t:s});if(qt.length>30){qt.splice(0,15)}};C=function(n,r){xt=false;ft();$();R("scrollinteractionend",{});if(!Ct){if(!O(true)&&At){k(true)}return}qt[qt.length-1].t=n;Ct=false;kt=false;e=false;if(ct.windowScrollingActiveFlag){window[ct.windowScrollingActiveFlag]=false}Dt=true;if(r){r.preventDefault()}if(!A()&&!O()){k()}};k=function(t){var n,r,i;Lt=false;At=false;kt=false;vt.className=vt.className.replace(/ ?ftscroller_scrolling/g,"");Ot.x=Mt.x;Ot.y=Mt.y;if(!t){R("scroll",{scrollLeft:-Ot.x,scrollTop:-Ot.y});F(true);R("scrollend",{scrollLeft:-Ot.x,scrollTop:-Ot.y})}for(i in jt){if(jt.hasOwnProperty(i)){gt[i].style[f]="";if(ct.scrollbars){yt[i].style[f]=""}}}for(n=0,r=Pt.length;n<r;n=n+1){window.clearTimeout(Pt[n])}Pt.length=0};L=function(){var t,n,r;Lt=false;j();for(t in jt){if(jt.hasOwnProperty(t)){I(t,Ot[t])}}F(false);for(n=0,r=Pt.length;n<r;n=n+1){window.clearTimeout(Pt[n])}Pt.length=0};A=function(){var t,n,r,i,s,o,u,a,f,l,c,h,v,m,g,y,b,w,E,S;var x=0;var T=false;var N={};if(qt.length===1||xt==="scrollwheel"){return false}for(n in jt){if(jt.hasOwnProperty(n)){c=350;l=0;v=false;h=false;b=undefined;g=zt;i=qt[qt.length-1];s=qt[qt.length-2];for(t=qt.length-3;t>=0;t=t-1){if(i.t-qt[t].t>100){break}s=qt[t]}r=(i[n]-s[n])/(i.t-s.t);if(Math.abs(r)<d){o=0;u=0}else{o=Math.log(d/Math.abs(r))/Math.log(p);u=r*(1-Math.pow(p,o+1))/(1-p)}a=Math.floor(Mt[n]+u);if(!ct.bouncing){if(Mt[n]===0&&a>0){a=0}else if(Mt[n]===bt.scrollEnd[n]&&a<Mt[n]){a=Mt[n]}}if(ct.paginatedSnap&&ct.snapping){w=-Mt[n]/wt[n];if(Et[n]<w){w=Math.floor(w)}else{w=Math.ceil(w)}if(a>-(w-1)*wt[n]){l=a+(w-1)*wt[n]}else if(a<-(w+1)*wt[n]){l=a+(w+1)*wt[n]}else if(Math.abs(r)>d){if(r<0){a=Math.floor(Mt[n]/wt[n])*wt[n]}else{a=Math.ceil(Mt[n]/wt[n])*wt[n]}o=Math.min(ct.maxFlingDuration,o*(a-Mt[n])/u)}}else if(ct.snapping){l=a-Math.round(a/wt[n])*wt[n]}if(a-l>0){l=a;v=true}else if(a-l<bt.scrollEnd[n]){l=a-bt.scrollEnd[n];v=true}if(l){if(v&&ct.bouncing&&u){u=Math.floor(u);if(a>0){E=a-Math.max(0,Mt[n])}else{E=a-Math.min(bt.scrollEnd[n],Mt[n])}S=u-E;if(!u||!o){y=0}else{y=g._getCoordinateForT(g.getTForY((u-E)/u,1/o),g._p1.x,g._p2.x);b=y*o}m=Math.ceil(E/8);if(Math.abs(m)>bt.container[n]/2){if(m<0){m=-Math.floor(bt.container[n]/2)}else{m=Math.floor(bt.container[n]/2)}}if(a>0){h=0}else{h=bt.scrollEnd[n]}if(y===0){o=o/6;a=Mt[n]+S+m;f=o}else{f=(y+(1-y)/6)*o;q(n,Mt[n]+S+m,(1-y)*o/6,Wt,b);g=g.divideAtX(f/o,1/o)[0];o=f;a=Mt[n]+S+m}}else if(u<0&&l<u||u>0&&l>u){a=a-Math.floor(u/2);l=l-Math.floor(u/2);c=Math.sqrt(Math.abs(l))*50;h=a-l;o=350;f=o*.97}else{a=a-l;if(!u){o=c}else if(u<0&&l<0||u>0&&l>0){y=g._getCoordinateForT(g.getTForY((Math.abs(u)-Math.abs(l))/Math.abs(u),1/o),g._p1.x,g._p2.x);g=g.divideAtX(y,1/o)[0];o=Math.round(o*y)}l=0;c=0}}if(a===Mt[n]&&!l){continue}T=true;I(n,a,o,g,b);if(l&&c){q(n,h,c,Ut,f)}x=Math.max(x,l?f+c:o);N[n]=h===false?a:h}}if(T&&x){Pt.push(setTimeout(function(){var e;for(e in N){if(N.hasOwnProperty(e)){Mt[e]=N[e]}}k()},x))}return T};O=function(t){var n;var r=t?100:350;var i=M(Mt);var s=false;for(n in Bt){if(Bt.hasOwnProperty(n)){if(i[n]!==Mt[n]){s=true}}}if(!s){return false}for(n in Bt){if(Bt.hasOwnProperty(n)){I(n,i[n],r)}}Pt.push(setTimeout(function(){Mt=i;k(t)},r));return true};M=function(t){var n;var r={x:0,y:0};for(n in jt){if(jt.hasOwnProperty(n)){if(t[n]>0){r[n]=0;continue}if(t[n]<bt.scrollEnd[n]){r[n]=bt.scrollEnd[n];continue}if(ct.snapping&&wt[n]){r[n]=Math.round(t[n]/wt[n])*wt[n];continue}r[n]=t[n]}}return r};_=function(){var t,n,r;if(D()){return}t=dt.ownerDocument.createDocumentFragment();n=document.createElement("DIV");t.appendChild(n);n.innerHTML=FTScroller.prototype.getPrependedHTML(!ct.scrollingX,!ct.scrollingY,ct.hwAccelerationClass)+FTScroller.prototype.getAppendedHTML(!ct.scrollingX,!ct.scrollingY,ct.hwAccelerationClass,ct.scrollbars);vt=n.firstElementChild;r=vt;if(ct.scrollingX){gt.x=vt.firstElementChild;r=gt.x;if(ct.scrollbars){yt.x=vt.getElementsByClassName("ftscroller_scrollbarx")[0]}}if(ct.scrollingY){gt.y=r.firstElementChild;if(ct.scrollbars){yt.y=vt.getElementsByClassName("ftscroller_scrollbary")[0]}mt=gt.y}else{mt=gt.x}while(dt.firstChild){mt.appendChild(dt.firstChild)}dt.appendChild(vt)};D=function(){var t,n,r,i,s,o,u,a,f;t=dt.firstElementChild;if(!t||t.className.indexOf("ftscroller_container")===-1){return}if(ct.scrollingX){n=t.firstElementChild;if(!n||n.className.indexOf("ftscroller_x")===-1){return}i=n;if(ct.scrollbars){u=t.getElementsByClassName("ftscroller_scrollbarx");if(u){for(a=0,f=u.length;a<f;a=a+1){if(u[a].parentNode===t){s=u[a];break}}}if(!s){return}}}else{i=t}if(ct.scrollingY){r=i.firstElementChild;if(!r||r.className.indexOf("ftscroller_y")===-1){return}if(ct.scrollbars){u=t.getElementsByClassName("ftscroller_scrollbary");if(u){for(a=0,f=u.length;a<f;a=a+1){if(u[a].parentNode===t){o=u[a];break}}}if(!o){return}}}vt=t;if(n){gt.x=n}if(r){gt.y=r}if(s){yt.x=s}if(o){yt.y=o}if(ct.scrollingY){mt=r}else{mt=n}return true};P=function(){if(Xt){window.clearTimeout(Xt)}Xt=setTimeout(function(){H()},100)};H=function(t){var n;if(!vt||!mt){return false}if(Xt){window.clearTimeout(Xt);Xt=false}var r,i,s;C(Date.now());s={x:false,y:false};for(n in s){if(s.hasOwnProperty(n)){if(Mt[n]===0){s[n]=-1}else if(Mt[n]<=bt.scrollEnd[n]){s[n]=1}else if(Mt[n]*2<=bt.scrollEnd[n]+5&&Mt[n]*2>=bt.scrollEnd[n]-5){s[n]=0}}}r=vt.offsetWidth;i=vt.offsetHeight;var o=v.contentWidth||mt.offsetWidth;var u=v.contentHeight||mt.offsetHeight;var a=o;var f=u;var l={x:false,y:false};if(!wt.userX){wt.x=r}if(!wt.userY){wt.y=i}if(ct.snapping){if(wt.userX){a=Math.ceil(a/wt.userX)*wt.userX}else{a=Math.ceil(a/wt.x)*wt.x}if(wt.userY){f=Math.ceil(f/wt.userY)*wt.userY}else{f=Math.ceil(f/wt.y)*wt.y}}if(bt.container.x===r&&bt.container.y===i&&bt.content.x===a&&bt.content.y===f){return}bt.container.x=r;bt.container.y=i;bt.content.x=a;bt.content.rawX=o;bt.content.y=f;bt.content.rawY=u;bt.scrollEnd.x=r-a;bt.scrollEnd.y=i-f;B();for(n in l){if(l.hasOwnProperty(n)){if(bt.container[n]<bt.content[n]){if(Ht&&ct.baseAlignments[n]!==s[n]){continue}}if(ct.baseAlignments[n]===1){l[n]=bt.scrollEnd[n]}else if(ct.baseAlignments[n]===0){l[n]=Math.floor(bt.scrollEnd[n]/2)}else if(ct.baseAlignments[n]===-1){l[n]=0}}}if(ct.scrollingX&&l.x!==false){I("x",l.x,0);Ot.x=l.x}if(ct.scrollingY&&l.y!==false){I("y",l.y,0);Ot.y=l.y}if(!t&&O()){F(true)}};B=function(){if(ct.scrollbars){if(ct.scrollingX){yt.x.style.width=Math.max(6,Math.round(bt.container.x*(bt.container.x/bt.content.x)-4))+"px"}if(ct.scrollingY){yt.y.style.height=Math.max(6,Math.round(bt.container.y*(bt.container.y/bt.content.y)-4))+"px"}}jt={};if(ct.scrollingX&&(bt.content.x>bt.container.x||ct.alwaysScroll)){jt.x=true}if(ct.scrollingY&&(bt.content.y>bt.container.y||ct.alwaysScroll)){jt.y=true}};j=function(){var t,n,r;for(t in jt){if(jt.hasOwnProperty(t)){n=window.getComputedStyle(gt[t],null)[u];r=n.split(", ");if(r.length===6){Ot[t]=parseInt(r[t==="y"?5:4],10)}else{Ot[t]=parseInt(r[t==="y"?13:12],10)}Mt[t]=Ot[t]}}};F=function(t){var n;var r={x:0,y:0};if(!ct.snapping){return}for(n in jt){if(jt.hasOwnProperty(n)){r[n]=Math.max(0,Math.min(Math.ceil(bt.content[n]/wt[n])-1,Math.round(-Mt[n]/wt[n])))}}if(r.x!==St.x||r.y!==St.y){St.x=r.x;St.y=r.y;R("segmentwillchange",{segmentX:r.x,segmentY:r.y})}if(t){if(r.x!==Et.x||r.y!==Et.y){Et.x=r.x;Et.y=r.y;R("segmentdidchange",{segmentX:r.x,segmentY:r.y})}}};I=function(t,n,r,i,o){var u,p=null;if(!gt[t]){return false}if(r){if(!i){i=zt}u=s+"transform "+r+"ms "+i.toString()}else{u=""}gt[t].style[f]=u;if(ct.scrollbars){yt[t].style[f]=u}gt[t].style[a]=l+c[t]+n+"px"+h[t];if(ct.scrollbars){yt[t].style[a]=l+c[t]+ -n*bt.container[t]/bt.content[t]+"px"+h[t]}if(n>=0){p="start"}else if(n<=bt.scrollEnd[t]){p="end"}if(p!==_t[t]){if(p!==null){if(r){Pt.push(setTimeout(function(){R("reached"+p,{axis:t})},o||r))}else{R("reached"+p,{axis:t})}}_t[t]=p}if(!r){Mt[t]=n}};q=function(t,n,r,i,s){Pt.push(setTimeout(function(){I(t,n,r,i)},s))};R=function(t,n){var r,i;n.srcObject=ht;for(r=0,i=Gt[t].length;r<i;r=r+1){try{Gt[t][r](n)}catch(s){if(window.console&&window.console.error){window.console.error(s.message+" ("+s.sourceURL+", line "+s.line+")")}}}};U=function(t){var n,r;var i=lt(t.target);var s=lt(vt);var o={x:"left",y:"top"};var u={x:"width",y:"height"};if(xt!==false){return}for(r in jt){if(jt.hasOwnProperty(r)){n=-Math.round(i[u[r]]/2-Mt[r]+i[o[r]]-s[o[r]]-s[u[r]]/2);n=Math.min(0,Math.max(bt.scrollEnd[r],n));I(r,n,0);Ot[r]=n}}R("scroll",{scrollLeft:-Ot.x,scrollTop:-Ot.y})};z=function(t,n){if(!ct.bouncing){return 0}var r=Math.exp(t/bt.container[n]);return Math.round(bt.container[n]*.6*(r-1)/(r+1))};W=function(t){var n,r;var i={};for(n in t){if(t.hasOwnProperty(n)){r=t[n];if(r>=0){i[n]=r}else if(r>bt.scrollEnd[n]){i[n]=-1}else{i[n]=bt.scrollEnd[n]-r}}}return i};X=function(){if(Kt){$();$t=Kt(V)}};V=function Zt(){var e;$t=Kt(Zt);for(e in jt){if(jt.hasOwnProperty(e)&&Jt[e]!==Mt[e]){I(e,Jt[e])}}};$=function(){if($t===false||!Qt){return}Qt($t);$t=false};J=function(r){var i;if(!vt){return}if(r){vt._ftscrollerToggle=vt.addEventListener}else{vt._ftscrollerToggle=vt.removeEventListener}if(t){vt._ftscrollerToggle("MSPointerDown",tt,true);vt._ftscrollerToggle("MSPointerMove",nt,true);vt._ftscrollerToggle("MSPointerUp",rt,true);vt._ftscrollerToggle("MSPointerCancel",it,true)}else{if(n){vt._ftscrollerToggle("touchstart",K,true);vt._ftscrollerToggle("touchmove",Q,true);vt._ftscrollerToggle("touchend",G,true);vt._ftscrollerToggle("touchcancel",G,true)}vt._ftscrollerToggle("mousedown",Y,true);if(!r){document.removeEventListener("mousemove",Z,true);document.removeEventListener("mouseup",et,true)}}vt._ftscrollerToggle("DOMMouseScroll",ut,false);vt._ftscrollerToggle("mousewheel",ut,false);if(t){if(r){document.addEventListener("click",ot,true)}else{document.removeEventListener("click",ot,true)}}else{vt._ftscrollerToggle("click",ot,true)}if(r){mt.addEventListener("focus",U,true);if(ct.updateOnChanges){if(!Yt){i=window.MutationObserver||window.WebKitMutationObserver||window[o+"MutationObserver"];if(i){Yt=new i(P)}}if(Yt){Yt.observe(mt,{childList:true,characterData:true,subtree:true})}else{mt.addEventListener("DOMSubtreeModified",function(e){if(e&&(e.srcElement===mt||e.srcElement.className.indexOf("ftscroller_")!==-1)){return}P()},true)}mt.addEventListener("load",P,true)}if(ct.updateOnWindowResize){window.addEventListener("resize",P,true)}}else{mt.removeEventListener("focus",U,true);if(Yt){Yt.disconnect()}else{mt.removeEventListener("DOMSubtreeModified",P,true)}mt.removeEventListener("load",P,true);window.removeEventListener("resize",P,true)}delete vt._ftscrollerToggle};K=function(t){var n,r,i;if(xt){for(n=0,r=t.touches.length;n<r;n=n+1){if(t.touches[n].identifier===xt){Tt=n}}return}i=t.touches[0];xt=i.identifier;Tt=0;T(i.clientX,i.clientY,t.timeStamp,t)};Q=function(t){if(xt===false){return}var n=t.touches[Tt];N(n.clientX,n.clientY,t.timeStamp,t)};G=function(t){var n,r;if(t.touches){for(n=0,r=t.touches.length;n<r;n=n+1){if(t.touches[n].identifier===xt){Tt=n;return}}}C(t.timeStamp,t)};Y=function(t){if(t.button&&t.button===2||t.ctrlKey){return}if(vt.setCapture){vt.setCapture()}document.addEventListener("mousemove",Z,true);document.addEventListener("mouseup",et,true);xt=t.button||1;Tt=0;T(t.clientX,t.clientY,t.timeStamp,t)};Z=function(t){if(!xt){return}N(t.clientX,t.clientY,t.timeStamp,t)};et=function en(e){if(e.button&&e.button!==xt){return}document.removeEventListener("mousemove",Z,true);document.removeEventListener("mouseup",en,true);if(vt.releaseCapture){vt.releaseCapture()}C(e.timeStamp,e)};tt=function(t){if(xt){return}xt=t.pointerId;at();T(t.clientX,t.clientY,t.timeStamp,t)};nt=function(t){if(xt!==t.pointerId){return}N(t.clientX,t.clientY,t.timeStamp,t)};rt=function(t){if(xt!==t.pointerId){return}C(t.timeStamp,t)};it=function(t){C(t.timeStamp,t)};st=function(t){C(t.timeStamp,t)};ot=function(t){if(!Dt&&!xt){return true}t.preventDefault();t.stopPropagation();if(!xt){Dt=false}return false};ut=function(n){var r,i;if(xt!=="scrollwheel"){if(xt!==false){return true}xt="scrollwheel";It.x=0;It.y=0;if(!T(n.clientX,n.clientY,Date.now(),n)){return}}if(n.wheelDelta){if(n.wheelDeltaX){r=n.wheelDeltaX/2;i=n.wheelDeltaY/2}else{r=0;i=n.wheelDelta/2}}else{if(n.axis&&n.axis===n.HORIZONTAL_AXIS){r=n.detail*-10;i=0}else{r=0;i=n.detail*-10}}if(!ct.scrollingY&&!r){r=i;i=0}It.x=Math.round(It.x+r);It.y=Math.round(It.y+i);N(Ft.x+It.x,Ft.y+It.y,n.timeStamp,n);if(Vt){clearTimeout(Vt)}Vt=setTimeout(function(){xt=false;ft();Ct=false;kt=false;e=false;if(ct.windowScrollingActiveFlag){window[ct.windowScrollingActiveFlag]=false}$();if(!O()){k()}},300)};at=function(){if(Nt||xt===false||xt==="scrollwheel"){return}if(t){vt.msSetPointerCapture(xt);vt.addEventListener("MSLostPointerCapture",st,false)}Nt=true};ft=function(){if(!Nt){return}if(t){vt.removeEventListener("MSLostPointerCapture",st,false);vt.msReleasePointerCapture(xt)}Nt=false};lt=function(t){if(t.getBoundingClientRect){return t.getBoundingClientRect()}var n=0,r=0,i=t;while(i){n=n+i.offsetLeft-i.scrollLeft;r=r+i.offsetTop-i.scrollTop;i=i.offsetParent}return{left:n,top:r,width:t.offsetWidth,height:t.offsetHeight}};_();H();J(true);ht={destroy:g,setSnapSize:y,scrollTo:b,scrollBy:w,updateDimensions:E,addEventListener:S,removeEventListener:x,get scrollHeight(){return bt.content.y},set scrollHeight(e){throw new SyntaxError("scrollHeight is currently read-only - ignoring "+e)},get scrollLeft(){return-Mt.x},set scrollLeft(e){b(e,false,false);return-Mt.x},get scrollTop(){return-Mt.y},set scrollTop(e){b(false,e,false);return-Mt.y},get scrollWidth(){return bt.content.x},set scrollWidth(e){throw new SyntaxError("scrollWidth is currently read-only - ignoring "+e)},get segmentCount(){if(!ct.snapping){return{x:NaN,y:NaN}}return{x:Math.ceil(bt.content.x/wt.x),y:Math.ceil(bt.content.y/wt.y)}},set segmentCount(e){throw new SyntaxError("segmentCount is currently read-only - ignoring "+e)},get currentSegment(){return{x:St.x,y:St.y}},set currentSegment(e){throw new SyntaxError("currentSegment is currently read-only - ignoring "+e)},get contentContainerNode(){return mt},set contentContainerNode(e){throw new SyntaxError("contentContainerNode is currently read-only - ignoring "+e)}};return ht};FTScroller.prototype.getPrependedHTML=function(e,t,n){if(!n){if(typeof FTScrollerOptions==="object"&&FTScrollerOptions.hwAccelerationClass){n=FTScrollerOptions.hwAccelerationClass}else{n="ftscroller_hwaccelerated"}}var r='<div class="ftscroller_container">';if(!e){r+='<div class="ftscroller_x '+n+'">'}if(!t){r+='<div class="ftscroller_y '+n+'">'}return r};FTScroller.prototype.getAppendedHTML=function(e,t,n,r){if(!n){if(typeof FTScrollerOptions==="object"&&FTScrollerOptions.hwAccelerationClass){n=FTScrollerOptions.hwAccelerationClass}else{n="ftscroller_hwaccelerated"}}var i="";if(!e){i+="</div>"}if(!t){i+="</div>"}if(r){if(!e){i+='<div class="ftscroller_scrollbar ftscroller_scrollbarx '+n+'"><div class="ftscroller_scrollbarinner"></div></div>'}if(!t){i+='<div class="ftscroller_scrollbar ftscroller_scrollbary '+n+'"><div class="ftscroller_scrollbarinner"></div></div>'}}i+="</div>";return i}})();(function(){"use strict";CubicBezier=function(e,t,n,r){if(!(e>=0&&e<=1)){throw new RangeError('"p1x" must be a number between 0 and 1. '+"Got "+e+"instead.")}if(!(t>=0&&t<=1)){throw new RangeError('"p1y" must be a number between 0 and 1. '+"Got "+t+"instead.")}if(!(n>=0&&n<=1)){throw new RangeError('"p2x" must be a number between 0 and 1. '+"Got "+n+"instead.")}if(!(r>=0&&r<=1)){throw new RangeError('"p2y" must be a number between 0 and 1. '+"Got "+r+"instead.")}this._p1={x:e,y:t};this._p2={x:n,y:r}};CubicBezier.prototype._getCoordinateForT=function(e,t,n){var r=3*t,i=3*(n-t)-r,s=1-r-i;return((s*e+i)*e+r)*e};CubicBezier.prototype._getCoordinateDerivateForT=function(e,t,n){var r=3*t,i=3*(n-t)-r,s=1-r-i;return(3*s*e+2*i)*e+r};CubicBezier.prototype._getTForCoordinate=function(e,t,n,r){if(!isFinite(r)||r<=0){throw new RangeError('"epsilon" must be a number greater than 0.')}var i,s,o,u;for(i=e,s=0;s<8;s=s+1){o=this._getCoordinateForT(i,t,n)-e;if(Math.abs(o)<r){return i}u=this._getCoordinateDerivateForT(i,t,n);if(Math.abs(u)<1e-6){break}i=i-o/u}i=e;var a=0,f=1;if(i<a){return a}if(i>f){return f}while(a<f){o=this._getCoordinateForT(i,t,n);if(Math.abs(o-e)<r){return i}if(e>o){a=i}else{f=i}i=(f-a)*.5+a}return i};CubicBezier.prototype.getPointForT=function(e){if(e===0||e===1){return{x:e,y:e}}if(e<0||e>1){throw new RangeError('"t" must be a number between 0 and 1'+"Got "+e+" instead.")}return{x:this._getCoordinateForT(e,this._p1.x,this._p2.x),y:this._getCoordinateForT(e,this._p1.y,this._p2.y)}};CubicBezier.prototype.getTForX=function(e,t){return this._getTForCoordinate(e,this._p1.x,this._p2.x,t)};CubicBezier.prototype.getTForY=function(e,t){return this._getTForCoordinate(e,this._p1.y,this._p2.y,t)};CubicBezier.prototype._getAuxPoints=function(e){if(e<=0||e>=1){throw new RangeError('"t" must be greater than 0 and lower than 1')}var t={x:e*this._p1.x,y:e*this._p1.y},n={x:this._p1.x+e*(this._p2.x-this._p1.x),y:this._p1.y+e*(this._p2.y-this._p1.y)},r={x:this._p2.x+e*(1-this._p2.x),y:this._p2.y+e*(1-this._p2.y)};var i={x:t.x+e*(n.x-t.x),y:t.y+e*(n.y-t.y)},s={x:n.x+e*(r.x-n.x),y:n.y+e*(r.y-n.y)};var o={x:i.x+e*(s.x-i.x),y:i.y+e*(s.y-i.y)};return{i0:t,i1:n,i2:r,j0:i,j1:s,k:o}};CubicBezier.prototype.divideAtT=function(e){if(e<0||e>1){throw new RangeError('"t" must be a number between 0 and 1. '+"Got "+e+" instead.")}if(e===0||e===1){var t=[];t[e]=CubicBezier.linear();t[1-e]=this.clone();return t}var n={},r={},i=this._getAuxPoints(e);var s=i.i0,o=i.i2,u=i.j0,a=i.j1,f=i.k;var l=f.x,c=f.y;n.p1={x:s.x/l,y:s.y/c};n.p2={x:u.x/l,y:u.y/c};r.p1={x:(a.x-l)/(1-l),y:(a.y-c)/(1-c)};r.p2={x:(o.x-l)/(1-l),y:(o.y-c)/(1-c)};return[new CubicBezier(n.p1.x,n.p1.y,n.p2.x,n.p2.y),new CubicBezier(r.p1.x,r.p1.y,r.p2.x,r.p2.y)]};CubicBezier.prototype.divideAtX=function(e,t){if(e<0||e>1){throw new RangeError('"x" must be a number between 0 and 1. '+"Got "+e+" instead.")}var n=this.getTForX(e,t);return this.divideAtT(n)};CubicBezier.prototype.divideAtY=function(e,t){if(e<0||e>1){throw new RangeError('"y" must be a number between 0 and 1. '+"Got "+e+" instead.")}var n=this.getTForY(e,t);return this.divideAtT(n)};CubicBezier.prototype.clone=function(){return new CubicBezier(this._p1.x,this._p1.y,this._p2.x,this._p2.y)};CubicBezier.prototype.toString=function(){return"cubic-bezier("+[this._p1.x,this._p1.y,this._p2.x,this._p2.y].join(", ")+")"};CubicBezier.linear=function(){return new CubicBezier};CubicBezier.ease=function(){return new CubicBezier(.25,.1,.25,1)};CubicBezier.linear=function(){return new CubicBezier(0,0,1,1)};CubicBezier.easeIn=function(){return new CubicBezier(.42,0,1,1)};CubicBezier.easeOut=function(){return new CubicBezier(0,0,.58,1)};CubicBezier.easeInOut=function(){return new CubicBezier(.42,0,.58,1)}})();if(typeof module==="object"&&module.exports){module.exports=function(e,t){"use strict";return new FTScroller(e,t)};module.exports.FTScroller=FTScroller;module.exports.CubicBezier=CubicBezier}