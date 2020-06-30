$(document).ready(function () {
  $surface = $(".surface");
  $car = $(".car");
  $(document).on("keypress", function (e) {
    console.log(e.which);
    if (e.which == 13) {
      //alert("hey");
      $($surface).toggleClass("go");
      $($car).toggleClass("forward");
    }
  });
});
