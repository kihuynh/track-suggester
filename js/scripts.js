$(document).ready(function () {
  $("form#fields").submit(function(event) {

    var personality = $("select#personality").val();
    var phone = $("select#phone").val();
    var frontback = $("select#frontback").val();
    var name = $("#name").val();

    if ((personality === "Creative") && (phone === "Android" || phone === "iPhone") &&  (frontback === "Front-end")) {
      $("#css").show();
    } else if ((personality === "Technical") && (phone === "Android" || phone === "iPhone")  && (frontback === "Back-end")) {
      $("#android").show();
    } else if ((personality === "Technical" || personality === "Creative") && (phone === "Android" || phone === "iPhone") || (frontback === "FULLSTACK")) {
      $("#ruby").show();
    } else {
        $("#everything").show();

    }

    $("span.insert").text(name.toUpperCase());

    event.preventDefault();
  });
});
