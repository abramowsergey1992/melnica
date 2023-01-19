$(function(){})
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

$(function(){})
$(function(){})
$(function () {
	AOS.init({ once: false });
});

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

let geor = "";

ymaps.ready(init);

function init() {
	var myMap = new ymaps.Map("yamap", {
		center: [37.61870031738251, 55.75493422787544],

		zoom: 9,
		controls: [],
	});
	// ж
	// 	deliveryPoint = new ymaps.GeoObject(
	// 		{
	// 			geometry: { type: "Point" },
	// 			properties: { iconCaption: "Адрес" },
	// 		},
	// 		{
	// 			preset: "islands#blackDotIconWithCaption",
	// 			draggable: true,
	// 			iconCaptionMaxWidth: "215",
	// 		}
	// 	),
	// 	searchControl = myMap.controls.get("searchControl");
	// searchControl.options.set({
	// 	noPlacemark: true,
	// 	placeholderContent: "Введите адрес доставки",
	// });
	// myMap.geoObjects.add(deliveryPoint);

	// function onZonesLoad(json) {
	// 	// Добавляем зоны на карту.
	// 	var deliveryZones = ymaps.geoQuery(json).addToMap(myMap);
	// 	// Задаём цвет и контент балунов полигонов.
	// 	deliveryZones.each(function (obj) {
	// 		obj.options.set({
	// 			fillColor: obj.properties.get("stroke"),
	// 			fillOpacity: 0.3,
	// 			strokeColor: obj.properties.get("stroke"),
	// 			strokeWidth: obj.properties.get("stroke-width"),
	// 			strokeOpacity: obj.properties.get("stroke-opacity"),
	// 		});
	// 		obj.properties.set(
	// 			"balloonContent",
	// 			obj.properties.get("description")
	// 		);
	// 	});

	// 	// Проверим попадание результата поиска в одну из зон доставки.
	// 	searchControl.events.add("resultshow", function (e) {
	// 		highlightResult(searchControl.getResultsArray()[e.get("index")]);
	// 	});

	// 	// Проверим попадание метки геолокации в одну из зон доставки.
	// 	myMap.controls
	// 		.get("geolocationControl")
	// 		.events.add("locationchange", function (e) {
	// 			highlightResult(e.get("geoObjects").get(0));
	// 		});

	// 	// При перемещении метки сбрасываем подпись, содержимое балуна и перекрашиваем метку.
	// 	deliveryPoint.events.add("dragstart", function () {
	// 		deliveryPoint.properties.set({
	// 			iconCaption: "",
	// 			balloonContent: "",
	// 		});
	// 		deliveryPoint.options.set("iconColor", "black");
	// 	});

	// 	// По окончании перемещения метки вызываем функцию выделения зоны доставки.
	// 	deliveryPoint.events.add("dragend", function () {
	// 		highlightResult(deliveryPoint);
	// 	});

	// 	function highlightResult(obj) {
	// 		// Сохраняем координаты переданного объекта.
	// 		var coords = obj.geometry.getCoordinates(),
	// 			// Находим полигон, в который входят переданные координаты.
	// 			polygon = deliveryZones.searchContaining(coords).get(0);

	// 		if (polygon) {
	// 			// Уменьшаем прозрачность всех полигонов, кроме того, в который входят переданные координаты.
	// 			deliveryZones.setOptions("fillOpacity", 0.4);
	// 			polygon.options.set("fillOpacity", 0.8);
	// 			// Перемещаем метку с подписью в переданные координаты и перекрашиваем её в цвет полигона.
	// 			deliveryPoint.geometry.setCoordinates(coords);
	// 			deliveryPoint.options.set(
	// 				"iconColor",
	// 				polygon.properties.get("fill")
	// 			);
	// 			// Задаем подпись для метки.
	// 			if (typeof obj.getThoroughfare === "function") {
	// 				setData(obj);
	// 			} else {
	// 				// Если вы не хотите, чтобы при каждом перемещении метки отправлялся запрос к геокодеру,
	// 				// закомментируйте код ниже.
	// 				ymaps.geocode(coords, { results: 1 }).then(function (res) {
	// 					var obj = res.geoObjects.get(0);
	// 					setData(obj);
	// 				});
	// 			}
	// 		} else {
	// 			// Если переданные координаты не попадают в полигон, то задаём стандартную прозрачность полигонов.
	// 			deliveryZones.setOptions("fillOpacity", 0.4);
	// 			// Перемещаем метку по переданным координатам.
	// 			deliveryPoint.geometry.setCoordinates(coords);
	// 			// Задаём контент балуна и метки.
	// 			deliveryPoint.properties.set({
	// 				iconCaption: "Доставка транспортной компанией",
	// 				balloonContent: "Cвяжитесь с оператором",
	// 				balloonContentHeader: "",
	// 			});
	// 			// Перекрашиваем метку в чёрный цвет.
	// 			deliveryPoint.options.set("iconColor", "black");
	// 		}

	// 		function setData(obj) {
	// 			var address = [
	// 				obj.getThoroughfare(),
	// 				obj.getPremiseNumber(),
	// 				obj.getPremise(),
	// 			].join(" ");
	// 			if (address.trim() === "") {
	// 				address = obj.getAddressLine();
	// 			}
	// 			var price = polygon.properties.get("description");
	// 			price = price.match(/<strong>(.+)<\/strong>/)[1];
	// 			deliveryPoint.properties.set({
	// 				iconCaption: address,
	// 				balloonContent: address,
	// 				balloonContentHeader: price,
	// 			});
	// 		}
	// 	}
	// }
	objectManager = new ymaps.ObjectManager({
		clusterize: false,
	});

	// regionName = "Ленинский район, москва";
	// var url = "http://nominatim.openstreetmap.org/search";
	// $.getJSON(url, { q: regionName, format: "json", polygon_geojson: 1 }).then(
	// 	function (data) {
	// 		console.log(data);
	// 		let i = 0;
	// 		$.each(data, function (ix, place) {
	// 			if (i == 0 && "relation" == place.osm_type) {
	// 				console.log("place", place);
	// 				i = 1;
	// 				$("#steps").html(JSON.stringify(place.geojson));
	// 			}
	// 		});
	// 	},
	// 	function (err) {
	// 		console.log(err);
	// 	}
	// );
	let Geo = [];
	$.ajax({
		url: "json/regions.json",
		dataType: "json",
		success: function (regions) {
			$.ajax({
				url: "json/data.geojson",
				dataType: "json",
				success: function (json) {
					function createObj(select = false) {
						regions.forEach((region) => {
							let opacity = 0.2;
							if (select !== false) {
								if (region.id == select) {
									opacity = 0.5;
								}
							}
							myGeoObject = new ymaps.GeoObject(
								{
									type: region.type,
									id: region.id,
									geometry: {
										id: region.id,
										type: region.type,
										coordinates: region.coordinates,
									},
									// Свойства.
									properties: {
										balloonContent: region.title,
										id: region.id,
									},
								},
								{
									fillColor: "#008000",
									fillOpacity: opacity,
									strokeColor: "#008000",
									// Ширина линии.
									strokeWidth: 3,
								}
							);
							myMap.geoObjects.add(myGeoObject);
							// Geo.push(myGeoObject);
							if (select !== false) {
								if (region.id == select) {
									myGeoObject.balloon.open();
								}
							}
							myGeoObject.events.add(["click"], function (e) {
								var object = e
									.get("target")
									.properties.get("id");
								myMap.geoObjects.removeAll();
								createObj(object);
								regions.forEach((region) => {
									if (region.id == object) {
										$(".steps-form__btn-3").removeAttr(
											"disabled"
										);
										$(".st-inpt-3").val(region.title);
									}
								});

								// myMap.geoObjects.each((g) => {
								// 	console.log("g", g, g.id);
								// });
							});
						});
						json.features.forEach((obj) => {
							// objectManager.add(
							let opacity = 0.2;

							myGeoObject = new ymaps.GeoObject(
								{
									type: "Polygon",
									id: obj.id,
									geometry: {
										id: obj.id,
										// Тип геометрии - прямоугольник.
										type: "Polygon",
										// Координаты.
										coordinates: obj.geometry.coordinates,
									},
									// Свойства.
									properties: {
										id: obj.id,
										balloonContent:
											obj.properties.description,
									},
								},
								{
									fillColor: obj.properties.stroke,
									fillOpacity: opacity,
									strokeColor: obj.properties.stroke,
									// Ширина линии.
									strokeWidth: 3,
								}
							);

							myMap.geoObjects.add(myGeoObject);
						});
					}
					createObj();
				},
			});
		},
	});
}
