YMaps.jQuery(function () {
            // Создание экземпляра карты и его привязка к созданному контейнеру
            var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);

            var s = new YMaps.Style(); // Создаем стиль 
            s.iconStyle = new YMaps.IconStyle(); // Создает стиль значка метки
            s.iconStyle.href = "img/metka.png"; // Указываем путь к картинке
            s.iconStyle.size = new YMaps.Point(23, 34); // Размеры картинки
            s.iconStyle.offset = new YMaps.Point(-10, -19); // Сдвиг
            var map = new YMaps.Map(document.getElementById("YMapsID"));
            map.setCenter(new YMaps.GeoPoint(37.64, 55.76), 9);

            // Группы объектов
            var groups = [
                createGroup("Новостройки Москвы", [
                    createPlacemark(new YMaps.GeoPoint(37.511403, 55.524005), "",
                        "img/l/m-buid-logo-1.png", 
                        "<a href='http://best-novostroy.ru/sales/novoe_butovo/'>Жилой комплекс «Новое Бутово»</a>", 
                        "6 км от МКАД, рядом район «Южное бутово». Доступна ипотека, продается по ФЗ-214, рядом с метро"),

                    createPlacemark(new YMaps.GeoPoint(37.508924, 55.755689), "",
                        "img/l/m-buid-logo-2.png", 
                        "<a href='http://best-novostroy.ru/sales/fili-grad/'>Жилой комплекс «Фили Град»</a>", 
                        "Район Филевский парк, Береговой проезд, владение 5 <br>Доступна ипотека, рассрочка, продается по ФЗ-214, рядом с метро"),

                    createPlacemark(new YMaps.GeoPoint(37.473764, 55.863278), "",
                        "img/l/m-buid-logo-no.png", 
                        "<a href='http://best-novostroy.ru/sales/whitepark/'>Жилой комплекс «Белый парк»</a>", 
                        "Москва, Левобережный район. Метро «Речной вокзал» в пешей доступности. <br>Доступна ипотека. Сдача объекта в третьем квартале 2014 г. "),

                    createPlacemark(new YMaps.GeoPoint(37.471714, 55.86643), "",
                        "img/l/m-buid-logo-no.png", 
                        "<a href='http://best-novostroy.ru/sales/novoe_butovo/'>Жилой комплекс «Дом в Левобережном»</a>", 
                        "Москва, Левобережный район. Метро «Речной вокзал» в пешей доступности. Доступна ипотека")

                ], s),
                createGroup("Новостройки Новой Москвы", [
                    createPlacemark(new YMaps.GeoPoint(37.354038, 55.517789), "",
                        "img/l/m-buid-logo-3.png", 
                        "<a href='http://best-novostroy.ru/novostroyki_novoy_moskvy/novye-vatutinki/'>Жилой комплекс «Новые Ватутинки. Микрорайон Центральный»</a>", 
                        "14 км от МКАД, Ленинский район (Новая Москва), рядом д. Десна <br>Доступна ипотека, рассрочка, продается по ФЗ-214"),
                    createPlacemark(new YMaps.GeoPoint((37.370303, 55.512797), "",
                        "img/l/m-buid-logo-4.png", 
                        "<a href='http://best-novostroy.ru/novostroyki_novoy_moskvy/novye-vatutinki/'>Жилой комплекс «Новые Ватутинки. Южный квартал»</a>", 
                        "14 км от МКАД, Ленинский район (Новая Москва), рядом д. Десна <br>Доступна ипотека, рассрочка, продается по ФЗ-214"),
                    createPlacemark(new YMaps.GeoPoint(37.336158, 55.552112), "",
                        "img/l/m-buid-logo-5.png", 
                        "<a href='http://best-novostroy.ru/novostroyki_novoy_moskvy/marino/'>Жилой комплекс «Марьино Град» </a>", 
                        "14 км от МКАД, Ленинский район (Новая Москва) рядом с поселком Марьино. Продается по ФЗ-214. Есть скидки и рассрочка, доступна ипотека"),
                    createPlacemark(new YMaps.GeoPoint(37.316592, 55.549843), "",
                        "img/l/m-buid-logo-no.png", 
                        "<a href='http://best-novostroy.ru/novostroyki_novoy_moskvy/sportivnyy-kvartal/'>Жилой комплекс «Спортивный квартал»</a>", 
                        "Район Филевский парк, Береговой проезд, владение 5 <br>Доступна ипотека, рассрочка, продается по ФЗ-214, рядом с метро")
                ], s),
                createGroup("Новостройки Подмосковья", [
                    createPlacemark(new YMaps.GeoPoint(37.302743, 55.662846), "",
                        "img/l/m-buid-logo-6.png", 
                        "<a href='http://best-novostroy.ru/novostroyki_podmoskovya/odintsovskiy_park/'>Жилой комплекс «Одинцовский Парк»</a>", 
                        "8 км от МКАД, Одинцовский район, рядом город Одинцово. Продается по ФЗ-214. Есть скидки и рассрочка, доступна ипотека"),
                    createPlacemark(new YMaps.GeoPoint(37.245774, 55.681413), "",
                        "img/l/m-buid-logo-no.png", 
                        "<a href='http://best-novostroy.ru/novostroyki_podmoskovya/odinburg/'>Жилой комплекс «Одинбург»</a>", 
                        "11 км от МКАД, город Одинцово. Доступна ипотека, продается по ФЗ-214. Можно купить по стартовым ценам"),

                    createPlacemark(new YMaps.GeoPoint(37.8566, 55.674915), "",
                        "img/l/m-buid-logo-no.png", 
                        "<a href='http://best-novostroy.ru/novostroyki_podmoskovya/belye_rosy/'>Жилой комплекс «Белые росы»</a>", 
                        "3 км от МКАД, город Котельники. Метро «Жулебино» в пешей доступности. Продается по ФЗ-214"),

                    createPlacemark(new YMaps.GeoPoint(37.721705, 55.908491), "",
                        "img/l/m-buid-logo-7.png", 
                        "<a href='http://best-novostroy.ru/novostroyki_podmoskovya/9-18/'>Жилой комплекс «9-18, Жилой квартал»</a>", 
                        "7 км от МКАД, в центре города Мытищи. Доступна ипотека, продается по ФЗ-214"),

                    createPlacemark(new YMaps.GeoPoint(37.976122, 55.608461), "",
                        "img/l/m-buid-logo-8.png", 
                        "<a href='http://best-novostroy.ru/novostroyki_podmoskovya/oktyabr/'>Жилой комплекс «Октябрь»</a>", 
                        "12 км от МКАД, Люберецкий район, в поселке Октябрьский. Продается по ФЗ-214. Есть рассрочка, доступна ипотека"),

                    createPlacemark(new YMaps.GeoPoint(37.981258, 55.603462), "",
                        "img/l/m-buid-logo-9.png", 
                        "<a href='http://best-novostroy.ru/novostroyki_novoy_moskvy/novye-vatutinki/'>Жилой комплекс «Новые Островцы»</a>", 
                        "12 км от МКАД, Люберецкий район, в поселке Октябрьский. Доступна ипотека, продается по ФЗ-214"),

                    createPlacemark(new YMaps.GeoPoint(37.371715, 55.826481), "",
                        "img/l/m-buid-logo-10.png", 
                        "<a href='http://best-novostroy.ru/novostroyki_podmoskovya/spasskiy-most/'>Жилой комплекс «Спасский Мост»</a>", 
                        "2 км от МКАД, находится между Москвой и Красногорском. Продается по ФЗ-214. Есть рассрочка, доступна ипотека. Идет выдача ключей"),

                    createPlacemark(new YMaps.GeoPoint(37.986302, 55.905491), "",
                        "img/l/m-buid-logo-11.png", 
                        "<a href='http://best-novostroy.ru/novostroyki_podmoskovya/dom_na_moskovskoi/'>Жилой комплекс «Дом на Московской»</a>", 
                        "16 км от МКАД, рядом город Щелково. Продается по ФЗ-214. Дом построен, квартиры с отделкой"),

                    createPlacemark(new YMaps.GeoPoint(37.398884, 55.689382), "",
                        "img/l/m-buid-logo-12.png", 
                        "<a href='http://best-novostroy.ru/novostroyki_podmoskovya/skolkovo/'>Жилой комплекс «Форт Сколково»</a>", 
                        "1 км от МКАД, Одинцовский район, поселок Заречье. Дом сдан, идет выдача ключей"),

                    createPlacemark(new YMaps.GeoPoint(37.37688, 55.708528), "",
                        "img/l/m-buid-logo-13.png", 
                        "<a href='http://best-novostroy.ru/novostroyki_podmoskovya/slavyanka/'>Жилой комплекс «Славянка-Сколково»</a>", 
                        "2 км от МКАД, Одинцовский район, п. Новоивановское. Есть рассрочка, доступна ипотека. Идет выдача ключей"),

                    createPlacemark(new YMaps.GeoPoint(37.184725, 55.85715), "",
                        "img/l/m-buid-logo-15.png", 
                        "<a href='http://best-novostroy.ru/novostroyki_podmoskovya/nahabino/'>Жилой комплекс «ЭКО ПАРК Нахабино»</a>", 
                        "15 км от МКАД, Красногорский район, рядом с поселком Нахабино"),

                    createPlacemark(new YMaps.GeoPoint(37.281363, 55.898334), "",
                        "img/l/m-buid-logo-16.png", 
                        "<a href='http://best-novostroy.ru/novostroyki_podmoskovya/aristovo-mitino/'>Жилой комплекс «Аристово-Митино»</a>", 
                        "10 км от МКАД, рядом деревня Аристово. Есть рассрочка, доступна ипотека"),
                    
                    createPlacemark(new YMaps.GeoPoint(37.316036, 55.688789), "",
                        "img/l/m-buid-logo-no.png", 
                        "<a href='http://best-novostroy.ru/novostroyki_podmoskovya/mamonovo/'>Жилой комплекс «Одинцово-Мамоново»</a>", 
                        "5 км от МКАД, Одинцовский район, в поселке Мамоново")
                ], s)
            ];

            // Создание списка групп
            for (var i = 0; i < groups.length; i++) {
                addMenuItem(groups[i], map, YMaps.jQuery(".search__groupscontent"));
            }




  $('.search__groups h4').click(function(event) {
    $(this).parent().toggleClass('is-opened');
    return false;
  });



  $('.js-show').click(function(event) {
    $('.search__advanced').toggle();
    //$('.search').toggleClass('search_advanced');
    $('.search__more').slideDown();
    $('.search, #YMapsID').animate({ height: '417px' }, 300,function(){

      map.redraw();
      $('.search').addClass('search_advanced');
    });
    return false;
  });

  $('.js-hide').click(function(event) {
    $('.search__advanced').toggle();
    $('.search__more').slideUp();
    $('.search,#YMapsID').animate({ height: '234px' }, 300);
    $('.search').removeClass('search_advanced');
    return false;
  });
control1 = new YMaps.Zoom();
control2 = new YMaps.ScaleLine();


  $('.js-togglemap').click(function(event) {
    //map.redraw() 
    
    if($('.search__mapimg').width()>500){
      
      if($('.search').hasClass('search_advanced')){
        $('.search__mapimg').animate({ width: '268px', height: '417px' }, 300,function(){
          map.redraw();
        });
      }
      else{
        $('.search__mapimg').animate({ width: '268px', height: '234px' }, 300,function(){
          map.redraw();
        });
        $('.search').animate({ height: '234px' }, 300);
      }

      
      map.removeControl(control1);
    }
    else{
      $('.search__mapimg, .search').animate({ width: '1000px',height: '417px' }, 300,function(){
        map.addControl(control1);
        //map.addControl(control2);
        //map.addControl(control3);
        map.redraw();
      });
    }
    $(this).children('span').toggle();
    return false;
  });







        })

        // Добавление одного пункта в список
        function addMenuItem (group, map, menuContainer) {
            map.addOverlay(group);
            // Показать/скрыть группу на карте
            YMaps.jQuery("<a class=\"search__group is-active\" href=\"#\">" + group.title + "<i></i></a>")
                .bind("click", function () {
                    var link = YMaps.jQuery(this);

                    // Если пункт меню "неактивный", то добавляем группу на карту,
                    // иначе - удаляем с карты
                    if (link.hasClass("is-active")) {
                        map.removeOverlay(group);
                    } else {
                        map.addOverlay(group);
                    }

                    // Меняем "активность" пункта меню
                    link.toggleClass("is-active");

                    return false;
                })

                // Добавление нового пункта меню в список
                .appendTo(
                    menuContainer
                )
        };

        // Создание группы
        function createGroup (title, objects, style) {
            var group = new YMaps.GeoObjectCollection(style);

            group.title = title;
            group.add(objects);
            
            return group;
        };

        // Создание метки
        function createPlacemark (point, name, logo, title, descr) {
            var placemark = new YMaps.Placemark(point);

            placemark.name = name;
            placemark.description = "<div class='baloon'><div class='baloon__logo'><img src='"+logo+"'/></div><div class='baloon__title'>"+title+"</div><div class='baloon__text'>"+descr+"</div></div>";

            return placemark
        }