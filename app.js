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
let Clock = document.querySelector(".clock");

let nightMode = () => {
  Mode.classList.add("nightmode");
  Clock.style =
    "background-color:rgba(252,252,252,0.82);; box-shadow: -4px 2px 94px 51px rgba(252,252,252,0.82);";
};

let lightMode = () => {
  Mode.classList.remove("nightmode");
  Clock.style =
    "background-color: #f0ec0c; box-shadow: -4px 2px 94px 53px rgba(245,235,5,0.82);";
};
