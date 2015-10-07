$(document).ready(function() {
  // This callback function is invoked when the page is done loading

// Features

navigationClick();
menuBarClick();
gameStart();


})



function menuBarClick() {

  $($("a").not("#startButton")).click(function() {

  $("#practice, #global, #stats, #about").hide();

  $($(this).attr("href")).show("slow", function(e) {
  });

});

}

function navigationClick() {

  $("#title").click(function() {

     $("#navigationBar").slideToggle();
     $("#title").text( "Clickr Menu" );

   });

}

 function gameStart() {





  $("#startButton").click(function() {

  accuracyCount();
  $("#practice").append(
    $(".score"),
    $(".boxCount"),
    $(".accuracyCount"),
    $('.timer')

  )


  // Declaring score and box count
  $("#startButton").hide(100);
  $("#practice > .box").remove();
  var score = 0;
  var boxCount = 0;
  var clickCount = 0;
  var timeElapsed = new Date;
  var ONE_SECOND = 1000; // 1000ms === 1s

  // I'm making this the game loop - Nắng

  gameLoop = setInterval(function(){

    $('.timer').text("Time elasped:" + Math.round((new Date - timeElapsed) / 1000, 0) + " Seconds");
    var $box = mainGameCount();
    appendBoxToPlayfield($box);
    positionBoxRandomly($box);
    checkForVisible();


  }, ONE_SECOND);

  function accuracyCount() {

       $($("#practice").not("#startButton")).click(function() {

         clickCount++;

       });

     }



  function Position(left, top) {

    this.left = left;
    this.top = top;

  }

  function checkForVisible(){
    if ($("#practice").is(":hidden")){
      clearInterval(gameLoop);
      $(".box").remove();
      $("#startButton").show(100);

  }

}


  function mainGameCount() {

    var $div = $("<div>", {class: "box"});
    boxCount++;
    $(".boxCount").text("Box count: " + boxCount);
    $div.click(function() {

      $( this ).remove();
      score++;
      boxCount--;
      $(".score").text("Score: " + score);
      $(".boxCount").text("Box count: " + boxCount);
      $(".accuracyCount").text("Accuracy: " + Math.round((score / clickCount) * 100, 2) + "%");


    });

    // Player's lose condition
    if (boxCount >= 11) {
        clearInterval(gameLoop);
        alert("You lose!");
        $("#practice").hide();
        $("#stats").show();
        $(".boxCount").remove();
        $("#startButton").show(100);
        $("#practice > div").unbind("click");
        $("#stats").append(
          $(".score").text("Score: " + score),
          $(".accuracyCount").text("Accuracy: " + Math.round((score / (clickCount - 1)) * 100, 2) + "%"),
          $('.timer').text("Time elasped:" + Math.round((new Date - timeElapsed) / 1000, 0) + " Seconds")

        );
    }

    return $div;

  }

  function checkForVisibility() {
    if ( $("#practice").css('display') == 'none' ){
      clearInterval(gameLoop);
}
  }

  function appendBoxToPlayfield($box) {
    $("#practice").append($box);
  }

  function positionBoxRandomly($box) {
    // random on the page.
    // Hint: use the "getRandomPosition" function to get a position object

    $box.offset(getRandomPosition());

  }

  function getRandomPosition() {

    return new Position(getRandomLeft(), getRandomTop());

  }

  function getRandomLeft() {

      return Math.floor((Math.random() * $( "#practice" ).width()) + 0);

    }

  function getRandomTop() {

      return Math.floor((Math.random() * $( "#practice" ).height()) + 0);

    }


})}
