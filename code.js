let firstNumber;
let secondNumber;
let operator;

let calculatorDisplay = document.querySelector(".calculator-display");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let equals = document.querySelector(".equals");
calculatorDisplay.innerHTML = "";

function numberPressed() {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
      populateDisplay(numbers[i].innerHTML);
    });
  }
}
numberPressed();

function operatorPressed() {
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", () => {
      operator = operators[i].innerHTML;
      firstNumber = Number(calculatorDisplay.innerHTML);
      calculatorDisplay.innerHTML = "";
    });
  }
}
operatorPressed();

function equalsPressed() {
  equals.addEventListener("click", () => {
    secondNumber = Number(calculatorDisplay.innerHTML);
    calculatorDisplay.innerHTML = "";
    operate(firstNumber, secondNumber, operator);
  });
}
equalsPressed();

function populateDisplay(number) {
  calculatorDisplay.innerHTML += number;
}

function add(num1, num2) {
  populateDisplay(num1 + num2);
}

function subtract(num1, num2) {
  populateDisplay(num1 - num2);
}

function multiply(num1, num2) {
  populateDisplay(num1 * num2);
}

function divide(num1, num2) {
  populateDisplay(num1 / num2);
}

function operate(num1, num2, operator) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "x") {
    return multiply(num1, num2);
  } else if (operator == "÷") {
    return divide(num1, num2);
  }
}