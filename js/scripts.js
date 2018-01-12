$(document).ready(function () {
  $("form#fields").submit(function(event) {

    var personality = $(".radio#personality").val();
    var phone = $("select#phone").val();


    if (phone === "Android") {
      console.log("does if statement working?")
      $("#android").show();
      console.log("It's the css result!")
    } else {
        $(".result").show();
        console.log("Everything was false so I show everything")
    }


    // $(".result").show();

    console.log("I made it to the end");
    event.preventDefault();
  });
});
