import Calculator from "./calculator.js";

let currentInput = "";
let previousInput = "";
let operation = "";

const display = document.getElementById("display");

function updateDisplay() {
  display.value = currentInput || "0";
}

export function appendNumber(number) {
  if (currentInput === "0" && number !== ".") {
    currentInput = number.toString();
  } else {
    currentInput += number.toString();
  }
  updateDisplay();
}

export function appendDecimal() {
  if (currentInput == ""){
    currentInput = "0.";
    updateDisplay();
  }
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

export function setOperation(op) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    currentInput = calculateResult();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = "";
  updateDisplay();
}

function calculateResult() {
  const a = parseFloat(previousInput);
  const b = parseFloat(currentInput);

  if (isNaN(a) || isNaN(b)) return currentInput;

  switch (operation) {
    case "+":
      return Calculator.add(a, b).toString();
    case "-":
      return Calculator.subtract(a, b).toString();
    case "×":
      return Calculator.multiply(a, b).toString();
    case "÷":
      return Calculator.divide(a, b).toString();
    default:
      return currentInput;
  }
}

export function calculate() {
  if (operation === "" || currentInput === "") return;
  currentInput = calculateResult();
  previousInput = "";
  operation = "";
  updateDisplay();
}

export function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operation = "";
  updateDisplay();
}

export function negate() {
  if (currentInput === "") return;
  currentInput = Calculator.negate(parseFloat(currentInput)).toString();
  updateDisplay();
}

export function percent() {
  if (currentInput === "") return;
  currentInput = Calculator.percent(parseFloat(currentInput)).toString();
  updateDisplay();
}

export function setupUI() {
  document.querySelectorAll(".number-button").forEach((button) => {
    button.addEventListener("click", () => appendNumber(button.innerText));
  });

  document.querySelector(".decimal-button").addEventListener("click", appendDecimal);

  document.querySelectorAll(".operation-button").forEach((button) => {
    button.addEventListener("click", () => setOperation(button.innerText));
  });

  document.querySelector(".equals-button").addEventListener("click", calculate);
  document.querySelector(".clear-button").addEventListener("click", clearDisplay);
  document.querySelector(".negate-button").addEventListener("click", negate);
  document.querySelector(".percent-button").addEventListener("click", percent);
}
