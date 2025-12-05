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

//Accordian Code
$(document).ready(function(){
  $("#accordian").click(function(){
    $("#panel").slideToggle("slow");
  });
});

//Gallery Code
$("#images img").hover(function() {
  $(this).addClass("galleryHover");
}, function() {
  $(this).removeClass("galleryHover");
});

$(document).ready(function(){
  $(".visible").click(function(){
    $("#invisible").fadeIn(1000);
   });
});

$(document).ready(function(){
  $(".visible").click(function(){
    $("#invisible").addClass("gallery-flexbox");
   });
});
