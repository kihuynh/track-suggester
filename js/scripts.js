$(document).ready(function () {
  $("form#fields").submit(function(event) {

    var personality = $("select#personality").val();
    var phone = $("select#phone").val();
    var frontback = $("select#frontback").val();

    if ((personality === "Creative") && (phone === "Android" || phone === "iPhone") &&  (frontback === "Front-end")) {
      console.log("css path")
      $("#css").show();
    } else if ((personality === "Technical") && (phone === "Android" || phone === "iPhone")  || (frontback === "Back-end")) {
      console.log("does if statement working?")
      $("#android").show();
      console.log("android path")
    } else if ((personality === "Technical" || personality === "Creative") && (phone === "Android" || phone === "iPhone") || (frontback === "FULLSTACK")) {
      console.log("ruby path")
      $("#ruby").show();
    } else {
        $("#everything").show();
        console.log("Everything was false so I show everything")
    }

    console.log("I made it to the end");
    event.preventDefault();
  });
});
