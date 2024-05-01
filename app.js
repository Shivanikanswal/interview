window.onload = function () {
  let startButton = document.getElementById("start-button");
  let pauseButton = document.getElementById("pause-button");
  let resetButton = document.getElementById("reset-button");
  let initialBox = document.getElementById("box");
  let timer = document.getElementById("timer");

  //   let boxContainer = document.querySelectorAll("#boxes");
  let clickNumber = "0";
  let flag = false;

  let rowOne = document.getElementById("table-row-1");

  function randomColor() {
    let color = "red";
    return color;
  }

  //   function randomPosition() {
  // let position = "0123456789";
  // position = position[Math.floor(Math.random() * 12)];
  // console.log(position);
  //   }

  function start() {
    if (flag) {
      initialBox.style.background = randomColor();
      console.log("red colored initialized");
      //   boxContainer.forEach((position) => {
      // position.style.background = randomColor();
      //   });
      setInterval(start, timer * 1000);
    }
  }

  resetButton.addEventListener("click", function () {
    clickNumber++;
    reset();
  });
  pauseButton.addEventListener("click", function () {
    clickNumber++;
    pause();
    initialBox.style.background = "grey";
  });

  function pause() {
    flag = false;
  }

  function reset() {
    flag = false;
  }
  startButton.addEventListener("click", function () {
    clickNumber++;
    if (flag) {
      flag = false;
    } else {
      flag = true;
    }
    start();
  });
  rowOne.innerHTML = clickNumber;
};
