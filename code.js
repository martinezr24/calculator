let firstNum = "";
let secondNum = "";
let operator = "";


const calculatorTopDisplay = document.querySelector(".calculator-display-top");
const calculatorBottomDisplay = document.querySelector(".calculator-display-bottom");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const deleteButton = document.querySelector(".delete");
const clear = document.querySelector(".clear");

function numberPressed() {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
      displayBottomScreen(numbers[i].innerHTML);
    });
  }
}
numberPressed();

function operatorPressed() {
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", () => {
      if (calculatorBottomDisplay.innerHTML != "") { 
        calculatorTopDisplay.innerHTML = "";
        operator = operators[i].innerHTML;
        firstNum = calculatorBottomDisplay.innerHTML;
        calculatorBottomDisplay.innerHTML = "";
        displayTopScreen(firstNum);
        displayTopScreen(" " + operator + " ");
      }
    });
  }
}
operatorPressed()

function equalsPressed() {
  equals.addEventListener("click", () => {
    if (firstNum != "" && operator != "") {
      secondNum = calculatorBottomDisplay.innerHTML;
      displayTopScreen(secondNum);
      displayTopScreen(" " + equals.innerHTML);
      calculatorBottomDisplay.innerHTML = "";
      displayBottomScreen(operate(Number(firstNum), Number(secondNum), operator));
      firstNum = calculatorBottomDisplay.innerHTML;
      secondNum = "";
      operator = "";
    }
  });
}
equalsPressed();

function clearPressed() {
  clear.addEventListener("click", () => {
    calculatorBottomDisplay.innerHTML = "";
    calculatorTopDisplay.innerHTML = "";
    firstNum = "";
    secondNum = "";
    operator = "";
  });
}
clearPressed();

function deletePressed() {
  deleteButton.addEventListener("click", () => {
    calculatorBottomDisplay.innerHTML = calculatorBottomDisplay.innerHTML.substring(0, calculatorBottomDisplay.innerHTML.length-1);
  });
}
deletePressed();


function displayBottomScreen(number) {
    calculatorBottomDisplay.innerHTML += number;
}
function displayTopScreen(button) {
    calculatorTopDisplay.innerHTML += button;
}

function operate(firstNum, secondNum, operator) {
  if (operator == "+") {
    return firstNum + secondNum;
  } else if (operator == "-") {
    return firstNum - secondNum;
  } else if (operator == "x") {
    return +(firstNum * secondNum).toFixed(4);
  } else if (operator == "÷") {
    return +(firstNum / secondNum).toFixed(4);
  }
}