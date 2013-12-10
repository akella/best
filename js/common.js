$(document).ready(function() {
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
	

    // about-gallery
    
    $(".js-preview-picture").click(function(){
      var path = $(this).attr('href');
      $(".js-picture").html('<img src=' + path + ' alt=""/>');
      return false;
    });

    //gallery
    
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
    $(".tabs-menu, .is-fixed").stickyPanel(stickyPanelSettings);


    $(".fancybox").fancybox({
      overlayShow: true,
    });
});