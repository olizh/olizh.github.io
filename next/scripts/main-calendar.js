function createCalendar(){updateCalendar(new Date)}function updateCalendar(e){if(document.getElementById("archive-calendar")){var t,a,n,i,d,l,r,v,o,c,g,h,u,s,f=new Date;u=e.getMonth()+1,s=e.getFullYear(),a=u-1,n=u+1,0===a?(i=s-1,a=12):i=s,13===n?(d=s+1,n=1):d=s,l=new Date(i+"/"+a+"/1"),r=new Date(d+"/"+n+"/1");var m=navigator.userAgent||navigator.vendor||"",w=/Android/i.test(m)?"http://www.ftchinese.com":"",D="";for(v=1;u===new Date(e.getFullYear()+"/"+u+"/"+v).getMonth()+1;v++){if(1===v)for(c=new Date(e.getFullYear()+"/"+u+"/"+v).getDay()-1,o=0;o<=c;o++)D+="<div>&nbsp;</div>";t=e.getFullYear()+"-"+u+"-"+v,1e4*e.getFullYear()+100*e.getMonth()+v===1e4*f.getFullYear()+100*f.getMonth()+f.getDate()?(g="highlight",h=' href="'+w+"/archiver/"+t+'"'):1e4*e.getFullYear()+100*e.getMonth()+v>1e4*(new Date).getFullYear()+100*(new Date).getMonth()+(new Date).getDate()?(g="grey",h=""):(g="normal",h=' href="'+w+"/archiver/"+t+'"'),D+="<div><a value="+t+' class="'+g+'"'+h+">"+v+"</a></div>"}D+='<div class=clearfloat style="width:300px;height:15px;"></div>';var p='<div id="prev-month-link" class=floatleft><<</div><div id="next-month-link" class=floatright>>></div><div class=month>'+e.getFullYear()+"年"+u+"月</div>";p+="<div class=weekday><div>日</div><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div></div><div class=days>"+D+"</div>",document.getElementById("archive-calendar").innerHTML=p,document.getElementById("prev-month-link").onclick=function(){updateCalendar(l,1)},document.getElementById("next-month-link").onclick=function(){updateCalendar(r,1)}}}createCalendar();