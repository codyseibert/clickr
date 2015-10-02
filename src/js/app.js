$(document).ready(function() {
  // This callback function is invoked when the page is done loading

  // What do we need to do?

  // Task 1: Spawn random boxes on the page every second

  // Well, first off, let's make a interval for every second
  var ONE_SECOND = 1000; // 1000ms === 1s
  setInterval(function(){
    // This callback is invoked every second

    // We need to spawn a box here
    var $box = createBox()
    appendBoxToBody($box);
    positionBoxRandomly($box);

    // How do we find a random position?
  }, ONE_SECOND);

  function Position(left, top) {
    this.left = left;
    this.top = top;
  }

  function boxClicked() {
    // TODO: Delete the box when it is clicked
  }

  function createBox() {
    // TODO: Create a DIV using jquery
    // TODO: add the class "box" to the DIV
    // TODO: bind an event listener to the 'click' event
    //    HINT: Use "boxClicked" method
  }

  function appendBoxToBody($box) {
    // TODO: append the $box argument passed in to the body of the page
  }

  function positionBoxRandomly($box) {
    // TODO: set the top and left attributes of the "$box" style to be somewhere
    // random on the page.
    // Hint: use the "getRandomPosition" function to get a position object
  }

  function getRandomPosition() {
    return new Position(getRandomLeft(), getRandomTop());
  }

  function getRandomLeft() {
    // TODO: Return a random position between 0 and the width of the window
  }

  function getRandomTop() {
    // TODO: Return a random position between 0 and the width of the window
  }
});
