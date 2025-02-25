$(document).ready(function () {
  $(".mag").click(function () {
    $(".ttcross").show();
    $(".mag").hide();
    $(".search").show();
  });
});
$(document).ready(function () {
  $(".ttcross").click(function () {
    $(".ttcross").hide();
    $(".mag").show();
    $(".search").hide();
  });
});
