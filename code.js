// let numberArray = [];
// let operatorArray = [];
// var numOrOperator = "number";

// let calculatorDisplay = document.querySelector(".calculator-display");
// let numbers = document.querySelectorAll(".number");
// let operators = document.querySelectorAll(".operator");
// let equals = document.querySelector(".equals");
// let deleteButton = document.querySelector(".delete");
// let clear = document.querySelector(".clear");



// function numberPressed() {
//   for (let i = 0; i < numbers.length; i++) {
//     numbers[i].addEventListener("click", () => {
//       if (numOrOperator == "number") {
//         populateDisplay(numbers[i].innerHTML);
//       } else {
//         calculatorDisplay.innerHTML = "";
//         populateDisplay(numbers[i].innerHTML);
//         numOrOperator = "number";
//       }
//     });
//   }
// }
// numberPressed();

// function operatorPressed() {
//   for (let i = 0; i < operators.length; i++) {
//     operators[i].addEventListener("click", () => {
//       operatorArray.push(operators[i].innerHTML);
//       numberArray.push(Number(calculatorDisplay.innerHTML));
//       numOrOperator = "operator";
//       if (operatorArray.length > 1) {
//         numberArray[1] = operate(numberArray[0], numberArray[1], operatorArray[0]);
//         numberArray = numberArray.slice(1);
//         operatorArray = operatorArray.slice(1);
//         calculatorDisplay.innerHTML = "";
//         populateDisplay(numberArray[0]);
//       }
//     });
//   }
// }
// operatorPressed();

// function equalsPressed() {
//   equals.addEventListener("click", () => {
//     numberArray.push(Number(calculatorDisplay.innerHTML));
//     calculatorDisplay.innerHTML = "";

//     numberArray[1] = operate(numberArray[0], numberArray[1], operatorArray[0]);
//     numberArray = numberArray.slice(1);
//     operatorArray = operatorArray.slice(1);
//     numOrOperator = "operator";
//     populateDisplay(numberArray[0]);
//   });
// }
// equalsPressed();

// function clearPressed() {
//   clear.addEventListener("click", () => {
//     calculatorDisplay.innerHTML = "";
//     numberArray = [];
//     operatorArray = [];
//     numOrOperator = "number";
//   });
// }
// clearPressed();

// function deletePressed() {
//   deleteButton.addEventListener("click", () => {
//     calculatorDisplay.innerHTML = calculatorDisplay.innerHTML.substring(0, calculatorDisplay.innerHTML.length-1);
//   });
// }
// deletePressed();

// function populateDisplay(number) {
//   calculatorDisplay.innerHTML += number;
// }

// function add(num1, num2) {
//   return num1 + num2;
// }

// function subtract(num1, num2) {
//   return num1 - num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function divide(num1, num2) {
//   return num1 / num2;
// }

// function operate(num1, num2, operator) {
//   if (operator == "+") {
//     return add(num1, num2);
//   } else if (operator == "-") {
//     return subtract(num1, num2);
//   } else if (operator == "x") {
//     return multiply(num1, num2);
//   } else if (operator == "÷") {
//     return divide(num1, num2);
//   }
// }

let firstNum;
let secondNum;
let operator;

const calculatorTopDisplay = document.querySelector(".calculator-display-top");
const calculatorBottomDisplay = document.querySelector(".calculator-display-bottom");
const numbers = document.querySelectorAll(".number");

function numberPressed() {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
      if (numOrOperator == "number") {
        populateDisplay(numbers[i].innerHTML);
      } else {
        calculatorDisplay.innerHTML = "";
        populateDisplay(numbers[i].innerHTML);
        numOrOperator = "number";
      }
    });
  }
}
numberPressed();

function displayBottomScreen(number) {
    calculatorBottomDisplay.innerHTML += number;
}