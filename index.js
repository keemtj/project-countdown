const daysEl = document.querySelector(".days");
const hoursEl = document.querySelector(".hours");
const minuteEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");

let years = new Date().getFullYear();
const newYears = `1 Jan ${years + 1}`;

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000; // least seconds
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  // console.log(days, hours, minutes, seconds);

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    years += 1;
  }

  daysEl.innerText = days;
  hoursEl.innerText = formatTime(hours);
  minuteEl.innerText = formatTime(minutes);
  secondsEl.innerText = formatTime(seconds);
}

const init = () => setInterval(countdown, 1000);

window.addEventListener("load", init);
