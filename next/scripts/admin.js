"use strict";function Delegate(e){this.listenerMap=[{},{}],e&&this.root(e),this.handle=Delegate.prototype.handle.bind(this)}function matchesTag(e,t){return e.toLowerCase()===t.tagName.toLowerCase()}function matchesRoot(e,t){return this.rootElement===window?t===document:this.rootElement===t}function matchesId(e,t){return e===t.id}Delegate.prototype.root=function(e){var t,o=this.listenerMap;if(this.rootElement){for(t in o[1])o[1].hasOwnProperty(t)&&this.rootElement.removeEventListener(t,this.handle,!0);for(t in o[0])o[0].hasOwnProperty(t)&&this.rootElement.removeEventListener(t,this.handle,!1)}if(!e||!e.addEventListener)return this.rootElement&&delete this.rootElement,this;this.rootElement=e;for(t in o[1])o[1].hasOwnProperty(t)&&this.rootElement.addEventListener(t,this.handle,!0);for(t in o[0])o[0].hasOwnProperty(t)&&this.rootElement.addEventListener(t,this.handle,!1);return this},Delegate.prototype.captureForType=function(e){return["blur","error","focus","load","resize","scroll"].indexOf(e)!==-1},Delegate.prototype.on=function(e,t,o,r){var n,a,s,l;if(!e)throw new TypeError("Invalid event type: "+e);if("function"==typeof t&&(r=o,o=t,t=null),void 0===r&&(r=this.captureForType(e)),"function"!=typeof o)throw new TypeError("Handler must be a type of Function");return n=this.rootElement,a=this.listenerMap[r?1:0],a[e]||(n&&n.addEventListener(e,this.handle,r),a[e]=[]),t?/^[a-z]+$/i.test(t)?(l=t,s=matchesTag):/^#[a-z0-9\-_]+$/i.test(t)?(l=t.slice(1),s=matchesId):(l=t,s=matches):(l=null,s=matchesRoot.bind(this)),a[e].push({selector:t,handler:o,matcher:s,matcherParam:l}),this},Delegate.prototype.off=function(e,t,o,r){var n,a,s,l,i;if("function"==typeof t&&(r=o,o=t,t=null),void 0===r)return this.off(e,t,o,!0),this.off(e,t,o,!1),this;if(s=this.listenerMap[r?1:0],!e){for(i in s)s.hasOwnProperty(i)&&this.off(i,t,o);return this}if(!(l=s[e])||!l.length)return this;for(n=l.length-1;n>=0;n--)a=l[n],t&&t!==a.selector||o&&o!==a.handler||l.splice(n,1);return l.length||(delete s[e],this.rootElement&&this.rootElement.removeEventListener(e,this.handle,r)),this},Delegate.prototype.handle=function(e){var t,o,r,n,a,s,l=e.type,i=[];if(e.ftLabsDelegateIgnore!==!0){switch(s=e.target,3===s.nodeType&&(s=s.parentNode),r=this.rootElement,e.eventPhase||(e.target!==e.currentTarget?3:2)){case 1:i=this.listenerMap[1][l];break;case 2:this.listenerMap[0]&&this.listenerMap[0][l]&&(i=i.concat(this.listenerMap[0][l])),this.listenerMap[1]&&this.listenerMap[1][l]&&(i=i.concat(this.listenerMap[1][l]));break;case 3:i=this.listenerMap[0][l]}for(o=i.length;s&&o;){for(t=0;t<o&&(n=i[t]);t++)if(n.matcher.call(s,n.matcherParam,s)&&(a=this.fire(e,s,n)),a===!1)return e.ftLabsDelegateIgnore=!0,void e.preventDefault();if(s===r)break;o=i.length,s=s.parentElement}}},Delegate.prototype.fire=function(e,t,o){return o.handler.call(t,e,t)};var matches=function(e){if(e){var t=e.prototype;return t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector}}(Element);Delegate.prototype.destroy=function(){this.off(),this.root()},function(){function e(){var e=new XMLHttpRequest;e.open("GET",window.userInfo),e.onload=function(){if(200===e.status){var t=JSON.parse(e.responseText);console.log(t);for(var o="",r=Object.keys(t),n=0;n<r.length;n++){var a=r[n];o+='<tr data-user-id="'+a+'"><td class="o-table__cell--numeric"><input type="checkbox"></td><td class="o-table__cell--numeric">'+t[a].email+'</td><td class="o-table__cell--numeric">'+t[a].user_name+'</td><td class="o-table__cell--numeric"><a class="remove-user">Remove</a></td></tr>'}var s="";s+='<table class="o-table o-table--horizontal-lines o-table--responsive-overflow" data-o-component="o-table" data-o-table-responsive="overflow">',s+="<thead>",s+="    <tr>",s+='        <th data-column-default-sort="ascending" scope="col" role="columnheader" data-o-table-data-type="number" class="o-forms-input--checkbox"><input type="checkbox"></th>',s+='        <th data-column-default-sort="ascending" scope="col" role="columnheader" data-o-table-data-type="number">Email</th>',s+='        <th data-column-width scope="col" role="columnheader" data-o-table-data-type="number">Name</th>',s+='        <th data-column-width scope="col" role="columnheader" data-o-table-data-type="number"><a class="remove-user">Remove</a></th>',s+="    </tr>",s+="</thead>",s+="<tbody>",s+=o,s+="</tbody>",s+="</table>",document.querySelector(".o-table-scroll-wrapper").innerHTML=s}else console.log("Request failed.  Returned status of "+e.status)},e.send()}var t=new Delegate(document.body);t.on("click",".remove-user",function(){var t,o=this.parentElement.tagName,r=[];if("TD"===o)t=this.closest("tr").querySelector("td:nth-child(2)").innerHTML,r=[t];else{if("TH"!==o)return void console.log("The tag is "+o);for(var n=this.closest("table").querySelectorAll("tbody tr"),a=0;a<n.length;a++){var s=n[a];s.querySelector("td input").checked&&(t=s.querySelector("td:nth-child(2)").innerHTML,r.push(t))}}var l=r.join("\n");console.log(l);var i=new XMLHttpRequest;i.open("POST","/index.php/btob/deluser"),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.onload=function(){200===i.status&&i.responseText?(console.log("removed!"),e()):alert("Something is wrong. Please try later! ")};var c=["email_list="+l].join("&");i.send(encodeURI(c))}),t.on("change",".inputfile",function(){var e=this.value.replace(/^.*\\/g,""),t=document.querySelector(".inputfile-label"),o=t.innerHTML;t.innerHTML=e?e:o}),t.on("change",".o-table th input[type=checkbox]",function(){var e;e=!!this.checked;for(var t=document.querySelectorAll(".o-table tbody input[type=checkbox]"),o=0;o<t.length;o++){t[o].checked=e}}),t.on("submit","form",function(){var t=new FormData(this);t.append("vip_type","premium");var o=new XMLHttpRequest;return o.onload=function(){alert("Your data is successfully submited. Now let us verify the response! "),console.log(o.responseText),e()},o.onerror=function(){alert("There is an error on the server side. Please try later! ")},o.open("POST",this.action),o.send(t),!1}),e()}();