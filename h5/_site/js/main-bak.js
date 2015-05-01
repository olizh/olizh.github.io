/*!
  * $script.js Async loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz, Jacob Thornton 2011
  * License: MIT
  */
(function(a,b,c){typeof c["module"]!="undefined"&&c.module.exports?c.module.exports=b():typeof c["define"]!="undefined"&&c["define"]=="function"&&c.define.amd?define(a,b):c[a]=b()})("$script",function(){function p(a,b){for(var c=0,d=a.length;c<d;++c)if(!b(a[c]))return j;return 1}function q(a,b){p(a,function(a){return!b(a)})}function r(a,b,i){function o(a){return a.call?a():d[a]}function t(){if(!--n){d[m]=1,l&&l();for(var a in f)p(a.split("|"),o)&&!q(f[a],o)&&(f[a]=[])}}a=a[k]?a:[a];var j=b&&b.call,l=j?b:i,m=j?a.join(""):b,n=a.length;return setTimeout(function(){q(a,function(a){if(h[a])return m&&(e[m]=1),h[a]==2&&t();h[a]=1,m&&(e[m]=1),s(!c.test(a)&&g?g+a+".js":a,t)})},0),r}function s(c,d){var e=a.createElement("script"),f=j;e.onload=e.onerror=e[o]=function(){if(e[m]&&!/^c|loade/.test(e[m])||f)return;e.onload=e[o]=null,f=1,h[c]=2,d()},e.async=1,e.src=c,b.insertBefore(e,b.firstChild)}var a=document,b=a.getElementsByTagName("head")[0],c=/^https?:\/\//,d={},e={},f={},g,h={},i="string",j=!1,k="push",l="DOMContentLoaded",m="readyState",n="addEventListener",o="onreadystatechange";return!a[m]&&a[n]&&(a[n](l,function t(){a.removeEventListener(l,t,j),a[m]="complete"},j),a[m]="loading"),r.get=s,r.order=function(a,b,c){(function d(e){e=a.shift(),a.length?r(e,d):r(e,b,c)})()},r.path=function(a){g=a},r.ready=function(a,b,c){a=a[k]?a:[a];var e=[];return!q(a,function(a){d[a]||e[k](a)})&&p(a,function(a){return d[a]})?b():!function(a){f[a]=f[a]||[],f[a][k](b),c&&c(e)}(a.join("|")),r},r},this)

window.__review_panel_script = __review_panel_script = 0;

function noop() {}

var __review_option = {
        "name": "FT商学院", 
        "app_link": "itms-apps://itunes.apple.com/app/ft-shang-xue-yuan/id493892004",
        "comment_link": 'dialog{"url":"http://m.ftchinese.com/forum/mbagym"}'
    };

window.__reviewer = __reviewer = null;
if (navigator.onLine) {
    $script("http://m.ftchinese.com/js/review.js", function() {
        __reviewer = new ftcReview(__review_option);
    });
}

function reviewPanel(e) {
    //e = e || window.event.target || window.event.srcElement;

    if (!navigator.onLine) return;

    // performance was so appalling in iPad 1 that I think it's better to disable it
    if (!event.acceleration) return;

    if (!("ftcReview" in window)) {
        $script("http://m.ftchinese.com/js/review.js");
        return;
    }

    else {
        if (__reviewer == null) {
            __reviewer = new ftcReview(__review_option);
            return;
        }
        else __reviewer.show();       
    }
}



function clickcoursemenu() {
    $(".coursemenu .bigbuttons div,.bookmenu .bigbuttons div").unbind().bind("click",function() {
        if ($(this).attr("book")){
            $(this).addClass("tilt");
            remember = 0;
            window.location.href = $(this).attr("book")+".html?"+themi;
        }
    });
}



function startgame() {
    $("#startscreen").remove();
    $(".fullbody").removeClass("on");$("#bookmenu").addClass("on");
    clickcoursemenu();
    multimenu("coursemenu");
}




function organizepage($el,i) {
    var l = $el.length;
    $el.hide();
    $el.eq(i).show();
    $el.eq(i).prev().show();
    $el.eq(i).next().show();
    $(".menudot span").removeClass("white");
    $(".menudot span").eq(i).addClass("white");
    var t = $el.eq(i).attr("topic");
    $(".menutopic span").removeClass("highlight");
    $(".menutopic span[topic = '"+t+"']").addClass("highlight");	
    gaTrack('UA-1608715-1', 'm.ftchinese.com', '/mbagym/menu/'+i, 'MBA GYM: Menu'+i);
}


function multimenu(theid) {
    var $ani = $("#"+theid);
    var pagenumber = $("#"+theid).find(".bigbuttons").length;
    if (pagenumber>1) {
        $ani.parent().before('<div class = "tap menutopic"></div>');
        $ani.parent().after("<div class = menudot></div>");
        var $bigbuttons = $ani.find(".bigbuttons");
        var lasttopic = "";
        var thistopic;
        for (var i = 0;i<pagenumber;i++) {
            $(".menudot").append("<span>&nbsp;&#149;&nbsp;</span>");
            thistopic = $bigbuttons.eq(i).attr("topic");
            $bigbuttons.eq(i).attr("n",i);
            if (!!thistopic && thistopic != lasttopic) {
                $(".menutopic").append('&nbsp;&nbsp;<span topic = "'+thistopic+'">'+$bigbuttons.eq(i).attr("topic")+'</span>');
                lasttopic = thistopic;
            }
        }
        $(".menutopic span").unbind().bind("click",function(){
            var thtopic = $(this).attr("topic");
            var ntopic = $ani.find(".bigbuttons[topic = '"+thtopic+"']").eq(0).attr("n");
            ntopic = parseInt(ntopic);
            courseSlider.slide(ntopic);
        });
        currentMenu = getvalue(theid);
        if (currentMenu == null) currentMenu = 0;
        currentMenu = parseInt(currentMenu);
        $(".menudot span").eq(currentMenu).addClass("white");
        $bigbuttons.css({"position":"absolute"});
        courseSlider = new Swipe(document.getElementById('courseSlider'),{
            type: "coursemenu",
            startSlide: currentMenu,
            callback: function(event, index, elem) {
                savevalue(theid, index);
            }
        });		
    }
}

function openbook() {
    var bookid = "mbagym";
    if (location.href.indexOf("interactive/")>0) {
        bookid = location.href.replace(/^.*(interactive\/.*$)/g,"/mbagym/$1");
    } else if (location.href.indexOf("photonews/")>0) {
        bookid = location.href.replace(/^.*(photonews\/.*$)/g,"$1");
    } else if (location.href.indexOf(".html")>0) {
        bookid = location.href.replace(/^.*\/([a-zA-Z0-1\_\-]+)\.html.*$/g,"$1");
    } else if (location.href.indexOf("?")>0) {
        bookid = location.href.replace(/^.*\/([a-zA-Z0-1\_\-]+)\?.*$/g,"$1");
    }
    bookid = encodeURIComponent(bookid);
    $("#loadstatus").html("加载内容");
    $("#startbar").animate({width:"15%"},300,function(){
        $("#game").addClass("on");
        var h=$(window).height();
        $("body").css("height",h+"px");
        $("#gamecontent,#swipe").css("height",h+"px");
        h=h-20;
		if (screenType!="small") {h=h-30;}
        $(".articleviewport").css("height",h+"px");
        $("#coverintro").css("height",h+"px");
		coverheight=h;
        //var w=$(window).width();
        //$(".slide,#swipe,#gamecontent,#game").css("width",w+"px");
        
        if ($("#gamecontent .slide .article").length>10) {
            $("#loadstatus").html("有"+$("#gamecontent .slide .article").length+"篇文章要分页处理，请耐心等待...");
        } else {
            $("#loadstatus").html("内容分页处理...");
        }
        $("#startbar").animate({width:"50%"},300,function(){
            paginate();
            $("#startbar").animate({width:"90%"},300,function(){
                $("#loadstatus").html("正在加载效果...");
                bookeffect();
                ce = bookid;
                var k = getvalue(ce);
                var allpages = $("#gamecontent .slide").length;
                $("#startbar").animate({width:"100%"},300,function(){
                    $("#screenstart").remove();
                    setTimeout(function(){
                        if (k != null && k != "" && k >= 0 && k<allpages-1) {openpage(k,1)} else {openpage(0,1)}
                    },150);
                });
            });
        });
    });
}



//利用FT的ColumnFlow插件将长文章分到不同的Slide中，注意里面引用图片的话，要申明图片的min-height，否则排版会出错。
function paginate() {
    //移走所有的script标签，避免排版出错
    $("#gamecontent script").each(function(){$(this).prependTo($("body"));});
    //在动画的地方插入不同的背景，这样不致于空白
    $(".animation").html('<div style = "width:100%;height:100%;display:table;background:#f6e9d8;"><div style = "display:table-cell;vertical-align:middle;text-align:center;font-size:80px;color:#333;font-weight:bold;"></div></div>');
    //插入Topic的Navigation
    $("#game .topicbar").remove();
    $("#booktopbar").after("<div class = topicbar></div>");
    var currenttopic = "";
    var storyid = "";
    var n = 0;
	


    //修复错误的byline
    cleanbyline ();

    //目录页的简介设为黑色字
    $(".slide[topic = '目录'] .contentintro").css("color","#000");


    //遍历所有页面，加上navigation和翻页的效果
    //如果内容在目录页之前，则不进入目录页．
    //这一块需要分开，先把目录页生成，进行一次排序(n1), 再进行分页，再进行一次排序n，并根据n1找到n，对目录页生成的标题添加链接
    var contentpage = 0;
    $("#gamecontent .slide").each(function(i){
        if ($(this).find(".contentcategory").length>0){contentpage = contentpage+1;}
        $(this).attr("n1",i);
        if ($(this).attr("topic") && $(this).attr("topic") != "" && $(this).attr("topic") != currenttopic) {
            currenttopic = $(this).attr("topic");
            $("#game .topicbar").append("<div class = channel><div>"+currenttopic+"</div></div>");
            if (i>0 && currenttopic != "目录"&& currenttopic != "记分卡"&& contentpage == 1 && $(this).find(".contentcategory").length == 0) {
                $("#game .contentcategory").append("<p class = category n1target = "+i+">"+currenttopic+"</p>");
            }
            n = n+1;
        }
		
		//添加底部的滑轨
        //如果采用滑轨，则不需顶部的topicbar（留待修改）
		if ($(this).find("img.headshot").length>0) {
			$("#imageRailInner").append('<div class="rail" n1target = '+i+'><div class="railImage"><div class=railImageTable><div class=railImageCell><img src="'+$(this).find("img.headshot").attr("src")+'"></div></div></div><div class="railText">'+$(this).find(".headline").eq(0).html()+'</div></div>');
		}


        var lead = "";
        if ($(this).find(".excerpt .lead,.article .lead").length>0) {lead = "<div class = contentlead>"+$(this).find(".excerpt .lead,.article .lead").eq(0).html()+"<br><br></div>";}
        if ($(this).find(".excerpt .headline,.article .headline").length>0 && i>0 && currenttopic != "目录" && contentpage == 1 && $(this).find(".contentcategory").length == 0) {
            $("#game .contentcategory").append("<div class=contentheadline n1target = "+i+"><b>"+$(this).find(".headline").html()+"</b>"+lead+"</div>");
        }
    });

    //如果目录页都只有标题没有简介，或者目录页收录的文章超过18篇，差不多令目录页超过两页，则标题全部不用粗体，并且不显示Lead

    if ($("#game .contentcategory .contentlead").length == 0 || ($("#game .contentcategory .contentheadline").length>25 && $("#game .contentcategory .category").length>0)) {
        $("#game .contentcategory .contentlead").remove();
        $("#game .contentcategory .contentheadline b").css("font-weight","normal");
        $("#game .contentcategory .category").slice(1).prepend("<br>");
    }


    //第一个自然段不缩进
    $("#gamecontent .flowedContent").each(function(){
        $(this).find("p").eq(0).css("text-indent",0);
    })

    //.css("text-indent",0);

    //处理小标题
    $("#gamecontent .flowedContent p strong,#gamecontent .flowedContent p b,#gamecontent .flowedContent b p").each(function(){
        var _this = $(this);
        var _paren = _this.parent();
        var w1 = _this.html();
        w1 = w1.replace(/[\r\n\s\<\>a-zA-Z]/g,"");
        var w2 = _this.html();
        w2 = w2.replace(/[\r\n\s\<\>a-zA-Z]/g,"");
        if (w1.length>0 && w2.length-w1.length<4) {
            _this.css("text-indent",0);
            _paren.css({"text-indent":0});
            if (!_paren.hasClass("contentheadline")) {_this.prepend("<br>");}
            _paren.next().css("text-indent",0);
        }
    });


    //First, Paginate article pages using FTColumn Flow
    var articleNumber = $("#gamecontent .slide .article").length;
    var windowWidth = $(window).width();
    var windowHeight = coverheight;
    var pagePadding = windowWidth * 30 / 1024;
    $("#gamecontent .slide .article").each(function (slidenumber) {
        var $currentSlide = $(this).parent();
        $currentSlide.show();
        var $articleviewport = $currentSlide.find(".articleviewport").eq(0);
        var $articletarget = $currentSlide.find(".articletarget").eq(0);
        var $flowedContent = $currentSlide.find(".flowedContent").eq(0);
        var $fixedContent = $currentSlide.find(".fixedContent").eq(0);
        $articleviewport.attr("id","articleviewport"+slidenumber);
        $articletarget.attr("id","articletarget"+slidenumber);
        $flowedContent.attr("id","flowedContent"+slidenumber);
        $fixedContent.attr("id","fixedContent"+slidenumber);

        if ($currentSlide.find(".article").length>0 && $articleviewport.length>0 && $articletarget.length>0) {
            var headline = $currentSlide.find(".headline").html();
            var leadinfo=$currentSlide.find(".lead").html();
            var headcut=$currentSlide.find("img.headshot").attr("src");
            var imageMaxHeight=parseInt(coverheight - 25 * 1.8);
            var fixedContent = "";
            if (screenType=="small" && $currentSlide.find(".articleinfo").length>0) {
                    if (headcut!=null && headcut !="") {
                        fixedContent = '<div class="anchor-top-col-1 headcut" style="display:table;width:300px;height:' + coverheight + 'px;"><div style="display:table-cell;vertical-align:middle;text-align:center;"><img src="' + headcut + '" style="max-width:100%;max-height:' + imageMaxHeight + 'px" /><div style="text-align:center;font-weight:bold;">' + headline + '</div></div></div>'; 
                    }
                    fixedContent += '<div class="anchor-top-col-1 attach-page-2"><div class=headline style="text-align:center;width:300px;font-size:25px;font-weight:bold">' + headline + '</div><div style="color:#777;">' + leadinfo + '</div></div>';
                    //$currentSlide.find(".fixedContent").html();
                    $currentSlide.find(".headcut").css({"height":coverheight+"px"});				
            } else if ($currentSlide.find(".articleinfo").length>0) {
                    fixedContent = '<div class="col-span-2" style="width: 600px;"><div class=headline style="text-align:center;">' + headline + '</div><div class=lead>' + leadinfo + '</div></div>';
                    if (headcut!=null && headcut !="") {
                        fixedContent += '<div class="anchor-bottom-col-2" style="display:table;"><figure style="display:table-cell;text-align:center;height:431px;width:300px;vertical-align:bottom;"><img src="' + headcut + '" style="max-width:100%;" /></figure></div>'; 
                    }
            }
            $currentSlide.find(".flowedContent .datestamp,.flowedContent .byline").remove();
            var cf = new FTColumnflow("articletarget"+slidenumber, "articleviewport"+slidenumber, {
                    columnWidth:            300,
                    viewportWidth:          windowWidth,
                    viewportHeight:         coverheight,
                    columnGap:              21,
                    standardiseLineHeight:  true, // maybe we could remove this
                    pagePadding:            pagePadding,
                    minFixedPadding:        0.5
            });
            cf.flow(document.getElementById("flowedContent"+slidenumber), fixedContent);
            $currentSlide.hide();
            $currentSlide.find(".cf-preload,.cf-preload-fixed,.fixedContent,.flowedContent").remove();
            $currentSlide.find(".articletarget").css("width","100%");
            $currentSlide.find(".cf-page").css("left",0);
            $currentSlide.find(".cf-page").each(function(cp){
                    if (cp>0) {
                            var c = $currentSlide.attr("class");
                            var s = $currentSlide.attr("n1");
                            $currentSlide.clone().attr("allpages",cf.pageCount).attr("thispage",cp).attr("headline",headline).insertAfter($("#gamecontent .slide[n1 = "+s+"]:last"));
                            $("#gamecontent .slide[n1 = "+s+"]:last").find(".cf-render-area").empty().append($(this));
                    }
            });
            $currentSlide.find(".cf-page").slice(1,cf.pageCount).remove();
            $currentSlide.attr("allpages",cf.pageCount).attr("thispage",0);
        }
    });



    //分页成功后进行第二次排序，加上正确的页码
    $("#gamecontent .slide").each(function(i){
        $(this).attr("n",i);
        //如果有storyid，则添加快速链接点
        if ($(this).attr("storyid") && $(this).attr("storyid") != "") {
            storyid = $(this).attr("storyid");
            if ($(this).attr("thispage") == "" || $(this).attr("thispage") == 0) {
                $("#gamecontent [jump = "+storyid+"]").unbind().bind("click",function(){console.log(i);openpage(i)});
            }
        }
    });	

    $("#game .contentcategory [n1target], #contentRail .rail[n1target]").unbind().bind("click",function(){
        var k = $(this).attr("n1target");
        k = $("#gamecontent .slide[n1 = "+k+"]").attr("n");
        openpage (k);
    });




    if ($("#gamecontent .contentheadline p").length <= 0) {$("#gamecontent .contentheadline div").css("font-weight","normal");} 

    if (n>7) {
        n = Math.floor(200/n);
        $("#game .channel div").css("margin-left",n+"px");
    }


    //处理Navigation的点击事件
    $("#game .channel div").unbind().bind("click",function(){
        var k = $(this).html();

        k = $("#gamecontent .slide[topic = "+k+"]").eq(0).attr("n");
        k = parseInt(k);
        openpage(k);
    });
    
    //底部滑轨的右边Margin
    $("#imageRailInner .rail:last").css({"margin-right":"20px"});
    
    //底部滑轨的滑动效果
    scroller = new FTScroller(document.getElementById('imageRail'), {
			scrollingY: false,
			snapping: false,
			scrollbars: false
		});
}



//FT精选集的效果
function bookeffect() {
    allslides = $("#gamecontent .slide").length;

    //设置背景
    $("#game").css("background","#FFF1E0");

    //选择题
    $("#gamecontent .slide .option p").append('<div class = "clickarea tap"></div>');
    $("#gamecontent .slide .option p").unbind().bind("click",function(){onechoice($(this));});


    //Bullet Point
    $("#gamecontent .slide .bullet ul li:first-child").each(function(){bullet($(this));});
    $("#gamecontent .slide .bullet li").unbind().bind(tapstart,function(){bullet($(this));});
    $("#gamecontent .slide .bullet ul").each(function(){
        if ($(this).find("li").length >= 7) {$(this).find("li div").css("height","448px");$(this).find("li").css("margin","15px 0 31px 0");} else if ($(this).find("li").length >= 6) {$(this).find("li div").css("height","430px");} else if ($(this).find("li").length >= 5) {$(this).find("li div").css("height","346px");}
    });



    //连锁反应
    $("#gamecontent .slide .chainreaction").each(function(){chainreaction($(this));});


    //对比图
    $('#gamecontent .slide .JLController > .JLbutton').each(function(){
        $(this).click(function(){
            var el = $(this).attr('trigger');
            $(this).siblings().css({background: '#777'});
            $(this).css({background: el});
            $('.JLsideA, .JLsideB').find('div').hide();
            $('.JLsideA, .JLsideB').find('.'+ el).toggle();
        });
    });
    $('.JLsideA, .JLsideB').find('div:first').show();
    //$('.JLController').find('.JLbutton:first').css({background: $('.JLController').find('.JLbutton:first').attr('trigger')});


    //Tappable Content
    $("#gamecontent .slide [tap]").bind("click",function(){showtap($(this));});
    $("#gamecontent .slide [tap]").css("-webkit-box-shadow","0 0 10px #666");
    $("#gamecontent .slide [tapfixed]").bind("click",function(){showtapfixed($(this));});

    //给图片页加上手势功能
    $("#gamecontent .fullpage .threecolumn").each(function(){
        if ($(this).find(".addhand").eq(0).length>0) {
            addhand($(this),$(this).find(".addhand").eq(0));
            $(this).find(".addhand").bind("click",function(){
                $(this).parent().parent().find(".hand").remove();
            });
        }
    });


    //IOS 6的Video显示有严重Bug，会导致视频在别的地方冒出。因此先将视频放在一个Container里面
    $("#gamecontent .videocontainer").each(function(){
        var w = $(this).parent().css("width").replace(/px/g,"");
        w = parseInt(w);
        if (w == null || w == 0) w = 700;
        var h = w*9/16;
        h = Math.round(h);
        $(this).css({"width":w+"px","height":h+"px"});
    });




    articlepage();
    dragpage();

}


function openpage(pagenumber) {
    pagenumber = parseInt(pagenumber);
    cs = pagenumber;
    slider.slide(cs);
}


function turnpage(direction) {
    var n = cs+direction;
    if (n >= 0&&n <= allslides-1) {
        slider.slide(n);
    }
}

function changepage(pagenumber) {
    pagenumber = parseInt(pagenumber, 10);
    var p = pagenumber+1;
    $("#game .pagenumber span").eq(0).html(p);
    var p = 705*pagenumber/allslides;
    $("#game .pagenow div").eq(0).animate({left:p+"px"},500);
    savevalue(ce,pagenumber);


    var $ani = $("#gamecontent .slide").eq(pagenumber);

    if ($ani.find(".hidetopicbar").length>0){
        $(".topicbar").removeClass("on");
    } else {
        $(".topicbar").addClass("on");
    }


    var currenttopic = $ani.attr("topic");
    $("#game .channel div").removeClass("on");
    $("#game .channel div").css("background","transparent");
    if (currenttopic != null && currenttopic != "") {
        $("#game .channel div").each(function(){

            if ($(this).html() == currenttopic) {
                $(this).addClass("on");
                var b = $ani.css("background-image");
                if (b == ""||b == null||b == "none"){		
                    b = $ani.css("background-color");
                    $(this).css("background-color",b);
                } else {
                    $(this).css("background-image",b);
                }

            }

        });
    }
}

function switchRail() {
	if ($("#contentRail").hasClass("on")==true) {
		closeRail()
	} else {
		$("#contentRail").addClass("on");
	}
}

function openRail() {
	$("#contentRail").addClass("on");
}

function closeRail() {
	$("#contentRail").removeClass("on");
}

function dragpage() {
    $("#game .pagenow").empty();
    $("#game .pagenow").html("<div></div>");
    $("#game .pagenumber span").eq(1).html(allslides);
    //顶部滚动条的拖拽功能
    if (isipad == 1) {
        $("#game .pagenow div").eq(0).each(function(){
            $(this).attr("start",0);
            $(this).attr("move",0);
            var pagewidth = 705;
            this.addEventListener("touchstart", function(e) {
                $("#gamecontent .scrollcontent").stop();
                var thistouch = e.changedTouches[0].clientX;
                $(this).attr("touchstart",thistouch);
                $(this).attr("move",thistouch);
            });



            this.addEventListener("touchmove", function(e) {
                var lasttouch1 = $(this).attr("move");
                lasttouch1 = parseInt(lasttouch1);
                var thistouch = e.changedTouches[0].clientX;
                var ch = lasttouch1-thistouch;
                var theleft = $(this).css("left");
                theleft = theleft.replace(/px/g,"");
                theleft = parseInt(theleft);
                theleft = theleft-ch;
                if (theleft >= 0 && theleft <= pagewidth) {
                    $(this).css("left",theleft+"px");
                    $(this).attr("move",thistouch);
                    var pagenow = theleft*allslides/pagewidth;
                    pagenow = parseInt(pagenow);
                    if (pagenow>allslides-1) {pagenow = allslides-1}
                    $(this).attr("pagenow",pagenow);
                    pagenow = pagenow+1;
                    $("#game .pagenumber span").eq(0).html(pagenow);

                    $("#testhere").html(pagenow);
                }

            });

            this.addEventListener("touchend", function(e) {
                cs = $(this).attr("pagenow");
                cs = parseInt(cs);
                openpage(cs);
            });


        });



        $("#gamecontent .scrollcontent").each(function(){

            $(this).attr("start",0);
            $(this).attr("move",0);
            this.addEventListener("touchstart", function(e) {
                var thistouch = e.changedTouches[0].clientY;
                $(this).attr("touchstart",thistouch);
                $(this).attr("move",thistouch);
                $(this).stop();
            });

            this.addEventListener("touchmove", function(e) {
                var lasttouch1 = $(this).attr("move");
                if (lasttouch1 >= 0) {
                    var thistouch = e.changedTouches[0].clientY;
                    var ch = lasttouch1-thistouch;
                    this.scrollTop += ch;
                }
                $(this).attr("move",thistouch);
            });

            this.addEventListener("touchend", function(e) {
                var newscroll = 0;
                var scrollstart = $(this).attr("start");scrollstart = parseInt(scrollstart);
                var touchstart = $(this).attr("touchstart");touchstart = parseInt(touchstart);
                var move = $(this).attr("move");move = parseInt(move);
                if (touchstart-move>30) {
                    newscroll = scrollstart+530;
                } else if (touchstart-move<-30) {
                    newscroll = 0;
                } else if (touchstart == move) {
                    if (touchstart>400) {newscroll = scrollstart+530} else if (touchstart<200) {newscroll = scrollstart-530;} else {newscroll = scrollstart;}
                } else {
                    newscroll = scrollstart;
                }
                $(this).animate({scrollTop:newscroll+"px"},500,function(){
                    $(this).attr("start",this.scrollTop);
                    if (wpmnow == null) {wpmnow = 140;}
                    var t = 10000*8.57*60*1000/(19*1.7*wpmnow);
                    $(this).animate({scrollTop:" += 10000"},t);
                });
            });


        });


    }


}


function cleanbyline () {
    $("#gamecontent .threecolumn").each(function(i){
        //修正数据库中错误的Byline
        var byline = $(this).find(".byline").html();
        if (byline == null){byline = "";}
        byline = byline.replace(/作者[：]/g,"").replace(/英国《金融时报》/g,"FT");
        $(this).find(".byline").html(byline);
        //,byline = byline+$(this).find(".headline").html();
        //根据作者名配头像
        if ($(this).find("img").length == 0&&$(this).find(".leftcontent").length == 0) {
            if (/格林斯潘/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/greenspan.gif'>");}
            else if (/索罗斯/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/soros.gif'>");}
            else if (/埃利安/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/el-erian.gif'>");}
            else if (/亨德利/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/hendry.jpg'>");}
            else if (/罗奇/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/roach.gif'>");}
            else if (/奥尼尔/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/oneil.gif'>");}
            else if (/奥瑟兹/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/authers.gif'>");}
            else if (/加藤嘉一/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/jiateng.gif'>");}
            else if (/布思/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/booth.jpg'>");}
            else if (/波顿/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/bolton.gif'>");}
            else if (/简世勋/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/king.jpg'>");}
            else if (/格罗斯/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/gross.jpg'>");}
            else if (/布莱尔/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/blair.gif'>");}
            else if (/贝兰克费恩/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/blankfein.gif'>");}
            else if (/布朗/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/brown.gif'>");}
            else if (/布什/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/bush.gif'>");}
            else if (/陈水扁/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/chenshuibian.gif'>");}
            else if (/克林顿/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/clinton.gif'>");}
            else if (/盖茨/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/gates.gif'>");}
            else if (/戈尔巴乔夫/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/gorbachev.gif'>");}
            else if (/与戈尔一起/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/gore.gif'>");}
            else if (/希拉里/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/hillary.gif'>");}
            else if (/乔布斯/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/jobs.gif'>");}
            else if (/李克强/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/likeqiang.gif'>");}
            else if (/梅德韦杰夫/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/medvedev.gif'>");}
            else if (/奥巴马/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/obama.gif'>");}
            else if (/佩奇/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/page.gif'>");}
            else if (/保尔森/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/paulson.gif'>");}
            else if (/加普/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/gapper.gif'>");}
            else if (/普金/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/putin.gif'>");}
            else if (/罗格夫/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/rogoff.gif'>");}
            else if (/鲁比尼/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/roubini.gif'>");}
            else if (/陆克文/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/rudd.gif'>");}
            else if (/施密特/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/schmidt.gif'>");}
            else if (/阿玛蒂亚.*森/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/sen.gif'>");}
            else if (/希勒/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/shiller.gif'>");}
            else if (/辛格/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/singh.gif'>");}
            else if (/斯宾塞/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/spence.gif'>");}
            else if (/斯彭斯/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/spence.gif'>");}
            else if (/斯蒂格利茨/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/stiglitz.gif'>");}
            else if (/萨默斯/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/summers.gif'>");}
            else if (/塔勒布/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/taleb.gif'>");}
            else if (/季莫申科/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/tymoshenko.gif'>");}
            else if (/王岐山/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/wangqishan.gif'>");}
            else if (/温家宝/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/wenjiabao.gif'>");}
            else if (/沃尔夫/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/wolf.gif'>");}
            else if (/皮林/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/pilling.gif'>");}
            else if (/斯蒂芬斯/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/stephens.gif'>");}
            else if (/巴贝尔/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/barber.gif'>");}
            else if (/邰蒂/i.test(byline)) {$(this).find(".datestamp").eq(0).after("<img class = leftimage src = 'picture/skyline/tett.png'>");}
        }


    });
}


function articlepage() {
    $("#gamecontent .slide").each(function(i){


        if ($(this).hasClass("white")){
            $(this).css({"background":"#FFF"});
        } else if ($(this).hasClass("deeppink")){
            $(this).css({"background":"#FFD3BA"});
        } else if ($(this).hasClass("pinkpaper")){
            $(this).css({"background":"url(wall/pinkpaper.png) #FFF1E0"});
        } else if ($(this).hasClass("paper")){
            $(this).css({"background":"url(wall/pinkpaper.png) #FFF1E0"});
        } else if ($(this).hasClass("lightpink")){
            $(this).css({"background":"#F9F0E5"});
        } else if ($(this).hasClass("pinkgrid")){
            $(this).css({"background":"url(wall/pinkgrid.png) #FFF1E0"});
        } else if ($(this).hasClass("dirtypink")){
            $(this).css({"background":"url(wall/dirtypink.png) #FFF1E0"});
        } else if ($(this).hasClass("dirtydark")){
            $(this).css({"background":"url(wall/dirtydark.png) #FFF1E0"});
        } else if ($(this).hasClass("blue")){
            $(this).css({"background":"#1E3043","background-image":"-webkit-gradient(radial,512 374,100,512 374,500,from(#1E4A66),to(#1E3043))"});
        } else if ($(this).hasClass("pink")){
            $(this).css({"background":"#FFF1E0"});
        } else if ($(this).hasClass("green")){
            $(this).css({"background":"#e3dfca"});
        } else if ($(this).hasClass("brown")){
            $(this).css({"background":"#e3d3bc"});
        } else if ($(this).hasClass("egg_shell")){
            $(this).css({"background":"url(wall/pinkpaper.png) #FFF1E0"});
        } else if ($(this).find(".whiteback").length>0){
            $(this).css({"background":"#FFF"});
        } else if ($(this).find(".question").length>0){
            $(this).css({"background":"#F6E9D8"});
        } else {
            $(this).css({"background":"#FFF1E0"});
        }



        $(this).find(".question").prepend("<b>单选</b>");

        if ($(this).find(".option p[value][type = 'r']").length>0) {
            var k = $(this).find(".option p[value][type = 'r']").eq(0).attr("value");
            if (k == 0) {
                $(this).find(".quiz").parent().append("<div class = quiztip>本题不计分</div>");
            } else {
                $(this).find(".quiz").parent().append("<div class = quiztip>本题分值："+k+"分</div>");
            }
        }





    });

    slider = new Swipe(document.getElementById('swipe'),{
        type: "course"
    });







    $("#game .prevpage").unbind().bind("click",function(){slider.goprev();});
    $("#game .nextpage").unbind().bind("click",function(){slider.gonext();});

}



function bullet($theobject) {
    $theobject.parent().find("li").removeClass("on");
    $theobject.addClass("on");
}

function showtap($theobject) {
    if ($theobject.find(".tapcontent").length>0){return;}
    $("#gamecontent .slide").find(".tapcontent,.taparrow").remove();
    var k = $theobject.attr("tap");
    var w = $theobject.css("width");w = w.replace("px","");w = parseInt(w/2);w = w-10;
    var h = $theobject.css("height");h = h.replace("px","");h = parseInt(h);
    var l = $theobject.css("left");l = l.replace("px","");l = parseInt(l);
    var t = $theobject.css("top");t = t.replace("px","");t = parseInt(t);
    w = w+l;h = h+t;
    var w1 = w;w1 = w1-150+10;
    var h1 = h+30;

    //调整位置，以保证Bubble出现在屏幕内。

    if (h<350){
        if (w1<0) {w1 = 0}  else if (w1>642){w1 = 642}
        $theobject.parent().append("<div class = 'taparrow movein' style = 'left:"+w+"px;top:"+h+"px;'></div><div class = 'tapcontent movein' style = 'left:"+w1+"px;top:"+h1+"px;'><div class = close><div class = closeinner>×</div></div><div class = 'explaincontent'>"+k+"</div></div>");
        var rh = $theobject.parent().find('.explaincontent').eq(0).outerHeight();
        $theobject.parent().find('.tapcontent').eq(0).css({"height":rh+"px"});
    } else {
        w1 = w1-50;
        if (w1<0) {w1 = 0} else if (w1>542){w1 = 542}
        h = t-20;
        h1 = h-20;
        $theobject.parent().append("<div class = 'taparrow inverse movein' style = 'left:"+w+"px;top:"+h+"px;'></div><div class = 'tapcontent movein' style = 'width:400px;height:100px;background:#E3D3BC;-webkit-border-radius:5px;-moz-border-radius:5px;left:"+w1+"px;top:"+h1+"px;'><div class = close><div class = closeinner>×</div></div><div class = 'explaincontent'>"+k+"</div></div>");
        var rh = $theobject.parent().find('.explaincontent').eq(0).outerHeight();
        h1 = h-rh;
        $theobject.parent().find('.tapcontent').eq(0).css({"top":h1+"px","height":rh+"px"});
    }

    //如果用户点击了框，就可以把说明去掉
    $theobject.parent().find(".tapreminder").remove();

    $theobject.parent().find(".close").bind("click",function(){$(this).parent().parent().parent().find(".taparrow,.tapcontent").animate({opacity:0}, 2000,function(){$(this).remove()});});
}

function showtapfixed($theobject) {
    $("#gamecontent .slide").find(".tapcontent2").animate({opacity:0}, 2000,function(){$(this).remove()});
    var k = $theobject.attr("tapfixed");
    var w = $theobject.css("width");w = w.replace("px","");w = parseInt(w);
    var h = $theobject.css("height");h = h.replace("px","");h = parseInt(h/2);
    var l = $theobject.css("left");l = l.replace("px","");l = parseInt(l);l = l+w;
    var t = $theobject.css("top");t = t.replace("px","");t = parseInt(t);t = t+h;
    w = 590-l;
    $theobject.parent().append("<div class = 'tapcontent2 movein on tap'>"+k+"</div>");

    //如果Class有rect或者pic，则不加箭头，突出显示，否则用箭头指向说明
    if ($theobject.hasClass("circle") == true) {
        $theobject.parent().find(".circle").removeClass("orange");
        $theobject.addClass("orange");
    } else if ($theobject.hasClass("rect") == true) {
        $theobject.parent().find(".rect").css("opacity",0.5);
        $theobject.css("opacity",1);
    } else {
        //$theobject.parent().append("<div class = 'arrow on tap orange' style = 'width:"+w+"px;left:"+l+"px;top:"+t+"px'></div>");
    }
}

function chainreaction($theobject) {

    //根据circle中的字数调整其大小
    $theobject.find(".circle span").each(function(){
        if ($(this).parent().hasClass("start") == true) {$(this).parent().addClass("four");} else if ($(this).html().length>12) {$(this).parent().addClass("three");} else if ($(this).html().length>6) {$(this).parent().addClass("two");} else if ($(this).html().length == 4) {var k = $(this).html().replace(/^(..)/g,"$1<br>");$(this).html(k);}
    }
    );

    //添加手指提示读者点击
    addhand($theobject,$theobject.find(".tappable.on").eq(0));

    //设置点击的行为
    $theobject.find("[name]").each(function(){
        //alert($(this).attr("name"));
        $(this).bind("click",function(){
            var thename = $(this).attr("name");
            showChain($theobject,thename);
            if ($(this).attr("hide")) {$(this).parent().find("."+$(this).attr("hide")).remove();}
        });
    }
    );


}



function showChain($theobject,thename) {
    var $theobject;
    var thename;
    $theobject.find(".hand").remove();
    if($theobject.find("[name = "+thename+"]:not(.on)").length) {
        $theobject.find("[name = "+thename+"]:not(.on)").eq(0).addClass("on");
        setTimeout(function(){showChain($theobject,thename)},400);
    } else {
        var nextname = $theobject.find(".tappable[name = "+thename+"][next]").attr("next");
        if ($theobject.find(".tappable[name = "+nextname+"]").length>0) {
            var $tap = $theobject.find(".tappable[name = "+nextname+"]");			
            addhand($theobject,$tap);
        }
    }
}



function addhand($theobject,$tap) {
    if ($tap.hasClass("done") == false){
        $tap.addClass("on").addClass("done");
        var l = $tap.css("left");l = l.replace("px");l = parseInt(l);
        var t = $tap.css("top");t = t.replace("px");t = parseInt(t);
        var w = $tap.css("width");w = w.replace("px");w = parseInt(w);
        var h = $tap.css("height");h = h.replace("px");h = parseInt(h);
        l = l+w*0.8;t = t+h*0.8;
        l = parseInt(l);t = parseInt(t);
        $theobject.append("<div class = 'hand on'></div>");
        $theobject.find(".hand").css("left",l+"px").css("top",t+"px");
    }
}


function onechoice($theobject) {

    if ($("#gamecontent .slide").eq(cs).hasClass("done") == false ) {

        //alert (fingermoving + ":"+cs+$theobject.html());
        if (fingermoving == 1) {return;}

        var rightorwrong = "";
        if ($theobject.attr("type") == "r"){
            $theobject.css("background","transparent");
            $theobject.append("<div class = ro></div>");
            rightorwrong = "回答正确。";
            $("#gamecontent .slide").eq(cs).attr("score",$theobject.attr("value"));
            $("#gamecontent .slide").eq(cs).find(".quizright").eq(0).html("您得到"+$theobject.attr("value")+"分");
        } else if ($theobject.attr("type") == "w") {
            $theobject.css("background","transparent");
            $theobject.append("<div class = wo></div>");
            $theobject.parent().find('p[type = "r"]').css({"color":"#308F6A","font-weight":"bold"});
            rightorwrong = "回答错误。";
        } else {
            $theobject.css({"background-image":"url(img/point.png)"});
        }
        var thisexplain = rightorwrong;

        if ($theobject.attr("explain")) {thisexplain = "<p style = 'color:#670000;font-weight:bold;'>"+thisexplain+$theobject.attr("explain")+"</p>";}

        var jumpid = "";
        if ($theobject.parent().attr("jumpid")&&$theobject.parent().attr("jumpid") != "") {
            jumpid = $theobject.parent().attr("jumpid");
            var hl = $("#gamecontent .slide[storyid = "+jumpid+"] .headline").eq(0).html();
            if (hl == null){hl = ""}
            if (hl != ""){hl = "："+hl;}
            jumpid = "<br><br><b><a onclick = 'jumptostory(\""+jumpid+"\")'>参考文章"+hl+"</a></b>";
        }

        if (jumpid != ""||($theobject.attr("explain")&&$theobject.attr("explain") != "")||($theobject.parent().attr("explain")&&$theobject.parent().attr("explain") != "")) {
            $theobject.parent().parent().parent().append("<div class = 'explain movein'><div class = explaincontent>"+thisexplain+$theobject.parent().attr("explain")+jumpid+"</div></div>");
            //$theobject.parent().parent().addClass("moveleft");
        }

        setTimeout(function(){$("#gamecontent .slide").eq(cs).addClass("done");$(".optionalert").remove();},10);
    }
}



//处理某个slide的内容
function playslide(slidenumber) {
    cs = slidenumber;
    cs = parseInt(cs);
    var $currentSlide = $("#gamecontent .slide").eq(slidenumber);

    //在翻到新的页面的时候，暂停所有的视频，避免造成页面卡顿
    $("#gamecontent .slide video").each(function(){
	try {this.pause();} catch(e){}
    });
    
    if ($currentSlide.hasClass("ask-for-review") && "reviewPanel" in window) reviewPanel();


    //在IOS 6上有严重Bug导致视频在显示的时候乱跳，因此首先隐藏所有视频，然后将视频高度和宽度缩小到0，再通过动画放大
    $("#gamecontent .slide video.on").removeClass("on").css({"width":0,"height":0});
    $currentSlide.find("video").css({"width":0,"height":0}).addClass("on").animate({"width":"100%","height":"100%"},500,"easeInOutCubic");

    


    //如果这个slide是自定义的动画，则播出
    var animation = $currentSlide.find(".animation").length;
    if (animation>0) {
        playanimation();
    }



    //记分卡显示分数
    if ($currentSlide.find(".myscore").length>0) {showscore();}

    //显示长文章的页数
    var $pagedots = $("#game .pagedots").eq(0);

    if ($currentSlide.attr("allpages") && $currentSlide.attr("allpages")>0 && screenType!="small") {
        $pagedots.empty().show();
        var i = 0;
        for (i = 0;i<$currentSlide.attr("allpages");i++) {
            $pagedots.append("<span>&nbsp;•&nbsp;</span>");		
        }

        $pagedots.find("span").eq($currentSlide.attr("thispage")).addClass("grey");
    } else {
        $pagedots.empty().hide();
    }
	
	//文章顶部显示小标题
	var $pagetitle = $("#game .pagetitle").eq(0);
	if ($currentSlide.attr("allpages") && $currentSlide.attr("allpages")>0 && $currentSlide.find(".headline").length==0 && $currentSlide.find(".headcut").length==0 && $currentSlide.attr("headline")) {
        $pagetitle.empty().show();
        $pagetitle.html(document.title + "：" + $currentSlide.attr("headline"));		
    } else {
        $pagetitle.empty().hide();
    }
	
	//关闭底部的内容滑轨
	try{closeRail();}catch(err){}

    //记录一次PV，由于本地文件不支持cookie，所以无法记录UU
    gaTrack('UA-1608715-1', 'm.ftchinese.com', '/mbagym/book/'+ce+'/'+cs, 'MBA GYM: '+ce);
}

function showscore() {
    var csscore = 0;
    var fullscore = 0;
    var scorerate = "不可能的";
    $("#gamecontent .slide").each(function(){
        if ($(this).attr("score")) {var i = $(this).attr("score");i = parseInt(i);csscore = csscore+i;}
    });
    $('#gamecontent .option p[type = "r"]').each(function(){
        var i = $(this).attr("value");i = parseInt(i);fullscore = fullscore+i;
    });
    fullscore = fullscore+$(".yesorno p").length;
    $("#gamecontent .myscore").html(csscore);
    $("#gamecontent .fullscore").html(fullscore);
    if (fullscore>0){scorerate = 100*csscore/fullscore;scorerate = parseInt(scorerate);}else{scorerate = 0;}
    $("#gamecontent .scorerate").html(scorerate+"分");

    //提醒还有一些未回答的题目
    var openquiz = $("#gamecontent .slide:not(.done) .question").length;


    //根据分数的不同给出不同的评价

    if (cs == allslides-1){var k = "<a onclick = 'location.href = \"menu.html\";' class = greybutton>返回菜单</a>"}else{var k = "<a onclick = 'turnpage(1)' class = greybutton>继续阅读</a>"}
    k = "<br><br>"+k;

    if ($("#gamecontent .slide.done").length == 0) {
        scorecomment = "您还没有开始答题。<br><br><a onclick = 'jumptoquiz()' class = greybutton>开始答题</a>"
            scoreimg = "";
        $(".scorerate").css("color","#666");
    } else if (openquiz>0) {
        scorecomment = "您还有一些问题没有回答。<br><br><a onclick = 'jumptoquiz()' class = greybutton>继续答题</a>"
            scoreimg = "";
        $(".scorerate").css("color","#666");
    } else if (scorerate >= 90) {
        scorecomment = "完美的表现！"+k;
        scoreimg = "";
        $(".scorerate").css("color","#9E2F50");
    } else if (scorerate >= 60) {
        scorecomment = "分数及格，希望您更上一层楼。"+k;
        scoreimg = "student1normal-wunai";
        $(".scorerate").css("color","#308F6A");
    } else {
        scorecomment = "分数没有及格，请加油。"+k;
        scoreimg = "student3normal-buxie";
        $(".scorerate").css("color","#666");
    }





    //scoreimg = "picture/people/"+scoreimg+".png";
    //$("#gamecontent .scoreimg").attr("src",scoreimg);
    $("#gamecontent .scorecomment").html(scorecomment);



    //如果分数比上次高，则保存
    var lastscore = getvalue(ce);
    if (lastscore == null||scorerate>lastscore) {
        savevalue(ce,scorerate);
        scorechange = "";
    } else {
        scorechange = "";
    }
    $("#gamecontent .scorechange").html(scorechange);

    //更新Episode号
    var k = $("#tipmenu .coursemenu div[episode = "+ce+"]").next().attr("episode");
    if (k != null && k != "" && remember == 1) {savevalue("ce",k);savevalue("cs",0);savevalue("ca",0);}

    //如果分数达到60，则解锁下一关
    //if (scorerate >= 60&&getvalue(k) == null){savevalue(k,0)}

    //播放音乐，也可以根据成绩播放不同音乐
    //playmp3("cannon");
}




function jumptoquiz() {
    var k = $("#gamecontent .slide:not(.done) .option").eq(0).parent().parent().parent().attr("n");
    openpage(k);
}

function jumptostory(storyid){
    var storyid;
    var n = $("#gamecontent .slide[storyid = "+storyid+"]").attr("n");
    openpage(n);
}




//确定播放何种自定义动画
function playanimation() {
    var $ani = $("#gamecontent .slide").eq(cs).find(".animation").eq(0);

    if (!$ani.attr("played")||$ani.attr("played") != 1) {
        var thefunction = $ani.attr("function");
        eval(thefunction+"();");
    }

}



function speedquiz() {
    var $ani = $("#gamecontent .slide").eq(cs).find(".animation").eq(0);
    $ani.empty();
    $ani.attr("score",0);
    var timelimit = $ani.attr("timelimit");
    timelimit = parseInt(timelimit)+3;
    $ani.append("<div class = sentense></div>");
    $ani.find(".sentense").append($ani.parent().find(".yesorno").html());
    $ani.find(".sentense p").css({"text-align":"center","font-size":"32px"});

    $ani.append("<div class = 'yes tap' style = 'background:#E3D3BC;position:absolute;left:298px;top:250px;width:200px;height:100px;line-height:100px;font-size:32px;text-align:center;-webkit-border-radius:0.2em;-moz-border-radius:0.2em;border:1px solid #93857C;'>正确</div>");
    $ani.append("<div class = 'no tap' style = 'background:#E3D3BC;position:absolute;left:532px;top:250px;width:200px;height:100px;line-height:100px;font-size:32px;text-align:center;-webkit-border-radius:0.2em;-moz-border-radius:0.2em;border:1px solid #93857C;'>错误</div>");
    $ani.append("<div class = 'currentquiz tap' style = 'position:absolute;left:0;top:150px;width:1024px;height:100px;line-height:170%;font-size:32px;text-align:center;'></div>");
    $ani.append("<div class = 'quizperformance tap' style = 'position:absolute;left:266px;top:400px;width:512px;height:200px;line-height:170%;font-size:32px;text-align:center;background:#FFF1E0;'></div>");

    //插入总结
    $ani.append("<div class = 'tap tstable movein' style = 'display:none;'><table><thead><tr><th scope = col class = header></th><th style = 'text-align:center' scope = 'col' class = header nowrap>正确</th><th style = 'text-align:right' scope = col class = header nowrap>错误</th></tr></thead><tbody></tbody></table></div>");


    //设置时间
    $ani.append("<div class = 'timelimit tap'>"+timelimit+"</div><div class = 'tap timelimittext' style = ''>限时答题</div>");
    //如果翻到了别的页面，则cs与clockpage会不相等
    var clockpage = cs;
    var _timelimit = function(){
        timelimit = timelimit-1;
        if (timelimit < 0) {
            timelimit = 0;
            _endquiz();
            $ani.find(".quizresult").prepend("时间到，");
        } else if ($ani.find(".sentense p").length>0&&clockpage == cs) {
            setTimeout(_timelimit, 1000);
        }
        if (timelimit <= 10){
            $ani.find(".timelimit").css("color","#9E2F50");
        }
        $ani.find(".timelimit").html(timelimit);}



    _timelimit();

    //随机抽取一道题目
    function _popquiz() {
        $ani.find(".sentense").hide();
        var quiznumber = $ani.find(".sentense p").length;
        if (quiznumber>0) {
            var k = Math.floor(Math.random()*quiznumber);
            $ani.find(".currentquiz").empty().append($ani.find(".sentense p").eq(k));
        }
    }

    //快问快答结束
    function _endquiz() {
        $ani.find(".yes,.no,.currentquiz").remove();
        $ani.find(".tstable").show();
        myscore = $ani.find(".quizperformance .quizcorrect").length;
        $ani.find(".tstable th").eq(0).html('您答对'+myscore+'题').css({"font-size":"21px","text-align":"center","font-family":"arial"});
        $ani.append("<div class = 'quizcomment tap' style = 'position:absolute;left:30px;top:50px;width:964px;line-height:170%;font-size:26px;text-align:center;'></div>");
        $ani.find(".endquiz").unbind().bind("click",function(){
            turnpage(1);
            timelimit = 0;
        });
        var quizcomment = "";
        var allquiz = $(".yesorno p").length;
        allquiz = parseInt(allquiz);
        var quizrate = Math.round(100 * myscore/allquiz);

        if (quizrate > 70) reviewPanel();

        $ani.find(".quizcomment").html(quizcomment);
        $("#gamecontent .slide").eq(cs).attr("score", myscore);
        $ani.find(".quizperformance").remove();
        $ani.find(".timelimit,.timelimittext").remove();

    }



    _popquiz();



    //选择答案
    $(".yes.tap,.no.tap").unbind().bind("click",function(){
        var quiznumber = $ani.find(".sentense p").length;

        if (quiznumber >= 0){
            //插入summary

            var k1 = $ani.find(".currentquiz p").eq(0).html();
            var k2;
            var k3;

            if ($(this).hasClass("yes")&&$ani.find(".currentquiz p").eq(0).hasClass("yes")) {
                k2 = "<img src = img/tsright.png>";
                k3 = "<img src = img/tsfalse.png>";
            } else if ($(this).hasClass("no")&&!$ani.find(".currentquiz p").eq(0).hasClass("yes")){
                k2 = "<img src = img/tsfalse.png>";
                k3 = "<img src = img/tsright.png>";
            } else if ($(this).hasClass("yes")&&!$ani.find(".currentquiz p").eq(0).hasClass("yes")) {
                k2 = "<img src = img/tswrong.png>";
                k3 = "<img src = img/tstrue.png>";
            } else {
                k2 = "<img src = img/tstrue.png>";
                k3 = "<img src = img/tswrong.png>";
            }


            $ani.find(".tstable tbody").append("<tr><td class = td1>"+k1+"</td><td>"+k2+"</td><td>"+k3+"</td></tr>");



            if (($(this).hasClass("yes")&&$ani.find(".currentquiz p").eq(0).hasClass("yes"))||($(this).hasClass("no")&&!$ani.find(".currentquiz p").eq(0).hasClass("yes"))) {
                $ani.find(".quizperformance").append("<div class = 'quizcorrect ro' style = 'height:75px;width:100px;float:left;'></div>");
            } else {
                $ani.find(".quizperformance").append("<div class = 'wo' style = 'height:75px;width:100px;float:left;'></div>");
            }


            if (quiznumber>0) {
                _popquiz();
            }else {
                _endquiz();
            }
        } 
    });



}



function GetCookie(name){
    var start = document.cookie.indexOf(name+" = ");
    var len = start+name.length+1;
    if ((!start) && (name  !=  document.cookie.substring(0,name.length))) return null;
    if (start  ==  -1) return null;
    var end = document.cookie.indexOf(";",len);
    if (end  ==  -1) end = document.cookie.length;
    return decodeURIComponent(document.cookie.substring(len,end));
}

function SetCookie (name, value , sec , path , domain) {
    var argv = SetCookie.arguments;
    var argc = SetCookie.arguments.length;

    var expires = new Date()
        if(!sec) sec = 600 * (24 * 60 * 60 * 1000);
        else sec = 1000*sec;
    expires.setTime (expires.getTime() + sec)

        var path = (argc > 3) ? argv[3] : null;
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : false;
    document.cookie = name + " = " + escape (value) +
        ((expires  ==  null) ? "" : ("; expires = " + expires.toGMTString())) +
        ((path  ==  null) ? "/" : ("; path = " + path)) +
        ((domain  ==  null) ? "" : ("; domain = " + domain)) +
        ((secure  ==  true) ? "; secure" : "");
}
function DeleteCookie (name) {
    var exp = new Date();
    exp.setTime (exp.getTime() - 1);
    var cval = GetCookie (name);
    document.cookie = name + " = " + cval + "; expires = " + exp.toGMTString();
}






function savevalue(thekey,thevalue) {
    thekey = thekey.toString();
    thevalue = thevalue.toString();
    //首先清理非法字符
    thekey = thekey ? thekey.replace(/\//g,"-").replace(/\?\:\;\,/g,"") : thekey;
    thevalue =  thevalue ? thevalue.replace(/\//g,"-").replace(/\?\:\;\,/g,"") : thevalue;

    if (localStorage){
        localStorage.removeItem(thekey);localStorage.setItem(thekey,thevalue);
    } else {
        SetCookie(thekey,thevalue,"","/");
    }
}

function getvalue(thekey){
    var kl;
    if (localStorage){kl = localStorage.getItem(thekey);} else {kl = GetCookie(thekey);}
    return kl;
}

function getpvalue(theurl, thep) {
    var theurl, thep,k,thev;
    if (theurl.toLowerCase().indexOf(thep + " = ")>1) {
        k = theurl.toLowerCase().indexOf(thep) + thep.length + 1;
        thev = theurl.toLowerCase().substring(k,theurl.length);http://i.ftimg.net/picture/9/000022029_piclink_0_0.jpg
        thev = thev.replace(/\&.*/g,"");
    } else {
        thev = "";
    }
    return thev;
}

//在本地运行的GA Track，可以向GA发送访问信息，以记录PV，来源：http://remysharp.com/2009/02/27/analytics-for-bookmarklets-injected-scripts/
function gaTrack(g,h,i,o){var f = 1000000000,k = c(f,9999999999),a = c(10000000,99999999),l = c(f,2147483647),b = (new Date()).getTime(),d = window.location,m = new Image(),n = 'http://www.google-analytics.com/__utm.gif?utmwv = 5.3.6&utms = 1&utmn = '+uniqueK+'&utmcs = UTF-8&utmsr = 1024x768&utmsc = 32-bit&utmul = zh-cn&utmje = 1&utmfl = 11.3%20r31&utmdt = '+o+'&utmhid = 1586902302&utmhn = '+h+'&utmr = 0&utmp = '+i+'&utmac = '+g.replace(/\//g,"%2F")+'&utmcc = __utma%3D'+uniqueA+'.'+uniqueL+'.'+uniqueB+'.'+uniqueB+'.'+uniqueB+'.2%3B%2B__utmb%3D'+uniqueA+'%3B%2B__utmc%3D'+uniqueA+'%3B%2B__utmz%3D'+uniqueA+'.'+uniqueB+'.1.1.utmcsr%3D(direct)%7Cutmccn%3D(direct)%7Cutmcmd%3D(none)%3B&utmu = DAC~';m.src = n}


function c(e,j){return e+Math.floor(Math.random()*(j-e))}

//关于用户评论的函数结束


//全局变量,所有slide的数量，现在播放的slide号码，当前slide下的action数量，当前action号码
var uniqueL = c(1000000000,2147483647);
var uniqueK = c(1000000000,9999999999);
var uniqueA = c(10000000,99999999);
var uniqueB = (new Date()).getTime();

var allslides,allaction
var pagemoving = 0;
var fingermoving = 0;
var ce = "";
var cs = 0;
var ca = 0;
var cer = "";
var csr = 0;
var car = 0;
var currentMenu = 0;
var testindex = 0;
var remember = 1; //remember这个参数用来区分课程和每日更新，课程需要记住上次的位置，而每日更新不需要
var gameback = "intro";
var topic_object_id = "";
var username = getvalue("USER_NAME");
var thisday = new Date();
var themi = thisday.getHours()*10000 + thisday.getMinutes()*100 + thisday.getSeconds();
var thed = thisday.getFullYear()*10000 + thisday.getMonth()*100 + thisday.getDate();
var prevpage;
var scroller;

var screenType="small";//600像素以上的，定义为big
if ($(window).width()>=600) {screenType="big";}

var isipad;
(function(a,b){if(/ipad;/i.test(a)) {isipad = 1;return;}})(navigator.userAgent||navigator.vendor||window.opera,'http://m.ftchinese.com/');
if (isipad == 1) {document.body.addEventListener("touchmove", function(e) {e.preventDefault();});}

var islocal = 1;
(function(a,b){if(/ftmailbox/i.test(a) || /ftchinese/i.test(a)) {islocal = 0;return;}})(window.location.href,'http://m.ftchinese.com/');

var tap = "click";if(isipad == 1){tap = "touchend"};
var tapstart = "click";if(isipad == 1){tapstart = "touchstart"};
var slider,courseSlider;
var coverheight;
var FTChartStyle = {
    colors: ['#9e2f50', '#4781aa', '#eda45e', '#a6a471', '#736e7e', '#94826b', '#936971', '#c36256', '#8ab5cd'],
    chart: {
        backgroundColor: '#fff1e0',
        borderWidth: 0,
        plotBackgroundColor: '#fff1e0',
        plotShadow: false,
        plotBorderWidth: 0,
        spacingRight: 20
    },
    title: {
        align : 'center',
        style: { 
            color: '#333',
            font: 'bold 25px arial,"Hiragino Sans GB","Heiti SC",STHeiti',
            lineHeight:'162%'
        }
    },
    subtitle: {
        align: 'right',
        y: 20,
        style: { 
            color: '#333333',
            font: '12px arial,"Hiragino Sans GB","Heiti SC",STHeiti'
        }
    },


    xAxis: {
        lineColor: '#333',
        lineWidth: 2,
        tickColor: '#333',
        tickWidth: 1,
        tickPosition: 'outside',
        labels: {
            style: {
                color: '#333',
                font: '12px arial,"Hiragino Sans GB","Heiti SC",STHeiti'
            }
        }
    },

    //设定两个Ｙ轴的格式，可以避免在双Ｙ轴的情况下程序出错
    yAxis: [{
        gridLineColor: '#999',
        labels: {
            style: {
                color: '#333',
                font: '12px arial,"Hiragino Sans GB","Heiti SC",STHeiti'
            }
        },
        title: {
            text: null
        }
    },
    {
        gridLineColor: '#999',
        labels: {
            style: {
                color: '#333',
                font: '12px arial,"Hiragino Sans GB","Heiti SC",STHeiti'
            }
        },
        title: {
            text: null
        }
    }],


    plotOptions: {
        column: {
            borderWidth: 1,
            borderColor: '#000',
            shadow: false
        },	
        bar: {
            borderWidth: 1,
            borderColor: '#000',
            shadow: false
        },
        line: {
            shadow: false
        },
        pie: {
            lineWidth:1,
            slicedOffset:15,
            shadow:false,
            showInLegend:true,
            center: ["50%", "45%"],
            size: "85%",
            series: {
                showCheckbox: true
            },
            dataLabels: {
                enabled: false,
                color: '#333',		
                softConnector: false,					
                connectorColor: '#333',
                style: {
                    font: '12px arial,"Hiragino Sans GB","Heiti SC",STHeiti',
                },	
            }
        }
    },
    legend: {
        layout: 'vertical',
        backgroundColor: '#FFFFFF',
        align: 'right',
        verticalAlign: 'top',
        floating: true,
        shadow: false,
        borderRadius: 0,
        itemStyle: {	
            font: '12px arial,"Hiragino Sans GB","Heiti SC",STHeiti',
            color: '#333'
        },
        itemHiddenStyle: {
            color: 'gray'
        },

        itemHoverStyle: {
            color: '#4781aa'
        }
    },
    labels: {
        style: {
            color: '#333'
        }
    },
    tooltip: {
        style: {
            color: '#333',
            font: '12px arial,"Hiragino Sans GB","Heiti SC",STHeiti'
        },
        borderRadius: 0,
        shadow:false
    }
};
