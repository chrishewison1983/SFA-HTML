// ===================================== General Scripts - START ===================================== //
$(document).ready(function() {

     $(".place-holder").click(function(){
          $(this).toggleClass("active");
          $("footer .counter").slideDown(500);
          $("footer").slideDown(1000).addClass("visible");
	});

     $(".job-family .cta-link.more-info-link").click(function(){
          // $(this).parent().parent().parent().toggleClass("full-width");
          $(this).siblings(".top-5, .intro").slideToggle(500);
          // $(".top-5, .intro").slideToggle(500);
          $(this).parent().siblings(".more-info").slideToggle(500);
          $(this).html($(this).text() == 'Hide full job profile list' ? 'Show full job profile list' : 'Hide full job profile list' + "<span></span>");
          // $(this).html("Hide full job profile list"));
     });

     $(".select").click(function(){
          $(this).parent().parent().parent().toggleClass("active");
          $(this).html($(this).text() == 'Remove' ? 'Select' : 'Remove' + "<span></span>");
          $("footer .counter").slideDown(500);
          $("footer").addClass("visible");
          // $("footer").show(500);
     });

     $(".job-family .select").click(function(){
          $(this).toggleClass("remove");
     });

     $(".job-profile .select").click(function(){
          $(this).parent().parent().parent().removeClass("active");
          $(this).html($(this).text() == 'View job profile' ? 'View job profile' : 'View job profile');
          $("footer .counter").hide();
     });

     $(".remove").click(function(){
          $(this).parent().parent().parent().toggleClass("remove").removeClass("active");
          $(this).html($(this).text() == 'Bring back' ? 'Not interested' : 'Bring back');
          $(this).parent().siblings(".text").toggleClass("hide");
          $(this).siblings(".select").toggleClass("hide");
     });

});
// ===================================== General Scripts - END ===================================== //

// ===================================== Scroll Too - START ===================================== //
$(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 150
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
// ===================================== Scroll Too - END ===================================== //

// ===================================== Sticky Scroller - START ===================================== //
function moveScroller() {
     var $anchor = $("#scroller-anchor");
     var $scroller = $('#scroller');

     var move = function() {
          var st = $(window).scrollTop();
          var ot = $anchor.offset().top;
          if(st > ot) {
               $scroller.css({
                    position: "fixed",
                    top: "0px"
               });
               $scroller.addClass("fixed");
          } else {
               if(st <= ot) {
                    $scroller.css({
                         position: "relative",
                         top: ""
                    });
                    $scroller.removeClass("fixed");
               }
          }
     };

     $(window).scroll(move);
     move();
}
// ===================================== Sticky Scroller - END ===================================== //
