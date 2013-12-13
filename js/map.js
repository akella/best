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
                    createPlacemark(new YMaps.GeoPoint(37.511403, 55.524005), "","img/logo1.png", "Жилой комплекс «Новое Бутово»", "16 км от МКАД, рядом г. Щелково Продается по ФЗ-214, дом готов, квартиры с отделкой, сдача 4 квартал 2013 г."),
                    createPlacemark(new YMaps.GeoPoint(37.50768, 55.755347), "","img/logo3.png", "Жилой комплекс «Фили Град»","Район Филевский парк, Береговой проезд, владение 5. Доступна ипотека, рассрочка, продается по ФЗ-214, рядом с метро.")
                ], s),
                createGroup("Новостройки Новой Москвы", [
                    //todo
                ], s),
                createGroup("Новостройки Подмосковья", [
                    createPlacemark(new YMaps.GeoPoint(37.984155, 55.603973), "","img/logo9.png", "Жилой комплекс «Новые Островцы»", "12 км от МКАД, Люберецкий район, в п. Октябрьский. Доступна ипотека, продается по ФЗ-214.")
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
            placemark.description = "<div class='baloon'><div class='baloon__logo'><img src='"+logo+"'/></div><div class='baloon__title'>Жилой комплекс «Фили Град»</div><div class='baloon__text'>Район Филевский парк, Береговой проезд, владение 5. Доступна ипотека, рассрочка, продается по ФЗ-214, рядом с метро.</div></div>";

            return placemark
        }