let crane = document.getElementById("crane");
let up = document.getElementById("up");
let down = document.getElementById("down");
let left = document.getElementById("left");
let right = document.getElementById("right");

function move(str) {
    var step = 50; // change this to different step value
    switch (str) {
      case "down":
        var y = crane.offsetTop;
        y = y + step;
        crane.style.top = y + "px";
        break;
  
      case "up":
        var y = crane.offsetTop;
        y = y - step;
        crane.style.top = y + "px";
        break;
  
      case "left":
        var x = crane.offsetLeft;
        x = x - step;
        crane.style.left = x + "px";
        break;
  
      case "right":
        var x = crane.offsetLeft;
        x = x + step;
        crane.style.left = x + "px";
        break;
    }
  }
  
  up.addEventListener("click", function () {
    move("up");
  });
  
  down.addEventListener("click", function () {
    move("down");
  });
  
  left.addEventListener("click", function () {
    move("left");
  });
  
  right.addEventListener("click", function () {
    move("right");
  });