$(function(){
	$(window).on('scroll',checkPos);
	checkPos();
	function checkPos(){
		if($(window).scrollTop()>170){
			$(".wei").fadeIn();
		}
		else{
			$(".wei").fadeOut();
		}
		if($(window).scrollTop()>510){
			$(".shu").fadeIn();
		}
		else{
			$(".shu").fadeOut();
		}
		if($(window).scrollTop()>850){
			$(".wu").fadeIn();
		}
		else{
			$(".wu").fadeOut();
		}
		if($(window).scrollTop()>2160){
			$(".others-main,.others-nav").fadeIn();
		}
		else{
			$(".others-main,.others-nav").fadeOut();
		}
	}
	
	$(".sg").click(function(){
		$(".sg,.dhmn").removeClass('active');
		$(".sg").addClass('active');
		$('.script-items').animate({right:'1152px'});
	});
	$(".dhmn").click(function(){
		$(".sg,.dhmn").removeClass('active');
		$(".dhmn").addClass('active');
		$('.script-items').animate({right:'0px'});
	});
	
	$('.wei-j').click(function(){
		$(".wu-j,.shu-j,.wei-j").removeClass('nav-active');
		$(".wei-j").addClass('nav-active');
		$('.nav-bot').animate({left:'555px'});
		$('.others-main').animate({right:'0px'});
	});
	
	$('.wu-j').click(function(){
		$(".wu-j,.shu-j,.wei-j").removeClass('nav-active');
		$(".wu-j").addClass('nav-active');
		$('.nav-bot').animate({left:'825px'});
		$('.others-main').animate({right:'2480px'});
	});
	
	$('.shu-j').click(function(){
		$(".wu-j,.shu-j,.wei-j").removeClass('nav-active');
		$(".shu-j").addClass('nav-active');
		$('.nav-bot').animate({left:'690px'});
		$('.others-main').animate({right:'1240px'});
	});
	
	$('.script-btn').click(function(){
		$('html,body').animate({scrollTop:0});
	})
})


