let [sec, min, hours] = [0, 0, 0];
let time = document.getElementById("time");
let timer = null;

function stopwatch() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
  }

  if (min == 60) {
    hours++;
    min = 0;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;

  time.innerHTML = `${h} : ${m} : ${s} `;
}

function start() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}
function restart() {
  clearInterval(timer);
  [sec, min, hours] = [0, 0, 0];
  time.innerHTML = "00 : 00 : 00";
}

function stop() {
  clearInterval(timer);
}
