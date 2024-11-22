setInterval(() => {
  const date = document.getElementById("clock");
  date.textContent =
    (new Date().getHours() <= 9
      ? "0" + new Date().getHours()
      : new Date().getHours()) +
    ":" +
    (new Date().getMinutes() <= 9
      ? "0" + new Date().getMinutes()
      : new Date().getMinutes());
}, 1000);

let ans = 0;

const display = document.querySelector(".calculator-display");

function addToDisplay(input) {
  if (
    ans == 1 &&
    !(input === "+" || input === "-" || input === "/" || input === "*")
  ) {
    clear();
  }
  ans = 0;
  display.value += input;
  if (display.value === "0") {
    display.value = input;
    return;
  }
}

function clearDisplay() {
  display.value = "0";
}

function calculate() {
  try {
    display.value = eval(display.value);
    ans = 1;
  } catch (error) {
    display.value = error;
    ans = 1;
  }
}

function toogleminus() {
  if (display.value[0] === "-") {
    display.value;
  } else {
    display.value = "-" + display.value;
  }
}
