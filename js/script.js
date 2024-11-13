$(function () {

    function setVw(){
        //--vwをセットする関数
        
        vw = $(window).width() / 100 + 'px';
        //ブラウザ幅/100を取得し変数vwに格納
        
        $(':root').css('--vw', vw);
        //:rootのカスタムプロパティ--vwにvwを代入させる。これで、スクロールバーの幅を除いた画面幅/100が--vwになる
    }
        
    $(window).on('load resize', function(){
        setVw();
    });
        //画面を、読み込んだ時・サイズを変えた時  →  関数vwが動作する

	$('.menu-btn').click(function () {
        // メニューボタンをクリックした時

        if($('.nav-container').hasClass('open')) {
            // nav-containerがopenクラスを持っていた（＝メニューが開いていた）ら、
            $('.nav-container').removeClass('open');
                // 1. openクラスを外してメニューを閉じる
            $('.menu-btn').find('i').removeClass('fa-xmark');
                // 2. メニューボタンを×ではなくする
            $('.menu-btn').find('i').addClass('fa-bars');
                // 3. メニューボタンを≡にする

            $('main').click(function(){
                // メニューが開いているときにメニュー外をクリックしたら、上と同様の動きをする
                $('.nav-container').removeClass('open');
                $('.menu-btn').find('i').removeClass('fa-xmark');
                $('.menu-btn').find('i').addClass('fa-bars');
                });
            
        }else{
            // nav-containerがopenクラスを持っていない（＝メニューが開いていない）ときは、
            $('.nav-container').addClass('open');
                // 1. openクラスを加えてメニューを開く
            $('.menu-btn').find('i').removeClass('fa-bars');
                // 2. メニューボタンを≡でなくする
            $('.menu-btn').find('i').addClass('fa-xmark');
                // 3. メニューボタンを×にする
        }

    });

});