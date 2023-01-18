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

	let Geo = [];
	$.ajax({
		url: "json/data.geojson",
		dataType: "json",
		success: function (json) {
			function createObj(select = false) {
				json.features.forEach((obj) => {
					// objectManager.add(
					let opacity = 0.2;
					if (select !== false) {
						if (obj.id == select) {
							opacity = 0.5;
						}
					}
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
								balloonContent: obj.properties.description,
							},
						},
						{
							fillColor: obj.properties.stroke,
							fillOpacity: opacity,
							strokeColor: obj.properties.stroke,
							// Ширина линии.
							strokeWidth: 5,
						}
					);
					// Geo.push(myGeoObject);
					myGeoObject.events.add(["click"], function (e) {
						var object = e.get("target").properties.get("id");
						myMap.geoObjects.removeAll();
						createObj(object);
						json.features.forEach((obj) => {
							console.log(obj.id, object);
							if (obj.id == object) {
								console.log("sss");
								$(".steps-form__btn-3").removeAttr("disabled");
								$(".st-inpt-3").val(obj.properties.description);
							}
						});

						// myMap.geoObjects.each((g) => {
						// 	console.log("g", g, g.id);
						// });
					});

					myMap.geoObjects.add(myGeoObject);
				});
			}
			createObj();
		},
	});
}
