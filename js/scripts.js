$(document).ready(function () {
  $("form#fields").submit(function(event) {

    var personality = $("select#personality").val();
    var phone = $("select#phone").val();
    var frontback = $("select#frontback").val();

    if ((personality === "Creative") && (phone === "Android" || phone === "iPhone") &&  (frontback = "Front-end")) {
      console.log("personality if")
      $("#css").show();
    } else if ((personality === "Technical") && (phone === "Android" || phone === "iPhone")  && (frontback = "Back-end")) {
      console.log("does if statement working?")
      $("#android").show();
      console.log("It's the css result!")
    } else {
        console.log("last else")
        $("#everything").show();
        console.log("Everything was false so I show everything")
    }


    // $(".result").show();

    console.log("I made it to the end");
    event.preventDefault();
  });
});
