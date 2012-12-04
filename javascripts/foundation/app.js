;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
  $.fn.foundationButtons          ? $doc.foundationButtons() : null;
  $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
  $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
  $.fn.foundationTopBar           ? $doc.foundationTopBar({breakPoint: 900}) : null;
  $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
  $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
  $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
  $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;

  $('input, textarea').placeholder();

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices
  if (Modernizr.touch) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }
 


  var tag = document.createElement('script');

  tag.src = "//www.youtube.com/iframe_api";

  var firstScriptTag = document.getElementsByTagName('script')[0];
  
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;




  function loadYouTubeIframeVideo() {    
     player = new YT.Player('player', {
          width: '560',
          height: '315',
          videoId: 'cP3eRHyPMjc',
          playerVars: { 
            'modestbranding': 1,
            'enablejsapi': 1,
            'rel': 0,
            'origin': 'www.stagelighter.com',
            'showinfo': 0,
            'controls': 2,
            'autohide': 1,
            'theme':'dark'
          },
          events: {
            'onReady': onPlayerReady
          }
        }); 
  }


      
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  $(window).load(function() {


    /*
     var parentHost = undefined;

      try {
        parentHost = top.location.host;
      }
      catch (e) {
        alert('test catch');
        // iframe's parent is on a different host - for good browsers
      }

      if (parentHost == undefined) {
        alert('test undef');
        // iframe's parent is on a different host - for bad browsers
      }
      else {
        alert('test same');
        // iframe's parent is on the same host
      }
    */

      //$('.touch #player .play').css({ opacity: 1 });
    
    //function onYouTubeIframeAPIReady() {
      
      $('#player').click(function() {
          loadYouTubeIframeVideo();
        }); 
    //}

  });


/*
  $(window).load(function() {
       $('#featured1').orbit({ fluid: '3x4',bullets: true,timer: false, directionalNav: true });
	   //$('#featured2').orbit({ fluid: '1x1',bullets: true,timer: false, directionalNav: true });
   });
*/
 

})(jQuery, this);