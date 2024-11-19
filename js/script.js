$(function () {

////////// vwの設定
    function setVw(){       
        vw = $(window).width() / 100 + 'px';
        //ブラウザ幅/100を取得し変数vwに格納
        $(':root').css('--vw', vw);
        //:rootのカスタムプロパティ--vwにvwを代入させる。これで、スクロールバーの幅を除いた画面幅/100が--vwになる
    }
        
    $(window).on('load resize', function(){
        setVw();
    });
    // 画面を、読み込んだ時orサイズを変えた時  →  関数vwが動作する

////////// トップへ戻るボタンの設定
    var backTop = $('.back-top');

    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            backTop.addClass('active-back-top');
        }else{
            backTop.removeClass('active-back-top');
        }
    });
    // 100pxスクロールしたら表示させる
    
    backTop.click(function() {
        $('body,html').animate({scrollTop: 0}, 500, 'swing');
    });
    // スクロールしてトップへ戻る
    
////////// ハンバーガーメニューの設定
	$('.menu-btn').click(function() {
        // メニューボタンをクリックした時

        if($('.nav-container').hasClass('nav-open')) {
        // nav-containerがopenクラスを持っていた（＝メニューが開いていた）ら、
            $('.nav-container').removeClass('nav-open');
            // 1. openクラスを外してメニューを閉じる
            $('.menu-btn').find('i').removeClass('fa-xmark');
            // 2. メニューボタンを×ではなくする
            $('.menu-btn').find('i').addClass('fa-bars');
            // 3. メニューボタンを≡にする
            
        }else{
        // nav-containerがopenクラスを持っていない（＝メニューが開いていない）ときは、
            $('.nav-container').addClass('nav-open');
            // 1. openクラスを加えてメニューを開く
            $('.menu-btn').find('i').removeClass('fa-bars');
            // 2. メニューボタンを≡でなくする
            $('.menu-btn').find('i').addClass('fa-xmark');
            // 3. メニューボタンを×にする
        }
    });

    $(document).click(function(e) {
        // クリックした場所がメニューボタンでもメニューそのものでもない場合
        if (!$(e.target).closest('.menu-btn, .nav-container').length) {
            if ($('.nav-container').hasClass('nav-open')) {
                // メニューを閉じる
                $('.nav-container').removeClass('nav-open');
                $('.menu-btn').find('i').removeClass('fa-xmark').addClass('fa-bars');
            }
        }
    });

    ////////// スムーススクロール
    $('a[href^="#"]').click(function(){
        var target = $($(this).attr('href')).offset().top;
        var header = $('header').height();

        if ($(window).width() > 600) {  // モバイル以外
            target = target - header;  // ヘッダーの高さを引く
        }

        $('html,body').animate({scrollTop: target}, 500, 'swing');
        return false;
    });

    ////////// お知らせの取得
    $('#news-container').load('news.html .news-list article:nth-of-type(-n+3)', function(response, status, xhr) {
        if (status === "error") {
          $('#news-container').html("<p>お知らせを読み込めませんでした。</p>");
        }
      });

});