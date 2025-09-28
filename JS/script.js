e$("header nav li:last").css({border: "4px solid #33cc33"});

$("#Projects section").hover(function() {
  $(this).addClass("hoverTime");
}, function() {
  $(this).removeClass("hoverTime");
});

$("#Skills p").hover(function() {
  $(this).addClass("hoverTimeTwo");
}, function() {
  $(this).removeClass("hoverTimeTwo");
});

$("#Skills li").hover(function() {
  $(this).addClass("hoverTimeTwo");
}, function() {
  $(this).removeClass("hoverTimeTwo");
});

//$("#Skills h3").hover(function() {
 // $(this).animate({
 //   textAlign = "center"
//  }), 5000
//});

//$(document).ready(function(){
//  $("#degrees").hover(function(){
//    $(".degree").fadeOut(5000);
//  });
//})

$(document).ready(function(){
  $("#images").hover(function(){
    $("img").fadeOut(5000);
  });
})
