$(document).ready(function () {
  $("form#fields").submit(function(event) {

    var personality = $("select#personality").val();
    var phone = $("select#phone").val();
    var frontback = $("select#frontback").val();
    var name = $("#name").val();

    if ((personality === "Creative") && (phone === "Android" || phone === "iPhone") &&  (frontback === "Front-end")) {
      console.log("css path")
      $("#css").show();
    } else if ((personality === "Technical") && (phone === "Android" || phone === "iPhone")  && (frontback === "Back-end")) {
      $("#android").show();
      console.log("android path")
    } else if ((personality === "Technical" || personality === "Creative") && (phone === "Android" || phone === "iPhone") || (frontback === "FULLSTACK")) {
      console.log("ruby path")
      $("#ruby").show();
    } else {
        $("#everything").show();
        console.log("else dumbtruck")
    }

    $("span.insert").text(name.toUpperCase());
    console.log("I made it to the end");
    event.preventDefault();
  });
});
