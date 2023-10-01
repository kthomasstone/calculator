let total = document.getElementById("total");

let numberButtons = Array.from(
  document.getElementsByClassName("numbers-button")
);

let operandA;
let operator;
let operandB;

const clearButton = document.getElementById("clear");

// when a number button is clicked, append that number to the total
numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

// function to append number
function appendNumber(number) {
  if (total.textContent === "0") {
    clearTotal();
  }
  total.textContent += number;
  console.log(total.textContent);
}

// clear the total when needed
function clearTotal() {
  total.textContent = "";
}
clearButton.addEventListener("click", () => clearTotal());

// Basic operation functions for add, subtract, multiply, and divide
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Operate function calls upon basic operation functions depending on the operator selected
function operate(a, operator, b) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
  }
}
