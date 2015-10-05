$(document).ready(function() {
  // This callback function is invoked when the page is done loading

// Features

navigationClick();
menuBarClick();


})

function menuBarClick() {

  $($("a").not("#startButton")).click(function() {

  $("#practice, #global, #stats, #about").hide();
  $($(this).attr("href")).show();

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


  // Declaring score and box count

  var score = 0;
  var boxCount = 0;
  var ONE_SECOND = 1000; // 1000ms === 1s

  // I'm making this the game loop - Nắng

  gameLoop = setInterval(function(){


    var $box = createBox();
    appendBoxToPlayfield($box);
    positionBoxRandomly($box);


  }, ONE_SECOND);

  function Position(left, top) {

    this.left = left;
    this.top = top;

  }

  function createBox() {

    var $div = $("<div>", {class: "box"});
    boxCount++;
    $("#boxCount").text("Box count: " + boxCount);
    $div.click(function() {

      $( this ).remove();
      score++;
      boxCount--;
      $("#score").text("Score: " + score);
      $("#boxCount").text("Box count: " + boxCount);

    });
    // Player's lose condition
    if (boxCount >= 11) {
        clearInterval(gameLoop);
        alert("You lose!")
    }

    return $div;

  }

  function appendBoxToPlayfield($box) {
    $(".playfield").append($box);
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

      return Math.floor(Math.random() * ($( ".playfield" ).width() - 100));
      // 100 is to prevent boxes spawning out of bounds, still needs improvement

    }

  function getRandomTop() {

      return Math.floor(Math.random() * ($( ".playfield" ).height() - 100));
      // 100 is to prevent boxes spawning out of bounds, still needs improvement

    }
  })


;}
