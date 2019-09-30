$(function(){
	$('.itemimage_area div img').each(function(i){
		$(this).css({opacity:'0'}).attr('id','view' + (i + 1).toString());
		$('.itemimage_area div img:first').css({opacity:'1',zIndex:'99'});
	});

	$('.itemimage_area ul li').click(function(){
		var connectCont = $('.itemimage_area ul li').index(this);
		var showCont = connectCont+1;

		$('.itemimage_area div img#view' + (showCont)).siblings().stop().animate({opacity:'0'},200);
		$('.itemimage_area div img#view' + (showCont)).stop().animate({opacity:'1'},100);

		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});

	$('.itemimage_area ul li:not(.active)').hover(function(){
		$(this).stop().animate({opacity:'1'},200);
	},function(){
		$(this).stop().animate({opacity:'0.5'},200);
	});

	$('.itemimage_area ul li').css({opacity:'0.5'});
	$('.itemimage_area ul li:first').addClass('active');
});

