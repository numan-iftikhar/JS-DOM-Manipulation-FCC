const startStopBtn = document.querySelector("#play");
const resetBtn = document.querySelector("#reset");
const timer = document.querySelector("#timer");

let seconds = 0;
let minutes = 0;
let hours = 0;

// vars for start stop the watch
let timerInterval = null;
let watchStatus = "stopped";

function stopWatch() {
  seconds++;

  // check for minutes
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    // check for hours
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  // * Adding leading zeros
  if (seconds < 10) {
    var leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds.toString();
  }

  if (minutes < 10) {
    var leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes.toString();
  }

  if (hours < 10) {
    var leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours.toString();
  }

  timer.innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}

startStopBtn.addEventListener("click", function () {
  if (watchStatus === "stopped") {
    /*
     * setInterval() call a function infinitely
     * it returns an exp, for us, timerInterval
     * this exp is used in clearInterval() to stop it
     */
    timerInterval = window.setInterval(stopWatch, 1000);
    startStopBtn.innerHTML = `<i class="fa-solid fa-pause""></i>`;
    watchStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    startStopBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    watchStatus = "stopped";
  }
});

resetBtn.addEventListener("click", () => {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer.innerText = `00:00:00`;

  // change pause btn to play btn
  startStopBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  watchStatus = "stopped";
});
