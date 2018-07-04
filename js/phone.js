$(function(){
//	计算phone导航高度
	var windowHeight=$(window).height();
	$('.J_phoneNav').css('height',windowHeight);
	
	
	//	计算J_svg_tuoyuan的marginTop
//	var J_svg_tuoyuanMargin=-($('.J_svg_tuoyuan').height());
//	$('.J_svg_tuoyuan').css('marginTop',J_svg_tuoyuanMargin);
//	计算J_partOne3的paddingTop
//	var J_J_svg_bolangpadding=160;
//	$('.J_partOne3').css('paddingTop',J_J_svg_bolangpadding);
	
	
//	中间列表高度及每个Li高度

	var J_phoneNav_listH=windowHeight-$('.J_phoneNav_top').outerHeight()-$('.J_phoneNav_bot').outerHeight();
	
	$('.J_phoneNav_list').css('height',J_phoneNav_listH)
	var J_phoneNav_listLength=$('.J_phoneNav_list li.J_phoneNav_listli').length;
	
	var J_phoneNav_listliHeight=(J_phoneNav_listH / J_phoneNav_listLength)-1;
	var J_phoneNav_listliLineHeight=(J_phoneNav_listH / J_phoneNav_listLength)+'px';
	$('.J_phoneNav_listli').css('height',J_phoneNav_listliHeight);
	$('.J_phoneNav_listli').css('lineHeight',J_phoneNav_listliLineHeight);

	
//	点击显示隐藏导航
	$('.J_phone_icon').click(function(){
		if($('.J_phoneNav').css('display')=='block'){
			$('.J_phoneNav').fadeOut(500);
			$('body').css('overflow','auto');
		}else{
			$('.J_phoneNav').fadeIn(500);
			$('body').css('overflow','hidden');
		}
	})
	$('.J_phoneNavClose').click(function(){
		$('.J_phoneNav').fadeOut(500);
		$('body').css('overflow','auto');
	})
	
//	index页面做适配

	var w=document.documentElement?document.documentElement.clientWidth:document.body.clientWidth;//先获取窗口宽度
	var h=document.documentElement?document.documentElement.clientHeight:document.body.clientHeight;
	if(w>=320&&w<1024){
		var J_J_svg_bolangpadding=$('.J_svg_bolang').height()+20;
		$('.J_partOne3').css('paddingTop',J_J_svg_bolangpadding);
//			移动端滚动出现nav
		window.onscroll = function(){
	
		var gunT = document.documentElement.scrollTop || document.body.scrollTop;
		var scrollt=document.documentElement.scrollTop || document.body.scrollTop;
		
//		出现nav
		if(gunT>60){
				$('.J_phone_iconw').addClass('fixed');
			}else{
				$('.J_phone_iconw').removeClass('fixed');
			}
		}				
	}
	if(w>=320&&w<768){
		//		计算chart高度
		var h=document.documentElement?document.documentElement.clientHeight:document.body.clientHeight;
		var J_chat_height=h-271;
	
		$('.J_chat').css('height',J_chat_height);
		//	登录注册背景色铺满
		var J_loginHeight=$(document).height()-$('.J_partfw').outerHeight()-$('.phone_icon').outerHeight();
		$('.J_login').css('min-height',J_loginHeight);
		
		
		
//		首页第一部分高度
		var J_partOne1Height=h-$('.J_phone_iconw').height();
//		console.log(h)
//		console.log(J_partOne1Height)
//		$('.J_partOne1c').css('height',J_partOne1Height);	
		
		$('.J_partOne1c_l').css({
			'top':'initial',
			'opacity':'0',
			height:"auto",
			bottom:'-60px',
		});
		$(".J_partOne1c_l").animate({
			bottom:'55px',
			opacity:1,
			top:'initial',
			height:'auto'
		},800, 'linear');//长度默认为像素单位
		
//		
	}
	

	

	
	
	
	
})