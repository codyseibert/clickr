$(document).ready(function() {
  // This callback function is invoked when the page is done loading

// Features

navigationClick();
menuBarClick();
startClick();

})



function menuBarClick() {

  $($("a").not("#startButton")).click(function() {

  $("#practice, #global, #stats, #about").hide();


  $($(this).attr("href")).show(0, function(e) {
  });

});

}

function navigationClick() {

  $("#title").click(function() {

     $("#navigationBar").slideToggle();
     $("#title").text( "Clickr Menu" );

   });

}

function startClick(){

  $("#startButton").click(function() {


  $("#practice > .box").remove();
  var counter = 4;


  countdown = setInterval(function() {
        counter--;
        $("#startButton").hide();

        if (counter >= 0) {
          $(".startTimer").html(counter);
          }

        if (counter == 0) {
          clearInterval(countdown);
          $(".startTimer").hide();
          $("#practice > div").show();

          gameStart();

                }
      }, 1000)

})}


 function gameStart() {



  var attemptNumber = 0;



  accuracyCount();
  killStack();
  // Declaring score and box count
  var killStack = 1;// Killstack is an increasing variable, designed to kill the player
  var score = 0;
  var boxCount = 0;
  var clickCount = 0;
  var timeElapsed = new Date;
  var ONE_SECOND = 1000; // 1000ms === 1s
  // I'm making this the game loop - Nắng

  gameLoop = setInterval(function(){

    checkForVisible();
    checkForLose();
    scoreTrack();


  }, ONE_SECOND);

  var spawnSpeed = function(){
    clearInterval(speed);
    var $box = mainGameCount();
    appendBoxToPlayfield($box);
    positionBoxRandomly($box);
    speed = setInterval(spawnSpeed, ONE_SECOND - (killStack*1000));
    }

  var speed = setInterval(spawnSpeed, ONE_SECOND - (killStack*1000));



  function scoreTrack() {
      $("#practice > .score").text("Score: " + score);
      $("#practice > .boxCount").text("Box count: " + boxCount);
      $("#practice > .accuracyCount").text("Accuracy: " + Math.round((score / (clickCount) ) * 100, 2) + "%");
      $('#practice > .timer').text("Time elasped:" + Math.round((new Date - timeElapsed) / 1000, 0) + " Seconds");
  }

  function accuracyCount() {

       $($("#practice").not("#startButton")).click(function() {

         clickCount++;

       });

     }

  function killStack() {
    // Increases the kill stack variable up to a maximum of 10 stacks, every 10 seconds
    setInterval(function(){
      if (killStack <= 10) {
        killStack++;
      }

    },  10000)
  }

  function Position(left, top) {

    this.left = left;
    this.top = top;

  }

  function checkForVisible(){
    if ($("#practice").is(":hidden")){
      clearInterval(gameLoop);
      $(".box").remove();
      $("#startButton").show();

  }

}


  function mainGameCount() {

    var $div = $("<div>", {class: "box"});
    boxCount++;
    $(".boxCount").text("Box count: " + boxCount);
    $div.click(function() {
        score++;
        boxCount--;
        $( this ).remove();

    });


    return $div;

  }

  function checkForLose() {
    if (boxCount >= 6) {
        clearInterval(gameLoop);
        alert("You lose!");
        attemptNumber++;
        $("#practice").hide();
        $("#stats").show();
        $(".startTimer").show();
        $(".startTimer").text(" ");
        $(".boxCount").remove();
        var $newScore = $("#practice > div").not("#startButton, .boxCount, .box").clone();
        $("#stats").append("<h2>Run #" + attemptNumber + "</h2>");
        $newScore.appendTo("#stats");
        $("#practice > div").hide();
        $("#startButton").show();



    }
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

}
