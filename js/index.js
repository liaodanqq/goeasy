$(function(){
	//  pc端
//	计算J_svg_tuoyuan的marginTop
//	var J_svg_tuoyuanMargin=-($('.J_svg_tuoyuan').height());
//	$('.J_svg_tuoyuan').css('marginTop',J_svg_tuoyuanMargin);
//	计算J_partOne3的paddingTop
//	var J_J_svg_bolangpadding=160;
//	$('.J_partOne3').css('paddingTop',J_J_svg_bolangpadding);
	
	//	当对象出现在可是区域 进行动画
	
	 //		第二屏
	 	moveOne();
		function moveOne(){	
			var J_partOne2d2Top=$('.partOne2d1').offset().top;
			var J_partOne2d2Height=$('.partOne2d1').height();
			
			
			$(".J_partOne2d1div").stop().animate({
				top:'-140px',
				opacity:'0'
	//			filter:alpha(opacity=100)
			})
			$(".J_partOne2d2div").stop().animate({
				top:'100px',
				opacity:'0'
	//			filter:alpha(opacity=100)
			})
			
			if (J_partOne2d2Top + J_partOne2d2Height <= $(window).height() + $(window).scrollTop()) {
		
			$(".J_partOne2d1div").stop().animate({
				top:'0',
				opacity:'1'
			},600, 'linear')
		
			$(".J_partOne2d2div").stop().animate({
				top:'0',
				opacity:'1'
			},600, 'linear')
			}
		}
		
		//		第三屏
		moveTwo();
		function moveTwo(){
			var J_partOne3Top=$('.J_partOne3').offset().top;
			var J_partOne3Height=$('.J_partOne3').height();
			
			function showJ_partOne3zd2(){
				$(".J_partOne3zd2").stop().show(600)
			}
			$(".J_partOne3zd1").stop().hide();
			$(".J_partOne3zd2").stop().hide();
			if (J_partOne3Top + J_partOne3Height <= $(window).height() + $(window).scrollTop()) {
				$(".J_partOne3zd2").stop().show(800)
				$(".J_partOne3zd1").stop().show(800)
				
			}else{
				$(".J_partOne3zd1").stop().hide();
				$(".J_partOne3zd2").stop().hide();
			}
	 	}
	 
	window.onscroll = function(){
		
	var gunT = document.documentElement.scrollTop || document.body.scrollTop;
	var scrollt=document.documentElement.scrollTop || document.body.scrollTop;
		console.log('123')
	//	出现nav背景
//		if(gunT>100){
//			$('.J_navfixed').addClass('bg');
//		}else{
//			$('.J_navfixed').removeClass('bg');
//		}
		moveOne();
		moveTwo();

		
	}
	//	当对象出现在可是区域 进行动画
	
	//第一部分左边从下至上渐隐渐现
	//获取第一部分高度
	var w=document.documentElement?document.documentElement.clientWidth:document.body.clientWidth;//先获取窗口宽度
	if(w>=768){
		var J_partOne1_h=$('.J_partOne1').height();	 
		$('.J_partOne1c_l').css({
			'top':'100px',
			'opacity':'0',
			height:"100%"
		});
		$(".J_partOne1c_l").animate({
			top:0,
			opacity:1,
			height:"100%"
		},800, 'linear');//长度默认为像素单位
	}
	
	
	//第一部分右边圆点闪烁
	
	var css1 = {opacity: '1'};  
    $('.J_partOne1c_ydd1yuan').animate(css1,800,rowBack1);  
    function rowBack1(){  
        if(css1.opacity==='1')  
            css1.opacity='0';  
        else if(css1.opacity==='0')  
            css1.opacity='1';  
        $('.J_partOne1c_ydd1yuan').animate(css1,800,rowBack1);  
    }  
    
    var css2 = {opacity: '1'};  
    $('.J_partOne1c_ydd3yuan').animate(css2,1000,rowBack2);  
    function rowBack2(){  
        if(css2.opacity==='1')  
            css2.opacity='0';  
        else if(css2.opacity==='0')  
            css2.opacity='1';  
        $('.J_partOne1c_ydd3yuan').animate(css2,1000,rowBack2);  
    }  
    
    var css3 = {opacity: '1'};  
    $('.J_partOne1c_ydd7yuan').animate(css3,600,rowBack3);  
    function rowBack3(){  
        if(css3.opacity==='1')  
            css3.opacity='0';  
        else if(css3.opacity==='0')  
            css3.opacity='1';  
        $('.J_partOne1c_ydd7yuan').animate(css3,600,rowBack3);  
    }  
    
     var css4 = {opacity: '1'};  
    $('.J_partOne1c_yuld1img').animate(css4,400,rowBack4);  
    function rowBack4(){  
        if(css4.opacity==='1')  
            css4.opacity='0';  
        else if(css3.opacity==='0')  
            css4.opacity='1';  
        $('.J_partOne1c_yuld1img').animate(css4,400,rowBack4);  
    } 
    
    
//  其他圆点以此出现
	
	$(".J_partOne1c_ydd2,.J_partOne1c_ydd4,.J_partOne1c_ydd5,.J_partOne1c_ydd6").hide(1,function(){
		$(".J_partOne1c_ydd2,.J_partOne1c_ydd4,.J_partOne1c_ydd5,.J_partOne1c_ydd6").show(500)
	});
		
//	$(".J_partOne1c_ydd2").show({
//      linear: 3000,
//  })
//	$(".J_partOne1c_ydd4").show({
//      linear: 1000,
//  })
//	$(".J_partOne1c_ydd5").show({
//      linear: 1000,
//  })
//	$(".J_partOne1c_ydd6").show({
//      linear: 1000,
//  })
	
	
	//		第四屏
 	
//   移入字体h1变化
//  $(".partTulli").hover(function(){
//  	$(this).find('.J_partTulli_ulh1').animate({
//			fontSize:'26px'
//		},100, 'linear')
//  },function(){
//  	$(this).find('.J_partTulli_ulh1').animate({
//			fontSize:'24px'
//		},100, 'linear')
//  })
//  移入小图标变化
//	第一个小图标
	var rotation2 = function() {
        $(".J_partTulli_dimg1").rotate({
            angle: 0,
            animateTo: 360,
//          callback: rotation2,
            easing: function(x, t, b, c, d) {        // t: current time, b: begInnIng value, c: change In value, d: duration
                return c * (t / d) + b;
            }
        });
    }
    $(".J_partTulli01").hover(function(){ 		
	    rotation2(100);
    });
//	第二个小图标
    $(".J_partTulli02").rotate({
        bind:
            {
                mouseover: function() {
                    $('.J_partTulli_dimg2').rotate({animateTo: 180});
                },
                mouseout: function() {
                    $('.J_partTulli_dimg2').rotate({animateTo: 0});
                }
            }

    });
    //	第三个小图标
    $(".J_partTulli03").hover(function(){    	
	    $(".J_partTulli_dimg3").stop().animate({
			left:'-36px',
			top:'71px'
		},1, 'linear',function(){
			
		$(".J_partTulli_dimg3").stop().animate({
			left:'22%',
			top:'22%'
		},400, 'linear')
		
		});
    },function(){
    	$(".J_partTulli_dimg3").css({
    		left:'22%',
			top:'22%'
    	})
    });
    
    //	第四个小图标
    $(".J_partTulli04").hover(function(){    	
	    $(".J_partTulli_dimg4").stop().animate({
			opacity:0,
		},1, 'linear',function(){
			
		$(".J_partTulli_dimg4").stop().animate({
			opacity:1,
		},400, 'linear')
		
		});
    },function(){
    	$(".J_partTulli_dimg4").css({
    		opacity:1
    	})
    });
    
	//	第五个小图标
	$(".J_partTulli05").hover(function(){    	
	    $(".J_partTulli_dimg5").stop().animate({
			top:'74px',
		},1, 'linear',function(){
			
		$(".J_partTulli_dimg5").stop().animate({
			top:'25%',
		},400, 'linear')
		
		});
    },function(){
    	$(".J_partTulli_dimg5").css({
    		top:'25%'
    	})
    });
    
    //	第六个小图标
	$(".J_partTulli06").hover(function(){    	
	    $(".J_partTulli_dimg6").stop().animate({
			top:'71px',
			left:'73px'
		},1, 'linear',function(){
			
		$(".J_partTulli_dimg6").stop().animate({
			top:'20%',
			left:'33%'
		},400, 'linear')
		
		});
    },function(){
    	$(".J_partTulli_dimg6").css({
    		top:'20%',
			left:'33%'
    	})
    });
    
    
//  第五屏
	
    
//  第一个动画
   var cssJ_parthulli01 = {right: '14%'};  
   
   $('.J_parthulli01').hover(function(){
   		$('.J_parthulli01ddiv').animate(cssJ_parthulli01,500,rowBackJ_parthulli01);
   },function(){
   		$('.J_parthulli01ddiv').stop().animate({
   			right:'11%'
   		});
   }) 
  function rowBackJ_parthulli01(){  
      if(cssJ_parthulli01.right==='14%')  
          cssJ_parthulli01.right='11%';  
      else if(cssJ_parthulli01.right==='11%')  
          cssJ_parthulli01.right='14%';  
      $('.J_parthulli01ddiv').animate(cssJ_parthulli01,500,rowBackJ_parthulli01);  
  }  
  
//  第二个动画

	$('.J_parthulli02').hover(function(){
//	1
		$(".J_parthulli02ddivi2").stop().animate({
			top:'100%'
		},1, 'linear',function(){
			
		$(".J_parthulli02ddivi2").stop().animate({
			top:'43%'
		},600, 'linear',function(){
			$(".J_parthulli02ddivi1").stop().animate({
				opacity:1
			},800, 'linear')
		})
		
		});
    
//  	2
    	$(".J_parthulli02ddivi1").stop().animate({
			opacity:0
		},1, 'linear',function(){
			
		
		
		});
   
	},function(){
    	$(".J_parthulli02ddivi2").css({
    		left:'14%'
    	})
    	$(".J_parthulli02ddivi1").css({
    		opacity:1
    	})
    	
    })
	
    
	//  第三个动画
	var J_parthulli03ddivimgH=$('.J_parthulli03ddiv img').height();

	$('.J_parthulli03').hover(function(){
		$('.J_parthulli03ddiv img').fadeOut(function(){
//			1
			$(".J_parthulli03dtan01").stop().animate({
				left:'-28%',
				},2000, 'linear',function(){
					$(".J_parthulli03dtan01").stop().animate({
						left: '100%'
					},1, 'linear',function(){	
						$(".J_parthulli03dtan01").stop().animate({
							left: '9%'
						},3000, 'linear')
				})
			})
//			2
			$(".J_parthulli03dtan02").stop().animate({
				left:'-28%',
				},1000, 'linear',function(){
					$(".J_parthulli03dtan02").stop().animate({
						left: '100%'
					},1, 'linear',function(){	
						$(".J_parthulli03dtan02").stop().animate({
							left: '17%'
						},3000, 'linear')
				})
			})
//			3
			$(".J_parthulli03dtan03").stop().animate({
				left:'-28%',
				},2000, 'linear',function(){
					$(".J_parthulli03dtan03").stop().animate({
						left: '100%'
					},1, 'linear',function(){	
						$(".J_parthulli03dtan03").stop().animate({
							left: '9%'
						},3000, 'linear')
				})
			})
			//4
			$(".J_parthulli03dtan04").stop().animate({
					left:'-28%',
				},1000, 'linear',function(){
					$(".J_parthulli03dtan04").stop().animate({
						left: '100%'
					},1, 'linear',function(){	
						$(".J_parthulli03dtan04").stop().animate({
							left: '47%'
						},3000, 'linear')
				})
			})
			//5
			$(".J_parthulli03dtan05").stop().animate({
					left:'-28%',
				},4000, 'linear',function(){
					$(".J_parthulli03dtan05").stop().animate({
						left: '100%'
					},1, 'linear',function(){	
						$(".J_parthulli03dtan05").stop().animate({
							left: '73%'
						},1500, 'linear',function(){
						$('.J_parthulli03ddiv img').fadeIn();
						$('.J_parthulli03ddiv img').css({
							width:'auto',
							height:J_parthulli03ddivimgH,
						});
					})
				})
			})
			//6
			$(".J_parthulli03dtan06").stop().animate({
					left:'-28%',
				},3000, 'linear',function(){
					$(".J_parthulli03dtan06").stop().animate({
						left: '100%'
					},1, 'linear',function(){	
						$(".J_parthulli03dtan06").stop().animate({
							left: '70%'
						},1500, 'linear')
				})
			})
			//7
			$(".J_parthulli03dtan07").stop().animate({
					left:'-28%',
				},3000, 'linear',function(){
					$(".J_parthulli03dtan07").stop().animate({
						left: '100%'
					},1, 'linear',function(){	
						$(".J_parthulli03dtan07").stop().animate({
							left: '75%'
						},2000, 'linear')
				})
			})
	
		
		});
	
		},function(){
			$('.J_parthulli03ddiv img').stop();
			$('.J_parthulli03ddiv img').fadeIn();
			$('.J_parthulli03ddiv img').css({
							width:'auto',
							height:J_parthulli03ddivimgH,
							
						});
			$(".J_parthulli03dtan01").stop();
			$(".J_parthulli03dtan01").css('left','9%');
			$(".J_parthulli03dtan02").stop();
			$(".J_parthulli03dtan02").css('left','17%');
			$(".J_parthulli03dtan03").stop();
			$(".J_parthulli03dtan03").css('left','9%');
			$(".J_parthulli03dtan04").stop();
			$(".J_parthulli03dtan04").css('left','47%');
			$(".J_parthulli03dtan05").stop();
			$(".J_parthulli03dtan05").css('left','73%');
			$(".J_parthulli03dtan06").stop();
			$(".J_parthulli03dtan06").css('left','70%');
			$(".J_parthulli03dtan07").stop();
			$(".J_parthulli03dtan07").css('left','75%');
		});
	
//	})
	
	
	//  第四个动画

	$('.J_parthulli04').hover(function(){
		$(".J_parthulli04ddivimg").stop().animate({
					top:'-56%',
				},1000, 'linear',function(){
					$(".J_parthulli04ddivimg").stop().animate({
						top: '100%'
					},1, 'linear',function(){	
						$(".J_parthulli04ddivimg").stop().animate({
							top: '28%'
						},1000, 'linear')
				})
			})
	},function(){
		$(".J_parthulli04ddivimg").stop();
		$(".J_parthulli04ddivimg").css('top','28%')
	})
	
	
	//  第五个动画
	
	var h1=$('.J_parthulli05du_li1img').height();
	var h2=$('.J_parthulli05du_li2img').height();
	$('.J_parthulli05').hover(function(){
		$('.J_parthulli05du_li1img').stop().hide(1,function(){
			$('.J_parthulli05du_li2img').stop().hide(1,function(){
				$('.J_parthulli05du_li3img').stop().hide(1,function(){
					$('.J_parthulli05du_li1img').stop().show(1000,function(){
						$('.J_parthulli05du_li2img').stop().show(1000,function(){
							$('.J_parthulli05du_li3img').stop().show(1000);
						});
					})
				});
			});
		});
		
		
		
	},function(){
		$('.J_parthulli05du_li1img').stop();
		$('.J_parthulli05du_li2img').stop();
		$('.J_parthulli05du_li3img').stop();
		$('.J_parthulli05du_li1img').show();
		$('.J_parthulli05du_li2img').show();
		$('.J_parthulli05du_li3img').show();
		$('.J_parthulli05du_li1img,.J_parthulli05du_li3img').css({
			'opacity':'1',
			'width':'auto',
			'height':h1
		})
		$('.J_parthulli05du_li2img').css({
			'opacity':'1',
			'width':'auto',
			'height':h2
		})
	})
	
	
	//  第六个动画
	var height1=$('.J_parthulli06d1i1').height();
	var height2=$('.J_parthulli06d2li1').height();
	$('.J_parthulli06').hover(function(){
		$('.J_parthulli06d1i1').stop().hide(1,function(){
			$('.J_parthulli06d1i2').stop().hide(1,function(){
				$('.J_parthulli06d2li1').stop().hide(1,function(){
					$('.J_parthulli06d2li2').stop().hide(1,function(){
						$('.J_parthulli06d1i1').stop().show(1500,function(){
							$('.J_parthulli06d1i2').stop().show(1500);
						})
						$('.J_parthulli06d2li1').stop().show(1500,function(){
							$('.J_parthulli06d2li2').stop().show(1500);
						})
					})
				});
			});
		});	
	},function(){
		$('.J_parthulli06d1i1').stop();
		$('.J_parthulli06d1i2').stop();
		$('.J_parthulli06d2li1').stop();
		$('.J_parthulli06d2li2').stop();
		$('.J_parthulli06d1i1,.J_parthulli06d1i2').css({
			'opacity':'1',
			'width':'auto',
			'height':height1
		})
		$('.J_parthulli06d2li1,.J_parthulli06d2li2').css({
			'opacity':'1',
			'width':'auto',
			'height':height2
		})		
		$('.J_parthulli06d1i1').show();
		$('.J_parthulli06d1i2').show();
		$('.J_parthulli06d2li1').show();
		$('.J_parthulli06d2li2').show();
	})
	
	
	
//	var parthullWidth=$('.parthulli').width();
//	$('.parthulli').css('width',parthullWidth)
//	
	
		
	//pc端完
	
	//	index页面做适配

	var w=document.documentElement?document.documentElement.clientWidth:document.body.clientWidth;//先获取窗口宽度
	if(w>=320&&w<1025){
		var J_J_svg_bolangpadding=$('.J_svg_bolang').height()+20;
		$('.J_partOne3').css('paddingTop',J_J_svg_bolangpadding);
		$(".J_partOne3zd1").show();
		$(".J_partOne3zd2").show();
		$(".J_partOne2d1div").stop().animate({
				top:'0',
				opacity:'1'
			},600, 'linear')
		
			$(".J_partOne2d2div").stop().animate({
				top:'0',
				opacity:'1'
			},600, 'linear')
		
//			移动端滚动出现nav
		window.onscroll = function(){	
		//		第三屏
		moveTwo();
		function moveTwo(){
			var J_partOne3Top=$('.J_partOne3').offset().top;
			var J_partOne3Height=$('.J_partOne3').height();
			
			function showJ_partOne3zd2(){
				$(".J_partOne3zd2").stop().show(600)
			}
			$(".J_partOne3zd1").stop().show();
			$(".J_partOne3zd2").stop().show();
			if (J_partOne3Top + J_partOne3Height <= $(window).height() + $(window).scrollTop()) {
				$(".J_partOne3zd2").stop().show(800)
				$(".J_partOne3zd1").stop().show(800)
				
			}else{
				$(".J_partOne3zd1").stop().show();
				$(".J_partOne3zd2").stop().show();
			}
	 	}
	}	
		
		
	
	}
	
	
	if(w>=1025&&w<1367){
		//	第三个小图标
	    $(".J_partTulli03").hover(function(){    	
		    $(".J_partTulli_dimg3").stop().animate({
				left:'-36px',
				top:'71px'
			},1, 'linear',function(){
				
			$(".J_partTulli_dimg3").stop().animate({
				left:'28%',
				top:'26%'
			},400, 'linear')
			
			});
	    },function(){
	    	$(".J_partTulli_dimg3").css({
	    		left:'28%',
				top:'26%'
	    	})
	    });
	    //	第六个小图标
		$(".J_partTulli06").hover(function(){    	
		    $(".J_partTulli_dimg6").stop().animate({
				top:'71px',
				left:'73px'
			},1, 'linear',function(){
				
			$(".J_partTulli_dimg6").stop().animate({
				top:'26%',
				left:'39%'
			},400, 'linear')
			
			});
	    },function(){
	    	$(".J_partTulli_dimg6").css({
	    		top:'26%',
				left:'39%'
	    	})
	    });
	    	    
	}
	
	
})