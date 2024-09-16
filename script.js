let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = null;
let isRunning = false;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');

const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(updateTime, 10); // Updates every 10 milliseconds
  }
}

function pauseStopwatch() {
  isRunning = false;
  clearInterval(interval);
}

function resetStopwatch() {
  isRunning = false;
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
}

function updateTime() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds += 1;
  }

  if (seconds === 60) {
    seconds = 0;
    minutes += 1;
  }

  updateDisplay();
}

function updateDisplay() {
  minutesDisplay.textContent = formatTime(minutes);
  secondsDisplay.textContent = formatTime(seconds);
  millisecondsDisplay.textContent = formatMilliseconds(milliseconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
  return time < 100 ? `0${Math.floor(time / 10)}` : time;
}
