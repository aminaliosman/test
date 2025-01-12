const hoursElem = document.querySelector(".hours");
const minutesElem = document.querySelector(".minutes");
const secondsElem = document.querySelector(".seconds");
const clockboxElem = document.querySelectorAll(".clock-box");
const btns = document.querySelectorAll("button");

let timezone = 0;

let date = new Date();

function getTime() {
  const date = new Date();

  let hours = date.getHours() + timezone;
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  return [String(hours), String(minutes), String(seconds)];
}

function app() {
  setInterval(() => {
    const [h, m, s] = getTime();
    hoursElem.textContent = h;
    minutesElem.textContent = m;
    secondsElem.textContent = s;
  }, 100);

  btns.forEach((btn) => {
    btn.classList.remove("active");
    btn.addEventListener("click", (event) => {
      const { country } = btn.dataset;
      timezone = getTimeZone(country.toLowerCase());
      btns.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });
  function getTimeZone(country) {
    switch (country) {
      case "moscow":
        return -1;
      case "madrid":
        return -3;
      case "nyc":
        return -8;
      case "london":
        return -4;
      default:
        return 0;
    }
  }
}
app();
