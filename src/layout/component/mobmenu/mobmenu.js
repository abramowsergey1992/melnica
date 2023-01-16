$(function () {
	$(".header__burger").click(function () {
		$("body").addClass("_no-scroll");
		$(".mobmenu").fadeIn();
	});
	$(".header__close").click(function () {
		$(".mobmenu").fadeOut(function () {
			$("body").removeClass("_no-scroll");
		});
	});
});
