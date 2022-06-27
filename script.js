let seconds;
let minutes;
let hours;
let livetime;
var time = document.querySelector("#times");
setInterval(() => {
  a = new Date();
  seconds = a.getSeconds();
  minutes = a.getMinutes();
  hours = a.getHours();
  if (hours > 12) hours = hours - 12;
  livetime = hours + " : " + minutes + " : " + seconds;
  time.innerHTML = livetime;
}, 1000);
