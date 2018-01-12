$(document).ready(function () {
  $("form#fields").submit(function(event) {



    if (SELECTORS ADDED AND SHOW TO PATH) {
      console.log("does if statement working?")
      $(".result#css").show();
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
