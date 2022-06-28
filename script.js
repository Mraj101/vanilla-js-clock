let seconds;
let minutes;
let hours;
let livetime;
let time = document.querySelector("#times");
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    date = new Date();
  day= date.tolocalDateString(undefined,options);
  seconds = date.getSeconds();
  minutes = date.getMinutes();
  hours = date.getHours();
  if (hours > 12) hours = hours - 12;
  livetime = hours + " : " + minutes + " : " + seconds;
  time.innerHTML = livetime+"on"+day;
}, 1000);
