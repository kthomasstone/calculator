let total = document.getElementById("total");
const clearButton = document.getElementById("clear");
const numberButtons = Array.from(
  document.getElementsByClassName("numbers-button")
);
const operationButtons = Array.from(
  document.getElementsByClassName("operation")
);
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

const equalButton = document.getElementById("equal");

let operandA;
let operator;
let operandB;
let answer;

let operandACheck;

// NUMBERS

// when a number button is clicked, append that number to the total
numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

// function to append number
function appendNumber(number) {
  if (total.textContent === "0") {
    clearTotal();
  }
  // assign operand value
  if (operator === undefined) {
    if (operandA === undefined) {
      operandA = number;
      console.log(`operandA equals ${operandA}`);
    } else {
      operandA += number;
      console.log(`operandA equals ${operandA}`);
    }
  } else {
    if (operandB === undefined) {
      operandB = number;
      console.log(`operandB equals ${operandB}`);
    } else {
      operandB += number;
      console.log(`operandB equals ${operandB}`);
    }
  }

  total.textContent += number;
  console.log(total.textContent);
}

// REMOVAL & CLEAR

// clear the total when needed
function clearTotal() {
  total.textContent = "";
}
clearButton.addEventListener("click", () => clearTotal());

// OPERATIONS

// create event listener for operations buttons. switch between cases depending on id of button clicked.

operationButtons.forEach((button) => {
  button.addEventListener("click", () => selectOperator(button.textContent));
});

function selectOperator(operation) {
  operator = operation;
  console.log(operator);
  total.textContent += operation;
}

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
  a = Number(a);
  b = Number(b);
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

equalButton.addEventListener("click", () => {
  answer = operate(operandA, operator, operandB);
  console.log(answer);
  operandA = undefined;
  operandB = undefined;
  operator = undefined;
  total.textContent = answer;
});
