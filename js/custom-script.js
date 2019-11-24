$(function(){

///// 1 ///////

$("#image1").on("click", function(){
  $(".slide-responsive").attr('src', 'images/howitworks_ipad_v2.png');
  $("#image1").css("color", "rgba(0,0,0,1)");
  $(".badge-1").css("color", "rgba(0,0,0,1)");
  $(".badge-1").css("border-color", "rgba(0,0,0,1)");

  // Change Back the other options...
  $("#image2").css("color", "rgba(0,0,0,0.4)");
  $(".badge-2").css("color", "rgba(0,0,0,0.4)");
  $(".badge-2").css("border-color", "rgba(0,0,0,0.4)");

  /////
  $("#image3").css("color", "rgba(0,0,0,0.4)");
  $(".badge-3").css("color", "rgba(0,0,0,0.4)");
  $(".badge-3").css("border-color", "rgba(0,0,0,0.4)");
});

///// 2 ///////

$("#image2").on("click", function(){
  $(".slide-responsive").attr('src', "images/howitworks_iphones_v2.png");
  $("#image2").css("color", "rgba(0,0,0,1)");
  $(".badge-2").css("color", "rgba(0,0,0,1)");
  $(".badge-2").css("border-color", "rgba(0,0,0,1)");

  // Change Back the other options...
  $("#image1").css("color", "rgba(0,0,0,0.4)");
  $(".badge-1").css("color", "rgba(0,0,0,0.4)");
  $(".badge-1").css("border-color", "rgba(0,0,0,0.4)");
  /////
  $("#image3").css("color", "rgba(0,0,0,0.4)");
  $(".badge-3").css("color", "rgba(0,0,0,0.4)");
  $(".badge-3").css("border-color", "rgba(0,0,0,0.4)");
});

///// 3 ///////

$("#image3").on("click", function(){
  $(".slide-responsive").attr('src', 'images/howitworks_certificate_v2.png');
  $("#image3").css("color", "rgba(0,0,0,1)");
  $(".badge-3").css("color", "rgba(0,0,0,1)");
  $(".badge-3").css("border-color", "rgba(0,0,0,1)");

  // Change Back the other options...
  $("#image2").css("color", "rgba(0,0,0,0.4)");
  $(".badge-2").css("color", "rgba(0,0,0,0.4)");
  $(".badge-2").css("border-color", "rgba(0,0,0,0.4)");
  /////
  $("#image1").css("color", "rgba(0,0,0,0.4)");
  $(".badge-1").css("color", "rgba(0,0,0,0.4)");
  $(".badge-1").css("border-color", "rgba(0,0,0,0.4)");
});




})
