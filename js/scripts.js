$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hiding").toggle();
    $("#initially-shown").toggle();
  });
  $(".clickable2").click(function() {
    $("#hide2").toggle();
    $("#show2").toggle();
  });
  $(".clickable3").click(function() {
    $("#hide3").toggle();
    $("#show3").toggle();
  });
  $("p#p1").toggleClass("crazybox");
  });

