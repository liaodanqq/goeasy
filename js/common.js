$(function(){
//	点击导航"中文"切换成"英文"
	/*中英文*/
	if(window.localStorage){
		var lang = localStorage.getItem("lang")	
		if(lang == 'e'){
			$('.lan_c').hide();
			$('.lan_e').show();
		}else{
			$('.lan_c').show();
			$('.lan_e').hide();
		}
	}
	if($('.J_zhongwen').html()=='中文'){
		$('.lan_e').show();
		$('.lan_c').hide();
	}else{
		$('.lan_c').show();
		$('.lan_e').hide();
	}
	
//	下面导航点击事件
	$('.J_zhongwen').click(function(){
		if($(this).html()=='中文'){
			$(this).html('English');
			$('.lan_c').show()
			$('.lan_e').hide()
			if(window.localStorage){
				localStorage.setItem("lang",'c');
			}
			$('.J_phoneNav').hide();
			$('body').css('overflow','auto');
		}else{
			$(this).html('中文');
			$('.lan_c').hide()
			$('.lan_e').show()
			if(window.localStorage){
				localStorage.setItem("lang",'e')	
			}
			$('.J_phoneNav').hide();
			$('body').css('overflow','auto');
		}
	})
	
	//	登录注册背景色铺满
	var w=document.documentElement?document.documentElement.clientWidth:document.body.clientWidth;//先获取窗口宽度
	if(w>=768){
		var J_loginHeight=$(document).height()-$('.J_partfw').outerHeight();
		$('.J_login').css('min-height',J_loginHeight);
	}
	
	//	中间内容过少-底部fixed
		var bodyHeight=$('body').height();
		var documentHeight=$(document).height();
		var J_partfwHeight=$('.J_partfw').outerHeight();
		$('.J_dibu_height').css('height',J_partfwHeight)
		if(bodyHeight<documentHeight){
			$('.J_partfw').addClass('fixed');
			$('.J_dibu_height').show()
		}else{
			$('.J_partfw').removeClass('fixed');
			$('.J_dibu_height').hide()
		}


	//	光标输入后文字颜色发生变化
	$('.J_demos_condsend_1').focus(function(){
		if($(this).val()=='Enter...'){
			$(this).val('');
			$(this).css('color','#474865')
		}
	})
	$('.J_demos_condsend_1').blur(function(){
		if($(this).val()==''){
			$(this).val('Enter...');
			$(this).css('color','rgba(71,72,101,0.5)')
		}	
	})
	
	
	
	
	
})