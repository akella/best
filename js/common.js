$(document).ready(function() {

// Создаем собственную метку
var s = new YMaps.Style(); // Создаем стиль 
s.iconStyle = new YMaps.IconStyle(); // Создает стиль значка метки
s.iconStyle.href = "img/metka.png"; // Указываем путь к картинке
s.iconStyle.size = new YMaps.Point(23, 34); // Размеры картинки
s.iconStyle.offset = new YMaps.Point(-10, -19); // Сдвиг
var map = new YMaps.Map(document.getElementById("YMapsID"));
map.setCenter(new YMaps.GeoPoint(37.64, 55.76), 9);




// just test data
var bounds = map.getBounds(),
    pointLb = bounds.getLeftBottom(),
    span = bounds.getSpan();


// first group
var gCollection1 = new YMaps.GeoObjectCollection();
for (var i = 0; i < 5; i++) {
    var point = new YMaps.GeoPoint(pointLb.getLng() + span.x * Math.random(),
                                   pointLb.getLat() + span.y * Math.random());
    var placemark = new YMaps.Placemark(point,{style: s});
    placemark.name = "<div class='baloon'><img src='http://placedog.com/100/50' style='float:left'   /><div style='font-size:16px;color:#333;'>Название</div><div style='font-weight:normal;color:#555;font-size:13px;clear:both;padding-top:10px'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, quas voluptatum dolorem praesentium modi harum nihil sequi nemo similique ea at animi quo! Voluptatibus, facere, vel modi tempore a nobis.</div></div>"; // Заголовок балуна
    gCollection1.add(placemark);
}
map.addOverlay(gCollection1);


// second group
var gCollection2 = new YMaps.GeoObjectCollection();
for (var i = 0; i < 5; i++) {
    var point = new YMaps.GeoPoint(pointLb.getLng() + span.x * Math.random(),
                                   pointLb.getLat() + span.y * Math.random());
    var placemark = new YMaps.Placemark(point,{style: s});
    placemark.name = "<div class='baloon'><img src='http://placedog.com/100/50' style='float:left'   /><div style='font-size:16px;color:#333;'>Название</div><div style='font-weight:normal;color:#555;font-size:13px;clear:both;padding-top:10px'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, quas voluptatum dolorem praesentium modi harum nihil sequi nemo similique ea at animi quo! Voluptatibus, facere, vel modi tempore a nobis.</div></div>"; // Заголовок балуна
    gCollection2.add(placemark);
}
map.addOverlay(gCollection2);

// third group
var gCollection3 = new YMaps.GeoObjectCollection();
for (var i = 0; i < 5; i++) {
    var point = new YMaps.GeoPoint(pointLb.getLng() + span.x * Math.random(),
                                   pointLb.getLat() + span.y * Math.random());
    var placemark = new YMaps.Placemark(point,{style: s});
    placemark.name = "<div class='baloon'><img src='http://placedog.com/100/50' style='float:left'   /><div style='font-size:16px;color:#333;'>Название</div><div style='font-weight:normal;color:#555;font-size:13px;clear:both;padding-top:10px'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, quas voluptatum dolorem praesentium modi harum nihil sequi nemo similique ea at animi quo! Voluptatibus, facere, vel modi tempore a nobis.</div></div>"; // Заголовок балуна
    gCollection3.add(placemark);
}
map.addOverlay(gCollection3);




$('.search__group').click(function(event) {
  
  //this is shit
  asd = $(this).attr('href').substring(1);
  if(asd=='1' && $(this).hasClass('is-active')) {map.removeOverlay(gCollection1);}
  else{map.addOverlay(gCollection1);}

  if(asd=='2' && $(this).hasClass('is-active')) {map.removeOverlay(gCollection2);}
  else{map.addOverlay(gCollection2);}
  if(asd=='3' && $(this).hasClass('is-active')) {map.removeOverlay(gCollection3);}
  else{map.addOverlay(gCollection3);}
  $(this).toggleClass('is-active');
  return false;
});
  //adding mark example
  // var geocoder = new YMaps.Geocoder("Россия, Москва, ул. Тверская, д. 43"); 
  // YMaps.Events.observe(geocoder, geocoder.Events.Load, function (geocoder) {
  //     var geoCoords = geocoder.get(0).getGeoPoint(),
  //     geoPlacemark = new YMaps.Placemark(geoCoords,{style: s});
  //     // console.log(geoCoords);
  //     geoPlacemark.name = "Имя метки1"; // Заголовок балуна
  //     geoPlacemark.description = "Описание метки"; // Текст балуна
  //     map.addOverlay(geoPlacemark); 
  // });

  // var geocoder = new YMaps.Geocoder("Россия, Москва, Казанский переулок, д. 16"); 
  // YMaps.Events.observe(geocoder, geocoder.Events.Load, function (geocoder) {
  //     var geoCoords = geocoder.get(0).getGeoPoint(),
  //     geoPlacemark = new YMaps.Placemark(geoCoords,{style: s});
  //     // console.log(geoCoords);
  //     geoPlacemark.name = "Имя метки2"; // Заголовок балуна
  //     geoPlacemark.description = "Описание метки"; // Текст балуна
  //     map.addOverlay(geoPlacemark); 
  // });





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
      //map.removeControl(control2);
      // map.removeControl(control3);
      // map.redraw();
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

	$('.room label').click(function(event) {
		$(this).toggleClass('is-active');
	});
	$('.filters li').click(function(event) {
		$('.filters a').removeClass('is-active');
		$(this).children('a').addClass('is-active');
		return false;
	});

    if($("#slider-range").length > 0){
      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 30000,
        values: [ 1000, 30000 ],
        slide: function( event, ui ) {
         $('#search__pricevalue1').text(ui.values[ 0 ]);
         $('#search__pricevalue2').text(ui.values[ 1 ]);
        }
      });
      $('#search__pricevalue1').text($( "#slider-range" ).slider( "values", 0 ));
      $('#search__pricevalue2').text($( "#slider-range" ).slider( "values", 1 ));
    }

    if($("#slider-range1").length > 0){
      $( "#slider-range1" ).slider({
        range: true,
        min: 0,
        max: 30000,
        values: [ 1000, 30000 ],
        slide: function( event, ui ) {
         $('#search__rangevalue1').text(ui.values[ 0 ]);
         $('#search__rangevalue2').text(ui.values[ 1 ]);
        }
      });
      $('#search__rangevalue1').text($( "#slider-range1" ).slider( "values", 0 ));
      $('#search__rangevalue2').text($( "#slider-range1" ).slider( "values", 1 ));
    }


    if($("#slider-range2").length > 0){
      $( "#slider-range2" ).slider({
        range: true,
        min: 0,
        max: 30000,
        values: [ 1000, 30000 ],
        slide: function( event, ui ) {
         $('#search__range2value1').text(ui.values[ 0 ]);
         $('#search__range2value2').text(ui.values[ 1 ]);
        }
      });
      $('#search__range2value1').text($( "#slider-range2" ).slider( "values", 0 ));
      $('#search__range2value2').text($( "#slider-range2" ).slider( "values", 1 ));
    }

    if($("#slider-range3").length > 0){
      $( "#slider-range3" ).slider({
        range: true,
        min: 0,
        max: 30000,
        values: [ 1000, 30000 ],
        slide: function( event, ui ) {
         $('#search__range3value1').text(ui.values[ 0 ]);
         $('#search__range3value2').text(ui.values[ 1 ]);
        }
      });
      $('#search__range3value1').text($( "#slider-range3" ).slider( "values", 0 ));
      $('#search__range3value2').text($( "#slider-range3" ).slider( "values", 1 ));
    }
	

    // galleries
    
    $(".js-preview-picture").click(function(){
      var path = $(this).attr('href');
      $(".js-picture").html('<img src=' + path + ' alt=""/>');
      $(".about-gallery__nav li").removeClass('is-active');
      $(".gallery-preview li").removeClass('is-active');
      $(this).parent().addClass('is-active');
      return false;
    });
    
    if($(".scroll-pane").length > 0){
      $('.scroll-pane').jScrollPane({
        horizontalDragMaxWidth: 50
      });
    }

    $('.superpopup__close,.overlay').click(function(event) {
      $('.superpopup, .overlay').hide();
    });
    $('.superpopup__nav a').click(function(event) {
      $('.superpopup__nav a').removeClass('is-active');
      $(this).addClass('is-active');
      return false;
    });

    $('#aboutnav a').click(function(event) {
      idd = $(this).attr('href');
      target = $(''+idd);
      $('#aboutnav a').removeClass('is-active');
      $(this).addClass('is-active');
      $.scrollTo( target, 800 ,{ offset:-90 });
      return false;
    });
    var $cdr = $(".callus__drop");
    $('.callus').click(function(event) {
      $(this).addClass('is-active');
    });
    /* Hide the popup whereas clicking outside */
    $(document).on("click", function() {
      //$cdr.hide();
      $('.callus').removeClass('is-active');
    });
     //Don't hide the popup whereas clicking inside 
    $cdr.on("click", function(evt) {
        evt.stopPropagation();
    });
     $('.callus').on("click", function(evt) {
        evt.stopPropagation();
    });


   




  var stickyPanelSettings = {
        // Use this to set the top margin of the detached panel.
        topPadding: 10,

        // This class is applied when the panel detaches.
        afterDetachCSSClass: "",

        // When set to true the space where the panel was is kept open.
        savePanelSpace: true,

        // Event fires when panel is detached
        // function(detachedPanel, panelSpacer){....}
        onDetached: null,

        // Event fires when panel is reattached
        // function(detachedPanel){....}
        onReAttached: null,

        // Set this using any valid jquery selector to 
        // set the parent of the sticky panel.
        // If set to null then the window object will be used.
        parentSelector: null
    };
    $(".is-fixed2, .is-fixed").stickyPanel(stickyPanelSettings);

    if($("#slider-range3").length > 0){
      $(".fancybox").fancybox({
        overlayShow: true,
      });
    }
});