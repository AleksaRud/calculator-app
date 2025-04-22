const Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b !== 0 ? a / b : "Error"),
    percent: (a) => a / 100,
    negate: (a) => -a,
  };
  export default Calculator;  