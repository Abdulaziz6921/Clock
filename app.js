const deg = 6;
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
});

// Night Mode Function
let Mode = document.querySelector("body");
let Clock = document.querySelector(".box");
let sound1 = document.getElementById("audio1");
let sound2 = document.getElementById("audio2");

let nightMode = () => {
  Mode.classList.add("nightmode");
  Clock.classList.add("night_clock");
  sound2.play();
  sound1.pause();
};

let lightMode = () => {
  Mode.classList.remove("nightmode");
  Clock.classList.remove("night_clock");
  sound2.pause();
  sound1.play();
};
