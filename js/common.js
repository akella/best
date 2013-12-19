$(document).ready(function() {

$('.wrapresults__switcher a').click(function(event) {
  $('.wrapresults__switcher a').toggleClass('is-active');
  $('.objectview,.listview').toggle();
  return false;
});
$('.items__list').click(function(event) {
  $(this).parent().toggleClass('is-active');
  $(this).toggleClass('is-active');
  $(this).parent().find('.table').slideToggle();
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

  $(".search__rangevalue1,.search__rangevalue2").change(function () {
    var value = $(this).val();
    var target = $(this).data('slider');
    var num = $(this).data('nvalue');
    //alert(target+'=='+value);
    $("#"+target).slider("values", num, parseInt(value));
    return false;
  });

    if($("#slider-range").length > 0){
      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 30000,
        values: [ 1000, 30000 ],
        slide: function( event, ui ) {
         $('#search__pricevalue1').val(ui.values[ 0 ]);
         $('#search__pricevalue2').val(ui.values[ 1 ]);
        }
      });
      $('#search__pricevalue1').val($( "#slider-range" ).slider( "values", 0 ));
      $('#search__pricevalue2').val($( "#slider-range" ).slider( "values", 1 ));
    }

    if($("#slider-range1").length > 0){
      $( "#slider-range1" ).slider({
        range: true,
        min: 0,
        max: 30000,
        values: [ 1000, 30000 ],
        slide: function( event, ui ) {
         $('#search__rangevalue1').val(ui.values[ 0 ]);
         $('#search__rangevalue2').val(ui.values[ 1 ]);
        }
      });
      $('#search__rangevalue1').val($( "#slider-range1" ).slider( "values", 0 ));
      $('#search__rangevalue2').val($( "#slider-range1" ).slider( "values", 1 ));
    }


    if($("#slider-range2").length > 0){
      $( "#slider-range2" ).slider({
        range: true,
        min: 0,
        max: 30000,
        values: [ 1000, 30000 ],
        slide: function( event, ui ) {
         $('#search__range2value1').val(ui.values[ 0 ]);
         $('#search__range2value2').val(ui.values[ 1 ]);
        }
      });
      $('#search__range2value1').val($( "#slider-range2" ).slider( "values", 0 ));
      $('#search__range2value2').val($( "#slider-range2" ).slider( "values", 1 ));
    }

    if($("#slider-range3").length > 0){
      $( "#slider-range3" ).slider({
        range: true,
        min: 0,
        max: 30000,
        values: [ 1000, 30000 ],
        slide: function( event, ui ) {
         $('#search__range3value1').val(ui.values[ 0 ]);
         $('#search__range3value2').val(ui.values[ 1 ]);
        }
      });
      $('#search__range3value1').val($( "#slider-range3" ).slider( "values", 0 ));
      $('#search__range3value2').val($( "#slider-range3" ).slider( "values", 1 ));
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