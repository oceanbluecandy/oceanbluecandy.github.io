// フォーム部分の置換
	$(function(){
		$("#select-design").change(function(){
			$(".search-txt01").text($("option:selected",this).text());
		}).trigger("change");
	});
	$(function(){
		$("#select-color").change(function(){
			$(".search-txt02").text($("option:selected",this).text());
		}).trigger("change");
	});
	$(function(){
		$("#select-size").change(function(){
			$(".search-txt03").text($("option:selected",this).text());
		}).trigger("change");
	});

	// JavaScriptが無効の場合警告メッセージ
	  jQuery(document).ready(function(){
	    jQuery("#jsOnDelete").hide();
	  });


	jQuery(function() {
	var topBtn = jQuery('.gototop');	
	topBtn.hide();
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 350) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
    topBtn.click(function () {
		jQuery('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
});

	// カレンダー
	    jQuery(document).ready(function() {
	        jQuery("#calendar").calendar({
	        });
	    });
	// カレンダー　end




	// // 商品画像のズーム
	//     $(document).ready(function(){  
	//         $('.zoom_01').elevateZoom({
	//           zoomWindowWidth:250,
	//           zoomWindowHeight:250,
	//           easing : true,
	//           easingType: 'easeInBack' ,
	//           // scrollZoom : true,
	//           cursor: "crosshair",
	//           zoomWindowFadeIn: 300,
	//           zoomWindowFadeOut: 550,
	//           zoomType: "inner",
	//           zoomWindowPosition: 7
	//         }); 
	//     });  
	// // 商品画像のズーム end

