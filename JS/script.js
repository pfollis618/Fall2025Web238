$("header nav li:last").css({border: "4px solid #33cc33"});

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
