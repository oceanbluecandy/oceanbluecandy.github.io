jQuery(document).ready(function() {
	jQuery('.smp-menu').sidr({
		speed : 200, //アニメーションのスピード
		body :'#wrapper'
	}); 
});

jQuery(function(){
	jQuery('.fade').mosaic({
		speed : 200, //アニメーションのスピード
		opacity : 0.9, //透明度
	});
});

//すべての要素が読み込み終わったら、ローディング画面を非表示にする
jQuery(window).load(function(){
	jQuery(".loadingWrap").fadeOut(300);
});