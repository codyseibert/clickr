$(document).ready(function() {
  // This callback function is invoked when the page is done loading

  // Declaring score and box count

  var score = 0;
    var boxCount = 0;

  // What do we need to do?
  alert("Click the box to delete it! You lose if there are more than 10 boxes on the page!");
  // Task 1: Spawn random boxes on the page every second

  // Well, first off, let's make a interval for every second
  // I'm making this the game loop - Nắng
  var ONE_SECOND = 1000; // 1000ms === 1s

  gameLoop = setInterval(function(){
    // This callback is invoked every second
    // unless the player loses.

    // We need to spawn a box here
    var $box = createBox();
    appendBoxToBody($box);
    positionBoxRandomly($box);


    // How do we find a random position?
  }, ONE_SECOND);

  function Position(left, top) {
    this.left = left;
    this.top = top;

  }

  function createBox() {
    // TODO: Create a DIV using jquery
    // TODO: add the class "box" to the DIV
    // TODO: bind an event listener to the 'click' event
    //    HINT: Use "boxClicked" method

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
    if (boxCount == 11) {
        clearInterval(gameLoop);
        alert("You lose!")
    }

    return $div;

  }



  function appendBoxToBody($box) {
    // TODO: append the $box argument passed in to the body of the page
    $("body").append($box);
  }

  function positionBoxRandomly($box) {
    // TODO: set the top and left attributes of the "$box" style to be somewhere
    // random on the page.
    // Hint: use the "getRandomPosition" function to get a position object

    $box.offset(getRandomPosition());

  }

  function getRandomPosition() {
    return new Position(getRandomLeft(), getRandomTop());
  }

  function getRandomLeft() {
    // TODO: Return a random position between 0 and the width of the window

      return Math.floor(Math.random() * ($( window ).width() - 100));
      // 100 is to prevent boxes spawning out of bounds, still needs improvement

    }

  function getRandomTop() {
    // TODO: Return a random position between 0 and the width of the window

      return Math.floor(Math.random() * ($( window ).height() - 100));
      // 100 is to prevent boxes spawning out of bounds, still needs improvement

  }
});
