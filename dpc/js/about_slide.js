	//アバウトページのコンテンツスライド
	jQuery(document).ready(function(){
	    jQuery('.about-content').bxSlider({
	    	mode: 'horizontal', //スライドのエフェクト　'horizontal', 'vertical', 'fade'
	    	speed: 500,　//スライドのアニメーションの時間
	    	// slideMargin: 0, //スライドとスライドのマージン
	    	startSlide: 0, //初めのスライドの指定
	    	// randomStart: false, //スライドの初めをランダムに
	    	// slideSelector: '', //スライドのセレクタを指定
	    	infiniteLoop: false ,//ループさせるか否か
	    	hideControlOnEnd: true, //スライドが最後の時に、次へのリンクを消すか否か
	    	captions: false, //キャプションの設定
	    	// adaptiveHeight: false, //スライドの高さが違う場合、それぞれ調節して合わせるかどうか
	    	touchEnabled: true, //スワイプできるようにするか否か（スマートフォン）
	    	pager: true, //ページャーの有無
	    	// buildPager: null, //サムネイルページャーの指定

	    	controls: true, //次へ、前へ等のコントロールの有無
	    	nextText: 'Next', //次へのテキスト
	    	prevText: 'Prev', //前へのテキスト
	    	autoControls: false, //自動、ストップボタンの有無
	    	startText: 'Start', //自動ボタンのテキスト
	    	stopText: 'Stop', //ストップボタンのテキスト
	    	auto: false ,//自動スタート再生さるかいなか
	    	pause: 4000 //スライドの切り替えの間

	    	// カルーセルの場合
	    	// minSlides: 1 //最低限表示する数
	    	// maxSlides: 1 //マックスで表示する数
	    	// moveSlides: 0 //スライドをどのくらいの数を動かすか
	    	// slideWidth: 0 //ひとつの要素の幅を指定
	    });
	});