$(function() {
    var header = $(".navbar");
    var brandImg = $(".navbar-brand img");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
            
        } else {
            header.removeClass("scrolled");
            
        }
    });
});



$(document).ready(function() {
    $('.carousel').carousel();
    $('#principal-close').click(function(){
    $('#myModal').modal('hide');
    $(document.body).scrollTop($('#anchorId').offset().top);
});
    $('#contacto-close').click(function(){
    $('#myModal').modal('hide');
    $(document.body).scrollTop($('#anchorId').offset().top);
});
   
});
$(document).ready(function(){
    (function(){
  // setup your carousels as you normally would using JS
  // or via data attributes according to the documentation
  // https://getbootstrap.com/javascript/#carousel
  $('#carousel123').carousel({ interval: 4000 });
}());

(function(){
  $('.carousel-showsixmoveone .item').each(function(){
    var itemToClone = $(this);

     for (var i=1;i<6;i++) {
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      // grab item, clone, add marker class, add to collection
      var clonedItem = itemToClone.children(':first-child').clone();
      clonedItem.addClass("cloneditem-"+(i))
         .appendTo($(this));
    }
  });
}());
})


function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height() ;

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).scroll(function(event) {
  
  $(".not-in-view").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("visible"); 
    } else {
      el.removeClass("visible");
    }
  });
  
});



