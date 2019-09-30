// JavaScriptが無効の場合警告メッセージ
  jQuery(document).ready(function(){
    jQuery("#jsOnDelete").hide();
  });
// JavaScriptが無効の場合警告メッセージ end

// ページトップへ戻る
  jQuery(function() {
      var showFlug = false;
      var topBtn = jQuery('.gototop');
      //最初はボタン位置をページ外にする
      topBtn.css('bottom', '-100px');
      var showFlug = false;
      //スクロールが100に達したらボタン表示
      jQuery(window).scroll(function () {
          if (jQuery(this).scrollTop() > 100) {
              if (showFlug == false) {
                  showFlug = true;
                  topBtn.stop().animate({'bottom' : '30px'}, 250);
              }
          } else {
              if (showFlug) {
                  showFlug = false;
                  topBtn.stop().animate({'bottom' : '-100px'}, 300);
              }
          }
      });
      //スクロールしてトップに戻る
      //500の数字を大きくするとスクロール速度が遅くなる
      topBtn.click(function () {
          jQuery('body,html').animate({
              scrollTop: 0
          }, 900,'easeInOutQuad');
          return false;
      });
  });
// ページトップへ戻る　END

// スライドショー
    jQuery(document).ready(function(){
            var obj = jQuery('.eyecatch').bxSlider({ // 自動再生
            auto: true,
            pause:  5500,
            speed: 800,
            mode: 'vertical',
            touchEnabled: true,
            useCSS: false,
            easing: 'easeInOutQuad',
            speed: 700,
            controls: false,
            // captions: true
              onSlideAfter: function() { // 自動再生
                obj.startAuto();
            }
        });
    });

    jQuery(document).ready(function(){
        jQuery('.news_bannar').bxSlider({
            auto: true,
            randomStart: true,
            pause:  8000,
            speed: 500,
            mode: 'fade',
            touchEnabled: true,
            controls: false,
            pager:false
            // captions: true
        });
    });
// スライドショー bxSlider end

// ランキングエリア タブ切り替え
    jQuery(function(){
        
        //最初は、メニュー1を表示させる
        jQuery('.rank_box:first').show();
        
        //メニュー1のliにactiveのクラスを付ける
        jQuery('.rank_menu li:first').addClass('active');

        //タブメニューをクリックを押したら
        jQuery('.rank_menu li').click(function() {
            jQuery('.rank_menu li').removeClass('active');
            jQuery(this).addClass('active');
            jQuery('.rank_box').hide();
            jQuery(jQuery(this).find('a').attr('href')).stop(false, true).slideDown(500,'easeInOutBack');
            return false;
        });
    });
// ランキングエリア タブ切り替え end

// カレンダー
    jQuery(document).ready(function() {
        jQuery("#calendar").calendar({
        });
    });
// カレンダー　end

// スクロールバー
  jQuery(function() {
      jQuery('.news_box').perfectScrollbar(); 
  });
// スクロールバー end

// snsエリア 吹き出し
    jQuery(document).ready(function() {
         jQuery('.sns_tips').tooltipster({
           animation: 'fade', // 動作を変更する。例：fade, grow, swing, slide, fall
           arrow: true,
           arrowColor: '#333',
           content: '',
           delay: 200, // 表示するまでの時間
           fixedWidth: 0,
           maxWidth: 0,
           functionBefore: function(origin, continueTooltip) {
              continueTooltip();
           },
           functionReady: function(origin, tooltip) {},
           functionAfter: function(origin) {},
           icon: '(?)',
           iconDesktop: false,
           iconTouch: false,
           iconTheme: '.tooltipster-icon',
           interactive: false,
           interactiveTolerance: 350,
           offsetX: 0,
           offsetY: 18,
           onlyOne: true,
           position: 'right', // 表示場所　例：right, left, top, top-right, top-left, bottom, bottom-right, bottom-left
           speed: 250,
           timer: 0,
           theme: '.tooltipster-punk', // 吹き出しのデザイン 例：tooltipster-punk,tooltipster-noir,tooltipster-light,tooltipster-shadow
           touchDevices: true,
           trigger: 'hover',
           updateAnimation: true
         });
    });
// snsエリア 吹き出し end
