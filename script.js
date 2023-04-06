const number = document.querySelectorAll(".number");
const inputscreen = document.querySelector(".calculator-screen");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal-sign");
const allclear = document.querySelector(".all-clear");
const percentage = document.querySelector(".percentage");
let currentnumber = "0";
let prevnumber = "";
let calculationoperator = "";
const numberinput = (number) => {
  if (currentnumber == "0") {
    currentnumber = number;
  } else {
    currentnumber += number;
  }
};
const inputoperator = (operator) => {
  prevnumber = currentnumber;
  calculationoperator = operator;
  currentnumber = "0";
};

const updateScreen = (number) => {
  inputscreen.value = number;
};
number.forEach((number) => {
  number.addEventListener("click", (event) => {
    event.preventDefault();
    numberinput(event.target.value);
    updateScreen(currentnumber);
    console.log(prevnumber);
    console.log(currentnumber);
    console.log(calculationoperator);
  });
});
operator.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    event.preventDefault();
    inputoperator(event.target.value);
    updateScreen(calculationoperator);
  });
});

equal.addEventListener("click", () => {
  let result = "";
  switch (calculationoperator) {
    case "+":
      result = parseFloat(prevnumber) + parseFloat(currentnumber);
      break;
    case "-":
      result = parseFloat(prevnumber) - parseFloat(currentnumber);
      break;
    case "*":
      result = parseFloat(prevnumber) * parseFloat(currentnumber);
      break;
    case "/":
      result = parseFloat(prevnumber) / parseFloat(currentnumber);
      break;
    default:
      return;
  }
  currentnumber = result;
  calculationoperator = "";
  updateScreen(currentnumber);
});
allclear.addEventListener("click", () => {
  currentnumber = "0";
  calculationoperator = "";
  updateScreen(currentnumber);
});
percentage.addEventListener("click", () => {
  currentnumber = currentnumber / 100;
  updateScreen(currentnumber);
});