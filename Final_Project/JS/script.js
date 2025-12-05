$("#medieval li").hover(function() {
  $(this).addClass("hover");
}, function() {
  $(this).removeClass("hover");
});

$("#heading section").hover(function() {
  $(this).addClass("headingHover");
}, function() {
  $(this).removeClass("headingHover");
});

$("#images img").hover(function() {
  $(this).addClass("galleryHover");
}, function() {
  $(this).removeClass("galleryHover");
});
