//ボタンをクリックした際のアニメーションの設定
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".gnav").toggleClass('panelactive');//ヘッダーにpanelactiveクラスを付与
});
$("#g-navi li a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".header").removeClass('panelactive');//ヘッダーのpanelactiveクラスも除去
    $(".btn").removeClass('active');//ボタンの activeクラスを除去し
});

//ボタンをクリックした際のアニメーションの設定
$(".Hopenbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".gnav").toggleClass('panelactive');//ヘッダーにpanelactiveクラスを付与
});
$("#g-navi li a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".header").removeClass('panelactive');//ヘッダーのpanelactiveクラスも除去
    $(".btn").removeClass('active');//ボタンの activeクラスを除去し
});
