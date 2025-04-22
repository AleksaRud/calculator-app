import Calculator from "./calculator.js";

let currentInput = "";
let previousInput = "";
let operation = "";

const display = document.getElementById("display");

function updateDisplay() {
  display.value = currentInput;
}

export function setupUI() {
  document.querySelectorAll(".buttons button").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.innerText;

      if (!isNaN(value) || value === ".") {
        currentInput += value;
      } else if (["+", "-", "×", "÷"].includes(value)) {
        previousInput = currentInput;
        operation = value;
        currentInput = "";
      } else if (value === "=") {
        currentInput = calculateResult();
      } else if (value === "C") {
        currentInput = "";
        previousInput = "";
        operation = "";
      } else if (value === "±") {
        currentInput = Calculator.negate(parseFloat(currentInput)).toString();
      } else if (value === "%") {
        currentInput = Calculator.percent(parseFloat(currentInput)).toString();
      }

      updateDisplay();
    });
  });
}

function calculateResult() {
  const a = parseFloat(previousInput);
  const b = parseFloat(currentInput);

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
