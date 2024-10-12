let display = document.getElementById('display');
let currentOperator = null;
let firstOperand = null;
let memory = 0;

function clearDisplay() {
  display.value = '';
  currentOperator = null;
  firstOperand = null;
}

function appendNumber(number) {
  display.value += number;
}

function appendDecimal() {
  if (!display.value.includes('.')) {
    display.value += '.';
  }
}

function changeSign() {
  if (display.value) {
    display.value = parseFloat(display.value) * -1;
  }
}

function setOperator(operator) {
  if (display.value) {
    firstOperand = parseFloat(display.value);
    currentOperator = operator;
    display.value = '';
  }
}

function calculateResult() {
  if (currentOperator && firstOperand !== null && display.value) {
    let secondOperand = parseFloat(display.value);
    let result;

    switch (currentOperator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
    }

    display.value = result;
    firstOperand = null;
    currentOperator = null;
  }
}

function calculateSquare() {
  if (display.value) {
    display.value = Math.pow(parseFloat(display.value), 2);
  }
}

function calculateSquareRoot() {
  if (display.value) {
    display.value = Math.sqrt(parseFloat(display.value));
  }
}

function memoryAdd() {
  if (display.value) {
    memory += parseFloat(display.value);
    display.value = '';
  }
}

function memorySubtract() {
  if (display.value) {
    memory -= parseFloat(display.value);
    display.value = '';
  }
}

function memoryRecall() {
  display.value = memory;
}
