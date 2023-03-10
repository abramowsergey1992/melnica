$(function () {
	var hashTagActive = "";
	$(".scroll-to").on("click touchstart", function (event) {
		if ($(this).attr("href").length) {
			$("body").removeClass("_no-scroll");
			$(".mobmenu").fadeOut(100);
			//this will prevent if the user click several times the same link to freeze the scroll.
			event.preventDefault();
			//calculate destination place
			var dest = 0;
			if (
				$($(this).attr("href")).offset().top >
				$(document).height() - $(window).height()
			) {
				dest = $(document).height() - $(window).height();
			} else {
				dest = $($(this).attr("href")).offset().top;
			}
			//go to destination
			$("html,body").animate(
				{
					scrollTop: dest - 100,
				},
				400,
				"swing"
			);
			hashTagActive = $(this).attr("href");
		}
	});
	$.fn.hasAttr = function (name) {
		return this.attr(name) !== undefined;
	};
	$("._mask-phone").each(function () {
		Inputmask("+7 (999) 999-99-99").mask(this);
	});
	$("body").addClass("_load-page");
	function hh() {
		$(".steps__hh-1").css({
			marginTop: $(".steps__h-line-1").height(),
			height: $(".step._st-1").height() + 90,
		});
		$(".steps__hh-2").css({
			marginTop:
				$(".steps__h-line-2").height() +
				$(".steps__h-line-2").position().top,

			height:
				$(".steps__h-line-3").position().top -
				$(".steps__h-line-2").position().top -
				$(".steps__h-line-2").height(),
		});
		console.log(
			$(".steps__h-line-3").position().top,
			$(".steps__h-line-2").position().top,
			$(".steps__h-line-2").height()
		);
	}
	hh();
	setTimeout(hh(), 1000);
	setTimeout(hh(), 2000);

	$(window).resize(function () {
		hh();
		console.log("xxxxx");
		setTimeout(hh(), 300);
	});
	if ($(this).scrollTop() >= 50) {
		$(".header").addClass("_no-top");
	} else {
		$(".header").removeClass("_no-top");
	}
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 50) {
			$(".header").addClass("_no-top");
		} else {
			$(".header").removeClass("_no-top");
		}
	});

	const swipermb = new Swiper(".swiper-mg-mob", {
		slidesPerView: "auto",
		spaceBetween: 10,
		mousewheel: {
			forceToAxis: 1,
		},
		breakpoints: {
			992: {
				spaceBetween: 22,
			},
		},
		on: {
			resize: function () {
				const mediaQuery = window.matchMedia("(max-width: 1024px)");
				if (mediaQuery.matches) {
					const slider = this;
					const wrapper = this.wrapperEl;

					[].forEach.call(slider.slides, function (slide) {
						slide.style.height = "";
					});

					setTimeout(() => {
						[].forEach.call(slider.slides, function (slide) {
							slide.style.height = wrapper.clientHeight + "px";
						});
					}, 300);
				}
			},
			init: function () {
				console.log("sx");
				const slider = this;
				const wrapper = this.wrapperEl;

				[].forEach.call(slider.slides, function (slide) {
					slide.style.height = "";
				});

				setTimeout(() => {
					[].forEach.call(slider.slides, function (slide) {
						slide.style.height = wrapper.clientHeight + "px";
					});
				}, 300);
			},
		},
	});
	const formats = new Swiper(".formats__slider", {
		slidesPerView: 1.1,
		spaceBetween: 10,
		mousewheel: {
			forceToAxis: 1,
		},
		breakpoints: {
			450: {
				slidesPerView: 2.2,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 22,
			},
		},
		on: {
			resize: function () {
				const slider = this;
				const wrapper = this.wrapperEl;

				[].forEach.call(slider.slides, function (slide) {
					slide.style.height = "";
				});

				setTimeout(() => {
					[].forEach.call(slider.slides, function (slide) {
						slide.style.height = wrapper.clientHeight + "px";
					});
				}, 300);
			},
			init: function () {
				const slider = this;
				const wrapper = this.wrapperEl;

				[].forEach.call(slider.slides, function (slide) {
					slide.style.height = "";
				});

				setTimeout(() => {
					[].forEach.call(slider.slides, function (slide) {
						slide.style.height = wrapper.clientHeight + "px";
					});
				}, 300);
			},
		},
	});
	const why = new Swiper(".why__slider", {
		spaceBetween: 22,
		navigation: {
			nextEl: $(".why__next")[0],
			prevEl: $(".why__prev")[0],
		},
		slidesPerView: 1.1,
		spaceBetween: 10,
		mousewheel: {
			forceToAxis: 1,
		},
		breakpoints: {
			450: {
				slidesPerView: 2.2,
			},
			768: {
				slidesPerView: 3.1,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 22,
			},
		},
		on: {
			resize: function () {
				const slider = this;
				const wrapper = this.wrapperEl;

				[].forEach.call(slider.slides, function (slide) {
					slide.style.height = "";
				});

				setTimeout(() => {
					[].forEach.call(slider.slides, function (slide) {
						slide.style.height = wrapper.clientHeight + "px";
					});
				}, 300);
			},
			init: function () {
				const slider = this;
				const wrapper = this.wrapperEl;

				[].forEach.call(slider.slides, function (slide) {
					slide.style.height = "";
				});

				setTimeout(() => {
					[].forEach.call(slider.slides, function (slide) {
						slide.style.height = wrapper.clientHeight + "px";
					});
				}, 300);
			},
		},
	});
	const stepsForm = new Swiper(".steps-form__slider", {
		slidesPerView: 1,
		spaceBetween: 22,
		allowTouchMove: 0,
		on: {
			slideChange: function (swiper) {
				$(".steps-form").attr("slide", swiper.activeIndex);
			},
		},
	});
	const stepsPhotos = new Swiper(".steps-form__photos", {
		slidesPerView: 1,
		spaceBetween: 22,
		autoplay: {
			delay: 5000,
		},
		loop: true,
		pagination: {
			el: ".steps-form__photos-pagy",
			type: "bullets",
		},
	});
	$(".st-inpt-1").change(function () {
		if ($(".st-inpt-1:checked").length) {
			$(".steps-form__btn-1").removeAttr("disabled");
		} else {
			$(".steps-form__btn-1").attr("disabled", "disabled");
		}
	});
	$(".steps-form__btn-1").click(function () {
		if ($(this).hasAttr("disabled")) {
		} else {
			if ($(".st-inpt-1:checked").length) {
				stepsForm.slideTo(1);
				$(".steps-form__step[data-slide=1]").removeAttr("disabled");
			}
		}
	});

	$(".st-inpt-2").change(function () {
		if ($(".st-inpt-2:checked").length) {
			$(".steps-form__btn-2").removeAttr("disabled");
		} else {
			$(".steps-form__btn-2").attr("disabled", "disabled");
		}
	});
	$(".steps-form__back").click(function () {
		stepsForm.slidePrev();
	});
	$(".steps-form__btn-2").click(function () {
		if ($(this).hasAttr("disabled")) {
		} else {
			if ($(".st-inpt-2:checked").length) {
				stepsForm.slideTo(2);
				$(".steps-form__step[data-slide=2]").removeAttr("disabled");
			}
		}
	});
	$(".steps-form__btn-3").click(function () {
		if ($(this).hasAttr("disabled")) {
		} else {
			// if ($('[name="format[]"]:checked').length) {
			stepsForm.slideTo(3);
			$(".steps-form__step[data-slide=3]").removeAttr("disabled");

			// }
		}
	});

	$(".st-inpt-4").change(function () {
		if ($(".st-inpt-4:checked").length) {
			$(".steps-form__btn-4").removeAttr("disabled");
		} else {
			$(".steps-form__btn-4").attr("disabled", "disabled");
		}
	});
	$(".steps-form__btn-4").click(function () {
		if ($(this).hasAttr("disabled")) {
		} else {
			if ($(".st-inpt-4:checked").length) {
				stepsForm.slideTo(4);
				$(".steps-form__step[data-slide=4]").removeAttr("disabled");
			}
		}
	});
	$(".st-inpt-5").change(function () {
		if ($(".st-inpt-5:checked").length) {
			$(".steps-form__btn-5").removeAttr("disabled");
		} else {
			$(".steps-form__btn-5").attr("disabled", "disabled");
		}
	});
	$(".steps-form__btn-5").click(function () {
		if ($(this).hasAttr("disabled")) {
		} else {
			if ($(".st-inpt-5:checked").length) {
				stepsForm.slideTo(5);
				$(".steps-form__step[data-slide=5]").removeAttr("disabled");
			}
		}
	});
	$(".steps-form__btn-6").click(function () {
		if ($(this).hasAttr("disabled")) {
		} else {
			if ($(".st-inpt-5:checked").length) {
				stepsForm.slideTo(6);
				$(".steps-form__step[data-slide=6]").removeAttr("disabled");
			}
		}
	});
	$(".steps-form__step").click(function () {
		let indx = $(this).data("slide");
		if ($(this).hasAttr("disabled")) {
		} else {
			$(".steps-form__step").each(function () {
				$(this).data("slide") <= indx
					? $(this).removeAttr("disabled")
					: $(this).attr("disabled", "disabled");
			});
		}
		stepsForm.slideTo(indx);
	});
	if ($("#stepform").length) {
		let validContacnt = $("#stepform").validate({
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				$(".steps-form__btn-7").attr("disabled", "disabled");
				$.ajax({
					url: $(form).attr("action"),
					data: $(form).serialize(),
					method: "POST",
					headers: {
						"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
							"content"
						),
					},
					context: document.body,
					success: function () {
						stepsForm.slideTo(7);
						$(".steps-form__btn-7").removeAttr("disabled");
					},
					error: function () {
						stepsForm.slideTo(8);
						$(".steps-form__btn-7").removeAttr("disabled");
					},
				});
			},
		});
	}
	if ($("#feedbackform").length) {
		$(".feedback__reset").click(function () {
			$(".feedback__form-thanks").slideUp();
			$(".feedback__form-error").slideUp();
			$(".feedback__form-form").slideDown();
			$(".feedback__sbmt").removeAttr("disabled");
			$("#feedbackform").reset();
		});
		let feedbackform = $("#feedbackform").validate({
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				$(".feedback__sbmt").attr("disabled", "disabled");
				$.ajax({
					url: $(form).attr("action"),
					data: $(form).serialize(),
					method: "POST",
					headers: {
						"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
							"content"
						),
					},
					context: document.body,
					success: function () {
						$(".feedback__form-thanks").slideDown();
						$(".feedback__form-form").slideUp();
						$(".feedback__sbmt").removeAttr("disabled");
					},
					error: function () {
						$(".feedback__form-error").slideDown();
						$(".feedback__form-form").slideUp();
						$(".feedback__sbmt").removeAttr("disabled");
					},
				});
			},
		});
	}
});
