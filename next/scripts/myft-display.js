function filterMyFTItems(){function e(e){var r=document.querySelector(".list-my-ft .items .no-image .item-lead");if(r){r.innerHTML=e;for(var l=0;l<t.length;l++){t[l].style.display="block";var a=t[l].previousElementSibling;a&&l>0&&(a.style.display="block")}}}var t=document.querySelectorAll(".list-my-ft .item-container");if(!localStorage)return void alert("亲爱的读者，您的浏览器不支持localStorage，请您更换现代浏览器来使用关注的功能。");var r=localStorage.getItem("my-ft-follow"),l=JSON.parse(r)||null,a=!1;if(null===l)a=!0;else{var o=0;for(var i in l)l.hasOwnProperty(i)&&"object"==typeof l[i]&&l[i].length>0&&(o+=l[i].length);o<=0&&(a=!0)}if(a)return void e("亲爱的读者，您还没有关注任何话题。请您浏览下面的内容标题，选择您感兴趣的话题。");for(var n=0,s=0;s<t.length;s++){var f=t[s],y=f.getAttribute("data-keywords")||"";y+=","+(f.getAttribute("data-author")||""),y=y.replace(/,+/g,",").replace(/,$/,"");var c=y.split(",");for(var v in l)if(l.hasOwnProperty(v))for(var m=l[v],u=0;u<m.length;u++)for(var g=0;g<c.length;g++)if(m[u]===c[g]){var d=f.querySelector(".myft-follow");d&&(d.className="myft-follow tick",d.setAttribute("data-tag",m[u]),d.setAttribute("data-type",v),d.innerHTML="已关注");var p=f.querySelector(".item-tag a");p&&(p.innerHTML=m[u],p.href="/"+v+"/"+m[u]);var b=f.previousElementSibling;b&&"XLT LT ST MT PT"===b.className&&n>0&&(b.style.display="block"),f.style.display="block",n+=1;break}}0===n&&e("亲爱的读者，您关注的话题近期没有最新。请您浏览下面的内容标题，选择更多您感兴趣的话题。")}filterMyFTItems();