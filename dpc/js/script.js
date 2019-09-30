// // sns画像ロールオーバー
// 	jQuery(function(){
// 		jQuery("a img[src*='_off.']").CrossFadeRollOver({
// 		type : "img",
// 		opacity : 0.7,
// 		duration : { on:200, off:200 },
// 		activeClassName : "active"
// 		});
// 	});

//トップページのコンテンツフェード
	jQuery(document).ready(function(){
	    jQuery('.top-fade').bxSlider({
	        auto: true,
	        randomStart: true,
	        pause:  5000,
	        speed: 700,
	        mode: 'fade',
	        touchEnabled: true,
	        controls: false,
	        pager:false
	    });
	});
	
//トップページの背景フェード
	jQuery(document).ready(function(){
	jQuery("#top").bgswitcher({
	  images: ["img/top_bg1.jpg","img/top_bg2.jpg","img/top_bg3.jpg","img/top_bg4.jpg"],
	  interval:5000 ,	
	  loop:true ,
	  shuffle :true,
	  effect :'blind',
	  duration:500,
	  easing:'swing'
	});
	});

