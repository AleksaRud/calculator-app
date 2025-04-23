import Calculator from "./calculator.js";
import { appendNumber, appendDecimal, setOperation, calculate, clearDisplay, negate, percent, setupUI } from "./ui.js";
  
window.appendNumber = appendNumber;
window.appendDecimal = appendDecimal;
window.setOperation = setOperation;
window.calculate = calculate;
window.clearDisplay = clearDisplay;
window.negate = negate;
window.percent = percent;

document.addEventListener("DOMContentLoaded", setupUI);