

$(document).ready(function() {
    $('.ct:gt(0)').hide();
    var hdw = $('.newplayer ul li');
    hdw.hover(function() {
        $(this).addClass('two').siblings().removeClass('two');
    });
    hdw.hover(function() {
        $(this).addClass('one').siblings().removeClass();
        var hdw_index = hdw.index(this);
        $('.ct').eq(hdw.index(this)).show().siblings().hide();
    });
});
//爆奖tab标签切换
jQuery(function ($) {
    jQuery(".mod-platfixed li").click(function () {
        var i = $(this).index();
        $(this).addClass("current").siblings("li").removeClass("current");
        $(".baojiang-cont").find(".list").eq(i).show().siblings(".list").hide()
    })
});

//左边标签切换
jQuery(function ($) {
    jQuery(".cp_pop-tab dd").mouseover(function () {
        var i = $(this).index();
        $(this).addClass("cur").siblings("dd").removeClass("cur");
        $(".cp_pop-con").find(".mod").eq(i).show().siblings(".mod").hide()
    })
});

//最新出款滚动效果
$(document).ready(function(){

	var dd = $('.vticker').easyTicker({
		direction: 'up',
		easing: 'easeInOutBack',
		speed: 'slow',
		interval: 2000,
		height: '490',
		visible: 1,
		mousePause: 0,
		controls: {
			up: '.up',
			down: '.down',
			toggle: '.toggle',
			stopText: 'Stop !!!'
		}
	}).data('easyTicker');
});
//取款存款时间
    function timeTo(id,start,end){
		var startTime = start;
		if(start<=end){
			$("#"+id).html(startTime);
			startTime = startTime+1;
			var t = setTimeout('timeTo("'+id+'",'+startTime+','+end+')',90);
			}
		}
		
		timeTo('minutes',0,Math.ceil(Math.random()*4));
		timeTo('seconds',0,Math.ceil(Math.random()*60));
		timeTo('minutes2',5,Math.ceil(Math.random()*30));
		timeTo('seconds2',0,Math.ceil(Math.random()*60));
		//timeTo('register_count',15,Math.floor(Math.random()*15 + 30));
		timeTo('register_count2',100,Math.floor(Math.random()*100 + 150));
		var date = new Date();
		var hours = date.getHours();
		if(hours >=1 && hours <=5){
			timeTo('register_count',1,Math.floor(Math.random()*10 + 10));}
			else if(hours >=18 && hours <=22){
			timeTo('register_count',1,Math.floor(Math.random()*10 + 30));}
	        else {
			timeTo('register_count',1,Math.floor(Math.random()*10 + 15));}
	
// 代理注册
$(document).ready(function() {
	$('#register').click(function() {
		// window.open(document.referrer);
		var url = document.referrer;
		var domain = url.match(/(www.)?[a-z0-9]+\.(com|vip|cc|net)/ig);
		window.open('http://'+domain+'/index.php/index/daili_shenqing');
	});

	var red = 1;
	var timer = setInterval(function() {
		if(red) {
			$('.shan').css('color', 'blue');
			red = 0;
		}else {
			$('.shan').css('color', 'red');
			red = 1;
		}
	}, 200);

	
});