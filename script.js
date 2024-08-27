const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function updateClock() {
  const currentDate = new Date();
  const hour = currentDate.getHours() % 12;
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();

  const hourDeg = (hour + minute / 60) * 30;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  const minuteDeg = (minute + second / 60) * 6;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

  const secondDeg = second * 6;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);