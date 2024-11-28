let seconds = 0;
let timerInterval = null;

// Select DOM elements
const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('stop');
const resetButton = document.getElementById('restart');

// Format time into HH:MM:SS
function formatTime(sec) {
   
    const minutes = Math.floor(sec / 60);
    const remainingSeconds = sec % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Start the timer
startButton.addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            seconds++;
            timeDisplay.textContent = formatTime(seconds);
        }, 1000);
    }
});

// Pause the timer
pauseButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});
resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null;
  seconds = 0;
  timeDisplay.textContent = '00:00';
});