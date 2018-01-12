$(document).ready(function () {
  $("form#fields").submit(function(event) {
    $(".result").show();

    event.preventDefault();
  });
});
